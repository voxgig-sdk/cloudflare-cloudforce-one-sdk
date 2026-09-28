// Typed models for the CloudflareCloudforceOne SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Attacker {
  type: string
}

export interface AttackerLoadMatch {
  account_id: string
  dataset_id?: any[]
}

export interface BinDb {
  content_type: string
  md5: string
  sha1: string
  sha256: string
}

export interface BinDbLoadMatch {
  account_id: string
  hash: string
}

export interface BinDbCreateData {
  account_id: string
  content_type: string
  md5: string
  sha1: string
  sha256: string
}

export interface BrandProtection {
  action: string
  body: string
  brand: string
  category: string
  content_type?: string
  createNotice?: boolean
  createdAt: string
  description: string
  dismissed: boolean
  domain: string
  domain_id: number
  domains: any[]
  errors: any[]
  fields: Record<string, any>
  first_seen: string
  format?: string
  id: number
  image_data: string
  letterText: string
  letterType: string
  matchId: number
  matchType: string
  match_details?: any[]
  match_ids?: any[]
  matched_at: string
  matches: any[]
  max_time?: string
  message: string
  messages: any[]
  min_time?: string
  name: string
  noticeParams: Record<string, any>
  notices: any[]
  public_scans: Record<string, any>
  queryId: number
  queryIds?: any[]
  query_id: number
  r2_path: string
  registrar: string
  result: any
  result_info: Record<string, any>
  scan?: boolean
  scan_matches?: boolean
  scan_status: string
  scan_submission_id: number
  score_threshold?: number
  search_lookback?: boolean
  similarity_score: number
  similarity_threshold: number
  source: string
  status: string
  string_matches: any[]
  success: boolean
  tag: string
  takedownNoticeId: number
  templateId: string
  top_k?: number
  total_analyzed: number
  total_matches: number
  truncated: boolean
  updatedAt: string
  uploaded_at: string
  url_scan_id: string
}

export interface BrandProtectionLoadMatch {
  account_id: string
  letter_id?: number
  takedown_notice_id?: number
  notice_id?: number
  template_id?: string
}

export interface BrandProtectionListMatch {
  account_id: string
  domain_search?: string
  include_dismissed?: string
  include_domain_id?: string
  limit?: string
  offset?: string
  order?: string
  order_by?: string
  query_id?: any[]
  download?: string
  id?: string
  page?: number
  per_page?: number
  takedown_notice_id?: number

  // Selects a custom action instead of the plain list:
  //   'takedown_notice' | 'total_query'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface BrandProtectionCreateData {
  account_id: string
  download?: string
  show_historic?: string
  match_id?: number
  query_id?: number
  takedown_notice_id?: number
  action: string
  body: string
  brand: string
  category: string
  content_type?: string
  createNotice?: boolean
  createdAt: string
  description: string
  dismissed: boolean
  domain: string
  domain_id: number
  domains: any[]
  errors: any[]
  fields: Record<string, any>
  first_seen: string
  format?: string
  id: number
  image_data: string
  letterText: string
  letterType: string
  matchId: number
  matchType: string
  match_details?: any[]
  match_ids?: any[]
  matched_at: string
  matches: any[]
  max_time?: string
  message: string
  messages: any[]
  min_time?: string
  name: string
  noticeParams: Record<string, any>
  notices: any[]
  public_scans: Record<string, any>
  queryId: number
  queryIds?: any[]
  r2_path: string
  registrar: string
  result: any
  result_info: Record<string, any>
  scan?: boolean
  scan_matches?: boolean
  scan_status: string
  scan_submission_id: number
  score_threshold?: number
  search_lookback?: boolean
  similarity_score: number
  similarity_threshold: number
  source: string
  status: string
  string_matches: any[]
  success: boolean
  tag: string
  takedownNoticeId: number
  templateId: string
  top_k?: number
  total_analyzed: number
  total_matches: number
  truncated: boolean
  updatedAt: string
  uploaded_at: string
  url_scan_id: string

  // Selects a custom action instead of the plain create:
  //   'takedown_notice'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface BrandProtectionUpdateData {
  account_id: string
  notice_id?: number
  template_id?: string
  action?: string
  body?: string
  brand?: string
  category?: string
  content_type?: string
  createNotice?: boolean
  createdAt?: string
  description?: string
  dismissed?: boolean
  domain?: string
  domain_id?: number
  domains?: any[]
  errors?: any[]
  fields?: Record<string, any>
  first_seen?: string
  format?: string
  id?: number
  image_data?: string
  letterText?: string
  letterType?: string
  matchId?: number
  matchType?: string
  match_details?: any[]
  match_ids?: any[]
  matched_at?: string
  matches?: any[]
  max_time?: string
  message?: string
  messages?: any[]
  min_time?: string
  name?: string
  noticeParams?: Record<string, any>
  notices?: any[]
  public_scans?: Record<string, any>
  queryId?: number
  queryIds?: any[]
  query_id?: number
  r2_path?: string
  registrar?: string
  result?: any
  result_info?: Record<string, any>
  scan?: boolean
  scan_matches?: boolean
  scan_status?: string
  scan_submission_id?: number
  score_threshold?: number
  search_lookback?: boolean
  similarity_score?: number
  similarity_threshold?: number
  source?: string
  status?: string
  string_matches?: any[]
  success?: boolean
  tag?: string
  takedownNoticeId?: number
  templateId?: string
  top_k?: number
  total_analyzed?: number
  total_matches?: number
  truncated?: boolean
  updatedAt?: string
  uploaded_at?: string
  url_scan_id?: string
}

export interface BrandProtectionRemoveMatch {
  account_id: string
  letter_id?: number
  takedown_notice_id?: number
  notice_id?: number
  query_id?: string
  template_id?: string
}

export interface Category {
  id?: string
  killChain: number
  mitreAttack?: any[]
  mitreCapec?: any[]
  name: string
  shortname?: string
  uuid: string
}

export interface CategoryLoadMatch {
  account_id: string
  category_id?: string
  id?: string
}

export interface CategoryListMatch {
  account_id: string
  dataset_id?: any[]

  // Selects a custom action instead of the plain list:
  //   'catalog'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CategoryCreateData {
  account_id: string
  category_id?: string
  id?: string
  killChain: number
  mitreAttack?: any[]
  mitreCapec?: any[]
  name: string
  shortname?: string
  uuid: string

