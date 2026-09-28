<?php
declare(strict_types=1);

// CloudflareCloudforceOne SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CloudflareCloudforceOneMakeContext
{
    public static function call(array $ctxmap, ?CloudflareCloudforceOneContext $basectx): CloudflareCloudforceOneContext
    {
        return new CloudflareCloudforceOneContext($ctxmap, $basectx);
    }
}
