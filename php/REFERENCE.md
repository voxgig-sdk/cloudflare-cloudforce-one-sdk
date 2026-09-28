# CloudflareCloudforceOne PHP SDK Reference

Complete API reference for the CloudflareCloudforceOne PHP SDK.


## CloudflareCloudforceOneSDK

### Constructor

```php
require_once __DIR__ . '/cloudflarecloudforceone_sdk.php';

$client = new CloudflareCloudforceOneSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareCloudforceOneSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = CloudflareCloudforceOneSDK::test();
```


### Instance Methods

#### `Attacker($data = null)`

Create a new `AttackerEntity` instance. Pass `null` for no initial data.

#### `BinDb($data = null)`

Create a new `BinDbEntity` instance. Pass `null` for no initial data.

#### `BrandProtection($data = null)`

Create a new `BrandProtectionEntity` instance. Pass `null` for no initial data.

#### `Category($data = null)`

Create a new `CategoryEntity` instance. Pass `null` for no initial data.

#### `CloudforceOneAccountExemption($data = null)`

Create a new `CloudforceOneAccountExemptionEntity` instance. Pass `null` for no initial data.

#### `CloudforceOneDeleteAll($data = null)`

Create a new `CloudforceOneDeleteAllEntity` instance. Pass `null` for no initial data.

#### `CloudforceOneEditApproval($data = null)`

Create a new `CloudforceOneEditApprovalEntity` instance. Pass `null` for no initial data.

#### `CloudforceOneEmailRuleValidation($data = null)`

Create a new `CloudforceOneEmailRuleValidationEntity` instance. Pass `null` for no initial data.

#### `CloudforceOneEmailRulesList($data = null)`

Create a new `CloudforceOneEmailRulesListEntity` instance. Pass `null` for no initial data.

#### `CloudforceOneRequestsApiResponseCommon($data = null)`

Create a new `CloudforceOneRequestsApiResponseCommonEntity` instance. Pass `null` for no initial data.

#### `CloudforceOneRule($data = null)`

Create a new `CloudforceOneRuleEntity` instance. Pass `null` for no initial data.

#### `CloudforceOneRuleApprovalDetail($data = null)`

Create a new `CloudforceOneRuleApprovalDetailEntity` instance. Pass `null` for no initial data.

#### `CloudforceOneRuleApprovalsList($data = null)`

Create a new `CloudforceOneRuleApprovalsListEntity` instance. Pass `null` for no initial data.

#### `CloudforceOneRulePreview($data = null)`

Create a new `CloudforceOneRulePreviewEntity` instance. Pass `null` for no initial data.

#### `CloudforceOneRulesPreviewList($data = null)`

Create a new `CloudforceOneRulesPreviewListEntity` instance. Pass `null` for no initial data.

#### `CloudforceOneRulesSearch($data = null)`

Create a new `CloudforceOneRulesSearchEntity` instance. Pass `null` for no initial data.

#### `CloudforceOneStat($data = null)`

Create a new `CloudforceOneStatEntity` instance. Pass `null` for no initial data.

#### `CloudforceOneSuccess($data = null)`

Create a new `CloudforceOneSuccessEntity` instance. Pass `null` for no initial data.

#### `CloudforceOneTreeNode($data = null)`

Create a new `CloudforceOneTreeNodeEntity` instance. Pass `null` for no initial data.

#### `CloudforceOneValidation($data = null)`

Create a new `CloudforceOneValidationEntity` instance. Pass `null` for no initial data.

#### `Collection($data = null)`

Create a new `CollectionEntity` instance. Pass `null` for no initial data.

#### `CollectionsItem($data = null)`

Create a new `CollectionsItemEntity` instance. Pass `null` for no initial data.

#### `Country($data = null)`

Create a new `CountryEntity` instance. Pass `null` for no initial data.

#### `DashboardAsset($data = null)`

Create a new `DashboardAssetEntity` instance. Pass `null` for no initial data.

#### `DashboardUser($data = null)`

Create a new `DashboardUserEntity` instance. Pass `null` for no initial data.

#### `Dataset($data = null)`

Create a new `DatasetEntity` instance. Pass `null` for no initial data.

#### `Event($data = null)`

Create a new `EventEntity` instance. Pass `null` for no initial data.

#### `Group($data = null)`

Create a new `GroupEntity` instance. Pass `null` for no initial data.

#### `Indicator($data = null)`

Create a new `IndicatorEntity` instance. Pass `null` for no initial data.

#### `IndicatorType($data = null)`

Create a new `IndicatorTypeEntity` instance. Pass `null` for no initial data.

#### `Permission($data = null)`

Create a new `PermissionEntity` instance. Pass `null` for no initial data.

#### `Priority($data = null)`

Create a new `PriorityEntity` instance. Pass `null` for no initial data.

#### `PriorityIntelligence($data = null)`

Create a new `PriorityIntelligenceEntity` instance. Pass `null` for no initial data.

#### `PriorityIntelligenceRequirement($data = null)`

Create a new `PriorityIntelligenceRequirementEntity` instance. Pass `null` for no initial data.

#### `PriorityIntelligenceRequirementsPir($data = null)`

Create a new `PriorityIntelligenceRequirementsPirEntity` instance. Pass `null` for no initial data.

#### `PublicCredentialMonitor($data = null)`

Create a new `PublicCredentialMonitorEntity` instance. Pass `null` for no initial data.

#### `Request($data = null)`

Create a new `RequestEntity` instance. Pass `null` for no initial data.

#### `RequestForInformationRfi($data = null)`

Create a new `RequestForInformationRfiEntity` instance. Pass `null` for no initial data.

#### `RequestsDashboard($data = null)`

Create a new `RequestsDashboardEntity` instance. Pass `null` for no initial data.

#### `Rfi($data = null)`

Create a new `RfiEntity` instance. Pass `null` for no initial data.

#### `RfiMessage($data = null)`

Create a new `RfiMessageEntity` instance. Pass `null` for no initial data.

#### `Rule($data = null)`

Create a new `RuleEntity` instance. Pass `null` for no initial data.

#### `Scan($data = null)`

Create a new `ScanEntity` instance. Pass `null` for no initial data.

#### `Tag($data = null)`

Create a new `TagEntity` instance. Pass `null` for no initial data.

