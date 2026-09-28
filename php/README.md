# CloudflareCloudforceOne PHP SDK



The PHP SDK for the CloudflareCloudforceOne API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Attacker()` — with named operations (`list`/`load`/`create`/`update`/`remove`/`patch`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudflare-cloudforce-one-sdk/releases](https://github.com/voxgig-sdk/cloudflare-cloudforce-one-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'cloudflarecloudforceone_sdk.php';

$client = new CloudflareCloudforceOneSDK([
    "apikey" => getenv("CLOUDFLARE_CLOUDFORCE_ONE_APIKEY"),
]);
```

### 3. Load a dashboardasset

DashboardAsset is nested under account, so provide the `account_id`.

```php
try {
    // load() returns the ENTITY — call data_get() for the DashboardAsset record (throws on error).
    $dashboardasset = $client->DashboardAsset()->load(["account_id" => "example_account_id", "project_type" => "example_project_type", "request_id" => "example_request_id"]);
    print_r($dashboardasset->data_get());
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $permissions = $client->Permission()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = CloudflareCloudforceOneSDK::test([
    "entity" => ["priority" => ["test01" => ["id" => "test01"]]],
]);

// Entity ops return the ENTITY (throws on error);
// call data_get() for the mock record.
$priority = $client->Priority()->load(["id" => "test01", "account_id" => "example"]);
print_r($priority->data_get());
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new CloudflareCloudforceOneSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE
CLOUDFLARE_CLOUDFORCE_ONE_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### CloudflareCloudforceOneSDK

```php
require_once 'cloudflarecloudforceone_sdk.php';
$client = new CloudflareCloudforceOneSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = CloudflareCloudforceOneSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### CloudflareCloudforceOneSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Attacker` | `($data): AttackerEntity` | Create an Attacker entity instance. |
| `BinDb` | `($data): BinDbEntity` | Create a BinDb entity instance. |
| `BrandProtection` | `($data): BrandProtectionEntity` | Create a BrandProtection entity instance. |
| `Category` | `($data): CategoryEntity` | Create a Category entity instance. |
| `CloudforceOneAccountExemption` | `($data): CloudforceOneAccountExemptionEntity` | Create a CloudforceOneAccountExemption entity instance. |
| `CloudforceOneDeleteAll` | `($data): CloudforceOneDeleteAllEntity` | Create a CloudforceOneDeleteAll entity instance. |
| `CloudforceOneEditApproval` | `($data): CloudforceOneEditApprovalEntity` | Create a CloudforceOneEditApproval entity instance. |
| `CloudforceOneEmailRuleValidation` | `($data): CloudforceOneEmailRuleValidationEntity` | Create a CloudforceOneEmailRuleValidation entity instance. |
| `CloudforceOneEmailRulesList` | `($data): CloudforceOneEmailRulesListEntity` | Create a CloudforceOneEmailRulesList entity instance. |
| `CloudforceOneRequestsApiResponseCommon` | `($data): CloudforceOneRequestsApiResponseCommonEntity` | Create a CloudforceOneRequestsApiResponseCommon entity instance. |
| `CloudforceOneRule` | `($data): CloudforceOneRuleEntity` | Create a CloudforceOneRule entity instance. |
| `CloudforceOneRuleApprovalDetail` | `($data): CloudforceOneRuleApprovalDetailEntity` | Create a CloudforceOneRuleApprovalDetail entity instance. |
| `CloudforceOneRuleApprovalsList` | `($data): CloudforceOneRuleApprovalsListEntity` | Create a CloudforceOneRuleApprovalsList entity instance. |
| `CloudforceOneRulePreview` | `($data): CloudforceOneRulePreviewEntity` | Create a CloudforceOneRulePreview entity instance. |
| `CloudforceOneRulesPreviewList` | `($data): CloudforceOneRulesPreviewListEntity` | Create a CloudforceOneRulesPreviewList entity instance. |
| `CloudforceOneRulesSearch` | `($data): CloudforceOneRulesSearchEntity` | Create a CloudforceOneRulesSearch entity instance. |
| `CloudforceOneStat` | `($data): CloudforceOneStatEntity` | Create a CloudforceOneStat entity instance. |
| `CloudforceOneSuccess` | `($data): CloudforceOneSuccessEntity` | Create a CloudforceOneSuccess entity instance. |
| `CloudforceOneTreeNode` | `($data): CloudforceOneTreeNodeEntity` | Create a CloudforceOneTreeNode entity instance. |
| `CloudforceOneValidation` | `($data): CloudforceOneValidationEntity` | Create a CloudforceOneValidation entity instance. |
| `Collection` | `($data): CollectionEntity` | Create a Collection entity instance. |
| `CollectionsItem` | `($data): CollectionsItemEntity` | Create a CollectionsItem entity instance. |
| `Country` | `($data): CountryEntity` | Create a Country entity instance. |
| `DashboardAsset` | `($data): DashboardAssetEntity` | Create a DashboardAsset entity instance. |
| `DashboardUser` | `($data): DashboardUserEntity` | Create a DashboardUser entity instance. |
| `Dataset` | `($data): DatasetEntity` | Create a Dataset entity instance. |
| `Event` | `($data): EventEntity` | Create an Event entity instance. |
| `Group` | `($data): GroupEntity` | Create a Group entity instance. |
| `Indicator` | `($data): IndicatorEntity` | Create an Indicator entity instance. |
| `IndicatorType` | `($data): IndicatorTypeEntity` | Create an IndicatorType entity instance. |
| `Permission` | `($data): PermissionEntity` | Create a Permission entity instance. |
| `Priority` | `($data): PriorityEntity` | Create a Priority entity instance. |
| `PriorityIntelligence` | `($data): PriorityIntelligenceEntity` | Create a PriorityIntelligence entity instance. |
| `PriorityIntelligenceRequirement` | `($data): PriorityIntelligenceRequirementEntity` | Create a PriorityIntelligenceRequirement entity instance. |
| `PriorityIntelligenceRequirementsPir` | `($data): PriorityIntelligenceRequirementsPirEntity` | Create a PriorityIntelligenceRequirementsPir entity instance. |
| `PublicCredentialMonitor` | `($data): PublicCredentialMonitorEntity` | Create a PublicCredentialMonitor entity instance. |
| `Request` | `($data): RequestEntity` | Create a Request entity instance. |
| `RequestForInformationRfi` | `($data): RequestForInformationRfiEntity` | Create a RequestForInformationRfi entity instance. |
| `RequestsDashboard` | `($data): RequestsDashboardEntity` | Create a RequestsDashboard entity instance. |
| `Rfi` | `($data): RfiEntity` | Create a Rfi entity instance. |
| `RfiMessage` | `($data): RfiMessageEntity` | Create a RfiMessage entity instance. |
| `Rule` | `($data): RuleEntity` | Create a Rule entity instance. |
| `Scan` | `($data): ScanEntity` | Create a Scan entity instance. |
| `Tag` | `($data): TagEntity` | Create a Tag entity instance. |
| `TagCategory` | `($data): TagCategoryEntity` | Create a TagCategory entity instance. |
| `TargetIndustry` | `($data): TargetIndustryEntity` | Create a TargetIndustry entity instance. |
| `ThreatSignal` | `($data): ThreatSignalEntity` | Create a ThreatSignal entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

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

