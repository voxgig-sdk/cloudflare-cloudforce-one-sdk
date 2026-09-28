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

func TestRfiEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Rfi(nil)
		if ent == nil {
			t.Fatal("expected non-nil RfiEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := rfiBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "rfi." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_CLOUDFORCE_ONE_TEST_RFI_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		rfiRef01Ent := client.Rfi(nil)
		rfiRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "rfi"}), "rfi_ref01"))
		rfiRef01Data["account_id"] = setup.idmap["account01"]
		rfiRef01Data["project_type"] = setup.idmap["project_type01"]

		rfiRef01DataResult, err := rfiRef01Ent.Create(rfiRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		rfiRef01Data = core.ToMapAny(entityData(rfiRef01DataResult))
		if rfiRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if rfiRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		rfiRef01DataUp0Up := map[string]any{
			"id": rfiRef01Data["id"],
			"account_id": setup.idmap["account_id"],
			"project_type": setup.idmap["project_type"],
		}

		rfiRef01MarkdefUp0Name := "assignee"
		rfiRef01MarkdefUp0Value := fmt.Sprintf("Mark01-rfi_ref01_%d", setup.now)
		rfiRef01DataUp0Up[rfiRef01MarkdefUp0Name] = rfiRef01MarkdefUp0Value

		rfiRef01ResdataUp0Result, err := rfiRef01Ent.Update(rfiRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		rfiRef01ResdataUp0 := core.ToMapAny(entityData(rfiRef01ResdataUp0Result))
		if rfiRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if rfiRef01ResdataUp0["id"] != rfiRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if rfiRef01ResdataUp0[rfiRef01MarkdefUp0Name] != rfiRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", rfiRef01MarkdefUp0Name, rfiRef01ResdataUp0[rfiRef01MarkdefUp0Name])
		}

		// LOAD
		rfiRef01MatchDt0 := map[string]any{
			"id": rfiRef01Data["id"],
		}
		rfiRef01DataDt0Loaded, err := rfiRef01Ent.Load(rfiRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		rfiRef01DataDt0LoadResult := core.ToMapAny(entityData(rfiRef01DataDt0Loaded))
		if rfiRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if rfiRef01DataDt0LoadResult["id"] != rfiRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func rfiBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "rfi", "RfiTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read rfi test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse rfi test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"rfi01", "rfi02", "rfi03", "request01", "request02", "request03", "account01", "project_type01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_CLOUDFORCE_ONE_TEST_RFI_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_CLOUDFORCE_ONE_TEST_RFI_ENTID": idmap,
		"CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_CLOUDFORCE_ONE_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_CLOUDFORCE_ONE_TEST_RFI_ENTID"])
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
