import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { Permission, PermissionListMatch, PermissionCreateData, PermissionUpdateData, PermissionRemoveMatch } from '../CloudflareCloudforceOneTypes';
declare class PermissionEntity extends CloudflareCloudforceOneEntityBase<Permission> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: PermissionEntity): PermissionEntity;
    list(this: any, reqmatch?: PermissionListMatch, ctrl?: Control): Promise<PermissionEntity[]>;
    create(this: any, reqdata?: PermissionCreateData, ctrl?: Control): Promise<PermissionEntity>;
    update(this: any, reqdata?: PermissionUpdateData, ctrl?: Control): Promise<PermissionEntity>;
    remove(this: any, reqmatch?: PermissionRemoveMatch, ctrl?: Control): Promise<PermissionEntity>;
}
export { PermissionEntity };
