import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { Indicator, IndicatorLoadMatch, IndicatorListMatch, IndicatorCreateData, IndicatorUpdateData, IndicatorRemoveMatch } from '../CloudflareCloudforceOneTypes';
declare class IndicatorEntity extends CloudflareCloudforceOneEntityBase<Indicator> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: IndicatorEntity): IndicatorEntity;
    load(this: any, reqmatch?: IndicatorLoadMatch, ctrl?: Control): Promise<IndicatorEntity>;
    list(this: any, reqmatch?: IndicatorListMatch, ctrl?: Control): Promise<IndicatorEntity[]>;
    create(this: any, reqdata?: IndicatorCreateData, ctrl?: Control): Promise<IndicatorEntity>;
    update(this: any, reqdata?: IndicatorUpdateData, ctrl?: Control): Promise<IndicatorEntity>;
    remove(this: any, reqmatch?: IndicatorRemoveMatch, ctrl?: Control): Promise<IndicatorEntity>;
}
export { IndicatorEntity };
