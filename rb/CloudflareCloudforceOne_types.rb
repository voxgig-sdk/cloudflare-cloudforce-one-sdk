# frozen_string_literal: true

# Typed models for the CloudflareCloudforceOne SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Attacker entity data model.
#
# @!attribute [rw] type
#   @return [String]
Attacker = Struct.new(
  :type,
  keyword_init: true
)

# Request payload for Attacker#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] dataset_id
#   @return [Array, nil]
AttackerLoadMatch = Struct.new(
  :account_id,
  :dataset_id,
  keyword_init: true
)

# BinDb entity data model.
#
# @!attribute [rw] content_type
#   @return [String]
#
# @!attribute [rw] md5
#   @return [String]
#
# @!attribute [rw] sha1
#   @return [String]
#
# @!attribute [rw] sha256
#   @return [String]
BinDb = Struct.new(
  :content_type,
  :md5,
  :sha1,
  :sha256,
  keyword_init: true
)

# Request payload for BinDb#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] hash
#   @return [String]
BinDbLoadMatch = Struct.new(
  :account_id,
  :hash,
  keyword_init: true
)

# Request payload for BinDb#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] content_type
#   @return [String]
#
# @!attribute [rw] md5
#   @return [String]
#
# @!attribute [rw] sha1
#   @return [String]
#
# @!attribute [rw] sha256
#   @return [String]
BinDbCreateData = Struct.new(
  :account_id,
  :content_type,
  :md5,
  :sha1,
  :sha256,
  keyword_init: true
)

# BrandProtection entity data model.
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] body
#   @return [String]
#
# @!attribute [rw] brand
#   @return [String]
#
# @!attribute [rw] category
#   @return [String]
#
# @!attribute [rw] content_type
#   @return [String, nil]
#
# @!attribute [rw] createNotice
#   @return [Boolean, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] dismissed
#   @return [Boolean]
#
# @!attribute [rw] domain
#   @return [String]
#
# @!attribute [rw] domain_id
#   @return [Integer]
#
# @!attribute [rw] domains
#   @return [Array]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] fields
#   @return [Hash]
#
# @!attribute [rw] first_seen
#   @return [String]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Float]
#
# @!attribute [rw] image_data
#   @return [String]
#
# @!attribute [rw] letterText
#   @return [String]
#
# @!attribute [rw] letterType
#   @return [String]
#
# @!attribute [rw] matchId
#   @return [Float]
#
# @!attribute [rw] matchType
#   @return [String]
#
# @!attribute [rw] match_details
#   @return [Array, nil]
#
# @!attribute [rw] match_ids
#   @return [Array, nil]
#
# @!attribute [rw] matched_at
#   @return [String]
#
# @!attribute [rw] matches
#   @return [Array]
#
# @!attribute [rw] max_time
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] min_time
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] noticeParams
#   @return [Hash]
#
# @!attribute [rw] notices
#   @return [Array]
#
# @!attribute [rw] public_scans
#   @return [Hash]
#
# @!attribute [rw] queryId
#   @return [Float]
#
# @!attribute [rw] queryIds
#   @return [Array, nil]
#
# @!attribute [rw] query_id
#   @return [Integer]
#
# @!attribute [rw] r2_path
#   @return [String]
#
# @!attribute [rw] registrar
#   @return [String]
#
# @!attribute [rw] result
#   @return [Object]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] scan
#   @return [Boolean, nil]
#
# @!attribute [rw] scan_matches
#   @return [Boolean, nil]
#
# @!attribute [rw] scan_status
#   @return [String]
#
# @!attribute [rw] scan_submission_id
#   @return [Integer]
#
# @!attribute [rw] score_threshold
#   @return [Float, nil]
#
# @!attribute [rw] search_lookback
#   @return [Boolean, nil]
#
# @!attribute [rw] similarity_score
#   @return [Float]
#
# @!attribute [rw] similarity_threshold
#   @return [Float]
#
# @!attribute [rw] source
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] string_matches
#   @return [Array]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] tag
#   @return [String]
#
# @!attribute [rw] takedownNoticeId
#   @return [Float]
#
# @!attribute [rw] templateId
#   @return [String]
#
# @!attribute [rw] top_k
#   @return [Integer, nil]
#
# @!attribute [rw] total_analyzed
#   @return [Float]
#
# @!attribute [rw] total_matches
#   @return [Float]
#
# @!attribute [rw] truncated
#   @return [Boolean]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] uploaded_at
#   @return [String]
#
# @!attribute [rw] url_scan_id
#   @return [String]
BrandProtection = Struct.new(
  :action,
  :body,
  :brand,
  :category,
  :content_type,
  :createNotice,
  :createdAt,
  :description,
  :dismissed,
  :domain,
  :domain_id,
  :domains,
  :errors,
  :fields,
  :first_seen,
  :format,
  :id,
  :image_data,
  :letterText,
  :letterType,
  :matchId,
  :matchType,
  :match_details,
  :match_ids,
  :matched_at,
  :matches,
  :max_time,
  :message,
  :messages,
  :min_time,
  :name,
  :noticeParams,
  :notices,
  :public_scans,
  :queryId,
  :queryIds,
  :query_id,
  :r2_path,
  :registrar,
  :result,
  :result_info,
  :scan,
  :scan_matches,
  :scan_status,
  :scan_submission_id,
  :score_threshold,
  :search_lookback,
  :similarity_score,
  :similarity_threshold,
  :source,
  :status,
  :string_matches,
  :success,
  :tag,
  :takedownNoticeId,
  :templateId,
  :top_k,
  :total_analyzed,
  :total_matches,
  :truncated,
  :updatedAt,
  :uploaded_at,
  :url_scan_id,
  keyword_init: true
)

# Request payload for BrandProtection#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] letter_id
#   @return [Integer, nil]
#
# @!attribute [rw] takedown_notice_id
#   @return [Integer, nil]
#
# @!attribute [rw] notice_id
#   @return [Integer, nil]
#
# @!attribute [rw] template_id
#   @return [String, nil]
BrandProtectionLoadMatch = Struct.new(
  :account_id,
  :letter_id,
  :takedown_notice_id,
  :notice_id,
  :template_id,
  keyword_init: true
)

# Request payload for BrandProtection#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] domain_search
#   @return [String, nil]
#
# @!attribute [rw] include_dismissed
#   @return [String, nil]
#
# @!attribute [rw] include_domain_id
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [String, nil]
#
# @!attribute [rw] offset
#   @return [String, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] query_id
#   @return [Array, nil]
#
# @!attribute [rw] download
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] takedown_notice_id
#   @return [Integer, nil]
BrandProtectionListMatch = Struct.new(
  :account_id,
  :domain_search,
  :include_dismissed,
  :include_domain_id,
  :limit,
  :offset,
  :order,
  :order_by,
  :query_id,
  :download,
  :id,
  :page,
  :per_page,
  :takedown_notice_id,
  keyword_init: true
)

# Request payload for BrandProtection#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] download
#   @return [String, nil]
#
# @!attribute [rw] show_historic
#   @return [String, nil]
#
# @!attribute [rw] match_id
#   @return [Integer, nil]
#
# @!attribute [rw] query_id
#   @return [Integer, nil]
#
# @!attribute [rw] takedown_notice_id
#   @return [Integer, nil]
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] body
#   @return [String]
#
# @!attribute [rw] brand
#   @return [String]
#
# @!attribute [rw] category
#   @return [String]
#
# @!attribute [rw] content_type
#   @return [String, nil]
#
# @!attribute [rw] createNotice
#   @return [Boolean, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] dismissed
#   @return [Boolean]
#
# @!attribute [rw] domain
#   @return [String]
#
# @!attribute [rw] domain_id
#   @return [Integer]
#
# @!attribute [rw] domains
#   @return [Array]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] fields
#   @return [Hash]
#
# @!attribute [rw] first_seen
#   @return [String]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Float]
#
# @!attribute [rw] image_data
#   @return [String]
#
# @!attribute [rw] letterText
#   @return [String]
#
# @!attribute [rw] letterType
#   @return [String]
#
# @!attribute [rw] matchId
#   @return [Float]
#
# @!attribute [rw] matchType
#   @return [String]
#
# @!attribute [rw] match_details
#   @return [Array, nil]
#
# @!attribute [rw] match_ids
#   @return [Array, nil]
#
# @!attribute [rw] matched_at
#   @return [String]
#
# @!attribute [rw] matches
#   @return [Array]
#
# @!attribute [rw] max_time
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] min_time
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] noticeParams
#   @return [Hash]
#
# @!attribute [rw] notices
#   @return [Array]
#
# @!attribute [rw] public_scans
#   @return [Hash]
#
# @!attribute [rw] queryId
#   @return [Float]
#
# @!attribute [rw] queryIds
#   @return [Array, nil]
#
# @!attribute [rw] r2_path
#   @return [String]
#
# @!attribute [rw] registrar
#   @return [String]
#
# @!attribute [rw] result
#   @return [Object]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] scan
#   @return [Boolean, nil]
#
# @!attribute [rw] scan_matches
#   @return [Boolean, nil]
#
# @!attribute [rw] scan_status
#   @return [String]
#
# @!attribute [rw] scan_submission_id
#   @return [Integer]
#
# @!attribute [rw] score_threshold
#   @return [Float, nil]
#
# @!attribute [rw] search_lookback
#   @return [Boolean, nil]
#
# @!attribute [rw] similarity_score
#   @return [Float]
#
# @!attribute [rw] similarity_threshold
#   @return [Float]
#
# @!attribute [rw] source
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] string_matches
#   @return [Array]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] tag
#   @return [String]
#
# @!attribute [rw] takedownNoticeId
#   @return [Float]
#
# @!attribute [rw] templateId
#   @return [String]
#
# @!attribute [rw] top_k
#   @return [Integer, nil]
#
# @!attribute [rw] total_analyzed
#   @return [Float]
#
# @!attribute [rw] total_matches
#   @return [Float]
#
# @!attribute [rw] truncated
#   @return [Boolean]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] uploaded_at
#   @return [String]
#
# @!attribute [rw] url_scan_id
#   @return [String]
BrandProtectionCreateData = Struct.new(
  :account_id,
  :download,
  :show_historic,
  :match_id,
  :query_id,
  :takedown_notice_id,
  :action,
  :body,
  :brand,
  :category,
  :content_type,
  :createNotice,
  :createdAt,
  :description,
  :dismissed,
  :domain,
  :domain_id,
  :domains,
  :errors,
  :fields,
  :first_seen,
  :format,
  :id,
  :image_data,
  :letterText,
  :letterType,
  :matchId,
  :matchType,
  :match_details,
  :match_ids,
  :matched_at,
  :matches,
  :max_time,
  :message,
  :messages,
  :min_time,
  :name,
  :noticeParams,
  :notices,
  :public_scans,
  :queryId,
  :queryIds,
  :r2_path,
  :registrar,
  :result,
  :result_info,
  :scan,
  :scan_matches,
  :scan_status,
  :scan_submission_id,
  :score_threshold,
  :search_lookback,
  :similarity_score,
  :similarity_threshold,
  :source,
  :status,
  :string_matches,
  :success,
  :tag,
  :takedownNoticeId,
  :templateId,
  :top_k,
  :total_analyzed,
  :total_matches,
  :truncated,
  :updatedAt,
  :uploaded_at,
  :url_scan_id,
  keyword_init: true
)

# Request payload for BrandProtection#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] notice_id
#   @return [Integer, nil]
#
# @!attribute [rw] template_id
#   @return [String, nil]
#
# @!attribute [rw] action
#   @return [String, nil]
#
# @!attribute [rw] body
#   @return [String, nil]
#
# @!attribute [rw] brand
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] content_type
#   @return [String, nil]
#
# @!attribute [rw] createNotice
#   @return [Boolean, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] dismissed
#   @return [Boolean, nil]
#
# @!attribute [rw] domain
#   @return [String, nil]
#
# @!attribute [rw] domain_id
#   @return [Integer, nil]
#
# @!attribute [rw] domains
#   @return [Array, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] fields
#   @return [Hash, nil]
#
# @!attribute [rw] first_seen
#   @return [String, nil]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Float, nil]
#
# @!attribute [rw] image_data
#   @return [String, nil]
#
# @!attribute [rw] letterText
#   @return [String, nil]
#
# @!attribute [rw] letterType
#   @return [String, nil]
#
# @!attribute [rw] matchId
#   @return [Float, nil]
#
# @!attribute [rw] matchType
#   @return [String, nil]
#
# @!attribute [rw] match_details
#   @return [Array, nil]
#
# @!attribute [rw] match_ids
#   @return [Array, nil]
#
# @!attribute [rw] matched_at
#   @return [String, nil]
#
# @!attribute [rw] matches
#   @return [Array, nil]
#
# @!attribute [rw] max_time
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] min_time
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] noticeParams
#   @return [Hash, nil]
#
# @!attribute [rw] notices
#   @return [Array, nil]
#
# @!attribute [rw] public_scans
#   @return [Hash, nil]
#
# @!attribute [rw] queryId
#   @return [Float, nil]
#
# @!attribute [rw] queryIds
#   @return [Array, nil]
#
# @!attribute [rw] query_id
#   @return [Integer, nil]
#
# @!attribute [rw] r2_path
#   @return [String, nil]
#
# @!attribute [rw] registrar
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Object, nil]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] scan
#   @return [Boolean, nil]
#
# @!attribute [rw] scan_matches
#   @return [Boolean, nil]
#
# @!attribute [rw] scan_status
#   @return [String, nil]
#
# @!attribute [rw] scan_submission_id
#   @return [Integer, nil]
#
# @!attribute [rw] score_threshold
#   @return [Float, nil]
#
# @!attribute [rw] search_lookback
#   @return [Boolean, nil]
#
# @!attribute [rw] similarity_score
#   @return [Float, nil]
#
# @!attribute [rw] similarity_threshold
#   @return [Float, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] string_matches
#   @return [Array, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] tag
#   @return [String, nil]
#
# @!attribute [rw] takedownNoticeId
#   @return [Float, nil]
#
# @!attribute [rw] templateId
#   @return [String, nil]
#
# @!attribute [rw] top_k
#   @return [Integer, nil]
#
# @!attribute [rw] total_analyzed
#   @return [Float, nil]
#
# @!attribute [rw] total_matches
#   @return [Float, nil]
#
# @!attribute [rw] truncated
#   @return [Boolean, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] uploaded_at
#   @return [String, nil]
#
# @!attribute [rw] url_scan_id
#   @return [String, nil]
BrandProtectionUpdateData = Struct.new(
  :account_id,
  :notice_id,
  :template_id,
  :action,
  :body,
  :brand,
  :category,
  :content_type,
  :createNotice,
  :createdAt,
  :description,
  :dismissed,
  :domain,
  :domain_id,
  :domains,
  :errors,
  :fields,
  :first_seen,
  :format,
  :id,
  :image_data,
  :letterText,
  :letterType,
  :matchId,
  :matchType,
  :match_details,
  :match_ids,
  :matched_at,
  :matches,
  :max_time,
  :message,
  :messages,
  :min_time,
  :name,
  :noticeParams,
  :notices,
  :public_scans,
  :queryId,
  :queryIds,
  :query_id,
  :r2_path,
  :registrar,
  :result,
  :result_info,
  :scan,
  :scan_matches,
  :scan_status,
  :scan_submission_id,
  :score_threshold,
  :search_lookback,
  :similarity_score,
  :similarity_threshold,
  :source,
  :status,
  :string_matches,
  :success,
  :tag,
  :takedownNoticeId,
  :templateId,
  :top_k,
  :total_analyzed,
  :total_matches,
  :truncated,
  :updatedAt,
  :uploaded_at,
  :url_scan_id,
  keyword_init: true
)

