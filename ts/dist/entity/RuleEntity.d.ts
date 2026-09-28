import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { Rule, RuleListMatch } from '../CloudflareCloudforceOneTypes';
declare class RuleEntity extends CloudflareCloudforceOneEntityBase<Rule> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: RuleEntity): RuleEntity;
    list(this: any, reqmatch?: RuleListMatch, ctrl?: Control): Promise<RuleEntity[]>;
}
export { RuleEntity };
