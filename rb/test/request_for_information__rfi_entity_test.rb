# RequestForInformationRfi entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareCloudforceOne_sdk"
require_relative "runner"

class RequestForInformationRfiEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareCloudforceOneSDK.test(nil, nil)
    ent = testsdk.RequestForInformationRfi(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "request_for_information__rfi" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = CloudflareCloudforceOneSDK.test(seed, nil)
    seen = base.RequestForInformationRfi(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = CloudflareCloudforceOneConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = CloudflareCloudforceOneSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.RequestForInformationRfi(nil).stream("list", nil, nil).each do |item|
        if item.is_a?(Array)
          got.concat(item)
        else
          got << item
        end
      end
      assert_equal 3, got.length
    end
  end

  def test_basic_flow
    setup = request_for_information__rfi_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "request_for_information__rfi." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_CLOUDFORCE_ONE_TEST_REQUEST_FOR_INFORMATION_RFI_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    request_for_information__rfi_ref01_ent = client.RequestForInformationRfi(nil)
    request_for_information__rfi_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.request_for_information__rfi"), "request_for_information__rfi_ref01"))
    request_for_information__rfi_ref01_data["account_id"] = setup[:idmap]["account01"]
    request_for_information__rfi_ref01_data["request_id"] = setup[:idmap]["request01"]

    request_for_information__rfi_ref01_data_result = request_for_information__rfi_ref01_ent.create(request_for_information__rfi_ref01_data, nil)
    request_for_information__rfi_ref01_data = Helpers.to_map(request_for_information__rfi_ref01_data_result.respond_to?(:data_get) ? request_for_information__rfi_ref01_data_result.data_get : request_for_information__rfi_ref01_data_result)
    assert !request_for_information__rfi_ref01_data.nil?
    assert !request_for_information__rfi_ref01_data["id"].nil?

    # LIST
    request_for_information__rfi_ref01_match = {
      "account_id" => setup[:idmap]["account01"],
    }

    request_for_information__rfi_ref01_list_result = request_for_information__rfi_ref01_ent.list(request_for_information__rfi_ref01_match, nil)
    assert request_for_information__rfi_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(request_for_information__rfi_ref01_list_result),
      { "id" => request_for_information__rfi_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    request_for_information__rfi_ref01_data_up0_up = {
      "id" => request_for_information__rfi_ref01_data["id"],
      "account_id" => setup[:idmap]["account_id"],
      "request_id" => setup[:idmap]["request_id"],
    }

    request_for_information__rfi_ref01_markdef_up0_name = "content"
    request_for_information__rfi_ref01_markdef_up0_value = "Mark01-request_for_information__rfi_ref01_#{setup[:now]}"
    request_for_information__rfi_ref01_data_up0_up[request_for_information__rfi_ref01_markdef_up0_name] = request_for_information__rfi_ref01_markdef_up0_value

    request_for_information__rfi_ref01_resdata_up0_result = request_for_information__rfi_ref01_ent.update(request_for_information__rfi_ref01_data_up0_up, nil)
    request_for_information__rfi_ref01_resdata_up0 = Helpers.to_map(request_for_information__rfi_ref01_resdata_up0_result.respond_to?(:data_get) ? request_for_information__rfi_ref01_resdata_up0_result.data_get : request_for_information__rfi_ref01_resdata_up0_result)
    assert !request_for_information__rfi_ref01_resdata_up0.nil?
    assert_equal request_for_information__rfi_ref01_resdata_up0["id"], request_for_information__rfi_ref01_data_up0_up["id"]
    assert_equal request_for_information__rfi_ref01_resdata_up0[request_for_information__rfi_ref01_markdef_up0_name], request_for_information__rfi_ref01_markdef_up0_value

    # LOAD
    request_for_information__rfi_ref01_match_dt0 = {
      "id" => request_for_information__rfi_ref01_data["id"],
    }
    request_for_information__rfi_ref01_data_dt0_loaded = request_for_information__rfi_ref01_ent.load(request_for_information__rfi_ref01_match_dt0, nil)
    request_for_information__rfi_ref01_data_dt0_load_result = Helpers.to_map(request_for_information__rfi_ref01_data_dt0_loaded.respond_to?(:data_get) ? request_for_information__rfi_ref01_data_dt0_loaded.data_get : request_for_information__rfi_ref01_data_dt0_loaded)
    assert !request_for_information__rfi_ref01_data_dt0_load_result.nil?
    assert_equal request_for_information__rfi_ref01_data_dt0_load_result["id"], request_for_information__rfi_ref01_data["id"]

  end
end

def request_for_information__rfi_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "request_for_information__rfi", "RequestForInformationRfiTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareCloudforceOneSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["request_for_information__rfi01", "request_for_information__rfi02", "request_for_information__rfi03", "request01", "request02", "request03", "account01"],
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
  entid_env_raw = ENV["CLOUDFLARE_CLOUDFORCE_ONE_TEST_REQUEST_FOR_INFORMATION_RFI_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_CLOUDFORCE_ONE_TEST_REQUEST_FOR_INFORMATION_RFI_ENTID" => idmap,
    "CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_CLOUDFORCE_ONE_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_CLOUDFORCE_ONE_TEST_REQUEST_FOR_INFORMATION_RFI_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["account_id"].nil?
    idmap_resolved["account_id"] = idmap_resolved["account01"]
  end
  if idmap_resolved["request_id"].nil?
    idmap_resolved["request_id"] = idmap_resolved["request01"]
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
