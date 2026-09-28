// Typed models for the CloudflareCloudforceOne SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/cloudflare-cloudforce-one-sdk/go/core"
)

// Attacker is the typed data model for the attacker entity.
type Attacker struct {
}

// AttackerLoadMatch is the typed request payload for Attacker.LoadTyped.
type AttackerLoadMatch struct {
	AccountId string `json:"account_id"`
	DatasetId *[]any `json:"dataset_id,omitempty"`
}

// BinDb is the typed data model for the bin_db entity.
type BinDb struct {
}

// BinDbLoadMatch is the typed request payload for BinDb.LoadTyped.
type BinDbLoadMatch struct {
	AccountId string `json:"account_id"`
	Hash string `json:"hash"`
}

// BinDbCreateData is the typed request payload for BinDb.CreateTyped.
type BinDbCreateData struct {
	AccountId string `json:"account_id"`
	ContentType string `json:"content_type"`
	Md5 string `json:"md5"`
	Sha1 string `json:"sha1"`
	Sha256 string `json:"sha256"`
}

// BrandProtection is the typed data model for the brand_protection entity.
type BrandProtection struct {
}

// BrandProtectionLoadMatch is the typed request payload for BrandProtection.LoadTyped.
type BrandProtectionLoadMatch struct {
	AccountId string `json:"account_id"`
	LetterId *int `json:"letter_id,omitempty"`
	TakedownNoticeId *int `json:"takedown_notice_id,omitempty"`
	NoticeId *int `json:"notice_id,omitempty"`
	TemplateId *string `json:"template_id,omitempty"`
}

// BrandProtectionListMatch is the typed request payload for BrandProtection.ListTyped.
type BrandProtectionListMatch struct {
	AccountId string `json:"account_id"`
	DomainSearch *string `json:"domain_search,omitempty"`
	IncludeDismissed *string `json:"include_dismissed,omitempty"`
	IncludeDomainId *string `json:"include_domain_id,omitempty"`
	Limit *string `json:"limit,omitempty"`
	Offset *string `json:"offset,omitempty"`
	Order *string `json:"order,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	QueryId *[]any `json:"query_id,omitempty"`
	Download *string `json:"download,omitempty"`
	Id *string `json:"id,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	TakedownNoticeId *int `json:"takedown_notice_id,omitempty"`
}

// BrandProtectionCreateData is the typed request payload for BrandProtection.CreateTyped.
type BrandProtectionCreateData struct {
	AccountId string `json:"account_id"`
	Download *string `json:"download,omitempty"`
	ShowHistoric *string `json:"show_historic,omitempty"`
	MatchId *int `json:"match_id,omitempty"`
	QueryId *int `json:"query_id,omitempty"`
	TakedownNoticeId *int `json:"takedown_notice_id,omitempty"`
	Action string `json:"action"`
	Body string `json:"body"`
	Brand string `json:"brand"`
	Category string `json:"category"`
	ContentType *string `json:"content_type,omitempty"`
	CreateNotice *bool `json:"createNotice,omitempty"`
	CreatedAt string `json:"createdAt"`
	Description string `json:"description"`
	Dismissed bool `json:"dismissed"`
	Domain string `json:"domain"`
	DomainId int `json:"domain_id"`
	Domains []any `json:"domains"`
	Errors []any `json:"errors"`
	Fields map[string]any `json:"fields"`
	FirstSeen string `json:"first_seen"`
	Format *string `json:"format,omitempty"`
	Id float64 `json:"id"`
	ImageData string `json:"image_data"`
	LetterText string `json:"letterText"`
	LetterType string `json:"letterType"`
	MatchId2 float64 `json:"matchId"`
	MatchType string `json:"matchType"`
	MatchDetails *[]any `json:"match_details,omitempty"`
	MatchIds *[]any `json:"match_ids,omitempty"`
	MatchedAt string `json:"matched_at"`
	Matches []any `json:"matches"`
	MaxTime *string `json:"max_time,omitempty"`
	Message string `json:"message"`
	Messages []any `json:"messages"`
	MinTime *string `json:"min_time,omitempty"`
	Name string `json:"name"`
	NoticeParams map[string]any `json:"noticeParams"`
	Notices []any `json:"notices"`
	PublicScans map[string]any `json:"public_scans"`
	QueryId2 float64 `json:"queryId"`
	QueryIds *[]any `json:"queryIds,omitempty"`
	R2Path string `json:"r2_path"`
	Registrar string `json:"registrar"`
	Result any `json:"result"`
	ResultInfo map[string]any `json:"result_info"`
	Scan *bool `json:"scan,omitempty"`
	ScanMatches *bool `json:"scan_matches,omitempty"`
	ScanStatus string `json:"scan_status"`
	ScanSubmissionId int `json:"scan_submission_id"`
	ScoreThreshold *float64 `json:"score_threshold,omitempty"`
	SearchLookback *bool `json:"search_lookback,omitempty"`
	SimilarityScore float64 `json:"similarity_score"`
	SimilarityThreshold float64 `json:"similarity_threshold"`
	Source string `json:"source"`
	Status string `json:"status"`
	StringMatches []any `json:"string_matches"`
	Success bool `json:"success"`
	Tag string `json:"tag"`
	TakedownNoticeId2 float64 `json:"takedownNoticeId"`
	TemplateId string `json:"templateId"`
	TopK *int `json:"top_k,omitempty"`
	TotalAnalyzed float64 `json:"total_analyzed"`
	TotalMatches float64 `json:"total_matches"`
	Truncated bool `json:"truncated"`
	UpdatedAt string `json:"updatedAt"`
	UploadedAt string `json:"uploaded_at"`
	UrlScanId string `json:"url_scan_id"`
}

// BrandProtectionUpdateData is the typed request payload for BrandProtection.UpdateTyped.
type BrandProtectionUpdateData struct {
	AccountId string `json:"account_id"`
	NoticeId *int `json:"notice_id,omitempty"`
	TemplateId *string `json:"template_id,omitempty"`
	Action *string `json:"action,omitempty"`
	Body *string `json:"body,omitempty"`
	Brand *string `json:"brand,omitempty"`
	Category *string `json:"category,omitempty"`
	ContentType *string `json:"content_type,omitempty"`
	CreateNotice *bool `json:"createNotice,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Description *string `json:"description,omitempty"`
	Dismissed *bool `json:"dismissed,omitempty"`
	Domain *string `json:"domain,omitempty"`
	DomainId *int `json:"domain_id,omitempty"`
	Domains *[]any `json:"domains,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	Fields *map[string]any `json:"fields,omitempty"`
	FirstSeen *string `json:"first_seen,omitempty"`
	Format *string `json:"format,omitempty"`
	Id *float64 `json:"id,omitempty"`
	ImageData *string `json:"image_data,omitempty"`
	LetterText *string `json:"letterText,omitempty"`
	LetterType *string `json:"letterType,omitempty"`
	MatchId *float64 `json:"matchId,omitempty"`
	MatchType *string `json:"matchType,omitempty"`
	MatchDetails *[]any `json:"match_details,omitempty"`
	MatchIds *[]any `json:"match_ids,omitempty"`
	MatchedAt *string `json:"matched_at,omitempty"`
	Matches *[]any `json:"matches,omitempty"`
	MaxTime *string `json:"max_time,omitempty"`
	Message *string `json:"message,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	MinTime *string `json:"min_time,omitempty"`
	Name *string `json:"name,omitempty"`
	NoticeParams *map[string]any `json:"noticeParams,omitempty"`
	Notices *[]any `json:"notices,omitempty"`
	PublicScans *map[string]any `json:"public_scans,omitempty"`
	QueryId *float64 `json:"queryId,omitempty"`
	QueryIds *[]any `json:"queryIds,omitempty"`
	QueryId2 *int `json:"query_id,omitempty"`
	R2Path *string `json:"r2_path,omitempty"`
	Registrar *string `json:"registrar,omitempty"`
	Result *any `json:"result,omitempty"`
	ResultInfo *map[string]any `json:"result_info,omitempty"`
	Scan *bool `json:"scan,omitempty"`
	ScanMatches *bool `json:"scan_matches,omitempty"`
	ScanStatus *string `json:"scan_status,omitempty"`
	ScanSubmissionId *int `json:"scan_submission_id,omitempty"`
	ScoreThreshold *float64 `json:"score_threshold,omitempty"`
	SearchLookback *bool `json:"search_lookback,omitempty"`
	SimilarityScore *float64 `json:"similarity_score,omitempty"`
	SimilarityThreshold *float64 `json:"similarity_threshold,omitempty"`
	Source *string `json:"source,omitempty"`
	Status *string `json:"status,omitempty"`
	StringMatches *[]any `json:"string_matches,omitempty"`
	Success *bool `json:"success,omitempty"`
	Tag *string `json:"tag,omitempty"`
	TakedownNoticeId *float64 `json:"takedownNoticeId,omitempty"`
	TemplateId2 *string `json:"templateId,omitempty"`
	TopK *int `json:"top_k,omitempty"`
	TotalAnalyzed *float64 `json:"total_analyzed,omitempty"`
	TotalMatches *float64 `json:"total_matches,omitempty"`
	Truncated *bool `json:"truncated,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	UploadedAt *string `json:"uploaded_at,omitempty"`
	UrlScanId *string `json:"url_scan_id,omitempty"`
}

// BrandProtectionRemoveMatch is the typed request payload for BrandProtection.RemoveTyped.
type BrandProtectionRemoveMatch struct {
	AccountId string `json:"account_id"`
	LetterId *int `json:"letter_id,omitempty"`
	TakedownNoticeId *int `json:"takedown_notice_id,omitempty"`
	NoticeId *int `json:"notice_id,omitempty"`
	QueryId *string `json:"query_id,omitempty"`
	TemplateId *string `json:"template_id,omitempty"`
}

// Category is the typed data model for the category entity.
type Category struct {
}

