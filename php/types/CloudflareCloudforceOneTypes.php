<?php
declare(strict_types=1);

// Typed models for the CloudflareCloudforceOne SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Attacker entity data model. */
class Attacker
{
    public string $type;
}

/** Request payload for Attacker#load. */
class AttackerLoadMatch
{
    public string $account_id;
    public ?array $dataset_id = null;
}

/** BinDb entity data model. */
class BinDb
{
    public string $content_type;
    public string $md5;
    public string $sha1;
    public string $sha256;
}

/** Request payload for BinDb#load. */
class BinDbLoadMatch
{
    public string $account_id;
    public string $hash;
}

/** Request payload for BinDb#create. */
class BinDbCreateData
{
    public string $account_id;
    public string $content_type;
    public string $md5;
    public string $sha1;
    public string $sha256;
}

/** BrandProtection entity data model. */
class BrandProtection
{
    public string $action;
    public string $body;
    public string $brand;
    public string $category;
    public ?string $content_type = null;
    public ?bool $createNotice = null;
    public string $createdAt;
    public string $description;
    public bool $dismissed;
    public string $domain;
    public int $domain_id;
    public array $domains;
    public array $errors;
    public array $fields;
    public string $first_seen;
    public ?string $format = null;
    public float $id;
    public string $image_data;
    public string $letterText;
    public string $letterType;
    public float $matchId;
    public string $matchType;
    public ?array $match_details = null;
    public ?array $match_ids = null;
    public string $matched_at;
    public array $matches;
    public ?string $max_time = null;
    public string $message;
    public array $messages;
    public ?string $min_time = null;
    public string $name;
    public array $noticeParams;
    public array $notices;
    public array $public_scans;
    public float $queryId;
    public ?array $queryIds = null;
    public int $query_id;
    public string $r2_path;
    public string $registrar;
    public mixed $result;
    public array $result_info;
    public ?bool $scan = null;
    public ?bool $scan_matches = null;
    public string $scan_status;
    public int $scan_submission_id;
    public ?float $score_threshold = null;
    public ?bool $search_lookback = null;
    public float $similarity_score;
    public float $similarity_threshold;
    public string $source;
    public string $status;
    public array $string_matches;
    public bool $success;
    public string $tag;
    public float $takedownNoticeId;
    public string $templateId;
    public ?int $top_k = null;
    public float $total_analyzed;
    public float $total_matches;
    public bool $truncated;
    public string $updatedAt;
    public string $uploaded_at;
    public string $url_scan_id;
}

/** Request payload for BrandProtection#load. */
class BrandProtectionLoadMatch
{
    public string $account_id;
    public ?int $letter_id = null;
    public ?int $takedown_notice_id = null;
    public ?int $notice_id = null;
    public ?string $template_id = null;
}

/** Request payload for BrandProtection#list. */
class BrandProtectionListMatch
{
    public string $account_id;
    public ?string $domain_search = null;
    public ?string $include_dismissed = null;
    public ?string $include_domain_id = null;
    public ?string $limit = null;
    public ?string $offset = null;
    public ?string $order = null;
    public ?string $order_by = null;
    public ?array $query_id = null;
    public ?string $download = null;
    public ?string $id = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?int $takedown_notice_id = null;
}

/** Request payload for BrandProtection#create. */
class BrandProtectionCreateData
{
    public string $account_id;
    public ?string $download = null;
    public ?string $show_historic = null;
    public ?int $match_id = null;
    public ?int $query_id = null;
    public ?int $takedown_notice_id = null;
    public string $action;
    public string $body;
    public string $brand;
    public string $category;
    public ?string $content_type = null;
    public ?bool $createNotice = null;
    public string $createdAt;
    public string $description;
    public bool $dismissed;
    public string $domain;
    public int $domain_id;
    public array $domains;
    public array $errors;
    public array $fields;
    public string $first_seen;
    public ?string $format = null;
    public float $id;
    public string $image_data;
    public string $letterText;
    public string $letterType;
    public float $matchId;
    public string $matchType;
    public ?array $match_details = null;
    public ?array $match_ids = null;
    public string $matched_at;
    public array $matches;
    public ?string $max_time = null;
    public string $message;
    public array $messages;
    public ?string $min_time = null;
    public string $name;
    public array $noticeParams;
    public array $notices;
    public array $public_scans;
    public float $queryId;
    public ?array $queryIds = null;
    public string $r2_path;
    public string $registrar;
    public mixed $result;
    public array $result_info;
    public ?bool $scan = null;
    public ?bool $scan_matches = null;
    public string $scan_status;
    public int $scan_submission_id;
    public ?float $score_threshold = null;
    public ?bool $search_lookback = null;
    public float $similarity_score;
    public float $similarity_threshold;
    public string $source;
    public string $status;
    public array $string_matches;
    public bool $success;
    public string $tag;
    public float $takedownNoticeId;
    public string $templateId;
    public ?int $top_k = null;
    public float $total_analyzed;
    public float $total_matches;
    public bool $truncated;
    public string $updatedAt;
    public string $uploaded_at;
    public string $url_scan_id;
}

/** Request payload for BrandProtection#update. */
class BrandProtectionUpdateData
{
    public string $account_id;
    public ?int $notice_id = null;
    public ?string $template_id = null;
    public ?string $action = null;
    public ?string $body = null;
    public ?string $brand = null;
    public ?string $category = null;
    public ?string $content_type = null;
    public ?bool $createNotice = null;
    public ?string $createdAt = null;
    public ?string $description = null;
    public ?bool $dismissed = null;
    public ?string $domain = null;
    public ?int $domain_id = null;
    public ?array $domains = null;
    public ?array $errors = null;
    public ?array $fields = null;
    public ?string $first_seen = null;
    public ?string $format = null;
    public ?float $id = null;
    public ?string $image_data = null;
    public ?string $letterText = null;
    public ?string $letterType = null;
    public ?float $matchId = null;
    public ?string $matchType = null;
    public ?array $match_details = null;
    public ?array $match_ids = null;
    public ?string $matched_at = null;
    public ?array $matches = null;
    public ?string $max_time = null;
    public ?string $message = null;
    public ?array $messages = null;
    public ?string $min_time = null;
    public ?string $name = null;
    public ?array $noticeParams = null;
    public ?array $notices = null;
    public ?array $public_scans = null;
    public ?float $queryId = null;
    public ?array $queryIds = null;
    public ?int $query_id = null;
    public ?string $r2_path = null;
    public ?string $registrar = null;
    public mixed $result = null;
    public ?array $result_info = null;
    public ?bool $scan = null;
    public ?bool $scan_matches = null;
    public ?string $scan_status = null;
    public ?int $scan_submission_id = null;
    public ?float $score_threshold = null;
    public ?bool $search_lookback = null;
    public ?float $similarity_score = null;
    public ?float $similarity_threshold = null;
    public ?string $source = null;
    public ?string $status = null;
    public ?array $string_matches = null;
    public ?bool $success = null;
    public ?string $tag = null;
    public ?float $takedownNoticeId = null;
    public ?string $templateId = null;
    public ?int $top_k = null;
    public ?float $total_analyzed = null;
    public ?float $total_matches = null;
    public ?bool $truncated = null;
    public ?string $updatedAt = null;
    public ?string $uploaded_at = null;
    public ?string $url_scan_id = null;
}

/** Request payload for BrandProtection#remove. */
class BrandProtectionRemoveMatch
{
    public string $account_id;
    public ?int $letter_id = null;
    public ?int $takedown_notice_id = null;
    public ?int $notice_id = null;
    public ?string $query_id = null;
    public ?string $template_id = null;
}

/** Category entity data model. */
class Category
{
    public ?string $id = null;
    public float $killChain;
    public ?array $mitreAttack = null;
    public ?array $mitreCapec = null;
    public string $name;
    public ?string $shortname = null;
    public string $uuid;
}

/** Request payload for Category#load. */
class CategoryLoadMatch
{
    public string $account_id;
    public ?string $category_id = null;
    public ?string $id = null;
}

/** Request payload for Category#list. */
class CategoryListMatch
{
    public string $account_id;
    public ?array $dataset_id = null;
}

/** Request payload for Category#create. */
class CategoryCreateData
{
    public string $account_id;
    public ?string $category_id = null;
    public ?string $id = null;
    public float $killChain;
    public ?array $mitreAttack = null;
    public ?array $mitreCapec = null;
    public string $name;
    public ?string $shortname = null;
    public string $uuid;
}