  // Selects a custom action instead of the plain create:
  //   'create'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CategoryUpdateData {
  account_id: string
  category_id?: string
  id?: string
  killChain?: number
  mitreAttack?: any[]
  mitreCapec?: any[]
  name?: string
  shortname?: string
  uuid?: string
}

export interface CategoryRemoveMatch {
  account_id: string
  category_id?: string
  id?: string
}

export interface CloudforceOneAccountExemption {
  namespace: any[]
  tag_match: any[]
  worker_name: any[]
}

export interface CloudforceOneAccountExemptionListMatch {
  account_id: string
}

export interface CloudforceOneAccountExemptionCreateData {
  account_id: string
  namespace: any[]
  tag_match: any[]
  worker_name: any[]
}

export interface CloudforceOneAccountExemptionUpdateData {
  account_id: string
  namespace?: any[]
  tag_match?: any[]
  worker_name?: any[]
}

export interface CloudforceOneAccountExemptionRemoveMatch {
  account_id: string
}

export interface CloudforceOneDeleteAll {
}

export interface CloudforceOneDeleteAllRemoveMatch {
  account_id: string
}

export interface CloudforceOneEditApproval {
  condition: Record<string, any>
  description?: string
  enabled?: boolean
  id?: string
  meta?: any[]
  name: string
  status?: string
  strings?: any[]
}

export interface CloudforceOneEditApprovalCreateData {
  account_id: string
  approval_id: string
  module?: string
  condition: Record<string, any>
  description?: string
  enabled?: boolean
  id?: string
  meta?: any[]
  name: string
  status?: string
  strings?: any[]

  // Selects a custom action instead of the plain create:
  //   'resubmit'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CloudforceOneEditApprovalUpdateData {
  account_id: string
  id: string
  module?: string
  condition?: Record<string, any>
  description?: string
  enabled?: boolean
  meta?: any[]
  name?: string
  status?: string
  strings?: any[]
}

export interface CloudforceOneEmailRuleValidation {
  compiled_yara?: string
  condition: Record<string, any>
  description?: string
  enabled?: boolean
  error?: string
  existing_rule_id?: string
  meta?: any[]
  name: string
  status?: string
  strings?: any[]
  valid: boolean
}

export interface CloudforceOneEmailRuleValidationCreateData {
  account_id: string
  compiled_yara?: string
  condition: Record<string, any>
  description?: string
  enabled?: boolean
  error?: string
  existing_rule_id?: string
  meta?: any[]
  name: string
  status?: string
  strings?: any[]
  valid: boolean
}

export interface CloudforceOneEmailRulesList {
  content?: string
  created_at: number
  created_by: string
  description: string
  enabled: boolean
  id: string
  is_public: boolean
  meta?: any[]
  name: string
  namespaces: any[]
  path: string
  pending_approval_id: number
  pending_change: Record<string, any>
  structured_source?: string
  updated_at: number
  updated_by: string
}

export interface CloudforceOneEmailRulesListListMatch {
  account_id: string
  limit?: number
  offset?: number
  search?: string
}

export interface CloudforceOneRequestsApiResponseCommon {
}

export interface CloudforceOneRequestsApiResponseCommonRemoveMatch {
  account_id: string
  asset_id?: string
  request_id?: string
  message_id?: number
  priority_id?: string
}

export interface CloudforceOneRule {
  actions?: any[]
  commit_message?: string
  content: string
  description?: string
  enabled?: boolean
  is_public?: boolean
  meta?: any[]
  name: string
  namespaces?: any[]
  path: string
}

export interface CloudforceOneRuleCreateData {
  account_id: string
  actions?: any[]
  commit_message?: string
  content: string
  description?: string
  enabled?: boolean
  is_public?: boolean
  meta?: any[]
  name: string
  namespaces?: any[]
  path: string
}

export interface CloudforceOneRuleApprovalDetail {
  audit_log_id: number
  can_review: boolean
  cancelled_at: number
  cancelled_by: string
  change_description: string
  change_type: string
  commit_message: string
  compiler_warnings?: any[]
  current_rule: any
  id: number
  proposed_changes: any
  rejection_reason: string
  requested_at: number
  requested_by: string
  reviewed_at: number
  reviewer_scope: string
  revision_number: number
  rule_id: string
  rule_name: string
  status: string
  superseded_by_approval_id: number
  supersedes_approval_id: number
}

export interface CloudforceOneRuleApprovalDetailLoadMatch {
  account_id: string
  id: string
}

export interface CloudforceOneRuleApprovalDetailCreateData {
  account_id: string
  approval_id: string
  audit_log_id: number
  can_review: boolean
  cancelled_at: number
  cancelled_by: string
  change_description: string
  change_type: string
  commit_message: string
  compiler_warnings?: any[]
  current_rule: any
  id: number
  proposed_changes: any
  rejection_reason: string
  requested_at: number
  requested_by: string
  reviewed_at: number
  reviewer_scope: string
  revision_number: number
  rule_id: string
  rule_name: string
  status: string
  superseded_by_approval_id: number
  supersedes_approval_id: number

  // Selects a custom action instead of the plain create:
  //   'resubmit'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CloudforceOneRuleApprovalsList {
  audit_log_id: number
  can_review: boolean
  cancelled_at: number
  cancelled_by: string
  change_description: string
  change_type: string
  commit_message: string
  id: number
  proposed_changes: any
  rejection_reason: string
  requested_at: number
  requested_by: string
  reviewed_at: number
  reviewer_scope: string
  revision_number: number
  rule_id: string
  rule_name: string
  status: string
  superseded_by_approval_id: number
  supersedes_approval_id: number
}

export interface CloudforceOneRuleApprovalsListListMatch {
  account_id: string
  change_type?: string
  latest_only?: string
  limit?: number
  offset?: number
  reviewer_scope?: string
  rule_id?: string
  status?: any
}

export interface CloudforceOneRulePreview {
  commit_message?: string
  condition: Record<string, any>
  content?: string
  created_at: number
  created_by: string
  description: string
  enabled: boolean
  id: string
  is_public: boolean
  meta?: any[]
  name: string
  namespaces: any[]
  path: string
  pending_approval_id: number
  pending_change: Record<string, any>
  status?: string
  strings?: any[]
  structured_source?: string
  updated_at: number
  updated_by: string
}

