import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { CloudforceOneEmailRuleValidation, CloudforceOneEmailRuleValidationCreateData } from '../CloudflareCloudforceOneTypes';
declare class CloudforceOneEmailRuleValidationEntity extends CloudflareCloudforceOneEntityBase<CloudforceOneEmailRuleValidation> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: CloudforceOneEmailRuleValidationEntity): CloudforceOneEmailRuleValidationEntity;
    create(this: any, reqdata?: CloudforceOneEmailRuleValidationCreateData, ctrl?: Control): Promise<CloudforceOneEmailRuleValidationEntity>;
}
export { CloudforceOneEmailRuleValidationEntity };
