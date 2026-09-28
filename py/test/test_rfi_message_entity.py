# RfiMessage entity test

import json
import os
import time

import pytest

from cloudflarecloudforceone_sdk.utility.voxgig_struct import voxgig_struct as vs
from cloudflarecloudforceone_sdk import CloudflareCloudforceOneSDK
from cloudflarecloudforceone_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestRfiMessageEntity:

    def test_should_create_instance(self):
        testsdk = CloudflareCloudforceOneSDK.test(None, None)
        ent = testsdk.RfiMessage(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "rfi_message": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = CloudflareCloudforceOneSDK.test(seed, None)
        seen = list(base.RfiMessage(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from cloudflarecloudforceone_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = CloudflareCloudforceOneSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.RfiMessage(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _rfi_message_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "rfi_message." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set CLOUDFLARE_CLOUDFORCE_ONE_TEST_RFI_MESSAGE_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        rfi_message_ref01_ent = client.RfiMessage(None)
        rfi_message_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.rfi_message"), "rfi_message_ref01"))
        rfi_message_ref01_data["account_id"] = setup["idmap"]["account01"]
        rfi_message_ref01_data["project_type"] = setup["idmap"]["project_type01"]
        rfi_message_ref01_data["request_id"] = setup["idmap"]["request01"]

        rfi_message_ref01_data = helpers.to_map(runner.entity_data(rfi_message_ref01_ent.create(rfi_message_ref01_data, None)))
        assert rfi_message_ref01_data is not None
        assert rfi_message_ref01_data["id"] is not None

        # LIST
        rfi_message_ref01_match = {
            "account_id": setup["idmap"]["account01"],
            "project_type": setup["idmap"]["project_type01"],
            "request_id": setup["idmap"]["request01"],
        }

        rfi_message_ref01_list_result = rfi_message_ref01_ent.list(rfi_message_ref01_match, None)
        assert isinstance(rfi_message_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(rfi_message_ref01_list_result),
            {"id": rfi_message_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # UPDATE
        rfi_message_ref01_data_up0_up = {
            "id": rfi_message_ref01_data["id"],
            "account_id": setup["idmap"]["account_id"],
            "project_type": setup["idmap"]["project_type"],
            "request_id": setup["idmap"]["request_id"],
        }

        rfi_message_ref01_markdef_up0_name = "author_id"
        rfi_message_ref01_markdef_up0_value = "Mark01-rfi_message_ref01_" + str(setup["now"])
        rfi_message_ref01_data_up0_up[rfi_message_ref01_markdef_up0_name] = rfi_message_ref01_markdef_up0_value

        rfi_message_ref01_resdata_up0 = helpers.to_map(runner.entity_data(rfi_message_ref01_ent.update(rfi_message_ref01_data_up0_up, None)))
        assert rfi_message_ref01_resdata_up0 is not None
        assert rfi_message_ref01_resdata_up0["id"] == rfi_message_ref01_data_up0_up["id"]
        assert rfi_message_ref01_resdata_up0[rfi_message_ref01_markdef_up0_name] == rfi_message_ref01_markdef_up0_value

        # LOAD
        rfi_message_ref01_match_dt0 = {
            "id": rfi_message_ref01_data["id"],
        }
        rfi_message_ref01_data_dt0_loaded = rfi_message_ref01_ent.load(rfi_message_ref01_match_dt0, None)
        rfi_message_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(rfi_message_ref01_data_dt0_loaded))
        assert rfi_message_ref01_data_dt0_load_result is not None
        assert rfi_message_ref01_data_dt0_load_result["id"] == rfi_message_ref01_data["id"]



def _rfi_message_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/rfi_message/RfiMessageTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = CloudflareCloudforceOneSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["rfi_message01", "rfi_message02", "rfi_message03", "request01", "request02", "request03", "account01", "project_type01"],
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
        "CLOUDFLARE_CLOUDFORCE_ONE_TEST_RFI_MESSAGE_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "CLOUDFLARE_CLOUDFORCE_ONE_TEST_RFI_MESSAGE_ENTID": idmap,
        "CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE": "FALSE",
        "CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN": "FALSE",
        "CLOUDFLARE_CLOUDFORCE_ONE_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("CLOUDFLARE_CLOUDFORCE_ONE_TEST_RFI_MESSAGE_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("account_id") is None:
        idmap_resolved["account_id"] = idmap_resolved.get("account01")
    if idmap_resolved.get("project_type") is None:
        idmap_resolved["project_type"] = idmap_resolved.get("project_type01")
    if idmap_resolved.get("request_id") is None:
        idmap_resolved["request_id"] = idmap_resolved.get("request01")

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
