import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { CloudforceOneRule, CloudforceOneRuleCreateData } from '../CloudflareCloudforceOneTypes';
declare class CloudforceOneRuleEntity extends CloudflareCloudforceOneEntityBase<CloudforceOneRule> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: CloudforceOneRuleEntity): CloudforceOneRuleEntity;
    create(this: any, reqdata?: CloudforceOneRuleCreateData, ctrl?: Control): Promise<CloudforceOneRuleEntity>;
}
export { CloudforceOneRuleEntity };
