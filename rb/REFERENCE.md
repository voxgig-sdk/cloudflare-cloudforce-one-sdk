# CloudflareCloudforceOne Ruby SDK Reference

Complete API reference for the CloudflareCloudforceOne Ruby SDK.


## CloudflareCloudforceOneSDK

### Constructor

```ruby
require_relative 'CloudflareCloudforceOne_sdk'

client = CloudflareCloudforceOneSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareCloudforceOneSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = CloudflareCloudforceOneSDK.test
```


### Instance Methods

#### `Attacker(data = nil)`

Create a new `Attacker` entity instance. Pass `nil` for no initial data.

#### `BinDb(data = nil)`

Create a new `BinDb` entity instance. Pass `nil` for no initial data.

#### `BrandProtection(data = nil)`

Create a new `BrandProtection` entity instance. Pass `nil` for no initial data.

#### `Category(data = nil)`

Create a new `Category` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneAccountExemption(data = nil)`

Create a new `CloudforceOneAccountExemption` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneDeleteAll(data = nil)`

Create a new `CloudforceOneDeleteAll` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneEditApproval(data = nil)`

Create a new `CloudforceOneEditApproval` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneEmailRuleValidation(data = nil)`

Create a new `CloudforceOneEmailRuleValidation` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneEmailRulesList(data = nil)`

Create a new `CloudforceOneEmailRulesList` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneRequestsApiResponseCommon(data = nil)`

Create a new `CloudforceOneRequestsApiResponseCommon` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneRule(data = nil)`

Create a new `CloudforceOneRule` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneRuleApprovalDetail(data = nil)`

Create a new `CloudforceOneRuleApprovalDetail` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneRuleApprovalsList(data = nil)`

Create a new `CloudforceOneRuleApprovalsList` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneRulePreview(data = nil)`

Create a new `CloudforceOneRulePreview` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneRulesPreviewList(data = nil)`

Create a new `CloudforceOneRulesPreviewList` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneRulesSearch(data = nil)`

Create a new `CloudforceOneRulesSearch` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneStat(data = nil)`

Create a new `CloudforceOneStat` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneSuccess(data = nil)`

Create a new `CloudforceOneSuccess` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneTreeNode(data = nil)`

Create a new `CloudforceOneTreeNode` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneValidation(data = nil)`

Create a new `CloudforceOneValidation` entity instance. Pass `nil` for no initial data.

#### `Collection(data = nil)`

Create a new `Collection` entity instance. Pass `nil` for no initial data.

#### `CollectionsItem(data = nil)`

Create a new `CollectionsItem` entity instance. Pass `nil` for no initial data.

#### `Country(data = nil)`

Create a new `Country` entity instance. Pass `nil` for no initial data.

#### `DashboardAsset(data = nil)`

Create a new `DashboardAsset` entity instance. Pass `nil` for no initial data.

#### `DashboardUser(data = nil)`

Create a new `DashboardUser` entity instance. Pass `nil` for no initial data.

#### `Dataset(data = nil)`

Create a new `Dataset` entity instance. Pass `nil` for no initial data.

#### `Event(data = nil)`

Create a new `Event` entity instance. Pass `nil` for no initial data.

#### `Group(data = nil)`

Create a new `Group` entity instance. Pass `nil` for no initial data.

#### `Indicator(data = nil)`

Create a new `Indicator` entity instance. Pass `nil` for no initial data.

#### `IndicatorType(data = nil)`

Create a new `IndicatorType` entity instance. Pass `nil` for no initial data.

#### `Permission(data = nil)`

Create a new `Permission` entity instance. Pass `nil` for no initial data.

#### `Priority(data = nil)`

Create a new `Priority` entity instance. Pass `nil` for no initial data.

#### `PriorityIntelligence(data = nil)`

Create a new `PriorityIntelligence` entity instance. Pass `nil` for no initial data.

#### `PriorityIntelligenceRequirement(data = nil)`

Create a new `PriorityIntelligenceRequirement` entity instance. Pass `nil` for no initial data.

#### `PriorityIntelligenceRequirementsPir(data = nil)`

Create a new `PriorityIntelligenceRequirementsPir` entity instance. Pass `nil` for no initial data.

#### `PublicCredentialMonitor(data = nil)`

Create a new `PublicCredentialMonitor` entity instance. Pass `nil` for no initial data.

#### `Request(data = nil)`

Create a new `Request` entity instance. Pass `nil` for no initial data.

#### `RequestForInformationRfi(data = nil)`

Create a new `RequestForInformationRfi` entity instance. Pass `nil` for no initial data.

#### `RequestsDashboard(data = nil)`

Create a new `RequestsDashboard` entity instance. Pass `nil` for no initial data.

#### `Rfi(data = nil)`

Create a new `Rfi` entity instance. Pass `nil` for no initial data.

#### `RfiMessage(data = nil)`

Create a new `RfiMessage` entity instance. Pass `nil` for no initial data.

#### `Rule(data = nil)`

Create a new `Rule` entity instance. Pass `nil` for no initial data.

#### `Scan(data = nil)`

Create a new `Scan` entity instance. Pass `nil` for no initial data.

#### `Tag(data = nil)`

Create a new `Tag` entity instance. Pass `nil` for no initial data.

#### `TagCategory(data = nil)`

Create a new `TagCategory` entity instance. Pass `nil` for no initial data.

#### `TargetIndustry(data = nil)`

Create a new `TargetIndustry` entity instance. Pass `nil` for no initial data.

#### `ThreatSignal(data = nil)`

Create a new `ThreatSignal` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## AttackerEntity

