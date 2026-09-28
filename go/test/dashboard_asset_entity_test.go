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

func TestDashboardAssetEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.DashboardAsset(nil)
		if ent == nil {
			t.Fatal("expected non-nil DashboardAssetEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := dashboard_assetBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "dashboard_asset." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_CLOUDFORCE_ONE_TEST_DASHBOARD_ASSET_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		dashboardAssetRef01Ent := client.DashboardAsset(nil)
		dashboardAssetRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "dashboard_asset"}), "dashboard_asset_ref01"))
		dashboardAssetRef01Data["account_id"] = setup.idmap["account01"]
		dashboardAssetRef01Data["project_type"] = setup.idmap["project_type01"]
		dashboardAssetRef01Data["request_id"] = setup.idmap["request01"]

		dashboardAssetRef01DataResult, err := dashboardAssetRef01Ent.Create(dashboardAssetRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		dashboardAssetRef01Data = core.ToMapAny(entityData(dashboardAssetRef01DataResult))
		if dashboardAssetRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if dashboardAssetRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LOAD
		dashboardAssetRef01MatchDt0 := map[string]any{
			"id": dashboardAssetRef01Data["id"],
		}
		dashboardAssetRef01DataDt0Loaded, err := dashboardAssetRef01Ent.Load(dashboardAssetRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		dashboardAssetRef01DataDt0LoadResult := core.ToMapAny(entityData(dashboardAssetRef01DataDt0Loaded))
		if dashboardAssetRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if dashboardAssetRef01DataDt0LoadResult["id"] != dashboardAssetRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func dashboard_assetBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "dashboard_asset", "DashboardAssetTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read dashboard_asset test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse dashboard_asset test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"dashboard_asset01", "dashboard_asset02", "dashboard_asset03", "request01", "request02", "request03", "account01", "project_type01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_CLOUDFORCE_ONE_TEST_DASHBOARD_ASSET_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_CLOUDFORCE_ONE_TEST_DASHBOARD_ASSET_ENTID": idmap,
		"CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_CLOUDFORCE_ONE_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_CLOUDFORCE_ONE_TEST_DASHBOARD_ASSET_ENTID"])
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
