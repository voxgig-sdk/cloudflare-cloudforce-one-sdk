

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


describe('RuleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareCloudforceOneSDK.test()
    const ent = testsdk.Rule()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'rule.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"arrays":{"a":true,"h":"Arrays","n":"arrays","r":true,"t":"`$ARRAY`","key$":"arrays","index$":0},"headers":{"a":true,"h":"Headers","n":"headers","r":true,"t":"`$OBJECT`","key$":"headers","index$":1},"operators":{"a":true,"h":"Operators","n":"operators","r":true,"t":"`$OBJECT`","key$":"operators","index$":2},"scalars":{"a":true,"h":"Scalars","n":"scalars","r":true,"t":"`$ARRAY`","key$":"scalars","index$":3},"string_arrays":{"a":true,"h":"String Arrays","n":"string_arrays","r":true,"t":"`$ARRAY`","key$":"string_arrays","index$":4},"structs":{"a":true,"h":"Structs","n":"structs","r":true,"t":"`$ARRAY`","key$":"structs","index$":5}},"name":"rule","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/rules/managed","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/rules/managed","q":{"$action":"managed","exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"rules"},{"lit":"managed"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/rules/structured/schema","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/rules/structured/schema","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"rules"},{"lit":"structured"},{"lit":"schema"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"rule","name__orig":"rule","Name":"Rule","name_":"rule","name-":"rule","NAME":"RULE","index$":41}, {"active":true,"entity":"rule","key$":"BasicRuleFlow","kind":"basic","name":"BasicRuleFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"rule_ref01"}}],"index$":0}]}, 'Rule', {"GET /accounts/{account_id}/cloudforce-one/rules/managed":{"protocol":"http","parameters":[{"description":"Cloudflare account ID.","in":"path","name":"account_id","required":true,"schema":{"type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353"},"x-ref":"#/components/parameters/cloudforce-one_account_id","index$":0}]},"GET /accounts/{account_id}/cloudforce-one/rules/structured/schema":{"protocol":"http","parameters":[{"description":"Cloudflare account ID.","in":"path","name":"account_id","required":true,"schema":{"type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353"},"x-ref":"#/components/parameters/cloudforce-one_account_id","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let rule_ref01_data = Object.values(setup.data.existing.rule)[0] as any

    // LIST
    const rule_ref01_ent = client.Rule()
    const rule_ref01_match: any = {}
    rule_ref01_match['account_id'] = setup.idmap['account01']

    const rule_ref01_list = (await rule_ref01_ent.list(rule_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/rule/RuleTestData.json')

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
    ['rule01','rule02','rule03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_RULE_ENTID': idmap,
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_RULE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_RULE_ENTID']
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
  