# Request payload for BrandProtection#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] letter_id
#   @return [Integer, nil]
#
# @!attribute [rw] takedown_notice_id
#   @return [Integer, nil]
#
# @!attribute [rw] notice_id
#   @return [Integer, nil]
#
# @!attribute [rw] query_id
#   @return [String, nil]
#
# @!attribute [rw] template_id
#   @return [String, nil]
BrandProtectionRemoveMatch = Struct.new(
  :account_id,
  :letter_id,
  :takedown_notice_id,
  :notice_id,
  :query_id,
  :template_id,
  keyword_init: true
)

# Category entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] killChain
#   @return [Float]
#
# @!attribute [rw] mitreAttack
#   @return [Array, nil]
#
# @!attribute [rw] mitreCapec
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] shortname
#   @return [String, nil]
#
# @!attribute [rw] uuid
#   @return [String]
Category = Struct.new(
  :id,
  :killChain,
  :mitreAttack,
  :mitreCapec,
  :name,
  :shortname,
  :uuid,
  keyword_init: true
)

# Request payload for Category#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] category_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
CategoryLoadMatch = Struct.new(
  :account_id,
  :category_id,
  :id,
  keyword_init: true
)

# Request payload for Category#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] dataset_id
#   @return [Array, nil]
CategoryListMatch = Struct.new(
  :account_id,
  :dataset_id,
  keyword_init: true
)

# Request payload for Category#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] category_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] killChain
#   @return [Float]
#
# @!attribute [rw] mitreAttack
#   @return [Array, nil]
#
# @!attribute [rw] mitreCapec
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] shortname
#   @return [String, nil]
#
# @!attribute [rw] uuid
#   @return [String]
CategoryCreateData = Struct.new(
  :account_id,
  :category_id,
  :id,
  :killChain,
  :mitreAttack,
  :mitreCapec,
  :name,
  :shortname,
  :uuid,
  keyword_init: true
)

# Request payload for Category#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] category_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] killChain
#   @return [Float, nil]
#
# @!attribute [rw] mitreAttack
#   @return [Array, nil]
#
# @!attribute [rw] mitreCapec
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] shortname
#   @return [String, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
CategoryUpdateData = Struct.new(
  :account_id,
  :category_id,
  :id,
  :killChain,
  :mitreAttack,
  :mitreCapec,
  :name,
  :shortname,
  :uuid,
  keyword_init: true
)

# Request payload for Category#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] category_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
CategoryRemoveMatch = Struct.new(
  :account_id,
  :category_id,
  :id,
  keyword_init: true
)

# CloudforceOneAccountExemption entity data model.
#
# @!attribute [rw] namespace
#   @return [Array]
#
# @!attribute [rw] tag_match
#   @return [Array]
#
# @!attribute [rw] worker_name
#   @return [Array]
CloudforceOneAccountExemption = Struct.new(
  :namespace,
  :tag_match,
  :worker_name,
  keyword_init: true
)

# Request payload for CloudforceOneAccountExemption#list.
#
# @!attribute [rw] account_id
#   @return [String]
CloudforceOneAccountExemptionListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for CloudforceOneAccountExemption#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] namespace
#   @return [Array]
#
# @!attribute [rw] tag_match
#   @return [Array]
#
# @!attribute [rw] worker_name
#   @return [Array]
CloudforceOneAccountExemptionCreateData = Struct.new(
  :account_id,
  :namespace,
  :tag_match,
  :worker_name,
  keyword_init: true
)

# Request payload for CloudforceOneAccountExemption#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] namespace
#   @return [Array, nil]
#
# @!attribute [rw] tag_match
#   @return [Array, nil]
#
# @!attribute [rw] worker_name
#   @return [Array, nil]
CloudforceOneAccountExemptionUpdateData = Struct.new(
  :account_id,
  :namespace,
  :tag_match,
  :worker_name,
  keyword_init: true
)

# Request payload for CloudforceOneAccountExemption#remove.
#
# @!attribute [rw] account_id
#   @return [String]
CloudforceOneAccountExemptionRemoveMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# CloudforceOneDeleteAll entity data model.
class CloudforceOneDeleteAll
end

# Request payload for CloudforceOneDeleteAll#remove.
#
# @!attribute [rw] account_id
#   @return [String]
CloudforceOneDeleteAllRemoveMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# CloudforceOneEditApproval entity data model.
#
# @!attribute [rw] condition
#   @return [Hash]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] meta
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] strings
#   @return [Array, nil]
CloudforceOneEditApproval = Struct.new(
  :condition,
  :description,
  :enabled,
  :id,
  :meta,
  :name,
  :status,
  :strings,
  keyword_init: true
)

# Request payload for CloudforceOneEditApproval#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] approval_id
#   @return [String]
#
# @!attribute [rw] module
#   @return [String, nil]
#
# @!attribute [rw] condition
#   @return [Hash]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] meta
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] strings
#   @return [Array, nil]
CloudforceOneEditApprovalCreateData = Struct.new(
  :account_id,
  :approval_id,
  :module,
  :condition,
  :description,
  :enabled,
  :id,
  :meta,
  :name,
  :status,
  :strings,
  keyword_init: true
)

# Request payload for CloudforceOneEditApproval#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] module
#   @return [String, nil]
#
# @!attribute [rw] condition
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] meta
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] strings
#   @return [Array, nil]
CloudforceOneEditApprovalUpdateData = Struct.new(
  :account_id,
  :id,
  :module,
  :condition,
  :description,
  :enabled,
  :meta,
  :name,
  :status,
  :strings,
  keyword_init: true
)

# CloudforceOneEmailRuleValidation entity data model.
#
# @!attribute [rw] compiled_yara
#   @return [String, nil]
#
# @!attribute [rw] condition
#   @return [Hash]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] error
#   @return [String, nil]
#
# @!attribute [rw] existing_rule_id
#   @return [String, nil]
#
# @!attribute [rw] meta
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] strings
#   @return [Array, nil]
#
# @!attribute [rw] valid
#   @return [Boolean]
CloudforceOneEmailRuleValidation = Struct.new(
  :compiled_yara,
  :condition,
  :description,
  :enabled,
  :error,
  :existing_rule_id,
  :meta,
  :name,
  :status,
  :strings,
  :valid,
  keyword_init: true
)

# Request payload for CloudforceOneEmailRuleValidation#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] compiled_yara
#   @return [String, nil]
#
# @!attribute [rw] condition
#   @return [Hash]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] error
#   @return [String, nil]
#
# @!attribute [rw] existing_rule_id
#   @return [String, nil]
#
# @!attribute [rw] meta
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] strings
#   @return [Array, nil]
#
# @!attribute [rw] valid
#   @return [Boolean]
CloudforceOneEmailRuleValidationCreateData = Struct.new(
  :account_id,
  :compiled_yara,
  :condition,
  :description,
  :enabled,
  :error,
  :existing_rule_id,
  :meta,
  :name,
  :status,
  :strings,
  :valid,
  keyword_init: true
)

# CloudforceOneEmailRulesList entity data model.
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [Float]
#
# @!attribute [rw] created_by
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] is_public
#   @return [Boolean]
#
# @!attribute [rw] meta
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] namespaces
#   @return [Array]
#
# @!attribute [rw] path
#   @return [String]
#
# @!attribute [rw] pending_approval_id
#   @return [Float]
#
# @!attribute [rw] pending_change
#   @return [Hash]
#
# @!attribute [rw] structured_source
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [Float]
#
# @!attribute [rw] updated_by
#   @return [String]
CloudforceOneEmailRulesList = Struct.new(
  :content,
  :created_at,
  :created_by,
  :description,
  :enabled,
  :id,
  :is_public,
  :meta,
  :name,
  :namespaces,
  :path,
  :pending_approval_id,
  :pending_change,
  :structured_source,
  :updated_at,
  :updated_by,
  keyword_init: true
)

# Request payload for CloudforceOneEmailRulesList#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] offset
#   @return [Float, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
CloudforceOneEmailRulesListListMatch = Struct.new(
  :account_id,
  :limit,
  :offset,
  :search,
  keyword_init: true
)

# CloudforceOneRequestsApiResponseCommon entity data model.
class CloudforceOneRequestsApiResponseCommon
end

# Request payload for CloudforceOneRequestsApiResponseCommon#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] asset_id
#   @return [String, nil]
#
# @!attribute [rw] request_id
#   @return [String, nil]
#
# @!attribute [rw] message_id
#   @return [Integer, nil]
#
# @!attribute [rw] priority_id
#   @return [String, nil]
CloudforceOneRequestsApiResponseCommonRemoveMatch = Struct.new(
  :account_id,
  :asset_id,
  :request_id,
  :message_id,
  :priority_id,
  keyword_init: true
)

# CloudforceOneRule entity data model.
#
# @!attribute [rw] actions
#   @return [Array, nil]
#
# @!attribute [rw] commit_message
#   @return [String, nil]
#
# @!attribute [rw] content
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] is_public
#   @return [Boolean, nil]
#
# @!attribute [rw] meta
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] namespaces
#   @return [Array, nil]
#
# @!attribute [rw] path
#   @return [String]
CloudforceOneRule = Struct.new(
  :actions,
  :commit_message,
  :content,
  :description,
  :enabled,
  :is_public,
  :meta,
  :name,
  :namespaces,
  :path,
  keyword_init: true
)

# Request payload for CloudforceOneRule#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] actions
#   @return [Array, nil]
#
# @!attribute [rw] commit_message
#   @return [String, nil]
#
# @!attribute [rw] content
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] is_public
#   @return [Boolean, nil]
#
# @!attribute [rw] meta
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] namespaces
#   @return [Array, nil]
#
# @!attribute [rw] path
#   @return [String]
CloudforceOneRuleCreateData = Struct.new(
  :account_id,
  :actions,
  :commit_message,
  :content,
  :description,
  :enabled,
  :is_public,
  :meta,
  :name,
  :namespaces,
  :path,
  keyword_init: true
)

# CloudforceOneRuleApprovalDetail entity data model.
#
# @!attribute [rw] audit_log_id
#   @return [Float]
#
# @!attribute [rw] can_review
#   @return [Boolean]
#
# @!attribute [rw] cancelled_at
#   @return [Float]
#
# @!attribute [rw] cancelled_by
#   @return [String]
#
# @!attribute [rw] change_description
#   @return [String]
#
# @!attribute [rw] change_type
#   @return [String]
#
# @!attribute [rw] commit_message
#   @return [String]
#
# @!attribute [rw] compiler_warnings
#   @return [Array, nil]
#
# @!attribute [rw] current_rule
#   @return [Object]
#
# @!attribute [rw] id
#   @return [Float]
#
# @!attribute [rw] proposed_changes
#   @return [Object]
#
# @!attribute [rw] rejection_reason
#   @return [String]
#
# @!attribute [rw] requested_at
#   @return [Float]
#
# @!attribute [rw] requested_by
#   @return [String]
#
# @!attribute [rw] reviewed_at
#   @return [Float]
#
# @!attribute [rw] reviewer_scope
#   @return [String]
#
# @!attribute [rw] revision_number
#   @return [Integer]
#
# @!attribute [rw] rule_id
#   @return [String]
#
# @!attribute [rw] rule_name
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] superseded_by_approval_id
#   @return [Float]
#
# @!attribute [rw] supersedes_approval_id
#   @return [Float]
CloudforceOneRuleApprovalDetail = Struct.new(
  :audit_log_id,
  :can_review,
  :cancelled_at,
  :cancelled_by,
  :change_description,
  :change_type,
  :commit_message,
  :compiler_warnings,
  :current_rule,
  :id,
  :proposed_changes,
  :rejection_reason,
  :requested_at,
  :requested_by,
  :reviewed_at,
  :reviewer_scope,
  :revision_number,
  :rule_id,
  :rule_name,
  :status,
  :superseded_by_approval_id,
  :supersedes_approval_id,
  keyword_init: true
)

# Request payload for CloudforceOneRuleApprovalDetail#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
CloudforceOneRuleApprovalDetailLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for CloudforceOneRuleApprovalDetail#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] approval_id
#   @return [String]
#
# @!attribute [rw] audit_log_id
#   @return [Float]
#
# @!attribute [rw] can_review
#   @return [Boolean]
#
# @!attribute [rw] cancelled_at
#   @return [Float]
#
# @!attribute [rw] cancelled_by
#   @return [String]
#
# @!attribute [rw] change_description
#   @return [String]
#
# @!attribute [rw] change_type
#   @return [String]
#
# @!attribute [rw] commit_message
#   @return [String]
#
# @!attribute [rw] compiler_warnings
#   @return [Array, nil]
#
# @!attribute [rw] current_rule
#   @return [Object]
#
# @!attribute [rw] id
#   @return [Float]
#
# @!attribute [rw] proposed_changes
#   @return [Object]
#
# @!attribute [rw] rejection_reason
#   @return [String]
#
# @!attribute [rw] requested_at
#   @return [Float]
#
# @!attribute [rw] requested_by
#   @return [String]
#
# @!attribute [rw] reviewed_at
#   @return [Float]
#
# @!attribute [rw] reviewer_scope
#   @return [String]
#
# @!attribute [rw] revision_number
#   @return [Integer]
#
# @!attribute [rw] rule_id
#   @return [String]
#
# @!attribute [rw] rule_name
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] superseded_by_approval_id
#   @return [Float]
#
# @!attribute [rw] supersedes_approval_id
#   @return [Float]
CloudforceOneRuleApprovalDetailCreateData = Struct.new(
  :account_id,
  :approval_id,
  :audit_log_id,
  :can_review,
  :cancelled_at,
  :cancelled_by,
  :change_description,
  :change_type,
  :commit_message,
  :compiler_warnings,
  :current_rule,
  :id,
  :proposed_changes,
  :rejection_reason,
  :requested_at,
  :requested_by,
  :reviewed_at,
  :reviewer_scope,
  :revision_number,
  :rule_id,
  :rule_name,
  :status,
  :superseded_by_approval_id,
  :supersedes_approval_id,
  keyword_init: true
)