```ruby
attacker = client.Attacker
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `String` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Attacker.load({ "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AttackerEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BinDbEntity

```ruby
bin_db = client.BinDb
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_type` | `String` | Yes |  |
| `md5` | `String` | Yes |  |
| `sha1` | `String` | Yes |  |
| `sha256` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BinDb.create({
  "account_id" => "example_account_id", # String
  "content_type" => "example_content_type", # String
  "md5" => "example_md5", # String
  "sha1" => "example_sha1", # String
  "sha256" => "example_sha256", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.BinDb.load({ "account_id" => "account_id", "hash" => "hash" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BinDbEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BrandProtectionEntity

```ruby
brand_protection = client.BrandProtection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `String` | Yes |  |
| `body` | `String` | Yes |  |
| `brand` | `String` | Yes |  |
| `category` | `String` | Yes |  |
| `content_type` | `String` | No | MIME type of the image (only present when download=true) |
| `createNotice` | `Boolean` | No |  |
| `createdAt` | `String` | Yes |  |
| `description` | `String` | Yes |  |
| `dismissed` | `Boolean` | Yes | Whether the match is dismissed. |
| `domain` | `String` | Yes |  |
| `domain_id` | `Integer` | Yes |  |
| `domains` | `Array` | Yes |  |
| `errors` | `Array` | Yes |  |
| `fields` | `Hash` | Yes |  |
| `first_seen` | `String` | Yes |  |
| `format` | `String` | No |  |
| `id` | `Float` | Yes |  |
| `image_data` | `String` | Yes | Base64 encoded image data. |
| `letterText` | `String` | Yes |  |
| `letterType` | `String` | Yes |  |
| `matchId` | `Float` | Yes |  |
| `matchType` | `String` | Yes |  |
| `match_details` | `Array` | No | Per-match detail objects with query metadata and individual dismissed state. |
| `match_ids` | `Array` | No |  |
| `matched_at` | `String` | Yes |  |
| `matches` | `Array` | Yes |  |
| `max_time` | `String` | No |  |
| `message` | `String` | Yes |  |
| `messages` | `Array` | Yes |  |
| `min_time` | `String` | No |  |
| `name` | `String` | Yes |  |
| `noticeParams` | `Hash` | Yes |  |
| `notices` | `Array` | Yes |  |
| `public_scans` | `Hash` | Yes |  |
| `queryId` | `Float` | Yes |  |
| `queryIds` | `Array` | No |  |
| `query_id` | `Integer` | Yes |  |
| `r2_path` | `String` | Yes |  |
| `registrar` | `String` | Yes |  |
| `result` | `Object` | Yes |  |
| `result_info` | `Hash` | Yes | Present on paginated list responses when page or per_page is supplied. |
| `scan` | `Boolean` | No |  |
| `scan_matches` | `Boolean` | No |  |
| `scan_status` | `String` | Yes |  |
| `scan_submission_id` | `Integer` | Yes |  |
| `score_threshold` | `Float` | No | Minimum similarity score threshold for matches (0-1, default: 0) |
| `search_lookback` | `Boolean` | No | If true, search recent domain lookback entries for matches |
| `similarity_score` | `Float` | Yes |  |
| `similarity_threshold` | `Float` | Yes | Minimum similarity score (0-1) required for visual matches |
| `source` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `string_matches` | `Array` | Yes |  |
| `success` | `Boolean` | Yes |  |
| `tag` | `String` | Yes | Unique identifier for the logo query |
| `takedownNoticeId` | `Float` | Yes |  |
| `templateId` | `String` | Yes |  |
| `top_k` | `Integer` | No | Number of closest matches to return (1-100, default: 10) |
| `total_analyzed` | `Float` | Yes |  |
| `total_matches` | `Float` | Yes |  |
| `truncated` | `Boolean` | Yes |  |
| `updatedAt` | `String` | Yes |  |
| `uploaded_at` | `String` | Yes |  |
| `url_scan_id` | `String` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BrandProtection.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.BrandProtection.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.BrandProtection.load({ "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.BrandProtection.remove({ "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.BrandProtection.update({
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BrandProtectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CategoryEntity

```ruby
category = client.Category
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `killChain` | `Float` | Yes |  |
| `mitreAttack` | `Array` | No |  |
| `mitreCapec` | `Array` | No |  |
| `name` | `String` | Yes |  |
| `shortname` | `String` | No |  |
| `uuid` | `String` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Category.create({
  "account_id" => "example_account_id", # String
  "killChain" => 1, # Float
  "name" => "example_name", # String
  "uuid" => "example_uuid", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Category.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Category.load({ "id" => "category_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Category.remove({ "id" => "category_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Category.update({
  "id" => "category_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CategoryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CloudforceOneAccountExemptionEntity

```ruby
cloudforce_one_account_exemption = client.CloudforceOneAccountExemption
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `namespace` | `Array` | Yes |  |
| `tag_match` | `Array` | Yes |  |
| `worker_name` | `Array` | Yes |  |

### Field Usage by Operation

| Field | list | create | update | remove |
| --- | --- | --- | --- | --- |
| `namespace` | - | Yes | Yes | - |
| `tag_match` | - | Yes | Yes | - |
| `worker_name` | - | Yes | Yes | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CloudforceOneAccountExemption.create({
  "account_id" => "example_account_id", # String
  "namespace" => [], # Array
  "tag_match" => [], # Array
  "worker_name" => [], # Array
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.CloudforceOneAccountExemption.list
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.CloudforceOneAccountExemption.remove({ "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.CloudforceOneAccountExemption.update({
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CloudforceOneAccountExemptionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CloudforceOneDeleteAllEntity

```ruby
cloudforce_one_delete_all = client.CloudforceOneDeleteAll
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.CloudforceOneDeleteAll.remove({ "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CloudforceOneDeleteAllEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CloudforceOneEditApprovalEntity

```ruby
cloudforce_one_edit_approval = client.CloudforceOneEditApproval
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `condition` | `Hash` | Yes | Nested condition groups support up to 10 levels of depth. |
| `description` | `String` | No |  |
| `enabled` | `Boolean` | No |  |
| `id` | `String` | No |  |
| `meta` | `Array` | No |  |
| `name` | `String` | Yes |  |
| `status` | `String` | No | Disposition for matching email. |
| `strings` | `Array` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CloudforceOneEditApproval.create({
  "account_id" => "example_account_id", # String
  "approval_id" => "example_approval_id", # String
  "condition" => {}, # Hash
  "name" => "example_name", # String
})
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.CloudforceOneEditApproval.update({
  "account_id" => "account_id",
  "id" => "id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CloudforceOneEditApprovalEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CloudforceOneEmailRuleValidationEntity

```ruby
cloudforce_one_email_rule_validation = client.CloudforceOneEmailRuleValidation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `compiled_yara` | `String` | No |  |
| `condition` | `Hash` | Yes | Nested condition groups support up to 10 levels of depth. |
| `description` | `String` | No |  |
| `enabled` | `Boolean` | No |  |
| `error` | `String` | No |  |
| `existing_rule_id` | `String` | No | Existing rule ID to exclude from duplicate-name checks when validating an update. |
| `meta` | `Array` | No |  |
| `name` | `String` | Yes |  |
| `status` | `String` | No | Disposition for matching email. |
| `strings` | `Array` | No |  |
| `valid` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CloudforceOneEmailRuleValidation.create({
  "account_id" => "example_account_id", # String
  "condition" => {}, # Hash
  "name" => "example_name", # String
  "valid" => true, # Boolean
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CloudforceOneEmailRuleValidationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CloudforceOneEmailRulesListEntity

```ruby
cloudforce_one_email_rules_list = client.CloudforceOneEmailRulesList
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `String` | No |  |
| `created_at` | `Float` | Yes |  |
| `created_by` | `String` | Yes |  |
| `description` | `String` | Yes |  |
| `enabled` | `Boolean` | Yes | Whether this rule is active for dice consumers. |
| `id` | `String` | Yes |  |
| `is_public` | `Boolean` | Yes | Whether this rule is visible to other internal accounts. |
| `meta` | `Array` | No | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `String` | Yes |  |
| `namespaces` | `Array` | Yes |  |
| `path` | `String` | Yes |  |
| `pending_approval_id` | `Float` | Yes | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `Hash` | Yes | Proposed update or deletion awaiting approval. |
| `structured_source` | `String` | No | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `Float` | Yes |  |
| `updated_by` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.CloudforceOneEmailRulesList.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CloudforceOneEmailRulesListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CloudforceOneRequestsApiResponseCommonEntity

```ruby
cloudforce_one_requests_api_response_common = client.CloudforceOneRequestsApiResponseCommon
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.CloudforceOneRequestsApiResponseCommon.remove({ "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CloudforceOneRequestsApiResponseCommonEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CloudforceOneRuleEntity

```ruby
cloudforce_one_rule = client.CloudforceOneRule
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `Array` | No |  |
| `commit_message` | `String` | No | Human-readable justification for this change. |
| `content` | `String` | Yes |  |
| `description` | `String` | No | Human-readable description of the rule. |
| `enabled` | `Boolean` | No | Whether this rule is active for dice consumers. |
| `is_public` | `Boolean` | No | Whether this rule is visible to other internal accounts. |
| `meta` | `Array` | No | Adds YARA meta entries to the rule's meta block and stores them in rule_meta alongside content metadata. |
| `name` | `String` | Yes |  |
| `namespaces` | `Array` | No | Optional WfP deployment tags (customer rules only). |
| `path` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CloudforceOneRule.create({
  "account_id" => "example_account_id", # String
  "content" => "example_content", # String
  "name" => "example_name", # String
  "path" => "example_path", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CloudforceOneRuleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CloudforceOneRuleApprovalDetailEntity

```ruby
cloudforce_one_rule_approval_detail = client.CloudforceOneRuleApprovalDetail
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `audit_log_id` | `Float` | Yes |  |
| `can_review` | `Boolean` | Yes | Whether the authenticated user may approve or reject this pending change. |
| `cancelled_at` | `Float` | Yes | Time at which the requester cancelled the approval. |
| `cancelled_by` | `String` | Yes | Requester who cancelled the pending approval. |
| `change_description` | `String` | Yes |  |
| `change_type` | `String` | Yes |  |
| `commit_message` | `String` | Yes | The requester supplies this human-readable justification with the change. |
| `compiler_warnings` | `Array` | No |  |
| `current_rule` | `Object` | Yes |  |
| `id` | `Float` | Yes |  |
| `proposed_changes` | `Object` | Yes | Contains structured proposed rule changes, or null for unresolved persisted data. |
| `rejection_reason` | `String` | Yes | The reviewer may supply a reason when rejecting the change. |
| `requested_at` | `Float` | Yes |  |
| `requested_by` | `String` | Yes |  |
| `reviewed_at` | `Float` | Yes |  |
| `reviewer_scope` | `String` | Yes | Review policy: general Nomos approvers for default; general approvers or Phishguard for email. |
| `revision_number` | `Integer` | Yes | Revision number within this approval request chain. |
| `rule_id` | `String` | Yes |  |
| `rule_name` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `superseded_by_approval_id` | `Float` | Yes | Newer approval revision that replaced this approval. |
| `supersedes_approval_id` | `Float` | Yes | This approval replaces the referenced approval revision. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CloudforceOneRuleApprovalDetail.create({
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.CloudforceOneRuleApprovalDetail.load({ "id" => "cloudforce_one_rule_approval_detail_id", "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CloudforceOneRuleApprovalDetailEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CloudforceOneRuleApprovalsListEntity

```ruby
cloudforce_one_rule_approvals_list = client.CloudforceOneRuleApprovalsList
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `audit_log_id` | `Float` | Yes |  |
| `can_review` | `Boolean` | Yes | Whether the authenticated user may approve or reject this pending change. |
| `cancelled_at` | `Float` | Yes | Time at which the requester cancelled the approval. |
| `cancelled_by` | `String` | Yes | Requester who cancelled the pending approval. |
| `change_description` | `String` | Yes |  |
| `change_type` | `String` | Yes |  |
| `commit_message` | `String` | Yes | The requester supplies this human-readable justification with the change. |
| `id` | `Float` | Yes |  |
| `proposed_changes` | `Object` | Yes | Contains structured proposed rule changes, or null for unresolved persisted data. |
| `rejection_reason` | `String` | Yes | The reviewer may supply a reason when rejecting the change. |
| `requested_at` | `Float` | Yes |  |
| `requested_by` | `String` | Yes |  |
| `reviewed_at` | `Float` | Yes |  |
| `reviewer_scope` | `String` | Yes | Review policy: general Nomos approvers for default; general approvers or Phishguard for email. |
| `revision_number` | `Integer` | Yes | Revision number within this approval request chain. |
| `rule_id` | `String` | Yes |  |
| `rule_name` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `superseded_by_approval_id` | `Float` | Yes | Newer approval revision that replaced this approval. |
| `supersedes_approval_id` | `Float` | Yes | This approval replaces the referenced approval revision. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.CloudforceOneRuleApprovalsList.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CloudforceOneRuleApprovalsListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CloudforceOneRulePreviewEntity

```ruby
cloudforce_one_rule_preview = client.CloudforceOneRulePreview
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit_message` | `String` | No | Human-readable justification for this change. |
| `condition` | `Hash` | Yes | Nested condition groups support up to 10 levels of depth. |
| `content` | `String` | No |  |
| `created_at` | `Float` | Yes |  |
| `created_by` | `String` | Yes |  |
| `description` | `String` | Yes | Human-readable description of the rule. |
| `enabled` | `Boolean` | Yes | Whether this rule is active for dice consumers. |
| `id` | `String` | Yes |  |
| `is_public` | `Boolean` | Yes | Whether this rule is visible to other internal accounts. |
| `meta` | `Array` | No | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `String` | Yes |  |
| `namespaces` | `Array` | Yes |  |
| `path` | `String` | Yes | Path change goes through approval workflow. |
| `pending_approval_id` | `Float` | Yes | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `Hash` | Yes | Proposed update or deletion awaiting approval. |
| `status` | `String` | No | Disposition for matching email. |
| `strings` | `Array` | No |  |
| `structured_source` | `String` | No | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `Float` | Yes |  |
| `updated_by` | `String` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CloudforceOneRulePreview.create({
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.CloudforceOneRulePreview.load({ "id" => "cloudforce_one_rule_preview_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.CloudforceOneRulePreview.update({
  "id" => "cloudforce_one_rule_preview_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CloudforceOneRulePreviewEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CloudforceOneRulesPreviewListEntity

```ruby
cloudforce_one_rules_preview_list = client.CloudforceOneRulesPreviewList
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `String` | No |  |
| `created_at` | `Float` | Yes |  |
| `created_by` | `String` | Yes |  |
| `description` | `String` | Yes |  |
| `enabled` | `Boolean` | Yes | Whether this rule is active for dice consumers. |
| `id` | `String` | Yes |  |
| `is_public` | `Boolean` | Yes | Whether this rule is visible to other internal accounts. |
| `meta` | `Array` | No | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `String` | Yes |  |
| `namespaces` | `Array` | Yes |  |
| `path` | `String` | Yes |  |
| `pending_approval_id` | `Float` | Yes | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `Hash` | Yes | Proposed update or deletion awaiting approval. |
| `structured_source` | `String` | No | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `Float` | Yes |  |
| `updated_by` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.CloudforceOneRulesPreviewList.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CloudforceOneRulesPreviewListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CloudforceOneRulesSearchEntity

```ruby
cloudforce_one_rules_search = client.CloudforceOneRulesSearch
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `String` | No |  |
| `created_at` | `Float` | Yes |  |
| `created_by` | `String` | Yes |  |
| `description` | `String` | Yes |  |
| `enabled` | `Boolean` | Yes | Whether this rule is active for dice consumers. |
| `id` | `String` | Yes |  |
| `is_public` | `Boolean` | Yes | Whether this rule is visible to other internal accounts. |
| `meta` | `Array` | No | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `String` | Yes |  |
| `namespaces` | `Array` | Yes |  |
| `path` | `String` | Yes |  |
| `pending_approval_id` | `Float` | Yes | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `Hash` | Yes | Proposed update or deletion awaiting approval. |
| `score` | `Float` | No | Relevance score in [0,1]. |
| `scoring_details` | `Hash` | No | AI Search hybrid retrieval returns this per-component scoring breakdown. |
| `structured_source` | `String` | No | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `Float` | Yes |  |
| `updated_by` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.CloudforceOneRulesSearch.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CloudforceOneRulesSearchEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CloudforceOneStatEntity

```ruby
cloudforce_one_stat = client.CloudforceOneStat
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.CloudforceOneStat.load({ "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CloudforceOneStatEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CloudforceOneSuccessEntity

```ruby
cloudforce_one_success = client.CloudforceOneSuccess
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CloudforceOneSuccess.create({
  "account_id" => "example_account_id", # String
  "approval_id" => "example_approval_id", # String
  "success" => true, # Boolean
})
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.CloudforceOneSuccess.remove({ "account_id" => "account_id", "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CloudforceOneSuccessEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CloudforceOneTreeNodeEntity

```ruby
cloudforce_one_tree_node = client.CloudforceOneTreeNode
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `children` | `Array` | Yes |  |
| `count` | `Float` | Yes |  |
| `name` | `String` | Yes |  |
| `path` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.CloudforceOneTreeNode.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CloudforceOneTreeNodeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CloudforceOneValidationEntity

```ruby
cloudforce_one_validation = client.CloudforceOneValidation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `String` | Yes |  |
| `error` | `String` | No |  |
| `excludeRuleId` | `String` | No |  |
| `name` | `String` | Yes |  |
| `namespaces` | `Array` | No |  |
| `path` | `String` | No |  |
| `valid` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CloudforceOneValidation.create({
  "account_id" => "example_account_id", # String
  "content" => "example_content", # String
  "name" => "example_name", # String
  "valid" => true, # Boolean
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CloudforceOneValidationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CollectionEntity

```ruby
collection = client.Collection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `columns` | `Array` | Yes |  |
| `created_at` | `String` | Yes |  |
| `created_by` | `String` | Yes |  |
| `data` | `Hash` | Yes |  |
| `id` | `String` | Yes |  |
| `item_count` | `Float` | Yes |  |
| `metadata` | `Hash` | No |  |
| `name` | `String` | Yes | New column name (must be unique) |
| `position` | `Float` | Yes | Column display order |
| `required` | `Boolean` | Yes | Whether column is required |
| `status` | `String` | Yes |  |
| `type` | `String` | Yes | Column type: text, number, boolean, or date |
| `updated_at` | `String` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Collection.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Collection.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Collection.load({ "id" => "collection_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Collection.remove({ "id" => "collection_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Collection.update({
  "id" => "collection_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CollectionsItemEntity

```ruby
collections_item = client.CollectionsItem
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CollectionsItem.create({
  "account_id" => "example_account_id", # String
  "collection_id" => "example_collection_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CollectionsItemEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CountryEntity

```ruby
country = client.Country
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | Yes |  |
| `success` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Country.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CountryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DashboardAssetEntity

```ruby
dashboard_asset = client.DashboardAsset
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assets` | `Hash` | Yes |  |
| `contentType` | `Hash` | Yes |  |
| `count` | `Hash` | Yes |  |
| `downloadable` | `Hash` | Yes |  |
| `expiresAt` | `Hash` | Yes |  |
| `fileName` | `Hash` | Yes |  |
| `fileSize` | `Hash` | Yes |  |
| `id` | `Hash` | Yes |  |
| `is_cloudflare_team` | `Hash` | Yes |  |
| `metadata` | `Hash` | Yes |  |
| `origin` | `Hash` | Yes |  |
| `state` | `Hash` | Yes |  |
| `tlp` | `Hash` | Yes |  |
| `uploadedAt` | `Hash` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DashboardAsset.create({
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DashboardAsset.load({ "account_id" => "account_id", "project_type" => "project_type", "request_id" => "request_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DashboardAssetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DashboardUserEntity

```ruby
dashboard_user = client.DashboardUser
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `String` | No | User display name |
| `id` | `String` | Yes | Unique user ID |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DashboardUser.load({ "account_id" => "account_id", "request_id" => "request_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DashboardUserEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DatasetEntity

```ruby
dataset = client.Dataset
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deletedAt` | `String` | No |  |
| `id` | `String` | No |  |
| `indicatorWriteMode` | `String` | Yes | Effective indicator mutation capability after account/dataset authorization and dataset storage capability are applied. |
| `isAnalytics` | `Boolean` | Yes |  |
| `isPublic` | `Boolean` | Yes | If true, then anyone can search the dataset. |
| `name` | `String` | Yes | Used to describe the dataset within the account context. |
| `uuid` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Dataset.create({
  "account_id" => "example_account_id", # String
  "id" => "example_id", # String
  "indicatorWriteMode" => "example_indicatorWriteMode", # String
  "isAnalytics" => true, # Boolean
  "isPublic" => true, # Boolean
  "name" => "example_name", # String
  "uuid" => "example_uuid", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Dataset.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Dataset.load({ "id" => "dataset_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Dataset.remove({ "id" => "dataset_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Dataset.update({
  "id" => "dataset_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DatasetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EventEntity

```ruby
event = client.Event
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountId` | `Float` | Yes |  |
| `account_id` | `Integer` | Yes | Account ID |
| `alert_enabled` | `Boolean` | Yes | Whether alerts are enabled |
| `alert_rollup_enabled` | `Boolean` | Yes | Whether alert rollup is enabled |
| `attacker` | `String` | Yes |  |
| `attackerCountry` | `String` | Yes |  |
| `attackerCountryAlpha3` | `String` | Yes |  |
| `category` | `String` | Yes |  |
| `childIds` | `Array` | No | Array of child event UUIDs that were processed |
| `created` | `String` | Yes |  |
| `createdAt` | `String` | No |  |
| `createdEventsCount` | `Float` | Yes | Number of events created |
| `createdIndicatorsCount` | `Float` | Yes | Number of indicators created |
| `createdRelationshipsCount` | `Float` | Yes | Number of relationships created |
| `created_at` | `String` | Yes | Creation timestamp |
| `cursor` | `String` | No | Cursor for pagination. |
| `custom_threat_feed_id` | `Integer` | No | Intel Indicator Feed ID (numeric) |
| `data` | `String` | Yes |  |
| `datasetId` | `String` | Yes | Dataset UUIDs to query, or one standalone scope value: 'all'/'*' for the legacy all-datasets behavior, 'analytics' for isAnalytics=true datasets, or 'operational' for isAnalytics=false datasets. |
| `date` | `String` | Yes |  |
| `errorCount` | `Float` | Yes | Number of errors encountered |
| `errors` | `Array` | No | Array of error details |
| `event` | `String` | Yes |  |
| `eventIds` | `Array` | Yes | List of event UUIDs to update (1-100) |
| `failedCount` | `Float` | Yes |  |
| `failures` | `Array` | No | List of events that failed to update with error messages |
| `hasChildren` | `Boolean` | Yes |  |
| `id` | `Float` | Yes | Unique identifier for the saved query |
| `includeCreatedEvents` | `Boolean` | No | When true, response includes array of created event UUIDs and shard IDs. |
| `indicator` | `String` | Yes |  |
| `indicatorType` | `String` | Yes |  |
| `indicatorTypeId` | `Float` | Yes |  |
| `insight` | `String` | No |  |
| `killChain` | `Float` | Yes |  |
| `message` | `String` | Yes | Human-readable message describing the operation result |
| `mitreAttack` | `Array` | Yes |  |
| `mitreCapec` | `Array` | Yes |  |
| `name` | `String` | Yes | Name of the saved query |
| `numReferenced` | `Float` | Yes |  |
| `numReferences` | `Float` | Yes |  |
| `order` | `String` | No |  |
| `orderBy` | `String` | No |  |
| `page` | `Float` | No |  |
| `pageSize` | `Float` | No |  |
| `parentId` | `String` | Yes | UUID of the parent event that will be the source of the relationship |
| `query_json` | `String` | Yes | JSON string containing the query parameters |
| `raw` | `Hash` | No |  |
| `rawId` | `String` | Yes |  |
| `referenced` | `Array` | Yes |  |
| `referencedIds` | `Array` | Yes |  |
| `references` | `Array` | Yes |  |
| `referencesIds` | `Array` | Yes |  |
| `relationshipType` | `String` | Yes | Type of relationship to create between parent and child events |
| `relationships` | `Array` | Yes | Array of successfully created relationship objects |
| `relationshipsCreated` | `Float` | No | Number of relationships that were successfully created |
| `releasabilityId` | `String` | No |  |
| `rule_enabled` | `Boolean` | Yes | Whether rule is enabled |
| `rule_list_id` | `String` | No | WAF rules list ID for blocking |
| `rule_scope` | `String` | No | Scope for the rule |
| `search` | `Array` | No | Structured search as a JSON array of {field, op, value} objects. |
| `source` | `String` | Yes |  |
| `success` | `Boolean` | Yes | Whether the relationship creation operation completed successfully |
| `tags` | `Array` | Yes |  |
| `targetCountry` | `String` | Yes |  |
| `targetCountryAlpha3` | `String` | Yes |  |
| `targetIndustry` | `String` | Yes |  |
| `tlp` | `String` | Yes |  |
| `updatedCount` | `Float` | Yes |  |
| `updated_at` | `String` | Yes | Last update timestamp |
| `updates` | `Hash` | Yes | Fields to update on all specified events. |
| `user_email` | `String` | Yes | Email of the user who created the query |
| `uuid` | `String` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Event.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Event.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Event.load({ "id" => "event_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Event.remove({ "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Event.update({
  "id" => "event_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EventEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GroupEntity

```ruby
group = client.Group
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `String` | Yes |  |
| `description` | `String` | Yes |  |
| `id` | `String` | No |  |
| `members` | `Array` | Yes |  |
| `name` | `String` | Yes |  |
| `updatedAt` | `String` | Yes |  |
| `uuid` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Group.create({
  "account_id" => "example_account_id", # String
  "createdAt" => "example_createdAt", # String
  "description" => "example_description", # String
  "members" => [], # Array
  "name" => "example_name", # String
  "updatedAt" => "example_updatedAt", # String
  "uuid" => "example_uuid", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Group.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Group.load({ "id" => "group_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Group.remove({ "id" => "group_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Group.update({
  "id" => "group_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GroupEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IndicatorEntity

```ruby
indicator = client.Indicator
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completeness` | `Hash` | Yes |  |
| `confidence` | `Integer` | No | Updated confidence. |
| `createdAt` | `String` | Yes |  |
| `datasetId` | `String` | No | The dataset ID this indicator belongs to. |
| `description` | `String` | No | Optional description for the indicator type |
| `durableObjectId` | `String` | Yes |  |
| `id` | `String` | No |  |
| `indicatorType` | `String` | Yes | The indicator type to create (e.g., 'DOMAIN', 'IP', 'URL', 'HASH', 'EMAIL') |
| `indicators` | `Hash` | Yes |  |
| `message` | `String` | Yes |  |
| `metadata` | `Hash` | No | Updated metadata. |
| `pagination` | `Hash` | Yes |  |
| `relatedEvents` | `Array` | No |  |
| `sources` | `Array` | Yes | RSS article sources from which this indicator was extracted. |
| `tags` | `Array` | No |  |
| `tlp` | `String` | No | Traffic Light Protocol designation. |
| `type` | `String` | No | Updated relationship type. |
| `updatedAt` | `String` | Yes |  |
| `uuid` | `String` | Yes |  |
| `value` | `String` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Indicator.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Indicator.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Indicator.load({ "id" => "indicator_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Indicator.remove({ "id" => "indicator_id", "account_id" => "account_id", "dataset_id" => "dataset_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Indicator.update({
  "id" => "indicator_id",
  "account_id" => "account_id",
  "dataset_id" => "dataset_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IndicatorEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IndicatorTypeEntity

```ruby
indicator_type = client.IndicatorType
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `String` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.IndicatorType.load({ "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IndicatorTypeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PermissionEntity

```ruby
permission = client.Permission
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `String` | Yes |  |
| `id` | `String` | No |  |
| `message` | `String` | No |  |
| `resourceId` | `String` | No | The resource ID this permission applies to account_id or group_id |
| `resourceType` | `String` | Yes |  |
| `role` | `String` | Yes |  |
| `subjectId` | `String` | Yes |  |
| `subjectType` | `String` | Yes |  |
| `success` | `Boolean` | No |  |
| `updatedAt` | `String` | Yes |  |
| `uuid` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Permission.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Permission.list
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Permission.remove({ "account_id" => "account_id", "dataset_id" => "dataset_id", "id" => "id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Permission.update({
  "account_id" => "account_id",
  "dataset_id" => "dataset_id",
  "id" => "id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PermissionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PriorityEntity

```ruby
priority = client.Priority
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `labels` | `Array` | Yes | List of labels. |
| `messages` | `Array` | Yes |  |
| `page` | `Integer` | Yes | Page number of results. |
| `per_page` | `Integer` | Yes | Number of results per page. |
| `priority` | `Integer` | Yes | Priority. |
| `requirement` | `String` | Yes | Requirement. |
| `result` | `Object` | No |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |
| `tlp` | `String` | Yes | The CISA defined Traffic Light Protocol (TLP). |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Priority.create({
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Priority.load({ "id" => "priority_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Priority.update({
  "id" => "priority_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PriorityEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PriorityIntelligenceEntity

```ruby
priority_intelligence = client.PriorityIntelligence
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `labels` | `Array` | No |  |
| `priority` | `Integer` | No |  |
| `requirement` | `String` | Yes |  |
| `tlp` | `String` | No |  |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `id` | - | - | - | - |
| `labels` | - | - | - | - |
| `priority` | - | - | - | - |
| `requirement` | - | - | Yes | - |
| `tlp` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.PriorityIntelligence.create({
  "account_id" => "example_account_id", # String
  "requirement" => "example_requirement", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.PriorityIntelligence.load({ "id" => "priority_intelligence_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.PriorityIntelligence.remove({ "id" => "priority_intelligence_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.PriorityIntelligence.update({
  "id" => "priority_intelligence_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PriorityIntelligenceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PriorityIntelligenceRequirementEntity

```ruby
priority_intelligence_requirement = client.PriorityIntelligenceRequirement
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `as_of` | `String` | No |  |
| `backtest_days` | `Integer` | No |  |
| `candidate_limit` | `Integer` | No |  |
| `dataset_ids` | `Array` | No |  |
| `dimension` | `String` | Yes |  |
| `emerging_min_current_count` | `Integer` | No |  |
| `enabled` | `Boolean` | No |  |
| `established_min_absolute_delta` | `Integer` | No |  |
| `established_min_prior_count` | `Integer` | No |  |
| `established_min_relative_delta` | `Float` | No |  |
| `value` | `String` | Yes |  |
| `window_days` | `Integer` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.PriorityIntelligenceRequirement.create({
  "account_id" => "example_account_id", # String
  "dimension" => "example_dimension", # String
  "value" => "example_value", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.PriorityIntelligenceRequirement.load({ "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.PriorityIntelligenceRequirement.remove({ "account_id" => "account_id", "interest_id" => "interest_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.PriorityIntelligenceRequirement.update({
  "account_id" => "account_id",
  "interest_id" => "interest_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PriorityIntelligenceRequirementEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PriorityIntelligenceRequirementsPirEntity

```ruby
priority_intelligence_requirements__pir = client.PriorityIntelligenceRequirementsPir
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `labels` | `Array` | Yes | List of labels. |
| `messages` | `Array` | Yes |  |
| `priority` | `Integer` | Yes | Priority. |
| `requirement` | `String` | Yes | Requirement. |
| `result` | `Object` | No |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |
| `tlp` | `String` | Yes | The CISA defined Traffic Light Protocol (TLP). |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.PriorityIntelligenceRequirementsPir.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.PriorityIntelligenceRequirementsPir.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PriorityIntelligenceRequirementsPirEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PublicCredentialMonitorEntity

```ruby
public_credential_monitor = client.PublicCredentialMonitor
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes |  |
| `domain` | `String` | Yes | Domain to monitor (e.g. |
| `id` | `Integer` | Yes |  |
| `matched_at` | `String` | Yes |  |
| `username` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.PublicCredentialMonitor.create({
  "account_id" => "example_account_id", # String
  "created_at" => "example_created_at", # String
  "domain" => "example_domain", # String
  "id" => 1, # Integer
  "matched_at" => "example_matched_at", # String
  "username" => "example_username", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.PublicCredentialMonitor.list
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.PublicCredentialMonitor.remove({ "account_id" => "account_id", "id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PublicCredentialMonitorEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RequestEntity

```ruby
request = client.Request
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed_after` | `Object` | No | Retrieve requests completed after this time. |
| `completed_before` | `Object` | No | Retrieve requests completed before this time. |
| `content` | `String` | No | Request content. |
| `created_after` | `Object` | No | Retrieve requests created after this time. |
| `created_before` | `Object` | No | Retrieve requests created before this time. |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `messages` | `Array` | Yes |  |
| `page` | `Integer` | Yes | Page number of results. |
| `per_page` | `Integer` | Yes | Number of results per page. |
| `priority` | `String` | No | Priority for analyzing the request. |
| `request_type` | `String` | No | Requested information from request. |
| `result` | `Hash` | Yes |  |
| `sort_by` | `String` | No | Field to sort results by. |
| `sort_order` | `String` | No | Sort order (asc or desc). |
| `status` | `String` | No | Request Status. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |
| `summary` | `String` | No | Brief description of the request. |
| `tlp` | `String` | No | The CISA defined Traffic Light Protocol (TLP). |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Request.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "page" => 1, # Integer
  "per_page" => 1, # Integer
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Request.load({ "id" => "request_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Request.update({
  "id" => "request_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RequestEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RequestForInformationRfiEntity

```ruby
request_for_information__rfi = client.RequestForInformationRfi
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `String` | No | Content of message. |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `messages` | `Array` | Yes |  |
| `priority` | `String` | No | Priority for analyzing the request. |
| `request_type` | `String` | No | Requested information from request. |
| `result` | `Array` | No |  |
| `source` | `String` | No | Asset file to upload. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |
| `summary` | `String` | No | Brief description of the request. |
| `tlp` | `String` | No | The CISA defined Traffic Light Protocol (TLP). |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.RequestForInformationRfi.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "success" => true, # Boolean
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.RequestForInformationRfi.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.RequestForInformationRfi.load({ "account_id" => "account_id", "asset_id" => "asset_id", "request_id" => "request_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.RequestForInformationRfi.update({
  "account_id" => "account_id",
  "request_id" => "request_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RequestForInformationRfiEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RequestsDashboardEntity

```ruby
requests_dashboard = client.RequestsDashboard
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `String` | Yes |  |
| `defaultValue` | `Object` | No |  |
| `description` | `String` | No |  |
| `displayOrder` | `Float` | Yes |  |
| `errors` | `Array` | Yes | Always empty on success |
| `fieldLabel` | `String` | Yes |  |
| `fieldName` | `String` | Yes |  |
| `fieldType` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `messages` | `Array` | Yes | Always empty on success |
| `options` | `Array` | No |  |
| `projectType` | `String` | Yes |  |
| `project_type` | `String` | Yes |  |
| `public` | `Boolean` | Yes |  |
| `request_types` | `Array` | Yes |  |
| `required` | `Boolean` | Yes |  |
| `result` | `Hash` | Yes |  |
| `sectionID` | `String` | No |  |
| `sectionLabel` | `String` | No |  |
| `success` | `Hash` | Yes |  |
| `total` | `Float` | Yes |  |
| `updated` | `String` | Yes |  |
| `validation` | `Hash` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.RequestsDashboard.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.RequestsDashboard.load({ "account_id" => "account_id", "project_type" => "project_type" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RequestsDashboardEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RfiEntity

```ruby
rfi = client.Rfi
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `Hash` | Yes |  |
| `assignee` | `String` | Yes | Assignee email |
| `completed` | `String` | Yes | Completion timestamp |
| `created` | `String` | Yes | Creation timestamp |
| `description` | `String` | No | RFI description (optional). |
| `eventId` | `String` | No | Optional related event ID |
| `id` | `String` | Yes | RFI UUID |
| `investigation_id` | `String` | Yes | Investigation UUID |
| `is_free_request` | `Boolean` | Yes | Whether this is a free request |
| `message_tokens` | `Float` | Yes | Total message tokens |
| `metadata` | `Hash` | No | Optional metadata fields specific to the RFI type |
| `pagination` | `Hash` | Yes |  |
| `priority` | `String` | Yes | Request priority |
| `readable_id` | `String` | Yes | Human-readable ID |
| `release_entitlements` | `String` | Yes | Release entitlements |
| `report_id` | `String` | Yes | Report UUID |
| `request` | `Hash` | Yes |  |
| `request_type` | `String` | No | Optional request type for the request |
| `result` | `Array` | Yes |  |
| `status` | `String` | Yes | RFI status. |
| `subtypeId` | `String` | No | Optional subtype ID |
| `success` | `String` | Yes |  |
| `summary` | `String` | Yes | RFI summary |
| `title` | `String` | No | RFI title (optional). |
| `tlp` | `String` | Yes | TLP classification |
| `tokens` | `Float` | Yes | Total tokens used |
| `updated` | `String` | Yes | Last update timestamp |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Rfi.create({
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Rfi.load({ "id" => "rfi_id", "project_type" => "project_type" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Rfi.update({
  "id" => "rfi_id",
  "account_id" => "account_id",
  "project_type" => "project_type",
  "request_id" => "request_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RfiEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RfiMessageEntity

```ruby
rfi_message = client.RfiMessage
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachment_asset_ids` | `Array` | No |  |
| `attachments` | `Array` | Yes |  |
| `author_id` | `String` | No |  |
| `author_name` | `String` | No |  |
| `content` | `String` | Yes |  |
| `created` | `String` | Yes |  |
| `id` | `Integer` | Yes |  |
| `is_cloudflare_team` | `Boolean` | Yes |  |
| `is_published` | `Boolean` | Yes |  |
| `publish` | `Boolean` | No |  |
| `published` | `String` | Yes |  |
| `tlp` | `String` | Yes |  |
| `updated` | `String` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.RfiMessage.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.RfiMessage.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.RfiMessage.load({ "id" => "rfi_message_id", "account_id" => "account_id", "project_type" => "project_type", "request_id" => "request_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.RfiMessage.update({
  "id" => "rfi_message_id",
  "account_id" => "account_id",
  "project_type" => "project_type",
  "request_id" => "request_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RfiMessageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RuleEntity

```ruby
rule = client.Rule
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `arrays` | `Array` | Yes |  |
| `headers` | `Hash` | Yes |  |
| `operators` | `Hash` | Yes |  |
| `scalars` | `Array` | Yes |  |
| `string_arrays` | `Array` | Yes |  |
| `structs` | `Array` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Rule.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RuleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ScanEntity

```ruby
scan = client.Scan
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `frequency` | `Float` | No | Defines the number of days between each scan (0 = One-off scan). |
| `ips` | `Array` | No | Defines a list of IP addresses or CIDR blocks to scan. |
| `messages` | `Array` | Yes |  |
| `ports` | `Array` | No | Defines a list of ports to scan. |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Scan.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Scan.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Scan.load({ "account_id" => "account_id", "config_id" => "config_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Scan.remove({ "account_id" => "account_id", "config_id" => "config_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Scan.update({
  "account_id" => "account_id",
  "config_id" => "config_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ScanEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TagEntity

```ruby
tag = client.Tag
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeDuration` | `String` | No |  |
| `activeDuration_annotated` | `Hash` | Yes |  |
| `actorCategory` | `String` | No |  |
| `actorCategory_annotated` | `Hash` | Yes |  |
| `aliasGroupNames` | `Array` | No |  |
| `aliasGroupNamesInternal` | `Array` | No |  |
| `aliases` | `Array` | No | Structured aliases ({ value, confidence 1-10, tlp }). |
| `attributionOrganization` | `String` | No |  |
| `attributionOrganization_annotated` | `Hash` | Yes |  |
| `categoryName` | `String` | No |  |
| `categoryUuid` | `String` | No | Tag type (category) UUID. |
| `confidence` | `Integer` | No | Overall tag confidence (1-10). |
| `createdAt` | `String` | No |  |
| `dateOfDiscovery` | `String` | No | Date of discovery (ISO YYYY-MM-DD). |
| `description` | `String` | No |  |
| `externalReferenceLinks` | `Array` | No |  |
| `externalReferences` | `Array` | No | Structured external references ({ url, description }). |
| `externalReferences_annotated` | `Array` | No |  |
| `id` | `String` | No |  |
| `internalAliases` | `Array` | No | Internal structured aliases ({ value, confidence 1-10, tlp }). |
| `internalDescription` | `String` | No |  |
| `lastSeen` | `String` | No |  |
| `metadata` | `Hash` | No | Updated metadata. |
| `motive` | `String` | No |  |
| `motive_annotated` | `Hash` | Yes |  |
| `opsecLevel` | `String` | No |  |
| `opsecLevel_annotated` | `Hash` | Yes |  |
| `originCountryISO` | `String` | No | ISO country code (alpha-2 or alpha-3). |
| `originCountryISO_annotated` | `Hash` | Yes |  |
| `priority` | `Float` | No |  |
| `priority_annotated` | `Hash` | Yes |  |
| `properties` | `Hash` | No | Parsed custom field values. |
| `sophisticationLevel` | `String` | No |  |
| `sophisticationLevel_annotated` | `Hash` | Yes |  |
| `tlp` | `String` | No | Tag-level TLP handling marking. |
| `type` | `String` | No | Updated relationship type. |
| `updatedAt` | `String` | No |  |
| `uuid` | `String` | Yes |  |
| `value` | `String` | Yes |  |
| `version` | `Float` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Tag.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Tag.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Tag.load({ "id" => "tag_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Tag.remove({ "id" => "tag_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Tag.update({
  "id" => "tag_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TagEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TagCategoryEntity

```ruby
tag_category = client.TagCategory
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `String` | No |  |
| `description` | `String` | No |  |
| `id` | `String` | No |  |
| `name` | `String` | Yes |  |
| `schema` | `Array` | No | Parsed FieldDefinition[] defining custom fields for this category, or null if none. |
| `updatedAt` | `String` | No |  |
| `uuid` | `String` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TagCategory.create({
  "account_id" => "example_account_id", # String
  "name" => "example_name", # String
  "uuid" => "example_uuid", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TagCategory.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TagCategory.load({ "id" => "tag_category_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TagCategory.remove({ "id" => "tag_category_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TagCategory.update({
  "id" => "tag_category_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TagCategoryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TargetIndustryEntity

```ruby
target_industry = client.TargetIndustry
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `String` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TargetIndustry.load({ "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TargetIndustryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ThreatSignalEntity

```ruby
threat_signal = client.ThreatSignal
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category_id` | `String` | No | One of the predefined Threat Signals feed categories; see GET /:account_id/v2/threat-signals/categories. |
| `category_uuids` | `Array` | Yes |  |
| `config` | `String` | No |  |
| `display_name` | `String` | No |  |
| `display_order` | `Integer` | No |  |
| `enabled` | `Boolean` | No |  |
| `errors` | `Array` | Yes |  |
| `feeds` | `Array` | Yes |  |
| `is_active` | `Boolean` | No |  |
| `message` | `String` | Yes |  |
| `messages` | `Array` | Yes |  |
| `name` | `String` | No |  |
| `opted_out` | `Boolean` | Yes |  |
| `output_schema` | `String` | No |  |
| `poll_interval_s` | `Integer` | No |  |
| `prompt` | `String` | No |  |
| `read` | `Boolean` | Yes |  |
| `result` | `Object` | Yes |  |
| `skill_ids` | `Array` | Yes |  |
| `success` | `Boolean` | Yes |  |
| `tag_id` | `String` | Yes |  |
| `title` | `String` | No |  |
| `url` | `String` | No |  |
| `why_valuable` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ThreatSignal.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ThreatSignal.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ThreatSignal.load({ "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ThreatSignal.remove({ "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ThreatSignal.update({
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ThreatSignalEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ruby
client = CloudflareCloudforceOneSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
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

