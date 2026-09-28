package sdktest

import (
	"encoding/json"
	"fmt"
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

func TestRfiMessageEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.RfiMessage(nil)
		if ent == nil {
			t.Fatal("expected non-nil RfiMessageEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"rfi_message": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.RfiMessage(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.RfiMessage(nil).Stream("list", nil, nil) {
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
		setup := rfi_messageBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "rfi_message." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_CLOUDFORCE_ONE_TEST_RFI_MESSAGE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		rfiMessageRef01Ent := client.RfiMessage(nil)
		rfiMessageRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "rfi_message"}), "rfi_message_ref01"))
		rfiMessageRef01Data["account_id"] = setup.idmap["account01"]
		rfiMessageRef01Data["project_type"] = setup.idmap["project_type01"]
		rfiMessageRef01Data["request_id"] = setup.idmap["request01"]

		rfiMessageRef01DataResult, err := rfiMessageRef01Ent.Create(rfiMessageRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		rfiMessageRef01Data = core.ToMapAny(entityData(rfiMessageRef01DataResult))
		if rfiMessageRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if rfiMessageRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		rfiMessageRef01Match := map[string]any{
			"account_id": setup.idmap["account01"],
			"project_type": setup.idmap["project_type01"],
			"request_id": setup.idmap["request01"],
		}

		rfiMessageRef01ListResult, err := rfiMessageRef01Ent.List(rfiMessageRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		rfiMessageRef01List, rfiMessageRef01ListOk := rfiMessageRef01ListResult.([]any)
		if !rfiMessageRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", rfiMessageRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(rfiMessageRef01List), map[string]any{"id": rfiMessageRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		rfiMessageRef01DataUp0Up := map[string]any{
			"id": rfiMessageRef01Data["id"],
			"account_id": setup.idmap["account_id"],
			"project_type": setup.idmap["project_type"],
			"request_id": setup.idmap["request_id"],
		}

		rfiMessageRef01MarkdefUp0Name := "author_id"
		rfiMessageRef01MarkdefUp0Value := fmt.Sprintf("Mark01-rfi_message_ref01_%d", setup.now)
		rfiMessageRef01DataUp0Up[rfiMessageRef01MarkdefUp0Name] = rfiMessageRef01MarkdefUp0Value

		rfiMessageRef01ResdataUp0Result, err := rfiMessageRef01Ent.Update(rfiMessageRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		rfiMessageRef01ResdataUp0 := core.ToMapAny(entityData(rfiMessageRef01ResdataUp0Result))
		if rfiMessageRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if rfiMessageRef01ResdataUp0["id"] != rfiMessageRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if rfiMessageRef01ResdataUp0[rfiMessageRef01MarkdefUp0Name] != rfiMessageRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", rfiMessageRef01MarkdefUp0Name, rfiMessageRef01ResdataUp0[rfiMessageRef01MarkdefUp0Name])
		}

		// LOAD
		rfiMessageRef01MatchDt0 := map[string]any{
			"id": rfiMessageRef01Data["id"],
		}
		rfiMessageRef01DataDt0Loaded, err := rfiMessageRef01Ent.Load(rfiMessageRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		rfiMessageRef01DataDt0LoadResult := core.ToMapAny(entityData(rfiMessageRef01DataDt0Loaded))
		if rfiMessageRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if rfiMessageRef01DataDt0LoadResult["id"] != rfiMessageRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func rfi_messageBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "rfi_message", "RfiMessageTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read rfi_message test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse rfi_message test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"rfi_message01", "rfi_message02", "rfi_message03", "request01", "request02", "request03", "account01", "project_type01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_CLOUDFORCE_ONE_TEST_RFI_MESSAGE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_CLOUDFORCE_ONE_TEST_RFI_MESSAGE_ENTID": idmap,
		"CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_CLOUDFORCE_ONE_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_CLOUDFORCE_ONE_TEST_RFI_MESSAGE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add account_id alias for update test.
	if idmapResolved["account_id"] == nil {
		idmapResolved["account_id"] = idmapResolved["account01"]
	}
	// Add project_type alias for update test.
	if idmapResolved["project_type"] == nil {
		idmapResolved["project_type"] = idmapResolved["project_type01"]
	}
	// Add request_id alias for update test.
	if idmapResolved["request_id"] == nil {
		idmapResolved["request_id"] = idmapResolved["request01"]
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
