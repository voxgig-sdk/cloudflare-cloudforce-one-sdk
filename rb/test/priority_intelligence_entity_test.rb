# PriorityIntelligence entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareCloudforceOne_sdk"
require_relative "runner"

class PriorityIntelligenceEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareCloudforceOneSDK.test(nil, nil)
    ent = testsdk.PriorityIntelligence(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = priority_intelligence_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "priority_intelligence." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_CLOUDFORCE_ONE_TEST_PRIORITY_INTELLIGENCE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    priority_intelligence_ref01_ent = client.PriorityIntelligence(nil)
    priority_intelligence_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.priority_intelligence"), "priority_intelligence_ref01"))
    priority_intelligence_ref01_data["account_id"] = setup[:idmap]["account01"]

    priority_intelligence_ref01_data_result = priority_intelligence_ref01_ent.create(priority_intelligence_ref01_data, nil)
    priority_intelligence_ref01_data = Helpers.to_map(priority_intelligence_ref01_data_result.respond_to?(:data_get) ? priority_intelligence_ref01_data_result.data_get : priority_intelligence_ref01_data_result)
    assert !priority_intelligence_ref01_data.nil?
    assert !priority_intelligence_ref01_data["id"].nil?

    # UPDATE
    priority_intelligence_ref01_data_up0_up = {
      "id" => priority_intelligence_ref01_data["id"],
      "account_id" => setup[:idmap]["account_id"],
    }

    priority_intelligence_ref01_markdef_up0_name = "requirement"
    priority_intelligence_ref01_markdef_up0_value = "Mark01-priority_intelligence_ref01_#{setup[:now]}"
    priority_intelligence_ref01_data_up0_up[priority_intelligence_ref01_markdef_up0_name] = priority_intelligence_ref01_markdef_up0_value

    priority_intelligence_ref01_resdata_up0_result = priority_intelligence_ref01_ent.update(priority_intelligence_ref01_data_up0_up, nil)
    priority_intelligence_ref01_resdata_up0 = Helpers.to_map(priority_intelligence_ref01_resdata_up0_result.respond_to?(:data_get) ? priority_intelligence_ref01_resdata_up0_result.data_get : priority_intelligence_ref01_resdata_up0_result)
    assert !priority_intelligence_ref01_resdata_up0.nil?
    assert_equal priority_intelligence_ref01_resdata_up0["id"], priority_intelligence_ref01_data_up0_up["id"]
    assert_equal priority_intelligence_ref01_resdata_up0[priority_intelligence_ref01_markdef_up0_name], priority_intelligence_ref01_markdef_up0_value

    # LOAD
    priority_intelligence_ref01_match_dt0 = {
      "id" => priority_intelligence_ref01_data["id"],
    }
    priority_intelligence_ref01_data_dt0_loaded = priority_intelligence_ref01_ent.load(priority_intelligence_ref01_match_dt0, nil)
    priority_intelligence_ref01_data_dt0_load_result = Helpers.to_map(priority_intelligence_ref01_data_dt0_loaded.respond_to?(:data_get) ? priority_intelligence_ref01_data_dt0_loaded.data_get : priority_intelligence_ref01_data_dt0_loaded)
    assert !priority_intelligence_ref01_data_dt0_load_result.nil?
    assert_equal priority_intelligence_ref01_data_dt0_load_result["id"], priority_intelligence_ref01_data["id"]

    # REMOVE
    priority_intelligence_ref01_match_rm0 = {
      "id" => priority_intelligence_ref01_data["id"],
    }
    priority_intelligence_ref01_ent.remove(priority_intelligence_ref01_match_rm0, nil)

  end
end

def priority_intelligence_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "priority_intelligence", "PriorityIntelligenceTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareCloudforceOneSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["priority_intelligence01", "priority_intelligence02", "priority_intelligence03", "account01"],
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
  entid_env_raw = ENV["CLOUDFLARE_CLOUDFORCE_ONE_TEST_PRIORITY_INTELLIGENCE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_CLOUDFORCE_ONE_TEST_PRIORITY_INTELLIGENCE_ENTID" => idmap,
    "CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_CLOUDFORCE_ONE_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_CLOUDFORCE_ONE_TEST_PRIORITY_INTELLIGENCE_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["account_id"].nil?
    idmap_resolved["account_id"] = idmap_resolved["account01"]
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
