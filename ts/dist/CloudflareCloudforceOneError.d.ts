import { Context } from './Context';
declare class CloudflareCloudforceOneError extends Error {
    isCloudflareCloudforceOneError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { CloudflareCloudforceOneError };