export interface CloudforceOneRulePreviewLoadMatch {
  account_id: string
  id: string
}

export interface CloudforceOneRulePreviewCreateData {
  account_id: string
  commit_message?: string
  condition: Record<string, any>
  content?: string
  created_at: number
  created_by: string
  description: string
  enabled: boolean
  id: string
  is_public: boolean
  meta?: any[]
  name: string
  namespaces: any[]
  path: string
  pending_approval_id: number
  pending_change: Record<string, any>
  status?: string
  strings?: any[]
  structured_source?: string
  updated_at: number
  updated_by: string

  // Selects a custom action instead of the plain create:
  //   'test'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CloudforceOneRulePreviewUpdateData {
  account_id: string
  id: string
  commit_message?: string
  condition?: Record<string, any>
  content?: string
  created_at?: number
  created_by?: string
  description?: string
  enabled?: boolean
  is_public?: boolean
  meta?: any[]
  name?: string
  namespaces?: any[]
  path?: string
  pending_approval_id?: number
  pending_change?: Record<string, any>
  status?: string
  strings?: any[]
  structured_source?: string
  updated_at?: number
  updated_by?: string
}

export interface CloudforceOneRulesPreviewList {
  content?: string
  created_at: number
  created_by: string
  description: string
  enabled: boolean
  id: string
  is_public: boolean
  meta?: any[]
  name: string
  namespaces: any[]
  path: string
  pending_approval_id: number
  pending_change: Record<string, any>
  structured_source?: string
  updated_at: number
  updated_by: string
}

export interface CloudforceOneRulesPreviewListListMatch {
  account_id: string
  is_public?: boolean
  limit?: number
  namespace?: any
  offset?: number
  path?: string
  recursive?: string
  search?: string
}

export interface CloudforceOneRulesSearch {
  content?: string
  created_at: number
  created_by: string
  description: string
  enabled: boolean
  id: string
  is_public: boolean
  meta?: any[]
  name: string
  namespaces: any[]
  path: string
  pending_approval_id: number
  pending_change: Record<string, any>
  score?: number
  scoring_details?: Record<string, any>
  structured_source?: string
  updated_at: number
  updated_by: string
}

export interface CloudforceOneRulesSearchListMatch {
  account_id: string
  is_public?: boolean
  language?: string
  limit?: number
  mode?: string
  namespace?: any
  offset?: number
  path?: string
  query: string
  recursive?: string
  search?: string
}

export interface CloudforceOneStat {
}

export interface CloudforceOneStatLoadMatch {
  account_id: string
}

export interface CloudforceOneSuccess {
  id?: string
  success: boolean
}

export interface CloudforceOneSuccessCreateData {
  account_id: string
  approval_id: string
  id?: string
  success: boolean
}

export interface CloudforceOneSuccessRemoveMatch {
  account_id: string
  id: string
}

export interface CloudforceOneTreeNode {
  children: any[]
  count: number
  name: string
  path: string
}

export interface CloudforceOneTreeNodeListMatch {
  account_id: string
}

export interface CloudforceOneValidation {
  content: string
  error?: string
  excludeRuleId?: string
  name: string
  namespaces?: any[]
  path?: string
  valid: boolean
}

export interface CloudforceOneValidationCreateData {
  account_id: string
  content: string
  error?: string
  excludeRuleId?: string
  name: string
  namespaces?: any[]
  path?: string
  valid: boolean
}

export interface Collection {
  columns: any[]
  created_at: string
  created_by: string
  data: Record<string, any>
  id: string
  item_count: number
  metadata?: Record<string, any>
  name: string
  position: number
  required: boolean
  status: string
  type: string
  updated_at: string
}

export interface CollectionLoadMatch {
  account_id: string
  id: string
  item_id?: string

  // Selects a custom action instead of the plain load:
  //   'export'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CollectionListMatch {
  account_id: string
  limit?: number
  page?: number

  // Selects a custom action instead of the plain list:
  //   'item'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CollectionCreateData {
  account_id: string
  columns: any[]
  created_at: string
  created_by: string
  data: Record<string, any>
  id: string
  item_count: number
  metadata?: Record<string, any>
  name: string
  position: number
  required: boolean
  status: string
  type: string
  updated_at: string

  // Selects a custom action instead of the plain create:
  //   'column' | 'search'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CollectionUpdateData {
  account_id: string
  column_id?: string
  id: string
  item_id?: string
  columns?: any[]
  created_at?: string
  created_by?: string
  data?: Record<string, any>
  item_count?: number
  metadata?: Record<string, any>
  name?: string
  position?: number
  required?: boolean
  status?: string
  type?: string
  updated_at?: string
}

export interface CollectionRemoveMatch {
  account_id: string
  column_id?: string
  id: string
  item_id?: string
}

export interface CollectionsItem {
}

export interface CollectionsItemCreateData {
  account_id: string
  collection_id: string
}

export interface Country {
  result: any[]
  success: string
}

export interface CountryListMatch {
  account_id: string
}

export interface DashboardAsset {
  assets: Record<string, any>
  contentType: Record<string, any>
  count: Record<string, any>
  downloadable: Record<string, any>
  expiresAt: Record<string, any>
  fileName: Record<string, any>
  fileSize: Record<string, any>
  id: Record<string, any>
  is_cloudflare_team: Record<string, any>
  metadata: Record<string, any>
  origin: Record<string, any>
  state: Record<string, any>
  tlp: Record<string, any>
  uploadedAt: Record<string, any>
}

export interface DashboardAssetLoadMatch {
  account_id: string
  asset_id?: string
  project_type: string
  request_id: string
}

export interface DashboardAssetCreateData {
  account_id: string
  project_type: string
  request_id: string
  assets: Record<string, any>
  contentType: Record<string, any>
  count: Record<string, any>
  downloadable: Record<string, any>
  expiresAt: Record<string, any>
  fileName: Record<string, any>
  fileSize: Record<string, any>
  id: Record<string, any>
  is_cloudflare_team: Record<string, any>
  metadata: Record<string, any>
  origin: Record<string, any>
  state: Record<string, any>
  tlp: Record<string, any>
  uploadedAt: Record<string, any>
}

export interface DashboardUser {
  display_name?: string
  id: string
}

