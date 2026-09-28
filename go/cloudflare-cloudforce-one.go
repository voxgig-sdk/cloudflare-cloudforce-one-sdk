package voxgigcloudflarecloudforceonesdk

import (
	"github.com/voxgig-sdk/cloudflare-cloudforce-one-sdk/go/core"
	"github.com/voxgig-sdk/cloudflare-cloudforce-one-sdk/go/entity"
	"github.com/voxgig-sdk/cloudflare-cloudforce-one-sdk/go/feature"
	_ "github.com/voxgig-sdk/cloudflare-cloudforce-one-sdk/go/utility"
)

// Type aliases preserve external API.
type CloudflareCloudforceOneSDK = core.CloudflareCloudforceOneSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type CloudflareCloudforceOneEntity = core.CloudflareCloudforceOneEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type CloudflareCloudforceOneError = core.CloudflareCloudforceOneError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAttackerEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewAttackerEntity(client, entopts)
	}
	core.NewBinDbEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewBinDbEntity(client, entopts)
	}
	core.NewBrandProtectionEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewBrandProtectionEntity(client, entopts)
	}
	core.NewCategoryEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewCategoryEntity(client, entopts)
	}
	core.NewCloudforceOneAccountExemptionEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewCloudforceOneAccountExemptionEntity(client, entopts)
	}
	core.NewCloudforceOneDeleteAllEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewCloudforceOneDeleteAllEntity(client, entopts)
	}
	core.NewCloudforceOneEditApprovalEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewCloudforceOneEditApprovalEntity(client, entopts)
	}
	core.NewCloudforceOneEmailRuleValidationEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewCloudforceOneEmailRuleValidationEntity(client, entopts)
	}
	core.NewCloudforceOneEmailRulesListEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewCloudforceOneEmailRulesListEntity(client, entopts)
	}
	core.NewCloudforceOneRequestsApiResponseCommonEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewCloudforceOneRequestsApiResponseCommonEntity(client, entopts)
	}
	core.NewCloudforceOneRuleEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewCloudforceOneRuleEntity(client, entopts)
	}
	core.NewCloudforceOneRuleApprovalDetailEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewCloudforceOneRuleApprovalDetailEntity(client, entopts)
	}
	core.NewCloudforceOneRuleApprovalsListEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewCloudforceOneRuleApprovalsListEntity(client, entopts)
	}
	core.NewCloudforceOneRulePreviewEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewCloudforceOneRulePreviewEntity(client, entopts)
	}
	core.NewCloudforceOneRulesPreviewListEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewCloudforceOneRulesPreviewListEntity(client, entopts)
	}
	core.NewCloudforceOneRulesSearchEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewCloudforceOneRulesSearchEntity(client, entopts)
	}
	core.NewCloudforceOneStatEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewCloudforceOneStatEntity(client, entopts)
	}
	core.NewCloudforceOneSuccessEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewCloudforceOneSuccessEntity(client, entopts)
	}
	core.NewCloudforceOneTreeNodeEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewCloudforceOneTreeNodeEntity(client, entopts)
	}
	core.NewCloudforceOneValidationEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewCloudforceOneValidationEntity(client, entopts)
	}
	core.NewCollectionEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewCollectionEntity(client, entopts)
	}
	core.NewCollectionsItemEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewCollectionsItemEntity(client, entopts)
	}
	core.NewCountryEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewCountryEntity(client, entopts)
	}
	core.NewDashboardAssetEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewDashboardAssetEntity(client, entopts)
	}
	core.NewDashboardUserEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewDashboardUserEntity(client, entopts)
	}
	core.NewDatasetEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewDatasetEntity(client, entopts)
	}
	core.NewEventEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewEventEntity(client, entopts)
	}
	core.NewGroupEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewGroupEntity(client, entopts)
	}
	core.NewIndicatorEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewIndicatorEntity(client, entopts)
	}
	core.NewIndicatorTypeEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewIndicatorTypeEntity(client, entopts)
	}
	core.NewPermissionEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewPermissionEntity(client, entopts)
	}
	core.NewPriorityEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewPriorityEntity(client, entopts)
	}
	core.NewPriorityIntelligenceEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewPriorityIntelligenceEntity(client, entopts)
	}
	core.NewPriorityIntelligenceRequirementEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewPriorityIntelligenceRequirementEntity(client, entopts)
	}
	core.NewPriorityIntelligenceRequirementsPirEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewPriorityIntelligenceRequirementsPirEntity(client, entopts)
	}
	core.NewPublicCredentialMonitorEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewPublicCredentialMonitorEntity(client, entopts)
	}
	core.NewRequestEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewRequestEntity(client, entopts)
	}
	core.NewRequestForInformationRfiEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewRequestForInformationRfiEntity(client, entopts)
	}
	core.NewRequestsDashboardEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewRequestsDashboardEntity(client, entopts)
	}
	core.NewRfiEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewRfiEntity(client, entopts)
	}
	core.NewRfiMessageEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewRfiMessageEntity(client, entopts)
	}
	core.NewRuleEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewRuleEntity(client, entopts)
	}
	core.NewScanEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewScanEntity(client, entopts)
	}
	core.NewTagEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewTagEntity(client, entopts)
	}
	core.NewTagCategoryEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewTagCategoryEntity(client, entopts)
	}
	core.NewTargetIndustryEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewTargetIndustryEntity(client, entopts)
	}
	core.NewThreatSignalEntityFunc = func(client *core.CloudflareCloudforceOneSDK, entopts map[string]any) core.CloudflareCloudforceOneEntity {
		return entity.NewThreatSignalEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewCloudflareCloudforceOneSDK = core.NewCloudflareCloudforceOneSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewCloudflareCloudforceOneSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *CloudflareCloudforceOneSDK  { return NewCloudflareCloudforceOneSDK(nil) }
func Test() *CloudflareCloudforceOneSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
