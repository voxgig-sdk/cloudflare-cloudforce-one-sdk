# CloudflareCloudforceOne SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module CloudflareCloudforceOneFeatures
  def self.make_feature(name)
    case name
    when "base"
      CloudflareCloudforceOneBaseFeature.new
    when "test"
      CloudflareCloudforceOneTestFeature.new
    else
      CloudflareCloudforceOneBaseFeature.new
    end
  end
end
