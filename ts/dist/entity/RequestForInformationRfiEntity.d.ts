import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { RequestForInformationRfi, RequestForInformationRfiLoadMatch, RequestForInformationRfiListMatch, RequestForInformationRfiCreateData, RequestForInformationRfiUpdateData } from '../CloudflareCloudforceOneTypes';
declare class RequestForInformationRfiEntity extends CloudflareCloudforceOneEntityBase<RequestForInformationRfi> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: RequestForInformationRfiEntity): RequestForInformationRfiEntity;
    load(this: any, reqmatch?: RequestForInformationRfiLoadMatch, ctrl?: Control): Promise<RequestForInformationRfiEntity>;
    list(this: any, reqmatch?: RequestForInformationRfiListMatch, ctrl?: Control): Promise<RequestForInformationRfiEntity[]>;
    create(this: any, reqdata?: RequestForInformationRfiCreateData, ctrl?: Control): Promise<RequestForInformationRfiEntity>;
    update(this: any, reqdata?: RequestForInformationRfiUpdateData, ctrl?: Control): Promise<RequestForInformationRfiEntity>;
}
export { RequestForInformationRfiEntity };