/** Request payload for Category#update. */
class CategoryUpdateData
{
    public string $account_id;
    public ?string $category_id = null;
    public ?string $id = null;
    public ?float $killChain = null;
    public ?array $mitreAttack = null;
    public ?array $mitreCapec = null;
    public ?string $name = null;
    public ?string $shortname = null;
    public ?string $uuid = null;
}

/** Request payload for Category#remove. */
class CategoryRemoveMatch
{
    public string $account_id;
    public ?string $category_id = null;
    public ?string $id = null;
}

/** CloudforceOneAccountExemption entity data model. */
class CloudforceOneAccountExemption
{
    public array $namespace;
    public array $tag_match;
    public array $worker_name;
}

/** Request payload for CloudforceOneAccountExemption#list. */
class CloudforceOneAccountExemptionListMatch
{
    public string $account_id;
}

/** Request payload for CloudforceOneAccountExemption#create. */
class CloudforceOneAccountExemptionCreateData
{
    public string $account_id;
    public array $namespace;
    public array $tag_match;
    public array $worker_name;
}

/** Request payload for CloudforceOneAccountExemption#update. */
class CloudforceOneAccountExemptionUpdateData
{
    public string $account_id;
    public ?array $namespace = null;
    public ?array $tag_match = null;
    public ?array $worker_name = null;
}

/** Request payload for CloudforceOneAccountExemption#remove. */
class CloudforceOneAccountExemptionRemoveMatch
{
    public string $account_id;
}

/** CloudforceOneDeleteAll entity data model. */
class CloudforceOneDeleteAll
{
}

/** Request payload for CloudforceOneDeleteAll#remove. */
class CloudforceOneDeleteAllRemoveMatch
{
    public string $account_id;
}

/** CloudforceOneEditApproval entity data model. */
class CloudforceOneEditApproval
{
    public array $condition;
    public ?string $description = null;
    public ?bool $enabled = null;
    public ?string $id = null;
    public ?array $meta = null;
    public string $name;
    public ?string $status = null;
    public ?array $strings = null;
}

/** Request payload for CloudforceOneEditApproval#create. */
class CloudforceOneEditApprovalCreateData
{
    public string $account_id;
    public string $approval_id;
    public ?string $module = null;
    public array $condition;
    public ?string $description = null;
    public ?bool $enabled = null;
    public ?string $id = null;
    public ?array $meta = null;
    public string $name;
    public ?string $status = null;
    public ?array $strings = null;
}

/** Request payload for CloudforceOneEditApproval#update. */
class CloudforceOneEditApprovalUpdateData
{
    public string $account_id;
    public string $id;
    public ?string $module = null;
    public ?array $condition = null;
    public ?string $description = null;
    public ?bool $enabled = null;
    public ?array $meta = null;
    public ?string $name = null;
    public ?string $status = null;
    public ?array $strings = null;
}

/** CloudforceOneEmailRuleValidation entity data model. */
class CloudforceOneEmailRuleValidation
{
    public ?string $compiled_yara = null;
    public array $condition;
    public ?string $description = null;
    public ?bool $enabled = null;
    public ?string $error = null;
    public ?string $existing_rule_id = null;
    public ?array $meta = null;
    public string $name;
    public ?string $status = null;
    public ?array $strings = null;
    public bool $valid;
}

/** Request payload for CloudforceOneEmailRuleValidation#create. */
class CloudforceOneEmailRuleValidationCreateData
{
    public string $account_id;
    public ?string $compiled_yara = null;
    public array $condition;
    public ?string $description = null;
    public ?bool $enabled = null;
    public ?string $error = null;
    public ?string $existing_rule_id = null;
    public ?array $meta = null;
    public string $name;
    public ?string $status = null;
    public ?array $strings = null;
    public bool $valid;
}

/** CloudforceOneEmailRulesList entity data model. */
class CloudforceOneEmailRulesList
{
    public ?string $content = null;
    public float $created_at;
    public string $created_by;
    public string $description;
    public bool $enabled;
    public string $id;
    public bool $is_public;
    public ?array $meta = null;
    public string $name;
    public array $namespaces;
    public string $path;
    public float $pending_approval_id;
    public array $pending_change;
    public ?string $structured_source = null;
    public float $updated_at;
    public string $updated_by;
}

/** Request payload for CloudforceOneEmailRulesList#list. */
class CloudforceOneEmailRulesListListMatch
{
    public string $account_id;
    public ?float $limit = null;
    public ?float $offset = null;
    public ?string $search = null;
}

/** CloudforceOneRequestsApiResponseCommon entity data model. */
class CloudforceOneRequestsApiResponseCommon
{
}

/** Request payload for CloudforceOneRequestsApiResponseCommon#remove. */
class CloudforceOneRequestsApiResponseCommonRemoveMatch
{
    public string $account_id;
    public ?string $asset_id = null;
    public ?string $request_id = null;
    public ?int $message_id = null;
    public ?string $priority_id = null;
}

/** CloudforceOneRule entity data model. */
class CloudforceOneRule
{
    public ?array $actions = null;
    public ?string $commit_message = null;
    public string $content;
    public ?string $description = null;
    public ?bool $enabled = null;
    public ?bool $is_public = null;
    public ?array $meta = null;
    public string $name;
    public ?array $namespaces = null;
    public string $path;
}

/** Request payload for CloudforceOneRule#create. */
class CloudforceOneRuleCreateData
{
    public string $account_id;
    public ?array $actions = null;
    public ?string $commit_message = null;
    public string $content;
    public ?string $description = null;
    public ?bool $enabled = null;
    public ?bool $is_public = null;
    public ?array $meta = null;
    public string $name;
    public ?array $namespaces = null;
    public string $path;
}

/** CloudforceOneRuleApprovalDetail entity data model. */
class CloudforceOneRuleApprovalDetail
{
    public float $audit_log_id;
    public bool $can_review;
    public float $cancelled_at;
    public string $cancelled_by;
    public string $change_description;
    public string $change_type;
    public string $commit_message;
    public ?array $compiler_warnings = null;
    public mixed $current_rule;
    public float $id;
    public mixed $proposed_changes;
    public string $rejection_reason;
    public float $requested_at;
    public string $requested_by;
    public float $reviewed_at;
    public string $reviewer_scope;
    public int $revision_number;
    public string $rule_id;
    public string $rule_name;
    public string $status;
    public float $superseded_by_approval_id;
    public float $supersedes_approval_id;
}

/** Request payload for CloudforceOneRuleApprovalDetail#load. */
class CloudforceOneRuleApprovalDetailLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for CloudforceOneRuleApprovalDetail#create. */
class CloudforceOneRuleApprovalDetailCreateData
{
    public string $account_id;
    public string $approval_id;
    public float $audit_log_id;
    public bool $can_review;
    public float $cancelled_at;
    public string $cancelled_by;
    public string $change_description;
    public string $change_type;
    public string $commit_message;
    public ?array $compiler_warnings = null;
    public mixed $current_rule;
    public float $id;
    public mixed $proposed_changes;
    public string $rejection_reason;
    public float $requested_at;
    public string $requested_by;
    public float $reviewed_at;
    public string $reviewer_scope;
    public int $revision_number;
    public string $rule_id;
    public string $rule_name;
    public string $status;
    public float $superseded_by_approval_id;
    public float $supersedes_approval_id;
}

/** CloudforceOneRuleApprovalsList entity data model. */
class CloudforceOneRuleApprovalsList
{
    public float $audit_log_id;
    public bool $can_review;
    public float $cancelled_at;
    public string $cancelled_by;
    public string $change_description;
    public string $change_type;
    public string $commit_message;
    public float $id;
    public mixed $proposed_changes;
    public string $rejection_reason;
    public float $requested_at;
    public string $requested_by;
    public float $reviewed_at;
    public string $reviewer_scope;
    public int $revision_number;
    public string $rule_id;
    public string $rule_name;
    public string $status;
    public float $superseded_by_approval_id;
    public float $supersedes_approval_id;
}

/** Request payload for CloudforceOneRuleApprovalsList#list. */
class CloudforceOneRuleApprovalsListListMatch
{
    public string $account_id;
    public ?string $change_type = null;
    public ?string $latest_only = null;
    public ?float $limit = null;
    public ?float $offset = null;
    public ?string $reviewer_scope = null;
    public ?string $rule_id = null;
    public mixed $status = null;
}

