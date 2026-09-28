# CloudflareCloudforceOne TypeScript SDK



The TypeScript SDK for the CloudflareCloudforceOne API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Attacker()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudflare-cloudforce-one-sdk/releases](https://github.com/voxgig-sdk/cloudflare-cloudforce-one-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { CloudflareCloudforceOneSDK } from '@voxgig-sdk/cloudflare-cloudforce-one-sdk'

const client = new CloudflareCloudforceOneSDK({
  apikey: process.env.CLOUDFLARE_CLOUDFORCE_ONE_APIKEY,
})
```

### 3. Load a dashboardasset

DashboardAsset is nested under account, so provide the `account_id`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const dashboardasset = await client.DashboardAsset().load({
    account_id: 'example_account_id',
    project_type: 'example_project_type',
    request_id: 'example_request_id',
  })
  console.log(dashboardasset)
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const permissions = await client.Permission().list()
  console.log(permissions)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = CloudflareCloudforceOneSDK.test()

const permission = await client.Permission().list()
// permission is the entity, populated with mock response data
// — call permission.data() for the record itself
console.log(permission)
```

You can also use the instance method:

```ts
const client = new CloudflareCloudforceOneSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Permission()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new CloudflareCloudforceOneSDK({
  apikey: '...',
  extend: [logger],
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
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### CloudflareCloudforceOneSDK

#### Constructor

```ts
new CloudflareCloudforceOneSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Attacker(data?)` | `AttackerEntity` | Create an Attacker entity instance. |
| `BinDb(data?)` | `BinDbEntity` | Create a BinDb entity instance. |
| `BrandProtection(data?)` | `BrandProtectionEntity` | Create a BrandProtection entity instance. |
| `Category(data?)` | `CategoryEntity` | Create a Category entity instance. |
| `CloudforceOneAccountExemption(data?)` | `CloudforceOneAccountExemptionEntity` | Create a CloudforceOneAccountExemption entity instance. |
| `CloudforceOneDeleteAll(data?)` | `CloudforceOneDeleteAllEntity` | Create a CloudforceOneDeleteAll entity instance. |
| `CloudforceOneEditApproval(data?)` | `CloudforceOneEditApprovalEntity` | Create a CloudforceOneEditApproval entity instance. |
| `CloudforceOneEmailRuleValidation(data?)` | `CloudforceOneEmailRuleValidationEntity` | Create a CloudforceOneEmailRuleValidation entity instance. |
| `CloudforceOneEmailRulesList(data?)` | `CloudforceOneEmailRulesListEntity` | Create a CloudforceOneEmailRulesList entity instance. |
| `CloudforceOneRequestsApiResponseCommon(data?)` | `CloudforceOneRequestsApiResponseCommonEntity` | Create a CloudforceOneRequestsApiResponseCommon entity instance. |
| `CloudforceOneRule(data?)` | `CloudforceOneRuleEntity` | Create a CloudforceOneRule entity instance. |
| `CloudforceOneRuleApprovalDetail(data?)` | `CloudforceOneRuleApprovalDetailEntity` | Create a CloudforceOneRuleApprovalDetail entity instance. |
| `CloudforceOneRuleApprovalsList(data?)` | `CloudforceOneRuleApprovalsListEntity` | Create a CloudforceOneRuleApprovalsList entity instance. |
| `CloudforceOneRulePreview(data?)` | `CloudforceOneRulePreviewEntity` | Create a CloudforceOneRulePreview entity instance. |
| `CloudforceOneRulesPreviewList(data?)` | `CloudforceOneRulesPreviewListEntity` | Create a CloudforceOneRulesPreviewList entity instance. |
| `CloudforceOneRulesSearch(data?)` | `CloudforceOneRulesSearchEntity` | Create a CloudforceOneRulesSearch entity instance. |
| `CloudforceOneStat(data?)` | `CloudforceOneStatEntity` | Create a CloudforceOneStat entity instance. |
| `CloudforceOneSuccess(data?)` | `CloudforceOneSuccessEntity` | Create a CloudforceOneSuccess entity instance. |
| `CloudforceOneTreeNode(data?)` | `CloudforceOneTreeNodeEntity` | Create a CloudforceOneTreeNode entity instance. |
| `CloudforceOneValidation(data?)` | `CloudforceOneValidationEntity` | Create a CloudforceOneValidation entity instance. |
| `Collection(data?)` | `CollectionEntity` | Create a Collection entity instance. |
| `CollectionsItem(data?)` | `CollectionsItemEntity` | Create a CollectionsItem entity instance. |
| `Country(data?)` | `CountryEntity` | Create a Country entity instance. |
| `DashboardAsset(data?)` | `DashboardAssetEntity` | Create a DashboardAsset entity instance. |
| `DashboardUser(data?)` | `DashboardUserEntity` | Create a DashboardUser entity instance. |
| `Dataset(data?)` | `DatasetEntity` | Create a Dataset entity instance. |
| `Event(data?)` | `EventEntity` | Create an Event entity instance. |
| `Group(data?)` | `GroupEntity` | Create a Group entity instance. |
| `Indicator(data?)` | `IndicatorEntity` | Create an Indicator entity instance. |
| `IndicatorType(data?)` | `IndicatorTypeEntity` | Create an IndicatorType entity instance. |
| `Permission(data?)` | `PermissionEntity` | Create a Permission entity instance. |
| `Priority(data?)` | `PriorityEntity` | Create a Priority entity instance. |
| `PriorityIntelligence(data?)` | `PriorityIntelligenceEntity` | Create a PriorityIntelligence entity instance. |
| `PriorityIntelligenceRequirement(data?)` | `PriorityIntelligenceRequirementEntity` | Create a PriorityIntelligenceRequirement entity instance. |
| `PriorityIntelligenceRequirementsPir(data?)` | `PriorityIntelligenceRequirementsPirEntity` | Create a PriorityIntelligenceRequirementsPir entity instance. |
| `PublicCredentialMonitor(data?)` | `PublicCredentialMonitorEntity` | Create a PublicCredentialMonitor entity instance. |
| `Request(data?)` | `RequestEntity` | Create a Request entity instance. |
| `RequestForInformationRfi(data?)` | `RequestForInformationRfiEntity` | Create a RequestForInformationRfi entity instance. |
| `RequestsDashboard(data?)` | `RequestsDashboardEntity` | Create a RequestsDashboard entity instance. |
| `Rfi(data?)` | `RfiEntity` | Create a Rfi entity instance. |
| `RfiMessage(data?)` | `RfiMessageEntity` | Create a RfiMessage entity instance. |
| `Rule(data?)` | `RuleEntity` | Create a Rule entity instance. |
| `Scan(data?)` | `ScanEntity` | Create a Scan entity instance. |
| `Tag(data?)` | `TagEntity` | Create a Tag entity instance. |
| `TagCategory(data?)` | `TagCategoryEntity` | Create a TagCategory entity instance. |
| `TargetIndustry(data?)` | `TargetIndustryEntity` | Create a TargetIndustry entity instance. |
| `ThreatSignal(data?)` | `ThreatSignalEntity` | Create a ThreatSignal entity instance. |
| `tester(testopts?, sdkopts?)` | `CloudflareCloudforceOneSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `CloudflareCloudforceOneSDK.test(testopts?, sdkopts?)` | `CloudflareCloudforceOneSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): CloudflareCloudforceOneSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Attacker

| Field | Description |
| --- | --- |
| `type` |  |

Operations: load.

API path: `/accounts/{account_id}/cloudforce-one/events/attackers`

#### BinDb

| Field | Description |
| --- | --- |
| `content_type` |  |
| `md5` |  |
| `sha1` |  |
| `sha256` |  |

Operations: create, load.

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

Operations: create, list, load, patch, remove, update.

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

Operations: create, list, load, remove, update.

API path: `/accounts/{account_id}/cloudforce-one/events/event-categories/by-id/{category_id}`

#### CloudforceOneAccountExemption

| Field | Description |
| --- | --- |
| `namespace` |  |
| `tag_match` |  |
| `worker_name` |  |

Operations: create, list, remove, update.

API path: `/accounts/{account_id}/cloudforce-one/rules/exemptions`

#### CloudforceOneDeleteAll

| Field | Description |
| --- | --- |

Operations: remove.

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

Operations: create, update.

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

Operations: create.

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

Operations: list.

API path: `/accounts/{account_id}/cloudforce-one/rules/structured`

#### CloudforceOneRequestsApiResponseCommon

| Field | Description |
| --- | --- |

Operations: remove.

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

Operations: create.

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

Operations: create, load.

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

Operations: list.

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

Operations: create, load, update.

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

Operations: list.

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

Operations: list.

API path: `/accounts/{account_id}/cloudforce-one/rules/search`

#### CloudforceOneStat

| Field | Description |
| --- | --- |

Operations: load.

API path: `/accounts/{account_id}/cloudforce-one/rules/stats`

#### CloudforceOneSuccess

| Field | Description |
| --- | --- |
| `id` |  |
| `success` |  |

Operations: create, remove.

API path: `/accounts/{account_id}/cloudforce-one/rules/approvals/{id}/cancel`

#### CloudforceOneTreeNode

| Field | Description |
| --- | --- |
| `children` |  |
| `count` |  |
| `name` |  |
| `path` |  |

Operations: list.

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

Operations: create.

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

Operations: create, list, load, remove, update.

API path: `/accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}/columns`

#### CollectionsItem

| Field | Description |
| --- | --- |

Operations: create.

API path: `/accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}/items`

#### Country

| Field | Description |
| --- | --- |
| `result` |  |
| `success` |  |

Operations: list.

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

Operations: create, load.

API path: `/accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/assets/upload`

#### DashboardUser

| Field | Description |
| --- | --- |
| `display_name` | User display name |
| `id` | Unique user ID |

Operations: load.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

API path: `/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/{indicator_id}/relationships`

#### IndicatorType

| Field | Description |
| --- | --- |
| `type` |  |

Operations: load.

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

Operations: create, list, remove, update.

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

Operations: create, load, update.

API path: `/accounts/{account_id}/cloudforce-one/requests/priority`

#### PriorityIntelligence

| Field | Description |
| --- | --- |
| `id` |  |
| `labels` |  |
| `priority` |  |
| `requirement` |  |
| `tlp` |  |

Operations: create, load, remove, update.

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

Operations: create, load, remove, update.

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

Operations: create, list.

API path: `/accounts/{account_id}/cloudforce-one/requests/priority/new`

#### PublicCredentialMonitor

| Field | Description |
| --- | --- |
| `created_at` |  |
| `domain` | Domain to monitor (e.g. |
| `id` |  |
| `matched_at` |  |
| `username` |  |

Operations: create, list, remove.

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

Operations: create, load, update.

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

Operations: create, list, load, update.

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

Operations: list, load.

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

Operations: create, load, update.

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

Operations: create, list, load, update.

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

Operations: list.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

API path: `/accounts/{account_id}/cloudforce-one/events/tags/categories/create`

#### TargetIndustry

| Field | Description |
| --- | --- |
| `type` |  |

Operations: load.

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

Operations: create, list, load, patch, remove, update.

API path: `/accounts/{account_id}/cloudforce-one/v2/threat-signals/articles/{article_id}/skills/{skill_id}/diagnostic`



## Entities


### Attacker

Create an instance: `const attacker = client.Attacker()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `type` | `string` |  |

