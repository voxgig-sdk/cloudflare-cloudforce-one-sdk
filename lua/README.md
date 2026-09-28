# CloudflareCloudforceOne Lua SDK



The Lua SDK for the CloudflareCloudforceOne API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:Attacker()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/cloudflare-cloudforce-one-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("cloudflare-cloudforce-one_sdk")

local client = sdk.new({
  apikey = os.getenv("CLOUDFLARE_CLOUDFORCE_ONE_APIKEY"),
})
```

### 3. Load a dashboardasset

DashboardAsset is nested under account, so provide the `account_id`.

```lua
local dashboardasset, err = client:DashboardAsset():load({ account_id = "example_account_id", project_type = "example_project_type", request_id = "example_request_id" })
if err then error(err) end
print(dashboardasset)
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local permissions, err = client:Permission():list()
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:Permission():list()
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE
CLOUDFLARE_CLOUDFORCE_ONE_APIKEY=<your-key>
```

Then run:

```bash
cd lua && busted test/
```


## Reference

### CloudflareCloudforceOneSDK

```lua
local sdk = require("cloudflare-cloudforce-one_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareCloudforceOneSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `Attacker` | `(data) -> AttackerEntity` | Create an Attacker entity instance. |
| `BinDb` | `(data) -> BinDbEntity` | Create a BinDb entity instance. |
| `BrandProtection` | `(data) -> BrandProtectionEntity` | Create a BrandProtection entity instance. |
| `Category` | `(data) -> CategoryEntity` | Create a Category entity instance. |
| `CloudforceOneAccountExemption` | `(data) -> CloudforceOneAccountExemptionEntity` | Create a CloudforceOneAccountExemption entity instance. |
| `CloudforceOneDeleteAll` | `(data) -> CloudforceOneDeleteAllEntity` | Create a CloudforceOneDeleteAll entity instance. |
| `CloudforceOneEditApproval` | `(data) -> CloudforceOneEditApprovalEntity` | Create a CloudforceOneEditApproval entity instance. |
| `CloudforceOneEmailRuleValidation` | `(data) -> CloudforceOneEmailRuleValidationEntity` | Create a CloudforceOneEmailRuleValidation entity instance. |
| `CloudforceOneEmailRulesList` | `(data) -> CloudforceOneEmailRulesListEntity` | Create a CloudforceOneEmailRulesList entity instance. |
| `CloudforceOneRequestsApiResponseCommon` | `(data) -> CloudforceOneRequestsApiResponseCommonEntity` | Create a CloudforceOneRequestsApiResponseCommon entity instance. |
| `CloudforceOneRule` | `(data) -> CloudforceOneRuleEntity` | Create a CloudforceOneRule entity instance. |
| `CloudforceOneRuleApprovalDetail` | `(data) -> CloudforceOneRuleApprovalDetailEntity` | Create a CloudforceOneRuleApprovalDetail entity instance. |
| `CloudforceOneRuleApprovalsList` | `(data) -> CloudforceOneRuleApprovalsListEntity` | Create a CloudforceOneRuleApprovalsList entity instance. |
| `CloudforceOneRulePreview` | `(data) -> CloudforceOneRulePreviewEntity` | Create a CloudforceOneRulePreview entity instance. |
| `CloudforceOneRulesPreviewList` | `(data) -> CloudforceOneRulesPreviewListEntity` | Create a CloudforceOneRulesPreviewList entity instance. |
| `CloudforceOneRulesSearch` | `(data) -> CloudforceOneRulesSearchEntity` | Create a CloudforceOneRulesSearch entity instance. |
| `CloudforceOneStat` | `(data) -> CloudforceOneStatEntity` | Create a CloudforceOneStat entity instance. |
| `CloudforceOneSuccess` | `(data) -> CloudforceOneSuccessEntity` | Create a CloudforceOneSuccess entity instance. |
| `CloudforceOneTreeNode` | `(data) -> CloudforceOneTreeNodeEntity` | Create a CloudforceOneTreeNode entity instance. |
| `CloudforceOneValidation` | `(data) -> CloudforceOneValidationEntity` | Create a CloudforceOneValidation entity instance. |
| `Collection` | `(data) -> CollectionEntity` | Create a Collection entity instance. |
| `CollectionsItem` | `(data) -> CollectionsItemEntity` | Create a CollectionsItem entity instance. |
| `Country` | `(data) -> CountryEntity` | Create a Country entity instance. |
| `DashboardAsset` | `(data) -> DashboardAssetEntity` | Create a DashboardAsset entity instance. |
| `DashboardUser` | `(data) -> DashboardUserEntity` | Create a DashboardUser entity instance. |
| `Dataset` | `(data) -> DatasetEntity` | Create a Dataset entity instance. |
| `Event` | `(data) -> EventEntity` | Create an Event entity instance. |
| `Group` | `(data) -> GroupEntity` | Create a Group entity instance. |
| `Indicator` | `(data) -> IndicatorEntity` | Create an Indicator entity instance. |
| `IndicatorType` | `(data) -> IndicatorTypeEntity` | Create an IndicatorType entity instance. |
| `Permission` | `(data) -> PermissionEntity` | Create a Permission entity instance. |
| `Priority` | `(data) -> PriorityEntity` | Create a Priority entity instance. |
| `PriorityIntelligence` | `(data) -> PriorityIntelligenceEntity` | Create a PriorityIntelligence entity instance. |
| `PriorityIntelligenceRequirement` | `(data) -> PriorityIntelligenceRequirementEntity` | Create a PriorityIntelligenceRequirement entity instance. |
| `PriorityIntelligenceRequirementsPir` | `(data) -> PriorityIntelligenceRequirementsPirEntity` | Create a PriorityIntelligenceRequirementsPir entity instance. |
| `PublicCredentialMonitor` | `(data) -> PublicCredentialMonitorEntity` | Create a PublicCredentialMonitor entity instance. |
| `Request` | `(data) -> RequestEntity` | Create a Request entity instance. |
| `RequestForInformationRfi` | `(data) -> RequestForInformationRfiEntity` | Create a RequestForInformationRfi entity instance. |
| `RequestsDashboard` | `(data) -> RequestsDashboardEntity` | Create a RequestsDashboard entity instance. |
| `Rfi` | `(data) -> RfiEntity` | Create a Rfi entity instance. |
| `RfiMessage` | `(data) -> RfiMessageEntity` | Create a RfiMessage entity instance. |
| `Rule` | `(data) -> RuleEntity` | Create a Rule entity instance. |
| `Scan` | `(data) -> ScanEntity` | Create a Scan entity instance. |
| `Tag` | `(data) -> TagEntity` | Create a Tag entity instance. |
| `TagCategory` | `(data) -> TagCategoryEntity` | Create a TagCategory entity instance. |
| `TargetIndustry` | `(data) -> TargetIndustryEntity` | Create a TargetIndustry entity instance. |
| `ThreatSignal` | `(data) -> ThreatSignalEntity` | Create a ThreatSignal entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local attacker, err = client:Attacker():load()
    if err then error(err) end
    -- attacker is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

### Entities

#### Attacker

| Field | Description |
| --- | --- |
| `type` |  |

Operations: Load.

API path: `/accounts/{account_id}/cloudforce-one/events/attackers`

#### BinDb

| Field | Description |
| --- | --- |
| `content_type` |  |
| `md5` |  |
| `sha1` |  |
| `sha256` |  |

Operations: Create, Load.

API path: `/accounts/{account_id}/cloudforce-one/binary`

#### BrandProtection

| Field | Description |
| --- | --- |
| `action` |  |
| `body` |  |
| `brand` |  |
| `category` |  |
| `content_type` | MIME type of the image (only present when download=true) |
| `createNotice` |  |
| `createdAt` |  |
| `description` |  |
| `dismissed` | Whether the match is dismissed. |
| `domain` |  |
| `domain_id` |  |
| `domains` |  |
| `errors` |  |
| `fields` |  |
| `first_seen` |  |
| `format` |  |
| `id` |  |
| `image_data` | Base64 encoded image data. |
| `letterText` |  |
| `letterType` |  |
| `matchId` |  |
| `matchType` |  |
| `match_details` | Per-match detail objects with query metadata and individual dismissed state. |
| `match_ids` |  |
| `matched_at` |  |
| `matches` |  |
| `max_time` |  |
| `message` |  |
| `messages` |  |
| `min_time` |  |
| `name` |  |
| `noticeParams` |  |
| `notices` |  |
| `public_scans` |  |
| `queryId` |  |
| `queryIds` |  |
| `query_id` |  |
| `r2_path` |  |
| `registrar` |  |
| `result` |  |
| `result_info` | Present on paginated list responses when page or per_page is supplied. |
| `scan` |  |
| `scan_matches` |  |
| `scan_status` |  |
| `scan_submission_id` |  |
| `score_threshold` | Minimum similarity score threshold for matches (0-1, default: 0) |
| `search_lookback` | If true, search recent domain lookback entries for matches |
| `similarity_score` |  |
| `similarity_threshold` | Minimum similarity score (0-1) required for visual matches |
| `source` |  |
| `status` |  |
| `string_matches` |  |
| `success` |  |
| `tag` | Unique identifier for the logo query |
| `takedownNoticeId` |  |
| `templateId` |  |
| `top_k` | Number of closest matches to return (1-100, default: 10) |
| `total_analyzed` |  |
| `total_matches` |  |
| `truncated` |  |
| `updatedAt` |  |
| `uploaded_at` |  |
| `url_scan_id` |  |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/cloudforce-one/v2/brand-protection/logo/search`

#### Category

| Field | Description |
| --- | --- |
| `id` |  |
| `killChain` |  |
| `mitreAttack` |  |
| `mitreCapec` |  |
| `name` |  |
| `shortname` |  |
| `uuid` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/cloudforce-one/events/event-categories/by-id/{category_id}`

#### CloudforceOneAccountExemption

| Field | Description |
| --- | --- |
| `namespace` |  |
| `tag_match` |  |
| `worker_name` |  |

Operations: Create, List, Remove, Update.

API path: `/accounts/{account_id}/cloudforce-one/rules/exemptions`

#### CloudforceOneDeleteAll

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/accounts/{account_id}/cloudforce-one/rules`

#### CloudforceOneEditApproval

| Field | Description |
| --- | --- |
| `condition` | Nested condition groups support up to 10 levels of depth. |
| `description` |  |
| `enabled` |  |
| `id` |  |
| `meta` |  |
| `name` |  |
| `status` | Disposition for matching email. |
| `strings` |  |

Operations: Create, Update.

API path: `/accounts/{account_id}/cloudforce-one/rules/structured/approvals/{id}/resubmit`

#### CloudforceOneEmailRuleValidation

| Field | Description |
| --- | --- |
| `compiled_yara` |  |
| `condition` | Nested condition groups support up to 10 levels of depth. |
| `description` |  |
| `enabled` |  |
| `error` |  |
| `existing_rule_id` | Existing rule ID to exclude from duplicate-name checks when validating an update. |
| `meta` |  |
| `name` |  |
| `status` | Disposition for matching email. |
| `strings` |  |
| `valid` |  |

Operations: Create.

API path: `/accounts/{account_id}/cloudforce-one/rules/structured/validate`

#### CloudforceOneEmailRulesList

| Field | Description |
| --- | --- |
| `content` |  |
| `created_at` |  |
| `created_by` |  |
| `description` |  |
| `enabled` | Whether this rule is active for dice consumers. |
| `id` |  |
| `is_public` | Whether this rule is visible to other internal accounts. |
| `meta` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` |  |
| `namespaces` |  |
| `path` |  |
| `pending_approval_id` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | Proposed update or deletion awaiting approval. |
| `structured_source` | Original JSON payload for rules created via the structured rules API. |
| `updated_at` |  |
| `updated_by` |  |

Operations: List.

API path: `/accounts/{account_id}/cloudforce-one/rules/structured`

#### CloudforceOneRequestsApiResponseCommon

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/accounts/{account_id}/cloudforce-one/requests/{request_id}/asset/{asset_id}`

#### CloudforceOneRule

| Field | Description |
| --- | --- |
| `actions` |  |
| `commit_message` | Human-readable justification for this change. |
| `content` |  |
| `description` | Human-readable description of the rule. |
| `enabled` | Whether this rule is active for dice consumers. |
| `is_public` | Whether this rule is visible to other internal accounts. |
| `meta` | Adds YARA meta entries to the rule's meta block and stores them in rule_meta alongside content metadata. |
| `name` |  |
| `namespaces` | Optional WfP deployment tags (customer rules only). |
| `path` |  |

Operations: Create.

API path: `/accounts/{account_id}/cloudforce-one/rules`

#### CloudforceOneRuleApprovalDetail

| Field | Description |
| --- | --- |
| `audit_log_id` |  |
| `can_review` | Whether the authenticated user may approve or reject this pending change. |
| `cancelled_at` | Time at which the requester cancelled the approval. |
| `cancelled_by` | Requester who cancelled the pending approval. |
| `change_description` |  |
| `change_type` |  |
| `commit_message` | The requester supplies this human-readable justification with the change. |
| `compiler_warnings` |  |
| `current_rule` |  |
| `id` |  |
| `proposed_changes` | Contains structured proposed rule changes, or null for unresolved persisted data. |
| `rejection_reason` | The reviewer may supply a reason when rejecting the change. |
| `requested_at` |  |
| `requested_by` |  |
| `reviewed_at` |  |
| `reviewer_scope` | Review policy: general Nomos approvers for default; general approvers or Phishguard for email. |
| `revision_number` | Revision number within this approval request chain. |
| `rule_id` |  |
| `rule_name` |  |
| `status` |  |
| `superseded_by_approval_id` | Newer approval revision that replaced this approval. |
| `supersedes_approval_id` | This approval replaces the referenced approval revision. |

Operations: Create, Load.

API path: `/accounts/{account_id}/cloudforce-one/rules/approvals/{id}/resubmit`

#### CloudforceOneRuleApprovalsList

| Field | Description |
| --- | --- |
| `audit_log_id` |  |
| `can_review` | Whether the authenticated user may approve or reject this pending change. |
| `cancelled_at` | Time at which the requester cancelled the approval. |
| `cancelled_by` | Requester who cancelled the pending approval. |
| `change_description` |  |
| `change_type` |  |
| `commit_message` | The requester supplies this human-readable justification with the change. |
| `id` |  |
| `proposed_changes` | Contains structured proposed rule changes, or null for unresolved persisted data. |
| `rejection_reason` | The reviewer may supply a reason when rejecting the change. |
| `requested_at` |  |
| `requested_by` |  |
| `reviewed_at` |  |
| `reviewer_scope` | Review policy: general Nomos approvers for default; general approvers or Phishguard for email. |
| `revision_number` | Revision number within this approval request chain. |
| `rule_id` |  |
| `rule_name` |  |
| `status` |  |
| `superseded_by_approval_id` | Newer approval revision that replaced this approval. |
| `supersedes_approval_id` | This approval replaces the referenced approval revision. |

Operations: List.

API path: `/accounts/{account_id}/cloudforce-one/rules/approvals`

#### CloudforceOneRulePreview

| Field | Description |
| --- | --- |
| `commit_message` | Human-readable justification for this change. |
| `condition` | Nested condition groups support up to 10 levels of depth. |
| `content` |  |
| `created_at` |  |
| `created_by` |  |
| `description` | Human-readable description of the rule. |
| `enabled` | Whether this rule is active for dice consumers. |
| `id` |  |
| `is_public` | Whether this rule is visible to other internal accounts. |
| `meta` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` |  |
| `namespaces` |  |
| `path` | Path change goes through approval workflow. |
| `pending_approval_id` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | Proposed update or deletion awaiting approval. |
| `status` | Disposition for matching email. |
| `strings` |  |
| `structured_source` | Original JSON payload for rules created via the structured rules API. |
| `updated_at` |  |
| `updated_by` |  |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/cloudforce-one/rules/structured/{id}/test`

#### CloudforceOneRulesPreviewList

| Field | Description |
| --- | --- |
| `content` |  |
| `created_at` |  |
| `created_by` |  |
| `description` |  |
| `enabled` | Whether this rule is active for dice consumers. |
| `id` |  |
| `is_public` | Whether this rule is visible to other internal accounts. |
| `meta` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` |  |
| `namespaces` |  |
| `path` |  |
| `pending_approval_id` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | Proposed update or deletion awaiting approval. |
| `structured_source` | Original JSON payload for rules created via the structured rules API. |
| `updated_at` |  |
| `updated_by` |  |

Operations: List.

API path: `/accounts/{account_id}/cloudforce-one/rules`

#### CloudforceOneRulesSearch

| Field | Description |
| --- | --- |
| `content` |  |
| `created_at` |  |
| `created_by` |  |
| `description` |  |
| `enabled` | Whether this rule is active for dice consumers. |
| `id` |  |
| `is_public` | Whether this rule is visible to other internal accounts. |
| `meta` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` |  |
| `namespaces` |  |
| `path` |  |
| `pending_approval_id` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | Proposed update or deletion awaiting approval. |
| `score` | Relevance score in [0,1]. |
| `scoring_details` | AI Search hybrid retrieval returns this per-component scoring breakdown. |
| `structured_source` | Original JSON payload for rules created via the structured rules API. |
| `updated_at` |  |
| `updated_by` |  |

Operations: List.

API path: `/accounts/{account_id}/cloudforce-one/rules/search`

#### CloudforceOneStat

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/accounts/{account_id}/cloudforce-one/rules/stats`

#### CloudforceOneSuccess

| Field | Description |
| --- | --- |
| `id` |  |
| `success` |  |

Operations: Create, Remove.

API path: `/accounts/{account_id}/cloudforce-one/rules/approvals/{id}/cancel`

#### CloudforceOneTreeNode

| Field | Description |
| --- | --- |
| `children` |  |
| `count` |  |
| `name` |  |
| `path` |  |

Operations: List.

API path: `/accounts/{account_id}/cloudforce-one/rules/tree`

#### CloudforceOneValidation

| Field | Description |
| --- | --- |
| `content` |  |
| `error` |  |
| `excludeRuleId` |  |
| `name` |  |
| `namespaces` |  |
| `path` |  |
| `valid` |  |

Operations: Create.

API path: `/accounts/{account_id}/cloudforce-one/rules/validate`

#### Collection

| Field | Description |
| --- | --- |
| `columns` |  |
| `created_at` |  |
| `created_by` |  |
| `data` |  |
| `id` |  |
| `item_count` |  |
| `metadata` |  |
| `name` | New column name (must be unique) |
| `position` | Column display order |
| `required` | Whether column is required |
| `status` |  |
| `type` | Column type: text, number, boolean, or date |
| `updated_at` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}/columns`

#### CollectionsItem

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}/items`

