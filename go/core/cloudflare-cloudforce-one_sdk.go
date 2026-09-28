package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/cloudflare-cloudforce-one-sdk/go/utility/struct"
)

type CloudflareCloudforceOneSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewCloudflareCloudforceOneSDK(options map[string]any) *CloudflareCloudforceOneSDK {
	sdk := &CloudflareCloudforceOneSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *CloudflareCloudforceOneSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *CloudflareCloudforceOneSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *CloudflareCloudforceOneSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *CloudflareCloudforceOneSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *CloudflareCloudforceOneSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *CloudflareCloudforceOneSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *CloudflareCloudforceOneSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("CloudflareCloudforceOneSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *CloudflareCloudforceOneSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

func (sdk *CloudflareCloudforceOneSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("CloudflareCloudforceOneSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// Attacker returns a Attacker entity bound to this client.
// Idiomatic usage: client.Attacker(nil).List(nil, nil) or
// client.Attacker(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) Attacker(data map[string]any) CloudflareCloudforceOneEntity {
	return NewAttackerEntityFunc(sdk, data)
}


// BinDb returns a BinDb entity bound to this client.
// Idiomatic usage: client.BinDb(nil).List(nil, nil) or
// client.BinDb(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) BinDb(data map[string]any) CloudflareCloudforceOneEntity {
	return NewBinDbEntityFunc(sdk, data)
}


// BrandProtection returns a BrandProtection entity bound to this client.
// Idiomatic usage: client.BrandProtection(nil).List(nil, nil) or
// client.BrandProtection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) BrandProtection(data map[string]any) CloudflareCloudforceOneEntity {
	return NewBrandProtectionEntityFunc(sdk, data)
}


// Category returns a Category entity bound to this client.
// Idiomatic usage: client.Category(nil).List(nil, nil) or
// client.Category(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) Category(data map[string]any) CloudflareCloudforceOneEntity {
	return NewCategoryEntityFunc(sdk, data)
}


// CloudforceOneAccountExemption returns a CloudforceOneAccountExemption entity bound to this client.
// Idiomatic usage: client.CloudforceOneAccountExemption(nil).List(nil, nil) or
// client.CloudforceOneAccountExemption(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) CloudforceOneAccountExemption(data map[string]any) CloudflareCloudforceOneEntity {
	return NewCloudforceOneAccountExemptionEntityFunc(sdk, data)
}


// CloudforceOneDeleteAll returns a CloudforceOneDeleteAll entity bound to this client.
// Idiomatic usage: client.CloudforceOneDeleteAll(nil).List(nil, nil) or
// client.CloudforceOneDeleteAll(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) CloudforceOneDeleteAll(data map[string]any) CloudflareCloudforceOneEntity {
	return NewCloudforceOneDeleteAllEntityFunc(sdk, data)
}


// CloudforceOneEditApproval returns a CloudforceOneEditApproval entity bound to this client.
// Idiomatic usage: client.CloudforceOneEditApproval(nil).List(nil, nil) or
// client.CloudforceOneEditApproval(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) CloudforceOneEditApproval(data map[string]any) CloudflareCloudforceOneEntity {
	return NewCloudforceOneEditApprovalEntityFunc(sdk, data)
}


// CloudforceOneEmailRuleValidation returns a CloudforceOneEmailRuleValidation entity bound to this client.
// Idiomatic usage: client.CloudforceOneEmailRuleValidation(nil).List(nil, nil) or
// client.CloudforceOneEmailRuleValidation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) CloudforceOneEmailRuleValidation(data map[string]any) CloudflareCloudforceOneEntity {
	return NewCloudforceOneEmailRuleValidationEntityFunc(sdk, data)
}


// CloudforceOneEmailRulesList returns a CloudforceOneEmailRulesList entity bound to this client.
// Idiomatic usage: client.CloudforceOneEmailRulesList(nil).List(nil, nil) or
// client.CloudforceOneEmailRulesList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) CloudforceOneEmailRulesList(data map[string]any) CloudflareCloudforceOneEntity {
	return NewCloudforceOneEmailRulesListEntityFunc(sdk, data)
}


