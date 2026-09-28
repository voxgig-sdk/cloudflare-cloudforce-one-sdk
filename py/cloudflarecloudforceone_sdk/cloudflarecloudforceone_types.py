# Typed models for the CloudflareCloudforceOne SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Attacker(TypedDict):
    type: str


class AttackerLoadMatchRequired(TypedDict):
    account_id: str


class AttackerLoadMatch(AttackerLoadMatchRequired, total=False):
    dataset_id: list


class BinDb(TypedDict):
    content_type: str
    md5: str
    sha1: str
    sha256: str


class BinDbLoadMatch(TypedDict):
    account_id: str
    hash: str


class BinDbCreateData(TypedDict):
    account_id: str
    content_type: str
    md5: str
    sha1: str
    sha256: str


class BrandProtectionRequired(TypedDict):
    action: str
    body: str
    brand: str
    category: str
    createdAt: str
    description: str
    dismissed: bool
    domain: str
    domain_id: int
    domains: list
    errors: list
    fields: dict
    first_seen: str
    id: float
    image_data: str
    letterText: str
    letterType: str
    matchId: float
    matchType: str
    matched_at: str
    matches: list
    message: str
    messages: list
    name: str
    noticeParams: dict
    notices: list
    public_scans: dict
    queryId: float
    query_id: int
    r2_path: str
    registrar: str
    result: Any
    result_info: dict
    scan_status: str
    scan_submission_id: int
    similarity_score: float
    similarity_threshold: float
    source: str
    status: str
    string_matches: list
    success: bool
    tag: str
    takedownNoticeId: float
    templateId: str
    total_analyzed: float
    total_matches: float
    truncated: bool
    updatedAt: str
    uploaded_at: str
    url_scan_id: str


class BrandProtection(BrandProtectionRequired, total=False):
    content_type: str
    createNotice: bool
    format: str
    match_details: list
    match_ids: list
    max_time: str
    min_time: str
    queryIds: list
    scan: bool
    scan_matches: bool
    score_threshold: float
    search_lookback: bool
    top_k: int


class BrandProtectionLoadMatchRequired(TypedDict):
    account_id: str


class BrandProtectionLoadMatch(BrandProtectionLoadMatchRequired, total=False):
    letter_id: int
    takedown_notice_id: int
    notice_id: int
    template_id: str


class BrandProtectionListMatchRequired(TypedDict):
    account_id: str


class BrandProtectionListMatch(BrandProtectionListMatchRequired, total=False):
    domain_search: str
    include_dismissed: str
    include_domain_id: str
    limit: str
    offset: str
    order: str
    order_by: str
    query_id: list
    download: str
    id: str
    page: int
    per_page: int
    takedown_notice_id: int


class BrandProtectionCreateDataRequired(TypedDict):
    account_id: str
    action: str
    body: str
    brand: str
    category: str
    createdAt: str
    description: str
    dismissed: bool
    domain: str
    domain_id: int
    domains: list
    errors: list
    fields: dict
    first_seen: str
    id: float
    image_data: str
    letterText: str
    letterType: str
    matchId: float
    matchType: str
    matched_at: str
    matches: list
    message: str
    messages: list
    name: str
    noticeParams: dict
    notices: list
    public_scans: dict
    queryId: float
    r2_path: str
    registrar: str
    result: Any
    result_info: dict
    scan_status: str
    scan_submission_id: int
    similarity_score: float
    similarity_threshold: float
    source: str
    status: str
    string_matches: list
    success: bool
    tag: str
    takedownNoticeId: float
    templateId: str
    total_analyzed: float
    total_matches: float
    truncated: bool
    updatedAt: str
    uploaded_at: str
    url_scan_id: str


class BrandProtectionCreateData(BrandProtectionCreateDataRequired, total=False):
    download: str
    show_historic: str
    match_id: int
    query_id: int
    takedown_notice_id: int
    content_type: str
    createNotice: bool
    format: str
    match_details: list
    match_ids: list
    max_time: str
    min_time: str
    queryIds: list
    scan: bool
    scan_matches: bool
    score_threshold: float
    search_lookback: bool
    top_k: int


class BrandProtectionUpdateDataRequired(TypedDict):
    account_id: str


class BrandProtectionUpdateData(BrandProtectionUpdateDataRequired, total=False):
    notice_id: int
    template_id: str
    action: str
    body: str
    brand: str
    category: str
    content_type: str
    createNotice: bool
    createdAt: str
    description: str
    dismissed: bool
    domain: str
    domain_id: int
    domains: list
    errors: list
    fields: dict
    first_seen: str
    format: str
    id: float
    image_data: str
    letterText: str
    letterType: str
    matchId: float
    matchType: str
    match_details: list
    match_ids: list
    matched_at: str
    matches: list
    max_time: str
    message: str
    messages: list
    min_time: str
    name: str
    noticeParams: dict
    notices: list
    public_scans: dict
    queryId: float
    queryIds: list
    query_id: int
    r2_path: str
    registrar: str
    result: Any
    result_info: dict
    scan: bool
    scan_matches: bool
    scan_status: str
    scan_submission_id: int
    score_threshold: float
    search_lookback: bool
    similarity_score: float
    similarity_threshold: float
    source: str
    status: str
    string_matches: list
    success: bool
    tag: str
    takedownNoticeId: float
    templateId: str
    top_k: int
    total_analyzed: float
    total_matches: float
    truncated: bool
    updatedAt: str
    uploaded_at: str
    url_scan_id: str


class BrandProtectionRemoveMatchRequired(TypedDict):
    account_id: str


class BrandProtectionRemoveMatch(BrandProtectionRemoveMatchRequired, total=False):
    letter_id: int
    takedown_notice_id: int
    notice_id: int
    query_id: str
    template_id: str


class CategoryRequired(TypedDict):
    killChain: float
    name: str
    uuid: str


class Category(CategoryRequired, total=False):
    id: str
    mitreAttack: list
    mitreCapec: list
    shortname: str


class CategoryLoadMatchRequired(TypedDict):
    account_id: str


class CategoryLoadMatch(CategoryLoadMatchRequired, total=False):
    category_id: str
    id: str


class CategoryListMatchRequired(TypedDict):
    account_id: str


class CategoryListMatch(CategoryListMatchRequired, total=False):
    dataset_id: list


class CategoryCreateDataRequired(TypedDict):
    account_id: str
    killChain: float
    name: str
    uuid: str


class CategoryCreateData(CategoryCreateDataRequired, total=False):
    category_id: str
    id: str
    mitreAttack: list
    mitreCapec: list
    shortname: str


class CategoryUpdateDataRequired(TypedDict):
    account_id: str


