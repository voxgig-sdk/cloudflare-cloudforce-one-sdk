import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { ThreatSignal, ThreatSignalLoadMatch, ThreatSignalListMatch, ThreatSignalCreateData, ThreatSignalUpdateData, ThreatSignalRemoveMatch } from '../CloudflareCloudforceOneTypes';
declare class ThreatSignalEntity extends CloudflareCloudforceOneEntityBase<ThreatSignal> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: ThreatSignalEntity): ThreatSignalEntity;
    load(this: any, reqmatch?: ThreatSignalLoadMatch, ctrl?: Control): Promise<ThreatSignalEntity>;
    list(this: any, reqmatch?: ThreatSignalListMatch, ctrl?: Control): Promise<ThreatSignalEntity[]>;
    create(this: any, reqdata?: ThreatSignalCreateData, ctrl?: Control): Promise<ThreatSignalEntity>;
    update(this: any, reqdata?: ThreatSignalUpdateData, ctrl?: Control): Promise<ThreatSignalEntity>;
    remove(this: any, reqmatch?: ThreatSignalRemoveMatch, ctrl?: Control): Promise<ThreatSignalEntity>;
}
export { ThreatSignalEntity };
