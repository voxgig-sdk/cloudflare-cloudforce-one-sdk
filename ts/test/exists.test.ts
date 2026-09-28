
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CloudflareCloudforceOneSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = CloudflareCloudforceOneSDK.test()
    equal(testsdk instanceof CloudflareCloudforceOneSDK, true,
      'CloudflareCloudforceOneSDK.test() must return a client synchronously')
  })

})
