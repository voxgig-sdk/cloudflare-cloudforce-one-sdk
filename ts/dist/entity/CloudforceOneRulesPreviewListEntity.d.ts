import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { CloudforceOneRulesPreviewList, CloudforceOneRulesPreviewListListMatch } from '../CloudflareCloudforceOneTypes';
declare class CloudforceOneRulesPreviewListEntity extends CloudflareCloudforceOneEntityBase<CloudforceOneRulesPreviewList> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: CloudforceOneRulesPreviewListEntity): CloudforceOneRulesPreviewListEntity;
    list(this: any, reqmatch?: CloudforceOneRulesPreviewListListMatch, ctrl?: Control): Promise<CloudforceOneRulesPreviewListEntity[]>;
}
export { CloudforceOneRulesPreviewListEntity };
