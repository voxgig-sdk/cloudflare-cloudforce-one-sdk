import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { RfiMessage, RfiMessageLoadMatch, RfiMessageListMatch, RfiMessageCreateData, RfiMessageUpdateData } from '../CloudflareCloudforceOneTypes';
declare class RfiMessageEntity extends CloudflareCloudforceOneEntityBase<RfiMessage> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: RfiMessageEntity): RfiMessageEntity;
    load(this: any, reqmatch?: RfiMessageLoadMatch, ctrl?: Control): Promise<RfiMessageEntity>;
    list(this: any, reqmatch?: RfiMessageListMatch, ctrl?: Control): Promise<RfiMessageEntity[]>;
    create(this: any, reqdata?: RfiMessageCreateData, ctrl?: Control): Promise<RfiMessageEntity>;
    update(this: any, reqdata?: RfiMessageUpdateData, ctrl?: Control): Promise<RfiMessageEntity>;
}
export { RfiMessageEntity };
