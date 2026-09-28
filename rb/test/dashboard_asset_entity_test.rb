# DashboardAsset entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareCloudforceOne_sdk"
require_relative "runner"

class DashboardAssetEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareCloudforceOneSDK.test(nil, nil)
    ent = testsdk.DashboardAsset(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = dashboard_asset_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "dashboard_asset." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_CLOUDFORCE_ONE_TEST_DASHBOARD_ASSET_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    dashboard_asset_ref01_ent = client.DashboardAsset(nil)
    dashboard_asset_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.dashboard_asset"), "dashboard_asset_ref01"))
    dashboard_asset_ref01_data["account_id"] = setup[:idmap]["account01"]
    dashboard_asset_ref01_data["project_type"] = setup[:idmap]["project_type01"]
    dashboard_asset_ref01_data["request_id"] = setup[:idmap]["request01"]

    dashboard_asset_ref01_data_result = dashboard_asset_ref01_ent.create(dashboard_asset_ref01_data, nil)
    dashboard_asset_ref01_data = Helpers.to_map(dashboard_asset_ref01_data_result.respond_to?(:data_get) ? dashboard_asset_ref01_data_result.data_get : dashboard_asset_ref01_data_result)
    assert !dashboard_asset_ref01_data.nil?
    assert !dashboard_asset_ref01_data["id"].nil?

    # LOAD
    dashboard_asset_ref01_match_dt0 = {
      "id" => dashboard_asset_ref01_data["id"],
    }
    dashboard_asset_ref01_data_dt0_loaded = dashboard_asset_ref01_ent.load(dashboard_asset_ref01_match_dt0, nil)
    dashboard_asset_ref01_data_dt0_load_result = Helpers.to_map(dashboard_asset_ref01_data_dt0_loaded.respond_to?(:data_get) ? dashboard_asset_ref01_data_dt0_loaded.data_get : dashboard_asset_ref01_data_dt0_loaded)
    assert !dashboard_asset_ref01_data_dt0_load_result.nil?
    assert_equal dashboard_asset_ref01_data_dt0_load_result["id"], dashboard_asset_ref01_data["id"]

  end
end

def dashboard_asset_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "dashboard_asset", "DashboardAssetTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareCloudforceOneSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["dashboard_asset01", "dashboard_asset02", "dashboard_asset03", "request01", "request02", "request03", "account01", "project_type01"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["CLOUDFLARE_CLOUDFORCE_ONE_TEST_DASHBOARD_ASSET_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_CLOUDFORCE_ONE_TEST_DASHBOARD_ASSET_ENTID" => idmap,
    "CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_CLOUDFORCE_ONE_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_CLOUDFORCE_ONE_TEST_DASHBOARD_ASSET_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
        "apikey" => env["CLOUDFLARE_CLOUDFORCE_ONE_APIKEY"],
      },
      extra || {},
    ])
    client = CloudflareCloudforceOneSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