#### Example: Load

```ts
const attacker = await client.Attacker().load({ account_id: 'account_id' })
```


### BinDb

Create an instance: `const bin_db = client.BinDb()`

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

```ts
const bin_db = await client.BinDb().load({ account_id: 'account_id', hash: 'hash' })
```

#### Example: Create

```ts
const bin_db = await client.BinDb().create({
  account_id: 'example_account_id',
  content_type: 'example_content_type',
  md5: 'example_md5',
  sha1: 'example_sha1',
  sha256: 'example_sha256',
})
```


### BrandProtection

Create an instance: `const brand_protection = client.BrandProtection()`

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
| `domains` | `any[]` |  |
| `errors` | `any[]` |  |
| `fields` | `Record<string, any>` |  |
| `first_seen` | `string` |  |
| `format` | `string` |  |
| `id` | `number` |  |
| `image_data` | `string` | Base64 encoded image data. |
| `letterText` | `string` |  |
| `letterType` | `string` |  |
| `matchId` | `number` |  |
| `matchType` | `string` |  |
| `match_details` | `any[]` | Per-match detail objects with query metadata and individual dismissed state. |
| `match_ids` | `any[]` |  |
| `matched_at` | `string` |  |
| `matches` | `any[]` |  |
| `max_time` | `string` |  |
| `message` | `string` |  |
| `messages` | `any[]` |  |
| `min_time` | `string` |  |
| `name` | `string` |  |
| `noticeParams` | `Record<string, any>` |  |
| `notices` | `any[]` |  |
| `public_scans` | `Record<string, any>` |  |
| `queryId` | `number` |  |
| `queryIds` | `any[]` |  |
| `query_id` | `number` |  |
| `r2_path` | `string` |  |
| `registrar` | `string` |  |
| `result` | `any` |  |
| `result_info` | `Record<string, any>` | Present on paginated list responses when page or per_page is supplied. |
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
| `string_matches` | `any[]` |  |
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

```ts
const brand_protection = await client.BrandProtection().load({ account_id: 'account_id' })
```

#### Example: List

```ts
const brand_protections = await client.BrandProtection().list({ account_id: "example" })
```

#### Example: Create

