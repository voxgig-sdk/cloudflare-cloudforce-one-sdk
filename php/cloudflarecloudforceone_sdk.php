<?php
declare(strict_types=1);

// CloudflareCloudforceOne SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class CloudflareCloudforceOneSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new CloudflareCloudforceOneUtility();
        $this->_utility = $utility;

        $config = CloudflareCloudforceOneConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = CloudflareCloudforceOneHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = CloudflareCloudforceOneHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!CloudflareCloudforceOneFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, CloudflareCloudforceOneFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return CloudflareCloudforceOneUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = CloudflareCloudforceOneHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = CloudflareCloudforceOneHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = CloudflareCloudforceOneHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new CloudflareCloudforceOneSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new CloudflareCloudforceOneError($op . "_allow",
                "CloudflareCloudforceOneSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = CloudflareCloudforceOneHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = CloudflareCloudforceOneHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new CloudflareCloudforceOneError("graphql_error",
                "CloudflareCloudforceOneSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_attacker = null;

    // Canonical facade: $client->Attacker()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->attacker()
    // resolves here too.
    public function Attacker($data = null)
    {
        require_once __DIR__ . '/entity/attacker_entity.php';
        if ($data === null) {
            if ($this->_attacker === null) {
                $this->_attacker = new AttackerEntity($this, null);
            }
            return $this->_attacker;
        }
        return new AttackerEntity($this, $data);
    }


    private $_bin_db = null;

    // Canonical facade: $client->BinDb()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bin_db()
    // resolves here too.
    public function BinDb($data = null)
    {
        require_once __DIR__ . '/entity/bin_db_entity.php';
        if ($data === null) {
            if ($this->_bin_db === null) {
                $this->_bin_db = new BinDbEntity($this, null);
            }
            return $this->_bin_db;
        }
        return new BinDbEntity($this, $data);
    }


    private $_brand_protection = null;

    // Canonical facade: $client->BrandProtection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->brand_protection()
    // resolves here too.
    public function BrandProtection($data = null)
    {
        require_once __DIR__ . '/entity/brand_protection_entity.php';
        if ($data === null) {
            if ($this->_brand_protection === null) {
                $this->_brand_protection = new BrandProtectionEntity($this, null);
            }
            return $this->_brand_protection;
        }
        return new BrandProtectionEntity($this, $data);
    }


    private $_category = null;

    // Canonical facade: $client->Category()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->category()
    // resolves here too.
    public function Category($data = null)
    {
        require_once __DIR__ . '/entity/category_entity.php';
        if ($data === null) {
            if ($this->_category === null) {
                $this->_category = new CategoryEntity($this, null);
            }
            return $this->_category;
        }
        return new CategoryEntity($this, $data);
    }


    private $_cloudforce_one_account_exemption = null;

    // Canonical facade: $client->CloudforceOneAccountExemption()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cloudforce_one_account_exemption()
    // resolves here too.
    public function CloudforceOneAccountExemption($data = null)
    {
        require_once __DIR__ . '/entity/cloudforce_one_account_exemption_entity.php';
        if ($data === null) {
            if ($this->_cloudforce_one_account_exemption === null) {
                $this->_cloudforce_one_account_exemption = new CloudforceOneAccountExemptionEntity($this, null);
            }
            return $this->_cloudforce_one_account_exemption;
        }
        return new CloudforceOneAccountExemptionEntity($this, $data);
    }


    private $_cloudforce_one_delete_all = null;

    // Canonical facade: $client->CloudforceOneDeleteAll()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cloudforce_one_delete_all()
    // resolves here too.
    public function CloudforceOneDeleteAll($data = null)
    {
        require_once __DIR__ . '/entity/cloudforce_one_delete_all_entity.php';
        if ($data === null) {
            if ($this->_cloudforce_one_delete_all === null) {
                $this->_cloudforce_one_delete_all = new CloudforceOneDeleteAllEntity($this, null);
            }
            return $this->_cloudforce_one_delete_all;
        }
        return new CloudforceOneDeleteAllEntity($this, $data);
    }


    private $_cloudforce_one_edit_approval = null;

    // Canonical facade: $client->CloudforceOneEditApproval()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cloudforce_one_edit_approval()
    // resolves here too.
    public function CloudforceOneEditApproval($data = null)
    {
        require_once __DIR__ . '/entity/cloudforce_one_edit_approval_entity.php';
        if ($data === null) {
            if ($this->_cloudforce_one_edit_approval === null) {
                $this->_cloudforce_one_edit_approval = new CloudforceOneEditApprovalEntity($this, null);
            }
            return $this->_cloudforce_one_edit_approval;
        }
        return new CloudforceOneEditApprovalEntity($this, $data);
    }


    private $_cloudforce_one_email_rule_validation = null;

    // Canonical facade: $client->CloudforceOneEmailRuleValidation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cloudforce_one_email_rule_validation()
    // resolves here too.
    public function CloudforceOneEmailRuleValidation($data = null)
    {
        require_once __DIR__ . '/entity/cloudforce_one_email_rule_validation_entity.php';
        if ($data === null) {
            if ($this->_cloudforce_one_email_rule_validation === null) {
                $this->_cloudforce_one_email_rule_validation = new CloudforceOneEmailRuleValidationEntity($this, null);
            }
            return $this->_cloudforce_one_email_rule_validation;
        }
        return new CloudforceOneEmailRuleValidationEntity($this, $data);
    }


    private $_cloudforce_one_email_rules_list = null;

    // Canonical facade: $client->CloudforceOneEmailRulesList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cloudforce_one_email_rules_list()
    // resolves here too.
    public function CloudforceOneEmailRulesList($data = null)
    {
        require_once __DIR__ . '/entity/cloudforce_one_email_rules_list_entity.php';
        if ($data === null) {
            if ($this->_cloudforce_one_email_rules_list === null) {
                $this->_cloudforce_one_email_rules_list = new CloudforceOneEmailRulesListEntity($this, null);
            }
            return $this->_cloudforce_one_email_rules_list;
        }
        return new CloudforceOneEmailRulesListEntity($this, $data);
    }


    private $_cloudforce_one_requests_api_response_common = null;

    // Canonical facade: $client->CloudforceOneRequestsApiResponseCommon()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cloudforce_one_requests_api_response_common()
    // resolves here too.
    public function CloudforceOneRequestsApiResponseCommon($data = null)
    {
        require_once __DIR__ . '/entity/cloudforce_one_requests_api_response_common_entity.php';
        if ($data === null) {
            if ($this->_cloudforce_one_requests_api_response_common === null) {
                $this->_cloudforce_one_requests_api_response_common = new CloudforceOneRequestsApiResponseCommonEntity($this, null);
            }
            return $this->_cloudforce_one_requests_api_response_common;
        }
        return new CloudforceOneRequestsApiResponseCommonEntity($this, $data);
    }


    private $_cloudforce_one_rule = null;

    // Canonical facade: $client->CloudforceOneRule()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cloudforce_one_rule()
    // resolves here too.
    public function CloudforceOneRule($data = null)
    {
        require_once __DIR__ . '/entity/cloudforce_one_rule_entity.php';
        if ($data === null) {
            if ($this->_cloudforce_one_rule === null) {
                $this->_cloudforce_one_rule = new CloudforceOneRuleEntity($this, null);
            }
            return $this->_cloudforce_one_rule;
        }
        return new CloudforceOneRuleEntity($this, $data);
    }


    private $_cloudforce_one_rule_approval_detail = null;

    // Canonical facade: $client->CloudforceOneRuleApprovalDetail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cloudforce_one_rule_approval_detail()
    // resolves here too.
    public function CloudforceOneRuleApprovalDetail($data = null)
    {
        require_once __DIR__ . '/entity/cloudforce_one_rule_approval_detail_entity.php';
        if ($data === null) {
            if ($this->_cloudforce_one_rule_approval_detail === null) {
                $this->_cloudforce_one_rule_approval_detail = new CloudforceOneRuleApprovalDetailEntity($this, null);
            }
            return $this->_cloudforce_one_rule_approval_detail;
        }
        return new CloudforceOneRuleApprovalDetailEntity($this, $data);
    }


    private $_cloudforce_one_rule_approvals_list = null;

    // Canonical facade: $client->CloudforceOneRuleApprovalsList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cloudforce_one_rule_approvals_list()
    // resolves here too.
    public function CloudforceOneRuleApprovalsList($data = null)
    {
        require_once __DIR__ . '/entity/cloudforce_one_rule_approvals_list_entity.php';
        if ($data === null) {
            if ($this->_cloudforce_one_rule_approvals_list === null) {
                $this->_cloudforce_one_rule_approvals_list = new CloudforceOneRuleApprovalsListEntity($this, null);
            }
            return $this->_cloudforce_one_rule_approvals_list;
        }
        return new CloudforceOneRuleApprovalsListEntity($this, $data);
    }


    private $_cloudforce_one_rule_preview = null;

    // Canonical facade: $client->CloudforceOneRulePreview()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cloudforce_one_rule_preview()
    // resolves here too.
    public function CloudforceOneRulePreview($data = null)
    {
        require_once __DIR__ . '/entity/cloudforce_one_rule_preview_entity.php';
        if ($data === null) {
            if ($this->_cloudforce_one_rule_preview === null) {
                $this->_cloudforce_one_rule_preview = new CloudforceOneRulePreviewEntity($this, null);
            }
            return $this->_cloudforce_one_rule_preview;
        }
        return new CloudforceOneRulePreviewEntity($this, $data);
    }


    private $_cloudforce_one_rules_preview_list = null;

    // Canonical facade: $client->CloudforceOneRulesPreviewList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cloudforce_one_rules_preview_list()
    // resolves here too.
    public function CloudforceOneRulesPreviewList($data = null)
    {
        require_once __DIR__ . '/entity/cloudforce_one_rules_preview_list_entity.php';
        if ($data === null) {
            if ($this->_cloudforce_one_rules_preview_list === null) {
                $this->_cloudforce_one_rules_preview_list = new CloudforceOneRulesPreviewListEntity($this, null);
            }
            return $this->_cloudforce_one_rules_preview_list;
        }
        return new CloudforceOneRulesPreviewListEntity($this, $data);
    }


    private $_cloudforce_one_rules_search = null;

    // Canonical facade: $client->CloudforceOneRulesSearch()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cloudforce_one_rules_search()
    // resolves here too.
    public function CloudforceOneRulesSearch($data = null)
    {
        require_once __DIR__ . '/entity/cloudforce_one_rules_search_entity.php';
        if ($data === null) {
            if ($this->_cloudforce_one_rules_search === null) {
                $this->_cloudforce_one_rules_search = new CloudforceOneRulesSearchEntity($this, null);
            }
            return $this->_cloudforce_one_rules_search;
        }
        return new CloudforceOneRulesSearchEntity($this, $data);
    }


    private $_cloudforce_one_stat = null;

    // Canonical facade: $client->CloudforceOneStat()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cloudforce_one_stat()
    // resolves here too.
    public function CloudforceOneStat($data = null)
    {
        require_once __DIR__ . '/entity/cloudforce_one_stat_entity.php';
        if ($data === null) {
            if ($this->_cloudforce_one_stat === null) {
                $this->_cloudforce_one_stat = new CloudforceOneStatEntity($this, null);
            }
            return $this->_cloudforce_one_stat;
        }
        return new CloudforceOneStatEntity($this, $data);
    }


    private $_cloudforce_one_success = null;

    // Canonical facade: $client->CloudforceOneSuccess()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cloudforce_one_success()
    // resolves here too.
    public function CloudforceOneSuccess($data = null)
    {
        require_once __DIR__ . '/entity/cloudforce_one_success_entity.php';
        if ($data === null) {
            if ($this->_cloudforce_one_success === null) {
                $this->_cloudforce_one_success = new CloudforceOneSuccessEntity($this, null);
            }
            return $this->_cloudforce_one_success;
        }
        return new CloudforceOneSuccessEntity($this, $data);
    }


    private $_cloudforce_one_tree_node = null;

    // Canonical facade: $client->CloudforceOneTreeNode()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cloudforce_one_tree_node()
    // resolves here too.
    public function CloudforceOneTreeNode($data = null)
    {
        require_once __DIR__ . '/entity/cloudforce_one_tree_node_entity.php';
        if ($data === null) {
            if ($this->_cloudforce_one_tree_node === null) {
                $this->_cloudforce_one_tree_node = new CloudforceOneTreeNodeEntity($this, null);
            }
            return $this->_cloudforce_one_tree_node;
        }
        return new CloudforceOneTreeNodeEntity($this, $data);
    }


    private $_cloudforce_one_validation = null;

    // Canonical facade: $client->CloudforceOneValidation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cloudforce_one_validation()
    // resolves here too.
    public function CloudforceOneValidation($data = null)
    {
        require_once __DIR__ . '/entity/cloudforce_one_validation_entity.php';
        if ($data === null) {
            if ($this->_cloudforce_one_validation === null) {
                $this->_cloudforce_one_validation = new CloudforceOneValidationEntity($this, null);
            }
            return $this->_cloudforce_one_validation;
        }
        return new CloudforceOneValidationEntity($this, $data);
    }


    private $_collection = null;

    // Canonical facade: $client->Collection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->collection()
    // resolves here too.
    public function Collection($data = null)
    {
        require_once __DIR__ . '/entity/collection_entity.php';
        if ($data === null) {
            if ($this->_collection === null) {
                $this->_collection = new CollectionEntity($this, null);
            }
            return $this->_collection;
        }
        return new CollectionEntity($this, $data);
    }


    private $_collections_item = null;

    // Canonical facade: $client->CollectionsItem()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->collections_item()
    // resolves here too.
    public function CollectionsItem($data = null)
    {
        require_once __DIR__ . '/entity/collections_item_entity.php';
        if ($data === null) {
            if ($this->_collections_item === null) {
                $this->_collections_item = new CollectionsItemEntity($this, null);
            }
            return $this->_collections_item;
        }
        return new CollectionsItemEntity($this, $data);
    }


    private $_country = null;

    // Canonical facade: $client->Country()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->country()
    // resolves here too.
    public function Country($data = null)
    {
        require_once __DIR__ . '/entity/country_entity.php';
        if ($data === null) {
            if ($this->_country === null) {
                $this->_country = new CountryEntity($this, null);
            }
            return $this->_country;
        }
        return new CountryEntity($this, $data);
    }


    private $_dashboard_asset = null;

    // Canonical facade: $client->DashboardAsset()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dashboard_asset()
    // resolves here too.
    public function DashboardAsset($data = null)
    {
        require_once __DIR__ . '/entity/dashboard_asset_entity.php';
        if ($data === null) {
            if ($this->_dashboard_asset === null) {
                $this->_dashboard_asset = new DashboardAssetEntity($this, null);
            }
            return $this->_dashboard_asset;
        }
        return new DashboardAssetEntity($this, $data);
    }


    private $_dashboard_user = null;

    // Canonical facade: $client->DashboardUser()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dashboard_user()
    // resolves here too.
    public function DashboardUser($data = null)
    {
        require_once __DIR__ . '/entity/dashboard_user_entity.php';
        if ($data === null) {
            if ($this->_dashboard_user === null) {
                $this->_dashboard_user = new DashboardUserEntity($this, null);
            }
            return $this->_dashboard_user;
        }
        return new DashboardUserEntity($this, $data);
    }


    private $_dataset = null;

    // Canonical facade: $client->Dataset()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dataset()
    // resolves here too.
    public function Dataset($data = null)
    {
        require_once __DIR__ . '/entity/dataset_entity.php';
        if ($data === null) {
            if ($this->_dataset === null) {
                $this->_dataset = new DatasetEntity($this, null);
            }
            return $this->_dataset;
        }
        return new DatasetEntity($this, $data);
    }


    private $_event = null;

    // Canonical facade: $client->Event()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->event()
    // resolves here too.
    public function Event($data = null)
    {
        require_once __DIR__ . '/entity/event_entity.php';
        if ($data === null) {
            if ($this->_event === null) {
                $this->_event = new EventEntity($this, null);
            }
            return $this->_event;
        }
        return new EventEntity($this, $data);
    }


    private $_group = null;

    // Canonical facade: $client->Group()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->group()
    // resolves here too.
    public function Group($data = null)
    {
        require_once __DIR__ . '/entity/group_entity.php';
        if ($data === null) {
            if ($this->_group === null) {
                $this->_group = new GroupEntity($this, null);
            }
            return $this->_group;
        }
        return new GroupEntity($this, $data);
    }


    private $_indicator = null;

    // Canonical facade: $client->Indicator()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->indicator()
    // resolves here too.
    public function Indicator($data = null)
    {
        require_once __DIR__ . '/entity/indicator_entity.php';
        if ($data === null) {
            if ($this->_indicator === null) {
                $this->_indicator = new IndicatorEntity($this, null);
            }
            return $this->_indicator;
        }
        return new IndicatorEntity($this, $data);
    }


    private $_indicator_type = null;

    // Canonical facade: $client->IndicatorType()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->indicator_type()
    // resolves here too.
    public function IndicatorType($data = null)
    {
        require_once __DIR__ . '/entity/indicator_type_entity.php';
        if ($data === null) {
            if ($this->_indicator_type === null) {
                $this->_indicator_type = new IndicatorTypeEntity($this, null);
            }
            return $this->_indicator_type;
        }
        return new IndicatorTypeEntity($this, $data);
    }


    private $_permission = null;

    // Canonical facade: $client->Permission()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->permission()
    // resolves here too.
    public function Permission($data = null)
    {
        require_once __DIR__ . '/entity/permission_entity.php';
        if ($data === null) {
            if ($this->_permission === null) {
                $this->_permission = new PermissionEntity($this, null);
            }
            return $this->_permission;
        }
        return new PermissionEntity($this, $data);
    }


    private $_priority = null;

    // Canonical facade: $client->Priority()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->priority()
    // resolves here too.
    public function Priority($data = null)
    {
        require_once __DIR__ . '/entity/priority_entity.php';
        if ($data === null) {
            if ($this->_priority === null) {
                $this->_priority = new PriorityEntity($this, null);
            }
            return $this->_priority;
        }
        return new PriorityEntity($this, $data);
    }


    private $_priority_intelligence = null;

    // Canonical facade: $client->PriorityIntelligence()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->priority_intelligence()
    // resolves here too.
    public function PriorityIntelligence($data = null)
    {
        require_once __DIR__ . '/entity/priority_intelligence_entity.php';
        if ($data === null) {
            if ($this->_priority_intelligence === null) {
                $this->_priority_intelligence = new PriorityIntelligenceEntity($this, null);
            }
            return $this->_priority_intelligence;
        }
        return new PriorityIntelligenceEntity($this, $data);
    }


    private $_priority_intelligence_requirement = null;

    // Canonical facade: $client->PriorityIntelligenceRequirement()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->priority_intelligence_requirement()
    // resolves here too.
    public function PriorityIntelligenceRequirement($data = null)
    {
        require_once __DIR__ . '/entity/priority_intelligence_requirement_entity.php';
        if ($data === null) {
            if ($this->_priority_intelligence_requirement === null) {
                $this->_priority_intelligence_requirement = new PriorityIntelligenceRequirementEntity($this, null);
            }
            return $this->_priority_intelligence_requirement;
        }
        return new PriorityIntelligenceRequirementEntity($this, $data);
    }


    private $_priority_intelligence_requirements__pir = null;

    // Canonical facade: $client->PriorityIntelligenceRequirementsPir()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->priority_intelligence_requirements__pir()
    // resolves here too.
    public function PriorityIntelligenceRequirementsPir($data = null)
    {
        require_once __DIR__ . '/entity/priority_intelligence_requirements__pir_entity.php';
        if ($data === null) {
            if ($this->_priority_intelligence_requirements__pir === null) {
                $this->_priority_intelligence_requirements__pir = new PriorityIntelligenceRequirementsPirEntity($this, null);
            }
            return $this->_priority_intelligence_requirements__pir;
        }
        return new PriorityIntelligenceRequirementsPirEntity($this, $data);
    }


    private $_public_credential_monitor = null;

    // Canonical facade: $client->PublicCredentialMonitor()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->public_credential_monitor()
    // resolves here too.
    public function PublicCredentialMonitor($data = null)
    {
        require_once __DIR__ . '/entity/public_credential_monitor_entity.php';
        if ($data === null) {
            if ($this->_public_credential_monitor === null) {
                $this->_public_credential_monitor = new PublicCredentialMonitorEntity($this, null);
            }
            return $this->_public_credential_monitor;
        }
        return new PublicCredentialMonitorEntity($this, $data);
    }


    private $_request = null;

    // Canonical facade: $client->Request()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->request()
    // resolves here too.
    public function Request($data = null)
    {
        require_once __DIR__ . '/entity/request_entity.php';
        if ($data === null) {
            if ($this->_request === null) {
                $this->_request = new RequestEntity($this, null);
            }
            return $this->_request;
        }
        return new RequestEntity($this, $data);
    }


    private $_request_for_information__rfi = null;

    // Canonical facade: $client->RequestForInformationRfi()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->request_for_information__rfi()
    // resolves here too.
    public function RequestForInformationRfi($data = null)
    {
        require_once __DIR__ . '/entity/request_for_information__rfi_entity.php';
        if ($data === null) {
            if ($this->_request_for_information__rfi === null) {
                $this->_request_for_information__rfi = new RequestForInformationRfiEntity($this, null);
            }
            return $this->_request_for_information__rfi;
        }
        return new RequestForInformationRfiEntity($this, $data);
    }


    private $_requests_dashboard = null;

    // Canonical facade: $client->RequestsDashboard()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->requests_dashboard()
    // resolves here too.
    public function RequestsDashboard($data = null)
    {
        require_once __DIR__ . '/entity/requests_dashboard_entity.php';
        if ($data === null) {
            if ($this->_requests_dashboard === null) {
                $this->_requests_dashboard = new RequestsDashboardEntity($this, null);
            }
            return $this->_requests_dashboard;
        }
        return new RequestsDashboardEntity($this, $data);
    }


    private $_rfi = null;

    // Canonical facade: $client->Rfi()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->rfi()
    // resolves here too.
    public function Rfi($data = null)
    {
        require_once __DIR__ . '/entity/rfi_entity.php';
        if ($data === null) {
            if ($this->_rfi === null) {
                $this->_rfi = new RfiEntity($this, null);
            }
            return $this->_rfi;
        }
        return new RfiEntity($this, $data);
    }


    private $_rfi_message = null;

    // Canonical facade: $client->RfiMessage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->rfi_message()
    // resolves here too.
    public function RfiMessage($data = null)
    {
        require_once __DIR__ . '/entity/rfi_message_entity.php';
        if ($data === null) {
            if ($this->_rfi_message === null) {
                $this->_rfi_message = new RfiMessageEntity($this, null);
            }
            return $this->_rfi_message;
        }
        return new RfiMessageEntity($this, $data);
    }


    private $_rule = null;

    // Canonical facade: $client->Rule()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->rule()
    // resolves here too.
    public function Rule($data = null)
    {
        require_once __DIR__ . '/entity/rule_entity.php';
        if ($data === null) {
            if ($this->_rule === null) {
                $this->_rule = new RuleEntity($this, null);
            }
            return $this->_rule;
        }
        return new RuleEntity($this, $data);
    }


    private $_scan = null;

    // Canonical facade: $client->Scan()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->scan()
    // resolves here too.
    public function Scan($data = null)
    {
        require_once __DIR__ . '/entity/scan_entity.php';
        if ($data === null) {
            if ($this->_scan === null) {
                $this->_scan = new ScanEntity($this, null);
            }
            return $this->_scan;
        }
        return new ScanEntity($this, $data);
    }


    private $_tag = null;

    // Canonical facade: $client->Tag()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tag()
    // resolves here too.
    public function Tag($data = null)
    {
        require_once __DIR__ . '/entity/tag_entity.php';
        if ($data === null) {
            if ($this->_tag === null) {
                $this->_tag = new TagEntity($this, null);
            }
            return $this->_tag;
        }
        return new TagEntity($this, $data);
    }


    private $_tag_category = null;

    // Canonical facade: $client->TagCategory()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tag_category()
    // resolves here too.
    public function TagCategory($data = null)
    {
        require_once __DIR__ . '/entity/tag_category_entity.php';
        if ($data === null) {
            if ($this->_tag_category === null) {
                $this->_tag_category = new TagCategoryEntity($this, null);
            }
            return $this->_tag_category;
        }
        return new TagCategoryEntity($this, $data);
    }


    private $_target_industry = null;

    // Canonical facade: $client->TargetIndustry()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->target_industry()
    // resolves here too.
    public function TargetIndustry($data = null)
    {
        require_once __DIR__ . '/entity/target_industry_entity.php';
        if ($data === null) {
            if ($this->_target_industry === null) {
                $this->_target_industry = new TargetIndustryEntity($this, null);
            }
            return $this->_target_industry;
        }
        return new TargetIndustryEntity($this, $data);
    }


    private $_threat_signal = null;

    // Canonical facade: $client->ThreatSignal()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->threat_signal()
    // resolves here too.
    public function ThreatSignal($data = null)
    {
        require_once __DIR__ . '/entity/threat_signal_entity.php';
        if ($data === null) {
            if ($this->_threat_signal === null) {
                $this->_threat_signal = new ThreatSignalEntity($this, null);
            }
            return $this->_threat_signal;
        }
        return new ThreatSignalEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new CloudflareCloudforceOneSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
