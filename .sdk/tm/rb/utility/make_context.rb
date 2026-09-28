# CloudflareCloudforceOne SDK utility: make_context
require_relative '../core/context'
module CloudflareCloudforceOneUtilities
  MakeContext = ->(ctxmap, basectx) {
    CloudflareCloudforceOneContext.new(ctxmap, basectx)
  }
end
