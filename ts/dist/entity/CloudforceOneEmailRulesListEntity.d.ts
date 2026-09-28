import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { CloudforceOneEmailRulesList, CloudforceOneEmailRulesListListMatch } from '../CloudflareCloudforceOneTypes';
declare class CloudforceOneEmailRulesListEntity extends CloudflareCloudforceOneEntityBase<CloudforceOneEmailRulesList> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: CloudforceOneEmailRulesListEntity): CloudforceOneEmailRulesListEntity;
    list(this: any, reqmatch?: CloudforceOneEmailRulesListListMatch, ctrl?: Control): Promise<CloudforceOneEmailRulesListEntity[]>;
}
export { CloudforceOneEmailRulesListEntity };
