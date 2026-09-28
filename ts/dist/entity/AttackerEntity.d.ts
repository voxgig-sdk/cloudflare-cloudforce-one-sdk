import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { Attacker, AttackerLoadMatch } from '../CloudflareCloudforceOneTypes';
declare class AttackerEntity extends CloudflareCloudforceOneEntityBase<Attacker> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: AttackerEntity): AttackerEntity;
    load(this: any, reqmatch?: AttackerLoadMatch, ctrl?: Control): Promise<AttackerEntity>;
}
export { AttackerEntity };