```ts
const brand_protection = await client.BrandProtection().create({
  account_id: 'example_account_id',
  action: 'example_action',
  body: 'example_body',
  brand: 'example_brand',
  category: 'example_category',
  createdAt: 'example_createdAt',
  description: 'example_description',
  dismissed: true,
  domain: 'example_domain',
  domain_id: 1,
  domains: [],
  errors: [],
  fields: {},
  first_seen: 'example_first_seen',
  id: 1,
  image_data: 'example_image_data',
  letterText: 'example_letterText',
  letterType: 'example_letterType',
  matchId: 1,
  matchType: 'example_matchType',
  matched_at: 'example_matched_at',
  matches: [],
  message: 'example_message',
  messages: [],
  name: 'example_name',
  noticeParams: {},
  notices: [],
  public_scans: {},
  queryId: 1,
  r2_path: 'example_r2_path',
  registrar: 'example_registrar',
  result: 'example_result',
  result_info: {},
  scan_status: 'example_scan_status',
  scan_submission_id: 1,
  similarity_score: 1,
  similarity_threshold: 1,
  source: 'example_source',
  status: 'example_status',
  string_matches: [],
  success: true,
  tag: 'example_tag',
  takedownNoticeId: 1,
  templateId: 'example_templateId',
  total_analyzed: 1,
  total_matches: 1,
  truncated: true,
  updatedAt: 'example_updatedAt',
  uploaded_at: 'example_uploaded_at',
  url_scan_id: 'example_url_scan_id',
})
```


### Category

Create an instance: `const category = client.Category()`

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
| `mitreAttack` | `any[]` |  |
| `mitreCapec` | `any[]` |  |
| `name` | `string` |  |
| `shortname` | `string` |  |
| `uuid` | `string` |  |

#### Example: Load

```ts
const category = await client.Category().load({ id: 'category_id', account_id: 'account_id' })
```

#### Example: List

```ts
const categorys = await client.Category().list({ account_id: "example" })
```

#### Example: Create

```ts
const category = await client.Category().create({
  account_id: 'example_account_id',
  killChain: 1,
  name: 'example_name',
  uuid: 'example_uuid',
})
```


### CloudforceOneAccountExemption

Create an instance: `const cloudforce_one_account_exemption = client.CloudforceOneAccountExemption()`

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
| `namespace` | `any[]` |  |
| `tag_match` | `any[]` |  |
| `worker_name` | `any[]` |  |

#### Example: List

```ts
const cloudforce_one_account_exemptions = await client.CloudforceOneAccountExemption().list({ account_id: "example" })
```

#### Example: Create

```ts
const cloudforce_one_account_exemption = await client.CloudforceOneAccountExemption().create({
  account_id: 'example_account_id',
  namespace: [],
  tag_match: [],
  worker_name: [],
})
```


### CloudforceOneDeleteAll

Create an instance: `const cloudforce_one_delete_all = client.CloudforceOneDeleteAll()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### CloudforceOneEditApproval

Create an instance: `const cloudforce_one_edit_approval = client.CloudforceOneEditApproval()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `condition` | `Record<string, any>` | Nested condition groups support up to 10 levels of depth. |
| `description` | `string` |  |
| `enabled` | `boolean` |  |
| `id` | `string` |  |
| `meta` | `any[]` |  |
| `name` | `string` |  |
| `status` | `string` | Disposition for matching email. |
| `strings` | `any[]` |  |

#### Example: Create

```ts
const cloudforce_one_edit_approval = await client.CloudforceOneEditApproval().create({
  account_id: 'example_account_id',
  approval_id: 'example_approval_id',
  condition: {},
  name: 'example_name',
})
```


### CloudforceOneEmailRuleValidation

Create an instance: `const cloudforce_one_email_rule_validation = client.CloudforceOneEmailRuleValidation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `compiled_yara` | `string` |  |
| `condition` | `Record<string, any>` | Nested condition groups support up to 10 levels of depth. |
| `description` | `string` |  |
| `enabled` | `boolean` |  |
| `error` | `string` |  |
| `existing_rule_id` | `string` | Existing rule ID to exclude from duplicate-name checks when validating an update. |
| `meta` | `any[]` |  |
| `name` | `string` |  |
| `status` | `string` | Disposition for matching email. |
| `strings` | `any[]` |  |
| `valid` | `boolean` |  |

#### Example: Create

```ts
const cloudforce_one_email_rule_validation = await client.CloudforceOneEmailRuleValidation().create({
  account_id: 'example_account_id',
  condition: {},
  name: 'example_name',
  valid: true,
})
```


### CloudforceOneEmailRulesList

Create an instance: `const cloudforce_one_email_rules_list = client.CloudforceOneEmailRulesList()`

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
| `meta` | `any[]` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` |  |
| `namespaces` | `any[]` |  |
| `path` | `string` |  |
| `pending_approval_id` | `number` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `Record<string, any>` | Proposed update or deletion awaiting approval. |
| `structured_source` | `string` | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `number` |  |
| `updated_by` | `string` |  |

#### Example: List

```ts
const cloudforce_one_email_rules_lists = await client.CloudforceOneEmailRulesList().list({ account_id: "example" })
```


### CloudforceOneRequestsApiResponseCommon

Create an instance: `const cloudforce_one_requests_api_response_common = client.CloudforceOneRequestsApiResponseCommon()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### CloudforceOneRule

Create an instance: `const cloudforce_one_rule = client.CloudforceOneRule()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `any[]` |  |
| `commit_message` | `string` | Human-readable justification for this change. |
| `content` | `string` |  |
| `description` | `string` | Human-readable description of the rule. |
| `enabled` | `boolean` | Whether this rule is active for dice consumers. |
| `is_public` | `boolean` | Whether this rule is visible to other internal accounts. |
| `meta` | `any[]` | Adds YARA meta entries to the rule's meta block and stores them in rule_meta alongside content metadata. |
| `name` | `string` |  |
| `namespaces` | `any[]` | Optional WfP deployment tags (customer rules only). |
| `path` | `string` |  |

#### Example: Create

```ts
const cloudforce_one_rule = await client.CloudforceOneRule().create({
  account_id: 'example_account_id',
  content: 'example_content',
  name: 'example_name',
  path: 'example_path',
})
```


### CloudforceOneRuleApprovalDetail

Create an instance: `const cloudforce_one_rule_approval_detail = client.CloudforceOneRuleApprovalDetail()`

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
| `compiler_warnings` | `any[]` |  |
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

```ts
const cloudforce_one_rule_approval_detail = await client.CloudforceOneRuleApprovalDetail().load({ id: 'cloudforce_one_rule_approval_detail_id', account_id: 'account_id' })
```

#### Example: Create

