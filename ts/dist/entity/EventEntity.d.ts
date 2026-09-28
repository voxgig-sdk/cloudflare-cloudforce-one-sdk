import { CloudflareCloudforceOneEntityBase } from '../CloudflareCloudforceOneEntityBase';
import type { CloudflareCloudforceOneSDK } from '../CloudflareCloudforceOneSDK';
import type { Control } from '../types';
import type { Event, EventLoadMatch, EventListMatch, EventCreateData, EventUpdateData, EventRemoveMatch } from '../CloudflareCloudforceOneTypes';
declare class EventEntity extends CloudflareCloudforceOneEntityBase<Event> {
    constructor(client: CloudflareCloudforceOneSDK, entopts: any);
    make(this: EventEntity): EventEntity;
    load(this: any, reqmatch?: EventLoadMatch, ctrl?: Control): Promise<EventEntity>;
    list(this: any, reqmatch?: EventListMatch, ctrl?: Control): Promise<EventEntity[]>;
    create(this: any, reqdata?: EventCreateData, ctrl?: Control): Promise<EventEntity>;
    update(this: any, reqdata?: EventUpdateData, ctrl?: Control): Promise<EventEntity>;
    remove(this: any, reqmatch?: EventRemoveMatch, ctrl?: Control): Promise<EventEntity>;
}
export { EventEntity };