# CloudforceOneRuleApprovalsList entity data model.
#
# @!attribute [rw] audit_log_id
#   @return [Float]
#
# @!attribute [rw] can_review
#   @return [Boolean]
#
# @!attribute [rw] cancelled_at
#   @return [Float]
#
# @!attribute [rw] cancelled_by
#   @return [String]
#
# @!attribute [rw] change_description
#   @return [String]
#
# @!attribute [rw] change_type
#   @return [String]
#
# @!attribute [rw] commit_message
#   @return [String]
#
# @!attribute [rw] id
#   @return [Float]
#
# @!attribute [rw] proposed_changes
#   @return [Object]
#
# @!attribute [rw] rejection_reason
#   @return [String]
#
# @!attribute [rw] requested_at
#   @return [Float]
#
# @!attribute [rw] requested_by
#   @return [String]
#
# @!attribute [rw] reviewed_at
#   @return [Float]
#
# @!attribute [rw] reviewer_scope
#   @return [String]
#
# @!attribute [rw] revision_number
#   @return [Integer]
#
# @!attribute [rw] rule_id
#   @return [String]
#
# @!attribute [rw] rule_name
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] superseded_by_approval_id
#   @return [Float]
#
# @!attribute [rw] supersedes_approval_id
#   @return [Float]
CloudforceOneRuleApprovalsList = Struct.new(
  :audit_log_id,
  :can_review,
  :cancelled_at,
  :cancelled_by,
  :change_description,
  :change_type,
  :commit_message,
  :id,
  :proposed_changes,
  :rejection_reason,
  :requested_at,
  :requested_by,
  :reviewed_at,
  :reviewer_scope,
  :revision_number,
  :rule_id,
  :rule_name,
  :status,
  :superseded_by_approval_id,
  :supersedes_approval_id,
  keyword_init: true
)

# Request payload for CloudforceOneRuleApprovalsList#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] change_type
#   @return [String, nil]
#
# @!attribute [rw] latest_only
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] offset
#   @return [Float, nil]
#
# @!attribute [rw] reviewer_scope
#   @return [String, nil]
#
# @!attribute [rw] rule_id
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [Object, nil]
CloudforceOneRuleApprovalsListListMatch = Struct.new(
  :account_id,
  :change_type,
  :latest_only,
  :limit,
  :offset,
  :reviewer_scope,
  :rule_id,
  :status,
  keyword_init: true
)

# CloudforceOneRulePreview entity data model.
#
# @!attribute [rw] commit_message
#   @return [String, nil]
#
# @!attribute [rw] condition
#   @return [Hash]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [Float]
#
# @!attribute [rw] created_by
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] is_public
#   @return [Boolean]
#
# @!attribute [rw] meta
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] namespaces
#   @return [Array]
#
# @!attribute [rw] path
#   @return [String]
#
# @!attribute [rw] pending_approval_id
#   @return [Float]
#
# @!attribute [rw] pending_change
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] strings
#   @return [Array, nil]
#
# @!attribute [rw] structured_source
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [Float]
#
# @!attribute [rw] updated_by
#   @return [String]
CloudforceOneRulePreview = Struct.new(
  :commit_message,
  :condition,
  :content,
  :created_at,
  :created_by,
  :description,
  :enabled,
  :id,
  :is_public,
  :meta,
  :name,
  :namespaces,
  :path,
  :pending_approval_id,
  :pending_change,
  :status,
  :strings,
  :structured_source,
  :updated_at,
  :updated_by,
  keyword_init: true
)

# Request payload for CloudforceOneRulePreview#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
CloudforceOneRulePreviewLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for CloudforceOneRulePreview#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] commit_message
#   @return [String, nil]
#
# @!attribute [rw] condition
#   @return [Hash]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [Float]
#
# @!attribute [rw] created_by
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] is_public
#   @return [Boolean]
#
# @!attribute [rw] meta
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] namespaces
#   @return [Array]
#
# @!attribute [rw] path
#   @return [String]
#
# @!attribute [rw] pending_approval_id
#   @return [Float]
#
# @!attribute [rw] pending_change
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] strings
#   @return [Array, nil]
#
# @!attribute [rw] structured_source
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [Float]
#
# @!attribute [rw] updated_by
#   @return [String]
CloudforceOneRulePreviewCreateData = Struct.new(
  :account_id,
  :commit_message,
  :condition,
  :content,
  :created_at,
  :created_by,
  :description,
  :enabled,
  :id,
  :is_public,
  :meta,
  :name,
  :namespaces,
  :path,
  :pending_approval_id,
  :pending_change,
  :status,
  :strings,
  :structured_source,
  :updated_at,
  :updated_by,
  keyword_init: true
)

# Request payload for CloudforceOneRulePreview#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] commit_message
#   @return [String, nil]
#
# @!attribute [rw] condition
#   @return [Hash, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [Float, nil]
#
# @!attribute [rw] created_by
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] is_public
#   @return [Boolean, nil]
#
# @!attribute [rw] meta
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] namespaces
#   @return [Array, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] pending_approval_id
#   @return [Float, nil]
#
# @!attribute [rw] pending_change
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] strings
#   @return [Array, nil]
#
# @!attribute [rw] structured_source
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [Float, nil]
#
# @!attribute [rw] updated_by
#   @return [String, nil]
CloudforceOneRulePreviewUpdateData = Struct.new(
  :account_id,
  :id,
  :commit_message,
  :condition,
  :content,
  :created_at,
  :created_by,
  :description,
  :enabled,
  :is_public,
  :meta,
  :name,
  :namespaces,
  :path,
  :pending_approval_id,
  :pending_change,
  :status,
  :strings,
  :structured_source,
  :updated_at,
  :updated_by,
  keyword_init: true
)

# CloudforceOneRulesPreviewList entity data model.
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [Float]
#
# @!attribute [rw] created_by
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] is_public
#   @return [Boolean]
#
# @!attribute [rw] meta
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] namespaces
#   @return [Array]
#
# @!attribute [rw] path
#   @return [String]
#
# @!attribute [rw] pending_approval_id
#   @return [Float]
#
# @!attribute [rw] pending_change
#   @return [Hash]
#
# @!attribute [rw] structured_source
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [Float]
#
# @!attribute [rw] updated_by
#   @return [String]
CloudforceOneRulesPreviewList = Struct.new(
  :content,
  :created_at,
  :created_by,
  :description,
  :enabled,
  :id,
  :is_public,
  :meta,
  :name,
  :namespaces,
  :path,
  :pending_approval_id,
  :pending_change,
  :structured_source,
  :updated_at,
  :updated_by,
  keyword_init: true
)

# Request payload for CloudforceOneRulesPreviewList#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] is_public
#   @return [Boolean, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] namespace
#   @return [Object, nil]
#
# @!attribute [rw] offset
#   @return [Float, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] recursive
#   @return [String, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
CloudforceOneRulesPreviewListListMatch = Struct.new(
  :account_id,
  :is_public,
  :limit,
  :namespace,
  :offset,
  :path,
  :recursive,
  :search,
  keyword_init: true
)

# CloudforceOneRulesSearch entity data model.
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [Float]
#
# @!attribute [rw] created_by
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] is_public
#   @return [Boolean]
#
# @!attribute [rw] meta
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] namespaces
#   @return [Array]
#
# @!attribute [rw] path
#   @return [String]
#
# @!attribute [rw] pending_approval_id
#   @return [Float]
#
# @!attribute [rw] pending_change
#   @return [Hash]
#
# @!attribute [rw] score
#   @return [Float, nil]
#
# @!attribute [rw] scoring_details
#   @return [Hash, nil]
#
# @!attribute [rw] structured_source
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [Float]
#
# @!attribute [rw] updated_by
#   @return [String]
CloudforceOneRulesSearch = Struct.new(
  :content,
  :created_at,
  :created_by,
  :description,
  :enabled,
  :id,
  :is_public,
  :meta,
  :name,
  :namespaces,
  :path,
  :pending_approval_id,
  :pending_change,
  :score,
  :scoring_details,
  :structured_source,
  :updated_at,
  :updated_by,
  keyword_init: true
)

# Request payload for CloudforceOneRulesSearch#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] is_public
#   @return [Boolean, nil]
#
# @!attribute [rw] language
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] namespace
#   @return [Object, nil]
#
# @!attribute [rw] offset
#   @return [Float, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] query
#   @return [String]
#
# @!attribute [rw] recursive
#   @return [String, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
CloudforceOneRulesSearchListMatch = Struct.new(
  :account_id,
  :is_public,
  :language,
  :limit,
  :mode,
  :namespace,
  :offset,
  :path,
  :query,
  :recursive,
  :search,
  keyword_init: true
)

# CloudforceOneStat entity data model.
class CloudforceOneStat
end

# Request payload for CloudforceOneStat#load.
#
# @!attribute [rw] account_id
#   @return [String]
CloudforceOneStatLoadMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# CloudforceOneSuccess entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
CloudforceOneSuccess = Struct.new(
  :id,
  :success,
  keyword_init: true
)

# Request payload for CloudforceOneSuccess#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] approval_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
CloudforceOneSuccessCreateData = Struct.new(
  :account_id,
  :approval_id,
  :id,
  :success,
  keyword_init: true
)

# Request payload for CloudforceOneSuccess#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
CloudforceOneSuccessRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# CloudforceOneTreeNode entity data model.
#
# @!attribute [rw] children
#   @return [Array]
#
# @!attribute [rw] count
#   @return [Float]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] path
#   @return [String]
CloudforceOneTreeNode = Struct.new(
  :children,
  :count,
  :name,
  :path,
  keyword_init: true
)

# Request payload for CloudforceOneTreeNode#list.
#
# @!attribute [rw] account_id
#   @return [String]
CloudforceOneTreeNodeListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# CloudforceOneValidation entity data model.
#
# @!attribute [rw] content
#   @return [String]
#
# @!attribute [rw] error
#   @return [String, nil]
#
# @!attribute [rw] excludeRuleId
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] namespaces
#   @return [Array, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] valid
#   @return [Boolean]
CloudforceOneValidation = Struct.new(
  :content,
  :error,
  :excludeRuleId,
  :name,
  :namespaces,
  :path,
  :valid,
  keyword_init: true
)

# Request payload for CloudforceOneValidation#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] content
#   @return [String]
#
# @!attribute [rw] error
#   @return [String, nil]
#
# @!attribute [rw] excludeRuleId
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] namespaces
#   @return [Array, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] valid
#   @return [Boolean]
CloudforceOneValidationCreateData = Struct.new(
  :account_id,
  :content,
  :error,
  :excludeRuleId,
  :name,
  :namespaces,
  :path,
  :valid,
  keyword_init: true
)

# Collection entity data model.
#
# @!attribute [rw] columns
#   @return [Array]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] created_by
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] item_count
#   @return [Float]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] position
#   @return [Float]
#
# @!attribute [rw] required
#   @return [Boolean]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
Collection = Struct.new(
  :columns,
  :created_at,
  :created_by,
  :data,
  :id,
  :item_count,
  :metadata,
  :name,
  :position,
  :required,
  :status,
  :type,
  :updated_at,
  keyword_init: true
)

# Request payload for Collection#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] item_id
#   @return [String, nil]
CollectionLoadMatch = Struct.new(
  :account_id,
  :id,
  :item_id,
  keyword_init: true
)

# Request payload for Collection#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
CollectionListMatch = Struct.new(
  :account_id,
  :limit,
  :page,
  keyword_init: true
)

# Request payload for Collection#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] columns
#   @return [Array]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] created_by
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] item_count
#   @return [Float]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] position
#   @return [Float]
#
# @!attribute [rw] required
#   @return [Boolean]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
CollectionCreateData = Struct.new(
  :account_id,
  :columns,
  :created_at,
  :created_by,
  :data,
  :id,
  :item_count,
  :metadata,
  :name,
  :position,
  :required,
  :status,
  :type,
  :updated_at,
  keyword_init: true
)

# Request payload for Collection#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] column_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] item_id
#   @return [String, nil]
#
# @!attribute [rw] columns
#   @return [Array, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] created_by
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] item_count
#   @return [Float, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] position
#   @return [Float, nil]
#
# @!attribute [rw] required
#   @return [Boolean, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
CollectionUpdateData = Struct.new(
  :account_id,
  :column_id,
  :id,
  :item_id,
  :columns,
  :created_at,
  :created_by,
  :data,
  :item_count,
  :metadata,
  :name,
  :position,
  :required,
  :status,
  :type,
  :updated_at,
  keyword_init: true
)

# Request payload for Collection#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] column_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] item_id
#   @return [String, nil]
CollectionRemoveMatch = Struct.new(
  :account_id,
  :column_id,
  :id,
  :item_id,
  keyword_init: true
)

# CollectionsItem entity data model.
class CollectionsItem
end

# Request payload for CollectionsItem#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] collection_id
#   @return [String]
CollectionsItemCreateData = Struct.new(
  :account_id,
  :collection_id,
  keyword_init: true
)

# Country entity data model.
#
# @!attribute [rw] result
#   @return [Array]
#
# @!attribute [rw] success
#   @return [String]
Country = Struct.new(
  :result,
  :success,
  keyword_init: true
)

# Request payload for Country#list.
#
# @!attribute [rw] account_id
#   @return [String]
CountryListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# DashboardAsset entity data model.
#
# @!attribute [rw] assets
#   @return [Hash]
#
# @!attribute [rw] contentType
#   @return [Hash]
#
# @!attribute [rw] count
#   @return [Hash]
#
# @!attribute [rw] downloadable
#   @return [Hash]
#
# @!attribute [rw] expiresAt
#   @return [Hash]
#
# @!attribute [rw] fileName
#   @return [Hash]
#
# @!attribute [rw] fileSize
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [Hash]
#
# @!attribute [rw] is_cloudflare_team
#   @return [Hash]
#
# @!attribute [rw] metadata
#   @return [Hash]
#
# @!attribute [rw] origin
#   @return [Hash]
#
# @!attribute [rw] state
#   @return [Hash]
#
# @!attribute [rw] tlp
#   @return [Hash]
#
# @!attribute [rw] uploadedAt
#   @return [Hash]
DashboardAsset = Struct.new(
  :assets,
  :contentType,
  :count,
  :downloadable,
  :expiresAt,
  :fileName,
  :fileSize,
  :id,
  :is_cloudflare_team,
  :metadata,
  :origin,
  :state,
  :tlp,
  :uploadedAt,
  keyword_init: true
)

# Request payload for DashboardAsset#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] asset_id
#   @return [String, nil]
#
# @!attribute [rw] project_type
#   @return [String]
#
# @!attribute [rw] request_id
#   @return [String]
DashboardAssetLoadMatch = Struct.new(
  :account_id,
  :asset_id,
  :project_type,
  :request_id,
  keyword_init: true
)

