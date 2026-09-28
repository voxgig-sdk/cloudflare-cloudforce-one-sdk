# CloudflareCloudforceOne Python SDK



The Python SDK for the CloudflareCloudforceOne API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Attacker()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/cloudflare-cloudforce-one-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from cloudflarecloudforceone_sdk import CloudflareCloudforceOneSDK

client = CloudflareCloudforceOneSDK({
    "apikey": os.environ.get("CLOUDFLARE_CLOUDFORCE_ONE_APIKEY"),
})
```

### 3. Load a dashboardasset

DashboardAsset is nested under account, so provide the `account_id`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    dashboardasset = client.DashboardAsset().load({"account_id": "example_account_id", "project_type": "example_project_type", "request_id": "example_request_id"})
    print(dashboardasset)
except Exception as err:
    print(f"load failed: {err}")
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    permissions = client.Permission().list()
    print(permissions)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = CloudflareCloudforceOneSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
permission = client.Permission().list()
# permission contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = CloudflareCloudforceOneSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### CloudflareCloudforceOneSDK

```python
from cloudflarecloudforceone_sdk import CloudflareCloudforceOneSDK

client = CloudflareCloudforceOneSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = CloudflareCloudforceOneSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### CloudflareCloudforceOneSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
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
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Create an instance: `attacker = client.Attacker()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `type` | `str` |  |

#### Example: Load

```python
attacker = client.Attacker().load({"account_id": "account_id"})
```


### BinDb

Create an instance: `bin_db = client.BinDb()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content_type` | `str` |  |
| `md5` | `str` |  |
| `sha1` | `str` |  |
| `sha256` | `str` |  |

#### Example: Load

```python
bin_db = client.BinDb().load({"account_id": "account_id", "hash": "hash"})
```

#### Example: Create

```python
bin_db = client.BinDb().create({
    "account_id": "example_account_id",  # str
    "content_type": "example_content_type",  # str
    "md5": "example_md5",  # str
    "sha1": "example_sha1",  # str
    "sha256": "example_sha256",  # str
})
```


### BrandProtection

Create an instance: `brand_protection = client.BrandProtection()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `str` |  |
| `body` | `str` |  |
| `brand` | `str` |  |
| `category` | `str` |  |
| `content_type` | `str` | MIME type of the image (only present when download=true) |
| `createNotice` | `bool` |  |
| `createdAt` | `str` |  |
| `description` | `str` |  |
| `dismissed` | `bool` | Whether the match is dismissed. |
| `domain` | `str` |  |
| `domain_id` | `int` |  |
| `domains` | `list` |  |
| `errors` | `list` |  |
| `fields` | `dict` |  |
| `first_seen` | `str` |  |
| `format` | `str` |  |
| `id` | `float` |  |
| `image_data` | `str` | Base64 encoded image data. |
| `letterText` | `str` |  |
| `letterType` | `str` |  |
| `matchId` | `float` |  |
| `matchType` | `str` |  |
| `match_details` | `list` | Per-match detail objects with query metadata and individual dismissed state. |
| `match_ids` | `list` |  |
| `matched_at` | `str` |  |
| `matches` | `list` |  |
| `max_time` | `str` |  |
| `message` | `str` |  |
| `messages` | `list` |  |
| `min_time` | `str` |  |
| `name` | `str` |  |
| `noticeParams` | `dict` |  |
| `notices` | `list` |  |
| `public_scans` | `dict` |  |
| `queryId` | `float` |  |
| `queryIds` | `list` |  |
| `query_id` | `int` |  |
| `r2_path` | `str` |  |
| `registrar` | `str` |  |
| `result` | `Any` |  |
| `result_info` | `dict` | Present on paginated list responses when page or per_page is supplied. |
| `scan` | `bool` |  |
| `scan_matches` | `bool` |  |
| `scan_status` | `str` |  |
| `scan_submission_id` | `int` |  |
| `score_threshold` | `float` | Minimum similarity score threshold for matches (0-1, default: 0) |
| `search_lookback` | `bool` | If true, search recent domain lookback entries for matches |
| `similarity_score` | `float` |  |
| `similarity_threshold` | `float` | Minimum similarity score (0-1) required for visual matches |
| `source` | `str` |  |
| `status` | `str` |  |
| `string_matches` | `list` |  |
| `success` | `bool` |  |
| `tag` | `str` | Unique identifier for the logo query |
| `takedownNoticeId` | `float` |  |
| `templateId` | `str` |  |
| `top_k` | `int` | Number of closest matches to return (1-100, default: 10) |
| `total_analyzed` | `float` |  |
| `total_matches` | `float` |  |
| `truncated` | `bool` |  |
| `updatedAt` | `str` |  |
| `uploaded_at` | `str` |  |
| `url_scan_id` | `str` |  |

#### Example: Load

```python
brand_protection = client.BrandProtection().load({"account_id": "account_id"})
```

#### Example: List

```python
brand_protections = client.BrandProtection().list({"account_id": "example"})
```

#### Example: Create

```python
brand_protection = client.BrandProtection().create({
    "account_id": "example_account_id",  # str
    "action": "example_action",  # str
    "body": "example_body",  # str
    "brand": "example_brand",  # str
    "category": "example_category",  # str
    "createdAt": "example_createdAt",  # str
    "description": "example_description",  # str
    "dismissed": True,  # bool
    "domain": "example_domain",  # str
    "domain_id": 1,  # int
    "domains": [],  # list
    "errors": [],  # list
    "fields": {},  # dict
    "first_seen": "example_first_seen",  # str
    "id": 1,  # float
    "image_data": "example_image_data",  # str
    "letterText": "example_letterText",  # str
    "letterType": "example_letterType",  # str
    "matchId": 1,  # float
    "matchType": "example_matchType",  # str
    "matched_at": "example_matched_at",  # str
    "matches": [],  # list
    "message": "example_message",  # str
    "messages": [],  # list
    "name": "example_name",  # str
    "noticeParams": {},  # dict
    "notices": [],  # list
    "public_scans": {},  # dict
    "queryId": 1,  # float
    "r2_path": "example_r2_path",  # str
    "registrar": "example_registrar",  # str
    "result": "example_result",  # Any
    "result_info": {},  # dict
    "scan_status": "example_scan_status",  # str
    "scan_submission_id": 1,  # int
    "similarity_score": 1,  # float
    "similarity_threshold": 1,  # float
    "source": "example_source",  # str
    "status": "example_status",  # str
    "string_matches": [],  # list
    "success": True,  # bool
    "tag": "example_tag",  # str
    "takedownNoticeId": 1,  # float
    "templateId": "example_templateId",  # str
    "total_analyzed": 1,  # float
    "total_matches": 1,  # float
    "truncated": True,  # bool
    "updatedAt": "example_updatedAt",  # str
    "uploaded_at": "example_uploaded_at",  # str
    "url_scan_id": "example_url_scan_id",  # str
})
```


