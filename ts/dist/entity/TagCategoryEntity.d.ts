import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { TagCategory, TagCategoryLoadMatch, TagCategoryListMatch, TagCategoryCreateData, TagCategoryUpdateData, TagCategoryRemoveMatch } from '../CloudflareCloudforceOneTypes';
declare class TagCategoryEntity extends CloudflareCloudforceOneEntityBase<TagCategory> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: TagCategoryEntity): TagCategoryEntity;
    load(this: any, reqmatch?: TagCategoryLoadMatch, ctrl?: Control): Promise<TagCategoryEntity>;
    list(this: any, reqmatch?: TagCategoryListMatch, ctrl?: Control): Promise<TagCategoryEntity[]>;
    create(this: any, reqdata?: TagCategoryCreateData, ctrl?: Control): Promise<TagCategoryEntity>;
    update(this: any, reqdata?: TagCategoryUpdateData, ctrl?: Control): Promise<TagCategoryEntity>;
    remove(this: any, reqmatch?: TagCategoryRemoveMatch, ctrl?: Control): Promise<TagCategoryEntity>;
}
export { TagCategoryEntity };