Create an instance: `$attacker = $client->Attacker();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `type` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Attacker record (throws on error).
$attacker = $client->Attacker()->load(["account_id" => "account_id"]);
```


### BinDb

Create an instance: `$bin_db = $client->BinDb();`

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

```php
// load() returns the ENTITY — call data_get() for the BinDb record (throws on error).
$bin_db = $client->BinDb()->load(["account_id" => "account_id", "hash" => "hash"]);
```

#### Example: Create

```php
$bin_db = $client->BinDb()->create([
    "account_id" => null, // string
    "content_type" => null, // string
    "md5" => null, // string
    "sha1" => null, // string
    "sha256" => null, // string
]);
```


### BrandProtection

Create an instance: `$brand_protection = $client->BrandProtection();`

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
| `createNotice` | `bool` |  |
| `createdAt` | `string` |  |
| `description` | `string` |  |
| `dismissed` | `bool` | Whether the match is dismissed. |
| `domain` | `string` |  |
| `domain_id` | `int` |  |
| `domains` | `array` |  |
| `errors` | `array` |  |
| `fields` | `array` |  |
| `first_seen` | `string` |  |
| `format` | `string` |  |
| `id` | `float` |  |
| `image_data` | `string` | Base64 encoded image data. |
| `letterText` | `string` |  |
| `letterType` | `string` |  |
| `matchId` | `float` |  |
| `matchType` | `string` |  |
| `match_details` | `array` | Per-match detail objects with query metadata and individual dismissed state. |
| `match_ids` | `array` |  |
| `matched_at` | `string` |  |
| `matches` | `array` |  |
| `max_time` | `string` |  |
| `message` | `string` |  |
| `messages` | `array` |  |
| `min_time` | `string` |  |
| `name` | `string` |  |
| `noticeParams` | `array` |  |
| `notices` | `array` |  |
| `public_scans` | `array` |  |
| `queryId` | `float` |  |
| `queryIds` | `array` |  |
| `query_id` | `int` |  |
| `r2_path` | `string` |  |
| `registrar` | `string` |  |
| `result` | `mixed` |  |
| `result_info` | `array` | Present on paginated list responses when page or per_page is supplied. |
| `scan` | `bool` |  |
| `scan_matches` | `bool` |  |
| `scan_status` | `string` |  |
| `scan_submission_id` | `int` |  |
| `score_threshold` | `float` | Minimum similarity score threshold for matches (0-1, default: 0) |
| `search_lookback` | `bool` | If true, search recent domain lookback entries for matches |
| `similarity_score` | `float` |  |
| `similarity_threshold` | `float` | Minimum similarity score (0-1) required for visual matches |
| `source` | `string` |  |
| `status` | `string` |  |
| `string_matches` | `array` |  |
| `success` | `bool` |  |
| `tag` | `string` | Unique identifier for the logo query |
| `takedownNoticeId` | `float` |  |
| `templateId` | `string` |  |
| `top_k` | `int` | Number of closest matches to return (1-100, default: 10) |
| `total_analyzed` | `float` |  |
| `total_matches` | `float` |  |
| `truncated` | `bool` |  |
| `updatedAt` | `string` |  |
| `uploaded_at` | `string` |  |
| `url_scan_id` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the BrandProtection record (throws on error).
$brand_protection = $client->BrandProtection()->load(["account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of BrandProtection records (throws on error).
$brand_protections = $client->BrandProtection()->list();
```

#### Example: Create

```php
$brand_protection = $client->BrandProtection()->create([
    "account_id" => null, // string
    "action" => null, // string
    "body" => null, // string
    "brand" => null, // string
    "category" => null, // string
    "createdAt" => null, // string
    "description" => null, // string
    "dismissed" => null, // bool
    "domain" => null, // string
    "domain_id" => null, // int
    "domains" => null, // array
    "errors" => null, // array
    "fields" => null, // array
    "first_seen" => null, // string
    "id" => null, // float
    "image_data" => null, // string
    "letterText" => null, // string
    "letterType" => null, // string
    "matchId" => null, // float
    "matchType" => null, // string
    "matched_at" => null, // string
    "matches" => null, // array
    "message" => null, // string
    "messages" => null, // array
    "name" => null, // string
    "noticeParams" => null, // array
    "notices" => null, // array
    "public_scans" => null, // array
    "queryId" => null, // float
    "r2_path" => null, // string
    "registrar" => null, // string
    "result" => null, // mixed
    "result_info" => null, // array
    "scan_status" => null, // string
    "scan_submission_id" => null, // int
    "similarity_score" => null, // float
    "similarity_threshold" => null, // float
    "source" => null, // string
    "status" => null, // string
    "string_matches" => null, // array
    "success" => null, // bool
    "tag" => null, // string
    "takedownNoticeId" => null, // float
    "templateId" => null, // string
    "total_analyzed" => null, // float
    "total_matches" => null, // float
    "truncated" => null, // bool
    "updatedAt" => null, // string
    "uploaded_at" => null, // string
    "url_scan_id" => null, // string
]);
```


### Category

Create an instance: `$category = $client->Category();`

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
| `killChain` | `float` |  |
| `mitreAttack` | `array` |  |
| `mitreCapec` | `array` |  |
| `name` | `string` |  |
| `shortname` | `string` |  |
| `uuid` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Category record (throws on error).
$category = $client->Category()->load(["id" => "category_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of Category records (throws on error).
$categorys = $client->Category()->list();
```

#### Example: Create

```php
$category = $client->Category()->create([
    "account_id" => null, // string
    "killChain" => null, // float
    "name" => null, // string
    "uuid" => null, // string
]);
```


### CloudforceOneAccountExemption

Create an instance: `$cloudforce_one_account_exemption = $client->CloudforceOneAccountExemption();`

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
| `namespace` | `array` |  |
| `tag_match` | `array` |  |
| `worker_name` | `array` |  |

#### Example: List

```php
// list() returns an array of CloudforceOneAccountExemption records (throws on error).
$cloudforce_one_account_exemptions = $client->CloudforceOneAccountExemption()->list();
```

#### Example: Create

```php
$cloudforce_one_account_exemption = $client->CloudforceOneAccountExemption()->create([
    "account_id" => null, // string
    "namespace" => null, // array
    "tag_match" => null, // array
    "worker_name" => null, // array
]);
```


### CloudforceOneDeleteAll

Create an instance: `$cloudforce_one_delete_all = $client->CloudforceOneDeleteAll();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### CloudforceOneEditApproval

Create an instance: `$cloudforce_one_edit_approval = $client->CloudforceOneEditApproval();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `condition` | `array` | Nested condition groups support up to 10 levels of depth. |
| `description` | `string` |  |
| `enabled` | `bool` |  |
| `id` | `string` |  |
| `meta` | `array` |  |
| `name` | `string` |  |
| `status` | `string` | Disposition for matching email. |
| `strings` | `array` |  |

#### Example: Create

```php
$cloudforce_one_edit_approval = $client->CloudforceOneEditApproval()->create([
    "account_id" => null, // string
    "approval_id" => null, // string
    "condition" => null, // array
    "name" => null, // string
]);
```


### CloudforceOneEmailRuleValidation

Create an instance: `$cloudforce_one_email_rule_validation = $client->CloudforceOneEmailRuleValidation();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `compiled_yara` | `string` |  |
| `condition` | `array` | Nested condition groups support up to 10 levels of depth. |
| `description` | `string` |  |
| `enabled` | `bool` |  |
| `error` | `string` |  |
| `existing_rule_id` | `string` | Existing rule ID to exclude from duplicate-name checks when validating an update. |
| `meta` | `array` |  |
| `name` | `string` |  |
| `status` | `string` | Disposition for matching email. |
| `strings` | `array` |  |
| `valid` | `bool` |  |

#### Example: Create

```php
$cloudforce_one_email_rule_validation = $client->CloudforceOneEmailRuleValidation()->create([
    "account_id" => null, // string
    "condition" => null, // array
    "name" => null, // string
    "valid" => null, // bool
]);
```


### CloudforceOneEmailRulesList

Create an instance: `$cloudforce_one_email_rules_list = $client->CloudforceOneEmailRulesList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `string` |  |
| `created_at` | `float` |  |
| `created_by` | `string` |  |
| `description` | `string` |  |
| `enabled` | `bool` | Whether this rule is active for dice consumers. |
| `id` | `string` |  |
| `is_public` | `bool` | Whether this rule is visible to other internal accounts. |
| `meta` | `array` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` |  |
| `namespaces` | `array` |  |
| `path` | `string` |  |
| `pending_approval_id` | `float` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `array` | Proposed update or deletion awaiting approval. |
| `structured_source` | `string` | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `float` |  |
| `updated_by` | `string` |  |

#### Example: List

```php
// list() returns an array of CloudforceOneEmailRulesList records (throws on error).
$cloudforce_one_email_rules_lists = $client->CloudforceOneEmailRulesList()->list();
```


### CloudforceOneRequestsApiResponseCommon

Create an instance: `$cloudforce_one_requests_api_response_common = $client->CloudforceOneRequestsApiResponseCommon();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### CloudforceOneRule

Create an instance: `$cloudforce_one_rule = $client->CloudforceOneRule();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `array` |  |
| `commit_message` | `string` | Human-readable justification for this change. |
| `content` | `string` |  |
| `description` | `string` | Human-readable description of the rule. |
| `enabled` | `bool` | Whether this rule is active for dice consumers. |
| `is_public` | `bool` | Whether this rule is visible to other internal accounts. |
| `meta` | `array` | Adds YARA meta entries to the rule's meta block and stores them in rule_meta alongside content metadata. |
| `name` | `string` |  |
| `namespaces` | `array` | Optional WfP deployment tags (customer rules only). |
| `path` | `string` |  |

#### Example: Create

```php
$cloudforce_one_rule = $client->CloudforceOneRule()->create([
    "account_id" => null, // string
    "content" => null, // string
    "name" => null, // string
    "path" => null, // string
]);
```


### CloudforceOneRuleApprovalDetail

Create an instance: `$cloudforce_one_rule_approval_detail = $client->CloudforceOneRuleApprovalDetail();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `audit_log_id` | `float` |  |
| `can_review` | `bool` | Whether the authenticated user may approve or reject this pending change. |
| `cancelled_at` | `float` | Time at which the requester cancelled the approval. |
| `cancelled_by` | `string` | Requester who cancelled the pending approval. |
| `change_description` | `string` |  |
| `change_type` | `string` |  |
| `commit_message` | `string` | The requester supplies this human-readable justification with the change. |
| `compiler_warnings` | `array` |  |
| `current_rule` | `mixed` |  |
| `id` | `float` |  |
| `proposed_changes` | `mixed` | Contains structured proposed rule changes, or null for unresolved persisted data. |
| `rejection_reason` | `string` | The reviewer may supply a reason when rejecting the change. |
| `requested_at` | `float` |  |
| `requested_by` | `string` |  |
| `reviewed_at` | `float` |  |
| `reviewer_scope` | `string` | Review policy: general Nomos approvers for default; general approvers or Phishguard for email. |
| `revision_number` | `int` | Revision number within this approval request chain. |
| `rule_id` | `string` |  |
| `rule_name` | `string` |  |
| `status` | `string` |  |
| `superseded_by_approval_id` | `float` | Newer approval revision that replaced this approval. |
| `supersedes_approval_id` | `float` | This approval replaces the referenced approval revision. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CloudforceOneRuleApprovalDetail record (throws on error).
$cloudforce_one_rule_approval_detail = $client->CloudforceOneRuleApprovalDetail()->load(["id" => "cloudforce_one_rule_approval_detail_id", "account_id" => "account_id"]);
```

#### Example: Create

```php
$cloudforce_one_rule_approval_detail = $client->CloudforceOneRuleApprovalDetail()->create([
    "account_id" => null, // string
    "approval_id" => null, // string
    "audit_log_id" => null, // float
    "can_review" => null, // bool
    "cancelled_at" => null, // float
    "cancelled_by" => null, // string
    "change_description" => null, // string
    "change_type" => null, // string
    "commit_message" => null, // string
    "current_rule" => null, // mixed
    "id" => null, // float
    "proposed_changes" => null, // mixed
    "rejection_reason" => null, // string
    "requested_at" => null, // float
    "requested_by" => null, // string
    "reviewed_at" => null, // float
    "reviewer_scope" => null, // string
    "revision_number" => null, // int
    "rule_id" => null, // string
    "rule_name" => null, // string
    "status" => null, // string
    "superseded_by_approval_id" => null, // float
    "supersedes_approval_id" => null, // float
]);
```


### CloudforceOneRuleApprovalsList

Create an instance: `$cloudforce_one_rule_approvals_list = $client->CloudforceOneRuleApprovalsList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `audit_log_id` | `float` |  |
| `can_review` | `bool` | Whether the authenticated user may approve or reject this pending change. |
| `cancelled_at` | `float` | Time at which the requester cancelled the approval. |
| `cancelled_by` | `string` | Requester who cancelled the pending approval. |
| `change_description` | `string` |  |
| `change_type` | `string` |  |
| `commit_message` | `string` | The requester supplies this human-readable justification with the change. |
| `id` | `float` |  |
| `proposed_changes` | `mixed` | Contains structured proposed rule changes, or null for unresolved persisted data. |
| `rejection_reason` | `string` | The reviewer may supply a reason when rejecting the change. |
| `requested_at` | `float` |  |
| `requested_by` | `string` |  |
| `reviewed_at` | `float` |  |
| `reviewer_scope` | `string` | Review policy: general Nomos approvers for default; general approvers or Phishguard for email. |
| `revision_number` | `int` | Revision number within this approval request chain. |
| `rule_id` | `string` |  |
| `rule_name` | `string` |  |
| `status` | `string` |  |
| `superseded_by_approval_id` | `float` | Newer approval revision that replaced this approval. |
| `supersedes_approval_id` | `float` | This approval replaces the referenced approval revision. |

#### Example: List

```php
// list() returns an array of CloudforceOneRuleApprovalsList records (throws on error).
$cloudforce_one_rule_approvals_lists = $client->CloudforceOneRuleApprovalsList()->list();
```


### CloudforceOneRulePreview

Create an instance: `$cloudforce_one_rule_preview = $client->CloudforceOneRulePreview();`

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
| `condition` | `array` | Nested condition groups support up to 10 levels of depth. |
| `content` | `string` |  |
| `created_at` | `float` |  |
| `created_by` | `string` |  |
| `description` | `string` | Human-readable description of the rule. |
| `enabled` | `bool` | Whether this rule is active for dice consumers. |
| `id` | `string` |  |
| `is_public` | `bool` | Whether this rule is visible to other internal accounts. |
| `meta` | `array` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` |  |
| `namespaces` | `array` |  |
| `path` | `string` | Path change goes through approval workflow. |
| `pending_approval_id` | `float` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `array` | Proposed update or deletion awaiting approval. |
| `status` | `string` | Disposition for matching email. |
| `strings` | `array` |  |
| `structured_source` | `string` | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `float` |  |
| `updated_by` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CloudforceOneRulePreview record (throws on error).
$cloudforce_one_rule_preview = $client->CloudforceOneRulePreview()->load(["id" => "cloudforce_one_rule_preview_id", "account_id" => "account_id"]);
```

#### Example: Create

```php
$cloudforce_one_rule_preview = $client->CloudforceOneRulePreview()->create([
    "account_id" => null, // string
    "condition" => null, // array
    "created_at" => null, // float
    "created_by" => null, // string
    "description" => null, // string
    "enabled" => null, // bool
    "id" => null, // string
    "is_public" => null, // bool
    "name" => null, // string
    "namespaces" => null, // array
    "path" => null, // string
    "pending_approval_id" => null, // float
    "pending_change" => null, // array
    "updated_at" => null, // float
    "updated_by" => null, // string
]);
```


### CloudforceOneRulesPreviewList

Create an instance: `$cloudforce_one_rules_preview_list = $client->CloudforceOneRulesPreviewList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `string` |  |
| `created_at` | `float` |  |
| `created_by` | `string` |  |
| `description` | `string` |  |
| `enabled` | `bool` | Whether this rule is active for dice consumers. |
| `id` | `string` |  |
| `is_public` | `bool` | Whether this rule is visible to other internal accounts. |
| `meta` | `array` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` |  |
| `namespaces` | `array` |  |
| `path` | `string` |  |
| `pending_approval_id` | `float` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `array` | Proposed update or deletion awaiting approval. |
| `structured_source` | `string` | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `float` |  |
| `updated_by` | `string` |  |

#### Example: List

```php
// list() returns an array of CloudforceOneRulesPreviewList records (throws on error).
$cloudforce_one_rules_preview_lists = $client->CloudforceOneRulesPreviewList()->list();
```


### CloudforceOneRulesSearch

Create an instance: `$cloudforce_one_rules_search = $client->CloudforceOneRulesSearch();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `string` |  |
| `created_at` | `float` |  |
| `created_by` | `string` |  |
| `description` | `string` |  |
| `enabled` | `bool` | Whether this rule is active for dice consumers. |
| `id` | `string` |  |
| `is_public` | `bool` | Whether this rule is visible to other internal accounts. |
| `meta` | `array` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` |  |
| `namespaces` | `array` |  |
| `path` | `string` |  |
| `pending_approval_id` | `float` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `array` | Proposed update or deletion awaiting approval. |
| `score` | `float` | Relevance score in [0,1]. |
| `scoring_details` | `array` | AI Search hybrid retrieval returns this per-component scoring breakdown. |
| `structured_source` | `string` | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `float` |  |
| `updated_by` | `string` |  |

#### Example: List

```php
// list() returns an array of CloudforceOneRulesSearch records (throws on error).
$cloudforce_one_rules_searchs = $client->CloudforceOneRulesSearch()->list();
```


### CloudforceOneStat

Create an instance: `$cloudforce_one_stat = $client->CloudforceOneStat();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CloudforceOneStat record (throws on error).
$cloudforce_one_stat = $client->CloudforceOneStat()->load(["account_id" => "account_id"]);
```


### CloudforceOneSuccess

Create an instance: `$cloudforce_one_success = $client->CloudforceOneSuccess();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `success` | `bool` |  |

#### Example: Create

```php
$cloudforce_one_success = $client->CloudforceOneSuccess()->create([
    "account_id" => null, // string
    "approval_id" => null, // string
    "success" => null, // bool
]);
```


### CloudforceOneTreeNode

Create an instance: `$cloudforce_one_tree_node = $client->CloudforceOneTreeNode();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `children` | `array` |  |
| `count` | `float` |  |
| `name` | `string` |  |
| `path` | `string` |  |

#### Example: List

```php
// list() returns an array of CloudforceOneTreeNode records (throws on error).
$cloudforce_one_tree_nodes = $client->CloudforceOneTreeNode()->list();
```


### CloudforceOneValidation

Create an instance: `$cloudforce_one_validation = $client->CloudforceOneValidation();`

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
| `namespaces` | `array` |  |
| `path` | `string` |  |
| `valid` | `bool` |  |

#### Example: Create

```php
$cloudforce_one_validation = $client->CloudforceOneValidation()->create([
    "account_id" => null, // string
    "content" => null, // string
    "name" => null, // string
    "valid" => null, // bool
]);
```


### Collection

Create an instance: `$collection = $client->Collection();`

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
| `columns` | `array` |  |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `data` | `array` |  |
| `id` | `string` |  |
| `item_count` | `float` |  |
| `metadata` | `array` |  |
| `name` | `string` | New column name (must be unique) |
| `position` | `float` | Column display order |
| `required` | `bool` | Whether column is required |
| `status` | `string` |  |
| `type` | `string` | Column type: text, number, boolean, or date |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Collection record (throws on error).
$collection = $client->Collection()->load(["id" => "collection_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of Collection records (throws on error).
$collections = $client->Collection()->list();
```

#### Example: Create

```php
$collection = $client->Collection()->create([
    "account_id" => null, // string
    "columns" => null, // array
    "created_at" => null, // string
    "created_by" => null, // string
    "data" => null, // array
    "id" => null, // string
    "item_count" => null, // float
    "name" => null, // string
    "position" => null, // float
    "required" => null, // bool
    "status" => null, // string
    "type" => null, // string
    "updated_at" => null, // string
]);
```


### CollectionsItem

Create an instance: `$collections_item = $client->CollectionsItem();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$collections_item = $client->CollectionsItem()->create([
    "account_id" => null, // string
    "collection_id" => null, // string
]);
```


### Country

Create an instance: `$country = $client->Country();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |
| `success` | `string` |  |

#### Example: List

```php
// list() returns an array of Country records (throws on error).
$countrys = $client->Country()->list();
```


### DashboardAsset

Create an instance: `$dashboard_asset = $client->DashboardAsset();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assets` | `array` |  |
| `contentType` | `array` |  |
| `count` | `array` |  |
| `downloadable` | `array` |  |
| `expiresAt` | `array` |  |
| `fileName` | `array` |  |
| `fileSize` | `array` |  |
| `id` | `array` |  |
| `is_cloudflare_team` | `array` |  |
| `metadata` | `array` |  |
| `origin` | `array` |  |
| `state` | `array` |  |
| `tlp` | `array` |  |
| `uploadedAt` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DashboardAsset record (throws on error).
$dashboard_asset = $client->DashboardAsset()->load(["account_id" => "account_id", "project_type" => "project_type", "request_id" => "request_id"]);
```

#### Example: Create

```php
$dashboard_asset = $client->DashboardAsset()->create([
    "account_id" => null, // string
    "project_type" => null, // string
    "request_id" => null, // string
    "assets" => null, // array
    "contentType" => null, // array
    "count" => null, // array
    "downloadable" => null, // array
    "expiresAt" => null, // array
    "fileName" => null, // array
    "fileSize" => null, // array
    "id" => null, // array
    "is_cloudflare_team" => null, // array
    "metadata" => null, // array
    "origin" => null, // array
    "state" => null, // array
    "tlp" => null, // array
    "uploadedAt" => null, // array
]);
```


### DashboardUser

Create an instance: `$dashboard_user = $client->DashboardUser();`

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

```php
// load() returns the ENTITY — call data_get() for the DashboardUser record (throws on error).
$dashboard_user = $client->DashboardUser()->load(["account_id" => "account_id", "request_id" => "request_id"]);
```


### Dataset

Create an instance: `$dataset = $client->Dataset();`

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
| `isAnalytics` | `bool` |  |
| `isPublic` | `bool` | If true, then anyone can search the dataset. |
| `name` | `string` | Used to describe the dataset within the account context. |
| `uuid` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Dataset record (throws on error).
$dataset = $client->Dataset()->load(["id" => "dataset_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of Dataset records (throws on error).
$datasets = $client->Dataset()->list();
```

#### Example: Create

```php
$dataset = $client->Dataset()->create([
    "account_id" => null, // string
    "id" => null, // string
    "indicatorWriteMode" => null, // string
    "isAnalytics" => null, // bool
    "isPublic" => null, // bool
    "name" => null, // string
    "uuid" => null, // string
]);
```


### Event

Create an instance: `$event = $client->Event();`

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
| `accountId` | `float` |  |
| `account_id` | `int` | Account ID |
| `alert_enabled` | `bool` | Whether alerts are enabled |
| `alert_rollup_enabled` | `bool` | Whether alert rollup is enabled |
| `attacker` | `string` |  |
| `attackerCountry` | `string` |  |
| `attackerCountryAlpha3` | `string` |  |
| `category` | `string` |  |
| `childIds` | `array` | Array of child event UUIDs that were processed |
| `created` | `string` |  |
| `createdAt` | `string` |  |
| `createdEventsCount` | `float` | Number of events created |
| `createdIndicatorsCount` | `float` | Number of indicators created |
| `createdRelationshipsCount` | `float` | Number of relationships created |
| `created_at` | `string` | Creation timestamp |
| `cursor` | `string` | Cursor for pagination. |
| `custom_threat_feed_id` | `int` | Intel Indicator Feed ID (numeric) |
| `data` | `string` |  |
| `datasetId` | `string` | Dataset UUIDs to query, or one standalone scope value: 'all'/'*' for the legacy all-datasets behavior, 'analytics' for isAnalytics=true datasets, or 'operational' for isAnalytics=false datasets. |
| `date` | `string` |  |
| `errorCount` | `float` | Number of errors encountered |
| `errors` | `array` | Array of error details |
| `event` | `string` |  |
| `eventIds` | `array` | List of event UUIDs to update (1-100) |
| `failedCount` | `float` |  |
| `failures` | `array` | List of events that failed to update with error messages |
| `hasChildren` | `bool` |  |
| `id` | `float` | Unique identifier for the saved query |
| `includeCreatedEvents` | `bool` | When true, response includes array of created event UUIDs and shard IDs. |
| `indicator` | `string` |  |
| `indicatorType` | `string` |  |
| `indicatorTypeId` | `float` |  |
| `insight` | `string` |  |
| `killChain` | `float` |  |
| `message` | `string` | Human-readable message describing the operation result |
| `mitreAttack` | `array` |  |
| `mitreCapec` | `array` |  |
| `name` | `string` | Name of the saved query |
| `numReferenced` | `float` |  |
| `numReferences` | `float` |  |
| `order` | `string` |  |
| `orderBy` | `string` |  |
| `page` | `float` |  |
| `pageSize` | `float` |  |
| `parentId` | `string` | UUID of the parent event that will be the source of the relationship |
| `query_json` | `string` | JSON string containing the query parameters |
| `raw` | `array` |  |
| `rawId` | `string` |  |
| `referenced` | `array` |  |
| `referencedIds` | `array` |  |
| `references` | `array` |  |
| `referencesIds` | `array` |  |
| `relationshipType` | `string` | Type of relationship to create between parent and child events |
| `relationships` | `array` | Array of successfully created relationship objects |
| `relationshipsCreated` | `float` | Number of relationships that were successfully created |
| `releasabilityId` | `string` |  |
| `rule_enabled` | `bool` | Whether rule is enabled |
| `rule_list_id` | `string` | WAF rules list ID for blocking |
| `rule_scope` | `string` | Scope for the rule |
| `search` | `array` | Structured search as a JSON array of {field, op, value} objects. |
| `source` | `string` |  |
| `success` | `bool` | Whether the relationship creation operation completed successfully |
| `tags` | `array` |  |
| `targetCountry` | `string` |  |
| `targetCountryAlpha3` | `string` |  |
| `targetIndustry` | `string` |  |
| `tlp` | `string` |  |
| `updatedCount` | `float` |  |
| `updated_at` | `string` | Last update timestamp |
| `updates` | `array` | Fields to update on all specified events. |
| `user_email` | `string` | Email of the user who created the query |
| `uuid` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Event record (throws on error).
$event = $client->Event()->load(["id" => "event_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of Event records (throws on error).
$events = $client->Event()->list();
```

#### Example: Create

```php
$event = $client->Event()->create([
    "account_id" => null, // string
    "accountId" => null, // float
    "alert_enabled" => null, // bool
    "alert_rollup_enabled" => null, // bool
    "attacker" => null, // string
    "attackerCountry" => null, // string
    "attackerCountryAlpha3" => null, // string
    "category" => null, // string
    "created" => null, // string
    "createdEventsCount" => null, // float
    "createdIndicatorsCount" => null, // float
    "createdRelationshipsCount" => null, // float
    "created_at" => null, // string
    "data" => null, // string
    "datasetId" => null, // string
    "date" => null, // string
    "errorCount" => null, // float
    "event" => null, // string
    "eventIds" => null, // array
    "failedCount" => null, // float
    "hasChildren" => null, // bool
    "indicator" => null, // string
    "indicatorType" => null, // string
    "indicatorTypeId" => null, // float
    "killChain" => null, // float
    "message" => null, // string
    "mitreAttack" => null, // array
    "mitreCapec" => null, // array
    "name" => null, // string
    "numReferenced" => null, // float
    "numReferences" => null, // float
    "parentId" => null, // string
    "query_json" => null, // string
    "rawId" => null, // string
    "referenced" => null, // array
    "referencedIds" => null, // array
    "references" => null, // array
    "referencesIds" => null, // array
    "relationshipType" => null, // string
    "relationships" => null, // array
    "rule_enabled" => null, // bool
    "source" => null, // string
    "success" => null, // bool
    "tags" => null, // array
    "targetCountry" => null, // string
    "targetCountryAlpha3" => null, // string
    "targetIndustry" => null, // string
    "tlp" => null, // string
    "updatedCount" => null, // float
    "updated_at" => null, // string
    "updates" => null, // array
    "user_email" => null, // string
    "uuid" => null, // string
]);
```


### Group

Create an instance: `$group = $client->Group();`

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
| `members` | `array` |  |
| `name` | `string` |  |
| `updatedAt` | `string` |  |
| `uuid` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Group record (throws on error).
$group = $client->Group()->load(["id" => "group_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of Group records (throws on error).
$groups = $client->Group()->list();
```

#### Example: Create

```php
$group = $client->Group()->create([
    "account_id" => null, // string
    "createdAt" => null, // string
    "description" => null, // string
    "members" => null, // array
    "name" => null, // string
    "updatedAt" => null, // string
    "uuid" => null, // string
]);
```


### Indicator

Create an instance: `$indicator = $client->Indicator();`

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
| `completeness` | `array` |  |
| `confidence` | `int` | Updated confidence. |
| `createdAt` | `string` |  |
| `datasetId` | `string` | The dataset ID this indicator belongs to. |
| `description` | `string` | Optional description for the indicator type |
| `durableObjectId` | `string` |  |
| `id` | `string` |  |
| `indicatorType` | `string` | The indicator type to create (e.g., 'DOMAIN', 'IP', 'URL', 'HASH', 'EMAIL') |
| `indicators` | `array` |  |
| `message` | `string` |  |
| `metadata` | `array` | Updated metadata. |
| `pagination` | `array` |  |
| `relatedEvents` | `array` |  |
| `sources` | `array` | RSS article sources from which this indicator was extracted. |
| `tags` | `array` |  |
| `tlp` | `string` | Traffic Light Protocol designation. |
| `type` | `string` | Updated relationship type. |
| `updatedAt` | `string` |  |
| `uuid` | `string` |  |
| `value` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Indicator record (throws on error).
$indicator = $client->Indicator()->load(["id" => "indicator_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of Indicator records (throws on error).
$indicators = $client->Indicator()->list();
```

#### Example: Create

```php
$indicator = $client->Indicator()->create([
    "account_id" => null, // string
    "dataset_id" => null, // string
    "completeness" => null, // array
    "createdAt" => null, // string
    "durableObjectId" => null, // string
    "indicatorType" => null, // string
    "indicators" => null, // array
    "message" => null, // string
    "pagination" => null, // array
    "sources" => null, // array
    "updatedAt" => null, // string
    "uuid" => null, // string
    "value" => null, // string
]);
```


### IndicatorType

Create an instance: `$indicator_type = $client->IndicatorType();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `type` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the IndicatorType record (throws on error).
$indicator_type = $client->IndicatorType()->load(["account_id" => "account_id"]);
```


### Permission

Create an instance: `$permission = $client->Permission();`

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
| `success` | `bool` |  |
| `updatedAt` | `string` |  |
| `uuid` | `string` |  |

#### Example: List

```php
// list() returns an array of Permission records (throws on error).
$permissions = $client->Permission()->list();
```

#### Example: Create

```php
$permission = $client->Permission()->create([
    "account_id" => null, // string
    "dataset_id" => null, // string
    "createdAt" => null, // string
    "resourceType" => null, // string
    "role" => null, // string
    "subjectId" => null, // string
    "subjectType" => null, // string
    "updatedAt" => null, // string
    "uuid" => null, // string
]);
```


### Priority

Create an instance: `$priority = $client->Priority();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `id` | `string` |  |
| `labels` | `array` | List of labels. |
| `messages` | `array` |  |
| `page` | `int` | Page number of results. |
| `per_page` | `int` | Number of results per page. |
| `priority` | `int` | Priority. |
| `requirement` | `string` | Requirement. |
| `result` | `mixed` |  |
| `success` | `bool` | Whether the API call was successful. |
| `tlp` | `string` | The CISA defined Traffic Light Protocol (TLP). |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Priority record (throws on error).
$priority = $client->Priority()->load(["id" => "priority_id", "account_id" => "account_id"]);
```

#### Example: Create

```php
$priority = $client->Priority()->create([
    "account_id" => null, // string
    "errors" => null, // array
    "labels" => null, // array
    "messages" => null, // array
    "page" => null, // int
    "per_page" => null, // int
    "priority" => null, // int
    "requirement" => null, // string
    "success" => null, // bool
    "tlp" => null, // string
]);
```


### PriorityIntelligence

Create an instance: `$priority_intelligence = $client->PriorityIntelligence();`

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
| `labels` | `array` |  |
| `priority` | `int` |  |
| `requirement` | `string` |  |
| `tlp` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the PriorityIntelligence record (throws on error).
$priority_intelligence = $client->PriorityIntelligence()->load(["id" => "priority_intelligence_id", "account_id" => "account_id"]);
```

#### Example: Create

```php
$priority_intelligence = $client->PriorityIntelligence()->create([
    "account_id" => null, // string
    "requirement" => null, // string
]);
```


### PriorityIntelligenceRequirement

Create an instance: `$priority_intelligence_requirement = $client->PriorityIntelligenceRequirement();`

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
| `backtest_days` | `int` |  |
| `candidate_limit` | `int` |  |
| `dataset_ids` | `array` |  |
| `dimension` | `string` |  |
| `emerging_min_current_count` | `int` |  |
| `enabled` | `bool` |  |
| `established_min_absolute_delta` | `int` |  |
| `established_min_prior_count` | `int` |  |
| `established_min_relative_delta` | `float` |  |
| `value` | `string` |  |
| `window_days` | `int` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the PriorityIntelligenceRequirement record (throws on error).
$priority_intelligence_requirement = $client->PriorityIntelligenceRequirement()->load(["account_id" => "account_id"]);
```

#### Example: Create

```php
$priority_intelligence_requirement = $client->PriorityIntelligenceRequirement()->create([
    "account_id" => null, // string
    "dimension" => null, // string
    "value" => null, // string
]);
```


### PriorityIntelligenceRequirementsPir

Create an instance: `$priority_intelligence_requirements__pir = $client->PriorityIntelligenceRequirementsPir();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `labels` | `array` | List of labels. |
| `messages` | `array` |  |
| `priority` | `int` | Priority. |
| `requirement` | `string` | Requirement. |
| `result` | `mixed` |  |
| `success` | `bool` | Whether the API call was successful. |
| `tlp` | `string` | The CISA defined Traffic Light Protocol (TLP). |

#### Example: List

```php
// list() returns an array of PriorityIntelligenceRequirementsPir records (throws on error).
$priority_intelligence_requirements__pirs = $client->PriorityIntelligenceRequirementsPir()->list();
```

#### Example: Create

```php
$priority_intelligence_requirements__pir = $client->PriorityIntelligenceRequirementsPir()->create([
    "account_id" => null, // string
    "errors" => null, // array
    "labels" => null, // array
    "messages" => null, // array
    "priority" => null, // int
    "requirement" => null, // string
    "success" => null, // bool
    "tlp" => null, // string
]);
```


### PublicCredentialMonitor

Create an instance: `$public_credential_monitor = $client->PublicCredentialMonitor();`

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
| `id` | `int` |  |
| `matched_at` | `string` |  |
| `username` | `string` |  |

#### Example: List

```php
// list() returns an array of PublicCredentialMonitor records (throws on error).
$public_credential_monitors = $client->PublicCredentialMonitor()->list();
```

#### Example: Create

```php
$public_credential_monitor = $client->PublicCredentialMonitor()->create([
    "account_id" => null, // string
    "created_at" => null, // string
    "domain" => null, // string
    "id" => null, // int
    "matched_at" => null, // string
    "username" => null, // string
]);
```


### Request

Create an instance: `$request = $client->Request();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed_after` | `mixed` | Retrieve requests completed after this time. |
| `completed_before` | `mixed` | Retrieve requests completed before this time. |
| `content` | `string` | Request content. |
| `created_after` | `mixed` | Retrieve requests created after this time. |
| `created_before` | `mixed` | Retrieve requests created before this time. |
| `errors` | `array` |  |
| `id` | `string` |  |
| `messages` | `array` |  |
| `page` | `int` | Page number of results. |
| `per_page` | `int` | Number of results per page. |
| `priority` | `string` | Priority for analyzing the request. |
| `request_type` | `string` | Requested information from request. |
| `result` | `array` |  |
| `sort_by` | `string` | Field to sort results by. |
| `sort_order` | `string` | Sort order (asc or desc). |
| `status` | `string` | Request Status. |
| `success` | `bool` | Whether the API call was successful. |
| `summary` | `string` | Brief description of the request. |
| `tlp` | `string` | The CISA defined Traffic Light Protocol (TLP). |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Request record (throws on error).
$request = $client->Request()->load(["id" => "request_id", "account_id" => "account_id"]);
```

#### Example: Create

```php
$request = $client->Request()->create([
    "account_id" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "page" => null, // int
    "per_page" => null, // int
    "result" => null, // array
    "success" => null, // bool
]);
```


### RequestForInformationRfi

Create an instance: `$request_for_information__rfi = $client->RequestForInformationRfi();`

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
| `errors` | `array` |  |
| `id` | `string` |  |
| `messages` | `array` |  |
| `priority` | `string` | Priority for analyzing the request. |
| `request_type` | `string` | Requested information from request. |
| `result` | `array` |  |
| `source` | `string` | Asset file to upload. |
| `success` | `bool` | Whether the API call was successful. |
| `summary` | `string` | Brief description of the request. |
| `tlp` | `string` | The CISA defined Traffic Light Protocol (TLP). |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the RequestForInformationRfi record (throws on error).
$request_for_information__rfi = $client->RequestForInformationRfi()->load(["account_id" => "account_id", "asset_id" => "asset_id", "request_id" => "request_id"]);
```

#### Example: List

```php
// list() returns an array of RequestForInformationRfi records (throws on error).
$request_for_information__rfis = $client->RequestForInformationRfi()->list();
```

#### Example: Create

```php
$request_for_information__rfi = $client->RequestForInformationRfi()->create([
    "account_id" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "success" => null, // bool
]);
```


### RequestsDashboard

Create an instance: `$requests_dashboard = $client->RequestsDashboard();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `string` |  |
| `defaultValue` | `mixed` |  |
| `description` | `string` |  |
| `displayOrder` | `float` |  |
| `errors` | `array` | Always empty on success |
| `fieldLabel` | `string` |  |
| `fieldName` | `string` |  |
| `fieldType` | `string` |  |
| `id` | `string` |  |
| `messages` | `array` | Always empty on success |
| `options` | `array` |  |
| `projectType` | `string` |  |
| `project_type` | `string` |  |
| `public` | `bool` |  |
| `request_types` | `array` |  |
| `required` | `bool` |  |
| `result` | `array` |  |
| `sectionID` | `string` |  |
| `sectionLabel` | `string` |  |
| `success` | `array` |  |
| `total` | `float` |  |
| `updated` | `string` |  |
| `validation` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the RequestsDashboard record (throws on error).
$requests_dashboard = $client->RequestsDashboard()->load(["account_id" => "account_id", "project_type" => "project_type"]);
```

#### Example: List

```php
// list() returns an array of RequestsDashboard records (throws on error).
$requests_dashboards = $client->RequestsDashboard()->list();
```


### Rfi

Create an instance: `$rfi = $client->Rfi();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `array` |  |
| `assignee` | `string` | Assignee email |
| `completed` | `string` | Completion timestamp |
| `created` | `string` | Creation timestamp |
| `description` | `string` | RFI description (optional). |
| `eventId` | `string` | Optional related event ID |
| `id` | `string` | RFI UUID |
| `investigation_id` | `string` | Investigation UUID |
| `is_free_request` | `bool` | Whether this is a free request |
| `message_tokens` | `float` | Total message tokens |
| `metadata` | `array` | Optional metadata fields specific to the RFI type |
| `pagination` | `array` |  |
| `priority` | `string` | Request priority |
| `readable_id` | `string` | Human-readable ID |
| `release_entitlements` | `string` | Release entitlements |
| `report_id` | `string` | Report UUID |
| `request` | `array` |  |
| `request_type` | `string` | Optional request type for the request |
| `result` | `array` |  |
| `status` | `string` | RFI status. |
| `subtypeId` | `string` | Optional subtype ID |
| `success` | `string` |  |
| `summary` | `string` | RFI summary |
| `title` | `string` | RFI title (optional). |
| `tlp` | `string` | TLP classification |
| `tokens` | `float` | Total tokens used |
| `updated` | `string` | Last update timestamp |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Rfi record (throws on error).
$rfi = $client->Rfi()->load(["id" => "rfi_id", "project_type" => "project_type"]);
```

#### Example: Create

```php
$rfi = $client->Rfi()->create([
    "account_id" => null, // string
    "project_type" => null, // string
    "account" => null, // array
    "assignee" => null, // string
    "completed" => null, // string
    "created" => null, // string
    "id" => null, // string
    "investigation_id" => null, // string
    "is_free_request" => null, // bool
    "message_tokens" => null, // float
    "pagination" => null, // array
    "priority" => null, // string
    "readable_id" => null, // string
    "release_entitlements" => null, // string
    "report_id" => null, // string
    "request" => null, // array
    "result" => null, // array
    "status" => null, // string
    "success" => null, // string
    "summary" => null, // string
    "tlp" => null, // string
    "tokens" => null, // float
    "updated" => null, // string
]);
```


### RfiMessage

Create an instance: `$rfi_message = $client->RfiMessage();`

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
| `attachment_asset_ids` | `array` |  |
| `attachments` | `array` |  |
| `author_id` | `string` |  |
| `author_name` | `string` |  |
| `content` | `string` |  |
| `created` | `string` |  |
| `id` | `int` |  |
| `is_cloudflare_team` | `bool` |  |
| `is_published` | `bool` |  |
| `publish` | `bool` |  |
| `published` | `string` |  |
| `tlp` | `string` |  |
| `updated` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the RfiMessage record (throws on error).
$rfi_message = $client->RfiMessage()->load(["id" => "rfi_message_id", "account_id" => "account_id", "project_type" => "project_type", "request_id" => "request_id"]);
```

#### Example: List

```php
// list() returns an array of RfiMessage records (throws on error).
$rfi_messages = $client->RfiMessage()->list();
```

#### Example: Create

```php
$rfi_message = $client->RfiMessage()->create([
    "account_id" => null, // string
    "project_type" => null, // string
    "request_id" => null, // string
    "attachments" => null, // array
    "content" => null, // string
    "created" => null, // string
    "id" => null, // int
    "is_cloudflare_team" => null, // bool
    "is_published" => null, // bool
    "published" => null, // string
    "tlp" => null, // string
    "updated" => null, // string
]);
```


### Rule

Create an instance: `$rule = $client->Rule();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `arrays` | `array` |  |
| `headers` | `array` |  |
| `operators` | `array` |  |
| `scalars` | `array` |  |
| `string_arrays` | `array` |  |
| `structs` | `array` |  |

#### Example: List

```php
// list() returns an array of Rule records (throws on error).
$rules = $client->Rule()->list();
```


### Scan

Create an instance: `$scan = $client->Scan();`

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
| `errors` | `array` |  |
| `frequency` | `float` | Defines the number of days between each scan (0 = One-off scan). |
| `ips` | `array` | Defines a list of IP addresses or CIDR blocks to scan. |
| `messages` | `array` |  |
| `ports` | `array` | Defines a list of ports to scan. |
| `result` | `array` |  |
| `success` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Scan record (throws on error).
$scan = $client->Scan()->load(["account_id" => "account_id", "config_id" => "config_id"]);
```

#### Example: List

```php
// list() returns an array of Scan records (throws on error).
$scans = $client->Scan()->list();
```

#### Example: Create

```php
$scan = $client->Scan()->create([
    "account_id" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "result" => null, // array
    "success" => null, // bool
]);
```


### Tag

Create an instance: `$tag = $client->Tag();`

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
| `activeDuration_annotated` | `array` |  |
| `actorCategory` | `string` |  |
| `actorCategory_annotated` | `array` |  |
| `aliasGroupNames` | `array` |  |
| `aliasGroupNamesInternal` | `array` |  |
| `aliases` | `array` | Structured aliases ({ value, confidence 1-10, tlp }). |
| `attributionOrganization` | `string` |  |
| `attributionOrganization_annotated` | `array` |  |
| `categoryName` | `string` |  |
| `categoryUuid` | `string` | Tag type (category) UUID. |
| `confidence` | `int` | Overall tag confidence (1-10). |
| `createdAt` | `string` |  |
| `dateOfDiscovery` | `string` | Date of discovery (ISO YYYY-MM-DD). |
| `description` | `string` |  |
| `externalReferenceLinks` | `array` |  |
| `externalReferences` | `array` | Structured external references ({ url, description }). |
| `externalReferences_annotated` | `array` |  |
| `id` | `string` |  |
| `internalAliases` | `array` | Internal structured aliases ({ value, confidence 1-10, tlp }). |
| `internalDescription` | `string` |  |
| `lastSeen` | `string` |  |
| `metadata` | `array` | Updated metadata. |
| `motive` | `string` |  |
| `motive_annotated` | `array` |  |
| `opsecLevel` | `string` |  |
| `opsecLevel_annotated` | `array` |  |
| `originCountryISO` | `string` | ISO country code (alpha-2 or alpha-3). |
| `originCountryISO_annotated` | `array` |  |
| `priority` | `float` |  |
| `priority_annotated` | `array` |  |
| `properties` | `array` | Parsed custom field values. |
| `sophisticationLevel` | `string` |  |
| `sophisticationLevel_annotated` | `array` |  |
| `tlp` | `string` | Tag-level TLP handling marking. |
| `type` | `string` | Updated relationship type. |
| `updatedAt` | `string` |  |
| `uuid` | `string` |  |
| `value` | `string` |  |
| `version` | `float` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Tag record (throws on error).
$tag = $client->Tag()->load(["id" => "tag_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of Tag records (throws on error).
$tags = $client->Tag()->list();
```

#### Example: Create

```php
$tag = $client->Tag()->create([
    "account_id" => null, // string
    "activeDuration_annotated" => null, // array
    "actorCategory_annotated" => null, // array
    "attributionOrganization_annotated" => null, // array
    "motive_annotated" => null, // array
    "opsecLevel_annotated" => null, // array
    "originCountryISO_annotated" => null, // array
    "priority_annotated" => null, // array
    "sophisticationLevel_annotated" => null, // array
    "uuid" => null, // string
    "value" => null, // string
]);
```


### TagCategory

Create an instance: `$tag_category = $client->TagCategory();`

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
| `schema` | `array` | Parsed FieldDefinition[] defining custom fields for this category, or null if none. |
| `updatedAt` | `string` |  |
| `uuid` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the TagCategory record (throws on error).
$tag_category = $client->TagCategory()->load(["id" => "tag_category_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of TagCategory records (throws on error).
$tag_categorys = $client->TagCategory()->list();
```

#### Example: Create

```php
$tag_category = $client->TagCategory()->create([
    "account_id" => null, // string
    "name" => null, // string
    "uuid" => null, // string
]);
```


### TargetIndustry

Create an instance: `$target_industry = $client->TargetIndustry();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `type` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the TargetIndustry record (throws on error).
$target_industry = $client->TargetIndustry()->load(["account_id" => "account_id"]);
```


### ThreatSignal

Create an instance: `$threat_signal = $client->ThreatSignal();`

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
| `category_uuids` | `array` |  |
| `config` | `string` |  |
| `display_name` | `string` |  |
| `display_order` | `int` |  |
| `enabled` | `bool` |  |
| `errors` | `array` |  |
| `feeds` | `array` |  |
| `is_active` | `bool` |  |
| `message` | `string` |  |
| `messages` | `array` |  |
| `name` | `string` |  |
| `opted_out` | `bool` |  |
| `output_schema` | `string` |  |
| `poll_interval_s` | `int` |  |
| `prompt` | `string` |  |
| `read` | `bool` |  |
| `result` | `mixed` |  |
| `skill_ids` | `array` |  |
| `success` | `bool` |  |
| `tag_id` | `string` |  |
| `title` | `string` |  |
| `url` | `string` |  |
| `why_valuable` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ThreatSignal record (throws on error).
$threat_signal = $client->ThreatSignal()->load(["account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of ThreatSignal records (throws on error).
$threat_signals = $client->ThreatSignal()->list();
```

#### Example: Create

```php
$threat_signal = $client->ThreatSignal()->create([
    "account_id" => null, // string
    "category_uuids" => null, // array
    "errors" => null, // array
    "feeds" => null, // array
    "message" => null, // string
    "messages" => null, // array
    "opted_out" => null, // bool
    "read" => null, // bool
    "result" => null, // mixed
    "skill_ids" => null, // array
    "success" => null, // bool
    "tag_id" => null, // string
]);
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

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── cloudflarecloudforceone_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── schema.php                     -- Generated option + entity specs
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`cloudflarecloudforceone_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$permission = $client->Permission();
$permission->list();

// $permission->data_get() now returns the permission data from the last list
// $permission->match_get() returns the last match criteria
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
