# CloudflareCloudforceOne Golang SDK



The Golang SDK for the CloudflareCloudforceOne API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Attacker(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`, `Patch`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/cloudflare-cloudforce-one-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/cloudflare-cloudforce-one-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/cloudflare-cloudforce-one-sdk/go=../cloudflare-cloudforce-one-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/cloudflare-cloudforce-one-sdk/go"
)

func main() {
    client := sdk.NewCloudflareCloudforceOneSDK(map[string]any{
        "apikey": os.Getenv("CLOUDFLARE_CLOUDFORCE_ONE_APIKEY"),
    })

    // Load a single attacker — the value is the loaded record.
    attacker, err := client.Attacker(nil).Load(map[string]any{"account_id": "example_account_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(attacker)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
permissions, err := client.Permission(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = permissions
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

permission, err := client.Permission(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(permission) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewCloudflareCloudforceOneSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewCloudflareCloudforceOneSDK

```go
func NewCloudflareCloudforceOneSDK(options map[string]any) *CloudflareCloudforceOneSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *CloudflareCloudforceOneSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareCloudforceOneSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Attacker` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create an Attacker entity instance. |
| `BinDb` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a BinDb entity instance. |
| `BrandProtection` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a BrandProtection entity instance. |
| `Category` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a Category entity instance. |
| `CloudforceOneAccountExemption` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a CloudforceOneAccountExemption entity instance. |
| `CloudforceOneDeleteAll` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a CloudforceOneDeleteAll entity instance. |
| `CloudforceOneEditApproval` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a CloudforceOneEditApproval entity instance. |
| `CloudforceOneEmailRuleValidation` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a CloudforceOneEmailRuleValidation entity instance. |
| `CloudforceOneEmailRulesList` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a CloudforceOneEmailRulesList entity instance. |
| `CloudforceOneRequestsApiResponseCommon` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a CloudforceOneRequestsApiResponseCommon entity instance. |
| `CloudforceOneRule` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a CloudforceOneRule entity instance. |
| `CloudforceOneRuleApprovalDetail` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a CloudforceOneRuleApprovalDetail entity instance. |
| `CloudforceOneRuleApprovalsList` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a CloudforceOneRuleApprovalsList entity instance. |
| `CloudforceOneRulePreview` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a CloudforceOneRulePreview entity instance. |
| `CloudforceOneRulesPreviewList` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a CloudforceOneRulesPreviewList entity instance. |
| `CloudforceOneRulesSearch` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a CloudforceOneRulesSearch entity instance. |
| `CloudforceOneStat` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a CloudforceOneStat entity instance. |
| `CloudforceOneSuccess` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a CloudforceOneSuccess entity instance. |
| `CloudforceOneTreeNode` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a CloudforceOneTreeNode entity instance. |
| `CloudforceOneValidation` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a CloudforceOneValidation entity instance. |
| `Collection` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a Collection entity instance. |
| `CollectionsItem` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a CollectionsItem entity instance. |
| `Country` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a Country entity instance. |
| `DashboardAsset` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a DashboardAsset entity instance. |
| `DashboardUser` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a DashboardUser entity instance. |
| `Dataset` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a Dataset entity instance. |
| `Event` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create an Event entity instance. |
| `Group` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a Group entity instance. |
| `Indicator` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create an Indicator entity instance. |
| `IndicatorType` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create an IndicatorType entity instance. |
| `Permission` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a Permission entity instance. |
| `Priority` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a Priority entity instance. |
| `PriorityIntelligence` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a PriorityIntelligence entity instance. |
| `PriorityIntelligenceRequirement` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a PriorityIntelligenceRequirement entity instance. |
| `PriorityIntelligenceRequirementsPir` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a PriorityIntelligenceRequirementsPir entity instance. |
| `PublicCredentialMonitor` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a PublicCredentialMonitor entity instance. |
| `Request` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a Request entity instance. |
| `RequestForInformationRfi` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a RequestForInformationRfi entity instance. |
| `RequestsDashboard` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a RequestsDashboard entity instance. |
| `Rfi` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a Rfi entity instance. |
| `RfiMessage` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a RfiMessage entity instance. |
| `Rule` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a Rule entity instance. |
| `Scan` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a Scan entity instance. |
| `Tag` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a Tag entity instance. |
| `TagCategory` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a TagCategory entity instance. |
| `TargetIndustry` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a TargetIndustry entity instance. |
| `ThreatSignal` | `(data map[string]any) CloudflareCloudforceOneEntity` | Create a ThreatSignal entity instance. |

### Entity interface (CloudflareCloudforceOneEntity)

All entities implement the `CloudflareCloudforceOneEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    attacker, err := client.Attacker(nil).Load(nil, nil)
    if err != nil { /* handle */ }
    // attacker is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Attacker

| Field | Description |
| --- | --- |
| `"type"` |  |

Operations: Load.

API path: `/accounts/{account_id}/cloudforce-one/events/attackers`

#### BinDb

| Field | Description |
| --- | --- |
| `"content_type"` |  |
| `"md5"` |  |
| `"sha1"` |  |
| `"sha256"` |  |

Operations: Create, Load.

API path: `/accounts/{account_id}/cloudforce-one/binary`

#### BrandProtection

| Field | Description |
| --- | --- |
| `"action"` |  |
| `"body"` |  |
| `"brand"` |  |
| `"category"` |  |
| `"content_type"` | MIME type of the image (only present when download=true) |
| `"createNotice"` |  |
| `"createdAt"` |  |
| `"description"` |  |
| `"dismissed"` | Whether the match is dismissed. |
| `"domain"` |  |
| `"domain_id"` |  |
| `"domains"` |  |
| `"errors"` |  |
| `"fields"` |  |
| `"first_seen"` |  |
| `"format"` |  |
| `"id"` |  |
| `"image_data"` | Base64 encoded image data. |
| `"letterText"` |  |
| `"letterType"` |  |
| `"matchId"` |  |
| `"matchType"` |  |
| `"match_details"` | Per-match detail objects with query metadata and individual dismissed state. |
| `"match_ids"` |  |
| `"matched_at"` |  |
| `"matches"` |  |
| `"max_time"` |  |
| `"message"` |  |
| `"messages"` |  |
| `"min_time"` |  |
| `"name"` |  |
| `"noticeParams"` |  |
| `"notices"` |  |
| `"public_scans"` |  |
| `"queryId"` |  |
| `"queryIds"` |  |
| `"query_id"` |  |
| `"r2_path"` |  |
| `"registrar"` |  |
| `"result"` |  |
| `"result_info"` | Present on paginated list responses when page or per_page is supplied. |
| `"scan"` |  |
| `"scan_matches"` |  |
| `"scan_status"` |  |
| `"scan_submission_id"` |  |
| `"score_threshold"` | Minimum similarity score threshold for matches (0-1, default: 0) |
| `"search_lookback"` | If true, search recent domain lookback entries for matches |
| `"similarity_score"` |  |
| `"similarity_threshold"` | Minimum similarity score (0-1) required for visual matches |
| `"source"` |  |
| `"status"` |  |
| `"string_matches"` |  |
| `"success"` |  |
| `"tag"` | Unique identifier for the logo query |
| `"takedownNoticeId"` |  |
| `"templateId"` |  |
| `"top_k"` | Number of closest matches to return (1-100, default: 10) |
| `"total_analyzed"` |  |
| `"total_matches"` |  |
| `"truncated"` |  |
| `"updatedAt"` |  |
| `"uploaded_at"` |  |
| `"url_scan_id"` |  |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/cloudforce-one/v2/brand-protection/logo/search`

#### Category

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"killChain"` |  |
| `"mitreAttack"` |  |
| `"mitreCapec"` |  |
| `"name"` |  |
| `"shortname"` |  |
| `"uuid"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/cloudforce-one/events/event-categories/by-id/{category_id}`

#### CloudforceOneAccountExemption

| Field | Description |
| --- | --- |
| `"namespace"` |  |
| `"tag_match"` |  |
| `"worker_name"` |  |

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
| `"condition"` | Nested condition groups support up to 10 levels of depth. |
| `"description"` |  |
| `"enabled"` |  |
| `"id"` |  |
| `"meta"` |  |
| `"name"` |  |
| `"status"` | Disposition for matching email. |
| `"strings"` |  |

Operations: Create, Update.

API path: `/accounts/{account_id}/cloudforce-one/rules/structured/approvals/{id}/resubmit`

#### CloudforceOneEmailRuleValidation

| Field | Description |
| --- | --- |
| `"compiled_yara"` |  |
| `"condition"` | Nested condition groups support up to 10 levels of depth. |
| `"description"` |  |
| `"enabled"` |  |
| `"error"` |  |
| `"existing_rule_id"` | Existing rule ID to exclude from duplicate-name checks when validating an update. |
| `"meta"` |  |
| `"name"` |  |
| `"status"` | Disposition for matching email. |
| `"strings"` |  |
| `"valid"` |  |

Operations: Create.

API path: `/accounts/{account_id}/cloudforce-one/rules/structured/validate`

#### CloudforceOneEmailRulesList

| Field | Description |
| --- | --- |
| `"content"` |  |
| `"created_at"` |  |
| `"created_by"` |  |
| `"description"` |  |
| `"enabled"` | Whether this rule is active for dice consumers. |
| `"id"` |  |
| `"is_public"` | Whether this rule is visible to other internal accounts. |
| `"meta"` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `"name"` |  |
| `"namespaces"` |  |
| `"path"` |  |
| `"pending_approval_id"` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `"pending_change"` | Proposed update or deletion awaiting approval. |
| `"structured_source"` | Original JSON payload for rules created via the structured rules API. |
| `"updated_at"` |  |
| `"updated_by"` |  |

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
| `"actions"` |  |
| `"commit_message"` | Human-readable justification for this change. |
| `"content"` |  |
| `"description"` | Human-readable description of the rule. |
| `"enabled"` | Whether this rule is active for dice consumers. |
| `"is_public"` | Whether this rule is visible to other internal accounts. |
| `"meta"` | Adds YARA meta entries to the rule's meta block and stores them in rule_meta alongside content metadata. |
| `"name"` |  |
| `"namespaces"` | Optional WfP deployment tags (customer rules only). |
| `"path"` |  |

Operations: Create.

API path: `/accounts/{account_id}/cloudforce-one/rules`

#### CloudforceOneRuleApprovalDetail

| Field | Description |
| --- | --- |
| `"audit_log_id"` |  |
| `"can_review"` | Whether the authenticated user may approve or reject this pending change. |
| `"cancelled_at"` | Time at which the requester cancelled the approval. |
| `"cancelled_by"` | Requester who cancelled the pending approval. |
| `"change_description"` |  |
| `"change_type"` |  |
| `"commit_message"` | The requester supplies this human-readable justification with the change. |
| `"compiler_warnings"` |  |
| `"current_rule"` |  |
| `"id"` |  |
| `"proposed_changes"` | Contains structured proposed rule changes, or null for unresolved persisted data. |
| `"rejection_reason"` | The reviewer may supply a reason when rejecting the change. |
| `"requested_at"` |  |
| `"requested_by"` |  |
| `"reviewed_at"` |  |
| `"reviewer_scope"` | Review policy: general Nomos approvers for default; general approvers or Phishguard for email. |
| `"revision_number"` | Revision number within this approval request chain. |
| `"rule_id"` |  |
| `"rule_name"` |  |
| `"status"` |  |
| `"superseded_by_approval_id"` | Newer approval revision that replaced this approval. |
| `"supersedes_approval_id"` | This approval replaces the referenced approval revision. |

Operations: Create, Load.

API path: `/accounts/{account_id}/cloudforce-one/rules/approvals/{id}/resubmit`

#### CloudforceOneRuleApprovalsList

| Field | Description |
| --- | --- |
| `"audit_log_id"` |  |
| `"can_review"` | Whether the authenticated user may approve or reject this pending change. |
| `"cancelled_at"` | Time at which the requester cancelled the approval. |
| `"cancelled_by"` | Requester who cancelled the pending approval. |
| `"change_description"` |  |
| `"change_type"` |  |
| `"commit_message"` | The requester supplies this human-readable justification with the change. |
| `"id"` |  |
| `"proposed_changes"` | Contains structured proposed rule changes, or null for unresolved persisted data. |
| `"rejection_reason"` | The reviewer may supply a reason when rejecting the change. |
| `"requested_at"` |  |
| `"requested_by"` |  |
| `"reviewed_at"` |  |
| `"reviewer_scope"` | Review policy: general Nomos approvers for default; general approvers or Phishguard for email. |
| `"revision_number"` | Revision number within this approval request chain. |
| `"rule_id"` |  |
| `"rule_name"` |  |
| `"status"` |  |
| `"superseded_by_approval_id"` | Newer approval revision that replaced this approval. |
| `"supersedes_approval_id"` | This approval replaces the referenced approval revision. |

Operations: List.

API path: `/accounts/{account_id}/cloudforce-one/rules/approvals`

#### CloudforceOneRulePreview

| Field | Description |
| --- | --- |
| `"commit_message"` | Human-readable justification for this change. |
| `"condition"` | Nested condition groups support up to 10 levels of depth. |
| `"content"` |  |
| `"created_at"` |  |
| `"created_by"` |  |
| `"description"` | Human-readable description of the rule. |
| `"enabled"` | Whether this rule is active for dice consumers. |
| `"id"` |  |
| `"is_public"` | Whether this rule is visible to other internal accounts. |
| `"meta"` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `"name"` |  |
| `"namespaces"` |  |
| `"path"` | Path change goes through approval workflow. |
| `"pending_approval_id"` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `"pending_change"` | Proposed update or deletion awaiting approval. |
| `"status"` | Disposition for matching email. |
| `"strings"` |  |
| `"structured_source"` | Original JSON payload for rules created via the structured rules API. |
| `"updated_at"` |  |
| `"updated_by"` |  |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/cloudforce-one/rules/structured/{id}/test`

#### CloudforceOneRulesPreviewList

| Field | Description |
| --- | --- |
| `"content"` |  |
| `"created_at"` |  |
| `"created_by"` |  |
| `"description"` |  |
| `"enabled"` | Whether this rule is active for dice consumers. |
| `"id"` |  |
| `"is_public"` | Whether this rule is visible to other internal accounts. |
| `"meta"` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `"name"` |  |
| `"namespaces"` |  |
| `"path"` |  |
| `"pending_approval_id"` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `"pending_change"` | Proposed update or deletion awaiting approval. |
| `"structured_source"` | Original JSON payload for rules created via the structured rules API. |
| `"updated_at"` |  |
| `"updated_by"` |  |

Operations: List.

API path: `/accounts/{account_id}/cloudforce-one/rules`

#### CloudforceOneRulesSearch

| Field | Description |
| --- | --- |
| `"content"` |  |
| `"created_at"` |  |
| `"created_by"` |  |
| `"description"` |  |
| `"enabled"` | Whether this rule is active for dice consumers. |
| `"id"` |  |
| `"is_public"` | Whether this rule is visible to other internal accounts. |
| `"meta"` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `"name"` |  |
| `"namespaces"` |  |
| `"path"` |  |
| `"pending_approval_id"` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `"pending_change"` | Proposed update or deletion awaiting approval. |
| `"score"` | Relevance score in [0,1]. |
| `"scoring_details"` | AI Search hybrid retrieval returns this per-component scoring breakdown. |
| `"structured_source"` | Original JSON payload for rules created via the structured rules API. |
| `"updated_at"` |  |
| `"updated_by"` |  |

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
| `"id"` |  |
| `"success"` |  |

Operations: Create, Remove.

API path: `/accounts/{account_id}/cloudforce-one/rules/approvals/{id}/cancel`

#### CloudforceOneTreeNode

| Field | Description |
| --- | --- |
| `"children"` |  |
| `"count"` |  |
| `"name"` |  |
| `"path"` |  |

Operations: List.

API path: `/accounts/{account_id}/cloudforce-one/rules/tree`

#### CloudforceOneValidation

| Field | Description |
| --- | --- |
| `"content"` |  |
| `"error"` |  |
| `"excludeRuleId"` |  |
| `"name"` |  |
| `"namespaces"` |  |
| `"path"` |  |
| `"valid"` |  |

Operations: Create.

API path: `/accounts/{account_id}/cloudforce-one/rules/validate`

#### Collection

| Field | Description |
| --- | --- |
| `"columns"` |  |
| `"created_at"` |  |
| `"created_by"` |  |
| `"data"` |  |
| `"id"` |  |
| `"item_count"` |  |
| `"metadata"` |  |
| `"name"` | New column name (must be unique) |
| `"position"` | Column display order |
| `"required"` | Whether column is required |
| `"status"` |  |
| `"type"` | Column type: text, number, boolean, or date |
| `"updated_at"` |  |

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
| `"result"` |  |
| `"success"` |  |

Operations: List.

API path: `/accounts/{account_id}/cloudforce-one/events/countries`

#### DashboardAsset

| Field | Description |
| --- | --- |
| `"assets"` |  |
| `"contentType"` |  |
| `"count"` |  |
| `"downloadable"` |  |
| `"expiresAt"` |  |
| `"fileName"` |  |
| `"fileSize"` |  |
| `"id"` |  |
| `"is_cloudflare_team"` |  |
| `"metadata"` |  |
| `"origin"` |  |
| `"state"` |  |
| `"tlp"` |  |
| `"uploadedAt"` |  |

Operations: Create, Load.

API path: `/accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/assets/upload`

#### DashboardUser

| Field | Description |
| --- | --- |
| `"display_name"` | User display name |
| `"id"` | Unique user ID |

Operations: Load.

API path: `/accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/user/me`

#### Dataset

| Field | Description |
| --- | --- |
| `"deletedAt"` |  |
| `"id"` |  |
| `"indicatorWriteMode"` | Effective indicator mutation capability after account/dataset authorization and dataset storage capability are applied. |
| `"isAnalytics"` |  |
| `"isPublic"` | If true, then anyone can search the dataset. |
| `"name"` | Used to describe the dataset within the account context. |
| `"uuid"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/copy`

#### Event

| Field | Description |
| --- | --- |
| `"accountId"` |  |
| `"account_id"` | Account ID |
| `"alert_enabled"` | Whether alerts are enabled |
| `"alert_rollup_enabled"` | Whether alert rollup is enabled |
| `"attacker"` |  |
| `"attackerCountry"` |  |
| `"attackerCountryAlpha3"` |  |
| `"category"` |  |
| `"childIds"` | Array of child event UUIDs that were processed |
| `"created"` |  |
| `"createdAt"` |  |
| `"createdEventsCount"` | Number of events created |
| `"createdIndicatorsCount"` | Number of indicators created |
| `"createdRelationshipsCount"` | Number of relationships created |
| `"created_at"` | Creation timestamp |
| `"cursor"` | Cursor for pagination. |
| `"custom_threat_feed_id"` | Intel Indicator Feed ID (numeric) |
| `"data"` |  |
| `"datasetId"` | Dataset UUIDs to query, or one standalone scope value: 'all'/'*' for the legacy all-datasets behavior, 'analytics' for isAnalytics=true datasets, or 'operational' for isAnalytics=false datasets. |
| `"date"` |  |
| `"errorCount"` | Number of errors encountered |
| `"errors"` | Array of error details |
| `"event"` |  |
| `"eventIds"` | List of event UUIDs to update (1-100) |
| `"failedCount"` |  |
| `"failures"` | List of events that failed to update with error messages |
| `"hasChildren"` |  |
| `"id"` | Unique identifier for the saved query |
| `"includeCreatedEvents"` | When true, response includes array of created event UUIDs and shard IDs. |
| `"indicator"` |  |
| `"indicatorType"` |  |
| `"indicatorTypeId"` |  |
| `"insight"` |  |
| `"killChain"` |  |
| `"message"` | Human-readable message describing the operation result |
| `"mitreAttack"` |  |
| `"mitreCapec"` |  |
| `"name"` | Name of the saved query |
| `"numReferenced"` |  |
| `"numReferences"` |  |
| `"order"` |  |
| `"orderBy"` |  |
| `"page"` |  |
| `"pageSize"` |  |
| `"parentId"` | UUID of the parent event that will be the source of the relationship |
| `"query_json"` | JSON string containing the query parameters |
| `"raw"` |  |
| `"rawId"` |  |
| `"referenced"` |  |
| `"referencedIds"` |  |
| `"references"` |  |
| `"referencesIds"` |  |
| `"relationshipType"` | Type of relationship to create between parent and child events |
| `"relationships"` | Array of successfully created relationship objects |
| `"relationshipsCreated"` | Number of relationships that were successfully created |
| `"releasabilityId"` |  |
| `"rule_enabled"` | Whether rule is enabled |
| `"rule_list_id"` | WAF rules list ID for blocking |
| `"rule_scope"` | Scope for the rule |
| `"search"` | Structured search as a JSON array of {field, op, value} objects. |
| `"source"` |  |
| `"success"` | Whether the relationship creation operation completed successfully |
| `"tags"` |  |
| `"targetCountry"` |  |
| `"targetCountryAlpha3"` |  |
| `"targetIndustry"` |  |
| `"tlp"` |  |
| `"updatedCount"` |  |
| `"updated_at"` | Last update timestamp |
| `"updates"` | Fields to update on all specified events. |
| `"user_email"` | Email of the user who created the query |
| `"uuid"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/cloudforce-one/events`

#### Group

| Field | Description |
| --- | --- |
| `"createdAt"` |  |
| `"description"` |  |
| `"id"` |  |
| `"members"` |  |
| `"name"` |  |
| `"updatedAt"` |  |
| `"uuid"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}/members`

#### Indicator

| Field | Description |
| --- | --- |
| `"completeness"` |  |
| `"confidence"` | Updated confidence. |
| `"createdAt"` |  |
| `"datasetId"` | The dataset ID this indicator belongs to. |
| `"description"` | Optional description for the indicator type |
| `"durableObjectId"` |  |
| `"id"` |  |
| `"indicatorType"` | The indicator type to create (e.g., 'DOMAIN', 'IP', 'URL', 'HASH', 'EMAIL') |
| `"indicators"` |  |
| `"message"` |  |
| `"metadata"` | Updated metadata. |
| `"pagination"` |  |
| `"relatedEvents"` |  |
| `"sources"` | RSS article sources from which this indicator was extracted. |
| `"tags"` |  |
| `"tlp"` | Traffic Light Protocol designation. |
| `"type"` | Updated relationship type. |
| `"updatedAt"` |  |
| `"uuid"` |  |
| `"value"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/{indicator_id}/relationships`

#### IndicatorType

| Field | Description |
| --- | --- |
| `"type"` |  |

Operations: Load.

API path: `/accounts/{account_id}/cloudforce-one/events/indicator-types`

#### Permission

| Field | Description |
| --- | --- |
| `"createdAt"` |  |
| `"id"` |  |
| `"message"` |  |
| `"resourceId"` | The resource ID this permission applies to account_id or group_id |
| `"resourceType"` |  |
| `"role"` |  |
| `"subjectId"` |  |
| `"subjectType"` |  |
| `"success"` |  |
| `"updatedAt"` |  |
| `"uuid"` |  |

Operations: Create, List, Remove, Update.

API path: `/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/permissions`

#### Priority

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"id"` |  |
| `"labels"` | List of labels. |
| `"messages"` |  |
| `"page"` | Page number of results. |
| `"per_page"` | Number of results per page. |
| `"priority"` | Priority. |
| `"requirement"` | Requirement. |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |
| `"tlp"` | The CISA defined Traffic Light Protocol (TLP). |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/cloudforce-one/requests/priority`

#### PriorityIntelligence

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"labels"` |  |
| `"priority"` |  |
| `"requirement"` |  |
| `"tlp"` |  |

