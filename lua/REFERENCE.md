# CloudflareCloudforceOne Lua SDK Reference

Complete API reference for the CloudflareCloudforceOne Lua SDK.


## CloudflareCloudforceOneSDK

### Constructor

```lua
local sdk = require("cloudflare-cloudforce-one_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Attacker(data)`

Create a new `Attacker` entity instance. Pass `nil` for no initial data.

#### `BinDb(data)`

Create a new `BinDb` entity instance. Pass `nil` for no initial data.

#### `BrandProtection(data)`

Create a new `BrandProtection` entity instance. Pass `nil` for no initial data.

#### `Category(data)`

Create a new `Category` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneAccountExemption(data)`

Create a new `CloudforceOneAccountExemption` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneDeleteAll(data)`

Create a new `CloudforceOneDeleteAll` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneEditApproval(data)`

Create a new `CloudforceOneEditApproval` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneEmailRuleValidation(data)`

Create a new `CloudforceOneEmailRuleValidation` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneEmailRulesList(data)`

Create a new `CloudforceOneEmailRulesList` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneRequestsApiResponseCommon(data)`

Create a new `CloudforceOneRequestsApiResponseCommon` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneRule(data)`

Create a new `CloudforceOneRule` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneRuleApprovalDetail(data)`

Create a new `CloudforceOneRuleApprovalDetail` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneRuleApprovalsList(data)`

Create a new `CloudforceOneRuleApprovalsList` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneRulePreview(data)`

Create a new `CloudforceOneRulePreview` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneRulesPreviewList(data)`

Create a new `CloudforceOneRulesPreviewList` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneRulesSearch(data)`

Create a new `CloudforceOneRulesSearch` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneStat(data)`

Create a new `CloudforceOneStat` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneSuccess(data)`

Create a new `CloudforceOneSuccess` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneTreeNode(data)`

Create a new `CloudforceOneTreeNode` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneValidation(data)`

Create a new `CloudforceOneValidation` entity instance. Pass `nil` for no initial data.

#### `Collection(data)`

Create a new `Collection` entity instance. Pass `nil` for no initial data.

#### `CollectionsItem(data)`

Create a new `CollectionsItem` entity instance. Pass `nil` for no initial data.

#### `Country(data)`

Create a new `Country` entity instance. Pass `nil` for no initial data.

#### `DashboardAsset(data)`

Create a new `DashboardAsset` entity instance. Pass `nil` for no initial data.

#### `DashboardUser(data)`

Create a new `DashboardUser` entity instance. Pass `nil` for no initial data.

#### `Dataset(data)`

Create a new `Dataset` entity instance. Pass `nil` for no initial data.

#### `Event(data)`

Create a new `Event` entity instance. Pass `nil` for no initial data.

#### `Group(data)`

Create a new `Group` entity instance. Pass `nil` for no initial data.

#### `Indicator(data)`

Create a new `Indicator` entity instance. Pass `nil` for no initial data.

#### `IndicatorType(data)`

Create a new `IndicatorType` entity instance. Pass `nil` for no initial data.

#### `Permission(data)`

Create a new `Permission` entity instance. Pass `nil` for no initial data.

#### `Priority(data)`

Create a new `Priority` entity instance. Pass `nil` for no initial data.

#### `PriorityIntelligence(data)`

Create a new `PriorityIntelligence` entity instance. Pass `nil` for no initial data.

#### `PriorityIntelligenceRequirement(data)`

Create a new `PriorityIntelligenceRequirement` entity instance. Pass `nil` for no initial data.

#### `PriorityIntelligenceRequirementsPir(data)`

Create a new `PriorityIntelligenceRequirementsPir` entity instance. Pass `nil` for no initial data.

#### `PublicCredentialMonitor(data)`

Create a new `PublicCredentialMonitor` entity instance. Pass `nil` for no initial data.

#### `Request(data)`

Create a new `Request` entity instance. Pass `nil` for no initial data.

#### `RequestForInformationRfi(data)`

Create a new `RequestForInformationRfi` entity instance. Pass `nil` for no initial data.

#### `RequestsDashboard(data)`

Create a new `RequestsDashboard` entity instance. Pass `nil` for no initial data.

#### `Rfi(data)`

Create a new `Rfi` entity instance. Pass `nil` for no initial data.

#### `RfiMessage(data)`

Create a new `RfiMessage` entity instance. Pass `nil` for no initial data.

#### `Rule(data)`

Create a new `Rule` entity instance. Pass `nil` for no initial data.

#### `Scan(data)`

Create a new `Scan` entity instance. Pass `nil` for no initial data.

#### `Tag(data)`

Create a new `Tag` entity instance. Pass `nil` for no initial data.

#### `TagCategory(data)`

Create a new `TagCategory` entity instance. Pass `nil` for no initial data.

#### `TargetIndustry(data)`

Create a new `TargetIndustry` entity instance. Pass `nil` for no initial data.

#### `ThreatSignal(data)`

Create a new `ThreatSignal` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## AttackerEntity