### Category

Create an instance: `category = client.Category()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `killChain` | `float` |  |
| `mitreAttack` | `list` |  |
| `mitreCapec` | `list` |  |
| `name` | `str` |  |
| `shortname` | `str` |  |
| `uuid` | `str` |  |

#### Example: Load

```python
category = client.Category().load({"id": "category_id", "account_id": "account_id"})
```

#### Example: List

```python
categorys = client.Category().list({"account_id": "example"})
```

#### Example: Create

```python
category = client.Category().create({
    "account_id": "example_account_id",  # str
    "killChain": 1,  # float
    "name": "example_name",  # str
    "uuid": "example_uuid",  # str
})
```


### CloudforceOneAccountExemption

Create an instance: `cloudforce_one_account_exemption = client.CloudforceOneAccountExemption()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `namespace` | `list` |  |
| `tag_match` | `list` |  |
| `worker_name` | `list` |  |

#### Example: List

```python
cloudforce_one_account_exemptions = client.CloudforceOneAccountExemption().list({"account_id": "example"})
```

#### Example: Create

```python
cloudforce_one_account_exemption = client.CloudforceOneAccountExemption().create({
    "account_id": "example_account_id",  # str
    "namespace": [],  # list
    "tag_match": [],  # list
    "worker_name": [],  # list
})
```


### CloudforceOneDeleteAll

Create an instance: `cloudforce_one_delete_all = client.CloudforceOneDeleteAll()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### CloudforceOneEditApproval

Create an instance: `cloudforce_one_edit_approval = client.CloudforceOneEditApproval()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `condition` | `dict` | Nested condition groups support up to 10 levels of depth. |
| `description` | `str` |  |
| `enabled` | `bool` |  |
| `id` | `str` |  |
| `meta` | `list` |  |
| `name` | `str` |  |
| `status` | `str` | Disposition for matching email. |
| `strings` | `list` |  |

#### Example: Create

```python
cloudforce_one_edit_approval = client.CloudforceOneEditApproval().create({
    "account_id": "example_account_id",  # str
    "approval_id": "example_approval_id",  # str
    "condition": {},  # dict
    "name": "example_name",  # str
})
```


### CloudforceOneEmailRuleValidation

Create an instance: `cloudforce_one_email_rule_validation = client.CloudforceOneEmailRuleValidation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `compiled_yara` | `str` |  |
| `condition` | `dict` | Nested condition groups support up to 10 levels of depth. |
| `description` | `str` |  |
| `enabled` | `bool` |  |
| `error` | `str` |  |
| `existing_rule_id` | `str` | Existing rule ID to exclude from duplicate-name checks when validating an update. |
| `meta` | `list` |  |
| `name` | `str` |  |
| `status` | `str` | Disposition for matching email. |
| `strings` | `list` |  |
| `valid` | `bool` |  |

#### Example: Create

```python
cloudforce_one_email_rule_validation = client.CloudforceOneEmailRuleValidation().create({
    "account_id": "example_account_id",  # str
    "condition": {},  # dict
    "name": "example_name",  # str
    "valid": True,  # bool
})
```


### CloudforceOneEmailRulesList

Create an instance: `cloudforce_one_email_rules_list = client.CloudforceOneEmailRulesList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `str` |  |
| `created_at` | `float` |  |
| `created_by` | `str` |  |
| `description` | `str` |  |
| `enabled` | `bool` | Whether this rule is active for dice consumers. |
| `id` | `str` |  |
| `is_public` | `bool` | Whether this rule is visible to other internal accounts. |
| `meta` | `list` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `str` |  |
| `namespaces` | `list` |  |
| `path` | `str` |  |
| `pending_approval_id` | `float` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `dict` | Proposed update or deletion awaiting approval. |
| `structured_source` | `str` | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `float` |  |
| `updated_by` | `str` |  |

#### Example: List

```python
cloudforce_one_email_rules_lists = client.CloudforceOneEmailRulesList().list({"account_id": "example"})
```


### CloudforceOneRequestsApiResponseCommon

Create an instance: `cloudforce_one_requests_api_response_common = client.CloudforceOneRequestsApiResponseCommon()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### CloudforceOneRule

Create an instance: `cloudforce_one_rule = client.CloudforceOneRule()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `list` |  |
| `commit_message` | `str` | Human-readable justification for this change. |
| `content` | `str` |  |
| `description` | `str` | Human-readable description of the rule. |
| `enabled` | `bool` | Whether this rule is active for dice consumers. |
| `is_public` | `bool` | Whether this rule is visible to other internal accounts. |
| `meta` | `list` | Adds YARA meta entries to the rule's meta block and stores them in rule_meta alongside content metadata. |
| `name` | `str` |  |
| `namespaces` | `list` | Optional WfP deployment tags (customer rules only). |
| `path` | `str` |  |

#### Example: Create

```python
cloudforce_one_rule = client.CloudforceOneRule().create({
    "account_id": "example_account_id",  # str
    "content": "example_content",  # str
    "name": "example_name",  # str
    "path": "example_path",  # str
})
```


### CloudforceOneRuleApprovalDetail

Create an instance: `cloudforce_one_rule_approval_detail = client.CloudforceOneRuleApprovalDetail()`

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
| `cancelled_by` | `str` | Requester who cancelled the pending approval. |
| `change_description` | `str` |  |
| `change_type` | `str` |  |
| `commit_message` | `str` | The requester supplies this human-readable justification with the change. |
| `compiler_warnings` | `list` |  |
| `current_rule` | `Any` |  |
| `id` | `float` |  |
| `proposed_changes` | `Any` | Contains structured proposed rule changes, or null for unresolved persisted data. |
| `rejection_reason` | `str` | The reviewer may supply a reason when rejecting the change. |
| `requested_at` | `float` |  |
| `requested_by` | `str` |  |
| `reviewed_at` | `float` |  |
| `reviewer_scope` | `str` | Review policy: general Nomos approvers for default; general approvers or Phishguard for email. |
| `revision_number` | `int` | Revision number within this approval request chain. |
| `rule_id` | `str` |  |
| `rule_name` | `str` |  |
| `status` | `str` |  |
| `superseded_by_approval_id` | `float` | Newer approval revision that replaced this approval. |
| `supersedes_approval_id` | `float` | This approval replaces the referenced approval revision. |

#### Example: Load

```python
cloudforce_one_rule_approval_detail = client.CloudforceOneRuleApprovalDetail().load({"id": "cloudforce_one_rule_approval_detail_id", "account_id": "account_id"})
```

#### Example: Create

