import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { PriorityIntelligenceRequirementsPir, PriorityIntelligenceRequirementsPirListMatch, PriorityIntelligenceRequirementsPirCreateData } from '../CloudflareCloudforceOneTypes';
declare class PriorityIntelligenceRequirementsPirEntity extends CloudflareCloudforceOneEntityBase<PriorityIntelligenceRequirementsPir> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: PriorityIntelligenceRequirementsPirEntity): PriorityIntelligenceRequirementsPirEntity;
    list(this: any, reqmatch?: PriorityIntelligenceRequirementsPirListMatch, ctrl?: Control): Promise<PriorityIntelligenceRequirementsPirEntity[]>;
    create(this: any, reqdata?: PriorityIntelligenceRequirementsPirCreateData, ctrl?: Control): Promise<PriorityIntelligenceRequirementsPirEntity>;
}
export { PriorityIntelligenceRequirementsPirEntity };