class CategoryUpdateData(CategoryUpdateDataRequired, total=False):
    category_id: str
    id: str
    killChain: float
    mitreAttack: list
    mitreCapec: list
    name: str
    shortname: str
    uuid: str


class CategoryRemoveMatchRequired(TypedDict):
    account_id: str


class CategoryRemoveMatch(CategoryRemoveMatchRequired, total=False):
    category_id: str
    id: str


class CloudforceOneAccountExemption(TypedDict):
    namespace: list
    tag_match: list
    worker_name: list


class CloudforceOneAccountExemptionListMatch(TypedDict):
    account_id: str


class CloudforceOneAccountExemptionCreateData(TypedDict):
    account_id: str
    namespace: list
    tag_match: list
    worker_name: list


class CloudforceOneAccountExemptionUpdateDataRequired(TypedDict):
    account_id: str


class CloudforceOneAccountExemptionUpdateData(CloudforceOneAccountExemptionUpdateDataRequired, total=False):
    namespace: list
    tag_match: list
    worker_name: list


class CloudforceOneAccountExemptionRemoveMatch(TypedDict):
    account_id: str


class CloudforceOneDeleteAll(TypedDict):
    pass


class CloudforceOneDeleteAllRemoveMatch(TypedDict):
    account_id: str


class CloudforceOneEditApprovalRequired(TypedDict):
    condition: dict
    name: str


class CloudforceOneEditApproval(CloudforceOneEditApprovalRequired, total=False):
    description: str
    enabled: bool
    id: str
    meta: list
    status: str
    strings: list


class CloudforceOneEditApprovalCreateDataRequired(TypedDict):
    account_id: str
    approval_id: str
    condition: dict
    name: str


class CloudforceOneEditApprovalCreateData(CloudforceOneEditApprovalCreateDataRequired, total=False):
    module: str
    description: str
    enabled: bool
    id: str
    meta: list
    status: str
    strings: list


class CloudforceOneEditApprovalUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class CloudforceOneEditApprovalUpdateData(CloudforceOneEditApprovalUpdateDataRequired, total=False):
    module: str
    condition: dict
    description: str
    enabled: bool
    meta: list
    name: str
    status: str
    strings: list


class CloudforceOneEmailRuleValidationRequired(TypedDict):
    condition: dict
    name: str
    valid: bool


class CloudforceOneEmailRuleValidation(CloudforceOneEmailRuleValidationRequired, total=False):
    compiled_yara: str
    description: str
    enabled: bool
    error: str
    existing_rule_id: str
    meta: list
    status: str
    strings: list


class CloudforceOneEmailRuleValidationCreateDataRequired(TypedDict):
    account_id: str
    condition: dict
    name: str
    valid: bool


class CloudforceOneEmailRuleValidationCreateData(CloudforceOneEmailRuleValidationCreateDataRequired, total=False):
    compiled_yara: str
    description: str
    enabled: bool
    error: str
    existing_rule_id: str
    meta: list
    status: str
    strings: list


class CloudforceOneEmailRulesListRequired(TypedDict):
    created_at: float
    created_by: str
    description: str
    enabled: bool
    id: str
    is_public: bool
    name: str
    namespaces: list
    path: str
    pending_approval_id: float
    pending_change: dict
    updated_at: float
    updated_by: str


class CloudforceOneEmailRulesList(CloudforceOneEmailRulesListRequired, total=False):
    content: str
    meta: list
    structured_source: str


class CloudforceOneEmailRulesListListMatchRequired(TypedDict):
    account_id: str


class CloudforceOneEmailRulesListListMatch(CloudforceOneEmailRulesListListMatchRequired, total=False):
    limit: float
    offset: float
    search: str


class CloudforceOneRequestsApiResponseCommon(TypedDict):
    pass


class CloudforceOneRequestsApiResponseCommonRemoveMatchRequired(TypedDict):
    account_id: str


class CloudforceOneRequestsApiResponseCommonRemoveMatch(CloudforceOneRequestsApiResponseCommonRemoveMatchRequired, total=False):
    asset_id: str
    request_id: str
    message_id: int
    priority_id: str


class CloudforceOneRuleRequired(TypedDict):
    content: str
    name: str
    path: str


class CloudforceOneRule(CloudforceOneRuleRequired, total=False):
    actions: list
    commit_message: str
    description: str
    enabled: bool
    is_public: bool
    meta: list
    namespaces: list


class CloudforceOneRuleCreateDataRequired(TypedDict):
    account_id: str
    content: str
    name: str
    path: str


class CloudforceOneRuleCreateData(CloudforceOneRuleCreateDataRequired, total=False):
    actions: list
    commit_message: str
    description: str
    enabled: bool
    is_public: bool
    meta: list
    namespaces: list


class CloudforceOneRuleApprovalDetailRequired(TypedDict):
    audit_log_id: float
    can_review: bool
    cancelled_at: float
    cancelled_by: str
    change_description: str
    change_type: str
    commit_message: str
    current_rule: Any
    id: float
    proposed_changes: Any
    rejection_reason: str
    requested_at: float
    requested_by: str
    reviewed_at: float
    reviewer_scope: str
    revision_number: int
    rule_id: str
    rule_name: str
    status: str
    superseded_by_approval_id: float
    supersedes_approval_id: float


class CloudforceOneRuleApprovalDetail(CloudforceOneRuleApprovalDetailRequired, total=False):
    compiler_warnings: list


class CloudforceOneRuleApprovalDetailLoadMatch(TypedDict):
    account_id: str
    id: str


class CloudforceOneRuleApprovalDetailCreateDataRequired(TypedDict):
    account_id: str
    approval_id: str
    audit_log_id: float
    can_review: bool
    cancelled_at: float
    cancelled_by: str
    change_description: str
    change_type: str
    commit_message: str
    current_rule: Any
    id: float
    proposed_changes: Any
    rejection_reason: str
    requested_at: float
    requested_by: str
    reviewed_at: float
    reviewer_scope: str
    revision_number: int
    rule_id: str
    rule_name: str
    status: str
    superseded_by_approval_id: float
    supersedes_approval_id: float


class CloudforceOneRuleApprovalDetailCreateData(CloudforceOneRuleApprovalDetailCreateDataRequired, total=False):
    compiler_warnings: list


class CloudforceOneRuleApprovalsList(TypedDict):
    audit_log_id: float
    can_review: bool
    cancelled_at: float
    cancelled_by: str
    change_description: str
    change_type: str
    commit_message: str
    id: float
    proposed_changes: Any
    rejection_reason: str
    requested_at: float
    requested_by: str
    reviewed_at: float
    reviewer_scope: str
    revision_number: int
    rule_id: str
    rule_name: str
    status: str
    superseded_by_approval_id: float
    supersedes_approval_id: float


