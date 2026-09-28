"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('CloudforceOneRuleApprovalsListEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareCloudforceOneSDK.test();
        const ent = testsdk.CloudforceOneRuleApprovalsList();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'cloudforce_one_rule_approvals_list.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "audit_log_id": { "a": true, "h": "Audit Log Id", "n": "audit_log_id", "r": true, "t": "`$NUMBER`", "key$": "audit_log_id", "index$": 0 }, "can_review": { "a": true, "h": "Can Review", "n": "can_review", "r": true, "sh": "Whether the authenticated user may approve or reject this pending change.", "t": "`$BOOLEAN`", "key$": "can_review", "index$": 1 }, "cancelled_at": { "a": true, "h": "Cancelled At", "n": "cancelled_at", "r": true, "sh": "Time at which the requester cancelled the approval.", "t": "`$NUMBER`", "key$": "cancelled_at", "index$": 2 }, "cancelled_by": { "a": true, "h": "Cancelled By", "n": "cancelled_by", "r": true, "sh": "Requester who cancelled the pending approval.", "t": "`$STRING`", "key$": "cancelled_by", "index$": 3 }, "change_description": { "a": true, "h": "Change Description", "n": "change_description", "r": true, "t": "`$STRING`", "key$": "change_description", "index$": 4 }, "change_type": { "a": true, "h": "Change Type", "n": "change_type", "r": true, "t": "`$STRING`", "key$": "change_type", "index$": 5 }, "commit_message": { "a": true, "h": "Commit Message", "n": "commit_message", "r": true, "sh": "The requester supplies this human-readable justification with the change.", "t": "`$STRING`", "key$": "commit_message", "index$": 6 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "t": "`$NUMBER`", "key$": "id", "index$": 7 }, "proposed_changes": { "a": true, "h": "Proposed Changes", "n": "proposed_changes", "r": true, "sh": "Contains structured proposed rule changes, or null for unresolved persisted data.", "t": "`$ANY`", "union": { "branches": 3, "count": 1, "depth": 0 }, "key$": "proposed_changes", "index$": 8 }, "rejection_reason": { "a": true, "h": "Rejection Reason", "n": "rejection_reason", "r": true, "sh": "The reviewer may supply a reason when rejecting the change.", "t": "`$STRING`", "key$": "rejection_reason", "index$": 9 }, "requested_at": { "a": true, "h": "Requested At", "n": "requested_at", "r": true, "t": "`$NUMBER`", "key$": "requested_at", "index$": 10 }, "requested_by": { "a": true, "h": "Requested By", "n": "requested_by", "r": true, "t": "`$STRING`", "key$": "requested_by", "index$": 11 }, "reviewed_at": { "a": true, "h": "Reviewed At", "n": "reviewed_at", "r": true, "t": "`$NUMBER`", "key$": "reviewed_at", "index$": 12 }, "reviewer_scope": { "a": true, "h": "Reviewer Scope", "n": "reviewer_scope", "r": true, "sh": "Review policy: general Nomos approvers for default; general approvers or Phishguard for email.", "t": "`$STRING`", "key$": "reviewer_scope", "index$": 13 }, "revision_number": { "a": true, "h": "Revision Number", "n": "revision_number", "r": true, "sh": "Revision number within this approval request chain.", "t": "`$INTEGER`", "key$": "revision_number", "index$": 14 }, "rule_id": { "a": true, "fo": "uuid", "h": "Rule Id", "n": "rule_id", "r": true, "t": "`$STRING`", "key$": "rule_id", "index$": 15 }, "rule_name": { "a": true, "h": "Rule Name", "n": "rule_name", "r": true, "t": "`$STRING`", "key$": "rule_name", "index$": 16 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "t": "`$STRING`", "key$": "status", "index$": 17 }, "superseded_by_approval_id": { "a": true, "h": "Superseded By Approval Id", "n": "superseded_by_approval_id", "r": true, "sh": "Newer approval revision that replaced this approval.", "t": "`$NUMBER`", "key$": "superseded_by_approval_id", "index$": 18 }, "supersedes_approval_id": { "a": true, "h": "Supersedes Approval Id", "n": "supersedes_approval_id", "r": true, "sh": "This approval replaces the referenced approval revision.", "t": "`$NUMBER`", "key$": "supersedes_approval_id", "index$": 19 } }, "id": { "field": "id", "name": "id" }, "name": "cloudforce_one_rule_approvals_list", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/cloudforce-one/rules/approvals", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "create", "k": "query", "n": "change_type", "or": "change_type", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "true", "k": "query", "n": "latest_only", "or": "latest_only", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": 50, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$NUMBER`", "index$": 2 }, { "a": true, "ex": 0, "k": "query", "n": "offset", "or": "offset", "r": false, "t": "`$NUMBER`", "index$": 3 }, { "a": true, "ex": "email", "k": "query", "n": "reviewer_scope", "or": "reviewer_scope", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "query", "n": "rule_id", "or": "rule_id", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "ex": ["pending", "rejected"], "k": "query", "n": "status", "or": "status", "r": false, "t": "`$ANY`", "index$": 6 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/cloudforce-one/rules/approvals", "q": { "exist": ["account_id", "change_type", "latest_only", "limit", "offset", "reviewer_scope", "rule_id", "status"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "rules" }, { "lit": "approvals" }], "t": { "req": "`reqdata`", "res": "`body.approvals`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "cloudforce_one_rule_approvals_list", "name__orig": "cloudforce_one_rule_approvals_list", "Name": "CloudforceOneRuleApprovalsList", "name_": "cloudforce_one_rule_approvals_list", "name-": "cloudforce-one-rule-approvals-list", "NAME": "CLOUDFORCE_ONE_RULE_APPROVALS_LIST", "index$": 12 }, { "active": true, "entity": "cloudforce_one_rule_approvals_list", "key$": "BasicCloudforceOneRuleApprovalsListFlow", "kind": "basic", "name": "BasicCloudforceOneRuleApprovalsListFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "cloudforce_one_rule_approvals_list_ref01" } }], "index$": 0 }] }, 'CloudforceOneRuleApprovalsList', { "GET /accounts/{account_id}/cloudforce-one/rules/approvals": { "protocol": "http", "parameters": [{ "description": "Cloudflare account ID.", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353" }, "x-ref": "#/components/parameters/cloudforce-one_account_id", "index$": 0 }, { "name": "status", "in": "query", "description": "Selects approval statuses. Repeat the parameter to OR-match statuses (for example, status=pending&status=rejected). Use status=all alone to disable status filtering.", "schema": { "description": "Selects approval statuses. Repeat the parameter to OR-match statuses (for example, status=pending&status=rejected). Use status=all alone to disable status filtering.", "example": ["pending", "rejected"], "default": "pending", "anyOf": [{ "enum": ["pending", "approved", "rejected", "cancelled", "all"], "example": "pending", "type": "string" }, { "items": { "enum": ["pending", "approved", "rejected", "cancelled", "all"], "example": "pending", "type": "string" }, "maxItems": 4, "minItems": 1, "type": "array" }] }, "index$": 1 }, { "name": "latest_only", "in": "query", "description": "When true, returns the newest revision in each approval chain.", "schema": { "description": "When true, returns the newest revision in each approval chain.", "type": "string", "example": "true", "default": "false", "enum": ["true", "false"] }, "index$": 2 }, { "name": "limit", "in": "query", "schema": { "type": "number", "example": 50, "default": 50, "maximum": 100, "minimum": 1 }, "index$": 3 }, { "name": "offset", "in": "query", "schema": { "type": "number", "example": 0, "default": 0, "minimum": 0, "nullable": true }, "index$": 4 }, { "name": "reviewer_scope", "in": "query", "description": "Limits approvals to the specified reviewer scope.", "schema": { "description": "Limits approvals to the specified reviewer scope.", "type": "string", "example": "email", "enum": ["default", "email", "unresolved"] }, "index$": 5 }, { "name": "change_type", "in": "query", "description": "Limits approvals to the specified mutation type.", "schema": { "description": "Limits approvals to the specified mutation type.", "type": "string", "example": "create", "enum": ["create", "update", "delete"] }, "index$": 6 }, { "name": "rule_id", "in": "query", "description": "Filter approvals by rule ID.", "schema": { "description": "Filter approvals by rule ID.", "type": "string", "format": "uuid" }, "index$": 7 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let cloudforce_one_rule_approvals_list_ref01_data = Object.values(setup.data.existing.cloudforce_one_rule_approvals_list)[0];
        // LIST
        const cloudforce_one_rule_approvals_list_ref01_ent = client.CloudforceOneRuleApprovalsList();
        const cloudforce_one_rule_approvals_list_ref01_match = {};
        cloudforce_one_rule_approvals_list_ref01_match['account_id'] = setup.idmap['account01'];
        const cloudforce_one_rule_approvals_list_ref01_list = (await cloudforce_one_rule_approvals_list_ref01_ent.list(cloudforce_one_rule_approvals_list_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/cloudforce_one_rule_approvals_list/CloudforceOneRuleApprovalsListTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareCloudforceOneSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['cloudforce_one_rule_approvals_list01', 'cloudforce_one_rule_approvals_list02', 'cloudforce_one_rule_approvals_list03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_RULE_APPROVALS_LIST_ENTID': idmap,
        'CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_CLOUDFORCE_ONE_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_RULE_APPROVALS_LIST_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_RULE_APPROVALS_LIST_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.CloudflareCloudforceOneSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.CLOUDFLARE_CLOUDFORCE_ONE_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=CloudforceOneRuleApprovalsListEntity.test.js.map