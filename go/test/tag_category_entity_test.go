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

func TestTagCategoryEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.TagCategory(nil)
		if ent == nil {
			t.Fatal("expected non-nil TagCategoryEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"tag_category": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.TagCategory(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.TagCategory(nil).Stream("list", nil, nil) {
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
		setup := tag_categoryBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "tag_category." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_CLOUDFORCE_ONE_TEST_TAG_CATEGORY_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		tagCategoryRef01Ent := client.TagCategory(nil)
		tagCategoryRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "tag_category"}), "tag_category_ref01"))
		tagCategoryRef01Data["account_id"] = setup.idmap["account01"]

		tagCategoryRef01DataResult, err := tagCategoryRef01Ent.Create(tagCategoryRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		tagCategoryRef01Data = core.ToMapAny(entityData(tagCategoryRef01DataResult))
		if tagCategoryRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if tagCategoryRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		tagCategoryRef01Match := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		tagCategoryRef01ListResult, err := tagCategoryRef01Ent.List(tagCategoryRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		tagCategoryRef01List, tagCategoryRef01ListOk := tagCategoryRef01ListResult.([]any)
		if !tagCategoryRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", tagCategoryRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(tagCategoryRef01List), map[string]any{"id": tagCategoryRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		tagCategoryRef01DataUp0Up := map[string]any{
			"id": tagCategoryRef01Data["id"],
			"account_id": setup.idmap["account_id"],
		}

		tagCategoryRef01MarkdefUp0Name := "createdAt"
		tagCategoryRef01MarkdefUp0Value := fmt.Sprintf("Mark01-tag_category_ref01_%d", setup.now)
		tagCategoryRef01DataUp0Up[tagCategoryRef01MarkdefUp0Name] = tagCategoryRef01MarkdefUp0Value

		tagCategoryRef01ResdataUp0Result, err := tagCategoryRef01Ent.Update(tagCategoryRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		tagCategoryRef01ResdataUp0 := core.ToMapAny(entityData(tagCategoryRef01ResdataUp0Result))
		if tagCategoryRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if tagCategoryRef01ResdataUp0["id"] != tagCategoryRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if tagCategoryRef01ResdataUp0[tagCategoryRef01MarkdefUp0Name] != tagCategoryRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", tagCategoryRef01MarkdefUp0Name, tagCategoryRef01ResdataUp0[tagCategoryRef01MarkdefUp0Name])
		}

		// LOAD
		tagCategoryRef01MatchDt0 := map[string]any{
			"id": tagCategoryRef01Data["id"],
		}
		tagCategoryRef01DataDt0Loaded, err := tagCategoryRef01Ent.Load(tagCategoryRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		tagCategoryRef01DataDt0LoadResult := core.ToMapAny(entityData(tagCategoryRef01DataDt0Loaded))
		if tagCategoryRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if tagCategoryRef01DataDt0LoadResult["id"] != tagCategoryRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		tagCategoryRef01MatchRm0 := map[string]any{
			"id": tagCategoryRef01Data["id"],
		}
		_, err = tagCategoryRef01Ent.Remove(tagCategoryRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		tagCategoryRef01MatchRt0 := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		tagCategoryRef01ListRt0Result, err := tagCategoryRef01Ent.List(tagCategoryRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		tagCategoryRef01ListRt0, tagCategoryRef01ListRt0Ok := tagCategoryRef01ListRt0Result.([]any)
		if !tagCategoryRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", tagCategoryRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(tagCategoryRef01ListRt0), map[string]any{"id": tagCategoryRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func tag_categoryBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "tag_category", "TagCategoryTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read tag_category test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse tag_category test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"tag_category01", "tag_category02", "tag_category03", "account01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_CLOUDFORCE_ONE_TEST_TAG_CATEGORY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_CLOUDFORCE_ONE_TEST_TAG_CATEGORY_ENTID": idmap,
		"CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_CLOUDFORCE_ONE_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_CLOUDFORCE_ONE_TEST_TAG_CATEGORY_ENTID"])
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
