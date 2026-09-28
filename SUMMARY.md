# Cloudflare Cloudforce One

Cloudflare Cloudforce One threat operations: requests, findings, reports, intelligence, assets, events, and investigations.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 47 entities and 285 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [Attacker](docs/api/attacker.html)

Results: Returns a list of attackers.

SDK operations: `load`.

### [BinDb](docs/api/bin_db.html)

Results: Returns file information.

SDK operations: `create`, `load`.

### [BrandProtection](docs/api/brand_protection.html)

Results: Scanned images search completed successfully; Match dismissed successfully; Match undismissed successfully; Takedown letter created successfully; Bulk dismiss/undismiss results; Query inserted successfully; Domain analysis results; Letter generated successfully. When format=text, returns V4 JSON with &#123; result: &#123; letter: string &#125; &#125;. When format=pdf, returns binary with Content-Type: application/pdf.; Template created successfully; Logo query inserted successfully; Takedown notice created successfully; Takedown notice lookup results; Successfully retrieved query matches; Successfully retrieved logo matches; Successfully retrieved queries; Successfully retrieved logo queries; Takedown letters listed successfully; Templates listed successfully; Example templates listed successfully; Takedown notices listed successfully; Successfully retrieved total query count; Takedown letter retrieved successfully; Takedown letter PDF downloaded successfully; Takedown notice retrieved successfully; Template retrieved successfully; Domain query updated successfully; Takedown letter deleted successfully; Takedown notice deleted successfully; Domain query deleted successfully; Logo query deleted successfully; Template deleted successfully; Takedown notice updated successfully; Template updated successfully.

SDK operations: `create`, `list`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `content_type`: MIME type of the image (only present when download=true)
- `dismissed`: Whether the match is dismissed. Only present for single-query requests. For multi-query requests, use the dismissed field in each match_details entry.
- `image_data`: Base64-encoded image data (only present when download=true)
- `match_details`: Per-match detail objects with query metadata and individual dismissed state. Only present when multiple query_ids are requested.
- `result_info`: Present on paginated list responses when page or per_page is supplied.

### [Category](docs/api/category.html)

Results: Returns the updated category.; Returns the created category.; Returns a list of categories.; Returns a category.; Returns the uuid of the deleted category.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

### [CloudforceOneAccountExemption](docs/api/cloudforce_one_account_exemption.html)

Results: Full exemption state after the union.; Exemption rules grouped by type.; Full exemption state after the subtraction.; Full exemption state after the updates.

SDK operations: `create`, `list`, `remove`, `update`.

### [CloudforceOneDeleteAll](docs/api/cloudforce_one_delete_all.html)

Results: All rules deleted.

SDK operations: `remove`.

### [CloudforceOneEditApproval](docs/api/cloudforce_one_edit_approval.html)

Results: New approval revision submitted.; Pending approval updated.

SDK operations: `create`, `update`.

Key fields to recognise:

- `condition`: Nested condition groups support up to 10 levels of depth.
- `enabled`: Whether this rule is active for dice consumers.
- `meta`: Structured meta entries for the rule (parsed from content plus any request-supplied meta). Returned in source order.
- `status`: Disposition for matching email.

### [CloudforceOneEmailRuleValidation](docs/api/cloudforce_one_email_rule_validation.html)

Results: Validation result.

SDK operations: `create`.

Key fields to recognise:

- `condition`: Nested condition groups support up to 10 levels of depth.
- `existing_rule_id`: Existing rule ID to exclude from duplicate-name checks when validating an update.
- `status`: Disposition for matching email.

### [CloudforceOneEmailRulesList](docs/api/cloudforce_one_email_rules_list.html)

Results: List of rules.

SDK operations: `list`.

Key fields to recognise:

- `enabled`: Whether this rule is active for dice consumers.
- `is_public`: Whether this rule is visible to other internal accounts.
- `meta`: Structured meta entries for the rule (parsed from content plus any request-supplied meta). Returned in source order.
- `pending_approval_id`: ID of an open approval workflow targeting this rule, or null if none is pending.
- `pending_change`: Proposed update or deletion awaiting approval. The other rule fields describe the currently applied version.

### [CloudforceOneRequestsApiResponseCommon](docs/api/cloudforce_one_requests_api_response_common.html)

Results: Delete request asset response.; Delete request message response.; Delete priority response.; Delete request response.

SDK operations: `remove`.

### [CloudforceOneRule](docs/api/cloudforce_one_rule.html)

Results: Rule created (non-email customer accounts, or silent warning-free customer email rules).; Rule pending approval (internal accounts, blocking customer email rules, and customer email rules with compiler warnings).

SDK operations: `create`.

Key fields to recognise:

- `commit_message`: Human-readable justification for this change.
- `description`: Human-readable description of the rule.
- `enabled`: Whether this rule is active for dice consumers.
- `is_public`: Whether this rule is visible to other internal accounts.
- `meta`: Structured meta entries for the rule (parsed from content plus any request-supplied meta). Returned in source order.

### [CloudforceOneRuleApprovalDetail](docs/api/cloudforce_one_rule_approval_detail.html)

Results: New approval revision submitted.; Approval details.

SDK operations: `create`, `load`.

Key fields to recognise:

- `can_review`: Whether the authenticated user may approve or reject this pending change.
- `cancelled_at`: Time at which the requester cancelled the approval.
- `cancelled_by`: Requester who cancelled the pending approval.
- `commit_message`: The requester supplies this human-readable justification with the change. Internal-account mutations require it; customer accounts and sync-originated changes may omit it.
- `proposed_changes`: Contains structured proposed rule changes, or null for unresolved persisted data.

### [CloudforceOneRuleApprovalsList](docs/api/cloudforce_one_rule_approvals_list.html)

Results: List of approvals.

SDK operations: `list`.