export interface DashboardUserLoadMatch {
  account_id: string
  request_id: string
}

export interface Dataset {
  deletedAt?: string
  id?: string
  indicatorWriteMode: string
  isAnalytics: boolean
  isPublic: boolean
  name: string
  uuid: string
}

export interface DatasetLoadMatch {
  account_id: string
  id: string
}

export interface DatasetListMatch {
  account_id: string
  include_deleted?: boolean
}

export interface DatasetCreateData {
  account_id: string
  id: string
  deletedAt?: string
  indicatorWriteMode: string
  isAnalytics: boolean
  isPublic: boolean
  name: string
  uuid: string

  // Selects a custom action instead of the plain create:
  //   'copy' | 'create' | 'move' | 'populate'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface DatasetUpdateData {
  account_id: string
  id: string
  deletedAt?: string
  indicatorWriteMode?: string
  isAnalytics?: boolean
  isPublic?: boolean
  name?: string
  uuid?: string
}

export interface DatasetRemoveMatch {
  account_id: string
  id: string
}

export interface Event {
  accountId: number
  account_id: number
  alert_enabled: boolean
  alert_rollup_enabled: boolean
  attacker: string
  attackerCountry: string
  attackerCountryAlpha3: string
  category: string
  childIds?: any[]
  created: string
  createdAt?: string
  createdEventsCount: number
  createdIndicatorsCount: number
  createdRelationshipsCount: number
  created_at: string
  cursor?: string
  custom_threat_feed_id?: number
  data: string
  datasetId: string
  date: string
  errorCount: number
  errors?: any[]
  event: string
  eventIds: any[]
  failedCount: number
  failures?: any[]
  hasChildren: boolean
  id: number
  includeCreatedEvents?: boolean
  indicator: string
  indicatorType: string
  indicatorTypeId: number
  insight?: string
  killChain: number
  message: string
  mitreAttack: any[]
  mitreCapec: any[]
  name: string
  numReferenced: number
  numReferences: number
  order?: string
  orderBy?: string
  page?: number
  pageSize?: number
  parentId: string
  query_json: string
  raw?: Record<string, any>
  rawId: string
  referenced: any[]
  referencedIds: any[]
  references: any[]
  referencesIds: any[]
  relationshipType: string
  relationships: any[]
  relationshipsCreated?: number
  releasabilityId?: string
  rule_enabled: boolean
  rule_list_id?: string
  rule_scope?: string
  search?: any[]
  source: string
  success: boolean
  tags: any[]
  targetCountry: string
  targetCountryAlpha3: string
  targetIndustry: string
  tlp: string
  updatedCount: number
  updated_at: string
  updates: Record<string, any>
  user_email: string
  uuid: string
}

export interface EventLoadMatch {
  account_id: string
  dataset_id?: string
  event_id?: string
  id?: string
  raw_id?: string
  query_id?: number

  // Selects a custom action instead of the plain load:
  //   'raw'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface EventListMatch {
  account_id: string
  cache?: string
  cursor?: string
  dataset_id?: any[]
  force_refresh?: boolean
  format?: string
  order?: string
  order_by?: string
  page?: number
  page_size?: number
  search?: any[]
  by_id_id?: string
  direction?: string
  include_parent?: boolean
  indicator_type_id?: any[]
  max_depth?: number
  relationship_type?: any

  // Selects a custom action instead of the plain list:
  //   'aggregate' | 'graph' | 'query' | 'relationship'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface EventCreateData {
  account_id: string
  cache?: string
  force_refresh?: boolean
  format?: string
  id?: string
  raw_id?: string
  query_id?: number
  accountId: number
  alert_enabled: boolean
  alert_rollup_enabled: boolean
  attacker: string
  attackerCountry: string
  attackerCountryAlpha3: string
  category: string
  childIds?: any[]
  created: string
  createdAt?: string
  createdEventsCount: number
  createdIndicatorsCount: number
  createdRelationshipsCount: number
  created_at: string
  cursor?: string
  custom_threat_feed_id?: number
  data: string
  datasetId: string
  date: string
  errorCount: number
  errors?: any[]
  event: string
  eventIds: any[]
  failedCount: number
  failures?: any[]
  hasChildren: boolean
  includeCreatedEvents?: boolean
  indicator: string
  indicatorType: string
  indicatorTypeId: number
  insight?: string
  killChain: number
  message: string
  mitreAttack: any[]
  mitreCapec: any[]
  name: string
  numReferenced: number
  numReferences: number
  order?: string
  orderBy?: string
  page?: number
  pageSize?: number
  parentId: string
  query_json: string
  raw?: Record<string, any>
  rawId: string
  referenced: any[]
  referencedIds: any[]
  references: any[]
  referencesIds: any[]
  relationshipType: string
  relationships: any[]
  relationshipsCreated?: number
  releasabilityId?: string
  rule_enabled: boolean
  rule_list_id?: string
  rule_scope?: string
  search?: any[]
  source: string
  success: boolean
  tags: any[]
  targetCountry: string
  targetCountryAlpha3: string
  targetIndustry: string
  tlp: string
  updatedCount: number
  updated_at: string
  updates: Record<string, any>
  user_email: string
  uuid: string

  // Selects a custom action instead of the plain create:
  //   'create' | 'create' | 'create' | 'graphql' | 'graphql'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface EventUpdateData {
  account_id: string
  id?: string
  raw_id?: string
  query_id?: number
  accountId?: number
  alert_enabled?: boolean
  alert_rollup_enabled?: boolean
  attacker?: string
  attackerCountry?: string
  attackerCountryAlpha3?: string
  category?: string
  childIds?: any[]
  created?: string
  createdAt?: string
  createdEventsCount?: number
  createdIndicatorsCount?: number
  createdRelationshipsCount?: number
  created_at?: string
  cursor?: string
  custom_threat_feed_id?: number
  data?: string
  datasetId?: string
  date?: string
  errorCount?: number
  errors?: any[]
  event?: string
  eventIds?: any[]
  failedCount?: number
  failures?: any[]
  hasChildren?: boolean
  includeCreatedEvents?: boolean
  indicator?: string
  indicatorType?: string
  indicatorTypeId?: number
  insight?: string
  killChain?: number
  message?: string
  mitreAttack?: any[]
  mitreCapec?: any[]
  name?: string
  numReferenced?: number
  numReferences?: number
  order?: string
  orderBy?: string
  page?: number
  pageSize?: number
  parentId?: string
  query_json?: string
  raw?: Record<string, any>
  rawId?: string
  referenced?: any[]
  referencedIds?: any[]
  references?: any[]
  referencesIds?: any[]
  relationshipType?: string
  relationships?: any[]
  relationshipsCreated?: number
  releasabilityId?: string
  rule_enabled?: boolean
  rule_list_id?: string
  rule_scope?: string
  search?: any[]
  source?: string
  success?: boolean
  tags?: any[]
  targetCountry?: string
  targetCountryAlpha3?: string
  targetIndustry?: string
  tlp?: string
  updatedCount?: number
  updated_at?: string
  updates?: Record<string, any>
  user_email?: string
  uuid?: string
}