class CloudforceOneRuleApprovalsListListMatchRequired(TypedDict):
    account_id: str


class CloudforceOneRuleApprovalsListListMatch(CloudforceOneRuleApprovalsListListMatchRequired, total=False):
    change_type: str
    latest_only: str
    limit: float
    offset: float
    reviewer_scope: str
    rule_id: str
    status: Any


class CloudforceOneRulePreviewRequired(TypedDict):
    condition: dict
    created_at: float
    created_by: str
    description: str
    enabled: bool
    id: str
    is_public: bool
    name: str
    namespaces: list
    path: str
    pending_approval_id: float
    pending_change: dict
    updated_at: float
    updated_by: str


class CloudforceOneRulePreview(CloudforceOneRulePreviewRequired, total=False):
    commit_message: str
    content: str
    meta: list
    status: str
    strings: list
    structured_source: str


class CloudforceOneRulePreviewLoadMatch(TypedDict):
    account_id: str
    id: str


class CloudforceOneRulePreviewCreateDataRequired(TypedDict):
    account_id: str
    condition: dict
    created_at: float
    created_by: str
    description: str
    enabled: bool
    id: str
    is_public: bool
    name: str
    namespaces: list
    path: str
    pending_approval_id: float
    pending_change: dict
    updated_at: float
    updated_by: str


class CloudforceOneRulePreviewCreateData(CloudforceOneRulePreviewCreateDataRequired, total=False):
    commit_message: str
    content: str
    meta: list
    status: str
    strings: list
    structured_source: str


class CloudforceOneRulePreviewUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class CloudforceOneRulePreviewUpdateData(CloudforceOneRulePreviewUpdateDataRequired, total=False):
    commit_message: str
    condition: dict
    content: str
    created_at: float
    created_by: str
    description: str
    enabled: bool
    is_public: bool
    meta: list
    name: str
    namespaces: list
    path: str
    pending_approval_id: float
    pending_change: dict
    status: str
    strings: list
    structured_source: str
    updated_at: float
    updated_by: str


class CloudforceOneRulesPreviewListRequired(TypedDict):
    created_at: float
    created_by: str
    description: str
    enabled: bool
    id: str
    is_public: bool
    name: str
    namespaces: list
    path: str
    pending_approval_id: float
    pending_change: dict
    updated_at: float
    updated_by: str


class CloudforceOneRulesPreviewList(CloudforceOneRulesPreviewListRequired, total=False):
    content: str
    meta: list
    structured_source: str


class CloudforceOneRulesPreviewListListMatchRequired(TypedDict):
    account_id: str


class CloudforceOneRulesPreviewListListMatch(CloudforceOneRulesPreviewListListMatchRequired, total=False):
    is_public: bool
    limit: float
    namespace: Any
    offset: float
    path: str
    recursive: str
    search: str


class CloudforceOneRulesSearchRequired(TypedDict):
    created_at: float
    created_by: str
    description: str
    enabled: bool
    id: str
    is_public: bool
    name: str
    namespaces: list
    path: str
    pending_approval_id: float
    pending_change: dict
    updated_at: float
    updated_by: str


class CloudforceOneRulesSearch(CloudforceOneRulesSearchRequired, total=False):
    content: str
    meta: list
    score: float
    scoring_details: dict
    structured_source: str


class CloudforceOneRulesSearchListMatchRequired(TypedDict):
    account_id: str
    query: str


class CloudforceOneRulesSearchListMatch(CloudforceOneRulesSearchListMatchRequired, total=False):
    is_public: bool
    language: str
    limit: float
    mode: str
    namespace: Any
    offset: float
    path: str
    recursive: str
    search: str


class CloudforceOneStat(TypedDict):
    pass


class CloudforceOneStatLoadMatch(TypedDict):
    account_id: str


class CloudforceOneSuccessRequired(TypedDict):
    success: bool


class CloudforceOneSuccess(CloudforceOneSuccessRequired, total=False):
    id: str


class CloudforceOneSuccessCreateDataRequired(TypedDict):
    account_id: str
    approval_id: str
    success: bool


class CloudforceOneSuccessCreateData(CloudforceOneSuccessCreateDataRequired, total=False):
    id: str


class CloudforceOneSuccessRemoveMatch(TypedDict):
    account_id: str
    id: str


class CloudforceOneTreeNode(TypedDict):
    children: list
    count: float
    name: str
    path: str


class CloudforceOneTreeNodeListMatch(TypedDict):
    account_id: str


class CloudforceOneValidationRequired(TypedDict):
    content: str
    name: str
    valid: bool


class CloudforceOneValidation(CloudforceOneValidationRequired, total=False):
    error: str
    excludeRuleId: str
    namespaces: list
    path: str


class CloudforceOneValidationCreateDataRequired(TypedDict):
    account_id: str
    content: str
    name: str
    valid: bool


class CloudforceOneValidationCreateData(CloudforceOneValidationCreateDataRequired, total=False):
    error: str
    excludeRuleId: str
    namespaces: list
    path: str


class CollectionRequired(TypedDict):
    columns: list
    created_at: str
    created_by: str
    data: dict
    id: str
    item_count: float
    name: str
    position: float
    required: bool
    status: str
    type: str
    updated_at: str


class Collection(CollectionRequired, total=False):
    metadata: dict


class CollectionLoadMatchRequired(TypedDict):
    account_id: str
    id: str


class CollectionLoadMatch(CollectionLoadMatchRequired, total=False):
    item_id: str


class CollectionListMatchRequired(TypedDict):
    account_id: str


class CollectionListMatch(CollectionListMatchRequired, total=False):
    limit: float
    page: float


class CollectionCreateDataRequired(TypedDict):
    account_id: str
    columns: list
    created_at: str
    created_by: str
    data: dict
    id: str
    item_count: float
    name: str
    position: float
    required: bool
    status: str
    type: str
    updated_at: str


class CollectionCreateData(CollectionCreateDataRequired, total=False):
    metadata: dict


class CollectionUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class CollectionUpdateData(CollectionUpdateDataRequired, total=False):
    column_id: str
    item_id: str
    columns: list
    created_at: str
    created_by: str
    data: dict
    item_count: float
    metadata: dict
    name: str
    position: float
    required: bool
    status: str
    type: str
    updated_at: str


class CollectionRemoveMatchRequired(TypedDict):
    account_id: str
    id: str


class CollectionRemoveMatch(CollectionRemoveMatchRequired, total=False):
    column_id: str
    item_id: str


class CollectionsItem(TypedDict):
    pass


class CollectionsItemCreateData(TypedDict):
    account_id: str
    collection_id: str


class Country(TypedDict):
    result: list
    success: str


class CountryListMatch(TypedDict):
    account_id: str


