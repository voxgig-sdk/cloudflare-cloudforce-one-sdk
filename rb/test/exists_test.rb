# CloudflareCloudforceOne SDK exists test

require "minitest/autorun"
require_relative "../CloudflareCloudforceOne_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = CloudflareCloudforceOneSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
