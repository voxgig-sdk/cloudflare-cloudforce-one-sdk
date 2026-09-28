# CloudforceOneEditApproval entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareCloudforceOne_sdk"
require_relative "runner"

class CloudforceOneEditApprovalEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareCloudforceOneSDK.test(nil, nil)
    ent = testsdk.CloudforceOneEditApproval(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = cloudforce_one_edit_approval_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "cloudforce_one_edit_approval." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_EDIT_APPROVAL_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    cloudforce_one_edit_approval_ref01_ent = client.CloudforceOneEditApproval(nil)
    cloudforce_one_edit_approval_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.cloudforce_one_edit_approval"), "cloudforce_one_edit_approval_ref01"))
    cloudforce_one_edit_approval_ref01_data["account_id"] = setup[:idmap]["account01"]
    cloudforce_one_edit_approval_ref01_data["approval_id"] = setup[:idmap]["approval01"]

    cloudforce_one_edit_approval_ref01_data_result = cloudforce_one_edit_approval_ref01_ent.create(cloudforce_one_edit_approval_ref01_data, nil)
    cloudforce_one_edit_approval_ref01_data = Helpers.to_map(cloudforce_one_edit_approval_ref01_data_result.respond_to?(:data_get) ? cloudforce_one_edit_approval_ref01_data_result.data_get : cloudforce_one_edit_approval_ref01_data_result)
    assert !cloudforce_one_edit_approval_ref01_data.nil?
    assert !cloudforce_one_edit_approval_ref01_data["id"].nil?

    # UPDATE
    cloudforce_one_edit_approval_ref01_data_up0_up = {
      "id" => cloudforce_one_edit_approval_ref01_data["id"],
      "account_id" => setup[:idmap]["account_id"],
    }

    cloudforce_one_edit_approval_ref01_markdef_up0_name = "description"
    cloudforce_one_edit_approval_ref01_markdef_up0_value = "Mark01-cloudforce_one_edit_approval_ref01_#{setup[:now]}"
    cloudforce_one_edit_approval_ref01_data_up0_up[cloudforce_one_edit_approval_ref01_markdef_up0_name] = cloudforce_one_edit_approval_ref01_markdef_up0_value

    cloudforce_one_edit_approval_ref01_resdata_up0_result = cloudforce_one_edit_approval_ref01_ent.update(cloudforce_one_edit_approval_ref01_data_up0_up, nil)
    cloudforce_one_edit_approval_ref01_resdata_up0 = Helpers.to_map(cloudforce_one_edit_approval_ref01_resdata_up0_result.respond_to?(:data_get) ? cloudforce_one_edit_approval_ref01_resdata_up0_result.data_get : cloudforce_one_edit_approval_ref01_resdata_up0_result)
    assert !cloudforce_one_edit_approval_ref01_resdata_up0.nil?
    assert_equal cloudforce_one_edit_approval_ref01_resdata_up0["id"], cloudforce_one_edit_approval_ref01_data_up0_up["id"]
    assert_equal cloudforce_one_edit_approval_ref01_resdata_up0[cloudforce_one_edit_approval_ref01_markdef_up0_name], cloudforce_one_edit_approval_ref01_markdef_up0_value

  end
end

def cloudforce_one_edit_approval_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "cloudforce_one_edit_approval", "CloudforceOneEditApprovalTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareCloudforceOneSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["cloudforce_one_edit_approval01", "cloudforce_one_edit_approval02", "cloudforce_one_edit_approval03", "account01", "approval01"],
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
  entid_env_raw = ENV["CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_EDIT_APPROVAL_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_EDIT_APPROVAL_ENTID" => idmap,
    "CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_CLOUDFORCE_ONE_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_EDIT_APPROVAL_ENTID"])
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
