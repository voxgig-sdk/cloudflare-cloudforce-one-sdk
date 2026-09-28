# CloudflareCloudforceOne Ruby SDK



The Ruby SDK for the CloudflareCloudforceOne API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Attacker` — with named operations (`list`/`load`/`create`/`update`/`remove`/`patch`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudflare-cloudforce-one-sdk/releases](https://github.com/voxgig-sdk/cloudflare-cloudforce-one-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "CloudflareCloudforceOne_sdk"

client = CloudflareCloudforceOneSDK.new({
  "apikey" => ENV["CLOUDFLARE_CLOUDFORCE_ONE_APIKEY"],
})
```

### 3. Load a dashboardasset

DashboardAsset is nested under account, so provide the `account_id`.

```ruby
begin
  # load returns the ENTITY — call data_get for the DashboardAsset record (raises on error).
  dashboardasset = client.DashboardAsset.load({ "account_id" => "example_account_id", "project_type" => "example_project_type", "request_id" => "example_request_id" })
  puts dashboardasset
rescue => err
  warn "load failed: #{err}"
end
```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  permissions = client.Permission.list()
rescue => err
  warn "list failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required:

```ruby
client = CloudflareCloudforceOneSDK.test

# Entity ops return the ENTITY (raises on error);
# call data_get for the mock record.
permission = client.Permission.list()
puts permission
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = CloudflareCloudforceOneSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
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
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### CloudflareCloudforceOneSDK

```ruby
require_relative "CloudflareCloudforceOne_sdk"
client = CloudflareCloudforceOneSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = CloudflareCloudforceOneSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareCloudforceOneSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
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
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all). Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `CloudflareCloudforceOneError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

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

Create an instance: `attacker = client.Attacker`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `type` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Attacker record (raises on error).
attacker = client.Attacker.load({ "account_id" => "account_id" })
```


### BinDb

Create an instance: `bin_db = client.BinDb`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content_type` | `String` |  |
| `md5` | `String` |  |
| `sha1` | `String` |  |
| `sha256` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the BinDb record (raises on error).
bin_db = client.BinDb.load({ "account_id" => "account_id", "hash" => "hash" })
```

#### Example: Create

```ruby
bin_db = client.BinDb.create({
  "account_id" => "example_account_id", # String
  "content_type" => "example_content_type", # String
  "md5" => "example_md5", # String
  "sha1" => "example_sha1", # String
  "sha256" => "example_sha256", # String
})
```


### BrandProtection