Operations: Create, Load, Remove, Update.

API path: `/accounts/{account_id}/cloudforce-one/v2/priority-intelligence`

#### PriorityIntelligenceRequirement

| Field | Description |
| --- | --- |
| `"as_of"` |  |
| `"backtest_days"` |  |
| `"candidate_limit"` |  |
| `"dataset_ids"` |  |
| `"dimension"` |  |
| `"emerging_min_current_count"` |  |
| `"enabled"` |  |
| `"established_min_absolute_delta"` |  |
| `"established_min_prior_count"` |  |
| `"established_min_relative_delta"` |  |
| `"value"` |  |
| `"window_days"` |  |

Operations: Create, Load, Remove, Update.

API path: `/accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests`

#### PriorityIntelligenceRequirementsPir

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"labels"` | List of labels. |
| `"messages"` |  |
| `"priority"` | Priority. |
| `"requirement"` | Requirement. |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |
| `"tlp"` | The CISA defined Traffic Light Protocol (TLP). |

Operations: Create, List.

API path: `/accounts/{account_id}/cloudforce-one/requests/priority/new`

#### PublicCredentialMonitor

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"domain"` | Domain to monitor (e.g. |
| `"id"` |  |
| `"matched_at"` |  |
| `"username"` |  |

Operations: Create, List, Remove.

API path: `/accounts/{account_id}/cloudforce-one/v2/credential-monitor/domains`

#### Request

| Field | Description |
| --- | --- |
| `"completed_after"` | Retrieve requests completed after this time. |
| `"completed_before"` | Retrieve requests completed before this time. |
| `"content"` | Request content. |
| `"created_after"` | Retrieve requests created after this time. |
| `"created_before"` | Retrieve requests created before this time. |
| `"errors"` |  |
| `"id"` |  |
| `"messages"` |  |
| `"page"` | Page number of results. |
| `"per_page"` | Number of results per page. |
| `"priority"` | Priority for analyzing the request. |
| `"request_type"` | Requested information from request. |
| `"result"` |  |
| `"sort_by"` | Field to sort results by. |
| `"sort_order"` | Sort order (asc or desc). |
| `"status"` | Request Status. |
| `"success"` | Whether the API call was successful. |
| `"summary"` | Brief description of the request. |
| `"tlp"` | The CISA defined Traffic Light Protocol (TLP). |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/cloudforce-one/requests`

#### RequestForInformationRfi

| Field | Description |
| --- | --- |
| `"content"` | Content of message. |
| `"errors"` |  |
| `"id"` |  |
| `"messages"` |  |
| `"priority"` | Priority for analyzing the request. |
| `"request_type"` | Requested information from request. |
| `"result"` |  |
| `"source"` | Asset file to upload. |
| `"success"` | Whether the API call was successful. |
| `"summary"` | Brief description of the request. |
| `"tlp"` | The CISA defined Traffic Light Protocol (TLP). |

Operations: Create, List, Load, Update.

API path: `/accounts/{account_id}/cloudforce-one/requests/{request_id}/asset`

#### RequestsDashboard

| Field | Description |
| --- | --- |
| `"created"` |  |
| `"defaultValue"` |  |
| `"description"` |  |
| `"displayOrder"` |  |
| `"errors"` | Always empty on success |
| `"fieldLabel"` |  |
| `"fieldName"` |  |
| `"fieldType"` |  |
| `"id"` |  |
| `"messages"` | Always empty on success |
| `"options"` |  |
| `"projectType"` |  |
| `"project_type"` |  |
| `"public"` |  |
| `"request_types"` |  |
| `"required"` |  |
| `"result"` |  |
| `"sectionID"` |  |
| `"sectionLabel"` |  |
| `"success"` |  |
| `"total"` |  |
| `"updated"` |  |
| `"validation"` |  |

Operations: List, Load.

API path: `/accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/metadata`

#### Rfi

| Field | Description |
| --- | --- |
| `"account"` |  |
| `"assignee"` | Assignee email |
| `"completed"` | Completion timestamp |
| `"created"` | Creation timestamp |
| `"description"` | RFI description (optional). |
| `"eventId"` | Optional related event ID |
| `"id"` | RFI UUID |
| `"investigation_id"` | Investigation UUID |
| `"is_free_request"` | Whether this is a free request |
| `"message_tokens"` | Total message tokens |
| `"metadata"` | Optional metadata fields specific to the RFI type |
| `"pagination"` |  |
| `"priority"` | Request priority |
| `"readable_id"` | Human-readable ID |
| `"release_entitlements"` | Release entitlements |
| `"report_id"` | Report UUID |
| `"request"` |  |
| `"request_type"` | Optional request type for the request |
| `"result"` |  |
| `"status"` | RFI status. |
| `"subtypeId"` | Optional subtype ID |
| `"success"` |  |
| `"summary"` | RFI summary |
| `"title"` | RFI title (optional). |
| `"tlp"` | TLP classification |
| `"tokens"` | Total tokens used |
| `"updated"` | Last update timestamp |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/cloudforce-one/v2/requests/{project_type}`

#### RfiMessage

| Field | Description |
| --- | --- |
| `"attachment_asset_ids"` |  |
| `"attachments"` |  |
| `"author_id"` |  |
| `"author_name"` |  |
| `"content"` |  |
| `"created"` |  |
| `"id"` |  |
| `"is_cloudflare_team"` |  |
| `"is_published"` |  |
| `"publish"` |  |
| `"published"` |  |
| `"tlp"` |  |
| `"updated"` |  |

Operations: Create, List, Load, Update.

API path: `/accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/messages/new`

#### Rule

| Field | Description |
| --- | --- |
| `"arrays"` |  |
| `"headers"` |  |
| `"operators"` |  |
| `"scalars"` |  |
| `"string_arrays"` |  |
| `"structs"` |  |

Operations: List.

API path: `/accounts/{account_id}/cloudforce-one/rules/managed`

#### Scan

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"frequency"` | Defines the number of days between each scan (0 = One-off scan). |
| `"ips"` | Defines a list of IP addresses or CIDR blocks to scan. |
| `"messages"` |  |
| `"ports"` | Defines a list of ports to scan. |
| `"result"` |  |
| `"success"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/cloudforce-one/scans/config`

#### Tag

| Field | Description |
| --- | --- |
| `"activeDuration"` |  |
| `"activeDuration_annotated"` |  |
| `"actorCategory"` |  |
| `"actorCategory_annotated"` |  |
| `"aliasGroupNames"` |  |
| `"aliasGroupNamesInternal"` |  |
| `"aliases"` | Structured aliases ({ value, confidence 1-10, tlp }). |
| `"attributionOrganization"` |  |
| `"attributionOrganization_annotated"` |  |
| `"categoryName"` |  |
| `"categoryUuid"` | Tag type (category) UUID. |
| `"confidence"` | Overall tag confidence (1-10). |
| `"createdAt"` |  |
| `"dateOfDiscovery"` | Date of discovery (ISO YYYY-MM-DD). |
| `"description"` |  |
| `"externalReferenceLinks"` |  |
| `"externalReferences"` | Structured external references ({ url, description }). |
| `"externalReferences_annotated"` |  |
| `"id"` |  |
| `"internalAliases"` | Internal structured aliases ({ value, confidence 1-10, tlp }). |
| `"internalDescription"` |  |
| `"lastSeen"` |  |
| `"metadata"` | Updated metadata. |
| `"motive"` |  |
| `"motive_annotated"` |  |
| `"opsecLevel"` |  |
| `"opsecLevel_annotated"` |  |
| `"originCountryISO"` | ISO country code (alpha-2 or alpha-3). |
| `"originCountryISO_annotated"` |  |
| `"priority"` |  |
| `"priority_annotated"` |  |
| `"properties"` | Parsed custom field values. |
| `"sophisticationLevel"` |  |
| `"sophisticationLevel_annotated"` |  |
| `"tlp"` | Tag-level TLP handling marking. |
| `"type"` | Updated relationship type. |
| `"updatedAt"` |  |
| `"uuid"` |  |
| `"value"` |  |
| `"version"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}/relationships`

#### TagCategory

| Field | Description |
| --- | --- |
| `"createdAt"` |  |
| `"description"` |  |
| `"id"` |  |
| `"name"` |  |
| `"schema"` | Parsed FieldDefinition[] defining custom fields for this category, or null if none. |
| `"updatedAt"` |  |
| `"uuid"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/cloudforce-one/events/tags/categories/create`

#### TargetIndustry

| Field | Description |
| --- | --- |
| `"type"` |  |

Operations: Load.

API path: `/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/targetIndustries`

#### ThreatSignal

| Field | Description |
| --- | --- |
| `"category_id"` | One of the predefined Threat Signals feed categories; see GET /:account_id/v2/threat-signals/categories. |
| `"category_uuids"` |  |
| `"config"` |  |
| `"display_name"` |  |
| `"display_order"` |  |
| `"enabled"` |  |
| `"errors"` |  |
| `"feeds"` |  |
| `"is_active"` |  |
| `"message"` |  |
| `"messages"` |  |
| `"name"` |  |
| `"opted_out"` |  |
| `"output_schema"` |  |
| `"poll_interval_s"` |  |
| `"prompt"` |  |
| `"read"` |  |
| `"result"` |  |
| `"skill_ids"` |  |
| `"success"` |  |
| `"tag_id"` |  |
| `"title"` |  |
| `"url"` |  |
| `"why_valuable"` |  |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/cloudforce-one/v2/threat-signals/articles/{article_id}/skills/{skill_id}/diagnostic`