// CategoryLoadMatch is the typed request payload for Category.LoadTyped.
type CategoryLoadMatch struct {
	AccountId string `json:"account_id"`
	CategoryId *string `json:"category_id,omitempty"`
	Id *string `json:"id,omitempty"`
}

// CategoryListMatch is the typed request payload for Category.ListTyped.
type CategoryListMatch struct {
	AccountId string `json:"account_id"`
	DatasetId *[]any `json:"dataset_id,omitempty"`
}

// CategoryCreateData is the typed request payload for Category.CreateTyped.
type CategoryCreateData struct {
	AccountId string `json:"account_id"`
	CategoryId *string `json:"category_id,omitempty"`
	Id *string `json:"id,omitempty"`
	KillChain float64 `json:"killChain"`
	MitreAttack *[]any `json:"mitreAttack,omitempty"`
	MitreCapec *[]any `json:"mitreCapec,omitempty"`
	Name string `json:"name"`
	Shortname *string `json:"shortname,omitempty"`
	Uuid string `json:"uuid"`
}

// CategoryUpdateData is the typed request payload for Category.UpdateTyped.
type CategoryUpdateData struct {
	AccountId string `json:"account_id"`
	CategoryId *string `json:"category_id,omitempty"`
	Id *string `json:"id,omitempty"`
	KillChain *float64 `json:"killChain,omitempty"`
	MitreAttack *[]any `json:"mitreAttack,omitempty"`
	MitreCapec *[]any `json:"mitreCapec,omitempty"`
	Name *string `json:"name,omitempty"`
	Shortname *string `json:"shortname,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
}

// CategoryRemoveMatch is the typed request payload for Category.RemoveTyped.
type CategoryRemoveMatch struct {
	AccountId string `json:"account_id"`
	CategoryId *string `json:"category_id,omitempty"`
	Id *string `json:"id,omitempty"`
}

// CloudforceOneAccountExemption is the typed data model for the cloudforce_one_account_exemption entity.
type CloudforceOneAccountExemption struct {
}

// CloudforceOneAccountExemptionListMatch is the typed request payload for CloudforceOneAccountExemption.ListTyped.
type CloudforceOneAccountExemptionListMatch struct {
	AccountId string `json:"account_id"`
}

// CloudforceOneAccountExemptionCreateData is the typed request payload for CloudforceOneAccountExemption.CreateTyped.
type CloudforceOneAccountExemptionCreateData struct {
	AccountId string `json:"account_id"`
	Namespace []any `json:"namespace"`
	TagMatch []any `json:"tag_match"`
	WorkerName []any `json:"worker_name"`
}

// CloudforceOneAccountExemptionUpdateData is the typed request payload for CloudforceOneAccountExemption.UpdateTyped.
type CloudforceOneAccountExemptionUpdateData struct {
	AccountId string `json:"account_id"`
	Namespace *[]any `json:"namespace,omitempty"`
	TagMatch *[]any `json:"tag_match,omitempty"`
	WorkerName *[]any `json:"worker_name,omitempty"`
}

// CloudforceOneAccountExemptionRemoveMatch is the typed request payload for CloudforceOneAccountExemption.RemoveTyped.
type CloudforceOneAccountExemptionRemoveMatch struct {
	AccountId string `json:"account_id"`
}

// CloudforceOneDeleteAll is the typed data model for the cloudforce_one_delete_all entity.
type CloudforceOneDeleteAll struct {
}

// CloudforceOneDeleteAllRemoveMatch is the typed request payload for CloudforceOneDeleteAll.RemoveTyped.
type CloudforceOneDeleteAllRemoveMatch struct {
	AccountId string `json:"account_id"`
}

// CloudforceOneEditApproval is the typed data model for the cloudforce_one_edit_approval entity.
type CloudforceOneEditApproval struct {
}

// CloudforceOneEditApprovalCreateData is the typed request payload for CloudforceOneEditApproval.CreateTyped.
type CloudforceOneEditApprovalCreateData struct {
	AccountId string `json:"account_id"`
	ApprovalId string `json:"approval_id"`
	Module *string `json:"module,omitempty"`
	Condition map[string]any `json:"condition"`
	Description *string `json:"description,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Id *string `json:"id,omitempty"`
	Meta *[]any `json:"meta,omitempty"`
	Name string `json:"name"`
	Status *string `json:"status,omitempty"`
	Strings *[]any `json:"strings,omitempty"`
}

// CloudforceOneEditApprovalUpdateData is the typed request payload for CloudforceOneEditApproval.UpdateTyped.
type CloudforceOneEditApprovalUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Module *string `json:"module,omitempty"`
	Condition *map[string]any `json:"condition,omitempty"`
	Description *string `json:"description,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Meta *[]any `json:"meta,omitempty"`
	Name *string `json:"name,omitempty"`
	Status *string `json:"status,omitempty"`
	Strings *[]any `json:"strings,omitempty"`
}

// CloudforceOneEmailRuleValidation is the typed data model for the cloudforce_one_email_rule_validation entity.
type CloudforceOneEmailRuleValidation struct {
}

// CloudforceOneEmailRuleValidationCreateData is the typed request payload for CloudforceOneEmailRuleValidation.CreateTyped.
type CloudforceOneEmailRuleValidationCreateData struct {
	AccountId string `json:"account_id"`
	CompiledYara *string `json:"compiled_yara,omitempty"`
	Condition map[string]any `json:"condition"`
	Description *string `json:"description,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Error *string `json:"error,omitempty"`
	ExistingRuleId *string `json:"existing_rule_id,omitempty"`
	Meta *[]any `json:"meta,omitempty"`
	Name string `json:"name"`
	Status *string `json:"status,omitempty"`
	Strings *[]any `json:"strings,omitempty"`
	Valid bool `json:"valid"`
}

// CloudforceOneEmailRulesList is the typed data model for the cloudforce_one_email_rules_list entity.
type CloudforceOneEmailRulesList struct {
}

// CloudforceOneEmailRulesListListMatch is the typed request payload for CloudforceOneEmailRulesList.ListTyped.
type CloudforceOneEmailRulesListListMatch struct {
	AccountId string `json:"account_id"`
	Limit *float64 `json:"limit,omitempty"`
	Offset *float64 `json:"offset,omitempty"`
	Search *string `json:"search,omitempty"`
}

// CloudforceOneRequestsApiResponseCommon is the typed data model for the cloudforce_one_requests_api_response_common entity.
type CloudforceOneRequestsApiResponseCommon struct {
}

// CloudforceOneRequestsApiResponseCommonRemoveMatch is the typed request payload for CloudforceOneRequestsApiResponseCommon.RemoveTyped.
type CloudforceOneRequestsApiResponseCommonRemoveMatch struct {
	AccountId string `json:"account_id"`
	AssetId *string `json:"asset_id,omitempty"`
	RequestId *string `json:"request_id,omitempty"`
	MessageId *int `json:"message_id,omitempty"`
	PriorityId *string `json:"priority_id,omitempty"`
}

// CloudforceOneRule is the typed data model for the cloudforce_one_rule entity.
type CloudforceOneRule struct {
}

// CloudforceOneRuleCreateData is the typed request payload for CloudforceOneRule.CreateTyped.
type CloudforceOneRuleCreateData struct {
	AccountId string `json:"account_id"`
	Actions *[]any `json:"actions,omitempty"`
	CommitMessage *string `json:"commit_message,omitempty"`
	Content string `json:"content"`
	Description *string `json:"description,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	IsPublic *bool `json:"is_public,omitempty"`
	Meta *[]any `json:"meta,omitempty"`
	Name string `json:"name"`
	Namespaces *[]any `json:"namespaces,omitempty"`
	Path string `json:"path"`
}

// CloudforceOneRuleApprovalDetail is the typed data model for the cloudforce_one_rule_approval_detail entity.
type CloudforceOneRuleApprovalDetail struct {
}

// CloudforceOneRuleApprovalDetailLoadMatch is the typed request payload for CloudforceOneRuleApprovalDetail.LoadTyped.
type CloudforceOneRuleApprovalDetailLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// CloudforceOneRuleApprovalDetailCreateData is the typed request payload for CloudforceOneRuleApprovalDetail.CreateTyped.
type CloudforceOneRuleApprovalDetailCreateData struct {
	AccountId string `json:"account_id"`
	ApprovalId string `json:"approval_id"`
	AuditLogId float64 `json:"audit_log_id"`
	CanReview bool `json:"can_review"`
	CancelledAt float64 `json:"cancelled_at"`
	CancelledBy string `json:"cancelled_by"`
	ChangeDescription string `json:"change_description"`
	ChangeType string `json:"change_type"`
	CommitMessage string `json:"commit_message"`
	CompilerWarnings *[]any `json:"compiler_warnings,omitempty"`
	CurrentRule any `json:"current_rule"`
	Id float64 `json:"id"`
	ProposedChanges any `json:"proposed_changes"`
	RejectionReason string `json:"rejection_reason"`
	RequestedAt float64 `json:"requested_at"`
	RequestedBy string `json:"requested_by"`
	ReviewedAt float64 `json:"reviewed_at"`
	ReviewerScope string `json:"reviewer_scope"`
	RevisionNumber int `json:"revision_number"`
	RuleId string `json:"rule_id"`
	RuleName string `json:"rule_name"`
	Status string `json:"status"`
	SupersededByApprovalId float64 `json:"superseded_by_approval_id"`
	SupersedesApprovalId float64 `json:"supersedes_approval_id"`
}

// CloudforceOneRuleApprovalsList is the typed data model for the cloudforce_one_rule_approvals_list entity.
type CloudforceOneRuleApprovalsList struct {
}

// CloudforceOneRuleApprovalsListListMatch is the typed request payload for CloudforceOneRuleApprovalsList.ListTyped.
type CloudforceOneRuleApprovalsListListMatch struct {
	AccountId string `json:"account_id"`
	ChangeType *string `json:"change_type,omitempty"`
	LatestOnly *string `json:"latest_only,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Offset *float64 `json:"offset,omitempty"`
	ReviewerScope *string `json:"reviewer_scope,omitempty"`
	RuleId *string `json:"rule_id,omitempty"`
	Status *any `json:"status,omitempty"`
}

