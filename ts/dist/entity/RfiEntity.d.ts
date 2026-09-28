import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { Rfi, RfiLoadMatch, RfiCreateData, RfiUpdateData } from '../CloudflareCloudforceOneTypes';
declare class RfiEntity extends CloudflareCloudforceOneEntityBase<Rfi> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: RfiEntity): RfiEntity;
    load(this: any, reqmatch?: RfiLoadMatch, ctrl?: Control): Promise<RfiEntity>;
    create(this: any, reqdata?: RfiCreateData, ctrl?: Control): Promise<RfiEntity>;
    update(this: any, reqdata?: RfiUpdateData, ctrl?: Control): Promise<RfiEntity>;
}
export { RfiEntity };
