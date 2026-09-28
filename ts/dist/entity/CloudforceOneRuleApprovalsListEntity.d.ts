import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { CloudforceOneRuleApprovalsList, CloudforceOneRuleApprovalsListListMatch } from '../CloudflareCloudforceOneTypes';
declare class CloudforceOneRuleApprovalsListEntity extends CloudflareCloudforceOneEntityBase<CloudforceOneRuleApprovalsList> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: CloudforceOneRuleApprovalsListEntity): CloudforceOneRuleApprovalsListEntity;
    list(this: any, reqmatch?: CloudforceOneRuleApprovalsListListMatch, ctrl?: Control): Promise<CloudforceOneRuleApprovalsListEntity[]>;
}
export { CloudforceOneRuleApprovalsListEntity };