class DashboardAsset(TypedDict):
    assets: dict
    contentType: dict
    count: dict
    downloadable: dict
    expiresAt: dict
    fileName: dict
    fileSize: dict
    id: dict
    is_cloudflare_team: dict
    metadata: dict
    origin: dict
    state: dict
    tlp: dict
    uploadedAt: dict


class DashboardAssetLoadMatchRequired(TypedDict):
    account_id: str
    project_type: str
    request_id: str


class DashboardAssetLoadMatch(DashboardAssetLoadMatchRequired, total=False):
    asset_id: str


class DashboardAssetCreateData(TypedDict):
    account_id: str
    project_type: str
    request_id: str
    assets: dict
    contentType: dict
    count: dict
    downloadable: dict
    expiresAt: dict
    fileName: dict
    fileSize: dict
    id: dict
    is_cloudflare_team: dict
    metadata: dict
    origin: dict
    state: dict
    tlp: dict
    uploadedAt: dict


class DashboardUserRequired(TypedDict):
    id: str


class DashboardUser(DashboardUserRequired, total=False):
    display_name: str


class DashboardUserLoadMatch(TypedDict):
    account_id: str
    request_id: str


class DatasetRequired(TypedDict):
    indicatorWriteMode: str
    isAnalytics: bool
    isPublic: bool
    name: str
    uuid: str


class Dataset(DatasetRequired, total=False):
    deletedAt: str
    id: str


class DatasetLoadMatch(TypedDict):
    account_id: str
    id: str


class DatasetListMatchRequired(TypedDict):
    account_id: str


class DatasetListMatch(DatasetListMatchRequired, total=False):
    include_deleted: bool


class DatasetCreateDataRequired(TypedDict):
    account_id: str
    id: str
    indicatorWriteMode: str
    isAnalytics: bool
    isPublic: bool
    name: str
    uuid: str


class DatasetCreateData(DatasetCreateDataRequired, total=False):
    deletedAt: str


class DatasetUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class DatasetUpdateData(DatasetUpdateDataRequired, total=False):
    deletedAt: str
    indicatorWriteMode: str
    isAnalytics: bool
    isPublic: bool
    name: str
    uuid: str


class DatasetRemoveMatch(TypedDict):
    account_id: str
    id: str


class EventRequired(TypedDict):
    accountId: float
    account_id: int
    alert_enabled: bool
    alert_rollup_enabled: bool
    attacker: str
    attackerCountry: str
    attackerCountryAlpha3: str
    category: str
    created: str
    createdEventsCount: float
    createdIndicatorsCount: float
    createdRelationshipsCount: float
    created_at: str
    data: str
    datasetId: str
    date: str
    errorCount: float
    event: str
    eventIds: list
    failedCount: float
    hasChildren: bool
    id: float
    indicator: str
    indicatorType: str
    indicatorTypeId: float
    killChain: float
    message: str
    mitreAttack: list
    mitreCapec: list
    name: str
    numReferenced: float
    numReferences: float
    parentId: str
    query_json: str
    rawId: str
    referenced: list
    referencedIds: list
    references: list
    referencesIds: list
    relationshipType: str
    relationships: list
    rule_enabled: bool
    source: str
    success: bool
    tags: list
    targetCountry: str
    targetCountryAlpha3: str
    targetIndustry: str
    tlp: str
    updatedCount: float
    updated_at: str
    updates: dict
    user_email: str
    uuid: str


class Event(EventRequired, total=False):
    childIds: list
    createdAt: str
    cursor: str
    custom_threat_feed_id: int
    errors: list
    failures: list
    includeCreatedEvents: bool
    insight: str
    order: str
    orderBy: str
    page: float
    pageSize: float
    raw: dict
    relationshipsCreated: float
    releasabilityId: str
    rule_list_id: str
    rule_scope: str
    search: list


class EventLoadMatchRequired(TypedDict):
    account_id: str


class EventLoadMatch(EventLoadMatchRequired, total=False):
    dataset_id: str
    event_id: str
    id: str
    raw_id: str
    query_id: int


class EventListMatchRequired(TypedDict):
    account_id: str


class EventListMatch(EventListMatchRequired, total=False):
    cache: str
    cursor: str
    dataset_id: list
    force_refresh: bool
    format: str
    order: str
    order_by: str
    page: float
    page_size: float
    search: list
    by_id_id: str
    direction: str
    include_parent: bool
    indicator_type_id: list
    max_depth: float
    relationship_type: Any


class EventCreateDataRequired(TypedDict):
    account_id: str
    accountId: float
    alert_enabled: bool
    alert_rollup_enabled: bool
    attacker: str
    attackerCountry: str
    attackerCountryAlpha3: str
    category: str
    created: str
    createdEventsCount: float
    createdIndicatorsCount: float
    createdRelationshipsCount: float
    created_at: str
    data: str
    datasetId: str
    date: str
    errorCount: float
    event: str
    eventIds: list
    failedCount: float
    hasChildren: bool
    indicator: str
    indicatorType: str
    indicatorTypeId: float
    killChain: float
    message: str
    mitreAttack: list
    mitreCapec: list
    name: str
    numReferenced: float
    numReferences: float
    parentId: str
    query_json: str
    rawId: str
    referenced: list
    referencedIds: list
    references: list
    referencesIds: list
    relationshipType: str
    relationships: list
    rule_enabled: bool
    source: str
    success: bool
    tags: list
    targetCountry: str
    targetCountryAlpha3: str
    targetIndustry: str
    tlp: str
    updatedCount: float
    updated_at: str
    updates: dict
    user_email: str
    uuid: str


class EventCreateData(EventCreateDataRequired, total=False):
    cache: str
    force_refresh: bool
    format: str
    id: str
    raw_id: str
    query_id: int
    childIds: list
    createdAt: str
    cursor: str
    custom_threat_feed_id: int
    errors: list
    failures: list
    includeCreatedEvents: bool
    insight: str
    order: str
    orderBy: str
    page: float
    pageSize: float
    raw: dict
    relationshipsCreated: float
    releasabilityId: str
    rule_list_id: str
    rule_scope: str
    search: list


class EventUpdateDataRequired(TypedDict):
    account_id: str


