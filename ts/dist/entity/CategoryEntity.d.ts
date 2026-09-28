import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { Category, CategoryLoadMatch, CategoryListMatch, CategoryCreateData, CategoryUpdateData, CategoryRemoveMatch } from '../CloudflareCloudforceOneTypes';
declare class CategoryEntity extends CloudflareCloudforceOneEntityBase<Category> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: CategoryEntity): CategoryEntity;
    load(this: any, reqmatch?: CategoryLoadMatch, ctrl?: Control): Promise<CategoryEntity>;
    list(this: any, reqmatch?: CategoryListMatch, ctrl?: Control): Promise<CategoryEntity[]>;
    create(this: any, reqdata?: CategoryCreateData, ctrl?: Control): Promise<CategoryEntity>;
    update(this: any, reqdata?: CategoryUpdateData, ctrl?: Control): Promise<CategoryEntity>;
    remove(this: any, reqmatch?: CategoryRemoveMatch, ctrl?: Control): Promise<CategoryEntity>;
}
export { CategoryEntity };