```python
cloudforce_one_rule_approval_detail = client.CloudforceOneRuleApprovalDetail().create({
    "account_id": "example_account_id",  # str
    "approval_id": "example_approval_id",  # str
    "audit_log_id": 1,  # float
    "can_review": True,  # bool
    "cancelled_at": 1,  # float
    "cancelled_by": "example_cancelled_by",  # str
    "change_description": "example_change_description",  # str
    "change_type": "example_change_type",  # str
    "commit_message": "example_commit_message",  # str
    "current_rule": "example_current_rule",  # Any
    "id": 1,  # float
    "proposed_changes": "example_proposed_changes",  # Any
    "rejection_reason": "example_rejection_reason",  # str
    "requested_at": 1,  # float
    "requested_by": "example_requested_by",  # str
    "reviewed_at": 1,  # float
    "reviewer_scope": "example_reviewer_scope",  # str
    "revision_number": 1,  # int
    "rule_id": "example_rule_id",  # str
    "rule_name": "example_rule_name",  # str
    "status": "example_status",  # str
    "superseded_by_approval_id": 1,  # float
    "supersedes_approval_id": 1,  # float
})
```


### CloudforceOneRuleApprovalsList

Create an instance: `cloudforce_one_rule_approvals_list = client.CloudforceOneRuleApprovalsList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `audit_log_id` | `float` |  |
| `can_review` | `bool` | Whether the authenticated user may approve or reject this pending change. |
| `cancelled_at` | `float` | Time at which the requester cancelled the approval. |
| `cancelled_by` | `str` | Requester who cancelled the pending approval. |
| `change_description` | `str` |  |
| `change_type` | `str` |  |
| `commit_message` | `str` | The requester supplies this human-readable justification with the change. |
| `id` | `float` |  |
| `proposed_changes` | `Any` | Contains structured proposed rule changes, or null for unresolved persisted data. |
| `rejection_reason` | `str` | The reviewer may supply a reason when rejecting the change. |
| `requested_at` | `float` |  |
| `requested_by` | `str` |  |
| `reviewed_at` | `float` |  |
| `reviewer_scope` | `str` | Review policy: general Nomos approvers for default; general approvers or Phishguard for email. |
| `revision_number` | `int` | Revision number within this approval request chain. |
| `rule_id` | `str` |  |
| `rule_name` | `str` |  |
| `status` | `str` |  |
| `superseded_by_approval_id` | `float` | Newer approval revision that replaced this approval. |
| `supersedes_approval_id` | `float` | This approval replaces the referenced approval revision. |

#### Example: List

```python
cloudforce_one_rule_approvals_lists = client.CloudforceOneRuleApprovalsList().list({"account_id": "example"})
```


### CloudforceOneRulePreview

Create an instance: `cloudforce_one_rule_preview = client.CloudforceOneRulePreview()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit_message` | `str` | Human-readable justification for this change. |
| `condition` | `dict` | Nested condition groups support up to 10 levels of depth. |
| `content` | `str` |  |
| `created_at` | `float` |  |
| `created_by` | `str` |  |
| `description` | `str` | Human-readable description of the rule. |
| `enabled` | `bool` | Whether this rule is active for dice consumers. |
| `id` | `str` |  |
| `is_public` | `bool` | Whether this rule is visible to other internal accounts. |
| `meta` | `list` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `str` |  |
| `namespaces` | `list` |  |
| `path` | `str` | Path change goes through approval workflow. |
| `pending_approval_id` | `float` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `dict` | Proposed update or deletion awaiting approval. |
| `status` | `str` | Disposition for matching email. |
| `strings` | `list` |  |
| `structured_source` | `str` | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `float` |  |
| `updated_by` | `str` |  |

#### Example: Load

```python
cloudforce_one_rule_preview = client.CloudforceOneRulePreview().load({"id": "cloudforce_one_rule_preview_id", "account_id": "account_id"})
```

#### Example: Create

```python
cloudforce_one_rule_preview = client.CloudforceOneRulePreview().create({
    "account_id": "example_account_id",  # str
    "condition": {},  # dict
    "created_at": 1,  # float
    "created_by": "example_created_by",  # str
    "description": "example_description",  # str
    "enabled": True,  # bool
    "id": "example_id",  # str
    "is_public": True,  # bool
    "name": "example_name",  # str
    "namespaces": [],  # list
    "path": "example_path",  # str
    "pending_approval_id": 1,  # float
    "pending_change": {},  # dict
    "updated_at": 1,  # float
    "updated_by": "example_updated_by",  # str
})
```


### CloudforceOneRulesPreviewList

Create an instance: `cloudforce_one_rules_preview_list = client.CloudforceOneRulesPreviewList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `str` |  |
| `created_at` | `float` |  |
| `created_by` | `str` |  |
| `description` | `str` |  |
| `enabled` | `bool` | Whether this rule is active for dice consumers. |
| `id` | `str` |  |
| `is_public` | `bool` | Whether this rule is visible to other internal accounts. |
| `meta` | `list` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `str` |  |
| `namespaces` | `list` |  |
| `path` | `str` |  |
| `pending_approval_id` | `float` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `dict` | Proposed update or deletion awaiting approval. |
| `structured_source` | `str` | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `float` |  |
| `updated_by` | `str` |  |

#### Example: List

```python
cloudforce_one_rules_preview_lists = client.CloudforceOneRulesPreviewList().list({"account_id": "example"})
```


### CloudforceOneRulesSearch

Create an instance: `cloudforce_one_rules_search = client.CloudforceOneRulesSearch()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `str` |  |
| `created_at` | `float` |  |
| `created_by` | `str` |  |
| `description` | `str` |  |
| `enabled` | `bool` | Whether this rule is active for dice consumers. |
| `id` | `str` |  |
| `is_public` | `bool` | Whether this rule is visible to other internal accounts. |
| `meta` | `list` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `str` |  |
| `namespaces` | `list` |  |
| `path` | `str` |  |
| `pending_approval_id` | `float` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `dict` | Proposed update or deletion awaiting approval. |
| `score` | `float` | Relevance score in [0,1]. |
| `scoring_details` | `dict` | AI Search hybrid retrieval returns this per-component scoring breakdown. |
| `structured_source` | `str` | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `float` |  |
| `updated_by` | `str` |  |

#### Example: List

```python
cloudforce_one_rules_searchs = client.CloudforceOneRulesSearch().list({"account_id": "example", "query": "example"})
```


### CloudforceOneStat

Create an instance: `cloudforce_one_stat = client.CloudforceOneStat()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
cloudforce_one_stat = client.CloudforceOneStat().load({"account_id": "account_id"})
```


### CloudforceOneSuccess

Create an instance: `cloudforce_one_success = client.CloudforceOneSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `success` | `bool` |  |