class EventUpdateData(EventUpdateDataRequired, total=False):
    id: str
    raw_id: str
    query_id: int
    accountId: float
    alert_enabled: bool
    alert_rollup_enabled: bool
    attacker: str
    attackerCountry: str
    attackerCountryAlpha3: str
    category: str
    childIds: list
    created: str
    createdAt: str
    createdEventsCount: float
    createdIndicatorsCount: float
    createdRelationshipsCount: float
    created_at: str
    cursor: str
    custom_threat_feed_id: int
    data: str
    datasetId: str
    date: str
    errorCount: float
    errors: list
    event: str
    eventIds: list
    failedCount: float
    failures: list
    hasChildren: bool
    includeCreatedEvents: bool
    indicator: str
    indicatorType: str
    indicatorTypeId: float
    insight: str
    killChain: float
    message: str
    mitreAttack: list
    mitreCapec: list
    name: str
    numReferenced: float
    numReferences: float
    order: str
    orderBy: str
    page: float
    pageSize: float
    parentId: str
    query_json: str
    raw: dict
    rawId: str
    referenced: list
    referencedIds: list
    references: list
    referencesIds: list
    relationshipType: str
    relationships: list
    relationshipsCreated: float
    releasabilityId: str
    rule_enabled: bool
    rule_list_id: str
    rule_scope: str
    search: list
    source: str
    success: bool
    tags: list
    targetCountry: str
    targetCountryAlpha3: str
    targetIndustry: str
    tlp: str
    updatedCount: float
    updated_at: str
    updates: dict
    user_email: str
    uuid: str


class EventRemoveMatchRequired(TypedDict):
    account_id: str


class EventRemoveMatch(EventRemoveMatchRequired, total=False):
    dataset_id: str
    event_id: list
    query_id: int


class GroupRequired(TypedDict):
    createdAt: str
    description: str
    members: list
    name: str
    updatedAt: str
    uuid: str


class Group(GroupRequired, total=False):
    id: str


class GroupLoadMatch(TypedDict):
    account_id: str
    id: str


class GroupListMatch(TypedDict):
    account_id: str


class GroupCreateDataRequired(TypedDict):
    account_id: str
    createdAt: str
    description: str
    members: list
    name: str
    updatedAt: str
    uuid: str


class GroupCreateData(GroupCreateDataRequired, total=False):
    id: str


class GroupUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class GroupUpdateData(GroupUpdateDataRequired, total=False):
    createdAt: str
    description: str
    members: list
    name: str
    updatedAt: str
    uuid: str


class GroupRemoveMatchRequired(TypedDict):
    account_id: str
    id: str


class GroupRemoveMatch(GroupRemoveMatchRequired, total=False):
    member_id: str


class IndicatorRequired(TypedDict):
    completeness: dict
    createdAt: str
    durableObjectId: str
    indicatorType: str
    indicators: dict
    message: str
    pagination: dict
    sources: list
    updatedAt: str
    uuid: str
    value: str


class Indicator(IndicatorRequired, total=False):
    confidence: int
    datasetId: str
    description: str
    id: str
    metadata: dict
    relatedEvents: list
    tags: list
    tlp: str
    type: str


class IndicatorLoadMatchRequired(TypedDict):
    account_id: str


class IndicatorLoadMatch(IndicatorLoadMatchRequired, total=False):
    cache: str
    created_after: str
    created_before: str
    cursor: str
    dataset_id: list
    format: str
    include_tag: bool
    include_total_count: bool
    indicator_type: str
    name: str
    page: float
    page_size: float
    related_event: list
    related_events_limit: float
    search: list
    tag: list
    tag_search: list
    id: str


class IndicatorListMatchRequired(TypedDict):
    account_id: str
    dataset_id: str


class IndicatorListMatch(IndicatorListMatchRequired, total=False):
    indicator_type: str
    name: str
    page: float
    page_size: float
    related_event: list


class IndicatorCreateDataRequired(TypedDict):
    account_id: str
    dataset_id: str
    completeness: dict
    createdAt: str
    durableObjectId: str
    indicatorType: str
    indicators: dict
    message: str
    pagination: dict
    sources: list
    updatedAt: str
    uuid: str
    value: str


class IndicatorCreateData(IndicatorCreateDataRequired, total=False):
    confidence: int
    datasetId: str
    description: str
    id: str
    metadata: dict
    relatedEvents: list
    tags: list
    tlp: str
    type: str


class IndicatorUpdateDataRequired(TypedDict):
    account_id: str
    dataset_id: str
    id: str


class IndicatorUpdateData(IndicatorUpdateDataRequired, total=False):
    rel_uuid: str
    completeness: dict
    confidence: int
    createdAt: str
    datasetId: str
    description: str
    durableObjectId: str
    indicatorType: str
    indicators: dict
    message: str
    metadata: dict
    pagination: dict
    relatedEvents: list
    sources: list
    tags: list
    tlp: str
    type: str
    updatedAt: str
    uuid: str
    value: str


class IndicatorRemoveMatchRequired(TypedDict):
    account_id: str
    dataset_id: str
    id: str


class IndicatorRemoveMatch(IndicatorRemoveMatchRequired, total=False):
    rel_uuid: str


class IndicatorType(TypedDict):
    type: str


class IndicatorTypeLoadMatchRequired(TypedDict):
    account_id: str


class IndicatorTypeLoadMatch(IndicatorTypeLoadMatchRequired, total=False):
    dataset_id: list


class PermissionRequired(TypedDict):
    createdAt: str
    resourceType: str
    role: str
    subjectId: str
    subjectType: str
    updatedAt: str
    uuid: str


class Permission(PermissionRequired, total=False):
    id: str
    message: str
    resourceId: str
    success: bool


class PermissionListMatch(TypedDict):
    account_id: str
    dataset_id: str


class PermissionCreateDataRequired(TypedDict):
    account_id: str
    dataset_id: str
    createdAt: str
    resourceType: str
    role: str
    subjectId: str
    subjectType: str
    updatedAt: str
    uuid: str


class PermissionCreateData(PermissionCreateDataRequired, total=False):
    id: str
    message: str
    resourceId: str
    success: bool


class PermissionUpdateDataRequired(TypedDict):
    account_id: str
    dataset_id: str
    id: str


class PermissionUpdateData(PermissionUpdateDataRequired, total=False):
    createdAt: str
    message: str
    resourceId: str
    resourceType: str
    role: str
    subjectId: str
    subjectType: str
    success: bool
    updatedAt: str
    uuid: str


class PermissionRemoveMatch(TypedDict):
    account_id: str
    dataset_id: str
    id: str


class PriorityRequired(TypedDict):
    errors: list
    labels: list
    messages: list
    page: int
    per_page: int
    priority: int
    requirement: str
    success: bool
    tlp: str


class Priority(PriorityRequired, total=False):
    id: str
    result: Any


class PriorityLoadMatch(TypedDict):
    account_id: str
    id: str


class PriorityCreateDataRequired(TypedDict):
    account_id: str
    errors: list
    labels: list
    messages: list
    page: int
    per_page: int
    priority: int
    requirement: str
    success: bool
    tlp: str


class PriorityCreateData(PriorityCreateDataRequired, total=False):
    id: str
    result: Any


class PriorityUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class PriorityUpdateData(PriorityUpdateDataRequired, total=False):
    errors: list
    labels: list
    messages: list
    page: int
    per_page: int
    priority: int
    requirement: str
    result: Any
    success: bool
    tlp: str


class PriorityIntelligenceRequired(TypedDict):
    requirement: str


class PriorityIntelligence(PriorityIntelligenceRequired, total=False):
    id: str
    labels: list
    priority: int
    tlp: str


class PriorityIntelligenceLoadMatchRequired(TypedDict):
    account_id: str


class PriorityIntelligenceLoadMatch(PriorityIntelligenceLoadMatchRequired, total=False):
    page: int
    per_page: int
    id: str


class PriorityIntelligenceCreateDataRequired(TypedDict):
    account_id: str
    requirement: str


class PriorityIntelligenceCreateData(PriorityIntelligenceCreateDataRequired, total=False):
    id: str
    labels: list
    priority: int
    tlp: str


class PriorityIntelligenceUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class PriorityIntelligenceUpdateData(PriorityIntelligenceUpdateDataRequired, total=False):
    labels: list
    priority: int
    requirement: str
    tlp: str


class PriorityIntelligenceRemoveMatch(TypedDict):
    account_id: str
    id: str


class PriorityIntelligenceRequirementRequired(TypedDict):
    dimension: str
    value: str


class PriorityIntelligenceRequirement(PriorityIntelligenceRequirementRequired, total=False):
    as_of: str
    backtest_days: int
    candidate_limit: int
    dataset_ids: list
    emerging_min_current_count: int
    enabled: bool
    established_min_absolute_delta: int
    established_min_prior_count: int
    established_min_relative_delta: float
    window_days: int


class PriorityIntelligenceRequirementLoadMatchRequired(TypedDict):
    account_id: str


class PriorityIntelligenceRequirementLoadMatch(PriorityIntelligenceRequirementLoadMatchRequired, total=False):
    enabled: bool
    page: int
    per_page: int
    backtest_id: str
    evaluation_id: str


class PriorityIntelligenceRequirementCreateDataRequired(TypedDict):
    account_id: str
    dimension: str
    value: str


class PriorityIntelligenceRequirementCreateData(PriorityIntelligenceRequirementCreateDataRequired, total=False):
    as_of: str
    backtest_days: int
    candidate_limit: int
    dataset_ids: list
    emerging_min_current_count: int
    enabled: bool
    established_min_absolute_delta: int
    established_min_prior_count: int
    established_min_relative_delta: float
    window_days: int


class PriorityIntelligenceRequirementUpdateDataRequired(TypedDict):
    account_id: str
    interest_id: str


class PriorityIntelligenceRequirementUpdateData(PriorityIntelligenceRequirementUpdateDataRequired, total=False):
    as_of: str
    backtest_days: int
    candidate_limit: int
    dataset_ids: list
    dimension: str
    emerging_min_current_count: int
    enabled: bool
    established_min_absolute_delta: int
    established_min_prior_count: int
    established_min_relative_delta: float
    value: str
    window_days: int


class PriorityIntelligenceRequirementRemoveMatch(TypedDict):
    account_id: str
    interest_id: str


class PriorityIntelligenceRequirementsPirRequired(TypedDict):
    errors: list
    labels: list
    messages: list
    priority: int
    requirement: str
    success: bool
    tlp: str


class PriorityIntelligenceRequirementsPir(PriorityIntelligenceRequirementsPirRequired, total=False):
    result: Any


class PriorityIntelligenceRequirementsPirListMatch(TypedDict):
    account_id: str


class PriorityIntelligenceRequirementsPirCreateDataRequired(TypedDict):
    account_id: str
    errors: list
    labels: list
    messages: list
    priority: int
    requirement: str
    success: bool
    tlp: str


class PriorityIntelligenceRequirementsPirCreateData(PriorityIntelligenceRequirementsPirCreateDataRequired, total=False):
    result: Any


class PublicCredentialMonitor(TypedDict):
    created_at: str
    domain: str
    id: int
    matched_at: str
    username: str


class PublicCredentialMonitorListMatchRequired(TypedDict):
    account_id: str


class PublicCredentialMonitorListMatch(PublicCredentialMonitorListMatchRequired, total=False):
    domain: str
    page: int
    per_page: int
    username: str


class PublicCredentialMonitorCreateData(TypedDict):
    account_id: str
    created_at: str
    domain: str
    id: int
    matched_at: str
    username: str


class PublicCredentialMonitorRemoveMatch(TypedDict):
    account_id: str
    id: int


class RequestRequired(TypedDict):
    errors: list
    messages: list
    page: int
    per_page: int
    result: dict
    success: bool


class Request(RequestRequired, total=False):
    completed_after: Any
    completed_before: Any
    content: str
    created_after: Any
    created_before: Any
    id: str
    priority: str
    request_type: str
    sort_by: str
    sort_order: str
    status: str
    summary: str
    tlp: str


class RequestLoadMatch(TypedDict):
    account_id: str
    id: str


class RequestCreateDataRequired(TypedDict):
    account_id: str
    errors: list
    messages: list
    page: int
    per_page: int
    result: dict
    success: bool


class RequestCreateData(RequestCreateDataRequired, total=False):
    completed_after: Any
    completed_before: Any
    content: str
    created_after: Any
    created_before: Any
    id: str
    priority: str
    request_type: str
    sort_by: str
    sort_order: str
    status: str
    summary: str
    tlp: str


class RequestUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class RequestUpdateData(RequestUpdateDataRequired, total=False):
    completed_after: Any
    completed_before: Any
    content: str
    created_after: Any
    created_before: Any
    errors: list
    messages: list
    page: int
    per_page: int
    priority: str
    request_type: str
    result: dict
    sort_by: str
    sort_order: str
    status: str
    success: bool
    summary: str
    tlp: str


class RequestForInformationRfiRequired(TypedDict):
    errors: list
    messages: list
    success: bool


class RequestForInformationRfi(RequestForInformationRfiRequired, total=False):
    content: str
    id: str
    priority: str
    request_type: str
    result: list
    source: str
    summary: str
    tlp: str


class RequestForInformationRfiLoadMatch(TypedDict):
    account_id: str
    asset_id: str
    request_id: str


class RequestForInformationRfiListMatch(TypedDict):
    account_id: str


class RequestForInformationRfiCreateDataRequired(TypedDict):
    account_id: str
    errors: list
    messages: list
    success: bool


class RequestForInformationRfiCreateData(RequestForInformationRfiCreateDataRequired, total=False):
    request_id: str
    content: str
    id: str
    priority: str
    request_type: str
    result: list
    source: str
    summary: str
    tlp: str