Key fields to recognise:

- `can_review`: Whether the authenticated user may approve or reject this pending change.
- `cancelled_at`: Time at which the requester cancelled the approval.
- `cancelled_by`: Requester who cancelled the pending approval.
- `commit_message`: The requester supplies this human-readable justification with the change. Internal-account mutations require it; customer accounts and sync-originated changes may omit it.
- `proposed_changes`: Contains structured proposed rule changes, or null for unresolved persisted data.

### [CloudforceOneRulePreview](docs/api/cloudforce_one_rule_preview.html)

Results: Test result.; Email rule created immediately when submitted by a customer with silent status and no compiler warnings.; Rule pending approval (internal accounts, blocking customer rules, and customer rules with compiler warnings).; Rule details.; Rule updated immediately when submitted by a customer with silent status and no compiler warnings.; Update pending approval (internal accounts, blocking customer rules, and customer rules with compiler warnings).; Rule updated (non-email customer accounts, or silent warning-free customer email rules).; Update pending approval (internal accounts, blocking customer email rules, and customer email rules with compiler warnings).

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `commit_message`: Human-readable justification for this change.
- `condition`: Nested condition groups support up to 10 levels of depth.
- `description`: Human-readable description of the rule.
- `enabled`: Whether this rule is active for dice consumers.
- `is_public`: Whether this rule is visible to other internal accounts.

### [CloudforceOneRulesPreviewList](docs/api/cloudforce_one_rules_preview_list.html)

Results: List of rules.

SDK operations: `list`.

Key fields to recognise:

- `enabled`: Whether this rule is active for dice consumers.
- `is_public`: Whether this rule is visible to other internal accounts.
- `meta`: Structured meta entries for the rule (parsed from content plus any request-supplied meta). Returned in source order.
- `pending_approval_id`: ID of an open approval workflow targeting this rule, or null if none is pending.
- `pending_change`: Proposed update or deletion awaiting approval. The other rule fields describe the currently applied version.

### [CloudforceOneRulesSearch](docs/api/cloudforce_one_rules_search.html)

Results: Hybrid and semantic rule search results.

SDK operations: `list`.

Key fields to recognise:

- `enabled`: Whether this rule is active for dice consumers.
- `is_public`: Whether this rule is visible to other internal accounts.
- `meta`: Structured meta entries for the rule (parsed from content plus any request-supplied meta). Returned in source order.
- `pending_approval_id`: ID of an open approval workflow targeting this rule, or null if none is pending.
- `pending_change`: Proposed update or deletion awaiting approval. The other rule fields describe the currently applied version.

### [CloudforceOneStat](docs/api/cloudforce_one_stat.html)

Results: Dashboard statistics.

SDK operations: `load`.

### [CloudforceOneSuccess](docs/api/cloudforce_one_success.html)

Results: Approval cancelled; Email rule deleted.; Deletion pending approval (internal accounts and customer email rules).; Rule deleted (non-email customer accounts).

SDK operations: `create`, `remove`.

### [CloudforceOneTreeNode](docs/api/cloudforce_one_tree_node.html)

Results: Folder tree structure.

SDK operations: `list`.

### [CloudforceOneValidation](docs/api/cloudforce_one_validation.html)

Results: Validation result.

SDK operations: `create`.

### [Collection](docs/api/collection.html)

Results: Column added successfully; Items matching search criteria; Collection created successfully; Items retrieved successfully; Collections retrieved successfully; Streaming export response; Item retrieved; Collection retrieved successfully; Column deleted successfully; Item deleted; Collection deleted successfully; Column updated successfully; Item updated; Collection updated successfully.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `name`: New column name (must be unique)
- `position`: Column display order
- `required`: Whether column is required
- `type`: Column type: text, number, boolean, or date

### [CollectionsItem](docs/api/collections_item.html)

Results: Item(s) created successfully.

SDK operations: `create`.

### [Country](docs/api/country.html)

Results: Returns the long and short country code for every country.

SDK operations: `list`.

### [DashboardAsset](docs/api/dashboard_asset.html)

Results: Asset uploaded successfully; Asset file content; Assets listed successfully.

SDK operations: `create`, `load`.

### [DashboardUser](docs/api/dashboard_user.html)

Results: User profile retrieved successfully.

SDK operations: `load`.

Key fields to recognise:

- `display_name`: User display name
- `id`: Unique user ID

### [Dataset](docs/api/dataset.html)

Results: Returns the number of copied events; Returns the number of moved events; Returns dataset information.; Returns population results with counts and any errors; Returns a list of dataset in an account.; Returns a dataset.; Returns the uuid and name of the deleted dataset.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `indicatorWriteMode`: Effective indicator mutation capability after account/dataset authorization and dataset storage capability are applied. API Gateway method permissions are separate and must also allow the requested operation.
- `isPublic`: If true, then anyone can search the dataset.
- `name`: Used to describe the dataset within the account context.

### [Event](docs/api/event.html)

Results: Returns a list of events.; Returns the uuid of the updated raw event and its data.; Returns success if operation succeeded.; Returns the updated event.; Returns the updated event query.; Returns the created event.; Accepted. Events created; indicators queued for async processing.; Returns the number of created bulk events with relationships.; GraphQL response payload (data and errors).; Returns the created event query.; Relationship created successfully; Returns a list of events related to the specified starting event.; Returns merged graph neighborhood from R2 Data Catalog; Returns aggregated event data.; Returns a list of event queries.; Returns the raw event data.; Returns the event.; Returns the raw event.; Returns an event.; Returns the event query.; Returns the number of deleted events.; Event query deleted successfully.; Returns the count of updated events and any failures.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `account_id`: Account ID
- `alert_enabled`: Whether alerts are enabled
- `alert_rollup_enabled`: Whether alert rollup is enabled
- `childIds`: Array of child event UUIDs that were processed
- `createdEventsCount`: Number of events created