// CloudforceOneRulePreview is the typed data model for the cloudforce_one_rule_preview entity.
type CloudforceOneRulePreview struct {
}

// CloudforceOneRulePreviewLoadMatch is the typed request payload for CloudforceOneRulePreview.LoadTyped.
type CloudforceOneRulePreviewLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// CloudforceOneRulePreviewCreateData is the typed request payload for CloudforceOneRulePreview.CreateTyped.
type CloudforceOneRulePreviewCreateData struct {
	AccountId string `json:"account_id"`
	CommitMessage *string `json:"commit_message,omitempty"`
	Condition map[string]any `json:"condition"`
	Content *string `json:"content,omitempty"`
	CreatedAt float64 `json:"created_at"`
	CreatedBy string `json:"created_by"`
	Description string `json:"description"`
	Enabled bool `json:"enabled"`
	Id string `json:"id"`
	IsPublic bool `json:"is_public"`
	Meta *[]any `json:"meta,omitempty"`
	Name string `json:"name"`
	Namespaces []any `json:"namespaces"`
	Path string `json:"path"`
	PendingApprovalId float64 `json:"pending_approval_id"`
	PendingChange map[string]any `json:"pending_change"`
	Status *string `json:"status,omitempty"`
	Strings *[]any `json:"strings,omitempty"`
	StructuredSource *string `json:"structured_source,omitempty"`
	UpdatedAt float64 `json:"updated_at"`
	UpdatedBy string `json:"updated_by"`
}

// CloudforceOneRulePreviewUpdateData is the typed request payload for CloudforceOneRulePreview.UpdateTyped.
type CloudforceOneRulePreviewUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	CommitMessage *string `json:"commit_message,omitempty"`
	Condition *map[string]any `json:"condition,omitempty"`
	Content *string `json:"content,omitempty"`
	CreatedAt *float64 `json:"created_at,omitempty"`
	CreatedBy *string `json:"created_by,omitempty"`
	Description *string `json:"description,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	IsPublic *bool `json:"is_public,omitempty"`
	Meta *[]any `json:"meta,omitempty"`
	Name *string `json:"name,omitempty"`
	Namespaces *[]any `json:"namespaces,omitempty"`
	Path *string `json:"path,omitempty"`
	PendingApprovalId *float64 `json:"pending_approval_id,omitempty"`
	PendingChange *map[string]any `json:"pending_change,omitempty"`
	Status *string `json:"status,omitempty"`
	Strings *[]any `json:"strings,omitempty"`
	StructuredSource *string `json:"structured_source,omitempty"`
	UpdatedAt *float64 `json:"updated_at,omitempty"`
	UpdatedBy *string `json:"updated_by,omitempty"`
}

// CloudforceOneRulesPreviewList is the typed data model for the cloudforce_one_rules_preview_list entity.
type CloudforceOneRulesPreviewList struct {
}

// CloudforceOneRulesPreviewListListMatch is the typed request payload for CloudforceOneRulesPreviewList.ListTyped.
type CloudforceOneRulesPreviewListListMatch struct {
	AccountId string `json:"account_id"`
	IsPublic *bool `json:"is_public,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Namespace *any `json:"namespace,omitempty"`
	Offset *float64 `json:"offset,omitempty"`
	Path *string `json:"path,omitempty"`
	Recursive *string `json:"recursive,omitempty"`
	Search *string `json:"search,omitempty"`
}

// CloudforceOneRulesSearch is the typed data model for the cloudforce_one_rules_search entity.
type CloudforceOneRulesSearch struct {
}

// CloudforceOneRulesSearchListMatch is the typed request payload for CloudforceOneRulesSearch.ListTyped.
type CloudforceOneRulesSearchListMatch struct {
	AccountId string `json:"account_id"`
	IsPublic *bool `json:"is_public,omitempty"`
	Language *string `json:"language,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Namespace *any `json:"namespace,omitempty"`
	Offset *float64 `json:"offset,omitempty"`
	Path *string `json:"path,omitempty"`
	Query string `json:"query"`
	Recursive *string `json:"recursive,omitempty"`
	Search *string `json:"search,omitempty"`
}

// CloudforceOneStat is the typed data model for the cloudforce_one_stat entity.
type CloudforceOneStat struct {
}

// CloudforceOneStatLoadMatch is the typed request payload for CloudforceOneStat.LoadTyped.
type CloudforceOneStatLoadMatch struct {
	AccountId string `json:"account_id"`
}

// CloudforceOneSuccess is the typed data model for the cloudforce_one_success entity.
type CloudforceOneSuccess struct {
}

// CloudforceOneSuccessCreateData is the typed request payload for CloudforceOneSuccess.CreateTyped.
type CloudforceOneSuccessCreateData struct {
	AccountId string `json:"account_id"`
	ApprovalId string `json:"approval_id"`
	Id *string `json:"id,omitempty"`
	Success bool `json:"success"`
}

// CloudforceOneSuccessRemoveMatch is the typed request payload for CloudforceOneSuccess.RemoveTyped.
type CloudforceOneSuccessRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// CloudforceOneTreeNode is the typed data model for the cloudforce_one_tree_node entity.
type CloudforceOneTreeNode struct {
}

// CloudforceOneTreeNodeListMatch is the typed request payload for CloudforceOneTreeNode.ListTyped.
type CloudforceOneTreeNodeListMatch struct {
	AccountId string `json:"account_id"`
}

// CloudforceOneValidation is the typed data model for the cloudforce_one_validation entity.
type CloudforceOneValidation struct {
}

// CloudforceOneValidationCreateData is the typed request payload for CloudforceOneValidation.CreateTyped.
type CloudforceOneValidationCreateData struct {
	AccountId string `json:"account_id"`
	Content string `json:"content"`
	Error *string `json:"error,omitempty"`
	ExcludeRuleId *string `json:"excludeRuleId,omitempty"`
	Name string `json:"name"`
	Namespaces *[]any `json:"namespaces,omitempty"`
	Path *string `json:"path,omitempty"`
	Valid bool `json:"valid"`
}

// Collection is the typed data model for the collection entity.
type Collection struct {
}

// CollectionLoadMatch is the typed request payload for Collection.LoadTyped.
type CollectionLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	ItemId *string `json:"item_id,omitempty"`
}

// CollectionListMatch is the typed request payload for Collection.ListTyped.
type CollectionListMatch struct {
	AccountId string `json:"account_id"`
	Limit *float64 `json:"limit,omitempty"`
	Page *float64 `json:"page,omitempty"`
}

// CollectionCreateData is the typed request payload for Collection.CreateTyped.
type CollectionCreateData struct {
	AccountId string `json:"account_id"`
	Columns []any `json:"columns"`
	CreatedAt string `json:"created_at"`
	CreatedBy string `json:"created_by"`
	Data map[string]any `json:"data"`
	Id string `json:"id"`
	ItemCount float64 `json:"item_count"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Name string `json:"name"`
	Position float64 `json:"position"`
	Required bool `json:"required"`
	Status string `json:"status"`
	Type string `json:"type"`
	UpdatedAt string `json:"updated_at"`
}

// CollectionUpdateData is the typed request payload for Collection.UpdateTyped.
type CollectionUpdateData struct {
	AccountId string `json:"account_id"`
	ColumnId *string `json:"column_id,omitempty"`
	Id string `json:"id"`
	ItemId *string `json:"item_id,omitempty"`
	Columns *[]any `json:"columns,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedBy *string `json:"created_by,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	ItemCount *float64 `json:"item_count,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Name *string `json:"name,omitempty"`
	Position *float64 `json:"position,omitempty"`
	Required *bool `json:"required,omitempty"`
	Status *string `json:"status,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// CollectionRemoveMatch is the typed request payload for Collection.RemoveTyped.
type CollectionRemoveMatch struct {
	AccountId string `json:"account_id"`
	ColumnId *string `json:"column_id,omitempty"`
	Id string `json:"id"`
	ItemId *string `json:"item_id,omitempty"`
}

// CollectionsItem is the typed data model for the collections_item entity.
type CollectionsItem struct {
}

// CollectionsItemCreateData is the typed request payload for CollectionsItem.CreateTyped.
type CollectionsItemCreateData struct {
	AccountId string `json:"account_id"`
	CollectionId string `json:"collection_id"`
}

// Country is the typed data model for the country entity.
type Country struct {
}

// CountryListMatch is the typed request payload for Country.ListTyped.
type CountryListMatch struct {
	AccountId string `json:"account_id"`
}

// DashboardAsset is the typed data model for the dashboard_asset entity.
type DashboardAsset struct {
}

// DashboardAssetLoadMatch is the typed request payload for DashboardAsset.LoadTyped.
type DashboardAssetLoadMatch struct {
	AccountId string `json:"account_id"`
	AssetId *string `json:"asset_id,omitempty"`
	ProjectType string `json:"project_type"`
	RequestId string `json:"request_id"`
}

// DashboardAssetCreateData is the typed request payload for DashboardAsset.CreateTyped.
type DashboardAssetCreateData struct {
	AccountId string `json:"account_id"`
	ProjectType string `json:"project_type"`
	RequestId string `json:"request_id"`
	Assets map[string]any `json:"assets"`
	ContentType map[string]any `json:"contentType"`
	Count map[string]any `json:"count"`
	Downloadable map[string]any `json:"downloadable"`
	ExpiresAt map[string]any `json:"expiresAt"`
	FileName map[string]any `json:"fileName"`
	FileSize map[string]any `json:"fileSize"`
	Id map[string]any `json:"id"`
	IsCloudflareTeam map[string]any `json:"is_cloudflare_team"`
	Metadata map[string]any `json:"metadata"`
	Origin map[string]any `json:"origin"`
	State map[string]any `json:"state"`
	Tlp map[string]any `json:"tlp"`
	UploadedAt map[string]any `json:"uploadedAt"`
}

// DashboardUser is the typed data model for the dashboard_user entity.
type DashboardUser struct {
}

// DashboardUserLoadMatch is the typed request payload for DashboardUser.LoadTyped.
type DashboardUserLoadMatch struct {
	AccountId string `json:"account_id"`
	RequestId string `json:"request_id"`
}

// Dataset is the typed data model for the dataset entity.
type Dataset struct {
}

// DatasetLoadMatch is the typed request payload for Dataset.LoadTyped.
type DatasetLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// DatasetListMatch is the typed request payload for Dataset.ListTyped.
type DatasetListMatch struct {
	AccountId string `json:"account_id"`
	IncludeDeleted *bool `json:"include_deleted,omitempty"`
}

// DatasetCreateData is the typed request payload for Dataset.CreateTyped.
type DatasetCreateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	DeletedAt *string `json:"deletedAt,omitempty"`
	IndicatorWriteMode string `json:"indicatorWriteMode"`
	IsAnalytics bool `json:"isAnalytics"`
	IsPublic bool `json:"isPublic"`
	Name string `json:"name"`
	Uuid string `json:"uuid"`
}

// DatasetUpdateData is the typed request payload for Dataset.UpdateTyped.
type DatasetUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	DeletedAt *string `json:"deletedAt,omitempty"`
	IndicatorWriteMode *string `json:"indicatorWriteMode,omitempty"`
	IsAnalytics *bool `json:"isAnalytics,omitempty"`
	IsPublic *bool `json:"isPublic,omitempty"`
	Name *string `json:"name,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
}

