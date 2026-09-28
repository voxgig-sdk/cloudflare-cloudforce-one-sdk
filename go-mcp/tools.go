package main

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/modelcontextprotocol/go-sdk/mcp"
	sdk "github.com/voxgig-sdk/cloudflare-cloudforce-one-sdk/go"
)

// Args is the common argument shape for both tools. `entity` selects
// the SDK entity to operate on; `query` is the optional reqmatch /
// reqdata map passed through to the SDK. For load, `query` should be
// `{"id": <value>}`. For list, omit `query` or pass an empty map.
type Args struct {
	Entity string         `json:"entity" jsonschema:"attacker | bin_db | brand_protection | category | cloudforce_one_account_exemption | cloudforce_one_delete_all | cloudforce_one_edit_approval | cloudforce_one_email_rule_validation | cloudforce_one_email_rules_list | cloudforce_one_requests_api_response_common | cloudforce_one_rule | cloudforce_one_rule_approval_detail | cloudforce_one_rule_approvals_list | cloudforce_one_rule_preview | cloudforce_one_rules_preview_list | cloudforce_one_rules_search | cloudforce_one_stat | cloudforce_one_success | cloudforce_one_tree_node | cloudforce_one_validation | collection | collections_item | country | dashboard_asset | dashboard_user | dataset | event | group | indicator | indicator_type | permission | priority | priority_intelligence | priority_intelligence_requirement | priority_intelligence_requirements__pir | public_credential_monitor | request | request_for_information__rfi | requests_dashboard | rfi | rfi_message | rule | scan | tag | tag_category | target_industry | threat_signal"`
	Query  map[string]any `json:"query,omitempty" jsonschema:"optional match map e.g. {\"id\":1} for load, omit for list"`
}

func registerTools(server *mcp.Server, client *sdk.CloudflareCloudforceOneSDK) {
	mcp.AddTool(server, &mcp.Tool{
		Name: "cloudflare-cloudforce-one_list",
		Description: "List records from CloudflareCloudforceOne. " +
			"Args: entity (one of the supported SDK entities), query (optional filter map). " +
			"Returns the first page of records as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "list", args)
	})

	mcp.AddTool(server, &mcp.Tool{
		Name: "cloudflare-cloudforce-one_load",
		Description: "Load a single record from CloudflareCloudforceOne. " +
			"Args: entity, query ({\"id\":N} required). Returns the record as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "load", args)
	})
}

func runOp(client *sdk.CloudflareCloudforceOneSDK, op string, args Args) (*mcp.CallToolResult, any, error) {
	ent, err := entityFor(client, args.Entity)
	if err != nil {
		return toolError(err.Error())
	}

	var result any
	switch op {
	case "list":
		result, err = ent.List(args.Query, nil)
	case "load":
		result, err = ent.Load(args.Query, nil)
	default:
		return toolError(fmt.Sprintf("unknown op %q", op))
	}
	if err != nil {
		return toolError(err.Error())
	}

	// SDK returns *Entity wrappers; unwrap each via .Data() to get a
	// plain map[string]any (or []any of maps for list) suitable for
	// JSON marshalling.
	data := extractData(result)
	body, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return toolError(fmt.Sprintf("marshal: %v", err))
	}
	return &mcp.CallToolResult{
		Content: []mcp.Content{
			&mcp.TextContent{Text: string(body)},
		},
	}, data, nil
}

