import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { CloudforceOneValidation, CloudforceOneValidationCreateData } from '../CloudflareCloudforceOneTypes';
declare class CloudforceOneValidationEntity extends CloudflareCloudforceOneEntityBase<CloudforceOneValidation> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: CloudforceOneValidationEntity): CloudforceOneValidationEntity;
    create(this: any, reqdata?: CloudforceOneValidationCreateData, ctrl?: Control): Promise<CloudforceOneValidationEntity>;
}
export { CloudforceOneValidationEntity };
