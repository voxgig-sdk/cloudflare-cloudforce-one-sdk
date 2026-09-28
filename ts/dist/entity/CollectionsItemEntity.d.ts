import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { CollectionsItem, CollectionsItemCreateData } from '../CloudflareCloudforceOneTypes';
declare class CollectionsItemEntity extends CloudflareCloudforceOneEntityBase<CollectionsItem> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: CollectionsItemEntity): CollectionsItemEntity;
    create(this: any, reqdata?: CollectionsItemCreateData, ctrl?: Control): Promise<CollectionsItemEntity>;
}
export { CollectionsItemEntity };