# Request payload for DashboardAsset#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] project_type
#   @return [String]
#
# @!attribute [rw] request_id
#   @return [String]
#
# @!attribute [rw] assets
#   @return [Hash]
#
# @!attribute [rw] contentType
#   @return [Hash]
#
# @!attribute [rw] count
#   @return [Hash]
#
# @!attribute [rw] downloadable
#   @return [Hash]
#
# @!attribute [rw] expiresAt
#   @return [Hash]
#
# @!attribute [rw] fileName
#   @return [Hash]
#
# @!attribute [rw] fileSize
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [Hash]
#
# @!attribute [rw] is_cloudflare_team
#   @return [Hash]
#
# @!attribute [rw] metadata
#   @return [Hash]
#
# @!attribute [rw] origin
#   @return [Hash]
#
# @!attribute [rw] state
#   @return [Hash]
#
# @!attribute [rw] tlp
#   @return [Hash]
#
# @!attribute [rw] uploadedAt
#   @return [Hash]
DashboardAssetCreateData = Struct.new(
  :account_id,
  :project_type,
  :request_id,
  :assets,
  :contentType,
  :count,
  :downloadable,
  :expiresAt,
  :fileName,
  :fileSize,
  :id,
  :is_cloudflare_team,
  :metadata,
  :origin,
  :state,
  :tlp,
  :uploadedAt,
  keyword_init: true
)

# DashboardUser entity data model.
#
# @!attribute [rw] display_name
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
DashboardUser = Struct.new(
  :display_name,
  :id,
  keyword_init: true
)

# Request payload for DashboardUser#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] request_id
#   @return [String]
DashboardUserLoadMatch = Struct.new(
  :account_id,
  :request_id,
  keyword_init: true
)

# Dataset entity data model.
#
# @!attribute [rw] deletedAt
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] indicatorWriteMode
#   @return [String]
#
# @!attribute [rw] isAnalytics
#   @return [Boolean]
#
# @!attribute [rw] isPublic
#   @return [Boolean]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] uuid
#   @return [String]
Dataset = Struct.new(
  :deletedAt,
  :id,
  :indicatorWriteMode,
  :isAnalytics,
  :isPublic,
  :name,
  :uuid,
  keyword_init: true
)

# Request payload for Dataset#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
DatasetLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for Dataset#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] include_deleted
#   @return [Boolean, nil]
DatasetListMatch = Struct.new(
  :account_id,
  :include_deleted,
  keyword_init: true
)

# Request payload for Dataset#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] deletedAt
#   @return [String, nil]
#
# @!attribute [rw] indicatorWriteMode
#   @return [String]
#
# @!attribute [rw] isAnalytics
#   @return [Boolean]
#
# @!attribute [rw] isPublic
#   @return [Boolean]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] uuid
#   @return [String]
DatasetCreateData = Struct.new(
  :account_id,
  :id,
  :deletedAt,
  :indicatorWriteMode,
  :isAnalytics,
  :isPublic,
  :name,
  :uuid,
  keyword_init: true
)

# Request payload for Dataset#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] deletedAt
#   @return [String, nil]
#
# @!attribute [rw] indicatorWriteMode
#   @return [String, nil]
#
# @!attribute [rw] isAnalytics
#   @return [Boolean, nil]
#
# @!attribute [rw] isPublic
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
DatasetUpdateData = Struct.new(
  :account_id,
  :id,
  :deletedAt,
  :indicatorWriteMode,
  :isAnalytics,
  :isPublic,
  :name,
  :uuid,
  keyword_init: true
)

# Request payload for Dataset#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
DatasetRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Event entity data model.
#
# @!attribute [rw] accountId
#   @return [Float]
#
# @!attribute [rw] account_id
#   @return [Integer]
#
# @!attribute [rw] alert_enabled
#   @return [Boolean]
#
# @!attribute [rw] alert_rollup_enabled
#   @return [Boolean]
#
# @!attribute [rw] attacker
#   @return [String]
#
# @!attribute [rw] attackerCountry
#   @return [String]
#
# @!attribute [rw] attackerCountryAlpha3
#   @return [String]
#
# @!attribute [rw] category
#   @return [String]
#
# @!attribute [rw] childIds
#   @return [Array, nil]
#
# @!attribute [rw] created
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] createdEventsCount
#   @return [Float]
#
# @!attribute [rw] createdIndicatorsCount
#   @return [Float]
#
# @!attribute [rw] createdRelationshipsCount
#   @return [Float]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] custom_threat_feed_id
#   @return [Integer, nil]
#
# @!attribute [rw] data
#   @return [String]
#
# @!attribute [rw] datasetId
#   @return [String]
#
# @!attribute [rw] date
#   @return [String]
#
# @!attribute [rw] errorCount
#   @return [Float]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] event
#   @return [String]
#
# @!attribute [rw] eventIds
#   @return [Array]
#
# @!attribute [rw] failedCount
#   @return [Float]
#
# @!attribute [rw] failures
#   @return [Array, nil]
#
# @!attribute [rw] hasChildren
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [Float]
#
# @!attribute [rw] includeCreatedEvents
#   @return [Boolean, nil]
#
# @!attribute [rw] indicator
#   @return [String]
#
# @!attribute [rw] indicatorType
#   @return [String]
#
# @!attribute [rw] indicatorTypeId
#   @return [Float]
#
# @!attribute [rw] insight
#   @return [String, nil]
#
# @!attribute [rw] killChain
#   @return [Float]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] mitreAttack
#   @return [Array]
#
# @!attribute [rw] mitreCapec
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] numReferenced
#   @return [Float]
#
# @!attribute [rw] numReferences
#   @return [Float]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] orderBy
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] pageSize
#   @return [Float, nil]
#
# @!attribute [rw] parentId
#   @return [String]
#
# @!attribute [rw] query_json
#   @return [String]
#
# @!attribute [rw] raw
#   @return [Hash, nil]
#
# @!attribute [rw] rawId
#   @return [String]
#
# @!attribute [rw] referenced
#   @return [Array]
#
# @!attribute [rw] referencedIds
#   @return [Array]
#
# @!attribute [rw] references
#   @return [Array]
#
# @!attribute [rw] referencesIds
#   @return [Array]
#
# @!attribute [rw] relationshipType
#   @return [String]
#
# @!attribute [rw] relationships
#   @return [Array]
#
# @!attribute [rw] relationshipsCreated
#   @return [Float, nil]
#
# @!attribute [rw] releasabilityId
#   @return [String, nil]
#
# @!attribute [rw] rule_enabled
#   @return [Boolean]
#
# @!attribute [rw] rule_list_id
#   @return [String, nil]
#
# @!attribute [rw] rule_scope
#   @return [String, nil]
#
# @!attribute [rw] search
#   @return [Array, nil]
#
# @!attribute [rw] source
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] tags
#   @return [Array]
#
# @!attribute [rw] targetCountry
#   @return [String]
#
# @!attribute [rw] targetCountryAlpha3
#   @return [String]
#
# @!attribute [rw] targetIndustry
#   @return [String]
#
# @!attribute [rw] tlp
#   @return [String]
#
# @!attribute [rw] updatedCount
#   @return [Float]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] updates
#   @return [Hash]
#
# @!attribute [rw] user_email
#   @return [String]
#
# @!attribute [rw] uuid
#   @return [String]
Event = Struct.new(
  :accountId,
  :account_id,
  :alert_enabled,
  :alert_rollup_enabled,
  :attacker,
  :attackerCountry,
  :attackerCountryAlpha3,
  :category,
  :childIds,
  :created,
  :createdAt,
  :createdEventsCount,
  :createdIndicatorsCount,
  :createdRelationshipsCount,
  :created_at,
  :cursor,
  :custom_threat_feed_id,
  :data,
  :datasetId,
  :date,
  :errorCount,
  :errors,
  :event,
  :eventIds,
  :failedCount,
  :failures,
  :hasChildren,
  :id,
  :includeCreatedEvents,
  :indicator,
  :indicatorType,
  :indicatorTypeId,
  :insight,
  :killChain,
  :message,
  :mitreAttack,
  :mitreCapec,
  :name,
  :numReferenced,
  :numReferences,
  :order,
  :orderBy,
  :page,
  :pageSize,
  :parentId,
  :query_json,
  :raw,
  :rawId,
  :referenced,
  :referencedIds,
  :references,
  :referencesIds,
  :relationshipType,
  :relationships,
  :relationshipsCreated,
  :releasabilityId,
  :rule_enabled,
  :rule_list_id,
  :rule_scope,
  :search,
  :source,
  :success,
  :tags,
  :targetCountry,
  :targetCountryAlpha3,
  :targetIndustry,
  :tlp,
  :updatedCount,
  :updated_at,
  :updates,
  :user_email,
  :uuid,
  keyword_init: true
)

# Request payload for Event#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] dataset_id
#   @return [String, nil]
#
# @!attribute [rw] event_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] raw_id
#   @return [String, nil]
#
# @!attribute [rw] query_id
#   @return [Integer, nil]
EventLoadMatch = Struct.new(
  :account_id,
  :dataset_id,
  :event_id,
  :id,
  :raw_id,
  :query_id,
  keyword_init: true
)

# Request payload for Event#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] cache
#   @return [String, nil]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] dataset_id
#   @return [Array, nil]
#
# @!attribute [rw] force_refresh
#   @return [Boolean, nil]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] page_size
#   @return [Float, nil]
#
# @!attribute [rw] search
#   @return [Array, nil]
#
# @!attribute [rw] by_id_id
#   @return [String, nil]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] include_parent
#   @return [Boolean, nil]
#
# @!attribute [rw] indicator_type_id
#   @return [Array, nil]
#
# @!attribute [rw] max_depth
#   @return [Float, nil]
#
# @!attribute [rw] relationship_type
#   @return [Object, nil]
EventListMatch = Struct.new(
  :account_id,
  :cache,
  :cursor,
  :dataset_id,
  :force_refresh,
  :format,
  :order,
  :order_by,
  :page,
  :page_size,
  :search,
  :by_id_id,
  :direction,
  :include_parent,
  :indicator_type_id,
  :max_depth,
  :relationship_type,
  keyword_init: true
)

# Request payload for Event#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] cache
#   @return [String, nil]
#
# @!attribute [rw] force_refresh
#   @return [Boolean, nil]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] raw_id
#   @return [String, nil]
#
# @!attribute [rw] query_id
#   @return [Integer, nil]
#
# @!attribute [rw] accountId
#   @return [Float]
#
# @!attribute [rw] alert_enabled
#   @return [Boolean]
#
# @!attribute [rw] alert_rollup_enabled
#   @return [Boolean]
#
# @!attribute [rw] attacker
#   @return [String]
#
# @!attribute [rw] attackerCountry
#   @return [String]
#
# @!attribute [rw] attackerCountryAlpha3
#   @return [String]
#
# @!attribute [rw] category
#   @return [String]
#
# @!attribute [rw] childIds
#   @return [Array, nil]
#
# @!attribute [rw] created
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] createdEventsCount
#   @return [Float]
#
# @!attribute [rw] createdIndicatorsCount
#   @return [Float]
#
# @!attribute [rw] createdRelationshipsCount
#   @return [Float]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] custom_threat_feed_id
#   @return [Integer, nil]
#
# @!attribute [rw] data
#   @return [String]
#
# @!attribute [rw] datasetId
#   @return [String]
#
# @!attribute [rw] date
#   @return [String]
#
# @!attribute [rw] errorCount
#   @return [Float]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] event
#   @return [String]
#
# @!attribute [rw] eventIds
#   @return [Array]
#
# @!attribute [rw] failedCount
#   @return [Float]
#
# @!attribute [rw] failures
#   @return [Array, nil]
#
# @!attribute [rw] hasChildren
#   @return [Boolean]
#
# @!attribute [rw] includeCreatedEvents
#   @return [Boolean, nil]
#
# @!attribute [rw] indicator
#   @return [String]
#
# @!attribute [rw] indicatorType
#   @return [String]
#
# @!attribute [rw] indicatorTypeId
#   @return [Float]
#
# @!attribute [rw] insight
#   @return [String, nil]
#
# @!attribute [rw] killChain
#   @return [Float]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] mitreAttack
#   @return [Array]
#
# @!attribute [rw] mitreCapec
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] numReferenced
#   @return [Float]
#
# @!attribute [rw] numReferences
#   @return [Float]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] orderBy
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] pageSize
#   @return [Float, nil]
#
# @!attribute [rw] parentId
#   @return [String]
#
# @!attribute [rw] query_json
#   @return [String]
#
# @!attribute [rw] raw
#   @return [Hash, nil]
#
# @!attribute [rw] rawId
#   @return [String]
#
# @!attribute [rw] referenced
#   @return [Array]
#
# @!attribute [rw] referencedIds
#   @return [Array]
#
# @!attribute [rw] references
#   @return [Array]
#
# @!attribute [rw] referencesIds
#   @return [Array]
#
# @!attribute [rw] relationshipType
#   @return [String]
#
# @!attribute [rw] relationships
#   @return [Array]
#
# @!attribute [rw] relationshipsCreated
#   @return [Float, nil]
#
# @!attribute [rw] releasabilityId
#   @return [String, nil]
#
# @!attribute [rw] rule_enabled
#   @return [Boolean]
#
# @!attribute [rw] rule_list_id
#   @return [String, nil]
#
# @!attribute [rw] rule_scope
#   @return [String, nil]
#
# @!attribute [rw] search
#   @return [Array, nil]
#
# @!attribute [rw] source
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] tags
#   @return [Array]
#
# @!attribute [rw] targetCountry
#   @return [String]
#
# @!attribute [rw] targetCountryAlpha3
#   @return [String]
#
# @!attribute [rw] targetIndustry
#   @return [String]
#
# @!attribute [rw] tlp
#   @return [String]
#
# @!attribute [rw] updatedCount
#   @return [Float]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] updates
#   @return [Hash]
#
# @!attribute [rw] user_email
#   @return [String]
#
# @!attribute [rw] uuid
#   @return [String]
EventCreateData = Struct.new(
  :account_id,
  :cache,
  :force_refresh,
  :format,
  :id,
  :raw_id,
  :query_id,
  :accountId,
  :alert_enabled,
  :alert_rollup_enabled,
  :attacker,
  :attackerCountry,
  :attackerCountryAlpha3,
  :category,
  :childIds,
  :created,
  :createdAt,
  :createdEventsCount,
  :createdIndicatorsCount,
  :createdRelationshipsCount,
  :created_at,
  :cursor,
  :custom_threat_feed_id,
  :data,
  :datasetId,
  :date,
  :errorCount,
  :errors,
  :event,
  :eventIds,
  :failedCount,
  :failures,
  :hasChildren,
  :includeCreatedEvents,
  :indicator,
  :indicatorType,
  :indicatorTypeId,
  :insight,
  :killChain,
  :message,
  :mitreAttack,
  :mitreCapec,
  :name,
  :numReferenced,
  :numReferences,
  :order,
  :orderBy,
  :page,
  :pageSize,
  :parentId,
  :query_json,
  :raw,
  :rawId,
  :referenced,
  :referencedIds,
  :references,
  :referencesIds,
  :relationshipType,
  :relationships,
  :relationshipsCreated,
  :releasabilityId,
  :rule_enabled,
  :rule_list_id,
  :rule_scope,
  :search,
  :source,
  :success,
  :tags,
  :targetCountry,
  :targetCountryAlpha3,
  :targetIndustry,
  :tlp,
  :updatedCount,
  :updated_at,
  :updates,
  :user_email,
  :uuid,
  keyword_init: true
)

