import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { CloudforceOneRulePreview, CloudforceOneRulePreviewLoadMatch, CloudforceOneRulePreviewCreateData, CloudforceOneRulePreviewUpdateData } from '../CloudflareCloudforceOneTypes';
declare class CloudforceOneRulePreviewEntity extends CloudflareCloudforceOneEntityBase<CloudforceOneRulePreview> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: CloudforceOneRulePreviewEntity): CloudforceOneRulePreviewEntity;
    load(this: any, reqmatch?: CloudforceOneRulePreviewLoadMatch, ctrl?: Control): Promise<CloudforceOneRulePreviewEntity>;
    create(this: any, reqdata?: CloudforceOneRulePreviewCreateData, ctrl?: Control): Promise<CloudforceOneRulePreviewEntity>;
    update(this: any, reqdata?: CloudforceOneRulePreviewUpdateData, ctrl?: Control): Promise<CloudforceOneRulePreviewEntity>;
}
export { CloudforceOneRulePreviewEntity };