```ts
const cloudforce_one_rule_approval_detail = await client.CloudforceOneRuleApprovalDetail().create({
  account_id: 'example_account_id',
  approval_id: 'example_approval_id',
  audit_log_id: 1,
  can_review: true,
  cancelled_at: 1,
  cancelled_by: 'example_cancelled_by',
  change_description: 'example_change_description',
  change_type: 'example_change_type',
  commit_message: 'example_commit_message',
  current_rule: 'example_current_rule',
  id: 1,
  proposed_changes: 'example_proposed_changes',
  rejection_reason: 'example_rejection_reason',
  requested_at: 1,
  requested_by: 'example_requested_by',
  reviewed_at: 1,
  reviewer_scope: 'example_reviewer_scope',
  revision_number: 1,
  rule_id: 'example_rule_id',
  rule_name: 'example_rule_name',
  status: 'example_status',
  superseded_by_approval_id: 1,
  supersedes_approval_id: 1,
})
```


### CloudforceOneRuleApprovalsList

Create an instance: `const cloudforce_one_rule_approvals_list = client.CloudforceOneRuleApprovalsList()`

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

```ts
const cloudforce_one_rule_approvals_lists = await client.CloudforceOneRuleApprovalsList().list({ account_id: "example" })
```


### CloudforceOneRulePreview

Create an instance: `const cloudforce_one_rule_preview = client.CloudforceOneRulePreview()`

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
| `condition` | `Record<string, any>` | Nested condition groups support up to 10 levels of depth. |
| `content` | `string` |  |
| `created_at` | `number` |  |
| `created_by` | `string` |  |
| `description` | `string` | Human-readable description of the rule. |
| `enabled` | `boolean` | Whether this rule is active for dice consumers. |
| `id` | `string` |  |
| `is_public` | `boolean` | Whether this rule is visible to other internal accounts. |
| `meta` | `any[]` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` |  |
| `namespaces` | `any[]` |  |
| `path` | `string` | Path change goes through approval workflow. |
| `pending_approval_id` | `number` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `Record<string, any>` | Proposed update or deletion awaiting approval. |
| `status` | `string` | Disposition for matching email. |
| `strings` | `any[]` |  |
| `structured_source` | `string` | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `number` |  |
| `updated_by` | `string` |  |

#### Example: Load

```ts
const cloudforce_one_rule_preview = await client.CloudforceOneRulePreview().load({ id: 'cloudforce_one_rule_preview_id', account_id: 'account_id' })
```

#### Example: Create

```ts
const cloudforce_one_rule_preview = await client.CloudforceOneRulePreview().create({
  account_id: 'example_account_id',
  condition: {},
  created_at: 1,
  created_by: 'example_created_by',
  description: 'example_description',
  enabled: true,
  id: 'example_id',
  is_public: true,
  name: 'example_name',
  namespaces: [],
  path: 'example_path',
  pending_approval_id: 1,
  pending_change: {},
  updated_at: 1,
  updated_by: 'example_updated_by',
})
```


### CloudforceOneRulesPreviewList

Create an instance: `const cloudforce_one_rules_preview_list = client.CloudforceOneRulesPreviewList()`

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
| `meta` | `any[]` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` |  |
| `namespaces` | `any[]` |  |
| `path` | `string` |  |
| `pending_approval_id` | `number` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `Record<string, any>` | Proposed update or deletion awaiting approval. |
| `structured_source` | `string` | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `number` |  |
| `updated_by` | `string` |  |

#### Example: List

```ts
const cloudforce_one_rules_preview_lists = await client.CloudforceOneRulesPreviewList().list({ account_id: "example" })
```


### CloudforceOneRulesSearch

Create an instance: `const cloudforce_one_rules_search = client.CloudforceOneRulesSearch()`

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
| `meta` | `any[]` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` |  |
| `namespaces` | `any[]` |  |
| `path` | `string` |  |
| `pending_approval_id` | `number` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `Record<string, any>` | Proposed update or deletion awaiting approval. |
| `score` | `number` | Relevance score in [0,1]. |
| `scoring_details` | `Record<string, any>` | AI Search hybrid retrieval returns this per-component scoring breakdown. |
| `structured_source` | `string` | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `number` |  |
| `updated_by` | `string` |  |

#### Example: List

```ts
const cloudforce_one_rules_searchs = await client.CloudforceOneRulesSearch().list({ account_id: "example", query: "example" })
```


### CloudforceOneStat

Create an instance: `const cloudforce_one_stat = client.CloudforceOneStat()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const cloudforce_one_stat = await client.CloudforceOneStat().load({ account_id: 'account_id' })
```


### CloudforceOneSuccess

Create an instance: `const cloudforce_one_success = client.CloudforceOneSuccess()`

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

```ts
const cloudforce_one_success = await client.CloudforceOneSuccess().create({
  account_id: 'example_account_id',
  approval_id: 'example_approval_id',
  success: true,
})
```


### CloudforceOneTreeNode

Create an instance: `const cloudforce_one_tree_node = client.CloudforceOneTreeNode()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `children` | `any[]` |  |
| `count` | `number` |  |
| `name` | `string` |  |
| `path` | `string` |  |

#### Example: List

```ts
const cloudforce_one_tree_nodes = await client.CloudforceOneTreeNode().list({ account_id: "example" })
```


### CloudforceOneValidation

Create an instance: `const cloudforce_one_validation = client.CloudforceOneValidation()`

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
| `namespaces` | `any[]` |  |
| `path` | `string` |  |
| `valid` | `boolean` |  |

#### Example: Create

```ts
const cloudforce_one_validation = await client.CloudforceOneValidation().create({
  account_id: 'example_account_id',
  content: 'example_content',
  name: 'example_name',
  valid: true,
})
```


### Collection

Create an instance: `const collection = client.Collection()`

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
| `columns` | `any[]` |  |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `data` | `Record<string, any>` |  |
| `id` | `string` |  |
| `item_count` | `number` |  |
| `metadata` | `Record<string, any>` |  |
| `name` | `string` | New column name (must be unique) |
| `position` | `number` | Column display order |
| `required` | `boolean` | Whether column is required |
| `status` | `string` |  |
| `type` | `string` | Column type: text, number, boolean, or date |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const collection = await client.Collection().load({ id: 'collection_id', account_id: 'account_id' })
```

#### Example: List

```ts
const collections = await client.Collection().list({ account_id: "example" })
```

#### Example: Create

```ts
const collection = await client.Collection().create({
  account_id: 'example_account_id',
  columns: [],
  created_at: 'example_created_at',
  created_by: 'example_created_by',
  data: {},
  id: 'example_id',
  item_count: 1,
  name: 'example_name',
  position: 1,
  required: true,
  status: 'example_status',
  type: 'example_type',
  updated_at: 'example_updated_at',
})
```


### CollectionsItem

Create an instance: `const collections_item = client.CollectionsItem()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const collections_item = await client.CollectionsItem().create({
  account_id: 'example_account_id',
  collection_id: 'example_collection_id',
})
```


### Country

Create an instance: `const country = client.Country()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |
| `success` | `string` |  |