// DatasetRemoveMatch is the typed request payload for Dataset.RemoveTyped.
type DatasetRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// Event is the typed data model for the event entity.
type Event struct {
}

// EventLoadMatch is the typed request payload for Event.LoadTyped.
type EventLoadMatch struct {
	AccountId string `json:"account_id"`
	DatasetId *string `json:"dataset_id,omitempty"`
	EventId *string `json:"event_id,omitempty"`
	Id *string `json:"id,omitempty"`
	RawId *string `json:"raw_id,omitempty"`
	QueryId *int `json:"query_id,omitempty"`
}

// EventListMatch is the typed request payload for Event.ListTyped.
type EventListMatch struct {
	AccountId string `json:"account_id"`
	Cache *string `json:"cache,omitempty"`
	Cursor *string `json:"cursor,omitempty"`
	DatasetId *[]any `json:"dataset_id,omitempty"`
	ForceRefresh *bool `json:"force_refresh,omitempty"`
	Format *string `json:"format,omitempty"`
	Order *string `json:"order,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PageSize *float64 `json:"page_size,omitempty"`
	Search *[]any `json:"search,omitempty"`
	ByIdId *string `json:"by_id_id,omitempty"`
	Direction *string `json:"direction,omitempty"`
	IncludeParent *bool `json:"include_parent,omitempty"`
	IndicatorTypeId *[]any `json:"indicator_type_id,omitempty"`
	MaxDepth *float64 `json:"max_depth,omitempty"`
	RelationshipType *any `json:"relationship_type,omitempty"`
}

// EventCreateData is the typed request payload for Event.CreateTyped.
type EventCreateData struct {
	AccountId string `json:"account_id"`
	Cache *string `json:"cache,omitempty"`
	ForceRefresh *bool `json:"force_refresh,omitempty"`
	Format *string `json:"format,omitempty"`
	Id *string `json:"id,omitempty"`
	RawId *string `json:"raw_id,omitempty"`
	QueryId *int `json:"query_id,omitempty"`
	AccountId2 float64 `json:"accountId"`
	AlertEnabled bool `json:"alert_enabled"`
	AlertRollupEnabled bool `json:"alert_rollup_enabled"`
	Attacker string `json:"attacker"`
	AttackerCountry string `json:"attackerCountry"`
	AttackerCountryAlpha3 string `json:"attackerCountryAlpha3"`
	Category string `json:"category"`
	ChildIds *[]any `json:"childIds,omitempty"`
	Created string `json:"created"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CreatedEventsCount float64 `json:"createdEventsCount"`
	CreatedIndicatorsCount float64 `json:"createdIndicatorsCount"`
	CreatedRelationshipsCount float64 `json:"createdRelationshipsCount"`
	CreatedAt2 string `json:"created_at"`
	Cursor *string `json:"cursor,omitempty"`
	CustomThreatFeedId *int `json:"custom_threat_feed_id,omitempty"`
	Data string `json:"data"`
	DatasetId string `json:"datasetId"`
	Date string `json:"date"`
	ErrorCount float64 `json:"errorCount"`
	Errors *[]any `json:"errors,omitempty"`
	Event string `json:"event"`
	EventIds []any `json:"eventIds"`
	FailedCount float64 `json:"failedCount"`
	Failures *[]any `json:"failures,omitempty"`
	HasChildren bool `json:"hasChildren"`
	IncludeCreatedEvents *bool `json:"includeCreatedEvents,omitempty"`
	Indicator string `json:"indicator"`
	IndicatorType string `json:"indicatorType"`
	IndicatorTypeId float64 `json:"indicatorTypeId"`
	Insight *string `json:"insight,omitempty"`
	KillChain float64 `json:"killChain"`
	Message string `json:"message"`
	MitreAttack []any `json:"mitreAttack"`
	MitreCapec []any `json:"mitreCapec"`
	Name string `json:"name"`
	NumReferenced float64 `json:"numReferenced"`
	NumReferences float64 `json:"numReferences"`
	Order *string `json:"order,omitempty"`
	OrderBy *string `json:"orderBy,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PageSize *float64 `json:"pageSize,omitempty"`
	ParentId string `json:"parentId"`
	QueryJson string `json:"query_json"`
	Raw *map[string]any `json:"raw,omitempty"`
	RawId2 string `json:"rawId"`
	Referenced []any `json:"referenced"`
	ReferencedIds []any `json:"referencedIds"`
	References []any `json:"references"`
	ReferencesIds []any `json:"referencesIds"`
	RelationshipType string `json:"relationshipType"`
	Relationships []any `json:"relationships"`
	RelationshipsCreated *float64 `json:"relationshipsCreated,omitempty"`
	ReleasabilityId *string `json:"releasabilityId,omitempty"`
	RuleEnabled bool `json:"rule_enabled"`
	RuleListId *string `json:"rule_list_id,omitempty"`
	RuleScope *string `json:"rule_scope,omitempty"`
	Search *[]any `json:"search,omitempty"`
	Source string `json:"source"`
	Success bool `json:"success"`
	Tags []any `json:"tags"`
	TargetCountry string `json:"targetCountry"`
	TargetCountryAlpha3 string `json:"targetCountryAlpha3"`
	TargetIndustry string `json:"targetIndustry"`
	Tlp string `json:"tlp"`
	UpdatedCount float64 `json:"updatedCount"`
	UpdatedAt string `json:"updated_at"`
	Updates map[string]any `json:"updates"`
	UserEmail string `json:"user_email"`
	Uuid string `json:"uuid"`
}

// EventUpdateData is the typed request payload for Event.UpdateTyped.
type EventUpdateData struct {
	AccountId string `json:"account_id"`
	Id *string `json:"id,omitempty"`
	RawId *string `json:"raw_id,omitempty"`
	QueryId *int `json:"query_id,omitempty"`
	AccountId2 *float64 `json:"accountId,omitempty"`
	AlertEnabled *bool `json:"alert_enabled,omitempty"`
	AlertRollupEnabled *bool `json:"alert_rollup_enabled,omitempty"`
	Attacker *string `json:"attacker,omitempty"`
	AttackerCountry *string `json:"attackerCountry,omitempty"`
	AttackerCountryAlpha3 *string `json:"attackerCountryAlpha3,omitempty"`
	Category *string `json:"category,omitempty"`
	ChildIds *[]any `json:"childIds,omitempty"`
	Created *string `json:"created,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CreatedEventsCount *float64 `json:"createdEventsCount,omitempty"`
	CreatedIndicatorsCount *float64 `json:"createdIndicatorsCount,omitempty"`
	CreatedRelationshipsCount *float64 `json:"createdRelationshipsCount,omitempty"`
	CreatedAt2 *string `json:"created_at,omitempty"`
	Cursor *string `json:"cursor,omitempty"`
	CustomThreatFeedId *int `json:"custom_threat_feed_id,omitempty"`
	Data *string `json:"data,omitempty"`
	DatasetId *string `json:"datasetId,omitempty"`
	Date *string `json:"date,omitempty"`
	ErrorCount *float64 `json:"errorCount,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	Event *string `json:"event,omitempty"`
	EventIds *[]any `json:"eventIds,omitempty"`
	FailedCount *float64 `json:"failedCount,omitempty"`
	Failures *[]any `json:"failures,omitempty"`
	HasChildren *bool `json:"hasChildren,omitempty"`
	IncludeCreatedEvents *bool `json:"includeCreatedEvents,omitempty"`
	Indicator *string `json:"indicator,omitempty"`
	IndicatorType *string `json:"indicatorType,omitempty"`
	IndicatorTypeId *float64 `json:"indicatorTypeId,omitempty"`
	Insight *string `json:"insight,omitempty"`
	KillChain *float64 `json:"killChain,omitempty"`
	Message *string `json:"message,omitempty"`
	MitreAttack *[]any `json:"mitreAttack,omitempty"`
	MitreCapec *[]any `json:"mitreCapec,omitempty"`
	Name *string `json:"name,omitempty"`
	NumReferenced *float64 `json:"numReferenced,omitempty"`
	NumReferences *float64 `json:"numReferences,omitempty"`
	Order *string `json:"order,omitempty"`
	OrderBy *string `json:"orderBy,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PageSize *float64 `json:"pageSize,omitempty"`
	ParentId *string `json:"parentId,omitempty"`
	QueryJson *string `json:"query_json,omitempty"`
	Raw *map[string]any `json:"raw,omitempty"`
	RawId2 *string `json:"rawId,omitempty"`
	Referenced *[]any `json:"referenced,omitempty"`
	ReferencedIds *[]any `json:"referencedIds,omitempty"`
	References *[]any `json:"references,omitempty"`
	ReferencesIds *[]any `json:"referencesIds,omitempty"`
	RelationshipType *string `json:"relationshipType,omitempty"`
	Relationships *[]any `json:"relationships,omitempty"`
	RelationshipsCreated *float64 `json:"relationshipsCreated,omitempty"`
	ReleasabilityId *string `json:"releasabilityId,omitempty"`
	RuleEnabled *bool `json:"rule_enabled,omitempty"`
	RuleListId *string `json:"rule_list_id,omitempty"`
	RuleScope *string `json:"rule_scope,omitempty"`
	Search *[]any `json:"search,omitempty"`
	Source *string `json:"source,omitempty"`
	Success *bool `json:"success,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	TargetCountry *string `json:"targetCountry,omitempty"`
	TargetCountryAlpha3 *string `json:"targetCountryAlpha3,omitempty"`
	TargetIndustry *string `json:"targetIndustry,omitempty"`
	Tlp *string `json:"tlp,omitempty"`
	UpdatedCount *float64 `json:"updatedCount,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Updates *map[string]any `json:"updates,omitempty"`
	UserEmail *string `json:"user_email,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
}

// EventRemoveMatch is the typed request payload for Event.RemoveTyped.
type EventRemoveMatch struct {
	AccountId string `json:"account_id"`
	DatasetId *string `json:"dataset_id,omitempty"`
	EventId *[]any `json:"event_id,omitempty"`
	QueryId *int `json:"query_id,omitempty"`
}

// Group is the typed data model for the group entity.
type Group struct {
}

// GroupLoadMatch is the typed request payload for Group.LoadTyped.
type GroupLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// GroupListMatch is the typed request payload for Group.ListTyped.
type GroupListMatch struct {
	AccountId string `json:"account_id"`
}

// GroupCreateData is the typed request payload for Group.CreateTyped.
type GroupCreateData struct {
	AccountId string `json:"account_id"`
	CreatedAt string `json:"createdAt"`
	Description string `json:"description"`
	Id *string `json:"id,omitempty"`
	Members []any `json:"members"`
	Name string `json:"name"`
	UpdatedAt string `json:"updatedAt"`
	Uuid string `json:"uuid"`
}

// GroupUpdateData is the typed request payload for Group.UpdateTyped.
type GroupUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Description *string `json:"description,omitempty"`
	Members *[]any `json:"members,omitempty"`
	Name *string `json:"name,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
}