export interface EventRemoveMatch {
  account_id: string
  dataset_id?: string
  event_id?: any[]
  query_id?: number

  // Selects a custom action instead of the plain remove:
  //   'delete'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Group {
  createdAt: string
  description: string
  id?: string
  members: any[]
  name: string
  updatedAt: string
  uuid: string
}

export interface GroupLoadMatch {
  account_id: string
  id: string
}

export interface GroupListMatch {
  account_id: string

  // Selects a custom action instead of the plain list:
  //   'member'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface GroupCreateData {
  account_id: string
  createdAt: string
  description: string
  id?: string
  members: any[]
  name: string
  updatedAt: string
  uuid: string

  // Selects a custom action instead of the plain create:
  //   'member'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface GroupUpdateData {
  account_id: string
  id: string
  createdAt?: string
  description?: string
  members?: any[]
  name?: string
  updatedAt?: string
  uuid?: string
}

export interface GroupRemoveMatch {
  account_id: string
  id: string
  member_id?: string
}

export interface Indicator {
  completeness: Record<string, any>
  confidence?: number
  createdAt: string
  datasetId?: string
  description?: string
  durableObjectId: string
  id?: string
  indicatorType: string
  indicators: Record<string, any>
  message: string
  metadata?: Record<string, any>
  pagination: Record<string, any>
  relatedEvents?: any[]
  sources: any[]
  tags?: any[]
  tlp?: string
  type?: string
  updatedAt: string
  uuid: string
  value: string
}

export interface IndicatorLoadMatch {
  account_id: string
  cache?: string
  created_after?: string
  created_before?: string
  cursor?: string
  dataset_id?: any[]
  format?: string
  include_tag?: boolean
  include_total_count?: boolean
  indicator_type?: string
  name?: string
  page?: number
  page_size?: number
  related_event?: any[]
  related_events_limit?: number
  search?: any[]
  tag?: any[]
  tag_search?: any[]
  id?: string

  // Selects a custom action instead of the plain load:
  //   'relationship'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface IndicatorListMatch {
  account_id: string
  dataset_id: string
  indicator_type?: string
  name?: string
  page?: number
  page_size?: number
  related_event?: any[]

  // Selects a custom action instead of the plain list:
  //   'aggregate' | 'tag'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface IndicatorCreateData {
  account_id: string
  dataset_id: string
  completeness: Record<string, any>
  confidence?: number
  createdAt: string
  datasetId?: string
  description?: string
  durableObjectId: string
  id?: string
  indicatorType: string
  indicators: Record<string, any>
  message: string
  metadata?: Record<string, any>
  pagination: Record<string, any>
  relatedEvents?: any[]
  sources: any[]
  tags?: any[]
  tlp?: string
  type?: string
  updatedAt: string
  uuid: string
  value: string

  // Selects a custom action instead of the plain create:
  //   'bulk' | 'create' | 'relationship'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface IndicatorUpdateData {
  account_id: string
  dataset_id: string
  id: string
  rel_uuid?: string
  completeness?: Record<string, any>
  confidence?: number
  createdAt?: string
  datasetId?: string
  description?: string
  durableObjectId?: string
  indicatorType?: string
  indicators?: Record<string, any>
  message?: string
  metadata?: Record<string, any>
  pagination?: Record<string, any>
  relatedEvents?: any[]
  sources?: any[]
  tags?: any[]
  tlp?: string
  type?: string
  updatedAt?: string
  uuid?: string
  value?: string
}

export interface IndicatorRemoveMatch {
  account_id: string
  dataset_id: string
  id: string
  rel_uuid?: string
}

export interface IndicatorType {
  type: string
}

export interface IndicatorTypeLoadMatch {
  account_id: string
  dataset_id?: any[]
}

export interface Permission {
  createdAt: string
  id?: string
  message?: string
  resourceId?: string
  resourceType: string
  role: string
  subjectId: string
  subjectType: string
  success?: boolean
  updatedAt: string
  uuid: string
}

export interface PermissionListMatch {
  account_id: string
  dataset_id: string
}

export interface PermissionCreateData {
  account_id: string
  dataset_id: string
  createdAt: string
  id?: string
  message?: string
  resourceId?: string
  resourceType: string
  role: string
  subjectId: string
  subjectType: string
  success?: boolean
  updatedAt: string
  uuid: string
}

export interface PermissionUpdateData {
  account_id: string
  dataset_id: string
  id: string
  createdAt?: string
  message?: string
  resourceId?: string
  resourceType?: string
  role?: string
  subjectId?: string
  subjectType?: string
  success?: boolean
  updatedAt?: string
  uuid?: string
}

export interface PermissionRemoveMatch {
  account_id: string
  dataset_id: string
  id: string
}

export interface Priority {
  errors: any[]
  id?: string
  labels: any[]
  messages: any[]
  page: number
  per_page: number
  priority: number
  requirement: string
  result?: any
  success: boolean
  tlp: string
}

export interface PriorityLoadMatch {
  account_id: string
  id: string
}

export interface PriorityCreateData {
  account_id: string
  errors: any[]
  id?: string
  labels: any[]
  messages: any[]
  page: number
  per_page: number
  priority: number
  requirement: string
  result?: any
  success: boolean
  tlp: string
}

export interface PriorityUpdateData {
  account_id: string
  id: string
  errors?: any[]
  labels?: any[]
  messages?: any[]
  page?: number
  per_page?: number
  priority?: number
  requirement?: string
  result?: any
  success?: boolean
  tlp?: string
}