#### Example: List

```ts
const countrys = await client.Country().list({ account_id: "example" })
```


### DashboardAsset

Create an instance: `const dashboard_asset = client.DashboardAsset()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assets` | `Record<string, any>` |  |
| `contentType` | `Record<string, any>` |  |
| `count` | `Record<string, any>` |  |
| `downloadable` | `Record<string, any>` |  |
| `expiresAt` | `Record<string, any>` |  |
| `fileName` | `Record<string, any>` |  |
| `fileSize` | `Record<string, any>` |  |
| `id` | `Record<string, any>` |  |
| `is_cloudflare_team` | `Record<string, any>` |  |
| `metadata` | `Record<string, any>` |  |
| `origin` | `Record<string, any>` |  |
| `state` | `Record<string, any>` |  |
| `tlp` | `Record<string, any>` |  |
| `uploadedAt` | `Record<string, any>` |  |

#### Example: Load

```ts
const dashboard_asset = await client.DashboardAsset().load({ account_id: 'account_id', project_type: 'project_type', request_id: 'request_id' })
```

#### Example: Create

```ts
const dashboard_asset = await client.DashboardAsset().create({
  account_id: 'example_account_id',
  project_type: 'example_project_type',
  request_id: 'example_request_id',
  assets: {},
  contentType: {},
  count: {},
  downloadable: {},
  expiresAt: {},
  fileName: {},
  fileSize: {},
  id: {},
  is_cloudflare_team: {},
  metadata: {},
  origin: {},
  state: {},
  tlp: {},
  uploadedAt: {},
})
```


### DashboardUser

Create an instance: `const dashboard_user = client.DashboardUser()`

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

```ts
const dashboard_user = await client.DashboardUser().load({ account_id: 'account_id', request_id: 'request_id' })
```


### Dataset

Create an instance: `const dataset = client.Dataset()`

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

```ts
const dataset = await client.Dataset().load({ id: 'dataset_id', account_id: 'account_id' })
```

#### Example: List

```ts
const datasets = await client.Dataset().list({ account_id: "example" })
```

#### Example: Create

```ts
const dataset = await client.Dataset().create({
  account_id: 'example_account_id',
  id: 'example_id',
  indicatorWriteMode: 'example_indicatorWriteMode',
  isAnalytics: true,
  isPublic: true,
  name: 'example_name',
  uuid: 'example_uuid',
})
```


### Event

Create an instance: `const event = client.Event()`

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
| `childIds` | `any[]` | Array of child event UUIDs that were processed |
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
| `errors` | `any[]` | Array of error details |
| `event` | `string` |  |
| `eventIds` | `any[]` | List of event UUIDs to update (1-100) |
| `failedCount` | `number` |  |
| `failures` | `any[]` | List of events that failed to update with error messages |
| `hasChildren` | `boolean` |  |
| `id` | `number` | Unique identifier for the saved query |
| `includeCreatedEvents` | `boolean` | When true, response includes array of created event UUIDs and shard IDs. |
| `indicator` | `string` |  |
| `indicatorType` | `string` |  |
| `indicatorTypeId` | `number` |  |
| `insight` | `string` |  |
| `killChain` | `number` |  |
| `message` | `string` | Human-readable message describing the operation result |
| `mitreAttack` | `any[]` |  |
| `mitreCapec` | `any[]` |  |
| `name` | `string` | Name of the saved query |
| `numReferenced` | `number` |  |
| `numReferences` | `number` |  |
| `order` | `string` |  |
| `orderBy` | `string` |  |
| `page` | `number` |  |
| `pageSize` | `number` |  |
| `parentId` | `string` | UUID of the parent event that will be the source of the relationship |
| `query_json` | `string` | JSON string containing the query parameters |
| `raw` | `Record<string, any>` |  |
| `rawId` | `string` |  |
| `referenced` | `any[]` |  |
| `referencedIds` | `any[]` |  |
| `references` | `any[]` |  |
| `referencesIds` | `any[]` |  |
| `relationshipType` | `string` | Type of relationship to create between parent and child events |
| `relationships` | `any[]` | Array of successfully created relationship objects |
| `relationshipsCreated` | `number` | Number of relationships that were successfully created |
| `releasabilityId` | `string` |  |
| `rule_enabled` | `boolean` | Whether rule is enabled |
| `rule_list_id` | `string` | WAF rules list ID for blocking |
| `rule_scope` | `string` | Scope for the rule |
| `search` | `any[]` | Structured search as a JSON array of {field, op, value} objects. |
| `source` | `string` |  |
| `success` | `boolean` | Whether the relationship creation operation completed successfully |
| `tags` | `any[]` |  |
| `targetCountry` | `string` |  |
| `targetCountryAlpha3` | `string` |  |
| `targetIndustry` | `string` |  |
| `tlp` | `string` |  |
| `updatedCount` | `number` |  |
| `updated_at` | `string` | Last update timestamp |
| `updates` | `Record<string, any>` | Fields to update on all specified events. |
| `user_email` | `string` | Email of the user who created the query |
| `uuid` | `string` |  |

#### Example: Load

```ts
const event = await client.Event().load({ id: 'event_id', account_id: 'account_id' })
```

#### Example: List

```ts
const events = await client.Event().list({ account_id: "example" })
```

#### Example: Create

```ts
const event = await client.Event().create({
  account_id: 'example_account_id',
  accountId: 1,
  alert_enabled: true,
  alert_rollup_enabled: true,
  attacker: 'example_attacker',
  attackerCountry: 'example_attackerCountry',
  attackerCountryAlpha3: 'example_attackerCountryAlpha3',
  category: 'example_category',
  created: 'example_created',
  createdEventsCount: 1,
  createdIndicatorsCount: 1,
  createdRelationshipsCount: 1,
  created_at: 'example_created_at',
  data: 'example_data',
  datasetId: 'example_datasetId',
  date: 'example_date',
  errorCount: 1,
  event: 'example_event',
  eventIds: [],
  failedCount: 1,
  hasChildren: true,
  indicator: 'example_indicator',
  indicatorType: 'example_indicatorType',
  indicatorTypeId: 1,
  killChain: 1,
  message: 'example_message',
  mitreAttack: [],
  mitreCapec: [],
  name: 'example_name',
  numReferenced: 1,
  numReferences: 1,
  parentId: 'example_parentId',
  query_json: 'example_query_json',
  rawId: 'example_rawId',
  referenced: [],
  referencedIds: [],
  references: [],
  referencesIds: [],
  relationshipType: 'example_relationshipType',
  relationships: [],
  rule_enabled: true,
  source: 'example_source',
  success: true,
  tags: [],
  targetCountry: 'example_targetCountry',
  targetCountryAlpha3: 'example_targetCountryAlpha3',
  targetIndustry: 'example_targetIndustry',
  tlp: 'example_tlp',
  updatedCount: 1,
  updated_at: 'example_updated_at',
  updates: {},
  user_email: 'example_user_email',
  uuid: 'example_uuid',
})
```