class RequestForInformationRfiUpdateDataRequired(TypedDict):
    account_id: str
    request_id: str


class RequestForInformationRfiUpdateData(RequestForInformationRfiUpdateDataRequired, total=False):
    asset_id: str
    message_id: int
    content: str
    errors: list
    id: str
    messages: list
    priority: str
    request_type: str
    result: list
    source: str
    success: bool
    summary: str
    tlp: str


class RequestsDashboardRequired(TypedDict):
    created: str
    displayOrder: float
    errors: list
    fieldLabel: str
    fieldName: str
    fieldType: str
    id: str
    messages: list
    projectType: str
    project_type: str
    public: bool
    request_types: list
    required: bool
    result: dict
    success: dict
    total: float
    updated: str


class RequestsDashboard(RequestsDashboardRequired, total=False):
    defaultValue: Any
    description: str
    options: list
    sectionID: str
    sectionLabel: str
    validation: dict


class RequestsDashboardLoadMatch(TypedDict):
    account_id: str
    project_type: str


class RequestsDashboardListMatchRequired(TypedDict):
    account_id: str


class RequestsDashboardListMatch(RequestsDashboardListMatchRequired, total=False):
    project_type: str
    country: str
    request_type: str


class RfiRequired(TypedDict):
    account: dict
    assignee: str
    completed: str
    created: str
    id: str
    investigation_id: str
    is_free_request: bool
    message_tokens: float
    pagination: dict
    priority: str
    readable_id: str
    release_entitlements: str
    report_id: str
    request: dict
    result: list
    status: str
    success: str
    summary: str
    tlp: str
    tokens: float
    updated: str


class Rfi(RfiRequired, total=False):
    description: str
    eventId: str
    metadata: dict
    request_type: str
    subtypeId: str
    title: str


class RfiLoadMatchRequired(TypedDict):
    project_type: str


class RfiLoadMatch(RfiLoadMatchRequired, total=False):
    account_id: str
    assignee: str
    created_by: str
    id: str
    metadata: str
    order: str
    order_by: str
    page: float
    page_size: float
    priority: str
    readable_id: str
    request_type: str
    search: str
    status: str
    summary: str
    tlp: str
    request_id: str


class RfiCreateDataRequired(TypedDict):
    account_id: str
    project_type: str
    account: dict
    assignee: str
    completed: str
    created: str
    id: str
    investigation_id: str
    is_free_request: bool
    message_tokens: float
    pagination: dict
    priority: str
    readable_id: str
    release_entitlements: str
    report_id: str
    request: dict
    result: list
    status: str
    success: str
    summary: str
    tlp: str
    tokens: float
    updated: str


class RfiCreateData(RfiCreateDataRequired, total=False):
    description: str
    eventId: str
    metadata: dict
    request_type: str
    subtypeId: str
    title: str


class RfiUpdateDataRequired(TypedDict):
    account_id: str
    project_type: str
    request_id: str


class RfiUpdateData(RfiUpdateDataRequired, total=False):
    account: dict
    assignee: str
    completed: str
    created: str
    description: str
    eventId: str
    id: str
    investigation_id: str
    is_free_request: bool
    message_tokens: float
    metadata: dict
    pagination: dict
    priority: str
    readable_id: str
    release_entitlements: str
    report_id: str
    request: dict
    request_type: str
    result: list
    status: str
    subtypeId: str
    success: str
    summary: str
    title: str
    tlp: str
    tokens: float
    updated: str


class RfiMessageRequired(TypedDict):
    attachments: list
    content: str
    created: str
    id: int
    is_cloudflare_team: bool
    is_published: bool
    published: str
    tlp: str
    updated: str


class RfiMessage(RfiMessageRequired, total=False):
    attachment_asset_ids: list
    author_id: str
    author_name: str
    publish: bool


class RfiMessageLoadMatch(TypedDict):
    account_id: str
    id: str
    project_type: str
    request_id: str


class RfiMessageListMatchRequired(TypedDict):
    account_id: str
    project_type: str
    request_id: str


class RfiMessageListMatch(RfiMessageListMatchRequired, total=False):
    page: str
    per_page: str


class RfiMessageCreateDataRequired(TypedDict):
    account_id: str
    project_type: str
    request_id: str
    attachments: list
    content: str
    created: str
    id: int
    is_cloudflare_team: bool
    is_published: bool
    published: str
    tlp: str
    updated: str


class RfiMessageCreateData(RfiMessageCreateDataRequired, total=False):
    attachment_asset_ids: list
    author_id: str
    author_name: str
    publish: bool


class RfiMessageUpdateDataRequired(TypedDict):
    account_id: str
    id: str
    project_type: str
    request_id: str


class RfiMessageUpdateData(RfiMessageUpdateDataRequired, total=False):
    attachment_asset_ids: list
    attachments: list
    author_id: str
    author_name: str
    content: str
    created: str
    is_cloudflare_team: bool
    is_published: bool
    publish: bool
    published: str
    tlp: str
    updated: str


class Rule(TypedDict):
    arrays: list
    headers: dict
    operators: dict
    scalars: list
    string_arrays: list
    structs: list


class RuleListMatch(TypedDict):
    account_id: str


