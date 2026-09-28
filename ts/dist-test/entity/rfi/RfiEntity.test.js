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
(0, node_test_1.describe)('RfiEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareCloudforceOneSDK.test();
        const ent = testsdk.Rfi();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'rfi.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "account": { "a": true, "h": "Account", "n": "account", "r": true, "t": "`$OBJECT`", "key$": "account", "index$": 0 }, "assignee": { "a": true, "h": "Assignee", "n": "assignee", "r": true, "sh": "Assignee email", "t": "`$STRING`", "key$": "assignee", "index$": 1 }, "completed": { "a": true, "fo": "date-time", "h": "Completed", "n": "completed", "r": true, "sh": "Completion timestamp", "t": "`$STRING`", "key$": "completed", "index$": 2 }, "created": { "a": true, "fo": "date-time", "h": "Created", "n": "created", "r": true, "sh": "Creation timestamp", "t": "`$STRING`", "key$": "created", "index$": 3 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "RFI description (optional).", "t": "`$STRING`", "key$": "description", "index$": 4 }, "eventId": { "a": true, "h": "Event Id", "n": "eventId", "r": false, "sh": "Optional related event ID", "t": "`$STRING`", "key$": "eventId", "index$": 5 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "RFI UUID", "t": "`$STRING`", "key$": "id", "index$": 6 }, "investigation_id": { "a": true, "h": "Investigation Id", "n": "investigation_id", "r": true, "sh": "Investigation UUID", "t": "`$STRING`", "key$": "investigation_id", "index$": 7 }, "is_free_request": { "a": true, "h": "Is Free Request", "n": "is_free_request", "r": true, "sh": "Whether this is a free request", "t": "`$BOOLEAN`", "key$": "is_free_request", "index$": 8 }, "message_tokens": { "a": true, "h": "Message Tokens", "n": "message_tokens", "r": true, "sh": "Total message tokens", "t": "`$NUMBER`", "key$": "message_tokens", "index$": 9 }, "metadata": { "a": true, "h": "Metadata", "n": "metadata", "r": false, "sh": "Optional metadata fields specific to the RFI type", "t": "`$OBJECT`", "key$": "metadata", "index$": 10 }, "pagination": { "a": true, "h": "Pagination", "n": "pagination", "r": true, "t": "`$OBJECT`", "key$": "pagination", "index$": 11 }, "priority": { "a": true, "h": "Priority", "n": "priority", "op": { "create": { "req": false, "type": "`$STRING`" }, "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "Request priority", "t": "`$STRING`", "key$": "priority", "index$": 12 }, "readable_id": { "a": true, "h": "Readable Id", "n": "readable_id", "r": true, "sh": "Human-readable ID", "t": "`$STRING`", "key$": "readable_id", "index$": 13 }, "release_entitlements": { "a": true, "h": "Release Entitlements", "n": "release_entitlements", "r": true, "sh": "Release entitlements", "t": "`$STRING`", "key$": "release_entitlements", "index$": 14 }, "report_id": { "a": true, "h": "Report Id", "n": "report_id", "r": true, "sh": "Report UUID", "t": "`$STRING`", "key$": "report_id", "index$": 15 }, "request": { "a": true, "h": "Request", "n": "request", "r": true, "t": "`$OBJECT`", "key$": "request", "index$": 16 }, "request_type": { "a": true, "h": "Request Type", "n": "request_type", "r": false, "sh": "Optional request type for the request", "t": "`$STRING`", "key$": "request_type", "index$": 17 }, "result": { "a": true, "h": "Result", "n": "result", "r": true, "t": "`$ARRAY`", "key$": "result", "index$": 18 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "RFI status.", "t": "`$STRING`", "key$": "status", "index$": 19 }, "subtypeId": { "a": true, "h": "Subtype Id", "n": "subtypeId", "r": false, "sh": "Optional subtype ID", "t": "`$STRING`", "key$": "subtypeId", "index$": 20 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "t": "`$STRING`", "key$": "success", "index$": 21 }, "summary": { "a": true, "h": "Summary", "n": "summary", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "RFI summary", "t": "`$STRING`", "key$": "summary", "index$": 22 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "sh": "RFI title (optional).", "t": "`$STRING`", "key$": "title", "index$": 23 }, "tlp": { "a": true, "h": "Tlp", "n": "tlp", "op": { "create": { "req": false, "type": "`$STRING`" }, "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "TLP classification", "t": "`$STRING`", "key$": "tlp", "index$": 24 }, "tokens": { "a": true, "h": "Tokens", "n": "tokens", "r": true, "sh": "Total tokens used", "t": "`$NUMBER`", "key$": "tokens", "index$": 25 }, "updated": { "a": true, "fo": "date-time", "h": "Updated", "n": "updated", "r": true, "sh": "Last update timestamp", "t": "`$STRING`", "key$": "updated", "index$": 26 } }, "id": { "field": "id", "name": "id", "parts": ["project_type", "request_id"], "sep": "/" }, "name": "rfi", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "threat-intelligence", "k": "param", "n": "project_type", "or": "project_type", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/cloudforce-one/v2/requests/{project_type}", "q": { "exist": ["account_id", "project_type"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "v2" }, { "lit": "requests" }, { "var": "project_type" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "threat-intelligence", "k": "param", "n": "project_type", "or": "project_type", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "account_id", "or": "account_id", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "assignee", "or": "assignee", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "created_by", "or": "created_by", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "id", "or": "id", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "metadata", "or": "metadata", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "query", "n": "order", "or": "order", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "query", "n": "order_by", "or": "order_by", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$NUMBER`", "index$": 7 }, { "a": true, "k": "query", "n": "page_size", "or": "page_size", "r": false, "t": "`$NUMBER`", "index$": 8 }, { "a": true, "k": "query", "n": "priority", "or": "priority", "r": false, "t": "`$STRING`", "index$": 9 }, { "a": true, "k": "query", "n": "readable_id", "or": "readable_id", "r": false, "t": "`$STRING`", "index$": 10 }, { "a": true, "k": "query", "n": "request_type", "or": "request_type", "r": false, "t": "`$STRING`", "index$": 11 }, { "a": true, "k": "query", "n": "search", "or": "search", "r": false, "t": "`$STRING`", "index$": 12 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$STRING`", "index$": 13 }, { "a": true, "k": "query", "n": "summary", "or": "summary", "r": false, "t": "`$STRING`", "index$": 14 }, { "a": true, "k": "query", "n": "tlp", "or": "tlp", "r": false, "t": "`$STRING`", "index$": 15 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/cloudforce-one/v2/requests/{project_type}", "q": { "exist": ["account_id", "assignee", "created_by", "id", "metadata", "order", "order_by", "page", "page_size", "priority", "project_type", "readable_id", "request_type", "search", "status", "summary", "tlp"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "v2" }, { "lit": "requests" }, { "var": "project_type" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "threat-intelligence", "k": "param", "n": "project_type", "or": "project_type", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "request_id", "or": "request_id", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}", "q": { "exist": ["account_id", "project_type", "request_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "v2" }, { "lit": "requests" }, { "var": "project_type" }, { "var": "request_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "threat-intelligence", "k": "param", "n": "project_type", "or": "project_type", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "request_id", "or": "request_id", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "PUT", "o": "/accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}", "q": { "exist": ["account_id", "project_type", "request_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "v2" }, { "lit": "requests" }, { "var": "project_type" }, { "var": "request_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.request"]] }, "key$": "rfi", "name__orig": "rfi", "Name": "Rfi", "name_": "rfi", "name-": "rfi", "NAME": "RFI", "index$": 39 }, { "active": true, "entity": "rfi", "key$": "BasicRfiFlow", "kind": "basic", "name": "BasicRfiFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "rfi_ref01" }, "m": { "account_id": "account01", "project_type": "project_type01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": { "account_id": "account01", "project_type": "project_type01" }, "i": { "ref": "rfi_ref01", "srcdatavar": "rfi_ref01_data", "suffix": "_up0", "textfield": "assignee" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-rfi_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "rfi_ref01", "srcdatavar": "rfi_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "rfi01", "project_type": "project_type01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-rfi_ref01" } }], "index$": 2 }] }, 'Rfi', { "POST /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "description": { "description": "RFI description (optional). Defaults to an empty string when omitted.", "type": "string", "example": "We need analysis of domain patterns observed in recent security events", "key$": "description" }, "eventId": { "description": "Optional related event ID", "type": "string", "example": "event-456", "nullable": true, "key$": "eventId" }, "metadata": { "description": "Optional metadata fields specific to the RFI type", "type": "object", "additionalProperties": true, "key$": "metadata" }, "priority": { "description": "RFI priority. Four-level projects use `low`, `routine`, `high`, `urgent`; existing projects retain legacy `low`->routine compatibility. `medium`, `critical`, and `unknown` remain accepted legacy aliases. Defaults to `routine`.", "type": "string", "example": "routine", "enum": ["low", "routine", "high", "urgent", "unknown", "medium", "critical"], "key$": "priority" }, "request_type": { "description": "Optional request type for the request", "type": "string", "nullable": true, "key$": "request_type" }, "subtypeId": { "description": "Optional subtype ID", "type": "string", "example": "subtype-123", "nullable": true, "key$": "subtypeId" }, "title": { "description": "RFI title (optional). When omitted, the server generates a summary from the request type and readable ID.", "type": "string", "example": "Investigation into suspicious domain activity", "key$": "title" }, "tlp": { "description": "Traffic Light Protocol level. Canonical values are `clear`, `green`, `amber`, `amber-strict`, `red`, `purple`. `white` and `amber+strict` are accepted input aliases; responses always use the canonical spelling.", "type": "string", "example": "amber", "enum": ["clear", "green", "amber", "amber-strict", "red", "purple", "white", "amber+strict"], "key$": "tlp" } }, "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "description": "Account ID.", "required": true, "schema": { "description": "Account ID.", "type": "string" }, "index$": 0 }, { "name": "project_type", "in": "path", "description": "RFI project type", "required": true, "schema": { "description": "RFI project type", "type": "string", "example": "threat-intelligence", "enum": ["threat-intelligence", "incident-response", "ir-emergency-response", "table-top", "pentest", "irp", "threat-hunting", "cybersecurity-assessment", "react-general", "legal-response", "soc-alerts", "demo"] }, "index$": 1 }] }, "GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "description": "Account ID.", "required": true, "schema": { "description": "Account ID.", "type": "string" }, "index$": 0 }, { "name": "project_type", "in": "path", "description": "RFI project type", "required": true, "schema": { "description": "RFI project type", "type": "string", "example": "threat-intelligence", "enum": ["threat-intelligence", "incident-response", "ir-emergency-response", "table-top", "pentest", "irp", "threat-hunting", "cybersecurity-assessment", "react-general", "legal-response", "soc-alerts", "demo"] }, "index$": 1 }, { "name": "page", "in": "query", "schema": { "type": "number" }, "index$": 2 }, { "name": "pageSize", "in": "query", "schema": { "type": "number" }, "index$": 3 }, { "name": "status", "in": "query", "description": "Status filter. Projects with a narrowed dashboard vocabulary accept only their customer-facing values.", "schema": { "description": "Status filter. Projects with a narrowed dashboard vocabulary accept only their customer-facing values.", "type": "string" }, "index$": 4 }, { "name": "search", "in": "query", "schema": { "type": "string" }, "index$": 5 }, { "name": "createdBy", "in": "query", "description": "Filter by creator email. NOTE: For the `legal-response` project type this query parameter is **rejected with HTTP 400** — the server derives the filter from the authenticated user's JWT automatically and does not accept a client-supplied value. Requests to `legal-response` with no valid JWT identity are rejected with HTTP 401.", "schema": { "description": "Filter by creator email. NOTE: For the `legal-response` project type this query parameter is **rejected with HTTP 400** — the server derives the filter from the authenticated user's JWT automatically and does not accept a client-supplied value. Requests to `legal-response` with no valid JWT identity are rejected with HTTP 401.", "type": "string" }, "index$": 6 }, { "name": "assignee", "in": "query", "schema": { "type": "string" }, "index$": 7 }, { "name": "requestType", "in": "query", "schema": { "type": "string" }, "index$": 8 }, { "name": "priority", "in": "query", "schema": { "type": "string" }, "index$": 9 }, { "name": "tlp", "in": "query", "schema": { "type": "string" }, "index$": 10 }, { "name": "id", "in": "query", "schema": { "type": "string" }, "index$": 11 }, { "name": "readableId", "in": "query", "schema": { "type": "string" }, "index$": 12 }, { "name": "summary", "in": "query", "schema": { "type": "string" }, "index$": 13 }, { "name": "accountId", "in": "query", "schema": { "type": "string" }, "x-fern-parameter-name": "filterAccountId", "index$": 14 }, { "name": "metadata", "in": "query", "description": "JSON string object of metadata filters. Supports two formats: 1) Simple values for exact match (backward compatible): {\"status\": \"open\"} 2) Operator objects for advanced filtering: {\"identifiers\": {\"operator\": \"contains_line\", \"value\": \"blah.com\"}}. Available operators: 'eq' (exact match, default), 'contains' (substring match), 'contains_line' (match complete line in newline-separated text). Date fields are automatically normalized to YYYY-MM-DD format.", "schema": { "description": "JSON string object of metadata filters. Supports two formats: 1) Simple values for exact match (backward compatible): {\"status\": \"open\"} 2) Operator objects for advanced filtering: {\"identifiers\": {\"operator\": \"contains_line\", \"value\": \"blah.com\"}}. Available operators: 'eq' (exact match, default), 'contains' (substring match), 'contains_line' (match complete line in newline-separated text). Date fields are automatically normalized to YYYY-MM-DD format.", "type": "string" }, "index$": 15 }, { "name": "orderBy", "in": "query", "schema": { "type": "string" }, "index$": 16 }, { "name": "order", "in": "query", "schema": { "type": "string" }, "index$": 17 }] }, "GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "description": "Account ID.", "required": true, "schema": { "description": "Account ID.", "type": "string" }, "index$": 0 }, { "name": "project_type", "in": "path", "description": "RFI project type. Valid values: threat-intelligence, incident-response, ir-emergency-response, table-top, pentest, irp, threat-hunting, cybersecurity-assessment, react-general, legal-response, soc-alerts, demo", "required": true, "schema": { "description": "RFI project type. Valid values: threat-intelligence, incident-response, ir-emergency-response, table-top, pentest, irp, threat-hunting, cybersecurity-assessment, react-general, legal-response, soc-alerts, demo", "type": "string", "example": "threat-intelligence", "enum": ["threat-intelligence", "incident-response", "ir-emergency-response", "table-top", "pentest", "irp", "threat-hunting", "cybersecurity-assessment", "react-general", "legal-response", "soc-alerts", "demo"] }, "index$": 1 }, { "name": "request_id", "in": "path", "description": "RFI UUID", "required": true, "schema": { "description": "RFI UUID", "type": "string" }, "index$": 2 }] }, "PUT /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "description": { "description": "RFI description", "type": "string", "key$": "description" }, "eventId": { "description": "Optional related event ID", "type": "string", "key$": "eventId" }, "priority": { "description": "RFI priority. Four-level projects use a distinct `low` level; existing projects retain legacy `low`->routine compatibility. `medium`, `critical`, and `unknown` remain accepted legacy aliases.", "type": "string", "enum": ["low", "routine", "high", "urgent", "unknown", "medium", "critical"], "key$": "priority" }, "request_type": { "description": "Request type. May only be changed while the request is still open; changing it recalculates the request's token cost.", "type": "string", "key$": "request_type" }, "subtypeId": { "description": "Optional subtype ID", "type": "string", "key$": "subtypeId" }, "summary": { "description": "RFI summary", "type": "string", "key$": "summary" }, "title": { "description": "RFI title (alias for summary field)", "type": "string", "key$": "title" }, "tlp": { "description": "Traffic Light Protocol level. `white` and `amber+strict` are accepted input aliases; responses always use the canonical spelling.", "type": "string", "enum": ["clear", "green", "amber", "amber-strict", "red", "purple", "white", "amber+strict"], "key$": "tlp" } }, "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "description": "Account ID.", "required": true, "schema": { "description": "Account ID.", "type": "string" }, "index$": 0 }, { "name": "project_type", "in": "path", "description": "RFI project type. Valid values: threat-intelligence, incident-response, ir-emergency-response, table-top, pentest, irp, threat-hunting, cybersecurity-assessment, react-general, legal-response, soc-alerts, demo", "required": true, "schema": { "description": "RFI project type. Valid values: threat-intelligence, incident-response, ir-emergency-response, table-top, pentest, irp, threat-hunting, cybersecurity-assessment, react-general, legal-response, soc-alerts, demo", "type": "string", "example": "threat-intelligence", "enum": ["threat-intelligence", "incident-response", "ir-emergency-response", "table-top", "pentest", "irp", "threat-hunting", "cybersecurity-assessment", "react-general", "legal-response", "soc-alerts", "demo"] }, "index$": 1 }, { "name": "request_id", "in": "path", "description": "RFI UUID", "required": true, "schema": { "description": "RFI UUID", "type": "string" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const rfi_ref01_ent = client.Rfi();
        let rfi_ref01_data = setup.data.new.rfi['rfi_ref01'];
        rfi_ref01_data['account_id'] = setup.idmap['account01'];
        rfi_ref01_data['project_type'] = setup.idmap['project_type01'];
        rfi_ref01_data = (await rfi_ref01_ent.create(rfi_ref01_data)).data();
        (0, node_assert_1.default)(null != rfi_ref01_data.id);
        // UPDATE
        const rfi_ref01_data_up0 = {};
        rfi_ref01_data_up0.id = rfi_ref01_data.id;
        rfi_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        rfi_ref01_data_up0['project_type'] = setup.idmap['project_type'];
        const rfi_ref01_markdef_up0 = { name: 'assignee', value: 'Mark01-rfi_ref01_' + setup.now };
        rfi_ref01_data_up0[rfi_ref01_markdef_up0.name] = rfi_ref01_markdef_up0.value;
        const rfi_ref01_resdata_up0 = (await rfi_ref01_ent.update(rfi_ref01_data_up0)).data();
        (0, node_assert_1.default)(rfi_ref01_resdata_up0.id === rfi_ref01_data_up0.id);
        (0, node_assert_1.default)(rfi_ref01_resdata_up0[rfi_ref01_markdef_up0.name] === rfi_ref01_markdef_up0.value);
        // LOAD
        const rfi_ref01_match_dt0 = {};
        rfi_ref01_match_dt0.id = rfi_ref01_data.id;
        const rfi_ref01_data_dt0 = (await rfi_ref01_ent.load(rfi_ref01_match_dt0)).data();
        (0, node_assert_1.default)(rfi_ref01_data_dt0.id === rfi_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/rfi/RfiTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareCloudforceOneSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['rfi01', 'rfi02', 'rfi03', 'request01', 'request02', 'request03', 'account01', 'project_type01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_CLOUDFORCE_ONE_TEST_RFI_ENTID': idmap,
        'CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_CLOUDFORCE_ONE_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_RFI_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_RFI_ENTID'];
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
//# sourceMappingURL=RfiEntity.test.js.map