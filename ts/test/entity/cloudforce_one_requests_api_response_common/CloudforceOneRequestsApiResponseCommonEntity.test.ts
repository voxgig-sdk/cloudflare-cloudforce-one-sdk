

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CloudflareCloudforceOneSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('CloudforceOneRequestsApiResponseCommonEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareCloudforceOneSDK.test()
    const ent = testsdk.CloudforceOneRequestsApiResponseCommon()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'cloudforce_one_requests_api_response_common.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"cloudforce_one_requests_api_response_common","op":{"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/cloudforce-one/requests/{request_id}/asset/{asset_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","k":"param","n":"asset_id","or":"asset_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","k":"param","n":"request_id","or":"request_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/cloudforce-one/requests/{request_id}/asset/{asset_id}","q":{"exist":["account_id","asset_id","request_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"requests"},{"var":"request_id"},{"lit":"asset"},{"var":"asset_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /accounts/{account_id}/cloudforce-one/requests/{request_id}/message/{message_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"message_id","or":"message_id","r":true,"t":"`$INTEGER`","index$":1},{"a":true,"ex":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","k":"param","n":"request_id","or":"request_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/cloudforce-one/requests/{request_id}/message/{message_id}","q":{"exist":["account_id","message_id","request_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"requests"},{"var":"request_id"},{"lit":"message"},{"var":"message_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"DELETE /accounts/{account_id}/cloudforce-one/requests/priority/{priority_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","k":"param","n":"priority_id","or":"priority_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/cloudforce-one/requests/priority/{priority_id}","q":{"exist":["account_id","priority_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"requests"},{"lit":"priority"},{"var":"priority_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"DELETE /accounts/{account_id}/cloudforce-one/requests/{request_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","k":"param","n":"request_id","or":"request_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/cloudforce-one/requests/{request_id}","q":{"exist":["account_id","request_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"requests"},{"var":"request_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.priority"],["$.main.kit.entity.request"],["$.main.kit.entity.request"],["$.main.kit.entity.request"]]},"key$":"cloudforce_one_requests_api_response_common","name__orig":"cloudforce_one_requests_api_response_common","Name":"CloudforceOneRequestsApiResponseCommon","name_":"cloudforce_one_requests_api_response_common","name-":"cloudforce-one-requests-api-response-common","NAME":"CLOUDFORCE_ONE_REQUESTS_API_RESPONSE_COMMON","index$":9}, {"active":true,"entity":"cloudforce_one_requests_api_response_common","key$":"BasicCloudforceOneRequestsApiResponseCommonFlow","kind":"basic","name":"BasicCloudforceOneRequestsApiResponseCommonFlow","param":{},"step":[]}, 'CloudforceOneRequestsApiResponseCommon', {"DELETE /accounts/{account_id}/cloudforce-one/requests/{request_id}/asset/{asset_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-ref":"#/components/schemas/cloudforce-one-requests_identifier"},"index$":0},{"name":"request_id","in":"path","required":true,"schema":{"description":"UUID.","type":"string","example":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","maxLength":36,"x-ref":"#/components/schemas/cloudforce-one-requests_uuid"},"index$":1},{"name":"asset_id","in":"path","required":true,"schema":{"description":"UUID.","type":"string","example":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","maxLength":36,"x-ref":"#/components/schemas/cloudforce-one-requests_uuid"},"index$":2}]},"DELETE /accounts/{account_id}/cloudforce-one/requests/{request_id}/message/{message_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-ref":"#/components/schemas/cloudforce-one-requests_identifier"},"index$":0},{"name":"request_id","in":"path","required":true,"schema":{"description":"UUID.","type":"string","example":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","maxLength":36,"x-ref":"#/components/schemas/cloudforce-one-requests_uuid"},"index$":1},{"name":"message_id","in":"path","required":true,"schema":{"type":"integer"},"index$":2}]},"DELETE /accounts/{account_id}/cloudforce-one/requests/priority/{priority_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-ref":"#/components/schemas/cloudforce-one-requests_identifier"},"index$":0},{"name":"priority_id","in":"path","required":true,"schema":{"description":"UUID.","type":"string","example":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","maxLength":36,"x-ref":"#/components/schemas/cloudforce-one-requests_uuid"},"index$":1}]},"DELETE /accounts/{account_id}/cloudforce-one/requests/{request_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-ref":"#/components/schemas/cloudforce-one-requests_identifier"},"index$":0},{"name":"request_id","in":"path","required":true,"schema":{"description":"UUID.","type":"string","example":"f174e90a-fafe-4643-bbbc-4a0ed4fc8415","maxLength":36,"x-ref":"#/components/schemas/cloudforce-one-requests_uuid"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let cloudforce_one_requests_api_response_common_ref01_data = Object.values(setup.data.existing.cloudforce_one_requests_api_response_common)[0] as any

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/cloudforce_one_requests_api_response_common/CloudforceOneRequestsApiResponseCommonTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CloudflareCloudforceOneSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['cloudforce_one_requests_api_response_common01','cloudforce_one_requests_api_response_common02','cloudforce_one_requests_api_response_common03','priority01','priority02','priority03','request01','request02','request03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_REQUESTS_API_RESPONSE_COMMON_ENTID': idmap,
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_REQUESTS_API_RESPONSE_COMMON_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_REQUESTS_API_RESPONSE_COMMON_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new CloudflareCloudforceOneSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.CLOUDFLARE_CLOUDFORCE_ONE_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
