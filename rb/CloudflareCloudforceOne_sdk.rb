# CloudflareCloudforceOne SDK

require_relative 'utility/struct/voxgig_struct'
require_relative 'core/utility_type'
require_relative 'core/spec'
require_relative 'core/helpers'

# Load utility registration
require_relative 'utility/register'

# Load config and features
require_relative 'config'
require_relative 'feature/base_feature'
require_relative 'features'

# Load typed models (Struct value objects).
require_relative 'CloudflareCloudforceOne_types'


class CloudflareCloudforceOneSDK
  attr_accessor :mode, :features, :options

  def initialize(options = {})
    @mode = "live"
    @features = []
    @options = nil

    utility = CloudflareCloudforceOneUtility.new
    @_utility = utility

    config = CloudflareCloudforceOneConfig.shared_config

    @_rootctx = utility.make_context.call({
      "client" => self,
      "utility" => utility,
      "config" => config,
      "options" => options || {},
      "shared" => {},
    }, nil)

    @options = utility.make_options.call(@_rootctx)

    if VoxgigStruct.getpath(@options, "feature.test.active") == true
      @mode = "test"
    end

    @_rootctx.options = @options

    # Add features in the resolved order (make_options puts an explicit array
    # order first, else defaults to test-first). Ordering matters: the `test`
    # feature installs the base mock transport and the transport features
    # (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
    # must be added before them to sit at the base of the chain.
    feature_opts = CloudflareCloudforceOneHelpers.to_map(VoxgigStruct.getprop(@options, "feature"))
    if feature_opts
      featureorder = VoxgigStruct.getpath(@options, "__derived__.featureorder")
      if featureorder.is_a?(Array)
        featureorder.each do |fname|
          fopts = CloudflareCloudforceOneHelpers.to_map(feature_opts[fname])
          if fopts && fopts["active"] == true
            utility.feature_add.call(@_rootctx, CloudflareCloudforceOneFeatures.make_feature(fname))
          end
        end
      end
    end

    # Add extension features.
    extend_val = VoxgigStruct.getprop(@options, "extend")
    if extend_val.is_a?(Array)
      extend_val.each do |f|
        if f.respond_to?(:get_name)
          utility.feature_add.call(@_rootctx, f)
        end
      end
    end

    # Initialize features.
    @features.each do |f|
      utility.feature_init.call(@_rootctx, f)
    end

    utility.feature_hook.call(@_rootctx, "PostConstruct")
  end

  def options_map
    out = VoxgigStruct.clone(@options)
    out.is_a?(Hash) ? out : {}
  end

  def get_utility
    CloudflareCloudforceOneUtility.copy(@_utility)
  end

  def get_root_ctx
    @_rootctx
  end

  def prepare(fetchargs = {})
    utility = @_utility
    fetchargs ||= {}

    ctrl = CloudflareCloudforceOneHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "prepare",
      "ctrl" => ctrl,
    }, @_rootctx)

    opts = @options
    path = VoxgigStruct.getprop(fetchargs, "path") || ""
    path = "" unless path.is_a?(String)
    method_val = VoxgigStruct.getprop(fetchargs, "method") || "GET"
    method_val = "GET" unless method_val.is_a?(String)
    params = CloudflareCloudforceOneHelpers.to_map(VoxgigStruct.getprop(fetchargs, "params")) || {}
    query = CloudflareCloudforceOneHelpers.to_map(VoxgigStruct.getprop(fetchargs, "query")) || {}
    headers = utility.prepare_headers.call(ctx)

    base = VoxgigStruct.getprop(opts, "base") || ""
    base = "" unless base.is_a?(String)
    prefix = VoxgigStruct.getprop(opts, "prefix") || ""
    prefix = "" unless prefix.is_a?(String)
    suffix = VoxgigStruct.getprop(opts, "suffix") || ""
    suffix = "" unless suffix.is_a?(String)

    ctx.spec = CloudflareCloudforceOneSpec.new({
      "base" => base, "prefix" => prefix, "suffix" => suffix,
      "path" => path, "method" => method_val,
      "params" => params, "query" => query, "headers" => headers,
      "body" => VoxgigStruct.getprop(fetchargs, "body"),
      "step" => "start",
    })

    # Merge user-provided headers.
    uh = VoxgigStruct.getprop(fetchargs, "headers")
    if uh.is_a?(Hash)
      uh.each { |k, v| ctx.spec.headers[k] = v }
    end

    _, err = utility.prepare_auth.call(ctx)
    raise err if err

    # make_fetch_def returns a (fetchdef, err) tuple; destructure it and
    # return just the fetchdef Hash (raising on error) so callers — including
    # direct(), which indexes fetchdef["url"] — receive a Hash, mirroring the
    # ts/py prepare().
    fetchdef, fd_err = utility.make_fetch_def.call(ctx)
    raise fd_err if fd_err

    fetchdef
  end

  # Raw endpoint access is operator-controllable, like every entity op.
  # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  # either one reaches the same endpoint.
  def direct(fetchargs = {})
    return op_denied("direct") unless op_allowed?("direct")

    raw_request(fetchargs)
  end

  # Is this raw-access op permitted by the SDK's allow.op option?
  def op_allowed?(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    allow_op.is_a?(String) && allow_op.include?(op)
  end

  def op_denied(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    {
      "ok" => false,
      "err" => CloudflareCloudforceOneError.new(
        "#{op}_allow",
        "CloudflareCloudforceOneSDK: #{op}: operation not allowed by" \
        " SDK option allow.op value: \"#{allow_op}\""),
    }
  end

  # Ungated request path shared by direct and graphql, each of which checks
  # its own allow.op token first. Separate, rather than a flag on fetchargs:
  # a caller-supplied marker would let anyone opt straight back out of the
  # gate by passing it.
  def raw_request(fetchargs = {})
    utility = @_utility

    # direct() is the raw-HTTP escape hatch: it always returns a result hash
    # ({ "ok" => ..., ... }) and never raises. prepare() raises on error, so
    # trap that and surface it in the hash.
    begin
      fetchdef = prepare(fetchargs)
    rescue CloudflareCloudforceOneError => err
      return { "ok" => false, "err" => err }
    end

    fetchargs ||= {}
    ctrl = CloudflareCloudforceOneHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "direct",
      "ctrl" => ctrl,
    }, @_rootctx)

    url = fetchdef["url"] || ""
    fetched, fetch_err = utility.fetcher.call(ctx, url, fetchdef)

    return { "ok" => false, "err" => fetch_err } if fetch_err

    if fetched.nil?
      return {
        "ok" => false,
        "err" => ctx.make_error("direct_no_response", "response: undefined"),
      }
    end

    if fetched.is_a?(Hash)
      status = CloudflareCloudforceOneHelpers.to_int(VoxgigStruct.getprop(fetched, "status"))
      headers = VoxgigStruct.getprop(fetched, "headers") || {}

      # No-body responses (204, 304) and explicit zero content-length must
      # skip JSON parsing — calling json() on an empty body errors.
      content_length = headers.is_a?(Hash) ? headers["content-length"] : nil
      no_body = status == 204 || status == 304 || content_length.to_s == "0"

      json_data = nil
      unless no_body
        jf = VoxgigStruct.getprop(fetched, "json")
        if jf.is_a?(Proc)
          begin
            json_data = jf.call
          rescue StandardError
            # Non-JSON body — leave data nil, keep status/headers.
            json_data = nil
          end
        end
      end

      return {
        "ok" => status >= 200 && status < 300,
        "status" => status,
        "headers" => headers,
        "data" => json_data,
      }
    end

    return {
      "ok" => false,
      "err" => ctx.make_error("direct_invalid", "invalid response type"),
    }
  end

  # Raw GraphQL access: the pressure valve that makes the generated surface's
  # deliberate omissions (per-call selection sets, typed filter builders,
  # batching, subscriptions) livable — the whole schema stays reachable.
  #
  # Thin wrapper over the same prepare/fetch path direct uses, with the one
  # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
  # as a top-level `errors` array, so status alone would report a failed
  # query as ok.
  #
  # NOTE: like direct, this bypasses the feature pipeline — no retry,
  # ratelimit or paging features apply.
  def graphql(query, variables = nil, ctrl = nil)
    return op_denied("graphql") unless op_allowed?("graphql")

    res = raw_request({
      "method" => "POST",
      "headers" => { "content-type" => "application/json" },
      "body" => { "query" => query, "variables" => variables || {} },
      "ctrl" => ctrl || {},
    })

    # Errors are read BEFORE any status check: a GraphQL parse or validation
    # failure comes back as HTTP 400 carrying the standard { errors: [...] }
    # body, and the raw path represents a non-2xx as ok:false with no err —
    # so returning early on status would discard the server's own
    # diagnostics, which are the only useful part of that response.
    errors = VoxgigStruct.getpath(res, "data.errors")

    if errors.is_a?(Array) && !errors.empty?
      first = errors[0].is_a?(Hash) ? errors[0] : {}
      msg = first["message"]
      msg = "graphql error" if msg.nil? || msg.to_s.empty?
      res["ok"] = false
      res["err"] = CloudflareCloudforceOneError.new(
        "graphql_error", "CloudflareCloudforceOneSDK: graphql: #{msg}")
      res["graphql"] = errors
    end

    res
  end


  # Canonical facade: client.Attacker.list / client.Attacker.load({ "id" => ... })
  def Attacker(data = nil)
    require_relative 'entity/attacker_entity'
    AttackerEntity.new(self, data)
  end


  # Canonical facade: client.BinDb.list / client.BinDb.load({ "id" => ... })
  def BinDb(data = nil)
    require_relative 'entity/bin_db_entity'
    BinDbEntity.new(self, data)
  end


  # Canonical facade: client.BrandProtection.list / client.BrandProtection.load({ "id" => ... })
  def BrandProtection(data = nil)
    require_relative 'entity/brand_protection_entity'
    BrandProtectionEntity.new(self, data)
  end


  # Canonical facade: client.Category.list / client.Category.load({ "id" => ... })
  def Category(data = nil)
    require_relative 'entity/category_entity'
    CategoryEntity.new(self, data)
  end


  # Canonical facade: client.CloudforceOneAccountExemption.list / client.CloudforceOneAccountExemption.load({ "id" => ... })
  def CloudforceOneAccountExemption(data = nil)
    require_relative 'entity/cloudforce_one_account_exemption_entity'
    CloudforceOneAccountExemptionEntity.new(self, data)
  end


  # Canonical facade: client.CloudforceOneDeleteAll.list / client.CloudforceOneDeleteAll.load({ "id" => ... })
  def CloudforceOneDeleteAll(data = nil)
    require_relative 'entity/cloudforce_one_delete_all_entity'
    CloudforceOneDeleteAllEntity.new(self, data)
  end


  # Canonical facade: client.CloudforceOneEditApproval.list / client.CloudforceOneEditApproval.load({ "id" => ... })
  def CloudforceOneEditApproval(data = nil)
    require_relative 'entity/cloudforce_one_edit_approval_entity'
    CloudforceOneEditApprovalEntity.new(self, data)
  end


  # Canonical facade: client.CloudforceOneEmailRuleValidation.list / client.CloudforceOneEmailRuleValidation.load({ "id" => ... })
  def CloudforceOneEmailRuleValidation(data = nil)
    require_relative 'entity/cloudforce_one_email_rule_validation_entity'
    CloudforceOneEmailRuleValidationEntity.new(self, data)
  end


  # Canonical facade: client.CloudforceOneEmailRulesList.list / client.CloudforceOneEmailRulesList.load({ "id" => ... })
  def CloudforceOneEmailRulesList(data = nil)
    require_relative 'entity/cloudforce_one_email_rules_list_entity'
    CloudforceOneEmailRulesListEntity.new(self, data)
  end


  # Canonical facade: client.CloudforceOneRequestsApiResponseCommon.list / client.CloudforceOneRequestsApiResponseCommon.load({ "id" => ... })
  def CloudforceOneRequestsApiResponseCommon(data = nil)
    require_relative 'entity/cloudforce_one_requests_api_response_common_entity'
    CloudforceOneRequestsApiResponseCommonEntity.new(self, data)
  end


  # Canonical facade: client.CloudforceOneRule.list / client.CloudforceOneRule.load({ "id" => ... })
  def CloudforceOneRule(data = nil)
    require_relative 'entity/cloudforce_one_rule_entity'
    CloudforceOneRuleEntity.new(self, data)
  end


  # Canonical facade: client.CloudforceOneRuleApprovalDetail.list / client.CloudforceOneRuleApprovalDetail.load({ "id" => ... })
  def CloudforceOneRuleApprovalDetail(data = nil)
    require_relative 'entity/cloudforce_one_rule_approval_detail_entity'
    CloudforceOneRuleApprovalDetailEntity.new(self, data)
  end


  # Canonical facade: client.CloudforceOneRuleApprovalsList.list / client.CloudforceOneRuleApprovalsList.load({ "id" => ... })
  def CloudforceOneRuleApprovalsList(data = nil)
    require_relative 'entity/cloudforce_one_rule_approvals_list_entity'
    CloudforceOneRuleApprovalsListEntity.new(self, data)
  end


  # Canonical facade: client.CloudforceOneRulePreview.list / client.CloudforceOneRulePreview.load({ "id" => ... })
  def CloudforceOneRulePreview(data = nil)
    require_relative 'entity/cloudforce_one_rule_preview_entity'
    CloudforceOneRulePreviewEntity.new(self, data)
  end


  # Canonical facade: client.CloudforceOneRulesPreviewList.list / client.CloudforceOneRulesPreviewList.load({ "id" => ... })
  def CloudforceOneRulesPreviewList(data = nil)
    require_relative 'entity/cloudforce_one_rules_preview_list_entity'
    CloudforceOneRulesPreviewListEntity.new(self, data)
  end


  # Canonical facade: client.CloudforceOneRulesSearch.list / client.CloudforceOneRulesSearch.load({ "id" => ... })
  def CloudforceOneRulesSearch(data = nil)
    require_relative 'entity/cloudforce_one_rules_search_entity'
    CloudforceOneRulesSearchEntity.new(self, data)
  end


  # Canonical facade: client.CloudforceOneStat.list / client.CloudforceOneStat.load({ "id" => ... })
  def CloudforceOneStat(data = nil)
    require_relative 'entity/cloudforce_one_stat_entity'
    CloudforceOneStatEntity.new(self, data)
  end


  # Canonical facade: client.CloudforceOneSuccess.list / client.CloudforceOneSuccess.load({ "id" => ... })
  def CloudforceOneSuccess(data = nil)
    require_relative 'entity/cloudforce_one_success_entity'
    CloudforceOneSuccessEntity.new(self, data)
  end


  # Canonical facade: client.CloudforceOneTreeNode.list / client.CloudforceOneTreeNode.load({ "id" => ... })
  def CloudforceOneTreeNode(data = nil)
    require_relative 'entity/cloudforce_one_tree_node_entity'
    CloudforceOneTreeNodeEntity.new(self, data)
  end


  # Canonical facade: client.CloudforceOneValidation.list / client.CloudforceOneValidation.load({ "id" => ... })
  def CloudforceOneValidation(data = nil)
    require_relative 'entity/cloudforce_one_validation_entity'
    CloudforceOneValidationEntity.new(self, data)
  end


  # Canonical facade: client.Collection.list / client.Collection.load({ "id" => ... })
  def Collection(data = nil)
    require_relative 'entity/collection_entity'
    CollectionEntity.new(self, data)
  end


  # Canonical facade: client.CollectionsItem.list / client.CollectionsItem.load({ "id" => ... })
  def CollectionsItem(data = nil)
    require_relative 'entity/collections_item_entity'
    CollectionsItemEntity.new(self, data)
  end


  # Canonical facade: client.Country.list / client.Country.load({ "id" => ... })
  def Country(data = nil)
    require_relative 'entity/country_entity'
    CountryEntity.new(self, data)
  end


  # Canonical facade: client.DashboardAsset.list / client.DashboardAsset.load({ "id" => ... })
  def DashboardAsset(data = nil)
    require_relative 'entity/dashboard_asset_entity'
    DashboardAssetEntity.new(self, data)
  end


  # Canonical facade: client.DashboardUser.list / client.DashboardUser.load({ "id" => ... })
  def DashboardUser(data = nil)
    require_relative 'entity/dashboard_user_entity'
    DashboardUserEntity.new(self, data)
  end


  # Canonical facade: client.Dataset.list / client.Dataset.load({ "id" => ... })
  def Dataset(data = nil)
    require_relative 'entity/dataset_entity'
    DatasetEntity.new(self, data)
  end


  # Canonical facade: client.Event.list / client.Event.load({ "id" => ... })
  def Event(data = nil)
    require_relative 'entity/event_entity'
    EventEntity.new(self, data)
  end


  # Canonical facade: client.Group.list / client.Group.load({ "id" => ... })
  def Group(data = nil)
    require_relative 'entity/group_entity'
    GroupEntity.new(self, data)
  end


  # Canonical facade: client.Indicator.list / client.Indicator.load({ "id" => ... })
  def Indicator(data = nil)
    require_relative 'entity/indicator_entity'
    IndicatorEntity.new(self, data)
  end


  # Canonical facade: client.IndicatorType.list / client.IndicatorType.load({ "id" => ... })
  def IndicatorType(data = nil)
    require_relative 'entity/indicator_type_entity'
    IndicatorTypeEntity.new(self, data)
  end


  # Canonical facade: client.Permission.list / client.Permission.load({ "id" => ... })
  def Permission(data = nil)
    require_relative 'entity/permission_entity'
    PermissionEntity.new(self, data)
  end


  # Canonical facade: client.Priority.list / client.Priority.load({ "id" => ... })
  def Priority(data = nil)
    require_relative 'entity/priority_entity'
    PriorityEntity.new(self, data)
  end


  # Canonical facade: client.PriorityIntelligence.list / client.PriorityIntelligence.load({ "id" => ... })
  def PriorityIntelligence(data = nil)
    require_relative 'entity/priority_intelligence_entity'
    PriorityIntelligenceEntity.new(self, data)
  end


  # Canonical facade: client.PriorityIntelligenceRequirement.list / client.PriorityIntelligenceRequirement.load({ "id" => ... })
  def PriorityIntelligenceRequirement(data = nil)
    require_relative 'entity/priority_intelligence_requirement_entity'
    PriorityIntelligenceRequirementEntity.new(self, data)
  end


  # Canonical facade: client.PriorityIntelligenceRequirementsPir.list / client.PriorityIntelligenceRequirementsPir.load({ "id" => ... })
  def PriorityIntelligenceRequirementsPir(data = nil)
    require_relative 'entity/priority_intelligence_requirements__pir_entity'
    PriorityIntelligenceRequirementsPirEntity.new(self, data)
  end


  # Canonical facade: client.PublicCredentialMonitor.list / client.PublicCredentialMonitor.load({ "id" => ... })
  def PublicCredentialMonitor(data = nil)
    require_relative 'entity/public_credential_monitor_entity'
    PublicCredentialMonitorEntity.new(self, data)
  end


  # Canonical facade: client.Request.list / client.Request.load({ "id" => ... })
  def Request(data = nil)
    require_relative 'entity/request_entity'
    RequestEntity.new(self, data)
  end


  # Canonical facade: client.RequestForInformationRfi.list / client.RequestForInformationRfi.load({ "id" => ... })
  def RequestForInformationRfi(data = nil)
    require_relative 'entity/request_for_information__rfi_entity'
    RequestForInformationRfiEntity.new(self, data)
  end


  # Canonical facade: client.RequestsDashboard.list / client.RequestsDashboard.load({ "id" => ... })
  def RequestsDashboard(data = nil)
    require_relative 'entity/requests_dashboard_entity'
    RequestsDashboardEntity.new(self, data)
  end


  # Canonical facade: client.Rfi.list / client.Rfi.load({ "id" => ... })
  def Rfi(data = nil)
    require_relative 'entity/rfi_entity'
    RfiEntity.new(self, data)
  end


  # Canonical facade: client.RfiMessage.list / client.RfiMessage.load({ "id" => ... })
  def RfiMessage(data = nil)
    require_relative 'entity/rfi_message_entity'
    RfiMessageEntity.new(self, data)
  end


  # Canonical facade: client.Rule.list / client.Rule.load({ "id" => ... })
  def Rule(data = nil)
    require_relative 'entity/rule_entity'
    RuleEntity.new(self, data)
  end


  # Canonical facade: client.Scan.list / client.Scan.load({ "id" => ... })
  def Scan(data = nil)
    require_relative 'entity/scan_entity'
    ScanEntity.new(self, data)
  end


  # Canonical facade: client.Tag.list / client.Tag.load({ "id" => ... })
  def Tag(data = nil)
    require_relative 'entity/tag_entity'
    TagEntity.new(self, data)
  end


  # Canonical facade: client.TagCategory.list / client.TagCategory.load({ "id" => ... })
  def TagCategory(data = nil)
    require_relative 'entity/tag_category_entity'
    TagCategoryEntity.new(self, data)
  end


  # Canonical facade: client.TargetIndustry.list / client.TargetIndustry.load({ "id" => ... })
  def TargetIndustry(data = nil)
    require_relative 'entity/target_industry_entity'
    TargetIndustryEntity.new(self, data)
  end


  # Canonical facade: client.ThreatSignal.list / client.ThreatSignal.load({ "id" => ... })
  def ThreatSignal(data = nil)
    require_relative 'entity/threat_signal_entity'
    ThreatSignalEntity.new(self, data)
  end



  def self.test(testopts = nil, sdkopts = nil)
    sdkopts = sdkopts || {}
    sdkopts = VoxgigStruct.clone(sdkopts)
    sdkopts = {} unless sdkopts.is_a?(Hash)

    testopts = testopts || {}
    testopts = VoxgigStruct.clone(testopts)
    testopts = {} unless testopts.is_a?(Hash)
    testopts["active"] = true

    VoxgigStruct.setpath(sdkopts, "feature.test", testopts)

    sdk = CloudflareCloudforceOneSDK.new(sdkopts)
    sdk.mode = "test"
    sdk
  end
end