#### Example: Create

```python
cloudforce_one_success = client.CloudforceOneSuccess().create({
    "account_id": "example_account_id",  # str
    "approval_id": "example_approval_id",  # str
    "success": True,  # bool
})
```


### CloudforceOneTreeNode

Create an instance: `cloudforce_one_tree_node = client.CloudforceOneTreeNode()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `children` | `list` |  |
| `count` | `float` |  |
| `name` | `str` |  |
| `path` | `str` |  |

#### Example: List

```python
cloudforce_one_tree_nodes = client.CloudforceOneTreeNode().list({"account_id": "example"})
```


### CloudforceOneValidation

Create an instance: `cloudforce_one_validation = client.CloudforceOneValidation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `str` |  |
| `error` | `str` |  |
| `excludeRuleId` | `str` |  |
| `name` | `str` |  |
| `namespaces` | `list` |  |
| `path` | `str` |  |
| `valid` | `bool` |  |

#### Example: Create

```python
cloudforce_one_validation = client.CloudforceOneValidation().create({
    "account_id": "example_account_id",  # str
    "content": "example_content",  # str
    "name": "example_name",  # str
    "valid": True,  # bool
})
```


### Collection

Create an instance: `collection = client.Collection()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `columns` | `list` |  |
| `created_at` | `str` |  |
| `created_by` | `str` |  |
| `data` | `dict` |  |
| `id` | `str` |  |
| `item_count` | `float` |  |
| `metadata` | `dict` |  |
| `name` | `str` | New column name (must be unique) |
| `position` | `float` | Column display order |
| `required` | `bool` | Whether column is required |
| `status` | `str` |  |
| `type` | `str` | Column type: text, number, boolean, or date |
| `updated_at` | `str` |  |

#### Example: Load

```python
collection = client.Collection().load({"id": "collection_id", "account_id": "account_id"})
```

#### Example: List

```python
collections = client.Collection().list({"account_id": "example"})
```

#### Example: Create

```python
collection = client.Collection().create({
    "account_id": "example_account_id",  # str
    "columns": [],  # list
    "created_at": "example_created_at",  # str
    "created_by": "example_created_by",  # str
    "data": {},  # dict
    "id": "example_id",  # str
    "item_count": 1,  # float
    "name": "example_name",  # str
    "position": 1,  # float
    "required": True,  # bool
    "status": "example_status",  # str
    "type": "example_type",  # str
    "updated_at": "example_updated_at",  # str
})
```


### CollectionsItem

Create an instance: `collections_item = client.CollectionsItem()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
collections_item = client.CollectionsItem().create({
    "account_id": "example_account_id",  # str
    "collection_id": "example_collection_id",  # str
})
```


### Country

Create an instance: `country = client.Country()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |
| `success` | `str` |  |

#### Example: List

```python
countrys = client.Country().list({"account_id": "example"})
```


### DashboardAsset

Create an instance: `dashboard_asset = client.DashboardAsset()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assets` | `dict` |  |
| `contentType` | `dict` |  |
| `count` | `dict` |  |
| `downloadable` | `dict` |  |
| `expiresAt` | `dict` |  |
| `fileName` | `dict` |  |
| `fileSize` | `dict` |  |
| `id` | `dict` |  |
| `is_cloudflare_team` | `dict` |  |
| `metadata` | `dict` |  |
| `origin` | `dict` |  |
| `state` | `dict` |  |
| `tlp` | `dict` |  |
| `uploadedAt` | `dict` |  |

#### Example: Load

```python
dashboard_asset = client.DashboardAsset().load({"account_id": "account_id", "project_type": "project_type", "request_id": "request_id"})
```

#### Example: Create

```python
dashboard_asset = client.DashboardAsset().create({
    "account_id": "example_account_id",  # str
    "project_type": "example_project_type",  # str
    "request_id": "example_request_id",  # str
    "assets": {},  # dict
    "contentType": {},  # dict
    "count": {},  # dict
    "downloadable": {},  # dict
    "expiresAt": {},  # dict
    "fileName": {},  # dict
    "fileSize": {},  # dict
    "id": {},  # dict
    "is_cloudflare_team": {},  # dict
    "metadata": {},  # dict
    "origin": {},  # dict
    "state": {},  # dict
    "tlp": {},  # dict
    "uploadedAt": {},  # dict
})
```


### DashboardUser

