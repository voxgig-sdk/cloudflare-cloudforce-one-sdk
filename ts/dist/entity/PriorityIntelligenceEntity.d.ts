import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { PriorityIntelligence, PriorityIntelligenceLoadMatch, PriorityIntelligenceCreateData, PriorityIntelligenceUpdateData, PriorityIntelligenceRemoveMatch } from '../CloudflareCloudforceOneTypes';
declare class PriorityIntelligenceEntity extends CloudflareCloudforceOneEntityBase<PriorityIntelligence> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: PriorityIntelligenceEntity): PriorityIntelligenceEntity;
    load(this: any, reqmatch?: PriorityIntelligenceLoadMatch, ctrl?: Control): Promise<PriorityIntelligenceEntity>;
    create(this: any, reqdata?: PriorityIntelligenceCreateData, ctrl?: Control): Promise<PriorityIntelligenceEntity>;
    update(this: any, reqdata?: PriorityIntelligenceUpdateData, ctrl?: Control): Promise<PriorityIntelligenceEntity>;
    remove(this: any, reqmatch?: PriorityIntelligenceRemoveMatch, ctrl?: Control): Promise<PriorityIntelligenceEntity>;
}
export { PriorityIntelligenceEntity };
