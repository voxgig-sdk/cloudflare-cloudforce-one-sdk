import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { RequestsDashboard, RequestsDashboardLoadMatch, RequestsDashboardListMatch } from '../CloudflareCloudforceOneTypes';
declare class RequestsDashboardEntity extends CloudflareCloudforceOneEntityBase<RequestsDashboard> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: RequestsDashboardEntity): RequestsDashboardEntity;
    load(this: any, reqmatch?: RequestsDashboardLoadMatch, ctrl?: Control): Promise<RequestsDashboardEntity>;
    list(this: any, reqmatch?: RequestsDashboardListMatch, ctrl?: Control): Promise<RequestsDashboardEntity[]>;
}
export { RequestsDashboardEntity };
