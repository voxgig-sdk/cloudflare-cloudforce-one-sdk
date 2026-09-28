# CloudflareCloudforceOne TypeScript SDK Reference

Complete API reference for the CloudflareCloudforceOne TypeScript SDK.


## CloudflareCloudforceOneSDK

### Constructor

```ts
new CloudflareCloudforceOneSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareCloudforceOneSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = CloudflareCloudforceOneSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `CloudflareCloudforceOneSDK` instance in test mode.


### Instance Methods

#### `Attacker(data?: object)`

Create a new `Attacker` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AttackerEntity` instance.

#### `BinDb(data?: object)`

Create a new `BinDb` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BinDbEntity` instance.

#### `BrandProtection(data?: object)`

Create a new `BrandProtection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BrandProtectionEntity` instance.

#### `Category(data?: object)`

Create a new `Category` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CategoryEntity` instance.

#### `CloudforceOneAccountExemption(data?: object)`

Create a new `CloudforceOneAccountExemption` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CloudforceOneAccountExemptionEntity` instance.

#### `CloudforceOneDeleteAll(data?: object)`

Create a new `CloudforceOneDeleteAll` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CloudforceOneDeleteAllEntity` instance.

#### `CloudforceOneEditApproval(data?: object)`

Create a new `CloudforceOneEditApproval` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CloudforceOneEditApprovalEntity` instance.

#### `CloudforceOneEmailRuleValidation(data?: object)`

Create a new `CloudforceOneEmailRuleValidation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CloudforceOneEmailRuleValidationEntity` instance.

#### `CloudforceOneEmailRulesList(data?: object)`

Create a new `CloudforceOneEmailRulesList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CloudforceOneEmailRulesListEntity` instance.

#### `CloudforceOneRequestsApiResponseCommon(data?: object)`

Create a new `CloudforceOneRequestsApiResponseCommon` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CloudforceOneRequestsApiResponseCommonEntity` instance.

#### `CloudforceOneRule(data?: object)`

Create a new `CloudforceOneRule` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CloudforceOneRuleEntity` instance.

#### `CloudforceOneRuleApprovalDetail(data?: object)`

Create a new `CloudforceOneRuleApprovalDetail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CloudforceOneRuleApprovalDetailEntity` instance.

#### `CloudforceOneRuleApprovalsList(data?: object)`

Create a new `CloudforceOneRuleApprovalsList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CloudforceOneRuleApprovalsListEntity` instance.

#### `CloudforceOneRulePreview(data?: object)`

Create a new `CloudforceOneRulePreview` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CloudforceOneRulePreviewEntity` instance.

#### `CloudforceOneRulesPreviewList(data?: object)`

Create a new `CloudforceOneRulesPreviewList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CloudforceOneRulesPreviewListEntity` instance.

#### `CloudforceOneRulesSearch(data?: object)`

Create a new `CloudforceOneRulesSearch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CloudforceOneRulesSearchEntity` instance.

#### `CloudforceOneStat(data?: object)`

Create a new `CloudforceOneStat` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CloudforceOneStatEntity` instance.

#### `CloudforceOneSuccess(data?: object)`

Create a new `CloudforceOneSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CloudforceOneSuccessEntity` instance.

#### `CloudforceOneTreeNode(data?: object)`

Create a new `CloudforceOneTreeNode` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CloudforceOneTreeNodeEntity` instance.

#### `CloudforceOneValidation(data?: object)`

Create a new `CloudforceOneValidation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CloudforceOneValidationEntity` instance.

#### `Collection(data?: object)`

Create a new `Collection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CollectionEntity` instance.

#### `CollectionsItem(data?: object)`

Create a new `CollectionsItem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CollectionsItemEntity` instance.

#### `Country(data?: object)`

Create a new `Country` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CountryEntity` instance.

#### `DashboardAsset(data?: object)`

Create a new `DashboardAsset` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DashboardAssetEntity` instance.

#### `DashboardUser(data?: object)`

Create a new `DashboardUser` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DashboardUserEntity` instance.

#### `Dataset(data?: object)`

Create a new `Dataset` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DatasetEntity` instance.

#### `Event(data?: object)`

Create a new `Event` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EventEntity` instance.

#### `Group(data?: object)`

Create a new `Group` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GroupEntity` instance.

#### `Indicator(data?: object)`

Create a new `Indicator` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IndicatorEntity` instance.

#### `IndicatorType(data?: object)`

Create a new `IndicatorType` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IndicatorTypeEntity` instance.

#### `Permission(data?: object)`

Create a new `Permission` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PermissionEntity` instance.

#### `Priority(data?: object)`

Create a new `Priority` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PriorityEntity` instance.

#### `PriorityIntelligence(data?: object)`

Create a new `PriorityIntelligence` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PriorityIntelligenceEntity` instance.

#### `PriorityIntelligenceRequirement(data?: object)`

Create a new `PriorityIntelligenceRequirement` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PriorityIntelligenceRequirementEntity` instance.

#### `PriorityIntelligenceRequirementsPir(data?: object)`

Create a new `PriorityIntelligenceRequirementsPir` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PriorityIntelligenceRequirementsPirEntity` instance.

#### `PublicCredentialMonitor(data?: object)`

Create a new `PublicCredentialMonitor` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PublicCredentialMonitorEntity` instance.

#### `Request(data?: object)`

Create a new `Request` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RequestEntity` instance.

#### `RequestForInformationRfi(data?: object)`

Create a new `RequestForInformationRfi` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RequestForInformationRfiEntity` instance.

#### `RequestsDashboard(data?: object)`

Create a new `RequestsDashboard` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RequestsDashboardEntity` instance.

#### `Rfi(data?: object)`

Create a new `Rfi` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RfiEntity` instance.

#### `RfiMessage(data?: object)`

Create a new `RfiMessage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RfiMessageEntity` instance.

#### `Rule(data?: object)`

Create a new `Rule` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RuleEntity` instance.

#### `Scan(data?: object)`

Create a new `Scan` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScanEntity` instance.

#### `Tag(data?: object)`

Create a new `Tag` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TagEntity` instance.

#### `TagCategory(data?: object)`

Create a new `TagCategory` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TagCategoryEntity` instance.

#### `TargetIndustry(data?: object)`

