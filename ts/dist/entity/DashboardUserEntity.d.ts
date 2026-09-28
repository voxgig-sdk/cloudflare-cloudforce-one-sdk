import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { DashboardUser, DashboardUserLoadMatch } from '../CloudflareCloudforceOneTypes';
declare class DashboardUserEntity extends CloudflareCloudforceOneEntityBase<DashboardUser> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: DashboardUserEntity): DashboardUserEntity;
    load(this: any, reqmatch?: DashboardUserLoadMatch, ctrl?: Control): Promise<DashboardUserEntity>;
}
export { DashboardUserEntity };
