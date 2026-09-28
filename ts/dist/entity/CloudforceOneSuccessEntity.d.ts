import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { CloudforceOneSuccess, CloudforceOneSuccessCreateData, CloudforceOneSuccessRemoveMatch } from '../CloudflareCloudforceOneTypes';
declare class CloudforceOneSuccessEntity extends CloudflareCloudforceOneEntityBase<CloudforceOneSuccess> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: CloudforceOneSuccessEntity): CloudforceOneSuccessEntity;
    create(this: any, reqdata?: CloudforceOneSuccessCreateData, ctrl?: Control): Promise<CloudforceOneSuccessEntity>;
    remove(this: any, reqmatch?: CloudforceOneSuccessRemoveMatch, ctrl?: Control): Promise<CloudforceOneSuccessEntity>;
}
export { CloudforceOneSuccessEntity };