### Group

Create an instance: `const group = client.Group()`

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
| `members` | `any[]` |  |
| `name` | `string` |  |
| `updatedAt` | `string` |  |
| `uuid` | `string` |  |

#### Example: Load

```ts
const group = await client.Group().load({ id: 'group_id', account_id: 'account_id' })
```

#### Example: List

```ts
const groups = await client.Group().list({ account_id: "example" })
```

#### Example: Create

```ts
const group = await client.Group().create({
  account_id: 'example_account_id',
  createdAt: 'example_createdAt',
  description: 'example_description',
  members: [],
  name: 'example_name',
  updatedAt: 'example_updatedAt',
  uuid: 'example_uuid',
})
```


### Indicator

Create an instance: `const indicator = client.Indicator()`

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
| `completeness` | `Record<string, any>` |  |
| `confidence` | `number` | Updated confidence. |
| `createdAt` | `string` |  |
| `datasetId` | `string` | The dataset ID this indicator belongs to. |
| `description` | `string` | Optional description for the indicator type |
| `durableObjectId` | `string` |  |
| `id` | `string` |  |
| `indicatorType` | `string` | The indicator type to create (e.g., 'DOMAIN', 'IP', 'URL', 'HASH', 'EMAIL') |
| `indicators` | `Record<string, any>` |  |
| `message` | `string` |  |
| `metadata` | `Record<string, any>` | Updated metadata. |
| `pagination` | `Record<string, any>` |  |
| `relatedEvents` | `any[]` |  |
| `sources` | `any[]` | RSS article sources from which this indicator was extracted. |
| `tags` | `any[]` |  |
| `tlp` | `string` | Traffic Light Protocol designation. |
| `type` | `string` | Updated relationship type. |
| `updatedAt` | `string` |  |
| `uuid` | `string` |  |
| `value` | `string` |  |

#### Example: Load

```ts
const indicator = await client.Indicator().load({ id: 'indicator_id', account_id: 'account_id' })
```

#### Example: List

```ts
const indicators = await client.Indicator().list({ account_id: "example", dataset_id: "example" })
```

#### Example: Create

```ts
const indicator = await client.Indicator().create({
  account_id: 'example_account_id',
  dataset_id: 'example_dataset_id',
  completeness: {},
  createdAt: 'example_createdAt',
  durableObjectId: 'example_durableObjectId',
  indicatorType: 'example_indicatorType',
  indicators: {},
  message: 'example_message',
  pagination: {},
  sources: [],
  updatedAt: 'example_updatedAt',
  uuid: 'example_uuid',
  value: 'example_value',
})
```


### IndicatorType

Create an instance: `const indicator_type = client.IndicatorType()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `type` | `string` |  |

#### Example: Load

```ts
const indicator_type = await client.IndicatorType().load({ account_id: 'account_id' })
```


### Permission

Create an instance: `const permission = client.Permission()`

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

```ts
const permissions = await client.Permission().list({ account_id: "example", dataset_id: "example" })
```

#### Example: Create

```ts
const permission = await client.Permission().create({
  account_id: 'example_account_id',
  dataset_id: 'example_dataset_id',
  createdAt: 'example_createdAt',
  resourceType: 'example_resourceType',
  role: 'example_role',
  subjectId: 'example_subjectId',
  subjectType: 'example_subjectType',
  updatedAt: 'example_updatedAt',
  uuid: 'example_uuid',
})
```


### Priority

Create an instance: `const priority = client.Priority()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `labels` | `any[]` | List of labels. |
| `messages` | `any[]` |  |
| `page` | `number` | Page number of results. |
| `per_page` | `number` | Number of results per page. |
| `priority` | `number` | Priority. |
| `requirement` | `string` | Requirement. |
| `result` | `any` |  |
| `success` | `boolean` | Whether the API call was successful. |
| `tlp` | `string` | The CISA defined Traffic Light Protocol (TLP). |

#### Example: Load

```ts
const priority = await client.Priority().load({ id: 'priority_id', account_id: 'account_id' })
```

#### Example: Create

```ts
const priority = await client.Priority().create({
  account_id: 'example_account_id',
  errors: [],
  labels: [],
  messages: [],
  page: 1,
  per_page: 1,
  priority: 1,
  requirement: 'example_requirement',
  success: true,
  tlp: 'example_tlp',
})
```


### PriorityIntelligence

Create an instance: `const priority_intelligence = client.PriorityIntelligence()`

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
| `labels` | `any[]` |  |
| `priority` | `number` |  |
| `requirement` | `string` |  |
| `tlp` | `string` |  |

#### Example: Load

```ts
const priority_intelligence = await client.PriorityIntelligence().load({ id: 'priority_intelligence_id', account_id: 'account_id' })
```

#### Example: Create

```ts
const priority_intelligence = await client.PriorityIntelligence().create({
  account_id: 'example_account_id',
  requirement: 'example_requirement',
})
```


### PriorityIntelligenceRequirement

Create an instance: `const priority_intelligence_requirement = client.PriorityIntelligenceRequirement()`

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
| `dataset_ids` | `any[]` |  |
| `dimension` | `string` |  |
| `emerging_min_current_count` | `number` |  |
| `enabled` | `boolean` |  |
| `established_min_absolute_delta` | `number` |  |
| `established_min_prior_count` | `number` |  |
| `established_min_relative_delta` | `number` |  |
| `value` | `string` |  |
| `window_days` | `number` |  |

#### Example: Load

```ts
const priority_intelligence_requirement = await client.PriorityIntelligenceRequirement().load({ account_id: 'account_id' })
```

#### Example: Create

```ts
const priority_intelligence_requirement = await client.PriorityIntelligenceRequirement().create({
  account_id: 'example_account_id',
  dimension: 'example_dimension',
  value: 'example_value',
})
```


### PriorityIntelligenceRequirementsPir

