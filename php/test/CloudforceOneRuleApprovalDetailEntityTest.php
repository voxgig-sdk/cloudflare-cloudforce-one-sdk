<?php
declare(strict_types=1);

// CloudforceOneRuleApprovalDetail entity test

require_once __DIR__ . '/../cloudflarecloudforceone_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class CloudforceOneRuleApprovalDetailEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = CloudflareCloudforceOneSDK::test(null, null);
        $ent = $testsdk->CloudforceOneRuleApprovalDetail(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = cloudforce_one_rule_approval_detail_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "cloudforce_one_rule_approval_detail." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_RULE_APPROVAL_DETAIL_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $cloudforce_one_rule_approval_detail_ref01_ent = $client->CloudforceOneRuleApprovalDetail(null);
        $cloudforce_one_rule_approval_detail_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.cloudforce_one_rule_approval_detail"), "cloudforce_one_rule_approval_detail_ref01"));
        $cloudforce_one_rule_approval_detail_ref01_data["account_id"] = $setup["idmap"]["account01"];
        $cloudforce_one_rule_approval_detail_ref01_data["approval_id"] = $setup["idmap"]["approval01"];

        $cloudforce_one_rule_approval_detail_ref01_data_result = $cloudforce_one_rule_approval_detail_ref01_ent->create($cloudforce_one_rule_approval_detail_ref01_data, null);
        $cloudforce_one_rule_approval_detail_ref01_data = Helpers::to_map(is_object($cloudforce_one_rule_approval_detail_ref01_data_result) && method_exists($cloudforce_one_rule_approval_detail_ref01_data_result, 'data_get') ? $cloudforce_one_rule_approval_detail_ref01_data_result->data_get() : $cloudforce_one_rule_approval_detail_ref01_data_result);
        $this->assertNotNull($cloudforce_one_rule_approval_detail_ref01_data);
        $this->assertNotNull($cloudforce_one_rule_approval_detail_ref01_data["id"]);

        // LOAD
        $cloudforce_one_rule_approval_detail_ref01_match_dt0 = [
            "id" => $cloudforce_one_rule_approval_detail_ref01_data["id"],
        ];
        $cloudforce_one_rule_approval_detail_ref01_data_dt0_loaded = $cloudforce_one_rule_approval_detail_ref01_ent->load($cloudforce_one_rule_approval_detail_ref01_match_dt0, null);
        $cloudforce_one_rule_approval_detail_ref01_data_dt0_load_result = Helpers::to_map(is_object($cloudforce_one_rule_approval_detail_ref01_data_dt0_loaded) && method_exists($cloudforce_one_rule_approval_detail_ref01_data_dt0_loaded, 'data_get') ? $cloudforce_one_rule_approval_detail_ref01_data_dt0_loaded->data_get() : $cloudforce_one_rule_approval_detail_ref01_data_dt0_loaded);
        $this->assertNotNull($cloudforce_one_rule_approval_detail_ref01_data_dt0_load_result);
        $this->assertEquals($cloudforce_one_rule_approval_detail_ref01_data_dt0_load_result["id"], $cloudforce_one_rule_approval_detail_ref01_data["id"]);

    }
}

function cloudforce_one_rule_approval_detail_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/cloudforce_one_rule_approval_detail/CloudforceOneRuleApprovalDetailTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = CloudflareCloudforceOneSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["cloudforce_one_rule_approval_detail01", "cloudforce_one_rule_approval_detail02", "cloudforce_one_rule_approval_detail03", "account01", "approval01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_RULE_APPROVAL_DETAIL_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_RULE_APPROVAL_DETAIL_ENTID" => $idmap,
        "CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE" => "FALSE",
        "CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN" => "FALSE",
        "CLOUDFLARE_CLOUDFORCE_ONE_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_RULE_APPROVAL_DETAIL_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["CLOUDFLARE_CLOUDFORCE_ONE_APIKEY"],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        // "?? []" because merge legitimately answers with a stdClass when every
        // contributing entry is an EMPTY map - an SDK with no apikey and no
        // server variables generates an empty middle entry, so that is the
        // common case, not the edge one. to_map returns null for a non-array by
        // design, and the constructor takes a non-nullable array, so without the
        // fallback every such SDK died on "must be of type array, null given"
        // the moment live mode was switched on. Offline mode never reaches this
        // branch, which is why the offline suite stayed green.
        $client = new CloudflareCloudforceOneSDK(Helpers::to_map($merged_opts) ?? []);
    }

    $live = $env["CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
