import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { IndicatorType, IndicatorTypeLoadMatch } from '../CloudflareCloudforceOneTypes';
declare class IndicatorTypeEntity extends CloudflareCloudforceOneEntityBase<IndicatorType> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: IndicatorTypeEntity): IndicatorTypeEntity;
    load(this: any, reqmatch?: IndicatorTypeLoadMatch, ctrl?: Control): Promise<IndicatorTypeEntity>;
}
export { IndicatorTypeEntity };