// GroupRemoveMatch is the typed request payload for Group.RemoveTyped.
type GroupRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	MemberId *string `json:"member_id,omitempty"`
}

// Indicator is the typed data model for the indicator entity.
type Indicator struct {
}

// IndicatorLoadMatch is the typed request payload for Indicator.LoadTyped.
type IndicatorLoadMatch struct {
	AccountId string `json:"account_id"`
	Cache *string `json:"cache,omitempty"`
	CreatedAfter *string `json:"created_after,omitempty"`
	CreatedBefore *string `json:"created_before,omitempty"`
	Cursor *string `json:"cursor,omitempty"`
	DatasetId *[]any `json:"dataset_id,omitempty"`
	Format *string `json:"format,omitempty"`
	IncludeTag *bool `json:"include_tag,omitempty"`
	IncludeTotalCount *bool `json:"include_total_count,omitempty"`
	IndicatorType *string `json:"indicator_type,omitempty"`
	Name *string `json:"name,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PageSize *float64 `json:"page_size,omitempty"`
	RelatedEvent *[]any `json:"related_event,omitempty"`
	RelatedEventsLimit *float64 `json:"related_events_limit,omitempty"`
	Search *[]any `json:"search,omitempty"`
	Tag *[]any `json:"tag,omitempty"`
	TagSearch *[]any `json:"tag_search,omitempty"`
	Id *string `json:"id,omitempty"`
}

// IndicatorListMatch is the typed request payload for Indicator.ListTyped.
type IndicatorListMatch struct {
	AccountId string `json:"account_id"`
	DatasetId string `json:"dataset_id"`
	IndicatorType *string `json:"indicator_type,omitempty"`
	Name *string `json:"name,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PageSize *float64 `json:"page_size,omitempty"`
	RelatedEvent *[]any `json:"related_event,omitempty"`
}

// IndicatorCreateData is the typed request payload for Indicator.CreateTyped.
type IndicatorCreateData struct {
	AccountId string `json:"account_id"`
	DatasetId string `json:"dataset_id"`
	Completeness map[string]any `json:"completeness"`
	Confidence *int `json:"confidence,omitempty"`
	CreatedAt string `json:"createdAt"`
	DatasetId2 *string `json:"datasetId,omitempty"`
	Description *string `json:"description,omitempty"`
	DurableObjectId string `json:"durableObjectId"`
	Id *string `json:"id,omitempty"`
	IndicatorType string `json:"indicatorType"`
	Indicators map[string]any `json:"indicators"`
	Message string `json:"message"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Pagination map[string]any `json:"pagination"`
	RelatedEvents *[]any `json:"relatedEvents,omitempty"`
	Sources []any `json:"sources"`
	Tags *[]any `json:"tags,omitempty"`
	Tlp *string `json:"tlp,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt string `json:"updatedAt"`
	Uuid string `json:"uuid"`
	Value string `json:"value"`
}

// IndicatorUpdateData is the typed request payload for Indicator.UpdateTyped.
type IndicatorUpdateData struct {
	AccountId string `json:"account_id"`
	DatasetId string `json:"dataset_id"`
	Id string `json:"id"`
	RelUuid *string `json:"rel_uuid,omitempty"`
	Completeness *map[string]any `json:"completeness,omitempty"`
	Confidence *int `json:"confidence,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	DatasetId2 *string `json:"datasetId,omitempty"`
	Description *string `json:"description,omitempty"`
	DurableObjectId *string `json:"durableObjectId,omitempty"`
	IndicatorType *string `json:"indicatorType,omitempty"`
	Indicators *map[string]any `json:"indicators,omitempty"`
	Message *string `json:"message,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	RelatedEvents *[]any `json:"relatedEvents,omitempty"`
	Sources *[]any `json:"sources,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	Tlp *string `json:"tlp,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
	Value *string `json:"value,omitempty"`
}

// IndicatorRemoveMatch is the typed request payload for Indicator.RemoveTyped.
type IndicatorRemoveMatch struct {
	AccountId string `json:"account_id"`
	DatasetId string `json:"dataset_id"`
	Id string `json:"id"`
	RelUuid *string `json:"rel_uuid,omitempty"`
}

// IndicatorType is the typed data model for the indicator_type entity.
type IndicatorType struct {
}

// IndicatorTypeLoadMatch is the typed request payload for IndicatorType.LoadTyped.
type IndicatorTypeLoadMatch struct {
	AccountId string `json:"account_id"`
	DatasetId *[]any `json:"dataset_id,omitempty"`
}

// Permission is the typed data model for the permission entity.
type Permission struct {
}

// PermissionListMatch is the typed request payload for Permission.ListTyped.
type PermissionListMatch struct {
	AccountId string `json:"account_id"`
	DatasetId string `json:"dataset_id"`
}

// PermissionCreateData is the typed request payload for Permission.CreateTyped.
type PermissionCreateData struct {
	AccountId string `json:"account_id"`
	DatasetId string `json:"dataset_id"`
	CreatedAt string `json:"createdAt"`
	Id *string `json:"id,omitempty"`
	Message *string `json:"message,omitempty"`
	ResourceId *string `json:"resourceId,omitempty"`
	ResourceType string `json:"resourceType"`
	Role string `json:"role"`
	SubjectId string `json:"subjectId"`
	SubjectType string `json:"subjectType"`
	Success *bool `json:"success,omitempty"`
	UpdatedAt string `json:"updatedAt"`
	Uuid string `json:"uuid"`
}

// PermissionUpdateData is the typed request payload for Permission.UpdateTyped.
type PermissionUpdateData struct {
	AccountId string `json:"account_id"`
	DatasetId string `json:"dataset_id"`
	Id string `json:"id"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Message *string `json:"message,omitempty"`
	ResourceId *string `json:"resourceId,omitempty"`
	ResourceType *string `json:"resourceType,omitempty"`
	Role *string `json:"role,omitempty"`
	SubjectId *string `json:"subjectId,omitempty"`
	SubjectType *string `json:"subjectType,omitempty"`
	Success *bool `json:"success,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
}

// PermissionRemoveMatch is the typed request payload for Permission.RemoveTyped.
type PermissionRemoveMatch struct {
	AccountId string `json:"account_id"`
	DatasetId string `json:"dataset_id"`
	Id string `json:"id"`
}

// Priority is the typed data model for the priority entity.
type Priority struct {
}

// PriorityLoadMatch is the typed request payload for Priority.LoadTyped.
type PriorityLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// PriorityCreateData is the typed request payload for Priority.CreateTyped.
type PriorityCreateData struct {
	AccountId string `json:"account_id"`
	Errors []any `json:"errors"`
	Id *string `json:"id,omitempty"`
	Labels []any `json:"labels"`
	Messages []any `json:"messages"`
	Page int `json:"page"`
	PerPage int `json:"per_page"`
	Priority int `json:"priority"`
	Requirement string `json:"requirement"`
	Result *any `json:"result,omitempty"`
	Success bool `json:"success"`
	Tlp string `json:"tlp"`
}

// PriorityUpdateData is the typed request payload for Priority.UpdateTyped.
type PriorityUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Errors *[]any `json:"errors,omitempty"`
	Labels *[]any `json:"labels,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Priority *int `json:"priority,omitempty"`
	Requirement *string `json:"requirement,omitempty"`
	Result *any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
	Tlp *string `json:"tlp,omitempty"`
}

// PriorityIntelligence is the typed data model for the priority_intelligence entity.
type PriorityIntelligence struct {
}

// PriorityIntelligenceLoadMatch is the typed request payload for PriorityIntelligence.LoadTyped.
type PriorityIntelligenceLoadMatch struct {
	AccountId string `json:"account_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Id *string `json:"id,omitempty"`
}

