import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { Dataset, DatasetLoadMatch, DatasetListMatch, DatasetCreateData, DatasetUpdateData, DatasetRemoveMatch } from '../CloudflareCloudforceOneTypes';
declare class DatasetEntity extends CloudflareCloudforceOneEntityBase<Dataset> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: DatasetEntity): DatasetEntity;
    load(this: any, reqmatch?: DatasetLoadMatch, ctrl?: Control): Promise<DatasetEntity>;
    list(this: any, reqmatch?: DatasetListMatch, ctrl?: Control): Promise<DatasetEntity[]>;
    create(this: any, reqdata?: DatasetCreateData, ctrl?: Control): Promise<DatasetEntity>;
    update(this: any, reqdata?: DatasetUpdateData, ctrl?: Control): Promise<DatasetEntity>;
    remove(this: any, reqmatch?: DatasetRemoveMatch, ctrl?: Control): Promise<DatasetEntity>;
}
export { DatasetEntity };
