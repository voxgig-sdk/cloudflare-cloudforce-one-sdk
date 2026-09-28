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
(0, node_test_1.describe)('ScanEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareCloudforceOneSDK.test();
        const ent = testsdk.Scan();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'scan.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 0 }, "frequency": { "a": true, "h": "Frequency", "n": "frequency", "r": false, "sh": "Defines the number of days between each scan (0 = One-off scan).", "t": "`$NUMBER`", "key$": "frequency", "index$": 1 }, "ips": { "a": true, "h": "Ips", "n": "ips", "r": false, "sh": "Defines a list of IP addresses or CIDR blocks to scan.", "t": "`$ARRAY`", "key$": "ips", "index$": 2 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 3 }, "ports": { "a": true, "h": "Ports", "n": "ports", "r": false, "sh": "Defines a list of ports to scan.", "t": "`$ARRAY`", "key$": "ports", "index$": 4 }, "result": { "a": true, "h": "Result", "n": "result", "r": true, "t": "`$OBJECT`", "key$": "result", "index$": 5 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "t": "`$BOOLEAN`", "key$": "success", "index$": 6 } }, "name": "scan", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/cloudforce-one/scans/config", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/cloudforce-one/scans/config", "q": { "$action": "config", "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "scans" }, { "lit": "config" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/cloudforce-one/scans/config", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/cloudforce-one/scans/config", "q": { "$action": "config", "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "scans" }, { "lit": "config" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/cloudforce-one/banner/{config_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "config_id", "or": "config_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/cloudforce-one/banner/{config_id}", "q": { "exist": ["account_id", "config_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "banner" }, { "var": "config_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /accounts/{account_id}/cloudforce-one/scans/results/{config_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "config_id", "or": "config_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/cloudforce-one/scans/results/{config_id}", "q": { "exist": ["account_id", "config_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "scans" }, { "lit": "results" }, { "var": "config_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /accounts/{account_id}/cloudforce-one/scans/config/{config_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "config_id", "or": "config_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/cloudforce-one/scans/config/{config_id}", "q": { "exist": ["account_id", "config_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "scans" }, { "lit": "config" }, { "var": "config_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /accounts/{account_id}/cloudforce-one/scans/config/{config_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "config_id", "or": "config_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PATCH", "o": "/accounts/{account_id}/cloudforce-one/scans/config/{config_id}", "q": { "exist": ["account_id", "config_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "scans" }, { "lit": "config" }, { "var": "config_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "scan", "name__orig": "scan", "Name": "Scan", "name_": "scan", "name-": "scan", "NAME": "SCAN", "index$": 42 }, { "active": true, "entity": "scan", "key$": "BasicScanFlow", "kind": "basic", "name": "BasicScanFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "scan_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "scan_ref01" } }], "index$": 1 }, { "a": true, "d": { "account_id": "account01" }, "i": { "ref": "scan_ref01", "srcdatavar": "scan_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-scan_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "scan_ref01", "srcdatavar": "scan_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "scan01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-scan_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "scan_ref01", "suffix": "_rm0" }, "m": { "account_id": "account01", "id": "scan01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "scan_ref01" } }], "index$": 5 }] }, 'Scan', { "POST /accounts/{account_id}/cloudforce-one/scans/config": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "frequency": { "description": "Defines the number of days between each scan (0 = One-off scan).", "type": "number", "example": 7, "title": "Frequency", "x-ref": "#/components/schemas/cloudforce-one-port-scan-api_frequency" }, "ips": { "description": "Defines a list of IP addresses or CIDR blocks to scan. The maximum number of total IP addresses allowed is 5000.", "type": "array", "items": { "description": "Defines a list of IP addresses or CIDR blocks to scan. The maximum number of total IP addresses allowed is 5000.", "type": "string" }, "example": ["1.1.1.1", "2606:4700:4700::1111"], "title": "IP List", "x-ref": "#/components/schemas/cloudforce-one-port-scan-api_ips" }, "ports": { "description": "Defines a list of ports to scan. Valid values are:\"default\", \"all\", or a comma-separated list of ports or range of ports (e.g. [\"1-80\", \"443\"]). \"default\" scans the 100 most commonly open ports.", "type": "array", "items": { "description": "Defines a list of ports to scan. Valid values are:\"default\", \"all\", or a comma-separated list of ports or range of ports (e.g. [\"1-80\", \"443\"]). \"default\" scans the 100 most commonly open ports.", "type": "string" }, "example": ["default"], "title": "Port List", "x-ref": "#/components/schemas/cloudforce-one-port-scan-api_ports" } }, "required": ["ips"] } } } }, "parameters": [{ "name": "account_id", "in": "path", "description": "Defines the Account ID.", "required": true, "schema": { "description": "Defines the Account ID.", "type": "string" }, "index$": 0 }] }, "GET /accounts/{account_id}/cloudforce-one/scans/config": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "description": "Defines the Account ID.", "required": true, "schema": { "description": "Defines the Account ID.", "type": "string" }, "index$": 0 }] }, "GET /accounts/{account_id}/cloudforce-one/banner/{config_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "description": "Defines the Account ID.", "required": true, "schema": { "description": "Defines the Account ID.", "type": "string" }, "index$": 0 }, { "name": "config_id", "in": "path", "description": "Defines the Config ID.", "required": true, "schema": { "description": "Defines the Config ID.", "type": "string" }, "index$": 1 }] }, "GET /accounts/{account_id}/cloudforce-one/scans/results/{config_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "description": "Defines the Account ID.", "required": true, "schema": { "description": "Defines the Account ID.", "type": "string" }, "index$": 0 }, { "name": "config_id", "in": "path", "description": "Defines the Config ID.", "required": true, "schema": { "description": "Defines the Config ID.", "type": "string" }, "index$": 1 }] }, "DELETE /accounts/{account_id}/cloudforce-one/scans/config/{config_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "description": "Defines the Account ID.", "required": true, "schema": { "description": "Defines the Account ID.", "type": "string" }, "index$": 0 }, { "name": "config_id", "in": "path", "description": "Defines the Config ID.", "required": true, "schema": { "description": "Defines the Config ID.", "type": "string" }, "index$": 1 }] }, "PATCH /accounts/{account_id}/cloudforce-one/scans/config/{config_id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "frequency": { "description": "Defines the number of days between each scan (0 = One-off scan).", "type": "number", "example": 7, "title": "Frequency", "x-ref": "#/components/schemas/cloudforce-one-port-scan-api_frequency", "key$": "frequency" }, "ips": { "description": "Defines a list of IP addresses or CIDR blocks to scan. The maximum number of total IP addresses allowed is 5000.", "type": "array", "items": { "description": "Defines a list of IP addresses or CIDR blocks to scan. The maximum number of total IP addresses allowed is 5000.", "type": "string" }, "example": ["1.1.1.1", "2606:4700:4700::1111"], "title": "IP List", "x-ref": "#/components/schemas/cloudforce-one-port-scan-api_ips", "key$": "ips" }, "ports": { "description": "Defines a list of ports to scan. Valid values are:\"default\", \"all\", or a comma-separated list of ports or range of ports (e.g. [\"1-80\", \"443\"]). \"default\" scans the 100 most commonly open ports.", "type": "array", "items": { "description": "Defines a list of ports to scan. Valid values are:\"default\", \"all\", or a comma-separated list of ports or range of ports (e.g. [\"1-80\", \"443\"]). \"default\" scans the 100 most commonly open ports.", "type": "string" }, "example": ["default"], "title": "Port List", "x-ref": "#/components/schemas/cloudforce-one-port-scan-api_ports", "key$": "ports" } }, "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "description": "Defines the Account ID.", "required": true, "schema": { "description": "Defines the Account ID.", "type": "string" }, "index$": 0 }, { "name": "config_id", "in": "path", "description": "Defines the Config ID.", "required": true, "schema": { "description": "Defines the Config ID.", "type": "string" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const scan_ref01_ent = client.Scan();
        let scan_ref01_data = setup.data.new.scan['scan_ref01'];
        scan_ref01_data['account_id'] = setup.idmap['account01'];
        scan_ref01_data = (await scan_ref01_ent.create(scan_ref01_data)).data();
        (0, node_assert_1.default)(null != scan_ref01_data);
        // LIST
        const scan_ref01_match = {};
        scan_ref01_match['account_id'] = setup.idmap['account01'];
        const scan_ref01_list = (await scan_ref01_ent.list(scan_ref01_match)).map((e) => e.data());
        // UPDATE
        const scan_ref01_data_up0 = {};
        scan_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        const scan_ref01_resdata_up0 = (await scan_ref01_ent.update(scan_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != scan_ref01_resdata_up0);
        // LIST
        const scan_ref01_match_rt0 = {};
        scan_ref01_match_rt0['account_id'] = setup.idmap['account01'];
        const scan_ref01_list_rt0 = (await scan_ref01_ent.list(scan_ref01_match_rt0)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/scan/ScanTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareCloudforceOneSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['scan01', 'scan02', 'scan03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_CLOUDFORCE_ONE_TEST_SCAN_ENTID': idmap,
        'CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_CLOUDFORCE_ONE_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_SCAN_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_SCAN_ENTID'];
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
//# sourceMappingURL=ScanEntity.test.js.map