import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { CloudforceOneEditApproval, CloudforceOneEditApprovalCreateData, CloudforceOneEditApprovalUpdateData } from '../CloudflareCloudforceOneTypes';
declare class CloudforceOneEditApprovalEntity extends CloudflareCloudforceOneEntityBase<CloudforceOneEditApproval> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: CloudforceOneEditApprovalEntity): CloudforceOneEditApprovalEntity;
    create(this: any, reqdata?: CloudforceOneEditApprovalCreateData, ctrl?: Control): Promise<CloudforceOneEditApprovalEntity>;
    update(this: any, reqdata?: CloudforceOneEditApprovalUpdateData, ctrl?: Control): Promise<CloudforceOneEditApprovalEntity>;
}
export { CloudforceOneEditApprovalEntity };
