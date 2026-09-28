import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { Collection, CollectionLoadMatch, CollectionListMatch, CollectionCreateData, CollectionUpdateData, CollectionRemoveMatch } from '../CloudflareCloudforceOneTypes';
declare class CollectionEntity extends CloudflareCloudforceOneEntityBase<Collection> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: CollectionEntity): CollectionEntity;
    load(this: any, reqmatch?: CollectionLoadMatch, ctrl?: Control): Promise<CollectionEntity>;
    list(this: any, reqmatch?: CollectionListMatch, ctrl?: Control): Promise<CollectionEntity[]>;
    create(this: any, reqdata?: CollectionCreateData, ctrl?: Control): Promise<CollectionEntity>;
    update(this: any, reqdata?: CollectionUpdateData, ctrl?: Control): Promise<CollectionEntity>;
    remove(this: any, reqmatch?: CollectionRemoveMatch, ctrl?: Control): Promise<CollectionEntity>;
}
export { CollectionEntity };
