# CloudflareCloudforceOne Golang SDK Reference

Complete API reference for the CloudflareCloudforceOne Golang SDK.


## CloudflareCloudforceOneSDK

### Constructor

```go
func NewCloudflareCloudforceOneSDK(options map[string]any) *CloudflareCloudforceOneSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *CloudflareCloudforceOneSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *CloudflareCloudforceOneSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Attacker(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `Attacker` entity instance. Pass `nil` for no initial data.

#### `BinDb(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `BinDb` entity instance. Pass `nil` for no initial data.

#### `BrandProtection(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `BrandProtection` entity instance. Pass `nil` for no initial data.

#### `Category(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `Category` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneAccountExemption(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `CloudforceOneAccountExemption` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneDeleteAll(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `CloudforceOneDeleteAll` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneEditApproval(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `CloudforceOneEditApproval` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneEmailRuleValidation(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `CloudforceOneEmailRuleValidation` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneEmailRulesList(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `CloudforceOneEmailRulesList` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneRequestsApiResponseCommon(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `CloudforceOneRequestsApiResponseCommon` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneRule(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `CloudforceOneRule` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneRuleApprovalDetail(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `CloudforceOneRuleApprovalDetail` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneRuleApprovalsList(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `CloudforceOneRuleApprovalsList` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneRulePreview(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `CloudforceOneRulePreview` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneRulesPreviewList(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `CloudforceOneRulesPreviewList` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneRulesSearch(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `CloudforceOneRulesSearch` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneStat(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `CloudforceOneStat` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneSuccess(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `CloudforceOneSuccess` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneTreeNode(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `CloudforceOneTreeNode` entity instance. Pass `nil` for no initial data.

#### `CloudforceOneValidation(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `CloudforceOneValidation` entity instance. Pass `nil` for no initial data.

#### `Collection(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `Collection` entity instance. Pass `nil` for no initial data.

#### `CollectionsItem(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `CollectionsItem` entity instance. Pass `nil` for no initial data.

#### `Country(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `Country` entity instance. Pass `nil` for no initial data.

#### `DashboardAsset(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `DashboardAsset` entity instance. Pass `nil` for no initial data.

#### `DashboardUser(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `DashboardUser` entity instance. Pass `nil` for no initial data.

#### `Dataset(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `Dataset` entity instance. Pass `nil` for no initial data.

#### `Event(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `Event` entity instance. Pass `nil` for no initial data.

#### `Group(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `Group` entity instance. Pass `nil` for no initial data.

#### `Indicator(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `Indicator` entity instance. Pass `nil` for no initial data.

#### `IndicatorType(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `IndicatorType` entity instance. Pass `nil` for no initial data.

#### `Permission(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `Permission` entity instance. Pass `nil` for no initial data.

#### `Priority(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `Priority` entity instance. Pass `nil` for no initial data.

#### `PriorityIntelligence(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `PriorityIntelligence` entity instance. Pass `nil` for no initial data.

#### `PriorityIntelligenceRequirement(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `PriorityIntelligenceRequirement` entity instance. Pass `nil` for no initial data.

#### `PriorityIntelligenceRequirementsPir(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `PriorityIntelligenceRequirementsPir` entity instance. Pass `nil` for no initial data.

#### `PublicCredentialMonitor(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `PublicCredentialMonitor` entity instance. Pass `nil` for no initial data.

#### `Request(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `Request` entity instance. Pass `nil` for no initial data.

#### `RequestForInformationRfi(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `RequestForInformationRfi` entity instance. Pass `nil` for no initial data.

#### `RequestsDashboard(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `RequestsDashboard` entity instance. Pass `nil` for no initial data.

#### `Rfi(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `Rfi` entity instance. Pass `nil` for no initial data.

#### `RfiMessage(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `RfiMessage` entity instance. Pass `nil` for no initial data.

#### `Rule(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `Rule` entity instance. Pass `nil` for no initial data.

#### `Scan(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `Scan` entity instance. Pass `nil` for no initial data.

#### `Tag(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `Tag` entity instance. Pass `nil` for no initial data.

#### `TagCategory(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `TagCategory` entity instance. Pass `nil` for no initial data.

#### `TargetIndustry(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `TargetIndustry` entity instance. Pass `nil` for no initial data.

#### `ThreatSignal(data map[string]any) CloudflareCloudforceOneEntity`

Create a new `ThreatSignal` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## AttackerEntity

```go
attacker := client.Attacker(nil)
fmt.Println(attacker.GetName()) // "attacker"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Attacker(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AttackerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BinDbEntity

```go
binDb := client.BinDb(nil)
fmt.Println(binDb.GetName()) // "bin_db"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_type` | `string` | Yes |  |
| `md5` | `string` | Yes |  |
| `sha1` | `string` | Yes |  |
| `sha256` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.BinDb(nil).Load(map[string]any{"account_id": "account_id", "hash": "hash"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BinDb(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "content_type": "example_content_type",
    "md5": "example_md5",
    "sha1": "example_sha1",
    "sha256": "example_sha256",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BinDbEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BrandProtectionEntity

```go
brandProtection := client.BrandProtection(nil)
fmt.Println(brandProtection.GetName()) // "brand_protection"
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
| `domains` | `[]any` | Yes |  |
| `errors` | `[]any` | Yes |  |
| `fields` | `map[string]any` | Yes |  |
| `first_seen` | `string` | Yes |  |
| `format` | `string` | No |  |
| `id` | `float64` | Yes |  |
| `image_data` | `string` | Yes | Base64 encoded image data. |
| `letterText` | `string` | Yes |  |
| `letterType` | `string` | Yes |  |
| `matchId` | `float64` | Yes |  |
| `matchType` | `string` | Yes |  |
| `match_details` | `[]any` | No | Per-match detail objects with query metadata and individual dismissed state. |
| `match_ids` | `[]any` | No |  |
| `matched_at` | `string` | Yes |  |
| `matches` | `[]any` | Yes |  |
| `max_time` | `string` | No |  |
| `message` | `string` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `min_time` | `string` | No |  |
| `name` | `string` | Yes |  |
| `noticeParams` | `map[string]any` | Yes |  |
| `notices` | `[]any` | Yes |  |
| `public_scans` | `map[string]any` | Yes |  |
| `queryId` | `float64` | Yes |  |
| `queryIds` | `[]any` | No |  |
| `query_id` | `int` | Yes |  |
| `r2_path` | `string` | Yes |  |
| `registrar` | `string` | Yes |  |
| `result` | `any` | Yes |  |
| `result_info` | `map[string]any` | Yes | Present on paginated list responses when page or per_page is supplied. |
| `scan` | `bool` | No |  |
| `scan_matches` | `bool` | No |  |
| `scan_status` | `string` | Yes |  |
| `scan_submission_id` | `int` | Yes |  |
| `score_threshold` | `float64` | No | Minimum similarity score threshold for matches (0-1, default: 0) |
| `search_lookback` | `bool` | No | If true, search recent domain lookback entries for matches |
| `similarity_score` | `float64` | Yes |  |
| `similarity_threshold` | `float64` | Yes | Minimum similarity score (0-1) required for visual matches |
| `source` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `string_matches` | `[]any` | Yes |  |
| `success` | `bool` | Yes |  |
| `tag` | `string` | Yes | Unique identifier for the logo query |
| `takedownNoticeId` | `float64` | Yes |  |
| `templateId` | `string` | Yes |  |
| `top_k` | `int` | No | Number of closest matches to return (1-100, default: 10) |
| `total_analyzed` | `float64` | Yes |  |
| `total_matches` | `float64` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.BrandProtection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.BrandProtection(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BrandProtection(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "action": "example_action",
    "body": "example_body",
    "brand": "example_brand",
    "category": "example_category",
    "createdAt": "example_createdAt",
    "description": "example_description",
    "dismissed": true,
    "domain": "example_domain",
    "domain_id": 1,
    "domains": []any{},
    "errors": []any{},
    "fields": map[string]any{},
    "first_seen": "example_first_seen",
    "id": 1,
    "image_data": "example_image_data",
    "letterText": "example_letterText",
    "letterType": "example_letterType",
    "matchId": 1,
    "matchType": "example_matchType",
    "matched_at": "example_matched_at",
    "matches": []any{},
    "message": "example_message",
    "messages": []any{},
    "name": "example_name",
    "noticeParams": map[string]any{},
    "notices": []any{},
    "public_scans": map[string]any{},
    "queryId": 1,
    "r2_path": "example_r2_path",
    "registrar": "example_registrar",
    "result": "example_result",
    "result_info": map[string]any{},
    "scan_status": "example_scan_status",
    "scan_submission_id": 1,
    "similarity_score": 1,
    "similarity_threshold": 1,
    "source": "example_source",
    "status": "example_status",
    "string_matches": []any{},
    "success": true,
    "tag": "example_tag",
    "takedownNoticeId": 1,
    "templateId": "example_templateId",
    "total_analyzed": 1,
    "total_matches": 1,
    "truncated": true,
    "updatedAt": "example_updatedAt",
    "uploaded_at": "example_uploaded_at",
    "url_scan_id": "example_url_scan_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.BrandProtection(nil).Update(map[string]any{
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.BrandProtection(nil).Remove(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BrandProtectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CategoryEntity

```go
category := client.Category(nil)
fmt.Println(category.GetName()) // "category"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `killChain` | `float64` | Yes |  |
| `mitreAttack` | `[]any` | No |  |
| `mitreCapec` | `[]any` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Category(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Category(nil).Load(map[string]any{"id": "category_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Category(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "killChain": 1,
    "name": "example_name",
    "uuid": "example_uuid",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Category(nil).Update(map[string]any{
    "id": "category_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Category(nil).Remove(map[string]any{"id": "category_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CategoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CloudforceOneAccountExemptionEntity

```go
cloudforceOneAccountExemption := client.CloudforceOneAccountExemption(nil)
fmt.Println(cloudforceOneAccountExemption.GetName()) // "cloudforce_one_account_exemption"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `namespace` | `[]any` | Yes |  |
| `tag_match` | `[]any` | Yes |  |
| `worker_name` | `[]any` | Yes |  |

### Field Usage by Operation

| Field | list | create | update | remove |
| --- | --- | --- | --- | --- |
| `namespace` | - | Yes | Yes | - |
| `tag_match` | - | Yes | Yes | - |
| `worker_name` | - | Yes | Yes | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CloudforceOneAccountExemption(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CloudforceOneAccountExemption(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "namespace": []any{},
    "tag_match": []any{},
    "worker_name": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CloudforceOneAccountExemption(nil).Update(map[string]any{
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.CloudforceOneAccountExemption(nil).Remove(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CloudforceOneAccountExemptionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CloudforceOneDeleteAllEntity

```go
cloudforceOneDeleteAll := client.CloudforceOneDeleteAll(nil)
fmt.Println(cloudforceOneDeleteAll.GetName()) // "cloudforce_one_delete_all"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.CloudforceOneDeleteAll(nil).Remove(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CloudforceOneDeleteAllEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CloudforceOneEditApprovalEntity

```go
cloudforceOneEditApproval := client.CloudforceOneEditApproval(nil)
fmt.Println(cloudforceOneEditApproval.GetName()) // "cloudforce_one_edit_approval"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `condition` | `map[string]any` | Yes | Nested condition groups support up to 10 levels of depth. |
| `description` | `string` | No |  |
| `enabled` | `bool` | No |  |
| `id` | `string` | No |  |
| `meta` | `[]any` | No |  |
| `name` | `string` | Yes |  |
| `status` | `string` | No | Disposition for matching email. |
| `strings` | `[]any` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CloudforceOneEditApproval(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "approval_id": "example_approval_id",
    "condition": map[string]any{},
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CloudforceOneEditApproval(nil).Update(map[string]any{
    "account_id": "account_id",
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CloudforceOneEditApprovalEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CloudforceOneEmailRuleValidationEntity

```go
cloudforceOneEmailRuleValidation := client.CloudforceOneEmailRuleValidation(nil)
fmt.Println(cloudforceOneEmailRuleValidation.GetName()) // "cloudforce_one_email_rule_validation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `compiled_yara` | `string` | No |  |
| `condition` | `map[string]any` | Yes | Nested condition groups support up to 10 levels of depth. |
| `description` | `string` | No |  |
| `enabled` | `bool` | No |  |
| `error` | `string` | No |  |
| `existing_rule_id` | `string` | No | Existing rule ID to exclude from duplicate-name checks when validating an update. |
| `meta` | `[]any` | No |  |
| `name` | `string` | Yes |  |
| `status` | `string` | No | Disposition for matching email. |
| `strings` | `[]any` | No |  |
| `valid` | `bool` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CloudforceOneEmailRuleValidation(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "condition": map[string]any{},
    "name": "example_name",
    "valid": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CloudforceOneEmailRuleValidationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CloudforceOneEmailRulesListEntity

```go
cloudforceOneEmailRulesList := client.CloudforceOneEmailRulesList(nil)
fmt.Println(cloudforceOneEmailRulesList.GetName()) // "cloudforce_one_email_rules_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | No |  |
| `created_at` | `float64` | Yes |  |
| `created_by` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `enabled` | `bool` | Yes | Whether this rule is active for dice consumers. |
| `id` | `string` | Yes |  |
| `is_public` | `bool` | Yes | Whether this rule is visible to other internal accounts. |
| `meta` | `[]any` | No | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` | Yes |  |
| `namespaces` | `[]any` | Yes |  |
| `path` | `string` | Yes |  |
| `pending_approval_id` | `float64` | Yes | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `map[string]any` | Yes | Proposed update or deletion awaiting approval. |
| `structured_source` | `string` | No | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `float64` | Yes |  |
| `updated_by` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CloudforceOneEmailRulesList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CloudforceOneEmailRulesListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CloudforceOneRequestsApiResponseCommonEntity

```go
cloudforceOneRequestsApiResponseCommon := client.CloudforceOneRequestsApiResponseCommon(nil)
fmt.Println(cloudforceOneRequestsApiResponseCommon.GetName()) // "cloudforce_one_requests_api_response_common"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.CloudforceOneRequestsApiResponseCommon(nil).Remove(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CloudforceOneRequestsApiResponseCommonEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CloudforceOneRuleEntity

```go
cloudforceOneRule := client.CloudforceOneRule(nil)
fmt.Println(cloudforceOneRule.GetName()) // "cloudforce_one_rule"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `[]any` | No |  |
| `commit_message` | `string` | No | Human-readable justification for this change. |
| `content` | `string` | Yes |  |
| `description` | `string` | No | Human-readable description of the rule. |
| `enabled` | `bool` | No | Whether this rule is active for dice consumers. |
| `is_public` | `bool` | No | Whether this rule is visible to other internal accounts. |
| `meta` | `[]any` | No | Adds YARA meta entries to the rule's meta block and stores them in rule_meta alongside content metadata. |
| `name` | `string` | Yes |  |
| `namespaces` | `[]any` | No | Optional WfP deployment tags (customer rules only). |
| `path` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CloudforceOneRule(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "content": "example_content",
    "name": "example_name",
    "path": "example_path",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CloudforceOneRuleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CloudforceOneRuleApprovalDetailEntity

```go
cloudforceOneRuleApprovalDetail := client.CloudforceOneRuleApprovalDetail(nil)
fmt.Println(cloudforceOneRuleApprovalDetail.GetName()) // "cloudforce_one_rule_approval_detail"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `audit_log_id` | `float64` | Yes |  |
| `can_review` | `bool` | Yes | Whether the authenticated user may approve or reject this pending change. |
| `cancelled_at` | `float64` | Yes | Time at which the requester cancelled the approval. |
| `cancelled_by` | `string` | Yes | Requester who cancelled the pending approval. |
| `change_description` | `string` | Yes |  |
| `change_type` | `string` | Yes |  |
| `commit_message` | `string` | Yes | The requester supplies this human-readable justification with the change. |
| `compiler_warnings` | `[]any` | No |  |
| `current_rule` | `any` | Yes |  |
| `id` | `float64` | Yes |  |
| `proposed_changes` | `any` | Yes | Contains structured proposed rule changes, or null for unresolved persisted data. |
| `rejection_reason` | `string` | Yes | The reviewer may supply a reason when rejecting the change. |
| `requested_at` | `float64` | Yes |  |
| `requested_by` | `string` | Yes |  |
| `reviewed_at` | `float64` | Yes |  |
| `reviewer_scope` | `string` | Yes | Review policy: general Nomos approvers for default; general approvers or Phishguard for email. |
| `revision_number` | `int` | Yes | Revision number within this approval request chain. |
| `rule_id` | `string` | Yes |  |
| `rule_name` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `superseded_by_approval_id` | `float64` | Yes | Newer approval revision that replaced this approval. |
| `supersedes_approval_id` | `float64` | Yes | This approval replaces the referenced approval revision. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CloudforceOneRuleApprovalDetail(nil).Load(map[string]any{"id": "cloudforce_one_rule_approval_detail_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CloudforceOneRuleApprovalDetail(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "approval_id": "example_approval_id",
    "audit_log_id": 1,
    "can_review": true,
    "cancelled_at": 1,
    "cancelled_by": "example_cancelled_by",
    "change_description": "example_change_description",
    "change_type": "example_change_type",
    "commit_message": "example_commit_message",
    "current_rule": "example_current_rule",
    "id": 1,
    "proposed_changes": "example_proposed_changes",
    "rejection_reason": "example_rejection_reason",
    "requested_at": 1,
    "requested_by": "example_requested_by",
    "reviewed_at": 1,
    "reviewer_scope": "example_reviewer_scope",
    "revision_number": 1,
    "rule_id": "example_rule_id",
    "rule_name": "example_rule_name",
    "status": "example_status",
    "superseded_by_approval_id": 1,
    "supersedes_approval_id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CloudforceOneRuleApprovalDetailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CloudforceOneRuleApprovalsListEntity

```go
cloudforceOneRuleApprovalsList := client.CloudforceOneRuleApprovalsList(nil)
fmt.Println(cloudforceOneRuleApprovalsList.GetName()) // "cloudforce_one_rule_approvals_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `audit_log_id` | `float64` | Yes |  |
| `can_review` | `bool` | Yes | Whether the authenticated user may approve or reject this pending change. |
| `cancelled_at` | `float64` | Yes | Time at which the requester cancelled the approval. |
| `cancelled_by` | `string` | Yes | Requester who cancelled the pending approval. |
| `change_description` | `string` | Yes |  |
| `change_type` | `string` | Yes |  |
| `commit_message` | `string` | Yes | The requester supplies this human-readable justification with the change. |
| `id` | `float64` | Yes |  |
| `proposed_changes` | `any` | Yes | Contains structured proposed rule changes, or null for unresolved persisted data. |
| `rejection_reason` | `string` | Yes | The reviewer may supply a reason when rejecting the change. |
| `requested_at` | `float64` | Yes |  |
| `requested_by` | `string` | Yes |  |
| `reviewed_at` | `float64` | Yes |  |
| `reviewer_scope` | `string` | Yes | Review policy: general Nomos approvers for default; general approvers or Phishguard for email. |
| `revision_number` | `int` | Yes | Revision number within this approval request chain. |
| `rule_id` | `string` | Yes |  |
| `rule_name` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `superseded_by_approval_id` | `float64` | Yes | Newer approval revision that replaced this approval. |
| `supersedes_approval_id` | `float64` | Yes | This approval replaces the referenced approval revision. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CloudforceOneRuleApprovalsList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CloudforceOneRuleApprovalsListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CloudforceOneRulePreviewEntity

```go
cloudforceOneRulePreview := client.CloudforceOneRulePreview(nil)
fmt.Println(cloudforceOneRulePreview.GetName()) // "cloudforce_one_rule_preview"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit_message` | `string` | No | Human-readable justification for this change. |
| `condition` | `map[string]any` | Yes | Nested condition groups support up to 10 levels of depth. |
| `content` | `string` | No |  |
| `created_at` | `float64` | Yes |  |
| `created_by` | `string` | Yes |  |
| `description` | `string` | Yes | Human-readable description of the rule. |
| `enabled` | `bool` | Yes | Whether this rule is active for dice consumers. |
| `id` | `string` | Yes |  |
| `is_public` | `bool` | Yes | Whether this rule is visible to other internal accounts. |
| `meta` | `[]any` | No | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` | Yes |  |
| `namespaces` | `[]any` | Yes |  |
| `path` | `string` | Yes | Path change goes through approval workflow. |
| `pending_approval_id` | `float64` | Yes | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `map[string]any` | Yes | Proposed update or deletion awaiting approval. |
| `status` | `string` | No | Disposition for matching email. |
| `strings` | `[]any` | No |  |
| `structured_source` | `string` | No | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `float64` | Yes |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CloudforceOneRulePreview(nil).Load(map[string]any{"id": "cloudforce_one_rule_preview_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CloudforceOneRulePreview(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "condition": map[string]any{},
    "created_at": 1,
    "created_by": "example_created_by",
    "description": "example_description",
    "enabled": true,
    "id": "example_id",
    "is_public": true,
    "name": "example_name",
    "namespaces": []any{},
    "path": "example_path",
    "pending_approval_id": 1,
    "pending_change": map[string]any{},
    "updated_at": 1,
    "updated_by": "example_updated_by",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CloudforceOneRulePreview(nil).Update(map[string]any{
    "id": "cloudforce_one_rule_preview_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CloudforceOneRulePreviewEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CloudforceOneRulesPreviewListEntity

```go
cloudforceOneRulesPreviewList := client.CloudforceOneRulesPreviewList(nil)
fmt.Println(cloudforceOneRulesPreviewList.GetName()) // "cloudforce_one_rules_preview_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | No |  |
| `created_at` | `float64` | Yes |  |
| `created_by` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `enabled` | `bool` | Yes | Whether this rule is active for dice consumers. |
| `id` | `string` | Yes |  |
| `is_public` | `bool` | Yes | Whether this rule is visible to other internal accounts. |
| `meta` | `[]any` | No | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` | Yes |  |
| `namespaces` | `[]any` | Yes |  |
| `path` | `string` | Yes |  |
| `pending_approval_id` | `float64` | Yes | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `map[string]any` | Yes | Proposed update or deletion awaiting approval. |
| `structured_source` | `string` | No | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `float64` | Yes |  |
| `updated_by` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CloudforceOneRulesPreviewList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CloudforceOneRulesPreviewListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CloudforceOneRulesSearchEntity

```go
cloudforceOneRulesSearch := client.CloudforceOneRulesSearch(nil)
fmt.Println(cloudforceOneRulesSearch.GetName()) // "cloudforce_one_rules_search"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | No |  |
| `created_at` | `float64` | Yes |  |
| `created_by` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `enabled` | `bool` | Yes | Whether this rule is active for dice consumers. |
| `id` | `string` | Yes |  |
| `is_public` | `bool` | Yes | Whether this rule is visible to other internal accounts. |
| `meta` | `[]any` | No | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` | Yes |  |
| `namespaces` | `[]any` | Yes |  |
| `path` | `string` | Yes |  |
| `pending_approval_id` | `float64` | Yes | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `map[string]any` | Yes | Proposed update or deletion awaiting approval. |
| `score` | `float64` | No | Relevance score in [0,1]. |
| `scoring_details` | `map[string]any` | No | AI Search hybrid retrieval returns this per-component scoring breakdown. |
| `structured_source` | `string` | No | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `float64` | Yes |  |
| `updated_by` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CloudforceOneRulesSearch(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CloudforceOneRulesSearchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CloudforceOneStatEntity

```go
cloudforceOneStat := client.CloudforceOneStat(nil)
fmt.Println(cloudforceOneStat.GetName()) // "cloudforce_one_stat"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CloudforceOneStat(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CloudforceOneStatEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CloudforceOneSuccessEntity

```go
cloudforceOneSuccess := client.CloudforceOneSuccess(nil)
fmt.Println(cloudforceOneSuccess.GetName()) // "cloudforce_one_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CloudforceOneSuccess(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "approval_id": "example_approval_id",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.CloudforceOneSuccess(nil).Remove(map[string]any{"account_id": "account_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CloudforceOneSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CloudforceOneTreeNodeEntity

```go
cloudforceOneTreeNode := client.CloudforceOneTreeNode(nil)
fmt.Println(cloudforceOneTreeNode.GetName()) // "cloudforce_one_tree_node"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `children` | `[]any` | Yes |  |
| `count` | `float64` | Yes |  |
| `name` | `string` | Yes |  |
| `path` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CloudforceOneTreeNode(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CloudforceOneTreeNodeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CloudforceOneValidationEntity

```go
cloudforceOneValidation := client.CloudforceOneValidation(nil)
fmt.Println(cloudforceOneValidation.GetName()) // "cloudforce_one_validation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | Yes |  |
| `error` | `string` | No |  |
| `excludeRuleId` | `string` | No |  |
| `name` | `string` | Yes |  |
| `namespaces` | `[]any` | No |  |
| `path` | `string` | No |  |
| `valid` | `bool` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CloudforceOneValidation(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "content": "example_content",
    "name": "example_name",
    "valid": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CloudforceOneValidationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CollectionEntity

```go
collection := client.Collection(nil)
fmt.Println(collection.GetName()) // "collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `columns` | `[]any` | Yes |  |
| `created_at` | `string` | Yes |  |
| `created_by` | `string` | Yes |  |
| `data` | `map[string]any` | Yes |  |
| `id` | `string` | Yes |  |
| `item_count` | `float64` | Yes |  |
| `metadata` | `map[string]any` | No |  |
| `name` | `string` | Yes | New column name (must be unique) |
| `position` | `float64` | Yes | Column display order |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Collection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Collection(nil).Load(map[string]any{"id": "collection_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Collection(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "columns": []any{},
    "created_at": "example_created_at",
    "created_by": "example_created_by",
    "data": map[string]any{},
    "id": "example_id",
    "item_count": 1,
    "name": "example_name",
    "position": 1,
    "required": true,
    "status": "example_status",
    "type": "example_type",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Collection(nil).Update(map[string]any{
    "id": "collection_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Collection(nil).Remove(map[string]any{"id": "collection_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CollectionsItemEntity

```go
collectionsItem := client.CollectionsItem(nil)
fmt.Println(collectionsItem.GetName()) // "collections_item"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CollectionsItem(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "collection_id": "example_collection_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CollectionsItemEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CountryEntity

```go
country := client.Country(nil)
fmt.Println(country.GetName()) // "country"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | Yes |  |
| `success` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Country(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CountryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DashboardAssetEntity

```go
dashboardAsset := client.DashboardAsset(nil)
fmt.Println(dashboardAsset.GetName()) // "dashboard_asset"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assets` | `map[string]any` | Yes |  |
| `contentType` | `map[string]any` | Yes |  |
| `count` | `map[string]any` | Yes |  |
| `downloadable` | `map[string]any` | Yes |  |
| `expiresAt` | `map[string]any` | Yes |  |
| `fileName` | `map[string]any` | Yes |  |
| `fileSize` | `map[string]any` | Yes |  |
| `id` | `map[string]any` | Yes |  |
| `is_cloudflare_team` | `map[string]any` | Yes |  |
| `metadata` | `map[string]any` | Yes |  |
| `origin` | `map[string]any` | Yes |  |
| `state` | `map[string]any` | Yes |  |
| `tlp` | `map[string]any` | Yes |  |
| `uploadedAt` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DashboardAsset(nil).Load(map[string]any{"account_id": "account_id", "project_type": "project_type", "request_id": "request_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DashboardAsset(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "project_type": "example_project_type",
    "request_id": "example_request_id",
    "assets": map[string]any{},
    "contentType": map[string]any{},
    "count": map[string]any{},
    "downloadable": map[string]any{},
    "expiresAt": map[string]any{},
    "fileName": map[string]any{},
    "fileSize": map[string]any{},
    "id": map[string]any{},
    "is_cloudflare_team": map[string]any{},
    "metadata": map[string]any{},
    "origin": map[string]any{},
    "state": map[string]any{},
    "tlp": map[string]any{},
    "uploadedAt": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DashboardAssetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DashboardUserEntity

```go
dashboardUser := client.DashboardUser(nil)
fmt.Println(dashboardUser.GetName()) // "dashboard_user"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `string` | No | User display name |
| `id` | `string` | Yes | Unique user ID |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DashboardUser(nil).Load(map[string]any{"account_id": "account_id", "request_id": "request_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DashboardUserEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DatasetEntity

```go
dataset := client.Dataset(nil)
fmt.Println(dataset.GetName()) // "dataset"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Dataset(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Dataset(nil).Load(map[string]any{"id": "dataset_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Dataset(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "id": "example_id",
    "indicatorWriteMode": "example_indicatorWriteMode",
    "isAnalytics": true,
    "isPublic": true,
    "name": "example_name",
    "uuid": "example_uuid",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Dataset(nil).Update(map[string]any{
    "id": "dataset_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Dataset(nil).Remove(map[string]any{"id": "dataset_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DatasetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EventEntity

```go
event := client.Event(nil)
fmt.Println(event.GetName()) // "event"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountId` | `float64` | Yes |  |
| `account_id` | `int` | Yes | Account ID |
| `alert_enabled` | `bool` | Yes | Whether alerts are enabled |
| `alert_rollup_enabled` | `bool` | Yes | Whether alert rollup is enabled |
| `attacker` | `string` | Yes |  |
| `attackerCountry` | `string` | Yes |  |
| `attackerCountryAlpha3` | `string` | Yes |  |
| `category` | `string` | Yes |  |
| `childIds` | `[]any` | No | Array of child event UUIDs that were processed |
| `created` | `string` | Yes |  |
| `createdAt` | `string` | No |  |
| `createdEventsCount` | `float64` | Yes | Number of events created |
| `createdIndicatorsCount` | `float64` | Yes | Number of indicators created |
| `createdRelationshipsCount` | `float64` | Yes | Number of relationships created |
| `created_at` | `string` | Yes | Creation timestamp |
| `cursor` | `string` | No | Cursor for pagination. |
| `custom_threat_feed_id` | `int` | No | Intel Indicator Feed ID (numeric) |
| `data` | `string` | Yes |  |
| `datasetId` | `string` | Yes | Dataset UUIDs to query, or one standalone scope value: 'all'/'*' for the legacy all-datasets behavior, 'analytics' for isAnalytics=true datasets, or 'operational' for isAnalytics=false datasets. |
| `date` | `string` | Yes |  |
| `errorCount` | `float64` | Yes | Number of errors encountered |
| `errors` | `[]any` | No | Array of error details |
| `event` | `string` | Yes |  |
| `eventIds` | `[]any` | Yes | List of event UUIDs to update (1-100) |
| `failedCount` | `float64` | Yes |  |
| `failures` | `[]any` | No | List of events that failed to update with error messages |
| `hasChildren` | `bool` | Yes |  |
| `id` | `float64` | Yes | Unique identifier for the saved query |
| `includeCreatedEvents` | `bool` | No | When true, response includes array of created event UUIDs and shard IDs. |
| `indicator` | `string` | Yes |  |
| `indicatorType` | `string` | Yes |  |
| `indicatorTypeId` | `float64` | Yes |  |
| `insight` | `string` | No |  |
| `killChain` | `float64` | Yes |  |
| `message` | `string` | Yes | Human-readable message describing the operation result |
| `mitreAttack` | `[]any` | Yes |  |
| `mitreCapec` | `[]any` | Yes |  |
| `name` | `string` | Yes | Name of the saved query |
| `numReferenced` | `float64` | Yes |  |
| `numReferences` | `float64` | Yes |  |
| `order` | `string` | No |  |
| `orderBy` | `string` | No |  |
| `page` | `float64` | No |  |
| `pageSize` | `float64` | No |  |
| `parentId` | `string` | Yes | UUID of the parent event that will be the source of the relationship |
| `query_json` | `string` | Yes | JSON string containing the query parameters |
| `raw` | `map[string]any` | No |  |
| `rawId` | `string` | Yes |  |
| `referenced` | `[]any` | Yes |  |
| `referencedIds` | `[]any` | Yes |  |
| `references` | `[]any` | Yes |  |
| `referencesIds` | `[]any` | Yes |  |
| `relationshipType` | `string` | Yes | Type of relationship to create between parent and child events |
| `relationships` | `[]any` | Yes | Array of successfully created relationship objects |
| `relationshipsCreated` | `float64` | No | Number of relationships that were successfully created |
| `releasabilityId` | `string` | No |  |
| `rule_enabled` | `bool` | Yes | Whether rule is enabled |
| `rule_list_id` | `string` | No | WAF rules list ID for blocking |
| `rule_scope` | `string` | No | Scope for the rule |
| `search` | `[]any` | No | Structured search as a JSON array of {field, op, value} objects. |
| `source` | `string` | Yes |  |
| `success` | `bool` | Yes | Whether the relationship creation operation completed successfully |
| `tags` | `[]any` | Yes |  |
| `targetCountry` | `string` | Yes |  |
| `targetCountryAlpha3` | `string` | Yes |  |
| `targetIndustry` | `string` | Yes |  |
| `tlp` | `string` | Yes |  |
| `updatedCount` | `float64` | Yes |  |
| `updated_at` | `string` | Yes | Last update timestamp |
| `updates` | `map[string]any` | Yes | Fields to update on all specified events. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Event(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Event(nil).Load(map[string]any{"id": "event_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Event(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "accountId": 1,
    "alert_enabled": true,
    "alert_rollup_enabled": true,
    "attacker": "example_attacker",
    "attackerCountry": "example_attackerCountry",
    "attackerCountryAlpha3": "example_attackerCountryAlpha3",
    "category": "example_category",
    "created": "example_created",
    "createdEventsCount": 1,
    "createdIndicatorsCount": 1,
    "createdRelationshipsCount": 1,
    "created_at": "example_created_at",
    "data": "example_data",
    "datasetId": "example_datasetId",
    "date": "example_date",
    "errorCount": 1,
    "event": "example_event",
    "eventIds": []any{},
    "failedCount": 1,
    "hasChildren": true,
    "indicator": "example_indicator",
    "indicatorType": "example_indicatorType",
    "indicatorTypeId": 1,
    "killChain": 1,
    "message": "example_message",
    "mitreAttack": []any{},
    "mitreCapec": []any{},
    "name": "example_name",
    "numReferenced": 1,
    "numReferences": 1,
    "parentId": "example_parentId",
    "query_json": "example_query_json",
    "rawId": "example_rawId",
    "referenced": []any{},
    "referencedIds": []any{},
    "references": []any{},
    "referencesIds": []any{},
    "relationshipType": "example_relationshipType",
    "relationships": []any{},
    "rule_enabled": true,
    "source": "example_source",
    "success": true,
    "tags": []any{},
    "targetCountry": "example_targetCountry",
    "targetCountryAlpha3": "example_targetCountryAlpha3",
    "targetIndustry": "example_targetIndustry",
    "tlp": "example_tlp",
    "updatedCount": 1,
    "updated_at": "example_updated_at",
    "updates": map[string]any{},
    "user_email": "example_user_email",
    "uuid": "example_uuid",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Event(nil).Update(map[string]any{
    "id": "event_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Event(nil).Remove(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EventEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GroupEntity

```go
group := client.Group(nil)
fmt.Println(group.GetName()) // "group"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `id` | `string` | No |  |
| `members` | `[]any` | Yes |  |
| `name` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |
| `uuid` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Group(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Group(nil).Load(map[string]any{"id": "group_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Group(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "createdAt": "example_createdAt",
    "description": "example_description",
    "members": []any{},
    "name": "example_name",
    "updatedAt": "example_updatedAt",
    "uuid": "example_uuid",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Group(nil).Update(map[string]any{
    "id": "group_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Group(nil).Remove(map[string]any{"id": "group_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GroupEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IndicatorEntity

```go
indicator := client.Indicator(nil)
fmt.Println(indicator.GetName()) // "indicator"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completeness` | `map[string]any` | Yes |  |
| `confidence` | `int` | No | Updated confidence. |
| `createdAt` | `string` | Yes |  |
| `datasetId` | `string` | No | The dataset ID this indicator belongs to. |
| `description` | `string` | No | Optional description for the indicator type |
| `durableObjectId` | `string` | Yes |  |
| `id` | `string` | No |  |
| `indicatorType` | `string` | Yes | The indicator type to create (e.g., 'DOMAIN', 'IP', 'URL', 'HASH', 'EMAIL') |
| `indicators` | `map[string]any` | Yes |  |
| `message` | `string` | Yes |  |
| `metadata` | `map[string]any` | No | Updated metadata. |
| `pagination` | `map[string]any` | Yes |  |
| `relatedEvents` | `[]any` | No |  |
| `sources` | `[]any` | Yes | RSS article sources from which this indicator was extracted. |
| `tags` | `[]any` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Indicator(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Indicator(nil).Load(map[string]any{"id": "indicator_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Indicator(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "dataset_id": "example_dataset_id",
    "completeness": map[string]any{},
    "createdAt": "example_createdAt",
    "durableObjectId": "example_durableObjectId",
    "indicatorType": "example_indicatorType",
    "indicators": map[string]any{},
    "message": "example_message",
    "pagination": map[string]any{},
    "sources": []any{},
    "updatedAt": "example_updatedAt",
    "uuid": "example_uuid",
    "value": "example_value",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Indicator(nil).Update(map[string]any{
    "id": "indicator_id",
    "account_id": "account_id",
    "dataset_id": "dataset_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Indicator(nil).Remove(map[string]any{"id": "indicator_id", "account_id": "account_id", "dataset_id": "dataset_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IndicatorEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IndicatorTypeEntity

```go
indicatorType := client.IndicatorType(nil)
fmt.Println(indicatorType.GetName()) // "indicator_type"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.IndicatorType(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IndicatorTypeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PermissionEntity

```go
permission := client.Permission(nil)
fmt.Println(permission.GetName()) // "permission"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Permission(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Permission(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "dataset_id": "example_dataset_id",
    "createdAt": "example_createdAt",
    "resourceType": "example_resourceType",
    "role": "example_role",
    "subjectId": "example_subjectId",
    "subjectType": "example_subjectType",
    "updatedAt": "example_updatedAt",
    "uuid": "example_uuid",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Permission(nil).Update(map[string]any{
    "account_id": "account_id",
    "dataset_id": "dataset_id",
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Permission(nil).Remove(map[string]any{"account_id": "account_id", "dataset_id": "dataset_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PermissionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PriorityEntity

```go
priority := client.Priority(nil)
fmt.Println(priority.GetName()) // "priority"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `labels` | `[]any` | Yes | List of labels. |
| `messages` | `[]any` | Yes |  |
| `page` | `int` | Yes | Page number of results. |
| `per_page` | `int` | Yes | Number of results per page. |
| `priority` | `int` | Yes | Priority. |
| `requirement` | `string` | Yes | Requirement. |
| `result` | `any` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `tlp` | `string` | Yes | The CISA defined Traffic Light Protocol (TLP). |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Priority(nil).Load(map[string]any{"id": "priority_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Priority(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "labels": []any{},
    "messages": []any{},
    "page": 1,
    "per_page": 1,
    "priority": 1,
    "requirement": "example_requirement",
    "success": true,
    "tlp": "example_tlp",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Priority(nil).Update(map[string]any{
    "id": "priority_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PriorityEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PriorityIntelligenceEntity

```go
priorityIntelligence := client.PriorityIntelligence(nil)
fmt.Println(priorityIntelligence.GetName()) // "priority_intelligence"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `labels` | `[]any` | No |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PriorityIntelligence(nil).Load(map[string]any{"id": "priority_intelligence_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.PriorityIntelligence(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "requirement": "example_requirement",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.PriorityIntelligence(nil).Update(map[string]any{
    "id": "priority_intelligence_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.PriorityIntelligence(nil).Remove(map[string]any{"id": "priority_intelligence_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PriorityIntelligenceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PriorityIntelligenceRequirementEntity

```go
priorityIntelligenceRequirement := client.PriorityIntelligenceRequirement(nil)
fmt.Println(priorityIntelligenceRequirement.GetName()) // "priority_intelligence_requirement"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `as_of` | `string` | No |  |
| `backtest_days` | `int` | No |  |
| `candidate_limit` | `int` | No |  |
| `dataset_ids` | `[]any` | No |  |
| `dimension` | `string` | Yes |  |
| `emerging_min_current_count` | `int` | No |  |
| `enabled` | `bool` | No |  |
| `established_min_absolute_delta` | `int` | No |  |
| `established_min_prior_count` | `int` | No |  |
| `established_min_relative_delta` | `float64` | No |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PriorityIntelligenceRequirement(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.PriorityIntelligenceRequirement(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "dimension": "example_dimension",
    "value": "example_value",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.PriorityIntelligenceRequirement(nil).Update(map[string]any{
    "account_id": "account_id",
    "interest_id": "interest_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.PriorityIntelligenceRequirement(nil).Remove(map[string]any{"account_id": "account_id", "interest_id": "interest_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PriorityIntelligenceRequirementEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PriorityIntelligenceRequirementsPirEntity

```go
priorityIntelligenceRequirementsPir := client.PriorityIntelligenceRequirementsPir(nil)
fmt.Println(priorityIntelligenceRequirementsPir.GetName()) // "priority_intelligence_requirements__pir"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `labels` | `[]any` | Yes | List of labels. |
| `messages` | `[]any` | Yes |  |
| `priority` | `int` | Yes | Priority. |
| `requirement` | `string` | Yes | Requirement. |
| `result` | `any` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `tlp` | `string` | Yes | The CISA defined Traffic Light Protocol (TLP). |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PriorityIntelligenceRequirementsPir(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.PriorityIntelligenceRequirementsPir(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "labels": []any{},
    "messages": []any{},
    "priority": 1,
    "requirement": "example_requirement",
    "success": true,
    "tlp": "example_tlp",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PriorityIntelligenceRequirementsPirEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PublicCredentialMonitorEntity

```go
publicCredentialMonitor := client.PublicCredentialMonitor(nil)
fmt.Println(publicCredentialMonitor.GetName()) // "public_credential_monitor"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PublicCredentialMonitor(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.PublicCredentialMonitor(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "created_at": "example_created_at",
    "domain": "example_domain",
    "id": 1,
    "matched_at": "example_matched_at",
    "username": "example_username",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.PublicCredentialMonitor(nil).Remove(map[string]any{"account_id": "account_id", "id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PublicCredentialMonitorEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RequestEntity

```go
request := client.Request(nil)
fmt.Println(request.GetName()) // "request"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed_after` | `any` | No | Retrieve requests completed after this time. |
| `completed_before` | `any` | No | Retrieve requests completed before this time. |
| `content` | `string` | No | Request content. |
| `created_after` | `any` | No | Retrieve requests created after this time. |
| `created_before` | `any` | No | Retrieve requests created before this time. |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `[]any` | Yes |  |
| `page` | `int` | Yes | Page number of results. |
| `per_page` | `int` | Yes | Number of results per page. |
| `priority` | `string` | No | Priority for analyzing the request. |
| `request_type` | `string` | No | Requested information from request. |
| `result` | `map[string]any` | Yes |  |
| `sort_by` | `string` | No | Field to sort results by. |
| `sort_order` | `string` | No | Sort order (asc or desc). |
| `status` | `string` | No | Request Status. |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `summary` | `string` | No | Brief description of the request. |
| `tlp` | `string` | No | The CISA defined Traffic Light Protocol (TLP). |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Request(nil).Load(map[string]any{"id": "request_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Request(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "messages": []any{},
    "page": 1,
    "per_page": 1,
    "result": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Request(nil).Update(map[string]any{
    "id": "request_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RequestEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RequestForInformationRfiEntity

```go
requestForInformationRfi := client.RequestForInformationRfi(nil)
fmt.Println(requestForInformationRfi.GetName()) // "request_for_information__rfi"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | No | Content of message. |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `[]any` | Yes |  |
| `priority` | `string` | No | Priority for analyzing the request. |
| `request_type` | `string` | No | Requested information from request. |
| `result` | `[]any` | No |  |
| `source` | `string` | No | Asset file to upload. |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `summary` | `string` | No | Brief description of the request. |
| `tlp` | `string` | No | The CISA defined Traffic Light Protocol (TLP). |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.RequestForInformationRfi(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RequestForInformationRfi(nil).Load(map[string]any{"account_id": "account_id", "asset_id": "asset_id", "request_id": "request_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.RequestForInformationRfi(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "messages": []any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.RequestForInformationRfi(nil).Update(map[string]any{
    "account_id": "account_id",
    "request_id": "request_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RequestForInformationRfiEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RequestsDashboardEntity

```go
requestsDashboard := client.RequestsDashboard(nil)
fmt.Println(requestsDashboard.GetName()) // "requests_dashboard"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `string` | Yes |  |
| `defaultValue` | `any` | No |  |
| `description` | `string` | No |  |
| `displayOrder` | `float64` | Yes |  |
| `errors` | `[]any` | Yes | Always empty on success |
| `fieldLabel` | `string` | Yes |  |
| `fieldName` | `string` | Yes |  |
| `fieldType` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `messages` | `[]any` | Yes | Always empty on success |
| `options` | `[]any` | No |  |
| `projectType` | `string` | Yes |  |
| `project_type` | `string` | Yes |  |
| `public` | `bool` | Yes |  |
| `request_types` | `[]any` | Yes |  |
| `required` | `bool` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `sectionID` | `string` | No |  |
| `sectionLabel` | `string` | No |  |
| `success` | `map[string]any` | Yes |  |
| `total` | `float64` | Yes |  |
| `updated` | `string` | Yes |  |
| `validation` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.RequestsDashboard(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RequestsDashboard(nil).Load(map[string]any{"account_id": "account_id", "project_type": "project_type"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RequestsDashboardEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RfiEntity

```go
rfi := client.Rfi(nil)
fmt.Println(rfi.GetName()) // "rfi"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `map[string]any` | Yes |  |
| `assignee` | `string` | Yes | Assignee email |
| `completed` | `string` | Yes | Completion timestamp |
| `created` | `string` | Yes | Creation timestamp |
| `description` | `string` | No | RFI description (optional). |
| `eventId` | `string` | No | Optional related event ID |
| `id` | `string` | Yes | RFI UUID |
| `investigation_id` | `string` | Yes | Investigation UUID |
| `is_free_request` | `bool` | Yes | Whether this is a free request |
| `message_tokens` | `float64` | Yes | Total message tokens |
| `metadata` | `map[string]any` | No | Optional metadata fields specific to the RFI type |
| `pagination` | `map[string]any` | Yes |  |
| `priority` | `string` | Yes | Request priority |
| `readable_id` | `string` | Yes | Human-readable ID |
| `release_entitlements` | `string` | Yes | Release entitlements |
| `report_id` | `string` | Yes | Report UUID |
| `request` | `map[string]any` | Yes |  |
| `request_type` | `string` | No | Optional request type for the request |
| `result` | `[]any` | Yes |  |
| `status` | `string` | Yes | RFI status. |
| `subtypeId` | `string` | No | Optional subtype ID |
| `success` | `string` | Yes |  |
| `summary` | `string` | Yes | RFI summary |
| `title` | `string` | No | RFI title (optional). |
| `tlp` | `string` | Yes | TLP classification |
| `tokens` | `float64` | Yes | Total tokens used |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Rfi(nil).Load(map[string]any{"id": "rfi_id", "project_type": "project_type"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Rfi(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "project_type": "example_project_type",
    "account": map[string]any{},
    "assignee": "example_assignee",
    "completed": "example_completed",
    "created": "example_created",
    "id": "example_id",
    "investigation_id": "example_investigation_id",
    "is_free_request": true,
    "message_tokens": 1,
    "pagination": map[string]any{},
    "priority": "example_priority",
    "readable_id": "example_readable_id",
    "release_entitlements": "example_release_entitlements",
    "report_id": "example_report_id",
    "request": map[string]any{},
    "result": []any{},
    "status": "example_status",
    "success": "example_success",
    "summary": "example_summary",
    "tlp": "example_tlp",
    "tokens": 1,
    "updated": "example_updated",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Rfi(nil).Update(map[string]any{
    "id": "rfi_id",
    "account_id": "account_id",
    "project_type": "project_type",
    "request_id": "request_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RfiEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RfiMessageEntity

```go
rfiMessage := client.RfiMessage(nil)
fmt.Println(rfiMessage.GetName()) // "rfi_message"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachment_asset_ids` | `[]any` | No |  |
| `attachments` | `[]any` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.RfiMessage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RfiMessage(nil).Load(map[string]any{"id": "rfi_message_id", "account_id": "account_id", "project_type": "project_type", "request_id": "request_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.RfiMessage(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "project_type": "example_project_type",
    "request_id": "example_request_id",
    "attachments": []any{},
    "content": "example_content",
    "created": "example_created",
    "id": 1,
    "is_cloudflare_team": true,
    "is_published": true,
    "published": "example_published",
    "tlp": "example_tlp",
    "updated": "example_updated",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.RfiMessage(nil).Update(map[string]any{
    "id": "rfi_message_id",
    "account_id": "account_id",
    "project_type": "project_type",
    "request_id": "request_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RfiMessageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RuleEntity

```go
rule := client.Rule(nil)
fmt.Println(rule.GetName()) // "rule"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `arrays` | `[]any` | Yes |  |
| `headers` | `map[string]any` | Yes |  |
| `operators` | `map[string]any` | Yes |  |
| `scalars` | `[]any` | Yes |  |
| `string_arrays` | `[]any` | Yes |  |
| `structs` | `[]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Rule(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RuleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ScanEntity

```go
scan := client.Scan(nil)
fmt.Println(scan.GetName()) // "scan"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `frequency` | `float64` | No | Defines the number of days between each scan (0 = One-off scan). |
| `ips` | `[]any` | No | Defines a list of IP addresses or CIDR blocks to scan. |
| `messages` | `[]any` | Yes |  |
| `ports` | `[]any` | No | Defines a list of ports to scan. |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Scan(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Scan(nil).Load(map[string]any{"account_id": "account_id", "config_id": "config_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Scan(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "messages": []any{},
    "result": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Scan(nil).Update(map[string]any{
    "account_id": "account_id",
    "config_id": "config_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Scan(nil).Remove(map[string]any{"account_id": "account_id", "config_id": "config_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ScanEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TagEntity

```go
tag := client.Tag(nil)
fmt.Println(tag.GetName()) // "tag"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeDuration` | `string` | No |  |
| `activeDuration_annotated` | `map[string]any` | Yes |  |
| `actorCategory` | `string` | No |  |
| `actorCategory_annotated` | `map[string]any` | Yes |  |
| `aliasGroupNames` | `[]any` | No |  |
| `aliasGroupNamesInternal` | `[]any` | No |  |
| `aliases` | `[]any` | No | Structured aliases ({ value, confidence 1-10, tlp }). |
| `attributionOrganization` | `string` | No |  |
| `attributionOrganization_annotated` | `map[string]any` | Yes |  |
| `categoryName` | `string` | No |  |
| `categoryUuid` | `string` | No | Tag type (category) UUID. |
| `confidence` | `int` | No | Overall tag confidence (1-10). |
| `createdAt` | `string` | No |  |
| `dateOfDiscovery` | `string` | No | Date of discovery (ISO YYYY-MM-DD). |
| `description` | `string` | No |  |
| `externalReferenceLinks` | `[]any` | No |  |
| `externalReferences` | `[]any` | No | Structured external references ({ url, description }). |
| `externalReferences_annotated` | `[]any` | No |  |
| `id` | `string` | No |  |
| `internalAliases` | `[]any` | No | Internal structured aliases ({ value, confidence 1-10, tlp }). |
| `internalDescription` | `string` | No |  |
| `lastSeen` | `string` | No |  |
| `metadata` | `map[string]any` | No | Updated metadata. |
| `motive` | `string` | No |  |
| `motive_annotated` | `map[string]any` | Yes |  |
| `opsecLevel` | `string` | No |  |
| `opsecLevel_annotated` | `map[string]any` | Yes |  |
| `originCountryISO` | `string` | No | ISO country code (alpha-2 or alpha-3). |
| `originCountryISO_annotated` | `map[string]any` | Yes |  |
| `priority` | `float64` | No |  |
| `priority_annotated` | `map[string]any` | Yes |  |
| `properties` | `map[string]any` | No | Parsed custom field values. |
| `sophisticationLevel` | `string` | No |  |
| `sophisticationLevel_annotated` | `map[string]any` | Yes |  |
| `tlp` | `string` | No | Tag-level TLP handling marking. |
| `type` | `string` | No | Updated relationship type. |
| `updatedAt` | `string` | No |  |
| `uuid` | `string` | Yes |  |
| `value` | `string` | Yes |  |
| `version` | `float64` | No |  |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Tag(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Tag(nil).Load(map[string]any{"id": "tag_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Tag(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "activeDuration_annotated": map[string]any{},
    "actorCategory_annotated": map[string]any{},
    "attributionOrganization_annotated": map[string]any{},
    "motive_annotated": map[string]any{},
    "opsecLevel_annotated": map[string]any{},
    "originCountryISO_annotated": map[string]any{},
    "priority_annotated": map[string]any{},
    "sophisticationLevel_annotated": map[string]any{},
    "uuid": "example_uuid",
    "value": "example_value",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Tag(nil).Update(map[string]any{
    "id": "tag_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Tag(nil).Remove(map[string]any{"id": "tag_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TagEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TagCategoryEntity

```go
tagCategory := client.TagCategory(nil)
fmt.Println(tagCategory.GetName()) // "tag_category"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | No |  |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `schema` | `[]any` | No | Parsed FieldDefinition[] defining custom fields for this category, or null if none. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TagCategory(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TagCategory(nil).Load(map[string]any{"id": "tag_category_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TagCategory(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "name": "example_name",
    "uuid": "example_uuid",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TagCategory(nil).Update(map[string]any{
    "id": "tag_category_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TagCategory(nil).Remove(map[string]any{"id": "tag_category_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TagCategoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TargetIndustryEntity

```go
targetIndustry := client.TargetIndustry(nil)
fmt.Println(targetIndustry.GetName()) // "target_industry"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TargetIndustry(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TargetIndustryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ThreatSignalEntity

```go
threatSignal := client.ThreatSignal(nil)
fmt.Println(threatSignal.GetName()) // "threat_signal"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category_id` | `string` | No | One of the predefined Threat Signals feed categories; see GET /:account_id/v2/threat-signals/categories. |
| `category_uuids` | `[]any` | Yes |  |
| `config` | `string` | No |  |
| `display_name` | `string` | No |  |
| `display_order` | `int` | No |  |
| `enabled` | `bool` | No |  |
| `errors` | `[]any` | Yes |  |
| `feeds` | `[]any` | Yes |  |
| `is_active` | `bool` | No |  |
| `message` | `string` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `name` | `string` | No |  |
| `opted_out` | `bool` | Yes |  |
| `output_schema` | `string` | No |  |
| `poll_interval_s` | `int` | No |  |
| `prompt` | `string` | No |  |
| `read` | `bool` | Yes |  |
| `result` | `any` | Yes |  |
| `skill_ids` | `[]any` | Yes |  |
| `success` | `bool` | Yes |  |
| `tag_id` | `string` | Yes |  |
| `title` | `string` | No |  |
| `url` | `string` | No |  |
| `why_valuable` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ThreatSignal(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ThreatSignal(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ThreatSignal(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "category_uuids": []any{},
    "errors": []any{},
    "feeds": []any{},
    "message": "example_message",
    "messages": []any{},
    "opted_out": true,
    "read": true,
    "result": "example_result",
    "skill_ids": []any{},
    "success": true,
    "tag_id": "example_tag_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ThreatSignal(nil).Update(map[string]any{
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ThreatSignal(nil).Remove(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ThreatSignalEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```go
client := sdk.NewCloudflareCloudforceOneSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
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