export interface PriorityIntelligence {
  id?: string
  labels?: any[]
  priority?: number
  requirement: string
  tlp?: string
}

export interface PriorityIntelligenceLoadMatch {
  account_id: string
  page?: number
  per_page?: number
  id?: string
}

export interface PriorityIntelligenceCreateData {
  account_id: string
  id?: string
  labels?: any[]
  priority?: number
  requirement: string
  tlp?: string
}

export interface PriorityIntelligenceUpdateData {
  account_id: string
  id: string
  labels?: any[]
  priority?: number
  requirement?: string
  tlp?: string
}

export interface PriorityIntelligenceRemoveMatch {
  account_id: string
  id: string
}

export interface PriorityIntelligenceRequirement {
  as_of?: string
  backtest_days?: number
  candidate_limit?: number
  dataset_ids?: any[]
  dimension: string
  emerging_min_current_count?: number
  enabled?: boolean
  established_min_absolute_delta?: number
  established_min_prior_count?: number
  established_min_relative_delta?: number
  value: string
  window_days?: number
}

export interface PriorityIntelligenceRequirementLoadMatch {
  account_id: string
  enabled?: boolean
  page?: number
  per_page?: number
  backtest_id?: string
  evaluation_id?: string
}

export interface PriorityIntelligenceRequirementCreateData {
  account_id: string
  as_of?: string
  backtest_days?: number
  candidate_limit?: number
  dataset_ids?: any[]
  dimension: string
  emerging_min_current_count?: number
  enabled?: boolean
  established_min_absolute_delta?: number
  established_min_prior_count?: number
  established_min_relative_delta?: number
  value: string
  window_days?: number
}

export interface PriorityIntelligenceRequirementUpdateData {
  account_id: string
  interest_id: string
  as_of?: string
  backtest_days?: number
  candidate_limit?: number
  dataset_ids?: any[]
  dimension?: string
  emerging_min_current_count?: number
  enabled?: boolean
  established_min_absolute_delta?: number
  established_min_prior_count?: number
  established_min_relative_delta?: number
  value?: string
  window_days?: number
}

export interface PriorityIntelligenceRequirementRemoveMatch {
  account_id: string
  interest_id: string
}

export interface PriorityIntelligenceRequirementsPir {
  errors: any[]
  labels: any[]
  messages: any[]
  priority: number
  requirement: string
  result?: any
  success: boolean
  tlp: string
}

export interface PriorityIntelligenceRequirementsPirListMatch {
  account_id: string
}

export interface PriorityIntelligenceRequirementsPirCreateData {
  account_id: string
  errors: any[]
  labels: any[]
  messages: any[]
  priority: number
  requirement: string
  result?: any
  success: boolean
  tlp: string
}

export interface PublicCredentialMonitor {
  created_at: string
  domain: string
  id: number
  matched_at: string
  username: string
}

export interface PublicCredentialMonitorListMatch {
  account_id: string
  domain?: string
  page?: number
  per_page?: number
  username?: string
}

export interface PublicCredentialMonitorCreateData {
  account_id: string
  created_at: string
  domain: string
  id: number
  matched_at: string
  username: string
}

export interface PublicCredentialMonitorRemoveMatch {
  account_id: string
  id: number
}

export interface Request {
  completed_after?: any
  completed_before?: any
  content?: string
  created_after?: any
  created_before?: any
  errors: any[]
  id?: string
  messages: any[]
  page: number
  per_page: number
  priority?: string
  request_type?: string
  result: Record<string, any>
  sort_by?: string
  sort_order?: string
  status?: string
  success: boolean
  summary?: string
  tlp?: string
}

export interface RequestLoadMatch {
  account_id: string
  id: string
}

export interface RequestCreateData {
  account_id: string
  completed_after?: any
  completed_before?: any
  content?: string
  created_after?: any
  created_before?: any
  errors: any[]
  id?: string
  messages: any[]
  page: number
  per_page: number
  priority?: string
  request_type?: string
  result: Record<string, any>
  sort_by?: string
  sort_order?: string
  status?: string
  success: boolean
  summary?: string
  tlp?: string
}

export interface RequestUpdateData {
  account_id: string
  id: string
  completed_after?: any
  completed_before?: any
  content?: string
  created_after?: any
  created_before?: any
  errors?: any[]
  messages?: any[]
  page?: number
  per_page?: number
  priority?: string
  request_type?: string
  result?: Record<string, any>
  sort_by?: string
  sort_order?: string
  status?: string
  success?: boolean
  summary?: string
  tlp?: string
}

export interface RequestForInformationRfi {
  content?: string
  errors: any[]
  id?: string
  messages: any[]
  priority?: string
  request_type?: string
  result?: any[]
  source?: string
  success: boolean
  summary?: string
  tlp?: string
}

export interface RequestForInformationRfiLoadMatch {
  account_id: string
  asset_id: string
  request_id: string
}

export interface RequestForInformationRfiListMatch {
  account_id: string
}

export interface RequestForInformationRfiCreateData {
  account_id: string
  request_id?: string
  content?: string
  errors: any[]
  id?: string
  messages: any[]
  priority?: string
  request_type?: string
  result?: any[]
  source?: string
  success: boolean
  summary?: string
  tlp?: string

  // Selects a custom action instead of the plain create:
  //   'asset' | 'message'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface RequestForInformationRfiUpdateData {
  account_id: string
  asset_id?: string
  request_id: string
  message_id?: number
  content?: string
  errors?: any[]
  id?: string
  messages?: any[]
  priority?: string
  request_type?: string
  result?: any[]
  source?: string
  success?: boolean
  summary?: string
  tlp?: string
}

export interface RequestsDashboard {
  created: string
  defaultValue?: any
  description?: string
  displayOrder: number
  errors: any[]
  fieldLabel: string
  fieldName: string
  fieldType: string
  id: string
  messages: any[]
  options?: any[]
  projectType: string
  project_type: string
  public: boolean
  request_types: any[]
  required: boolean
  result: Record<string, any>
  sectionID?: string
  sectionLabel?: string
  success: Record<string, any>
  total: number
  updated: string
  validation?: Record<string, any>
}

export interface RequestsDashboardLoadMatch {
  account_id: string
  project_type: string
}

export interface RequestsDashboardListMatch {
  account_id: string
  project_type?: string
  country?: string
  request_type?: string
}

