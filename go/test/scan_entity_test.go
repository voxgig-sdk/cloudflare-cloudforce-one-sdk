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

func TestScanEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Scan(nil)
		if ent == nil {
			t.Fatal("expected non-nil ScanEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"scan": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Scan(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Scan(nil).Stream("list", nil, nil) {
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
		setup := scanBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "scan." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_CLOUDFORCE_ONE_TEST_SCAN_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		scanRef01Ent := client.Scan(nil)
		scanRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "scan"}), "scan_ref01"))
		scanRef01Data["account_id"] = setup.idmap["account01"]

		scanRef01DataResult, err := scanRef01Ent.Create(scanRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		scanRef01Data = core.ToMapAny(entityData(scanRef01DataResult))
		if scanRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		scanRef01Match := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		scanRef01ListResult, err := scanRef01Ent.List(scanRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, scanRef01ListOk := scanRef01ListResult.([]any)
		if !scanRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", scanRef01ListResult)
		}

		// UPDATE
		scanRef01DataUp0Up := map[string]any{
			"account_id": setup.idmap["account_id"],
		}

		scanRef01ResdataUp0Result, err := scanRef01Ent.Update(scanRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		scanRef01ResdataUp0 := core.ToMapAny(entityData(scanRef01ResdataUp0Result))
		if scanRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}

		// LOAD
		scanRef01MatchDt0 := map[string]any{}
		scanRef01DataDt0Loaded, err := scanRef01Ent.Load(scanRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if scanRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}


		// LIST
		scanRef01MatchRt0 := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		scanRef01ListRt0Result, err := scanRef01Ent.List(scanRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, scanRef01ListRt0Ok := scanRef01ListRt0Result.([]any)
		if !scanRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", scanRef01ListRt0Result)
		}

	})
}

func scanBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "scan", "ScanTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read scan test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse scan test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"scan01", "scan02", "scan03", "account01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_CLOUDFORCE_ONE_TEST_SCAN_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_CLOUDFORCE_ONE_TEST_SCAN_ENTID": idmap,
		"CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_CLOUDFORCE_ONE_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_CLOUDFORCE_ONE_TEST_SCAN_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add account_id alias for update test.
	if idmapResolved["account_id"] == nil {
		idmapResolved["account_id"] = idmapResolved["account01"]
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