# Request payload for Event#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] raw_id
#   @return [String, nil]
#
# @!attribute [rw] query_id
#   @return [Integer, nil]
#
# @!attribute [rw] accountId
#   @return [Float, nil]
#
# @!attribute [rw] alert_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] alert_rollup_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] attacker
#   @return [String, nil]
#
# @!attribute [rw] attackerCountry
#   @return [String, nil]
#
# @!attribute [rw] attackerCountryAlpha3
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] childIds
#   @return [Array, nil]
#
# @!attribute [rw] created
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] createdEventsCount
#   @return [Float, nil]
#
# @!attribute [rw] createdIndicatorsCount
#   @return [Float, nil]
#
# @!attribute [rw] createdRelationshipsCount
#   @return [Float, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] custom_threat_feed_id
#   @return [Integer, nil]
#
# @!attribute [rw] data
#   @return [String, nil]
#
# @!attribute [rw] datasetId
#   @return [String, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] errorCount
#   @return [Float, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] event
#   @return [String, nil]
#
# @!attribute [rw] eventIds
#   @return [Array, nil]
#
# @!attribute [rw] failedCount
#   @return [Float, nil]
#
# @!attribute [rw] failures
#   @return [Array, nil]
#
# @!attribute [rw] hasChildren
#   @return [Boolean, nil]
#
# @!attribute [rw] includeCreatedEvents
#   @return [Boolean, nil]
#
# @!attribute [rw] indicator
#   @return [String, nil]
#
# @!attribute [rw] indicatorType
#   @return [String, nil]
#
# @!attribute [rw] indicatorTypeId
#   @return [Float, nil]
#
# @!attribute [rw] insight
#   @return [String, nil]
#
# @!attribute [rw] killChain
#   @return [Float, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] mitreAttack
#   @return [Array, nil]
#
# @!attribute [rw] mitreCapec
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] numReferenced
#   @return [Float, nil]
#
# @!attribute [rw] numReferences
#   @return [Float, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] orderBy
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] pageSize
#   @return [Float, nil]
#
# @!attribute [rw] parentId
#   @return [String, nil]
#
# @!attribute [rw] query_json
#   @return [String, nil]
#
# @!attribute [rw] raw
#   @return [Hash, nil]
#
# @!attribute [rw] rawId
#   @return [String, nil]
#
# @!attribute [rw] referenced
#   @return [Array, nil]
#
# @!attribute [rw] referencedIds
#   @return [Array, nil]
#
# @!attribute [rw] references
#   @return [Array, nil]
#
# @!attribute [rw] referencesIds
#   @return [Array, nil]
#
# @!attribute [rw] relationshipType
#   @return [String, nil]
#
# @!attribute [rw] relationships
#   @return [Array, nil]
#
# @!attribute [rw] relationshipsCreated
#   @return [Float, nil]
#
# @!attribute [rw] releasabilityId
#   @return [String, nil]
#
# @!attribute [rw] rule_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] rule_list_id
#   @return [String, nil]
#
# @!attribute [rw] rule_scope
#   @return [String, nil]
#
# @!attribute [rw] search
#   @return [Array, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] targetCountry
#   @return [String, nil]
#
# @!attribute [rw] targetCountryAlpha3
#   @return [String, nil]
#
# @!attribute [rw] targetIndustry
#   @return [String, nil]
#
# @!attribute [rw] tlp
#   @return [String, nil]
#
# @!attribute [rw] updatedCount
#   @return [Float, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] updates
#   @return [Hash, nil]
#
# @!attribute [rw] user_email
#   @return [String, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
EventUpdateData = Struct.new(
  :account_id,
  :id,
  :raw_id,
  :query_id,
  :accountId,
  :alert_enabled,
  :alert_rollup_enabled,
  :attacker,
  :attackerCountry,
  :attackerCountryAlpha3,
  :category,
  :childIds,
  :created,
  :createdAt,
  :createdEventsCount,
  :createdIndicatorsCount,
  :createdRelationshipsCount,
  :created_at,
  :cursor,
  :custom_threat_feed_id,
  :data,
  :datasetId,
  :date,
  :errorCount,
  :errors,
  :event,
  :eventIds,
  :failedCount,
  :failures,
  :hasChildren,
  :includeCreatedEvents,
  :indicator,
  :indicatorType,
  :indicatorTypeId,
  :insight,
  :killChain,
  :message,
  :mitreAttack,
  :mitreCapec,
  :name,
  :numReferenced,
  :numReferences,
  :order,
  :orderBy,
  :page,
  :pageSize,
  :parentId,
  :query_json,
  :raw,
  :rawId,
  :referenced,
  :referencedIds,
  :references,
  :referencesIds,
  :relationshipType,
  :relationships,
  :relationshipsCreated,
  :releasabilityId,
  :rule_enabled,
  :rule_list_id,
  :rule_scope,
  :search,
  :source,
  :success,
  :tags,
  :targetCountry,
  :targetCountryAlpha3,
  :targetIndustry,
  :tlp,
  :updatedCount,
  :updated_at,
  :updates,
  :user_email,
  :uuid,
  keyword_init: true
)

# Request payload for Event#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] dataset_id
#   @return [String, nil]
#
# @!attribute [rw] event_id
#   @return [Array, nil]
#
# @!attribute [rw] query_id
#   @return [Integer, nil]
EventRemoveMatch = Struct.new(
  :account_id,
  :dataset_id,
  :event_id,
  :query_id,
  keyword_init: true
)

# Group entity data model.
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] members
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] uuid
#   @return [String]
Group = Struct.new(
  :createdAt,
  :description,
  :id,
  :members,
  :name,
  :updatedAt,
  :uuid,
  keyword_init: true
)

# Request payload for Group#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
GroupLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for Group#list.
#
# @!attribute [rw] account_id
#   @return [String]
GroupListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for Group#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] members
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] uuid
#   @return [String]
GroupCreateData = Struct.new(
  :account_id,
  :createdAt,
  :description,
  :id,
  :members,
  :name,
  :updatedAt,
  :uuid,
  keyword_init: true
)

# Request payload for Group#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] members
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
GroupUpdateData = Struct.new(
  :account_id,
  :id,
  :createdAt,
  :description,
  :members,
  :name,
  :updatedAt,
  :uuid,
  keyword_init: true
)

# Request payload for Group#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] member_id
#   @return [String, nil]
GroupRemoveMatch = Struct.new(
  :account_id,
  :id,
  :member_id,
  keyword_init: true
)

# Indicator entity data model.
#
# @!attribute [rw] completeness
#   @return [Hash]
#
# @!attribute [rw] confidence
#   @return [Integer, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] datasetId
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] durableObjectId
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] indicatorType
#   @return [String]
#
# @!attribute [rw] indicators
#   @return [Hash]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] pagination
#   @return [Hash]
#
# @!attribute [rw] relatedEvents
#   @return [Array, nil]
#
# @!attribute [rw] sources
#   @return [Array]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] tlp
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] uuid
#   @return [String]
#
# @!attribute [rw] value
#   @return [String]
Indicator = Struct.new(
  :completeness,
  :confidence,
  :createdAt,
  :datasetId,
  :description,
  :durableObjectId,
  :id,
  :indicatorType,
  :indicators,
  :message,
  :metadata,
  :pagination,
  :relatedEvents,
  :sources,
  :tags,
  :tlp,
  :type,
  :updatedAt,
  :uuid,
  :value,
  keyword_init: true
)

# Request payload for Indicator#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] cache
#   @return [String, nil]
#
# @!attribute [rw] created_after
#   @return [String, nil]
#
# @!attribute [rw] created_before
#   @return [String, nil]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] dataset_id
#   @return [Array, nil]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] include_tag
#   @return [Boolean, nil]
#
# @!attribute [rw] include_total_count
#   @return [Boolean, nil]
#
# @!attribute [rw] indicator_type
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] page_size
#   @return [Float, nil]
#
# @!attribute [rw] related_event
#   @return [Array, nil]
#
# @!attribute [rw] related_events_limit
#   @return [Float, nil]
#
# @!attribute [rw] search
#   @return [Array, nil]
#
# @!attribute [rw] tag
#   @return [Array, nil]
#
# @!attribute [rw] tag_search
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
IndicatorLoadMatch = Struct.new(
  :account_id,
  :cache,
  :created_after,
  :created_before,
  :cursor,
  :dataset_id,
  :format,
  :include_tag,
  :include_total_count,
  :indicator_type,
  :name,
  :page,
  :page_size,
  :related_event,
  :related_events_limit,
  :search,
  :tag,
  :tag_search,
  :id,
  keyword_init: true
)

# Request payload for Indicator#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] dataset_id
#   @return [String]
#
# @!attribute [rw] indicator_type
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] page_size
#   @return [Float, nil]
#
# @!attribute [rw] related_event
#   @return [Array, nil]
IndicatorListMatch = Struct.new(
  :account_id,
  :dataset_id,
  :indicator_type,
  :name,
  :page,
  :page_size,
  :related_event,
  keyword_init: true
)

# Request payload for Indicator#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] dataset_id
#   @return [String]
#
# @!attribute [rw] completeness
#   @return [Hash]
#
# @!attribute [rw] confidence
#   @return [Integer, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] datasetId
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] durableObjectId
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] indicatorType
#   @return [String]
#
# @!attribute [rw] indicators
#   @return [Hash]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] pagination
#   @return [Hash]
#
# @!attribute [rw] relatedEvents
#   @return [Array, nil]
#
# @!attribute [rw] sources
#   @return [Array]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] tlp
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] uuid
#   @return [String]
#
# @!attribute [rw] value
#   @return [String]
IndicatorCreateData = Struct.new(
  :account_id,
  :dataset_id,
  :completeness,
  :confidence,
  :createdAt,
  :datasetId,
  :description,
  :durableObjectId,
  :id,
  :indicatorType,
  :indicators,
  :message,
  :metadata,
  :pagination,
  :relatedEvents,
  :sources,
  :tags,
  :tlp,
  :type,
  :updatedAt,
  :uuid,
  :value,
  keyword_init: true
)

# Request payload for Indicator#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] dataset_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] rel_uuid
#   @return [String, nil]
#
# @!attribute [rw] completeness
#   @return [Hash, nil]
#
# @!attribute [rw] confidence
#   @return [Integer, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] datasetId
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] durableObjectId
#   @return [String, nil]
#
# @!attribute [rw] indicatorType
#   @return [String, nil]
#
# @!attribute [rw] indicators
#   @return [Hash, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
#
# @!attribute [rw] relatedEvents
#   @return [Array, nil]
#
# @!attribute [rw] sources
#   @return [Array, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] tlp
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
IndicatorUpdateData = Struct.new(
  :account_id,
  :dataset_id,
  :id,
  :rel_uuid,
  :completeness,
  :confidence,
  :createdAt,
  :datasetId,
  :description,
  :durableObjectId,
  :indicatorType,
  :indicators,
  :message,
  :metadata,
  :pagination,
  :relatedEvents,
  :sources,
  :tags,
  :tlp,
  :type,
  :updatedAt,
  :uuid,
  :value,
  keyword_init: true
)

# Request payload for Indicator#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] dataset_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] rel_uuid
#   @return [String, nil]
IndicatorRemoveMatch = Struct.new(
  :account_id,
  :dataset_id,
  :id,
  :rel_uuid,
  keyword_init: true
)

# IndicatorType entity data model.
#
# @!attribute [rw] type
#   @return [String]
IndicatorType = Struct.new(
  :type,
  keyword_init: true
)

# Request payload for IndicatorType#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] dataset_id
#   @return [Array, nil]
IndicatorTypeLoadMatch = Struct.new(
  :account_id,
  :dataset_id,
  keyword_init: true
)

# Permission entity data model.
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] resourceId
#   @return [String, nil]
#
# @!attribute [rw] resourceType
#   @return [String]
#
# @!attribute [rw] role
#   @return [String]
#
# @!attribute [rw] subjectId
#   @return [String]
#
# @!attribute [rw] subjectType
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] uuid
#   @return [String]
Permission = Struct.new(
  :createdAt,
  :id,
  :message,
  :resourceId,
  :resourceType,
  :role,
  :subjectId,
  :subjectType,
  :success,
  :updatedAt,
  :uuid,
  keyword_init: true
)

# Request payload for Permission#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] dataset_id
#   @return [String]
PermissionListMatch = Struct.new(
  :account_id,
  :dataset_id,
  keyword_init: true
)

# Request payload for Permission#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] dataset_id
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] resourceId
#   @return [String, nil]
#
# @!attribute [rw] resourceType
#   @return [String]
#
# @!attribute [rw] role
#   @return [String]
#
# @!attribute [rw] subjectId
#   @return [String]
#
# @!attribute [rw] subjectType
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] uuid
#   @return [String]
PermissionCreateData = Struct.new(
  :account_id,
  :dataset_id,
  :createdAt,
  :id,
  :message,
  :resourceId,
  :resourceType,
  :role,
  :subjectId,
  :subjectType,
  :success,
  :updatedAt,
  :uuid,
  keyword_init: true
)

# Request payload for Permission#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] dataset_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] resourceId
#   @return [String, nil]
#
# @!attribute [rw] resourceType
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
#
# @!attribute [rw] subjectId
#   @return [String, nil]
#
# @!attribute [rw] subjectType
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
PermissionUpdateData = Struct.new(
  :account_id,
  :dataset_id,
  :id,
  :createdAt,
  :message,
  :resourceId,
  :resourceType,
  :role,
  :subjectId,
  :subjectType,
  :success,
  :updatedAt,
  :uuid,
  keyword_init: true
)

# Request payload for Permission#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] dataset_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
PermissionRemoveMatch = Struct.new(
  :account_id,
  :dataset_id,
  :id,
  keyword_init: true
)

# Priority entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] labels
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] page
#   @return [Integer]
#
# @!attribute [rw] per_page
#   @return [Integer]
#
# @!attribute [rw] priority
#   @return [Integer]
#
# @!attribute [rw] requirement
#   @return [String]
#
# @!attribute [rw] result
#   @return [Object, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] tlp
#   @return [String]
Priority = Struct.new(
  :errors,
  :id,
  :labels,
  :messages,
  :page,
  :per_page,
  :priority,
  :requirement,
  :result,
  :success,
  :tlp,
  keyword_init: true
)

# Request payload for Priority#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
PriorityLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for Priority#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] labels
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] page
#   @return [Integer]
#
# @!attribute [rw] per_page
#   @return [Integer]
#
# @!attribute [rw] priority
#   @return [Integer]
#
# @!attribute [rw] requirement
#   @return [String]
#
# @!attribute [rw] result
#   @return [Object, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] tlp
#   @return [String]
PriorityCreateData = Struct.new(
  :account_id,
  :errors,
  :id,
  :labels,
  :messages,
  :page,
  :per_page,
  :priority,
  :requirement,
  :result,
  :success,
  :tlp,
  keyword_init: true
)