// entityFor dispatches on the lowercase entity name. The generator
// emits one `case "<name>":` per entity defined in the SDK model.
func entityFor(client *sdk.CloudflareCloudforceOneSDK, name string) (sdk.CloudflareCloudforceOneEntity, error) {
	switch strings.ToLower(name) {
	case "attacker":
		return client.Attacker(nil), nil
	case "bin_db":
		return client.BinDb(nil), nil
	case "brand_protection":
		return client.BrandProtection(nil), nil
	case "category":
		return client.Category(nil), nil
	case "cloudforce_one_account_exemption":
		return client.CloudforceOneAccountExemption(nil), nil
	case "cloudforce_one_delete_all":
		return client.CloudforceOneDeleteAll(nil), nil
	case "cloudforce_one_edit_approval":
		return client.CloudforceOneEditApproval(nil), nil
	case "cloudforce_one_email_rule_validation":
		return client.CloudforceOneEmailRuleValidation(nil), nil
	case "cloudforce_one_email_rules_list":
		return client.CloudforceOneEmailRulesList(nil), nil
	case "cloudforce_one_requests_api_response_common":
		return client.CloudforceOneRequestsApiResponseCommon(nil), nil
	case "cloudforce_one_rule":
		return client.CloudforceOneRule(nil), nil
	case "cloudforce_one_rule_approval_detail":
		return client.CloudforceOneRuleApprovalDetail(nil), nil
	case "cloudforce_one_rule_approvals_list":
		return client.CloudforceOneRuleApprovalsList(nil), nil
	case "cloudforce_one_rule_preview":
		return client.CloudforceOneRulePreview(nil), nil
	case "cloudforce_one_rules_preview_list":
		return client.CloudforceOneRulesPreviewList(nil), nil
	case "cloudforce_one_rules_search":
		return client.CloudforceOneRulesSearch(nil), nil
	case "cloudforce_one_stat":
		return client.CloudforceOneStat(nil), nil
	case "cloudforce_one_success":
		return client.CloudforceOneSuccess(nil), nil
	case "cloudforce_one_tree_node":
		return client.CloudforceOneTreeNode(nil), nil
	case "cloudforce_one_validation":
		return client.CloudforceOneValidation(nil), nil
	case "collection":
		return client.Collection(nil), nil
	case "collections_item":
		return client.CollectionsItem(nil), nil
	case "country":
		return client.Country(nil), nil
	case "dashboard_asset":
		return client.DashboardAsset(nil), nil
	case "dashboard_user":
		return client.DashboardUser(nil), nil
	case "dataset":
		return client.Dataset(nil), nil
	case "event":
		return client.Event(nil), nil
	case "group":
		return client.Group(nil), nil
	case "indicator":
		return client.Indicator(nil), nil
	case "indicator_type":
		return client.IndicatorType(nil), nil
	case "permission":
		return client.Permission(nil), nil
	case "priority":
		return client.Priority(nil), nil
	case "priority_intelligence":
		return client.PriorityIntelligence(nil), nil
	case "priority_intelligence_requirement":
		return client.PriorityIntelligenceRequirement(nil), nil
	case "priority_intelligence_requirements__pir":
		return client.PriorityIntelligenceRequirementsPir(nil), nil
	case "public_credential_monitor":
		return client.PublicCredentialMonitor(nil), nil
	case "request":
		return client.Request(nil), nil
	case "request_for_information__rfi":
		return client.RequestForInformationRfi(nil), nil
	case "requests_dashboard":
		return client.RequestsDashboard(nil), nil
	case "rfi":
		return client.Rfi(nil), nil
	case "rfi_message":
		return client.RfiMessage(nil), nil
	case "rule":
		return client.Rule(nil), nil
	case "scan":
		return client.Scan(nil), nil
	case "tag":
		return client.Tag(nil), nil
	case "tag_category":
		return client.TagCategory(nil), nil
	case "target_industry":
		return client.TargetIndustry(nil), nil
	case "threat_signal":
		return client.ThreatSignal(nil), nil

	}
	return nil, fmt.Errorf("unknown entity %q", name)
}

func extractData(x any) any {
	switch v := x.(type) {
	case sdk.Entity:
		return extractData(v.Data())
	case []any:
		out := make([]any, len(v))
		for i, e := range v {
			out[i] = extractData(e)
		}
		return out
	case map[string]any:
		out := make(map[string]any, len(v))
		for k, vv := range v {
			out[k] = extractData(vv)
		}
		return out
	}
	return x
}

func toolError(msg string) (*mcp.CallToolResult, any, error) {
	return &mcp.CallToolResult{
		IsError: true,
		Content: []mcp.Content{
			&mcp.TextContent{Text: msg},
		},
	}, nil, nil
}