Create an instance: `const priority_intelligence_requirements__pir = client.PriorityIntelligenceRequirementsPir()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `labels` | `any[]` | List of labels. |
| `messages` | `any[]` |  |
| `priority` | `number` | Priority. |
| `requirement` | `string` | Requirement. |
| `result` | `any` |  |
| `success` | `boolean` | Whether the API call was successful. |
| `tlp` | `string` | The CISA defined Traffic Light Protocol (TLP). |

#### Example: List

```ts
const priority_intelligence_requirements__pirs = await client.PriorityIntelligenceRequirementsPir().list({ account_id: "example" })
```

#### Example: Create

```ts
const priority_intelligence_requirements__pir = await client.PriorityIntelligenceRequirementsPir().create({
  account_id: 'example_account_id',
  errors: [],
  labels: [],
  messages: [],
  priority: 1,
  requirement: 'example_requirement',
  success: true,
  tlp: 'example_tlp',
})
```


### PublicCredentialMonitor

Create an instance: `const public_credential_monitor = client.PublicCredentialMonitor()`

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

```ts
const public_credential_monitors = await client.PublicCredentialMonitor().list({ account_id: "example" })
```

#### Example: Create

```ts
const public_credential_monitor = await client.PublicCredentialMonitor().create({
  account_id: 'example_account_id',
  created_at: 'example_created_at',
  domain: 'example_domain',
  id: 1,
  matched_at: 'example_matched_at',
  username: 'example_username',
})
```


### Request

Create an instance: `const request = client.Request()`

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
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `messages` | `any[]` |  |
| `page` | `number` | Page number of results. |
| `per_page` | `number` | Number of results per page. |
| `priority` | `string` | Priority for analyzing the request. |
| `request_type` | `string` | Requested information from request. |
| `result` | `Record<string, any>` |  |
| `sort_by` | `string` | Field to sort results by. |
| `sort_order` | `string` | Sort order (asc or desc). |
| `status` | `string` | Request Status. |
| `success` | `boolean` | Whether the API call was successful. |
| `summary` | `string` | Brief description of the request. |
| `tlp` | `string` | The CISA defined Traffic Light Protocol (TLP). |

#### Example: Load

```ts
const request = await client.Request().load({ id: 'request_id', account_id: 'account_id' })
```

#### Example: Create

```ts
const request = await client.Request().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  page: 1,
  per_page: 1,
  result: {},
  success: true,
})
```


### RequestForInformationRfi

Create an instance: `const request_for_information__rfi = client.RequestForInformationRfi()`

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
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `messages` | `any[]` |  |
| `priority` | `string` | Priority for analyzing the request. |
| `request_type` | `string` | Requested information from request. |
| `result` | `any[]` |  |
| `source` | `string` | Asset file to upload. |
| `success` | `boolean` | Whether the API call was successful. |
| `summary` | `string` | Brief description of the request. |
| `tlp` | `string` | The CISA defined Traffic Light Protocol (TLP). |

#### Example: Load

```ts
const request_for_information__rfi = await client.RequestForInformationRfi().load({ account_id: 'account_id', asset_id: 'asset_id', request_id: 'request_id' })
```

#### Example: List

```ts
const request_for_information__rfis = await client.RequestForInformationRfi().list({ account_id: "example" })
```

#### Example: Create

```ts
const request_for_information__rfi = await client.RequestForInformationRfi().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  success: true,
})
```


### RequestsDashboard

Create an instance: `const requests_dashboard = client.RequestsDashboard()`

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
| `errors` | `any[]` | Always empty on success |
| `fieldLabel` | `string` |  |
| `fieldName` | `string` |  |
| `fieldType` | `string` |  |
| `id` | `string` |  |
| `messages` | `any[]` | Always empty on success |
| `options` | `any[]` |  |
| `projectType` | `string` |  |
| `project_type` | `string` |  |
| `public` | `boolean` |  |
| `request_types` | `any[]` |  |
| `required` | `boolean` |  |
| `result` | `Record<string, any>` |  |
| `sectionID` | `string` |  |
| `sectionLabel` | `string` |  |
| `success` | `Record<string, any>` |  |
| `total` | `number` |  |
| `updated` | `string` |  |
| `validation` | `Record<string, any>` |  |

#### Example: Load

```ts
const requests_dashboard = await client.RequestsDashboard().load({ account_id: 'account_id', project_type: 'project_type' })
```

#### Example: List

```ts
const requests_dashboards = await client.RequestsDashboard().list({ account_id: "example" })
```


### Rfi

Create an instance: `const rfi = client.Rfi()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `Record<string, any>` |  |
| `assignee` | `string` | Assignee email |
| `completed` | `string` | Completion timestamp |
| `created` | `string` | Creation timestamp |
| `description` | `string` | RFI description (optional). |
| `eventId` | `string` | Optional related event ID |
| `id` | `string` | RFI UUID |
| `investigation_id` | `string` | Investigation UUID |
| `is_free_request` | `boolean` | Whether this is a free request |
| `message_tokens` | `number` | Total message tokens |
| `metadata` | `Record<string, any>` | Optional metadata fields specific to the RFI type |
| `pagination` | `Record<string, any>` |  |
| `priority` | `string` | Request priority |
| `readable_id` | `string` | Human-readable ID |
| `release_entitlements` | `string` | Release entitlements |
| `report_id` | `string` | Report UUID |
| `request` | `Record<string, any>` |  |
| `request_type` | `string` | Optional request type for the request |
| `result` | `any[]` |  |
| `status` | `string` | RFI status. |
| `subtypeId` | `string` | Optional subtype ID |
| `success` | `string` |  |
| `summary` | `string` | RFI summary |
| `title` | `string` | RFI title (optional). |
| `tlp` | `string` | TLP classification |
| `tokens` | `number` | Total tokens used |
| `updated` | `string` | Last update timestamp |

#### Example: Load

```ts
const rfi = await client.Rfi().load({ id: 'rfi_id', project_type: 'project_type' })
```

#### Example: Create

```ts
const rfi = await client.Rfi().create({
  account_id: 'example_account_id',
  project_type: 'example_project_type',
  account: {},
  assignee: 'example_assignee',
  completed: 'example_completed',
  created: 'example_created',
  id: 'example_id',
  investigation_id: 'example_investigation_id',
  is_free_request: true,
  message_tokens: 1,
  pagination: {},
  priority: 'example_priority',
  readable_id: 'example_readable_id',
  release_entitlements: 'example_release_entitlements',
  report_id: 'example_report_id',
  request: {},
  result: [],
  status: 'example_status',
  success: 'example_success',
  summary: 'example_summary',
  tlp: 'example_tlp',
  tokens: 1,
  updated: 'example_updated',
})
```


### RfiMessage

Create an instance: `const rfi_message = client.RfiMessage()`

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
| `attachment_asset_ids` | `any[]` |  |
| `attachments` | `any[]` |  |
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

```ts
const rfi_message = await client.RfiMessage().load({ id: 'rfi_message_id', account_id: 'account_id', project_type: 'project_type', request_id: 'request_id' })
```

#### Example: List

```ts
const rfi_messages = await client.RfiMessage().list({ account_id: "example", project_type: "example", request_id: "example" })
```

#### Example: Create

```ts
const rfi_message = await client.RfiMessage().create({
  account_id: 'example_account_id',
  project_type: 'example_project_type',
  request_id: 'example_request_id',
  attachments: [],
  content: 'example_content',
  created: 'example_created',
  id: 1,
  is_cloudflare_team: true,
  is_published: true,
  published: 'example_published',
  tlp: 'example_tlp',
  updated: 'example_updated',
})
```