/** CloudforceOneRulePreview entity data model. */
class CloudforceOneRulePreview
{
    public ?string $commit_message = null;
    public array $condition;
    public ?string $content = null;
    public float $created_at;
    public string $created_by;
    public string $description;
    public bool $enabled;
    public string $id;
    public bool $is_public;
    public ?array $meta = null;
    public string $name;
    public array $namespaces;
    public string $path;
    public float $pending_approval_id;
    public array $pending_change;
    public ?string $status = null;
    public ?array $strings = null;
    public ?string $structured_source = null;
    public float $updated_at;
    public string $updated_by;
}

/** Request payload for CloudforceOneRulePreview#load. */
class CloudforceOneRulePreviewLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for CloudforceOneRulePreview#create. */
class CloudforceOneRulePreviewCreateData
{
    public string $account_id;
    public ?string $commit_message = null;
    public array $condition;
    public ?string $content = null;
    public float $created_at;
    public string $created_by;
    public string $description;
    public bool $enabled;
    public string $id;
    public bool $is_public;
    public ?array $meta = null;
    public string $name;
    public array $namespaces;
    public string $path;
    public float $pending_approval_id;
    public array $pending_change;
    public ?string $status = null;
    public ?array $strings = null;
    public ?string $structured_source = null;
    public float $updated_at;
    public string $updated_by;
}

/** Request payload for CloudforceOneRulePreview#update. */
class CloudforceOneRulePreviewUpdateData
{
    public string $account_id;
    public string $id;
    public ?string $commit_message = null;
    public ?array $condition = null;
    public ?string $content = null;
    public ?float $created_at = null;
    public ?string $created_by = null;
    public ?string $description = null;
    public ?bool $enabled = null;
    public ?bool $is_public = null;
    public ?array $meta = null;
    public ?string $name = null;
    public ?array $namespaces = null;
    public ?string $path = null;
    public ?float $pending_approval_id = null;
    public ?array $pending_change = null;
    public ?string $status = null;
    public ?array $strings = null;
    public ?string $structured_source = null;
    public ?float $updated_at = null;
    public ?string $updated_by = null;
}

/** CloudforceOneRulesPreviewList entity data model. */
class CloudforceOneRulesPreviewList
{
    public ?string $content = null;
    public float $created_at;
    public string $created_by;
    public string $description;
    public bool $enabled;
    public string $id;
    public bool $is_public;
    public ?array $meta = null;
    public string $name;
    public array $namespaces;
    public string $path;
    public float $pending_approval_id;
    public array $pending_change;
    public ?string $structured_source = null;
    public float $updated_at;
    public string $updated_by;
}

/** Request payload for CloudforceOneRulesPreviewList#list. */
class CloudforceOneRulesPreviewListListMatch
{
    public string $account_id;
    public ?bool $is_public = null;
    public ?float $limit = null;
    public mixed $namespace = null;
    public ?float $offset = null;
    public ?string $path = null;
    public ?string $recursive = null;
    public ?string $search = null;
}

/** CloudforceOneRulesSearch entity data model. */
class CloudforceOneRulesSearch
{
    public ?string $content = null;
    public float $created_at;
    public string $created_by;
    public string $description;
    public bool $enabled;
    public string $id;
    public bool $is_public;
    public ?array $meta = null;
    public string $name;
    public array $namespaces;
    public string $path;
    public float $pending_approval_id;
    public array $pending_change;
    public ?float $score = null;
    public ?array $scoring_details = null;
    public ?string $structured_source = null;
    public float $updated_at;
    public string $updated_by;
}

/** Request payload for CloudforceOneRulesSearch#list. */
class CloudforceOneRulesSearchListMatch
{
    public string $account_id;
    public ?bool $is_public = null;
    public ?string $language = null;
    public ?float $limit = null;
    public ?string $mode = null;
    public mixed $namespace = null;
    public ?float $offset = null;
    public ?string $path = null;
    public string $query;
    public ?string $recursive = null;
    public ?string $search = null;
}

/** CloudforceOneStat entity data model. */
class CloudforceOneStat
{
}

/** Request payload for CloudforceOneStat#load. */
class CloudforceOneStatLoadMatch
{
    public string $account_id;
}

/** CloudforceOneSuccess entity data model. */
class CloudforceOneSuccess
{
    public ?string $id = null;
    public bool $success;
}

/** Request payload for CloudforceOneSuccess#create. */
class CloudforceOneSuccessCreateData
{
    public string $account_id;
    public string $approval_id;
    public ?string $id = null;
    public bool $success;
}

/** Request payload for CloudforceOneSuccess#remove. */
class CloudforceOneSuccessRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** CloudforceOneTreeNode entity data model. */
class CloudforceOneTreeNode
{
    public array $children;
    public float $count;
    public string $name;
    public string $path;
}

/** Request payload for CloudforceOneTreeNode#list. */
class CloudforceOneTreeNodeListMatch
{
    public string $account_id;
}

/** CloudforceOneValidation entity data model. */
class CloudforceOneValidation
{
    public string $content;
    public ?string $error = null;
    public ?string $excludeRuleId = null;
    public string $name;
    public ?array $namespaces = null;
    public ?string $path = null;
    public bool $valid;
}

/** Request payload for CloudforceOneValidation#create. */
class CloudforceOneValidationCreateData
{
    public string $account_id;
    public string $content;
    public ?string $error = null;
    public ?string $excludeRuleId = null;
    public string $name;
    public ?array $namespaces = null;
    public ?string $path = null;
    public bool $valid;
}

/** Collection entity data model. */
class Collection
{
    public array $columns;
    public string $created_at;
    public string $created_by;
    public array $data;
    public string $id;
    public float $item_count;
    public ?array $metadata = null;
    public string $name;
    public float $position;
    public bool $required;
    public string $status;
    public string $type;
    public string $updated_at;
}

/** Request payload for Collection#load. */
class CollectionLoadMatch
{
    public string $account_id;
    public string $id;
    public ?string $item_id = null;
}

/** Request payload for Collection#list. */
class CollectionListMatch
{
    public string $account_id;
    public ?float $limit = null;
    public ?float $page = null;
}

/** Request payload for Collection#create. */
class CollectionCreateData
{
    public string $account_id;
    public array $columns;
    public string $created_at;
    public string $created_by;
    public array $data;
    public string $id;
    public float $item_count;
    public ?array $metadata = null;
    public string $name;
    public float $position;
    public bool $required;
    public string $status;
    public string $type;
    public string $updated_at;
}

/** Request payload for Collection#update. */
class CollectionUpdateData
{
    public string $account_id;
    public ?string $column_id = null;
    public string $id;
    public ?string $item_id = null;
    public ?array $columns = null;
    public ?string $created_at = null;
    public ?string $created_by = null;
    public ?array $data = null;
    public ?float $item_count = null;
    public ?array $metadata = null;
    public ?string $name = null;
    public ?float $position = null;
    public ?bool $required = null;
    public ?string $status = null;
    public ?string $type = null;
    public ?string $updated_at = null;
}

/** Request payload for Collection#remove. */
class CollectionRemoveMatch
{
    public string $account_id;
    public ?string $column_id = null;
    public string $id;
    public ?string $item_id = null;
}

/** CollectionsItem entity data model. */
class CollectionsItem
{
}

/** Request payload for CollectionsItem#create. */
class CollectionsItemCreateData
{
    public string $account_id;
    public string $collection_id;
}

/** Country entity data model. */
class Country
{
    public array $result;
    public string $success;
}

/** Request payload for Country#list. */
class CountryListMatch
{
    public string $account_id;
}

/** DashboardAsset entity data model. */
class DashboardAsset
{
    public array $assets;
    public array $contentType;
    public array $count;
    public array $downloadable;
    public array $expiresAt;
    public array $fileName;
    public array $fileSize;
    public array $id;
    public array $is_cloudflare_team;
    public array $metadata;
    public array $origin;
    public array $state;
    public array $tlp;
    public array $uploadedAt;
}

/** Request payload for DashboardAsset#load. */
class DashboardAssetLoadMatch
{
    public string $account_id;
    public ?string $asset_id = null;
    public string $project_type;
    public string $request_id;
}