// PriorityIntelligenceCreateData is the typed request payload for PriorityIntelligence.CreateTyped.
type PriorityIntelligenceCreateData struct {
	AccountId string `json:"account_id"`
	Id *string `json:"id,omitempty"`
	Labels *[]any `json:"labels,omitempty"`
	Priority *int `json:"priority,omitempty"`
	Requirement string `json:"requirement"`
	Tlp *string `json:"tlp,omitempty"`
}

// PriorityIntelligenceUpdateData is the typed request payload for PriorityIntelligence.UpdateTyped.
type PriorityIntelligenceUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Labels *[]any `json:"labels,omitempty"`
	Priority *int `json:"priority,omitempty"`
	Requirement *string `json:"requirement,omitempty"`
	Tlp *string `json:"tlp,omitempty"`
}

// PriorityIntelligenceRemoveMatch is the typed request payload for PriorityIntelligence.RemoveTyped.
type PriorityIntelligenceRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// PriorityIntelligenceRequirement is the typed data model for the priority_intelligence_requirement entity.
type PriorityIntelligenceRequirement struct {
}

// PriorityIntelligenceRequirementLoadMatch is the typed request payload for PriorityIntelligenceRequirement.LoadTyped.
type PriorityIntelligenceRequirementLoadMatch struct {
	AccountId string `json:"account_id"`
	Enabled *bool `json:"enabled,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	BacktestId *string `json:"backtest_id,omitempty"`
	EvaluationId *string `json:"evaluation_id,omitempty"`
}

// PriorityIntelligenceRequirementCreateData is the typed request payload for PriorityIntelligenceRequirement.CreateTyped.
type PriorityIntelligenceRequirementCreateData struct {
	AccountId string `json:"account_id"`
	AsOf *string `json:"as_of,omitempty"`
	BacktestDays *int `json:"backtest_days,omitempty"`
	CandidateLimit *int `json:"candidate_limit,omitempty"`
	DatasetIds *[]any `json:"dataset_ids,omitempty"`
	Dimension string `json:"dimension"`
	EmergingMinCurrentCount *int `json:"emerging_min_current_count,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	EstablishedMinAbsoluteDelta *int `json:"established_min_absolute_delta,omitempty"`
	EstablishedMinPriorCount *int `json:"established_min_prior_count,omitempty"`
	EstablishedMinRelativeDelta *float64 `json:"established_min_relative_delta,omitempty"`
	Value string `json:"value"`
	WindowDays *int `json:"window_days,omitempty"`
}

// PriorityIntelligenceRequirementUpdateData is the typed request payload for PriorityIntelligenceRequirement.UpdateTyped.
type PriorityIntelligenceRequirementUpdateData struct {
	AccountId string `json:"account_id"`
	InterestId string `json:"interest_id"`
	AsOf *string `json:"as_of,omitempty"`
	BacktestDays *int `json:"backtest_days,omitempty"`
	CandidateLimit *int `json:"candidate_limit,omitempty"`
	DatasetIds *[]any `json:"dataset_ids,omitempty"`
	Dimension *string `json:"dimension,omitempty"`
	EmergingMinCurrentCount *int `json:"emerging_min_current_count,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	EstablishedMinAbsoluteDelta *int `json:"established_min_absolute_delta,omitempty"`
	EstablishedMinPriorCount *int `json:"established_min_prior_count,omitempty"`
	EstablishedMinRelativeDelta *float64 `json:"established_min_relative_delta,omitempty"`
	Value *string `json:"value,omitempty"`
	WindowDays *int `json:"window_days,omitempty"`
}

// PriorityIntelligenceRequirementRemoveMatch is the typed request payload for PriorityIntelligenceRequirement.RemoveTyped.
type PriorityIntelligenceRequirementRemoveMatch struct {
	AccountId string `json:"account_id"`
	InterestId string `json:"interest_id"`
}

// PriorityIntelligenceRequirementsPir is the typed data model for the priority_intelligence_requirements__pir entity.
type PriorityIntelligenceRequirementsPir struct {
}

// PriorityIntelligenceRequirementsPirListMatch is the typed request payload for PriorityIntelligenceRequirementsPir.ListTyped.
type PriorityIntelligenceRequirementsPirListMatch struct {
	AccountId string `json:"account_id"`
}

// PriorityIntelligenceRequirementsPirCreateData is the typed request payload for PriorityIntelligenceRequirementsPir.CreateTyped.
type PriorityIntelligenceRequirementsPirCreateData struct {
	AccountId string `json:"account_id"`
	Errors []any `json:"errors"`
	Labels []any `json:"labels"`
	Messages []any `json:"messages"`
	Priority int `json:"priority"`
	Requirement string `json:"requirement"`
	Result *any `json:"result,omitempty"`
	Success bool `json:"success"`
	Tlp string `json:"tlp"`
}

// PublicCredentialMonitor is the typed data model for the public_credential_monitor entity.
type PublicCredentialMonitor struct {
}

// PublicCredentialMonitorListMatch is the typed request payload for PublicCredentialMonitor.ListTyped.
type PublicCredentialMonitorListMatch struct {
	AccountId string `json:"account_id"`
	Domain *string `json:"domain,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Username *string `json:"username,omitempty"`
}

// PublicCredentialMonitorCreateData is the typed request payload for PublicCredentialMonitor.CreateTyped.
type PublicCredentialMonitorCreateData struct {
	AccountId string `json:"account_id"`
	CreatedAt string `json:"created_at"`
	Domain string `json:"domain"`
	Id int `json:"id"`
	MatchedAt string `json:"matched_at"`
	Username string `json:"username"`
}

// PublicCredentialMonitorRemoveMatch is the typed request payload for PublicCredentialMonitor.RemoveTyped.
type PublicCredentialMonitorRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id int `json:"id"`
}

// Request is the typed data model for the request entity.
type Request struct {
}

// RequestLoadMatch is the typed request payload for Request.LoadTyped.
type RequestLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// RequestCreateData is the typed request payload for Request.CreateTyped.
type RequestCreateData struct {
	AccountId string `json:"account_id"`
	CompletedAfter *any `json:"completed_after,omitempty"`
	CompletedBefore *any `json:"completed_before,omitempty"`
	Content *string `json:"content,omitempty"`
	CreatedAfter *any `json:"created_after,omitempty"`
	CreatedBefore *any `json:"created_before,omitempty"`
	Errors []any `json:"errors"`
	Id *string `json:"id,omitempty"`
	Messages []any `json:"messages"`
	Page int `json:"page"`
	PerPage int `json:"per_page"`
	Priority *string `json:"priority,omitempty"`
	RequestType *string `json:"request_type,omitempty"`
	Result map[string]any `json:"result"`
	SortBy *string `json:"sort_by,omitempty"`
	SortOrder *string `json:"sort_order,omitempty"`
	Status *string `json:"status,omitempty"`
	Success bool `json:"success"`
	Summary *string `json:"summary,omitempty"`
	Tlp *string `json:"tlp,omitempty"`
}

// RequestUpdateData is the typed request payload for Request.UpdateTyped.
type RequestUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	CompletedAfter *any `json:"completed_after,omitempty"`
	CompletedBefore *any `json:"completed_before,omitempty"`
	Content *string `json:"content,omitempty"`
	CreatedAfter *any `json:"created_after,omitempty"`
	CreatedBefore *any `json:"created_before,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Priority *string `json:"priority,omitempty"`
	RequestType *string `json:"request_type,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	SortBy *string `json:"sort_by,omitempty"`
	SortOrder *string `json:"sort_order,omitempty"`
	Status *string `json:"status,omitempty"`
	Success *bool `json:"success,omitempty"`
	Summary *string `json:"summary,omitempty"`
	Tlp *string `json:"tlp,omitempty"`
}

// RequestForInformationRfi is the typed data model for the request_for_information__rfi entity.
type RequestForInformationRfi struct {
}

// RequestForInformationRfiLoadMatch is the typed request payload for RequestForInformationRfi.LoadTyped.
type RequestForInformationRfiLoadMatch struct {
	AccountId string `json:"account_id"`
	AssetId string `json:"asset_id"`
	RequestId string `json:"request_id"`
}

// RequestForInformationRfiListMatch is the typed request payload for RequestForInformationRfi.ListTyped.
type RequestForInformationRfiListMatch struct {
	AccountId string `json:"account_id"`
}

// RequestForInformationRfiCreateData is the typed request payload for RequestForInformationRfi.CreateTyped.
type RequestForInformationRfiCreateData struct {
	AccountId string `json:"account_id"`
	RequestId *string `json:"request_id,omitempty"`
	Content *string `json:"content,omitempty"`
	Errors []any `json:"errors"`
	Id *string `json:"id,omitempty"`
	Messages []any `json:"messages"`
	Priority *string `json:"priority,omitempty"`
	RequestType *string `json:"request_type,omitempty"`
	Result *[]any `json:"result,omitempty"`
	Source *string `json:"source,omitempty"`
	Success bool `json:"success"`
	Summary *string `json:"summary,omitempty"`
	Tlp *string `json:"tlp,omitempty"`
}

// RequestForInformationRfiUpdateData is the typed request payload for RequestForInformationRfi.UpdateTyped.
type RequestForInformationRfiUpdateData struct {
	AccountId string `json:"account_id"`
	AssetId *string `json:"asset_id,omitempty"`
	RequestId string `json:"request_id"`
	MessageId *int `json:"message_id,omitempty"`
	Content *string `json:"content,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	Id *string `json:"id,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Priority *string `json:"priority,omitempty"`
	RequestType *string `json:"request_type,omitempty"`
	Result *[]any `json:"result,omitempty"`
	Source *string `json:"source,omitempty"`
	Success *bool `json:"success,omitempty"`
	Summary *string `json:"summary,omitempty"`
	Tlp *string `json:"tlp,omitempty"`
}

