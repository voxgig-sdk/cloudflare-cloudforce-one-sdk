-- CloudflareCloudforceOne SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("cloudflare-cloudforce-one_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local CloudflareCloudforceOneSDK = {}
CloudflareCloudforceOneSDK.__index = CloudflareCloudforceOneSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

CloudflareCloudforceOneSDK._make_feature = _make_feature


function CloudflareCloudforceOneSDK.new(options)
  local self = setmetatable({}, CloudflareCloudforceOneSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: test


  return self
end


function CloudflareCloudforceOneSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function CloudflareCloudforceOneSDK:get_utility()
  return Utility.copy(self._utility)
end


function CloudflareCloudforceOneSDK:get_root_ctx()
  return self._rootctx
end


function CloudflareCloudforceOneSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function CloudflareCloudforceOneSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function CloudflareCloudforceOneSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function CloudflareCloudforceOneSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "CloudflareCloudforceOneSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function CloudflareCloudforceOneSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function CloudflareCloudforceOneSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "CloudflareCloudforceOneSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:Attacker():list() / client:Attacker():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:Attacker(data)
  local EntityMod = require("entity.attacker_entity")
  if data == nil then
    if self._attacker == nil then
      self._attacker = EntityMod.new(self, nil)
    end
    return self._attacker
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BinDb():list() / client:BinDb():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:BinDb(data)
  local EntityMod = require("entity.bin_db_entity")
  if data == nil then
    if self._bin_db == nil then
      self._bin_db = EntityMod.new(self, nil)
    end
    return self._bin_db
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BrandProtection():list() / client:BrandProtection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:BrandProtection(data)
  local EntityMod = require("entity.brand_protection_entity")
  if data == nil then
    if self._brand_protection == nil then
      self._brand_protection = EntityMod.new(self, nil)
    end
    return self._brand_protection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Category():list() / client:Category():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:Category(data)
  local EntityMod = require("entity.category_entity")
  if data == nil then
    if self._category == nil then
      self._category = EntityMod.new(self, nil)
    end
    return self._category
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CloudforceOneAccountExemption():list() / client:CloudforceOneAccountExemption():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:CloudforceOneAccountExemption(data)
  local EntityMod = require("entity.cloudforce_one_account_exemption_entity")
  if data == nil then
    if self._cloudforce_one_account_exemption == nil then
      self._cloudforce_one_account_exemption = EntityMod.new(self, nil)
    end
    return self._cloudforce_one_account_exemption
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CloudforceOneDeleteAll():list() / client:CloudforceOneDeleteAll():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:CloudforceOneDeleteAll(data)
  local EntityMod = require("entity.cloudforce_one_delete_all_entity")
  if data == nil then
    if self._cloudforce_one_delete_all == nil then
      self._cloudforce_one_delete_all = EntityMod.new(self, nil)
    end
    return self._cloudforce_one_delete_all
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CloudforceOneEditApproval():list() / client:CloudforceOneEditApproval():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:CloudforceOneEditApproval(data)
  local EntityMod = require("entity.cloudforce_one_edit_approval_entity")
  if data == nil then
    if self._cloudforce_one_edit_approval == nil then
      self._cloudforce_one_edit_approval = EntityMod.new(self, nil)
    end
    return self._cloudforce_one_edit_approval
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CloudforceOneEmailRuleValidation():list() / client:CloudforceOneEmailRuleValidation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:CloudforceOneEmailRuleValidation(data)
  local EntityMod = require("entity.cloudforce_one_email_rule_validation_entity")
  if data == nil then
    if self._cloudforce_one_email_rule_validation == nil then
      self._cloudforce_one_email_rule_validation = EntityMod.new(self, nil)
    end
    return self._cloudforce_one_email_rule_validation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CloudforceOneEmailRulesList():list() / client:CloudforceOneEmailRulesList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:CloudforceOneEmailRulesList(data)
  local EntityMod = require("entity.cloudforce_one_email_rules_list_entity")
  if data == nil then
    if self._cloudforce_one_email_rules_list == nil then
      self._cloudforce_one_email_rules_list = EntityMod.new(self, nil)
    end
    return self._cloudforce_one_email_rules_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CloudforceOneRequestsApiResponseCommon():list() / client:CloudforceOneRequestsApiResponseCommon():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:CloudforceOneRequestsApiResponseCommon(data)
  local EntityMod = require("entity.cloudforce_one_requests_api_response_common_entity")
  if data == nil then
    if self._cloudforce_one_requests_api_response_common == nil then
      self._cloudforce_one_requests_api_response_common = EntityMod.new(self, nil)
    end
    return self._cloudforce_one_requests_api_response_common
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CloudforceOneRule():list() / client:CloudforceOneRule():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:CloudforceOneRule(data)
  local EntityMod = require("entity.cloudforce_one_rule_entity")
  if data == nil then
    if self._cloudforce_one_rule == nil then
      self._cloudforce_one_rule = EntityMod.new(self, nil)
    end
    return self._cloudforce_one_rule
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CloudforceOneRuleApprovalDetail():list() / client:CloudforceOneRuleApprovalDetail():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:CloudforceOneRuleApprovalDetail(data)
  local EntityMod = require("entity.cloudforce_one_rule_approval_detail_entity")
  if data == nil then
    if self._cloudforce_one_rule_approval_detail == nil then
      self._cloudforce_one_rule_approval_detail = EntityMod.new(self, nil)
    end
    return self._cloudforce_one_rule_approval_detail
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CloudforceOneRuleApprovalsList():list() / client:CloudforceOneRuleApprovalsList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:CloudforceOneRuleApprovalsList(data)
  local EntityMod = require("entity.cloudforce_one_rule_approvals_list_entity")
  if data == nil then
    if self._cloudforce_one_rule_approvals_list == nil then
      self._cloudforce_one_rule_approvals_list = EntityMod.new(self, nil)
    end
    return self._cloudforce_one_rule_approvals_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CloudforceOneRulePreview():list() / client:CloudforceOneRulePreview():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:CloudforceOneRulePreview(data)
  local EntityMod = require("entity.cloudforce_one_rule_preview_entity")
  if data == nil then
    if self._cloudforce_one_rule_preview == nil then
      self._cloudforce_one_rule_preview = EntityMod.new(self, nil)
    end
    return self._cloudforce_one_rule_preview
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CloudforceOneRulesPreviewList():list() / client:CloudforceOneRulesPreviewList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:CloudforceOneRulesPreviewList(data)
  local EntityMod = require("entity.cloudforce_one_rules_preview_list_entity")
  if data == nil then
    if self._cloudforce_one_rules_preview_list == nil then
      self._cloudforce_one_rules_preview_list = EntityMod.new(self, nil)
    end
    return self._cloudforce_one_rules_preview_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CloudforceOneRulesSearch():list() / client:CloudforceOneRulesSearch():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:CloudforceOneRulesSearch(data)
  local EntityMod = require("entity.cloudforce_one_rules_search_entity")
  if data == nil then
    if self._cloudforce_one_rules_search == nil then
      self._cloudforce_one_rules_search = EntityMod.new(self, nil)
    end
    return self._cloudforce_one_rules_search
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CloudforceOneStat():list() / client:CloudforceOneStat():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:CloudforceOneStat(data)
  local EntityMod = require("entity.cloudforce_one_stat_entity")
  if data == nil then
    if self._cloudforce_one_stat == nil then
      self._cloudforce_one_stat = EntityMod.new(self, nil)
    end
    return self._cloudforce_one_stat
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CloudforceOneSuccess():list() / client:CloudforceOneSuccess():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:CloudforceOneSuccess(data)
  local EntityMod = require("entity.cloudforce_one_success_entity")
  if data == nil then
    if self._cloudforce_one_success == nil then
      self._cloudforce_one_success = EntityMod.new(self, nil)
    end
    return self._cloudforce_one_success
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CloudforceOneTreeNode():list() / client:CloudforceOneTreeNode():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:CloudforceOneTreeNode(data)
  local EntityMod = require("entity.cloudforce_one_tree_node_entity")
  if data == nil then
    if self._cloudforce_one_tree_node == nil then
      self._cloudforce_one_tree_node = EntityMod.new(self, nil)
    end
    return self._cloudforce_one_tree_node
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CloudforceOneValidation():list() / client:CloudforceOneValidation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:CloudforceOneValidation(data)
  local EntityMod = require("entity.cloudforce_one_validation_entity")
  if data == nil then
    if self._cloudforce_one_validation == nil then
      self._cloudforce_one_validation = EntityMod.new(self, nil)
    end
    return self._cloudforce_one_validation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Collection():list() / client:Collection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:Collection(data)
  local EntityMod = require("entity.collection_entity")
  if data == nil then
    if self._collection == nil then
      self._collection = EntityMod.new(self, nil)
    end
    return self._collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CollectionsItem():list() / client:CollectionsItem():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:CollectionsItem(data)
  local EntityMod = require("entity.collections_item_entity")
  if data == nil then
    if self._collections_item == nil then
      self._collections_item = EntityMod.new(self, nil)
    end
    return self._collections_item
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Country():list() / client:Country():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:Country(data)
  local EntityMod = require("entity.country_entity")
  if data == nil then
    if self._country == nil then
      self._country = EntityMod.new(self, nil)
    end
    return self._country
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DashboardAsset():list() / client:DashboardAsset():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:DashboardAsset(data)
  local EntityMod = require("entity.dashboard_asset_entity")
  if data == nil then
    if self._dashboard_asset == nil then
      self._dashboard_asset = EntityMod.new(self, nil)
    end
    return self._dashboard_asset
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DashboardUser():list() / client:DashboardUser():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:DashboardUser(data)
  local EntityMod = require("entity.dashboard_user_entity")
  if data == nil then
    if self._dashboard_user == nil then
      self._dashboard_user = EntityMod.new(self, nil)
    end
    return self._dashboard_user
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Dataset():list() / client:Dataset():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:Dataset(data)
  local EntityMod = require("entity.dataset_entity")
  if data == nil then
    if self._dataset == nil then
      self._dataset = EntityMod.new(self, nil)
    end
    return self._dataset
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Event():list() / client:Event():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:Event(data)
  local EntityMod = require("entity.event_entity")
  if data == nil then
    if self._event == nil then
      self._event = EntityMod.new(self, nil)
    end
    return self._event
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Group():list() / client:Group():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:Group(data)
  local EntityMod = require("entity.group_entity")
  if data == nil then
    if self._group == nil then
      self._group = EntityMod.new(self, nil)
    end
    return self._group
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Indicator():list() / client:Indicator():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:Indicator(data)
  local EntityMod = require("entity.indicator_entity")
  if data == nil then
    if self._indicator == nil then
      self._indicator = EntityMod.new(self, nil)
    end
    return self._indicator
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IndicatorType():list() / client:IndicatorType():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:IndicatorType(data)
  local EntityMod = require("entity.indicator_type_entity")
  if data == nil then
    if self._indicator_type == nil then
      self._indicator_type = EntityMod.new(self, nil)
    end
    return self._indicator_type
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Permission():list() / client:Permission():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:Permission(data)
  local EntityMod = require("entity.permission_entity")
  if data == nil then
    if self._permission == nil then
      self._permission = EntityMod.new(self, nil)
    end
    return self._permission
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Priority():list() / client:Priority():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:Priority(data)
  local EntityMod = require("entity.priority_entity")
  if data == nil then
    if self._priority == nil then
      self._priority = EntityMod.new(self, nil)
    end
    return self._priority
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PriorityIntelligence():list() / client:PriorityIntelligence():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:PriorityIntelligence(data)
  local EntityMod = require("entity.priority_intelligence_entity")
  if data == nil then
    if self._priority_intelligence == nil then
      self._priority_intelligence = EntityMod.new(self, nil)
    end
    return self._priority_intelligence
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PriorityIntelligenceRequirement():list() / client:PriorityIntelligenceRequirement():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:PriorityIntelligenceRequirement(data)
  local EntityMod = require("entity.priority_intelligence_requirement_entity")
  if data == nil then
    if self._priority_intelligence_requirement == nil then
      self._priority_intelligence_requirement = EntityMod.new(self, nil)
    end
    return self._priority_intelligence_requirement
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PriorityIntelligenceRequirementsPir():list() / client:PriorityIntelligenceRequirementsPir():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:PriorityIntelligenceRequirementsPir(data)
  local EntityMod = require("entity.priority_intelligence_requirements__pir_entity")
  if data == nil then
    if self._priority_intelligence_requirements__pir == nil then
      self._priority_intelligence_requirements__pir = EntityMod.new(self, nil)
    end
    return self._priority_intelligence_requirements__pir
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PublicCredentialMonitor():list() / client:PublicCredentialMonitor():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:PublicCredentialMonitor(data)
  local EntityMod = require("entity.public_credential_monitor_entity")
  if data == nil then
    if self._public_credential_monitor == nil then
      self._public_credential_monitor = EntityMod.new(self, nil)
    end
    return self._public_credential_monitor
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Request():list() / client:Request():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:Request(data)
  local EntityMod = require("entity.request_entity")
  if data == nil then
    if self._request == nil then
      self._request = EntityMod.new(self, nil)
    end
    return self._request
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RequestForInformationRfi():list() / client:RequestForInformationRfi():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:RequestForInformationRfi(data)
  local EntityMod = require("entity.request_for_information__rfi_entity")
  if data == nil then
    if self._request_for_information__rfi == nil then
      self._request_for_information__rfi = EntityMod.new(self, nil)
    end
    return self._request_for_information__rfi
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RequestsDashboard():list() / client:RequestsDashboard():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:RequestsDashboard(data)
  local EntityMod = require("entity.requests_dashboard_entity")
  if data == nil then
    if self._requests_dashboard == nil then
      self._requests_dashboard = EntityMod.new(self, nil)
    end
    return self._requests_dashboard
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Rfi():list() / client:Rfi():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:Rfi(data)
  local EntityMod = require("entity.rfi_entity")
  if data == nil then
    if self._rfi == nil then
      self._rfi = EntityMod.new(self, nil)
    end
    return self._rfi
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RfiMessage():list() / client:RfiMessage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:RfiMessage(data)
  local EntityMod = require("entity.rfi_message_entity")
  if data == nil then
    if self._rfi_message == nil then
      self._rfi_message = EntityMod.new(self, nil)
    end
    return self._rfi_message
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Rule():list() / client:Rule():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:Rule(data)
  local EntityMod = require("entity.rule_entity")
  if data == nil then
    if self._rule == nil then
      self._rule = EntityMod.new(self, nil)
    end
    return self._rule
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Scan():list() / client:Scan():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:Scan(data)
  local EntityMod = require("entity.scan_entity")
  if data == nil then
    if self._scan == nil then
      self._scan = EntityMod.new(self, nil)
    end
    return self._scan
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Tag():list() / client:Tag():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:Tag(data)
  local EntityMod = require("entity.tag_entity")
  if data == nil then
    if self._tag == nil then
      self._tag = EntityMod.new(self, nil)
    end
    return self._tag
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TagCategory():list() / client:TagCategory():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:TagCategory(data)
  local EntityMod = require("entity.tag_category_entity")
  if data == nil then
    if self._tag_category == nil then
      self._tag_category = EntityMod.new(self, nil)
    end
    return self._tag_category
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TargetIndustry():list() / client:TargetIndustry():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:TargetIndustry(data)
  local EntityMod = require("entity.target_industry_entity")
  if data == nil then
    if self._target_industry == nil then
      self._target_industry = EntityMod.new(self, nil)
    end
    return self._target_industry
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ThreatSignal():list() / client:ThreatSignal():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareCloudforceOneSDK:ThreatSignal(data)
  local EntityMod = require("entity.threat_signal_entity")
  if data == nil then
    if self._threat_signal == nil then
      self._threat_signal = EntityMod.new(self, nil)
    end
    return self._threat_signal
  end
  return EntityMod.new(self, data)
end




function CloudflareCloudforceOneSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = CloudflareCloudforceOneSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return CloudflareCloudforceOneSDK