# Request payload for Priority#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] labels
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] requirement
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Object, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] tlp
#   @return [String, nil]
PriorityUpdateData = Struct.new(
  :account_id,
  :id,
  :errors,
  :labels,
  :messages,
  :page,
  :per_page,
  :priority,
  :requirement,
  :result,
  :success,
  :tlp,
  keyword_init: true
)

# PriorityIntelligence entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] labels
#   @return [Array, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] requirement
#   @return [String]
#
# @!attribute [rw] tlp
#   @return [String, nil]
PriorityIntelligence = Struct.new(
  :id,
  :labels,
  :priority,
  :requirement,
  :tlp,
  keyword_init: true
)

# Request payload for PriorityIntelligence#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
PriorityIntelligenceLoadMatch = Struct.new(
  :account_id,
  :page,
  :per_page,
  :id,
  keyword_init: true
)

# Request payload for PriorityIntelligence#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] labels
#   @return [Array, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] requirement
#   @return [String]
#
# @!attribute [rw] tlp
#   @return [String, nil]
PriorityIntelligenceCreateData = Struct.new(
  :account_id,
  :id,
  :labels,
  :priority,
  :requirement,
  :tlp,
  keyword_init: true
)

# Request payload for PriorityIntelligence#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] labels
#   @return [Array, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] requirement
#   @return [String, nil]
#
# @!attribute [rw] tlp
#   @return [String, nil]
PriorityIntelligenceUpdateData = Struct.new(
  :account_id,
  :id,
  :labels,
  :priority,
  :requirement,
  :tlp,
  keyword_init: true
)

# Request payload for PriorityIntelligence#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
PriorityIntelligenceRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# PriorityIntelligenceRequirement entity data model.
#
# @!attribute [rw] as_of
#   @return [String, nil]
#
# @!attribute [rw] backtest_days
#   @return [Integer, nil]
#
# @!attribute [rw] candidate_limit
#   @return [Integer, nil]
#
# @!attribute [rw] dataset_ids
#   @return [Array, nil]
#
# @!attribute [rw] dimension
#   @return [String]
#
# @!attribute [rw] emerging_min_current_count
#   @return [Integer, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] established_min_absolute_delta
#   @return [Integer, nil]
#
# @!attribute [rw] established_min_prior_count
#   @return [Integer, nil]
#
# @!attribute [rw] established_min_relative_delta
#   @return [Float, nil]
#
# @!attribute [rw] value
#   @return [String]
#
# @!attribute [rw] window_days
#   @return [Integer, nil]
PriorityIntelligenceRequirement = Struct.new(
  :as_of,
  :backtest_days,
  :candidate_limit,
  :dataset_ids,
  :dimension,
  :emerging_min_current_count,
  :enabled,
  :established_min_absolute_delta,
  :established_min_prior_count,
  :established_min_relative_delta,
  :value,
  :window_days,
  keyword_init: true
)

# Request payload for PriorityIntelligenceRequirement#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] backtest_id
#   @return [String, nil]
#
# @!attribute [rw] evaluation_id
#   @return [String, nil]
PriorityIntelligenceRequirementLoadMatch = Struct.new(
  :account_id,
  :enabled,
  :page,
  :per_page,
  :backtest_id,
  :evaluation_id,
  keyword_init: true
)

# Request payload for PriorityIntelligenceRequirement#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] as_of
#   @return [String, nil]
#
# @!attribute [rw] backtest_days
#   @return [Integer, nil]
#
# @!attribute [rw] candidate_limit
#   @return [Integer, nil]
#
# @!attribute [rw] dataset_ids
#   @return [Array, nil]
#
# @!attribute [rw] dimension
#   @return [String]
#
# @!attribute [rw] emerging_min_current_count
#   @return [Integer, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] established_min_absolute_delta
#   @return [Integer, nil]
#
# @!attribute [rw] established_min_prior_count
#   @return [Integer, nil]
#
# @!attribute [rw] established_min_relative_delta
#   @return [Float, nil]
#
# @!attribute [rw] value
#   @return [String]
#
# @!attribute [rw] window_days
#   @return [Integer, nil]
PriorityIntelligenceRequirementCreateData = Struct.new(
  :account_id,
  :as_of,
  :backtest_days,
  :candidate_limit,
  :dataset_ids,
  :dimension,
  :emerging_min_current_count,
  :enabled,
  :established_min_absolute_delta,
  :established_min_prior_count,
  :established_min_relative_delta,
  :value,
  :window_days,
  keyword_init: true
)

# Request payload for PriorityIntelligenceRequirement#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] interest_id
#   @return [String]
#
# @!attribute [rw] as_of
#   @return [String, nil]
#
# @!attribute [rw] backtest_days
#   @return [Integer, nil]
#
# @!attribute [rw] candidate_limit
#   @return [Integer, nil]
#
# @!attribute [rw] dataset_ids
#   @return [Array, nil]
#
# @!attribute [rw] dimension
#   @return [String, nil]
#
# @!attribute [rw] emerging_min_current_count
#   @return [Integer, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] established_min_absolute_delta
#   @return [Integer, nil]
#
# @!attribute [rw] established_min_prior_count
#   @return [Integer, nil]
#
# @!attribute [rw] established_min_relative_delta
#   @return [Float, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
#
# @!attribute [rw] window_days
#   @return [Integer, nil]
PriorityIntelligenceRequirementUpdateData = Struct.new(
  :account_id,
  :interest_id,
  :as_of,
  :backtest_days,
  :candidate_limit,
  :dataset_ids,
  :dimension,
  :emerging_min_current_count,
  :enabled,
  :established_min_absolute_delta,
  :established_min_prior_count,
  :established_min_relative_delta,
  :value,
  :window_days,
  keyword_init: true
)

# Request payload for PriorityIntelligenceRequirement#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] interest_id
#   @return [String]
PriorityIntelligenceRequirementRemoveMatch = Struct.new(
  :account_id,
  :interest_id,
  keyword_init: true
)

# PriorityIntelligenceRequirementsPir entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] labels
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] priority
#   @return [Integer]
#
# @!attribute [rw] requirement
#   @return [String]
#
# @!attribute [rw] result
#   @return [Object, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] tlp
#   @return [String]
PriorityIntelligenceRequirementsPir = Struct.new(
  :errors,
  :labels,
  :messages,
  :priority,
  :requirement,
  :result,
  :success,
  :tlp,
  keyword_init: true
)

# Request payload for PriorityIntelligenceRequirementsPir#list.
#
# @!attribute [rw] account_id
#   @return [String]
PriorityIntelligenceRequirementsPirListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for PriorityIntelligenceRequirementsPir#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] labels
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] priority
#   @return [Integer]
#
# @!attribute [rw] requirement
#   @return [String]
#
# @!attribute [rw] result
#   @return [Object, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] tlp
#   @return [String]
PriorityIntelligenceRequirementsPirCreateData = Struct.new(
  :account_id,
  :errors,
  :labels,
  :messages,
  :priority,
  :requirement,
  :result,
  :success,
  :tlp,
  keyword_init: true
)

# PublicCredentialMonitor entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] domain
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] matched_at
#   @return [String]
#
# @!attribute [rw] username
#   @return [String]
PublicCredentialMonitor = Struct.new(
  :created_at,
  :domain,
  :id,
  :matched_at,
  :username,
  keyword_init: true
)

# Request payload for PublicCredentialMonitor#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] domain
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] username
#   @return [String, nil]
PublicCredentialMonitorListMatch = Struct.new(
  :account_id,
  :domain,
  :page,
  :per_page,
  :username,
  keyword_init: true
)

# Request payload for PublicCredentialMonitor#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] domain
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] matched_at
#   @return [String]
#
# @!attribute [rw] username
#   @return [String]
PublicCredentialMonitorCreateData = Struct.new(
  :account_id,
  :created_at,
  :domain,
  :id,
  :matched_at,
  :username,
  keyword_init: true
)

# Request payload for PublicCredentialMonitor#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
PublicCredentialMonitorRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request entity data model.
#
# @!attribute [rw] completed_after
#   @return [Object, nil]
#
# @!attribute [rw] completed_before
#   @return [Object, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] created_after
#   @return [Object, nil]
#
# @!attribute [rw] created_before
#   @return [Object, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] page
#   @return [Integer]
#
# @!attribute [rw] per_page
#   @return [Integer]
#
# @!attribute [rw] priority
#   @return [String, nil]
#
# @!attribute [rw] request_type
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] sort_by
#   @return [String, nil]
#
# @!attribute [rw] sort_order
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] summary
#   @return [String, nil]
#
# @!attribute [rw] tlp
#   @return [String, nil]
Request = Struct.new(
  :completed_after,
  :completed_before,
  :content,
  :created_after,
  :created_before,
  :errors,
  :id,
  :messages,
  :page,
  :per_page,
  :priority,
  :request_type,
  :result,
  :sort_by,
  :sort_order,
  :status,
  :success,
  :summary,
  :tlp,
  keyword_init: true
)

# Request payload for Request#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
RequestLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for Request#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] completed_after
#   @return [Object, nil]
#
# @!attribute [rw] completed_before
#   @return [Object, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] created_after
#   @return [Object, nil]
#
# @!attribute [rw] created_before
#   @return [Object, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] page
#   @return [Integer]
#
# @!attribute [rw] per_page
#   @return [Integer]
#
# @!attribute [rw] priority
#   @return [String, nil]
#
# @!attribute [rw] request_type
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] sort_by
#   @return [String, nil]
#
# @!attribute [rw] sort_order
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] summary
#   @return [String, nil]
#
# @!attribute [rw] tlp
#   @return [String, nil]
RequestCreateData = Struct.new(
  :account_id,
  :completed_after,
  :completed_before,
  :content,
  :created_after,
  :created_before,
  :errors,
  :id,
  :messages,
  :page,
  :per_page,
  :priority,
  :request_type,
  :result,
  :sort_by,
  :sort_order,
  :status,
  :success,
  :summary,
  :tlp,
  keyword_init: true
)

# Request payload for Request#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] completed_after
#   @return [Object, nil]
#
# @!attribute [rw] completed_before
#   @return [Object, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] created_after
#   @return [Object, nil]
#
# @!attribute [rw] created_before
#   @return [Object, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] priority
#   @return [String, nil]
#
# @!attribute [rw] request_type
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] sort_by
#   @return [String, nil]
#
# @!attribute [rw] sort_order
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] summary
#   @return [String, nil]
#
# @!attribute [rw] tlp
#   @return [String, nil]
RequestUpdateData = Struct.new(
  :account_id,
  :id,
  :completed_after,
  :completed_before,
  :content,
  :created_after,
  :created_before,
  :errors,
  :messages,
  :page,
  :per_page,
  :priority,
  :request_type,
  :result,
  :sort_by,
  :sort_order,
  :status,
  :success,
  :summary,
  :tlp,
  keyword_init: true
)

# RequestForInformationRfi entity data model.
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] priority
#   @return [String, nil]
#
# @!attribute [rw] request_type
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] summary
#   @return [String, nil]
#
# @!attribute [rw] tlp
#   @return [String, nil]
RequestForInformationRfi = Struct.new(
  :content,
  :errors,
  :id,
  :messages,
  :priority,
  :request_type,
  :result,
  :source,
  :success,
  :summary,
  :tlp,
  keyword_init: true
)

# Request payload for RequestForInformationRfi#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] asset_id
#   @return [String]
#
# @!attribute [rw] request_id
#   @return [String]
RequestForInformationRfiLoadMatch = Struct.new(
  :account_id,
  :asset_id,
  :request_id,
  keyword_init: true
)

# Request payload for RequestForInformationRfi#list.
#
# @!attribute [rw] account_id
#   @return [String]
RequestForInformationRfiListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for RequestForInformationRfi#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] request_id
#   @return [String, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] priority
#   @return [String, nil]
#
# @!attribute [rw] request_type
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] summary
#   @return [String, nil]
#
# @!attribute [rw] tlp
#   @return [String, nil]
RequestForInformationRfiCreateData = Struct.new(
  :account_id,
  :request_id,
  :content,
  :errors,
  :id,
  :messages,
  :priority,
  :request_type,
  :result,
  :source,
  :success,
  :summary,
  :tlp,
  keyword_init: true
)

# Request payload for RequestForInformationRfi#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] asset_id
#   @return [String, nil]
#
# @!attribute [rw] request_id
#   @return [String]
#
# @!attribute [rw] message_id
#   @return [Integer, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] priority
#   @return [String, nil]
#
# @!attribute [rw] request_type
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] summary
#   @return [String, nil]
#
# @!attribute [rw] tlp
#   @return [String, nil]
RequestForInformationRfiUpdateData = Struct.new(
  :account_id,
  :asset_id,
  :request_id,
  :message_id,
  :content,
  :errors,
  :id,
  :messages,
  :priority,
  :request_type,
  :result,
  :source,
  :success,
  :summary,
  :tlp,
  keyword_init: true
)

# RequestsDashboard entity data model.
#
# @!attribute [rw] created
#   @return [String]
#
# @!attribute [rw] defaultValue
#   @return [Object, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] displayOrder
#   @return [Float]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] fieldLabel
#   @return [String]
#
# @!attribute [rw] fieldName
#   @return [String]
#
# @!attribute [rw] fieldType
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] options
#   @return [Array, nil]
#
# @!attribute [rw] projectType
#   @return [String]
#
# @!attribute [rw] project_type
#   @return [String]
#
# @!attribute [rw] public
#   @return [Boolean]
#
# @!attribute [rw] request_types
#   @return [Array]
#
# @!attribute [rw] required
#   @return [Boolean]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] sectionID
#   @return [String, nil]
#
# @!attribute [rw] sectionLabel
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Hash]
#
# @!attribute [rw] total
#   @return [Float]
#
# @!attribute [rw] updated
#   @return [String]
#
# @!attribute [rw] validation
#   @return [Hash, nil]
RequestsDashboard = Struct.new(
  :created,
  :defaultValue,
  :description,
  :displayOrder,
  :errors,
  :fieldLabel,
  :fieldName,
  :fieldType,
  :id,
  :messages,
  :options,
  :projectType,
  :project_type,
  :public,
  :request_types,
  :required,
  :result,
  :sectionID,
  :sectionLabel,
  :success,
  :total,
  :updated,
  :validation,
  keyword_init: true
)

# Request payload for RequestsDashboard#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] project_type
#   @return [String]
RequestsDashboardLoadMatch = Struct.new(
  :account_id,
  :project_type,
  keyword_init: true
)

# Request payload for RequestsDashboard#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] project_type
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] request_type
#   @return [String, nil]
RequestsDashboardListMatch = Struct.new(
  :account_id,
  :project_type,
  :country,
  :request_type,
  keyword_init: true
)

