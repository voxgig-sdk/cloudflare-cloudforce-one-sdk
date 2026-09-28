# CloudflareCloudforceOne Python SDK Reference

Complete API reference for the CloudflareCloudforceOne Python SDK.


## CloudflareCloudforceOneSDK

### Constructor

```python
from cloudflarecloudforceone_sdk import CloudflareCloudforceOneSDK

client = CloudflareCloudforceOneSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareCloudforceOneSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = CloudflareCloudforceOneSDK.test()
```


### Instance Methods

#### `Attacker(data=None)`

Create a new `AttackerEntity` instance. Pass `None` for no initial data.

#### `BinDb(data=None)`

Create a new `BinDbEntity` instance. Pass `None` for no initial data.

#### `BrandProtection(data=None)`

Create a new `BrandProtectionEntity` instance. Pass `None` for no initial data.

#### `Category(data=None)`

Create a new `CategoryEntity` instance. Pass `None` for no initial data.

#### `CloudforceOneAccountExemption(data=None)`

Create a new `CloudforceOneAccountExemptionEntity` instance. Pass `None` for no initial data.

#### `CloudforceOneDeleteAll(data=None)`

Create a new `CloudforceOneDeleteAllEntity` instance. Pass `None` for no initial data.

#### `CloudforceOneEditApproval(data=None)`

Create a new `CloudforceOneEditApprovalEntity` instance. Pass `None` for no initial data.

#### `CloudforceOneEmailRuleValidation(data=None)`

Create a new `CloudforceOneEmailRuleValidationEntity` instance. Pass `None` for no initial data.

#### `CloudforceOneEmailRulesList(data=None)`

Create a new `CloudforceOneEmailRulesListEntity` instance. Pass `None` for no initial data.

#### `CloudforceOneRequestsApiResponseCommon(data=None)`

Create a new `CloudforceOneRequestsApiResponseCommonEntity` instance. Pass `None` for no initial data.

#### `CloudforceOneRule(data=None)`

Create a new `CloudforceOneRuleEntity` instance. Pass `None` for no initial data.

#### `CloudforceOneRuleApprovalDetail(data=None)`

Create a new `CloudforceOneRuleApprovalDetailEntity` instance. Pass `None` for no initial data.

#### `CloudforceOneRuleApprovalsList(data=None)`

Create a new `CloudforceOneRuleApprovalsListEntity` instance. Pass `None` for no initial data.

#### `CloudforceOneRulePreview(data=None)`

Create a new `CloudforceOneRulePreviewEntity` instance. Pass `None` for no initial data.

#### `CloudforceOneRulesPreviewList(data=None)`

Create a new `CloudforceOneRulesPreviewListEntity` instance. Pass `None` for no initial data.

#### `CloudforceOneRulesSearch(data=None)`

Create a new `CloudforceOneRulesSearchEntity` instance. Pass `None` for no initial data.

#### `CloudforceOneStat(data=None)`

Create a new `CloudforceOneStatEntity` instance. Pass `None` for no initial data.

#### `CloudforceOneSuccess(data=None)`

Create a new `CloudforceOneSuccessEntity` instance. Pass `None` for no initial data.

#### `CloudforceOneTreeNode(data=None)`

Create a new `CloudforceOneTreeNodeEntity` instance. Pass `None` for no initial data.

#### `CloudforceOneValidation(data=None)`

Create a new `CloudforceOneValidationEntity` instance. Pass `None` for no initial data.

#### `Collection(data=None)`

Create a new `CollectionEntity` instance. Pass `None` for no initial data.

#### `CollectionsItem(data=None)`

Create a new `CollectionsItemEntity` instance. Pass `None` for no initial data.

#### `Country(data=None)`

Create a new `CountryEntity` instance. Pass `None` for no initial data.

#### `DashboardAsset(data=None)`

Create a new `DashboardAssetEntity` instance. Pass `None` for no initial data.

#### `DashboardUser(data=None)`

Create a new `DashboardUserEntity` instance. Pass `None` for no initial data.

#### `Dataset(data=None)`

Create a new `DatasetEntity` instance. Pass `None` for no initial data.

#### `Event(data=None)`

Create a new `EventEntity` instance. Pass `None` for no initial data.

#### `Group(data=None)`

Create a new `GroupEntity` instance. Pass `None` for no initial data.

#### `Indicator(data=None)`

Create a new `IndicatorEntity` instance. Pass `None` for no initial data.

#### `IndicatorType(data=None)`

Create a new `IndicatorTypeEntity` instance. Pass `None` for no initial data.

#### `Permission(data=None)`

Create a new `PermissionEntity` instance. Pass `None` for no initial data.

#### `Priority(data=None)`

Create a new `PriorityEntity` instance. Pass `None` for no initial data.

#### `PriorityIntelligence(data=None)`

Create a new `PriorityIntelligenceEntity` instance. Pass `None` for no initial data.

#### `PriorityIntelligenceRequirement(data=None)`

Create a new `PriorityIntelligenceRequirementEntity` instance. Pass `None` for no initial data.

#### `PriorityIntelligenceRequirementsPir(data=None)`

Create a new `PriorityIntelligenceRequirementsPirEntity` instance. Pass `None` for no initial data.

#### `PublicCredentialMonitor(data=None)`

Create a new `PublicCredentialMonitorEntity` instance. Pass `None` for no initial data.

#### `Request(data=None)`

Create a new `RequestEntity` instance. Pass `None` for no initial data.

#### `RequestForInformationRfi(data=None)`

Create a new `RequestForInformationRfiEntity` instance. Pass `None` for no initial data.

#### `RequestsDashboard(data=None)`

Create a new `RequestsDashboardEntity` instance. Pass `None` for no initial data.

#### `Rfi(data=None)`

Create a new `RfiEntity` instance. Pass `None` for no initial data.

#### `RfiMessage(data=None)`

Create a new `RfiMessageEntity` instance. Pass `None` for no initial data.

#### `Rule(data=None)`

Create a new `RuleEntity` instance. Pass `None` for no initial data.

#### `Scan(data=None)`

Create a new `ScanEntity` instance. Pass `None` for no initial data.

#### `Tag(data=None)`

Create a new `TagEntity` instance. Pass `None` for no initial data.

#### `TagCategory(data=None)`

Create a new `TagCategoryEntity` instance. Pass `None` for no initial data.

#### `TargetIndustry(data=None)`

Create a new `TargetIndustryEntity` instance. Pass `None` for no initial data.