// CloudforceOneRequestsApiResponseCommon returns a CloudforceOneRequestsApiResponseCommon entity bound to this client.
// Idiomatic usage: client.CloudforceOneRequestsApiResponseCommon(nil).List(nil, nil) or
// client.CloudforceOneRequestsApiResponseCommon(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) CloudforceOneRequestsApiResponseCommon(data map[string]any) CloudflareCloudforceOneEntity {
	return NewCloudforceOneRequestsApiResponseCommonEntityFunc(sdk, data)
}


// CloudforceOneRule returns a CloudforceOneRule entity bound to this client.
// Idiomatic usage: client.CloudforceOneRule(nil).List(nil, nil) or
// client.CloudforceOneRule(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) CloudforceOneRule(data map[string]any) CloudflareCloudforceOneEntity {
	return NewCloudforceOneRuleEntityFunc(sdk, data)
}


// CloudforceOneRuleApprovalDetail returns a CloudforceOneRuleApprovalDetail entity bound to this client.
// Idiomatic usage: client.CloudforceOneRuleApprovalDetail(nil).List(nil, nil) or
// client.CloudforceOneRuleApprovalDetail(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) CloudforceOneRuleApprovalDetail(data map[string]any) CloudflareCloudforceOneEntity {
	return NewCloudforceOneRuleApprovalDetailEntityFunc(sdk, data)
}


// CloudforceOneRuleApprovalsList returns a CloudforceOneRuleApprovalsList entity bound to this client.
// Idiomatic usage: client.CloudforceOneRuleApprovalsList(nil).List(nil, nil) or
// client.CloudforceOneRuleApprovalsList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) CloudforceOneRuleApprovalsList(data map[string]any) CloudflareCloudforceOneEntity {
	return NewCloudforceOneRuleApprovalsListEntityFunc(sdk, data)
}


// CloudforceOneRulePreview returns a CloudforceOneRulePreview entity bound to this client.
// Idiomatic usage: client.CloudforceOneRulePreview(nil).List(nil, nil) or
// client.CloudforceOneRulePreview(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) CloudforceOneRulePreview(data map[string]any) CloudflareCloudforceOneEntity {
	return NewCloudforceOneRulePreviewEntityFunc(sdk, data)
}


// CloudforceOneRulesPreviewList returns a CloudforceOneRulesPreviewList entity bound to this client.
// Idiomatic usage: client.CloudforceOneRulesPreviewList(nil).List(nil, nil) or
// client.CloudforceOneRulesPreviewList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) CloudforceOneRulesPreviewList(data map[string]any) CloudflareCloudforceOneEntity {
	return NewCloudforceOneRulesPreviewListEntityFunc(sdk, data)
}


// CloudforceOneRulesSearch returns a CloudforceOneRulesSearch entity bound to this client.
// Idiomatic usage: client.CloudforceOneRulesSearch(nil).List(nil, nil) or
// client.CloudforceOneRulesSearch(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) CloudforceOneRulesSearch(data map[string]any) CloudflareCloudforceOneEntity {
	return NewCloudforceOneRulesSearchEntityFunc(sdk, data)
}


// CloudforceOneStat returns a CloudforceOneStat entity bound to this client.
// Idiomatic usage: client.CloudforceOneStat(nil).List(nil, nil) or
// client.CloudforceOneStat(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) CloudforceOneStat(data map[string]any) CloudflareCloudforceOneEntity {
	return NewCloudforceOneStatEntityFunc(sdk, data)
}


// CloudforceOneSuccess returns a CloudforceOneSuccess entity bound to this client.
// Idiomatic usage: client.CloudforceOneSuccess(nil).List(nil, nil) or
// client.CloudforceOneSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) CloudforceOneSuccess(data map[string]any) CloudflareCloudforceOneEntity {
	return NewCloudforceOneSuccessEntityFunc(sdk, data)
}


// CloudforceOneTreeNode returns a CloudforceOneTreeNode entity bound to this client.
// Idiomatic usage: client.CloudforceOneTreeNode(nil).List(nil, nil) or
// client.CloudforceOneTreeNode(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) CloudforceOneTreeNode(data map[string]any) CloudflareCloudforceOneEntity {
	return NewCloudforceOneTreeNodeEntityFunc(sdk, data)
}


// CloudforceOneValidation returns a CloudforceOneValidation entity bound to this client.
// Idiomatic usage: client.CloudforceOneValidation(nil).List(nil, nil) or
// client.CloudforceOneValidation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) CloudforceOneValidation(data map[string]any) CloudflareCloudforceOneEntity {
	return NewCloudforceOneValidationEntityFunc(sdk, data)
}


