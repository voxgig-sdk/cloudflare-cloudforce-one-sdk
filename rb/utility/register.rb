# CloudflareCloudforceOne SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

CloudflareCloudforceOneUtility.registrar = ->(u) {
  u.clean = CloudflareCloudforceOneUtilities::Clean
  u.done = CloudflareCloudforceOneUtilities::Done
  u.make_error = CloudflareCloudforceOneUtilities::MakeError
  u.feature_add = CloudflareCloudforceOneUtilities::FeatureAdd
  u.feature_hook = CloudflareCloudforceOneUtilities::FeatureHook
  u.feature_init = CloudflareCloudforceOneUtilities::FeatureInit
  u.fetcher = CloudflareCloudforceOneUtilities::Fetcher
  u.make_fetch_def = CloudflareCloudforceOneUtilities::MakeFetchDef
  u.make_context = CloudflareCloudforceOneUtilities::MakeContext
  u.make_options = CloudflareCloudforceOneUtilities::MakeOptions
  u.make_request = CloudflareCloudforceOneUtilities::MakeRequest
  u.make_response = CloudflareCloudforceOneUtilities::MakeResponse
  u.make_result = CloudflareCloudforceOneUtilities::MakeResult
  u.make_point = CloudflareCloudforceOneUtilities::MakePoint
  u.make_spec = CloudflareCloudforceOneUtilities::MakeSpec
  u.make_url = CloudflareCloudforceOneUtilities::MakeUrl
  u.param = CloudflareCloudforceOneUtilities::Param
  u.prepare_auth = CloudflareCloudforceOneUtilities::PrepareAuth
  u.prepare_body = CloudflareCloudforceOneUtilities::PrepareBody
  u.prepare_headers = CloudflareCloudforceOneUtilities::PrepareHeaders
  u.prepare_method = CloudflareCloudforceOneUtilities::PrepareMethod
  u.prepare_params = CloudflareCloudforceOneUtilities::PrepareParams
  u.prepare_path = CloudflareCloudforceOneUtilities::PreparePath
  u.prepare_query = CloudflareCloudforceOneUtilities::PrepareQuery
  u.graphql_body = CloudflareCloudforceOneUtilities::GraphqlBody
  u.graphql_errors = CloudflareCloudforceOneUtilities::GraphqlErrors
  u.result_basic = CloudflareCloudforceOneUtilities::ResultBasic
  u.result_body = CloudflareCloudforceOneUtilities::ResultBody
  u.result_headers = CloudflareCloudforceOneUtilities::ResultHeaders
  u.transform_request = CloudflareCloudforceOneUtilities::TransformRequest
  u.transform_response = CloudflareCloudforceOneUtilities::TransformResponse
}
