

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


describe('PermissionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareCloudforceOneSDK.test()
    const ent = testsdk.Permission()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'permission.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":true,"t":"`$STRING`","key$":"createdAt","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"message":{"a":true,"h":"Message","n":"message","r":false,"t":"`$STRING`","key$":"message","index$":2},"resourceId":{"a":true,"h":"Resource Id","n":"resourceId","r":false,"sh":"The resource ID this permission applies to account_id or group_id","t":"`$STRING`","key$":"resourceId","index$":3},"resourceType":{"a":true,"h":"Resource Type","n":"resourceType","r":true,"t":"`$STRING`","key$":"resourceType","index$":4},"role":{"a":true,"h":"Role","n":"role","r":true,"t":"`$STRING`","key$":"role","index$":5},"subjectId":{"a":true,"h":"Subject Id","n":"subjectId","r":true,"t":"`$STRING`","key$":"subjectId","index$":6},"subjectType":{"a":true,"h":"Subject Type","n":"subjectType","r":true,"t":"`$STRING`","key$":"subjectType","index$":7},"success":{"a":true,"h":"Success","n":"success","r":false,"t":"`$BOOLEAN`","key$":"success","index$":8},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":true,"t":"`$STRING`","key$":"updatedAt","index$":9},"uuid":{"a":true,"h":"Uuid","n":"uuid","r":true,"t":"`$STRING`","key$":"uuid","index$":10}},"id":{"field":"id","name":"id"},"name":"permission","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/permissions","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"dataset_id","or":"dataset_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/permissions","q":{"exist":["account_id","dataset_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"dataset"},{"var":"dataset_id"},{"lit":"permissions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/permissions","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"dataset_id","or":"dataset_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/permissions","q":{"exist":["account_id","dataset_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"dataset"},{"var":"dataset_id"},{"lit":"permissions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/permissions/{grant_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"dataset_id","or":"dataset_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"12345678-1234-1234-1234-1234567890ab","k":"param","n":"id","or":"grant_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/permissions/{grant_id}","q":{"exist":["account_id","dataset_id","id"]},"r":{"param":{"grant_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"dataset"},{"var":"dataset_id"},{"lit":"permissions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/permissions/{grant_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"dataset_id","or":"dataset_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"12345678-1234-1234-1234-1234567890ab","k":"param","n":"id","or":"grant_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/permissions/{grant_id}","q":{"exist":["account_id","dataset_id","id"]},"r":{"param":{"grant_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"dataset"},{"var":"dataset_id"},{"lit":"permissions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.dataset"]]},"key$":"permission","name__orig":"permission","Name":"Permission","name_":"permission","name-":"permission","NAME":"PERMISSION","index$":30}, {"active":true,"entity":"permission","key$":"BasicPermissionFlow","kind":"basic","name":"BasicPermissionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"permission_ref01"},"m":{"account_id":"account01","dataset_id":"dataset01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"account_id":"account01","dataset_id":"dataset01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"permission_ref01"}}],"index$":1},{"a":true,"d":{"account_id":"account01","dataset_id":"dataset01"},"i":{"ref":"permission_ref01","srcdatavar":"permission_ref01_data","suffix":"_up0","textfield":"createdAt"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-permission_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"permission_ref01","suffix":"_rm0"},"m":{"account_id":"account01","dataset_id":"dataset01","id":"permission01"},"o":"remove","s":[],"v":[],"index$":3},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"account_id":"account01","dataset_id":"dataset01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"permission_ref01"}}],"index$":4}]}, 'Permission', {"POST /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/permissions":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"role":{"type":"string","example":"read","enum":["read","write"],"key$":"role"},"subjectId":{"type":"string","example":"123","key$":"subjectId"},"subjectType":{"type":"string","example":"account","enum":["account","group"],"key$":"subjectType"}},"required":["subjectType","subjectId","role"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0},{"name":"dataset_id","in":"path","description":"Dataset UUID.","required":true,"schema":{"description":"Dataset UUID.","type":"string","format":"uuid"},"index$":1}]},"GET /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/permissions":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0},{"name":"dataset_id","in":"path","description":"Dataset UUID.","required":true,"schema":{"description":"Dataset UUID.","type":"string","format":"uuid"},"index$":1}]},"DELETE /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/permissions/{grant_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0},{"name":"dataset_id","in":"path","description":"Dataset UUID.","required":true,"schema":{"description":"Dataset UUID.","type":"string","format":"uuid"},"index$":1},{"name":"grant_id","in":"path","required":true,"schema":{"type":"string","example":"12345678-1234-1234-1234-1234567890ab"},"index$":2}]},"PUT /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/permissions/{grant_id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"role":{"type":"string","example":"read","enum":["read","write"],"key$":"role"}},"required":["role"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0},{"name":"dataset_id","in":"path","description":"Dataset UUID.","required":true,"schema":{"description":"Dataset UUID.","type":"string","format":"uuid"},"index$":1},{"name":"grant_id","in":"path","required":true,"schema":{"type":"string","example":"12345678-1234-1234-1234-1234567890ab"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const permission_ref01_ent = client.Permission()
    let permission_ref01_data = setup.data.new.permission['permission_ref01']
    permission_ref01_data['account_id'] = setup.idmap['account01']
    permission_ref01_data['dataset_id'] = setup.idmap['dataset01']

    permission_ref01_data = (await permission_ref01_ent.create(permission_ref01_data)).data()
    assert(null != permission_ref01_data.id)


    // LIST
    const permission_ref01_match: any = {}
    permission_ref01_match['account_id'] = setup.idmap['account01']
    permission_ref01_match['dataset_id'] = setup.idmap['dataset01']

    const permission_ref01_list = (await permission_ref01_ent.list(permission_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(permission_ref01_list, { id: permission_ref01_data.id })))


    // UPDATE
    const permission_ref01_data_up0: any = {}
    permission_ref01_data_up0.id = permission_ref01_data.id
    permission_ref01_data_up0 ['account_id'] = setup.idmap['account_id']
    permission_ref01_data_up0 ['dataset_id'] = setup.idmap['dataset_id']

    const permission_ref01_markdef_up0 = { name: 'createdAt', value: 'Mark01-permission_ref01_' + setup.now }
    ;(permission_ref01_data_up0 as any)[permission_ref01_markdef_up0.name] = permission_ref01_markdef_up0.value

    const permission_ref01_resdata_up0 = (await permission_ref01_ent.update(permission_ref01_data_up0)).data()
    assert(permission_ref01_resdata_up0.id === permission_ref01_data_up0.id)

    assert((permission_ref01_resdata_up0 as any)[permission_ref01_markdef_up0.name] === permission_ref01_markdef_up0.value)


    // REMOVE
    const permission_ref01_match_rm0: any = { id: permission_ref01_data.id }
    await permission_ref01_ent.remove(permission_ref01_match_rm0)
  

    // LIST
    const permission_ref01_match_rt0: any = {}
    permission_ref01_match_rt0['account_id'] = setup.idmap['account01']
    permission_ref01_match_rt0['dataset_id'] = setup.idmap['dataset01']

    const permission_ref01_list_rt0 = (await permission_ref01_ent.list(permission_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(permission_ref01_list_rt0, { id: permission_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/permission/PermissionTestData.json')

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
    ['permission01','permission02','permission03','dataset01','dataset02','dataset03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_PERMISSION_ENTID': idmap,
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_PERMISSION_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_PERMISSION_ENTID']
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
  
