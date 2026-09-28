# cloudflare-cloudforce-one-mcp

[MCP](https://modelcontextprotocol.io) server exposing the CloudflareCloudforceOne SDK as
two agent tools — `cloudflare-cloudforce-one_list` and `cloudflare-cloudforce-one_load` — built on the
[official Go MCP SDK](https://github.com/modelcontextprotocol/go-sdk) and the
sibling Go SDK at `../go`. Runs over **stdio** (default, for spawnable installs)
or **streamable HTTP** (one shared server for several agents).

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/cloudflare-cloudforce-one-mcp)
make build

# 2. Provide credentials via the environment
export CLOUDFLARE_CLOUDFORCE_ONE_APIKEY=sk_live_xxx

# 3a. Install into Claude Code over stdio (most common)
claude mcp add --scope user cloudflare-cloudforce-one \
  -- /absolute/path/to/cloudflare-cloudforce-one-mcp -transport stdio

# 3b. …or run a shared HTTP server instead
./cloudflare-cloudforce-one-mcp -transport http -addr :8080
```

Tool-call arguments (what an agent sends):

```jsonc
// cloudflare-cloudforce-one_list: first page of records
{ "entity": "brand_protection" }
{ "entity": "brand_protection", "query": { } }

// cloudflare-cloudforce-one_load: one record by id
{ "entity": "attacker", "query": { "id": 1 } }
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: install and call a tool

1. **Build** the server from this `go-mcp/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/cloudflare-cloudforce-one-mcp
   ```

2. **Set your API key:**

   ```sh
   export CLOUDFLARE_CLOUDFORCE_ONE_APIKEY=sk_live_xxx
   ```

3. **Install it into Claude Code** (stdio transport):

   ```sh
   claude mcp add --scope user cloudflare-cloudforce-one \
     -- "$PWD"/dist/*/cloudflare-cloudforce-one-mcp -transport stdio
   ```

4. **Restart Claude Code.** The `cloudflare-cloudforce-one_list` and `cloudflare-cloudforce-one_load` tools now appear
   in new sessions. Ask the agent to *"list brand_protection using cloudflare-cloudforce-one"*
   and it calls `cloudflare-cloudforce-one_list` with `{"entity":"brand_protection"}`.

## How-to guides

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export CLOUDFLARE_CLOUDFORCE_ONE_APIKEY=sk_live_xxx            # API key
export CLOUDFLARE_CLOUDFORCE_ONE_BASE=https://api.example.com  # optional: override the API base URL
```

Set these in the shell that launches the server (or in the `claude mcp add`
environment) so every tool call is authenticated.

### Run as a shared HTTP server

```sh
./cloudflare-cloudforce-one-mcp -transport http -addr :8080
```

Streamable HTTP lets several agents share one running process; stdio (the
default) spawns a fresh process per client.

### Call the `cloudflare-cloudforce-one_list` tool

Args: `entity` (required), `query` (optional filter map). Returns the first
page of records as JSON:

```jsonc
{ "entity": "brand_protection" }
```

### Call the `cloudflare-cloudforce-one_load` tool

Args: `entity` (required), `query` = `{"id":N}` (required). Returns the single
record as JSON:

```jsonc
{ "entity": "attacker", "query": { "id": 1 } }
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

## Reference

### Tools

| Tool | Args | Returns |
|------|------|---------|
| `cloudflare-cloudforce-one_list` | `entity` (required), `query` (optional map) | First page of records as JSON |
| `cloudflare-cloudforce-one_load` | `entity` (required), `query` = `{id:N}` | Single record as JSON |

On error, a tool returns an MCP error result (`isError: true`) whose text is the
failure message (e.g. unknown entity, or an API error).

### `Args` schema

Both tools take the same argument object:

| Field | Type | Notes |
|-------|------|-------|
| `entity` | string | One of the 47 supported entities (see below). |
| `query` | object | Optional match map. `{"id":N}` for load; omit or `{}` for list. |

JSON schemas are emitted by the SDK from the `Args` struct's `json` /
`jsonschema` tags — no schema is hand-written.

### Transports & flags

| Flag | Default | Purpose |
|------|---------|---------|
| `-transport` | `stdio` | `stdio` (spawnable) or `http` (streamable HTTP). |
| `-addr` | `:8080` | Listen address for the `http` transport. |

### Environment variables

| Variable | Purpose |
|----------|---------|
| `CLOUDFLARE_CLOUDFORCE_ONE_APIKEY` | API key sent with every request. |
| `CLOUDFLARE_CLOUDFORCE_ONE_BASE` | Optional override of the API base URL. |

### Entities

The 47 entities valid as the `entity` argument:

attacker | bin_db | brand_protection | category | cloudforce_one_account_exemption | cloudforce_one_delete_all | cloudforce_one_edit_approval | cloudforce_one_email_rule_validation | cloudforce_one_email_rules_list | cloudforce_one_requests_api_response_common | cloudforce_one_rule | cloudforce_one_rule_approval_detail | cloudforce_one_rule_approvals_list | cloudforce_one_rule_preview | cloudforce_one_rules_preview_list | cloudforce_one_rules_search | cloudforce_one_stat | cloudforce_one_success | cloudforce_one_tree_node | cloudforce_one_validation | collection | collections_item | country | dashboard_asset | dashboard_user | dataset | event | group | indicator | indicator_type | permission | priority | priority_intelligence | priority_intelligence_requirement | priority_intelligence_requirements__pir | public_credential_monitor | request | request_for_information__rfi | requests_dashboard | rfi | rfi_message | rule | scan | tag | tag_category | target_industry | threat_signal

### Smoke test via HTTP (raw JSON-RPC)

```sh
./cloudflare-cloudforce-one-mcp -transport http -addr :18080 &

# initialize, grab the session id
curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -D headers \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke","version":"0"}}}'

SESSION=$(awk '/Mcp-Session-Id/ {print $2}' headers | tr -d '\r')

curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -H "Mcp-Session-Id: $SESSION" \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"cloudflare-cloudforce-one_load","arguments":{"entity":"attacker","query":{"id":1}}}}'
```

## Explanation

### How tools map to the SDK

`main.go` builds the SDK client (configured from the environment) and registers
two tools. Each dispatches on the `entity` argument to the matching entity in
the sibling Go SDK at `../go`, calls `List` or `Load`, unwraps the `Entity`
wrappers to plain data, and returns it as pretty-printed JSON.

### Why two transports

**stdio** is the standard for agent hosts that spawn a server per client
(Claude Code's `claude mcp add`). **streamable HTTP** keeps one process running
that many agents can share — handy for a long-lived deployment.

### Schema generation

The input schema is derived from the `Args` Go struct's `json` / `jsonschema`
tags at registration time, so the advertised tool schema can never drift from
the code that consumes it.

## Generated by

sdkgen `go-mcp` target. See the target source under `.sdk/src/cmp/go-mcp/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-mcp/`.