Create an instance: `dashboard_user = client.DashboardUser()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `display_name` | `str` | User display name |
| `id` | `str` | Unique user ID |

#### Example: Load

```python
dashboard_user = client.DashboardUser().load({"account_id": "account_id", "request_id": "request_id"})
```


### Dataset

Create an instance: `dataset = client.Dataset()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deletedAt` | `str` |  |
| `id` | `str` |  |
| `indicatorWriteMode` | `str` | Effective indicator mutation capability after account/dataset authorization and dataset storage capability are applied. |
| `isAnalytics` | `bool` |  |
| `isPublic` | `bool` | If true, then anyone can search the dataset. |
| `name` | `str` | Used to describe the dataset within the account context. |
| `uuid` | `str` |  |

#### Example: Load

```python
dataset = client.Dataset().load({"id": "dataset_id", "account_id": "account_id"})
```

#### Example: List

```python
datasets = client.Dataset().list({"account_id": "example"})
```

#### Example: Create

```python
dataset = client.Dataset().create({
    "account_id": "example_account_id",  # str
    "id": "example_id",  # str
    "indicatorWriteMode": "example_indicatorWriteMode",  # str
    "isAnalytics": True,  # bool
    "isPublic": True,  # bool
    "name": "example_name",  # str
    "uuid": "example_uuid",  # str
})
```


### Event

Create an instance: `event = client.Event()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
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
| `attacker` | `str` |  |
| `attackerCountry` | `str` |  |
| `attackerCountryAlpha3` | `str` |  |
| `category` | `str` |  |
| `childIds` | `list` | Array of child event UUIDs that were processed |
| `created` | `str` |  |
| `createdAt` | `str` |  |
| `createdEventsCount` | `float` | Number of events created |
| `createdIndicatorsCount` | `float` | Number of indicators created |
| `createdRelationshipsCount` | `float` | Number of relationships created |
| `created_at` | `str` | Creation timestamp |
| `cursor` | `str` | Cursor for pagination. |
| `custom_threat_feed_id` | `int` | Intel Indicator Feed ID (numeric) |
| `data` | `str` |  |
| `datasetId` | `str` | Dataset UUIDs to query, or one standalone scope value: 'all'/'*' for the legacy all-datasets behavior, 'analytics' for isAnalytics=true datasets, or 'operational' for isAnalytics=false datasets. |
| `date` | `str` |  |
| `errorCount` | `float` | Number of errors encountered |
| `errors` | `list` | Array of error details |
| `event` | `str` |  |
| `eventIds` | `list` | List of event UUIDs to update (1-100) |
| `failedCount` | `float` |  |
| `failures` | `list` | List of events that failed to update with error messages |
| `hasChildren` | `bool` |  |
| `id` | `float` | Unique identifier for the saved query |
| `includeCreatedEvents` | `bool` | When true, response includes array of created event UUIDs and shard IDs. |
| `indicator` | `str` |  |
| `indicatorType` | `str` |  |
| `indicatorTypeId` | `float` |  |
| `insight` | `str` |  |
| `killChain` | `float` |  |
| `message` | `str` | Human-readable message describing the operation result |
| `mitreAttack` | `list` |  |
| `mitreCapec` | `list` |  |
| `name` | `str` | Name of the saved query |
| `numReferenced` | `float` |  |
| `numReferences` | `float` |  |
| `order` | `str` |  |
| `orderBy` | `str` |  |
| `page` | `float` |  |
| `pageSize` | `float` |  |
| `parentId` | `str` | UUID of the parent event that will be the source of the relationship |
| `query_json` | `str` | JSON string containing the query parameters |
| `raw` | `dict` |  |
| `rawId` | `str` |  |
| `referenced` | `list` |  |
| `referencedIds` | `list` |  |
| `references` | `list` |  |
| `referencesIds` | `list` |  |
| `relationshipType` | `str` | Type of relationship to create between parent and child events |
| `relationships` | `list` | Array of successfully created relationship objects |
| `relationshipsCreated` | `float` | Number of relationships that were successfully created |
| `releasabilityId` | `str` |  |
| `rule_enabled` | `bool` | Whether rule is enabled |
| `rule_list_id` | `str` | WAF rules list ID for blocking |
| `rule_scope` | `str` | Scope for the rule |
| `search` | `list` | Structured search as a JSON array of {field, op, value} objects. |
| `source` | `str` |  |
| `success` | `bool` | Whether the relationship creation operation completed successfully |
| `tags` | `list` |  |
| `targetCountry` | `str` |  |
| `targetCountryAlpha3` | `str` |  |
| `targetIndustry` | `str` |  |
| `tlp` | `str` |  |
| `updatedCount` | `float` |  |
| `updated_at` | `str` | Last update timestamp |
| `updates` | `dict` | Fields to update on all specified events. |
| `user_email` | `str` | Email of the user who created the query |
| `uuid` | `str` |  |

#### Example: Load

```python
event = client.Event().load({"id": "event_id", "account_id": "account_id"})
```

#### Example: List

```python
events = client.Event().list({"account_id": "example"})
```

#### Example: Create

```python
event = client.Event().create({
    "account_id": "example_account_id",  # str
    "accountId": 1,  # float
    "alert_enabled": True,  # bool
    "alert_rollup_enabled": True,  # bool
    "attacker": "example_attacker",  # str
    "attackerCountry": "example_attackerCountry",  # str
    "attackerCountryAlpha3": "example_attackerCountryAlpha3",  # str
    "category": "example_category",  # str
    "created": "example_created",  # str
    "createdEventsCount": 1,  # float
    "createdIndicatorsCount": 1,  # float
    "createdRelationshipsCount": 1,  # float
    "created_at": "example_created_at",  # str
    "data": "example_data",  # str
    "datasetId": "example_datasetId",  # str
    "date": "example_date",  # str
    "errorCount": 1,  # float
    "event": "example_event",  # str
    "eventIds": [],  # list
    "failedCount": 1,  # float
    "hasChildren": True,  # bool
    "indicator": "example_indicator",  # str
    "indicatorType": "example_indicatorType",  # str
    "indicatorTypeId": 1,  # float
    "killChain": 1,  # float
    "message": "example_message",  # str
    "mitreAttack": [],  # list
    "mitreCapec": [],  # list
    "name": "example_name",  # str
    "numReferenced": 1,  # float
    "numReferences": 1,  # float
    "parentId": "example_parentId",  # str
    "query_json": "example_query_json",  # str
    "rawId": "example_rawId",  # str
    "referenced": [],  # list
    "referencedIds": [],  # list
    "references": [],  # list
    "referencesIds": [],  # list
    "relationshipType": "example_relationshipType",  # str
    "relationships": [],  # list
    "rule_enabled": True,  # bool
    "source": "example_source",  # str
    "success": True,  # bool
    "tags": [],  # list
    "targetCountry": "example_targetCountry",  # str
    "targetCountryAlpha3": "example_targetCountryAlpha3",  # str
    "targetIndustry": "example_targetIndustry",  # str
    "tlp": "example_tlp",  # str
    "updatedCount": 1,  # float
    "updated_at": "example_updated_at",  # str
    "updates": {},  # dict
    "user_email": "example_user_email",  # str
    "uuid": "example_uuid",  # str
})
```


### Group

Create an instance: `group = client.Group()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `str` |  |
| `description` | `str` |  |
| `id` | `str` |  |
| `members` | `list` |  |
| `name` | `str` |  |
| `updatedAt` | `str` |  |
| `uuid` | `str` |  |

#### Example: Load

```python
group = client.Group().load({"id": "group_id", "account_id": "account_id"})
```

#### Example: List

```python
groups = client.Group().list({"account_id": "example"})
```

#### Example: Create

```python
group = client.Group().create({
    "account_id": "example_account_id",  # str
    "createdAt": "example_createdAt",  # str
    "description": "example_description",  # str
    "members": [],  # list
    "name": "example_name",  # str
    "updatedAt": "example_updatedAt",  # str
    "uuid": "example_uuid",  # str
})
```


### Indicator

Create an instance: `indicator = client.Indicator()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completeness` | `dict` |  |
| `confidence` | `int` | Updated confidence. |
| `createdAt` | `str` |  |
| `datasetId` | `str` | The dataset ID this indicator belongs to. |
| `description` | `str` | Optional description for the indicator type |
| `durableObjectId` | `str` |  |
| `id` | `str` |  |
| `indicatorType` | `str` | The indicator type to create (e.g., 'DOMAIN', 'IP', 'URL', 'HASH', 'EMAIL') |
| `indicators` | `dict` |  |
| `message` | `str` |  |
| `metadata` | `dict` | Updated metadata. |
| `pagination` | `dict` |  |
| `relatedEvents` | `list` |  |
| `sources` | `list` | RSS article sources from which this indicator was extracted. |
| `tags` | `list` |  |
| `tlp` | `str` | Traffic Light Protocol designation. |
| `type` | `str` | Updated relationship type. |
| `updatedAt` | `str` |  |
| `uuid` | `str` |  |
| `value` | `str` |  |

#### Example: Load

```python
indicator = client.Indicator().load({"id": "indicator_id", "account_id": "account_id"})
```

#### Example: List

```python
indicators = client.Indicator().list({"account_id": "example", "dataset_id": "example"})
```

#### Example: Create

```python
indicator = client.Indicator().create({
    "account_id": "example_account_id",  # str
    "dataset_id": "example_dataset_id",  # str
    "completeness": {},  # dict
    "createdAt": "example_createdAt",  # str
    "durableObjectId": "example_durableObjectId",  # str
    "indicatorType": "example_indicatorType",  # str
    "indicators": {},  # dict
    "message": "example_message",  # str
    "pagination": {},  # dict
    "sources": [],  # list
    "updatedAt": "example_updatedAt",  # str
    "uuid": "example_uuid",  # str
    "value": "example_value",  # str
})
```


### IndicatorType

Create an instance: `indicator_type = client.IndicatorType()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `type` | `str` |  |