```lua
local attacker = client:Attacker(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Attacker():load({ account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AttackerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BinDbEntity

```lua
local bin_db = client:BinDb(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_type` | `string` | Yes |  |
| `md5` | `string` | Yes |  |
| `sha1` | `string` | Yes |  |
| `sha256` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BinDb():create({
  account_id = --[[ string ]],
  content_type = --[[ string ]],
  md5 = --[[ string ]],
  sha1 = --[[ string ]],
  sha256 = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:BinDb():load({ account_id = "account_id", hash = "hash" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BinDbEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BrandProtectionEntity

```lua
local brand_protection = client:BrandProtection(nil)
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
| `domains` | `table` | Yes |  |
| `errors` | `table` | Yes |  |
| `fields` | `table` | Yes |  |
| `first_seen` | `string` | Yes |  |
| `format` | `string` | No |  |
| `id` | `number` | Yes |  |
| `image_data` | `string` | Yes | Base64 encoded image data. |
| `letterText` | `string` | Yes |  |
| `letterType` | `string` | Yes |  |
| `matchId` | `number` | Yes |  |
| `matchType` | `string` | Yes |  |
| `match_details` | `table` | No | Per-match detail objects with query metadata and individual dismissed state. |
| `match_ids` | `table` | No |  |
| `matched_at` | `string` | Yes |  |
| `matches` | `table` | Yes |  |
| `max_time` | `string` | No |  |
| `message` | `string` | Yes |  |
| `messages` | `table` | Yes |  |
| `min_time` | `string` | No |  |
| `name` | `string` | Yes |  |
| `noticeParams` | `table` | Yes |  |
| `notices` | `table` | Yes |  |
| `public_scans` | `table` | Yes |  |
| `queryId` | `number` | Yes |  |
| `queryIds` | `table` | No |  |
| `query_id` | `number` | Yes |  |
| `r2_path` | `string` | Yes |  |
| `registrar` | `string` | Yes |  |
| `result` | `any` | Yes |  |
| `result_info` | `table` | Yes | Present on paginated list responses when page or per_page is supplied. |
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
| `string_matches` | `table` | Yes |  |
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

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BrandProtection():create({
  account_id = --[[ string ]],
  action = --[[ string ]],
  body = --[[ string ]],
  brand = --[[ string ]],
  category = --[[ string ]],
  createdAt = --[[ string ]],
  description = --[[ string ]],
  dismissed = --[[ boolean ]],
  domain = --[[ string ]],
  domain_id = --[[ number ]],
  domains = --[[ table ]],
  errors = --[[ table ]],
  fields = --[[ table ]],
  first_seen = --[[ string ]],
  id = --[[ number ]],
  image_data = --[[ string ]],
  letterText = --[[ string ]],
  letterType = --[[ string ]],
  matchId = --[[ number ]],
  matchType = --[[ string ]],
  matched_at = --[[ string ]],
  matches = --[[ table ]],
  message = --[[ string ]],
  messages = --[[ table ]],
  name = --[[ string ]],
  noticeParams = --[[ table ]],
  notices = --[[ table ]],
  public_scans = --[[ table ]],
  queryId = --[[ number ]],
  r2_path = --[[ string ]],
  registrar = --[[ string ]],
  result = --[[ any ]],
  result_info = --[[ table ]],
  scan_status = --[[ string ]],
  scan_submission_id = --[[ number ]],
  similarity_score = --[[ number ]],
  similarity_threshold = --[[ number ]],
  source = --[[ string ]],
  status = --[[ string ]],
  string_matches = --[[ table ]],
  success = --[[ boolean ]],
  tag = --[[ string ]],
  takedownNoticeId = --[[ number ]],
  templateId = --[[ string ]],
  total_analyzed = --[[ number ]],
  total_matches = --[[ number ]],
  truncated = --[[ boolean ]],
  updatedAt = --[[ string ]],
  uploaded_at = --[[ string ]],
  url_scan_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:BrandProtection():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:BrandProtection():load({ account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:BrandProtection():remove({ account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:BrandProtection():update({
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BrandProtectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CategoryEntity

```lua
local category = client:Category(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `killChain` | `number` | Yes |  |
| `mitreAttack` | `table` | No |  |
| `mitreCapec` | `table` | No |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Category():create({
  account_id = --[[ string ]],
  killChain = --[[ number ]],
  name = --[[ string ]],
  uuid = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Category():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Category():load({ id = "category_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Category():remove({ id = "category_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Category():update({
  id = "category_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CategoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CloudforceOneAccountExemptionEntity

```lua
local cloudforce_one_account_exemption = client:CloudforceOneAccountExemption(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `namespace` | `table` | Yes |  |
| `tag_match` | `table` | Yes |  |
| `worker_name` | `table` | Yes |  |

### Field Usage by Operation

| Field | list | create | update | remove |
| --- | --- | --- | --- | --- |
| `namespace` | - | Yes | Yes | - |
| `tag_match` | - | Yes | Yes | - |
| `worker_name` | - | Yes | Yes | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CloudforceOneAccountExemption():create({
  account_id = --[[ string ]],
  namespace = --[[ table ]],
  tag_match = --[[ table ]],
  worker_name = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CloudforceOneAccountExemption():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:CloudforceOneAccountExemption():remove({ account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CloudforceOneAccountExemption():update({
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneAccountExemptionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CloudforceOneDeleteAllEntity

```lua
local cloudforce_one_delete_all = client:CloudforceOneDeleteAll(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:CloudforceOneDeleteAll():remove({ account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneDeleteAllEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CloudforceOneEditApprovalEntity

```lua
local cloudforce_one_edit_approval = client:CloudforceOneEditApproval(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `condition` | `table` | Yes | Nested condition groups support up to 10 levels of depth. |
| `description` | `string` | No |  |
| `enabled` | `boolean` | No |  |
| `id` | `string` | No |  |
| `meta` | `table` | No |  |
| `name` | `string` | Yes |  |
| `status` | `string` | No | Disposition for matching email. |
| `strings` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CloudforceOneEditApproval():create({
  account_id = --[[ string ]],
  approval_id = --[[ string ]],
  condition = --[[ table ]],
  name = --[[ string ]],
})
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CloudforceOneEditApproval():update({
  account_id = "account_id",
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneEditApprovalEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CloudforceOneEmailRuleValidationEntity

```lua
local cloudforce_one_email_rule_validation = client:CloudforceOneEmailRuleValidation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `compiled_yara` | `string` | No |  |
| `condition` | `table` | Yes | Nested condition groups support up to 10 levels of depth. |
| `description` | `string` | No |  |
| `enabled` | `boolean` | No |  |
| `error` | `string` | No |  |
| `existing_rule_id` | `string` | No | Existing rule ID to exclude from duplicate-name checks when validating an update. |
| `meta` | `table` | No |  |
| `name` | `string` | Yes |  |
| `status` | `string` | No | Disposition for matching email. |
| `strings` | `table` | No |  |
| `valid` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CloudforceOneEmailRuleValidation():create({
  account_id = --[[ string ]],
  condition = --[[ table ]],
  name = --[[ string ]],
  valid = --[[ boolean ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneEmailRuleValidationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CloudforceOneEmailRulesListEntity

```lua
local cloudforce_one_email_rules_list = client:CloudforceOneEmailRulesList(nil)
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
| `meta` | `table` | No | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` | Yes |  |
| `namespaces` | `table` | Yes |  |
| `path` | `string` | Yes |  |
| `pending_approval_id` | `number` | Yes | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `table` | Yes | Proposed update or deletion awaiting approval. |
| `structured_source` | `string` | No | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `number` | Yes |  |
| `updated_by` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CloudforceOneEmailRulesList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneEmailRulesListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CloudforceOneRequestsApiResponseCommonEntity

```lua
local cloudforce_one_requests_api_response_common = client:CloudforceOneRequestsApiResponseCommon(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:CloudforceOneRequestsApiResponseCommon():remove({ account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneRequestsApiResponseCommonEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CloudforceOneRuleEntity

```lua
local cloudforce_one_rule = client:CloudforceOneRule(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `table` | No |  |
| `commit_message` | `string` | No | Human-readable justification for this change. |
| `content` | `string` | Yes |  |
| `description` | `string` | No | Human-readable description of the rule. |
| `enabled` | `boolean` | No | Whether this rule is active for dice consumers. |
| `is_public` | `boolean` | No | Whether this rule is visible to other internal accounts. |
| `meta` | `table` | No | Adds YARA meta entries to the rule's meta block and stores them in rule_meta alongside content metadata. |
| `name` | `string` | Yes |  |
| `namespaces` | `table` | No | Optional WfP deployment tags (customer rules only). |
| `path` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CloudforceOneRule():create({
  account_id = --[[ string ]],
  content = --[[ string ]],
  name = --[[ string ]],
  path = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneRuleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CloudforceOneRuleApprovalDetailEntity

```lua
local cloudforce_one_rule_approval_detail = client:CloudforceOneRuleApprovalDetail(nil)
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
| `compiler_warnings` | `table` | No |  |
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

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CloudforceOneRuleApprovalDetail():create({
  account_id = --[[ string ]],
  approval_id = --[[ string ]],
  audit_log_id = --[[ number ]],
  can_review = --[[ boolean ]],
  cancelled_at = --[[ number ]],
  cancelled_by = --[[ string ]],
  change_description = --[[ string ]],
  change_type = --[[ string ]],
  commit_message = --[[ string ]],
  current_rule = --[[ any ]],
  id = --[[ number ]],
  proposed_changes = --[[ any ]],
  rejection_reason = --[[ string ]],
  requested_at = --[[ number ]],
  requested_by = --[[ string ]],
  reviewed_at = --[[ number ]],
  reviewer_scope = --[[ string ]],
  revision_number = --[[ number ]],
  rule_id = --[[ string ]],
  rule_name = --[[ string ]],
  status = --[[ string ]],
  superseded_by_approval_id = --[[ number ]],
  supersedes_approval_id = --[[ number ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CloudforceOneRuleApprovalDetail():load({ id = "cloudforce_one_rule_approval_detail_id", account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneRuleApprovalDetailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CloudforceOneRuleApprovalsListEntity

```lua
local cloudforce_one_rule_approvals_list = client:CloudforceOneRuleApprovalsList(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CloudforceOneRuleApprovalsList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneRuleApprovalsListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CloudforceOneRulePreviewEntity

```lua
local cloudforce_one_rule_preview = client:CloudforceOneRulePreview(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit_message` | `string` | No | Human-readable justification for this change. |
| `condition` | `table` | Yes | Nested condition groups support up to 10 levels of depth. |
| `content` | `string` | No |  |
| `created_at` | `number` | Yes |  |
| `created_by` | `string` | Yes |  |
| `description` | `string` | Yes | Human-readable description of the rule. |
| `enabled` | `boolean` | Yes | Whether this rule is active for dice consumers. |
| `id` | `string` | Yes |  |
| `is_public` | `boolean` | Yes | Whether this rule is visible to other internal accounts. |
| `meta` | `table` | No | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` | Yes |  |
| `namespaces` | `table` | Yes |  |
| `path` | `string` | Yes | Path change goes through approval workflow. |
| `pending_approval_id` | `number` | Yes | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `table` | Yes | Proposed update or deletion awaiting approval. |
| `status` | `string` | No | Disposition for matching email. |
| `strings` | `table` | No |  |
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

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CloudforceOneRulePreview():create({
  account_id = --[[ string ]],
  condition = --[[ table ]],
  created_at = --[[ number ]],
  created_by = --[[ string ]],
  description = --[[ string ]],
  enabled = --[[ boolean ]],
  id = --[[ string ]],
  is_public = --[[ boolean ]],
  name = --[[ string ]],
  namespaces = --[[ table ]],
  path = --[[ string ]],
  pending_approval_id = --[[ number ]],
  pending_change = --[[ table ]],
  updated_at = --[[ number ]],
  updated_by = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CloudforceOneRulePreview():load({ id = "cloudforce_one_rule_preview_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CloudforceOneRulePreview():update({
  id = "cloudforce_one_rule_preview_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneRulePreviewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CloudforceOneRulesPreviewListEntity

```lua
local cloudforce_one_rules_preview_list = client:CloudforceOneRulesPreviewList(nil)
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
| `meta` | `table` | No | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` | Yes |  |
| `namespaces` | `table` | Yes |  |
| `path` | `string` | Yes |  |
| `pending_approval_id` | `number` | Yes | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `table` | Yes | Proposed update or deletion awaiting approval. |
| `structured_source` | `string` | No | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `number` | Yes |  |
| `updated_by` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CloudforceOneRulesPreviewList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneRulesPreviewListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CloudforceOneRulesSearchEntity

```lua
local cloudforce_one_rules_search = client:CloudforceOneRulesSearch(nil)
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
| `meta` | `table` | No | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` | Yes |  |
| `namespaces` | `table` | Yes |  |
| `path` | `string` | Yes |  |
| `pending_approval_id` | `number` | Yes | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `table` | Yes | Proposed update or deletion awaiting approval. |
| `score` | `number` | No | Relevance score in [0,1]. |
| `scoring_details` | `table` | No | AI Search hybrid retrieval returns this per-component scoring breakdown. |
| `structured_source` | `string` | No | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `number` | Yes |  |
| `updated_by` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CloudforceOneRulesSearch():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneRulesSearchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CloudforceOneStatEntity

```lua
local cloudforce_one_stat = client:CloudforceOneStat(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CloudforceOneStat():load({ account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneStatEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CloudforceOneSuccessEntity

```lua
local cloudforce_one_success = client:CloudforceOneSuccess(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CloudforceOneSuccess():create({
  account_id = --[[ string ]],
  approval_id = --[[ string ]],
  success = --[[ boolean ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:CloudforceOneSuccess():remove({ account_id = "account_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneSuccessEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CloudforceOneTreeNodeEntity

```lua
local cloudforce_one_tree_node = client:CloudforceOneTreeNode(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `children` | `table` | Yes |  |
| `count` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `path` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CloudforceOneTreeNode():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneTreeNodeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CloudforceOneValidationEntity

```lua
local cloudforce_one_validation = client:CloudforceOneValidation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | Yes |  |
| `error` | `string` | No |  |
| `excludeRuleId` | `string` | No |  |
| `name` | `string` | Yes |  |
| `namespaces` | `table` | No |  |
| `path` | `string` | No |  |
| `valid` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CloudforceOneValidation():create({
  account_id = --[[ string ]],
  content = --[[ string ]],
  name = --[[ string ]],
  valid = --[[ boolean ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneValidationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CollectionEntity

```lua
local collection = client:Collection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `columns` | `table` | Yes |  |
| `created_at` | `string` | Yes |  |
| `created_by` | `string` | Yes |  |
| `data` | `table` | Yes |  |
| `id` | `string` | Yes |  |
| `item_count` | `number` | Yes |  |
| `metadata` | `table` | No |  |
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

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Collection():create({
  account_id = --[[ string ]],
  columns = --[[ table ]],
  created_at = --[[ string ]],
  created_by = --[[ string ]],
  data = --[[ table ]],
  id = --[[ string ]],
  item_count = --[[ number ]],
  name = --[[ string ]],
  position = --[[ number ]],
  required = --[[ boolean ]],
  status = --[[ string ]],
  type = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Collection():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Collection():load({ id = "collection_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Collection():remove({ id = "collection_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Collection():update({
  id = "collection_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CollectionsItemEntity

```lua
local collections_item = client:CollectionsItem(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CollectionsItem():create({
  account_id = --[[ string ]],
  collection_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CollectionsItemEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CountryEntity

```lua
local country = client:Country(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | Yes |  |
| `success` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Country():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CountryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DashboardAssetEntity

```lua
local dashboard_asset = client:DashboardAsset(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assets` | `table` | Yes |  |
| `contentType` | `table` | Yes |  |
| `count` | `table` | Yes |  |
| `downloadable` | `table` | Yes |  |
| `expiresAt` | `table` | Yes |  |
| `fileName` | `table` | Yes |  |
| `fileSize` | `table` | Yes |  |
| `id` | `table` | Yes |  |
| `is_cloudflare_team` | `table` | Yes |  |
| `metadata` | `table` | Yes |  |
| `origin` | `table` | Yes |  |
| `state` | `table` | Yes |  |
| `tlp` | `table` | Yes |  |
| `uploadedAt` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DashboardAsset():create({
  account_id = --[[ string ]],
  project_type = --[[ string ]],
  request_id = --[[ string ]],
  assets = --[[ table ]],
  contentType = --[[ table ]],
  count = --[[ table ]],
  downloadable = --[[ table ]],
  expiresAt = --[[ table ]],
  fileName = --[[ table ]],
  fileSize = --[[ table ]],
  id = --[[ table ]],
  is_cloudflare_team = --[[ table ]],
  metadata = --[[ table ]],
  origin = --[[ table ]],
  state = --[[ table ]],
  tlp = --[[ table ]],
  uploadedAt = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DashboardAsset():load({ account_id = "account_id", project_type = "project_type", request_id = "request_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DashboardAssetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DashboardUserEntity

```lua
local dashboard_user = client:DashboardUser(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `string` | No | User display name |
| `id` | `string` | Yes | Unique user ID |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DashboardUser():load({ account_id = "account_id", request_id = "request_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DashboardUserEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DatasetEntity

```lua
local dataset = client:Dataset(nil)
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

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Dataset():create({
  account_id = --[[ string ]],
  id = --[[ string ]],
  indicatorWriteMode = --[[ string ]],
  isAnalytics = --[[ boolean ]],
  isPublic = --[[ boolean ]],
  name = --[[ string ]],
  uuid = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Dataset():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Dataset():load({ id = "dataset_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Dataset():remove({ id = "dataset_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Dataset():update({
  id = "dataset_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DatasetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EventEntity

```lua
local event = client:Event(nil)
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
| `childIds` | `table` | No | Array of child event UUIDs that were processed |
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
| `errors` | `table` | No | Array of error details |
| `event` | `string` | Yes |  |
| `eventIds` | `table` | Yes | List of event UUIDs to update (1-100) |
| `failedCount` | `number` | Yes |  |
| `failures` | `table` | No | List of events that failed to update with error messages |
| `hasChildren` | `boolean` | Yes |  |
| `id` | `number` | Yes | Unique identifier for the saved query |
| `includeCreatedEvents` | `boolean` | No | When true, response includes array of created event UUIDs and shard IDs. |
| `indicator` | `string` | Yes |  |
| `indicatorType` | `string` | Yes |  |
| `indicatorTypeId` | `number` | Yes |  |
| `insight` | `string` | No |  |
| `killChain` | `number` | Yes |  |
| `message` | `string` | Yes | Human-readable message describing the operation result |
| `mitreAttack` | `table` | Yes |  |
| `mitreCapec` | `table` | Yes |  |
| `name` | `string` | Yes | Name of the saved query |
| `numReferenced` | `number` | Yes |  |
| `numReferences` | `number` | Yes |  |
| `order` | `string` | No |  |
| `orderBy` | `string` | No |  |
| `page` | `number` | No |  |
| `pageSize` | `number` | No |  |
| `parentId` | `string` | Yes | UUID of the parent event that will be the source of the relationship |
| `query_json` | `string` | Yes | JSON string containing the query parameters |
| `raw` | `table` | No |  |
| `rawId` | `string` | Yes |  |
| `referenced` | `table` | Yes |  |
| `referencedIds` | `table` | Yes |  |
| `references` | `table` | Yes |  |
| `referencesIds` | `table` | Yes |  |
| `relationshipType` | `string` | Yes | Type of relationship to create between parent and child events |
| `relationships` | `table` | Yes | Array of successfully created relationship objects |
| `relationshipsCreated` | `number` | No | Number of relationships that were successfully created |
| `releasabilityId` | `string` | No |  |
| `rule_enabled` | `boolean` | Yes | Whether rule is enabled |
| `rule_list_id` | `string` | No | WAF rules list ID for blocking |
| `rule_scope` | `string` | No | Scope for the rule |
| `search` | `table` | No | Structured search as a JSON array of {field, op, value} objects. |
| `source` | `string` | Yes |  |
| `success` | `boolean` | Yes | Whether the relationship creation operation completed successfully |
| `tags` | `table` | Yes |  |
| `targetCountry` | `string` | Yes |  |
| `targetCountryAlpha3` | `string` | Yes |  |
| `targetIndustry` | `string` | Yes |  |
| `tlp` | `string` | Yes |  |
| `updatedCount` | `number` | Yes |  |
| `updated_at` | `string` | Yes | Last update timestamp |
| `updates` | `table` | Yes | Fields to update on all specified events. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Event():create({
  account_id = --[[ string ]],
  accountId = --[[ number ]],
  alert_enabled = --[[ boolean ]],
  alert_rollup_enabled = --[[ boolean ]],
  attacker = --[[ string ]],
  attackerCountry = --[[ string ]],
  attackerCountryAlpha3 = --[[ string ]],
  category = --[[ string ]],
  created = --[[ string ]],
  createdEventsCount = --[[ number ]],
  createdIndicatorsCount = --[[ number ]],
  createdRelationshipsCount = --[[ number ]],
  created_at = --[[ string ]],
  data = --[[ string ]],
  datasetId = --[[ string ]],
  date = --[[ string ]],
  errorCount = --[[ number ]],
  event = --[[ string ]],
  eventIds = --[[ table ]],
  failedCount = --[[ number ]],
  hasChildren = --[[ boolean ]],
  indicator = --[[ string ]],
  indicatorType = --[[ string ]],
  indicatorTypeId = --[[ number ]],
  killChain = --[[ number ]],
  message = --[[ string ]],
  mitreAttack = --[[ table ]],
  mitreCapec = --[[ table ]],
  name = --[[ string ]],
  numReferenced = --[[ number ]],
  numReferences = --[[ number ]],
  parentId = --[[ string ]],
  query_json = --[[ string ]],
  rawId = --[[ string ]],
  referenced = --[[ table ]],
  referencedIds = --[[ table ]],
  references = --[[ table ]],
  referencesIds = --[[ table ]],
  relationshipType = --[[ string ]],
  relationships = --[[ table ]],
  rule_enabled = --[[ boolean ]],
  source = --[[ string ]],
  success = --[[ boolean ]],
  tags = --[[ table ]],
  targetCountry = --[[ string ]],
  targetCountryAlpha3 = --[[ string ]],
  targetIndustry = --[[ string ]],
  tlp = --[[ string ]],
  updatedCount = --[[ number ]],
  updated_at = --[[ string ]],
  updates = --[[ table ]],
  user_email = --[[ string ]],
  uuid = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Event():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Event():load({ id = "event_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Event():remove({ account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Event():update({
  id = "event_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EventEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GroupEntity

```lua
local group = client:Group(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `id` | `string` | No |  |
| `members` | `table` | Yes |  |
| `name` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |
| `uuid` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Group():create({
  account_id = --[[ string ]],
  createdAt = --[[ string ]],
  description = --[[ string ]],
  members = --[[ table ]],
  name = --[[ string ]],
  updatedAt = --[[ string ]],
  uuid = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Group():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Group():load({ id = "group_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Group():remove({ id = "group_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Group():update({
  id = "group_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IndicatorEntity

```lua
local indicator = client:Indicator(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completeness` | `table` | Yes |  |
| `confidence` | `number` | No | Updated confidence. |
| `createdAt` | `string` | Yes |  |
| `datasetId` | `string` | No | The dataset ID this indicator belongs to. |
| `description` | `string` | No | Optional description for the indicator type |
| `durableObjectId` | `string` | Yes |  |
| `id` | `string` | No |  |
| `indicatorType` | `string` | Yes | The indicator type to create (e.g., 'DOMAIN', 'IP', 'URL', 'HASH', 'EMAIL') |
| `indicators` | `table` | Yes |  |
| `message` | `string` | Yes |  |
| `metadata` | `table` | No | Updated metadata. |
| `pagination` | `table` | Yes |  |
| `relatedEvents` | `table` | No |  |
| `sources` | `table` | Yes | RSS article sources from which this indicator was extracted. |
| `tags` | `table` | No |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Indicator():create({
  account_id = --[[ string ]],
  dataset_id = --[[ string ]],
  completeness = --[[ table ]],
  createdAt = --[[ string ]],
  durableObjectId = --[[ string ]],
  indicatorType = --[[ string ]],
  indicators = --[[ table ]],
  message = --[[ string ]],
  pagination = --[[ table ]],
  sources = --[[ table ]],
  updatedAt = --[[ string ]],
  uuid = --[[ string ]],
  value = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Indicator():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Indicator():load({ id = "indicator_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Indicator():remove({ id = "indicator_id", account_id = "account_id", dataset_id = "dataset_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Indicator():update({
  id = "indicator_id",
  account_id = "account_id",
  dataset_id = "dataset_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IndicatorEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IndicatorTypeEntity

```lua
local indicator_type = client:IndicatorType(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:IndicatorType():load({ account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IndicatorTypeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PermissionEntity

```lua
local permission = client:Permission(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Permission():create({
  account_id = --[[ string ]],
  dataset_id = --[[ string ]],
  createdAt = --[[ string ]],
  resourceType = --[[ string ]],
  role = --[[ string ]],
  subjectId = --[[ string ]],
  subjectType = --[[ string ]],
  updatedAt = --[[ string ]],
  uuid = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Permission():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Permission():remove({ account_id = "account_id", dataset_id = "dataset_id", id = "id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Permission():update({
  account_id = "account_id",
  dataset_id = "dataset_id",
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PermissionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PriorityEntity

```lua
local priority = client:Priority(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `labels` | `table` | Yes | List of labels. |
| `messages` | `table` | Yes |  |
| `page` | `number` | Yes | Page number of results. |
| `per_page` | `number` | Yes | Number of results per page. |
| `priority` | `number` | Yes | Priority. |
| `requirement` | `string` | Yes | Requirement. |
| `result` | `any` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `tlp` | `string` | Yes | The CISA defined Traffic Light Protocol (TLP). |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Priority():create({
  account_id = --[[ string ]],
  errors = --[[ table ]],
  labels = --[[ table ]],
  messages = --[[ table ]],
  page = --[[ number ]],
  per_page = --[[ number ]],
  priority = --[[ number ]],
  requirement = --[[ string ]],
  success = --[[ boolean ]],
  tlp = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Priority():load({ id = "priority_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Priority():update({
  id = "priority_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PriorityEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PriorityIntelligenceEntity

```lua
local priority_intelligence = client:PriorityIntelligence(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `labels` | `table` | No |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PriorityIntelligence():create({
  account_id = --[[ string ]],
  requirement = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PriorityIntelligence():load({ id = "priority_intelligence_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:PriorityIntelligence():remove({ id = "priority_intelligence_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:PriorityIntelligence():update({
  id = "priority_intelligence_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PriorityIntelligenceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PriorityIntelligenceRequirementEntity

```lua
local priority_intelligence_requirement = client:PriorityIntelligenceRequirement(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `as_of` | `string` | No |  |
| `backtest_days` | `number` | No |  |
| `candidate_limit` | `number` | No |  |
| `dataset_ids` | `table` | No |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PriorityIntelligenceRequirement():create({
  account_id = --[[ string ]],
  dimension = --[[ string ]],
  value = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PriorityIntelligenceRequirement():load({ account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:PriorityIntelligenceRequirement():remove({ account_id = "account_id", interest_id = "interest_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:PriorityIntelligenceRequirement():update({
  account_id = "account_id",
  interest_id = "interest_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PriorityIntelligenceRequirementEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PriorityIntelligenceRequirementsPirEntity

```lua
local priority_intelligence_requirements__pir = client:PriorityIntelligenceRequirementsPir(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `labels` | `table` | Yes | List of labels. |
| `messages` | `table` | Yes |  |
| `priority` | `number` | Yes | Priority. |
| `requirement` | `string` | Yes | Requirement. |
| `result` | `any` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `tlp` | `string` | Yes | The CISA defined Traffic Light Protocol (TLP). |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PriorityIntelligenceRequirementsPir():create({
  account_id = --[[ string ]],
  errors = --[[ table ]],
  labels = --[[ table ]],
  messages = --[[ table ]],
  priority = --[[ number ]],
  requirement = --[[ string ]],
  success = --[[ boolean ]],
  tlp = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PriorityIntelligenceRequirementsPir():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PriorityIntelligenceRequirementsPirEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PublicCredentialMonitorEntity

```lua
local public_credential_monitor = client:PublicCredentialMonitor(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PublicCredentialMonitor():create({
  account_id = --[[ string ]],
  created_at = --[[ string ]],
  domain = --[[ string ]],
  id = --[[ number ]],
  matched_at = --[[ string ]],
  username = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PublicCredentialMonitor():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:PublicCredentialMonitor():remove({ account_id = "account_id", id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PublicCredentialMonitorEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RequestEntity

```lua
local request = client:Request(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed_after` | `any` | No | Retrieve requests completed after this time. |
| `completed_before` | `any` | No | Retrieve requests completed before this time. |
| `content` | `string` | No | Request content. |
| `created_after` | `any` | No | Retrieve requests created after this time. |
| `created_before` | `any` | No | Retrieve requests created before this time. |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `table` | Yes |  |
| `page` | `number` | Yes | Page number of results. |
| `per_page` | `number` | Yes | Number of results per page. |
| `priority` | `string` | No | Priority for analyzing the request. |
| `request_type` | `string` | No | Requested information from request. |
| `result` | `table` | Yes |  |
| `sort_by` | `string` | No | Field to sort results by. |
| `sort_order` | `string` | No | Sort order (asc or desc). |
| `status` | `string` | No | Request Status. |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `summary` | `string` | No | Brief description of the request. |
| `tlp` | `string` | No | The CISA defined Traffic Light Protocol (TLP). |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Request():create({
  account_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  page = --[[ number ]],
  per_page = --[[ number ]],
  result = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Request():load({ id = "request_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Request():update({
  id = "request_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RequestEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RequestForInformationRfiEntity

```lua
local request_for_information__rfi = client:RequestForInformationRfi(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | No | Content of message. |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `table` | Yes |  |
| `priority` | `string` | No | Priority for analyzing the request. |
| `request_type` | `string` | No | Requested information from request. |
| `result` | `table` | No |  |
| `source` | `string` | No | Asset file to upload. |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `summary` | `string` | No | Brief description of the request. |
| `tlp` | `string` | No | The CISA defined Traffic Light Protocol (TLP). |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:RequestForInformationRfi():create({
  account_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:RequestForInformationRfi():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RequestForInformationRfi():load({ account_id = "account_id", asset_id = "asset_id", request_id = "request_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:RequestForInformationRfi():update({
  account_id = "account_id",
  request_id = "request_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RequestForInformationRfiEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RequestsDashboardEntity

```lua
local requests_dashboard = client:RequestsDashboard(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `string` | Yes |  |
| `defaultValue` | `any` | No |  |
| `description` | `string` | No |  |
| `displayOrder` | `number` | Yes |  |
| `errors` | `table` | Yes | Always empty on success |
| `fieldLabel` | `string` | Yes |  |
| `fieldName` | `string` | Yes |  |
| `fieldType` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `messages` | `table` | Yes | Always empty on success |
| `options` | `table` | No |  |
| `projectType` | `string` | Yes |  |
| `project_type` | `string` | Yes |  |
| `public` | `boolean` | Yes |  |
| `request_types` | `table` | Yes |  |
| `required` | `boolean` | Yes |  |
| `result` | `table` | Yes |  |
| `sectionID` | `string` | No |  |
| `sectionLabel` | `string` | No |  |
| `success` | `table` | Yes |  |
| `total` | `number` | Yes |  |
| `updated` | `string` | Yes |  |
| `validation` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:RequestsDashboard():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RequestsDashboard():load({ account_id = "account_id", project_type = "project_type" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RequestsDashboardEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RfiEntity

```lua
local rfi = client:Rfi(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `table` | Yes |  |
| `assignee` | `string` | Yes | Assignee email |
| `completed` | `string` | Yes | Completion timestamp |
| `created` | `string` | Yes | Creation timestamp |
| `description` | `string` | No | RFI description (optional). |
| `eventId` | `string` | No | Optional related event ID |
| `id` | `string` | Yes | RFI UUID |
| `investigation_id` | `string` | Yes | Investigation UUID |
| `is_free_request` | `boolean` | Yes | Whether this is a free request |
| `message_tokens` | `number` | Yes | Total message tokens |
| `metadata` | `table` | No | Optional metadata fields specific to the RFI type |
| `pagination` | `table` | Yes |  |
| `priority` | `string` | Yes | Request priority |
| `readable_id` | `string` | Yes | Human-readable ID |
| `release_entitlements` | `string` | Yes | Release entitlements |
| `report_id` | `string` | Yes | Report UUID |
| `request` | `table` | Yes |  |
| `request_type` | `string` | No | Optional request type for the request |
| `result` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Rfi():create({
  account_id = --[[ string ]],
  project_type = --[[ string ]],
  account = --[[ table ]],
  assignee = --[[ string ]],
  completed = --[[ string ]],
  created = --[[ string ]],
  id = --[[ string ]],
  investigation_id = --[[ string ]],
  is_free_request = --[[ boolean ]],
  message_tokens = --[[ number ]],
  pagination = --[[ table ]],
  priority = --[[ string ]],
  readable_id = --[[ string ]],
  release_entitlements = --[[ string ]],
  report_id = --[[ string ]],
  request = --[[ table ]],
  result = --[[ table ]],
  status = --[[ string ]],
  success = --[[ string ]],
  summary = --[[ string ]],
  tlp = --[[ string ]],
  tokens = --[[ number ]],
  updated = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Rfi():load({ id = "rfi_id", project_type = "project_type" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Rfi():update({
  id = "rfi_id",
  account_id = "account_id",
  project_type = "project_type",
  request_id = "request_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RfiEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RfiMessageEntity

```lua
local rfi_message = client:RfiMessage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachment_asset_ids` | `table` | No |  |
| `attachments` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:RfiMessage():create({
  account_id = --[[ string ]],
  project_type = --[[ string ]],
  request_id = --[[ string ]],
  attachments = --[[ table ]],
  content = --[[ string ]],
  created = --[[ string ]],
  id = --[[ number ]],
  is_cloudflare_team = --[[ boolean ]],
  is_published = --[[ boolean ]],
  published = --[[ string ]],
  tlp = --[[ string ]],
  updated = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:RfiMessage():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RfiMessage():load({ id = "rfi_message_id", account_id = "account_id", project_type = "project_type", request_id = "request_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:RfiMessage():update({
  id = "rfi_message_id",
  account_id = "account_id",
  project_type = "project_type",
  request_id = "request_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RfiMessageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RuleEntity

```lua
local rule = client:Rule(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `arrays` | `table` | Yes |  |
| `headers` | `table` | Yes |  |
| `operators` | `table` | Yes |  |
| `scalars` | `table` | Yes |  |
| `string_arrays` | `table` | Yes |  |
| `structs` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Rule():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RuleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ScanEntity

```lua
local scan = client:Scan(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `frequency` | `number` | No | Defines the number of days between each scan (0 = One-off scan). |
| `ips` | `table` | No | Defines a list of IP addresses or CIDR blocks to scan. |
| `messages` | `table` | Yes |  |
| `ports` | `table` | No | Defines a list of ports to scan. |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Scan():create({
  account_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  result = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Scan():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Scan():load({ account_id = "account_id", config_id = "config_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Scan():remove({ account_id = "account_id", config_id = "config_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Scan():update({
  account_id = "account_id",
  config_id = "config_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScanEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TagEntity

```lua
local tag = client:Tag(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeDuration` | `string` | No |  |
| `activeDuration_annotated` | `table` | Yes |  |
| `actorCategory` | `string` | No |  |
| `actorCategory_annotated` | `table` | Yes |  |
| `aliasGroupNames` | `table` | No |  |
| `aliasGroupNamesInternal` | `table` | No |  |
| `aliases` | `table` | No | Structured aliases ({ value, confidence 1-10, tlp }). |
| `attributionOrganization` | `string` | No |  |
| `attributionOrganization_annotated` | `table` | Yes |  |
| `categoryName` | `string` | No |  |
| `categoryUuid` | `string` | No | Tag type (category) UUID. |
| `confidence` | `number` | No | Overall tag confidence (1-10). |
| `createdAt` | `string` | No |  |
| `dateOfDiscovery` | `string` | No | Date of discovery (ISO YYYY-MM-DD). |
| `description` | `string` | No |  |
| `externalReferenceLinks` | `table` | No |  |
| `externalReferences` | `table` | No | Structured external references ({ url, description }). |
| `externalReferences_annotated` | `table` | No |  |
| `id` | `string` | No |  |
| `internalAliases` | `table` | No | Internal structured aliases ({ value, confidence 1-10, tlp }). |
| `internalDescription` | `string` | No |  |
| `lastSeen` | `string` | No |  |
| `metadata` | `table` | No | Updated metadata. |
| `motive` | `string` | No |  |
| `motive_annotated` | `table` | Yes |  |
| `opsecLevel` | `string` | No |  |
| `opsecLevel_annotated` | `table` | Yes |  |
| `originCountryISO` | `string` | No | ISO country code (alpha-2 or alpha-3). |
| `originCountryISO_annotated` | `table` | Yes |  |
| `priority` | `number` | No |  |
| `priority_annotated` | `table` | Yes |  |
| `properties` | `table` | No | Parsed custom field values. |
| `sophisticationLevel` | `string` | No |  |
| `sophisticationLevel_annotated` | `table` | Yes |  |
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

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Tag():create({
  account_id = --[[ string ]],
  activeDuration_annotated = --[[ table ]],
  actorCategory_annotated = --[[ table ]],
  attributionOrganization_annotated = --[[ table ]],
  motive_annotated = --[[ table ]],
  opsecLevel_annotated = --[[ table ]],
  originCountryISO_annotated = --[[ table ]],
  priority_annotated = --[[ table ]],
  sophisticationLevel_annotated = --[[ table ]],
  uuid = --[[ string ]],
  value = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Tag():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Tag():load({ id = "tag_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Tag():remove({ id = "tag_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Tag():update({
  id = "tag_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TagEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TagCategoryEntity

```lua
local tag_category = client:TagCategory(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | No |  |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `schema` | `table` | No | Parsed FieldDefinition[] defining custom fields for this category, or null if none. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TagCategory():create({
  account_id = --[[ string ]],
  name = --[[ string ]],
  uuid = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TagCategory():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TagCategory():load({ id = "tag_category_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TagCategory():remove({ id = "tag_category_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TagCategory():update({
  id = "tag_category_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TagCategoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TargetIndustryEntity

```lua
local target_industry = client:TargetIndustry(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TargetIndustry():load({ account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TargetIndustryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ThreatSignalEntity

```lua
local threat_signal = client:ThreatSignal(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category_id` | `string` | No | One of the predefined Threat Signals feed categories; see GET /:account_id/v2/threat-signals/categories. |
| `category_uuids` | `table` | Yes |  |
| `config` | `string` | No |  |
| `display_name` | `string` | No |  |
| `display_order` | `number` | No |  |
| `enabled` | `boolean` | No |  |
| `errors` | `table` | Yes |  |
| `feeds` | `table` | Yes |  |
| `is_active` | `boolean` | No |  |
| `message` | `string` | Yes |  |
| `messages` | `table` | Yes |  |
| `name` | `string` | No |  |
| `opted_out` | `boolean` | Yes |  |
| `output_schema` | `string` | No |  |
| `poll_interval_s` | `number` | No |  |
| `prompt` | `string` | No |  |
| `read` | `boolean` | Yes |  |
| `result` | `any` | Yes |  |
| `skill_ids` | `table` | Yes |  |
| `success` | `boolean` | Yes |  |
| `tag_id` | `string` | Yes |  |
| `title` | `string` | No |  |
| `url` | `string` | No |  |
| `why_valuable` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ThreatSignal():create({
  account_id = --[[ string ]],
  category_uuids = --[[ table ]],
  errors = --[[ table ]],
  feeds = --[[ table ]],
  message = --[[ string ]],
  messages = --[[ table ]],
  opted_out = --[[ boolean ]],
  read = --[[ boolean ]],
  result = --[[ any ]],
  skill_ids = --[[ table ]],
  success = --[[ boolean ]],
  tag_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ThreatSignal():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ThreatSignal():load({ account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ThreatSignal():remove({ account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ThreatSignal():update({
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ThreatSignalEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
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

