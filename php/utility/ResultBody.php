<?php
declare(strict_types=1);

// CloudflareCloudforceOne SDK utility: result_body

class CloudflareCloudforceOneResultBody
{
    public static function call(CloudflareCloudforceOneContext $ctx): ?CloudflareCloudforceOneResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