#### Example: Load

```python
indicator_type = client.IndicatorType().load({"account_id": "account_id"})
```


### Permission

Create an instance: `permission = client.Permission()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `str` |  |
| `id` | `str` |  |
| `message` | `str` |  |
| `resourceId` | `str` | The resource ID this permission applies to account_id or group_id |
| `resourceType` | `str` |  |
| `role` | `str` |  |
| `subjectId` | `str` |  |
| `subjectType` | `str` |  |
| `success` | `bool` |  |
| `updatedAt` | `str` |  |
| `uuid` | `str` |  |

#### Example: List

```python
permissions = client.Permission().list({"account_id": "example", "dataset_id": "example"})
```

#### Example: Create

```python
permission = client.Permission().create({
    "account_id": "example_account_id",  # str
    "dataset_id": "example_dataset_id",  # str
    "createdAt": "example_createdAt",  # str
    "resourceType": "example_resourceType",  # str
    "role": "example_role",  # str
    "subjectId": "example_subjectId",  # str
    "subjectType": "example_subjectType",  # str
    "updatedAt": "example_updatedAt",  # str
    "uuid": "example_uuid",  # str
})
```


### Priority

Create an instance: `priority = client.Priority()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `id` | `str` |  |
| `labels` | `list` | List of labels. |
| `messages` | `list` |  |
| `page` | `int` | Page number of results. |
| `per_page` | `int` | Number of results per page. |
| `priority` | `int` | Priority. |
| `requirement` | `str` | Requirement. |
| `result` | `Any` |  |
| `success` | `bool` | Whether the API call was successful. |
| `tlp` | `str` | The CISA defined Traffic Light Protocol (TLP). |

#### Example: Load

```python
priority = client.Priority().load({"id": "priority_id", "account_id": "account_id"})
```

#### Example: Create

```python
priority = client.Priority().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "labels": [],  # list
    "messages": [],  # list
    "page": 1,  # int
    "per_page": 1,  # int
    "priority": 1,  # int
    "requirement": "example_requirement",  # str
    "success": True,  # bool
    "tlp": "example_tlp",  # str
})
```


### PriorityIntelligence

Create an instance: `priority_intelligence = client.PriorityIntelligence()`

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
| `id` | `str` |  |
| `labels` | `list` |  |
| `priority` | `int` |  |
| `requirement` | `str` |  |
| `tlp` | `str` |  |

#### Example: Load

```python
priority_intelligence = client.PriorityIntelligence().load({"id": "priority_intelligence_id", "account_id": "account_id"})
```

#### Example: Create

```python
priority_intelligence = client.PriorityIntelligence().create({
    "account_id": "example_account_id",  # str
    "requirement": "example_requirement",  # str
})
```


### PriorityIntelligenceRequirement

Create an instance: `priority_intelligence_requirement = client.PriorityIntelligenceRequirement()`

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
| `as_of` | `str` |  |
| `backtest_days` | `int` |  |
| `candidate_limit` | `int` |  |
| `dataset_ids` | `list` |  |
| `dimension` | `str` |  |
| `emerging_min_current_count` | `int` |  |
| `enabled` | `bool` |  |
| `established_min_absolute_delta` | `int` |  |
| `established_min_prior_count` | `int` |  |
| `established_min_relative_delta` | `float` |  |
| `value` | `str` |  |
| `window_days` | `int` |  |

#### Example: Load

```python
priority_intelligence_requirement = client.PriorityIntelligenceRequirement().load({"account_id": "account_id"})
```

#### Example: Create

```python
priority_intelligence_requirement = client.PriorityIntelligenceRequirement().create({
    "account_id": "example_account_id",  # str
    "dimension": "example_dimension",  # str
    "value": "example_value",  # str
})
```


### PriorityIntelligenceRequirementsPir