#### `ThreatSignal(data=None)`

Create a new `ThreatSignalEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## AttackerEntity

```python
attacker = client.Attacker()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `str` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Attacker().load({"account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AttackerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BinDbEntity

```python
bin_db = client.BinDb()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_type` | `str` | Yes |  |
| `md5` | `str` | Yes |  |
| `sha1` | `str` | Yes |  |
| `sha256` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BinDb().create({
    "account_id": "example_account_id",  # str
    "content_type": "example_content_type",  # str
    "md5": "example_md5",  # str
    "sha1": "example_sha1",  # str
    "sha256": "example_sha256",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.BinDb().load({"account_id": "account_id", "hash": "hash"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BinDbEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BrandProtectionEntity

```python
brand_protection = client.BrandProtection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `str` | Yes |  |
| `body` | `str` | Yes |  |
| `brand` | `str` | Yes |  |
| `category` | `str` | Yes |  |
| `content_type` | `str` | No | MIME type of the image (only present when download=true) |
| `createNotice` | `bool` | No |  |
| `createdAt` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `dismissed` | `bool` | Yes | Whether the match is dismissed. |
| `domain` | `str` | Yes |  |
| `domain_id` | `int` | Yes |  |
| `domains` | `list` | Yes |  |
| `errors` | `list` | Yes |  |
| `fields` | `dict` | Yes |  |
| `first_seen` | `str` | Yes |  |
| `format` | `str` | No |  |
| `id` | `float` | Yes |  |
| `image_data` | `str` | Yes | Base64 encoded image data. |
| `letterText` | `str` | Yes |  |
| `letterType` | `str` | Yes |  |
| `matchId` | `float` | Yes |  |
| `matchType` | `str` | Yes |  |
| `match_details` | `list` | No | Per-match detail objects with query metadata and individual dismissed state. |
| `match_ids` | `list` | No |  |
| `matched_at` | `str` | Yes |  |
| `matches` | `list` | Yes |  |
| `max_time` | `str` | No |  |
| `message` | `str` | Yes |  |
| `messages` | `list` | Yes |  |
| `min_time` | `str` | No |  |
| `name` | `str` | Yes |  |
| `noticeParams` | `dict` | Yes |  |
| `notices` | `list` | Yes |  |
| `public_scans` | `dict` | Yes |  |
| `queryId` | `float` | Yes |  |
| `queryIds` | `list` | No |  |
| `query_id` | `int` | Yes |  |
| `r2_path` | `str` | Yes |  |
| `registrar` | `str` | Yes |  |
| `result` | `Any` | Yes |  |
| `result_info` | `dict` | Yes | Present on paginated list responses when page or per_page is supplied. |
| `scan` | `bool` | No |  |
| `scan_matches` | `bool` | No |  |
| `scan_status` | `str` | Yes |  |
| `scan_submission_id` | `int` | Yes |  |
| `score_threshold` | `float` | No | Minimum similarity score threshold for matches (0-1, default: 0) |
| `search_lookback` | `bool` | No | If true, search recent domain lookback entries for matches |
| `similarity_score` | `float` | Yes |  |
| `similarity_threshold` | `float` | Yes | Minimum similarity score (0-1) required for visual matches |
| `source` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `string_matches` | `list` | Yes |  |
| `success` | `bool` | Yes |  |
| `tag` | `str` | Yes | Unique identifier for the logo query |
| `takedownNoticeId` | `float` | Yes |  |
| `templateId` | `str` | Yes |  |
| `top_k` | `int` | No | Number of closest matches to return (1-100, default: 10) |
| `total_analyzed` | `float` | Yes |  |
| `total_matches` | `float` | Yes |  |
| `truncated` | `bool` | Yes |  |
| `updatedAt` | `str` | Yes |  |
| `uploaded_at` | `str` | Yes |  |
| `url_scan_id` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BrandProtection().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.BrandProtection().list({"account_id": "example"})
for brand_protection in results:
    print(brand_protection)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.BrandProtection().load({"account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.BrandProtection().remove({"account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.BrandProtection().update({
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BrandProtectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CategoryEntity

```python
category = client.Category()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `killChain` | `float` | Yes |  |
| `mitreAttack` | `list` | No |  |
| `mitreCapec` | `list` | No |  |
| `name` | `str` | Yes |  |
| `shortname` | `str` | No |  |
| `uuid` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Category().create({
    "account_id": "example_account_id",  # str
    "killChain": 1,  # float
    "name": "example_name",  # str
    "uuid": "example_uuid",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Category().list({"account_id": "example"})
for category in results:
    print(category)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Category().load({"id": "category_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Category().remove({"id": "category_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Category().update({
    "id": "category_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CategoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CloudforceOneAccountExemptionEntity

```python
cloudforce_one_account_exemption = client.CloudforceOneAccountExemption()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `namespace` | `list` | Yes |  |
| `tag_match` | `list` | Yes |  |
| `worker_name` | `list` | Yes |  |

### Field Usage by Operation

| Field | list | create | update | remove |
| --- | --- | --- | --- | --- |
| `namespace` | - | Yes | Yes | - |
| `tag_match` | - | Yes | Yes | - |
| `worker_name` | - | Yes | Yes | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CloudforceOneAccountExemption().create({
    "account_id": "example_account_id",  # str
    "namespace": [],  # list
    "tag_match": [],  # list
    "worker_name": [],  # list
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CloudforceOneAccountExemption().list({"account_id": "example"})
for cloudforce_one_account_exemption in results:
    print(cloudforce_one_account_exemption)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.CloudforceOneAccountExemption().remove({"account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CloudforceOneAccountExemption().update({
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneAccountExemptionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CloudforceOneDeleteAllEntity

```python
cloudforce_one_delete_all = client.CloudforceOneDeleteAll()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.CloudforceOneDeleteAll().remove({"account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneDeleteAllEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CloudforceOneEditApprovalEntity

```python
cloudforce_one_edit_approval = client.CloudforceOneEditApproval()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `condition` | `dict` | Yes | Nested condition groups support up to 10 levels of depth. |
| `description` | `str` | No |  |
| `enabled` | `bool` | No |  |
| `id` | `str` | No |  |
| `meta` | `list` | No |  |
| `name` | `str` | Yes |  |
| `status` | `str` | No | Disposition for matching email. |
| `strings` | `list` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CloudforceOneEditApproval().create({
    "account_id": "example_account_id",  # str
    "approval_id": "example_approval_id",  # str
    "condition": {},  # dict
    "name": "example_name",  # str
})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CloudforceOneEditApproval().update({
    "account_id": "account_id",
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneEditApprovalEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CloudforceOneEmailRuleValidationEntity

```python
cloudforce_one_email_rule_validation = client.CloudforceOneEmailRuleValidation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `compiled_yara` | `str` | No |  |
| `condition` | `dict` | Yes | Nested condition groups support up to 10 levels of depth. |
| `description` | `str` | No |  |
| `enabled` | `bool` | No |  |
| `error` | `str` | No |  |
| `existing_rule_id` | `str` | No | Existing rule ID to exclude from duplicate-name checks when validating an update. |
| `meta` | `list` | No |  |
| `name` | `str` | Yes |  |
| `status` | `str` | No | Disposition for matching email. |
| `strings` | `list` | No |  |
| `valid` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CloudforceOneEmailRuleValidation().create({
    "account_id": "example_account_id",  # str
    "condition": {},  # dict
    "name": "example_name",  # str
    "valid": True,  # bool
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneEmailRuleValidationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CloudforceOneEmailRulesListEntity

```python
cloudforce_one_email_rules_list = client.CloudforceOneEmailRulesList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `str` | No |  |
| `created_at` | `float` | Yes |  |
| `created_by` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `enabled` | `bool` | Yes | Whether this rule is active for dice consumers. |
| `id` | `str` | Yes |  |
| `is_public` | `bool` | Yes | Whether this rule is visible to other internal accounts. |
| `meta` | `list` | No | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `str` | Yes |  |
| `namespaces` | `list` | Yes |  |
| `path` | `str` | Yes |  |
| `pending_approval_id` | `float` | Yes | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `dict` | Yes | Proposed update or deletion awaiting approval. |
| `structured_source` | `str` | No | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `float` | Yes |  |
| `updated_by` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CloudforceOneEmailRulesList().list({"account_id": "example"})
for cloudforce_one_email_rules_list in results:
    print(cloudforce_one_email_rules_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneEmailRulesListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CloudforceOneRequestsApiResponseCommonEntity

```python
cloudforce_one_requests_api_response_common = client.CloudforceOneRequestsApiResponseCommon()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.CloudforceOneRequestsApiResponseCommon().remove({"account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneRequestsApiResponseCommonEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CloudforceOneRuleEntity

```python
cloudforce_one_rule = client.CloudforceOneRule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `list` | No |  |
| `commit_message` | `str` | No | Human-readable justification for this change. |
| `content` | `str` | Yes |  |
| `description` | `str` | No | Human-readable description of the rule. |
| `enabled` | `bool` | No | Whether this rule is active for dice consumers. |
| `is_public` | `bool` | No | Whether this rule is visible to other internal accounts. |
| `meta` | `list` | No | Adds YARA meta entries to the rule's meta block and stores them in rule_meta alongside content metadata. |
| `name` | `str` | Yes |  |
| `namespaces` | `list` | No | Optional WfP deployment tags (customer rules only). |
| `path` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CloudforceOneRule().create({
    "account_id": "example_account_id",  # str
    "content": "example_content",  # str
    "name": "example_name",  # str
    "path": "example_path",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneRuleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CloudforceOneRuleApprovalDetailEntity

```python
cloudforce_one_rule_approval_detail = client.CloudforceOneRuleApprovalDetail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `audit_log_id` | `float` | Yes |  |
| `can_review` | `bool` | Yes | Whether the authenticated user may approve or reject this pending change. |
| `cancelled_at` | `float` | Yes | Time at which the requester cancelled the approval. |
| `cancelled_by` | `str` | Yes | Requester who cancelled the pending approval. |
| `change_description` | `str` | Yes |  |
| `change_type` | `str` | Yes |  |
| `commit_message` | `str` | Yes | The requester supplies this human-readable justification with the change. |
| `compiler_warnings` | `list` | No |  |
| `current_rule` | `Any` | Yes |  |
| `id` | `float` | Yes |  |
| `proposed_changes` | `Any` | Yes | Contains structured proposed rule changes, or null for unresolved persisted data. |
| `rejection_reason` | `str` | Yes | The reviewer may supply a reason when rejecting the change. |
| `requested_at` | `float` | Yes |  |
| `requested_by` | `str` | Yes |  |
| `reviewed_at` | `float` | Yes |  |
| `reviewer_scope` | `str` | Yes | Review policy: general Nomos approvers for default; general approvers or Phishguard for email. |
| `revision_number` | `int` | Yes | Revision number within this approval request chain. |
| `rule_id` | `str` | Yes |  |
| `rule_name` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `superseded_by_approval_id` | `float` | Yes | Newer approval revision that replaced this approval. |
| `supersedes_approval_id` | `float` | Yes | This approval replaces the referenced approval revision. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CloudforceOneRuleApprovalDetail().create({
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CloudforceOneRuleApprovalDetail().load({"id": "cloudforce_one_rule_approval_detail_id", "account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneRuleApprovalDetailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CloudforceOneRuleApprovalsListEntity

```python
cloudforce_one_rule_approvals_list = client.CloudforceOneRuleApprovalsList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `audit_log_id` | `float` | Yes |  |
| `can_review` | `bool` | Yes | Whether the authenticated user may approve or reject this pending change. |
| `cancelled_at` | `float` | Yes | Time at which the requester cancelled the approval. |
| `cancelled_by` | `str` | Yes | Requester who cancelled the pending approval. |
| `change_description` | `str` | Yes |  |
| `change_type` | `str` | Yes |  |
| `commit_message` | `str` | Yes | The requester supplies this human-readable justification with the change. |
| `id` | `float` | Yes |  |
| `proposed_changes` | `Any` | Yes | Contains structured proposed rule changes, or null for unresolved persisted data. |
| `rejection_reason` | `str` | Yes | The reviewer may supply a reason when rejecting the change. |
| `requested_at` | `float` | Yes |  |
| `requested_by` | `str` | Yes |  |
| `reviewed_at` | `float` | Yes |  |
| `reviewer_scope` | `str` | Yes | Review policy: general Nomos approvers for default; general approvers or Phishguard for email. |
| `revision_number` | `int` | Yes | Revision number within this approval request chain. |
| `rule_id` | `str` | Yes |  |
| `rule_name` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `superseded_by_approval_id` | `float` | Yes | Newer approval revision that replaced this approval. |
| `supersedes_approval_id` | `float` | Yes | This approval replaces the referenced approval revision. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CloudforceOneRuleApprovalsList().list({"account_id": "example"})
for cloudforce_one_rule_approvals_list in results:
    print(cloudforce_one_rule_approvals_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneRuleApprovalsListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CloudforceOneRulePreviewEntity

```python
cloudforce_one_rule_preview = client.CloudforceOneRulePreview()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit_message` | `str` | No | Human-readable justification for this change. |
| `condition` | `dict` | Yes | Nested condition groups support up to 10 levels of depth. |
| `content` | `str` | No |  |
| `created_at` | `float` | Yes |  |
| `created_by` | `str` | Yes |  |
| `description` | `str` | Yes | Human-readable description of the rule. |
| `enabled` | `bool` | Yes | Whether this rule is active for dice consumers. |
| `id` | `str` | Yes |  |
| `is_public` | `bool` | Yes | Whether this rule is visible to other internal accounts. |
| `meta` | `list` | No | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `str` | Yes |  |
| `namespaces` | `list` | Yes |  |
| `path` | `str` | Yes | Path change goes through approval workflow. |
| `pending_approval_id` | `float` | Yes | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `dict` | Yes | Proposed update or deletion awaiting approval. |
| `status` | `str` | No | Disposition for matching email. |
| `strings` | `list` | No |  |
| `structured_source` | `str` | No | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `float` | Yes |  |
| `updated_by` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CloudforceOneRulePreview().create({
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CloudforceOneRulePreview().load({"id": "cloudforce_one_rule_preview_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CloudforceOneRulePreview().update({
    "id": "cloudforce_one_rule_preview_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneRulePreviewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CloudforceOneRulesPreviewListEntity

```python
cloudforce_one_rules_preview_list = client.CloudforceOneRulesPreviewList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `str` | No |  |
| `created_at` | `float` | Yes |  |
| `created_by` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `enabled` | `bool` | Yes | Whether this rule is active for dice consumers. |
| `id` | `str` | Yes |  |
| `is_public` | `bool` | Yes | Whether this rule is visible to other internal accounts. |
| `meta` | `list` | No | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `str` | Yes |  |
| `namespaces` | `list` | Yes |  |
| `path` | `str` | Yes |  |
| `pending_approval_id` | `float` | Yes | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `dict` | Yes | Proposed update or deletion awaiting approval. |
| `structured_source` | `str` | No | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `float` | Yes |  |
| `updated_by` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CloudforceOneRulesPreviewList().list({"account_id": "example"})
for cloudforce_one_rules_preview_list in results:
    print(cloudforce_one_rules_preview_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneRulesPreviewListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CloudforceOneRulesSearchEntity

```python
cloudforce_one_rules_search = client.CloudforceOneRulesSearch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `str` | No |  |
| `created_at` | `float` | Yes |  |
| `created_by` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `enabled` | `bool` | Yes | Whether this rule is active for dice consumers. |
| `id` | `str` | Yes |  |
| `is_public` | `bool` | Yes | Whether this rule is visible to other internal accounts. |
| `meta` | `list` | No | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `str` | Yes |  |
| `namespaces` | `list` | Yes |  |
| `path` | `str` | Yes |  |
| `pending_approval_id` | `float` | Yes | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `dict` | Yes | Proposed update or deletion awaiting approval. |
| `score` | `float` | No | Relevance score in [0,1]. |
| `scoring_details` | `dict` | No | AI Search hybrid retrieval returns this per-component scoring breakdown. |
| `structured_source` | `str` | No | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `float` | Yes |  |
| `updated_by` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CloudforceOneRulesSearch().list({"account_id": "example", "query": "example"})
for cloudforce_one_rules_search in results:
    print(cloudforce_one_rules_search)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneRulesSearchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CloudforceOneStatEntity

```python
cloudforce_one_stat = client.CloudforceOneStat()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CloudforceOneStat().load({"account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneStatEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CloudforceOneSuccessEntity

```python
cloudforce_one_success = client.CloudforceOneSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CloudforceOneSuccess().create({
    "account_id": "example_account_id",  # str
    "approval_id": "example_approval_id",  # str
    "success": True,  # bool
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.CloudforceOneSuccess().remove({"account_id": "account_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CloudforceOneTreeNodeEntity

```python
cloudforce_one_tree_node = client.CloudforceOneTreeNode()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `children` | `list` | Yes |  |
| `count` | `float` | Yes |  |
| `name` | `str` | Yes |  |
| `path` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CloudforceOneTreeNode().list({"account_id": "example"})
for cloudforce_one_tree_node in results:
    print(cloudforce_one_tree_node)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneTreeNodeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CloudforceOneValidationEntity

```python
cloudforce_one_validation = client.CloudforceOneValidation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `str` | Yes |  |
| `error` | `str` | No |  |
| `excludeRuleId` | `str` | No |  |
| `name` | `str` | Yes |  |
| `namespaces` | `list` | No |  |
| `path` | `str` | No |  |
| `valid` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CloudforceOneValidation().create({
    "account_id": "example_account_id",  # str
    "content": "example_content",  # str
    "name": "example_name",  # str
    "valid": True,  # bool
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudforceOneValidationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CollectionEntity

```python
collection = client.Collection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `columns` | `list` | Yes |  |
| `created_at` | `str` | Yes |  |
| `created_by` | `str` | Yes |  |
| `data` | `dict` | Yes |  |
| `id` | `str` | Yes |  |
| `item_count` | `float` | Yes |  |
| `metadata` | `dict` | No |  |
| `name` | `str` | Yes | New column name (must be unique) |
| `position` | `float` | Yes | Column display order |
| `required` | `bool` | Yes | Whether column is required |
| `status` | `str` | Yes |  |
| `type` | `str` | Yes | Column type: text, number, boolean, or date |
| `updated_at` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Collection().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Collection().list({"account_id": "example"})
for collection in results:
    print(collection)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Collection().load({"id": "collection_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Collection().remove({"id": "collection_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Collection().update({
    "id": "collection_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CollectionsItemEntity

```python
collections_item = client.CollectionsItem()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CollectionsItem().create({
    "account_id": "example_account_id",  # str
    "collection_id": "example_collection_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CollectionsItemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CountryEntity

```python
country = client.Country()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | Yes |  |
| `success` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Country().list({"account_id": "example"})
for country in results:
    print(country)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CountryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DashboardAssetEntity

```python
dashboard_asset = client.DashboardAsset()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assets` | `dict` | Yes |  |
| `contentType` | `dict` | Yes |  |
| `count` | `dict` | Yes |  |
| `downloadable` | `dict` | Yes |  |
| `expiresAt` | `dict` | Yes |  |
| `fileName` | `dict` | Yes |  |
| `fileSize` | `dict` | Yes |  |
| `id` | `dict` | Yes |  |
| `is_cloudflare_team` | `dict` | Yes |  |
| `metadata` | `dict` | Yes |  |
| `origin` | `dict` | Yes |  |
| `state` | `dict` | Yes |  |
| `tlp` | `dict` | Yes |  |
| `uploadedAt` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DashboardAsset().create({
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DashboardAsset().load({"account_id": "account_id", "project_type": "project_type", "request_id": "request_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DashboardAssetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DashboardUserEntity

```python
dashboard_user = client.DashboardUser()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `str` | No | User display name |
| `id` | `str` | Yes | Unique user ID |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DashboardUser().load({"account_id": "account_id", "request_id": "request_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DashboardUserEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DatasetEntity

```python
dataset = client.Dataset()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deletedAt` | `str` | No |  |
| `id` | `str` | No |  |
| `indicatorWriteMode` | `str` | Yes | Effective indicator mutation capability after account/dataset authorization and dataset storage capability are applied. |
| `isAnalytics` | `bool` | Yes |  |
| `isPublic` | `bool` | Yes | If true, then anyone can search the dataset. |
| `name` | `str` | Yes | Used to describe the dataset within the account context. |
| `uuid` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Dataset().create({
    "account_id": "example_account_id",  # str
    "id": "example_id",  # str
    "indicatorWriteMode": "example_indicatorWriteMode",  # str
    "isAnalytics": True,  # bool
    "isPublic": True,  # bool
    "name": "example_name",  # str
    "uuid": "example_uuid",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Dataset().list({"account_id": "example"})
for dataset in results:
    print(dataset)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Dataset().load({"id": "dataset_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Dataset().remove({"id": "dataset_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Dataset().update({
    "id": "dataset_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DatasetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EventEntity

```python
event = client.Event()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountId` | `float` | Yes |  |
| `account_id` | `int` | Yes | Account ID |
| `alert_enabled` | `bool` | Yes | Whether alerts are enabled |
| `alert_rollup_enabled` | `bool` | Yes | Whether alert rollup is enabled |
| `attacker` | `str` | Yes |  |
| `attackerCountry` | `str` | Yes |  |
| `attackerCountryAlpha3` | `str` | Yes |  |
| `category` | `str` | Yes |  |
| `childIds` | `list` | No | Array of child event UUIDs that were processed |
| `created` | `str` | Yes |  |
| `createdAt` | `str` | No |  |
| `createdEventsCount` | `float` | Yes | Number of events created |
| `createdIndicatorsCount` | `float` | Yes | Number of indicators created |
| `createdRelationshipsCount` | `float` | Yes | Number of relationships created |
| `created_at` | `str` | Yes | Creation timestamp |
| `cursor` | `str` | No | Cursor for pagination. |
| `custom_threat_feed_id` | `int` | No | Intel Indicator Feed ID (numeric) |
| `data` | `str` | Yes |  |
| `datasetId` | `str` | Yes | Dataset UUIDs to query, or one standalone scope value: 'all'/'*' for the legacy all-datasets behavior, 'analytics' for isAnalytics=true datasets, or 'operational' for isAnalytics=false datasets. |
| `date` | `str` | Yes |  |
| `errorCount` | `float` | Yes | Number of errors encountered |
| `errors` | `list` | No | Array of error details |
| `event` | `str` | Yes |  |
| `eventIds` | `list` | Yes | List of event UUIDs to update (1-100) |
| `failedCount` | `float` | Yes |  |
| `failures` | `list` | No | List of events that failed to update with error messages |
| `hasChildren` | `bool` | Yes |  |
| `id` | `float` | Yes | Unique identifier for the saved query |
| `includeCreatedEvents` | `bool` | No | When true, response includes array of created event UUIDs and shard IDs. |
| `indicator` | `str` | Yes |  |
| `indicatorType` | `str` | Yes |  |
| `indicatorTypeId` | `float` | Yes |  |
| `insight` | `str` | No |  |
| `killChain` | `float` | Yes |  |
| `message` | `str` | Yes | Human-readable message describing the operation result |
| `mitreAttack` | `list` | Yes |  |
| `mitreCapec` | `list` | Yes |  |
| `name` | `str` | Yes | Name of the saved query |
| `numReferenced` | `float` | Yes |  |
| `numReferences` | `float` | Yes |  |
| `order` | `str` | No |  |
| `orderBy` | `str` | No |  |
| `page` | `float` | No |  |
| `pageSize` | `float` | No |  |
| `parentId` | `str` | Yes | UUID of the parent event that will be the source of the relationship |
| `query_json` | `str` | Yes | JSON string containing the query parameters |
| `raw` | `dict` | No |  |
| `rawId` | `str` | Yes |  |
| `referenced` | `list` | Yes |  |
| `referencedIds` | `list` | Yes |  |
| `references` | `list` | Yes |  |
| `referencesIds` | `list` | Yes |  |
| `relationshipType` | `str` | Yes | Type of relationship to create between parent and child events |
| `relationships` | `list` | Yes | Array of successfully created relationship objects |
| `relationshipsCreated` | `float` | No | Number of relationships that were successfully created |
| `releasabilityId` | `str` | No |  |
| `rule_enabled` | `bool` | Yes | Whether rule is enabled |
| `rule_list_id` | `str` | No | WAF rules list ID for blocking |
| `rule_scope` | `str` | No | Scope for the rule |
| `search` | `list` | No | Structured search as a JSON array of {field, op, value} objects. |
| `source` | `str` | Yes |  |
| `success` | `bool` | Yes | Whether the relationship creation operation completed successfully |
| `tags` | `list` | Yes |  |
| `targetCountry` | `str` | Yes |  |
| `targetCountryAlpha3` | `str` | Yes |  |
| `targetIndustry` | `str` | Yes |  |
| `tlp` | `str` | Yes |  |
| `updatedCount` | `float` | Yes |  |
| `updated_at` | `str` | Yes | Last update timestamp |
| `updates` | `dict` | Yes | Fields to update on all specified events. |
| `user_email` | `str` | Yes | Email of the user who created the query |
| `uuid` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Event().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Event().list({"account_id": "example"})
for event in results:
    print(event)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Event().load({"id": "event_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Event().remove({"account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Event().update({
    "id": "event_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EventEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GroupEntity

```python
group = client.Group()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `id` | `str` | No |  |
| `members` | `list` | Yes |  |
| `name` | `str` | Yes |  |
| `updatedAt` | `str` | Yes |  |
| `uuid` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Group().create({
    "account_id": "example_account_id",  # str
    "createdAt": "example_createdAt",  # str
    "description": "example_description",  # str
    "members": [],  # list
    "name": "example_name",  # str
    "updatedAt": "example_updatedAt",  # str
    "uuid": "example_uuid",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Group().list({"account_id": "example"})
for group in results:
    print(group)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Group().load({"id": "group_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Group().remove({"id": "group_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Group().update({
    "id": "group_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IndicatorEntity

```python
indicator = client.Indicator()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completeness` | `dict` | Yes |  |
| `confidence` | `int` | No | Updated confidence. |
| `createdAt` | `str` | Yes |  |
| `datasetId` | `str` | No | The dataset ID this indicator belongs to. |
| `description` | `str` | No | Optional description for the indicator type |
| `durableObjectId` | `str` | Yes |  |
| `id` | `str` | No |  |
| `indicatorType` | `str` | Yes | The indicator type to create (e.g., 'DOMAIN', 'IP', 'URL', 'HASH', 'EMAIL') |
| `indicators` | `dict` | Yes |  |
| `message` | `str` | Yes |  |
| `metadata` | `dict` | No | Updated metadata. |
| `pagination` | `dict` | Yes |  |
| `relatedEvents` | `list` | No |  |
| `sources` | `list` | Yes | RSS article sources from which this indicator was extracted. |
| `tags` | `list` | No |  |
| `tlp` | `str` | No | Traffic Light Protocol designation. |
| `type` | `str` | No | Updated relationship type. |
| `updatedAt` | `str` | Yes |  |
| `uuid` | `str` | Yes |  |
| `value` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Indicator().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Indicator().list({"account_id": "example", "dataset_id": "example"})
for indicator in results:
    print(indicator)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Indicator().load({"id": "indicator_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Indicator().remove({"id": "indicator_id", "account_id": "account_id", "dataset_id": "dataset_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Indicator().update({
    "id": "indicator_id",
    "account_id": "account_id",
    "dataset_id": "dataset_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IndicatorEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IndicatorTypeEntity

```python
indicator_type = client.IndicatorType()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `str` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.IndicatorType().load({"account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IndicatorTypeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PermissionEntity

```python
permission = client.Permission()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `str` | Yes |  |
| `id` | `str` | No |  |
| `message` | `str` | No |  |
| `resourceId` | `str` | No | The resource ID this permission applies to account_id or group_id |
| `resourceType` | `str` | Yes |  |
| `role` | `str` | Yes |  |
| `subjectId` | `str` | Yes |  |
| `subjectType` | `str` | Yes |  |
| `success` | `bool` | No |  |
| `updatedAt` | `str` | Yes |  |
| `uuid` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Permission().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Permission().list({"account_id": "example", "dataset_id": "example"})
for permission in results:
    print(permission)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Permission().remove({"account_id": "account_id", "dataset_id": "dataset_id", "id": "id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Permission().update({
    "account_id": "account_id",
    "dataset_id": "dataset_id",
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PermissionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PriorityEntity

```python
priority = client.Priority()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `labels` | `list` | Yes | List of labels. |
| `messages` | `list` | Yes |  |
| `page` | `int` | Yes | Page number of results. |
| `per_page` | `int` | Yes | Number of results per page. |
| `priority` | `int` | Yes | Priority. |
| `requirement` | `str` | Yes | Requirement. |
| `result` | `Any` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `tlp` | `str` | Yes | The CISA defined Traffic Light Protocol (TLP). |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Priority().create({
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Priority().load({"id": "priority_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Priority().update({
    "id": "priority_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PriorityEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PriorityIntelligenceEntity

```python
priority_intelligence = client.PriorityIntelligence()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `labels` | `list` | No |  |
| `priority` | `int` | No |  |
| `requirement` | `str` | Yes |  |
| `tlp` | `str` | No |  |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `id` | - | - | - | - |
| `labels` | - | - | - | - |
| `priority` | - | - | - | - |
| `requirement` | - | - | Yes | - |
| `tlp` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PriorityIntelligence().create({
    "account_id": "example_account_id",  # str
    "requirement": "example_requirement",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PriorityIntelligence().load({"id": "priority_intelligence_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.PriorityIntelligence().remove({"id": "priority_intelligence_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.PriorityIntelligence().update({
    "id": "priority_intelligence_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PriorityIntelligenceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PriorityIntelligenceRequirementEntity

```python
priority_intelligence_requirement = client.PriorityIntelligenceRequirement()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `as_of` | `str` | No |  |
| `backtest_days` | `int` | No |  |
| `candidate_limit` | `int` | No |  |
| `dataset_ids` | `list` | No |  |
| `dimension` | `str` | Yes |  |
| `emerging_min_current_count` | `int` | No |  |
| `enabled` | `bool` | No |  |
| `established_min_absolute_delta` | `int` | No |  |
| `established_min_prior_count` | `int` | No |  |
| `established_min_relative_delta` | `float` | No |  |
| `value` | `str` | Yes |  |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PriorityIntelligenceRequirement().create({
    "account_id": "example_account_id",  # str
    "dimension": "example_dimension",  # str
    "value": "example_value",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PriorityIntelligenceRequirement().load({"account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.PriorityIntelligenceRequirement().remove({"account_id": "account_id", "interest_id": "interest_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.PriorityIntelligenceRequirement().update({
    "account_id": "account_id",
    "interest_id": "interest_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PriorityIntelligenceRequirementEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PriorityIntelligenceRequirementsPirEntity

```python
priority_intelligence_requirements__pir = client.PriorityIntelligenceRequirementsPir()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `labels` | `list` | Yes | List of labels. |
| `messages` | `list` | Yes |  |
| `priority` | `int` | Yes | Priority. |
| `requirement` | `str` | Yes | Requirement. |
| `result` | `Any` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `tlp` | `str` | Yes | The CISA defined Traffic Light Protocol (TLP). |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PriorityIntelligenceRequirementsPir().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PriorityIntelligenceRequirementsPir().list({"account_id": "example"})
for priority_intelligence_requirements__pir in results:
    print(priority_intelligence_requirements__pir)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PriorityIntelligenceRequirementsPirEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PublicCredentialMonitorEntity

```python
public_credential_monitor = client.PublicCredentialMonitor()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `domain` | `str` | Yes | Domain to monitor (e.g. |
| `id` | `int` | Yes |  |
| `matched_at` | `str` | Yes |  |
| `username` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PublicCredentialMonitor().create({
    "account_id": "example_account_id",  # str
    "created_at": "example_created_at",  # str
    "domain": "example_domain",  # str
    "id": 1,  # int
    "matched_at": "example_matched_at",  # str
    "username": "example_username",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PublicCredentialMonitor().list({"account_id": "example"})
for public_credential_monitor in results:
    print(public_credential_monitor)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.PublicCredentialMonitor().remove({"account_id": "account_id", "id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PublicCredentialMonitorEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RequestEntity

```python
request = client.Request()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed_after` | `Any` | No | Retrieve requests completed after this time. |
| `completed_before` | `Any` | No | Retrieve requests completed before this time. |
| `content` | `str` | No | Request content. |
| `created_after` | `Any` | No | Retrieve requests created after this time. |
| `created_before` | `Any` | No | Retrieve requests created before this time. |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `messages` | `list` | Yes |  |
| `page` | `int` | Yes | Page number of results. |
| `per_page` | `int` | Yes | Number of results per page. |
| `priority` | `str` | No | Priority for analyzing the request. |
| `request_type` | `str` | No | Requested information from request. |
| `result` | `dict` | Yes |  |
| `sort_by` | `str` | No | Field to sort results by. |
| `sort_order` | `str` | No | Sort order (asc or desc). |
| `status` | `str` | No | Request Status. |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `summary` | `str` | No | Brief description of the request. |
| `tlp` | `str` | No | The CISA defined Traffic Light Protocol (TLP). |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Request().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "page": 1,  # int
    "per_page": 1,  # int
    "result": {},  # dict
    "success": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Request().load({"id": "request_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Request().update({
    "id": "request_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RequestEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RequestForInformationRfiEntity

```python
request_for_information__rfi = client.RequestForInformationRfi()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `str` | No | Content of message. |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `messages` | `list` | Yes |  |
| `priority` | `str` | No | Priority for analyzing the request. |
| `request_type` | `str` | No | Requested information from request. |
| `result` | `list` | No |  |
| `source` | `str` | No | Asset file to upload. |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `summary` | `str` | No | Brief description of the request. |
| `tlp` | `str` | No | The CISA defined Traffic Light Protocol (TLP). |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.RequestForInformationRfi().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "success": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.RequestForInformationRfi().list({"account_id": "example"})
for request_for_information__rfi in results:
    print(request_for_information__rfi)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RequestForInformationRfi().load({"account_id": "account_id", "asset_id": "asset_id", "request_id": "request_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.RequestForInformationRfi().update({
    "account_id": "account_id",
    "request_id": "request_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RequestForInformationRfiEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RequestsDashboardEntity

```python
requests_dashboard = client.RequestsDashboard()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `str` | Yes |  |
| `defaultValue` | `Any` | No |  |
| `description` | `str` | No |  |
| `displayOrder` | `float` | Yes |  |
| `errors` | `list` | Yes | Always empty on success |
| `fieldLabel` | `str` | Yes |  |
| `fieldName` | `str` | Yes |  |
| `fieldType` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `messages` | `list` | Yes | Always empty on success |
| `options` | `list` | No |  |
| `projectType` | `str` | Yes |  |
| `project_type` | `str` | Yes |  |
| `public` | `bool` | Yes |  |
| `request_types` | `list` | Yes |  |
| `required` | `bool` | Yes |  |
| `result` | `dict` | Yes |  |
| `sectionID` | `str` | No |  |
| `sectionLabel` | `str` | No |  |
| `success` | `dict` | Yes |  |
| `total` | `float` | Yes |  |
| `updated` | `str` | Yes |  |
| `validation` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.RequestsDashboard().list({"account_id": "example"})
for requests_dashboard in results:
    print(requests_dashboard)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RequestsDashboard().load({"account_id": "account_id", "project_type": "project_type"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RequestsDashboardEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RfiEntity

```python
rfi = client.Rfi()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `dict` | Yes |  |
| `assignee` | `str` | Yes | Assignee email |
| `completed` | `str` | Yes | Completion timestamp |
| `created` | `str` | Yes | Creation timestamp |
| `description` | `str` | No | RFI description (optional). |
| `eventId` | `str` | No | Optional related event ID |
| `id` | `str` | Yes | RFI UUID |
| `investigation_id` | `str` | Yes | Investigation UUID |
| `is_free_request` | `bool` | Yes | Whether this is a free request |
| `message_tokens` | `float` | Yes | Total message tokens |
| `metadata` | `dict` | No | Optional metadata fields specific to the RFI type |
| `pagination` | `dict` | Yes |  |
| `priority` | `str` | Yes | Request priority |
| `readable_id` | `str` | Yes | Human-readable ID |
| `release_entitlements` | `str` | Yes | Release entitlements |
| `report_id` | `str` | Yes | Report UUID |
| `request` | `dict` | Yes |  |
| `request_type` | `str` | No | Optional request type for the request |
| `result` | `list` | Yes |  |
| `status` | `str` | Yes | RFI status. |
| `subtypeId` | `str` | No | Optional subtype ID |
| `success` | `str` | Yes |  |
| `summary` | `str` | Yes | RFI summary |
| `title` | `str` | No | RFI title (optional). |
| `tlp` | `str` | Yes | TLP classification |
| `tokens` | `float` | Yes | Total tokens used |
| `updated` | `str` | Yes | Last update timestamp |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Rfi().create({
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Rfi().load({"id": "rfi_id", "project_type": "project_type"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Rfi().update({
    "id": "rfi_id",
    "account_id": "account_id",
    "project_type": "project_type",
    "request_id": "request_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RfiEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RfiMessageEntity

```python
rfi_message = client.RfiMessage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachment_asset_ids` | `list` | No |  |
| `attachments` | `list` | Yes |  |
| `author_id` | `str` | No |  |
| `author_name` | `str` | No |  |
| `content` | `str` | Yes |  |
| `created` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `is_cloudflare_team` | `bool` | Yes |  |
| `is_published` | `bool` | Yes |  |
| `publish` | `bool` | No |  |
| `published` | `str` | Yes |  |
| `tlp` | `str` | Yes |  |
| `updated` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.RfiMessage().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.RfiMessage().list({"account_id": "example", "project_type": "example", "request_id": "example"})
for rfi_message in results:
    print(rfi_message)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RfiMessage().load({"id": "rfi_message_id", "account_id": "account_id", "project_type": "project_type", "request_id": "request_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.RfiMessage().update({
    "id": "rfi_message_id",
    "account_id": "account_id",
    "project_type": "project_type",
    "request_id": "request_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RfiMessageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RuleEntity

```python
rule = client.Rule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `arrays` | `list` | Yes |  |
| `headers` | `dict` | Yes |  |
| `operators` | `dict` | Yes |  |
| `scalars` | `list` | Yes |  |
| `string_arrays` | `list` | Yes |  |
| `structs` | `list` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Rule().list({"account_id": "example"})
for rule in results:
    print(rule)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RuleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ScanEntity

```python
scan = client.Scan()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `frequency` | `float` | No | Defines the number of days between each scan (0 = One-off scan). |
| `ips` | `list` | No | Defines a list of IP addresses or CIDR blocks to scan. |
| `messages` | `list` | Yes |  |
| `ports` | `list` | No | Defines a list of ports to scan. |
| `result` | `dict` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Scan().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "success": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Scan().list({"account_id": "example"})
for scan in results:
    print(scan)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Scan().load({"account_id": "account_id", "config_id": "config_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Scan().remove({"account_id": "account_id", "config_id": "config_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Scan().update({
    "account_id": "account_id",
    "config_id": "config_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScanEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TagEntity

```python
tag = client.Tag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeDuration` | `str` | No |  |
| `activeDuration_annotated` | `dict` | Yes |  |
| `actorCategory` | `str` | No |  |
| `actorCategory_annotated` | `dict` | Yes |  |
| `aliasGroupNames` | `list` | No |  |
| `aliasGroupNamesInternal` | `list` | No |  |
| `aliases` | `list` | No | Structured aliases ({ value, confidence 1-10, tlp }). |
| `attributionOrganization` | `str` | No |  |
| `attributionOrganization_annotated` | `dict` | Yes |  |
| `categoryName` | `str` | No |  |
| `categoryUuid` | `str` | No | Tag type (category) UUID. |
| `confidence` | `int` | No | Overall tag confidence (1-10). |
| `createdAt` | `str` | No |  |
| `dateOfDiscovery` | `str` | No | Date of discovery (ISO YYYY-MM-DD). |
| `description` | `str` | No |  |
| `externalReferenceLinks` | `list` | No |  |
| `externalReferences` | `list` | No | Structured external references ({ url, description }). |
| `externalReferences_annotated` | `list` | No |  |
| `id` | `str` | No |  |
| `internalAliases` | `list` | No | Internal structured aliases ({ value, confidence 1-10, tlp }). |
| `internalDescription` | `str` | No |  |
| `lastSeen` | `str` | No |  |
| `metadata` | `dict` | No | Updated metadata. |
| `motive` | `str` | No |  |
| `motive_annotated` | `dict` | Yes |  |
| `opsecLevel` | `str` | No |  |
| `opsecLevel_annotated` | `dict` | Yes |  |
| `originCountryISO` | `str` | No | ISO country code (alpha-2 or alpha-3). |
| `originCountryISO_annotated` | `dict` | Yes |  |
| `priority` | `float` | No |  |
| `priority_annotated` | `dict` | Yes |  |
| `properties` | `dict` | No | Parsed custom field values. |
| `sophisticationLevel` | `str` | No |  |
| `sophisticationLevel_annotated` | `dict` | Yes |  |
| `tlp` | `str` | No | Tag-level TLP handling marking. |
| `type` | `str` | No | Updated relationship type. |
| `updatedAt` | `str` | No |  |
| `uuid` | `str` | Yes |  |
| `value` | `str` | Yes |  |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Tag().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Tag().list({"account_id": "example"})
for tag in results:
    print(tag)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Tag().load({"id": "tag_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Tag().remove({"id": "tag_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Tag().update({
    "id": "tag_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TagEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TagCategoryEntity

```python
tag_category = client.TagCategory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `str` | No |  |
| `description` | `str` | No |  |
| `id` | `str` | No |  |
| `name` | `str` | Yes |  |
| `schema` | `list` | No | Parsed FieldDefinition[] defining custom fields for this category, or null if none. |
| `updatedAt` | `str` | No |  |
| `uuid` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TagCategory().create({
    "account_id": "example_account_id",  # str
    "name": "example_name",  # str
    "uuid": "example_uuid",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TagCategory().list({"account_id": "example"})
for tag_category in results:
    print(tag_category)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TagCategory().load({"id": "tag_category_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TagCategory().remove({"id": "tag_category_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TagCategory().update({
    "id": "tag_category_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TagCategoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TargetIndustryEntity

```python
target_industry = client.TargetIndustry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `str` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TargetIndustry().load({"account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TargetIndustryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ThreatSignalEntity

```python
threat_signal = client.ThreatSignal()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category_id` | `str` | No | One of the predefined Threat Signals feed categories; see GET /:account_id/v2/threat-signals/categories. |
| `category_uuids` | `list` | Yes |  |
| `config` | `str` | No |  |
| `display_name` | `str` | No |  |
| `display_order` | `int` | No |  |
| `enabled` | `bool` | No |  |
| `errors` | `list` | Yes |  |
| `feeds` | `list` | Yes |  |
| `is_active` | `bool` | No |  |
| `message` | `str` | Yes |  |
| `messages` | `list` | Yes |  |
| `name` | `str` | No |  |
| `opted_out` | `bool` | Yes |  |
| `output_schema` | `str` | No |  |
| `poll_interval_s` | `int` | No |  |
| `prompt` | `str` | No |  |
| `read` | `bool` | Yes |  |
| `result` | `Any` | Yes |  |
| `skill_ids` | `list` | Yes |  |
| `success` | `bool` | Yes |  |
| `tag_id` | `str` | Yes |  |
| `title` | `str` | No |  |
| `url` | `str` | No |  |
| `why_valuable` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ThreatSignal().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ThreatSignal().list({"account_id": "example", "skill_id": "example"})
for threat_signal in results:
    print(threat_signal)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ThreatSignal().load({"account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ThreatSignal().remove({"account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ThreatSignal().update({
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ThreatSignalEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```python
client = CloudflareCloudforceOneSDK({
    "feature": {
        "test": {"active": True},
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

