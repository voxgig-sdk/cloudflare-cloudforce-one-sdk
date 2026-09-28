import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { Request, RequestLoadMatch, RequestCreateData, RequestUpdateData } from '../CloudflareCloudforceOneTypes';
declare class RequestEntity extends CloudflareCloudforceOneEntityBase<Request> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: RequestEntity): RequestEntity;
    load(this: any, reqmatch?: RequestLoadMatch, ctrl?: Control): Promise<RequestEntity>;
    create(this: any, reqdata?: RequestCreateData, ctrl?: Control): Promise<RequestEntity>;
    update(this: any, reqdata?: RequestUpdateData, ctrl?: Control): Promise<RequestEntity>;
}
export { RequestEntity };