Create an instance: `priority_intelligence_requirements__pir = client.PriorityIntelligenceRequirementsPir()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `labels` | `list` | List of labels. |
| `messages` | `list` |  |
| `priority` | `int` | Priority. |
| `requirement` | `str` | Requirement. |
| `result` | `Any` |  |
| `success` | `bool` | Whether the API call was successful. |
| `tlp` | `str` | The CISA defined Traffic Light Protocol (TLP). |

#### Example: List

```python
priority_intelligence_requirements__pirs = client.PriorityIntelligenceRequirementsPir().list({"account_id": "example"})
```

#### Example: Create

```python
priority_intelligence_requirements__pir = client.PriorityIntelligenceRequirementsPir().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "labels": [],  # list
    "messages": [],  # list
    "priority": 1,  # int
    "requirement": "example_requirement",  # str
    "success": True,  # bool
    "tlp": "example_tlp",  # str
})
```


### PublicCredentialMonitor

Create an instance: `public_credential_monitor = client.PublicCredentialMonitor()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `domain` | `str` | Domain to monitor (e.g. |
| `id` | `int` |  |
| `matched_at` | `str` |  |
| `username` | `str` |  |

#### Example: List

```python
public_credential_monitors = client.PublicCredentialMonitor().list({"account_id": "example"})
```

#### Example: Create

```python
public_credential_monitor = client.PublicCredentialMonitor().create({
    "account_id": "example_account_id",  # str
    "created_at": "example_created_at",  # str
    "domain": "example_domain",  # str
    "id": 1,  # int
    "matched_at": "example_matched_at",  # str
    "username": "example_username",  # str
})
```


### Request

Create an instance: `request = client.Request()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed_after` | `Any` | Retrieve requests completed after this time. |
| `completed_before` | `Any` | Retrieve requests completed before this time. |
| `content` | `str` | Request content. |
| `created_after` | `Any` | Retrieve requests created after this time. |
| `created_before` | `Any` | Retrieve requests created before this time. |
| `errors` | `list` |  |
| `id` | `str` |  |
| `messages` | `list` |  |
| `page` | `int` | Page number of results. |
| `per_page` | `int` | Number of results per page. |
| `priority` | `str` | Priority for analyzing the request. |
| `request_type` | `str` | Requested information from request. |
| `result` | `dict` |  |
| `sort_by` | `str` | Field to sort results by. |
| `sort_order` | `str` | Sort order (asc or desc). |
| `status` | `str` | Request Status. |
| `success` | `bool` | Whether the API call was successful. |
| `summary` | `str` | Brief description of the request. |
| `tlp` | `str` | The CISA defined Traffic Light Protocol (TLP). |

#### Example: Load

```python
request = client.Request().load({"id": "request_id", "account_id": "account_id"})
```

#### Example: Create

```python
request = client.Request().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "page": 1,  # int
    "per_page": 1,  # int
    "result": {},  # dict
    "success": True,  # bool
})
```


### RequestForInformationRfi

Create an instance: `request_for_information__rfi = client.RequestForInformationRfi()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `str` | Content of message. |
| `errors` | `list` |  |
| `id` | `str` |  |
| `messages` | `list` |  |
| `priority` | `str` | Priority for analyzing the request. |
| `request_type` | `str` | Requested information from request. |
| `result` | `list` |  |
| `source` | `str` | Asset file to upload. |
| `success` | `bool` | Whether the API call was successful. |
| `summary` | `str` | Brief description of the request. |
| `tlp` | `str` | The CISA defined Traffic Light Protocol (TLP). |

#### Example: Load

```python
request_for_information__rfi = client.RequestForInformationRfi().load({"account_id": "account_id", "asset_id": "asset_id", "request_id": "request_id"})
```

#### Example: List

```python
request_for_information__rfis = client.RequestForInformationRfi().list({"account_id": "example"})
```

#### Example: Create

```python
request_for_information__rfi = client.RequestForInformationRfi().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "success": True,  # bool
})
```


### RequestsDashboard

Create an instance: `requests_dashboard = client.RequestsDashboard()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `str` |  |
| `defaultValue` | `Any` |  |
| `description` | `str` |  |
| `displayOrder` | `float` |  |
| `errors` | `list` | Always empty on success |
| `fieldLabel` | `str` |  |
| `fieldName` | `str` |  |
| `fieldType` | `str` |  |
| `id` | `str` |  |
| `messages` | `list` | Always empty on success |
| `options` | `list` |  |
| `projectType` | `str` |  |
| `project_type` | `str` |  |
| `public` | `bool` |  |
| `request_types` | `list` |  |
| `required` | `bool` |  |
| `result` | `dict` |  |
| `sectionID` | `str` |  |
| `sectionLabel` | `str` |  |
| `success` | `dict` |  |
| `total` | `float` |  |
| `updated` | `str` |  |
| `validation` | `dict` |  |

#### Example: Load

```python
requests_dashboard = client.RequestsDashboard().load({"account_id": "account_id", "project_type": "project_type"})
```

#### Example: List

```python
requests_dashboards = client.RequestsDashboard().list({"account_id": "example"})
```


### Rfi

Create an instance: `rfi = client.Rfi()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `dict` |  |
| `assignee` | `str` | Assignee email |
| `completed` | `str` | Completion timestamp |
| `created` | `str` | Creation timestamp |
| `description` | `str` | RFI description (optional). |
| `eventId` | `str` | Optional related event ID |
| `id` | `str` | RFI UUID |
| `investigation_id` | `str` | Investigation UUID |
| `is_free_request` | `bool` | Whether this is a free request |
| `message_tokens` | `float` | Total message tokens |
| `metadata` | `dict` | Optional metadata fields specific to the RFI type |
| `pagination` | `dict` |  |
| `priority` | `str` | Request priority |
| `readable_id` | `str` | Human-readable ID |
| `release_entitlements` | `str` | Release entitlements |
| `report_id` | `str` | Report UUID |
| `request` | `dict` |  |
| `request_type` | `str` | Optional request type for the request |
| `result` | `list` |  |
| `status` | `str` | RFI status. |
| `subtypeId` | `str` | Optional subtype ID |
| `success` | `str` |  |
| `summary` | `str` | RFI summary |
| `title` | `str` | RFI title (optional). |
| `tlp` | `str` | TLP classification |
| `tokens` | `float` | Total tokens used |
| `updated` | `str` | Last update timestamp |

#### Example: Load

```python
rfi = client.Rfi().load({"id": "rfi_id", "project_type": "project_type"})
```

#### Example: Create

```python
rfi = client.Rfi().create({
    "account_id": "example_account_id",  # str
    "project_type": "example_project_type",  # str
    "account": {},  # dict
    "assignee": "example_assignee",  # str
    "completed": "example_completed",  # str
    "created": "example_created",  # str
    "id": "example_id",  # str
    "investigation_id": "example_investigation_id",  # str
    "is_free_request": True,  # bool
    "message_tokens": 1,  # float
    "pagination": {},  # dict
    "priority": "example_priority",  # str
    "readable_id": "example_readable_id",  # str
    "release_entitlements": "example_release_entitlements",  # str
    "report_id": "example_report_id",  # str
    "request": {},  # dict
    "result": [],  # list
    "status": "example_status",  # str
    "success": "example_success",  # str
    "summary": "example_summary",  # str
    "tlp": "example_tlp",  # str
    "tokens": 1,  # float
    "updated": "example_updated",  # str
})
```


### RfiMessage

Create an instance: `rfi_message = client.RfiMessage()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachment_asset_ids` | `list` |  |
| `attachments` | `list` |  |
| `author_id` | `str` |  |
| `author_name` | `str` |  |
| `content` | `str` |  |
| `created` | `str` |  |
| `id` | `int` |  |
| `is_cloudflare_team` | `bool` |  |
| `is_published` | `bool` |  |
| `publish` | `bool` |  |
| `published` | `str` |  |
| `tlp` | `str` |  |
| `updated` | `str` |  |

#### Example: Load

```python
rfi_message = client.RfiMessage().load({"id": "rfi_message_id", "account_id": "account_id", "project_type": "project_type", "request_id": "request_id"})
```

#### Example: List

```python
rfi_messages = client.RfiMessage().list({"account_id": "example", "project_type": "example", "request_id": "example"})
```

#### Example: Create

```python
rfi_message = client.RfiMessage().create({
    "account_id": "example_account_id",  # str
    "project_type": "example_project_type",  # str
    "request_id": "example_request_id",  # str
    "attachments": [],  # list
    "content": "example_content",  # str
    "created": "example_created",  # str
    "id": 1,  # int
    "is_cloudflare_team": True,  # bool
    "is_published": True,  # bool
    "published": "example_published",  # str
    "tlp": "example_tlp",  # str
    "updated": "example_updated",  # str
})
```


### Rule

Create an instance: `rule = client.Rule()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `arrays` | `list` |  |
| `headers` | `dict` |  |
| `operators` | `dict` |  |
| `scalars` | `list` |  |
| `string_arrays` | `list` |  |
| `structs` | `list` |  |