### [Group](docs/api/group.html)

Results: Returns the created group member.; Returns the created group.; Returns the group members.; Returns the list of groups.; Return the group.; Group deleted successfully.; Returns the updated group.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

### [Indicator](docs/api/indicator.html)

Results: Returns the created relationship.; Indicator type created successfully; Returns the number of created indicators.; Returns the created indicator.; Returns aggregated indicator data.; Returns a list of indicators.; Returns an array of mirrored tags.; Returns a paginated list of indicators.; Returns edges, optional hydrated entities, counts, and pagination.; Returns the indicator.; Returns whether the relationship was deleted.; Indicator deleted successfully.; Returns the updated relationship.; Returns the updated indicator.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `confidence`: Confidence score 0–100, or null.
- `createdAt`: ISO 8601 creation timestamp.
- `datasetId`: The dataset ID this indicator belongs to. Included in list responses.
- `description`: Optional description for the indicator type
- `indicatorType`: The indicator type to create (for example, &#39;DOMAIN&#39;, &#39;IP&#39;, &#39;URL&#39;, &#39;HASH&#39;, &#39;EMAIL&#39;)

### [IndicatorType](docs/api/indicator_type.html)

Results: Returns a list of indicator types.

SDK operations: `load`.

### [Permission](docs/api/permission.html)

Results: Returns the created permission.; Returns the list of permissions.; Permission deleted successfully; Permission updated successfully.

SDK operations: `create`, `list`, `remove`, `update`.

Key fields to recognise:

- `resourceId`: The resource ID this permission applies to account_id or group_id

### [Priority](docs/api/priority.html)

Results: List priorities response.; Get priority response.; Update priority response.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `id`: UUID.
- `labels`: List of labels.
- `page`: Page number of results.
- `per_page`: Number of results per page.
- `priority`: Priority.

### [PriorityIntelligence](docs/api/priority_intelligence.html)

Results: PIR created successfully; List of PIRs; PIR details; PIR deleted successfully; PIR updated successfully.

SDK operations: `create`, `load`, `remove`, `update`.

### [PriorityIntelligenceRequirement](docs/api/priority_intelligence_requirement.html)

Results: Interest created; Completed account-interest backtest; Completed account-interest evaluation; PIR quota information; Interest list; Persisted evaluation; PIR constants; Interest deleted; Interest updated.

SDK operations: `create`, `load`, `remove`, `update`.

### [PriorityIntelligenceRequirementsPir](docs/api/priority_intelligence_requirements__pir.html)

Results: Create priority response.; Get priority quota response.

SDK operations: `create`, `list`.

Key fields to recognise:

- `labels`: List of labels.
- `priority`: Priority.
- `requirement`: Requirement.
- `success`: Whether the API call was successful.
- `tlp`: The CISA defined Traffic Light Protocol (TLP).

### [PublicCredentialMonitor](docs/api/public_credential_monitor.html)

Results: Domain registered successfully; List of credential matches; List of monitored domains; Domain deleted successfully.

SDK operations: `create`, `list`, `remove`.

Key fields to recognise:

- `domain`: Domain to monitor (for example

### [Request](docs/api/request.html)

Results: List requests response.; Get request response.; Update request response.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `completed_after`: Retrieve requests completed after this time.
- `completed_before`: Retrieve requests completed before this time.
- `content`: Request content.
- `created_after`: Retrieve requests created after this time.
- `created_before`: Retrieve requests created before this time.

### [RequestForInformationRfi](docs/api/request_for_information__rfi.html)

Results: List request assets response.; List request messages response.; Create request asset response.; Create request message response.; Create request response.; Get request constants response.; Get request quota response.; Get request types response.; Get request asset response.; Update request asset response.; Update request message response.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `content`: Content of message.
- `id`: Asset ID.
- `priority`: Priority for analyzing the request.
- `request_type`: Requested information from request.
- `source`: Asset file to upload.

### [RequestsDashboard](docs/api/requests_dashboard.html)

Results: Metadata fields retrieved successfully; Access decision for the JWT user; Request constants retrieved successfully; Quota information; Request types listed successfully.

SDK operations: `list`, `load`.

Key fields to recognise:

- `errors`: Always empty on success
- `messages`: Always empty on success

### [Rfi](docs/api/rfi.html)

Results: Returns the created RFI.; Returns a paginated list of RFIs.; Returns the RFI details with related data.; Returns the updated RFI.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `assignee`: Assignee email
- `completed`: Completion timestamp
- `created`: Creation timestamp
- `description`: RFI description
- `eventId`: Optional related event ID

### [RfiMessage](docs/api/rfi_message.html)

Results: Message created and published. Returns the created message with its embedded attachments[], filtered to the dashboard&#39;s visible origins.; Messages retrieved successfully; Message retrieved successfully; Message updated. Returns the updated message (under `message`) with its embedded attachments[], filtered to the dashboard&#39;s visible origins.

SDK operations: `create`, `list`, `load`, `update`.

### [Rule](docs/api/rule.html)

Results: Managed rules metadata.; Email rule field catalog.

SDK operations: `list`.

### [Scan](docs/api/scan.html)

Results: Returns the created config.; Returns all Scan Configs.; Returns Current Banner Grab Result.; Returns Current Open Ports.; Delete a Scan Config.; Returns the updated config.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `frequency`: Defines the number of days between each scan (0 = One-off scan).
- `ips`: Defines a list of IP addresses or CIDR blocks to scan. The maximum number of total IP addresses allowed is 5000.
- `ports`: Defines a list of ports to scan. Valid values are:&quot;default&quot;, &quot;all&quot;, or a comma-separated list of ports or range of ports (for example [&quot;1-80&quot;, &quot;443&quot;]). &quot;default&quot; scans the 100 most commonly open ports.
- `success`: Whether the API call was successful.

### [Tag](docs/api/tag.html)

Results: Returns the created relationship.; Returns the created tag.; Returns a paginated list of indicators.; Returns a paginated list of tags.; Returns a paginated list of known Actors. Non-CFONE callers receive the public projection documented by this schema.; Returns edges, optional hydrated entities, counts, and pagination.; Returns the tag.; Returns whether the relationship was deleted.; Returns the uuid of the deleted tag.; Returns the updated relationship.; Returns the updated tag.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `aliases`: Structured aliases (&#123; value, confidence 1-10, tlp &#125;). Public: returned to all accounts with per-entry TLP filtering (entries with tlp: purple are removed for non-CFONE accounts).
- `categoryUuid`: Tag type (category) UUID.
- `confidence`: Overall tag confidence (1-10).
- `createdAt`: ISO 8601 creation timestamp.
- `dateOfDiscovery`: Date of discovery (ISO YYYY-MM-DD).

### [TagCategory](docs/api/tag_category.html)

Results: Returns the created tag category.; Returns a list of tag categories.; Returns the tag category.; Returns the uuid of the deleted tag category.; Returns the updated tag category.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `schema`: Parsed FieldDefinition[] defining custom fields for this category, or null if none.

### [TargetIndustry](docs/api/target_industry.html)

Results: Returns a list of target industries for the dataset.; Returns a list of target industries.; Returns all target industries from industry map catalog.

SDK operations: `load`.

### [ThreatSignal](docs/api/threat_signal.html)

Results: Threat Signals response.

SDK operations: `create`, `list`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `category_id`: One of the predefined Threat Signals feed categories; see GET /:account_id/v2/threat-signals/categories.
- `name`: Human-readable display label.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [Attacker](docs/api/attacker.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/events/attackers` | Required |
| [BinDb](docs/api/bin_db.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/binary` | Required |
| [BinDb](docs/api/bin_db.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/binary/{hash}` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/brand-protection/logo/search` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/brand-protection/queries/{query_id}/matches/{domain_id}/dismiss` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/brand-protection/queries/{query_id}/matches/{domain_id}/undismiss` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/brand-protection/takedown-notices/{notice_id}/letters` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/brand-protection/domain/matches/bulk-dismiss` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/brand-protection/domain/queries` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/brand-protection/domain/trial` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/brand-protection/letter/generate` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/brand-protection/letter/templates` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/brand-protection/logo/queries` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/brand-protection/takedown-notices` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/brand-protection/takedown-notices/lookup` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/v2/brand-protection/domain/matches` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/v2/brand-protection/logo/matches` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/v2/brand-protection/domain/queries` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/v2/brand-protection/logo/queries` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/v2/brand-protection/takedown-notices/{notice_id}/letters` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/v2/brand-protection/letter/templates` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/v2/brand-protection/letter/templates/examples` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/v2/brand-protection/takedown-notices` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/v2/brand-protection/total-queries` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/brand-protection/takedown-notices/{notice_id}/letters/{letter_id}` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/brand-protection/takedown-notices/{notice_id}/letters/{letter_id}/pdf` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/brand-protection/takedown-notices/{notice_id}` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/brand-protection/letter/templates/{template_id}` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `patch` | `PATCH /accounts/{account_id}/cloudforce-one/v2/brand-protection/domain/queries/{query_id}` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/v2/brand-protection/takedown-notices/{notice_id}/letters/{letter_id}` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/v2/brand-protection/takedown-notices/{notice_id}` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/v2/brand-protection/domain/queries/{query_id}` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/v2/brand-protection/logo/queries/{query_id}` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/v2/brand-protection/letter/templates/{template_id}` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `update` | `PUT /accounts/{account_id}/cloudforce-one/v2/brand-protection/takedown-notices/{notice_id}` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `update` | `PUT /accounts/{account_id}/cloudforce-one/v2/brand-protection/letter/templates/{template_id}` | Required |
| [Category](docs/api/category.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/events/event-categories/by-id/{category_id}` | Required |
| [Category](docs/api/category.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/events/categories/{category_id}` | Required |
| [Category](docs/api/category.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/events/categories/create` | Required |
| [Category](docs/api/category.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/events/categories` | Required |
| [Category](docs/api/category.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/events/categories/catalog` | Required |
| [Category](docs/api/category.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/events/event-categories/by-id/{category_id}` | Required |
| [Category](docs/api/category.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/events/categories/{category_id}` | Required |
| [Category](docs/api/category.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/events/event-categories/by-id/{category_id}` | Required |
| [Category](docs/api/category.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/events/categories/{category_id}` | Required |
| [Category](docs/api/category.html) | `update` | `PATCH /accounts/{account_id}/cloudforce-one/events/event-categories/by-id/{category_id}` | Required |
| [Category](docs/api/category.html) | `update` | `PATCH /accounts/{account_id}/cloudforce-one/events/categories/{category_id}` | Required |
| [CloudforceOneAccountExemption](docs/api/cloudforce_one_account_exemption.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/rules/exemptions` | Required |
| [CloudforceOneAccountExemption](docs/api/cloudforce_one_account_exemption.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/rules/exemptions` | Required |
| [CloudforceOneAccountExemption](docs/api/cloudforce_one_account_exemption.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/rules/exemptions` | Required |
| [CloudforceOneAccountExemption](docs/api/cloudforce_one_account_exemption.html) | `update` | `PUT /accounts/{account_id}/cloudforce-one/rules/exemptions` | Required |
| [CloudforceOneDeleteAll](docs/api/cloudforce_one_delete_all.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/rules` | Required |
| [CloudforceOneEditApproval](docs/api/cloudforce_one_edit_approval.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/rules/structured/approvals/{id}/resubmit` | Required |
| [CloudforceOneEditApproval](docs/api/cloudforce_one_edit_approval.html) | `update` | `PUT /accounts/{account_id}/cloudforce-one/rules/structured/approvals/{id}` | Required |
| [CloudforceOneEmailRuleValidation](docs/api/cloudforce_one_email_rule_validation.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/rules/structured/validate` | Required |
| [CloudforceOneEmailRulesList](docs/api/cloudforce_one_email_rules_list.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/rules/structured` | Required |
| [CloudforceOneRequestsApiResponseCommon](docs/api/cloudforce_one_requests_api_response_common.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/requests/{request_id}/asset/{asset_id}` | Required |
| [CloudforceOneRequestsApiResponseCommon](docs/api/cloudforce_one_requests_api_response_common.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/requests/{request_id}/message/{message_id}` | Required |
| [CloudforceOneRequestsApiResponseCommon](docs/api/cloudforce_one_requests_api_response_common.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/requests/priority/{priority_id}` | Required |
| [CloudforceOneRequestsApiResponseCommon](docs/api/cloudforce_one_requests_api_response_common.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/requests/{request_id}` | Required |
| [CloudforceOneRule](docs/api/cloudforce_one_rule.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/rules` | Required |
| [CloudforceOneRuleApprovalDetail](docs/api/cloudforce_one_rule_approval_detail.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/rules/approvals/{id}/resubmit` | Required |
| [CloudforceOneRuleApprovalDetail](docs/api/cloudforce_one_rule_approval_detail.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/rules/approvals/{id}` | Required |
| [CloudforceOneRuleApprovalsList](docs/api/cloudforce_one_rule_approvals_list.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/rules/approvals` | Required |
| [CloudforceOneRulePreview](docs/api/cloudforce_one_rule_preview.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/rules/structured/{id}/test` | Required |
| [CloudforceOneRulePreview](docs/api/cloudforce_one_rule_preview.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/rules/structured` | Required |
| [CloudforceOneRulePreview](docs/api/cloudforce_one_rule_preview.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/rules/structured/{id}` | Required |
| [CloudforceOneRulePreview](docs/api/cloudforce_one_rule_preview.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/rules/{id}` | Required |
| [CloudforceOneRulePreview](docs/api/cloudforce_one_rule_preview.html) | `update` | `PUT /accounts/{account_id}/cloudforce-one/rules/structured/{id}` | Required |
| [CloudforceOneRulePreview](docs/api/cloudforce_one_rule_preview.html) | `update` | `PUT /accounts/{account_id}/cloudforce-one/rules/{id}` | Required |
| [CloudforceOneRulesPreviewList](docs/api/cloudforce_one_rules_preview_list.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/rules` | Required |
| [CloudforceOneRulesSearch](docs/api/cloudforce_one_rules_search.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/rules/search` | Required |
| [CloudforceOneStat](docs/api/cloudforce_one_stat.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/rules/stats` | Required |
| [CloudforceOneSuccess](docs/api/cloudforce_one_success.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/rules/approvals/{id}/cancel` | Required |
| [CloudforceOneSuccess](docs/api/cloudforce_one_success.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/rules/structured/{id}` | Required |
| [CloudforceOneSuccess](docs/api/cloudforce_one_success.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/rules/{id}` | Required |
| [CloudforceOneTreeNode](docs/api/cloudforce_one_tree_node.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/rules/tree` | Required |
| [CloudforceOneValidation](docs/api/cloudforce_one_validation.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/rules/validate` | Required |
| [Collection](docs/api/collection.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}/columns` | Required |
| [Collection](docs/api/collection.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}/search` | Required |
| [Collection](docs/api/collection.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/collections` | Required |
| [Collection](docs/api/collection.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}/items` | Required |
| [Collection](docs/api/collection.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/v2/collections` | Required |
| [Collection](docs/api/collection.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}/export` | Required |
| [Collection](docs/api/collection.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}/items/{item_id}` | Required |
| [Collection](docs/api/collection.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}` | Required |
| [Collection](docs/api/collection.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}/columns/{column_id}` | Required |
| [Collection](docs/api/collection.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}/items/{item_id}` | Required |
| [Collection](docs/api/collection.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}` | Required |
| [Collection](docs/api/collection.html) | `update` | `PATCH /accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}/columns/{column_id}` | Required |
| [Collection](docs/api/collection.html) | `update` | `PATCH /accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}/items/{item_id}` | Required |
| [Collection](docs/api/collection.html) | `update` | `PATCH /accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}` | Required |
| [CollectionsItem](docs/api/collections_item.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}/items` | Required |
| [Country](docs/api/country.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/events/countries` | Required |
| [DashboardAsset](docs/api/dashboard_asset.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/assets/upload` | Required |
| [DashboardAsset](docs/api/dashboard_asset.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/assets/{asset_id}/download` | Required |
| [DashboardAsset](docs/api/dashboard_asset.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/assets/list` | Required |
| [DashboardUser](docs/api/dashboard_user.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/user/me` | Required |
| [Dataset](docs/api/dataset.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/copy` | Required |
| [Dataset](docs/api/dataset.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/move` | Required |
| [Dataset](docs/api/dataset.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}` | Required |
| [Dataset](docs/api/dataset.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/events/dataset/create` | Required |
| [Dataset](docs/api/dataset.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/events/datasets/populate` | Required |
| [Dataset](docs/api/dataset.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/events/dataset` | Required |
| [Dataset](docs/api/dataset.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}` | Required |
| [Dataset](docs/api/dataset.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}` | Required |
| [Dataset](docs/api/dataset.html) | `update` | `PATCH /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}` | Required |
| [Event](docs/api/event.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/events` | Required |
| [Event](docs/api/event.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/events/{event_id}/raw/{raw_id}` | Required |
| [Event](docs/api/event.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/events/event_tag/{event_id}/create` | Required |
| [Event](docs/api/event.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/events/{event_id}` | Required |
| [Event](docs/api/event.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/events/queries/{query_id}` | Required |
| [Event](docs/api/event.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/events/relate/{event_id}/create` | Required |
| [Event](docs/api/event.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/events/create` | Required |
| [Event](docs/api/event.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/events/create/bulk` | Required |
| [Event](docs/api/event.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/events/create/bulk/relationships` | Required |
| [Event](docs/api/event.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/events/graphql` | Required |
| [Event](docs/api/event.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/events/queries/create` | Required |
| [Event](docs/api/event.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/events/relationships/create` | Required |
| [Event](docs/api/event.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/events/graphql` | Required |
| [Event](docs/api/event.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/events` | Required |
| [Event](docs/api/event.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/events/by-id/{event_id}/relationships` | Required |
| [Event](docs/api/event.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/events/graph` | Required |
| [Event](docs/api/event.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/events/{event_id}/relationships` | Required |
| [Event](docs/api/event.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/events/aggregate` | Required |
| [Event](docs/api/event.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/events/queries` | Required |
| [Event](docs/api/event.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/events/raw/{dataset_id}/{event_id}` | Required |
| [Event](docs/api/event.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/events/{event_id}` | Required |
| [Event](docs/api/event.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/events/datasets/{dataset_id}/events/{event_id}/raw` | Required |
| [Event](docs/api/event.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/events/{event_id}/raw/{raw_id}` | Required |
| [Event](docs/api/event.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/events/{event_id}` | Required |
| [Event](docs/api/event.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/events/queries/{query_id}` | Required |
| [Event](docs/api/event.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/events/datasets/{dataset_id}/events` | Required |
| [Event](docs/api/event.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/events/{dataset_id}/delete` | Required |
| [Event](docs/api/event.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/events/event_tag/{event_id}` | Required |
| [Event](docs/api/event.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/events/relate/{event_id}` | Required |
| [Event](docs/api/event.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/events/queries/{query_id}` | Required |
| [Event](docs/api/event.html) | `update` | `PATCH /accounts/{account_id}/cloudforce-one/events/{event_id}/raw/{raw_id}` | Required |
| [Event](docs/api/event.html) | `update` | `PATCH /accounts/{account_id}/cloudforce-one/events/{event_id}` | Required |
| [Event](docs/api/event.html) | `update` | `PATCH /accounts/{account_id}/cloudforce-one/events/queries/{query_id}` | Required |
| [Event](docs/api/event.html) | `update` | `PATCH /accounts/{account_id}/cloudforce-one/events/update/bulk` | Required |
| [Group](docs/api/group.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}/members` | Required |
| [Group](docs/api/group.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/events/dataset/-/groups` | Required |
| [Group](docs/api/group.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}/members` | Required |
| [Group](docs/api/group.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/events/dataset/-/groups` | Required |
| [Group](docs/api/group.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}` | Required |
| [Group](docs/api/group.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}/members/{member_id}` | Required |
| [Group](docs/api/group.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}` | Required |
| [Group](docs/api/group.html) | `update` | `PUT /accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}` | Required |
| [Indicator](docs/api/indicator.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/{indicator_id}/relationships` | Required |
| [Indicator](docs/api/indicator.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicatorTypes/create` | Required |
| [Indicator](docs/api/indicator.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/bulk` | Required |
| [Indicator](docs/api/indicator.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/create` | Required |
| [Indicator](docs/api/indicator.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/events/indicators/aggregate` | Required |
| [Indicator](docs/api/indicator.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators` | Required |
| [Indicator](docs/api/indicator.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/tags` | Required |
| [Indicator](docs/api/indicator.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/events/indicators` | Required |
| [Indicator](docs/api/indicator.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/{indicator_id}/relationships` | Required |
| [Indicator](docs/api/indicator.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/{indicator_id}` | Required |
| [Indicator](docs/api/indicator.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/{indicator_id}/relationships/{rel_uuid}` | Required |
| [Indicator](docs/api/indicator.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/{indicator_id}` | Required |
| [Indicator](docs/api/indicator.html) | `update` | `PATCH /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/{indicator_id}/relationships/{rel_uuid}` | Required |
| [Indicator](docs/api/indicator.html) | `update` | `PATCH /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/{indicator_id}` | Required |
| [IndicatorType](docs/api/indicator_type.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/events/indicator-types` | Required |
| [IndicatorType](docs/api/indicator_type.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/events/indicatorTypes` | Required |
| [Permission](docs/api/permission.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/permissions` | Required |
| [Permission](docs/api/permission.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/permissions` | Required |
| [Permission](docs/api/permission.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/permissions/{grant_id}` | Required |
| [Permission](docs/api/permission.html) | `update` | `PUT /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/permissions/{grant_id}` | Required |
| [Priority](docs/api/priority.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/requests/priority` | Required |
| [Priority](docs/api/priority.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/requests/priority/{priority_id}` | Required |
| [Priority](docs/api/priority.html) | `update` | `PUT /accounts/{account_id}/cloudforce-one/requests/priority/{priority_id}` | Required |
| [PriorityIntelligence](docs/api/priority_intelligence.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/priority-intelligence` | Required |
| [PriorityIntelligence](docs/api/priority_intelligence.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/priority-intelligence` | Required |
| [PriorityIntelligence](docs/api/priority_intelligence.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/{priority_id}` | Required |
| [PriorityIntelligence](docs/api/priority_intelligence.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/{priority_id}` | Required |
| [PriorityIntelligence](docs/api/priority_intelligence.html) | `update` | `PUT /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/{priority_id}` | Required |
| [PriorityIntelligenceRequirement](docs/api/priority_intelligence_requirement.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests` | Required |
| [PriorityIntelligenceRequirement](docs/api/priority_intelligence_requirement.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests/backtests` | Required |
| [PriorityIntelligenceRequirement](docs/api/priority_intelligence_requirement.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests/evaluations` | Required |
| [PriorityIntelligenceRequirement](docs/api/priority_intelligence_requirement.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/quota` | Required |
| [PriorityIntelligenceRequirement](docs/api/priority_intelligence_requirement.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests` | Required |
| [PriorityIntelligenceRequirement](docs/api/priority_intelligence_requirement.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests/backtests/{backtest_id}` | Required |
| [PriorityIntelligenceRequirement](docs/api/priority_intelligence_requirement.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests/evaluations/{evaluation_id}` | Required |
| [PriorityIntelligenceRequirement](docs/api/priority_intelligence_requirement.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/constants` | Required |
| [PriorityIntelligenceRequirement](docs/api/priority_intelligence_requirement.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests/{interest_id}` | Required |
| [PriorityIntelligenceRequirement](docs/api/priority_intelligence_requirement.html) | `update` | `PATCH /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests/{interest_id}` | Required |
| [PriorityIntelligenceRequirementsPir](docs/api/priority_intelligence_requirements__pir.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/requests/priority/new` | Required |
| [PriorityIntelligenceRequirementsPir](docs/api/priority_intelligence_requirements__pir.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/requests/priority/quota` | Required |
| [PublicCredentialMonitor](docs/api/public_credential_monitor.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/credential-monitor/domains` | Required |
| [PublicCredentialMonitor](docs/api/public_credential_monitor.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/v2/credential-monitor/matches` | Required |
| [PublicCredentialMonitor](docs/api/public_credential_monitor.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/v2/credential-monitor/domains` | Required |
| [PublicCredentialMonitor](docs/api/public_credential_monitor.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/v2/credential-monitor/domains/{id}` | Required |
| [Request](docs/api/request.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/requests` | Required |
| [Request](docs/api/request.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/requests/{request_id}` | Required |
| [Request](docs/api/request.html) | `update` | `PUT /accounts/{account_id}/cloudforce-one/requests/{request_id}` | Required |
| [RequestForInformationRfi](docs/api/request_for_information__rfi.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/requests/{request_id}/asset` | Required |
| [RequestForInformationRfi](docs/api/request_for_information__rfi.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/requests/{request_id}/message` | Required |
| [RequestForInformationRfi](docs/api/request_for_information__rfi.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/requests/{request_id}/asset/new` | Required |
| [RequestForInformationRfi](docs/api/request_for_information__rfi.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/requests/{request_id}/message/new` | Required |
| [RequestForInformationRfi](docs/api/request_for_information__rfi.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/requests/new` | Required |
| [RequestForInformationRfi](docs/api/request_for_information__rfi.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/requests/constants` | Required |
| [RequestForInformationRfi](docs/api/request_for_information__rfi.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/requests/quota` | Required |
| [RequestForInformationRfi](docs/api/request_for_information__rfi.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/requests/types` | Required |
| [RequestForInformationRfi](docs/api/request_for_information__rfi.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/requests/{request_id}/asset/{asset_id}` | Required |
| [RequestForInformationRfi](docs/api/request_for_information__rfi.html) | `update` | `PUT /accounts/{account_id}/cloudforce-one/requests/{request_id}/asset/{asset_id}` | Required |
| [RequestForInformationRfi](docs/api/request_for_information__rfi.html) | `update` | `PUT /accounts/{account_id}/cloudforce-one/requests/{request_id}/message/{message_id}` | Required |
| [RequestsDashboard](docs/api/requests_dashboard.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/metadata` | Required |
| [RequestsDashboard](docs/api/requests_dashboard.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/v2/requests/legal-response/access-check` | Required |
| [RequestsDashboard](docs/api/requests_dashboard.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/constants` | Required |
| [RequestsDashboard](docs/api/requests_dashboard.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/quota` | Required |
| [RequestsDashboard](docs/api/requests_dashboard.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/types` | Required |
| [Rfi](docs/api/rfi.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}` | Required |
| [Rfi](docs/api/rfi.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}` | Required |
| [Rfi](docs/api/rfi.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}` | Required |
| [Rfi](docs/api/rfi.html) | `update` | `PUT /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}` | Required |
| [RfiMessage](docs/api/rfi_message.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/messages/new` | Required |
| [RfiMessage](docs/api/rfi_message.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/messages` | Required |
| [RfiMessage](docs/api/rfi_message.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/messages/{message_id}` | Required |
| [RfiMessage](docs/api/rfi_message.html) | `update` | `PUT /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/messages/{message_id}` | Required |
| [Rule](docs/api/rule.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/rules/managed` | Required |
| [Rule](docs/api/rule.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/rules/structured/schema` | Required |
| [Scan](docs/api/scan.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/scans/config` | Required |
| [Scan](docs/api/scan.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/scans/config` | Required |
| [Scan](docs/api/scan.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/banner/{config_id}` | Required |
| [Scan](docs/api/scan.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/scans/results/{config_id}` | Required |
| [Scan](docs/api/scan.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/scans/config/{config_id}` | Required |
| [Scan](docs/api/scan.html) | `update` | `PATCH /accounts/{account_id}/cloudforce-one/scans/config/{config_id}` | Required |
| [Tag](docs/api/tag.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}/relationships` | Required |
| [Tag](docs/api/tag.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/events/tags/create` | Required |
| [Tag](docs/api/tag.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/tags/{tag_uuid}/indicators` | Required |
| [Tag](docs/api/tag.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}/indicators` | Required |
| [Tag](docs/api/tag.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/events/tags` | Required |
| [Tag](docs/api/tag.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/events/tags/categories/actors` | Required |
| [Tag](docs/api/tag.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}/relationships` | Required |
| [Tag](docs/api/tag.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}` | Required |
| [Tag](docs/api/tag.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}/relationships/{rel_uuid}` | Required |
| [Tag](docs/api/tag.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}` | Required |
| [Tag](docs/api/tag.html) | `update` | `PATCH /accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}/relationships/{rel_uuid}` | Required |
| [Tag](docs/api/tag.html) | `update` | `PATCH /accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}` | Required |
| [TagCategory](docs/api/tag_category.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/events/tags/categories/create` | Required |
| [TagCategory](docs/api/tag_category.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/events/tags/categories` | Required |
| [TagCategory](docs/api/tag_category.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/events/tag-categories/{category_uuid}` | Required |
| [TagCategory](docs/api/tag_category.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/events/tags/categories/{category_uuid}` | Required |
| [TagCategory](docs/api/tag_category.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/events/tag-categories/{category_uuid}` | Required |
| [TagCategory](docs/api/tag_category.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/events/tags/categories/{category_uuid}` | Required |
| [TagCategory](docs/api/tag_category.html) | `update` | `PATCH /accounts/{account_id}/cloudforce-one/events/tag-categories/{category_uuid}` | Required |
| [TagCategory](docs/api/tag_category.html) | `update` | `PATCH /accounts/{account_id}/cloudforce-one/events/tags/categories/{category_uuid}` | Required |
| [TargetIndustry](docs/api/target_industry.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/targetIndustries` | Required |
| [TargetIndustry](docs/api/target_industry.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/events/targetIndustries` | Required |
| [TargetIndustry](docs/api/target_industry.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/events/targetIndustries/catalog` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/threat-signals/articles/{article_id}/skills/{skill_id}/diagnostic` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/threat-signals/articles/{article_id}/tag` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/threat-signals/articles/{article_id}/tags` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/threat-signals/feeds/poll` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/threat-signals/curated-feeds` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/threat-signals/curated-feeds/bulk` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/threat-signals/feeds` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `create` | `POST /accounts/{account_id}/cloudforce-one/v2/threat-signals/skills` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/v2/threat-signals/articles` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/v2/threat-signals/indicators` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/v2/threat-signals/skills/{skill_id}/tag-categories` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `list` | `GET /accounts/{account_id}/cloudforce-one/v2/threat-signals/categories` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/threat-signals/feeds` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/threat-signals/articles/{article_id}/content` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/threat-signals/articles/{article_id}/skills/{skill_id}/output` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/threat-signals/curated-feeds` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/threat-signals/feeds/{feed_id}/raw` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/threat-signals/skills` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/threat-signals/articles/{article_id}` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/threat-signals/feeds/{feed_id}/skills` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/threat-signals/skills/{skill_id}` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `load` | `GET /accounts/{account_id}/cloudforce-one/v2/threat-signals/health` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `patch` | `PATCH /accounts/{account_id}/cloudforce-one/v2/threat-signals/articles/{article_id}` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `patch` | `PATCH /accounts/{account_id}/cloudforce-one/v2/threat-signals/curated-feeds/{curated_feed_id}` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `patch` | `PATCH /accounts/{account_id}/cloudforce-one/v2/threat-signals/feeds/{feed_id}` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `patch` | `PATCH /accounts/{account_id}/cloudforce-one/v2/threat-signals/skills/{skill_id}` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `patch` | `PATCH /accounts/{account_id}/cloudforce-one/v2/threat-signals/articles` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `patch` | `PATCH /accounts/{account_id}/cloudforce-one/v2/threat-signals/curated-feeds/opt-out` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/v2/threat-signals/articles/{article_id}/tags/{tag_id}` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/v2/threat-signals/curated-feeds/{curated_feed_id}` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/v2/threat-signals/feeds/{feed_id}` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `remove` | `DELETE /accounts/{account_id}/cloudforce-one/v2/threat-signals/skills/{skill_id}` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `update` | `PUT /accounts/{account_id}/cloudforce-one/v2/threat-signals/feeds/{feed_id}/skills` | Required |
| [ThreatSignal](docs/api/threat_signal.html) | `update` | `PUT /accounts/{account_id}/cloudforce-one/v2/threat-signals/skills/{skill_id}/tag-categories` | Required |

## Connect to the API

- Client API: `https://api.cloudflare.com/client/v4`

The default credential is sent in the `X-Auth-Email` header.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [Ruby](docs/sdks/rb.html) | `rb/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `cloudflare-cloudforce-one_list`: List records for an entity. Supported entities: `brand_protection`, `category`, `cloudforce_one_account_exemption`, `cloudforce_one_email_rules_list`, `cloudforce_one_rule_approvals_list`, `cloudforce_one_rules_preview_list`, `cloudforce_one_rules_search`, `cloudforce_one_tree_node`, `collection`, `country`, `dataset`, `event`, `group`, `indicator`, `permission`, `priority_intelligence_requirements__pir`, `public_credential_monitor`, `request_for_information__rfi`, `requests_dashboard`, `rfi_message`, `rule`, `scan`, `tag`, `tag_category`, `threat_signal`.
- `cloudflare-cloudforce-one_load`: Load one record for an entity. Supported entities: `attacker`, `bin_db`, `brand_protection`, `category`, `cloudforce_one_rule_approval_detail`, `cloudforce_one_rule_preview`, `cloudforce_one_stat`, `collection`, `dashboard_asset`, `dashboard_user`, `dataset`, `event`, `group`, `indicator`, `indicator_type`, `priority`, `priority_intelligence`, `priority_intelligence_requirement`, `request`, `request_for_information__rfi`, `requests_dashboard`, `rfi`, `rfi_message`, `scan`, `tag`, `tag_category`, `target_industry`, `threat_signal`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

