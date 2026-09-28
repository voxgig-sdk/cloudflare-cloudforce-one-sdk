import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { CloudforceOneDeleteAll, CloudforceOneDeleteAllRemoveMatch } from '../CloudflareCloudforceOneTypes';
declare class CloudforceOneDeleteAllEntity extends CloudflareCloudforceOneEntityBase<CloudforceOneDeleteAll> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: CloudforceOneDeleteAllEntity): CloudforceOneDeleteAllEntity;
    remove(this: any, reqmatch?: CloudforceOneDeleteAllRemoveMatch, ctrl?: Control): Promise<CloudforceOneDeleteAllEntity>;
}
export { CloudforceOneDeleteAllEntity };