Create a new `TargetIndustry` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TargetIndustryEntity` instance.

#### `ThreatSignal(data?: object)`

Create a new `ThreatSignal` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ThreatSignalEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `CloudflareCloudforceOneSDK.test()`.

**Returns:** `CloudflareCloudforceOneSDK` instance in test mode.


---

## AttackerEntity

```ts
const attacker = client.Attacker()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Attacker().load({ account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AttackerEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BinDbEntity

```ts
const bin_db = client.BinDb()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_type` | `string` | Yes |  |
| `md5` | `string` | Yes |  |
| `sha1` | `string` | Yes |  |
| `sha256` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BinDb().create({
  account_id: 'example_account_id',
  content_type: 'example_content_type',
  md5: 'example_md5',
  sha1: 'example_sha1',
  sha256: 'example_sha256',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.BinDb().load({ account_id: 'account_id', hash: 'hash' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BinDbEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BrandProtectionEntity

```ts
const brand_protection = client.BrandProtection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `body` | `string` | Yes |  |
| `brand` | `string` | Yes |  |
| `category` | `string` | Yes |  |
| `content_type` | `string` | No | MIME type of the image (only present when download=true) |
| `createNotice` | `boolean` | No |  |
| `createdAt` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `dismissed` | `boolean` | Yes | Whether the match is dismissed. |
| `domain` | `string` | Yes |  |
| `domain_id` | `number` | Yes |  |
| `domains` | `any[]` | Yes |  |
| `errors` | `any[]` | Yes |  |
| `fields` | `Record<string, any>` | Yes |  |
| `first_seen` | `string` | Yes |  |
| `format` | `string` | No |  |
| `id` | `number` | Yes |  |
| `image_data` | `string` | Yes | Base64 encoded image data. |
| `letterText` | `string` | Yes |  |
| `letterType` | `string` | Yes |  |
| `matchId` | `number` | Yes |  |
| `matchType` | `string` | Yes |  |
| `match_details` | `any[]` | No | Per-match detail objects with query metadata and individual dismissed state. |
| `match_ids` | `any[]` | No |  |
| `matched_at` | `string` | Yes |  |
| `matches` | `any[]` | Yes |  |
| `max_time` | `string` | No |  |
| `message` | `string` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `min_time` | `string` | No |  |
| `name` | `string` | Yes |  |
| `noticeParams` | `Record<string, any>` | Yes |  |
| `notices` | `any[]` | Yes |  |
| `public_scans` | `Record<string, any>` | Yes |  |
| `queryId` | `number` | Yes |  |
| `queryIds` | `any[]` | No |  |
| `query_id` | `number` | Yes |  |
| `r2_path` | `string` | Yes |  |
| `registrar` | `string` | Yes |  |
| `result` | `any` | Yes |  |
| `result_info` | `Record<string, any>` | Yes | Present on paginated list responses when page or per_page is supplied. |
| `scan` | `boolean` | No |  |
| `scan_matches` | `boolean` | No |  |
| `scan_status` | `string` | Yes |  |
| `scan_submission_id` | `number` | Yes |  |
| `score_threshold` | `number` | No | Minimum similarity score threshold for matches (0-1, default: 0) |
| `search_lookback` | `boolean` | No | If true, search recent domain lookback entries for matches |
| `similarity_score` | `number` | Yes |  |
| `similarity_threshold` | `number` | Yes | Minimum similarity score (0-1) required for visual matches |
| `source` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `string_matches` | `any[]` | Yes |  |
| `success` | `boolean` | Yes |  |
| `tag` | `string` | Yes | Unique identifier for the logo query |
| `takedownNoticeId` | `number` | Yes |  |
| `templateId` | `string` | Yes |  |
| `top_k` | `number` | No | Number of closest matches to return (1-100, default: 10) |
| `total_analyzed` | `number` | Yes |  |
| `total_matches` | `number` | Yes |  |
| `truncated` | `boolean` | Yes |  |
| `updatedAt` | `string` | Yes |  |
| `uploaded_at` | `string` | Yes |  |
| `url_scan_id` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `action` | - | - | - | - | - |
| `body` | - | - | - | Yes | - |
| `brand` | - | - | - | - | - |
| `category` | - | - | - | Yes | - |
| `content_type` | - | - | - | - | - |
| `createNotice` | - | - | - | - | - |
| `createdAt` | - | - | - | - | - |
| `description` | - | - | Yes | Yes | - |
| `dismissed` | - | Yes | - | - | - |
| `domain` | - | - | - | Yes | - |
| `domain_id` | - | - | - | - | - |
| `domains` | - | - | - | - | - |
| `errors` | - | - | - | - | - |
| `fields` | - | - | - | - | - |
| `first_seen` | - | - | - | - | - |
| `format` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `image_data` | - | Yes | - | - | - |
| `letterText` | - | - | - | - | - |
| `letterType` | - | - | - | - | - |
| `matchId` | - | - | - | Yes | - |
| `matchType` | - | - | - | Yes | - |
| `match_details` | - | - | - | - | - |
| `match_ids` | - | - | - | - | - |
| `matched_at` | - | - | - | - | - |
| `matches` | - | - | Yes | - | - |
| `max_time` | - | - | - | - | - |
| `message` | - | - | - | - | - |
| `messages` | - | - | - | - | - |
| `min_time` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `noticeParams` | - | - | - | - | - |
| `notices` | - | - | - | - | - |
| `public_scans` | - | - | - | - | - |
| `queryId` | - | - | Yes | Yes | - |
| `queryIds` | - | - | - | - | - |
| `query_id` | - | - | Yes | - | - |
| `r2_path` | - | - | - | - | - |
| `registrar` | - | - | - | - | - |
| `result` | - | - | - | - | - |
| `result_info` | - | - | - | - | - |
| `scan` | - | - | - | - | - |
| `scan_matches` | - | - | - | - | - |
| `scan_status` | - | - | - | - | - |
| `scan_submission_id` | - | - | - | - | - |
| `score_threshold` | - | - | - | - | - |
| `search_lookback` | - | - | - | - | - |
| `similarity_score` | - | - | - | - | - |
| `similarity_threshold` | - | - | - | - | - |
| `source` | - | - | - | - | - |
| `status` | - | - | - | Yes | - |
| `string_matches` | - | - | - | - | - |
| `success` | - | - | - | - | - |
| `tag` | - | - | - | - | - |
| `takedownNoticeId` | - | - | - | - | - |
| `templateId` | - | - | - | - | - |
| `top_k` | - | - | - | - | - |
| `total_analyzed` | - | - | - | - | - |
| `total_matches` | - | - | - | - | - |
| `truncated` | - | - | - | - | - |
| `updatedAt` | - | - | - | - | - |
| `uploaded_at` | - | - | - | - | - |
| `url_scan_id` | - | - | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `takedown_notice` | `/accounts/{account_id}/cloudforce-one/v2/brand-protection/takedown-notices` | `client.BrandProtection().create({ $action: 'takedown_notice', ... })` |
| `takedown_notice` | `/accounts/{account_id}/cloudforce-one/v2/brand-protection/takedown-notices` | `client.BrandProtection().list({ $action: 'takedown_notice', ... })` |
| `total_query` | `/accounts/{account_id}/cloudforce-one/v2/brand-protection/total-queries` | `client.BrandProtection().list({ $action: 'total_query', ... })` |

An action returns that action's OWN response, which is not necessarily a
BrandProtection record — check the API definition for its shape.

```ts
const result = await client.BrandProtection().create({
  $action: 'takedown_notice',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BrandProtection().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.BrandProtection().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.BrandProtection().load({ account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.BrandProtection().remove({ account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.BrandProtection().update({
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BrandProtectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CategoryEntity

```ts
const category = client.Category()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `killChain` | `number` | Yes |  |
| `mitreAttack` | `any[]` | No |  |
| `mitreCapec` | `any[]` | No |  |
| `name` | `string` | Yes |  |
| `shortname` | `string` | No |  |
| `uuid` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `id` | - | - | - | - | - |
| `killChain` | - | - | Yes | Yes | - |
| `mitreAttack` | - | - | - | - | - |
| `mitreCapec` | - | - | - | - | - |
| `name` | - | - | Yes | Yes | - |
| `shortname` | - | - | - | - | - |
| `uuid` | - | - | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `create` | `/accounts/{account_id}/cloudforce-one/events/categories/create` | `client.Category().create({ $action: 'create', ... })` |
| `catalog` | `/accounts/{account_id}/cloudforce-one/events/categories/catalog` | `client.Category().list({ $action: 'catalog', ... })` |

An action returns that action's OWN response, which is not necessarily a
Category record — check the API definition for its shape.

```ts
const result = await client.Category().create({
  $action: 'create',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Category().create({
  account_id: 'example_account_id',
  killChain: 1,
  name: 'example_name',
  uuid: 'example_uuid',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Category().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Category().load({ id: 'category_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Category().remove({ id: 'category_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Category().update({
  id: 'category_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CategoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CloudforceOneAccountExemptionEntity

```ts
const cloudforce_one_account_exemption = client.CloudforceOneAccountExemption()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `namespace` | `any[]` | Yes |  |
| `tag_match` | `any[]` | Yes |  |
| `worker_name` | `any[]` | Yes |  |

### Field Usage by Operation

| Field | list | create | update | remove |
| --- | --- | --- | --- | --- |
| `namespace` | - | Yes | Yes | - |
| `tag_match` | - | Yes | Yes | - |
| `worker_name` | - | Yes | Yes | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CloudforceOneAccountExemption().create({
  account_id: 'example_account_id',
  namespace: [],
  tag_match: [],
  worker_name: [],
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CloudforceOneAccountExemption().list({ account_id: "example" })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.CloudforceOneAccountExemption().remove({ account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CloudforceOneAccountExemption().update({
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CloudforceOneAccountExemptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CloudforceOneDeleteAllEntity

```ts
const cloudforce_one_delete_all = client.CloudforceOneDeleteAll()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.CloudforceOneDeleteAll().remove({ account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CloudforceOneDeleteAllEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CloudforceOneEditApprovalEntity

```ts
const cloudforce_one_edit_approval = client.CloudforceOneEditApproval()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `condition` | `Record<string, any>` | Yes | Nested condition groups support up to 10 levels of depth. |
| `description` | `string` | No |  |
| `enabled` | `boolean` | No |  |
| `id` | `string` | No |  |
| `meta` | `any[]` | No |  |
| `name` | `string` | Yes |  |
| `status` | `string` | No | Disposition for matching email. |
| `strings` | `any[]` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `resubmit` | `/accounts/{account_id}/cloudforce-one/rules/structured/approvals/{id}/resubmit` | `client.CloudforceOneEditApproval().create({ $action: 'resubmit', ... })` |

An action returns that action's OWN response, which is not necessarily a
CloudforceOneEditApproval record — check the API definition for its shape.

```ts
const result = await client.CloudforceOneEditApproval().create({
  $action: 'resubmit',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CloudforceOneEditApproval().create({
  account_id: 'example_account_id',
  approval_id: 'example_approval_id',
  condition: {},
  name: 'example_name',
})
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CloudforceOneEditApproval().update({
  account_id: 'account_id',
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CloudforceOneEditApprovalEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CloudforceOneEmailRuleValidationEntity

```ts
const cloudforce_one_email_rule_validation = client.CloudforceOneEmailRuleValidation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `compiled_yara` | `string` | No |  |
| `condition` | `Record<string, any>` | Yes | Nested condition groups support up to 10 levels of depth. |
| `description` | `string` | No |  |
| `enabled` | `boolean` | No |  |
| `error` | `string` | No |  |
| `existing_rule_id` | `string` | No | Existing rule ID to exclude from duplicate-name checks when validating an update. |
| `meta` | `any[]` | No |  |
| `name` | `string` | Yes |  |
| `status` | `string` | No | Disposition for matching email. |
| `strings` | `any[]` | No |  |
| `valid` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CloudforceOneEmailRuleValidation().create({
  account_id: 'example_account_id',
  condition: {},
  name: 'example_name',
  valid: true,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CloudforceOneEmailRuleValidationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CloudforceOneEmailRulesListEntity

```ts
const cloudforce_one_email_rules_list = client.CloudforceOneEmailRulesList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | No |  |
| `created_at` | `number` | Yes |  |
| `created_by` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `enabled` | `boolean` | Yes | Whether this rule is active for dice consumers. |
| `id` | `string` | Yes |  |
| `is_public` | `boolean` | Yes | Whether this rule is visible to other internal accounts. |
| `meta` | `any[]` | No | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` | Yes |  |
| `namespaces` | `any[]` | Yes |  |
| `path` | `string` | Yes |  |
| `pending_approval_id` | `number` | Yes | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `Record<string, any>` | Yes | Proposed update or deletion awaiting approval. |
| `structured_source` | `string` | No | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `number` | Yes |  |
| `updated_by` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CloudforceOneEmailRulesList().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CloudforceOneEmailRulesListEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CloudforceOneRequestsApiResponseCommonEntity

```ts
const cloudforce_one_requests_api_response_common = client.CloudforceOneRequestsApiResponseCommon()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.CloudforceOneRequestsApiResponseCommon().remove({ account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CloudforceOneRequestsApiResponseCommonEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CloudforceOneRuleEntity

```ts
const cloudforce_one_rule = client.CloudforceOneRule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `any[]` | No |  |
| `commit_message` | `string` | No | Human-readable justification for this change. |
| `content` | `string` | Yes |  |
| `description` | `string` | No | Human-readable description of the rule. |
| `enabled` | `boolean` | No | Whether this rule is active for dice consumers. |
| `is_public` | `boolean` | No | Whether this rule is visible to other internal accounts. |
| `meta` | `any[]` | No | Adds YARA meta entries to the rule's meta block and stores them in rule_meta alongside content metadata. |
| `name` | `string` | Yes |  |
| `namespaces` | `any[]` | No | Optional WfP deployment tags (customer rules only). |
| `path` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CloudforceOneRule().create({
  account_id: 'example_account_id',
  content: 'example_content',
  name: 'example_name',
  path: 'example_path',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CloudforceOneRuleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CloudforceOneRuleApprovalDetailEntity

```ts
const cloudforce_one_rule_approval_detail = client.CloudforceOneRuleApprovalDetail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `audit_log_id` | `number` | Yes |  |
| `can_review` | `boolean` | Yes | Whether the authenticated user may approve or reject this pending change. |
| `cancelled_at` | `number` | Yes | Time at which the requester cancelled the approval. |
| `cancelled_by` | `string` | Yes | Requester who cancelled the pending approval. |
| `change_description` | `string` | Yes |  |
| `change_type` | `string` | Yes |  |
| `commit_message` | `string` | Yes | The requester supplies this human-readable justification with the change. |
| `compiler_warnings` | `any[]` | No |  |
| `current_rule` | `any` | Yes |  |
| `id` | `number` | Yes |  |
| `proposed_changes` | `any` | Yes | Contains structured proposed rule changes, or null for unresolved persisted data. |
| `rejection_reason` | `string` | Yes | The reviewer may supply a reason when rejecting the change. |
| `requested_at` | `number` | Yes |  |
| `requested_by` | `string` | Yes |  |
| `reviewed_at` | `number` | Yes |  |
| `reviewer_scope` | `string` | Yes | Review policy: general Nomos approvers for default; general approvers or Phishguard for email. |
| `revision_number` | `number` | Yes | Revision number within this approval request chain. |
| `rule_id` | `string` | Yes |  |
| `rule_name` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `superseded_by_approval_id` | `number` | Yes | Newer approval revision that replaced this approval. |
| `supersedes_approval_id` | `number` | Yes | This approval replaces the referenced approval revision. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `resubmit` | `/accounts/{account_id}/cloudforce-one/rules/approvals/{id}/resubmit` | `client.CloudforceOneRuleApprovalDetail().create({ $action: 'resubmit', ... })` |

An action returns that action's OWN response, which is not necessarily a
CloudforceOneRuleApprovalDetail record — check the API definition for its shape.

```ts
const result = await client.CloudforceOneRuleApprovalDetail().create({
  $action: 'resubmit',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CloudforceOneRuleApprovalDetail().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CloudforceOneRuleApprovalDetail().load({ id: 'cloudforce_one_rule_approval_detail_id', account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CloudforceOneRuleApprovalDetailEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CloudforceOneRuleApprovalsListEntity

```ts
const cloudforce_one_rule_approvals_list = client.CloudforceOneRuleApprovalsList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `audit_log_id` | `number` | Yes |  |
| `can_review` | `boolean` | Yes | Whether the authenticated user may approve or reject this pending change. |
| `cancelled_at` | `number` | Yes | Time at which the requester cancelled the approval. |
| `cancelled_by` | `string` | Yes | Requester who cancelled the pending approval. |
| `change_description` | `string` | Yes |  |
| `change_type` | `string` | Yes |  |
| `commit_message` | `string` | Yes | The requester supplies this human-readable justification with the change. |
| `id` | `number` | Yes |  |
| `proposed_changes` | `any` | Yes | Contains structured proposed rule changes, or null for unresolved persisted data. |
| `rejection_reason` | `string` | Yes | The reviewer may supply a reason when rejecting the change. |
| `requested_at` | `number` | Yes |  |
| `requested_by` | `string` | Yes |  |
| `reviewed_at` | `number` | Yes |  |
| `reviewer_scope` | `string` | Yes | Review policy: general Nomos approvers for default; general approvers or Phishguard for email. |
| `revision_number` | `number` | Yes | Revision number within this approval request chain. |
| `rule_id` | `string` | Yes |  |
| `rule_name` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `superseded_by_approval_id` | `number` | Yes | Newer approval revision that replaced this approval. |
| `supersedes_approval_id` | `number` | Yes | This approval replaces the referenced approval revision. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CloudforceOneRuleApprovalsList().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CloudforceOneRuleApprovalsListEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CloudforceOneRulePreviewEntity

```ts
const cloudforce_one_rule_preview = client.CloudforceOneRulePreview()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit_message` | `string` | No | Human-readable justification for this change. |
| `condition` | `Record<string, any>` | Yes | Nested condition groups support up to 10 levels of depth. |
| `content` | `string` | No |  |
| `created_at` | `number` | Yes |  |
| `created_by` | `string` | Yes |  |
| `description` | `string` | Yes | Human-readable description of the rule. |
| `enabled` | `boolean` | Yes | Whether this rule is active for dice consumers. |
| `id` | `string` | Yes |  |
| `is_public` | `boolean` | Yes | Whether this rule is visible to other internal accounts. |
| `meta` | `any[]` | No | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` | Yes |  |
| `namespaces` | `any[]` | Yes |  |
| `path` | `string` | Yes | Path change goes through approval workflow. |
| `pending_approval_id` | `number` | Yes | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `Record<string, any>` | Yes | Proposed update or deletion awaiting approval. |
| `status` | `string` | No | Disposition for matching email. |
| `strings` | `any[]` | No |  |
| `structured_source` | `string` | No | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `number` | Yes |  |
| `updated_by` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `commit_message` | - | - | - |
| `condition` | - | - | - |
| `content` | - | - | - |
| `created_at` | - | - | - |
| `created_by` | - | - | - |
| `description` | - | Yes | Yes |
| `enabled` | - | Yes | Yes |
| `id` | - | - | - |
| `is_public` | - | - | Yes |
| `meta` | - | - | - |
| `name` | - | - | Yes |
| `namespaces` | - | - | Yes |
| `path` | - | - | Yes |
| `pending_approval_id` | - | - | - |
| `pending_change` | - | - | - |
| `status` | - | - | - |
| `strings` | - | - | - |
| `structured_source` | - | - | - |
| `updated_at` | - | - | - |
| `updated_by` | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `test` | `/accounts/{account_id}/cloudforce-one/rules/structured/{id}/test` | `client.CloudforceOneRulePreview().create({ $action: 'test', ... })` |

An action returns that action's OWN response, which is not necessarily a
CloudforceOneRulePreview record — check the API definition for its shape.

```ts
const result = await client.CloudforceOneRulePreview().create({
  $action: 'test',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CloudforceOneRulePreview().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CloudforceOneRulePreview().load({ id: 'cloudforce_one_rule_preview_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CloudforceOneRulePreview().update({
  id: 'cloudforce_one_rule_preview_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CloudforceOneRulePreviewEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CloudforceOneRulesPreviewListEntity

```ts
const cloudforce_one_rules_preview_list = client.CloudforceOneRulesPreviewList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | No |  |
| `created_at` | `number` | Yes |  |
| `created_by` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `enabled` | `boolean` | Yes | Whether this rule is active for dice consumers. |
| `id` | `string` | Yes |  |
| `is_public` | `boolean` | Yes | Whether this rule is visible to other internal accounts. |
| `meta` | `any[]` | No | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` | Yes |  |
| `namespaces` | `any[]` | Yes |  |
| `path` | `string` | Yes |  |
| `pending_approval_id` | `number` | Yes | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `Record<string, any>` | Yes | Proposed update or deletion awaiting approval. |
| `structured_source` | `string` | No | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `number` | Yes |  |
| `updated_by` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CloudforceOneRulesPreviewList().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CloudforceOneRulesPreviewListEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CloudforceOneRulesSearchEntity

```ts
const cloudforce_one_rules_search = client.CloudforceOneRulesSearch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | No |  |
| `created_at` | `number` | Yes |  |
| `created_by` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `enabled` | `boolean` | Yes | Whether this rule is active for dice consumers. |
| `id` | `string` | Yes |  |
| `is_public` | `boolean` | Yes | Whether this rule is visible to other internal accounts. |
| `meta` | `any[]` | No | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` | Yes |  |
| `namespaces` | `any[]` | Yes |  |
| `path` | `string` | Yes |  |
| `pending_approval_id` | `number` | Yes | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `Record<string, any>` | Yes | Proposed update or deletion awaiting approval. |
| `score` | `number` | No | Relevance score in [0,1]. |
| `scoring_details` | `Record<string, any>` | No | AI Search hybrid retrieval returns this per-component scoring breakdown. |
| `structured_source` | `string` | No | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `number` | Yes |  |
| `updated_by` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CloudforceOneRulesSearch().list({ account_id: "example", query: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CloudforceOneRulesSearchEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CloudforceOneStatEntity

```ts
const cloudforce_one_stat = client.CloudforceOneStat()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CloudforceOneStat().load({ account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CloudforceOneStatEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CloudforceOneSuccessEntity

```ts
const cloudforce_one_success = client.CloudforceOneSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CloudforceOneSuccess().create({
  account_id: 'example_account_id',
  approval_id: 'example_approval_id',
  success: true,
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.CloudforceOneSuccess().remove({ account_id: 'account_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CloudforceOneSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CloudforceOneTreeNodeEntity

```ts
const cloudforce_one_tree_node = client.CloudforceOneTreeNode()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `children` | `any[]` | Yes |  |
| `count` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `path` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CloudforceOneTreeNode().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CloudforceOneTreeNodeEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CloudforceOneValidationEntity

```ts
const cloudforce_one_validation = client.CloudforceOneValidation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | Yes |  |
| `error` | `string` | No |  |
| `excludeRuleId` | `string` | No |  |
| `name` | `string` | Yes |  |
| `namespaces` | `any[]` | No |  |
| `path` | `string` | No |  |
| `valid` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CloudforceOneValidation().create({
  account_id: 'example_account_id',
  content: 'example_content',
  name: 'example_name',
  valid: true,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CloudforceOneValidationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CollectionEntity

```ts
const collection = client.Collection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `columns` | `any[]` | Yes |  |
| `created_at` | `string` | Yes |  |
| `created_by` | `string` | Yes |  |
| `data` | `Record<string, any>` | Yes |  |
| `id` | `string` | Yes |  |
| `item_count` | `number` | Yes |  |
| `metadata` | `Record<string, any>` | No |  |
| `name` | `string` | Yes | New column name (must be unique) |
| `position` | `number` | Yes | Column display order |
| `required` | `boolean` | Yes | Whether column is required |
| `status` | `string` | Yes |  |
| `type` | `string` | Yes | Column type: text, number, boolean, or date |
| `updated_at` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `columns` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `created_by` | - | - | - | - | - |
| `data` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `item_count` | - | - | - | - | - |
| `metadata` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `position` | - | - | - | Yes | - |
| `required` | - | - | - | Yes | - |
| `status` | - | - | - | - | - |
| `type` | - | - | - | Yes | - |
| `updated_at` | - | - | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `column` | `/accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}/columns` | `client.Collection().create({ $action: 'column', ... })` |
| `search` | `/accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}/search` | `client.Collection().create({ $action: 'search', ... })` |
| `item` | `/accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}/items` | `client.Collection().list({ $action: 'item', ... })` |
| `export` | `/accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}/export` | `client.Collection().load({ $action: 'export', ... })` |

An action returns that action's OWN response, which is not necessarily a
Collection record — check the API definition for its shape.

```ts
const result = await client.Collection().create({
  $action: 'column',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Collection().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Collection().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Collection().load({ id: 'collection_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Collection().remove({ id: 'collection_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Collection().update({
  id: 'collection_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CollectionsItemEntity

```ts
const collections_item = client.CollectionsItem()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CollectionsItem().create({
  account_id: 'example_account_id',
  collection_id: 'example_collection_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CollectionsItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CountryEntity

```ts
const country = client.Country()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | Yes |  |
| `success` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Country().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CountryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DashboardAssetEntity

```ts
const dashboard_asset = client.DashboardAsset()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assets` | `Record<string, any>` | Yes |  |
| `contentType` | `Record<string, any>` | Yes |  |
| `count` | `Record<string, any>` | Yes |  |
| `downloadable` | `Record<string, any>` | Yes |  |
| `expiresAt` | `Record<string, any>` | Yes |  |
| `fileName` | `Record<string, any>` | Yes |  |
| `fileSize` | `Record<string, any>` | Yes |  |
| `id` | `Record<string, any>` | Yes |  |
| `is_cloudflare_team` | `Record<string, any>` | Yes |  |
| `metadata` | `Record<string, any>` | Yes |  |
| `origin` | `Record<string, any>` | Yes |  |
| `state` | `Record<string, any>` | Yes |  |
| `tlp` | `Record<string, any>` | Yes |  |
| `uploadedAt` | `Record<string, any>` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DashboardAsset().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DashboardAsset().load({ account_id: 'account_id', project_type: 'project_type', request_id: 'request_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DashboardAssetEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DashboardUserEntity

```ts
const dashboard_user = client.DashboardUser()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `string` | No | User display name |
| `id` | `string` | Yes | Unique user ID |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DashboardUser().load({ account_id: 'account_id', request_id: 'request_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DashboardUserEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DatasetEntity

```ts
const dataset = client.Dataset()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deletedAt` | `string` | No |  |
| `id` | `string` | No |  |
| `indicatorWriteMode` | `string` | Yes | Effective indicator mutation capability after account/dataset authorization and dataset storage capability are applied. |
| `isAnalytics` | `boolean` | Yes |  |
| `isPublic` | `boolean` | Yes | If true, then anyone can search the dataset. |
| `name` | `string` | Yes | Used to describe the dataset within the account context. |
| `uuid` | `string` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `copy` | `/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/copy` | `client.Dataset().create({ $action: 'copy', ... })` |
| `create` | `/accounts/{account_id}/cloudforce-one/events/dataset/create` | `client.Dataset().create({ $action: 'create', ... })` |
| `move` | `/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/move` | `client.Dataset().create({ $action: 'move', ... })` |
| `populate` | `/accounts/{account_id}/cloudforce-one/events/datasets/populate` | `client.Dataset().create({ $action: 'populate', ... })` |

An action returns that action's OWN response, which is not necessarily a
Dataset record — check the API definition for its shape.

```ts
const result = await client.Dataset().create({
  $action: 'copy',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Dataset().create({
  account_id: 'example_account_id',
  id: 'example_id',
  indicatorWriteMode: 'example_indicatorWriteMode',
  isAnalytics: true,
  isPublic: true,
  name: 'example_name',
  uuid: 'example_uuid',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Dataset().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Dataset().load({ id: 'dataset_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Dataset().remove({ id: 'dataset_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Dataset().update({
  id: 'dataset_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DatasetEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EventEntity

```ts
const event = client.Event()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountId` | `number` | Yes |  |
| `account_id` | `number` | Yes | Account ID |
| `alert_enabled` | `boolean` | Yes | Whether alerts are enabled |
| `alert_rollup_enabled` | `boolean` | Yes | Whether alert rollup is enabled |
| `attacker` | `string` | Yes |  |
| `attackerCountry` | `string` | Yes |  |
| `attackerCountryAlpha3` | `string` | Yes |  |
| `category` | `string` | Yes |  |
| `childIds` | `any[]` | No | Array of child event UUIDs that were processed |
| `created` | `string` | Yes |  |
| `createdAt` | `string` | No |  |
| `createdEventsCount` | `number` | Yes | Number of events created |
| `createdIndicatorsCount` | `number` | Yes | Number of indicators created |
| `createdRelationshipsCount` | `number` | Yes | Number of relationships created |
| `created_at` | `string` | Yes | Creation timestamp |
| `cursor` | `string` | No | Cursor for pagination. |
| `custom_threat_feed_id` | `number` | No | Intel Indicator Feed ID (numeric) |
| `data` | `string` | Yes |  |
| `datasetId` | `string` | Yes | Dataset UUIDs to query, or one standalone scope value: 'all'/'*' for the legacy all-datasets behavior, 'analytics' for isAnalytics=true datasets, or 'operational' for isAnalytics=false datasets. |
| `date` | `string` | Yes |  |
| `errorCount` | `number` | Yes | Number of errors encountered |
| `errors` | `any[]` | No | Array of error details |
| `event` | `string` | Yes |  |
| `eventIds` | `any[]` | Yes | List of event UUIDs to update (1-100) |
| `failedCount` | `number` | Yes |  |
| `failures` | `any[]` | No | List of events that failed to update with error messages |
| `hasChildren` | `boolean` | Yes |  |
| `id` | `number` | Yes | Unique identifier for the saved query |
| `includeCreatedEvents` | `boolean` | No | When true, response includes array of created event UUIDs and shard IDs. |
| `indicator` | `string` | Yes |  |
| `indicatorType` | `string` | Yes |  |
| `indicatorTypeId` | `number` | Yes |  |
| `insight` | `string` | No |  |
| `killChain` | `number` | Yes |  |
| `message` | `string` | Yes | Human-readable message describing the operation result |
| `mitreAttack` | `any[]` | Yes |  |
| `mitreCapec` | `any[]` | Yes |  |
| `name` | `string` | Yes | Name of the saved query |
| `numReferenced` | `number` | Yes |  |
| `numReferences` | `number` | Yes |  |
| `order` | `string` | No |  |
| `orderBy` | `string` | No |  |
| `page` | `number` | No |  |
| `pageSize` | `number` | No |  |
| `parentId` | `string` | Yes | UUID of the parent event that will be the source of the relationship |
| `query_json` | `string` | Yes | JSON string containing the query parameters |
| `raw` | `Record<string, any>` | No |  |
| `rawId` | `string` | Yes |  |
| `referenced` | `any[]` | Yes |  |
| `referencedIds` | `any[]` | Yes |  |
| `references` | `any[]` | Yes |  |
| `referencesIds` | `any[]` | Yes |  |
| `relationshipType` | `string` | Yes | Type of relationship to create between parent and child events |
| `relationships` | `any[]` | Yes | Array of successfully created relationship objects |
| `relationshipsCreated` | `number` | No | Number of relationships that were successfully created |
| `releasabilityId` | `string` | No |  |
| `rule_enabled` | `boolean` | Yes | Whether rule is enabled |
| `rule_list_id` | `string` | No | WAF rules list ID for blocking |
| `rule_scope` | `string` | No | Scope for the rule |
| `search` | `any[]` | No | Structured search as a JSON array of {field, op, value} objects. |
| `source` | `string` | Yes |  |
| `success` | `boolean` | Yes | Whether the relationship creation operation completed successfully |
| `tags` | `any[]` | Yes |  |
| `targetCountry` | `string` | Yes |  |
| `targetCountryAlpha3` | `string` | Yes |  |
| `targetIndustry` | `string` | Yes |  |
| `tlp` | `string` | Yes |  |
| `updatedCount` | `number` | Yes |  |
| `updated_at` | `string` | Yes | Last update timestamp |
| `updates` | `Record<string, any>` | Yes | Fields to update on all specified events. |
| `user_email` | `string` | Yes | Email of the user who created the query |
| `uuid` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `accountId` | - | - | - | - | - |
| `account_id` | - | - | - | - | - |
| `alert_enabled` | - | - | Yes | Yes | - |
| `alert_rollup_enabled` | - | - | Yes | Yes | - |
| `attacker` | - | - | Yes | Yes | - |
| `attackerCountry` | - | - | Yes | Yes | - |
| `attackerCountryAlpha3` | - | - | - | - | - |
| `category` | - | - | Yes | Yes | - |
| `childIds` | - | - | Yes | - | - |
| `created` | - | - | - | - | - |
| `createdAt` | - | - | - | - | - |
| `createdEventsCount` | - | - | - | - | - |
| `createdIndicatorsCount` | - | - | - | - | - |
| `createdRelationshipsCount` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `cursor` | - | - | - | - | - |
| `custom_threat_feed_id` | - | - | - | - | - |
| `data` | - | - | Yes | Yes | - |
| `datasetId` | - | - | Yes | - | - |
| `date` | - | - | Yes | Yes | - |
| `errorCount` | - | - | - | - | - |
| `errors` | - | - | - | - | - |
| `event` | - | - | Yes | Yes | - |
| `eventIds` | - | - | - | - | - |
| `failedCount` | - | - | - | - | - |
| `failures` | - | - | - | - | - |
| `hasChildren` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `includeCreatedEvents` | - | - | - | - | - |
| `indicator` | - | - | Yes | Yes | - |
| `indicatorType` | - | - | Yes | Yes | - |
| `indicatorTypeId` | - | - | - | - | - |
| `insight` | - | - | - | - | - |
| `killChain` | - | - | - | - | - |
| `message` | - | - | - | - | - |
| `mitreAttack` | - | - | - | - | - |
| `mitreCapec` | - | - | - | - | - |
| `name` | - | - | Yes | Yes | - |
| `numReferenced` | - | - | - | - | - |
| `numReferences` | - | - | - | - | - |
| `order` | - | - | - | - | - |
| `orderBy` | - | - | - | - | - |
| `page` | - | - | - | - | - |
| `pageSize` | - | - | - | - | - |
| `parentId` | - | - | - | - | - |
| `query_json` | - | - | Yes | Yes | - |
| `raw` | - | - | - | - | - |
| `rawId` | - | - | - | - | - |
| `referenced` | - | - | - | - | - |
| `referencedIds` | - | - | - | - | - |
| `references` | - | - | - | - | - |
| `referencesIds` | - | - | - | - | - |
| `relationshipType` | - | - | - | - | - |
| `relationships` | - | - | - | - | - |
| `relationshipsCreated` | - | - | - | - | - |
| `releasabilityId` | - | - | - | - | - |
| `rule_enabled` | - | - | Yes | Yes | - |
| `rule_list_id` | - | - | - | - | - |
| `rule_scope` | - | - | - | - | - |
| `search` | - | - | - | - | - |
| `source` | - | - | Yes | Yes | - |
| `success` | - | - | - | - | - |
| `tags` | - | - | - | - | - |
| `targetCountry` | - | - | Yes | Yes | - |
| `targetCountryAlpha3` | - | - | - | - | - |
| `targetIndustry` | - | - | Yes | Yes | - |
| `tlp` | - | - | Yes | Yes | - |
| `updatedCount` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |
| `updates` | - | - | - | - | - |
| `user_email` | - | - | - | - | - |
| `uuid` | - | - | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `create` | `/accounts/{account_id}/cloudforce-one/events/event_tag/{event_id}/create` | `client.Event().create({ $action: 'create', ... })` |
| `create` | `/accounts/{account_id}/cloudforce-one/events/relate/{event_id}/create` | `client.Event().create({ $action: 'create', ... })` |
| `create` | `/accounts/{account_id}/cloudforce-one/events/create` | `client.Event().create({ $action: 'create', ... })` |
| `graphql` | `/accounts/{account_id}/cloudforce-one/events/graphql` | `client.Event().create({ $action: 'graphql', ... })` |
| `graphql` | `/accounts/{account_id}/cloudforce-one/v2/events/graphql` | `client.Event().create({ $action: 'graphql', ... })` |
| `aggregate` | `/accounts/{account_id}/cloudforce-one/events/aggregate` | `client.Event().list({ $action: 'aggregate', ... })` |
| `graph` | `/accounts/{account_id}/cloudforce-one/events/graph` | `client.Event().list({ $action: 'graph', ... })` |
| `query` | `/accounts/{account_id}/cloudforce-one/events/queries` | `client.Event().list({ $action: 'query', ... })` |
| `relationship` | `/accounts/{account_id}/cloudforce-one/events/{event_id}/relationships` | `client.Event().list({ $action: 'relationship', ... })` |
| `raw` | `/accounts/{account_id}/cloudforce-one/events/datasets/{dataset_id}/events/{event_id}/raw` | `client.Event().load({ $action: 'raw', ... })` |
| `delete` | `/accounts/{account_id}/cloudforce-one/events/{dataset_id}/delete` | `client.Event().remove({ $action: 'delete', ... })` |

An action returns that action's OWN response, which is not necessarily a
Event record — check the API definition for its shape.

```ts
const result = await client.Event().create({
  $action: 'create',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Event().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Event().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Event().load({ id: 'event_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Event().remove({ account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Event().update({
  id: 'event_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EventEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GroupEntity

```ts
const group = client.Group()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `id` | `string` | No |  |
| `members` | `any[]` | Yes |  |
| `name` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |
| `uuid` | `string` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `member` | `/accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}/members` | `client.Group().create({ $action: 'member', ... })` |
| `member` | `/accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}/members` | `client.Group().list({ $action: 'member', ... })` |

An action returns that action's OWN response, which is not necessarily a
Group record — check the API definition for its shape.

```ts
const result = await client.Group().create({
  $action: 'member',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Group().create({
  account_id: 'example_account_id',
  createdAt: 'example_createdAt',
  description: 'example_description',
  members: [],
  name: 'example_name',
  updatedAt: 'example_updatedAt',
  uuid: 'example_uuid',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Group().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Group().load({ id: 'group_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Group().remove({ id: 'group_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Group().update({
  id: 'group_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GroupEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IndicatorEntity

```ts
const indicator = client.Indicator()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completeness` | `Record<string, any>` | Yes |  |
| `confidence` | `number` | No | Updated confidence. |
| `createdAt` | `string` | Yes |  |
| `datasetId` | `string` | No | The dataset ID this indicator belongs to. |
| `description` | `string` | No | Optional description for the indicator type |
| `durableObjectId` | `string` | Yes |  |
| `id` | `string` | No |  |
| `indicatorType` | `string` | Yes | The indicator type to create (e.g., 'DOMAIN', 'IP', 'URL', 'HASH', 'EMAIL') |
| `indicators` | `Record<string, any>` | Yes |  |
| `message` | `string` | Yes |  |
| `metadata` | `Record<string, any>` | No | Updated metadata. |
| `pagination` | `Record<string, any>` | Yes |  |
| `relatedEvents` | `any[]` | No |  |
| `sources` | `any[]` | Yes | RSS article sources from which this indicator was extracted. |
| `tags` | `any[]` | No |  |
| `tlp` | `string` | No | Traffic Light Protocol designation. |
| `type` | `string` | No | Updated relationship type. |
| `updatedAt` | `string` | Yes |  |
| `uuid` | `string` | Yes |  |
| `value` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `completeness` | - | - | - | - | - |
| `confidence` | - | - | - | - | - |
| `createdAt` | - | - | - | - | - |
| `datasetId` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `durableObjectId` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `indicatorType` | - | - | - | Yes | - |
| `indicators` | - | - | - | - | - |
| `message` | - | - | - | - | - |
| `metadata` | - | - | - | - | - |
| `pagination` | - | - | - | - | - |
| `relatedEvents` | - | - | - | - | - |
| `sources` | - | - | - | - | - |
| `tags` | - | - | - | - | - |
| `tlp` | - | - | - | - | - |
| `type` | - | - | - | - | - |
| `updatedAt` | - | - | - | - | - |
| `uuid` | - | - | - | - | - |
| `value` | - | - | - | Yes | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `bulk` | `/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/bulk` | `client.Indicator().create({ $action: 'bulk', ... })` |
| `create` | `/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/create` | `client.Indicator().create({ $action: 'create', ... })` |
| `relationship` | `/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/{indicator_id}/relationships` | `client.Indicator().create({ $action: 'relationship', ... })` |
| `aggregate` | `/accounts/{account_id}/cloudforce-one/events/indicators/aggregate` | `client.Indicator().list({ $action: 'aggregate', ... })` |
| `tag` | `/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/tags` | `client.Indicator().list({ $action: 'tag', ... })` |
| `relationship` | `/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/{indicator_id}/relationships` | `client.Indicator().load({ $action: 'relationship', ... })` |

An action returns that action's OWN response, which is not necessarily a
Indicator record — check the API definition for its shape.

```ts
const result = await client.Indicator().create({
  $action: 'bulk',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Indicator().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Indicator().list({ account_id: "example", dataset_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Indicator().load({ id: 'indicator_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Indicator().remove({ id: 'indicator_id', account_id: 'account_id', dataset_id: 'dataset_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Indicator().update({
  id: 'indicator_id',
  account_id: 'account_id',
  dataset_id: 'dataset_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IndicatorEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IndicatorTypeEntity

```ts
const indicator_type = client.IndicatorType()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.IndicatorType().load({ account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IndicatorTypeEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PermissionEntity

```ts
const permission = client.Permission()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes |  |
| `id` | `string` | No |  |
| `message` | `string` | No |  |
| `resourceId` | `string` | No | The resource ID this permission applies to account_id or group_id |
| `resourceType` | `string` | Yes |  |
| `role` | `string` | Yes |  |
| `subjectId` | `string` | Yes |  |
| `subjectType` | `string` | Yes |  |
| `success` | `boolean` | No |  |
| `updatedAt` | `string` | Yes |  |
| `uuid` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Permission().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Permission().list({ account_id: "example", dataset_id: "example" })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Permission().remove({ account_id: 'account_id', dataset_id: 'dataset_id', id: 'id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Permission().update({
  account_id: 'account_id',
  dataset_id: 'dataset_id',
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PermissionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PriorityEntity

```ts
const priority = client.Priority()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `labels` | `any[]` | Yes | List of labels. |
| `messages` | `any[]` | Yes |  |
| `page` | `number` | Yes | Page number of results. |
| `per_page` | `number` | Yes | Number of results per page. |
| `priority` | `number` | Yes | Priority. |
| `requirement` | `string` | Yes | Requirement. |
| `result` | `any` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `tlp` | `string` | Yes | The CISA defined Traffic Light Protocol (TLP). |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Priority().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Priority().load({ id: 'priority_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Priority().update({
  id: 'priority_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PriorityEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PriorityIntelligenceEntity

```ts
const priority_intelligence = client.PriorityIntelligence()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `labels` | `any[]` | No |  |
| `priority` | `number` | No |  |
| `requirement` | `string` | Yes |  |
| `tlp` | `string` | No |  |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `id` | - | - | - | - |
| `labels` | - | - | - | - |
| `priority` | - | - | - | - |
| `requirement` | - | - | Yes | - |
| `tlp` | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PriorityIntelligence().create({
  account_id: 'example_account_id',
  requirement: 'example_requirement',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PriorityIntelligence().load({ id: 'priority_intelligence_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.PriorityIntelligence().remove({ id: 'priority_intelligence_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.PriorityIntelligence().update({
  id: 'priority_intelligence_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PriorityIntelligenceEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PriorityIntelligenceRequirementEntity

```ts
const priority_intelligence_requirement = client.PriorityIntelligenceRequirement()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `as_of` | `string` | No |  |
| `backtest_days` | `number` | No |  |
| `candidate_limit` | `number` | No |  |
| `dataset_ids` | `any[]` | No |  |
| `dimension` | `string` | Yes |  |
| `emerging_min_current_count` | `number` | No |  |
| `enabled` | `boolean` | No |  |
| `established_min_absolute_delta` | `number` | No |  |
| `established_min_prior_count` | `number` | No |  |
| `established_min_relative_delta` | `number` | No |  |
| `value` | `string` | Yes |  |
| `window_days` | `number` | No |  |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `as_of` | - | - | - | - |
| `backtest_days` | - | - | - | - |
| `candidate_limit` | - | - | - | - |
| `dataset_ids` | - | - | - | - |
| `dimension` | - | - | - | - |
| `emerging_min_current_count` | - | - | - | - |
| `enabled` | - | - | - | - |
| `established_min_absolute_delta` | - | - | - | - |
| `established_min_prior_count` | - | - | - | - |
| `established_min_relative_delta` | - | - | - | - |
| `value` | - | - | Yes | - |
| `window_days` | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PriorityIntelligenceRequirement().create({
  account_id: 'example_account_id',
  dimension: 'example_dimension',
  value: 'example_value',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PriorityIntelligenceRequirement().load({ account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.PriorityIntelligenceRequirement().remove({ account_id: 'account_id', interest_id: 'interest_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.PriorityIntelligenceRequirement().update({
  account_id: 'account_id',
  interest_id: 'interest_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PriorityIntelligenceRequirementEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PriorityIntelligenceRequirementsPirEntity

```ts
const priority_intelligence_requirements__pir = client.PriorityIntelligenceRequirementsPir()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `labels` | `any[]` | Yes | List of labels. |
| `messages` | `any[]` | Yes |  |
| `priority` | `number` | Yes | Priority. |
| `requirement` | `string` | Yes | Requirement. |
| `result` | `any` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `tlp` | `string` | Yes | The CISA defined Traffic Light Protocol (TLP). |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PriorityIntelligenceRequirementsPir().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PriorityIntelligenceRequirementsPir().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PriorityIntelligenceRequirementsPirEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PublicCredentialMonitorEntity

```ts
const public_credential_monitor = client.PublicCredentialMonitor()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `domain` | `string` | Yes | Domain to monitor (e.g. |
| `id` | `number` | Yes |  |
| `matched_at` | `string` | Yes |  |
| `username` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PublicCredentialMonitor().create({
  account_id: 'example_account_id',
  created_at: 'example_created_at',
  domain: 'example_domain',
  id: 1,
  matched_at: 'example_matched_at',
  username: 'example_username',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PublicCredentialMonitor().list({ account_id: "example" })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.PublicCredentialMonitor().remove({ account_id: 'account_id', id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PublicCredentialMonitorEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RequestEntity

```ts
const request = client.Request()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed_after` | `any` | No | Retrieve requests completed after this time. |
| `completed_before` | `any` | No | Retrieve requests completed before this time. |
| `content` | `string` | No | Request content. |
| `created_after` | `any` | No | Retrieve requests created after this time. |
| `created_before` | `any` | No | Retrieve requests created before this time. |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `any[]` | Yes |  |
| `page` | `number` | Yes | Page number of results. |
| `per_page` | `number` | Yes | Number of results per page. |
| `priority` | `string` | No | Priority for analyzing the request. |
| `request_type` | `string` | No | Requested information from request. |
| `result` | `Record<string, any>` | Yes |  |
| `sort_by` | `string` | No | Field to sort results by. |
| `sort_order` | `string` | No | Sort order (asc or desc). |
| `status` | `string` | No | Request Status. |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `summary` | `string` | No | Brief description of the request. |
| `tlp` | `string` | No | The CISA defined Traffic Light Protocol (TLP). |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Request().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  page: 1,
  per_page: 1,
  result: {},
  success: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Request().load({ id: 'request_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Request().update({
  id: 'request_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RequestEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RequestForInformationRfiEntity

```ts
const request_for_information__rfi = client.RequestForInformationRfi()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | No | Content of message. |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `any[]` | Yes |  |
| `priority` | `string` | No | Priority for analyzing the request. |
| `request_type` | `string` | No | Requested information from request. |
| `result` | `any[]` | No |  |
| `source` | `string` | No | Asset file to upload. |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `summary` | `string` | No | Brief description of the request. |
| `tlp` | `string` | No | The CISA defined Traffic Light Protocol (TLP). |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `asset` | `/accounts/{account_id}/cloudforce-one/requests/{request_id}/asset` | `client.RequestForInformationRfi().create({ $action: 'asset', ... })` |
| `message` | `/accounts/{account_id}/cloudforce-one/requests/{request_id}/message` | `client.RequestForInformationRfi().create({ $action: 'message', ... })` |

An action returns that action's OWN response, which is not necessarily a
RequestForInformationRfi record — check the API definition for its shape.

```ts
const result = await client.RequestForInformationRfi().create({
  $action: 'asset',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RequestForInformationRfi().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RequestForInformationRfi().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RequestForInformationRfi().load({ account_id: 'account_id', asset_id: 'asset_id', request_id: 'request_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.RequestForInformationRfi().update({
  account_id: 'account_id',
  request_id: 'request_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RequestForInformationRfiEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RequestsDashboardEntity

```ts
const requests_dashboard = client.RequestsDashboard()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `string` | Yes |  |
| `defaultValue` | `any` | No |  |
| `description` | `string` | No |  |
| `displayOrder` | `number` | Yes |  |
| `errors` | `any[]` | Yes | Always empty on success |
| `fieldLabel` | `string` | Yes |  |
| `fieldName` | `string` | Yes |  |
| `fieldType` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `messages` | `any[]` | Yes | Always empty on success |
| `options` | `any[]` | No |  |
| `projectType` | `string` | Yes |  |
| `project_type` | `string` | Yes |  |
| `public` | `boolean` | Yes |  |
| `request_types` | `any[]` | Yes |  |
| `required` | `boolean` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `sectionID` | `string` | No |  |
| `sectionLabel` | `string` | No |  |
| `success` | `Record<string, any>` | Yes |  |
| `total` | `number` | Yes |  |
| `updated` | `string` | Yes |  |
| `validation` | `Record<string, any>` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RequestsDashboard().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RequestsDashboard().load({ account_id: 'account_id', project_type: 'project_type' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RequestsDashboardEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RfiEntity

```ts
const rfi = client.Rfi()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `Record<string, any>` | Yes |  |
| `assignee` | `string` | Yes | Assignee email |
| `completed` | `string` | Yes | Completion timestamp |
| `created` | `string` | Yes | Creation timestamp |
| `description` | `string` | No | RFI description (optional). |
| `eventId` | `string` | No | Optional related event ID |
| `id` | `string` | Yes | RFI UUID |
| `investigation_id` | `string` | Yes | Investigation UUID |
| `is_free_request` | `boolean` | Yes | Whether this is a free request |
| `message_tokens` | `number` | Yes | Total message tokens |
| `metadata` | `Record<string, any>` | No | Optional metadata fields specific to the RFI type |
| `pagination` | `Record<string, any>` | Yes |  |
| `priority` | `string` | Yes | Request priority |
| `readable_id` | `string` | Yes | Human-readable ID |
| `release_entitlements` | `string` | Yes | Release entitlements |
| `report_id` | `string` | Yes | Report UUID |
| `request` | `Record<string, any>` | Yes |  |
| `request_type` | `string` | No | Optional request type for the request |
| `result` | `any[]` | Yes |  |
| `status` | `string` | Yes | RFI status. |
| `subtypeId` | `string` | No | Optional subtype ID |
| `success` | `string` | Yes |  |
| `summary` | `string` | Yes | RFI summary |
| `title` | `string` | No | RFI title (optional). |
| `tlp` | `string` | Yes | TLP classification |
| `tokens` | `number` | Yes | Total tokens used |
| `updated` | `string` | Yes | Last update timestamp |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `account` | - | - | - |
| `assignee` | - | - | - |
| `completed` | - | - | - |
| `created` | - | - | - |
| `description` | - | - | - |
| `eventId` | - | - | - |
| `id` | - | - | - |
| `investigation_id` | - | - | - |
| `is_free_request` | - | - | - |
| `message_tokens` | - | - | - |
| `metadata` | - | - | - |
| `pagination` | - | - | - |
| `priority` | - | Yes | Yes |
| `readable_id` | - | - | - |
| `release_entitlements` | - | - | - |
| `report_id` | - | - | - |
| `request` | - | - | - |
| `request_type` | - | - | - |
| `result` | - | - | - |
| `status` | - | - | - |
| `subtypeId` | - | - | - |
| `success` | - | - | - |
| `summary` | - | - | Yes |
| `title` | - | - | - |
| `tlp` | - | Yes | Yes |
| `tokens` | - | - | - |
| `updated` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Rfi().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Rfi().load({ id: 'rfi_id', project_type: 'project_type' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Rfi().update({
  id: 'rfi_id',
  account_id: 'account_id',
  project_type: 'project_type',
  request_id: 'request_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RfiEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RfiMessageEntity

```ts
const rfi_message = client.RfiMessage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachment_asset_ids` | `any[]` | No |  |
| `attachments` | `any[]` | Yes |  |
| `author_id` | `string` | No |  |
| `author_name` | `string` | No |  |
| `content` | `string` | Yes |  |
| `created` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `is_cloudflare_team` | `boolean` | Yes |  |
| `is_published` | `boolean` | Yes |  |
| `publish` | `boolean` | No |  |
| `published` | `string` | Yes |  |
| `tlp` | `string` | Yes |  |
| `updated` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `attachment_asset_ids` | - | - | - | - |
| `attachments` | - | - | - | - |
| `author_id` | - | - | - | - |
| `author_name` | - | - | - | - |
| `content` | - | - | - | - |
| `created` | - | - | - | - |
| `id` | - | - | - | - |
| `is_cloudflare_team` | - | - | - | - |
| `is_published` | - | - | - | - |
| `publish` | - | - | - | Yes |
| `published` | - | - | - | - |
| `tlp` | - | - | Yes | - |
| `updated` | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RfiMessage().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RfiMessage().list({ account_id: "example", project_type: "example", request_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RfiMessage().load({ id: 'rfi_message_id', account_id: 'account_id', project_type: 'project_type', request_id: 'request_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.RfiMessage().update({
  id: 'rfi_message_id',
  account_id: 'account_id',
  project_type: 'project_type',
  request_id: 'request_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RfiMessageEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RuleEntity

```ts
const rule = client.Rule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `arrays` | `any[]` | Yes |  |
| `headers` | `Record<string, any>` | Yes |  |
| `operators` | `Record<string, any>` | Yes |  |
| `scalars` | `any[]` | Yes |  |
| `string_arrays` | `any[]` | Yes |  |
| `structs` | `any[]` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `managed` | `/accounts/{account_id}/cloudforce-one/rules/managed` | `client.Rule().list({ $action: 'managed', ... })` |

An action returns that action's OWN response, which is not necessarily a
Rule record — check the API definition for its shape.

```ts
const result = await client.Rule().list({
  $action: 'managed',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Rule().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RuleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScanEntity

```ts
const scan = client.Scan()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `frequency` | `number` | No | Defines the number of days between each scan (0 = One-off scan). |
| `ips` | `any[]` | No | Defines a list of IP addresses or CIDR blocks to scan. |
| `messages` | `any[]` | Yes |  |
| `ports` | `any[]` | No | Defines a list of ports to scan. |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `config` | `/accounts/{account_id}/cloudforce-one/scans/config` | `client.Scan().create({ $action: 'config', ... })` |
| `config` | `/accounts/{account_id}/cloudforce-one/scans/config` | `client.Scan().list({ $action: 'config', ... })` |

An action returns that action's OWN response, which is not necessarily a
Scan record — check the API definition for its shape.

```ts
const result = await client.Scan().create({
  $action: 'config',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Scan().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  result: {},
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Scan().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Scan().load({ account_id: 'account_id', config_id: 'config_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Scan().remove({ account_id: 'account_id', config_id: 'config_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Scan().update({
  account_id: 'account_id',
  config_id: 'config_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScanEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TagEntity

```ts
const tag = client.Tag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeDuration` | `string` | No |  |
| `activeDuration_annotated` | `Record<string, any>` | Yes |  |
| `actorCategory` | `string` | No |  |
| `actorCategory_annotated` | `Record<string, any>` | Yes |  |
| `aliasGroupNames` | `any[]` | No |  |
| `aliasGroupNamesInternal` | `any[]` | No |  |
| `aliases` | `any[]` | No | Structured aliases ({ value, confidence 1-10, tlp }). |
| `attributionOrganization` | `string` | No |  |
| `attributionOrganization_annotated` | `Record<string, any>` | Yes |  |
| `categoryName` | `string` | No |  |
| `categoryUuid` | `string` | No | Tag type (category) UUID. |
| `confidence` | `number` | No | Overall tag confidence (1-10). |
| `createdAt` | `string` | No |  |
| `dateOfDiscovery` | `string` | No | Date of discovery (ISO YYYY-MM-DD). |
| `description` | `string` | No |  |
| `externalReferenceLinks` | `any[]` | No |  |
| `externalReferences` | `any[]` | No | Structured external references ({ url, description }). |
| `externalReferences_annotated` | `any[]` | No |  |
| `id` | `string` | No |  |
| `internalAliases` | `any[]` | No | Internal structured aliases ({ value, confidence 1-10, tlp }). |
| `internalDescription` | `string` | No |  |
| `lastSeen` | `string` | No |  |
| `metadata` | `Record<string, any>` | No | Updated metadata. |
| `motive` | `string` | No |  |
| `motive_annotated` | `Record<string, any>` | Yes |  |
| `opsecLevel` | `string` | No |  |
| `opsecLevel_annotated` | `Record<string, any>` | Yes |  |
| `originCountryISO` | `string` | No | ISO country code (alpha-2 or alpha-3). |
| `originCountryISO_annotated` | `Record<string, any>` | Yes |  |
| `priority` | `number` | No |  |
| `priority_annotated` | `Record<string, any>` | Yes |  |
| `properties` | `Record<string, any>` | No | Parsed custom field values. |
| `sophisticationLevel` | `string` | No |  |
| `sophisticationLevel_annotated` | `Record<string, any>` | Yes |  |
| `tlp` | `string` | No | Tag-level TLP handling marking. |
| `type` | `string` | No | Updated relationship type. |
| `updatedAt` | `string` | No |  |
| `uuid` | `string` | Yes |  |
| `value` | `string` | Yes |  |
| `version` | `number` | No |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `activeDuration` | - | - | - | - | - |
| `activeDuration_annotated` | - | - | - | - | - |
| `actorCategory` | - | - | - | - | - |
| `actorCategory_annotated` | - | - | - | - | - |
| `aliasGroupNames` | - | - | - | - | - |
| `aliasGroupNamesInternal` | - | - | - | - | - |
| `aliases` | - | - | - | - | - |
| `attributionOrganization` | - | - | - | - | - |
| `attributionOrganization_annotated` | - | - | - | - | - |
| `categoryName` | - | - | - | - | - |
| `categoryUuid` | - | - | - | - | - |
| `confidence` | - | - | - | - | - |
| `createdAt` | - | - | - | - | - |
| `dateOfDiscovery` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `externalReferenceLinks` | - | - | - | - | - |
| `externalReferences` | - | - | - | - | - |
| `externalReferences_annotated` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `internalAliases` | - | - | - | - | - |
| `internalDescription` | - | - | - | - | - |
| `lastSeen` | - | - | - | - | - |
| `metadata` | - | - | - | - | - |
| `motive` | - | - | - | - | - |
| `motive_annotated` | - | - | - | - | - |
| `opsecLevel` | - | - | - | - | - |
| `opsecLevel_annotated` | - | - | - | - | - |
| `originCountryISO` | - | - | - | - | - |
| `originCountryISO_annotated` | - | - | - | - | - |
| `priority` | - | - | - | - | - |
| `priority_annotated` | - | - | - | - | - |
| `properties` | - | - | - | - | - |
| `sophisticationLevel` | - | - | - | - | - |
| `sophisticationLevel_annotated` | - | - | - | - | - |
| `tlp` | - | - | - | - | - |
| `type` | - | - | - | - | - |
| `updatedAt` | - | - | - | - | - |
| `uuid` | - | - | - | - | - |
| `value` | - | - | - | Yes | - |
| `version` | - | - | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `create` | `/accounts/{account_id}/cloudforce-one/events/tags/create` | `client.Tag().create({ $action: 'create', ... })` |
| `relationship` | `/accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}/relationships` | `client.Tag().create({ $action: 'relationship', ... })` |
| `indicator` | `/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/tags/{tag_uuid}/indicators` | `client.Tag().list({ $action: 'indicator', ... })` |
| `indicator` | `/accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}/indicators` | `client.Tag().list({ $action: 'indicator', ... })` |
| `relationship` | `/accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}/relationships` | `client.Tag().load({ $action: 'relationship', ... })` |

An action returns that action's OWN response, which is not necessarily a
Tag record — check the API definition for its shape.

```ts
const result = await client.Tag().create({
  $action: 'create',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Tag().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Tag().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Tag().load({ id: 'tag_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Tag().remove({ id: 'tag_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Tag().update({
  id: 'tag_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TagEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TagCategoryEntity

```ts
const tag_category = client.TagCategory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | No |  |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `schema` | `any[]` | No | Parsed FieldDefinition[] defining custom fields for this category, or null if none. |
| `updatedAt` | `string` | No |  |
| `uuid` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `createdAt` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `schema` | - | - | - | - | - |
| `updatedAt` | - | - | - | - | - |
| `uuid` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TagCategory().create({
  account_id: 'example_account_id',
  name: 'example_name',
  uuid: 'example_uuid',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TagCategory().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TagCategory().load({ id: 'tag_category_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TagCategory().remove({ id: 'tag_category_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TagCategory().update({
  id: 'tag_category_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TagCategoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TargetIndustryEntity

```ts
const target_industry = client.TargetIndustry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `catalog` | `/accounts/{account_id}/cloudforce-one/events/targetIndustries/catalog` | `client.TargetIndustry().load({ $action: 'catalog', ... })` |

An action returns that action's OWN response, which is not necessarily a
TargetIndustry record — check the API definition for its shape.

```ts
const result = await client.TargetIndustry().load({
  $action: 'catalog',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TargetIndustry().load({ account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TargetIndustryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ThreatSignalEntity

```ts
const threat_signal = client.ThreatSignal()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category_id` | `string` | No | One of the predefined Threat Signals feed categories; see GET /:account_id/v2/threat-signals/categories. |
| `category_uuids` | `any[]` | Yes |  |
| `config` | `string` | No |  |
| `display_name` | `string` | No |  |
| `display_order` | `number` | No |  |
| `enabled` | `boolean` | No |  |
| `errors` | `any[]` | Yes |  |
| `feeds` | `any[]` | Yes |  |
| `is_active` | `boolean` | No |  |
| `message` | `string` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `name` | `string` | No |  |
| `opted_out` | `boolean` | Yes |  |
| `output_schema` | `string` | No |  |
| `poll_interval_s` | `number` | No |  |
| `prompt` | `string` | No |  |
| `read` | `boolean` | Yes |  |
| `result` | `any` | Yes |  |
| `skill_ids` | `any[]` | Yes |  |
| `success` | `boolean` | Yes |  |
| `tag_id` | `string` | Yes |  |
| `title` | `string` | No |  |
| `url` | `string` | No |  |
| `why_valuable` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `curated_feed` | `/accounts/{account_id}/cloudforce-one/v2/threat-signals/curated-feeds` | `client.ThreatSignal().create({ $action: 'curated_feed', ... })` |
| `feed` | `/accounts/{account_id}/cloudforce-one/v2/threat-signals/feeds` | `client.ThreatSignal().create({ $action: 'feed', ... })` |
| `skill` | `/accounts/{account_id}/cloudforce-one/v2/threat-signals/skills` | `client.ThreatSignal().create({ $action: 'skill', ... })` |
| `tag` | `/accounts/{account_id}/cloudforce-one/v2/threat-signals/articles/{article_id}/tag` | `client.ThreatSignal().create({ $action: 'tag', ... })` |
| `article` | `/accounts/{account_id}/cloudforce-one/v2/threat-signals/articles` | `client.ThreatSignal().list({ $action: 'article', ... })` |
| `category` | `/accounts/{account_id}/cloudforce-one/v2/threat-signals/categories` | `client.ThreatSignal().list({ $action: 'category', ... })` |
| `indicator` | `/accounts/{account_id}/cloudforce-one/v2/threat-signals/indicators` | `client.ThreatSignal().list({ $action: 'indicator', ... })` |
| `curated_feed` | `/accounts/{account_id}/cloudforce-one/v2/threat-signals/curated-feeds` | `client.ThreatSignal().load({ $action: 'curated_feed', ... })` |
| `feed` | `/accounts/{account_id}/cloudforce-one/v2/threat-signals/feeds` | `client.ThreatSignal().load({ $action: 'feed', ... })` |
| `health` | `/accounts/{account_id}/cloudforce-one/v2/threat-signals/health` | `client.ThreatSignal().load({ $action: 'health', ... })` |
| `skill` | `/accounts/{account_id}/cloudforce-one/v2/threat-signals/skills` | `client.ThreatSignal().load({ $action: 'skill', ... })` |
| `article` | `/accounts/{account_id}/cloudforce-one/v2/threat-signals/articles` | `client.ThreatSignal().patch({ $action: 'article', ... })` |

An action returns that action's OWN response, which is not necessarily a
ThreatSignal record — check the API definition for its shape.

```ts
const result = await client.ThreatSignal().create({
  $action: 'curated_feed',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ThreatSignal().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ThreatSignal().list({ account_id: "example", skill_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ThreatSignal().load({ account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ThreatSignal().remove({ account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ThreatSignal().update({
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ThreatSignalEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareCloudforceOneSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ts
const client = new CloudflareCloudforceOneSDK({
  feature: {
    test: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

