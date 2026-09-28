import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { DashboardAsset, DashboardAssetLoadMatch, DashboardAssetCreateData } from '../CloudflareCloudforceOneTypes';
declare class DashboardAssetEntity extends CloudflareCloudforceOneEntityBase<DashboardAsset> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: DashboardAssetEntity): DashboardAssetEntity;
    load(this: any, reqmatch?: DashboardAssetLoadMatch, ctrl?: Control): Promise<DashboardAssetEntity>;
    create(this: any, reqdata?: DashboardAssetCreateData, ctrl?: Control): Promise<DashboardAssetEntity>;
}
export { DashboardAssetEntity };