#### Country

| Field | Description |
| --- | --- |
| `result` |  |
| `success` |  |

Operations: List.

API path: `/accounts/{account_id}/cloudforce-one/events/countries`

#### DashboardAsset

| Field | Description |
| --- | --- |
| `assets` |  |
| `contentType` |  |
| `count` |  |
| `downloadable` |  |
| `expiresAt` |  |
| `fileName` |  |
| `fileSize` |  |
| `id` |  |
| `is_cloudflare_team` |  |
| `metadata` |  |
| `origin` |  |
| `state` |  |
| `tlp` |  |
| `uploadedAt` |  |

Operations: Create, Load.

API path: `/accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/assets/upload`

#### DashboardUser

| Field | Description |
| --- | --- |
| `display_name` | User display name |
| `id` | Unique user ID |

Operations: Load.

API path: `/accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/user/me`

#### Dataset

| Field | Description |
| --- | --- |
| `deletedAt` |  |
| `id` |  |
| `indicatorWriteMode` | Effective indicator mutation capability after account/dataset authorization and dataset storage capability are applied. |
| `isAnalytics` |  |
| `isPublic` | If true, then anyone can search the dataset. |
| `name` | Used to describe the dataset within the account context. |
| `uuid` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/copy`

#### Event

| Field | Description |
| --- | --- |
| `accountId` |  |
| `account_id` | Account ID |
| `alert_enabled` | Whether alerts are enabled |
| `alert_rollup_enabled` | Whether alert rollup is enabled |
| `attacker` |  |
| `attackerCountry` |  |
| `attackerCountryAlpha3` |  |
| `category` |  |
| `childIds` | Array of child event UUIDs that were processed |
| `created` |  |
| `createdAt` |  |
| `createdEventsCount` | Number of events created |
| `createdIndicatorsCount` | Number of indicators created |
| `createdRelationshipsCount` | Number of relationships created |
| `created_at` | Creation timestamp |
| `cursor` | Cursor for pagination. |
| `custom_threat_feed_id` | Intel Indicator Feed ID (numeric) |
| `data` |  |
| `datasetId` | Dataset UUIDs to query, or one standalone scope value: 'all'/'*' for the legacy all-datasets behavior, 'analytics' for isAnalytics=true datasets, or 'operational' for isAnalytics=false datasets. |
| `date` |  |
| `errorCount` | Number of errors encountered |
| `errors` | Array of error details |
| `event` |  |
| `eventIds` | List of event UUIDs to update (1-100) |
| `failedCount` |  |
| `failures` | List of events that failed to update with error messages |
| `hasChildren` |  |
| `id` | Unique identifier for the saved query |
| `includeCreatedEvents` | When true, response includes array of created event UUIDs and shard IDs. |
| `indicator` |  |
| `indicatorType` |  |
| `indicatorTypeId` |  |
| `insight` |  |
| `killChain` |  |
| `message` | Human-readable message describing the operation result |
| `mitreAttack` |  |
| `mitreCapec` |  |
| `name` | Name of the saved query |
| `numReferenced` |  |
| `numReferences` |  |
| `order` |  |
| `orderBy` |  |
| `page` |  |
| `pageSize` |  |
| `parentId` | UUID of the parent event that will be the source of the relationship |
| `query_json` | JSON string containing the query parameters |
| `raw` |  |
| `rawId` |  |
| `referenced` |  |
| `referencedIds` |  |
| `references` |  |
| `referencesIds` |  |
| `relationshipType` | Type of relationship to create between parent and child events |
| `relationships` | Array of successfully created relationship objects |
| `relationshipsCreated` | Number of relationships that were successfully created |
| `releasabilityId` |  |
| `rule_enabled` | Whether rule is enabled |
| `rule_list_id` | WAF rules list ID for blocking |
| `rule_scope` | Scope for the rule |
| `search` | Structured search as a JSON array of {field, op, value} objects. |
| `source` |  |
| `success` | Whether the relationship creation operation completed successfully |
| `tags` |  |
| `targetCountry` |  |
| `targetCountryAlpha3` |  |
| `targetIndustry` |  |
| `tlp` |  |
| `updatedCount` |  |
| `updated_at` | Last update timestamp |
| `updates` | Fields to update on all specified events. |
| `user_email` | Email of the user who created the query |
| `uuid` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/cloudforce-one/events`

