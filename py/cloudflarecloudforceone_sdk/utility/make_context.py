# CloudflareCloudforceOne SDK utility: make_context

from cloudflarecloudforceone_sdk.core.context import CloudflareCloudforceOneContext


def make_context_util(ctxmap, basectx):
    return CloudflareCloudforceOneContext(ctxmap, basectx)