# Rfi entity data model.
#
# @!attribute [rw] account
#   @return [Hash]
#
# @!attribute [rw] assignee
#   @return [String]
#
# @!attribute [rw] completed
#   @return [String]
#
# @!attribute [rw] created
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] eventId
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] investigation_id
#   @return [String]
#
# @!attribute [rw] is_free_request
#   @return [Boolean]
#
# @!attribute [rw] message_tokens
#   @return [Float]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] pagination
#   @return [Hash]
#
# @!attribute [rw] priority
#   @return [String]
#
# @!attribute [rw] readable_id
#   @return [String]
#
# @!attribute [rw] release_entitlements
#   @return [String]
#
# @!attribute [rw] report_id
#   @return [String]
#
# @!attribute [rw] request
#   @return [Hash]
#
# @!attribute [rw] request_type
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Array]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] subtypeId
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [String]
#
# @!attribute [rw] summary
#   @return [String]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] tlp
#   @return [String]
#
# @!attribute [rw] tokens
#   @return [Float]
#
# @!attribute [rw] updated
#   @return [String]
Rfi = Struct.new(
  :account,
  :assignee,
  :completed,
  :created,
  :description,
  :eventId,
  :id,
  :investigation_id,
  :is_free_request,
  :message_tokens,
  :metadata,
  :pagination,
  :priority,
  :readable_id,
  :release_entitlements,
  :report_id,
  :request,
  :request_type,
  :result,
  :status,
  :subtypeId,
  :success,
  :summary,
  :title,
  :tlp,
  :tokens,
  :updated,
  keyword_init: true
)

# Request payload for Rfi#load.
#
# @!attribute [rw] account_id
#   @return [String, nil]
#
# @!attribute [rw] project_type
#   @return [String]
#
# @!attribute [rw] assignee
#   @return [String, nil]
#
# @!attribute [rw] created_by
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [String, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] page_size
#   @return [Float, nil]
#
# @!attribute [rw] priority
#   @return [String, nil]
#
# @!attribute [rw] readable_id
#   @return [String, nil]
#
# @!attribute [rw] request_type
#   @return [String, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] summary
#   @return [String, nil]
#
# @!attribute [rw] tlp
#   @return [String, nil]
#
# @!attribute [rw] request_id
#   @return [String, nil]
RfiLoadMatch = Struct.new(
  :account_id,
  :project_type,
  :assignee,
  :created_by,
  :id,
  :metadata,
  :order,
  :order_by,
  :page,
  :page_size,
  :priority,
  :readable_id,
  :request_type,
  :search,
  :status,
  :summary,
  :tlp,
  :request_id,
  keyword_init: true
)

# Request payload for Rfi#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] project_type
#   @return [String]
#
# @!attribute [rw] account
#   @return [Hash]
#
# @!attribute [rw] assignee
#   @return [String]
#
# @!attribute [rw] completed
#   @return [String]
#
# @!attribute [rw] created
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] eventId
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] investigation_id
#   @return [String]
#
# @!attribute [rw] is_free_request
#   @return [Boolean]
#
# @!attribute [rw] message_tokens
#   @return [Float]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] pagination
#   @return [Hash]
#
# @!attribute [rw] priority
#   @return [String]
#
# @!attribute [rw] readable_id
#   @return [String]
#
# @!attribute [rw] release_entitlements
#   @return [String]
#
# @!attribute [rw] report_id
#   @return [String]
#
# @!attribute [rw] request
#   @return [Hash]
#
# @!attribute [rw] request_type
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Array]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] subtypeId
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [String]
#
# @!attribute [rw] summary
#   @return [String]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] tlp
#   @return [String]
#
# @!attribute [rw] tokens
#   @return [Float]
#
# @!attribute [rw] updated
#   @return [String]
RfiCreateData = Struct.new(
  :account_id,
  :project_type,
  :account,
  :assignee,
  :completed,
  :created,
  :description,
  :eventId,
  :id,
  :investigation_id,
  :is_free_request,
  :message_tokens,
  :metadata,
  :pagination,
  :priority,
  :readable_id,
  :release_entitlements,
  :report_id,
  :request,
  :request_type,
  :result,
  :status,
  :subtypeId,
  :success,
  :summary,
  :title,
  :tlp,
  :tokens,
  :updated,
  keyword_init: true
)

# Request payload for Rfi#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] project_type
#   @return [String]
#
# @!attribute [rw] request_id
#   @return [String]
#
# @!attribute [rw] account
#   @return [Hash, nil]
#
# @!attribute [rw] assignee
#   @return [String, nil]
#
# @!attribute [rw] completed
#   @return [String, nil]
#
# @!attribute [rw] created
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] eventId
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] investigation_id
#   @return [String, nil]
#
# @!attribute [rw] is_free_request
#   @return [Boolean, nil]
#
# @!attribute [rw] message_tokens
#   @return [Float, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
#
# @!attribute [rw] priority
#   @return [String, nil]
#
# @!attribute [rw] readable_id
#   @return [String, nil]
#
# @!attribute [rw] release_entitlements
#   @return [String, nil]
#
# @!attribute [rw] report_id
#   @return [String, nil]
#
# @!attribute [rw] request
#   @return [Hash, nil]
#
# @!attribute [rw] request_type
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] subtypeId
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [String, nil]
#
# @!attribute [rw] summary
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] tlp
#   @return [String, nil]
#
# @!attribute [rw] tokens
#   @return [Float, nil]
#
# @!attribute [rw] updated
#   @return [String, nil]
RfiUpdateData = Struct.new(
  :account_id,
  :project_type,
  :request_id,
  :account,
  :assignee,
  :completed,
  :created,
  :description,
  :eventId,
  :id,
  :investigation_id,
  :is_free_request,
  :message_tokens,
  :metadata,
  :pagination,
  :priority,
  :readable_id,
  :release_entitlements,
  :report_id,
  :request,
  :request_type,
  :result,
  :status,
  :subtypeId,
  :success,
  :summary,
  :title,
  :tlp,
  :tokens,
  :updated,
  keyword_init: true
)

# RfiMessage entity data model.
#
# @!attribute [rw] attachment_asset_ids
#   @return [Array, nil]
#
# @!attribute [rw] attachments
#   @return [Array]
#
# @!attribute [rw] author_id
#   @return [String, nil]
#
# @!attribute [rw] author_name
#   @return [String, nil]
#
# @!attribute [rw] content
#   @return [String]
#
# @!attribute [rw] created
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] is_cloudflare_team
#   @return [Boolean]
#
# @!attribute [rw] is_published
#   @return [Boolean]
#
# @!attribute [rw] publish
#   @return [Boolean, nil]
#
# @!attribute [rw] published
#   @return [String]
#
# @!attribute [rw] tlp
#   @return [String]
#
# @!attribute [rw] updated
#   @return [String]
RfiMessage = Struct.new(
  :attachment_asset_ids,
  :attachments,
  :author_id,
  :author_name,
  :content,
  :created,
  :id,
  :is_cloudflare_team,
  :is_published,
  :publish,
  :published,
  :tlp,
  :updated,
  keyword_init: true
)

# Request payload for RfiMessage#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_type
#   @return [String]
#
# @!attribute [rw] request_id
#   @return [String]
RfiMessageLoadMatch = Struct.new(
  :account_id,
  :id,
  :project_type,
  :request_id,
  keyword_init: true
)

# Request payload for RfiMessage#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] project_type
#   @return [String]
#
# @!attribute [rw] request_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [String, nil]
#
# @!attribute [rw] per_page
#   @return [String, nil]
RfiMessageListMatch = Struct.new(
  :account_id,
  :project_type,
  :request_id,
  :page,
  :per_page,
  keyword_init: true
)

# Request payload for RfiMessage#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] project_type
#   @return [String]
#
# @!attribute [rw] request_id
#   @return [String]
#
# @!attribute [rw] attachment_asset_ids
#   @return [Array, nil]
#
# @!attribute [rw] attachments
#   @return [Array]
#
# @!attribute [rw] author_id
#   @return [String, nil]
#
# @!attribute [rw] author_name
#   @return [String, nil]
#
# @!attribute [rw] content
#   @return [String]
#
# @!attribute [rw] created
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] is_cloudflare_team
#   @return [Boolean]
#
# @!attribute [rw] is_published
#   @return [Boolean]
#
# @!attribute [rw] publish
#   @return [Boolean, nil]
#
# @!attribute [rw] published
#   @return [String]
#
# @!attribute [rw] tlp
#   @return [String]
#
# @!attribute [rw] updated
#   @return [String]
RfiMessageCreateData = Struct.new(
  :account_id,
  :project_type,
  :request_id,
  :attachment_asset_ids,
  :attachments,
  :author_id,
  :author_name,
  :content,
  :created,
  :id,
  :is_cloudflare_team,
  :is_published,
  :publish,
  :published,
  :tlp,
  :updated,
  keyword_init: true
)

# Request payload for RfiMessage#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_type
#   @return [String]
#
# @!attribute [rw] request_id
#   @return [String]
#
# @!attribute [rw] attachment_asset_ids
#   @return [Array, nil]
#
# @!attribute [rw] attachments
#   @return [Array, nil]
#
# @!attribute [rw] author_id
#   @return [String, nil]
#
# @!attribute [rw] author_name
#   @return [String, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] created
#   @return [String, nil]
#
# @!attribute [rw] is_cloudflare_team
#   @return [Boolean, nil]
#
# @!attribute [rw] is_published
#   @return [Boolean, nil]
#
# @!attribute [rw] publish
#   @return [Boolean, nil]
#
# @!attribute [rw] published
#   @return [String, nil]
#
# @!attribute [rw] tlp
#   @return [String, nil]
#
# @!attribute [rw] updated
#   @return [String, nil]
RfiMessageUpdateData = Struct.new(
  :account_id,
  :id,
  :project_type,
  :request_id,
  :attachment_asset_ids,
  :attachments,
  :author_id,
  :author_name,
  :content,
  :created,
  :is_cloudflare_team,
  :is_published,
  :publish,
  :published,
  :tlp,
  :updated,
  keyword_init: true
)

# Rule entity data model.
#
# @!attribute [rw] arrays
#   @return [Array]
#
# @!attribute [rw] headers
#   @return [Hash]
#
# @!attribute [rw] operators
#   @return [Hash]
#
# @!attribute [rw] scalars
#   @return [Array]
#
# @!attribute [rw] string_arrays
#   @return [Array]
#
# @!attribute [rw] structs
#   @return [Array]
Rule = Struct.new(
  :arrays,
  :headers,
  :operators,
  :scalars,
  :string_arrays,
  :structs,
  keyword_init: true
)

# Request payload for Rule#list.
#
# @!attribute [rw] account_id
#   @return [String]
RuleListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Scan entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] frequency
#   @return [Float, nil]
#
# @!attribute [rw] ips
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] ports
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
Scan = Struct.new(
  :errors,
  :frequency,
  :ips,
  :messages,
  :ports,
  :result,
  :success,
  keyword_init: true
)

# Request payload for Scan#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] config_id
#   @return [String]
ScanLoadMatch = Struct.new(
  :account_id,
  :config_id,
  keyword_init: true
)

# Request payload for Scan#list.
#
# @!attribute [rw] account_id
#   @return [String]
ScanListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for Scan#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] frequency
#   @return [Float, nil]
#
# @!attribute [rw] ips
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] ports
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
ScanCreateData = Struct.new(
  :account_id,
  :errors,
  :frequency,
  :ips,
  :messages,
  :ports,
  :result,
  :success,
  keyword_init: true
)

# Request payload for Scan#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] config_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] frequency
#   @return [Float, nil]
#
# @!attribute [rw] ips
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] ports
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
ScanUpdateData = Struct.new(
  :account_id,
  :config_id,
  :errors,
  :frequency,
  :ips,
  :messages,
  :ports,
  :result,
  :success,
  keyword_init: true
)

# Request payload for Scan#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] config_id
#   @return [String]
ScanRemoveMatch = Struct.new(
  :account_id,
  :config_id,
  keyword_init: true
)

# Tag entity data model.
#
# @!attribute [rw] activeDuration
#   @return [String, nil]
#
# @!attribute [rw] activeDuration_annotated
#   @return [Hash]
#
# @!attribute [rw] actorCategory
#   @return [String, nil]
#
# @!attribute [rw] actorCategory_annotated
#   @return [Hash]
#
# @!attribute [rw] aliasGroupNames
#   @return [Array, nil]
#
# @!attribute [rw] aliasGroupNamesInternal
#   @return [Array, nil]
#
# @!attribute [rw] aliases
#   @return [Array, nil]
#
# @!attribute [rw] attributionOrganization
#   @return [String, nil]
#
# @!attribute [rw] attributionOrganization_annotated
#   @return [Hash]
#
# @!attribute [rw] categoryName
#   @return [String, nil]
#
# @!attribute [rw] categoryUuid
#   @return [String, nil]
#
# @!attribute [rw] confidence
#   @return [Integer, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] dateOfDiscovery
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] externalReferenceLinks
#   @return [Array, nil]
#
# @!attribute [rw] externalReferences
#   @return [Array, nil]
#
# @!attribute [rw] externalReferences_annotated
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] internalAliases
#   @return [Array, nil]
#
# @!attribute [rw] internalDescription
#   @return [String, nil]
#
# @!attribute [rw] lastSeen
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] motive
#   @return [String, nil]
#
# @!attribute [rw] motive_annotated
#   @return [Hash]
#
# @!attribute [rw] opsecLevel
#   @return [String, nil]
#
# @!attribute [rw] opsecLevel_annotated
#   @return [Hash]
#
# @!attribute [rw] originCountryISO
#   @return [String, nil]
#
# @!attribute [rw] originCountryISO_annotated
#   @return [Hash]
#
# @!attribute [rw] priority
#   @return [Float, nil]
#
# @!attribute [rw] priority_annotated
#   @return [Hash]
#
# @!attribute [rw] properties
#   @return [Hash, nil]
#
# @!attribute [rw] sophisticationLevel
#   @return [String, nil]
#
# @!attribute [rw] sophisticationLevel_annotated
#   @return [Hash]
#
# @!attribute [rw] tlp
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] uuid
#   @return [String]
#
# @!attribute [rw] value
#   @return [String]
#
# @!attribute [rw] version
#   @return [Float, nil]
Tag = Struct.new(
  :activeDuration,
  :activeDuration_annotated,
  :actorCategory,
  :actorCategory_annotated,
  :aliasGroupNames,
  :aliasGroupNamesInternal,
  :aliases,
  :attributionOrganization,
  :attributionOrganization_annotated,
  :categoryName,
  :categoryUuid,
  :confidence,
  :createdAt,
  :dateOfDiscovery,
  :description,
  :externalReferenceLinks,
  :externalReferences,
  :externalReferences_annotated,
  :id,
  :internalAliases,
  :internalDescription,
  :lastSeen,
  :metadata,
  :motive,
  :motive_annotated,
  :opsecLevel,
  :opsecLevel_annotated,
  :originCountryISO,
  :originCountryISO_annotated,
  :priority,
  :priority_annotated,
  :properties,
  :sophisticationLevel,
  :sophisticationLevel_annotated,
  :tlp,
  :type,
  :updatedAt,
  :uuid,
  :value,
  :version,
  keyword_init: true
)

