# CloudflareCloudforceOne SDK

from cloudflarecloudforceone_sdk.utility.voxgig_struct import voxgig_struct as vs
from cloudflarecloudforceone_sdk.core.utility_type import CloudflareCloudforceOneUtility
from cloudflarecloudforceone_sdk.core.spec import CloudflareCloudforceOneSpec
from cloudflarecloudforceone_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from cloudflarecloudforceone_sdk.utility import register

# Load features
from cloudflarecloudforceone_sdk.feature.base_feature import CloudflareCloudforceOneBaseFeature
from cloudflarecloudforceone_sdk.features import _has_feature, _make_feature


class CloudflareCloudforceOneSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = CloudflareCloudforceOneUtility()
        self._utility = utility

        from cloudflarecloudforceone_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return CloudflareCloudforceOneUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = CloudflareCloudforceOneSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "CloudflareCloudforceOneSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("CloudflareCloudforceOneSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def Attacker(self, data=None) -> "AttackerEntity":
        """Entity factory: client.Attacker().list() / client.Attacker().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.attacker_entity import AttackerEntity
        return AttackerEntity(self, data)


    def BinDb(self, data=None) -> "BinDbEntity":
        """Entity factory: client.BinDb().list() / client.BinDb().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.bin_db_entity import BinDbEntity
        return BinDbEntity(self, data)


    def BrandProtection(self, data=None) -> "BrandProtectionEntity":
        """Entity factory: client.BrandProtection().list() / client.BrandProtection().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.brand_protection_entity import BrandProtectionEntity
        return BrandProtectionEntity(self, data)


    def Category(self, data=None) -> "CategoryEntity":
        """Entity factory: client.Category().list() / client.Category().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.category_entity import CategoryEntity
        return CategoryEntity(self, data)


    def CloudforceOneAccountExemption(self, data=None) -> "CloudforceOneAccountExemptionEntity":
        """Entity factory: client.CloudforceOneAccountExemption().list() / client.CloudforceOneAccountExemption().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.cloudforce_one_account_exemption_entity import CloudforceOneAccountExemptionEntity
        return CloudforceOneAccountExemptionEntity(self, data)


    def CloudforceOneDeleteAll(self, data=None) -> "CloudforceOneDeleteAllEntity":
        """Entity factory: client.CloudforceOneDeleteAll().list() / client.CloudforceOneDeleteAll().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.cloudforce_one_delete_all_entity import CloudforceOneDeleteAllEntity
        return CloudforceOneDeleteAllEntity(self, data)


    def CloudforceOneEditApproval(self, data=None) -> "CloudforceOneEditApprovalEntity":
        """Entity factory: client.CloudforceOneEditApproval().list() / client.CloudforceOneEditApproval().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.cloudforce_one_edit_approval_entity import CloudforceOneEditApprovalEntity
        return CloudforceOneEditApprovalEntity(self, data)


    def CloudforceOneEmailRuleValidation(self, data=None) -> "CloudforceOneEmailRuleValidationEntity":
        """Entity factory: client.CloudforceOneEmailRuleValidation().list() / client.CloudforceOneEmailRuleValidation().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.cloudforce_one_email_rule_validation_entity import CloudforceOneEmailRuleValidationEntity
        return CloudforceOneEmailRuleValidationEntity(self, data)


    def CloudforceOneEmailRulesList(self, data=None) -> "CloudforceOneEmailRulesListEntity":
        """Entity factory: client.CloudforceOneEmailRulesList().list() / client.CloudforceOneEmailRulesList().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.cloudforce_one_email_rules_list_entity import CloudforceOneEmailRulesListEntity
        return CloudforceOneEmailRulesListEntity(self, data)


    def CloudforceOneRequestsApiResponseCommon(self, data=None) -> "CloudforceOneRequestsApiResponseCommonEntity":
        """Entity factory: client.CloudforceOneRequestsApiResponseCommon().list() / client.CloudforceOneRequestsApiResponseCommon().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.cloudforce_one_requests_api_response_common_entity import CloudforceOneRequestsApiResponseCommonEntity
        return CloudforceOneRequestsApiResponseCommonEntity(self, data)


    def CloudforceOneRule(self, data=None) -> "CloudforceOneRuleEntity":
        """Entity factory: client.CloudforceOneRule().list() / client.CloudforceOneRule().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.cloudforce_one_rule_entity import CloudforceOneRuleEntity
        return CloudforceOneRuleEntity(self, data)


    def CloudforceOneRuleApprovalDetail(self, data=None) -> "CloudforceOneRuleApprovalDetailEntity":
        """Entity factory: client.CloudforceOneRuleApprovalDetail().list() / client.CloudforceOneRuleApprovalDetail().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.cloudforce_one_rule_approval_detail_entity import CloudforceOneRuleApprovalDetailEntity
        return CloudforceOneRuleApprovalDetailEntity(self, data)


    def CloudforceOneRuleApprovalsList(self, data=None) -> "CloudforceOneRuleApprovalsListEntity":
        """Entity factory: client.CloudforceOneRuleApprovalsList().list() / client.CloudforceOneRuleApprovalsList().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.cloudforce_one_rule_approvals_list_entity import CloudforceOneRuleApprovalsListEntity
        return CloudforceOneRuleApprovalsListEntity(self, data)


    def CloudforceOneRulePreview(self, data=None) -> "CloudforceOneRulePreviewEntity":
        """Entity factory: client.CloudforceOneRulePreview().list() / client.CloudforceOneRulePreview().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.cloudforce_one_rule_preview_entity import CloudforceOneRulePreviewEntity
        return CloudforceOneRulePreviewEntity(self, data)


    def CloudforceOneRulesPreviewList(self, data=None) -> "CloudforceOneRulesPreviewListEntity":
        """Entity factory: client.CloudforceOneRulesPreviewList().list() / client.CloudforceOneRulesPreviewList().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.cloudforce_one_rules_preview_list_entity import CloudforceOneRulesPreviewListEntity
        return CloudforceOneRulesPreviewListEntity(self, data)


    def CloudforceOneRulesSearch(self, data=None) -> "CloudforceOneRulesSearchEntity":
        """Entity factory: client.CloudforceOneRulesSearch().list() / client.CloudforceOneRulesSearch().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.cloudforce_one_rules_search_entity import CloudforceOneRulesSearchEntity
        return CloudforceOneRulesSearchEntity(self, data)


    def CloudforceOneStat(self, data=None) -> "CloudforceOneStatEntity":
        """Entity factory: client.CloudforceOneStat().list() / client.CloudforceOneStat().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.cloudforce_one_stat_entity import CloudforceOneStatEntity
        return CloudforceOneStatEntity(self, data)


    def CloudforceOneSuccess(self, data=None) -> "CloudforceOneSuccessEntity":
        """Entity factory: client.CloudforceOneSuccess().list() / client.CloudforceOneSuccess().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.cloudforce_one_success_entity import CloudforceOneSuccessEntity
        return CloudforceOneSuccessEntity(self, data)


    def CloudforceOneTreeNode(self, data=None) -> "CloudforceOneTreeNodeEntity":
        """Entity factory: client.CloudforceOneTreeNode().list() / client.CloudforceOneTreeNode().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.cloudforce_one_tree_node_entity import CloudforceOneTreeNodeEntity
        return CloudforceOneTreeNodeEntity(self, data)


    def CloudforceOneValidation(self, data=None) -> "CloudforceOneValidationEntity":
        """Entity factory: client.CloudforceOneValidation().list() / client.CloudforceOneValidation().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.cloudforce_one_validation_entity import CloudforceOneValidationEntity
        return CloudforceOneValidationEntity(self, data)


    def Collection(self, data=None) -> "CollectionEntity":
        """Entity factory: client.Collection().list() / client.Collection().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.collection_entity import CollectionEntity
        return CollectionEntity(self, data)


    def CollectionsItem(self, data=None) -> "CollectionsItemEntity":
        """Entity factory: client.CollectionsItem().list() / client.CollectionsItem().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.collections_item_entity import CollectionsItemEntity
        return CollectionsItemEntity(self, data)


    def Country(self, data=None) -> "CountryEntity":
        """Entity factory: client.Country().list() / client.Country().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.country_entity import CountryEntity
        return CountryEntity(self, data)


    def DashboardAsset(self, data=None) -> "DashboardAssetEntity":
        """Entity factory: client.DashboardAsset().list() / client.DashboardAsset().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.dashboard_asset_entity import DashboardAssetEntity
        return DashboardAssetEntity(self, data)


    def DashboardUser(self, data=None) -> "DashboardUserEntity":
        """Entity factory: client.DashboardUser().list() / client.DashboardUser().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.dashboard_user_entity import DashboardUserEntity
        return DashboardUserEntity(self, data)


    def Dataset(self, data=None) -> "DatasetEntity":
        """Entity factory: client.Dataset().list() / client.Dataset().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.dataset_entity import DatasetEntity
        return DatasetEntity(self, data)


    def Event(self, data=None) -> "EventEntity":
        """Entity factory: client.Event().list() / client.Event().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.event_entity import EventEntity
        return EventEntity(self, data)


    def Group(self, data=None) -> "GroupEntity":
        """Entity factory: client.Group().list() / client.Group().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.group_entity import GroupEntity
        return GroupEntity(self, data)


    def Indicator(self, data=None) -> "IndicatorEntity":
        """Entity factory: client.Indicator().list() / client.Indicator().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.indicator_entity import IndicatorEntity
        return IndicatorEntity(self, data)


    def IndicatorType(self, data=None) -> "IndicatorTypeEntity":
        """Entity factory: client.IndicatorType().list() / client.IndicatorType().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.indicator_type_entity import IndicatorTypeEntity
        return IndicatorTypeEntity(self, data)


    def Permission(self, data=None) -> "PermissionEntity":
        """Entity factory: client.Permission().list() / client.Permission().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.permission_entity import PermissionEntity
        return PermissionEntity(self, data)


    def Priority(self, data=None) -> "PriorityEntity":
        """Entity factory: client.Priority().list() / client.Priority().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.priority_entity import PriorityEntity
        return PriorityEntity(self, data)


    def PriorityIntelligence(self, data=None) -> "PriorityIntelligenceEntity":
        """Entity factory: client.PriorityIntelligence().list() / client.PriorityIntelligence().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.priority_intelligence_entity import PriorityIntelligenceEntity
        return PriorityIntelligenceEntity(self, data)


    def PriorityIntelligenceRequirement(self, data=None) -> "PriorityIntelligenceRequirementEntity":
        """Entity factory: client.PriorityIntelligenceRequirement().list() / client.PriorityIntelligenceRequirement().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.priority_intelligence_requirement_entity import PriorityIntelligenceRequirementEntity
        return PriorityIntelligenceRequirementEntity(self, data)


    def PriorityIntelligenceRequirementsPir(self, data=None) -> "PriorityIntelligenceRequirementsPirEntity":
        """Entity factory: client.PriorityIntelligenceRequirementsPir().list() / client.PriorityIntelligenceRequirementsPir().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.priority_intelligence_requirements__pir_entity import PriorityIntelligenceRequirementsPirEntity
        return PriorityIntelligenceRequirementsPirEntity(self, data)


    def PublicCredentialMonitor(self, data=None) -> "PublicCredentialMonitorEntity":
        """Entity factory: client.PublicCredentialMonitor().list() / client.PublicCredentialMonitor().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.public_credential_monitor_entity import PublicCredentialMonitorEntity
        return PublicCredentialMonitorEntity(self, data)


    def Request(self, data=None) -> "RequestEntity":
        """Entity factory: client.Request().list() / client.Request().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.request_entity import RequestEntity
        return RequestEntity(self, data)


    def RequestForInformationRfi(self, data=None) -> "RequestForInformationRfiEntity":
        """Entity factory: client.RequestForInformationRfi().list() / client.RequestForInformationRfi().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.request_for_information__rfi_entity import RequestForInformationRfiEntity
        return RequestForInformationRfiEntity(self, data)


    def RequestsDashboard(self, data=None) -> "RequestsDashboardEntity":
        """Entity factory: client.RequestsDashboard().list() / client.RequestsDashboard().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.requests_dashboard_entity import RequestsDashboardEntity
        return RequestsDashboardEntity(self, data)


    def Rfi(self, data=None) -> "RfiEntity":
        """Entity factory: client.Rfi().list() / client.Rfi().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.rfi_entity import RfiEntity
        return RfiEntity(self, data)


    def RfiMessage(self, data=None) -> "RfiMessageEntity":
        """Entity factory: client.RfiMessage().list() / client.RfiMessage().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.rfi_message_entity import RfiMessageEntity
        return RfiMessageEntity(self, data)


    def Rule(self, data=None) -> "RuleEntity":
        """Entity factory: client.Rule().list() / client.Rule().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.rule_entity import RuleEntity
        return RuleEntity(self, data)


    def Scan(self, data=None) -> "ScanEntity":
        """Entity factory: client.Scan().list() / client.Scan().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.scan_entity import ScanEntity
        return ScanEntity(self, data)


    def Tag(self, data=None) -> "TagEntity":
        """Entity factory: client.Tag().list() / client.Tag().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.tag_entity import TagEntity
        return TagEntity(self, data)


    def TagCategory(self, data=None) -> "TagCategoryEntity":
        """Entity factory: client.TagCategory().list() / client.TagCategory().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.tag_category_entity import TagCategoryEntity
        return TagCategoryEntity(self, data)


    def TargetIndustry(self, data=None) -> "TargetIndustryEntity":
        """Entity factory: client.TargetIndustry().list() / client.TargetIndustry().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.target_industry_entity import TargetIndustryEntity
        return TargetIndustryEntity(self, data)


    def ThreatSignal(self, data=None) -> "ThreatSignalEntity":
        """Entity factory: client.ThreatSignal().list() / client.ThreatSignal().load({"id": ...})."""
        from cloudflarecloudforceone_sdk.entity.threat_signal_entity import ThreatSignalEntity
        return ThreatSignalEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "CloudflareCloudforceOneSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from cloudflarecloudforceone_sdk.entity.attacker_entity import AttackerEntity
    from cloudflarecloudforceone_sdk.entity.bin_db_entity import BinDbEntity
    from cloudflarecloudforceone_sdk.entity.brand_protection_entity import BrandProtectionEntity
    from cloudflarecloudforceone_sdk.entity.category_entity import CategoryEntity
    from cloudflarecloudforceone_sdk.entity.cloudforce_one_account_exemption_entity import CloudforceOneAccountExemptionEntity
    from cloudflarecloudforceone_sdk.entity.cloudforce_one_delete_all_entity import CloudforceOneDeleteAllEntity
    from cloudflarecloudforceone_sdk.entity.cloudforce_one_edit_approval_entity import CloudforceOneEditApprovalEntity
    from cloudflarecloudforceone_sdk.entity.cloudforce_one_email_rule_validation_entity import CloudforceOneEmailRuleValidationEntity
    from cloudflarecloudforceone_sdk.entity.cloudforce_one_email_rules_list_entity import CloudforceOneEmailRulesListEntity
    from cloudflarecloudforceone_sdk.entity.cloudforce_one_requests_api_response_common_entity import CloudforceOneRequestsApiResponseCommonEntity
    from cloudflarecloudforceone_sdk.entity.cloudforce_one_rule_entity import CloudforceOneRuleEntity
    from cloudflarecloudforceone_sdk.entity.cloudforce_one_rule_approval_detail_entity import CloudforceOneRuleApprovalDetailEntity
    from cloudflarecloudforceone_sdk.entity.cloudforce_one_rule_approvals_list_entity import CloudforceOneRuleApprovalsListEntity
    from cloudflarecloudforceone_sdk.entity.cloudforce_one_rule_preview_entity import CloudforceOneRulePreviewEntity
    from cloudflarecloudforceone_sdk.entity.cloudforce_one_rules_preview_list_entity import CloudforceOneRulesPreviewListEntity
    from cloudflarecloudforceone_sdk.entity.cloudforce_one_rules_search_entity import CloudforceOneRulesSearchEntity
    from cloudflarecloudforceone_sdk.entity.cloudforce_one_stat_entity import CloudforceOneStatEntity
    from cloudflarecloudforceone_sdk.entity.cloudforce_one_success_entity import CloudforceOneSuccessEntity
    from cloudflarecloudforceone_sdk.entity.cloudforce_one_tree_node_entity import CloudforceOneTreeNodeEntity
    from cloudflarecloudforceone_sdk.entity.cloudforce_one_validation_entity import CloudforceOneValidationEntity
    from cloudflarecloudforceone_sdk.entity.collection_entity import CollectionEntity
    from cloudflarecloudforceone_sdk.entity.collections_item_entity import CollectionsItemEntity
    from cloudflarecloudforceone_sdk.entity.country_entity import CountryEntity
    from cloudflarecloudforceone_sdk.entity.dashboard_asset_entity import DashboardAssetEntity
    from cloudflarecloudforceone_sdk.entity.dashboard_user_entity import DashboardUserEntity
    from cloudflarecloudforceone_sdk.entity.dataset_entity import DatasetEntity
    from cloudflarecloudforceone_sdk.entity.event_entity import EventEntity
    from cloudflarecloudforceone_sdk.entity.group_entity import GroupEntity
    from cloudflarecloudforceone_sdk.entity.indicator_entity import IndicatorEntity
    from cloudflarecloudforceone_sdk.entity.indicator_type_entity import IndicatorTypeEntity
    from cloudflarecloudforceone_sdk.entity.permission_entity import PermissionEntity
    from cloudflarecloudforceone_sdk.entity.priority_entity import PriorityEntity
    from cloudflarecloudforceone_sdk.entity.priority_intelligence_entity import PriorityIntelligenceEntity
    from cloudflarecloudforceone_sdk.entity.priority_intelligence_requirement_entity import PriorityIntelligenceRequirementEntity
    from cloudflarecloudforceone_sdk.entity.priority_intelligence_requirements__pir_entity import PriorityIntelligenceRequirementsPirEntity
    from cloudflarecloudforceone_sdk.entity.public_credential_monitor_entity import PublicCredentialMonitorEntity
    from cloudflarecloudforceone_sdk.entity.request_entity import RequestEntity
    from cloudflarecloudforceone_sdk.entity.request_for_information__rfi_entity import RequestForInformationRfiEntity
    from cloudflarecloudforceone_sdk.entity.requests_dashboard_entity import RequestsDashboardEntity
    from cloudflarecloudforceone_sdk.entity.rfi_entity import RfiEntity
    from cloudflarecloudforceone_sdk.entity.rfi_message_entity import RfiMessageEntity
    from cloudflarecloudforceone_sdk.entity.rule_entity import RuleEntity
    from cloudflarecloudforceone_sdk.entity.scan_entity import ScanEntity
    from cloudflarecloudforceone_sdk.entity.tag_entity import TagEntity
    from cloudflarecloudforceone_sdk.entity.tag_category_entity import TagCategoryEntity
    from cloudflarecloudforceone_sdk.entity.target_industry_entity import TargetIndustryEntity
    from cloudflarecloudforceone_sdk.entity.threat_signal_entity import ThreatSignalEntity