export interface Rfi {
  account: Record<string, any>
  assignee: string
  completed: string
  created: string
  description?: string
  eventId?: string
  id: string
  investigation_id: string
  is_free_request: boolean
  message_tokens: number
  metadata?: Record<string, any>
  pagination: Record<string, any>
  priority: string
  readable_id: string
  release_entitlements: string
  report_id: string
  request: Record<string, any>
  request_type?: string
  result: any[]
  status: string
  subtypeId?: string
  success: string
  summary: string
  title?: string
  tlp: string
  tokens: number
  updated: string
}

export interface RfiLoadMatch {
  account_id?: string
  project_type: string
  assignee?: string
  created_by?: string
  id?: string
  metadata?: string
  order?: string
  order_by?: string
  page?: number
  page_size?: number
  priority?: string
  readable_id?: string
  request_type?: string
  search?: string
  status?: string
  summary?: string
  tlp?: string
  request_id?: string
}

export interface RfiCreateData {
  account_id: string
  project_type: string
  account: Record<string, any>
  assignee: string
  completed: string
  created: string
  description?: string
  eventId?: string
  id: string
  investigation_id: string
  is_free_request: boolean
  message_tokens: number
  metadata?: Record<string, any>
  pagination: Record<string, any>
  priority: string
  readable_id: string
  release_entitlements: string
  report_id: string
  request: Record<string, any>
  request_type?: string
  result: any[]
  status: string
  subtypeId?: string
  success: string
  summary: string
  title?: string
  tlp: string
  tokens: number
  updated: string
}

export interface RfiUpdateData {
  account_id: string
  project_type: string
  request_id: string
  account?: Record<string, any>
  assignee?: string
  completed?: string
  created?: string
  description?: string
  eventId?: string
  id?: string
  investigation_id?: string
  is_free_request?: boolean
  message_tokens?: number
  metadata?: Record<string, any>
  pagination?: Record<string, any>
  priority?: string
  readable_id?: string
  release_entitlements?: string
  report_id?: string
  request?: Record<string, any>
  request_type?: string
  result?: any[]
  status?: string
  subtypeId?: string
  success?: string
  summary?: string
  title?: string
  tlp?: string
  tokens?: number
  updated?: string
}

export interface RfiMessage {
  attachment_asset_ids?: any[]
  attachments: any[]
  author_id?: string
  author_name?: string
  content: string
  created: string
  id: number
  is_cloudflare_team: boolean
  is_published: boolean
  publish?: boolean
  published: string
  tlp: string
  updated: string
}

export interface RfiMessageLoadMatch {
  account_id: string
  id: string
  project_type: string
  request_id: string
}

export interface RfiMessageListMatch {
  account_id: string
  project_type: string
  request_id: string
  page?: string
  per_page?: string
}

export interface RfiMessageCreateData {
  account_id: string
  project_type: string
  request_id: string
  attachment_asset_ids?: any[]
  attachments: any[]
  author_id?: string
  author_name?: string
  content: string
  created: string
  id: number
  is_cloudflare_team: boolean
  is_published: boolean
  publish?: boolean
  published: string
  tlp: string
  updated: string
}

export interface RfiMessageUpdateData {
  account_id: string
  id: string
  project_type: string
  request_id: string
  attachment_asset_ids?: any[]
  attachments?: any[]
  author_id?: string
  author_name?: string
  content?: string
  created?: string
  is_cloudflare_team?: boolean
  is_published?: boolean
  publish?: boolean
  published?: string
  tlp?: string
  updated?: string
}

export interface Rule {
  arrays: any[]
  headers: Record<string, any>
  operators: Record<string, any>
  scalars: any[]
  string_arrays: any[]
  structs: any[]
}

export interface RuleListMatch {
  account_id: string

  // Selects a custom action instead of the plain list:
  //   'managed'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Scan {
  errors: any[]
  frequency?: number
  ips?: any[]
  messages: any[]
  ports?: any[]
  result: Record<string, any>
  success: boolean
}

export interface ScanLoadMatch {
  account_id: string
  config_id: string
}

export interface ScanListMatch {
  account_id: string

  // Selects a custom action instead of the plain list:
  //   'config'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ScanCreateData {
  account_id: string
  errors: any[]
  frequency?: number
  ips?: any[]
  messages: any[]
  ports?: any[]
  result: Record<string, any>
  success: boolean

  // Selects a custom action instead of the plain create:
  //   'config'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ScanUpdateData {
  account_id: string
  config_id: string
  errors?: any[]
  frequency?: number
  ips?: any[]
  messages?: any[]
  ports?: any[]
  result?: Record<string, any>
  success?: boolean
}

export interface ScanRemoveMatch {
  account_id: string
  config_id: string
}

export interface Tag {
  activeDuration?: string
  activeDuration_annotated: Record<string, any>
  actorCategory?: string
  actorCategory_annotated: Record<string, any>
  aliasGroupNames?: any[]
  aliasGroupNamesInternal?: any[]
  aliases?: any[]
  attributionOrganization?: string
  attributionOrganization_annotated: Record<string, any>
  categoryName?: string
  categoryUuid?: string
  confidence?: number
  createdAt?: string
  dateOfDiscovery?: string
  description?: string
  externalReferenceLinks?: any[]
  externalReferences?: any[]
  externalReferences_annotated?: any[]
  id?: string
  internalAliases?: any[]
  internalDescription?: string
  lastSeen?: string
  metadata?: Record<string, any>
  motive?: string
  motive_annotated: Record<string, any>
  opsecLevel?: string
  opsecLevel_annotated: Record<string, any>
  originCountryISO?: string
  originCountryISO_annotated: Record<string, any>
  priority?: number
  priority_annotated: Record<string, any>
  properties?: Record<string, any>
  sophisticationLevel?: string
  sophisticationLevel_annotated: Record<string, any>
  tlp?: string
  type?: string
  updatedAt?: string
  uuid: string
  value: string
  version?: number
}

export interface TagLoadMatch {
  account_id: string
  id: string

  // Selects a custom action instead of the plain load:
  //   'relationship'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface TagListMatch {
  account_id: string
  cache?: string
  category_uuid?: string
  filter?: any[]
  page?: number
  page_size?: number
  search?: string
  value?: string

