import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { PriorityIntelligenceRequirement, PriorityIntelligenceRequirementLoadMatch, PriorityIntelligenceRequirementCreateData, PriorityIntelligenceRequirementUpdateData, PriorityIntelligenceRequirementRemoveMatch } from '../CloudflareCloudforceOneTypes';
declare class PriorityIntelligenceRequirementEntity extends CloudflareCloudforceOneEntityBase<PriorityIntelligenceRequirement> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: PriorityIntelligenceRequirementEntity): PriorityIntelligenceRequirementEntity;
    load(this: any, reqmatch?: PriorityIntelligenceRequirementLoadMatch, ctrl?: Control): Promise<PriorityIntelligenceRequirementEntity>;
    create(this: any, reqdata?: PriorityIntelligenceRequirementCreateData, ctrl?: Control): Promise<PriorityIntelligenceRequirementEntity>;
    update(this: any, reqdata?: PriorityIntelligenceRequirementUpdateData, ctrl?: Control): Promise<PriorityIntelligenceRequirementEntity>;
    remove(this: any, reqmatch?: PriorityIntelligenceRequirementRemoveMatch, ctrl?: Control): Promise<PriorityIntelligenceRequirementEntity>;
}
export { PriorityIntelligenceRequirementEntity };