### Rule

Create an instance: `const rule = client.Rule()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `arrays` | `any[]` |  |
| `headers` | `Record<string, any>` |  |
| `operators` | `Record<string, any>` |  |
| `scalars` | `any[]` |  |
| `string_arrays` | `any[]` |  |
| `structs` | `any[]` |  |

#### Example: List

```ts
const rules = await client.Rule().list({ account_id: "example" })
```


### Scan

Create an instance: `const scan = client.Scan()`

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
| `errors` | `any[]` |  |
| `frequency` | `number` | Defines the number of days between each scan (0 = One-off scan). |
| `ips` | `any[]` | Defines a list of IP addresses or CIDR blocks to scan. |
| `messages` | `any[]` |  |
| `ports` | `any[]` | Defines a list of ports to scan. |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const scan = await client.Scan().load({ account_id: 'account_id', config_id: 'config_id' })
```

#### Example: List

```ts
const scans = await client.Scan().list({ account_id: "example" })
```

#### Example: Create

```ts
const scan = await client.Scan().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  result: {},
  success: true,
})
```


### Tag

Create an instance: `const tag = client.Tag()`

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
| `activeDuration_annotated` | `Record<string, any>` |  |
| `actorCategory` | `string` |  |
| `actorCategory_annotated` | `Record<string, any>` |  |
| `aliasGroupNames` | `any[]` |  |
| `aliasGroupNamesInternal` | `any[]` |  |
| `aliases` | `any[]` | Structured aliases ({ value, confidence 1-10, tlp }). |
| `attributionOrganization` | `string` |  |
| `attributionOrganization_annotated` | `Record<string, any>` |  |
| `categoryName` | `string` |  |
| `categoryUuid` | `string` | Tag type (category) UUID. |
| `confidence` | `number` | Overall tag confidence (1-10). |
| `createdAt` | `string` |  |
| `dateOfDiscovery` | `string` | Date of discovery (ISO YYYY-MM-DD). |
| `description` | `string` |  |
| `externalReferenceLinks` | `any[]` |  |
| `externalReferences` | `any[]` | Structured external references ({ url, description }). |
| `externalReferences_annotated` | `any[]` |  |
| `id` | `string` |  |
| `internalAliases` | `any[]` | Internal structured aliases ({ value, confidence 1-10, tlp }). |
| `internalDescription` | `string` |  |
| `lastSeen` | `string` |  |
| `metadata` | `Record<string, any>` | Updated metadata. |
| `motive` | `string` |  |
| `motive_annotated` | `Record<string, any>` |  |
| `opsecLevel` | `string` |  |
| `opsecLevel_annotated` | `Record<string, any>` |  |
| `originCountryISO` | `string` | ISO country code (alpha-2 or alpha-3). |
| `originCountryISO_annotated` | `Record<string, any>` |  |
| `priority` | `number` |  |
| `priority_annotated` | `Record<string, any>` |  |
| `properties` | `Record<string, any>` | Parsed custom field values. |
| `sophisticationLevel` | `string` |  |
| `sophisticationLevel_annotated` | `Record<string, any>` |  |
| `tlp` | `string` | Tag-level TLP handling marking. |
| `type` | `string` | Updated relationship type. |
| `updatedAt` | `string` |  |
| `uuid` | `string` |  |
| `value` | `string` |  |
| `version` | `number` |  |

#### Example: Load

```ts
const tag = await client.Tag().load({ id: 'tag_id', account_id: 'account_id' })
```

#### Example: List

```ts
const tags = await client.Tag().list({ account_id: "example" })
```

#### Example: Create

```ts
const tag = await client.Tag().create({
  account_id: 'example_account_id',
  activeDuration_annotated: {},
  actorCategory_annotated: {},
  attributionOrganization_annotated: {},
  motive_annotated: {},
  opsecLevel_annotated: {},
  originCountryISO_annotated: {},
  priority_annotated: {},
  sophisticationLevel_annotated: {},
  uuid: 'example_uuid',
  value: 'example_value',
})
```


### TagCategory

Create an instance: `const tag_category = client.TagCategory()`

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
| `schema` | `any[]` | Parsed FieldDefinition[] defining custom fields for this category, or null if none. |
| `updatedAt` | `string` |  |
| `uuid` | `string` |  |

#### Example: Load

```ts
const tag_category = await client.TagCategory().load({ id: 'tag_category_id', account_id: 'account_id' })
```

#### Example: List

```ts
const tag_categorys = await client.TagCategory().list({ account_id: "example" })
```

#### Example: Create

```ts
const tag_category = await client.TagCategory().create({
  account_id: 'example_account_id',
  name: 'example_name',
  uuid: 'example_uuid',
})
```


### TargetIndustry

Create an instance: `const target_industry = client.TargetIndustry()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `type` | `string` |  |

#### Example: Load

```ts
const target_industry = await client.TargetIndustry().load({ account_id: 'account_id' })
```


### ThreatSignal

Create an instance: `const threat_signal = client.ThreatSignal()`

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
| `category_uuids` | `any[]` |  |
| `config` | `string` |  |
| `display_name` | `string` |  |
| `display_order` | `number` |  |
| `enabled` | `boolean` |  |
| `errors` | `any[]` |  |
| `feeds` | `any[]` |  |
| `is_active` | `boolean` |  |
| `message` | `string` |  |
| `messages` | `any[]` |  |
| `name` | `string` |  |
| `opted_out` | `boolean` |  |
| `output_schema` | `string` |  |
| `poll_interval_s` | `number` |  |
| `prompt` | `string` |  |
| `read` | `boolean` |  |
| `result` | `any` |  |
| `skill_ids` | `any[]` |  |
| `success` | `boolean` |  |
| `tag_id` | `string` |  |
| `title` | `string` |  |
| `url` | `string` |  |
| `why_valuable` | `string` |  |

#### Example: Load

```ts
const threat_signal = await client.ThreatSignal().load({ account_id: 'account_id' })
```

#### Example: List

```ts
const threat_signals = await client.ThreatSignal().list({ account_id: "example", skill_id: "example" })
```

#### Example: Create

```ts
const threat_signal = await client.ThreatSignal().create({
  account_id: 'example_account_id',
  category_uuids: [],
  errors: [],
  feeds: [],
  message: 'example_message',
  messages: [],
  opted_out: true,
  read: true,
  result: 'example_result',
  skill_ids: [],
  success: true,
  tag_id: 'example_tag_id',
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
cloudflare-cloudforce-one/
├── src/
│   ├── CloudflareCloudforceOneSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { CloudflareCloudforceOneSDK } from '@voxgig-sdk/cloudflare-cloudforce-one-sdk'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const permission = client.Permission()
await permission.list()

// permission.data() now returns the permission data from the last `list`
// permission.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