/** Request payload for DashboardAsset#create. */
class DashboardAssetCreateData
{
    public string $account_id;
    public string $project_type;
    public string $request_id;
    public array $assets;
    public array $contentType;
    public array $count;
    public array $downloadable;
    public array $expiresAt;
    public array $fileName;
    public array $fileSize;
    public array $id;
    public array $is_cloudflare_team;
    public array $metadata;
    public array $origin;
    public array $state;
    public array $tlp;
    public array $uploadedAt;
}

/** DashboardUser entity data model. */
class DashboardUser
{
    public ?string $display_name = null;
    public string $id;
}

/** Request payload for DashboardUser#load. */
class DashboardUserLoadMatch
{
    public string $account_id;
    public string $request_id;
}

/** Dataset entity data model. */
class Dataset
{
    public ?string $deletedAt = null;
    public ?string $id = null;
    public string $indicatorWriteMode;
    public bool $isAnalytics;
    public bool $isPublic;
    public string $name;
    public string $uuid;
}

/** Request payload for Dataset#load. */
class DatasetLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for Dataset#list. */
class DatasetListMatch
{
    public string $account_id;
    public ?bool $include_deleted = null;
}

/** Request payload for Dataset#create. */
class DatasetCreateData
{
    public string $account_id;
    public string $id;
    public ?string $deletedAt = null;
    public string $indicatorWriteMode;
    public bool $isAnalytics;
    public bool $isPublic;
    public string $name;
    public string $uuid;
}

/** Request payload for Dataset#update. */
class DatasetUpdateData
{
    public string $account_id;
    public string $id;
    public ?string $deletedAt = null;
    public ?string $indicatorWriteMode = null;
    public ?bool $isAnalytics = null;
    public ?bool $isPublic = null;
    public ?string $name = null;
    public ?string $uuid = null;
}

/** Request payload for Dataset#remove. */
class DatasetRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** Event entity data model. */
class Event
{
    public float $accountId;
    public int $account_id;
    public bool $alert_enabled;
    public bool $alert_rollup_enabled;
    public string $attacker;
    public string $attackerCountry;
    public string $attackerCountryAlpha3;
    public string $category;
    public ?array $childIds = null;
    public string $created;
    public ?string $createdAt = null;
    public float $createdEventsCount;
    public float $createdIndicatorsCount;
    public float $createdRelationshipsCount;
    public string $created_at;
    public ?string $cursor = null;
    public ?int $custom_threat_feed_id = null;
    public string $data;
    public string $datasetId;
    public string $date;
    public float $errorCount;
    public ?array $errors = null;
    public string $event;
    public array $eventIds;
    public float $failedCount;
    public ?array $failures = null;
    public bool $hasChildren;
    public float $id;
    public ?bool $includeCreatedEvents = null;
    public string $indicator;
    public string $indicatorType;
    public float $indicatorTypeId;
    public ?string $insight = null;
    public float $killChain;
    public string $message;
    public array $mitreAttack;
    public array $mitreCapec;
    public string $name;
    public float $numReferenced;
    public float $numReferences;
    public ?string $order = null;
    public ?string $orderBy = null;
    public ?float $page = null;
    public ?float $pageSize = null;
    public string $parentId;
    public string $query_json;
    public ?array $raw = null;
    public string $rawId;
    public array $referenced;
    public array $referencedIds;
    public array $references;
    public array $referencesIds;
    public string $relationshipType;
    public array $relationships;
    public ?float $relationshipsCreated = null;
    public ?string $releasabilityId = null;
    public bool $rule_enabled;
    public ?string $rule_list_id = null;
    public ?string $rule_scope = null;
    public ?array $search = null;
    public string $source;
    public bool $success;
    public array $tags;
    public string $targetCountry;
    public string $targetCountryAlpha3;
    public string $targetIndustry;
    public string $tlp;
    public float $updatedCount;
    public string $updated_at;
    public array $updates;
    public string $user_email;
    public string $uuid;
}

/** Request payload for Event#load. */
class EventLoadMatch
{
    public string $account_id;
    public ?string $dataset_id = null;
    public ?string $event_id = null;
    public ?string $id = null;
    public ?string $raw_id = null;
    public ?int $query_id = null;
}

/** Request payload for Event#list. */
class EventListMatch
{
    public string $account_id;
    public ?string $cache = null;
    public ?string $cursor = null;
    public ?array $dataset_id = null;
    public ?bool $force_refresh = null;
    public ?string $format = null;
    public ?string $order = null;
    public ?string $order_by = null;
    public ?float $page = null;
    public ?float $page_size = null;
    public ?array $search = null;
    public ?string $by_id_id = null;
    public ?string $direction = null;
    public ?bool $include_parent = null;
    public ?array $indicator_type_id = null;
    public ?float $max_depth = null;
    public mixed $relationship_type = null;
}

/** Request payload for Event#create. */
class EventCreateData
{
    public string $account_id;
    public ?string $cache = null;
    public ?bool $force_refresh = null;
    public ?string $format = null;
    public ?string $id = null;
    public ?string $raw_id = null;
    public ?int $query_id = null;
    public float $accountId;
    public bool $alert_enabled;
    public bool $alert_rollup_enabled;
    public string $attacker;
    public string $attackerCountry;
    public string $attackerCountryAlpha3;
    public string $category;
    public ?array $childIds = null;
    public string $created;
    public ?string $createdAt = null;
    public float $createdEventsCount;
    public float $createdIndicatorsCount;
    public float $createdRelationshipsCount;
    public string $created_at;
    public ?string $cursor = null;
    public ?int $custom_threat_feed_id = null;
    public string $data;
    public string $datasetId;
    public string $date;
    public float $errorCount;
    public ?array $errors = null;
    public string $event;
    public array $eventIds;
    public float $failedCount;
    public ?array $failures = null;
    public bool $hasChildren;
    public ?bool $includeCreatedEvents = null;
    public string $indicator;
    public string $indicatorType;
    public float $indicatorTypeId;
    public ?string $insight = null;
    public float $killChain;
    public string $message;
    public array $mitreAttack;
    public array $mitreCapec;
    public string $name;
    public float $numReferenced;
    public float $numReferences;
    public ?string $order = null;
    public ?string $orderBy = null;
    public ?float $page = null;
    public ?float $pageSize = null;
    public string $parentId;
    public string $query_json;
    public ?array $raw = null;
    public string $rawId;
    public array $referenced;
    public array $referencedIds;
    public array $references;
    public array $referencesIds;
    public string $relationshipType;
    public array $relationships;
    public ?float $relationshipsCreated = null;
    public ?string $releasabilityId = null;
    public bool $rule_enabled;
    public ?string $rule_list_id = null;
    public ?string $rule_scope = null;
    public ?array $search = null;
    public string $source;
    public bool $success;
    public array $tags;
    public string $targetCountry;
    public string $targetCountryAlpha3;
    public string $targetIndustry;
    public string $tlp;
    public float $updatedCount;
    public string $updated_at;
    public array $updates;
    public string $user_email;
    public string $uuid;
}

/** Request payload for Event#update. */
class EventUpdateData
{
    public string $account_id;
    public ?string $id = null;
    public ?string $raw_id = null;
    public ?int $query_id = null;
    public ?float $accountId = null;
    public ?bool $alert_enabled = null;
    public ?bool $alert_rollup_enabled = null;
    public ?string $attacker = null;
    public ?string $attackerCountry = null;
    public ?string $attackerCountryAlpha3 = null;
    public ?string $category = null;
    public ?array $childIds = null;
    public ?string $created = null;
    public ?string $createdAt = null;
    public ?float $createdEventsCount = null;
    public ?float $createdIndicatorsCount = null;
    public ?float $createdRelationshipsCount = null;
    public ?string $created_at = null;
    public ?string $cursor = null;
    public ?int $custom_threat_feed_id = null;
    public ?string $data = null;
    public ?string $datasetId = null;
    public ?string $date = null;
    public ?float $errorCount = null;
    public ?array $errors = null;
    public ?string $event = null;
    public ?array $eventIds = null;
    public ?float $failedCount = null;
    public ?array $failures = null;
    public ?bool $hasChildren = null;
    public ?bool $includeCreatedEvents = null;
    public ?string $indicator = null;
    public ?string $indicatorType = null;
    public ?float $indicatorTypeId = null;
    public ?string $insight = null;
    public ?float $killChain = null;
    public ?string $message = null;
    public ?array $mitreAttack = null;
    public ?array $mitreCapec = null;
    public ?string $name = null;
    public ?float $numReferenced = null;
    public ?float $numReferences = null;
    public ?string $order = null;
    public ?string $orderBy = null;
    public ?float $page = null;
    public ?float $pageSize = null;
    public ?string $parentId = null;
    public ?string $query_json = null;
    public ?array $raw = null;
    public ?string $rawId = null;
    public ?array $referenced = null;
    public ?array $referencedIds = null;
    public ?array $references = null;
    public ?array $referencesIds = null;
    public ?string $relationshipType = null;
    public ?array $relationships = null;
    public ?float $relationshipsCreated = null;
    public ?string $releasabilityId = null;
    public ?bool $rule_enabled = null;
    public ?string $rule_list_id = null;
    public ?string $rule_scope = null;
    public ?array $search = null;
    public ?string $source = null;
    public ?bool $success = null;
    public ?array $tags = null;
    public ?string $targetCountry = null;
    public ?string $targetCountryAlpha3 = null;
    public ?string $targetIndustry = null;
    public ?string $tlp = null;
    public ?float $updatedCount = null;
    public ?string $updated_at = null;
    public ?array $updates = null;
    public ?string $user_email = null;
    public ?string $uuid = null;
}