  // Selects a custom action instead of the plain list:
  //   'indicator' | 'indicator'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface TagCreateData {
  account_id: string
  id?: string
  activeDuration?: string
  activeDuration_annotated: Record<string, any>
  actorCategory?: string
  actorCategory_annotated: Record<string, any>
  aliasGroupNames?: any[]
  aliasGroupNamesInternal?: any[]
  aliases?: any[]
  attributionOrganization?: string
  attributionOrganization_annotated: Record<string, any>
  categoryName?: string
  categoryUuid?: string
  confidence?: number
  createdAt?: string
  dateOfDiscovery?: string
  description?: string
  externalReferenceLinks?: any[]
  externalReferences?: any[]
  externalReferences_annotated?: any[]
  internalAliases?: any[]
  internalDescription?: string
  lastSeen?: string
  metadata?: Record<string, any>
  motive?: string
  motive_annotated: Record<string, any>
  opsecLevel?: string
  opsecLevel_annotated: Record<string, any>
  originCountryISO?: string
  originCountryISO_annotated: Record<string, any>
  priority?: number
  priority_annotated: Record<string, any>
  properties?: Record<string, any>
  sophisticationLevel?: string
  sophisticationLevel_annotated: Record<string, any>
  tlp?: string
  type?: string
  updatedAt?: string
  uuid: string
  value: string
  version?: number

  // Selects a custom action instead of the plain create:
  //   'create' | 'relationship'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface TagUpdateData {
  account_id: string
  id: string
  rel_uuid?: string
  dataset_id?: string
  activeDuration?: string
  activeDuration_annotated?: Record<string, any>
  actorCategory?: string
  actorCategory_annotated?: Record<string, any>
  aliasGroupNames?: any[]
  aliasGroupNamesInternal?: any[]
  aliases?: any[]
  attributionOrganization?: string
  attributionOrganization_annotated?: Record<string, any>
  categoryName?: string
  categoryUuid?: string
  confidence?: number
  createdAt?: string
  dateOfDiscovery?: string
  description?: string
  externalReferenceLinks?: any[]
  externalReferences?: any[]
  externalReferences_annotated?: any[]
  internalAliases?: any[]
  internalDescription?: string
  lastSeen?: string
  metadata?: Record<string, any>
  motive?: string
  motive_annotated?: Record<string, any>
  opsecLevel?: string
  opsecLevel_annotated?: Record<string, any>
  originCountryISO?: string
  originCountryISO_annotated?: Record<string, any>
  priority?: number
  priority_annotated?: Record<string, any>
  properties?: Record<string, any>
  sophisticationLevel?: string
  sophisticationLevel_annotated?: Record<string, any>
  tlp?: string
  type?: string
  updatedAt?: string
  uuid?: string
  value?: string
  version?: number
}

export interface TagRemoveMatch {
  account_id: string
  id: string
  rel_uuid?: string
  dataset_id?: string
}

export interface TagCategory {
  createdAt?: string
  description?: string
  id?: string
  name: string
  schema?: any[]
  updatedAt?: string
  uuid: string
}

export interface TagCategoryLoadMatch {
  account_id: string
  id: string
}

export interface TagCategoryListMatch {
  account_id: string
  search?: string
}

export interface TagCategoryCreateData {
  account_id: string
  createdAt?: string
  description?: string
  id?: string
  name: string
  schema?: any[]
  updatedAt?: string
  uuid: string
}

export interface TagCategoryUpdateData {
  account_id: string
  id: string
  createdAt?: string
  description?: string
  name?: string
  schema?: any[]
  updatedAt?: string
  uuid?: string
}

export interface TagCategoryRemoveMatch {
  account_id: string
  id: string
}

export interface TargetIndustry {
  type: string
}

export interface TargetIndustryLoadMatch {
  account_id: string
  dataset_id?: string

  // Selects a custom action instead of the plain load:
  //   'catalog'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ThreatSignal {
  category_id?: string
  category_uuids: any[]
  config?: string
  display_name?: string
  display_order?: number
  enabled?: boolean
  errors: any[]
  feeds: any[]
  is_active?: boolean
  message: string
  messages: any[]
  name?: string
  opted_out: boolean
  output_schema?: string
  poll_interval_s?: number
  prompt?: string
  read: boolean
  result: any
  skill_ids: any[]
  success: boolean
  tag_id: string
  title?: string
  url?: string
  why_valuable?: string
}

export interface ThreatSignalLoadMatch {
  account_id: string
  article_id?: string
  format?: string
  skill_id?: string
  feed_id?: string

  // Selects a custom action instead of the plain load:
  //   'curated_feed' | 'feed' | 'health' | 'skill'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ThreatSignalListMatch {
  account_id: string
  skill_id: string

  // Selects a custom action instead of the plain list:
  //   'article' | 'category' | 'indicator'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ThreatSignalCreateData {
  account_id: string
  article_id?: string
  skill_id?: string
  feed_id?: string
  category_id?: string
  category_uuids: any[]
  config?: string
  display_name?: string
  display_order?: number
  enabled?: boolean
  errors: any[]
  feeds: any[]
  is_active?: boolean
  message: string
  messages: any[]
  name?: string
  opted_out: boolean
  output_schema?: string
  poll_interval_s?: number
  prompt?: string
  read: boolean
  result: any
  skill_ids: any[]
  success: boolean
  tag_id: string
  title?: string
  url?: string
  why_valuable?: string

  // Selects a custom action instead of the plain create:
  //   'curated_feed' | 'feed' | 'skill' | 'tag'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ThreatSignalUpdateData {
  account_id: string
  feed_id?: string
  skill_id?: string
  category_id?: string
  category_uuids?: any[]
  config?: string
  display_name?: string
  display_order?: number
  enabled?: boolean
  errors?: any[]
  feeds?: any[]
  is_active?: boolean
  message?: string
  messages?: any[]
  name?: string
  opted_out?: boolean
  output_schema?: string
  poll_interval_s?: number
  prompt?: string
  read?: boolean
  result?: any
  skill_ids?: any[]
  success?: boolean
  tag_id?: string
  title?: string
  url?: string
  why_valuable?: string
}

export interface ThreatSignalRemoveMatch {
  account_id: string
  article_id?: string
  tag_id?: string
  curated_feed_id?: string
  feed_id?: string
  skill_id?: string
}

