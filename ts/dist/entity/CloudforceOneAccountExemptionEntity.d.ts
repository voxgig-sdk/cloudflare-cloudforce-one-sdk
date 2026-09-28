import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { CloudforceOneAccountExemption, CloudforceOneAccountExemptionListMatch, CloudforceOneAccountExemptionCreateData, CloudforceOneAccountExemptionUpdateData, CloudforceOneAccountExemptionRemoveMatch } from '../CloudflareCloudforceOneTypes';
declare class CloudforceOneAccountExemptionEntity extends CloudflareCloudforceOneEntityBase<CloudforceOneAccountExemption> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: CloudforceOneAccountExemptionEntity): CloudforceOneAccountExemptionEntity;
    list(this: any, reqmatch?: CloudforceOneAccountExemptionListMatch, ctrl?: Control): Promise<CloudforceOneAccountExemptionEntity[]>;
    create(this: any, reqdata?: CloudforceOneAccountExemptionCreateData, ctrl?: Control): Promise<CloudforceOneAccountExemptionEntity>;
    update(this: any, reqdata?: CloudforceOneAccountExemptionUpdateData, ctrl?: Control): Promise<CloudforceOneAccountExemptionEntity>;
    remove(this: any, reqmatch?: CloudforceOneAccountExemptionRemoveMatch, ctrl?: Control): Promise<CloudforceOneAccountExemptionEntity>;
}
export { CloudforceOneAccountExemptionEntity };
