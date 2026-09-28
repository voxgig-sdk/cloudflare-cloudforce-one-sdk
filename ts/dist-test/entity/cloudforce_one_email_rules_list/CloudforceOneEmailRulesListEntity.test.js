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
(0, node_test_1.describe)('CloudforceOneEmailRulesListEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareCloudforceOneSDK.test();
        const ent = testsdk.CloudforceOneEmailRulesList();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'cloudforce_one_email_rules_list.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "content": { "a": true, "h": "Content", "n": "content", "r": false, "t": "`$STRING`", "key$": "content", "index$": 0 }, "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": true, "t": "`$NUMBER`", "key$": "created_at", "index$": 1 }, "created_by": { "a": true, "h": "Created By", "n": "created_by", "r": true, "t": "`$STRING`", "key$": "created_by", "index$": 2 }, "description": { "a": true, "h": "Description", "n": "description", "r": true, "t": "`$STRING`", "key$": "description", "index$": 3 }, "enabled": { "a": true, "h": "Enabled", "n": "enabled", "r": true, "sh": "Whether this rule is active for dice consumers.", "t": "`$BOOLEAN`", "key$": "enabled", "index$": 4 }, "id": { "a": true, "fo": "uuid", "h": "Id", "n": "id", "r": true, "t": "`$STRING`", "key$": "id", "index$": 5 }, "is_public": { "a": true, "h": "Is Public", "n": "is_public", "r": true, "sh": "Whether this rule is visible to other internal accounts.", "t": "`$BOOLEAN`", "key$": "is_public", "index$": 6 }, "meta": { "a": true, "h": "Meta", "n": "meta", "r": false, "sh": "Structured meta entries for the rule (parsed from content plus any request-supplied meta).", "t": "`$ARRAY`", "union": { "branches": 3, "count": 1, "depth": 3 }, "key$": "meta", "index$": 7 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "t": "`$STRING`", "key$": "name", "index$": 8 }, "namespaces": { "a": true, "h": "Namespaces", "n": "namespaces", "r": true, "t": "`$ARRAY`", "key$": "namespaces", "index$": 9 }, "path": { "a": true, "h": "Path", "n": "path", "r": true, "t": "`$STRING`", "key$": "path", "index$": 10 }, "pending_approval_id": { "a": true, "h": "Pending Approval Id", "n": "pending_approval_id", "r": true, "sh": "ID of an open approval workflow targeting this rule, or null if none is pending.", "t": "`$NUMBER`", "key$": "pending_approval_id", "index$": 11 }, "pending_change": { "a": true, "h": "Pending Change", "n": "pending_change", "r": true, "sh": "Proposed update or deletion awaiting approval.", "t": "`$OBJECT`", "key$": "pending_change", "index$": 12 }, "structured_source": { "a": true, "h": "Structured Source", "n": "structured_source", "r": false, "sh": "Original JSON payload for rules created via the structured rules API.", "t": "`$STRING`", "key$": "structured_source", "index$": 13 }, "updated_at": { "a": true, "h": "Updated At", "n": "updated_at", "r": true, "t": "`$NUMBER`", "key$": "updated_at", "index$": 14 }, "updated_by": { "a": true, "h": "Updated By", "n": "updated_by", "r": true, "t": "`$STRING`", "key$": "updated_by", "index$": 15 } }, "id": { "field": "id", "name": "id" }, "name": "cloudforce_one_email_rules_list", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/cloudforce-one/rules/structured", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 50, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$NUMBER`", "index$": 0 }, { "a": true, "ex": 0, "k": "query", "n": "offset", "or": "offset", "r": false, "t": "`$NUMBER`", "index$": 1 }, { "a": true, "k": "query", "n": "search", "or": "search", "r": false, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/cloudforce-one/rules/structured", "q": { "exist": ["account_id", "limit", "offset", "search"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "rules" }, { "lit": "structured" }], "t": { "req": "`reqdata`", "res": "`body.rules`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "cloudforce_one_email_rules_list", "name__orig": "cloudforce_one_email_rules_list", "Name": "CloudforceOneEmailRulesList", "name_": "cloudforce_one_email_rules_list", "name-": "cloudforce-one-email-rules-list", "NAME": "CLOUDFORCE_ONE_EMAIL_RULES_LIST", "index$": 8 }, { "active": true, "entity": "cloudforce_one_email_rules_list", "key$": "BasicCloudforceOneEmailRulesListFlow", "kind": "basic", "name": "BasicCloudforceOneEmailRulesListFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "cloudforce_one_email_rules_list_ref01" } }], "index$": 0 }] }, 'CloudforceOneEmailRulesList', { "GET /accounts/{account_id}/cloudforce-one/rules/structured": { "protocol": "http", "parameters": [{ "description": "Cloudflare account ID.", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353" }, "x-ref": "#/components/parameters/cloudforce-one_account_id", "index$": 0 }, { "name": "limit", "in": "query", "schema": { "type": "number", "default": 50, "maximum": 100, "minimum": 1 }, "index$": 1 }, { "name": "offset", "in": "query", "schema": { "type": "number", "default": 0, "minimum": 0, "nullable": true }, "index$": 2 }, { "name": "search", "in": "query", "schema": { "type": "string" }, "index$": 3 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let cloudforce_one_email_rules_list_ref01_data = Object.values(setup.data.existing.cloudforce_one_email_rules_list)[0];
        // LIST
        const cloudforce_one_email_rules_list_ref01_ent = client.CloudforceOneEmailRulesList();
        const cloudforce_one_email_rules_list_ref01_match = {};
        cloudforce_one_email_rules_list_ref01_match['account_id'] = setup.idmap['account01'];
        const cloudforce_one_email_rules_list_ref01_list = (await cloudforce_one_email_rules_list_ref01_ent.list(cloudforce_one_email_rules_list_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/cloudforce_one_email_rules_list/CloudforceOneEmailRulesListTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareCloudforceOneSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['cloudforce_one_email_rules_list01', 'cloudforce_one_email_rules_list02', 'cloudforce_one_email_rules_list03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_EMAIL_RULES_LIST_ENTID': idmap,
        'CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_CLOUDFORCE_ONE_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_EMAIL_RULES_LIST_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_EMAIL_RULES_LIST_ENTID'];
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
//# sourceMappingURL=CloudforceOneEmailRulesListEntity.test.js.map