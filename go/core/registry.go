package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewAttackerEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewBinDbEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewBrandProtectionEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewCategoryEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewCloudforceOneAccountExemptionEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewCloudforceOneDeleteAllEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewCloudforceOneEditApprovalEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewCloudforceOneEmailRuleValidationEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewCloudforceOneEmailRulesListEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewCloudforceOneRequestsApiResponseCommonEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewCloudforceOneRuleEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewCloudforceOneRuleApprovalDetailEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewCloudforceOneRuleApprovalsListEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewCloudforceOneRulePreviewEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewCloudforceOneRulesPreviewListEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewCloudforceOneRulesSearchEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewCloudforceOneStatEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewCloudforceOneSuccessEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewCloudforceOneTreeNodeEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewCloudforceOneValidationEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewCollectionEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewCollectionsItemEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewCountryEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewDashboardAssetEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewDashboardUserEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewDatasetEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewEventEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewGroupEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewIndicatorEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewIndicatorTypeEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewPermissionEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewPriorityEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewPriorityIntelligenceEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewPriorityIntelligenceRequirementEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewPriorityIntelligenceRequirementsPirEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewPublicCredentialMonitorEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewRequestEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewRequestForInformationRfiEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewRequestsDashboardEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewRfiEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewRfiMessageEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewRuleEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewScanEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewTagEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewTagCategoryEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewTargetIndustryEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

var NewThreatSignalEntityFunc func(client *CloudflareCloudforceOneSDK, entopts map[string]any) CloudflareCloudforceOneEntity

