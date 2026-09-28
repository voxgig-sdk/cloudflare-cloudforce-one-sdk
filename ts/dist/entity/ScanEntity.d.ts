import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { Scan, ScanLoadMatch, ScanListMatch, ScanCreateData, ScanUpdateData, ScanRemoveMatch } from '../CloudflareCloudforceOneTypes';
declare class ScanEntity extends CloudflareCloudforceOneEntityBase<Scan> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: ScanEntity): ScanEntity;
    load(this: any, reqmatch?: ScanLoadMatch, ctrl?: Control): Promise<ScanEntity>;
    list(this: any, reqmatch?: ScanListMatch, ctrl?: Control): Promise<ScanEntity[]>;
    create(this: any, reqdata?: ScanCreateData, ctrl?: Control): Promise<ScanEntity>;
    update(this: any, reqdata?: ScanUpdateData, ctrl?: Control): Promise<ScanEntity>;
    remove(this: any, reqmatch?: ScanRemoveMatch, ctrl?: Control): Promise<ScanEntity>;
}
export { ScanEntity };