// Collection returns a Collection entity bound to this client.
// Idiomatic usage: client.Collection(nil).List(nil, nil) or
// client.Collection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) Collection(data map[string]any) CloudflareCloudforceOneEntity {
	return NewCollectionEntityFunc(sdk, data)
}


// CollectionsItem returns a CollectionsItem entity bound to this client.
// Idiomatic usage: client.CollectionsItem(nil).List(nil, nil) or
// client.CollectionsItem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) CollectionsItem(data map[string]any) CloudflareCloudforceOneEntity {
	return NewCollectionsItemEntityFunc(sdk, data)
}


// Country returns a Country entity bound to this client.
// Idiomatic usage: client.Country(nil).List(nil, nil) or
// client.Country(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) Country(data map[string]any) CloudflareCloudforceOneEntity {
	return NewCountryEntityFunc(sdk, data)
}


// DashboardAsset returns a DashboardAsset entity bound to this client.
// Idiomatic usage: client.DashboardAsset(nil).List(nil, nil) or
// client.DashboardAsset(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) DashboardAsset(data map[string]any) CloudflareCloudforceOneEntity {
	return NewDashboardAssetEntityFunc(sdk, data)
}


// DashboardUser returns a DashboardUser entity bound to this client.
// Idiomatic usage: client.DashboardUser(nil).List(nil, nil) or
// client.DashboardUser(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) DashboardUser(data map[string]any) CloudflareCloudforceOneEntity {
	return NewDashboardUserEntityFunc(sdk, data)
}


// Dataset returns a Dataset entity bound to this client.
// Idiomatic usage: client.Dataset(nil).List(nil, nil) or
// client.Dataset(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) Dataset(data map[string]any) CloudflareCloudforceOneEntity {
	return NewDatasetEntityFunc(sdk, data)
}


// Event returns a Event entity bound to this client.
// Idiomatic usage: client.Event(nil).List(nil, nil) or
// client.Event(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) Event(data map[string]any) CloudflareCloudforceOneEntity {
	return NewEventEntityFunc(sdk, data)
}


// Group returns a Group entity bound to this client.
// Idiomatic usage: client.Group(nil).List(nil, nil) or
// client.Group(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) Group(data map[string]any) CloudflareCloudforceOneEntity {
	return NewGroupEntityFunc(sdk, data)
}


// Indicator returns a Indicator entity bound to this client.
// Idiomatic usage: client.Indicator(nil).List(nil, nil) or
// client.Indicator(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) Indicator(data map[string]any) CloudflareCloudforceOneEntity {
	return NewIndicatorEntityFunc(sdk, data)
}


// IndicatorType returns a IndicatorType entity bound to this client.
// Idiomatic usage: client.IndicatorType(nil).List(nil, nil) or
// client.IndicatorType(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) IndicatorType(data map[string]any) CloudflareCloudforceOneEntity {
	return NewIndicatorTypeEntityFunc(sdk, data)
}


// Permission returns a Permission entity bound to this client.
// Idiomatic usage: client.Permission(nil).List(nil, nil) or
// client.Permission(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) Permission(data map[string]any) CloudflareCloudforceOneEntity {
	return NewPermissionEntityFunc(sdk, data)
}


// Priority returns a Priority entity bound to this client.
// Idiomatic usage: client.Priority(nil).List(nil, nil) or
// client.Priority(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) Priority(data map[string]any) CloudflareCloudforceOneEntity {
	return NewPriorityEntityFunc(sdk, data)
}


// PriorityIntelligence returns a PriorityIntelligence entity bound to this client.
// Idiomatic usage: client.PriorityIntelligence(nil).List(nil, nil) or
// client.PriorityIntelligence(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) PriorityIntelligence(data map[string]any) CloudflareCloudforceOneEntity {
	return NewPriorityIntelligenceEntityFunc(sdk, data)
}


// PriorityIntelligenceRequirement returns a PriorityIntelligenceRequirement entity bound to this client.
// Idiomatic usage: client.PriorityIntelligenceRequirement(nil).List(nil, nil) or
// client.PriorityIntelligenceRequirement(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) PriorityIntelligenceRequirement(data map[string]any) CloudflareCloudforceOneEntity {
	return NewPriorityIntelligenceRequirementEntityFunc(sdk, data)
}