class ScanRequired(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class Scan(ScanRequired, total=False):
    frequency: float
    ips: list
    ports: list


class ScanLoadMatch(TypedDict):
    account_id: str
    config_id: str


class ScanListMatch(TypedDict):
    account_id: str


class ScanCreateDataRequired(TypedDict):
    account_id: str
    errors: list
    messages: list
    result: dict
    success: bool


class ScanCreateData(ScanCreateDataRequired, total=False):
    frequency: float
    ips: list
    ports: list


class ScanUpdateDataRequired(TypedDict):
    account_id: str
    config_id: str


class ScanUpdateData(ScanUpdateDataRequired, total=False):
    errors: list
    frequency: float
    ips: list
    messages: list
    ports: list
    result: dict
    success: bool


class ScanRemoveMatch(TypedDict):
    account_id: str
    config_id: str


class TagRequired(TypedDict):
    activeDuration_annotated: dict
    actorCategory_annotated: dict
    attributionOrganization_annotated: dict
    motive_annotated: dict
    opsecLevel_annotated: dict
    originCountryISO_annotated: dict
    priority_annotated: dict
    sophisticationLevel_annotated: dict
    uuid: str
    value: str


class Tag(TagRequired, total=False):
    activeDuration: str
    actorCategory: str
    aliasGroupNames: list
    aliasGroupNamesInternal: list
    aliases: list
    attributionOrganization: str
    categoryName: str
    categoryUuid: str
    confidence: int
    createdAt: str
    dateOfDiscovery: str
    description: str
    externalReferenceLinks: list
    externalReferences: list
    externalReferences_annotated: list
    id: str
    internalAliases: list
    internalDescription: str
    lastSeen: str
    metadata: dict
    motive: str
    opsecLevel: str
    originCountryISO: str
    priority: float
    properties: dict
    sophisticationLevel: str
    tlp: str
    type: str
    updatedAt: str
    version: float


class TagLoadMatch(TypedDict):
    account_id: str
    id: str


class TagListMatchRequired(TypedDict):
    account_id: str


class TagListMatch(TagListMatchRequired, total=False):
    cache: str
    category_uuid: str
    filter: list
    page: float
    page_size: float
    search: str
    value: str


class TagCreateDataRequired(TypedDict):
    account_id: str
    activeDuration_annotated: dict
    actorCategory_annotated: dict
    attributionOrganization_annotated: dict
    motive_annotated: dict
    opsecLevel_annotated: dict
    originCountryISO_annotated: dict
    priority_annotated: dict
    sophisticationLevel_annotated: dict
    uuid: str
    value: str


class TagCreateData(TagCreateDataRequired, total=False):
    id: str
    activeDuration: str
    actorCategory: str
    aliasGroupNames: list
    aliasGroupNamesInternal: list
    aliases: list
    attributionOrganization: str
    categoryName: str
    categoryUuid: str
    confidence: int
    createdAt: str
    dateOfDiscovery: str
    description: str
    externalReferenceLinks: list
    externalReferences: list
    externalReferences_annotated: list
    internalAliases: list
    internalDescription: str
    lastSeen: str
    metadata: dict
    motive: str
    opsecLevel: str
    originCountryISO: str
    priority: float
    properties: dict
    sophisticationLevel: str
    tlp: str
    type: str
    updatedAt: str
    version: float


class TagUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class TagUpdateData(TagUpdateDataRequired, total=False):
    rel_uuid: str
    dataset_id: str
    activeDuration: str
    activeDuration_annotated: dict
    actorCategory: str
    actorCategory_annotated: dict
    aliasGroupNames: list
    aliasGroupNamesInternal: list
    aliases: list
    attributionOrganization: str
    attributionOrganization_annotated: dict
    categoryName: str
    categoryUuid: str
    confidence: int
    createdAt: str
    dateOfDiscovery: str
    description: str
    externalReferenceLinks: list
    externalReferences: list
    externalReferences_annotated: list
    internalAliases: list
    internalDescription: str
    lastSeen: str
    metadata: dict
    motive: str
    motive_annotated: dict
    opsecLevel: str
    opsecLevel_annotated: dict
    originCountryISO: str
    originCountryISO_annotated: dict
    priority: float
    priority_annotated: dict
    properties: dict
    sophisticationLevel: str
    sophisticationLevel_annotated: dict
    tlp: str
    type: str
    updatedAt: str
    uuid: str
    value: str
    version: float


class TagRemoveMatchRequired(TypedDict):
    account_id: str
    id: str


class TagRemoveMatch(TagRemoveMatchRequired, total=False):
    rel_uuid: str
    dataset_id: str


class TagCategoryRequired(TypedDict):
    name: str
    uuid: str


class TagCategory(TagCategoryRequired, total=False):
    createdAt: str
    description: str
    id: str
    schema: list
    updatedAt: str


class TagCategoryLoadMatch(TypedDict):
    account_id: str
    id: str


class TagCategoryListMatchRequired(TypedDict):
    account_id: str


class TagCategoryListMatch(TagCategoryListMatchRequired, total=False):
    search: str


class TagCategoryCreateDataRequired(TypedDict):
    account_id: str
    name: str
    uuid: str


class TagCategoryCreateData(TagCategoryCreateDataRequired, total=False):
    createdAt: str
    description: str
    id: str
    schema: list
    updatedAt: str


class TagCategoryUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class TagCategoryUpdateData(TagCategoryUpdateDataRequired, total=False):
    createdAt: str
    description: str
    name: str
    schema: list
    updatedAt: str
    uuid: str


class TagCategoryRemoveMatch(TypedDict):
    account_id: str
    id: str


class TargetIndustry(TypedDict):
    type: str


class TargetIndustryLoadMatchRequired(TypedDict):
    account_id: str


class TargetIndustryLoadMatch(TargetIndustryLoadMatchRequired, total=False):
    dataset_id: str


class ThreatSignalRequired(TypedDict):
    category_uuids: list
    errors: list
    feeds: list
    message: str
    messages: list
    opted_out: bool
    read: bool
    result: Any
    skill_ids: list
    success: bool
    tag_id: str


class ThreatSignal(ThreatSignalRequired, total=False):
    category_id: str
    config: str
    display_name: str
    display_order: int
    enabled: bool
    is_active: bool
    name: str
    output_schema: str
    poll_interval_s: int
    prompt: str
    title: str
    url: str
    why_valuable: str


class ThreatSignalLoadMatchRequired(TypedDict):
    account_id: str


class ThreatSignalLoadMatch(ThreatSignalLoadMatchRequired, total=False):
    article_id: str
    format: str
    skill_id: str
    feed_id: str


class ThreatSignalListMatch(TypedDict):
    account_id: str
    skill_id: str


class ThreatSignalCreateDataRequired(TypedDict):
    account_id: str
    category_uuids: list
    errors: list
    feeds: list
    message: str
    messages: list
    opted_out: bool
    read: bool
    result: Any
    skill_ids: list
    success: bool
    tag_id: str


class ThreatSignalCreateData(ThreatSignalCreateDataRequired, total=False):
    article_id: str
    skill_id: str
    feed_id: str
    category_id: str
    config: str
    display_name: str
    display_order: int
    enabled: bool
    is_active: bool
    name: str
    output_schema: str
    poll_interval_s: int
    prompt: str
    title: str
    url: str
    why_valuable: str


class ThreatSignalUpdateDataRequired(TypedDict):
    account_id: str


class ThreatSignalUpdateData(ThreatSignalUpdateDataRequired, total=False):
    feed_id: str
    skill_id: str
    category_id: str
    category_uuids: list
    config: str
    display_name: str
    display_order: int
    enabled: bool
    errors: list
    feeds: list
    is_active: bool
    message: str
    messages: list
    name: str
    opted_out: bool
    output_schema: str
    poll_interval_s: int
    prompt: str
    read: bool
    result: Any
    skill_ids: list
    success: bool
    tag_id: str
    title: str
    url: str
    why_valuable: str


class ThreatSignalRemoveMatchRequired(TypedDict):
    account_id: str


class ThreatSignalRemoveMatch(ThreatSignalRemoveMatchRequired, total=False):
    article_id: str
    tag_id: str
    curated_feed_id: str
    feed_id: str
    skill_id: str