#### `TagCategory($data = null)`

Create a new `TagCategoryEntity` instance. Pass `null` for no initial data.

#### `TargetIndustry($data = null)`

Create a new `TargetIndustryEntity` instance. Pass `null` for no initial data.

#### `ThreatSignal($data = null)`

Create a new `ThreatSignalEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): CloudflareCloudforceOneUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## AttackerEntity

```php
$attacker = $client->Attacker();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Attacker()->load(["account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AttackerEntity`

Create a new `AttackerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BinDbEntity

```php
$bin_db = $client->BinDb();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_type` | `string` | Yes |  |
| `md5` | `string` | Yes |  |
| `sha1` | `string` | Yes |  |
| `sha256` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BinDb()->create([
  "account_id" => null, // string
  "content_type" => null, // string
  "md5" => null, // string
  "sha1" => null, // string
  "sha256" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->BinDb()->load(["account_id" => "account_id", "hash" => "hash"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BinDbEntity`

Create a new `BinDbEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BrandProtectionEntity

```php
$brand_protection = $client->BrandProtection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `body` | `string` | Yes |  |
| `brand` | `string` | Yes |  |
| `category` | `string` | Yes |  |
| `content_type` | `string` | No | MIME type of the image (only present when download=true) |
| `createNotice` | `bool` | No |  |
| `createdAt` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `dismissed` | `bool` | Yes | Whether the match is dismissed. |
| `domain` | `string` | Yes |  |
| `domain_id` | `int` | Yes |  |
| `domains` | `array` | Yes |  |
| `errors` | `array` | Yes |  |
| `fields` | `array` | Yes |  |
| `first_seen` | `string` | Yes |  |
| `format` | `string` | No |  |
| `id` | `float` | Yes |  |
| `image_data` | `string` | Yes | Base64 encoded image data. |
| `letterText` | `string` | Yes |  |
| `letterType` | `string` | Yes |  |
| `matchId` | `float` | Yes |  |
| `matchType` | `string` | Yes |  |
| `match_details` | `array` | No | Per-match detail objects with query metadata and individual dismissed state. |
| `match_ids` | `array` | No |  |
| `matched_at` | `string` | Yes |  |
| `matches` | `array` | Yes |  |
| `max_time` | `string` | No |  |
| `message` | `string` | Yes |  |
| `messages` | `array` | Yes |  |
| `min_time` | `string` | No |  |
| `name` | `string` | Yes |  |
| `noticeParams` | `array` | Yes |  |
| `notices` | `array` | Yes |  |
| `public_scans` | `array` | Yes |  |
| `queryId` | `float` | Yes |  |
| `queryIds` | `array` | No |  |
| `query_id` | `int` | Yes |  |
| `r2_path` | `string` | Yes |  |
| `registrar` | `string` | Yes |  |
| `result` | `mixed` | Yes |  |
| `result_info` | `array` | Yes | Present on paginated list responses when page or per_page is supplied. |
| `scan` | `bool` | No |  |
| `scan_matches` | `bool` | No |  |
| `scan_status` | `string` | Yes |  |
| `scan_submission_id` | `int` | Yes |  |
| `score_threshold` | `float` | No | Minimum similarity score threshold for matches (0-1, default: 0) |
| `search_lookback` | `bool` | No | If true, search recent domain lookback entries for matches |
| `similarity_score` | `float` | Yes |  |
| `similarity_threshold` | `float` | Yes | Minimum similarity score (0-1) required for visual matches |
| `source` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `string_matches` | `array` | Yes |  |
| `success` | `bool` | Yes |  |
| `tag` | `string` | Yes | Unique identifier for the logo query |
| `takedownNoticeId` | `float` | Yes |  |
| `templateId` | `string` | Yes |  |
| `top_k` | `int` | No | Number of closest matches to return (1-100, default: 10) |
| `total_analyzed` | `float` | Yes |  |
| `total_matches` | `float` | Yes |  |
| `truncated` | `bool` | Yes |  |
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

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BrandProtection()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->BrandProtection()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->BrandProtection()->load(["account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->BrandProtection()->remove(["account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->BrandProtection()->update([
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BrandProtectionEntity`

Create a new `BrandProtectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CategoryEntity

```php
$category = $client->Category();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `killChain` | `float` | Yes |  |
| `mitreAttack` | `array` | No |  |
| `mitreCapec` | `array` | No |  |
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

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Category()->create([
  "account_id" => null, // string
  "killChain" => null, // float
  "name" => null, // string
  "uuid" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Category()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Category()->load(["id" => "category_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Category()->remove(["id" => "category_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Category()->update([
  "id" => "category_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CategoryEntity`

Create a new `CategoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CloudforceOneAccountExemptionEntity

```php
$cloudforce_one_account_exemption = $client->CloudforceOneAccountExemption();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `namespace` | `array` | Yes |  |
| `tag_match` | `array` | Yes |  |
| `worker_name` | `array` | Yes |  |

### Field Usage by Operation

| Field | list | create | update | remove |
| --- | --- | --- | --- | --- |
| `namespace` | - | Yes | Yes | - |
| `tag_match` | - | Yes | Yes | - |
| `worker_name` | - | Yes | Yes | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CloudforceOneAccountExemption()->create([
  "account_id" => null, // string
  "namespace" => null, // array
  "tag_match" => null, // array
  "worker_name" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CloudforceOneAccountExemption()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->CloudforceOneAccountExemption()->remove(["account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CloudforceOneAccountExemption()->update([
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CloudforceOneAccountExemptionEntity`

Create a new `CloudforceOneAccountExemptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CloudforceOneDeleteAllEntity

```php
$cloudforce_one_delete_all = $client->CloudforceOneDeleteAll();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->CloudforceOneDeleteAll()->remove(["account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CloudforceOneDeleteAllEntity`

Create a new `CloudforceOneDeleteAllEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CloudforceOneEditApprovalEntity

```php
$cloudforce_one_edit_approval = $client->CloudforceOneEditApproval();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `condition` | `array` | Yes | Nested condition groups support up to 10 levels of depth. |
| `description` | `string` | No |  |
| `enabled` | `bool` | No |  |
| `id` | `string` | No |  |
| `meta` | `array` | No |  |
| `name` | `string` | Yes |  |
| `status` | `string` | No | Disposition for matching email. |
| `strings` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CloudforceOneEditApproval()->create([
  "account_id" => null, // string
  "approval_id" => null, // string
  "condition" => null, // array
  "name" => null, // string
]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CloudforceOneEditApproval()->update([
  "account_id" => "account_id",
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CloudforceOneEditApprovalEntity`

Create a new `CloudforceOneEditApprovalEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CloudforceOneEmailRuleValidationEntity

```php
$cloudforce_one_email_rule_validation = $client->CloudforceOneEmailRuleValidation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `compiled_yara` | `string` | No |  |
| `condition` | `array` | Yes | Nested condition groups support up to 10 levels of depth. |
| `description` | `string` | No |  |
| `enabled` | `bool` | No |  |
| `error` | `string` | No |  |
| `existing_rule_id` | `string` | No | Existing rule ID to exclude from duplicate-name checks when validating an update. |
| `meta` | `array` | No |  |
| `name` | `string` | Yes |  |
| `status` | `string` | No | Disposition for matching email. |
| `strings` | `array` | No |  |
| `valid` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CloudforceOneEmailRuleValidation()->create([
  "account_id" => null, // string
  "condition" => null, // array
  "name" => null, // string
  "valid" => null, // bool
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CloudforceOneEmailRuleValidationEntity`

Create a new `CloudforceOneEmailRuleValidationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CloudforceOneEmailRulesListEntity

```php
$cloudforce_one_email_rules_list = $client->CloudforceOneEmailRulesList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | No |  |
| `created_at` | `float` | Yes |  |
| `created_by` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `enabled` | `bool` | Yes | Whether this rule is active for dice consumers. |
| `id` | `string` | Yes |  |
| `is_public` | `bool` | Yes | Whether this rule is visible to other internal accounts. |
| `meta` | `array` | No | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` | Yes |  |
| `namespaces` | `array` | Yes |  |
| `path` | `string` | Yes |  |
| `pending_approval_id` | `float` | Yes | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `array` | Yes | Proposed update or deletion awaiting approval. |
| `structured_source` | `string` | No | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `float` | Yes |  |
| `updated_by` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CloudforceOneEmailRulesList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CloudforceOneEmailRulesListEntity`

Create a new `CloudforceOneEmailRulesListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CloudforceOneRequestsApiResponseCommonEntity

```php
$cloudforce_one_requests_api_response_common = $client->CloudforceOneRequestsApiResponseCommon();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->CloudforceOneRequestsApiResponseCommon()->remove(["account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CloudforceOneRequestsApiResponseCommonEntity`

Create a new `CloudforceOneRequestsApiResponseCommonEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CloudforceOneRuleEntity

```php
$cloudforce_one_rule = $client->CloudforceOneRule();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `array` | No |  |
| `commit_message` | `string` | No | Human-readable justification for this change. |
| `content` | `string` | Yes |  |
| `description` | `string` | No | Human-readable description of the rule. |
| `enabled` | `bool` | No | Whether this rule is active for dice consumers. |
| `is_public` | `bool` | No | Whether this rule is visible to other internal accounts. |
| `meta` | `array` | No | Adds YARA meta entries to the rule's meta block and stores them in rule_meta alongside content metadata. |
| `name` | `string` | Yes |  |
| `namespaces` | `array` | No | Optional WfP deployment tags (customer rules only). |
| `path` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CloudforceOneRule()->create([
  "account_id" => null, // string
  "content" => null, // string
  "name" => null, // string
  "path" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CloudforceOneRuleEntity`

Create a new `CloudforceOneRuleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CloudforceOneRuleApprovalDetailEntity

```php
$cloudforce_one_rule_approval_detail = $client->CloudforceOneRuleApprovalDetail();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `audit_log_id` | `float` | Yes |  |
| `can_review` | `bool` | Yes | Whether the authenticated user may approve or reject this pending change. |
| `cancelled_at` | `float` | Yes | Time at which the requester cancelled the approval. |
| `cancelled_by` | `string` | Yes | Requester who cancelled the pending approval. |
| `change_description` | `string` | Yes |  |
| `change_type` | `string` | Yes |  |
| `commit_message` | `string` | Yes | The requester supplies this human-readable justification with the change. |
| `compiler_warnings` | `array` | No |  |
| `current_rule` | `mixed` | Yes |  |
| `id` | `float` | Yes |  |
| `proposed_changes` | `mixed` | Yes | Contains structured proposed rule changes, or null for unresolved persisted data. |
| `rejection_reason` | `string` | Yes | The reviewer may supply a reason when rejecting the change. |
| `requested_at` | `float` | Yes |  |
| `requested_by` | `string` | Yes |  |
| `reviewed_at` | `float` | Yes |  |
| `reviewer_scope` | `string` | Yes | Review policy: general Nomos approvers for default; general approvers or Phishguard for email. |
| `revision_number` | `int` | Yes | Revision number within this approval request chain. |
| `rule_id` | `string` | Yes |  |
| `rule_name` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `superseded_by_approval_id` | `float` | Yes | Newer approval revision that replaced this approval. |
| `supersedes_approval_id` | `float` | Yes | This approval replaces the referenced approval revision. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CloudforceOneRuleApprovalDetail()->create([
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CloudforceOneRuleApprovalDetail()->load(["id" => "cloudforce_one_rule_approval_detail_id", "account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CloudforceOneRuleApprovalDetailEntity`

Create a new `CloudforceOneRuleApprovalDetailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CloudforceOneRuleApprovalsListEntity

```php
$cloudforce_one_rule_approvals_list = $client->CloudforceOneRuleApprovalsList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `audit_log_id` | `float` | Yes |  |
| `can_review` | `bool` | Yes | Whether the authenticated user may approve or reject this pending change. |
| `cancelled_at` | `float` | Yes | Time at which the requester cancelled the approval. |
| `cancelled_by` | `string` | Yes | Requester who cancelled the pending approval. |
| `change_description` | `string` | Yes |  |
| `change_type` | `string` | Yes |  |
| `commit_message` | `string` | Yes | The requester supplies this human-readable justification with the change. |
| `id` | `float` | Yes |  |
| `proposed_changes` | `mixed` | Yes | Contains structured proposed rule changes, or null for unresolved persisted data. |
| `rejection_reason` | `string` | Yes | The reviewer may supply a reason when rejecting the change. |
| `requested_at` | `float` | Yes |  |
| `requested_by` | `string` | Yes |  |
| `reviewed_at` | `float` | Yes |  |
| `reviewer_scope` | `string` | Yes | Review policy: general Nomos approvers for default; general approvers or Phishguard for email. |
| `revision_number` | `int` | Yes | Revision number within this approval request chain. |
| `rule_id` | `string` | Yes |  |
| `rule_name` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `superseded_by_approval_id` | `float` | Yes | Newer approval revision that replaced this approval. |
| `supersedes_approval_id` | `float` | Yes | This approval replaces the referenced approval revision. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CloudforceOneRuleApprovalsList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CloudforceOneRuleApprovalsListEntity`

Create a new `CloudforceOneRuleApprovalsListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CloudforceOneRulePreviewEntity

```php
$cloudforce_one_rule_preview = $client->CloudforceOneRulePreview();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit_message` | `string` | No | Human-readable justification for this change. |
| `condition` | `array` | Yes | Nested condition groups support up to 10 levels of depth. |
| `content` | `string` | No |  |
| `created_at` | `float` | Yes |  |
| `created_by` | `string` | Yes |  |
| `description` | `string` | Yes | Human-readable description of the rule. |
| `enabled` | `bool` | Yes | Whether this rule is active for dice consumers. |
| `id` | `string` | Yes |  |
| `is_public` | `bool` | Yes | Whether this rule is visible to other internal accounts. |
| `meta` | `array` | No | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` | Yes |  |
| `namespaces` | `array` | Yes |  |
| `path` | `string` | Yes | Path change goes through approval workflow. |
| `pending_approval_id` | `float` | Yes | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `array` | Yes | Proposed update or deletion awaiting approval. |
| `status` | `string` | No | Disposition for matching email. |
| `strings` | `array` | No |  |
| `structured_source` | `string` | No | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `float` | Yes |  |
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

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CloudforceOneRulePreview()->create([
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CloudforceOneRulePreview()->load(["id" => "cloudforce_one_rule_preview_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CloudforceOneRulePreview()->update([
  "id" => "cloudforce_one_rule_preview_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CloudforceOneRulePreviewEntity`

Create a new `CloudforceOneRulePreviewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CloudforceOneRulesPreviewListEntity

```php
$cloudforce_one_rules_preview_list = $client->CloudforceOneRulesPreviewList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | No |  |
| `created_at` | `float` | Yes |  |
| `created_by` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `enabled` | `bool` | Yes | Whether this rule is active for dice consumers. |
| `id` | `string` | Yes |  |
| `is_public` | `bool` | Yes | Whether this rule is visible to other internal accounts. |
| `meta` | `array` | No | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` | Yes |  |
| `namespaces` | `array` | Yes |  |
| `path` | `string` | Yes |  |
| `pending_approval_id` | `float` | Yes | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `array` | Yes | Proposed update or deletion awaiting approval. |
| `structured_source` | `string` | No | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `float` | Yes |  |
| `updated_by` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CloudforceOneRulesPreviewList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CloudforceOneRulesPreviewListEntity`

Create a new `CloudforceOneRulesPreviewListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CloudforceOneRulesSearchEntity

```php
$cloudforce_one_rules_search = $client->CloudforceOneRulesSearch();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | No |  |
| `created_at` | `float` | Yes |  |
| `created_by` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `enabled` | `bool` | Yes | Whether this rule is active for dice consumers. |
| `id` | `string` | Yes |  |
| `is_public` | `bool` | Yes | Whether this rule is visible to other internal accounts. |
| `meta` | `array` | No | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` | Yes |  |
| `namespaces` | `array` | Yes |  |
| `path` | `string` | Yes |  |
| `pending_approval_id` | `float` | Yes | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `array` | Yes | Proposed update or deletion awaiting approval. |
| `score` | `float` | No | Relevance score in [0,1]. |
| `scoring_details` | `array` | No | AI Search hybrid retrieval returns this per-component scoring breakdown. |
| `structured_source` | `string` | No | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `float` | Yes |  |
| `updated_by` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CloudforceOneRulesSearch()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CloudforceOneRulesSearchEntity`

Create a new `CloudforceOneRulesSearchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CloudforceOneStatEntity

```php
$cloudforce_one_stat = $client->CloudforceOneStat();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CloudforceOneStat()->load(["account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CloudforceOneStatEntity`

Create a new `CloudforceOneStatEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CloudforceOneSuccessEntity

```php
$cloudforce_one_success = $client->CloudforceOneSuccess();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CloudforceOneSuccess()->create([
  "account_id" => null, // string
  "approval_id" => null, // string
  "success" => null, // bool
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->CloudforceOneSuccess()->remove(["account_id" => "account_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CloudforceOneSuccessEntity`

Create a new `CloudforceOneSuccessEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CloudforceOneTreeNodeEntity

```php
$cloudforce_one_tree_node = $client->CloudforceOneTreeNode();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `children` | `array` | Yes |  |
| `count` | `float` | Yes |  |
| `name` | `string` | Yes |  |
| `path` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CloudforceOneTreeNode()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CloudforceOneTreeNodeEntity`

Create a new `CloudforceOneTreeNodeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CloudforceOneValidationEntity

```php
$cloudforce_one_validation = $client->CloudforceOneValidation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | Yes |  |
| `error` | `string` | No |  |
| `excludeRuleId` | `string` | No |  |
| `name` | `string` | Yes |  |
| `namespaces` | `array` | No |  |
| `path` | `string` | No |  |
| `valid` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CloudforceOneValidation()->create([
  "account_id" => null, // string
  "content" => null, // string
  "name" => null, // string
  "valid" => null, // bool
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CloudforceOneValidationEntity`

Create a new `CloudforceOneValidationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CollectionEntity

```php
$collection = $client->Collection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `columns` | `array` | Yes |  |
| `created_at` | `string` | Yes |  |
| `created_by` | `string` | Yes |  |
| `data` | `array` | Yes |  |
| `id` | `string` | Yes |  |
| `item_count` | `float` | Yes |  |
| `metadata` | `array` | No |  |
| `name` | `string` | Yes | New column name (must be unique) |
| `position` | `float` | Yes | Column display order |
| `required` | `bool` | Yes | Whether column is required |
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

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Collection()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Collection()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Collection()->load(["id" => "collection_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Collection()->remove(["id" => "collection_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Collection()->update([
  "id" => "collection_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CollectionEntity`

Create a new `CollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CollectionsItemEntity

```php
$collections_item = $client->CollectionsItem();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CollectionsItem()->create([
  "account_id" => null, // string
  "collection_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CollectionsItemEntity`

Create a new `CollectionsItemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CountryEntity

```php
$country = $client->Country();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | Yes |  |
| `success` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Country()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CountryEntity`

Create a new `CountryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DashboardAssetEntity

```php
$dashboard_asset = $client->DashboardAsset();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assets` | `array` | Yes |  |
| `contentType` | `array` | Yes |  |
| `count` | `array` | Yes |  |
| `downloadable` | `array` | Yes |  |
| `expiresAt` | `array` | Yes |  |
| `fileName` | `array` | Yes |  |
| `fileSize` | `array` | Yes |  |
| `id` | `array` | Yes |  |
| `is_cloudflare_team` | `array` | Yes |  |
| `metadata` | `array` | Yes |  |
| `origin` | `array` | Yes |  |
| `state` | `array` | Yes |  |
| `tlp` | `array` | Yes |  |
| `uploadedAt` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DashboardAsset()->create([
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DashboardAsset()->load(["account_id" => "account_id", "project_type" => "project_type", "request_id" => "request_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DashboardAssetEntity`

Create a new `DashboardAssetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DashboardUserEntity

```php
$dashboard_user = $client->DashboardUser();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `string` | No | User display name |
| `id` | `string` | Yes | Unique user ID |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DashboardUser()->load(["account_id" => "account_id", "request_id" => "request_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DashboardUserEntity`

Create a new `DashboardUserEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DatasetEntity

```php
$dataset = $client->Dataset();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deletedAt` | `string` | No |  |
| `id` | `string` | No |  |
| `indicatorWriteMode` | `string` | Yes | Effective indicator mutation capability after account/dataset authorization and dataset storage capability are applied. |
| `isAnalytics` | `bool` | Yes |  |
| `isPublic` | `bool` | Yes | If true, then anyone can search the dataset. |
| `name` | `string` | Yes | Used to describe the dataset within the account context. |
| `uuid` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Dataset()->create([
  "account_id" => null, // string
  "id" => null, // string
  "indicatorWriteMode" => null, // string
  "isAnalytics" => null, // bool
  "isPublic" => null, // bool
  "name" => null, // string
  "uuid" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Dataset()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Dataset()->load(["id" => "dataset_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Dataset()->remove(["id" => "dataset_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Dataset()->update([
  "id" => "dataset_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DatasetEntity`

Create a new `DatasetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EventEntity

```php
$event = $client->Event();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountId` | `float` | Yes |  |
| `account_id` | `int` | Yes | Account ID |
| `alert_enabled` | `bool` | Yes | Whether alerts are enabled |
| `alert_rollup_enabled` | `bool` | Yes | Whether alert rollup is enabled |
| `attacker` | `string` | Yes |  |
| `attackerCountry` | `string` | Yes |  |
| `attackerCountryAlpha3` | `string` | Yes |  |
| `category` | `string` | Yes |  |
| `childIds` | `array` | No | Array of child event UUIDs that were processed |
| `created` | `string` | Yes |  |
| `createdAt` | `string` | No |  |
| `createdEventsCount` | `float` | Yes | Number of events created |
| `createdIndicatorsCount` | `float` | Yes | Number of indicators created |
| `createdRelationshipsCount` | `float` | Yes | Number of relationships created |
| `created_at` | `string` | Yes | Creation timestamp |
| `cursor` | `string` | No | Cursor for pagination. |
| `custom_threat_feed_id` | `int` | No | Intel Indicator Feed ID (numeric) |
| `data` | `string` | Yes |  |
| `datasetId` | `string` | Yes | Dataset UUIDs to query, or one standalone scope value: 'all'/'*' for the legacy all-datasets behavior, 'analytics' for isAnalytics=true datasets, or 'operational' for isAnalytics=false datasets. |
| `date` | `string` | Yes |  |
| `errorCount` | `float` | Yes | Number of errors encountered |
| `errors` | `array` | No | Array of error details |
| `event` | `string` | Yes |  |
| `eventIds` | `array` | Yes | List of event UUIDs to update (1-100) |
| `failedCount` | `float` | Yes |  |
| `failures` | `array` | No | List of events that failed to update with error messages |
| `hasChildren` | `bool` | Yes |  |
| `id` | `float` | Yes | Unique identifier for the saved query |
| `includeCreatedEvents` | `bool` | No | When true, response includes array of created event UUIDs and shard IDs. |
| `indicator` | `string` | Yes |  |
| `indicatorType` | `string` | Yes |  |
| `indicatorTypeId` | `float` | Yes |  |
| `insight` | `string` | No |  |
| `killChain` | `float` | Yes |  |
| `message` | `string` | Yes | Human-readable message describing the operation result |
| `mitreAttack` | `array` | Yes |  |
| `mitreCapec` | `array` | Yes |  |
| `name` | `string` | Yes | Name of the saved query |
| `numReferenced` | `float` | Yes |  |
| `numReferences` | `float` | Yes |  |
| `order` | `string` | No |  |
| `orderBy` | `string` | No |  |
| `page` | `float` | No |  |
| `pageSize` | `float` | No |  |
| `parentId` | `string` | Yes | UUID of the parent event that will be the source of the relationship |
| `query_json` | `string` | Yes | JSON string containing the query parameters |
| `raw` | `array` | No |  |
| `rawId` | `string` | Yes |  |
| `referenced` | `array` | Yes |  |
| `referencedIds` | `array` | Yes |  |
| `references` | `array` | Yes |  |
| `referencesIds` | `array` | Yes |  |
| `relationshipType` | `string` | Yes | Type of relationship to create between parent and child events |
| `relationships` | `array` | Yes | Array of successfully created relationship objects |
| `relationshipsCreated` | `float` | No | Number of relationships that were successfully created |
| `releasabilityId` | `string` | No |  |
| `rule_enabled` | `bool` | Yes | Whether rule is enabled |
| `rule_list_id` | `string` | No | WAF rules list ID for blocking |
| `rule_scope` | `string` | No | Scope for the rule |
| `search` | `array` | No | Structured search as a JSON array of {field, op, value} objects. |
| `source` | `string` | Yes |  |
| `success` | `bool` | Yes | Whether the relationship creation operation completed successfully |
| `tags` | `array` | Yes |  |
| `targetCountry` | `string` | Yes |  |
| `targetCountryAlpha3` | `string` | Yes |  |
| `targetIndustry` | `string` | Yes |  |
| `tlp` | `string` | Yes |  |
| `updatedCount` | `float` | Yes |  |
| `updated_at` | `string` | Yes | Last update timestamp |
| `updates` | `array` | Yes | Fields to update on all specified events. |
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

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Event()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Event()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Event()->load(["id" => "event_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Event()->remove(["account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Event()->update([
  "id" => "event_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EventEntity`

Create a new `EventEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GroupEntity

```php
$group = $client->Group();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `id` | `string` | No |  |
| `members` | `array` | Yes |  |
| `name` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |
| `uuid` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Group()->create([
  "account_id" => null, // string
  "createdAt" => null, // string
  "description" => null, // string
  "members" => null, // array
  "name" => null, // string
  "updatedAt" => null, // string
  "uuid" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Group()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Group()->load(["id" => "group_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Group()->remove(["id" => "group_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Group()->update([
  "id" => "group_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GroupEntity`

Create a new `GroupEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IndicatorEntity

```php
$indicator = $client->Indicator();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completeness` | `array` | Yes |  |
| `confidence` | `int` | No | Updated confidence. |
| `createdAt` | `string` | Yes |  |
| `datasetId` | `string` | No | The dataset ID this indicator belongs to. |
| `description` | `string` | No | Optional description for the indicator type |
| `durableObjectId` | `string` | Yes |  |
| `id` | `string` | No |  |
| `indicatorType` | `string` | Yes | The indicator type to create (e.g., 'DOMAIN', 'IP', 'URL', 'HASH', 'EMAIL') |
| `indicators` | `array` | Yes |  |
| `message` | `string` | Yes |  |
| `metadata` | `array` | No | Updated metadata. |
| `pagination` | `array` | Yes |  |
| `relatedEvents` | `array` | No |  |
| `sources` | `array` | Yes | RSS article sources from which this indicator was extracted. |
| `tags` | `array` | No |  |
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

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Indicator()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Indicator()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Indicator()->load(["id" => "indicator_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Indicator()->remove(["id" => "indicator_id", "account_id" => "account_id", "dataset_id" => "dataset_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Indicator()->update([
  "id" => "indicator_id",
  "account_id" => "account_id",
  "dataset_id" => "dataset_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IndicatorEntity`

Create a new `IndicatorEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IndicatorTypeEntity

```php
$indicator_type = $client->IndicatorType();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->IndicatorType()->load(["account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IndicatorTypeEntity`

Create a new `IndicatorTypeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PermissionEntity

```php
$permission = $client->Permission();
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
| `success` | `bool` | No |  |
| `updatedAt` | `string` | Yes |  |
| `uuid` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Permission()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Permission()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Permission()->remove(["account_id" => "account_id", "dataset_id" => "dataset_id", "id" => "id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Permission()->update([
  "account_id" => "account_id",
  "dataset_id" => "dataset_id",
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PermissionEntity`

Create a new `PermissionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PriorityEntity

```php
$priority = $client->Priority();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `labels` | `array` | Yes | List of labels. |
| `messages` | `array` | Yes |  |
| `page` | `int` | Yes | Page number of results. |
| `per_page` | `int` | Yes | Number of results per page. |
| `priority` | `int` | Yes | Priority. |
| `requirement` | `string` | Yes | Requirement. |
| `result` | `mixed` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `tlp` | `string` | Yes | The CISA defined Traffic Light Protocol (TLP). |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Priority()->create([
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Priority()->load(["id" => "priority_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Priority()->update([
  "id" => "priority_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PriorityEntity`

Create a new `PriorityEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PriorityIntelligenceEntity

```php
$priority_intelligence = $client->PriorityIntelligence();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `labels` | `array` | No |  |
| `priority` | `int` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PriorityIntelligence()->create([
  "account_id" => null, // string
  "requirement" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PriorityIntelligence()->load(["id" => "priority_intelligence_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->PriorityIntelligence()->remove(["id" => "priority_intelligence_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->PriorityIntelligence()->update([
  "id" => "priority_intelligence_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PriorityIntelligenceEntity`

Create a new `PriorityIntelligenceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PriorityIntelligenceRequirementEntity

```php
$priority_intelligence_requirement = $client->PriorityIntelligenceRequirement();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `as_of` | `string` | No |  |
| `backtest_days` | `int` | No |  |
| `candidate_limit` | `int` | No |  |
| `dataset_ids` | `array` | No |  |
| `dimension` | `string` | Yes |  |
| `emerging_min_current_count` | `int` | No |  |
| `enabled` | `bool` | No |  |
| `established_min_absolute_delta` | `int` | No |  |
| `established_min_prior_count` | `int` | No |  |
| `established_min_relative_delta` | `float` | No |  |
| `value` | `string` | Yes |  |
| `window_days` | `int` | No |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PriorityIntelligenceRequirement()->create([
  "account_id" => null, // string
  "dimension" => null, // string
  "value" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PriorityIntelligenceRequirement()->load(["account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->PriorityIntelligenceRequirement()->remove(["account_id" => "account_id", "interest_id" => "interest_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->PriorityIntelligenceRequirement()->update([
  "account_id" => "account_id",
  "interest_id" => "interest_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PriorityIntelligenceRequirementEntity`

Create a new `PriorityIntelligenceRequirementEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PriorityIntelligenceRequirementsPirEntity

```php
$priority_intelligence_requirements__pir = $client->PriorityIntelligenceRequirementsPir();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `labels` | `array` | Yes | List of labels. |
| `messages` | `array` | Yes |  |
| `priority` | `int` | Yes | Priority. |
| `requirement` | `string` | Yes | Requirement. |
| `result` | `mixed` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `tlp` | `string` | Yes | The CISA defined Traffic Light Protocol (TLP). |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PriorityIntelligenceRequirementsPir()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PriorityIntelligenceRequirementsPir()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PriorityIntelligenceRequirementsPirEntity`

Create a new `PriorityIntelligenceRequirementsPirEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PublicCredentialMonitorEntity

```php
$public_credential_monitor = $client->PublicCredentialMonitor();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `domain` | `string` | Yes | Domain to monitor (e.g. |
| `id` | `int` | Yes |  |
| `matched_at` | `string` | Yes |  |
| `username` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PublicCredentialMonitor()->create([
  "account_id" => null, // string
  "created_at" => null, // string
  "domain" => null, // string
  "id" => null, // int
  "matched_at" => null, // string
  "username" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PublicCredentialMonitor()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->PublicCredentialMonitor()->remove(["account_id" => "account_id", "id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PublicCredentialMonitorEntity`

Create a new `PublicCredentialMonitorEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RequestEntity

```php
$request = $client->Request();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed_after` | `mixed` | No | Retrieve requests completed after this time. |
| `completed_before` | `mixed` | No | Retrieve requests completed before this time. |
| `content` | `string` | No | Request content. |
| `created_after` | `mixed` | No | Retrieve requests created after this time. |
| `created_before` | `mixed` | No | Retrieve requests created before this time. |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `array` | Yes |  |
| `page` | `int` | Yes | Page number of results. |
| `per_page` | `int` | Yes | Number of results per page. |
| `priority` | `string` | No | Priority for analyzing the request. |
| `request_type` | `string` | No | Requested information from request. |
| `result` | `array` | Yes |  |
| `sort_by` | `string` | No | Field to sort results by. |
| `sort_order` | `string` | No | Sort order (asc or desc). |
| `status` | `string` | No | Request Status. |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `summary` | `string` | No | Brief description of the request. |
| `tlp` | `string` | No | The CISA defined Traffic Light Protocol (TLP). |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Request()->create([
  "account_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "page" => null, // int
  "per_page" => null, // int
  "result" => null, // array
  "success" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Request()->load(["id" => "request_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Request()->update([
  "id" => "request_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RequestEntity`

Create a new `RequestEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RequestForInformationRfiEntity

```php
$request_for_information__rfi = $client->RequestForInformationRfi();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | No | Content of message. |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `array` | Yes |  |
| `priority` | `string` | No | Priority for analyzing the request. |
| `request_type` | `string` | No | Requested information from request. |
| `result` | `array` | No |  |
| `source` | `string` | No | Asset file to upload. |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `summary` | `string` | No | Brief description of the request. |
| `tlp` | `string` | No | The CISA defined Traffic Light Protocol (TLP). |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->RequestForInformationRfi()->create([
  "account_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "success" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->RequestForInformationRfi()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->RequestForInformationRfi()->load(["account_id" => "account_id", "asset_id" => "asset_id", "request_id" => "request_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->RequestForInformationRfi()->update([
  "account_id" => "account_id",
  "request_id" => "request_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RequestForInformationRfiEntity`

Create a new `RequestForInformationRfiEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RequestsDashboardEntity

```php
$requests_dashboard = $client->RequestsDashboard();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `string` | Yes |  |
| `defaultValue` | `mixed` | No |  |
| `description` | `string` | No |  |
| `displayOrder` | `float` | Yes |  |
| `errors` | `array` | Yes | Always empty on success |
| `fieldLabel` | `string` | Yes |  |
| `fieldName` | `string` | Yes |  |
| `fieldType` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `messages` | `array` | Yes | Always empty on success |
| `options` | `array` | No |  |
| `projectType` | `string` | Yes |  |
| `project_type` | `string` | Yes |  |
| `public` | `bool` | Yes |  |
| `request_types` | `array` | Yes |  |
| `required` | `bool` | Yes |  |
| `result` | `array` | Yes |  |
| `sectionID` | `string` | No |  |
| `sectionLabel` | `string` | No |  |
| `success` | `array` | Yes |  |
| `total` | `float` | Yes |  |
| `updated` | `string` | Yes |  |
| `validation` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->RequestsDashboard()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->RequestsDashboard()->load(["account_id" => "account_id", "project_type" => "project_type"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RequestsDashboardEntity`

Create a new `RequestsDashboardEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RfiEntity

```php
$rfi = $client->Rfi();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `array` | Yes |  |
| `assignee` | `string` | Yes | Assignee email |
| `completed` | `string` | Yes | Completion timestamp |
| `created` | `string` | Yes | Creation timestamp |
| `description` | `string` | No | RFI description (optional). |
| `eventId` | `string` | No | Optional related event ID |
| `id` | `string` | Yes | RFI UUID |
| `investigation_id` | `string` | Yes | Investigation UUID |
| `is_free_request` | `bool` | Yes | Whether this is a free request |
| `message_tokens` | `float` | Yes | Total message tokens |
| `metadata` | `array` | No | Optional metadata fields specific to the RFI type |
| `pagination` | `array` | Yes |  |
| `priority` | `string` | Yes | Request priority |
| `readable_id` | `string` | Yes | Human-readable ID |
| `release_entitlements` | `string` | Yes | Release entitlements |
| `report_id` | `string` | Yes | Report UUID |
| `request` | `array` | Yes |  |
| `request_type` | `string` | No | Optional request type for the request |
| `result` | `array` | Yes |  |
| `status` | `string` | Yes | RFI status. |
| `subtypeId` | `string` | No | Optional subtype ID |
| `success` | `string` | Yes |  |
| `summary` | `string` | Yes | RFI summary |
| `title` | `string` | No | RFI title (optional). |
| `tlp` | `string` | Yes | TLP classification |
| `tokens` | `float` | Yes | Total tokens used |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Rfi()->create([
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Rfi()->load(["id" => "rfi_id", "project_type" => "project_type"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Rfi()->update([
  "id" => "rfi_id",
  "account_id" => "account_id",
  "project_type" => "project_type",
  "request_id" => "request_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RfiEntity`

Create a new `RfiEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RfiMessageEntity

```php
$rfi_message = $client->RfiMessage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachment_asset_ids` | `array` | No |  |
| `attachments` | `array` | Yes |  |
| `author_id` | `string` | No |  |
| `author_name` | `string` | No |  |
| `content` | `string` | Yes |  |
| `created` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `is_cloudflare_team` | `bool` | Yes |  |
| `is_published` | `bool` | Yes |  |
| `publish` | `bool` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->RfiMessage()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->RfiMessage()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->RfiMessage()->load(["id" => "rfi_message_id", "account_id" => "account_id", "project_type" => "project_type", "request_id" => "request_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->RfiMessage()->update([
  "id" => "rfi_message_id",
  "account_id" => "account_id",
  "project_type" => "project_type",
  "request_id" => "request_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RfiMessageEntity`

Create a new `RfiMessageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RuleEntity

```php
$rule = $client->Rule();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `arrays` | `array` | Yes |  |
| `headers` | `array` | Yes |  |
| `operators` | `array` | Yes |  |
| `scalars` | `array` | Yes |  |
| `string_arrays` | `array` | Yes |  |
| `structs` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Rule()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RuleEntity`

Create a new `RuleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ScanEntity

```php
$scan = $client->Scan();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `frequency` | `float` | No | Defines the number of days between each scan (0 = One-off scan). |
| `ips` | `array` | No | Defines a list of IP addresses or CIDR blocks to scan. |
| `messages` | `array` | Yes |  |
| `ports` | `array` | No | Defines a list of ports to scan. |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Scan()->create([
  "account_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "result" => null, // array
  "success" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Scan()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Scan()->load(["account_id" => "account_id", "config_id" => "config_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Scan()->remove(["account_id" => "account_id", "config_id" => "config_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Scan()->update([
  "account_id" => "account_id",
  "config_id" => "config_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ScanEntity`

Create a new `ScanEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TagEntity

```php
$tag = $client->Tag();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeDuration` | `string` | No |  |
| `activeDuration_annotated` | `array` | Yes |  |
| `actorCategory` | `string` | No |  |
| `actorCategory_annotated` | `array` | Yes |  |
| `aliasGroupNames` | `array` | No |  |
| `aliasGroupNamesInternal` | `array` | No |  |
| `aliases` | `array` | No | Structured aliases ({ value, confidence 1-10, tlp }). |
| `attributionOrganization` | `string` | No |  |
| `attributionOrganization_annotated` | `array` | Yes |  |
| `categoryName` | `string` | No |  |
| `categoryUuid` | `string` | No | Tag type (category) UUID. |
| `confidence` | `int` | No | Overall tag confidence (1-10). |
| `createdAt` | `string` | No |  |
| `dateOfDiscovery` | `string` | No | Date of discovery (ISO YYYY-MM-DD). |
| `description` | `string` | No |  |
| `externalReferenceLinks` | `array` | No |  |
| `externalReferences` | `array` | No | Structured external references ({ url, description }). |
| `externalReferences_annotated` | `array` | No |  |
| `id` | `string` | No |  |
| `internalAliases` | `array` | No | Internal structured aliases ({ value, confidence 1-10, tlp }). |
| `internalDescription` | `string` | No |  |
| `lastSeen` | `string` | No |  |
| `metadata` | `array` | No | Updated metadata. |
| `motive` | `string` | No |  |
| `motive_annotated` | `array` | Yes |  |
| `opsecLevel` | `string` | No |  |
| `opsecLevel_annotated` | `array` | Yes |  |
| `originCountryISO` | `string` | No | ISO country code (alpha-2 or alpha-3). |
| `originCountryISO_annotated` | `array` | Yes |  |
| `priority` | `float` | No |  |
| `priority_annotated` | `array` | Yes |  |
| `properties` | `array` | No | Parsed custom field values. |
| `sophisticationLevel` | `string` | No |  |
| `sophisticationLevel_annotated` | `array` | Yes |  |
| `tlp` | `string` | No | Tag-level TLP handling marking. |
| `type` | `string` | No | Updated relationship type. |
| `updatedAt` | `string` | No |  |
| `uuid` | `string` | Yes |  |
| `value` | `string` | Yes |  |
| `version` | `float` | No |  |

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

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Tag()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Tag()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Tag()->load(["id" => "tag_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Tag()->remove(["id" => "tag_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Tag()->update([
  "id" => "tag_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TagEntity`

Create a new `TagEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TagCategoryEntity

```php
$tag_category = $client->TagCategory();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | No |  |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `schema` | `array` | No | Parsed FieldDefinition[] defining custom fields for this category, or null if none. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TagCategory()->create([
  "account_id" => null, // string
  "name" => null, // string
  "uuid" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TagCategory()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TagCategory()->load(["id" => "tag_category_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TagCategory()->remove(["id" => "tag_category_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TagCategory()->update([
  "id" => "tag_category_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TagCategoryEntity`

Create a new `TagCategoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TargetIndustryEntity

```php
$target_industry = $client->TargetIndustry();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TargetIndustry()->load(["account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TargetIndustryEntity`

Create a new `TargetIndustryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ThreatSignalEntity

```php
$threat_signal = $client->ThreatSignal();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category_id` | `string` | No | One of the predefined Threat Signals feed categories; see GET /:account_id/v2/threat-signals/categories. |
| `category_uuids` | `array` | Yes |  |
| `config` | `string` | No |  |
| `display_name` | `string` | No |  |
| `display_order` | `int` | No |  |
| `enabled` | `bool` | No |  |
| `errors` | `array` | Yes |  |
| `feeds` | `array` | Yes |  |
| `is_active` | `bool` | No |  |
| `message` | `string` | Yes |  |
| `messages` | `array` | Yes |  |
| `name` | `string` | No |  |
| `opted_out` | `bool` | Yes |  |
| `output_schema` | `string` | No |  |
| `poll_interval_s` | `int` | No |  |
| `prompt` | `string` | No |  |
| `read` | `bool` | Yes |  |
| `result` | `mixed` | Yes |  |
| `skill_ids` | `array` | Yes |  |
| `success` | `bool` | Yes |  |
| `tag_id` | `string` | Yes |  |
| `title` | `string` | No |  |
| `url` | `string` | No |  |
| `why_valuable` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ThreatSignal()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ThreatSignal()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ThreatSignal()->load(["account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ThreatSignal()->remove(["account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ThreatSignal()->update([
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ThreatSignalEntity`

Create a new `ThreatSignalEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```php
$client = new CloudflareCloudforceOneSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
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

