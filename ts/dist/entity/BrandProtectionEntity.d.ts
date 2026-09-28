import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { BrandProtection, BrandProtectionLoadMatch, BrandProtectionListMatch, BrandProtectionCreateData, BrandProtectionUpdateData, BrandProtectionRemoveMatch } from '../CloudflareCloudforceOneTypes';
declare class BrandProtectionEntity extends CloudflareCloudforceOneEntityBase<BrandProtection> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: BrandProtectionEntity): BrandProtectionEntity;
    load(this: any, reqmatch?: BrandProtectionLoadMatch, ctrl?: Control): Promise<BrandProtectionEntity>;
    list(this: any, reqmatch?: BrandProtectionListMatch, ctrl?: Control): Promise<BrandProtectionEntity[]>;
    create(this: any, reqdata?: BrandProtectionCreateData, ctrl?: Control): Promise<BrandProtectionEntity>;
    update(this: any, reqdata?: BrandProtectionUpdateData, ctrl?: Control): Promise<BrandProtectionEntity>;
    remove(this: any, reqmatch?: BrandProtectionRemoveMatch, ctrl?: Control): Promise<BrandProtectionEntity>;
}
export { BrandProtectionEntity };
