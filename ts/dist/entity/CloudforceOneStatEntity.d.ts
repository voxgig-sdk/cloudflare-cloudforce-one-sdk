import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { CloudforceOneStat, CloudforceOneStatLoadMatch } from '../CloudflareCloudforceOneTypes';
declare class CloudforceOneStatEntity extends CloudflareCloudforceOneEntityBase<CloudforceOneStat> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: CloudforceOneStatEntity): CloudforceOneStatEntity;
    load(this: any, reqmatch?: CloudforceOneStatLoadMatch, ctrl?: Control): Promise<CloudforceOneStatEntity>;
}
export { CloudforceOneStatEntity };