#### Example: List

```python
rules = client.Rule().list({"account_id": "example"})
```


### Scan

Create an instance: `scan = client.Scan()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `frequency` | `float` | Defines the number of days between each scan (0 = One-off scan). |
| `ips` | `list` | Defines a list of IP addresses or CIDR blocks to scan. |
| `messages` | `list` |  |
| `ports` | `list` | Defines a list of ports to scan. |
| `result` | `dict` |  |
| `success` | `bool` |  |

#### Example: Load

```python
scan = client.Scan().load({"account_id": "account_id", "config_id": "config_id"})
```

#### Example: List

```python
scans = client.Scan().list({"account_id": "example"})
```

#### Example: Create

```python
scan = client.Scan().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "success": True,  # bool
})
```


### Tag

Create an instance: `tag = client.Tag()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeDuration` | `str` |  |
| `activeDuration_annotated` | `dict` |  |
| `actorCategory` | `str` |  |
| `actorCategory_annotated` | `dict` |  |
| `aliasGroupNames` | `list` |  |
| `aliasGroupNamesInternal` | `list` |  |
| `aliases` | `list` | Structured aliases ({ value, confidence 1-10, tlp }). |
| `attributionOrganization` | `str` |  |
| `attributionOrganization_annotated` | `dict` |  |
| `categoryName` | `str` |  |
| `categoryUuid` | `str` | Tag type (category) UUID. |
| `confidence` | `int` | Overall tag confidence (1-10). |
| `createdAt` | `str` |  |
| `dateOfDiscovery` | `str` | Date of discovery (ISO YYYY-MM-DD). |
| `description` | `str` |  |
| `externalReferenceLinks` | `list` |  |
| `externalReferences` | `list` | Structured external references ({ url, description }). |
| `externalReferences_annotated` | `list` |  |
| `id` | `str` |  |
| `internalAliases` | `list` | Internal structured aliases ({ value, confidence 1-10, tlp }). |
| `internalDescription` | `str` |  |
| `lastSeen` | `str` |  |
| `metadata` | `dict` | Updated metadata. |
| `motive` | `str` |  |
| `motive_annotated` | `dict` |  |
| `opsecLevel` | `str` |  |
| `opsecLevel_annotated` | `dict` |  |
| `originCountryISO` | `str` | ISO country code (alpha-2 or alpha-3). |
| `originCountryISO_annotated` | `dict` |  |
| `priority` | `float` |  |
| `priority_annotated` | `dict` |  |
| `properties` | `dict` | Parsed custom field values. |
| `sophisticationLevel` | `str` |  |
| `sophisticationLevel_annotated` | `dict` |  |
| `tlp` | `str` | Tag-level TLP handling marking. |
| `type` | `str` | Updated relationship type. |
| `updatedAt` | `str` |  |
| `uuid` | `str` |  |
| `value` | `str` |  |
| `version` | `float` |  |

#### Example: Load

```python
tag = client.Tag().load({"id": "tag_id", "account_id": "account_id"})
```

#### Example: List

```python
tags = client.Tag().list({"account_id": "example"})
```

#### Example: Create

```python
tag = client.Tag().create({
    "account_id": "example_account_id",  # str
    "activeDuration_annotated": {},  # dict
    "actorCategory_annotated": {},  # dict
    "attributionOrganization_annotated": {},  # dict
    "motive_annotated": {},  # dict
    "opsecLevel_annotated": {},  # dict
    "originCountryISO_annotated": {},  # dict
    "priority_annotated": {},  # dict
    "sophisticationLevel_annotated": {},  # dict
    "uuid": "example_uuid",  # str
    "value": "example_value",  # str
})
```


### TagCategory

Create an instance: `tag_category = client.TagCategory()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `str` |  |
| `description` | `str` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `schema` | `list` | Parsed FieldDefinition[] defining custom fields for this category, or null if none. |
| `updatedAt` | `str` |  |
| `uuid` | `str` |  |

#### Example: Load

```python
tag_category = client.TagCategory().load({"id": "tag_category_id", "account_id": "account_id"})
```

#### Example: List

```python
tag_categorys = client.TagCategory().list({"account_id": "example"})
```

#### Example: Create

```python
tag_category = client.TagCategory().create({
    "account_id": "example_account_id",  # str
    "name": "example_name",  # str
    "uuid": "example_uuid",  # str
})
```


### TargetIndustry

Create an instance: `target_industry = client.TargetIndustry()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `type` | `str` |  |

#### Example: Load

```python
target_industry = client.TargetIndustry().load({"account_id": "account_id"})
```


### ThreatSignal

Create an instance: `threat_signal = client.ThreatSignal()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category_id` | `str` | One of the predefined Threat Signals feed categories; see GET /:account_id/v2/threat-signals/categories. |
| `category_uuids` | `list` |  |
| `config` | `str` |  |
| `display_name` | `str` |  |
| `display_order` | `int` |  |
| `enabled` | `bool` |  |
| `errors` | `list` |  |
| `feeds` | `list` |  |
| `is_active` | `bool` |  |
| `message` | `str` |  |
| `messages` | `list` |  |
| `name` | `str` |  |
| `opted_out` | `bool` |  |
| `output_schema` | `str` |  |
| `poll_interval_s` | `int` |  |
| `prompt` | `str` |  |
| `read` | `bool` |  |
| `result` | `Any` |  |
| `skill_ids` | `list` |  |
| `success` | `bool` |  |
| `tag_id` | `str` |  |
| `title` | `str` |  |
| `url` | `str` |  |
| `why_valuable` | `str` |  |

#### Example: Load

```python
threat_signal = client.ThreatSignal().load({"account_id": "account_id"})
```

#### Example: List

```python
threat_signals = client.ThreatSignal().list({"account_id": "example", "skill_id": "example"})
```

#### Example: Create

```python
threat_signal = client.ThreatSignal().create({
    "account_id": "example_account_id",  # str
    "category_uuids": [],  # list
    "errors": [],  # list
    "feeds": [],  # list
    "message": "example_message",  # str
    "messages": [],  # list
    "opted_out": True,  # bool
    "read": True,  # bool
    "result": "example_result",  # Any
    "skill_ids": [],  # list
    "success": True,  # bool
    "tag_id": "example_tag_id",  # str
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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── cloudflarecloudforceone_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`cloudflarecloudforceone_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
permission = client.Permission()
permission.list()

# permission.data_get() now returns the permission data from the last list
# permission.match_get() returns the last match criteria
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
