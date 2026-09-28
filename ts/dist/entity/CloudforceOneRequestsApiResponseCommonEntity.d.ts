import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { CloudforceOneRequestsApiResponseCommon, CloudforceOneRequestsApiResponseCommonRemoveMatch } from '../CloudflareCloudforceOneTypes';
declare class CloudforceOneRequestsApiResponseCommonEntity extends CloudflareCloudforceOneEntityBase<CloudforceOneRequestsApiResponseCommon> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: CloudforceOneRequestsApiResponseCommonEntity): CloudforceOneRequestsApiResponseCommonEntity;
    remove(this: any, reqmatch?: CloudforceOneRequestsApiResponseCommonRemoveMatch, ctrl?: Control): Promise<CloudforceOneRequestsApiResponseCommonEntity>;
}
export { CloudforceOneRequestsApiResponseCommonEntity };
