import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { CloudforceOneRuleApprovalDetail, CloudforceOneRuleApprovalDetailLoadMatch, CloudforceOneRuleApprovalDetailCreateData } from '../CloudflareCloudforceOneTypes';
declare class CloudforceOneRuleApprovalDetailEntity extends CloudflareCloudforceOneEntityBase<CloudforceOneRuleApprovalDetail> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: CloudforceOneRuleApprovalDetailEntity): CloudforceOneRuleApprovalDetailEntity;
    load(this: any, reqmatch?: CloudforceOneRuleApprovalDetailLoadMatch, ctrl?: Control): Promise<CloudforceOneRuleApprovalDetailEntity>;
    create(this: any, reqdata?: CloudforceOneRuleApprovalDetailCreateData, ctrl?: Control): Promise<CloudforceOneRuleApprovalDetailEntity>;
}
export { CloudforceOneRuleApprovalDetailEntity };
