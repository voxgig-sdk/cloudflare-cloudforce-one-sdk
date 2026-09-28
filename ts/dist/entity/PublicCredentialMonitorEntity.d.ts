import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { PublicCredentialMonitor, PublicCredentialMonitorListMatch, PublicCredentialMonitorCreateData, PublicCredentialMonitorRemoveMatch } from '../CloudflareCloudforceOneTypes';
declare class PublicCredentialMonitorEntity extends CloudflareCloudforceOneEntityBase<PublicCredentialMonitor> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: PublicCredentialMonitorEntity): PublicCredentialMonitorEntity;
    list(this: any, reqmatch?: PublicCredentialMonitorListMatch, ctrl?: Control): Promise<PublicCredentialMonitorEntity[]>;
    create(this: any, reqdata?: PublicCredentialMonitorCreateData, ctrl?: Control): Promise<PublicCredentialMonitorEntity>;
    remove(this: any, reqmatch?: PublicCredentialMonitorRemoveMatch, ctrl?: Control): Promise<PublicCredentialMonitorEntity>;
}
export { PublicCredentialMonitorEntity };