// RequestsDashboard is the typed data model for the requests_dashboard entity.
type RequestsDashboard struct {
}

// RequestsDashboardLoadMatch is the typed request payload for RequestsDashboard.LoadTyped.
type RequestsDashboardLoadMatch struct {
	AccountId string `json:"account_id"`
	ProjectType string `json:"project_type"`
}

// RequestsDashboardListMatch is the typed request payload for RequestsDashboard.ListTyped.
type RequestsDashboardListMatch struct {
	AccountId string `json:"account_id"`
	ProjectType *string `json:"project_type,omitempty"`
	Country *string `json:"country,omitempty"`
	RequestType *string `json:"request_type,omitempty"`
}

// Rfi is the typed data model for the rfi entity.
type Rfi struct {
}

// RfiLoadMatch is the typed request payload for Rfi.LoadTyped.
type RfiLoadMatch struct {
	AccountId *string `json:"account_id,omitempty"`
	ProjectType string `json:"project_type"`
	Assignee *string `json:"assignee,omitempty"`
	CreatedBy *string `json:"created_by,omitempty"`
	Id *string `json:"id,omitempty"`
	Metadata *string `json:"metadata,omitempty"`
	Order *string `json:"order,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PageSize *float64 `json:"page_size,omitempty"`
	Priority *string `json:"priority,omitempty"`
	ReadableId *string `json:"readable_id,omitempty"`
	RequestType *string `json:"request_type,omitempty"`
	Search *string `json:"search,omitempty"`
	Status *string `json:"status,omitempty"`
	Summary *string `json:"summary,omitempty"`
	Tlp *string `json:"tlp,omitempty"`
	RequestId *string `json:"request_id,omitempty"`
}

// RfiCreateData is the typed request payload for Rfi.CreateTyped.
type RfiCreateData struct {
	AccountId string `json:"account_id"`
	ProjectType string `json:"project_type"`
	Account map[string]any `json:"account"`
	Assignee string `json:"assignee"`
	Completed string `json:"completed"`
	Created string `json:"created"`
	Description *string `json:"description,omitempty"`
	EventId *string `json:"eventId,omitempty"`
	Id string `json:"id"`
	InvestigationId string `json:"investigation_id"`
	IsFreeRequest bool `json:"is_free_request"`
	MessageTokens float64 `json:"message_tokens"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Pagination map[string]any `json:"pagination"`
	Priority string `json:"priority"`
	ReadableId string `json:"readable_id"`
	ReleaseEntitlements string `json:"release_entitlements"`
	ReportId string `json:"report_id"`
	Request map[string]any `json:"request"`
	RequestType *string `json:"request_type,omitempty"`
	Result []any `json:"result"`
	Status string `json:"status"`
	SubtypeId *string `json:"subtypeId,omitempty"`
	Success string `json:"success"`
	Summary string `json:"summary"`
	Title *string `json:"title,omitempty"`
	Tlp string `json:"tlp"`
	Tokens float64 `json:"tokens"`
	Updated string `json:"updated"`
}

// RfiUpdateData is the typed request payload for Rfi.UpdateTyped.
type RfiUpdateData struct {
	AccountId string `json:"account_id"`
	ProjectType string `json:"project_type"`
	RequestId string `json:"request_id"`
	Account *map[string]any `json:"account,omitempty"`
	Assignee *string `json:"assignee,omitempty"`
	Completed *string `json:"completed,omitempty"`
	Created *string `json:"created,omitempty"`
	Description *string `json:"description,omitempty"`
	EventId *string `json:"eventId,omitempty"`
	Id *string `json:"id,omitempty"`
	InvestigationId *string `json:"investigation_id,omitempty"`
	IsFreeRequest *bool `json:"is_free_request,omitempty"`
	MessageTokens *float64 `json:"message_tokens,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	Priority *string `json:"priority,omitempty"`
	ReadableId *string `json:"readable_id,omitempty"`
	ReleaseEntitlements *string `json:"release_entitlements,omitempty"`
	ReportId *string `json:"report_id,omitempty"`
	Request *map[string]any `json:"request,omitempty"`
	RequestType *string `json:"request_type,omitempty"`
	Result *[]any `json:"result,omitempty"`
	Status *string `json:"status,omitempty"`
	SubtypeId *string `json:"subtypeId,omitempty"`
	Success *string `json:"success,omitempty"`
	Summary *string `json:"summary,omitempty"`
	Title *string `json:"title,omitempty"`
	Tlp *string `json:"tlp,omitempty"`
	Tokens *float64 `json:"tokens,omitempty"`
	Updated *string `json:"updated,omitempty"`
}

// RfiMessage is the typed data model for the rfi_message entity.
type RfiMessage struct {
}

// RfiMessageLoadMatch is the typed request payload for RfiMessage.LoadTyped.
type RfiMessageLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	ProjectType string `json:"project_type"`
	RequestId string `json:"request_id"`
}

// RfiMessageListMatch is the typed request payload for RfiMessage.ListTyped.
type RfiMessageListMatch struct {
	AccountId string `json:"account_id"`
	ProjectType string `json:"project_type"`
	RequestId string `json:"request_id"`
	Page *string `json:"page,omitempty"`
	PerPage *string `json:"per_page,omitempty"`
}

// RfiMessageCreateData is the typed request payload for RfiMessage.CreateTyped.
type RfiMessageCreateData struct {
	AccountId string `json:"account_id"`
	ProjectType string `json:"project_type"`
	RequestId string `json:"request_id"`
	AttachmentAssetIds *[]any `json:"attachment_asset_ids,omitempty"`
	Attachments []any `json:"attachments"`
	AuthorId *string `json:"author_id,omitempty"`
	AuthorName *string `json:"author_name,omitempty"`
	Content string `json:"content"`
	Created string `json:"created"`
	Id int `json:"id"`
	IsCloudflareTeam bool `json:"is_cloudflare_team"`
	IsPublished bool `json:"is_published"`
	Publish *bool `json:"publish,omitempty"`
	Published string `json:"published"`
	Tlp string `json:"tlp"`
	Updated string `json:"updated"`
}

// RfiMessageUpdateData is the typed request payload for RfiMessage.UpdateTyped.
type RfiMessageUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	ProjectType string `json:"project_type"`
	RequestId string `json:"request_id"`
	AttachmentAssetIds *[]any `json:"attachment_asset_ids,omitempty"`
	Attachments *[]any `json:"attachments,omitempty"`
	AuthorId *string `json:"author_id,omitempty"`
	AuthorName *string `json:"author_name,omitempty"`
	Content *string `json:"content,omitempty"`
	Created *string `json:"created,omitempty"`
	IsCloudflareTeam *bool `json:"is_cloudflare_team,omitempty"`
	IsPublished *bool `json:"is_published,omitempty"`
	Publish *bool `json:"publish,omitempty"`
	Published *string `json:"published,omitempty"`
	Tlp *string `json:"tlp,omitempty"`
	Updated *string `json:"updated,omitempty"`
}

// Rule is the typed data model for the rule entity.
type Rule struct {
}

// RuleListMatch is the typed request payload for Rule.ListTyped.
type RuleListMatch struct {
	AccountId string `json:"account_id"`
}

// Scan is the typed data model for the scan entity.
type Scan struct {
}

// ScanLoadMatch is the typed request payload for Scan.LoadTyped.
type ScanLoadMatch struct {
	AccountId string `json:"account_id"`
	ConfigId string `json:"config_id"`
}

// ScanListMatch is the typed request payload for Scan.ListTyped.
type ScanListMatch struct {
	AccountId string `json:"account_id"`
}

// ScanCreateData is the typed request payload for Scan.CreateTyped.
type ScanCreateData struct {
	AccountId string `json:"account_id"`
	Errors []any `json:"errors"`
	Frequency *float64 `json:"frequency,omitempty"`
	Ips *[]any `json:"ips,omitempty"`
	Messages []any `json:"messages"`
	Ports *[]any `json:"ports,omitempty"`
	Result map[string]any `json:"result"`
	Success bool `json:"success"`
}

// ScanUpdateData is the typed request payload for Scan.UpdateTyped.
type ScanUpdateData struct {
	AccountId string `json:"account_id"`
	ConfigId string `json:"config_id"`
	Errors *[]any `json:"errors,omitempty"`
	Frequency *float64 `json:"frequency,omitempty"`
	Ips *[]any `json:"ips,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Ports *[]any `json:"ports,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// ScanRemoveMatch is the typed request payload for Scan.RemoveTyped.
type ScanRemoveMatch struct {
	AccountId string `json:"account_id"`
	ConfigId string `json:"config_id"`
}

// Tag is the typed data model for the tag entity.
type Tag struct {
}

// TagLoadMatch is the typed request payload for Tag.LoadTyped.
type TagLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// TagListMatch is the typed request payload for Tag.ListTyped.
type TagListMatch struct {
	AccountId string `json:"account_id"`
	Cache *string `json:"cache,omitempty"`
	CategoryUuid *string `json:"category_uuid,omitempty"`
	Filter *[]any `json:"filter,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PageSize *float64 `json:"page_size,omitempty"`
	Search *string `json:"search,omitempty"`
	Value *string `json:"value,omitempty"`
}

// TagCreateData is the typed request payload for Tag.CreateTyped.
type TagCreateData struct {
	AccountId string `json:"account_id"`
	Id *string `json:"id,omitempty"`
	ActiveDuration *string `json:"activeDuration,omitempty"`
	ActiveDurationAnnotated map[string]any `json:"activeDuration_annotated"`
	ActorCategory *string `json:"actorCategory,omitempty"`
	ActorCategoryAnnotated map[string]any `json:"actorCategory_annotated"`
	AliasGroupNames *[]any `json:"aliasGroupNames,omitempty"`
	AliasGroupNamesInternal *[]any `json:"aliasGroupNamesInternal,omitempty"`
	Aliases *[]any `json:"aliases,omitempty"`
	AttributionOrganization *string `json:"attributionOrganization,omitempty"`
	AttributionOrganizationAnnotated map[string]any `json:"attributionOrganization_annotated"`
	CategoryName *string `json:"categoryName,omitempty"`
	CategoryUuid *string `json:"categoryUuid,omitempty"`
	Confidence *int `json:"confidence,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	DateOfDiscovery *string `json:"dateOfDiscovery,omitempty"`
	Description *string `json:"description,omitempty"`
	ExternalReferenceLinks *[]any `json:"externalReferenceLinks,omitempty"`
	ExternalReferences *[]any `json:"externalReferences,omitempty"`
	ExternalReferencesAnnotated *[]any `json:"externalReferences_annotated,omitempty"`
	InternalAliases *[]any `json:"internalAliases,omitempty"`
	InternalDescription *string `json:"internalDescription,omitempty"`
	LastSeen *string `json:"lastSeen,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Motive *string `json:"motive,omitempty"`
	MotiveAnnotated map[string]any `json:"motive_annotated"`
	OpsecLevel *string `json:"opsecLevel,omitempty"`
	OpsecLevelAnnotated map[string]any `json:"opsecLevel_annotated"`
	OriginCountryISO *string `json:"originCountryISO,omitempty"`
	OriginCountryISOAnnotated map[string]any `json:"originCountryISO_annotated"`
	Priority *float64 `json:"priority,omitempty"`
	PriorityAnnotated map[string]any `json:"priority_annotated"`
	Properties *map[string]any `json:"properties,omitempty"`
	SophisticationLevel *string `json:"sophisticationLevel,omitempty"`
	SophisticationLevelAnnotated map[string]any `json:"sophisticationLevel_annotated"`
	Tlp *string `json:"tlp,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	Uuid string `json:"uuid"`
	Value string `json:"value"`
	Version *float64 `json:"version,omitempty"`
}

// TagUpdateData is the typed request payload for Tag.UpdateTyped.
type TagUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	RelUuid *string `json:"rel_uuid,omitempty"`
	DatasetId *string `json:"dataset_id,omitempty"`
	ActiveDuration *string `json:"activeDuration,omitempty"`
	ActiveDurationAnnotated *map[string]any `json:"activeDuration_annotated,omitempty"`
	ActorCategory *string `json:"actorCategory,omitempty"`
	ActorCategoryAnnotated *map[string]any `json:"actorCategory_annotated,omitempty"`
	AliasGroupNames *[]any `json:"aliasGroupNames,omitempty"`
	AliasGroupNamesInternal *[]any `json:"aliasGroupNamesInternal,omitempty"`
	Aliases *[]any `json:"aliases,omitempty"`
	AttributionOrganization *string `json:"attributionOrganization,omitempty"`
	AttributionOrganizationAnnotated *map[string]any `json:"attributionOrganization_annotated,omitempty"`
	CategoryName *string `json:"categoryName,omitempty"`
	CategoryUuid *string `json:"categoryUuid,omitempty"`
	Confidence *int `json:"confidence,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	DateOfDiscovery *string `json:"dateOfDiscovery,omitempty"`
	Description *string `json:"description,omitempty"`
	ExternalReferenceLinks *[]any `json:"externalReferenceLinks,omitempty"`
	ExternalReferences *[]any `json:"externalReferences,omitempty"`
	ExternalReferencesAnnotated *[]any `json:"externalReferences_annotated,omitempty"`
	InternalAliases *[]any `json:"internalAliases,omitempty"`
	InternalDescription *string `json:"internalDescription,omitempty"`
	LastSeen *string `json:"lastSeen,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Motive *string `json:"motive,omitempty"`
	MotiveAnnotated *map[string]any `json:"motive_annotated,omitempty"`
	OpsecLevel *string `json:"opsecLevel,omitempty"`
	OpsecLevelAnnotated *map[string]any `json:"opsecLevel_annotated,omitempty"`
	OriginCountryISO *string `json:"originCountryISO,omitempty"`
	OriginCountryISOAnnotated *map[string]any `json:"originCountryISO_annotated,omitempty"`
	Priority *float64 `json:"priority,omitempty"`
	PriorityAnnotated *map[string]any `json:"priority_annotated,omitempty"`
	Properties *map[string]any `json:"properties,omitempty"`
	SophisticationLevel *string `json:"sophisticationLevel,omitempty"`
	SophisticationLevelAnnotated *map[string]any `json:"sophisticationLevel_annotated,omitempty"`
	Tlp *string `json:"tlp,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
	Value *string `json:"value,omitempty"`
	Version *float64 `json:"version,omitempty"`
}

// TagRemoveMatch is the typed request payload for Tag.RemoveTyped.
type TagRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	RelUuid *string `json:"rel_uuid,omitempty"`
	DatasetId *string `json:"dataset_id,omitempty"`
}

// TagCategory is the typed data model for the tag_category entity.
type TagCategory struct {
}

// TagCategoryLoadMatch is the typed request payload for TagCategory.LoadTyped.
type TagCategoryLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// TagCategoryListMatch is the typed request payload for TagCategory.ListTyped.
type TagCategoryListMatch struct {
	AccountId string `json:"account_id"`
	Search *string `json:"search,omitempty"`
}

// TagCategoryCreateData is the typed request payload for TagCategory.CreateTyped.
type TagCategoryCreateData struct {
	AccountId string `json:"account_id"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	Schema *[]any `json:"schema,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	Uuid string `json:"uuid"`
}

// TagCategoryUpdateData is the typed request payload for TagCategory.UpdateTyped.
type TagCategoryUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Description *string `json:"description,omitempty"`
	Name *string `json:"name,omitempty"`
	Schema *[]any `json:"schema,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
}