## Entities


### Attacker

Create an instance: `attacker := client.Attacker(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `type` | `string` |  |

#### Example: Load

```go
attacker, err := client.Attacker(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(attacker) // the loaded record
```


### BinDb

Create an instance: `binDb := client.BinDb(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content_type` | `string` |  |
| `md5` | `string` |  |
| `sha1` | `string` |  |
| `sha256` | `string` |  |

#### Example: Load

```go
binDb, err := client.BinDb(nil).Load(map[string]any{"account_id": "account_id", "hash": "hash"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(binDb) // the loaded record
```

#### Example: Create

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


### BrandProtection

Create an instance: `brandProtection := client.BrandProtection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

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
| `domains` | `[]any` |  |
| `errors` | `[]any` |  |
| `fields` | `map[string]any` |  |
| `first_seen` | `string` |  |
| `format` | `string` |  |
| `id` | `float64` |  |
| `image_data` | `string` | Base64 encoded image data. |
| `letterText` | `string` |  |
| `letterType` | `string` |  |
| `matchId` | `float64` |  |
| `matchType` | `string` |  |
| `match_details` | `[]any` | Per-match detail objects with query metadata and individual dismissed state. |
| `match_ids` | `[]any` |  |
| `matched_at` | `string` |  |
| `matches` | `[]any` |  |
| `max_time` | `string` |  |
| `message` | `string` |  |
| `messages` | `[]any` |  |
| `min_time` | `string` |  |
| `name` | `string` |  |
| `noticeParams` | `map[string]any` |  |
| `notices` | `[]any` |  |
| `public_scans` | `map[string]any` |  |
| `queryId` | `float64` |  |
| `queryIds` | `[]any` |  |
| `query_id` | `int` |  |
| `r2_path` | `string` |  |
| `registrar` | `string` |  |
| `result` | `any` |  |
| `result_info` | `map[string]any` | Present on paginated list responses when page or per_page is supplied. |
| `scan` | `bool` |  |
| `scan_matches` | `bool` |  |
| `scan_status` | `string` |  |
| `scan_submission_id` | `int` |  |
| `score_threshold` | `float64` | Minimum similarity score threshold for matches (0-1, default: 0) |
| `search_lookback` | `bool` | If true, search recent domain lookback entries for matches |
| `similarity_score` | `float64` |  |
| `similarity_threshold` | `float64` | Minimum similarity score (0-1) required for visual matches |
| `source` | `string` |  |
| `status` | `string` |  |
| `string_matches` | `[]any` |  |
| `success` | `bool` |  |
| `tag` | `string` | Unique identifier for the logo query |
| `takedownNoticeId` | `float64` |  |
| `templateId` | `string` |  |
| `top_k` | `int` | Number of closest matches to return (1-100, default: 10) |
| `total_analyzed` | `float64` |  |
| `total_matches` | `float64` |  |
| `truncated` | `bool` |  |
| `updatedAt` | `string` |  |
| `uploaded_at` | `string` |  |
| `url_scan_id` | `string` |  |

#### Example: Load

```go
brandProtection, err := client.BrandProtection(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(brandProtection) // the loaded record
```

#### Example: List

```go
brandProtections, err := client.BrandProtection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(brandProtections) // the array of records
```

#### Example: Create

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


### Category

Create an instance: `category := client.Category(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `killChain` | `float64` |  |
| `mitreAttack` | `[]any` |  |
| `mitreCapec` | `[]any` |  |
| `name` | `string` |  |
| `shortname` | `string` |  |
| `uuid` | `string` |  |

#### Example: Load

```go
category, err := client.Category(nil).Load(map[string]any{"id": "category_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(category) // the loaded record
```

#### Example: List

```go
categorys, err := client.Category(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(categorys) // the array of records
```

#### Example: Create

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


### CloudforceOneAccountExemption

Create an instance: `cloudforceOneAccountExemption := client.CloudforceOneAccountExemption(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `namespace` | `[]any` |  |
| `tag_match` | `[]any` |  |
| `worker_name` | `[]any` |  |

#### Example: List

```go
cloudforceOneAccountExemptions, err := client.CloudforceOneAccountExemption(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(cloudforceOneAccountExemptions) // the array of records
```

#### Example: Create

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


### CloudforceOneDeleteAll

Create an instance: `cloudforceOneDeleteAll := client.CloudforceOneDeleteAll(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### CloudforceOneEditApproval

Create an instance: `cloudforceOneEditApproval := client.CloudforceOneEditApproval(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `condition` | `map[string]any` | Nested condition groups support up to 10 levels of depth. |
| `description` | `string` |  |
| `enabled` | `bool` |  |
| `id` | `string` |  |
| `meta` | `[]any` |  |
| `name` | `string` |  |
| `status` | `string` | Disposition for matching email. |
| `strings` | `[]any` |  |

#### Example: Create

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


### CloudforceOneEmailRuleValidation

Create an instance: `cloudforceOneEmailRuleValidation := client.CloudforceOneEmailRuleValidation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `compiled_yara` | `string` |  |
| `condition` | `map[string]any` | Nested condition groups support up to 10 levels of depth. |
| `description` | `string` |  |
| `enabled` | `bool` |  |
| `error` | `string` |  |
| `existing_rule_id` | `string` | Existing rule ID to exclude from duplicate-name checks when validating an update. |
| `meta` | `[]any` |  |
| `name` | `string` |  |
| `status` | `string` | Disposition for matching email. |
| `strings` | `[]any` |  |
| `valid` | `bool` |  |

#### Example: Create

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


### CloudforceOneEmailRulesList

Create an instance: `cloudforceOneEmailRulesList := client.CloudforceOneEmailRulesList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `string` |  |
| `created_at` | `float64` |  |
| `created_by` | `string` |  |
| `description` | `string` |  |
| `enabled` | `bool` | Whether this rule is active for dice consumers. |
| `id` | `string` |  |
| `is_public` | `bool` | Whether this rule is visible to other internal accounts. |
| `meta` | `[]any` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` |  |
| `namespaces` | `[]any` |  |
| `path` | `string` |  |
| `pending_approval_id` | `float64` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `map[string]any` | Proposed update or deletion awaiting approval. |
| `structured_source` | `string` | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `float64` |  |
| `updated_by` | `string` |  |

#### Example: List

```go
cloudforceOneEmailRulesLists, err := client.CloudforceOneEmailRulesList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(cloudforceOneEmailRulesLists) // the array of records
```


### CloudforceOneRequestsApiResponseCommon

Create an instance: `cloudforceOneRequestsApiResponseCommon := client.CloudforceOneRequestsApiResponseCommon(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### CloudforceOneRule

Create an instance: `cloudforceOneRule := client.CloudforceOneRule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `[]any` |  |
| `commit_message` | `string` | Human-readable justification for this change. |
| `content` | `string` |  |
| `description` | `string` | Human-readable description of the rule. |
| `enabled` | `bool` | Whether this rule is active for dice consumers. |
| `is_public` | `bool` | Whether this rule is visible to other internal accounts. |
| `meta` | `[]any` | Adds YARA meta entries to the rule's meta block and stores them in rule_meta alongside content metadata. |
| `name` | `string` |  |
| `namespaces` | `[]any` | Optional WfP deployment tags (customer rules only). |
| `path` | `string` |  |

#### Example: Create

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


### CloudforceOneRuleApprovalDetail

Create an instance: `cloudforceOneRuleApprovalDetail := client.CloudforceOneRuleApprovalDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `audit_log_id` | `float64` |  |
| `can_review` | `bool` | Whether the authenticated user may approve or reject this pending change. |
| `cancelled_at` | `float64` | Time at which the requester cancelled the approval. |
| `cancelled_by` | `string` | Requester who cancelled the pending approval. |
| `change_description` | `string` |  |
| `change_type` | `string` |  |
| `commit_message` | `string` | The requester supplies this human-readable justification with the change. |
| `compiler_warnings` | `[]any` |  |
| `current_rule` | `any` |  |
| `id` | `float64` |  |
| `proposed_changes` | `any` | Contains structured proposed rule changes, or null for unresolved persisted data. |
| `rejection_reason` | `string` | The reviewer may supply a reason when rejecting the change. |
| `requested_at` | `float64` |  |
| `requested_by` | `string` |  |
| `reviewed_at` | `float64` |  |
| `reviewer_scope` | `string` | Review policy: general Nomos approvers for default; general approvers or Phishguard for email. |
| `revision_number` | `int` | Revision number within this approval request chain. |
| `rule_id` | `string` |  |
| `rule_name` | `string` |  |
| `status` | `string` |  |
| `superseded_by_approval_id` | `float64` | Newer approval revision that replaced this approval. |
| `supersedes_approval_id` | `float64` | This approval replaces the referenced approval revision. |

#### Example: Load

```go
cloudforceOneRuleApprovalDetail, err := client.CloudforceOneRuleApprovalDetail(nil).Load(map[string]any{"id": "cloudforce_one_rule_approval_detail_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(cloudforceOneRuleApprovalDetail) // the loaded record
```

#### Example: Create

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


### CloudforceOneRuleApprovalsList

Create an instance: `cloudforceOneRuleApprovalsList := client.CloudforceOneRuleApprovalsList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `audit_log_id` | `float64` |  |
| `can_review` | `bool` | Whether the authenticated user may approve or reject this pending change. |
| `cancelled_at` | `float64` | Time at which the requester cancelled the approval. |
| `cancelled_by` | `string` | Requester who cancelled the pending approval. |
| `change_description` | `string` |  |
| `change_type` | `string` |  |
| `commit_message` | `string` | The requester supplies this human-readable justification with the change. |
| `id` | `float64` |  |
| `proposed_changes` | `any` | Contains structured proposed rule changes, or null for unresolved persisted data. |
| `rejection_reason` | `string` | The reviewer may supply a reason when rejecting the change. |
| `requested_at` | `float64` |  |
| `requested_by` | `string` |  |
| `reviewed_at` | `float64` |  |
| `reviewer_scope` | `string` | Review policy: general Nomos approvers for default; general approvers or Phishguard for email. |
| `revision_number` | `int` | Revision number within this approval request chain. |
| `rule_id` | `string` |  |
| `rule_name` | `string` |  |
| `status` | `string` |  |
| `superseded_by_approval_id` | `float64` | Newer approval revision that replaced this approval. |
| `supersedes_approval_id` | `float64` | This approval replaces the referenced approval revision. |

#### Example: List

```go
cloudforceOneRuleApprovalsLists, err := client.CloudforceOneRuleApprovalsList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(cloudforceOneRuleApprovalsLists) // the array of records
```


### CloudforceOneRulePreview

Create an instance: `cloudforceOneRulePreview := client.CloudforceOneRulePreview(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit_message` | `string` | Human-readable justification for this change. |
| `condition` | `map[string]any` | Nested condition groups support up to 10 levels of depth. |
| `content` | `string` |  |
| `created_at` | `float64` |  |
| `created_by` | `string` |  |
| `description` | `string` | Human-readable description of the rule. |
| `enabled` | `bool` | Whether this rule is active for dice consumers. |
| `id` | `string` |  |
| `is_public` | `bool` | Whether this rule is visible to other internal accounts. |
| `meta` | `[]any` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` |  |
| `namespaces` | `[]any` |  |
| `path` | `string` | Path change goes through approval workflow. |
| `pending_approval_id` | `float64` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `map[string]any` | Proposed update or deletion awaiting approval. |
| `status` | `string` | Disposition for matching email. |
| `strings` | `[]any` |  |
| `structured_source` | `string` | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `float64` |  |
| `updated_by` | `string` |  |

#### Example: Load

```go
cloudforceOneRulePreview, err := client.CloudforceOneRulePreview(nil).Load(map[string]any{"id": "cloudforce_one_rule_preview_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(cloudforceOneRulePreview) // the loaded record
```

#### Example: Create

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


### CloudforceOneRulesPreviewList

Create an instance: `cloudforceOneRulesPreviewList := client.CloudforceOneRulesPreviewList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `string` |  |
| `created_at` | `float64` |  |
| `created_by` | `string` |  |
| `description` | `string` |  |
| `enabled` | `bool` | Whether this rule is active for dice consumers. |
| `id` | `string` |  |
| `is_public` | `bool` | Whether this rule is visible to other internal accounts. |
| `meta` | `[]any` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` |  |
| `namespaces` | `[]any` |  |
| `path` | `string` |  |
| `pending_approval_id` | `float64` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `map[string]any` | Proposed update or deletion awaiting approval. |
| `structured_source` | `string` | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `float64` |  |
| `updated_by` | `string` |  |

#### Example: List

```go
cloudforceOneRulesPreviewLists, err := client.CloudforceOneRulesPreviewList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(cloudforceOneRulesPreviewLists) // the array of records
```


### CloudforceOneRulesSearch

Create an instance: `cloudforceOneRulesSearch := client.CloudforceOneRulesSearch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `string` |  |
| `created_at` | `float64` |  |
| `created_by` | `string` |  |
| `description` | `string` |  |
| `enabled` | `bool` | Whether this rule is active for dice consumers. |
| `id` | `string` |  |
| `is_public` | `bool` | Whether this rule is visible to other internal accounts. |
| `meta` | `[]any` | Structured meta entries for the rule (parsed from content plus any request-supplied meta). |
| `name` | `string` |  |
| `namespaces` | `[]any` |  |
| `path` | `string` |  |
| `pending_approval_id` | `float64` | ID of an open approval workflow targeting this rule, or null if none is pending. |
| `pending_change` | `map[string]any` | Proposed update or deletion awaiting approval. |
| `score` | `float64` | Relevance score in [0,1]. |
| `scoring_details` | `map[string]any` | AI Search hybrid retrieval returns this per-component scoring breakdown. |
| `structured_source` | `string` | Original JSON payload for rules created via the structured rules API. |
| `updated_at` | `float64` |  |
| `updated_by` | `string` |  |

#### Example: List

```go
cloudforceOneRulesSearchs, err := client.CloudforceOneRulesSearch(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(cloudforceOneRulesSearchs) // the array of records
```


### CloudforceOneStat

Create an instance: `cloudforceOneStat := client.CloudforceOneStat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
cloudforceOneStat, err := client.CloudforceOneStat(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(cloudforceOneStat) // the loaded record
```


### CloudforceOneSuccess

Create an instance: `cloudforceOneSuccess := client.CloudforceOneSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `success` | `bool` |  |

#### Example: Create

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


### CloudforceOneTreeNode

Create an instance: `cloudforceOneTreeNode := client.CloudforceOneTreeNode(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `children` | `[]any` |  |
| `count` | `float64` |  |
| `name` | `string` |  |
| `path` | `string` |  |

#### Example: List

```go
cloudforceOneTreeNodes, err := client.CloudforceOneTreeNode(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(cloudforceOneTreeNodes) // the array of records
```


### CloudforceOneValidation

Create an instance: `cloudforceOneValidation := client.CloudforceOneValidation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `string` |  |
| `error` | `string` |  |
| `excludeRuleId` | `string` |  |
| `name` | `string` |  |
| `namespaces` | `[]any` |  |
| `path` | `string` |  |
| `valid` | `bool` |  |

#### Example: Create

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


### Collection

Create an instance: `collection := client.Collection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `columns` | `[]any` |  |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `data` | `map[string]any` |  |
| `id` | `string` |  |
| `item_count` | `float64` |  |
| `metadata` | `map[string]any` |  |
| `name` | `string` | New column name (must be unique) |
| `position` | `float64` | Column display order |
| `required` | `bool` | Whether column is required |
| `status` | `string` |  |
| `type` | `string` | Column type: text, number, boolean, or date |
| `updated_at` | `string` |  |

#### Example: Load

```go
collection, err := client.Collection(nil).Load(map[string]any{"id": "collection_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(collection) // the loaded record
```

#### Example: List

```go
collections, err := client.Collection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(collections) // the array of records
```

#### Example: Create

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


### CollectionsItem

Create an instance: `collectionsItem := client.CollectionsItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

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


### Country

Create an instance: `country := client.Country(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |
| `success` | `string` |  |

#### Example: List

```go
countrys, err := client.Country(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(countrys) // the array of records
```


### DashboardAsset

Create an instance: `dashboardAsset := client.DashboardAsset(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assets` | `map[string]any` |  |
| `contentType` | `map[string]any` |  |
| `count` | `map[string]any` |  |
| `downloadable` | `map[string]any` |  |
| `expiresAt` | `map[string]any` |  |
| `fileName` | `map[string]any` |  |
| `fileSize` | `map[string]any` |  |
| `id` | `map[string]any` |  |
| `is_cloudflare_team` | `map[string]any` |  |
| `metadata` | `map[string]any` |  |
| `origin` | `map[string]any` |  |
| `state` | `map[string]any` |  |
| `tlp` | `map[string]any` |  |
| `uploadedAt` | `map[string]any` |  |

#### Example: Load

```go
dashboardAsset, err := client.DashboardAsset(nil).Load(map[string]any{"account_id": "account_id", "project_type": "project_type", "request_id": "request_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dashboardAsset) // the loaded record
```

#### Example: Create

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


### DashboardUser

Create an instance: `dashboardUser := client.DashboardUser(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `display_name` | `string` | User display name |
| `id` | `string` | Unique user ID |

#### Example: Load

```go
dashboardUser, err := client.DashboardUser(nil).Load(map[string]any{"account_id": "account_id", "request_id": "request_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dashboardUser) // the loaded record
```


### Dataset

Create an instance: `dataset := client.Dataset(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

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

```go
dataset, err := client.Dataset(nil).Load(map[string]any{"id": "dataset_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dataset) // the loaded record
```

#### Example: List

```go
datasets, err := client.Dataset(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(datasets) // the array of records
```

#### Example: Create

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


### Event

Create an instance: `event := client.Event(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountId` | `float64` |  |
| `account_id` | `int` | Account ID |
| `alert_enabled` | `bool` | Whether alerts are enabled |
| `alert_rollup_enabled` | `bool` | Whether alert rollup is enabled |
| `attacker` | `string` |  |
| `attackerCountry` | `string` |  |
| `attackerCountryAlpha3` | `string` |  |
| `category` | `string` |  |
| `childIds` | `[]any` | Array of child event UUIDs that were processed |
| `created` | `string` |  |
| `createdAt` | `string` |  |
| `createdEventsCount` | `float64` | Number of events created |
| `createdIndicatorsCount` | `float64` | Number of indicators created |
| `createdRelationshipsCount` | `float64` | Number of relationships created |
| `created_at` | `string` | Creation timestamp |
| `cursor` | `string` | Cursor for pagination. |
| `custom_threat_feed_id` | `int` | Intel Indicator Feed ID (numeric) |
| `data` | `string` |  |
| `datasetId` | `string` | Dataset UUIDs to query, or one standalone scope value: 'all'/'*' for the legacy all-datasets behavior, 'analytics' for isAnalytics=true datasets, or 'operational' for isAnalytics=false datasets. |
| `date` | `string` |  |
| `errorCount` | `float64` | Number of errors encountered |
| `errors` | `[]any` | Array of error details |
| `event` | `string` |  |
| `eventIds` | `[]any` | List of event UUIDs to update (1-100) |
| `failedCount` | `float64` |  |
| `failures` | `[]any` | List of events that failed to update with error messages |
| `hasChildren` | `bool` |  |
| `id` | `float64` | Unique identifier for the saved query |
| `includeCreatedEvents` | `bool` | When true, response includes array of created event UUIDs and shard IDs. |
| `indicator` | `string` |  |
| `indicatorType` | `string` |  |
| `indicatorTypeId` | `float64` |  |
| `insight` | `string` |  |
| `killChain` | `float64` |  |
| `message` | `string` | Human-readable message describing the operation result |
| `mitreAttack` | `[]any` |  |
| `mitreCapec` | `[]any` |  |
| `name` | `string` | Name of the saved query |
| `numReferenced` | `float64` |  |
| `numReferences` | `float64` |  |
| `order` | `string` |  |
| `orderBy` | `string` |  |
| `page` | `float64` |  |
| `pageSize` | `float64` |  |
| `parentId` | `string` | UUID of the parent event that will be the source of the relationship |
| `query_json` | `string` | JSON string containing the query parameters |
| `raw` | `map[string]any` |  |
| `rawId` | `string` |  |
| `referenced` | `[]any` |  |
| `referencedIds` | `[]any` |  |
| `references` | `[]any` |  |
| `referencesIds` | `[]any` |  |
| `relationshipType` | `string` | Type of relationship to create between parent and child events |
| `relationships` | `[]any` | Array of successfully created relationship objects |
| `relationshipsCreated` | `float64` | Number of relationships that were successfully created |
| `releasabilityId` | `string` |  |
| `rule_enabled` | `bool` | Whether rule is enabled |
| `rule_list_id` | `string` | WAF rules list ID for blocking |
| `rule_scope` | `string` | Scope for the rule |
| `search` | `[]any` | Structured search as a JSON array of {field, op, value} objects. |
| `source` | `string` |  |
| `success` | `bool` | Whether the relationship creation operation completed successfully |
| `tags` | `[]any` |  |
| `targetCountry` | `string` |  |
| `targetCountryAlpha3` | `string` |  |
| `targetIndustry` | `string` |  |
| `tlp` | `string` |  |
| `updatedCount` | `float64` |  |
| `updated_at` | `string` | Last update timestamp |
| `updates` | `map[string]any` | Fields to update on all specified events. |
| `user_email` | `string` | Email of the user who created the query |
| `uuid` | `string` |  |

#### Example: Load

```go
event, err := client.Event(nil).Load(map[string]any{"id": "event_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(event) // the loaded record
```

#### Example: List

```go
events, err := client.Event(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(events) // the array of records
```

#### Example: Create

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


### Group

Create an instance: `group := client.Group(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `members` | `[]any` |  |
| `name` | `string` |  |
| `updatedAt` | `string` |  |
| `uuid` | `string` |  |

#### Example: Load

```go
group, err := client.Group(nil).Load(map[string]any{"id": "group_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(group) // the loaded record
```

#### Example: List

```go
groups, err := client.Group(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(groups) // the array of records
```

#### Example: Create

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


### Indicator

Create an instance: `indicator := client.Indicator(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completeness` | `map[string]any` |  |
| `confidence` | `int` | Updated confidence. |
| `createdAt` | `string` |  |
| `datasetId` | `string` | The dataset ID this indicator belongs to. |
| `description` | `string` | Optional description for the indicator type |
| `durableObjectId` | `string` |  |
| `id` | `string` |  |
| `indicatorType` | `string` | The indicator type to create (e.g., 'DOMAIN', 'IP', 'URL', 'HASH', 'EMAIL') |
| `indicators` | `map[string]any` |  |
| `message` | `string` |  |
| `metadata` | `map[string]any` | Updated metadata. |
| `pagination` | `map[string]any` |  |
| `relatedEvents` | `[]any` |  |
| `sources` | `[]any` | RSS article sources from which this indicator was extracted. |
| `tags` | `[]any` |  |
| `tlp` | `string` | Traffic Light Protocol designation. |
| `type` | `string` | Updated relationship type. |
| `updatedAt` | `string` |  |
| `uuid` | `string` |  |
| `value` | `string` |  |

#### Example: Load

```go
indicator, err := client.Indicator(nil).Load(map[string]any{"id": "indicator_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(indicator) // the loaded record
```

#### Example: List

```go
indicators, err := client.Indicator(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(indicators) // the array of records
```

#### Example: Create

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


### IndicatorType

Create an instance: `indicatorType := client.IndicatorType(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `type` | `string` |  |

#### Example: Load

```go
indicatorType, err := client.IndicatorType(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(indicatorType) // the loaded record
```


### Permission

Create an instance: `permission := client.Permission(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

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

```go
permissions, err := client.Permission(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(permissions) // the array of records
```

#### Example: Create

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


### Priority

Create an instance: `priority := client.Priority(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `labels` | `[]any` | List of labels. |
| `messages` | `[]any` |  |
| `page` | `int` | Page number of results. |
| `per_page` | `int` | Number of results per page. |
| `priority` | `int` | Priority. |
| `requirement` | `string` | Requirement. |
| `result` | `any` |  |
| `success` | `bool` | Whether the API call was successful. |
| `tlp` | `string` | The CISA defined Traffic Light Protocol (TLP). |

#### Example: Load

```go
priority, err := client.Priority(nil).Load(map[string]any{"id": "priority_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(priority) // the loaded record
```

#### Example: Create

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


### PriorityIntelligence

Create an instance: `priorityIntelligence := client.PriorityIntelligence(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `labels` | `[]any` |  |
| `priority` | `int` |  |
| `requirement` | `string` |  |
| `tlp` | `string` |  |

#### Example: Load

```go
priorityIntelligence, err := client.PriorityIntelligence(nil).Load(map[string]any{"id": "priority_intelligence_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(priorityIntelligence) // the loaded record
```

#### Example: Create

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


### PriorityIntelligenceRequirement

Create an instance: `priorityIntelligenceRequirement := client.PriorityIntelligenceRequirement(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `as_of` | `string` |  |
| `backtest_days` | `int` |  |
| `candidate_limit` | `int` |  |
| `dataset_ids` | `[]any` |  |
| `dimension` | `string` |  |
| `emerging_min_current_count` | `int` |  |
| `enabled` | `bool` |  |
| `established_min_absolute_delta` | `int` |  |
| `established_min_prior_count` | `int` |  |
| `established_min_relative_delta` | `float64` |  |
| `value` | `string` |  |
| `window_days` | `int` |  |

#### Example: Load

```go
priorityIntelligenceRequirement, err := client.PriorityIntelligenceRequirement(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(priorityIntelligenceRequirement) // the loaded record
```

#### Example: Create

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


### PriorityIntelligenceRequirementsPir

Create an instance: `priorityIntelligenceRequirementsPir := client.PriorityIntelligenceRequirementsPir(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `labels` | `[]any` | List of labels. |
| `messages` | `[]any` |  |
| `priority` | `int` | Priority. |
| `requirement` | `string` | Requirement. |
| `result` | `any` |  |
| `success` | `bool` | Whether the API call was successful. |
| `tlp` | `string` | The CISA defined Traffic Light Protocol (TLP). |

#### Example: List

```go
priorityIntelligenceRequirementsPirs, err := client.PriorityIntelligenceRequirementsPir(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(priorityIntelligenceRequirementsPirs) // the array of records
```

#### Example: Create

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


### PublicCredentialMonitor

Create an instance: `publicCredentialMonitor := client.PublicCredentialMonitor(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `domain` | `string` | Domain to monitor (e.g. |
| `id` | `int` |  |
| `matched_at` | `string` |  |
| `username` | `string` |  |

#### Example: List

```go
publicCredentialMonitors, err := client.PublicCredentialMonitor(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(publicCredentialMonitors) // the array of records
```

#### Example: Create

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


### Request

Create an instance: `request := client.Request(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed_after` | `any` | Retrieve requests completed after this time. |
| `completed_before` | `any` | Retrieve requests completed before this time. |
| `content` | `string` | Request content. |
| `created_after` | `any` | Retrieve requests created after this time. |
| `created_before` | `any` | Retrieve requests created before this time. |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `messages` | `[]any` |  |
| `page` | `int` | Page number of results. |
| `per_page` | `int` | Number of results per page. |
| `priority` | `string` | Priority for analyzing the request. |
| `request_type` | `string` | Requested information from request. |
| `result` | `map[string]any` |  |
| `sort_by` | `string` | Field to sort results by. |
| `sort_order` | `string` | Sort order (asc or desc). |
| `status` | `string` | Request Status. |
| `success` | `bool` | Whether the API call was successful. |
| `summary` | `string` | Brief description of the request. |
| `tlp` | `string` | The CISA defined Traffic Light Protocol (TLP). |

#### Example: Load

```go
request, err := client.Request(nil).Load(map[string]any{"id": "request_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(request) // the loaded record
```

#### Example: Create

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


### RequestForInformationRfi

Create an instance: `requestForInformationRfi := client.RequestForInformationRfi(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `string` | Content of message. |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `messages` | `[]any` |  |
| `priority` | `string` | Priority for analyzing the request. |
| `request_type` | `string` | Requested information from request. |
| `result` | `[]any` |  |
| `source` | `string` | Asset file to upload. |
| `success` | `bool` | Whether the API call was successful. |
| `summary` | `string` | Brief description of the request. |
| `tlp` | `string` | The CISA defined Traffic Light Protocol (TLP). |

#### Example: Load

```go
requestForInformationRfi, err := client.RequestForInformationRfi(nil).Load(map[string]any{"account_id": "account_id", "asset_id": "asset_id", "request_id": "request_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(requestForInformationRfi) // the loaded record
```

#### Example: List

```go
requestForInformationRfis, err := client.RequestForInformationRfi(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(requestForInformationRfis) // the array of records
```

#### Example: Create

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


### RequestsDashboard

Create an instance: `requestsDashboard := client.RequestsDashboard(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `string` |  |
| `defaultValue` | `any` |  |
| `description` | `string` |  |
| `displayOrder` | `float64` |  |
| `errors` | `[]any` | Always empty on success |
| `fieldLabel` | `string` |  |
| `fieldName` | `string` |  |
| `fieldType` | `string` |  |
| `id` | `string` |  |
| `messages` | `[]any` | Always empty on success |
| `options` | `[]any` |  |
| `projectType` | `string` |  |
| `project_type` | `string` |  |
| `public` | `bool` |  |
| `request_types` | `[]any` |  |
| `required` | `bool` |  |
| `result` | `map[string]any` |  |
| `sectionID` | `string` |  |
| `sectionLabel` | `string` |  |
| `success` | `map[string]any` |  |
| `total` | `float64` |  |
| `updated` | `string` |  |
| `validation` | `map[string]any` |  |

#### Example: Load

```go
requestsDashboard, err := client.RequestsDashboard(nil).Load(map[string]any{"account_id": "account_id", "project_type": "project_type"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(requestsDashboard) // the loaded record
```

#### Example: List

```go
requestsDashboards, err := client.RequestsDashboard(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(requestsDashboards) // the array of records
```


### Rfi

Create an instance: `rfi := client.Rfi(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `map[string]any` |  |
| `assignee` | `string` | Assignee email |
| `completed` | `string` | Completion timestamp |
| `created` | `string` | Creation timestamp |
| `description` | `string` | RFI description (optional). |
| `eventId` | `string` | Optional related event ID |
| `id` | `string` | RFI UUID |
| `investigation_id` | `string` | Investigation UUID |
| `is_free_request` | `bool` | Whether this is a free request |
| `message_tokens` | `float64` | Total message tokens |
| `metadata` | `map[string]any` | Optional metadata fields specific to the RFI type |
| `pagination` | `map[string]any` |  |
| `priority` | `string` | Request priority |
| `readable_id` | `string` | Human-readable ID |
| `release_entitlements` | `string` | Release entitlements |
| `report_id` | `string` | Report UUID |
| `request` | `map[string]any` |  |
| `request_type` | `string` | Optional request type for the request |
| `result` | `[]any` |  |
| `status` | `string` | RFI status. |
| `subtypeId` | `string` | Optional subtype ID |
| `success` | `string` |  |
| `summary` | `string` | RFI summary |
| `title` | `string` | RFI title (optional). |
| `tlp` | `string` | TLP classification |
| `tokens` | `float64` | Total tokens used |
| `updated` | `string` | Last update timestamp |

#### Example: Load

```go
rfi, err := client.Rfi(nil).Load(map[string]any{"id": "rfi_id", "project_type": "project_type"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(rfi) // the loaded record
```

#### Example: Create

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


### RfiMessage

Create an instance: `rfiMessage := client.RfiMessage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachment_asset_ids` | `[]any` |  |
| `attachments` | `[]any` |  |
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

```go
rfiMessage, err := client.RfiMessage(nil).Load(map[string]any{"id": "rfi_message_id", "account_id": "account_id", "project_type": "project_type", "request_id": "request_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(rfiMessage) // the loaded record
```

#### Example: List

```go
rfiMessages, err := client.RfiMessage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(rfiMessages) // the array of records
```

#### Example: Create

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


### Rule

Create an instance: `rule := client.Rule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `arrays` | `[]any` |  |
| `headers` | `map[string]any` |  |
| `operators` | `map[string]any` |  |
| `scalars` | `[]any` |  |
| `string_arrays` | `[]any` |  |
| `structs` | `[]any` |  |

#### Example: List

```go
rules, err := client.Rule(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(rules) // the array of records
```


### Scan

Create an instance: `scan := client.Scan(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `frequency` | `float64` | Defines the number of days between each scan (0 = One-off scan). |
| `ips` | `[]any` | Defines a list of IP addresses or CIDR blocks to scan. |
| `messages` | `[]any` |  |
| `ports` | `[]any` | Defines a list of ports to scan. |
| `result` | `map[string]any` |  |
| `success` | `bool` |  |

#### Example: Load

```go
scan, err := client.Scan(nil).Load(map[string]any{"account_id": "account_id", "config_id": "config_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(scan) // the loaded record
```

#### Example: List

```go
scans, err := client.Scan(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(scans) // the array of records
```

#### Example: Create

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


### Tag

Create an instance: `tag := client.Tag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeDuration` | `string` |  |
| `activeDuration_annotated` | `map[string]any` |  |
| `actorCategory` | `string` |  |
| `actorCategory_annotated` | `map[string]any` |  |
| `aliasGroupNames` | `[]any` |  |
| `aliasGroupNamesInternal` | `[]any` |  |
| `aliases` | `[]any` | Structured aliases ({ value, confidence 1-10, tlp }). |
| `attributionOrganization` | `string` |  |
| `attributionOrganization_annotated` | `map[string]any` |  |
| `categoryName` | `string` |  |
| `categoryUuid` | `string` | Tag type (category) UUID. |
| `confidence` | `int` | Overall tag confidence (1-10). |
| `createdAt` | `string` |  |
| `dateOfDiscovery` | `string` | Date of discovery (ISO YYYY-MM-DD). |
| `description` | `string` |  |
| `externalReferenceLinks` | `[]any` |  |
| `externalReferences` | `[]any` | Structured external references ({ url, description }). |
| `externalReferences_annotated` | `[]any` |  |
| `id` | `string` |  |
| `internalAliases` | `[]any` | Internal structured aliases ({ value, confidence 1-10, tlp }). |
| `internalDescription` | `string` |  |
| `lastSeen` | `string` |  |
| `metadata` | `map[string]any` | Updated metadata. |
| `motive` | `string` |  |
| `motive_annotated` | `map[string]any` |  |
| `opsecLevel` | `string` |  |
| `opsecLevel_annotated` | `map[string]any` |  |
| `originCountryISO` | `string` | ISO country code (alpha-2 or alpha-3). |
| `originCountryISO_annotated` | `map[string]any` |  |
| `priority` | `float64` |  |
| `priority_annotated` | `map[string]any` |  |
| `properties` | `map[string]any` | Parsed custom field values. |
| `sophisticationLevel` | `string` |  |
| `sophisticationLevel_annotated` | `map[string]any` |  |
| `tlp` | `string` | Tag-level TLP handling marking. |
| `type` | `string` | Updated relationship type. |
| `updatedAt` | `string` |  |
| `uuid` | `string` |  |
| `value` | `string` |  |
| `version` | `float64` |  |

#### Example: Load

```go
tag, err := client.Tag(nil).Load(map[string]any{"id": "tag_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tag) // the loaded record
```

#### Example: List

```go
tags, err := client.Tag(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tags) // the array of records
```

#### Example: Create

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


### TagCategory

Create an instance: `tagCategory := client.TagCategory(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `schema` | `[]any` | Parsed FieldDefinition[] defining custom fields for this category, or null if none. |
| `updatedAt` | `string` |  |
| `uuid` | `string` |  |

#### Example: Load

```go
tagCategory, err := client.TagCategory(nil).Load(map[string]any{"id": "tag_category_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tagCategory) // the loaded record
```

#### Example: List

```go
tagCategorys, err := client.TagCategory(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tagCategorys) // the array of records
```

#### Example: Create

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


### TargetIndustry

Create an instance: `targetIndustry := client.TargetIndustry(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `type` | `string` |  |

#### Example: Load

```go
targetIndustry, err := client.TargetIndustry(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(targetIndustry) // the loaded record
```


### ThreatSignal

Create an instance: `threatSignal := client.ThreatSignal(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category_id` | `string` | One of the predefined Threat Signals feed categories; see GET /:account_id/v2/threat-signals/categories. |
| `category_uuids` | `[]any` |  |
| `config` | `string` |  |
| `display_name` | `string` |  |
| `display_order` | `int` |  |
| `enabled` | `bool` |  |
| `errors` | `[]any` |  |
| `feeds` | `[]any` |  |
| `is_active` | `bool` |  |
| `message` | `string` |  |
| `messages` | `[]any` |  |
| `name` | `string` |  |
| `opted_out` | `bool` |  |
| `output_schema` | `string` |  |
| `poll_interval_s` | `int` |  |
| `prompt` | `string` |  |
| `read` | `bool` |  |
| `result` | `any` |  |
| `skill_ids` | `[]any` |  |
| `success` | `bool` |  |
| `tag_id` | `string` |  |
| `title` | `string` |  |
| `url` | `string` |  |
| `why_valuable` | `string` |  |

#### Example: Load

```go
threatSignal, err := client.ThreatSignal(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(threatSignal) // the loaded record
```

#### Example: List

```go
threatSignals, err := client.ThreatSignal(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(threatSignals) // the array of records
```

#### Example: Create

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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/cloudflare-cloudforce-one-sdk/go/
├── cloudflare-cloudforce-one.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/cloudflare-cloudforce-one-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
permission := client.Permission(nil)
permission.List(nil, nil)

// permission.Data() now returns the permission data from the last list
// permission.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
