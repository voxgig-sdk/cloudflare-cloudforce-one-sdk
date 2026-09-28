<?php
declare(strict_types=1);

// CloudflareCloudforceOne SDK base feature

class CloudflareCloudforceOneBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(CloudflareCloudforceOneContext $ctx, array $options): void {}
    public function PostConstruct(CloudflareCloudforceOneContext $ctx): void {}
    public function PostConstructEntity(CloudflareCloudforceOneContext $ctx): void {}
    public function SetData(CloudflareCloudforceOneContext $ctx): void {}
    public function GetData(CloudflareCloudforceOneContext $ctx): void {}
    public function GetMatch(CloudflareCloudforceOneContext $ctx): void {}
    public function SetMatch(CloudflareCloudforceOneContext $ctx): void {}
    public function PrePoint(CloudflareCloudforceOneContext $ctx): void {}
    public function PreSpec(CloudflareCloudforceOneContext $ctx): void {}
    public function PreRequest(CloudflareCloudforceOneContext $ctx): void {}
    public function PreResponse(CloudflareCloudforceOneContext $ctx): void {}
    public function PreResult(CloudflareCloudforceOneContext $ctx): void {}
    public function PreDone(CloudflareCloudforceOneContext $ctx): void {}
    public function PreUnexpected(CloudflareCloudforceOneContext $ctx): void {}
}
