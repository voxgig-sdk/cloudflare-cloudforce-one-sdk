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
(0, node_test_1.describe)('PriorityIntelligenceRequirementEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareCloudforceOneSDK.test();
        const ent = testsdk.PriorityIntelligenceRequirement();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE;
        for (const op of ['create', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'priority_intelligence_requirement.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "as_of": { "a": true, "fo": "date-time", "h": "As Of", "n": "as_of", "r": false, "t": "`$STRING`", "key$": "as_of", "index$": 0 }, "backtest_days": { "a": true, "h": "Backtest Days", "n": "backtest_days", "r": false, "t": "`$INTEGER`", "key$": "backtest_days", "index$": 1 }, "candidate_limit": { "a": true, "h": "Candidate Limit", "n": "candidate_limit", "r": false, "t": "`$INTEGER`", "key$": "candidate_limit", "index$": 2 }, "dataset_ids": { "a": true, "h": "Dataset Ids", "n": "dataset_ids", "r": false, "t": "`$ARRAY`", "key$": "dataset_ids", "index$": 3 }, "dimension": { "a": true, "h": "Dimension", "n": "dimension", "r": true, "t": "`$STRING`", "key$": "dimension", "index$": 4 }, "emerging_min_current_count": { "a": true, "h": "Emerging Min Current Count", "n": "emerging_min_current_count", "r": false, "t": "`$INTEGER`", "key$": "emerging_min_current_count", "index$": 5 }, "enabled": { "a": true, "h": "Enabled", "n": "enabled", "r": false, "t": "`$BOOLEAN`", "key$": "enabled", "index$": 6 }, "established_min_absolute_delta": { "a": true, "h": "Established Min Absolute Delta", "n": "established_min_absolute_delta", "r": false, "t": "`$INTEGER`", "key$": "established_min_absolute_delta", "index$": 7 }, "established_min_prior_count": { "a": true, "h": "Established Min Prior Count", "n": "established_min_prior_count", "r": false, "t": "`$INTEGER`", "key$": "established_min_prior_count", "index$": 8 }, "established_min_relative_delta": { "a": true, "h": "Established Min Relative Delta", "n": "established_min_relative_delta", "r": false, "t": "`$NUMBER`", "key$": "established_min_relative_delta", "index$": 9 }, "value": { "a": true, "h": "Value", "n": "value", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "t": "`$STRING`", "key$": "value", "index$": 10 }, "window_days": { "a": true, "h": "Window Days", "n": "window_days", "r": false, "t": "`$INTEGER`", "key$": "window_days", "index$": 11 } }, "name": "priority_intelligence_requirement", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "v2" }, { "lit": "priority-intelligence" }, { "lit": "interests" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests/backtests", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests/backtests", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "v2" }, { "lit": "priority-intelligence" }, { "lit": "interests" }, { "lit": "backtests" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests/evaluations", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests/evaluations", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "v2" }, { "lit": "priority-intelligence" }, { "lit": "interests" }, { "lit": "evaluations" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "POST /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/quota", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/cloudforce-one/v2/priority-intelligence/quota", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "v2" }, { "lit": "priority-intelligence" }, { "lit": "quota" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "enabled", "or": "enabled", "r": false, "t": "`$BOOLEAN`", "index$": 0 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests", "q": { "exist": ["account_id", "enabled", "page", "per_page"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "v2" }, { "lit": "priority-intelligence" }, { "lit": "interests" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests/backtests/{backtest_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "backtest_id", "or": "backtest_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests/backtests/{backtest_id}", "q": { "exist": ["account_id", "backtest_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "v2" }, { "lit": "priority-intelligence" }, { "lit": "interests" }, { "lit": "backtests" }, { "var": "backtest_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests/evaluations/{evaluation_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "evaluation_id", "or": "evaluation_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests/evaluations/{evaluation_id}", "q": { "exist": ["account_id", "evaluation_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "v2" }, { "lit": "priority-intelligence" }, { "lit": "interests" }, { "lit": "evaluations" }, { "var": "evaluation_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "GET /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/constants", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/cloudforce-one/v2/priority-intelligence/constants", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "v2" }, { "lit": "priority-intelligence" }, { "lit": "constants" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests/{interest_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "interest_id", "or": "interest_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests/{interest_id}", "q": { "exist": ["account_id", "interest_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "v2" }, { "lit": "priority-intelligence" }, { "lit": "interests" }, { "var": "interest_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests/{interest_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "interest_id", "or": "interest_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PATCH", "o": "/accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests/{interest_id}", "q": { "exist": ["account_id", "interest_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cloudforce-one" }, { "lit": "v2" }, { "lit": "priority-intelligence" }, { "lit": "interests" }, { "var": "interest_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "priority_intelligence_requirement", "name__orig": "priority_intelligence_requirement", "Name": "PriorityIntelligenceRequirement", "name_": "priority_intelligence_requirement", "name-": "priority-intelligence-requirement", "NAME": "PRIORITY_INTELLIGENCE_REQUIREMENT", "index$": 33 }, { "active": true, "entity": "priority_intelligence_requirement", "key$": "BasicPriorityIntelligenceRequirementFlow", "kind": "basic", "name": "BasicPriorityIntelligenceRequirementFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "priority_intelligence_requirement_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": { "account_id": "account01" }, "i": { "ref": "priority_intelligence_requirement_ref01", "srcdatavar": "priority_intelligence_requirement_ref01_data", "suffix": "_up0", "textfield": "as_of" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-priority_intelligence_requirement_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "priority_intelligence_requirement_ref01", "srcdatavar": "priority_intelligence_requirement_ref01_data", "suffix": "_dt0" }, "m": { "id": "priority_intelligence_requirement01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-priority_intelligence_requirement_ref01" } }], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "priority_intelligence_requirement_ref01", "suffix": "_rm0" }, "m": { "account_id": "account01", "id": "priority_intelligence_requirement01" }, "o": "remove", "s": [], "v": [], "index$": 3 }] }, 'PriorityIntelligenceRequirement', { "POST /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "dimension": { "type": "string", "enum": ["actor", "targetIndustry", "category", "country", "attackerCountry", "targetCountry", "mitreAttack", "killChain", "mitreCapec"], "key$": "dimension" }, "enabled": { "type": "boolean", "default": true, "key$": "enabled" }, "value": { "type": "string", "maxLength": 255, "minLength": 1, "key$": "value" } }, "required": ["dimension", "value"], "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account ID", "type": "string", "minLength": 1 }, "index$": 0 }] }, "POST /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests/backtests": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "as_of": { "type": "string", "format": "date-time", "key$": "as_of" }, "backtest_days": { "type": "integer", "default": 30, "maximum": 90, "minimum": 1, "key$": "backtest_days" }, "candidate_limit": { "type": "integer", "maximum": 100, "minimum": 1, "key$": "candidate_limit" }, "dataset_ids": { "type": "array", "items": { "minLength": 1, "type": "string" }, "maxItems": 50, "minItems": 1, "key$": "dataset_ids" }, "emerging_min_current_count": { "type": "integer", "maximum": 100000, "minimum": 1, "key$": "emerging_min_current_count" }, "established_min_absolute_delta": { "type": "integer", "maximum": 100000, "minimum": 1, "key$": "established_min_absolute_delta" }, "established_min_prior_count": { "type": "integer", "maximum": 100000, "minimum": 1, "key$": "established_min_prior_count" }, "established_min_relative_delta": { "type": "number", "maximum": 100, "minimum": 0, "nullable": true, "key$": "established_min_relative_delta" }, "window_days": { "type": "integer", "default": 7, "maximum": 30, "minimum": 1, "key$": "window_days" } }, "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account ID", "type": "string", "minLength": 1 }, "index$": 0 }] }, "POST /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests/evaluations": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "as_of": { "type": "string", "format": "date-time", "key$": "as_of" }, "candidate_limit": { "type": "integer", "maximum": 100, "minimum": 1, "key$": "candidate_limit" }, "dataset_ids": { "type": "array", "items": { "minLength": 1, "type": "string" }, "maxItems": 50, "minItems": 1, "key$": "dataset_ids" }, "emerging_min_current_count": { "type": "integer", "maximum": 100000, "minimum": 1, "key$": "emerging_min_current_count" }, "established_min_absolute_delta": { "type": "integer", "maximum": 100000, "minimum": 1, "key$": "established_min_absolute_delta" }, "established_min_prior_count": { "type": "integer", "maximum": 100000, "minimum": 1, "key$": "established_min_prior_count" }, "established_min_relative_delta": { "type": "number", "maximum": 100, "minimum": 0, "nullable": true, "key$": "established_min_relative_delta" }, "window_days": { "type": "integer", "default": 7, "maximum": 30, "minimum": 1, "key$": "window_days" } }, "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account ID", "type": "string", "minLength": 1 }, "index$": 0 }] }, "POST /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/quota": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string", "minLength": 1 }, "index$": 0 }] }, "GET /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account ID", "type": "string", "minLength": 1 }, "index$": 0 }, { "name": "page", "in": "query", "schema": { "type": "integer", "default": 1, "minimum": 1 }, "index$": 1 }, { "name": "per_page", "in": "query", "schema": { "type": "integer", "default": 20, "maximum": 100, "minimum": 1 }, "index$": 2 }, { "name": "enabled", "in": "query", "schema": { "type": "string", "enum": ["true", "false"] }, "index$": 3 }] }, "GET /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests/backtests/{backtest_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account ID", "type": "string", "minLength": 1 }, "index$": 0 }, { "name": "backtest_id", "in": "path", "required": true, "schema": { "description": "Backtest UUID", "type": "string", "format": "uuid" }, "index$": 1 }] }, "GET /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests/evaluations/{evaluation_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account ID", "type": "string", "minLength": 1 }, "index$": 0 }, { "name": "evaluation_id", "in": "path", "required": true, "schema": { "description": "Evaluation UUID", "type": "string", "format": "uuid" }, "index$": 1 }] }, "GET /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/constants": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string", "minLength": 1 }, "index$": 0 }] }, "DELETE /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests/{interest_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account ID", "type": "string", "minLength": 1 }, "index$": 0 }, { "name": "interest_id", "in": "path", "required": true, "schema": { "description": "Interest UUID", "type": "string", "format": "uuid" }, "index$": 1 }] }, "PATCH /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/interests/{interest_id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "enabled": { "type": "boolean", "key$": "enabled" }, "value": { "type": "string", "maxLength": 255, "minLength": 1, "key$": "value" } }, "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account ID", "type": "string", "minLength": 1 }, "index$": 0 }, { "name": "interest_id", "in": "path", "required": true, "schema": { "description": "Interest UUID", "type": "string", "format": "uuid" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const priority_intelligence_requirement_ref01_ent = client.PriorityIntelligenceRequirement();
        let priority_intelligence_requirement_ref01_data = setup.data.new.priority_intelligence_requirement['priority_intelligence_requirement_ref01'];
        priority_intelligence_requirement_ref01_data['account_id'] = setup.idmap['account01'];
        priority_intelligence_requirement_ref01_data = (await priority_intelligence_requirement_ref01_ent.create(priority_intelligence_requirement_ref01_data)).data();
        (0, node_assert_1.default)(null != priority_intelligence_requirement_ref01_data);
        // UPDATE
        const priority_intelligence_requirement_ref01_data_up0 = {};
        priority_intelligence_requirement_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        const priority_intelligence_requirement_ref01_markdef_up0 = { name: 'as_of', value: 'Mark01-priority_intelligence_requirement_ref01_' + setup.now };
        priority_intelligence_requirement_ref01_data_up0[priority_intelligence_requirement_ref01_markdef_up0.name] = priority_intelligence_requirement_ref01_markdef_up0.value;
        const priority_intelligence_requirement_ref01_resdata_up0 = (await priority_intelligence_requirement_ref01_ent.update(priority_intelligence_requirement_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != priority_intelligence_requirement_ref01_resdata_up0);
        (0, node_assert_1.default)(priority_intelligence_requirement_ref01_resdata_up0[priority_intelligence_requirement_ref01_markdef_up0.name] === priority_intelligence_requirement_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/priority_intelligence_requirement/PriorityIntelligenceRequirementTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareCloudforceOneSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['priority_intelligence_requirement01', 'priority_intelligence_requirement02', 'priority_intelligence_requirement03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_CLOUDFORCE_ONE_TEST_PRIORITY_INTELLIGENCE_REQUIREMENT_ENTID': idmap,
        'CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_CLOUDFORCE_ONE_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_PRIORITY_INTELLIGENCE_REQUIREMENT_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_PRIORITY_INTELLIGENCE_REQUIREMENT_ENTID'];
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
//# sourceMappingURL=PriorityIntelligenceRequirementEntity.test.js.map