import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { TargetIndustry, TargetIndustryLoadMatch } from '../CloudflareCloudforceOneTypes';
declare class TargetIndustryEntity extends CloudflareCloudforceOneEntityBase<TargetIndustry> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: TargetIndustryEntity): TargetIndustryEntity;
    load(this: any, reqmatch?: TargetIndustryLoadMatch, ctrl?: Control): Promise<TargetIndustryEntity>;
}
export { TargetIndustryEntity };
