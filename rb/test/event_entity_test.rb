# Event entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareCloudforceOne_sdk"
require_relative "runner"

class EventEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareCloudforceOneSDK.test(nil, nil)
    ent = testsdk.Event(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "event" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = CloudflareCloudforceOneSDK.test(seed, nil)
    seen = base.Event(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = CloudflareCloudforceOneConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = CloudflareCloudforceOneSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.Event(nil).stream("list", nil, nil).each do |item|
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
    setup = event_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "event." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_CLOUDFORCE_ONE_TEST_EVENT_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    event_ref01_ent = client.Event(nil)
    event_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.event"), "event_ref01"))
    event_ref01_data["account_id"] = setup[:idmap]["account01"]
    event_ref01_data["by_id_id"] = setup[:idmap]["by_id01"]
    event_ref01_data["dataset_id"] = setup[:idmap]["dataset01"]

    event_ref01_data_result = event_ref01_ent.create(event_ref01_data, nil)
    event_ref01_data = Helpers.to_map(event_ref01_data_result.respond_to?(:data_get) ? event_ref01_data_result.data_get : event_ref01_data_result)
    assert !event_ref01_data.nil?
    assert !event_ref01_data["id"].nil?

    # LIST
    event_ref01_match = {
      "account_id" => setup[:idmap]["account01"],
    }

    event_ref01_list_result = event_ref01_ent.list(event_ref01_match, nil)
    assert event_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(event_ref01_list_result),
      { "id" => event_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    event_ref01_data_up0_up = {
      "id" => event_ref01_data["id"],
    }

    event_ref01_markdef_up0_name = "attacker"
    event_ref01_markdef_up0_value = "Mark01-event_ref01_#{setup[:now]}"
    event_ref01_data_up0_up[event_ref01_markdef_up0_name] = event_ref01_markdef_up0_value

    event_ref01_resdata_up0_result = event_ref01_ent.update(event_ref01_data_up0_up, nil)
    event_ref01_resdata_up0 = Helpers.to_map(event_ref01_resdata_up0_result.respond_to?(:data_get) ? event_ref01_resdata_up0_result.data_get : event_ref01_resdata_up0_result)
    assert !event_ref01_resdata_up0.nil?
    assert_equal event_ref01_resdata_up0["id"], event_ref01_data_up0_up["id"]
    assert_equal event_ref01_resdata_up0[event_ref01_markdef_up0_name], event_ref01_markdef_up0_value

    # LOAD
    event_ref01_match_dt0 = {
      "id" => event_ref01_data["id"],
    }
    event_ref01_data_dt0_loaded = event_ref01_ent.load(event_ref01_match_dt0, nil)
    event_ref01_data_dt0_load_result = Helpers.to_map(event_ref01_data_dt0_loaded.respond_to?(:data_get) ? event_ref01_data_dt0_loaded.data_get : event_ref01_data_dt0_loaded)
    assert !event_ref01_data_dt0_load_result.nil?
    assert_equal event_ref01_data_dt0_load_result["id"], event_ref01_data["id"]

    # REMOVE
    event_ref01_match_rm0 = {
      "id" => event_ref01_data["id"],
    }
    event_ref01_ent.remove(event_ref01_match_rm0, nil)

    # LIST
    event_ref01_match_rt0 = {
      "account_id" => setup[:idmap]["account01"],
    }

    event_ref01_list_rt0_result = event_ref01_ent.list(event_ref01_match_rt0, nil)
    assert event_ref01_list_rt0_result.is_a?(Array)

    not_found_item = Vs.select(
      Runner.entity_list_to_data(event_ref01_list_rt0_result),
      { "id" => event_ref01_data["id"] })
    assert Vs.isempty(not_found_item)

  end
end

def event_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "event", "EventTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareCloudforceOneSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["event01", "event02", "event03", "dataset01", "dataset02", "dataset03", "account01", "by_id01"],
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
  entid_env_raw = ENV["CLOUDFLARE_CLOUDFORCE_ONE_TEST_EVENT_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_CLOUDFORCE_ONE_TEST_EVENT_ENTID" => idmap,
    "CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_CLOUDFORCE_ONE_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_CLOUDFORCE_ONE_TEST_EVENT_ENTID"])
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
