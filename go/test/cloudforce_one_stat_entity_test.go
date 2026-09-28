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

func TestCloudforceOneStatEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CloudforceOneStat(nil)
		if ent == nil {
			t.Fatal("expected non-nil CloudforceOneStatEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := cloudforce_one_statBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "cloudforce_one_stat." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_STAT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		cloudforceOneStatRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.cloudforce_one_stat")))
		var cloudforceOneStatRef01Data map[string]any
		if len(cloudforceOneStatRef01DataRaw) > 0 {
			cloudforceOneStatRef01Data = core.ToMapAny(cloudforceOneStatRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = cloudforceOneStatRef01Data

		// LOAD
		cloudforceOneStatRef01Ent := client.CloudforceOneStat(nil)
		cloudforceOneStatRef01MatchDt0 := map[string]any{}
		cloudforceOneStatRef01DataDt0Loaded, err := cloudforceOneStatRef01Ent.Load(cloudforceOneStatRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if cloudforceOneStatRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func cloudforce_one_statBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "cloudforce_one_stat", "CloudforceOneStatTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read cloudforce_one_stat test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse cloudforce_one_stat test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"cloudforce_one_stat01", "cloudforce_one_stat02", "cloudforce_one_stat03"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_STAT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_STAT_ENTID": idmap,
		"CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_CLOUDFORCE_ONE_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_STAT_ENTID"])
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