/** Request payload for Event#remove. */
class EventRemoveMatch
{
    public string $account_id;
    public ?string $dataset_id = null;
    public ?array $event_id = null;
    public ?int $query_id = null;
}

/** Group entity data model. */
class Group
{
    public string $createdAt;
    public string $description;
    public ?string $id = null;
    public array $members;
    public string $name;
    public string $updatedAt;
    public string $uuid;
}

/** Request payload for Group#load. */
class GroupLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for Group#list. */
class GroupListMatch
{
    public string $account_id;
}

/** Request payload for Group#create. */
class GroupCreateData
{
    public string $account_id;
    public string $createdAt;
    public string $description;
    public ?string $id = null;
    public array $members;
    public string $name;
    public string $updatedAt;
    public string $uuid;
}

/** Request payload for Group#update. */
class GroupUpdateData
{
    public string $account_id;
    public string $id;
    public ?string $createdAt = null;
    public ?string $description = null;
    public ?array $members = null;
    public ?string $name = null;
    public ?string $updatedAt = null;
    public ?string $uuid = null;
}

/** Request payload for Group#remove. */
class GroupRemoveMatch
{
    public string $account_id;
    public string $id;
    public ?string $member_id = null;
}

/** Indicator entity data model. */
class Indicator
{
    public array $completeness;
    public ?int $confidence = null;
    public string $createdAt;
    public ?string $datasetId = null;
    public ?string $description = null;
    public string $durableObjectId;
    public ?string $id = null;
    public string $indicatorType;
    public array $indicators;
    public string $message;
    public ?array $metadata = null;
    public array $pagination;
    public ?array $relatedEvents = null;
    public array $sources;
    public ?array $tags = null;
    public ?string $tlp = null;
    public ?string $type = null;
    public string $updatedAt;
    public string $uuid;
    public string $value;
}

/** Request payload for Indicator#load. */
class IndicatorLoadMatch
{
    public string $account_id;
    public ?string $cache = null;
    public ?string $created_after = null;
    public ?string $created_before = null;
    public ?string $cursor = null;
    public ?array $dataset_id = null;
    public ?string $format = null;
    public ?bool $include_tag = null;
    public ?bool $include_total_count = null;
    public ?string $indicator_type = null;
    public ?string $name = null;
    public ?float $page = null;
    public ?float $page_size = null;
    public ?array $related_event = null;
    public ?float $related_events_limit = null;
    public ?array $search = null;
    public ?array $tag = null;
    public ?array $tag_search = null;
    public ?string $id = null;
}

/** Request payload for Indicator#list. */
class IndicatorListMatch
{
    public string $account_id;
    public string $dataset_id;
    public ?string $indicator_type = null;
    public ?string $name = null;
    public ?float $page = null;
    public ?float $page_size = null;
    public ?array $related_event = null;
}

/** Request payload for Indicator#create. */
class IndicatorCreateData
{
    public string $account_id;
    public string $dataset_id;
    public array $completeness;
    public ?int $confidence = null;
    public string $createdAt;
    public ?string $datasetId = null;
    public ?string $description = null;
    public string $durableObjectId;
    public ?string $id = null;
    public string $indicatorType;
    public array $indicators;
    public string $message;
    public ?array $metadata = null;
    public array $pagination;
    public ?array $relatedEvents = null;
    public array $sources;
    public ?array $tags = null;
    public ?string $tlp = null;
    public ?string $type = null;
    public string $updatedAt;
    public string $uuid;
    public string $value;
}

/** Request payload for Indicator#update. */
class IndicatorUpdateData
{
    public string $account_id;
    public string $dataset_id;
    public string $id;
    public ?string $rel_uuid = null;
    public ?array $completeness = null;
    public ?int $confidence = null;
    public ?string $createdAt = null;
    public ?string $datasetId = null;
    public ?string $description = null;
    public ?string $durableObjectId = null;
    public ?string $indicatorType = null;
    public ?array $indicators = null;
    public ?string $message = null;
    public ?array $metadata = null;
    public ?array $pagination = null;
    public ?array $relatedEvents = null;
    public ?array $sources = null;
    public ?array $tags = null;
    public ?string $tlp = null;
    public ?string $type = null;
    public ?string $updatedAt = null;
    public ?string $uuid = null;
    public ?string $value = null;
}

/** Request payload for Indicator#remove. */
class IndicatorRemoveMatch
{
    public string $account_id;
    public string $dataset_id;
    public string $id;
    public ?string $rel_uuid = null;
}

/** IndicatorType entity data model. */
class IndicatorType
{
    public string $type;
}

/** Request payload for IndicatorType#load. */
class IndicatorTypeLoadMatch
{
    public string $account_id;
    public ?array $dataset_id = null;
}

/** Permission entity data model. */
class Permission
{
    public string $createdAt;
    public ?string $id = null;
    public ?string $message = null;
    public ?string $resourceId = null;
    public string $resourceType;
    public string $role;
    public string $subjectId;
    public string $subjectType;
    public ?bool $success = null;
    public string $updatedAt;
    public string $uuid;
}

/** Request payload for Permission#list. */
class PermissionListMatch
{
    public string $account_id;
    public string $dataset_id;
}

/** Request payload for Permission#create. */
class PermissionCreateData
{
    public string $account_id;
    public string $dataset_id;
    public string $createdAt;
    public ?string $id = null;
    public ?string $message = null;
    public ?string $resourceId = null;
    public string $resourceType;
    public string $role;
    public string $subjectId;
    public string $subjectType;
    public ?bool $success = null;
    public string $updatedAt;
    public string $uuid;
}

/** Request payload for Permission#update. */
class PermissionUpdateData
{
    public string $account_id;
    public string $dataset_id;
    public string $id;
    public ?string $createdAt = null;
    public ?string $message = null;
    public ?string $resourceId = null;
    public ?string $resourceType = null;
    public ?string $role = null;
    public ?string $subjectId = null;
    public ?string $subjectType = null;
    public ?bool $success = null;
    public ?string $updatedAt = null;
    public ?string $uuid = null;
}

/** Request payload for Permission#remove. */
class PermissionRemoveMatch
{
    public string $account_id;
    public string $dataset_id;
    public string $id;
}

/** Priority entity data model. */
class Priority
{
    public array $errors;
    public ?string $id = null;
    public array $labels;
    public array $messages;
    public int $page;
    public int $per_page;
    public int $priority;
    public string $requirement;
    public mixed $result = null;
    public bool $success;
    public string $tlp;
}

/** Request payload for Priority#load. */
class PriorityLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for Priority#create. */
class PriorityCreateData
{
    public string $account_id;
    public array $errors;
    public ?string $id = null;
    public array $labels;
    public array $messages;
    public int $page;
    public int $per_page;
    public int $priority;
    public string $requirement;
    public mixed $result = null;
    public bool $success;
    public string $tlp;
}

/** Request payload for Priority#update. */
class PriorityUpdateData
{
    public string $account_id;
    public string $id;
    public ?array $errors = null;
    public ?array $labels = null;
    public ?array $messages = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?int $priority = null;
    public ?string $requirement = null;
    public mixed $result = null;
    public ?bool $success = null;
    public ?string $tlp = null;
}

