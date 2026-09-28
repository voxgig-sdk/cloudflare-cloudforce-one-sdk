# Rfi entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareCloudforceOne_sdk"
require_relative "runner"

class RfiEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareCloudforceOneSDK.test(nil, nil)
    ent = testsdk.Rfi(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = rfi_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "rfi." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_CLOUDFORCE_ONE_TEST_RFI_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    rfi_ref01_ent = client.Rfi(nil)
    rfi_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.rfi"), "rfi_ref01"))
    rfi_ref01_data["account_id"] = setup[:idmap]["account01"]
    rfi_ref01_data["project_type"] = setup[:idmap]["project_type01"]

    rfi_ref01_data_result = rfi_ref01_ent.create(rfi_ref01_data, nil)
    rfi_ref01_data = Helpers.to_map(rfi_ref01_data_result.respond_to?(:data_get) ? rfi_ref01_data_result.data_get : rfi_ref01_data_result)
    assert !rfi_ref01_data.nil?
    assert !rfi_ref01_data["id"].nil?

    # UPDATE
    rfi_ref01_data_up0_up = {
      "id" => rfi_ref01_data["id"],
      "account_id" => setup[:idmap]["account_id"],
      "project_type" => setup[:idmap]["project_type"],
    }

    rfi_ref01_markdef_up0_name = "assignee"
    rfi_ref01_markdef_up0_value = "Mark01-rfi_ref01_#{setup[:now]}"
    rfi_ref01_data_up0_up[rfi_ref01_markdef_up0_name] = rfi_ref01_markdef_up0_value

    rfi_ref01_resdata_up0_result = rfi_ref01_ent.update(rfi_ref01_data_up0_up, nil)
    rfi_ref01_resdata_up0 = Helpers.to_map(rfi_ref01_resdata_up0_result.respond_to?(:data_get) ? rfi_ref01_resdata_up0_result.data_get : rfi_ref01_resdata_up0_result)
    assert !rfi_ref01_resdata_up0.nil?
    assert_equal rfi_ref01_resdata_up0["id"], rfi_ref01_data_up0_up["id"]
    assert_equal rfi_ref01_resdata_up0[rfi_ref01_markdef_up0_name], rfi_ref01_markdef_up0_value

    # LOAD
    rfi_ref01_match_dt0 = {
      "id" => rfi_ref01_data["id"],
    }
    rfi_ref01_data_dt0_loaded = rfi_ref01_ent.load(rfi_ref01_match_dt0, nil)
    rfi_ref01_data_dt0_load_result = Helpers.to_map(rfi_ref01_data_dt0_loaded.respond_to?(:data_get) ? rfi_ref01_data_dt0_loaded.data_get : rfi_ref01_data_dt0_loaded)
    assert !rfi_ref01_data_dt0_load_result.nil?
    assert_equal rfi_ref01_data_dt0_load_result["id"], rfi_ref01_data["id"]

  end
end

def rfi_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "rfi", "RfiTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareCloudforceOneSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["rfi01", "rfi02", "rfi03", "request01", "request02", "request03", "account01", "project_type01"],
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
  entid_env_raw = ENV["CLOUDFLARE_CLOUDFORCE_ONE_TEST_RFI_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_CLOUDFORCE_ONE_TEST_RFI_ENTID" => idmap,
    "CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_CLOUDFORCE_ONE_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_CLOUDFORCE_ONE_TEST_RFI_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["account_id"].nil?
    idmap_resolved["account_id"] = idmap_resolved["account01"]
  end
  if idmap_resolved["project_type"].nil?
    idmap_resolved["project_type"] = idmap_resolved["project_type01"]
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
