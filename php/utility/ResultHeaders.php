<?php
declare(strict_types=1);

// CloudflareCloudforceOne SDK utility: result_headers

class CloudflareCloudforceOneResultHeaders
{
    public static function call(CloudflareCloudforceOneContext $ctx): ?CloudflareCloudforceOneResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
