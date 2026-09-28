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
(0, node_test_1.describe)('CloudforceOneRuleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareCloudforceOneSDK.test();
        const ent = testsdk.CloudforceOneRule();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'cloudforce_one_rule.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "actions": { "a": true, "h": "Actions", "n": "actions", "r": false, "t": "`$ARRAY`", "union": { "branches": 5, "count": 1, "depth": 4 }, "key$": "actions", "index$": 0 }, "commit_message": { "a": true, "h": "Commit Message", "n": "commit_message", "r": false, "sh": "Human-readable justification for this change.", "t": "`$STRING`", "key$": "commit_message", "index$": 1 }, "content": { "a": true, "h": "Content", "n": "content", "r": true, "t": "`$STRING`", "key$": "content", "index$": 2 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "Human-readable description of the rule.", "t": "`$STRING`", "key$": "description", "index$": 3 }, "enabled": { "a": true, "h": "Enabled", "n": "enabled", "r": false, "sh": "Whether this rule is active for dice consumers.", "t": "`$BOOLEAN`", "key$": "enabled", "index$": 4 }, "is_public": { "a": true, "h": "Is Public", "n": "is_public", "r": false, "sh": "Whether this rule is visible to other internal accounts.", "t": "`$BOOLEAN`", "key$": "is_public", "index$": 5 }, "meta": { "a": true, "h": "Meta", "n": "meta", "r": false, "sh": "Adds YARA meta entries to the rule's meta block and stores them in rule_meta alongside content metadata.", "t": "`$ARRAY`", "union": { "branches": 3, "count": 1, "depth": 3 }, "key$": "meta", "index$": 6 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "t": "`$STRING`", "key$": "name", "index$": 7 }, "namespaces": { "a": true, "h": "Namespaces", "n": "namespaces", "r": false, "sh": "Optional WfP deployment tags (customer rules only).", "t": "`$ARRAY`", "key$": "namespaces", "index$": 8 }, "path": { "a": true, "h": "Path", "n": "path", "r": true, "t": "`$STRING`", "key$": "path", "index$": 9 } }, "name": "cloudforce_one_rule", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/cloudforce-one/rules", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/cloudforce-one/rules", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "rules" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "cloudforce_one_rule", "name__orig": "cloudforce_one_rule", "Name": "CloudforceOneRule", "name_": "cloudforce_one_rule", "name-": "cloudforce-one-rule", "NAME": "CLOUDFORCE_ONE_RULE", "index$": 10 }, { "active": true, "entity": "cloudforce_one_rule", "key$": "BasicCloudforceOneRuleFlow", "kind": "basic", "name": "BasicCloudforceOneRuleFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "cloudforce_one_rule_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'CloudforceOneRule', { "POST /accounts/{account_id}/cloudforce-one/rules": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "actions": { "type": "array", "items": { "type": "object", "properties": { "action_config": { "description": "Action-specific configuration parameters.", "type": "object", "additionalProperties": {} }, "action_type": { "type": "string", "example": "alert_gchat", "enum": [] }, "enabled": { "type": "boolean", "default": true } }, "required": ["action_type", "action_config"], "x-ref": "#/components/schemas/cloudforce-one_RuleAction" }, "key$": "actions" }, "commit_message": { "description": "Human-readable justification for this change. Required for internal-account submissions; optional for customer accounts and automated sync.", "type": "string", "example": "Add worker rule to catch bpb-panel variants.", "maxLength": 1000, "key$": "commit_message" }, "content": { "example": "rule example { condition: true }", "minLength": 1, "type": "string", "key$": "content" }, "description": { "description": "Human-readable description of the rule. Auto-extracted from YARA meta if present.", "type": "string", "example": "Detects malicious proxy workers", "maxLength": 1000, "key$": "description" }, "enabled": { "description": "Whether this rule is active for dice consumers.", "type": "boolean", "example": true, "default": true, "key$": "enabled" }, "is_public": { "description": "Whether this rule is visible to other internal accounts.", "type": "boolean", "example": false, "default": false, "x-auditable": true, "key$": "is_public" }, "meta": { "description": "Adds YARA meta entries to the rule's meta block and stores them in rule_meta alongside content metadata. Use valid YARA identifiers for keys; exclude 'name', 'enabled', and 'description'. You may repeat keys.", "type": "array", "items": { "description": "A YARA meta entry. The server resolves its value type. The 'detection' key accepts MALICIOUS, SUSPICIOUS, SPAM, or SPOOF.", "type": "object", "properties": { "key": { "type": "string", "maxLength": 128, "minLength": 1, "pattern": "^[a-zA-Z_][a-zA-Z0-9_]*$" }, "value": { "anyOf": [] } }, "required": ["key", "value"], "x-ref": "#/components/schemas/cloudforce-one_MetaInputEntry" }, "maxItems": 50, "key$": "meta" }, "name": { "type": "string", "example": "block-malicious-workers", "maxLength": 255, "minLength": 1, "x-auditable": true, "key$": "name" }, "namespaces": { "description": "Optional WfP deployment tags (customer rules only). Internal rules leave empty.", "type": "array", "items": { "maxLength": 255, "minLength": 1, "type": "string" }, "example": [], "default": [], "x-auditable": true, "key$": "namespaces" }, "path": { "type": "string", "example": "yara/workers", "minLength": 1, "x-auditable": true, "key$": "path" } }, "required": ["name", "path", "content"], "x-ref": "#/components/schemas/cloudforce-one_CreateRule", "index$": 1 } } } }, "parameters": [{ "description": "Cloudflare account ID.", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353" }, "x-ref": "#/components/parameters/cloudforce-one_account_id", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const cloudforce_one_rule_ref01_ent = client.CloudforceOneRule();
        let cloudforce_one_rule_ref01_data = setup.data.new.cloudforce_one_rule['cloudforce_one_rule_ref01'];
        cloudforce_one_rule_ref01_data['account_id'] = setup.idmap['account01'];
        cloudforce_one_rule_ref01_data = (await cloudforce_one_rule_ref01_ent.create(cloudforce_one_rule_ref01_data)).data();
        (0, node_assert_1.default)(null != cloudforce_one_rule_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/cloudforce_one_rule/CloudforceOneRuleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareCloudforceOneSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['cloudforce_one_rule01', 'cloudforce_one_rule02', 'cloudforce_one_rule03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_RULE_ENTID': idmap,
        'CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_CLOUDFORCE_ONE_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_RULE_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_RULE_ENTID'];
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
//# sourceMappingURL=CloudforceOneRuleEntity.test.js.map