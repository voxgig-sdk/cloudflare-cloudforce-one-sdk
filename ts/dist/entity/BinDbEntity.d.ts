import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { BinDb, BinDbLoadMatch, BinDbCreateData } from '../CloudflareCloudforceOneTypes';
declare class BinDbEntity extends CloudflareCloudforceOneEntityBase<BinDb> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: BinDbEntity): BinDbEntity;
    load(this: any, reqmatch?: BinDbLoadMatch, ctrl?: Control): Promise<BinDbEntity>;
    create(this: any, reqdata?: BinDbCreateData, ctrl?: Control): Promise<BinDbEntity>;
}
export { BinDbEntity };
