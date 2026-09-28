"use strict";
// CloudflareCloudforceOne Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.CloudflareCloudforceOneSDK = exports.CloudflareCloudforceOneEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const AttackerEntity_1 = require("./entity/AttackerEntity");
const BinDbEntity_1 = require("./entity/BinDbEntity");
const BrandProtectionEntity_1 = require("./entity/BrandProtectionEntity");
const CategoryEntity_1 = require("./entity/CategoryEntity");
const CloudforceOneAccountExemptionEntity_1 = require("./entity/CloudforceOneAccountExemptionEntity");
const CloudforceOneDeleteAllEntity_1 = require("./entity/CloudforceOneDeleteAllEntity");
const CloudforceOneEditApprovalEntity_1 = require("./entity/CloudforceOneEditApprovalEntity");
const CloudforceOneEmailRuleValidationEntity_1 = require("./entity/CloudforceOneEmailRuleValidationEntity");
const CloudforceOneEmailRulesListEntity_1 = require("./entity/CloudforceOneEmailRulesListEntity");
const CloudforceOneRequestsApiResponseCommonEntity_1 = require("./entity/CloudforceOneRequestsApiResponseCommonEntity");
const CloudforceOneRuleEntity_1 = require("./entity/CloudforceOneRuleEntity");
const CloudforceOneRuleApprovalDetailEntity_1 = require("./entity/CloudforceOneRuleApprovalDetailEntity");
const CloudforceOneRuleApprovalsListEntity_1 = require("./entity/CloudforceOneRuleApprovalsListEntity");
const CloudforceOneRulePreviewEntity_1 = require("./entity/CloudforceOneRulePreviewEntity");
const CloudforceOneRulesPreviewListEntity_1 = require("./entity/CloudforceOneRulesPreviewListEntity");
const CloudforceOneRulesSearchEntity_1 = require("./entity/CloudforceOneRulesSearchEntity");
const CloudforceOneStatEntity_1 = require("./entity/CloudforceOneStatEntity");
const CloudforceOneSuccessEntity_1 = require("./entity/CloudforceOneSuccessEntity");
const CloudforceOneTreeNodeEntity_1 = require("./entity/CloudforceOneTreeNodeEntity");
const CloudforceOneValidationEntity_1 = require("./entity/CloudforceOneValidationEntity");
const CollectionEntity_1 = require("./entity/CollectionEntity");
const CollectionsItemEntity_1 = require("./entity/CollectionsItemEntity");
const CountryEntity_1 = require("./entity/CountryEntity");
const DashboardAssetEntity_1 = require("./entity/DashboardAssetEntity");
const DashboardUserEntity_1 = require("./entity/DashboardUserEntity");
const DatasetEntity_1 = require("./entity/DatasetEntity");
const EventEntity_1 = require("./entity/EventEntity");
const GroupEntity_1 = require("./entity/GroupEntity");
const IndicatorEntity_1 = require("./entity/IndicatorEntity");
const IndicatorTypeEntity_1 = require("./entity/IndicatorTypeEntity");
const PermissionEntity_1 = require("./entity/PermissionEntity");
const PriorityEntity_1 = require("./entity/PriorityEntity");
const PriorityIntelligenceEntity_1 = require("./entity/PriorityIntelligenceEntity");
const PriorityIntelligenceRequirementEntity_1 = require("./entity/PriorityIntelligenceRequirementEntity");
const PriorityIntelligenceRequirementsPirEntity_1 = require("./entity/PriorityIntelligenceRequirementsPirEntity");
const PublicCredentialMonitorEntity_1 = require("./entity/PublicCredentialMonitorEntity");
const RequestEntity_1 = require("./entity/RequestEntity");
const RequestForInformationRfiEntity_1 = require("./entity/RequestForInformationRfiEntity");
const RequestsDashboardEntity_1 = require("./entity/RequestsDashboardEntity");
const RfiEntity_1 = require("./entity/RfiEntity");
const RfiMessageEntity_1 = require("./entity/RfiMessageEntity");
const RuleEntity_1 = require("./entity/RuleEntity");
const ScanEntity_1 = require("./entity/ScanEntity");
const TagEntity_1 = require("./entity/TagEntity");
const TagCategoryEntity_1 = require("./entity/TagCategoryEntity");
const TargetIndustryEntity_1 = require("./entity/TargetIndustryEntity");
const ThreatSignalEntity_1 = require("./entity/ThreatSignalEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const CloudflareCloudforceOneEntityBase_1 = require("./CloudflareCloudforceOneEntityBase");
Object.defineProperty(exports, "CloudflareCloudforceOneEntityBase", { enumerable: true, get: function () { return CloudflareCloudforceOneEntityBase_1.CloudflareCloudforceOneEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class CloudflareCloudforceOneSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method: fetchargs.method || 'GET',
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('CloudflareCloudforceOneSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('CloudflareCloudforceOneSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('CloudflareCloudforceOneSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.Attacker().list()` / `client.Attacker().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Attacker(entopts) {
        const self = this;
        return new AttackerEntity_1.AttackerEntity(self, entopts);
    }
    // Entity access: `client.BinDb().list()` / `client.BinDb().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BinDb(entopts) {
        const self = this;
        return new BinDbEntity_1.BinDbEntity(self, entopts);
    }
    // Entity access: `client.BrandProtection().list()` / `client.BrandProtection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BrandProtection(entopts) {
        const self = this;
        return new BrandProtectionEntity_1.BrandProtectionEntity(self, entopts);
    }
    // Entity access: `client.Category().list()` / `client.Category().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Category(entopts) {
        const self = this;
        return new CategoryEntity_1.CategoryEntity(self, entopts);
    }
    // Entity access: `client.CloudforceOneAccountExemption().list()` / `client.CloudforceOneAccountExemption().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CloudforceOneAccountExemption(entopts) {
        const self = this;
        return new CloudforceOneAccountExemptionEntity_1.CloudforceOneAccountExemptionEntity(self, entopts);
    }
    // Entity access: `client.CloudforceOneDeleteAll().list()` / `client.CloudforceOneDeleteAll().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CloudforceOneDeleteAll(entopts) {
        const self = this;
        return new CloudforceOneDeleteAllEntity_1.CloudforceOneDeleteAllEntity(self, entopts);
    }
    // Entity access: `client.CloudforceOneEditApproval().list()` / `client.CloudforceOneEditApproval().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CloudforceOneEditApproval(entopts) {
        const self = this;
        return new CloudforceOneEditApprovalEntity_1.CloudforceOneEditApprovalEntity(self, entopts);
    }
    // Entity access: `client.CloudforceOneEmailRuleValidation().list()` / `client.CloudforceOneEmailRuleValidation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CloudforceOneEmailRuleValidation(entopts) {
        const self = this;
        return new CloudforceOneEmailRuleValidationEntity_1.CloudforceOneEmailRuleValidationEntity(self, entopts);
    }
    // Entity access: `client.CloudforceOneEmailRulesList().list()` / `client.CloudforceOneEmailRulesList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CloudforceOneEmailRulesList(entopts) {
        const self = this;
        return new CloudforceOneEmailRulesListEntity_1.CloudforceOneEmailRulesListEntity(self, entopts);
    }
    // Entity access: `client.CloudforceOneRequestsApiResponseCommon().list()` / `client.CloudforceOneRequestsApiResponseCommon().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CloudforceOneRequestsApiResponseCommon(entopts) {
        const self = this;
        return new CloudforceOneRequestsApiResponseCommonEntity_1.CloudforceOneRequestsApiResponseCommonEntity(self, entopts);
    }
    // Entity access: `client.CloudforceOneRule().list()` / `client.CloudforceOneRule().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CloudforceOneRule(entopts) {
        const self = this;
        return new CloudforceOneRuleEntity_1.CloudforceOneRuleEntity(self, entopts);
    }
    // Entity access: `client.CloudforceOneRuleApprovalDetail().list()` / `client.CloudforceOneRuleApprovalDetail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CloudforceOneRuleApprovalDetail(entopts) {
        const self = this;
        return new CloudforceOneRuleApprovalDetailEntity_1.CloudforceOneRuleApprovalDetailEntity(self, entopts);
    }
    // Entity access: `client.CloudforceOneRuleApprovalsList().list()` / `client.CloudforceOneRuleApprovalsList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CloudforceOneRuleApprovalsList(entopts) {
        const self = this;
        return new CloudforceOneRuleApprovalsListEntity_1.CloudforceOneRuleApprovalsListEntity(self, entopts);
    }
    // Entity access: `client.CloudforceOneRulePreview().list()` / `client.CloudforceOneRulePreview().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CloudforceOneRulePreview(entopts) {
        const self = this;
        return new CloudforceOneRulePreviewEntity_1.CloudforceOneRulePreviewEntity(self, entopts);
    }
    // Entity access: `client.CloudforceOneRulesPreviewList().list()` / `client.CloudforceOneRulesPreviewList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CloudforceOneRulesPreviewList(entopts) {
        const self = this;
        return new CloudforceOneRulesPreviewListEntity_1.CloudforceOneRulesPreviewListEntity(self, entopts);
    }
    // Entity access: `client.CloudforceOneRulesSearch().list()` / `client.CloudforceOneRulesSearch().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CloudforceOneRulesSearch(entopts) {
        const self = this;
        return new CloudforceOneRulesSearchEntity_1.CloudforceOneRulesSearchEntity(self, entopts);
    }
    // Entity access: `client.CloudforceOneStat().list()` / `client.CloudforceOneStat().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CloudforceOneStat(entopts) {
        const self = this;
        return new CloudforceOneStatEntity_1.CloudforceOneStatEntity(self, entopts);
    }
    // Entity access: `client.CloudforceOneSuccess().list()` / `client.CloudforceOneSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CloudforceOneSuccess(entopts) {
        const self = this;
        return new CloudforceOneSuccessEntity_1.CloudforceOneSuccessEntity(self, entopts);
    }
    // Entity access: `client.CloudforceOneTreeNode().list()` / `client.CloudforceOneTreeNode().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CloudforceOneTreeNode(entopts) {
        const self = this;
        return new CloudforceOneTreeNodeEntity_1.CloudforceOneTreeNodeEntity(self, entopts);
    }
    // Entity access: `client.CloudforceOneValidation().list()` / `client.CloudforceOneValidation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CloudforceOneValidation(entopts) {
        const self = this;
        return new CloudforceOneValidationEntity_1.CloudforceOneValidationEntity(self, entopts);
    }
    // Entity access: `client.Collection().list()` / `client.Collection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Collection(entopts) {
        const self = this;
        return new CollectionEntity_1.CollectionEntity(self, entopts);
    }
    // Entity access: `client.CollectionsItem().list()` / `client.CollectionsItem().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CollectionsItem(entopts) {
        const self = this;
        return new CollectionsItemEntity_1.CollectionsItemEntity(self, entopts);
    }
    // Entity access: `client.Country().list()` / `client.Country().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Country(entopts) {
        const self = this;
        return new CountryEntity_1.CountryEntity(self, entopts);
    }
    // Entity access: `client.DashboardAsset().list()` / `client.DashboardAsset().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DashboardAsset(entopts) {
        const self = this;
        return new DashboardAssetEntity_1.DashboardAssetEntity(self, entopts);
    }
    // Entity access: `client.DashboardUser().list()` / `client.DashboardUser().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DashboardUser(entopts) {
        const self = this;
        return new DashboardUserEntity_1.DashboardUserEntity(self, entopts);
    }
    // Entity access: `client.Dataset().list()` / `client.Dataset().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Dataset(entopts) {
        const self = this;
        return new DatasetEntity_1.DatasetEntity(self, entopts);
    }
    // Entity access: `client.Event().list()` / `client.Event().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Event(entopts) {
        const self = this;
        return new EventEntity_1.EventEntity(self, entopts);
    }
    // Entity access: `client.Group().list()` / `client.Group().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Group(entopts) {
        const self = this;
        return new GroupEntity_1.GroupEntity(self, entopts);
    }
    // Entity access: `client.Indicator().list()` / `client.Indicator().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Indicator(entopts) {
        const self = this;
        return new IndicatorEntity_1.IndicatorEntity(self, entopts);
    }
    // Entity access: `client.IndicatorType().list()` / `client.IndicatorType().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IndicatorType(entopts) {
        const self = this;
        return new IndicatorTypeEntity_1.IndicatorTypeEntity(self, entopts);
    }
    // Entity access: `client.Permission().list()` / `client.Permission().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Permission(entopts) {
        const self = this;
        return new PermissionEntity_1.PermissionEntity(self, entopts);
    }
    // Entity access: `client.Priority().list()` / `client.Priority().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Priority(entopts) {
        const self = this;
        return new PriorityEntity_1.PriorityEntity(self, entopts);
    }
    // Entity access: `client.PriorityIntelligence().list()` / `client.PriorityIntelligence().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PriorityIntelligence(entopts) {
        const self = this;
        return new PriorityIntelligenceEntity_1.PriorityIntelligenceEntity(self, entopts);
    }
    // Entity access: `client.PriorityIntelligenceRequirement().list()` / `client.PriorityIntelligenceRequirement().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PriorityIntelligenceRequirement(entopts) {
        const self = this;
        return new PriorityIntelligenceRequirementEntity_1.PriorityIntelligenceRequirementEntity(self, entopts);
    }
    // Entity access: `client.PriorityIntelligenceRequirementsPir().list()` / `client.PriorityIntelligenceRequirementsPir().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PriorityIntelligenceRequirementsPir(entopts) {
        const self = this;
        return new PriorityIntelligenceRequirementsPirEntity_1.PriorityIntelligenceRequirementsPirEntity(self, entopts);
    }
    // Entity access: `client.PublicCredentialMonitor().list()` / `client.PublicCredentialMonitor().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PublicCredentialMonitor(entopts) {
        const self = this;
        return new PublicCredentialMonitorEntity_1.PublicCredentialMonitorEntity(self, entopts);
    }
    // Entity access: `client.Request().list()` / `client.Request().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Request(entopts) {
        const self = this;
        return new RequestEntity_1.RequestEntity(self, entopts);
    }
    // Entity access: `client.RequestForInformationRfi().list()` / `client.RequestForInformationRfi().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RequestForInformationRfi(entopts) {
        const self = this;
        return new RequestForInformationRfiEntity_1.RequestForInformationRfiEntity(self, entopts);
    }
    // Entity access: `client.RequestsDashboard().list()` / `client.RequestsDashboard().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RequestsDashboard(entopts) {
        const self = this;
        return new RequestsDashboardEntity_1.RequestsDashboardEntity(self, entopts);
    }
    // Entity access: `client.Rfi().list()` / `client.Rfi().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Rfi(entopts) {
        const self = this;
        return new RfiEntity_1.RfiEntity(self, entopts);
    }
    // Entity access: `client.RfiMessage().list()` / `client.RfiMessage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RfiMessage(entopts) {
        const self = this;
        return new RfiMessageEntity_1.RfiMessageEntity(self, entopts);
    }
    // Entity access: `client.Rule().list()` / `client.Rule().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Rule(entopts) {
        const self = this;
        return new RuleEntity_1.RuleEntity(self, entopts);
    }
    // Entity access: `client.Scan().list()` / `client.Scan().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Scan(entopts) {
        const self = this;
        return new ScanEntity_1.ScanEntity(self, entopts);
    }
    // Entity access: `client.Tag().list()` / `client.Tag().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Tag(entopts) {
        const self = this;
        return new TagEntity_1.TagEntity(self, entopts);
    }
    // Entity access: `client.TagCategory().list()` / `client.TagCategory().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TagCategory(entopts) {
        const self = this;
        return new TagCategoryEntity_1.TagCategoryEntity(self, entopts);
    }
    // Entity access: `client.TargetIndustry().list()` / `client.TargetIndustry().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TargetIndustry(entopts) {
        const self = this;
        return new TargetIndustryEntity_1.TargetIndustryEntity(self, entopts);
    }
    // Entity access: `client.ThreatSignal().list()` / `client.ThreatSignal().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ThreatSignal(entopts) {
        const self = this;
        return new ThreatSignalEntity_1.ThreatSignalEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new CloudflareCloudforceOneSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return CloudflareCloudforceOneSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'CloudflareCloudforceOne' };
    }
    toString() {
        return 'CloudflareCloudforceOne ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.CloudflareCloudforceOneSDK = CloudflareCloudforceOneSDK;
const SDK = CloudflareCloudforceOneSDK;
exports.SDK = SDK;
//# sourceMappingURL=CloudflareCloudforceOneSDK.js.map