/** PriorityIntelligence entity data model. */
class PriorityIntelligence
{
    public ?string $id = null;
    public ?array $labels = null;
    public ?int $priority = null;
    public string $requirement;
    public ?string $tlp = null;
}

/** Request payload for PriorityIntelligence#load. */
class PriorityIntelligenceLoadMatch
{
    public string $account_id;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $id = null;
}

/** Request payload for PriorityIntelligence#create. */
class PriorityIntelligenceCreateData
{
    public string $account_id;
    public ?string $id = null;
    public ?array $labels = null;
    public ?int $priority = null;
    public string $requirement;
    public ?string $tlp = null;
}

/** Request payload for PriorityIntelligence#update. */
class PriorityIntelligenceUpdateData
{
    public string $account_id;
    public string $id;
    public ?array $labels = null;
    public ?int $priority = null;
    public ?string $requirement = null;
    public ?string $tlp = null;
}

/** Request payload for PriorityIntelligence#remove. */
class PriorityIntelligenceRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** PriorityIntelligenceRequirement entity data model. */
class PriorityIntelligenceRequirement
{
    public ?string $as_of = null;
    public ?int $backtest_days = null;
    public ?int $candidate_limit = null;
    public ?array $dataset_ids = null;
    public string $dimension;
    public ?int $emerging_min_current_count = null;
    public ?bool $enabled = null;
    public ?int $established_min_absolute_delta = null;
    public ?int $established_min_prior_count = null;
    public ?float $established_min_relative_delta = null;
    public string $value;
    public ?int $window_days = null;
}

/** Request payload for PriorityIntelligenceRequirement#load. */
class PriorityIntelligenceRequirementLoadMatch
{
    public string $account_id;
    public ?bool $enabled = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $backtest_id = null;
    public ?string $evaluation_id = null;
}

/** Request payload for PriorityIntelligenceRequirement#create. */
class PriorityIntelligenceRequirementCreateData
{
    public string $account_id;
    public ?string $as_of = null;
    public ?int $backtest_days = null;
    public ?int $candidate_limit = null;
    public ?array $dataset_ids = null;
    public string $dimension;
    public ?int $emerging_min_current_count = null;
    public ?bool $enabled = null;
    public ?int $established_min_absolute_delta = null;
    public ?int $established_min_prior_count = null;
    public ?float $established_min_relative_delta = null;
    public string $value;
    public ?int $window_days = null;
}

/** Request payload for PriorityIntelligenceRequirement#update. */
class PriorityIntelligenceRequirementUpdateData
{
    public string $account_id;
    public string $interest_id;
    public ?string $as_of = null;
    public ?int $backtest_days = null;
    public ?int $candidate_limit = null;
    public ?array $dataset_ids = null;
    public ?string $dimension = null;
    public ?int $emerging_min_current_count = null;
    public ?bool $enabled = null;
    public ?int $established_min_absolute_delta = null;
    public ?int $established_min_prior_count = null;
    public ?float $established_min_relative_delta = null;
    public ?string $value = null;
    public ?int $window_days = null;
}

/** Request payload for PriorityIntelligenceRequirement#remove. */
class PriorityIntelligenceRequirementRemoveMatch
{
    public string $account_id;
    public string $interest_id;
}

/** PriorityIntelligenceRequirementsPir entity data model. */
class PriorityIntelligenceRequirementsPir
{
    public array $errors;
    public array $labels;
    public array $messages;
    public int $priority;
    public string $requirement;
    public mixed $result = null;
    public bool $success;
    public string $tlp;
}

/** Request payload for PriorityIntelligenceRequirementsPir#list. */
class PriorityIntelligenceRequirementsPirListMatch
{
    public string $account_id;
}

/** Request payload for PriorityIntelligenceRequirementsPir#create. */
class PriorityIntelligenceRequirementsPirCreateData
{
    public string $account_id;
    public array $errors;
    public array $labels;
    public array $messages;
    public int $priority;
    public string $requirement;
    public mixed $result = null;
    public bool $success;
    public string $tlp;
}

/** PublicCredentialMonitor entity data model. */
class PublicCredentialMonitor
{
    public string $created_at;
    public string $domain;
    public int $id;
    public string $matched_at;
    public string $username;
}

/** Request payload for PublicCredentialMonitor#list. */
class PublicCredentialMonitorListMatch
{
    public string $account_id;
    public ?string $domain = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $username = null;
}

/** Request payload for PublicCredentialMonitor#create. */
class PublicCredentialMonitorCreateData
{
    public string $account_id;
    public string $created_at;
    public string $domain;
    public int $id;
    public string $matched_at;
    public string $username;
}

/** Request payload for PublicCredentialMonitor#remove. */
class PublicCredentialMonitorRemoveMatch
{
    public string $account_id;
    public int $id;
}

/** Request entity data model. */
class Request
{
    public mixed $completed_after = null;
    public mixed $completed_before = null;
    public ?string $content = null;
    public mixed $created_after = null;
    public mixed $created_before = null;
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public int $page;
    public int $per_page;
    public ?string $priority = null;
    public ?string $request_type = null;
    public array $result;
    public ?string $sort_by = null;
    public ?string $sort_order = null;
    public ?string $status = null;
    public bool $success;
    public ?string $summary = null;
    public ?string $tlp = null;
}

/** Request payload for Request#load. */
class RequestLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for Request#create. */
class RequestCreateData
{
    public string $account_id;
    public mixed $completed_after = null;
    public mixed $completed_before = null;
    public ?string $content = null;
    public mixed $created_after = null;
    public mixed $created_before = null;
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public int $page;
    public int $per_page;
    public ?string $priority = null;
    public ?string $request_type = null;
    public array $result;
    public ?string $sort_by = null;
    public ?string $sort_order = null;
    public ?string $status = null;
    public bool $success;
    public ?string $summary = null;
    public ?string $tlp = null;
}

/** Request payload for Request#update. */
class RequestUpdateData
{
    public string $account_id;
    public string $id;
    public mixed $completed_after = null;
    public mixed $completed_before = null;
    public ?string $content = null;
    public mixed $created_after = null;
    public mixed $created_before = null;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $priority = null;
    public ?string $request_type = null;
    public ?array $result = null;
    public ?string $sort_by = null;
    public ?string $sort_order = null;
    public ?string $status = null;
    public ?bool $success = null;
    public ?string $summary = null;
    public ?string $tlp = null;
}

/** RequestForInformationRfi entity data model. */
class RequestForInformationRfi
{
    public ?string $content = null;
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public ?string $priority = null;
    public ?string $request_type = null;
    public ?array $result = null;
    public ?string $source = null;
    public bool $success;
    public ?string $summary = null;
    public ?string $tlp = null;
}

/** Request payload for RequestForInformationRfi#load. */
class RequestForInformationRfiLoadMatch
{
    public string $account_id;
    public string $asset_id;
    public string $request_id;
}

/** Request payload for RequestForInformationRfi#list. */
class RequestForInformationRfiListMatch
{
    public string $account_id;
}

/** Request payload for RequestForInformationRfi#create. */
class RequestForInformationRfiCreateData
{
    public string $account_id;
    public ?string $request_id = null;
    public ?string $content = null;
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public ?string $priority = null;
    public ?string $request_type = null;
    public ?array $result = null;
    public ?string $source = null;
    public bool $success;
    public ?string $summary = null;
    public ?string $tlp = null;
}

/** Request payload for RequestForInformationRfi#update. */
class RequestForInformationRfiUpdateData
{
    public string $account_id;
    public ?string $asset_id = null;
    public string $request_id;
    public ?int $message_id = null;
    public ?string $content = null;
    public ?array $errors = null;
    public ?string $id = null;
    public ?array $messages = null;
    public ?string $priority = null;
    public ?string $request_type = null;
    public ?array $result = null;
    public ?string $source = null;
    public ?bool $success = null;
    public ?string $summary = null;
    public ?string $tlp = null;
}

/** RequestsDashboard entity data model. */
class RequestsDashboard
{
    public string $created;
    public mixed $defaultValue = null;
    public ?string $description = null;
    public float $displayOrder;
    public array $errors;
    public string $fieldLabel;
    public string $fieldName;
    public string $fieldType;
    public string $id;
    public array $messages;
    public ?array $options = null;
    public string $projectType;
    public string $project_type;
    public bool $public;
    public array $request_types;
    public bool $required;
    public array $result;
    public ?string $sectionID = null;
    public ?string $sectionLabel = null;
    public array $success;
    public float $total;
    public string $updated;
    public ?array $validation = null;
}

