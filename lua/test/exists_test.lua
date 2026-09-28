-- CloudflareCloudforceOne SDK exists test

local sdk = require("cloudflare-cloudforce-one_sdk")

describe("CloudflareCloudforceOneSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
