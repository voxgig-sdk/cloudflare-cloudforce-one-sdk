import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { CloudforceOneRulesSearch, CloudforceOneRulesSearchListMatch } from '../CloudflareCloudforceOneTypes';
declare class CloudforceOneRulesSearchEntity extends CloudflareCloudforceOneEntityBase<CloudforceOneRulesSearch> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: CloudforceOneRulesSearchEntity): CloudforceOneRulesSearchEntity;
    list(this: any, reqmatch?: CloudforceOneRulesSearchListMatch, ctrl?: Control): Promise<CloudforceOneRulesSearchEntity[]>;
}
export { CloudforceOneRulesSearchEntity };
