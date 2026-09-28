-- CloudflareCloudforceOne SDK error

local CloudflareCloudforceOneError = {}
CloudflareCloudforceOneError.__index = CloudflareCloudforceOneError


function CloudflareCloudforceOneError.new(code, msg, ctx)
  local self = setmetatable({}, CloudflareCloudforceOneError)
  self.is_sdk_error = true
  self.sdk = "CloudflareCloudforceOne"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CloudflareCloudforceOneError:error()
  return self.msg
end


function CloudflareCloudforceOneError:__tostring()
  return self.msg
end


return CloudflareCloudforceOneError
