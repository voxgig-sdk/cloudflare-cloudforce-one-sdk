# CloudforceOneRulePreview entity test

import json
import os
import time

import pytest

from cloudflarecloudforceone_sdk.utility.voxgig_struct import voxgig_struct as vs
from cloudflarecloudforceone_sdk import CloudflareCloudforceOneSDK
from cloudflarecloudforceone_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestCloudforceOneRulePreviewEntity:

    def test_should_create_instance(self):
        testsdk = CloudflareCloudforceOneSDK.test(None, None)
        ent = testsdk.CloudforceOneRulePreview(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _cloudforce_one_rule_preview_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "update", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "cloudforce_one_rule_preview." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_RULE_PREVIEW_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        cloudforce_one_rule_preview_ref01_ent = client.CloudforceOneRulePreview(None)
        cloudforce_one_rule_preview_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.cloudforce_one_rule_preview"), "cloudforce_one_rule_preview_ref01"))
        cloudforce_one_rule_preview_ref01_data["account_id"] = setup["idmap"]["account01"]

        cloudforce_one_rule_preview_ref01_data = helpers.to_map(runner.entity_data(cloudforce_one_rule_preview_ref01_ent.create(cloudforce_one_rule_preview_ref01_data, None)))
        assert cloudforce_one_rule_preview_ref01_data is not None
        assert cloudforce_one_rule_preview_ref01_data["id"] is not None

        # UPDATE
        cloudforce_one_rule_preview_ref01_data_up0_up = {
            "id": cloudforce_one_rule_preview_ref01_data["id"],
            "account_id": setup["idmap"]["account_id"],
        }

        cloudforce_one_rule_preview_ref01_markdef_up0_name = "commit_message"
        cloudforce_one_rule_preview_ref01_markdef_up0_value = "Mark01-cloudforce_one_rule_preview_ref01_" + str(setup["now"])
        cloudforce_one_rule_preview_ref01_data_up0_up[cloudforce_one_rule_preview_ref01_markdef_up0_name] = cloudforce_one_rule_preview_ref01_markdef_up0_value

        cloudforce_one_rule_preview_ref01_resdata_up0 = helpers.to_map(runner.entity_data(cloudforce_one_rule_preview_ref01_ent.update(cloudforce_one_rule_preview_ref01_data_up0_up, None)))
        assert cloudforce_one_rule_preview_ref01_resdata_up0 is not None
        assert cloudforce_one_rule_preview_ref01_resdata_up0["id"] == cloudforce_one_rule_preview_ref01_data_up0_up["id"]
        assert cloudforce_one_rule_preview_ref01_resdata_up0[cloudforce_one_rule_preview_ref01_markdef_up0_name] == cloudforce_one_rule_preview_ref01_markdef_up0_value

        # LOAD
        cloudforce_one_rule_preview_ref01_match_dt0 = {
            "id": cloudforce_one_rule_preview_ref01_data["id"],
        }
        cloudforce_one_rule_preview_ref01_data_dt0_loaded = cloudforce_one_rule_preview_ref01_ent.load(cloudforce_one_rule_preview_ref01_match_dt0, None)
        cloudforce_one_rule_preview_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(cloudforce_one_rule_preview_ref01_data_dt0_loaded))
        assert cloudforce_one_rule_preview_ref01_data_dt0_load_result is not None
        assert cloudforce_one_rule_preview_ref01_data_dt0_load_result["id"] == cloudforce_one_rule_preview_ref01_data["id"]



def _cloudforce_one_rule_preview_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/cloudforce_one_rule_preview/CloudforceOneRulePreviewTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = CloudflareCloudforceOneSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["cloudforce_one_rule_preview01", "cloudforce_one_rule_preview02", "cloudforce_one_rule_preview03", "account01"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_RULE_PREVIEW_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_RULE_PREVIEW_ENTID": idmap,
        "CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE": "FALSE",
        "CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN": "FALSE",
        "CLOUDFLARE_CLOUDFORCE_ONE_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_RULE_PREVIEW_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("account_id") is None:
        idmap_resolved["account_id"] = idmap_resolved.get("account01")

    if env.get("CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("CLOUDFLARE_CLOUDFORCE_ONE_APIKEY"),
            },
            extra or {},
        ])
        client = CloudflareCloudforceOneSDK(helpers.to_map(merged_opts))

    _live = env.get("CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