// TagCategoryRemoveMatch is the typed request payload for TagCategory.RemoveTyped.
type TagCategoryRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// TargetIndustry is the typed data model for the target_industry entity.
type TargetIndustry struct {
}

// TargetIndustryLoadMatch is the typed request payload for TargetIndustry.LoadTyped.
type TargetIndustryLoadMatch struct {
	AccountId string `json:"account_id"`
	DatasetId *string `json:"dataset_id,omitempty"`
}

// ThreatSignal is the typed data model for the threat_signal entity.
type ThreatSignal struct {
}

// ThreatSignalLoadMatch is the typed request payload for ThreatSignal.LoadTyped.
type ThreatSignalLoadMatch struct {
	AccountId string `json:"account_id"`
	ArticleId *string `json:"article_id,omitempty"`
	Format *string `json:"format,omitempty"`
	SkillId *string `json:"skill_id,omitempty"`
	FeedId *string `json:"feed_id,omitempty"`
}

// ThreatSignalListMatch is the typed request payload for ThreatSignal.ListTyped.
type ThreatSignalListMatch struct {
	AccountId string `json:"account_id"`
	SkillId string `json:"skill_id"`
}

// ThreatSignalCreateData is the typed request payload for ThreatSignal.CreateTyped.
type ThreatSignalCreateData struct {
	AccountId string `json:"account_id"`
	ArticleId *string `json:"article_id,omitempty"`
	SkillId *string `json:"skill_id,omitempty"`
	FeedId *string `json:"feed_id,omitempty"`
	CategoryId *string `json:"category_id,omitempty"`
	CategoryUuids []any `json:"category_uuids"`
	Config *string `json:"config,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	DisplayOrder *int `json:"display_order,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Errors []any `json:"errors"`
	Feeds []any `json:"feeds"`
	IsActive *bool `json:"is_active,omitempty"`
	Message string `json:"message"`
	Messages []any `json:"messages"`
	Name *string `json:"name,omitempty"`
	OptedOut bool `json:"opted_out"`
	OutputSchema *string `json:"output_schema,omitempty"`
	PollIntervalS *int `json:"poll_interval_s,omitempty"`
	Prompt *string `json:"prompt,omitempty"`
	Read bool `json:"read"`
	Result any `json:"result"`
	SkillIds []any `json:"skill_ids"`
	Success bool `json:"success"`
	TagId string `json:"tag_id"`
	Title *string `json:"title,omitempty"`
	Url *string `json:"url,omitempty"`
	WhyValuable *string `json:"why_valuable,omitempty"`
}

// ThreatSignalUpdateData is the typed request payload for ThreatSignal.UpdateTyped.
type ThreatSignalUpdateData struct {
	AccountId string `json:"account_id"`
	FeedId *string `json:"feed_id,omitempty"`
	SkillId *string `json:"skill_id,omitempty"`
	CategoryId *string `json:"category_id,omitempty"`
	CategoryUuids *[]any `json:"category_uuids,omitempty"`
	Config *string `json:"config,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	DisplayOrder *int `json:"display_order,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	Feeds *[]any `json:"feeds,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Message *string `json:"message,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Name *string `json:"name,omitempty"`
	OptedOut *bool `json:"opted_out,omitempty"`
	OutputSchema *string `json:"output_schema,omitempty"`
	PollIntervalS *int `json:"poll_interval_s,omitempty"`
	Prompt *string `json:"prompt,omitempty"`
	Read *bool `json:"read,omitempty"`
	Result *any `json:"result,omitempty"`
	SkillIds *[]any `json:"skill_ids,omitempty"`
	Success *bool `json:"success,omitempty"`
	TagId *string `json:"tag_id,omitempty"`
	Title *string `json:"title,omitempty"`
	Url *string `json:"url,omitempty"`
	WhyValuable *string `json:"why_valuable,omitempty"`
}

// ThreatSignalRemoveMatch is the typed request payload for ThreatSignal.RemoveTyped.
type ThreatSignalRemoveMatch struct {
	AccountId string `json:"account_id"`
	ArticleId *string `json:"article_id,omitempty"`
	TagId *string `json:"tag_id,omitempty"`
	CuratedFeedId *string `json:"curated_feed_id,omitempty"`
	FeedId *string `json:"feed_id,omitempty"`
	SkillId *string `json:"skill_id,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
