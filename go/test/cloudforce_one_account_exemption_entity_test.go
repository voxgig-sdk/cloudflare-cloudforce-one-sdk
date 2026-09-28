package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/cloudflare-cloudforce-one-sdk/go"
	"github.com/voxgig-sdk/cloudflare-cloudforce-one-sdk/go/core"

	vs "github.com/voxgig-sdk/cloudflare-cloudforce-one-sdk/go/utility/struct"
)

func TestCloudforceOneAccountExemptionEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CloudforceOneAccountExemption(nil)
		if ent == nil {
			t.Fatal("expected non-nil CloudforceOneAccountExemptionEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"cloudforce_one_account_exemption": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.CloudforceOneAccountExemption(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.CloudforceOneAccountExemption(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := cloudforce_one_account_exemptionBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "cloudforce_one_account_exemption." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_ACCOUNT_EXEMPTION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		cloudforceOneAccountExemptionRef01Ent := client.CloudforceOneAccountExemption(nil)
		cloudforceOneAccountExemptionRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "cloudforce_one_account_exemption"}), "cloudforce_one_account_exemption_ref01"))
		cloudforceOneAccountExemptionRef01Data["account_id"] = setup.idmap["account01"]

		cloudforceOneAccountExemptionRef01DataResult, err := cloudforceOneAccountExemptionRef01Ent.Create(cloudforceOneAccountExemptionRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		cloudforceOneAccountExemptionRef01Data = core.ToMapAny(entityData(cloudforceOneAccountExemptionRef01DataResult))
		if cloudforceOneAccountExemptionRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		cloudforceOneAccountExemptionRef01Match := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		cloudforceOneAccountExemptionRef01ListResult, err := cloudforceOneAccountExemptionRef01Ent.List(cloudforceOneAccountExemptionRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, cloudforceOneAccountExemptionRef01ListOk := cloudforceOneAccountExemptionRef01ListResult.([]any)
		if !cloudforceOneAccountExemptionRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", cloudforceOneAccountExemptionRef01ListResult)
		}

		// UPDATE
		cloudforceOneAccountExemptionRef01DataUp0Up := map[string]any{
		}

		cloudforceOneAccountExemptionRef01ResdataUp0Result, err := cloudforceOneAccountExemptionRef01Ent.Update(cloudforceOneAccountExemptionRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		cloudforceOneAccountExemptionRef01ResdataUp0 := core.ToMapAny(entityData(cloudforceOneAccountExemptionRef01ResdataUp0Result))
		if cloudforceOneAccountExemptionRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}


		// LIST
		cloudforceOneAccountExemptionRef01MatchRt0 := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		cloudforceOneAccountExemptionRef01ListRt0Result, err := cloudforceOneAccountExemptionRef01Ent.List(cloudforceOneAccountExemptionRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, cloudforceOneAccountExemptionRef01ListRt0Ok := cloudforceOneAccountExemptionRef01ListRt0Result.([]any)
		if !cloudforceOneAccountExemptionRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", cloudforceOneAccountExemptionRef01ListRt0Result)
		}

	})
}

func cloudforce_one_account_exemptionBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "cloudforce_one_account_exemption", "CloudforceOneAccountExemptionTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read cloudforce_one_account_exemption test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse cloudforce_one_account_exemption test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"cloudforce_one_account_exemption01", "cloudforce_one_account_exemption02", "cloudforce_one_account_exemption03", "account01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_ACCOUNT_EXEMPTION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_ACCOUNT_EXEMPTION_ENTID": idmap,
		"CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_CLOUDFORCE_ONE_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_ACCOUNT_EXEMPTION_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["CLOUDFLARE_CLOUDFORCE_ONE_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewCloudflareCloudforceOneSDK(core.ToMapAny(mergedOpts))
	}

	live := env["CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