// PriorityIntelligenceRequirementsPir returns a PriorityIntelligenceRequirementsPir entity bound to this client.
// Idiomatic usage: client.PriorityIntelligenceRequirementsPir(nil).List(nil, nil) or
// client.PriorityIntelligenceRequirementsPir(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) PriorityIntelligenceRequirementsPir(data map[string]any) CloudflareCloudforceOneEntity {
	return NewPriorityIntelligenceRequirementsPirEntityFunc(sdk, data)
}


// PublicCredentialMonitor returns a PublicCredentialMonitor entity bound to this client.
// Idiomatic usage: client.PublicCredentialMonitor(nil).List(nil, nil) or
// client.PublicCredentialMonitor(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) PublicCredentialMonitor(data map[string]any) CloudflareCloudforceOneEntity {
	return NewPublicCredentialMonitorEntityFunc(sdk, data)
}


// Request returns a Request entity bound to this client.
// Idiomatic usage: client.Request(nil).List(nil, nil) or
// client.Request(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) Request(data map[string]any) CloudflareCloudforceOneEntity {
	return NewRequestEntityFunc(sdk, data)
}


// RequestForInformationRfi returns a RequestForInformationRfi entity bound to this client.
// Idiomatic usage: client.RequestForInformationRfi(nil).List(nil, nil) or
// client.RequestForInformationRfi(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) RequestForInformationRfi(data map[string]any) CloudflareCloudforceOneEntity {
	return NewRequestForInformationRfiEntityFunc(sdk, data)
}


// RequestsDashboard returns a RequestsDashboard entity bound to this client.
// Idiomatic usage: client.RequestsDashboard(nil).List(nil, nil) or
// client.RequestsDashboard(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) RequestsDashboard(data map[string]any) CloudflareCloudforceOneEntity {
	return NewRequestsDashboardEntityFunc(sdk, data)
}


// Rfi returns a Rfi entity bound to this client.
// Idiomatic usage: client.Rfi(nil).List(nil, nil) or
// client.Rfi(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) Rfi(data map[string]any) CloudflareCloudforceOneEntity {
	return NewRfiEntityFunc(sdk, data)
}


// RfiMessage returns a RfiMessage entity bound to this client.
// Idiomatic usage: client.RfiMessage(nil).List(nil, nil) or
// client.RfiMessage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) RfiMessage(data map[string]any) CloudflareCloudforceOneEntity {
	return NewRfiMessageEntityFunc(sdk, data)
}


// Rule returns a Rule entity bound to this client.
// Idiomatic usage: client.Rule(nil).List(nil, nil) or
// client.Rule(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) Rule(data map[string]any) CloudflareCloudforceOneEntity {
	return NewRuleEntityFunc(sdk, data)
}


// Scan returns a Scan entity bound to this client.
// Idiomatic usage: client.Scan(nil).List(nil, nil) or
// client.Scan(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) Scan(data map[string]any) CloudflareCloudforceOneEntity {
	return NewScanEntityFunc(sdk, data)
}


// Tag returns a Tag entity bound to this client.
// Idiomatic usage: client.Tag(nil).List(nil, nil) or
// client.Tag(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) Tag(data map[string]any) CloudflareCloudforceOneEntity {
	return NewTagEntityFunc(sdk, data)
}


// TagCategory returns a TagCategory entity bound to this client.
// Idiomatic usage: client.TagCategory(nil).List(nil, nil) or
// client.TagCategory(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) TagCategory(data map[string]any) CloudflareCloudforceOneEntity {
	return NewTagCategoryEntityFunc(sdk, data)
}


// TargetIndustry returns a TargetIndustry entity bound to this client.
// Idiomatic usage: client.TargetIndustry(nil).List(nil, nil) or
// client.TargetIndustry(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) TargetIndustry(data map[string]any) CloudflareCloudforceOneEntity {
	return NewTargetIndustryEntityFunc(sdk, data)
}


// ThreatSignal returns a ThreatSignal entity bound to this client.
// Idiomatic usage: client.ThreatSignal(nil).List(nil, nil) or
// client.ThreatSignal(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareCloudforceOneSDK) ThreatSignal(data map[string]any) CloudflareCloudforceOneEntity {
	return NewThreatSignalEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *CloudflareCloudforceOneSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewCloudflareCloudforceOneSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