Create an instance: `brand_protection = client.BrandProtection`

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
| `action` | `String` |  |
| `body` | `String` |  |
| `brand` | `String` |  |
| `category` | `String` |  |
| `content_type` | `String` | MIME type of the image (only present when download=true) |
| `createNotice` | `Boolean` |  |
| `createdAt` | `String` |  |
| `description` | `String` |  |
| `dismissed` | `Boolean` | Whether the match is dismissed. |
| `domain` | `String` |  |
| `domain_id` | `Integer` |  |
| `domains` | `Array` |  |
| `errors` | `Array` |  |
| `fields` | `Hash` |  |
| `first_seen` | `String` |  |
| `format` | `String` |  |
| `id` | `Float` |  |
| `image_data` | `String` | Base64 encoded image data. |
| `letterText` | `String` |  |
| `letterType` | `String` |  |
| `matchId` | `Float` |  |
| `matchType` | `String` |  |
| `match_details` | `Array` | Per-match detail objects with query metadata and individual dismissed state. |
| `match_ids` | `Array` |  |
| `matched_at` | `String` |  |
| `matches` | `Array` |  |
| `max_time` | `String` |  |
| `message` | `String` |  |
| `messages` | `Array` |  |
| `min_time` | `String` |  |
| `name` | `String` |  |
| `noticeParams` | `Hash` |  |
| `notices` | `Array` |  |
| `public_scans` | `Hash` |  |
| `queryId` | `Float` |  |
| `queryIds` | `Array` |  |
| `query_id` | `Integer` |  |
| `r2_path` | `String` |  |
| `registrar` | `String` |  |
| `result` | `Object` |  |
| `result_info` | `Hash` | Present on paginated list responses when page or per_page is supplied. |
| `scan` | `Boolean` |  |
| `scan_matches` | `Boolean` |  |
| `scan_status` | `String` |  |
| `scan_submission_id` | `Integer` |  |
| `score_threshold` | `Float` | Minimum similarity score threshold for matches (0-1, default: 0) |
| `search_lookback` | `Boolean` | If true, search recent domain lookback entries for matches |
| `similarity_score` | `Float` |  |
| `similarity_threshold` | `Float` | Minimum similarity score (0-1) required for visual matches |
| `source` | `String` |  |
| `status` | `String` |  |
| `string_matches` | `Array` |  |
| `success` | `Boolean` |  |
| `tag` | `String` | Unique identifier for the logo query |
| `takedownNoticeId` | `Float` |  |
| `templateId` | `String` |  |
| `top_k` | `Integer` | Number of closest matches to return (1-100, default: 10) |
| `total_analyzed` | `Float` |  |
| `total_matches` | `Float` |  |
| `truncated` | `Boolean` |  |
| `updatedAt` | `String` |  |
| `uploaded_at` | `String` |  |
| `url_scan_id` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the BrandProtection record (raises on error).
brand_protection = client.BrandProtection.load({ "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of BrandProtection records (raises on error).
brand_protections = client.BrandProtection.list
```

#### Example: Create

```ruby
brand_protection = client.BrandProtection.create({
  "account_id" => "example_account_id", # String
  "action" => "example_action", # String
  "body" => "example_body", # String
  "brand" => "example_brand", # String
  "category" => "example_category", # String
  "createdAt" => "example_createdAt", # String
  "description" => "example_description", # String
  "dismissed" => true, # Boolean
  "domain" => "example_domain", # String
  "domain_id" => 1, # Integer
  "domains" => [], # Array
  "errors" => [], # Array
  "fields" => {}, # Hash
  "first_seen" => "example_first_seen", # String
  "id" => 1, # Float
  "image_data" => "example_image_data", # String
  "letterText" => "example_letterText", # String
  "letterType" => "example_letterType", # String
  "matchId" => 1, # Float
  "matchType" => "example_matchType", # String
  "matched_at" => "example_matched_at", # String
  "matches" => [], # Array
  "message" => "example_message", # String
  "messages" => [], # Array
  "name" => "example_name", # String
  "noticeParams" => {}, # Hash
  "notices" => [], # Array
  "public_scans" => {}, # Hash
  "queryId" => 1, # Float
  "r2_path" => "example_r2_path", # String
  "registrar" => "example_registrar", # String
  "result" => "example_result", # Object
  "result_info" => {}, # Hash
  "scan_status" => "example_scan_status", # String
  "scan_submission_id" => 1, # Integer
  "similarity_score" => 1, # Float
  "similarity_threshold" => 1, # Float
  "source" => "example_source", # String
  "status" => "example_status", # String
  "string_matches" => [], # Array
  "success" => true, # Boolean
  "tag" => "example_tag", # String
  "takedownNoticeId" => 1, # Float
  "templateId" => "example_templateId", # String
  "total_analyzed" => 1, # Float
  "total_matches" => 1, # Float
  "truncated" => true, # Boolean
  "updatedAt" => "example_updatedAt", # String
  "uploaded_at" => "example_uploaded_at", # String
  "url_scan_id" => "example_url_scan_id", # String
})
```


### Category

Create an instance: `category = client.Category`

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
| `id` | `String` |  |
| `killChain` | `Float` |  |
| `mitreAttack` | `Array` |  |
| `mitreCapec` | `Array` |  |
| `name` | `String` |  |
| `shortname` | `String` |  |
| `uuid` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Category record (raises on error).
category = client.Category.load({ "id" => "category_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of Category records (raises on error).
categorys = client.Category.list
```

#### Example: Create

```ruby
category = client.Category.create({
  "account_id" => "example_account_id", # String
  "killChain" => 1, # Float
  "name" => "example_name", # String
  "uuid" => "example_uuid", # String
})
```


### CloudforceOneAccountExemption

Create an instance: `cloudforce_one_account_exemption = client.CloudforceOneAccountExemption`

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
| `namespace` | `Array` |  |
| `tag_match` | `Array` |  |
| `worker_name` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of CloudforceOneAccountExemption records (raises on error).
cloudforce_one_account_exemptions = client.CloudforceOneAccountExemption.list
```

#### Example: Create

```ruby
cloudforce_one_account_exemption = client.CloudforceOneAccountExemption.create({
  "account_id" => "example_account_id", # String
  "namespace" => [], # Array
  "tag_match" => [], # Array
  "worker_name" => [], # Array
})
```


### CloudforceOneDeleteAll

Create an instance: `cloudforce_one_delete_all = client.CloudforceOneDeleteAll`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### CloudforceOneEditApproval

Create an instance: `cloudforce_one_edit_approval = client.CloudforceOneEditApproval`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `condition` | `Hash` | Nested condition groups support up to 10 levels of depth. |
| `description` | `String` |  |
| `enabled` | `Boolean` |  |
| `id` | `String` |  |
| `meta` | `Array` |  |
| `name` | `String` |  |
| `status` | `String` | Disposition for matching email. |
| `strings` | `Array` |  |

#### Example: Create

```ruby
cloudforce_one_edit_approval = client.CloudforceOneEditApproval.create({
  "account_id" => "example_account_id", # String
  "approval_id" => "example_approval_id", # String
  "condition" => {}, # Hash
  "name" => "example_name", # String
})
```


### CloudforceOneEmailRuleValidation

Create an instance: `cloudforce_one_email_rule_validation = client.CloudforceOneEmailRuleValidation`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `compiled_yara` | `String` |  |
| `condition` | `Hash` | Nested condition groups support up to 10 levels of depth. |
| `description` | `String` |  |
| `enabled` | `Boolean` |  |
| `error` | `String` |  |
| `existing_rule_id` | `String` | Existing rule ID to exclude from duplicate-name checks when validating an update. |
| `meta` | `Array` |  |
| `name` | `String` |  |
| `status` | `String` | Disposition for matching email. |
| `strings` | `Array` |  |
| `valid` | `Boolean` |  |

#### Example: Create

```ruby
cloudforce_one_email_rule_validation = client.CloudforceOneEmailRuleValidation.create({
  "account_id" => "example_account_id", # String
  "condition" => {}, # Hash
  "name" => "example_name", # String
  "valid" => true, # Boolean
})
```


### CloudforceOneEmailRulesList

Create an instance: `cloudforce_one_email_rules_list = client.CloudforceOneEmailRulesList`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `String` |  |
| `created_at` | `Float` |  |
| `created_by` | `String` |  |
| `description` | `String` |  |
| `enabled` | `Boolean` | Whether this rule is active for dice consumers. |
| `id` | `String` |  |
| `is_public` | `Boolean` | Whether this rule is visible to other internal accounts. |
| `meta` | `Array` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `String` |  |
| `namespaces` | `Array` |  |
| `path` | `String` |  |
| `pending_approval_id` | `Float` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `Hash` | Proposed update or deletion awaiting approval. |
| `structured_source` | `String` | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `Float` |  |
| `updated_by` | `String` |  |

#### Example: List

```ruby
# list returns an Array of CloudforceOneEmailRulesList records (raises on error).
cloudforce_one_email_rules_lists = client.CloudforceOneEmailRulesList.list
```


### CloudforceOneRequestsApiResponseCommon

Create an instance: `cloudforce_one_requests_api_response_common = client.CloudforceOneRequestsApiResponseCommon`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### CloudforceOneRule

Create an instance: `cloudforce_one_rule = client.CloudforceOneRule`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `Array` |  |
| `commit_message` | `String` | Human-readable justification for this change. |
| `content` | `String` |  |
| `description` | `String` | Human-readable description of the rule. |
| `enabled` | `Boolean` | Whether this rule is active for dice consumers. |
| `is_public` | `Boolean` | Whether this rule is visible to other internal accounts. |
| `meta` | `Array` | Adds YARA meta entries to the rule's meta block and stores them in rule_meta alongside content metadata. |
| `name` | `String` |  |
| `namespaces` | `Array` | Optional WfP deployment tags (customer rules only). |
| `path` | `String` |  |

#### Example: Create

```ruby
cloudforce_one_rule = client.CloudforceOneRule.create({
  "account_id" => "example_account_id", # String
  "content" => "example_content", # String
  "name" => "example_name", # String
  "path" => "example_path", # String
})
```


### CloudforceOneRuleApprovalDetail

Create an instance: `cloudforce_one_rule_approval_detail = client.CloudforceOneRuleApprovalDetail`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `audit_log_id` | `Float` |  |
| `can_review` | `Boolean` | Whether the authenticated user may approve or reject this pending change. |
| `cancelled_at` | `Float` | Time at which the requester cancelled the approval. |
| `cancelled_by` | `String` | Requester who cancelled the pending approval. |
| `change_description` | `String` |  |
| `change_type` | `String` |  |
| `commit_message` | `String` | The requester supplies this human-readable justification with the change. |
| `compiler_warnings` | `Array` |  |
| `current_rule` | `Object` |  |
| `id` | `Float` |  |
| `proposed_changes` | `Object` | Contains structured proposed rule changes, or null for unresolved persisted data. |
| `rejection_reason` | `String` | The reviewer may supply a reason when rejecting the change. |
| `requested_at` | `Float` |  |
| `requested_by` | `String` |  |
| `reviewed_at` | `Float` |  |
| `reviewer_scope` | `String` | Review policy: general Nomos approvers for default; general approvers or Phishguard for email. |
| `revision_number` | `Integer` | Revision number within this approval request chain. |
| `rule_id` | `String` |  |
| `rule_name` | `String` |  |
| `status` | `String` |  |
| `superseded_by_approval_id` | `Float` | Newer approval revision that replaced this approval. |
| `supersedes_approval_id` | `Float` | This approval replaces the referenced approval revision. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the CloudforceOneRuleApprovalDetail record (raises on error).
cloudforce_one_rule_approval_detail = client.CloudforceOneRuleApprovalDetail.load({ "id" => "cloudforce_one_rule_approval_detail_id", "account_id" => "account_id" })
```

#### Example: Create

```ruby
cloudforce_one_rule_approval_detail = client.CloudforceOneRuleApprovalDetail.create({
  "account_id" => "example_account_id", # String
  "approval_id" => "example_approval_id", # String
  "audit_log_id" => 1, # Float
  "can_review" => true, # Boolean
  "cancelled_at" => 1, # Float
  "cancelled_by" => "example_cancelled_by", # String
  "change_description" => "example_change_description", # String
  "change_type" => "example_change_type", # String
  "commit_message" => "example_commit_message", # String
  "current_rule" => "example_current_rule", # Object
  "id" => 1, # Float
  "proposed_changes" => "example_proposed_changes", # Object
  "rejection_reason" => "example_rejection_reason", # String
  "requested_at" => 1, # Float
  "requested_by" => "example_requested_by", # String
  "reviewed_at" => 1, # Float
  "reviewer_scope" => "example_reviewer_scope", # String
  "revision_number" => 1, # Integer
  "rule_id" => "example_rule_id", # String
  "rule_name" => "example_rule_name", # String
  "status" => "example_status", # String
  "superseded_by_approval_id" => 1, # Float
  "supersedes_approval_id" => 1, # Float
})
```


### CloudforceOneRuleApprovalsList

Create an instance: `cloudforce_one_rule_approvals_list = client.CloudforceOneRuleApprovalsList`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `audit_log_id` | `Float` |  |
| `can_review` | `Boolean` | Whether the authenticated user may approve or reject this pending change. |
| `cancelled_at` | `Float` | Time at which the requester cancelled the approval. |
| `cancelled_by` | `String` | Requester who cancelled the pending approval. |
| `change_description` | `String` |  |
| `change_type` | `String` |  |
| `commit_message` | `String` | The requester supplies this human-readable justification with the change. |
| `id` | `Float` |  |
| `proposed_changes` | `Object` | Contains structured proposed rule changes, or null for unresolved persisted data. |
| `rejection_reason` | `String` | The reviewer may supply a reason when rejecting the change. |
| `requested_at` | `Float` |  |
| `requested_by` | `String` |  |
| `reviewed_at` | `Float` |  |
| `reviewer_scope` | `String` | Review policy: general Nomos approvers for default; general approvers or Phishguard for email. |
| `revision_number` | `Integer` | Revision number within this approval request chain. |
| `rule_id` | `String` |  |
| `rule_name` | `String` |  |
| `status` | `String` |  |
| `superseded_by_approval_id` | `Float` | Newer approval revision that replaced this approval. |
| `supersedes_approval_id` | `Float` | This approval replaces the referenced approval revision. |

#### Example: List

```ruby
# list returns an Array of CloudforceOneRuleApprovalsList records (raises on error).
cloudforce_one_rule_approvals_lists = client.CloudforceOneRuleApprovalsList.list
```


### CloudforceOneRulePreview

Create an instance: `cloudforce_one_rule_preview = client.CloudforceOneRulePreview`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit_message` | `String` | Human-readable justification for this change. |
| `condition` | `Hash` | Nested condition groups support up to 10 levels of depth. |
| `content` | `String` |  |
| `created_at` | `Float` |  |
| `created_by` | `String` |  |
| `description` | `String` | Human-readable description of the rule. |
| `enabled` | `Boolean` | Whether this rule is active for dice consumers. |
| `id` | `String` |  |
| `is_public` | `Boolean` | Whether this rule is visible to other internal accounts. |
| `meta` | `Array` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `String` |  |
| `namespaces` | `Array` |  |
| `path` | `String` | Path change goes through approval workflow. |
| `pending_approval_id` | `Float` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `Hash` | Proposed update or deletion awaiting approval. |
| `status` | `String` | Disposition for matching email. |
| `strings` | `Array` |  |
| `structured_source` | `String` | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `Float` |  |
| `updated_by` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the CloudforceOneRulePreview record (raises on error).
cloudforce_one_rule_preview = client.CloudforceOneRulePreview.load({ "id" => "cloudforce_one_rule_preview_id", "account_id" => "account_id" })
```

#### Example: Create

```ruby
cloudforce_one_rule_preview = client.CloudforceOneRulePreview.create({
  "account_id" => "example_account_id", # String
  "condition" => {}, # Hash
  "created_at" => 1, # Float
  "created_by" => "example_created_by", # String
  "description" => "example_description", # String
  "enabled" => true, # Boolean
  "id" => "example_id", # String
  "is_public" => true, # Boolean
  "name" => "example_name", # String
  "namespaces" => [], # Array
  "path" => "example_path", # String
  "pending_approval_id" => 1, # Float
  "pending_change" => {}, # Hash
  "updated_at" => 1, # Float
  "updated_by" => "example_updated_by", # String
})
```


### CloudforceOneRulesPreviewList

Create an instance: `cloudforce_one_rules_preview_list = client.CloudforceOneRulesPreviewList`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `String` |  |
| `created_at` | `Float` |  |
| `created_by` | `String` |  |
| `description` | `String` |  |
| `enabled` | `Boolean` | Whether this rule is active for dice consumers. |
| `id` | `String` |  |
| `is_public` | `Boolean` | Whether this rule is visible to other internal accounts. |
| `meta` | `Array` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `String` |  |
| `namespaces` | `Array` |  |
| `path` | `String` |  |
| `pending_approval_id` | `Float` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `Hash` | Proposed update or deletion awaiting approval. |
| `structured_source` | `String` | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `Float` |  |
| `updated_by` | `String` |  |

#### Example: List

```ruby
# list returns an Array of CloudforceOneRulesPreviewList records (raises on error).
cloudforce_one_rules_preview_lists = client.CloudforceOneRulesPreviewList.list
```


### CloudforceOneRulesSearch

Create an instance: `cloudforce_one_rules_search = client.CloudforceOneRulesSearch`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `String` |  |
| `created_at` | `Float` |  |
| `created_by` | `String` |  |
| `description` | `String` |  |
| `enabled` | `Boolean` | Whether this rule is active for dice consumers. |
| `id` | `String` |  |
| `is_public` | `Boolean` | Whether this rule is visible to other internal accounts. |
| `meta` | `Array` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `String` |  |
| `namespaces` | `Array` |  |
| `path` | `String` |  |
| `pending_approval_id` | `Float` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `Hash` | Proposed update or deletion awaiting approval. |
| `score` | `Float` | Relevance score in [0,1]. |
| `scoring_details` | `Hash` | AI Search hybrid retrieval returns this per-component scoring breakdown. |
| `structured_source` | `String` | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `Float` |  |
| `updated_by` | `String` |  |

#### Example: List

```ruby
# list returns an Array of CloudforceOneRulesSearch records (raises on error).
cloudforce_one_rules_searchs = client.CloudforceOneRulesSearch.list
```


### CloudforceOneStat

Create an instance: `cloudforce_one_stat = client.CloudforceOneStat`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the CloudforceOneStat record (raises on error).
cloudforce_one_stat = client.CloudforceOneStat.load({ "account_id" => "account_id" })
```


### CloudforceOneSuccess

Create an instance: `cloudforce_one_success = client.CloudforceOneSuccess`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Create

```ruby
cloudforce_one_success = client.CloudforceOneSuccess.create({
  "account_id" => "example_account_id", # String
  "approval_id" => "example_approval_id", # String
  "success" => true, # Boolean
})
```


### CloudforceOneTreeNode

Create an instance: `cloudforce_one_tree_node = client.CloudforceOneTreeNode`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `children` | `Array` |  |
| `count` | `Float` |  |
| `name` | `String` |  |
| `path` | `String` |  |

#### Example: List

```ruby
# list returns an Array of CloudforceOneTreeNode records (raises on error).
cloudforce_one_tree_nodes = client.CloudforceOneTreeNode.list
```


### CloudforceOneValidation

Create an instance: `cloudforce_one_validation = client.CloudforceOneValidation`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `String` |  |
| `error` | `String` |  |
| `excludeRuleId` | `String` |  |
| `name` | `String` |  |
| `namespaces` | `Array` |  |
| `path` | `String` |  |
| `valid` | `Boolean` |  |

#### Example: Create

```ruby
cloudforce_one_validation = client.CloudforceOneValidation.create({
  "account_id" => "example_account_id", # String
  "content" => "example_content", # String
  "name" => "example_name", # String
  "valid" => true, # Boolean
})
```


### Collection

Create an instance: `collection = client.Collection`

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
| `columns` | `Array` |  |
| `created_at` | `String` |  |
| `created_by` | `String` |  |
| `data` | `Hash` |  |
| `id` | `String` |  |
| `item_count` | `Float` |  |
| `metadata` | `Hash` |  |
| `name` | `String` | New column name (must be unique) |
| `position` | `Float` | Column display order |
| `required` | `Boolean` | Whether column is required |
| `status` | `String` |  |
| `type` | `String` | Column type: text, number, boolean, or date |
| `updated_at` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Collection record (raises on error).
collection = client.Collection.load({ "id" => "collection_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of Collection records (raises on error).
collections = client.Collection.list
```

#### Example: Create

```ruby
collection = client.Collection.create({
  "account_id" => "example_account_id", # String
  "columns" => [], # Array
  "created_at" => "example_created_at", # String
  "created_by" => "example_created_by", # String
  "data" => {}, # Hash
  "id" => "example_id", # String
  "item_count" => 1, # Float
  "name" => "example_name", # String
  "position" => 1, # Float
  "required" => true, # Boolean
  "status" => "example_status", # String
  "type" => "example_type", # String
  "updated_at" => "example_updated_at", # String
})
```


### CollectionsItem

Create an instance: `collections_item = client.CollectionsItem`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
collections_item = client.CollectionsItem.create({
  "account_id" => "example_account_id", # String
  "collection_id" => "example_collection_id", # String
})
```


### Country

Create an instance: `country = client.Country`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |
| `success` | `String` |  |

#### Example: List

```ruby
# list returns an Array of Country records (raises on error).
countrys = client.Country.list
```


### DashboardAsset

Create an instance: `dashboard_asset = client.DashboardAsset`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assets` | `Hash` |  |
| `contentType` | `Hash` |  |
| `count` | `Hash` |  |
| `downloadable` | `Hash` |  |
| `expiresAt` | `Hash` |  |
| `fileName` | `Hash` |  |
| `fileSize` | `Hash` |  |
| `id` | `Hash` |  |
| `is_cloudflare_team` | `Hash` |  |
| `metadata` | `Hash` |  |
| `origin` | `Hash` |  |
| `state` | `Hash` |  |
| `tlp` | `Hash` |  |
| `uploadedAt` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the DashboardAsset record (raises on error).
dashboard_asset = client.DashboardAsset.load({ "account_id" => "account_id", "project_type" => "project_type", "request_id" => "request_id" })
```

#### Example: Create

```ruby
dashboard_asset = client.DashboardAsset.create({
  "account_id" => "example_account_id", # String
  "project_type" => "example_project_type", # String
  "request_id" => "example_request_id", # String
  "assets" => {}, # Hash
  "contentType" => {}, # Hash
  "count" => {}, # Hash
  "downloadable" => {}, # Hash
  "expiresAt" => {}, # Hash
  "fileName" => {}, # Hash
  "fileSize" => {}, # Hash
  "id" => {}, # Hash
  "is_cloudflare_team" => {}, # Hash
  "metadata" => {}, # Hash
  "origin" => {}, # Hash
  "state" => {}, # Hash
  "tlp" => {}, # Hash
  "uploadedAt" => {}, # Hash
})
```


### DashboardUser

Create an instance: `dashboard_user = client.DashboardUser`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `display_name` | `String` | User display name |
| `id` | `String` | Unique user ID |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the DashboardUser record (raises on error).
dashboard_user = client.DashboardUser.load({ "account_id" => "account_id", "request_id" => "request_id" })
```


### Dataset

Create an instance: `dataset = client.Dataset`

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
| `deletedAt` | `String` |  |
| `id` | `String` |  |
| `indicatorWriteMode` | `String` | Effective indicator mutation capability after account/dataset authorization and dataset storage capability are applied. |
| `isAnalytics` | `Boolean` |  |
| `isPublic` | `Boolean` | If true, then anyone can search the dataset. |
| `name` | `String` | Used to describe the dataset within the account context. |
| `uuid` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Dataset record (raises on error).
dataset = client.Dataset.load({ "id" => "dataset_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of Dataset records (raises on error).
datasets = client.Dataset.list
```

#### Example: Create

```ruby
dataset = client.Dataset.create({
  "account_id" => "example_account_id", # String
  "id" => "example_id", # String
  "indicatorWriteMode" => "example_indicatorWriteMode", # String
  "isAnalytics" => true, # Boolean
  "isPublic" => true, # Boolean
  "name" => "example_name", # String
  "uuid" => "example_uuid", # String
})
```


### Event

Create an instance: `event = client.Event`

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
| `accountId` | `Float` |  |
| `account_id` | `Integer` | Account ID |
| `alert_enabled` | `Boolean` | Whether alerts are enabled |
| `alert_rollup_enabled` | `Boolean` | Whether alert rollup is enabled |
| `attacker` | `String` |  |
| `attackerCountry` | `String` |  |
| `attackerCountryAlpha3` | `String` |  |
| `category` | `String` |  |
| `childIds` | `Array` | Array of child event UUIDs that were processed |
| `created` | `String` |  |
| `createdAt` | `String` |  |
| `createdEventsCount` | `Float` | Number of events created |
| `createdIndicatorsCount` | `Float` | Number of indicators created |
| `createdRelationshipsCount` | `Float` | Number of relationships created |
| `created_at` | `String` | Creation timestamp |
| `cursor` | `String` | Cursor for pagination. |
| `custom_threat_feed_id` | `Integer` | Intel Indicator Feed ID (numeric) |
| `data` | `String` |  |
| `datasetId` | `String` | Dataset UUIDs to query, or one standalone scope value: 'all'/'*' for the legacy all-datasets behavior, 'analytics' for isAnalytics=true datasets, or 'operational' for isAnalytics=false datasets. |
| `date` | `String` |  |
| `errorCount` | `Float` | Number of errors encountered |
| `errors` | `Array` | Array of error details |
| `event` | `String` |  |
| `eventIds` | `Array` | List of event UUIDs to update (1-100) |
| `failedCount` | `Float` |  |
| `failures` | `Array` | List of events that failed to update with error messages |
| `hasChildren` | `Boolean` |  |
| `id` | `Float` | Unique identifier for the saved query |
| `includeCreatedEvents` | `Boolean` | When true, response includes array of created event UUIDs and shard IDs. |
| `indicator` | `String` |  |
| `indicatorType` | `String` |  |
| `indicatorTypeId` | `Float` |  |
| `insight` | `String` |  |
| `killChain` | `Float` |  |
| `message` | `String` | Human-readable message describing the operation result |
| `mitreAttack` | `Array` |  |
| `mitreCapec` | `Array` |  |
| `name` | `String` | Name of the saved query |
| `numReferenced` | `Float` |  |
| `numReferences` | `Float` |  |
| `order` | `String` |  |
| `orderBy` | `String` |  |
| `page` | `Float` |  |
| `pageSize` | `Float` |  |
| `parentId` | `String` | UUID of the parent event that will be the source of the relationship |
| `query_json` | `String` | JSON string containing the query parameters |
| `raw` | `Hash` |  |
| `rawId` | `String` |  |
| `referenced` | `Array` |  |
| `referencedIds` | `Array` |  |
| `references` | `Array` |  |
| `referencesIds` | `Array` |  |
| `relationshipType` | `String` | Type of relationship to create between parent and child events |
| `relationships` | `Array` | Array of successfully created relationship objects |
| `relationshipsCreated` | `Float` | Number of relationships that were successfully created |
| `releasabilityId` | `String` |  |
| `rule_enabled` | `Boolean` | Whether rule is enabled |
| `rule_list_id` | `String` | WAF rules list ID for blocking |
| `rule_scope` | `String` | Scope for the rule |
| `search` | `Array` | Structured search as a JSON array of {field, op, value} objects. |
| `source` | `String` |  |
| `success` | `Boolean` | Whether the relationship creation operation completed successfully |
| `tags` | `Array` |  |
| `targetCountry` | `String` |  |
| `targetCountryAlpha3` | `String` |  |
| `targetIndustry` | `String` |  |
| `tlp` | `String` |  |
| `updatedCount` | `Float` |  |
| `updated_at` | `String` | Last update timestamp |
| `updates` | `Hash` | Fields to update on all specified events. |
| `user_email` | `String` | Email of the user who created the query |
| `uuid` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Event record (raises on error).
event = client.Event.load({ "id" => "event_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of Event records (raises on error).
events = client.Event.list
```

#### Example: Create

```ruby
event = client.Event.create({
  "account_id" => "example_account_id", # String
  "accountId" => 1, # Float
  "alert_enabled" => true, # Boolean
  "alert_rollup_enabled" => true, # Boolean
  "attacker" => "example_attacker", # String
  "attackerCountry" => "example_attackerCountry", # String
  "attackerCountryAlpha3" => "example_attackerCountryAlpha3", # String
  "category" => "example_category", # String
  "created" => "example_created", # String
  "createdEventsCount" => 1, # Float
  "createdIndicatorsCount" => 1, # Float
  "createdRelationshipsCount" => 1, # Float
  "created_at" => "example_created_at", # String
  "data" => "example_data", # String
  "datasetId" => "example_datasetId", # String
  "date" => "example_date", # String
  "errorCount" => 1, # Float
  "event" => "example_event", # String
  "eventIds" => [], # Array
  "failedCount" => 1, # Float
  "hasChildren" => true, # Boolean
  "indicator" => "example_indicator", # String
  "indicatorType" => "example_indicatorType", # String
  "indicatorTypeId" => 1, # Float
  "killChain" => 1, # Float
  "message" => "example_message", # String
  "mitreAttack" => [], # Array
  "mitreCapec" => [], # Array
  "name" => "example_name", # String
  "numReferenced" => 1, # Float
  "numReferences" => 1, # Float
  "parentId" => "example_parentId", # String
  "query_json" => "example_query_json", # String
  "rawId" => "example_rawId", # String
  "referenced" => [], # Array
  "referencedIds" => [], # Array
  "references" => [], # Array
  "referencesIds" => [], # Array
  "relationshipType" => "example_relationshipType", # String
  "relationships" => [], # Array
  "rule_enabled" => true, # Boolean
  "source" => "example_source", # String
  "success" => true, # Boolean
  "tags" => [], # Array
  "targetCountry" => "example_targetCountry", # String
  "targetCountryAlpha3" => "example_targetCountryAlpha3", # String
  "targetIndustry" => "example_targetIndustry", # String
  "tlp" => "example_tlp", # String
  "updatedCount" => 1, # Float
  "updated_at" => "example_updated_at", # String
  "updates" => {}, # Hash
  "user_email" => "example_user_email", # String
  "uuid" => "example_uuid", # String
})
```


### Group

Create an instance: `group = client.Group`

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
| `createdAt` | `String` |  |
| `description` | `String` |  |
| `id` | `String` |  |
| `members` | `Array` |  |
| `name` | `String` |  |
| `updatedAt` | `String` |  |
| `uuid` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Group record (raises on error).
group = client.Group.load({ "id" => "group_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of Group records (raises on error).
groups = client.Group.list
```

#### Example: Create

```ruby
group = client.Group.create({
  "account_id" => "example_account_id", # String
  "createdAt" => "example_createdAt", # String
  "description" => "example_description", # String
  "members" => [], # Array
  "name" => "example_name", # String
  "updatedAt" => "example_updatedAt", # String
  "uuid" => "example_uuid", # String
})
```


### Indicator

Create an instance: `indicator = client.Indicator`

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
| `completeness` | `Hash` |  |
| `confidence` | `Integer` | Updated confidence. |
| `createdAt` | `String` |  |
| `datasetId` | `String` | The dataset ID this indicator belongs to. |
| `description` | `String` | Optional description for the indicator type |
| `durableObjectId` | `String` |  |
| `id` | `String` |  |
| `indicatorType` | `String` | The indicator type to create (e.g., 'DOMAIN', 'IP', 'URL', 'HASH', 'EMAIL') |
| `indicators` | `Hash` |  |
| `message` | `String` |  |
| `metadata` | `Hash` | Updated metadata. |
| `pagination` | `Hash` |  |
| `relatedEvents` | `Array` |  |
| `sources` | `Array` | RSS article sources from which this indicator was extracted. |
| `tags` | `Array` |  |
| `tlp` | `String` | Traffic Light Protocol designation. |
| `type` | `String` | Updated relationship type. |
| `updatedAt` | `String` |  |
| `uuid` | `String` |  |
| `value` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Indicator record (raises on error).
indicator = client.Indicator.load({ "id" => "indicator_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of Indicator records (raises on error).
indicators = client.Indicator.list
```

#### Example: Create

```ruby
indicator = client.Indicator.create({
  "account_id" => "example_account_id", # String
  "dataset_id" => "example_dataset_id", # String
  "completeness" => {}, # Hash
  "createdAt" => "example_createdAt", # String
  "durableObjectId" => "example_durableObjectId", # String
  "indicatorType" => "example_indicatorType", # String
  "indicators" => {}, # Hash
  "message" => "example_message", # String
  "pagination" => {}, # Hash
  "sources" => [], # Array
  "updatedAt" => "example_updatedAt", # String
  "uuid" => "example_uuid", # String
  "value" => "example_value", # String
})
```


### IndicatorType

Create an instance: `indicator_type = client.IndicatorType`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `type` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the IndicatorType record (raises on error).
indicator_type = client.IndicatorType.load({ "account_id" => "account_id" })
```


### Permission

Create an instance: `permission = client.Permission`

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
| `createdAt` | `String` |  |
| `id` | `String` |  |
| `message` | `String` |  |
| `resourceId` | `String` | The resource ID this permission applies to account_id or group_id |
| `resourceType` | `String` |  |
| `role` | `String` |  |
| `subjectId` | `String` |  |
| `subjectType` | `String` |  |
| `success` | `Boolean` |  |
| `updatedAt` | `String` |  |
| `uuid` | `String` |  |

#### Example: List

```ruby
# list returns an Array of Permission records (raises on error).
permissions = client.Permission.list
```

#### Example: Create

```ruby
permission = client.Permission.create({
  "account_id" => "example_account_id", # String
  "dataset_id" => "example_dataset_id", # String
  "createdAt" => "example_createdAt", # String
  "resourceType" => "example_resourceType", # String
  "role" => "example_role", # String
  "subjectId" => "example_subjectId", # String
  "subjectType" => "example_subjectType", # String
  "updatedAt" => "example_updatedAt", # String
  "uuid" => "example_uuid", # String
})
```


### Priority

Create an instance: `priority = client.Priority`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `id` | `String` |  |
| `labels` | `Array` | List of labels. |
| `messages` | `Array` |  |
| `page` | `Integer` | Page number of results. |
| `per_page` | `Integer` | Number of results per page. |
| `priority` | `Integer` | Priority. |
| `requirement` | `String` | Requirement. |
| `result` | `Object` |  |
| `success` | `Boolean` | Whether the API call was successful. |
| `tlp` | `String` | The CISA defined Traffic Light Protocol (TLP). |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Priority record (raises on error).
priority = client.Priority.load({ "id" => "priority_id", "account_id" => "account_id" })
```

#### Example: Create

```ruby
priority = client.Priority.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "labels" => [], # Array
  "messages" => [], # Array
  "page" => 1, # Integer
  "per_page" => 1, # Integer
  "priority" => 1, # Integer
  "requirement" => "example_requirement", # String
  "success" => true, # Boolean
  "tlp" => "example_tlp", # String
})
```


### PriorityIntelligence

Create an instance: `priority_intelligence = client.PriorityIntelligence`

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
| `id` | `String` |  |
| `labels` | `Array` |  |
| `priority` | `Integer` |  |
| `requirement` | `String` |  |
| `tlp` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the PriorityIntelligence record (raises on error).
priority_intelligence = client.PriorityIntelligence.load({ "id" => "priority_intelligence_id", "account_id" => "account_id" })
```

#### Example: Create

```ruby
priority_intelligence = client.PriorityIntelligence.create({
  "account_id" => "example_account_id", # String
  "requirement" => "example_requirement", # String
})
```


### PriorityIntelligenceRequirement

Create an instance: `priority_intelligence_requirement = client.PriorityIntelligenceRequirement`

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
| `as_of` | `String` |  |
| `backtest_days` | `Integer` |  |
| `candidate_limit` | `Integer` |  |
| `dataset_ids` | `Array` |  |
| `dimension` | `String` |  |
| `emerging_min_current_count` | `Integer` |  |
| `enabled` | `Boolean` |  |
| `established_min_absolute_delta` | `Integer` |  |
| `established_min_prior_count` | `Integer` |  |
| `established_min_relative_delta` | `Float` |  |
| `value` | `String` |  |
| `window_days` | `Integer` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the PriorityIntelligenceRequirement record (raises on error).
priority_intelligence_requirement = client.PriorityIntelligenceRequirement.load({ "account_id" => "account_id" })
```

#### Example: Create

```ruby
priority_intelligence_requirement = client.PriorityIntelligenceRequirement.create({
  "account_id" => "example_account_id", # String
  "dimension" => "example_dimension", # String
  "value" => "example_value", # String
})
```


### PriorityIntelligenceRequirementsPir

Create an instance: `priority_intelligence_requirements__pir = client.PriorityIntelligenceRequirementsPir`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `labels` | `Array` | List of labels. |
| `messages` | `Array` |  |
| `priority` | `Integer` | Priority. |
| `requirement` | `String` | Requirement. |
| `result` | `Object` |  |
| `success` | `Boolean` | Whether the API call was successful. |
| `tlp` | `String` | The CISA defined Traffic Light Protocol (TLP). |

#### Example: List

```ruby
# list returns an Array of PriorityIntelligenceRequirementsPir records (raises on error).
priority_intelligence_requirements__pirs = client.PriorityIntelligenceRequirementsPir.list
```

#### Example: Create

```ruby
priority_intelligence_requirements__pir = client.PriorityIntelligenceRequirementsPir.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "labels" => [], # Array
  "messages" => [], # Array
  "priority" => 1, # Integer
  "requirement" => "example_requirement", # String
  "success" => true, # Boolean
  "tlp" => "example_tlp", # String
})
```


### PublicCredentialMonitor

Create an instance: `public_credential_monitor = client.PublicCredentialMonitor`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `domain` | `String` | Domain to monitor (e.g. |
| `id` | `Integer` |  |
| `matched_at` | `String` |  |
| `username` | `String` |  |

#### Example: List

```ruby
# list returns an Array of PublicCredentialMonitor records (raises on error).
public_credential_monitors = client.PublicCredentialMonitor.list
```

#### Example: Create

```ruby
public_credential_monitor = client.PublicCredentialMonitor.create({
  "account_id" => "example_account_id", # String
  "created_at" => "example_created_at", # String
  "domain" => "example_domain", # String
  "id" => 1, # Integer
  "matched_at" => "example_matched_at", # String
  "username" => "example_username", # String
})
```


### Request

Create an instance: `request = client.Request`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed_after` | `Object` | Retrieve requests completed after this time. |
| `completed_before` | `Object` | Retrieve requests completed before this time. |
| `content` | `String` | Request content. |
| `created_after` | `Object` | Retrieve requests created after this time. |
| `created_before` | `Object` | Retrieve requests created before this time. |
| `errors` | `Array` |  |
| `id` | `String` |  |
| `messages` | `Array` |  |
| `page` | `Integer` | Page number of results. |
| `per_page` | `Integer` | Number of results per page. |
| `priority` | `String` | Priority for analyzing the request. |
| `request_type` | `String` | Requested information from request. |
| `result` | `Hash` |  |
| `sort_by` | `String` | Field to sort results by. |
| `sort_order` | `String` | Sort order (asc or desc). |
| `status` | `String` | Request Status. |
| `success` | `Boolean` | Whether the API call was successful. |
| `summary` | `String` | Brief description of the request. |
| `tlp` | `String` | The CISA defined Traffic Light Protocol (TLP). |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Request record (raises on error).
request = client.Request.load({ "id" => "request_id", "account_id" => "account_id" })
```

#### Example: Create

```ruby
request = client.Request.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "page" => 1, # Integer
  "per_page" => 1, # Integer
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```


### RequestForInformationRfi

Create an instance: `request_for_information__rfi = client.RequestForInformationRfi`

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
| `content` | `String` | Content of message. |
| `errors` | `Array` |  |
| `id` | `String` |  |
| `messages` | `Array` |  |
| `priority` | `String` | Priority for analyzing the request. |
| `request_type` | `String` | Requested information from request. |
| `result` | `Array` |  |
| `source` | `String` | Asset file to upload. |
| `success` | `Boolean` | Whether the API call was successful. |
| `summary` | `String` | Brief description of the request. |
| `tlp` | `String` | The CISA defined Traffic Light Protocol (TLP). |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the RequestForInformationRfi record (raises on error).
request_for_information__rfi = client.RequestForInformationRfi.load({ "account_id" => "account_id", "asset_id" => "asset_id", "request_id" => "request_id" })
```

#### Example: List

```ruby
# list returns an Array of RequestForInformationRfi records (raises on error).
request_for_information__rfis = client.RequestForInformationRfi.list
```

#### Example: Create

```ruby
request_for_information__rfi = client.RequestForInformationRfi.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "success" => true, # Boolean
})
```


### RequestsDashboard

Create an instance: `requests_dashboard = client.RequestsDashboard`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `String` |  |
| `defaultValue` | `Object` |  |
| `description` | `String` |  |
| `displayOrder` | `Float` |  |
| `errors` | `Array` | Always empty on success |
| `fieldLabel` | `String` |  |
| `fieldName` | `String` |  |
| `fieldType` | `String` |  |
| `id` | `String` |  |
| `messages` | `Array` | Always empty on success |
| `options` | `Array` |  |
| `projectType` | `String` |  |
| `project_type` | `String` |  |
| `public` | `Boolean` |  |
| `request_types` | `Array` |  |
| `required` | `Boolean` |  |
| `result` | `Hash` |  |
| `sectionID` | `String` |  |
| `sectionLabel` | `String` |  |
| `success` | `Hash` |  |
| `total` | `Float` |  |
| `updated` | `String` |  |
| `validation` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the RequestsDashboard record (raises on error).
requests_dashboard = client.RequestsDashboard.load({ "account_id" => "account_id", "project_type" => "project_type" })
```

#### Example: List

```ruby
# list returns an Array of RequestsDashboard records (raises on error).
requests_dashboards = client.RequestsDashboard.list
```


### Rfi

Create an instance: `rfi = client.Rfi`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `Hash` |  |
| `assignee` | `String` | Assignee email |
| `completed` | `String` | Completion timestamp |
| `created` | `String` | Creation timestamp |
| `description` | `String` | RFI description (optional). |
| `eventId` | `String` | Optional related event ID |
| `id` | `String` | RFI UUID |
| `investigation_id` | `String` | Investigation UUID |
| `is_free_request` | `Boolean` | Whether this is a free request |
| `message_tokens` | `Float` | Total message tokens |
| `metadata` | `Hash` | Optional metadata fields specific to the RFI type |
| `pagination` | `Hash` |  |
| `priority` | `String` | Request priority |
| `readable_id` | `String` | Human-readable ID |
| `release_entitlements` | `String` | Release entitlements |
| `report_id` | `String` | Report UUID |
| `request` | `Hash` |  |
| `request_type` | `String` | Optional request type for the request |
| `result` | `Array` |  |
| `status` | `String` | RFI status. |
| `subtypeId` | `String` | Optional subtype ID |
| `success` | `String` |  |
| `summary` | `String` | RFI summary |
| `title` | `String` | RFI title (optional). |
| `tlp` | `String` | TLP classification |
| `tokens` | `Float` | Total tokens used |
| `updated` | `String` | Last update timestamp |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Rfi record (raises on error).
rfi = client.Rfi.load({ "id" => "rfi_id", "project_type" => "project_type" })
```

#### Example: Create

```ruby
rfi = client.Rfi.create({
  "account_id" => "example_account_id", # String
  "project_type" => "example_project_type", # String
  "account" => {}, # Hash
  "assignee" => "example_assignee", # String
  "completed" => "example_completed", # String
  "created" => "example_created", # String
  "id" => "example_id", # String
  "investigation_id" => "example_investigation_id", # String
  "is_free_request" => true, # Boolean
  "message_tokens" => 1, # Float
  "pagination" => {}, # Hash
  "priority" => "example_priority", # String
  "readable_id" => "example_readable_id", # String
  "release_entitlements" => "example_release_entitlements", # String
  "report_id" => "example_report_id", # String
  "request" => {}, # Hash
  "result" => [], # Array
  "status" => "example_status", # String
  "success" => "example_success", # String
  "summary" => "example_summary", # String
  "tlp" => "example_tlp", # String
  "tokens" => 1, # Float
  "updated" => "example_updated", # String
})
```


### RfiMessage

Create an instance: `rfi_message = client.RfiMessage`

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
| `attachment_asset_ids` | `Array` |  |
| `attachments` | `Array` |  |
| `author_id` | `String` |  |
| `author_name` | `String` |  |
| `content` | `String` |  |
| `created` | `String` |  |
| `id` | `Integer` |  |
| `is_cloudflare_team` | `Boolean` |  |
| `is_published` | `Boolean` |  |
| `publish` | `Boolean` |  |
| `published` | `String` |  |
| `tlp` | `String` |  |
| `updated` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the RfiMessage record (raises on error).
rfi_message = client.RfiMessage.load({ "id" => "rfi_message_id", "account_id" => "account_id", "project_type" => "project_type", "request_id" => "request_id" })
```

#### Example: List

```ruby
# list returns an Array of RfiMessage records (raises on error).
rfi_messages = client.RfiMessage.list
```

#### Example: Create

```ruby
rfi_message = client.RfiMessage.create({
  "account_id" => "example_account_id", # String
  "project_type" => "example_project_type", # String
  "request_id" => "example_request_id", # String
  "attachments" => [], # Array
  "content" => "example_content", # String
  "created" => "example_created", # String
  "id" => 1, # Integer
  "is_cloudflare_team" => true, # Boolean
  "is_published" => true, # Boolean
  "published" => "example_published", # String
  "tlp" => "example_tlp", # String
  "updated" => "example_updated", # String
})
```


### Rule

Create an instance: `rule = client.Rule`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `arrays` | `Array` |  |
| `headers` | `Hash` |  |
| `operators` | `Hash` |  |
| `scalars` | `Array` |  |
| `string_arrays` | `Array` |  |
| `structs` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of Rule records (raises on error).
rules = client.Rule.list
```


### Scan

Create an instance: `scan = client.Scan`

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
| `errors` | `Array` |  |
| `frequency` | `Float` | Defines the number of days between each scan (0 = One-off scan). |
| `ips` | `Array` | Defines a list of IP addresses or CIDR blocks to scan. |
| `messages` | `Array` |  |
| `ports` | `Array` | Defines a list of ports to scan. |
| `result` | `Hash` |  |
| `success` | `Boolean` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Scan record (raises on error).
scan = client.Scan.load({ "account_id" => "account_id", "config_id" => "config_id" })
```

#### Example: List

```ruby
# list returns an Array of Scan records (raises on error).
scans = client.Scan.list
```

#### Example: Create

```ruby
scan = client.Scan.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```


### Tag

Create an instance: `tag = client.Tag`

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
| `activeDuration` | `String` |  |
| `activeDuration_annotated` | `Hash` |  |
| `actorCategory` | `String` |  |
| `actorCategory_annotated` | `Hash` |  |
| `aliasGroupNames` | `Array` |  |
| `aliasGroupNamesInternal` | `Array` |  |
| `aliases` | `Array` | Structured aliases ({ value, confidence 1-10, tlp }). |
| `attributionOrganization` | `String` |  |
| `attributionOrganization_annotated` | `Hash` |  |
| `categoryName` | `String` |  |
| `categoryUuid` | `String` | Tag type (category) UUID. |
| `confidence` | `Integer` | Overall tag confidence (1-10). |
| `createdAt` | `String` |  |
| `dateOfDiscovery` | `String` | Date of discovery (ISO YYYY-MM-DD). |
| `description` | `String` |  |
| `externalReferenceLinks` | `Array` |  |
| `externalReferences` | `Array` | Structured external references ({ url, description }). |
| `externalReferences_annotated` | `Array` |  |
| `id` | `String` |  |
| `internalAliases` | `Array` | Internal structured aliases ({ value, confidence 1-10, tlp }). |
| `internalDescription` | `String` |  |
| `lastSeen` | `String` |  |
| `metadata` | `Hash` | Updated metadata. |
| `motive` | `String` |  |
| `motive_annotated` | `Hash` |  |
| `opsecLevel` | `String` |  |
| `opsecLevel_annotated` | `Hash` |  |
| `originCountryISO` | `String` | ISO country code (alpha-2 or alpha-3). |
| `originCountryISO_annotated` | `Hash` |  |
| `priority` | `Float` |  |
| `priority_annotated` | `Hash` |  |
| `properties` | `Hash` | Parsed custom field values. |
| `sophisticationLevel` | `String` |  |
| `sophisticationLevel_annotated` | `Hash` |  |
| `tlp` | `String` | Tag-level TLP handling marking. |
| `type` | `String` | Updated relationship type. |
| `updatedAt` | `String` |  |
| `uuid` | `String` |  |
| `value` | `String` |  |
| `version` | `Float` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Tag record (raises on error).
tag = client.Tag.load({ "id" => "tag_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of Tag records (raises on error).
tags = client.Tag.list
```

#### Example: Create

```ruby
tag = client.Tag.create({
  "account_id" => "example_account_id", # String
  "activeDuration_annotated" => {}, # Hash
  "actorCategory_annotated" => {}, # Hash
  "attributionOrganization_annotated" => {}, # Hash
  "motive_annotated" => {}, # Hash
  "opsecLevel_annotated" => {}, # Hash
  "originCountryISO_annotated" => {}, # Hash
  "priority_annotated" => {}, # Hash
  "sophisticationLevel_annotated" => {}, # Hash
  "uuid" => "example_uuid", # String
  "value" => "example_value", # String
})
```


### TagCategory

Create an instance: `tag_category = client.TagCategory`

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
| `createdAt` | `String` |  |
| `description` | `String` |  |
| `id` | `String` |  |
| `name` | `String` |  |
| `schema` | `Array` | Parsed FieldDefinition[] defining custom fields for this category, or null if none. |
| `updatedAt` | `String` |  |
| `uuid` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the TagCategory record (raises on error).
tag_category = client.TagCategory.load({ "id" => "tag_category_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of TagCategory records (raises on error).
tag_categorys = client.TagCategory.list
```

#### Example: Create

```ruby
tag_category = client.TagCategory.create({
  "account_id" => "example_account_id", # String
  "name" => "example_name", # String
  "uuid" => "example_uuid", # String
})
```


### TargetIndustry

Create an instance: `target_industry = client.TargetIndustry`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `type` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the TargetIndustry record (raises on error).
target_industry = client.TargetIndustry.load({ "account_id" => "account_id" })
```


### ThreatSignal

Create an instance: `threat_signal = client.ThreatSignal`

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
| `category_id` | `String` | One of the predefined Threat Signals feed categories; see GET /:account_id/v2/threat-signals/categories. |
| `category_uuids` | `Array` |  |
| `config` | `String` |  |
| `display_name` | `String` |  |
| `display_order` | `Integer` |  |
| `enabled` | `Boolean` |  |
| `errors` | `Array` |  |
| `feeds` | `Array` |  |
| `is_active` | `Boolean` |  |
| `message` | `String` |  |
| `messages` | `Array` |  |
| `name` | `String` |  |
| `opted_out` | `Boolean` |  |
| `output_schema` | `String` |  |
| `poll_interval_s` | `Integer` |  |
| `prompt` | `String` |  |
| `read` | `Boolean` |  |
| `result` | `Object` |  |
| `skill_ids` | `Array` |  |
| `success` | `Boolean` |  |
| `tag_id` | `String` |  |
| `title` | `String` |  |
| `url` | `String` |  |
| `why_valuable` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ThreatSignal record (raises on error).
threat_signal = client.ThreatSignal.load({ "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of ThreatSignal records (raises on error).
threat_signals = client.ThreatSignal.list
```

#### Example: Create

```ruby
threat_signal = client.ThreatSignal.create({
  "account_id" => "example_account_id", # String
  "category_uuids" => [], # Array
  "errors" => [], # Array
  "feeds" => [], # Array
  "message" => "example_message", # String
  "messages" => [], # Array
  "opted_out" => true, # Boolean
  "read" => true, # Boolean
  "result" => "example_result", # Object
  "skill_ids" => [], # Array
  "success" => true, # Boolean
  "tag_id" => "example_tag_id", # String
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

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── CloudflareCloudforceOne_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── schema.rb                  -- Generated option + entity specs
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`CloudflareCloudforceOne_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```ruby
permission = client.Permission
permission.list()

# permission.data_get now returns the permission data from the last list
# permission.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
