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
(0, node_test_1.describe)('PriorityIntelligenceRequirementsPirEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareCloudforceOneSDK.test();
        const ent = testsdk.PriorityIntelligenceRequirementsPir();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE;
        for (const op of ['create', 'list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'priority_intelligence_requirements__pir.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 0 }, "labels": { "a": true, "h": "Labels", "n": "labels", "r": true, "sh": "List of labels.", "t": "`$ARRAY`", "key$": "labels", "index$": 1 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 2 }, "priority": { "a": true, "h": "Priority", "n": "priority", "r": true, "sh": "Priority.", "t": "`$INTEGER`", "key$": "priority", "index$": 3 }, "requirement": { "a": true, "h": "Requirement", "n": "requirement", "r": true, "sh": "Requirement.", "t": "`$STRING`", "key$": "requirement", "index$": 4 }, "result": { "a": true, "h": "Result", "n": "result", "r": false, "t": "`$ANY`", "key$": "result", "index$": 5 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Whether the API call was successful.", "t": "`$BOOLEAN`", "key$": "success", "index$": 6 }, "tlp": { "a": true, "h": "Tlp", "n": "tlp", "r": true, "sh": "The CISA defined Traffic Light Protocol (TLP).", "t": "`$STRING`", "key$": "tlp", "index$": 7 } }, "name": "priority_intelligence_requirements__pir", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/cloudforce-one/requests/priority/new", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/cloudforce-one/requests/priority/new", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "requests" }, { "lit": "priority" }, { "lit": "new" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/cloudforce-one/requests/priority/quota", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/cloudforce-one/requests/priority/quota", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "requests" }, { "lit": "priority" }, { "lit": "quota" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "priority_intelligence_requirements__pir", "name__orig": "priority_intelligence_requirements__pir", "Name": "PriorityIntelligenceRequirementsPir", "name_": "priority_intelligence_requirements_pir", "name-": "priority-intelligence-requirements-pir", "NAME": "PRIORITY_INTELLIGENCE_REQUIREMENTS__PIR", "index$": 34 }, { "active": true, "entity": "priority_intelligence_requirements__pir", "key$": "BasicPriorityIntelligenceRequirementsPirFlow", "kind": "basic", "name": "BasicPriorityIntelligenceRequirementsPirFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "priority_intelligence_requirements__pir_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "priority_intelligence_requirements__pir_ref01" } }], "index$": 1 }] }, 'PriorityIntelligenceRequirementsPir', { "POST /accounts/{account_id}/cloudforce-one/requests/priority/new": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "labels": { "description": "List of labels.", "type": "array", "items": { "type": "string" }, "example": ["DoS", "CVE"], "title": "Labels", "x-auditable": true, "x-ref": "#/components/schemas/cloudforce-one-requests_labels", "key$": "labels" }, "priority": { "description": "Priority.", "type": "integer", "example": 1, "x-auditable": true, "key$": "priority" }, "requirement": { "description": "Requirement.", "type": "string", "example": "DoS attacks carried out by CVEs", "x-auditable": true, "key$": "requirement" }, "tlp": { "description": "The CISA defined Traffic Light Protocol (TLP).", "type": "string", "enum": ["clear", "amber", "amber-strict", "green", "red"], "title": "TLP", "x-auditable": true, "x-ref": "#/components/schemas/cloudforce-one-requests_tlp", "key$": "tlp" } }, "required": ["labels", "priority", "requirement", "tlp"], "title": "Priority Editable Attributes", "x-ref": "#/components/schemas/cloudforce-one-requests_priority-edit", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-ref": "#/components/schemas/cloudforce-one-requests_identifier" }, "index$": 0 }] }, "GET /accounts/{account_id}/cloudforce-one/requests/priority/quota": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-ref": "#/components/schemas/cloudforce-one-requests_identifier" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const priority_intelligence_requirements__pir_ref01_ent = client.PriorityIntelligenceRequirementsPir();
        let priority_intelligence_requirements__pir_ref01_data = setup.data.new.priority_intelligence_requirements__pir['priority_intelligence_requirements__pir_ref01'];
        priority_intelligence_requirements__pir_ref01_data['account_id'] = setup.idmap['account01'];
        priority_intelligence_requirements__pir_ref01_data = (await priority_intelligence_requirements__pir_ref01_ent.create(priority_intelligence_requirements__pir_ref01_data)).data();
        (0, node_assert_1.default)(null != priority_intelligence_requirements__pir_ref01_data);
        // LIST
        const priority_intelligence_requirements__pir_ref01_match = {};
        priority_intelligence_requirements__pir_ref01_match['account_id'] = setup.idmap['account01'];
        const priority_intelligence_requirements__pir_ref01_list = (await priority_intelligence_requirements__pir_ref01_ent.list(priority_intelligence_requirements__pir_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/priority_intelligence_requirements__pir/PriorityIntelligenceRequirementsPirTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareCloudforceOneSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['priority_intelligence_requirements__pir01', 'priority_intelligence_requirements__pir02', 'priority_intelligence_requirements__pir03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_CLOUDFORCE_ONE_TEST_PRIORITY_INTELLIGENCE_REQUIREMENTS_PIR_ENTID': idmap,
        'CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_CLOUDFORCE_ONE_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_PRIORITY_INTELLIGENCE_REQUIREMENTS_PIR_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_PRIORITY_INTELLIGENCE_REQUIREMENTS_PIR_ENTID'];
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
//# sourceMappingURL=PriorityIntelligenceRequirementsPirEntity.test.js.map