#### Group

| Field | Description |
| --- | --- |
| `createdAt` |  |
| `description` |  |
| `id` |  |
| `members` |  |
| `name` |  |
| `updatedAt` |  |
| `uuid` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}/members`

#### Indicator

| Field | Description |
| --- | --- |
| `completeness` |  |
| `confidence` | Updated confidence. |
| `createdAt` |  |
| `datasetId` | The dataset ID this indicator belongs to. |
| `description` | Optional description for the indicator type |
| `durableObjectId` |  |
| `id` |  |
| `indicatorType` | The indicator type to create (e.g., 'DOMAIN', 'IP', 'URL', 'HASH', 'EMAIL') |
| `indicators` |  |
| `message` |  |
| `metadata` | Updated metadata. |
| `pagination` |  |
| `relatedEvents` |  |
| `sources` | RSS article sources from which this indicator was extracted. |
| `tags` |  |
| `tlp` | Traffic Light Protocol designation. |
| `type` | Updated relationship type. |
| `updatedAt` |  |
| `uuid` |  |
| `value` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/{indicator_id}/relationships`

#### IndicatorType

| Field | Description |
| --- | --- |
| `type` |  |

Operations: Load.

API path: `/accounts/{account_id}/cloudforce-one/events/indicator-types`

#### Permission

| Field | Description |
| --- | --- |
| `createdAt` |  |
| `id` |  |
| `message` |  |
| `resourceId` | The resource ID this permission applies to account_id or group_id |
| `resourceType` |  |
| `role` |  |
| `subjectId` |  |
| `subjectType` |  |
| `success` |  |
| `updatedAt` |  |
| `uuid` |  |

Operations: Create, List, Remove, Update.

API path: `/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/permissions`

#### Priority

| Field | Description |
| --- | --- |
| `errors` |  |
| `id` |  |
| `labels` | List of labels. |
| `messages` |  |
| `page` | Page number of results. |
| `per_page` | Number of results per page. |
| `priority` | Priority. |
| `requirement` | Requirement. |
| `result` |  |
| `success` | Whether the API call was successful. |
| `tlp` | The CISA defined Traffic Light Protocol (TLP). |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/cloudforce-one/requests/priority`

#### PriorityIntelligence

| Field | Description |
| --- | --- |
| `id` |  |
| `labels` |  |
| `priority` |  |
| `requirement` |  |
| `tlp` |  |

Operations: Create, Load, Remove, Update.

API path: `/accounts/{account_id}/cloudforce-one/v2/priority-intelligence`

#### PriorityIntelligenceRequirement

| Field | Description |
| --- | --- |
| `as_of` |  |
| `backtest_days` |  |
| `candidate_limit` |  |
| `dataset_ids` |  |
| `dimension` |  |
| `emerging_min_current_count` |  |
| `enabled` |  |
| `established_min_absolute_delta` |  |
| `established_min_prior_count` |  |
| `established_min_relative_delta` |  |
| `value` |  |
| `window_days` |  |

Operations: Create, Load, Remove, Update.

API path: `/accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests`

#### PriorityIntelligenceRequirementsPir

| Field | Description |
| --- | --- |
| `errors` |  |
| `labels` | List of labels. |
| `messages` |  |
| `priority` | Priority. |
| `requirement` | Requirement. |
| `result` |  |
| `success` | Whether the API call was successful. |
| `tlp` | The CISA defined Traffic Light Protocol (TLP). |

Operations: Create, List.

API path: `/accounts/{account_id}/cloudforce-one/requests/priority/new`

#### PublicCredentialMonitor

| Field | Description |
| --- | --- |
| `created_at` |  |
| `domain` | Domain to monitor (e.g. |
| `id` |  |
| `matched_at` |  |
| `username` |  |

Operations: Create, List, Remove.

API path: `/accounts/{account_id}/cloudforce-one/v2/credential-monitor/domains`

#### Request

| Field | Description |
| --- | --- |
| `completed_after` | Retrieve requests completed after this time. |
| `completed_before` | Retrieve requests completed before this time. |
| `content` | Request content. |
| `created_after` | Retrieve requests created after this time. |
| `created_before` | Retrieve requests created before this time. |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `page` | Page number of results. |
| `per_page` | Number of results per page. |
| `priority` | Priority for analyzing the request. |
| `request_type` | Requested information from request. |
| `result` |  |
| `sort_by` | Field to sort results by. |
| `sort_order` | Sort order (asc or desc). |
| `status` | Request Status. |
| `success` | Whether the API call was successful. |
| `summary` | Brief description of the request. |
| `tlp` | The CISA defined Traffic Light Protocol (TLP). |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/cloudforce-one/requests`

#### RequestForInformationRfi

| Field | Description |
| --- | --- |
| `content` | Content of message. |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `priority` | Priority for analyzing the request. |
| `request_type` | Requested information from request. |
| `result` |  |
| `source` | Asset file to upload. |
| `success` | Whether the API call was successful. |
| `summary` | Brief description of the request. |
| `tlp` | The CISA defined Traffic Light Protocol (TLP). |

Operations: Create, List, Load, Update.

API path: `/accounts/{account_id}/cloudforce-one/requests/{request_id}/asset`

#### RequestsDashboard

| Field | Description |
| --- | --- |
| `created` |  |
| `defaultValue` |  |
| `description` |  |
| `displayOrder` |  |
| `errors` | Always empty on success |
| `fieldLabel` |  |
| `fieldName` |  |
| `fieldType` |  |
| `id` |  |
| `messages` | Always empty on success |
| `options` |  |
| `projectType` |  |
| `project_type` |  |
| `public` |  |
| `request_types` |  |
| `required` |  |
| `result` |  |
| `sectionID` |  |
| `sectionLabel` |  |
| `success` |  |
| `total` |  |
| `updated` |  |
| `validation` |  |

Operations: List, Load.

API path: `/accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/metadata`

#### Rfi

| Field | Description |
| --- | --- |
| `account` |  |
| `assignee` | Assignee email |
| `completed` | Completion timestamp |
| `created` | Creation timestamp |
| `description` | RFI description (optional). |
| `eventId` | Optional related event ID |
| `id` | RFI UUID |
| `investigation_id` | Investigation UUID |
| `is_free_request` | Whether this is a free request |
| `message_tokens` | Total message tokens |
| `metadata` | Optional metadata fields specific to the RFI type |
| `pagination` |  |
| `priority` | Request priority |
| `readable_id` | Human-readable ID |
| `release_entitlements` | Release entitlements |
| `report_id` | Report UUID |
| `request` |  |
| `request_type` | Optional request type for the request |
| `result` |  |
| `status` | RFI status. |
| `subtypeId` | Optional subtype ID |
| `success` |  |
| `summary` | RFI summary |
| `title` | RFI title (optional). |
| `tlp` | TLP classification |
| `tokens` | Total tokens used |
| `updated` | Last update timestamp |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/cloudforce-one/v2/requests/{project_type}`

#### RfiMessage

| Field | Description |
| --- | --- |
| `attachment_asset_ids` |  |
| `attachments` |  |
| `author_id` |  |
| `author_name` |  |
| `content` |  |
| `created` |  |
| `id` |  |
| `is_cloudflare_team` |  |
| `is_published` |  |
| `publish` |  |
| `published` |  |
| `tlp` |  |
| `updated` |  |

Operations: Create, List, Load, Update.

API path: `/accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/messages/new`

#### Rule

| Field | Description |
| --- | --- |
| `arrays` |  |
| `headers` |  |
| `operators` |  |
| `scalars` |  |
| `string_arrays` |  |
| `structs` |  |

Operations: List.

API path: `/accounts/{account_id}/cloudforce-one/rules/managed`

#### Scan

| Field | Description |
| --- | --- |
| `errors` |  |
| `frequency` | Defines the number of days between each scan (0 = One-off scan). |
| `ips` | Defines a list of IP addresses or CIDR blocks to scan. |
| `messages` |  |
| `ports` | Defines a list of ports to scan. |
| `result` |  |
| `success` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/cloudforce-one/scans/config`

#### Tag

| Field | Description |
| --- | --- |
| `activeDuration` |  |
| `activeDuration_annotated` |  |
| `actorCategory` |  |
| `actorCategory_annotated` |  |
| `aliasGroupNames` |  |
| `aliasGroupNamesInternal` |  |
| `aliases` | Structured aliases ({ value, confidence 1-10, tlp }). |
| `attributionOrganization` |  |
| `attributionOrganization_annotated` |  |
| `categoryName` |  |
| `categoryUuid` | Tag type (category) UUID. |
| `confidence` | Overall tag confidence (1-10). |
| `createdAt` |  |
| `dateOfDiscovery` | Date of discovery (ISO YYYY-MM-DD). |
| `description` |  |
| `externalReferenceLinks` |  |
| `externalReferences` | Structured external references ({ url, description }). |
| `externalReferences_annotated` |  |
| `id` |  |
| `internalAliases` | Internal structured aliases ({ value, confidence 1-10, tlp }). |
| `internalDescription` |  |
| `lastSeen` |  |
| `metadata` | Updated metadata. |
| `motive` |  |
| `motive_annotated` |  |
| `opsecLevel` |  |
| `opsecLevel_annotated` |  |
| `originCountryISO` | ISO country code (alpha-2 or alpha-3). |
| `originCountryISO_annotated` |  |
| `priority` |  |
| `priority_annotated` |  |
| `properties` | Parsed custom field values. |
| `sophisticationLevel` |  |
| `sophisticationLevel_annotated` |  |
| `tlp` | Tag-level TLP handling marking. |
| `type` | Updated relationship type. |
| `updatedAt` |  |
| `uuid` |  |
| `value` |  |
| `version` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}/relationships`

#### TagCategory

| Field | Description |
| --- | --- |
| `createdAt` |  |
| `description` |  |
| `id` |  |
| `name` |  |
| `schema` | Parsed FieldDefinition[] defining custom fields for this category, or null if none. |
| `updatedAt` |  |
| `uuid` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/cloudforce-one/events/tags/categories/create`