# Request payload for Tag#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
TagLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for Tag#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] cache
#   @return [String, nil]
#
# @!attribute [rw] category_uuid
#   @return [String, nil]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] page_size
#   @return [Float, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
TagListMatch = Struct.new(
  :account_id,
  :cache,
  :category_uuid,
  :filter,
  :page,
  :page_size,
  :search,
  :value,
  keyword_init: true
)

# Request payload for Tag#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] activeDuration
#   @return [String, nil]
#
# @!attribute [rw] activeDuration_annotated
#   @return [Hash]
#
# @!attribute [rw] actorCategory
#   @return [String, nil]
#
# @!attribute [rw] actorCategory_annotated
#   @return [Hash]
#
# @!attribute [rw] aliasGroupNames
#   @return [Array, nil]
#
# @!attribute [rw] aliasGroupNamesInternal
#   @return [Array, nil]
#
# @!attribute [rw] aliases
#   @return [Array, nil]
#
# @!attribute [rw] attributionOrganization
#   @return [String, nil]
#
# @!attribute [rw] attributionOrganization_annotated
#   @return [Hash]
#
# @!attribute [rw] categoryName
#   @return [String, nil]
#
# @!attribute [rw] categoryUuid
#   @return [String, nil]
#
# @!attribute [rw] confidence
#   @return [Integer, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] dateOfDiscovery
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] externalReferenceLinks
#   @return [Array, nil]
#
# @!attribute [rw] externalReferences
#   @return [Array, nil]
#
# @!attribute [rw] externalReferences_annotated
#   @return [Array, nil]
#
# @!attribute [rw] internalAliases
#   @return [Array, nil]
#
# @!attribute [rw] internalDescription
#   @return [String, nil]
#
# @!attribute [rw] lastSeen
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] motive
#   @return [String, nil]
#
# @!attribute [rw] motive_annotated
#   @return [Hash]
#
# @!attribute [rw] opsecLevel
#   @return [String, nil]
#
# @!attribute [rw] opsecLevel_annotated
#   @return [Hash]
#
# @!attribute [rw] originCountryISO
#   @return [String, nil]
#
# @!attribute [rw] originCountryISO_annotated
#   @return [Hash]
#
# @!attribute [rw] priority
#   @return [Float, nil]
#
# @!attribute [rw] priority_annotated
#   @return [Hash]
#
# @!attribute [rw] properties
#   @return [Hash, nil]
#
# @!attribute [rw] sophisticationLevel
#   @return [String, nil]
#
# @!attribute [rw] sophisticationLevel_annotated
#   @return [Hash]
#
# @!attribute [rw] tlp
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] uuid
#   @return [String]
#
# @!attribute [rw] value
#   @return [String]
#
# @!attribute [rw] version
#   @return [Float, nil]
TagCreateData = Struct.new(
  :account_id,
  :id,
  :activeDuration,
  :activeDuration_annotated,
  :actorCategory,
  :actorCategory_annotated,
  :aliasGroupNames,
  :aliasGroupNamesInternal,
  :aliases,
  :attributionOrganization,
  :attributionOrganization_annotated,
  :categoryName,
  :categoryUuid,
  :confidence,
  :createdAt,
  :dateOfDiscovery,
  :description,
  :externalReferenceLinks,
  :externalReferences,
  :externalReferences_annotated,
  :internalAliases,
  :internalDescription,
  :lastSeen,
  :metadata,
  :motive,
  :motive_annotated,
  :opsecLevel,
  :opsecLevel_annotated,
  :originCountryISO,
  :originCountryISO_annotated,
  :priority,
  :priority_annotated,
  :properties,
  :sophisticationLevel,
  :sophisticationLevel_annotated,
  :tlp,
  :type,
  :updatedAt,
  :uuid,
  :value,
  :version,
  keyword_init: true
)

# Request payload for Tag#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] rel_uuid
#   @return [String, nil]
#
# @!attribute [rw] dataset_id
#   @return [String, nil]
#
# @!attribute [rw] activeDuration
#   @return [String, nil]
#
# @!attribute [rw] activeDuration_annotated
#   @return [Hash, nil]
#
# @!attribute [rw] actorCategory
#   @return [String, nil]
#
# @!attribute [rw] actorCategory_annotated
#   @return [Hash, nil]
#
# @!attribute [rw] aliasGroupNames
#   @return [Array, nil]
#
# @!attribute [rw] aliasGroupNamesInternal
#   @return [Array, nil]
#
# @!attribute [rw] aliases
#   @return [Array, nil]
#
# @!attribute [rw] attributionOrganization
#   @return [String, nil]
#
# @!attribute [rw] attributionOrganization_annotated
#   @return [Hash, nil]
#
# @!attribute [rw] categoryName
#   @return [String, nil]
#
# @!attribute [rw] categoryUuid
#   @return [String, nil]
#
# @!attribute [rw] confidence
#   @return [Integer, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] dateOfDiscovery
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] externalReferenceLinks
#   @return [Array, nil]
#
# @!attribute [rw] externalReferences
#   @return [Array, nil]
#
# @!attribute [rw] externalReferences_annotated
#   @return [Array, nil]
#
# @!attribute [rw] internalAliases
#   @return [Array, nil]
#
# @!attribute [rw] internalDescription
#   @return [String, nil]
#
# @!attribute [rw] lastSeen
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] motive
#   @return [String, nil]
#
# @!attribute [rw] motive_annotated
#   @return [Hash, nil]
#
# @!attribute [rw] opsecLevel
#   @return [String, nil]
#
# @!attribute [rw] opsecLevel_annotated
#   @return [Hash, nil]
#
# @!attribute [rw] originCountryISO
#   @return [String, nil]
#
# @!attribute [rw] originCountryISO_annotated
#   @return [Hash, nil]
#
# @!attribute [rw] priority
#   @return [Float, nil]
#
# @!attribute [rw] priority_annotated
#   @return [Hash, nil]
#
# @!attribute [rw] properties
#   @return [Hash, nil]
#
# @!attribute [rw] sophisticationLevel
#   @return [String, nil]
#
# @!attribute [rw] sophisticationLevel_annotated
#   @return [Hash, nil]
#
# @!attribute [rw] tlp
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [Float, nil]
TagUpdateData = Struct.new(
  :account_id,
  :id,
  :rel_uuid,
  :dataset_id,
  :activeDuration,
  :activeDuration_annotated,
  :actorCategory,
  :actorCategory_annotated,
  :aliasGroupNames,
  :aliasGroupNamesInternal,
  :aliases,
  :attributionOrganization,
  :attributionOrganization_annotated,
  :categoryName,
  :categoryUuid,
  :confidence,
  :createdAt,
  :dateOfDiscovery,
  :description,
  :externalReferenceLinks,
  :externalReferences,
  :externalReferences_annotated,
  :internalAliases,
  :internalDescription,
  :lastSeen,
  :metadata,
  :motive,
  :motive_annotated,
  :opsecLevel,
  :opsecLevel_annotated,
  :originCountryISO,
  :originCountryISO_annotated,
  :priority,
  :priority_annotated,
  :properties,
  :sophisticationLevel,
  :sophisticationLevel_annotated,
  :tlp,
  :type,
  :updatedAt,
  :uuid,
  :value,
  :version,
  keyword_init: true
)

# Request payload for Tag#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] rel_uuid
#   @return [String, nil]
#
# @!attribute [rw] dataset_id
#   @return [String, nil]
TagRemoveMatch = Struct.new(
  :account_id,
  :id,
  :rel_uuid,
  :dataset_id,
  keyword_init: true
)

# TagCategory entity data model.
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] schema
#   @return [Array, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] uuid
#   @return [String]
TagCategory = Struct.new(
  :createdAt,
  :description,
  :id,
  :name,
  :schema,
  :updatedAt,
  :uuid,
  keyword_init: true
)

# Request payload for TagCategory#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
TagCategoryLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for TagCategory#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] search
#   @return [String, nil]
TagCategoryListMatch = Struct.new(
  :account_id,
  :search,
  keyword_init: true
)

# Request payload for TagCategory#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] schema
#   @return [Array, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] uuid
#   @return [String]
TagCategoryCreateData = Struct.new(
  :account_id,
  :createdAt,
  :description,
  :id,
  :name,
  :schema,
  :updatedAt,
  :uuid,
  keyword_init: true
)

# Request payload for TagCategory#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] schema
#   @return [Array, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
TagCategoryUpdateData = Struct.new(
  :account_id,
  :id,
  :createdAt,
  :description,
  :name,
  :schema,
  :updatedAt,
  :uuid,
  keyword_init: true
)

# Request payload for TagCategory#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
TagCategoryRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# TargetIndustry entity data model.
#
# @!attribute [rw] type
#   @return [String]
TargetIndustry = Struct.new(
  :type,
  keyword_init: true
)

# Request payload for TargetIndustry#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] dataset_id
#   @return [String, nil]
TargetIndustryLoadMatch = Struct.new(
  :account_id,
  :dataset_id,
  keyword_init: true
)

# ThreatSignal entity data model.
#
# @!attribute [rw] category_id
#   @return [String, nil]
#
# @!attribute [rw] category_uuids
#   @return [Array]
#
# @!attribute [rw] config
#   @return [String, nil]
#
# @!attribute [rw] display_name
#   @return [String, nil]
#
# @!attribute [rw] display_order
#   @return [Integer, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] feeds
#   @return [Array]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] opted_out
#   @return [Boolean]
#
# @!attribute [rw] output_schema
#   @return [String, nil]
#
# @!attribute [rw] poll_interval_s
#   @return [Integer, nil]
#
# @!attribute [rw] prompt
#   @return [String, nil]
#
# @!attribute [rw] read
#   @return [Boolean]
#
# @!attribute [rw] result
#   @return [Object]
#
# @!attribute [rw] skill_ids
#   @return [Array]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] tag_id
#   @return [String]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] why_valuable
#   @return [String, nil]
ThreatSignal = Struct.new(
  :category_id,
  :category_uuids,
  :config,
  :display_name,
  :display_order,
  :enabled,
  :errors,
  :feeds,
  :is_active,
  :message,
  :messages,
  :name,
  :opted_out,
  :output_schema,
  :poll_interval_s,
  :prompt,
  :read,
  :result,
  :skill_ids,
  :success,
  :tag_id,
  :title,
  :url,
  :why_valuable,
  keyword_init: true
)

# Request payload for ThreatSignal#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] article_id
#   @return [String, nil]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] skill_id
#   @return [String, nil]
#
# @!attribute [rw] feed_id
#   @return [String, nil]
ThreatSignalLoadMatch = Struct.new(
  :account_id,
  :article_id,
  :format,
  :skill_id,
  :feed_id,
  keyword_init: true
)

# Request payload for ThreatSignal#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] skill_id
#   @return [String]
ThreatSignalListMatch = Struct.new(
  :account_id,
  :skill_id,
  keyword_init: true
)

# Request payload for ThreatSignal#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] article_id
#   @return [String, nil]
#
# @!attribute [rw] skill_id
#   @return [String, nil]
#
# @!attribute [rw] feed_id
#   @return [String, nil]
#
# @!attribute [rw] category_id
#   @return [String, nil]
#
# @!attribute [rw] category_uuids
#   @return [Array]
#
# @!attribute [rw] config
#   @return [String, nil]
#
# @!attribute [rw] display_name
#   @return [String, nil]
#
# @!attribute [rw] display_order
#   @return [Integer, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] feeds
#   @return [Array]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] opted_out
#   @return [Boolean]
#
# @!attribute [rw] output_schema
#   @return [String, nil]
#
# @!attribute [rw] poll_interval_s
#   @return [Integer, nil]
#
# @!attribute [rw] prompt
#   @return [String, nil]
#
# @!attribute [rw] read
#   @return [Boolean]
#
# @!attribute [rw] result
#   @return [Object]
#
# @!attribute [rw] skill_ids
#   @return [Array]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] tag_id
#   @return [String]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] why_valuable
#   @return [String, nil]
ThreatSignalCreateData = Struct.new(
  :account_id,
  :article_id,
  :skill_id,
  :feed_id,
  :category_id,
  :category_uuids,
  :config,
  :display_name,
  :display_order,
  :enabled,
  :errors,
  :feeds,
  :is_active,
  :message,
  :messages,
  :name,
  :opted_out,
  :output_schema,
  :poll_interval_s,
  :prompt,
  :read,
  :result,
  :skill_ids,
  :success,
  :tag_id,
  :title,
  :url,
  :why_valuable,
  keyword_init: true
)

# Request payload for ThreatSignal#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] feed_id
#   @return [String, nil]
#
# @!attribute [rw] skill_id
#   @return [String, nil]
#
# @!attribute [rw] category_id
#   @return [String, nil]
#
# @!attribute [rw] category_uuids
#   @return [Array, nil]
#
# @!attribute [rw] config
#   @return [String, nil]
#
# @!attribute [rw] display_name
#   @return [String, nil]
#
# @!attribute [rw] display_order
#   @return [Integer, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] feeds
#   @return [Array, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] opted_out
#   @return [Boolean, nil]
#
# @!attribute [rw] output_schema
#   @return [String, nil]
#
# @!attribute [rw] poll_interval_s
#   @return [Integer, nil]
#
# @!attribute [rw] prompt
#   @return [String, nil]
#
# @!attribute [rw] read
#   @return [Boolean, nil]
#
# @!attribute [rw] result
#   @return [Object, nil]
#
# @!attribute [rw] skill_ids
#   @return [Array, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] tag_id
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] why_valuable
#   @return [String, nil]
ThreatSignalUpdateData = Struct.new(
  :account_id,
  :feed_id,
  :skill_id,
  :category_id,
  :category_uuids,
  :config,
  :display_name,
  :display_order,
  :enabled,
  :errors,
  :feeds,
  :is_active,
  :message,
  :messages,
  :name,
  :opted_out,
  :output_schema,
  :poll_interval_s,
  :prompt,
  :read,
  :result,
  :skill_ids,
  :success,
  :tag_id,
  :title,
  :url,
  :why_valuable,
  keyword_init: true
)

# Request payload for ThreatSignal#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] article_id
#   @return [String, nil]
#
# @!attribute [rw] tag_id
#   @return [String, nil]
#
# @!attribute [rw] curated_feed_id
#   @return [String, nil]
#
# @!attribute [rw] feed_id
#   @return [String, nil]
#
# @!attribute [rw] skill_id
#   @return [String, nil]
ThreatSignalRemoveMatch = Struct.new(
  :account_id,
  :article_id,
  :tag_id,
  :curated_feed_id,
  :feed_id,
  :skill_id,
  keyword_init: true
)

