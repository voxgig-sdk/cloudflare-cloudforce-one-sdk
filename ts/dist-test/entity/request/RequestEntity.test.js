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
(0, node_test_1.describe)('RequestEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareCloudforceOneSDK.test();
        const ent = testsdk.Request();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'request.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "completed_after": { "a": true, "h": "Completed After", "n": "completed_after", "r": false, "sh": "Retrieve requests completed after this time.", "t": "`$ANY`", "key$": "completed_after", "index$": 0 }, "completed_before": { "a": true, "h": "Completed Before", "n": "completed_before", "r": false, "sh": "Retrieve requests completed before this time.", "t": "`$ANY`", "key$": "completed_before", "index$": 1 }, "content": { "a": true, "h": "Content", "n": "content", "r": false, "sh": "Request content.", "t": "`$STRING`", "key$": "content", "index$": 2 }, "created_after": { "a": true, "h": "Created After", "n": "created_after", "r": false, "sh": "Retrieve requests created after this time.", "t": "`$ANY`", "key$": "created_after", "index$": 3 }, "created_before": { "a": true, "h": "Created Before", "n": "created_before", "r": false, "sh": "Retrieve requests created before this time.", "t": "`$ANY`", "key$": "created_before", "index$": 4 }, "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 5 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 6 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 7 }, "page": { "a": true, "h": "Page", "n": "page", "r": true, "sh": "Page number of results.", "t": "`$INTEGER`", "key$": "page", "index$": 8 }, "per_page": { "a": true, "h": "Per Page", "n": "per_page", "r": true, "sh": "Number of results per page.", "t": "`$INTEGER`", "key$": "per_page", "index$": 9 }, "priority": { "a": true, "h": "Priority", "n": "priority", "r": false, "sh": "Priority for analyzing the request.", "t": "`$STRING`", "key$": "priority", "index$": 10 }, "request_type": { "a": true, "h": "Request Type", "n": "request_type", "r": false, "sh": "Requested information from request.", "t": "`$STRING`", "key$": "request_type", "index$": 11 }, "result": { "a": true, "h": "Result", "n": "result", "r": true, "t": "`$OBJECT`", "key$": "result", "index$": 12 }, "sort_by": { "a": true, "h": "Sort By", "n": "sort_by", "r": false, "sh": "Field to sort results by.", "t": "`$STRING`", "key$": "sort_by", "index$": 13 }, "sort_order": { "a": true, "h": "Sort Order", "n": "sort_order", "r": false, "sh": "Sort order (asc or desc).", "t": "`$STRING`", "key$": "sort_order", "index$": 14 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "sh": "Request Status.", "t": "`$STRING`", "key$": "status", "index$": 15 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Whether the API call was successful.", "t": "`$BOOLEAN`", "key$": "success", "index$": 16 }, "summary": { "a": true, "h": "Summary", "n": "summary", "r": false, "sh": "Brief description of the request.", "t": "`$STRING`", "key$": "summary", "index$": 17 }, "tlp": { "a": true, "h": "Tlp", "n": "tlp", "r": false, "sh": "The CISA defined Traffic Light Protocol (TLP).", "t": "`$STRING`", "key$": "tlp", "index$": 18 } }, "id": { "field": "id", "name": "id" }, "name": "request", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/cloudforce-one/requests", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/cloudforce-one/requests", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "requests" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/cloudforce-one/requests/{request_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415", "k": "param", "n": "id", "or": "request_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/cloudforce-one/requests/{request_id}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "request_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "requests" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /accounts/{account_id}/cloudforce-one/requests/{request_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415", "k": "param", "n": "id", "or": "request_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/accounts/{account_id}/cloudforce-one/requests/{request_id}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "request_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "requests" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "request", "name__orig": "request", "Name": "Request", "name_": "request", "name-": "request", "NAME": "REQUEST", "index$": 36 }, { "active": true, "entity": "request", "key$": "BasicRequestFlow", "kind": "basic", "name": "BasicRequestFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "request_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": { "account_id": "account01" }, "i": { "ref": "request_ref01", "srcdatavar": "request_ref01_data", "suffix": "_up0", "textfield": "content" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-request_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "request_ref01", "srcdatavar": "request_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "request01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-request_ref01" } }], "index$": 2 }] }, 'Request', { "POST /accounts/{account_id}/cloudforce-one/requests": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "completed_after": { "description": "Retrieve requests completed after this time.", "example": "2022-01-01T00:00:00Z", "allOf": [{ "type": "string", "format": "date-time", "example": "2022-04-01T05:20:00Z", "x-auditable": true, "x-ref": "#/components/schemas/cloudforce-one-requests_time" }], "key$": "completed_after" }, "completed_before": { "description": "Retrieve requests completed before this time.", "example": "2024-01-01T00:00:00Z", "allOf": [{ "type": "string", "format": "date-time", "example": "2022-04-01T05:20:00Z", "x-auditable": true, "x-ref": "#/components/schemas/cloudforce-one-requests_time" }], "key$": "completed_before" }, "created_after": { "description": "Retrieve requests created after this time.", "example": "2022-01-01T00:00:00Z", "allOf": [{ "type": "string", "format": "date-time", "example": "2022-04-01T05:20:00Z", "x-auditable": true, "x-ref": "#/components/schemas/cloudforce-one-requests_time" }], "key$": "created_after" }, "created_before": { "description": "Retrieve requests created before this time.", "example": "2024-01-01T00:00:00Z", "allOf": [{ "type": "string", "format": "date-time", "example": "2022-04-01T05:20:00Z", "x-auditable": true, "x-ref": "#/components/schemas/cloudforce-one-requests_time" }], "key$": "created_before" }, "page": { "description": "Page number of results.", "type": "integer", "key$": "page" }, "per_page": { "description": "Number of results per page.", "type": "integer", "example": 10, "key$": "per_page" }, "request_type": { "description": "Requested information from request.", "type": "string", "example": "Victomology", "x-auditable": true, "x-ref": "#/components/schemas/cloudforce-one-requests_request-type", "key$": "request_type" }, "sort_by": { "description": "Field to sort results by.", "type": "string", "example": "created", "key$": "sort_by" }, "sort_order": { "description": "Sort order (asc or desc).", "type": "string", "enum": ["asc", "desc"], "key$": "sort_order" }, "status": { "description": "Request Status.", "type": "string", "enum": ["open", "accepted", "reported", "approved", "completed", "declined"], "title": "Request Status", "x-auditable": true, "x-ref": "#/components/schemas/cloudforce-one-requests_request-status", "key$": "status" } }, "required": ["page", "per_page"], "title": "Request List Parameters", "x-ref": "#/components/schemas/cloudforce-one-requests_request-list", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-ref": "#/components/schemas/cloudforce-one-requests_identifier" }, "index$": 0 }] }, "GET /accounts/{account_id}/cloudforce-one/requests/{request_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-ref": "#/components/schemas/cloudforce-one-requests_identifier" }, "index$": 0 }, { "name": "request_id", "in": "path", "required": true, "schema": { "description": "UUID.", "type": "string", "example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415", "maxLength": 36, "x-ref": "#/components/schemas/cloudforce-one-requests_uuid" }, "index$": 1 }] }, "PUT /accounts/{account_id}/cloudforce-one/requests/{request_id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "content": { "description": "Request content.", "type": "string", "example": "What regions were most effected by the recent DoS?", "x-ref": "#/components/schemas/cloudforce-one-requests_request-content", "key$": "content" }, "priority": { "description": "Priority for analyzing the request.", "type": "string", "example": "routine", "x-auditable": true, "key$": "priority" }, "request_type": { "description": "Requested information from request.", "type": "string", "example": "Victomology", "x-auditable": true, "x-ref": "#/components/schemas/cloudforce-one-requests_request-type", "key$": "request_type" }, "summary": { "description": "Brief description of the request.", "type": "string", "example": "DoS attack", "x-auditable": true, "x-ref": "#/components/schemas/cloudforce-one-requests_request-summary", "key$": "summary" }, "tlp": { "description": "The CISA defined Traffic Light Protocol (TLP).", "type": "string", "enum": ["clear", "amber", "amber-strict", "green", "red"], "title": "TLP", "x-auditable": true, "x-ref": "#/components/schemas/cloudforce-one-requests_tlp", "key$": "tlp" } }, "title": "Request Editable Parameters", "x-ref": "#/components/schemas/cloudforce-one-requests_request-edit", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-ref": "#/components/schemas/cloudforce-one-requests_identifier" }, "index$": 0 }, { "name": "request_id", "in": "path", "required": true, "schema": { "description": "UUID.", "type": "string", "example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415", "maxLength": 36, "x-ref": "#/components/schemas/cloudforce-one-requests_uuid" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const request_ref01_ent = client.Request();
        let request_ref01_data = setup.data.new.request['request_ref01'];
        request_ref01_data['account_id'] = setup.idmap['account01'];
        request_ref01_data = (await request_ref01_ent.create(request_ref01_data)).data();
        (0, node_assert_1.default)(null != request_ref01_data.id);
        // UPDATE
        const request_ref01_data_up0 = {};
        request_ref01_data_up0.id = request_ref01_data.id;
        request_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        const request_ref01_markdef_up0 = { name: 'content', value: 'Mark01-request_ref01_' + setup.now };
        request_ref01_data_up0[request_ref01_markdef_up0.name] = request_ref01_markdef_up0.value;
        const request_ref01_resdata_up0 = (await request_ref01_ent.update(request_ref01_data_up0)).data();
        (0, node_assert_1.default)(request_ref01_resdata_up0.id === request_ref01_data_up0.id);
        (0, node_assert_1.default)(request_ref01_resdata_up0[request_ref01_markdef_up0.name] === request_ref01_markdef_up0.value);
        // LOAD
        const request_ref01_match_dt0 = {};
        request_ref01_match_dt0.id = request_ref01_data.id;
        const request_ref01_data_dt0 = (await request_ref01_ent.load(request_ref01_match_dt0)).data();
        (0, node_assert_1.default)(request_ref01_data_dt0.id === request_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/request/RequestTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareCloudforceOneSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['request01', 'request02', 'request03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_CLOUDFORCE_ONE_TEST_REQUEST_ENTID': idmap,
        'CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_CLOUDFORCE_ONE_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_REQUEST_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_REQUEST_ENTID'];
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
//# sourceMappingURL=RequestEntity.test.js.map