/** Request payload for RequestsDashboard#load. */
class RequestsDashboardLoadMatch
{
    public string $account_id;
    public string $project_type;
}

/** Request payload for RequestsDashboard#list. */
class RequestsDashboardListMatch
{
    public string $account_id;
    public ?string $project_type = null;
    public ?string $country = null;
    public ?string $request_type = null;
}

/** Rfi entity data model. */
class Rfi
{
    public array $account;
    public string $assignee;
    public string $completed;
    public string $created;
    public ?string $description = null;
    public ?string $eventId = null;
    public string $id;
    public string $investigation_id;
    public bool $is_free_request;
    public float $message_tokens;
    public ?array $metadata = null;
    public array $pagination;
    public string $priority;
    public string $readable_id;
    public string $release_entitlements;
    public string $report_id;
    public array $request;
    public ?string $request_type = null;
    public array $result;
    public string $status;
    public ?string $subtypeId = null;
    public string $success;
    public string $summary;
    public ?string $title = null;
    public string $tlp;
    public float $tokens;
    public string $updated;
}

/** Request payload for Rfi#load. */
class RfiLoadMatch
{
    public ?string $account_id = null;
    public string $project_type;
    public ?string $assignee = null;
    public ?string $created_by = null;
    public ?string $id = null;
    public ?string $metadata = null;
    public ?string $order = null;
    public ?string $order_by = null;
    public ?float $page = null;
    public ?float $page_size = null;
    public ?string $priority = null;
    public ?string $readable_id = null;
    public ?string $request_type = null;
    public ?string $search = null;
    public ?string $status = null;
    public ?string $summary = null;
    public ?string $tlp = null;
    public ?string $request_id = null;
}

/** Request payload for Rfi#create. */
class RfiCreateData
{
    public string $account_id;
    public string $project_type;
    public array $account;
    public string $assignee;
    public string $completed;
    public string $created;
    public ?string $description = null;
    public ?string $eventId = null;
    public string $id;
    public string $investigation_id;
    public bool $is_free_request;
    public float $message_tokens;
    public ?array $metadata = null;
    public array $pagination;
    public string $priority;
    public string $readable_id;
    public string $release_entitlements;
    public string $report_id;
    public array $request;
    public ?string $request_type = null;
    public array $result;
    public string $status;
    public ?string $subtypeId = null;
    public string $success;
    public string $summary;
    public ?string $title = null;
    public string $tlp;
    public float $tokens;
    public string $updated;
}

/** Request payload for Rfi#update. */
class RfiUpdateData
{
    public string $account_id;
    public string $project_type;
    public string $request_id;
    public ?array $account = null;
    public ?string $assignee = null;
    public ?string $completed = null;
    public ?string $created = null;
    public ?string $description = null;
    public ?string $eventId = null;
    public ?string $id = null;
    public ?string $investigation_id = null;
    public ?bool $is_free_request = null;
    public ?float $message_tokens = null;
    public ?array $metadata = null;
    public ?array $pagination = null;
    public ?string $priority = null;
    public ?string $readable_id = null;
    public ?string $release_entitlements = null;
    public ?string $report_id = null;
    public ?array $request = null;
    public ?string $request_type = null;
    public ?array $result = null;
    public ?string $status = null;
    public ?string $subtypeId = null;
    public ?string $success = null;
    public ?string $summary = null;
    public ?string $title = null;
    public ?string $tlp = null;
    public ?float $tokens = null;
    public ?string $updated = null;
}

/** RfiMessage entity data model. */
class RfiMessage
{
    public ?array $attachment_asset_ids = null;
    public array $attachments;
    public ?string $author_id = null;
    public ?string $author_name = null;
    public string $content;
    public string $created;
    public int $id;
    public bool $is_cloudflare_team;
    public bool $is_published;
    public ?bool $publish = null;
    public string $published;
    public string $tlp;
    public string $updated;
}

/** Request payload for RfiMessage#load. */
class RfiMessageLoadMatch
{
    public string $account_id;
    public string $id;
    public string $project_type;
    public string $request_id;
}

/** Request payload for RfiMessage#list. */
class RfiMessageListMatch
{
    public string $account_id;
    public string $project_type;
    public string $request_id;
    public ?string $page = null;
    public ?string $per_page = null;
}

/** Request payload for RfiMessage#create. */
class RfiMessageCreateData
{
    public string $account_id;
    public string $project_type;
    public string $request_id;
    public ?array $attachment_asset_ids = null;
    public array $attachments;
    public ?string $author_id = null;
    public ?string $author_name = null;
    public string $content;
    public string $created;
    public int $id;
    public bool $is_cloudflare_team;
    public bool $is_published;
    public ?bool $publish = null;
    public string $published;
    public string $tlp;
    public string $updated;
}

/** Request payload for RfiMessage#update. */
class RfiMessageUpdateData
{
    public string $account_id;
    public string $id;
    public string $project_type;
    public string $request_id;
    public ?array $attachment_asset_ids = null;
    public ?array $attachments = null;
    public ?string $author_id = null;
    public ?string $author_name = null;
    public ?string $content = null;
    public ?string $created = null;
    public ?bool $is_cloudflare_team = null;
    public ?bool $is_published = null;
    public ?bool $publish = null;
    public ?string $published = null;
    public ?string $tlp = null;
    public ?string $updated = null;
}

/** Rule entity data model. */
class Rule
{
    public array $arrays;
    public array $headers;
    public array $operators;
    public array $scalars;
    public array $string_arrays;
    public array $structs;
}

/** Request payload for Rule#list. */
class RuleListMatch
{
    public string $account_id;
}

/** Scan entity data model. */
class Scan
{
    public array $errors;
    public ?float $frequency = null;
    public ?array $ips = null;
    public array $messages;
    public ?array $ports = null;
    public array $result;
    public bool $success;
}

/** Request payload for Scan#load. */
class ScanLoadMatch
{
    public string $account_id;
    public string $config_id;
}

/** Request payload for Scan#list. */
class ScanListMatch
{
    public string $account_id;
}

/** Request payload for Scan#create. */
class ScanCreateData
{
    public string $account_id;
    public array $errors;
    public ?float $frequency = null;
    public ?array $ips = null;
    public array $messages;
    public ?array $ports = null;
    public array $result;
    public bool $success;
}

/** Request payload for Scan#update. */
class ScanUpdateData
{
    public string $account_id;
    public string $config_id;
    public ?array $errors = null;
    public ?float $frequency = null;
    public ?array $ips = null;
    public ?array $messages = null;
    public ?array $ports = null;
    public ?array $result = null;
    public ?bool $success = null;
}

/** Request payload for Scan#remove. */
class ScanRemoveMatch
{
    public string $account_id;
    public string $config_id;
}

/** Tag entity data model. */
class Tag
{
    public ?string $activeDuration = null;
    public array $activeDuration_annotated;
    public ?string $actorCategory = null;
    public array $actorCategory_annotated;
    public ?array $aliasGroupNames = null;
    public ?array $aliasGroupNamesInternal = null;
    public ?array $aliases = null;
    public ?string $attributionOrganization = null;
    public array $attributionOrganization_annotated;
    public ?string $categoryName = null;
    public ?string $categoryUuid = null;
    public ?int $confidence = null;
    public ?string $createdAt = null;
    public ?string $dateOfDiscovery = null;
    public ?string $description = null;
    public ?array $externalReferenceLinks = null;
    public ?array $externalReferences = null;
    public ?array $externalReferences_annotated = null;
    public ?string $id = null;
    public ?array $internalAliases = null;
    public ?string $internalDescription = null;
    public ?string $lastSeen = null;
    public ?array $metadata = null;
    public ?string $motive = null;
    public array $motive_annotated;
    public ?string $opsecLevel = null;
    public array $opsecLevel_annotated;
    public ?string $originCountryISO = null;
    public array $originCountryISO_annotated;
    public ?float $priority = null;
    public array $priority_annotated;
    public ?array $properties = null;
    public ?string $sophisticationLevel = null;
    public array $sophisticationLevel_annotated;
    public ?string $tlp = null;
    public ?string $type = null;
    public ?string $updatedAt = null;
    public string $uuid;
    public string $value;
    public ?float $version = null;
}