#### TargetIndustry

| Field | Description |
| --- | --- |
| `type` |  |

Operations: Load.

API path: `/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/targetIndustries`

#### ThreatSignal

| Field | Description |
| --- | --- |
| `category_id` | One of the predefined Threat Signals feed categories; see GET /:account_id/v2/threat-signals/categories. |
| `category_uuids` |  |
| `config` |  |
| `display_name` |  |
| `display_order` |  |
| `enabled` |  |
| `errors` |  |
| `feeds` |  |
| `is_active` |  |
| `message` |  |
| `messages` |  |
| `name` |  |
| `opted_out` |  |
| `output_schema` |  |
| `poll_interval_s` |  |
| `prompt` |  |
| `read` |  |
| `result` |  |
| `skill_ids` |  |
| `success` |  |
| `tag_id` |  |
| `title` |  |
| `url` |  |
| `why_valuable` |  |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/cloudforce-one/v2/threat-signals/articles/{article_id}/skills/{skill_id}/diagnostic`



## Entities


### Attacker

Create an instance: `local attacker = client:Attacker(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `type` | `string` |  |

#### Example: Load

```lua
local attacker, err = client:Attacker():load({ account_id = "account_id" })
```


### BinDb

Create an instance: `local bin_db = client:BinDb(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content_type` | `string` |  |
| `md5` | `string` |  |
| `sha1` | `string` |  |
| `sha256` | `string` |  |

#### Example: Load

```lua
local bin_db, err = client:BinDb():load({ account_id = "account_id", hash = "hash" })
```

#### Example: Create

```lua
local bin_db, err = client:BinDb():create({
  account_id = "example_account_id", -- string
  content_type = "example_content_type", -- string
  md5 = "example_md5", -- string
  sha1 = "example_sha1", -- string
  sha256 = "example_sha256", -- string
})
```


### BrandProtection

Create an instance: `local brand_protection = client:BrandProtection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` |  |
| `body` | `string` |  |
| `brand` | `string` |  |
| `category` | `string` |  |
| `content_type` | `string` | MIME type of the image (only present when download=true) |
| `createNotice` | `boolean` |  |
| `createdAt` | `string` |  |
| `description` | `string` |  |
| `dismissed` | `boolean` | Whether the match is dismissed. |
| `domain` | `string` |  |
| `domain_id` | `number` |  |
| `domains` | `table` |  |
| `errors` | `table` |  |
| `fields` | `table` |  |
| `first_seen` | `string` |  |
| `format` | `string` |  |
| `id` | `number` |  |
| `image_data` | `string` | Base64 encoded image data. |
| `letterText` | `string` |  |
| `letterType` | `string` |  |
| `matchId` | `number` |  |
| `matchType` | `string` |  |
| `match_details` | `table` | Per-match detail objects with query metadata and individual dismissed state. |
| `match_ids` | `table` |  |
| `matched_at` | `string` |  |
| `matches` | `table` |  |
| `max_time` | `string` |  |
| `message` | `string` |  |
| `messages` | `table` |  |
| `min_time` | `string` |  |
| `name` | `string` |  |
| `noticeParams` | `table` |  |
| `notices` | `table` |  |
| `public_scans` | `table` |  |
| `queryId` | `number` |  |
| `queryIds` | `table` |  |
| `query_id` | `number` |  |
| `r2_path` | `string` |  |
| `registrar` | `string` |  |
| `result` | `any` |  |
| `result_info` | `table` | Present on paginated list responses when page or per_page is supplied. |
| `scan` | `boolean` |  |
| `scan_matches` | `boolean` |  |
| `scan_status` | `string` |  |
| `scan_submission_id` | `number` |  |
| `score_threshold` | `number` | Minimum similarity score threshold for matches (0-1, default: 0) |
| `search_lookback` | `boolean` | If true, search recent domain lookback entries for matches |
| `similarity_score` | `number` |  |
| `similarity_threshold` | `number` | Minimum similarity score (0-1) required for visual matches |
| `source` | `string` |  |
| `status` | `string` |  |
| `string_matches` | `table` |  |
| `success` | `boolean` |  |
| `tag` | `string` | Unique identifier for the logo query |
| `takedownNoticeId` | `number` |  |
| `templateId` | `string` |  |
| `top_k` | `number` | Number of closest matches to return (1-100, default: 10) |
| `total_analyzed` | `number` |  |
| `total_matches` | `number` |  |
| `truncated` | `boolean` |  |
| `updatedAt` | `string` |  |
| `uploaded_at` | `string` |  |
| `url_scan_id` | `string` |  |

#### Example: Load

```lua
local brand_protection, err = client:BrandProtection():load({ account_id = "account_id" })
```

#### Example: List

```lua
local brand_protections, err = client:BrandProtection():list()
```

#### Example: Create

```lua
local brand_protection, err = client:BrandProtection():create({
  account_id = "example_account_id", -- string
  action = "example_action", -- string
  body = "example_body", -- string
  brand = "example_brand", -- string
  category = "example_category", -- string
  createdAt = "example_createdAt", -- string
  description = "example_description", -- string
  dismissed = true, -- boolean
  domain = "example_domain", -- string
  domain_id = 1, -- number
  domains = {}, -- table
  errors = {}, -- table
  fields = {}, -- table
  first_seen = "example_first_seen", -- string
  id = 1, -- number
  image_data = "example_image_data", -- string
  letterText = "example_letterText", -- string
  letterType = "example_letterType", -- string
  matchId = 1, -- number
  matchType = "example_matchType", -- string
  matched_at = "example_matched_at", -- string
  matches = {}, -- table
  message = "example_message", -- string
  messages = {}, -- table
  name = "example_name", -- string
  noticeParams = {}, -- table
  notices = {}, -- table
  public_scans = {}, -- table
  queryId = 1, -- number
  r2_path = "example_r2_path", -- string
  registrar = "example_registrar", -- string
  result = "example_result", -- any
  result_info = {}, -- table
  scan_status = "example_scan_status", -- string
  scan_submission_id = 1, -- number
  similarity_score = 1, -- number
  similarity_threshold = 1, -- number
  source = "example_source", -- string
  status = "example_status", -- string
  string_matches = {}, -- table
  success = true, -- boolean
  tag = "example_tag", -- string
  takedownNoticeId = 1, -- number
  templateId = "example_templateId", -- string
  total_analyzed = 1, -- number
  total_matches = 1, -- number
  truncated = true, -- boolean
  updatedAt = "example_updatedAt", -- string
  uploaded_at = "example_uploaded_at", -- string
  url_scan_id = "example_url_scan_id", -- string
})
```


### Category

Create an instance: `local category = client:Category(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `killChain` | `number` |  |
| `mitreAttack` | `table` |  |
| `mitreCapec` | `table` |  |
| `name` | `string` |  |
| `shortname` | `string` |  |
| `uuid` | `string` |  |

#### Example: Load

```lua
local category, err = client:Category():load({ id = "category_id", account_id = "account_id" })
```

#### Example: List

```lua
local categorys, err = client:Category():list()
```

#### Example: Create

```lua
local category, err = client:Category():create({
  account_id = "example_account_id", -- string
  killChain = 1, -- number
  name = "example_name", -- string
  uuid = "example_uuid", -- string
})
```


### CloudforceOneAccountExemption

Create an instance: `local cloudforce_one_account_exemption = client:CloudforceOneAccountExemption(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `namespace` | `table` |  |
| `tag_match` | `table` |  |
| `worker_name` | `table` |  |

#### Example: List

```lua
local cloudforce_one_account_exemptions, err = client:CloudforceOneAccountExemption():list()
```

#### Example: Create

```lua
local cloudforce_one_account_exemption, err = client:CloudforceOneAccountExemption():create({
  account_id = "example_account_id", -- string
  namespace = {}, -- table
  tag_match = {}, -- table
  worker_name = {}, -- table
})
```


### CloudforceOneDeleteAll

Create an instance: `local cloudforce_one_delete_all = client:CloudforceOneDeleteAll(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### CloudforceOneEditApproval

Create an instance: `local cloudforce_one_edit_approval = client:CloudforceOneEditApproval(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `condition` | `table` | Nested condition groups support up to 10 levels of depth. |
| `description` | `string` |  |
| `enabled` | `boolean` |  |
| `id` | `string` |  |
| `meta` | `table` |  |
| `name` | `string` |  |
| `status` | `string` | Disposition for matching email. |
| `strings` | `table` |  |

#### Example: Create

```lua
local cloudforce_one_edit_approval, err = client:CloudforceOneEditApproval():create({
  account_id = "example_account_id", -- string
  approval_id = "example_approval_id", -- string
  condition = {}, -- table
  name = "example_name", -- string
})
```


### CloudforceOneEmailRuleValidation

Create an instance: `local cloudforce_one_email_rule_validation = client:CloudforceOneEmailRuleValidation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `compiled_yara` | `string` |  |
| `condition` | `table` | Nested condition groups support up to 10 levels of depth. |
| `description` | `string` |  |
| `enabled` | `boolean` |  |
| `error` | `string` |  |
| `existing_rule_id` | `string` | Existing rule ID to exclude from duplicate-name checks when validating an update. |
| `meta` | `table` |  |
| `name` | `string` |  |
| `status` | `string` | Disposition for matching email. |
| `strings` | `table` |  |
| `valid` | `boolean` |  |

#### Example: Create

```lua
local cloudforce_one_email_rule_validation, err = client:CloudforceOneEmailRuleValidation():create({
  account_id = "example_account_id", -- string
  condition = {}, -- table
  name = "example_name", -- string
  valid = true, -- boolean
})
```


### CloudforceOneEmailRulesList

Create an instance: `local cloudforce_one_email_rules_list = client:CloudforceOneEmailRulesList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `string` |  |
| `created_at` | `number` |  |
| `created_by` | `string` |  |
| `description` | `string` |  |
| `enabled` | `boolean` | Whether this rule is active for dice consumers. |
| `id` | `string` |  |
| `is_public` | `boolean` | Whether this rule is visible to other internal accounts. |
| `meta` | `table` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` |  |
| `namespaces` | `table` |  |
| `path` | `string` |  |
| `pending_approval_id` | `number` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `table` | Proposed update or deletion awaiting approval. |
| `structured_source` | `string` | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `number` |  |
| `updated_by` | `string` |  |

#### Example: List

```lua
local cloudforce_one_email_rules_lists, err = client:CloudforceOneEmailRulesList():list()
```


### CloudforceOneRequestsApiResponseCommon

Create an instance: `local cloudforce_one_requests_api_response_common = client:CloudforceOneRequestsApiResponseCommon(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### CloudforceOneRule

Create an instance: `local cloudforce_one_rule = client:CloudforceOneRule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `table` |  |
| `commit_message` | `string` | Human-readable justification for this change. |
| `content` | `string` |  |
| `description` | `string` | Human-readable description of the rule. |
| `enabled` | `boolean` | Whether this rule is active for dice consumers. |
| `is_public` | `boolean` | Whether this rule is visible to other internal accounts. |
| `meta` | `table` | Adds YARA meta entries to the rule's meta block and stores them in rule_meta alongside content metadata. |
| `name` | `string` |  |
| `namespaces` | `table` | Optional WfP deployment tags (customer rules only). |
| `path` | `string` |  |

#### Example: Create

```lua
local cloudforce_one_rule, err = client:CloudforceOneRule():create({
  account_id = "example_account_id", -- string
  content = "example_content", -- string
  name = "example_name", -- string
  path = "example_path", -- string
})
```


### CloudforceOneRuleApprovalDetail

Create an instance: `local cloudforce_one_rule_approval_detail = client:CloudforceOneRuleApprovalDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `audit_log_id` | `number` |  |
| `can_review` | `boolean` | Whether the authenticated user may approve or reject this pending change. |
| `cancelled_at` | `number` | Time at which the requester cancelled the approval. |
| `cancelled_by` | `string` | Requester who cancelled the pending approval. |
| `change_description` | `string` |  |
| `change_type` | `string` |  |
| `commit_message` | `string` | The requester supplies this human-readable justification with the change. |
| `compiler_warnings` | `table` |  |
| `current_rule` | `any` |  |
| `id` | `number` |  |
| `proposed_changes` | `any` | Contains structured proposed rule changes, or null for unresolved persisted data. |
| `rejection_reason` | `string` | The reviewer may supply a reason when rejecting the change. |
| `requested_at` | `number` |  |
| `requested_by` | `string` |  |
| `reviewed_at` | `number` |  |
| `reviewer_scope` | `string` | Review policy: general Nomos approvers for default; general approvers or Phishguard for email. |
| `revision_number` | `number` | Revision number within this approval request chain. |
| `rule_id` | `string` |  |
| `rule_name` | `string` |  |
| `status` | `string` |  |
| `superseded_by_approval_id` | `number` | Newer approval revision that replaced this approval. |
| `supersedes_approval_id` | `number` | This approval replaces the referenced approval revision. |

#### Example: Load

```lua
local cloudforce_one_rule_approval_detail, err = client:CloudforceOneRuleApprovalDetail():load({ id = "cloudforce_one_rule_approval_detail_id", account_id = "account_id" })
```

#### Example: Create

```lua
local cloudforce_one_rule_approval_detail, err = client:CloudforceOneRuleApprovalDetail():create({
  account_id = "example_account_id", -- string
  approval_id = "example_approval_id", -- string
  audit_log_id = 1, -- number
  can_review = true, -- boolean
  cancelled_at = 1, -- number
  cancelled_by = "example_cancelled_by", -- string
  change_description = "example_change_description", -- string
  change_type = "example_change_type", -- string
  commit_message = "example_commit_message", -- string
  current_rule = "example_current_rule", -- any
  id = 1, -- number
  proposed_changes = "example_proposed_changes", -- any
  rejection_reason = "example_rejection_reason", -- string
  requested_at = 1, -- number
  requested_by = "example_requested_by", -- string
  reviewed_at = 1, -- number
  reviewer_scope = "example_reviewer_scope", -- string
  revision_number = 1, -- number
  rule_id = "example_rule_id", -- string
  rule_name = "example_rule_name", -- string
  status = "example_status", -- string
  superseded_by_approval_id = 1, -- number
  supersedes_approval_id = 1, -- number
})
```


### CloudforceOneRuleApprovalsList

Create an instance: `local cloudforce_one_rule_approvals_list = client:CloudforceOneRuleApprovalsList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `audit_log_id` | `number` |  |
| `can_review` | `boolean` | Whether the authenticated user may approve or reject this pending change. |
| `cancelled_at` | `number` | Time at which the requester cancelled the approval. |
| `cancelled_by` | `string` | Requester who cancelled the pending approval. |
| `change_description` | `string` |  |
| `change_type` | `string` |  |
| `commit_message` | `string` | The requester supplies this human-readable justification with the change. |
| `id` | `number` |  |
| `proposed_changes` | `any` | Contains structured proposed rule changes, or null for unresolved persisted data. |
| `rejection_reason` | `string` | The reviewer may supply a reason when rejecting the change. |
| `requested_at` | `number` |  |
| `requested_by` | `string` |  |
| `reviewed_at` | `number` |  |
| `reviewer_scope` | `string` | Review policy: general Nomos approvers for default; general approvers or Phishguard for email. |
| `revision_number` | `number` | Revision number within this approval request chain. |
| `rule_id` | `string` |  |
| `rule_name` | `string` |  |
| `status` | `string` |  |
| `superseded_by_approval_id` | `number` | Newer approval revision that replaced this approval. |
| `supersedes_approval_id` | `number` | This approval replaces the referenced approval revision. |

#### Example: List

```lua
local cloudforce_one_rule_approvals_lists, err = client:CloudforceOneRuleApprovalsList():list()
```


### CloudforceOneRulePreview

Create an instance: `local cloudforce_one_rule_preview = client:CloudforceOneRulePreview(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit_message` | `string` | Human-readable justification for this change. |
| `condition` | `table` | Nested condition groups support up to 10 levels of depth. |
| `content` | `string` |  |
| `created_at` | `number` |  |
| `created_by` | `string` |  |
| `description` | `string` | Human-readable description of the rule. |
| `enabled` | `boolean` | Whether this rule is active for dice consumers. |
| `id` | `string` |  |
| `is_public` | `boolean` | Whether this rule is visible to other internal accounts. |
| `meta` | `table` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` |  |
| `namespaces` | `table` |  |
| `path` | `string` | Path change goes through approval workflow. |
| `pending_approval_id` | `number` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `table` | Proposed update or deletion awaiting approval. |
| `status` | `string` | Disposition for matching email. |
| `strings` | `table` |  |
| `structured_source` | `string` | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `number` |  |
| `updated_by` | `string` |  |

#### Example: Load

```lua
local cloudforce_one_rule_preview, err = client:CloudforceOneRulePreview():load({ id = "cloudforce_one_rule_preview_id", account_id = "account_id" })
```

#### Example: Create

```lua
local cloudforce_one_rule_preview, err = client:CloudforceOneRulePreview():create({
  account_id = "example_account_id", -- string
  condition = {}, -- table
  created_at = 1, -- number
  created_by = "example_created_by", -- string
  description = "example_description", -- string
  enabled = true, -- boolean
  id = "example_id", -- string
  is_public = true, -- boolean
  name = "example_name", -- string
  namespaces = {}, -- table
  path = "example_path", -- string
  pending_approval_id = 1, -- number
  pending_change = {}, -- table
  updated_at = 1, -- number
  updated_by = "example_updated_by", -- string
})
```


### CloudforceOneRulesPreviewList

Create an instance: `local cloudforce_one_rules_preview_list = client:CloudforceOneRulesPreviewList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `string` |  |
| `created_at` | `number` |  |
| `created_by` | `string` |  |
| `description` | `string` |  |
| `enabled` | `boolean` | Whether this rule is active for dice consumers. |
| `id` | `string` |  |
| `is_public` | `boolean` | Whether this rule is visible to other internal accounts. |
| `meta` | `table` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` |  |
| `namespaces` | `table` |  |
| `path` | `string` |  |
| `pending_approval_id` | `number` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `table` | Proposed update or deletion awaiting approval. |
| `structured_source` | `string` | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `number` |  |
| `updated_by` | `string` |  |

#### Example: List

```lua
local cloudforce_one_rules_preview_lists, err = client:CloudforceOneRulesPreviewList():list()
```


### CloudforceOneRulesSearch

Create an instance: `local cloudforce_one_rules_search = client:CloudforceOneRulesSearch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `string` |  |
| `created_at` | `number` |  |
| `created_by` | `string` |  |
| `description` | `string` |  |
| `enabled` | `boolean` | Whether this rule is active for dice consumers. |
| `id` | `string` |  |
| `is_public` | `boolean` | Whether this rule is visible to other internal accounts. |
| `meta` | `table` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` |  |
| `namespaces` | `table` |  |
| `path` | `string` |  |
| `pending_approval_id` | `number` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `table` | Proposed update or deletion awaiting approval. |
| `score` | `number` | Relevance score in [0,1]. |
| `scoring_details` | `table` | AI Search hybrid retrieval returns this per-component scoring breakdown. |
| `structured_source` | `string` | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `number` |  |
| `updated_by` | `string` |  |

#### Example: List

```lua
local cloudforce_one_rules_searchs, err = client:CloudforceOneRulesSearch():list()
```


### CloudforceOneStat

Create an instance: `local cloudforce_one_stat = client:CloudforceOneStat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local cloudforce_one_stat, err = client:CloudforceOneStat():load({ account_id = "account_id" })
```


### CloudforceOneSuccess

Create an instance: `local cloudforce_one_success = client:CloudforceOneSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `success` | `boolean` |  |

#### Example: Create

```lua
local cloudforce_one_success, err = client:CloudforceOneSuccess():create({
  account_id = "example_account_id", -- string
  approval_id = "example_approval_id", -- string
  success = true, -- boolean
})
```


### CloudforceOneTreeNode

Create an instance: `local cloudforce_one_tree_node = client:CloudforceOneTreeNode(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `children` | `table` |  |
| `count` | `number` |  |
| `name` | `string` |  |
| `path` | `string` |  |

#### Example: List

```lua
local cloudforce_one_tree_nodes, err = client:CloudforceOneTreeNode():list()
```


### CloudforceOneValidation

Create an instance: `local cloudforce_one_validation = client:CloudforceOneValidation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `string` |  |
| `error` | `string` |  |
| `excludeRuleId` | `string` |  |
| `name` | `string` |  |
| `namespaces` | `table` |  |
| `path` | `string` |  |
| `valid` | `boolean` |  |

#### Example: Create

```lua
local cloudforce_one_validation, err = client:CloudforceOneValidation():create({
  account_id = "example_account_id", -- string
  content = "example_content", -- string
  name = "example_name", -- string
  valid = true, -- boolean
})
```


### Collection

Create an instance: `local collection = client:Collection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `columns` | `table` |  |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `data` | `table` |  |
| `id` | `string` |  |
| `item_count` | `number` |  |
| `metadata` | `table` |  |
| `name` | `string` | New column name (must be unique) |
| `position` | `number` | Column display order |
| `required` | `boolean` | Whether column is required |
| `status` | `string` |  |
| `type` | `string` | Column type: text, number, boolean, or date |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local collection, err = client:Collection():load({ id = "collection_id", account_id = "account_id" })
```

#### Example: List

```lua
local collections, err = client:Collection():list()
```

#### Example: Create

```lua
local collection, err = client:Collection():create({
  account_id = "example_account_id", -- string
  columns = {}, -- table
  created_at = "example_created_at", -- string
  created_by = "example_created_by", -- string
  data = {}, -- table
  id = "example_id", -- string
  item_count = 1, -- number
  name = "example_name", -- string
  position = 1, -- number
  required = true, -- boolean
  status = "example_status", -- string
  type = "example_type", -- string
  updated_at = "example_updated_at", -- string
})
```


### CollectionsItem

Create an instance: `local collections_item = client:CollectionsItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local collections_item, err = client:CollectionsItem():create({
  account_id = "example_account_id", -- string
  collection_id = "example_collection_id", -- string
})
```


### Country

Create an instance: `local country = client:Country(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |
| `success` | `string` |  |

#### Example: List

```lua
local countrys, err = client:Country():list()
```


### DashboardAsset

Create an instance: `local dashboard_asset = client:DashboardAsset(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assets` | `table` |  |
| `contentType` | `table` |  |
| `count` | `table` |  |
| `downloadable` | `table` |  |
| `expiresAt` | `table` |  |
| `fileName` | `table` |  |
| `fileSize` | `table` |  |
| `id` | `table` |  |
| `is_cloudflare_team` | `table` |  |
| `metadata` | `table` |  |
| `origin` | `table` |  |
| `state` | `table` |  |
| `tlp` | `table` |  |
| `uploadedAt` | `table` |  |

#### Example: Load

```lua
local dashboard_asset, err = client:DashboardAsset():load({ account_id = "account_id", project_type = "project_type", request_id = "request_id" })
```

#### Example: Create

```lua
local dashboard_asset, err = client:DashboardAsset():create({
  account_id = "example_account_id", -- string
  project_type = "example_project_type", -- string
  request_id = "example_request_id", -- string
  assets = {}, -- table
  contentType = {}, -- table
  count = {}, -- table
  downloadable = {}, -- table
  expiresAt = {}, -- table
  fileName = {}, -- table
  fileSize = {}, -- table
  id = {}, -- table
  is_cloudflare_team = {}, -- table
  metadata = {}, -- table
  origin = {}, -- table
  state = {}, -- table
  tlp = {}, -- table
  uploadedAt = {}, -- table
})
```


### DashboardUser

Create an instance: `local dashboard_user = client:DashboardUser(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `display_name` | `string` | User display name |
| `id` | `string` | Unique user ID |

#### Example: Load

```lua
local dashboard_user, err = client:DashboardUser():load({ account_id = "account_id", request_id = "request_id" })
```


### Dataset

Create an instance: `local dataset = client:Dataset(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deletedAt` | `string` |  |
| `id` | `string` |  |
| `indicatorWriteMode` | `string` | Effective indicator mutation capability after account/dataset authorization and dataset storage capability are applied. |
| `isAnalytics` | `boolean` |  |
| `isPublic` | `boolean` | If true, then anyone can search the dataset. |
| `name` | `string` | Used to describe the dataset within the account context. |
| `uuid` | `string` |  |

#### Example: Load

```lua
local dataset, err = client:Dataset():load({ id = "dataset_id", account_id = "account_id" })
```

#### Example: List

```lua
local datasets, err = client:Dataset():list()
```

#### Example: Create

```lua
local dataset, err = client:Dataset():create({
  account_id = "example_account_id", -- string
  id = "example_id", -- string
  indicatorWriteMode = "example_indicatorWriteMode", -- string
  isAnalytics = true, -- boolean
  isPublic = true, -- boolean
  name = "example_name", -- string
  uuid = "example_uuid", -- string
})
```


### Event

Create an instance: `local event = client:Event(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountId` | `number` |  |
| `account_id` | `number` | Account ID |
| `alert_enabled` | `boolean` | Whether alerts are enabled |
| `alert_rollup_enabled` | `boolean` | Whether alert rollup is enabled |
| `attacker` | `string` |  |
| `attackerCountry` | `string` |  |
| `attackerCountryAlpha3` | `string` |  |
| `category` | `string` |  |
| `childIds` | `table` | Array of child event UUIDs that were processed |
| `created` | `string` |  |
| `createdAt` | `string` |  |
| `createdEventsCount` | `number` | Number of events created |
| `createdIndicatorsCount` | `number` | Number of indicators created |
| `createdRelationshipsCount` | `number` | Number of relationships created |
| `created_at` | `string` | Creation timestamp |
| `cursor` | `string` | Cursor for pagination. |
| `custom_threat_feed_id` | `number` | Intel Indicator Feed ID (numeric) |
| `data` | `string` |  |
| `datasetId` | `string` | Dataset UUIDs to query, or one standalone scope value: 'all'/'*' for the legacy all-datasets behavior, 'analytics' for isAnalytics=true datasets, or 'operational' for isAnalytics=false datasets. |
| `date` | `string` |  |
| `errorCount` | `number` | Number of errors encountered |
| `errors` | `table` | Array of error details |
| `event` | `string` |  |
| `eventIds` | `table` | List of event UUIDs to update (1-100) |
| `failedCount` | `number` |  |
| `failures` | `table` | List of events that failed to update with error messages |
| `hasChildren` | `boolean` |  |
| `id` | `number` | Unique identifier for the saved query |
| `includeCreatedEvents` | `boolean` | When true, response includes array of created event UUIDs and shard IDs. |
| `indicator` | `string` |  |
| `indicatorType` | `string` |  |
| `indicatorTypeId` | `number` |  |
| `insight` | `string` |  |
| `killChain` | `number` |  |
| `message` | `string` | Human-readable message describing the operation result |
| `mitreAttack` | `table` |  |
| `mitreCapec` | `table` |  |
| `name` | `string` | Name of the saved query |
| `numReferenced` | `number` |  |
| `numReferences` | `number` |  |
| `order` | `string` |  |
| `orderBy` | `string` |  |
| `page` | `number` |  |
| `pageSize` | `number` |  |
| `parentId` | `string` | UUID of the parent event that will be the source of the relationship |
| `query_json` | `string` | JSON string containing the query parameters |
| `raw` | `table` |  |
| `rawId` | `string` |  |
| `referenced` | `table` |  |
| `referencedIds` | `table` |  |
| `references` | `table` |  |
| `referencesIds` | `table` |  |
| `relationshipType` | `string` | Type of relationship to create between parent and child events |
| `relationships` | `table` | Array of successfully created relationship objects |
| `relationshipsCreated` | `number` | Number of relationships that were successfully created |
| `releasabilityId` | `string` |  |
| `rule_enabled` | `boolean` | Whether rule is enabled |
| `rule_list_id` | `string` | WAF rules list ID for blocking |
| `rule_scope` | `string` | Scope for the rule |
| `search` | `table` | Structured search as a JSON array of {field, op, value} objects. |
| `source` | `string` |  |
| `success` | `boolean` | Whether the relationship creation operation completed successfully |
| `tags` | `table` |  |
| `targetCountry` | `string` |  |
| `targetCountryAlpha3` | `string` |  |
| `targetIndustry` | `string` |  |
| `tlp` | `string` |  |
| `updatedCount` | `number` |  |
| `updated_at` | `string` | Last update timestamp |
| `updates` | `table` | Fields to update on all specified events. |
| `user_email` | `string` | Email of the user who created the query |
| `uuid` | `string` |  |

#### Example: Load

```lua
local event, err = client:Event():load({ id = "event_id", account_id = "account_id" })
```

#### Example: List

```lua
local events, err = client:Event():list()
```

#### Example: Create

```lua
local event, err = client:Event():create({
  account_id = "example_account_id", -- string
  accountId = 1, -- number
  alert_enabled = true, -- boolean
  alert_rollup_enabled = true, -- boolean
  attacker = "example_attacker", -- string
  attackerCountry = "example_attackerCountry", -- string
  attackerCountryAlpha3 = "example_attackerCountryAlpha3", -- string
  category = "example_category", -- string
  created = "example_created", -- string
  createdEventsCount = 1, -- number
  createdIndicatorsCount = 1, -- number
  createdRelationshipsCount = 1, -- number
  created_at = "example_created_at", -- string
  data = "example_data", -- string
  datasetId = "example_datasetId", -- string
  date = "example_date", -- string
  errorCount = 1, -- number
  event = "example_event", -- string
  eventIds = {}, -- table
  failedCount = 1, -- number
  hasChildren = true, -- boolean
  indicator = "example_indicator", -- string
  indicatorType = "example_indicatorType", -- string
  indicatorTypeId = 1, -- number
  killChain = 1, -- number
  message = "example_message", -- string
  mitreAttack = {}, -- table
  mitreCapec = {}, -- table
  name = "example_name", -- string
  numReferenced = 1, -- number
  numReferences = 1, -- number
  parentId = "example_parentId", -- string
  query_json = "example_query_json", -- string
  rawId = "example_rawId", -- string
  referenced = {}, -- table
  referencedIds = {}, -- table
  references = {}, -- table
  referencesIds = {}, -- table
  relationshipType = "example_relationshipType", -- string
  relationships = {}, -- table
  rule_enabled = true, -- boolean
  source = "example_source", -- string
  success = true, -- boolean
  tags = {}, -- table
  targetCountry = "example_targetCountry", -- string
  targetCountryAlpha3 = "example_targetCountryAlpha3", -- string
  targetIndustry = "example_targetIndustry", -- string
  tlp = "example_tlp", -- string
  updatedCount = 1, -- number
  updated_at = "example_updated_at", -- string
  updates = {}, -- table
  user_email = "example_user_email", -- string
  uuid = "example_uuid", -- string
})
```


### Group

Create an instance: `local group = client:Group(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `members` | `table` |  |
| `name` | `string` |  |
| `updatedAt` | `string` |  |
| `uuid` | `string` |  |

#### Example: Load

```lua
local group, err = client:Group():load({ id = "group_id", account_id = "account_id" })
```

#### Example: List

```lua
local groups, err = client:Group():list()
```

#### Example: Create

```lua
local group, err = client:Group():create({
  account_id = "example_account_id", -- string
  createdAt = "example_createdAt", -- string
  description = "example_description", -- string
  members = {}, -- table
  name = "example_name", -- string
  updatedAt = "example_updatedAt", -- string
  uuid = "example_uuid", -- string
})
```


### Indicator

Create an instance: `local indicator = client:Indicator(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completeness` | `table` |  |
| `confidence` | `number` | Updated confidence. |
| `createdAt` | `string` |  |
| `datasetId` | `string` | The dataset ID this indicator belongs to. |
| `description` | `string` | Optional description for the indicator type |
| `durableObjectId` | `string` |  |
| `id` | `string` |  |
| `indicatorType` | `string` | The indicator type to create (e.g., 'DOMAIN', 'IP', 'URL', 'HASH', 'EMAIL') |
| `indicators` | `table` |  |
| `message` | `string` |  |
| `metadata` | `table` | Updated metadata. |
| `pagination` | `table` |  |
| `relatedEvents` | `table` |  |
| `sources` | `table` | RSS article sources from which this indicator was extracted. |
| `tags` | `table` |  |
| `tlp` | `string` | Traffic Light Protocol designation. |
| `type` | `string` | Updated relationship type. |
| `updatedAt` | `string` |  |
| `uuid` | `string` |  |
| `value` | `string` |  |

#### Example: Load

```lua
local indicator, err = client:Indicator():load({ id = "indicator_id", account_id = "account_id" })
```

#### Example: List

```lua
local indicators, err = client:Indicator():list()
```

#### Example: Create

```lua
local indicator, err = client:Indicator():create({
  account_id = "example_account_id", -- string
  dataset_id = "example_dataset_id", -- string
  completeness = {}, -- table
  createdAt = "example_createdAt", -- string
  durableObjectId = "example_durableObjectId", -- string
  indicatorType = "example_indicatorType", -- string
  indicators = {}, -- table
  message = "example_message", -- string
  pagination = {}, -- table
  sources = {}, -- table
  updatedAt = "example_updatedAt", -- string
  uuid = "example_uuid", -- string
  value = "example_value", -- string
})
```


### IndicatorType

Create an instance: `local indicator_type = client:IndicatorType(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `type` | `string` |  |

#### Example: Load

```lua
local indicator_type, err = client:IndicatorType():load({ account_id = "account_id" })
```


### Permission

Create an instance: `local permission = client:Permission(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` |  |
| `id` | `string` |  |
| `message` | `string` |  |
| `resourceId` | `string` | The resource ID this permission applies to account_id or group_id |
| `resourceType` | `string` |  |
| `role` | `string` |  |
| `subjectId` | `string` |  |
| `subjectType` | `string` |  |
| `success` | `boolean` |  |
| `updatedAt` | `string` |  |
| `uuid` | `string` |  |

#### Example: List

```lua
local permissions, err = client:Permission():list()
```

#### Example: Create

```lua
local permission, err = client:Permission():create({
  account_id = "example_account_id", -- string
  dataset_id = "example_dataset_id", -- string
  createdAt = "example_createdAt", -- string
  resourceType = "example_resourceType", -- string
  role = "example_role", -- string
  subjectId = "example_subjectId", -- string
  subjectType = "example_subjectType", -- string
  updatedAt = "example_updatedAt", -- string
  uuid = "example_uuid", -- string
})
```


### Priority

Create an instance: `local priority = client:Priority(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `id` | `string` |  |
| `labels` | `table` | List of labels. |
| `messages` | `table` |  |
| `page` | `number` | Page number of results. |
| `per_page` | `number` | Number of results per page. |
| `priority` | `number` | Priority. |
| `requirement` | `string` | Requirement. |
| `result` | `any` |  |
| `success` | `boolean` | Whether the API call was successful. |
| `tlp` | `string` | The CISA defined Traffic Light Protocol (TLP). |

#### Example: Load

```lua
local priority, err = client:Priority():load({ id = "priority_id", account_id = "account_id" })
```

#### Example: Create

```lua
local priority, err = client:Priority():create({
  account_id = "example_account_id", -- string
  errors = {}, -- table
  labels = {}, -- table
  messages = {}, -- table
  page = 1, -- number
  per_page = 1, -- number
  priority = 1, -- number
  requirement = "example_requirement", -- string
  success = true, -- boolean
  tlp = "example_tlp", -- string
})
```


### PriorityIntelligence

Create an instance: `local priority_intelligence = client:PriorityIntelligence(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `labels` | `table` |  |
| `priority` | `number` |  |
| `requirement` | `string` |  |
| `tlp` | `string` |  |

#### Example: Load

```lua
local priority_intelligence, err = client:PriorityIntelligence():load({ id = "priority_intelligence_id", account_id = "account_id" })
```

#### Example: Create

```lua
local priority_intelligence, err = client:PriorityIntelligence():create({
  account_id = "example_account_id", -- string
  requirement = "example_requirement", -- string
})
```


### PriorityIntelligenceRequirement

Create an instance: `local priority_intelligence_requirement = client:PriorityIntelligenceRequirement(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `as_of` | `string` |  |
| `backtest_days` | `number` |  |
| `candidate_limit` | `number` |  |
| `dataset_ids` | `table` |  |
| `dimension` | `string` |  |
| `emerging_min_current_count` | `number` |  |
| `enabled` | `boolean` |  |
| `established_min_absolute_delta` | `number` |  |
| `established_min_prior_count` | `number` |  |
| `established_min_relative_delta` | `number` |  |
| `value` | `string` |  |
| `window_days` | `number` |  |

#### Example: Load

```lua
local priority_intelligence_requirement, err = client:PriorityIntelligenceRequirement():load({ account_id = "account_id" })
```

#### Example: Create

```lua
local priority_intelligence_requirement, err = client:PriorityIntelligenceRequirement():create({
  account_id = "example_account_id", -- string
  dimension = "example_dimension", -- string
  value = "example_value", -- string
})
```


### PriorityIntelligenceRequirementsPir

Create an instance: `local priority_intelligence_requirements__pir = client:PriorityIntelligenceRequirementsPir(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `labels` | `table` | List of labels. |
| `messages` | `table` |  |
| `priority` | `number` | Priority. |
| `requirement` | `string` | Requirement. |
| `result` | `any` |  |
| `success` | `boolean` | Whether the API call was successful. |
| `tlp` | `string` | The CISA defined Traffic Light Protocol (TLP). |

#### Example: List

```lua
local priority_intelligence_requirements__pirs, err = client:PriorityIntelligenceRequirementsPir():list()
```

#### Example: Create

```lua
local priority_intelligence_requirements__pir, err = client:PriorityIntelligenceRequirementsPir():create({
  account_id = "example_account_id", -- string
  errors = {}, -- table
  labels = {}, -- table
  messages = {}, -- table
  priority = 1, -- number
  requirement = "example_requirement", -- string
  success = true, -- boolean
  tlp = "example_tlp", -- string
})
```


### PublicCredentialMonitor

Create an instance: `local public_credential_monitor = client:PublicCredentialMonitor(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `domain` | `string` | Domain to monitor (e.g. |
| `id` | `number` |  |
| `matched_at` | `string` |  |
| `username` | `string` |  |

#### Example: List

```lua
local public_credential_monitors, err = client:PublicCredentialMonitor():list()
```

#### Example: Create

```lua
local public_credential_monitor, err = client:PublicCredentialMonitor():create({
  account_id = "example_account_id", -- string
  created_at = "example_created_at", -- string
  domain = "example_domain", -- string
  id = 1, -- number
  matched_at = "example_matched_at", -- string
  username = "example_username", -- string
})
```


### Request

Create an instance: `local request = client:Request(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed_after` | `any` | Retrieve requests completed after this time. |
| `completed_before` | `any` | Retrieve requests completed before this time. |
| `content` | `string` | Request content. |
| `created_after` | `any` | Retrieve requests created after this time. |
| `created_before` | `any` | Retrieve requests created before this time. |
| `errors` | `table` |  |
| `id` | `string` |  |
| `messages` | `table` |  |
| `page` | `number` | Page number of results. |
| `per_page` | `number` | Number of results per page. |
| `priority` | `string` | Priority for analyzing the request. |
| `request_type` | `string` | Requested information from request. |
| `result` | `table` |  |
| `sort_by` | `string` | Field to sort results by. |
| `sort_order` | `string` | Sort order (asc or desc). |
| `status` | `string` | Request Status. |
| `success` | `boolean` | Whether the API call was successful. |
| `summary` | `string` | Brief description of the request. |
| `tlp` | `string` | The CISA defined Traffic Light Protocol (TLP). |

#### Example: Load

```lua
local request, err = client:Request():load({ id = "request_id", account_id = "account_id" })
```

#### Example: Create

```lua
local request, err = client:Request():create({
  account_id = "example_account_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  page = 1, -- number
  per_page = 1, -- number
  result = {}, -- table
  success = true, -- boolean
})
```


### RequestForInformationRfi

Create an instance: `local request_for_information__rfi = client:RequestForInformationRfi(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `string` | Content of message. |
| `errors` | `table` |  |
| `id` | `string` |  |
| `messages` | `table` |  |
| `priority` | `string` | Priority for analyzing the request. |
| `request_type` | `string` | Requested information from request. |
| `result` | `table` |  |
| `source` | `string` | Asset file to upload. |
| `success` | `boolean` | Whether the API call was successful. |
| `summary` | `string` | Brief description of the request. |
| `tlp` | `string` | The CISA defined Traffic Light Protocol (TLP). |

#### Example: Load

```lua
local request_for_information__rfi, err = client:RequestForInformationRfi():load({ account_id = "account_id", asset_id = "asset_id", request_id = "request_id" })
```

#### Example: List

```lua
local request_for_information__rfis, err = client:RequestForInformationRfi():list()
```

#### Example: Create

```lua
local request_for_information__rfi, err = client:RequestForInformationRfi():create({
  account_id = "example_account_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  success = true, -- boolean
})
```


### RequestsDashboard

Create an instance: `local requests_dashboard = client:RequestsDashboard(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `string` |  |
| `defaultValue` | `any` |  |
| `description` | `string` |  |
| `displayOrder` | `number` |  |
| `errors` | `table` | Always empty on success |
| `fieldLabel` | `string` |  |
| `fieldName` | `string` |  |
| `fieldType` | `string` |  |
| `id` | `string` |  |
| `messages` | `table` | Always empty on success |
| `options` | `table` |  |
| `projectType` | `string` |  |
| `project_type` | `string` |  |
| `public` | `boolean` |  |
| `request_types` | `table` |  |
| `required` | `boolean` |  |
| `result` | `table` |  |
| `sectionID` | `string` |  |
| `sectionLabel` | `string` |  |
| `success` | `table` |  |
| `total` | `number` |  |
| `updated` | `string` |  |
| `validation` | `table` |  |

#### Example: Load

```lua
local requests_dashboard, err = client:RequestsDashboard():load({ account_id = "account_id", project_type = "project_type" })
```

#### Example: List

```lua
local requests_dashboards, err = client:RequestsDashboard():list()
```


### Rfi

Create an instance: `local rfi = client:Rfi(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `table` |  |
| `assignee` | `string` | Assignee email |
| `completed` | `string` | Completion timestamp |
| `created` | `string` | Creation timestamp |
| `description` | `string` | RFI description (optional). |
| `eventId` | `string` | Optional related event ID |
| `id` | `string` | RFI UUID |
| `investigation_id` | `string` | Investigation UUID |
| `is_free_request` | `boolean` | Whether this is a free request |
| `message_tokens` | `number` | Total message tokens |
| `metadata` | `table` | Optional metadata fields specific to the RFI type |
| `pagination` | `table` |  |
| `priority` | `string` | Request priority |
| `readable_id` | `string` | Human-readable ID |
| `release_entitlements` | `string` | Release entitlements |
| `report_id` | `string` | Report UUID |
| `request` | `table` |  |
| `request_type` | `string` | Optional request type for the request |
| `result` | `table` |  |
| `status` | `string` | RFI status. |
| `subtypeId` | `string` | Optional subtype ID |
| `success` | `string` |  |
| `summary` | `string` | RFI summary |
| `title` | `string` | RFI title (optional). |
| `tlp` | `string` | TLP classification |
| `tokens` | `number` | Total tokens used |
| `updated` | `string` | Last update timestamp |

#### Example: Load

```lua
local rfi, err = client:Rfi():load({ id = "rfi_id", project_type = "project_type" })
```

#### Example: Create

```lua
local rfi, err = client:Rfi():create({
  account_id = "example_account_id", -- string
  project_type = "example_project_type", -- string
  account = {}, -- table
  assignee = "example_assignee", -- string
  completed = "example_completed", -- string
  created = "example_created", -- string
  id = "example_id", -- string
  investigation_id = "example_investigation_id", -- string
  is_free_request = true, -- boolean
  message_tokens = 1, -- number
  pagination = {}, -- table
  priority = "example_priority", -- string
  readable_id = "example_readable_id", -- string
  release_entitlements = "example_release_entitlements", -- string
  report_id = "example_report_id", -- string
  request = {}, -- table
  result = {}, -- table
  status = "example_status", -- string
  success = "example_success", -- string
  summary = "example_summary", -- string
  tlp = "example_tlp", -- string
  tokens = 1, -- number
  updated = "example_updated", -- string
})
```


### RfiMessage

Create an instance: `local rfi_message = client:RfiMessage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachment_asset_ids` | `table` |  |
| `attachments` | `table` |  |
| `author_id` | `string` |  |
| `author_name` | `string` |  |
| `content` | `string` |  |
| `created` | `string` |  |
| `id` | `number` |  |
| `is_cloudflare_team` | `boolean` |  |
| `is_published` | `boolean` |  |
| `publish` | `boolean` |  |
| `published` | `string` |  |
| `tlp` | `string` |  |
| `updated` | `string` |  |

#### Example: Load

```lua
local rfi_message, err = client:RfiMessage():load({ id = "rfi_message_id", account_id = "account_id", project_type = "project_type", request_id = "request_id" })
```

#### Example: List

```lua
local rfi_messages, err = client:RfiMessage():list()
```

#### Example: Create

```lua
local rfi_message, err = client:RfiMessage():create({
  account_id = "example_account_id", -- string
  project_type = "example_project_type", -- string
  request_id = "example_request_id", -- string
  attachments = {}, -- table
  content = "example_content", -- string
  created = "example_created", -- string
  id = 1, -- number
  is_cloudflare_team = true, -- boolean
  is_published = true, -- boolean
  published = "example_published", -- string
  tlp = "example_tlp", -- string
  updated = "example_updated", -- string
})
```


### Rule

Create an instance: `local rule = client:Rule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `arrays` | `table` |  |
| `headers` | `table` |  |
| `operators` | `table` |  |
| `scalars` | `table` |  |
| `string_arrays` | `table` |  |
| `structs` | `table` |  |

#### Example: List

```lua
local rules, err = client:Rule():list()
```


### Scan

Create an instance: `local scan = client:Scan(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `frequency` | `number` | Defines the number of days between each scan (0 = One-off scan). |
| `ips` | `table` | Defines a list of IP addresses or CIDR blocks to scan. |
| `messages` | `table` |  |
| `ports` | `table` | Defines a list of ports to scan. |
| `result` | `table` |  |
| `success` | `boolean` |  |

#### Example: Load

```lua
local scan, err = client:Scan():load({ account_id = "account_id", config_id = "config_id" })
```

#### Example: List

```lua
local scans, err = client:Scan():list()
```

#### Example: Create

```lua
local scan, err = client:Scan():create({
  account_id = "example_account_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  result = {}, -- table
  success = true, -- boolean
})
```


### Tag

Create an instance: `local tag = client:Tag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeDuration` | `string` |  |
| `activeDuration_annotated` | `table` |  |
| `actorCategory` | `string` |  |
| `actorCategory_annotated` | `table` |  |
| `aliasGroupNames` | `table` |  |
| `aliasGroupNamesInternal` | `table` |  |
| `aliases` | `table` | Structured aliases ({ value, confidence 1-10, tlp }). |
| `attributionOrganization` | `string` |  |
| `attributionOrganization_annotated` | `table` |  |
| `categoryName` | `string` |  |
| `categoryUuid` | `string` | Tag type (category) UUID. |
| `confidence` | `number` | Overall tag confidence (1-10). |
| `createdAt` | `string` |  |
| `dateOfDiscovery` | `string` | Date of discovery (ISO YYYY-MM-DD). |
| `description` | `string` |  |
| `externalReferenceLinks` | `table` |  |
| `externalReferences` | `table` | Structured external references ({ url, description }). |
| `externalReferences_annotated` | `table` |  |
| `id` | `string` |  |
| `internalAliases` | `table` | Internal structured aliases ({ value, confidence 1-10, tlp }). |
| `internalDescription` | `string` |  |
| `lastSeen` | `string` |  |
| `metadata` | `table` | Updated metadata. |
| `motive` | `string` |  |
| `motive_annotated` | `table` |  |
| `opsecLevel` | `string` |  |
| `opsecLevel_annotated` | `table` |  |
| `originCountryISO` | `string` | ISO country code (alpha-2 or alpha-3). |
| `originCountryISO_annotated` | `table` |  |
| `priority` | `number` |  |
| `priority_annotated` | `table` |  |
| `properties` | `table` | Parsed custom field values. |
| `sophisticationLevel` | `string` |  |
| `sophisticationLevel_annotated` | `table` |  |
| `tlp` | `string` | Tag-level TLP handling marking. |
| `type` | `string` | Updated relationship type. |
| `updatedAt` | `string` |  |
| `uuid` | `string` |  |
| `value` | `string` |  |
| `version` | `number` |  |

#### Example: Load

```lua
local tag, err = client:Tag():load({ id = "tag_id", account_id = "account_id" })
```

#### Example: List

```lua
local tags, err = client:Tag():list()
```

#### Example: Create

```lua
local tag, err = client:Tag():create({
  account_id = "example_account_id", -- string
  activeDuration_annotated = {}, -- table
  actorCategory_annotated = {}, -- table
  attributionOrganization_annotated = {}, -- table
  motive_annotated = {}, -- table
  opsecLevel_annotated = {}, -- table
  originCountryISO_annotated = {}, -- table
  priority_annotated = {}, -- table
  sophisticationLevel_annotated = {}, -- table
  uuid = "example_uuid", -- string
  value = "example_value", -- string
})
```


### TagCategory

Create an instance: `local tag_category = client:TagCategory(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `schema` | `table` | Parsed FieldDefinition[] defining custom fields for this category, or null if none. |
| `updatedAt` | `string` |  |
| `uuid` | `string` |  |

#### Example: Load

```lua
local tag_category, err = client:TagCategory():load({ id = "tag_category_id", account_id = "account_id" })
```

#### Example: List

```lua
local tag_categorys, err = client:TagCategory():list()
```

#### Example: Create

```lua
local tag_category, err = client:TagCategory():create({
  account_id = "example_account_id", -- string
  name = "example_name", -- string
  uuid = "example_uuid", -- string
})
```


### TargetIndustry

Create an instance: `local target_industry = client:TargetIndustry(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `type` | `string` |  |

#### Example: Load

```lua
local target_industry, err = client:TargetIndustry():load({ account_id = "account_id" })
```


### ThreatSignal

Create an instance: `local threat_signal = client:ThreatSignal(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category_id` | `string` | One of the predefined Threat Signals feed categories; see GET /:account_id/v2/threat-signals/categories. |
| `category_uuids` | `table` |  |
| `config` | `string` |  |
| `display_name` | `string` |  |
| `display_order` | `number` |  |
| `enabled` | `boolean` |  |
| `errors` | `table` |  |
| `feeds` | `table` |  |
| `is_active` | `boolean` |  |
| `message` | `string` |  |
| `messages` | `table` |  |
| `name` | `string` |  |
| `opted_out` | `boolean` |  |
| `output_schema` | `string` |  |
| `poll_interval_s` | `number` |  |
| `prompt` | `string` |  |
| `read` | `boolean` |  |
| `result` | `any` |  |
| `skill_ids` | `table` |  |
| `success` | `boolean` |  |
| `tag_id` | `string` |  |
| `title` | `string` |  |
| `url` | `string` |  |
| `why_valuable` | `string` |  |

#### Example: Load

```lua
local threat_signal, err = client:ThreatSignal():load({ account_id = "account_id" })
```

#### Example: List

```lua
local threat_signals, err = client:ThreatSignal():list()
```

#### Example: Create

```lua
local threat_signal, err = client:ThreatSignal():create({
  account_id = "example_account_id", -- string
  category_uuids = {}, -- table
  errors = {}, -- table
  feeds = {}, -- table
  message = "example_message", -- string
  messages = {}, -- table
  opted_out = true, -- boolean
  read = true, -- boolean
  result = "example_result", -- any
  skill_ids = {}, -- table
  success = true, -- boolean
  tag_id = "example_tag_id", -- string
})
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | Test transport |

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Open types

18 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `event` | `search` | 7 | 6 levels |
| `cloudforce_one_rule` | `actions` | 5 | 4 levels |
| `threat_signal` | `result` | 5 | 7 levels |
| `requests_dashboard` | `validation` | 4 | 6 levels |
| `cloudforce_one_edit_approval` | `condition` | 3 | 10 levels |
| `cloudforce_one_edit_approval` | `meta` | 3 | 3 levels |
| `cloudforce_one_email_rule_validation` | `condition` | 3 | 10 levels |
| `cloudforce_one_email_rule_validation` | `meta` | 3 | 3 levels |
| `cloudforce_one_email_rules_list` | `meta` | 3 | 3 levels |
| `cloudforce_one_rule` | `meta` | 3 | 3 levels |
| `cloudforce_one_rule_approval_detail` | `current_rule` | 3 | 7 levels |
| `cloudforce_one_rule_approval_detail` | `proposed_changes` | 3 | 0 levels |
| `cloudforce_one_rule_approvals_list` | `proposed_changes` | 3 | 0 levels |
| `cloudforce_one_rule_preview` | `condition` | 3 | 10 levels |
| `cloudforce_one_rule_preview` | `meta` | 3 | 3 levels |
| `cloudforce_one_rules_preview_list` | `meta` | 3 | 3 levels |
| `cloudforce_one_rules_search` | `meta` | 3 | 3 levels |
| `requests_dashboard` | `defaultValue` | 3 | 0 levels |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── cloudflare-cloudforce-one_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── schema.lua               -- Generated option + entity specs
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`cloudflare-cloudforce-one_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```lua
local permission = client:Permission()
permission:list()

-- permission:data_get() now returns the permission data from the last list
-- permission:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
