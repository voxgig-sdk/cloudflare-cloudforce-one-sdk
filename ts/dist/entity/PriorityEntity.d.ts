import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { Priority, PriorityLoadMatch, PriorityCreateData, PriorityUpdateData } from '../CloudflareCloudforceOneTypes';
declare class PriorityEntity extends CloudflareCloudforceOneEntityBase<Priority> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: PriorityEntity): PriorityEntity;
    load(this: any, reqmatch?: PriorityLoadMatch, ctrl?: Control): Promise<PriorityEntity>;
    create(this: any, reqdata?: PriorityCreateData, ctrl?: Control): Promise<PriorityEntity>;
    update(this: any, reqdata?: PriorityUpdateData, ctrl?: Control): Promise<PriorityEntity>;
}
export { PriorityEntity };