/** Request payload for Tag#load. */
class TagLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for Tag#list. */
class TagListMatch
{
    public string $account_id;
    public ?string $cache = null;
    public ?string $category_uuid = null;
    public ?array $filter = null;
    public ?float $page = null;
    public ?float $page_size = null;
    public ?string $search = null;
    public ?string $value = null;
}

/** Request payload for Tag#create. */
class TagCreateData
{
    public string $account_id;
    public ?string $id = null;
    public ?string $activeDuration = null;
    public array $activeDuration_annotated;
    public ?string $actorCategory = null;
    public array $actorCategory_annotated;
    public ?array $aliasGroupNames = null;
    public ?array $aliasGroupNamesInternal = null;
    public ?array $aliases = null;
    public ?string $attributionOrganization = null;
    public array $attributionOrganization_annotated;
    public ?string $categoryName = null;
    public ?string $categoryUuid = null;
    public ?int $confidence = null;
    public ?string $createdAt = null;
    public ?string $dateOfDiscovery = null;
    public ?string $description = null;
    public ?array $externalReferenceLinks = null;
    public ?array $externalReferences = null;
    public ?array $externalReferences_annotated = null;
    public ?array $internalAliases = null;
    public ?string $internalDescription = null;
    public ?string $lastSeen = null;
    public ?array $metadata = null;
    public ?string $motive = null;
    public array $motive_annotated;
    public ?string $opsecLevel = null;
    public array $opsecLevel_annotated;
    public ?string $originCountryISO = null;
    public array $originCountryISO_annotated;
    public ?float $priority = null;
    public array $priority_annotated;
    public ?array $properties = null;
    public ?string $sophisticationLevel = null;
    public array $sophisticationLevel_annotated;
    public ?string $tlp = null;
    public ?string $type = null;
    public ?string $updatedAt = null;
    public string $uuid;
    public string $value;
    public ?float $version = null;
}

/** Request payload for Tag#update. */
class TagUpdateData
{
    public string $account_id;
    public string $id;
    public ?string $rel_uuid = null;
    public ?string $dataset_id = null;
    public ?string $activeDuration = null;
    public ?array $activeDuration_annotated = null;
    public ?string $actorCategory = null;
    public ?array $actorCategory_annotated = null;
    public ?array $aliasGroupNames = null;
    public ?array $aliasGroupNamesInternal = null;
    public ?array $aliases = null;
    public ?string $attributionOrganization = null;
    public ?array $attributionOrganization_annotated = null;
    public ?string $categoryName = null;
    public ?string $categoryUuid = null;
    public ?int $confidence = null;
    public ?string $createdAt = null;
    public ?string $dateOfDiscovery = null;
    public ?string $description = null;
    public ?array $externalReferenceLinks = null;
    public ?array $externalReferences = null;
    public ?array $externalReferences_annotated = null;
    public ?array $internalAliases = null;
    public ?string $internalDescription = null;
    public ?string $lastSeen = null;
    public ?array $metadata = null;
    public ?string $motive = null;
    public ?array $motive_annotated = null;
    public ?string $opsecLevel = null;
    public ?array $opsecLevel_annotated = null;
    public ?string $originCountryISO = null;
    public ?array $originCountryISO_annotated = null;
    public ?float $priority = null;
    public ?array $priority_annotated = null;
    public ?array $properties = null;
    public ?string $sophisticationLevel = null;
    public ?array $sophisticationLevel_annotated = null;
    public ?string $tlp = null;
    public ?string $type = null;
    public ?string $updatedAt = null;
    public ?string $uuid = null;
    public ?string $value = null;
    public ?float $version = null;
}

/** Request payload for Tag#remove. */
class TagRemoveMatch
{
    public string $account_id;
    public string $id;
    public ?string $rel_uuid = null;
    public ?string $dataset_id = null;
}

/** TagCategory entity data model. */
class TagCategory
{
    public ?string $createdAt = null;
    public ?string $description = null;
    public ?string $id = null;
    public string $name;
    public ?array $schema = null;
    public ?string $updatedAt = null;
    public string $uuid;
}

/** Request payload for TagCategory#load. */
class TagCategoryLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for TagCategory#list. */
class TagCategoryListMatch
{
    public string $account_id;
    public ?string $search = null;
}

/** Request payload for TagCategory#create. */
class TagCategoryCreateData
{
    public string $account_id;
    public ?string $createdAt = null;
    public ?string $description = null;
    public ?string $id = null;
    public string $name;
    public ?array $schema = null;
    public ?string $updatedAt = null;
    public string $uuid;
}

/** Request payload for TagCategory#update. */
class TagCategoryUpdateData
{
    public string $account_id;
    public string $id;
    public ?string $createdAt = null;
    public ?string $description = null;
    public ?string $name = null;
    public ?array $schema = null;
    public ?string $updatedAt = null;
    public ?string $uuid = null;
}

/** Request payload for TagCategory#remove. */
class TagCategoryRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** TargetIndustry entity data model. */
class TargetIndustry
{
    public string $type;
}

/** Request payload for TargetIndustry#load. */
class TargetIndustryLoadMatch
{
    public string $account_id;
    public ?string $dataset_id = null;
}

/** ThreatSignal entity data model. */
class ThreatSignal
{
    public ?string $category_id = null;
    public array $category_uuids;
    public ?string $config = null;
    public ?string $display_name = null;
    public ?int $display_order = null;
    public ?bool $enabled = null;
    public array $errors;
    public array $feeds;
    public ?bool $is_active = null;
    public string $message;
    public array $messages;
    public ?string $name = null;
    public bool $opted_out;
    public ?string $output_schema = null;
    public ?int $poll_interval_s = null;
    public ?string $prompt = null;
    public bool $read;
    public mixed $result;
    public array $skill_ids;
    public bool $success;
    public string $tag_id;
    public ?string $title = null;
    public ?string $url = null;
    public ?string $why_valuable = null;
}

/** Request payload for ThreatSignal#load. */
class ThreatSignalLoadMatch
{
    public string $account_id;
    public ?string $article_id = null;
    public ?string $format = null;
    public ?string $skill_id = null;
    public ?string $feed_id = null;
}

/** Request payload for ThreatSignal#list. */
class ThreatSignalListMatch
{
    public string $account_id;
    public string $skill_id;
}

/** Request payload for ThreatSignal#create. */
class ThreatSignalCreateData
{
    public string $account_id;
    public ?string $article_id = null;
    public ?string $skill_id = null;
    public ?string $feed_id = null;
    public ?string $category_id = null;
    public array $category_uuids;
    public ?string $config = null;
    public ?string $display_name = null;
    public ?int $display_order = null;
    public ?bool $enabled = null;
    public array $errors;
    public array $feeds;
    public ?bool $is_active = null;
    public string $message;
    public array $messages;
    public ?string $name = null;
    public bool $opted_out;
    public ?string $output_schema = null;
    public ?int $poll_interval_s = null;
    public ?string $prompt = null;
    public bool $read;
    public mixed $result;
    public array $skill_ids;
    public bool $success;
    public string $tag_id;
    public ?string $title = null;
    public ?string $url = null;
    public ?string $why_valuable = null;
}

/** Request payload for ThreatSignal#update. */
class ThreatSignalUpdateData
{
    public string $account_id;
    public ?string $feed_id = null;
    public ?string $skill_id = null;
    public ?string $category_id = null;
    public ?array $category_uuids = null;
    public ?string $config = null;
    public ?string $display_name = null;
    public ?int $display_order = null;
    public ?bool $enabled = null;
    public ?array $errors = null;
    public ?array $feeds = null;
    public ?bool $is_active = null;
    public ?string $message = null;
    public ?array $messages = null;
    public ?string $name = null;
    public ?bool $opted_out = null;
    public ?string $output_schema = null;
    public ?int $poll_interval_s = null;
    public ?string $prompt = null;
    public ?bool $read = null;
    public mixed $result = null;
    public ?array $skill_ids = null;
    public ?bool $success = null;
    public ?string $tag_id = null;
    public ?string $title = null;
    public ?string $url = null;
    public ?string $why_valuable = null;
}

/** Request payload for ThreatSignal#remove. */
class ThreatSignalRemoveMatch
{
    public string $account_id;
    public ?string $article_id = null;
    public ?string $tag_id = null;
    public ?string $curated_feed_id = null;
    public ?string $feed_id = null;
    public ?string $skill_id = null;
}

