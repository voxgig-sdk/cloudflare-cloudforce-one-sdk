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
(0, node_test_1.describe)('CloudforceOneEmailRuleValidationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareCloudforceOneSDK.test();
        const ent = testsdk.CloudforceOneEmailRuleValidation();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'cloudforce_one_email_rule_validation.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "compiled_yara": { "a": true, "h": "Compiled Yara", "n": "compiled_yara", "r": false, "t": "`$STRING`", "key$": "compiled_yara", "index$": 0 }, "condition": { "a": true, "h": "Condition", "n": "condition", "r": true, "sh": "Nested condition groups support up to 10 levels of depth.", "t": "`$OBJECT`", "union": { "branches": 3, "count": 3, "depth": 10 }, "key$": "condition", "index$": 1 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "t": "`$STRING`", "key$": "description", "index$": 2 }, "enabled": { "a": true, "h": "Enabled", "n": "enabled", "r": false, "t": "`$BOOLEAN`", "key$": "enabled", "index$": 3 }, "error": { "a": true, "h": "Error", "n": "error", "r": false, "t": "`$STRING`", "key$": "error", "index$": 4 }, "existing_rule_id": { "a": true, "fo": "uuid", "h": "Existing Rule Id", "n": "existing_rule_id", "r": false, "sh": "Existing rule ID to exclude from duplicate-name checks when validating an update.", "t": "`$STRING`", "key$": "existing_rule_id", "index$": 5 }, "meta": { "a": true, "h": "Meta", "n": "meta", "r": false, "t": "`$ARRAY`", "union": { "branches": 3, "count": 1, "depth": 3 }, "key$": "meta", "index$": 6 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "t": "`$STRING`", "key$": "name", "index$": 7 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "sh": "Disposition for matching email.", "t": "`$STRING`", "key$": "status", "index$": 8 }, "strings": { "a": true, "h": "Strings", "n": "strings", "r": false, "t": "`$ARRAY`", "key$": "strings", "index$": 9 }, "valid": { "a": true, "h": "Valid", "n": "valid", "r": true, "t": "`$BOOLEAN`", "key$": "valid", "index$": 10 } }, "name": "cloudforce_one_email_rule_validation", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/cloudforce-one/rules/structured/validate", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/cloudforce-one/rules/structured/validate", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "rules" }, { "lit": "structured" }, { "lit": "validate" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "cloudforce_one_email_rule_validation", "name__orig": "cloudforce_one_email_rule_validation", "Name": "CloudforceOneEmailRuleValidation", "name_": "cloudforce_one_email_rule_validation", "name-": "cloudforce-one-email-rule-validation", "NAME": "CLOUDFORCE_ONE_EMAIL_RULE_VALIDATION", "index$": 7 }, { "active": true, "entity": "cloudforce_one_email_rule_validation", "key$": "BasicCloudforceOneEmailRuleValidationFlow", "kind": "basic", "name": "BasicCloudforceOneEmailRuleValidationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "cloudforce_one_email_rule_validation_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'CloudforceOneEmailRuleValidation', { "POST /accounts/{account_id}/cloudforce-one/rules/structured/validate": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "condition": { "description": "Nested condition groups support up to 10 levels of depth.", "type": "object", "properties": { "conditions": { "type": "array", "items": { "discriminator": {}, "oneOf": [], "x-ref": "#/components/schemas/cloudforce-one_EmailRuleCondition" }, "maxItems": 50, "minItems": 1 }, "operator": { "type": "string", "enum": ["and", "or"] }, "type": { "type": "string", "enum": ["group"] } }, "required": ["type", "operator", "conditions"], "x-ref": "#/components/schemas/cloudforce-one_EmailRuleConditionGroup", "key$": "condition" }, "description": { "type": "string", "maxLength": 1000, "key$": "description" }, "enabled": { "type": "boolean", "default": true, "key$": "enabled" }, "existing_rule_id": { "description": "Existing rule ID to exclude from duplicate-name checks when validating an update.", "type": "string", "format": "uuid", "example": "550e8400-e29b-41d4-a716-446655440000", "key$": "existing_rule_id" }, "meta": { "type": "array", "items": { "description": "A YARA meta entry. The server resolves its value type. The 'detection' key accepts MALICIOUS, SUSPICIOUS, SPAM, or SPOOF.", "type": "object", "properties": { "key": { "type": "string", "maxLength": 128, "minLength": 1, "pattern": "^[a-zA-Z_][a-zA-Z0-9_]*$" }, "value": { "anyOf": [] } }, "required": ["key", "value"], "x-ref": "#/components/schemas/cloudforce-one_MetaInputEntry" }, "maxItems": 50, "key$": "meta" }, "name": { "type": "string", "maxLength": 255, "minLength": 1, "key$": "name" }, "status": { "description": "Disposition for matching email. This emits status metadata with the selected value.", "type": "string", "default": "silent", "enum": ["silent", "blocking"], "key$": "status" }, "strings": { "type": "array", "items": { "properties": { "identifier": { "type": "string", "maxLength": 128, "minLength": 1, "pattern": "^[a-zA-Z_][a-zA-Z0-9_]*$" }, "match_type": { "type": "string", "default": "text", "enum": [] }, "modifiers": { "type": "array", "items": {}, "default": [] }, "type": { "type": "string", "enum": [] }, "value": { "type": "string", "maxLength": 10000, "minLength": 1 } }, "required": ["type", "identifier", "value"], "type": "object" }, "default": [], "maxItems": 50, "key$": "strings" } }, "required": ["name", "condition"], "index$": 1 } } } }, "parameters": [{ "description": "Cloudflare account ID.", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353" }, "x-ref": "#/components/parameters/cloudforce-one_account_id", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const cloudforce_one_email_rule_validation_ref01_ent = client.CloudforceOneEmailRuleValidation();
        let cloudforce_one_email_rule_validation_ref01_data = setup.data.new.cloudforce_one_email_rule_validation['cloudforce_one_email_rule_validation_ref01'];
        cloudforce_one_email_rule_validation_ref01_data['account_id'] = setup.idmap['account01'];
        cloudforce_one_email_rule_validation_ref01_data = (await cloudforce_one_email_rule_validation_ref01_ent.create(cloudforce_one_email_rule_validation_ref01_data)).data();
        (0, node_assert_1.default)(null != cloudforce_one_email_rule_validation_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/cloudforce_one_email_rule_validation/CloudforceOneEmailRuleValidationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareCloudforceOneSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['cloudforce_one_email_rule_validation01', 'cloudforce_one_email_rule_validation02', 'cloudforce_one_email_rule_validation03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_EMAIL_RULE_VALIDATION_ENTID': idmap,
        'CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_CLOUDFORCE_ONE_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_EMAIL_RULE_VALIDATION_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_EMAIL_RULE_VALIDATION_ENTID'];
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
//# sourceMappingURL=CloudforceOneEmailRuleValidationEntity.test.js.map