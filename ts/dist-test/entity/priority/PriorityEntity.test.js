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
(0, node_test_1.describe)('PriorityEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareCloudforceOneSDK.test();
        const ent = testsdk.Priority();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'priority.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 1 }, "labels": { "a": true, "h": "Labels", "n": "labels", "r": true, "sh": "List of labels.", "t": "`$ARRAY`", "key$": "labels", "index$": 2 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 3 }, "page": { "a": true, "h": "Page", "n": "page", "r": true, "sh": "Page number of results.", "t": "`$INTEGER`", "key$": "page", "index$": 4 }, "per_page": { "a": true, "h": "Per Page", "n": "per_page", "r": true, "sh": "Number of results per page.", "t": "`$INTEGER`", "key$": "per_page", "index$": 5 }, "priority": { "a": true, "h": "Priority", "n": "priority", "r": true, "sh": "Priority.", "t": "`$INTEGER`", "key$": "priority", "index$": 6 }, "requirement": { "a": true, "h": "Requirement", "n": "requirement", "r": true, "sh": "Requirement.", "t": "`$STRING`", "key$": "requirement", "index$": 7 }, "result": { "a": true, "h": "Result", "n": "result", "r": false, "t": "`$ANY`", "key$": "result", "index$": 8 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Whether the API call was successful.", "t": "`$BOOLEAN`", "key$": "success", "index$": 9 }, "tlp": { "a": true, "h": "Tlp", "n": "tlp", "r": true, "sh": "The CISA defined Traffic Light Protocol (TLP).", "t": "`$STRING`", "key$": "tlp", "index$": 10 } }, "id": { "field": "id", "name": "id" }, "name": "priority", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/cloudforce-one/requests/priority", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/cloudforce-one/requests/priority", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "requests" }, { "lit": "priority" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/cloudforce-one/requests/priority/{priority_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415", "k": "param", "n": "id", "or": "priority_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/cloudforce-one/requests/priority/{priority_id}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "priority_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "requests" }, { "lit": "priority" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /accounts/{account_id}/cloudforce-one/requests/priority/{priority_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415", "k": "param", "n": "id", "or": "priority_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/accounts/{account_id}/cloudforce-one/requests/priority/{priority_id}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "priority_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "requests" }, { "lit": "priority" }, { "var": "id" }], "t": { "req": { "priority": "`reqdata`" }, "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "priority", "name__orig": "priority", "Name": "Priority", "name_": "priority", "name-": "priority", "NAME": "PRIORITY", "index$": 31 }, { "active": true, "entity": "priority", "key$": "BasicPriorityFlow", "kind": "basic", "name": "BasicPriorityFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "priority_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": { "account_id": "account01" }, "i": { "ref": "priority_ref01", "srcdatavar": "priority_ref01_data", "suffix": "_up0", "textfield": "requirement" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-priority_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "priority_ref01", "srcdatavar": "priority_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "priority01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-priority_ref01" } }], "index$": 2 }] }, 'Priority', { "POST /accounts/{account_id}/cloudforce-one/requests/priority": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "page": { "description": "Page number of results.", "type": "integer", "key$": "page" }, "per_page": { "description": "Number of results per page.", "type": "integer", "example": 10, "key$": "per_page" } }, "required": ["page", "per_page"], "title": "Priority List Parameters", "x-ref": "#/components/schemas/cloudforce-one-requests_priority-list", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-ref": "#/components/schemas/cloudforce-one-requests_identifier" }, "index$": 0 }] }, "GET /accounts/{account_id}/cloudforce-one/requests/priority/{priority_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-ref": "#/components/schemas/cloudforce-one-requests_identifier" }, "index$": 0 }, { "name": "priority_id", "in": "path", "required": true, "schema": { "description": "UUID.", "type": "string", "example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415", "maxLength": 36, "x-ref": "#/components/schemas/cloudforce-one-requests_uuid" }, "index$": 1 }] }, "PUT /accounts/{account_id}/cloudforce-one/requests/priority/{priority_id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "labels": { "description": "List of labels.", "type": "array", "items": { "type": "string" }, "example": ["DoS", "CVE"], "title": "Labels", "x-auditable": true, "x-ref": "#/components/schemas/cloudforce-one-requests_labels", "key$": "labels" }, "priority": { "description": "Priority.", "type": "integer", "example": 1, "x-auditable": true, "key$": "priority" }, "requirement": { "description": "Requirement.", "type": "string", "example": "DoS attacks carried out by CVEs", "x-auditable": true, "key$": "requirement" }, "tlp": { "description": "The CISA defined Traffic Light Protocol (TLP).", "type": "string", "enum": ["clear", "amber", "amber-strict", "green", "red"], "title": "TLP", "x-auditable": true, "x-ref": "#/components/schemas/cloudforce-one-requests_tlp", "key$": "tlp" } }, "required": ["labels", "priority", "requirement", "tlp"], "title": "Priority Editable Attributes", "x-ref": "#/components/schemas/cloudforce-one-requests_priority-edit", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-ref": "#/components/schemas/cloudforce-one-requests_identifier" }, "index$": 0 }, { "name": "priority_id", "in": "path", "required": true, "schema": { "description": "UUID.", "type": "string", "example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415", "maxLength": 36, "x-ref": "#/components/schemas/cloudforce-one-requests_uuid" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const priority_ref01_ent = client.Priority();
        let priority_ref01_data = setup.data.new.priority['priority_ref01'];
        priority_ref01_data['account_id'] = setup.idmap['account01'];
        priority_ref01_data = (await priority_ref01_ent.create(priority_ref01_data)).data();
        (0, node_assert_1.default)(null != priority_ref01_data.id);
        // UPDATE
        const priority_ref01_data_up0 = {};
        priority_ref01_data_up0.id = priority_ref01_data.id;
        priority_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        const priority_ref01_markdef_up0 = { name: 'requirement', value: 'Mark01-priority_ref01_' + setup.now };
        priority_ref01_data_up0[priority_ref01_markdef_up0.name] = priority_ref01_markdef_up0.value;
        const priority_ref01_resdata_up0 = (await priority_ref01_ent.update(priority_ref01_data_up0)).data();
        (0, node_assert_1.default)(priority_ref01_resdata_up0.id === priority_ref01_data_up0.id);
        (0, node_assert_1.default)(priority_ref01_resdata_up0[priority_ref01_markdef_up0.name] === priority_ref01_markdef_up0.value);
        // LOAD
        const priority_ref01_match_dt0 = {};
        priority_ref01_match_dt0.id = priority_ref01_data.id;
        const priority_ref01_data_dt0 = (await priority_ref01_ent.load(priority_ref01_match_dt0)).data();
        (0, node_assert_1.default)(priority_ref01_data_dt0.id === priority_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/priority/PriorityTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareCloudforceOneSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['priority01', 'priority02', 'priority03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_CLOUDFORCE_ONE_TEST_PRIORITY_ENTID': idmap,
        'CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_CLOUDFORCE_ONE_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_PRIORITY_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_PRIORITY_ENTID'];
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
//# sourceMappingURL=PriorityEntity.test.js.map