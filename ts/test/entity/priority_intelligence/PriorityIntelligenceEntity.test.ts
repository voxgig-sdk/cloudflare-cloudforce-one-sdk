

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


describe('PriorityIntelligenceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareCloudforceOneSDK.test()
    const ent = testsdk.PriorityIntelligence()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE
    for (const op of ['create', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'priority_intelligence.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"labels":{"a":true,"h":"Labels","n":"labels","r":false,"t":"`$ARRAY`","key$":"labels","index$":1},"priority":{"a":true,"h":"Priority","n":"priority","r":false,"t":"`$INTEGER`","key$":"priority","index$":2},"requirement":{"a":true,"h":"Requirement","n":"requirement","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"t":"`$STRING`","key$":"requirement","index$":3},"tlp":{"a":true,"h":"Tlp","n":"tlp","r":false,"t":"`$STRING`","key$":"tlp","index$":4}},"id":{"field":"id","name":"id"},"name":"priority_intelligence","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/cloudforce-one/v2/priority-intelligence","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/cloudforce-one/v2/priority-intelligence","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"v2"},{"lit":"priority-intelligence"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/v2/priority-intelligence","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/v2/priority-intelligence","q":{"exist":["account_id","page","per_page"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"v2"},{"lit":"priority-intelligence"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/{priority_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"priority_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/v2/priority-intelligence/{priority_id}","q":{"exist":["account_id","id"]},"r":{"param":{"priority_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"v2"},{"lit":"priority-intelligence"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/{priority_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"priority_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/cloudforce-one/v2/priority-intelligence/{priority_id}","q":{"exist":["account_id","id"]},"r":{"param":{"priority_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"v2"},{"lit":"priority-intelligence"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/{priority_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"priority_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/cloudforce-one/v2/priority-intelligence/{priority_id}","q":{"exist":["account_id","id"]},"r":{"param":{"priority_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"v2"},{"lit":"priority-intelligence"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"priority_intelligence","name__orig":"priority_intelligence","Name":"PriorityIntelligence","name_":"priority_intelligence","name-":"priority-intelligence","NAME":"PRIORITY_INTELLIGENCE","index$":32}, {"active":true,"entity":"priority_intelligence","key$":"BasicPriorityIntelligenceFlow","kind":"basic","name":"BasicPriorityIntelligenceFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"priority_intelligence_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"priority_intelligence_ref01","srcdatavar":"priority_intelligence_ref01_data","suffix":"_up0","textfield":"requirement"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-priority_intelligence_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"priority_intelligence_ref01","srcdatavar":"priority_intelligence_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"priority_intelligence01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-priority_intelligence_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"priority_intelligence_ref01","suffix":"_rm0"},"m":{"account_id":"account01","id":"priority_intelligence01"},"o":"remove","s":[],"v":[],"index$":3}]}, 'PriorityIntelligence', {"POST /accounts/{account_id}/cloudforce-one/v2/priority-intelligence":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"labels":{"type":"array","items":{"maxLength":100,"type":"string"},"default":[],"maxItems":50,"key$":"labels"},"priority":{"type":"integer","default":0,"minimum":0,"key$":"priority"},"requirement":{"type":"string","maxLength":4000,"minLength":1,"key$":"requirement"},"tlp":{"type":"string","default":"amber","key$":"tlp"}},"required":["requirement"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","minLength":1},"index$":0}]},"GET /accounts/{account_id}/cloudforce-one/v2/priority-intelligence":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","minLength":1},"index$":0},{"name":"page","in":"query","schema":{"type":"integer","default":1,"minimum":1},"index$":1},{"name":"per_page","in":"query","schema":{"type":"integer","default":20,"maximum":100,"minimum":1},"index$":2}]},"GET /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/{priority_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","minLength":1},"index$":0},{"name":"priority_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"index$":1}]},"DELETE /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/{priority_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","minLength":1},"index$":0},{"name":"priority_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"index$":1}]},"PUT /accounts/{account_id}/cloudforce-one/v2/priority-intelligence/{priority_id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"labels":{"type":"array","items":{"maxLength":100,"type":"string"},"maxItems":50,"key$":"labels"},"priority":{"type":"integer","minimum":0,"key$":"priority"},"requirement":{"type":"string","maxLength":4000,"minLength":1,"key$":"requirement"},"tlp":{"type":"string","key$":"tlp"}},"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","minLength":1},"index$":0},{"name":"priority_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const priority_intelligence_ref01_ent = client.PriorityIntelligence()
    let priority_intelligence_ref01_data = setup.data.new.priority_intelligence['priority_intelligence_ref01']
    priority_intelligence_ref01_data['account_id'] = setup.idmap['account01']

    priority_intelligence_ref01_data = (await priority_intelligence_ref01_ent.create(priority_intelligence_ref01_data)).data()
    assert(null != priority_intelligence_ref01_data.id)


    // UPDATE
    const priority_intelligence_ref01_data_up0: any = {}
    priority_intelligence_ref01_data_up0.id = priority_intelligence_ref01_data.id
    priority_intelligence_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const priority_intelligence_ref01_markdef_up0 = { name: 'requirement', value: 'Mark01-priority_intelligence_ref01_' + setup.now }
    ;(priority_intelligence_ref01_data_up0 as any)[priority_intelligence_ref01_markdef_up0.name] = priority_intelligence_ref01_markdef_up0.value

    const priority_intelligence_ref01_resdata_up0 = (await priority_intelligence_ref01_ent.update(priority_intelligence_ref01_data_up0)).data()
    assert(priority_intelligence_ref01_resdata_up0.id === priority_intelligence_ref01_data_up0.id)

    assert((priority_intelligence_ref01_resdata_up0 as any)[priority_intelligence_ref01_markdef_up0.name] === priority_intelligence_ref01_markdef_up0.value)


    // LOAD
    const priority_intelligence_ref01_match_dt0: any = {}
    priority_intelligence_ref01_match_dt0.id = priority_intelligence_ref01_data.id
    const priority_intelligence_ref01_data_dt0 = (await priority_intelligence_ref01_ent.load(priority_intelligence_ref01_match_dt0)).data()
    assert(priority_intelligence_ref01_data_dt0.id === priority_intelligence_ref01_data.id)


    // REMOVE
    const priority_intelligence_ref01_match_rm0: any = { id: priority_intelligence_ref01_data.id }
    await priority_intelligence_ref01_ent.remove(priority_intelligence_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/priority_intelligence/PriorityIntelligenceTestData.json')

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
    ['priority_intelligence01','priority_intelligence02','priority_intelligence03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_PRIORITY_INTELLIGENCE_ENTID': idmap,
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_PRIORITY_INTELLIGENCE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_PRIORITY_INTELLIGENCE_ENTID']
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
  
