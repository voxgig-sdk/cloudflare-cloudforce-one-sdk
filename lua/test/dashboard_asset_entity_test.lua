-- DashboardAsset entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("cloudflare-cloudforce-one_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("DashboardAssetEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:DashboardAsset(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = dashboard_asset_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "dashboard_asset." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_CLOUDFORCE_ONE_TEST_DASHBOARD_ASSET_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local dashboard_asset_ref01_ent = client:DashboardAsset(nil)
    local dashboard_asset_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.dashboard_asset"), "dashboard_asset_ref01"))
    dashboard_asset_ref01_data["account_id"] = setup.idmap["account01"]
    dashboard_asset_ref01_data["project_type"] = setup.idmap["project_type01"]
    dashboard_asset_ref01_data["request_id"] = setup.idmap["request01"]

    local dashboard_asset_ref01_data_result, err = dashboard_asset_ref01_ent:create(dashboard_asset_ref01_data, nil)
    assert.is_nil(err)
    dashboard_asset_ref01_data = helpers.to_map(type(dashboard_asset_ref01_data_result) == 'table' and dashboard_asset_ref01_data_result.data_get and dashboard_asset_ref01_data_result:data_get() or dashboard_asset_ref01_data_result)
    assert.is_not_nil(dashboard_asset_ref01_data)
    assert.is_not_nil(dashboard_asset_ref01_data["id"])

    -- LOAD
    local dashboard_asset_ref01_match_dt0 = {
      id = dashboard_asset_ref01_data["id"],
    }
    local dashboard_asset_ref01_data_dt0_loaded, err = dashboard_asset_ref01_ent:load(dashboard_asset_ref01_match_dt0, nil)
    assert.is_nil(err)
    local dashboard_asset_ref01_data_dt0_load_result = helpers.to_map(type(dashboard_asset_ref01_data_dt0_loaded) == 'table' and dashboard_asset_ref01_data_dt0_loaded.data_get and dashboard_asset_ref01_data_dt0_loaded:data_get() or dashboard_asset_ref01_data_dt0_loaded)
    assert.is_not_nil(dashboard_asset_ref01_data_dt0_load_result)
    assert.are.equal(dashboard_asset_ref01_data_dt0_load_result["id"], dashboard_asset_ref01_data["id"])

  end)
end)

function dashboard_asset_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/dashboard_asset/DashboardAssetTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read dashboard_asset test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "dashboard_asset01", "dashboard_asset02", "dashboard_asset03", "request01", "request02", "request03", "account01", "project_type01" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("CLOUDFLARE_CLOUDFORCE_ONE_TEST_DASHBOARD_ASSET_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["CLOUDFLARE_CLOUDFORCE_ONE_TEST_DASHBOARD_ASSET_ENTID"] = idmap,
    ["CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE"] = "FALSE",
    ["CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN"] = "FALSE",
    ["CLOUDFLARE_CLOUDFORCE_ONE_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["CLOUDFLARE_CLOUDFORCE_ONE_TEST_DASHBOARD_ASSET_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end

  if env["CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
        apikey = env["CLOUDFLARE_CLOUDFORCE_ONE_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
