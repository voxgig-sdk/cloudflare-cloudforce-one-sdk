

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


describe('CloudforceOneValidationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareCloudforceOneSDK.test()
    const ent = testsdk.CloudforceOneValidation()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'cloudforce_one_validation.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"content":{"a":true,"h":"Content","n":"content","r":true,"t":"`$STRING`","key$":"content","index$":0},"error":{"a":true,"h":"Error","n":"error","r":false,"t":"`$STRING`","key$":"error","index$":1},"excludeRuleId":{"a":true,"fo":"uuid","h":"Exclude Rule Id","n":"excludeRuleId","r":false,"t":"`$STRING`","key$":"excludeRuleId","index$":2},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":3},"namespaces":{"a":true,"h":"Namespaces","n":"namespaces","r":false,"t":"`$ARRAY`","key$":"namespaces","index$":4},"path":{"a":true,"h":"Path","n":"path","r":false,"t":"`$STRING`","key$":"path","index$":5},"valid":{"a":true,"h":"Valid","n":"valid","r":true,"t":"`$BOOLEAN`","key$":"valid","index$":6}},"name":"cloudforce_one_validation","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/cloudforce-one/rules/validate","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/cloudforce-one/rules/validate","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"rules"},{"lit":"validate"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"cloudforce_one_validation","name__orig":"cloudforce_one_validation","Name":"CloudforceOneValidation","name_":"cloudforce_one_validation","name-":"cloudforce-one-validation","NAME":"CLOUDFORCE_ONE_VALIDATION","index$":19}, {"active":true,"entity":"cloudforce_one_validation","key$":"BasicCloudforceOneValidationFlow","kind":"basic","name":"BasicCloudforceOneValidationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"cloudforce_one_validation_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0}]}, 'CloudforceOneValidation', {"POST /accounts/{account_id}/cloudforce-one/rules/validate":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"content":{"minLength":1,"type":"string","key$":"content"},"excludeRuleId":{"type":"string","format":"uuid","key$":"excludeRuleId"},"name":{"type":"string","maxLength":255,"minLength":1,"key$":"name"},"namespaces":{"type":"array","items":{"maxLength":255,"minLength":1,"type":"string"},"default":[],"key$":"namespaces"},"path":{"type":"string","minLength":1,"key$":"path"}},"required":["name","content"],"index$":1}}}},"parameters":[{"description":"Cloudflare account ID.","in":"path","name":"account_id","required":true,"schema":{"type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353"},"x-ref":"#/components/parameters/cloudforce-one_account_id","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const cloudforce_one_validation_ref01_ent = client.CloudforceOneValidation()
    let cloudforce_one_validation_ref01_data = setup.data.new.cloudforce_one_validation['cloudforce_one_validation_ref01']
    cloudforce_one_validation_ref01_data['account_id'] = setup.idmap['account01']

    cloudforce_one_validation_ref01_data = (await cloudforce_one_validation_ref01_ent.create(cloudforce_one_validation_ref01_data)).data()
    assert(null != cloudforce_one_validation_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/cloudforce_one_validation/CloudforceOneValidationTestData.json')

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
    ['cloudforce_one_validation01','cloudforce_one_validation02','cloudforce_one_validation03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_VALIDATION_ENTID': idmap,
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_VALIDATION_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_VALIDATION_ENTID']
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
  
