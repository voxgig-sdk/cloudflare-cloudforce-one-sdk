

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


describe('GroupEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareCloudforceOneSDK.test()
    const ent = testsdk.Group()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'group.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":true,"t":"`$STRING`","key$":"createdAt","index$":0},"description":{"a":true,"h":"Description","n":"description","r":true,"t":"`$STRING`","key$":"description","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"members":{"a":true,"h":"Members","n":"members","r":true,"t":"`$ARRAY`","key$":"members","index$":3},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":4},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":true,"t":"`$STRING`","key$":"updatedAt","index$":5},"uuid":{"a":true,"h":"Uuid","n":"uuid","r":true,"t":"`$STRING`","key$":"uuid","index$":6}},"id":{"field":"id","name":"id"},"name":"group","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}/members","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"12345678-1234-1234-1234-1234567890ab","k":"param","n":"id","or":"group_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}/members","q":{"$action":"member","exist":["account_id","id"]},"r":{"param":{"group_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"dataset"},{"lit":"-"},{"lit":"groups"},{"var":"id"},{"lit":"members"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /accounts/{account_id}/cloudforce-one/events/dataset/-/groups","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/cloudforce-one/events/dataset/-/groups","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"dataset"},{"lit":"-"},{"lit":"groups"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}/members","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"12345678-1234-1234-1234-1234567890ab","k":"param","n":"id","or":"group_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}/members","q":{"$action":"member","exist":["account_id","id"]},"r":{"param":{"group_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"dataset"},{"lit":"-"},{"lit":"groups"},{"var":"id"},{"lit":"members"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/events/dataset/-/groups","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/events/dataset/-/groups","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"dataset"},{"lit":"-"},{"lit":"groups"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"12345678-1234-1234-1234-1234567890ab","k":"param","n":"id","or":"group_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}","q":{"exist":["account_id","id"]},"r":{"param":{"group_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"dataset"},{"lit":"-"},{"lit":"groups"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}/members/{member_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"12345678-1234-1234-1234-1234567890ab","k":"param","n":"id","or":"group_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"12345678-1234-1234-1234-1234567890ab","k":"param","n":"member_id","or":"member_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}/members/{member_id}","q":{"exist":["account_id","id","member_id"]},"r":{"param":{"group_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"dataset"},{"lit":"-"},{"lit":"groups"},{"var":"id"},{"lit":"members"},{"var":"member_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"12345678-1234-1234-1234-1234567890ab","k":"param","n":"id","or":"group_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}","q":{"exist":["account_id","id"]},"r":{"param":{"group_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"dataset"},{"lit":"-"},{"lit":"groups"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"12345678-1234-1234-1234-1234567890ab","k":"param","n":"id","or":"group_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}","q":{"exist":["account_id","id"]},"r":{"param":{"group_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"dataset"},{"lit":"-"},{"lit":"groups"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"group","name__orig":"group","Name":"Group","name_":"group","name-":"group","NAME":"GROUP","index$":27}, {"active":true,"entity":"group","key$":"BasicGroupFlow","kind":"basic","name":"BasicGroupFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"group_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"group_ref01"}}],"index$":1},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"group_ref01","srcdatavar":"group_ref01_data","suffix":"_up0","textfield":"createdAt"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-group_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"group_ref01","srcdatavar":"group_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"group01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-group_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"group_ref01","suffix":"_rm0"},"m":{"account_id":"account01","id":"group01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"group_ref01"}}],"index$":5}]}, 'Group', {"POST /accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}/members":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"accountId":{"type":"string","example":"123","x-fern-property-name":"accountId_body"},"accountTag":{"type":"string","example":"5e785ae7a11e4c3c8df4bce13f1b9c02"}}}}}},"parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0},{"name":"group_id","in":"path","required":true,"schema":{"type":"string","example":"12345678-1234-1234-1234-1234567890ab"},"index$":1}]},"POST /accounts/{account_id}/cloudforce-one/events/dataset/-/groups":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"description":{"type":"string","example":"Cloudforce subscribers","key$":"description"},"name":{"type":"string","example":"cloudforce-subscribers","key$":"name"}},"required":["name","description"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0}]},"GET /accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}/members":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0},{"name":"group_id","in":"path","required":true,"schema":{"type":"string","example":"12345678-1234-1234-1234-1234567890ab"},"index$":1}]},"GET /accounts/{account_id}/cloudforce-one/events/dataset/-/groups":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0}]},"GET /accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0},{"name":"group_id","in":"path","required":true,"schema":{"type":"string","example":"12345678-1234-1234-1234-1234567890ab"},"index$":1}]},"DELETE /accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}/members/{member_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0},{"name":"group_id","in":"path","required":true,"schema":{"type":"string","example":"12345678-1234-1234-1234-1234567890ab"},"index$":1},{"name":"member_id","in":"path","required":true,"schema":{"type":"string","example":"12345678-1234-1234-1234-1234567890ab"},"index$":2}]},"DELETE /accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0},{"name":"group_id","in":"path","required":true,"schema":{"type":"string","example":"12345678-1234-1234-1234-1234567890ab"},"index$":1}]},"PUT /accounts/{account_id}/cloudforce-one/events/dataset/-/groups/{group_id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"description":{"type":"string","example":"Cloudforce subscribers","key$":"description"},"name":{"type":"string","example":"cloudforce-subscribers","key$":"name"}},"required":["name","description"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0},{"name":"group_id","in":"path","required":true,"schema":{"type":"string","example":"12345678-1234-1234-1234-1234567890ab"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const group_ref01_ent = client.Group()
    let group_ref01_data = setup.data.new.group['group_ref01']
    group_ref01_data['account_id'] = setup.idmap['account01']

    group_ref01_data = (await group_ref01_ent.create(group_ref01_data)).data()
    assert(null != group_ref01_data.id)


    // LIST
    const group_ref01_match: any = {}
    group_ref01_match['account_id'] = setup.idmap['account01']

    const group_ref01_list = (await group_ref01_ent.list(group_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(group_ref01_list, { id: group_ref01_data.id })))


    // UPDATE
    const group_ref01_data_up0: any = {}
    group_ref01_data_up0.id = group_ref01_data.id
    group_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const group_ref01_markdef_up0 = { name: 'createdAt', value: 'Mark01-group_ref01_' + setup.now }
    ;(group_ref01_data_up0 as any)[group_ref01_markdef_up0.name] = group_ref01_markdef_up0.value

    const group_ref01_resdata_up0 = (await group_ref01_ent.update(group_ref01_data_up0)).data()
    assert(group_ref01_resdata_up0.id === group_ref01_data_up0.id)

    assert((group_ref01_resdata_up0 as any)[group_ref01_markdef_up0.name] === group_ref01_markdef_up0.value)


    // LOAD
    const group_ref01_match_dt0: any = {}
    group_ref01_match_dt0.id = group_ref01_data.id
    const group_ref01_data_dt0 = (await group_ref01_ent.load(group_ref01_match_dt0)).data()
    assert(group_ref01_data_dt0.id === group_ref01_data.id)


    // REMOVE
    const group_ref01_match_rm0: any = { id: group_ref01_data.id }
    await group_ref01_ent.remove(group_ref01_match_rm0)
  

    // LIST
    const group_ref01_match_rt0: any = {}
    group_ref01_match_rt0['account_id'] = setup.idmap['account01']

    const group_ref01_list_rt0 = (await group_ref01_ent.list(group_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(group_ref01_list_rt0, { id: group_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/group/GroupTestData.json')

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
    ['group01','group02','group03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_GROUP_ENTID': idmap,
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_GROUP_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_GROUP_ENTID']
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
  
