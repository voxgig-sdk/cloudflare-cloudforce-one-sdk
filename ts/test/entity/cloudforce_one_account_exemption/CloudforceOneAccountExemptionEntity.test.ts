

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


describe('CloudforceOneAccountExemptionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareCloudforceOneSDK.test()
    const ent = testsdk.CloudforceOneAccountExemption()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'cloudforce_one_account_exemption.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"namespace":{"a":true,"h":"Namespace","n":"namespace","op":{"create":{"req":false,"type":"`$ARRAY`"},"update":{"req":false,"type":"`$ARRAY`"}},"r":true,"t":"`$ARRAY`","key$":"namespace","index$":0},"tag_match":{"a":true,"h":"Tag Match","n":"tag_match","op":{"create":{"req":false,"type":"`$ARRAY`"},"update":{"req":false,"type":"`$ARRAY`"}},"r":true,"t":"`$ARRAY`","key$":"tag_match","index$":1},"worker_name":{"a":true,"h":"Worker Name","n":"worker_name","op":{"create":{"req":false,"type":"`$ARRAY`"},"update":{"req":false,"type":"`$ARRAY`"}},"r":true,"t":"`$ARRAY`","key$":"worker_name","index$":2}},"name":"cloudforce_one_account_exemption","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/cloudforce-one/rules/exemptions","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/cloudforce-one/rules/exemptions","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"rules"},{"lit":"exemptions"}],"t":{"req":{"namespace":"`reqdata.namespace`","tag_match":"`reqdata.tag_match`","worker_name":"`reqdata.worker_name`"},"res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/rules/exemptions","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/rules/exemptions","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"rules"},{"lit":"exemptions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/cloudforce-one/rules/exemptions","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/cloudforce-one/rules/exemptions","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"rules"},{"lit":"exemptions"}],"t":{"req":{"namespace":"`reqdata.namespace`","tag_match":"`reqdata.tag_match`","worker_name":"`reqdata.worker_name`"},"res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/cloudforce-one/rules/exemptions","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/cloudforce-one/rules/exemptions","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"rules"},{"lit":"exemptions"}],"t":{"req":{"namespace":"`reqdata.namespace`","tag_match":"`reqdata.tag_match`","worker_name":"`reqdata.worker_name`"},"res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"cloudforce_one_account_exemption","name__orig":"cloudforce_one_account_exemption","Name":"CloudforceOneAccountExemption","name_":"cloudforce_one_account_exemption","name-":"cloudforce-one-account-exemption","NAME":"CLOUDFORCE_ONE_ACCOUNT_EXEMPTION","index$":4}, {"active":true,"entity":"cloudforce_one_account_exemption","key$":"BasicCloudforceOneAccountExemptionFlow","kind":"basic","name":"BasicCloudforceOneAccountExemptionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"cloudforce_one_account_exemption_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"cloudforce_one_account_exemption_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"cloudforce_one_account_exemption_ref01","srcdatavar":"cloudforce_one_account_exemption_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-cloudforce_one_account_exemption_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"cloudforce_one_account_exemption_ref01","suffix":"_rm0"},"m":{"id":"cloudforce_one_account_exemption01"},"o":"remove","s":[],"v":[],"index$":3},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"cloudforce_one_account_exemption_ref01"}}],"index$":4}]}, 'CloudforceOneAccountExemption', {"POST /accounts/{account_id}/cloudforce-one/rules/exemptions":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"namespace":{"type":"array","items":{"example":"^test-.*$","minLength":1,"type":"string"},"key$":"namespace"},"tag_match":{"type":"array","items":{"example":"^test-.*$","minLength":1,"type":"string"},"key$":"tag_match"},"worker_name":{"type":"array","items":{"example":"^test-.*$","minLength":1,"type":"string"},"key$":"worker_name"}},"additionalProperties":false,"x-ref":"#/components/schemas/cloudforce-one_PartialAccountExemptions","index$":1}}}},"parameters":[{"description":"Cloudflare account ID.","in":"path","name":"account_id","required":true,"schema":{"type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353"},"x-ref":"#/components/parameters/cloudforce-one_account_id","index$":0}]},"GET /accounts/{account_id}/cloudforce-one/rules/exemptions":{"protocol":"http","parameters":[{"description":"Cloudflare account ID.","in":"path","name":"account_id","required":true,"schema":{"type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353"},"x-ref":"#/components/parameters/cloudforce-one_account_id","index$":0}]},"DELETE /accounts/{account_id}/cloudforce-one/rules/exemptions":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"namespace":{"type":"array","items":{"example":"^test-.*$","minLength":1,"type":"string"},"key$":"namespace"},"tag_match":{"type":"array","items":{"example":"^test-.*$","minLength":1,"type":"string"},"key$":"tag_match"},"worker_name":{"type":"array","items":{"example":"^test-.*$","minLength":1,"type":"string"},"key$":"worker_name"}},"additionalProperties":false,"x-ref":"#/components/schemas/cloudforce-one_PartialAccountExemptions"}}}},"parameters":[{"description":"Cloudflare account ID.","in":"path","name":"account_id","required":true,"schema":{"type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353"},"x-ref":"#/components/parameters/cloudforce-one_account_id","index$":0}]},"PUT /accounts/{account_id}/cloudforce-one/rules/exemptions":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"namespace":{"type":"array","items":{"type":"object","properties":{"new_pattern":{"type":"string","example":"^test-.*$","minLength":1},"old_pattern":{"type":"string","example":"^test-.*$","minLength":1}},"required":["old_pattern","new_pattern"],"x-ref":"#/components/schemas/cloudforce-one_ExemptionUpdateEntry"},"key$":"namespace"},"tag_match":{"type":"array","items":{"type":"object","properties":{"new_pattern":{"type":"string","example":"^test-.*$","minLength":1},"old_pattern":{"type":"string","example":"^test-.*$","minLength":1}},"required":["old_pattern","new_pattern"],"x-ref":"#/components/schemas/cloudforce-one_ExemptionUpdateEntry"},"key$":"tag_match"},"worker_name":{"type":"array","items":{"type":"object","properties":{"new_pattern":{"type":"string","example":"^test-.*$","minLength":1},"old_pattern":{"type":"string","example":"^test-.*$","minLength":1}},"required":["old_pattern","new_pattern"],"x-ref":"#/components/schemas/cloudforce-one_ExemptionUpdateEntry"},"key$":"worker_name"}},"additionalProperties":false,"x-ref":"#/components/schemas/cloudforce-one_UpdateAccountExemptionsBody","index$":1}}}},"parameters":[{"description":"Cloudflare account ID.","in":"path","name":"account_id","required":true,"schema":{"type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353"},"x-ref":"#/components/parameters/cloudforce-one_account_id","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const cloudforce_one_account_exemption_ref01_ent = client.CloudforceOneAccountExemption()
    let cloudforce_one_account_exemption_ref01_data = setup.data.new.cloudforce_one_account_exemption['cloudforce_one_account_exemption_ref01']
    cloudforce_one_account_exemption_ref01_data['account_id'] = setup.idmap['account01']

    cloudforce_one_account_exemption_ref01_data = (await cloudforce_one_account_exemption_ref01_ent.create(cloudforce_one_account_exemption_ref01_data)).data()
    assert(null != cloudforce_one_account_exemption_ref01_data)


    // LIST
    const cloudforce_one_account_exemption_ref01_match: any = {}
    cloudforce_one_account_exemption_ref01_match['account_id'] = setup.idmap['account01']

    const cloudforce_one_account_exemption_ref01_list = (await cloudforce_one_account_exemption_ref01_ent.list(cloudforce_one_account_exemption_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const cloudforce_one_account_exemption_ref01_data_up0: any = {}

    const cloudforce_one_account_exemption_ref01_resdata_up0 = (await cloudforce_one_account_exemption_ref01_ent.update(cloudforce_one_account_exemption_ref01_data_up0)).data()
    assert(null != cloudforce_one_account_exemption_ref01_resdata_up0)



    // LIST
    const cloudforce_one_account_exemption_ref01_match_rt0: any = {}
    cloudforce_one_account_exemption_ref01_match_rt0['account_id'] = setup.idmap['account01']

    const cloudforce_one_account_exemption_ref01_list_rt0 = (await cloudforce_one_account_exemption_ref01_ent.list(cloudforce_one_account_exemption_ref01_match_rt0)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/cloudforce_one_account_exemption/CloudforceOneAccountExemptionTestData.json')

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
    ['cloudforce_one_account_exemption01','cloudforce_one_account_exemption02','cloudforce_one_account_exemption03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_ACCOUNT_EXEMPTION_ENTID': idmap,
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_ACCOUNT_EXEMPTION_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_ACCOUNT_EXEMPTION_ENTID']
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
  
