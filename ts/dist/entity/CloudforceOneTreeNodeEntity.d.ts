import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { CloudforceOneTreeNode, CloudforceOneTreeNodeListMatch } from '../CloudflareCloudforceOneTypes';
declare class CloudforceOneTreeNodeEntity extends CloudflareCloudforceOneEntityBase<CloudforceOneTreeNode> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: CloudforceOneTreeNodeEntity): CloudforceOneTreeNodeEntity;
    list(this: any, reqmatch?: CloudforceOneTreeNodeListMatch, ctrl?: Control): Promise<CloudforceOneTreeNodeEntity[]>;
}
export { CloudforceOneTreeNodeEntity };
