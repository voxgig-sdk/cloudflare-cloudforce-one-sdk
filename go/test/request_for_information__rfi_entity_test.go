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

func TestRequestForInformationRfiEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.RequestForInformationRfi(nil)
		if ent == nil {
			t.Fatal("expected non-nil RequestForInformationRfiEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"request_for_information__rfi": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.RequestForInformationRfi(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.RequestForInformationRfi(nil).Stream("list", nil, nil) {
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
		setup := request_for_information__rfiBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "request_for_information__rfi." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_CLOUDFORCE_ONE_TEST_REQUEST_FOR_INFORMATION_RFI_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		requestForInformation_RfiRef01Ent := client.RequestForInformationRfi(nil)
		requestForInformation_RfiRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "request_for_information__rfi"}), "request_for_information__rfi_ref01"))
		requestForInformation_RfiRef01Data["account_id"] = setup.idmap["account01"]
		requestForInformation_RfiRef01Data["request_id"] = setup.idmap["request01"]

		requestForInformation_RfiRef01DataResult, err := requestForInformation_RfiRef01Ent.Create(requestForInformation_RfiRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		requestForInformation_RfiRef01Data = core.ToMapAny(entityData(requestForInformation_RfiRef01DataResult))
		if requestForInformation_RfiRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if requestForInformation_RfiRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		requestForInformation_RfiRef01Match := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		requestForInformation_RfiRef01ListResult, err := requestForInformation_RfiRef01Ent.List(requestForInformation_RfiRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		requestForInformation_RfiRef01List, requestForInformation_RfiRef01ListOk := requestForInformation_RfiRef01ListResult.([]any)
		if !requestForInformation_RfiRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", requestForInformation_RfiRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(requestForInformation_RfiRef01List), map[string]any{"id": requestForInformation_RfiRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		requestForInformation_RfiRef01DataUp0Up := map[string]any{
			"id": requestForInformation_RfiRef01Data["id"],
			"account_id": setup.idmap["account_id"],
			"request_id": setup.idmap["request_id"],
		}

		requestForInformation_RfiRef01MarkdefUp0Name := "content"
		requestForInformation_RfiRef01MarkdefUp0Value := fmt.Sprintf("Mark01-request_for_information__rfi_ref01_%d", setup.now)
		requestForInformation_RfiRef01DataUp0Up[requestForInformation_RfiRef01MarkdefUp0Name] = requestForInformation_RfiRef01MarkdefUp0Value

		requestForInformation_RfiRef01ResdataUp0Result, err := requestForInformation_RfiRef01Ent.Update(requestForInformation_RfiRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		requestForInformation_RfiRef01ResdataUp0 := core.ToMapAny(entityData(requestForInformation_RfiRef01ResdataUp0Result))
		if requestForInformation_RfiRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if requestForInformation_RfiRef01ResdataUp0["id"] != requestForInformation_RfiRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if requestForInformation_RfiRef01ResdataUp0[requestForInformation_RfiRef01MarkdefUp0Name] != requestForInformation_RfiRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", requestForInformation_RfiRef01MarkdefUp0Name, requestForInformation_RfiRef01ResdataUp0[requestForInformation_RfiRef01MarkdefUp0Name])
		}

		// LOAD
		requestForInformation_RfiRef01MatchDt0 := map[string]any{
			"id": requestForInformation_RfiRef01Data["id"],
		}
		requestForInformation_RfiRef01DataDt0Loaded, err := requestForInformation_RfiRef01Ent.Load(requestForInformation_RfiRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		requestForInformation_RfiRef01DataDt0LoadResult := core.ToMapAny(entityData(requestForInformation_RfiRef01DataDt0Loaded))
		if requestForInformation_RfiRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if requestForInformation_RfiRef01DataDt0LoadResult["id"] != requestForInformation_RfiRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func request_for_information__rfiBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "request_for_information__rfi", "RequestForInformationRfiTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read request_for_information__rfi test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse request_for_information__rfi test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"request_for_information__rfi01", "request_for_information__rfi02", "request_for_information__rfi03", "request01", "request02", "request03", "account01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_CLOUDFORCE_ONE_TEST_REQUEST_FOR_INFORMATION_RFI_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_CLOUDFORCE_ONE_TEST_REQUEST_FOR_INFORMATION_RFI_ENTID": idmap,
		"CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_CLOUDFORCE_ONE_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_CLOUDFORCE_ONE_TEST_REQUEST_FOR_INFORMATION_RFI_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add account_id alias for update test.
	if idmapResolved["account_id"] == nil {
		idmapResolved["account_id"] = idmapResolved["account01"]
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
