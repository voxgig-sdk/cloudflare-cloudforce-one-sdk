

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


describe('DatasetEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareCloudforceOneSDK.test()
    const ent = testsdk.Dataset()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'dataset.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"deletedAt":{"a":true,"h":"Deleted At","n":"deletedAt","r":false,"t":"`$STRING`","key$":"deletedAt","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"indicatorWriteMode":{"a":true,"h":"Indicator Write Mode","n":"indicatorWriteMode","r":true,"sh":"Effective indicator mutation capability after account/dataset authorization and dataset storage capability are applied.","t":"`$STRING`","key$":"indicatorWriteMode","index$":2},"isAnalytics":{"a":true,"h":"Is Analytics","n":"isAnalytics","r":true,"t":"`$BOOLEAN`","key$":"isAnalytics","index$":3},"isPublic":{"a":true,"h":"Is Public","n":"isPublic","r":true,"sh":"If true, then anyone can search the dataset.","t":"`$BOOLEAN`","key$":"isPublic","index$":4},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Used to describe the dataset within the account context.","t":"`$STRING`","key$":"name","index$":5},"uuid":{"a":true,"h":"Uuid","n":"uuid","r":true,"t":"`$STRING`","key$":"uuid","index$":6}},"id":{"field":"id","name":"id"},"name":"dataset","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/copy","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"dataset_id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"keep_raw_data","or":"keep_raw_data","r":false,"t":"`$BOOLEAN`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/copy","q":{"$action":"copy","exist":["account_id","id","keep_raw_data"]},"r":{"param":{"dataset_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"dataset"},{"var":"id"},{"lit":"copy"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/move","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"dataset_id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"keep_raw_data","or":"keep_raw_data","r":false,"t":"`$BOOLEAN`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/move","q":{"$action":"move","exist":["account_id","id","keep_raw_data"]},"r":{"param":{"dataset_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"dataset"},{"var":"id"},{"lit":"move"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"dataset_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}","q":{"exist":["account_id","id"]},"r":{"param":{"dataset_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"dataset"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"POST /accounts/{account_id}/cloudforce-one/events/dataset/create","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/cloudforce-one/events/dataset/create","q":{"$action":"create","exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"dataset"},{"lit":"create"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"POST /accounts/{account_id}/cloudforce-one/events/datasets/populate","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/cloudforce-one/events/datasets/populate","q":{"$action":"populate","exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"datasets"},{"lit":"populate"}],"t":{"req":"`reqdata`","res":"`body.properties`"},"index$":4}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/events/dataset","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"include_deleted","or":"include_deleted","r":false,"t":"`$BOOLEAN`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/events/dataset","q":{"exist":["account_id","include_deleted"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"dataset"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"dataset_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}","q":{"exist":["account_id","id"]},"r":{"param":{"dataset_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"dataset"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"dataset_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}","q":{"exist":["account_id","id"]},"r":{"param":{"dataset_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"dataset"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"dataset_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}","q":{"exist":["account_id","id"]},"r":{"param":{"dataset_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"dataset"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"dataset","name__orig":"dataset","Name":"Dataset","name_":"dataset","name-":"dataset","NAME":"DATASET","index$":25}, {"active":true,"entity":"dataset","key$":"BasicDatasetFlow","kind":"basic","name":"BasicDatasetFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"dataset_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"dataset_ref01"}}],"index$":1},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"dataset_ref01","srcdatavar":"dataset_ref01_data","suffix":"_up0","textfield":"deletedAt"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-dataset_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"dataset_ref01","srcdatavar":"dataset_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"dataset01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-dataset_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"dataset_ref01","suffix":"_rm0"},"m":{"account_id":"account01","id":"dataset01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"dataset_ref01"}}],"index$":5}]}, 'Dataset', {"POST /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/copy":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"destDatasetId":{"type":"string","example":"12345678-1234-1234-1234-1234567890ab"},"eventIds":{"type":"array","items":{"example":"7632a037-fdef-4899-9b12-148470aae772","type":"string"}}},"required":["destDatasetId","eventIds"]}}}},"parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0},{"name":"dataset_id","in":"path","description":"Dataset UUID.","required":true,"schema":{"description":"Dataset UUID.","type":"string","format":"uuid"},"index$":1},{"name":"keepRawData","in":"query","description":"If true, copies raw data to the destination dataset. Default is false (raw data is stripped/not copied).","schema":{"description":"If true, copies raw data to the destination dataset. Default is false (raw data is stripped/not copied).","type":"boolean"},"index$":2}]},"POST /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/move":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"destDatasetId":{"type":"string","example":"12345678-1234-1234-1234-1234567890ab"},"eventIds":{"type":"array","items":{"example":"7632a037-fdef-4899-9b12-148470aae772","type":"string"}}},"required":["destDatasetId","eventIds"]}}}},"parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0},{"name":"dataset_id","in":"path","description":"Dataset UUID.","required":true,"schema":{"description":"Dataset UUID.","type":"string","format":"uuid"},"index$":1},{"name":"keepRawData","in":"query","description":"If true, copies raw data to the destination dataset. Default is false (raw data is stripped/not copied). Raw data is always deleted from the source.","schema":{"description":"If true, copies raw data to the destination dataset. Default is false (raw data is stripped/not copied). Raw data is always deleted from the source.","type":"boolean"},"index$":2}]},"POST /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"isPublic":{"description":"If true, then anyone can search the dataset. If false, then its limited to the account.","type":"boolean","key$":"isPublic"},"name":{"description":"Used to describe the dataset within the account context.","type":"string","minLength":1,"key$":"name"}},"required":["name","isPublic"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0},{"name":"dataset_id","in":"path","description":"Dataset ID.","required":true,"schema":{"description":"Dataset ID.","type":"string","format":"uuid"},"index$":1}]},"POST /accounts/{account_id}/cloudforce-one/events/dataset/create":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"isPublic":{"description":"If true, then anyone can search the dataset. If false, then its limited to the account.","type":"boolean"},"name":{"description":"Used to describe the dataset within the account context.","type":"string","minLength":1}},"required":["name","isPublic"]}}}},"parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0}]},"POST /accounts/{account_id}/cloudforce-one/events/datasets/populate":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0}]},"GET /accounts/{account_id}/cloudforce-one/events/dataset":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0},{"name":"includeDeleted","in":"query","description":"When true, include soft-deleted datasets in the response. Each item includes a `deletedAt` field (ISO 8601 or null). Default: false.","schema":{"description":"When true, include soft-deleted datasets in the response. Each item includes a `deletedAt` field (ISO 8601 or null). Default: false.","type":"boolean"},"index$":1}]},"GET /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0},{"name":"dataset_id","in":"path","description":"Dataset ID.","required":true,"schema":{"description":"Dataset ID.","type":"string","format":"uuid"},"index$":1}]},"DELETE /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0},{"name":"dataset_id","in":"path","description":"Dataset ID to delete","required":true,"schema":{"description":"Dataset ID to delete","type":"string"},"index$":1}]},"PATCH /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"isPublic":{"description":"If true, then anyone can search the dataset. If false, then its limited to the account.","type":"boolean","key$":"isPublic"},"name":{"description":"Used to describe the dataset within the account context.","type":"string","minLength":1,"key$":"name"}},"required":["name","isPublic"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0},{"name":"dataset_id","in":"path","description":"Dataset ID.","required":true,"schema":{"description":"Dataset ID.","type":"string","format":"uuid"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const dataset_ref01_ent = client.Dataset()
    let dataset_ref01_data = setup.data.new.dataset['dataset_ref01']
    dataset_ref01_data['account_id'] = setup.idmap['account01']

    dataset_ref01_data = (await dataset_ref01_ent.create(dataset_ref01_data)).data()
    assert(null != dataset_ref01_data.id)


    // LIST
    const dataset_ref01_match: any = {}
    dataset_ref01_match['account_id'] = setup.idmap['account01']

    const dataset_ref01_list = (await dataset_ref01_ent.list(dataset_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(dataset_ref01_list, { id: dataset_ref01_data.id })))


    // UPDATE
    const dataset_ref01_data_up0: any = {}
    dataset_ref01_data_up0.id = dataset_ref01_data.id
    dataset_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const dataset_ref01_markdef_up0 = { name: 'deletedAt', value: 'Mark01-dataset_ref01_' + setup.now }
    ;(dataset_ref01_data_up0 as any)[dataset_ref01_markdef_up0.name] = dataset_ref01_markdef_up0.value

    const dataset_ref01_resdata_up0 = (await dataset_ref01_ent.update(dataset_ref01_data_up0)).data()
    assert(dataset_ref01_resdata_up0.id === dataset_ref01_data_up0.id)

    assert((dataset_ref01_resdata_up0 as any)[dataset_ref01_markdef_up0.name] === dataset_ref01_markdef_up0.value)


    // LOAD
    const dataset_ref01_match_dt0: any = {}
    dataset_ref01_match_dt0.id = dataset_ref01_data.id
    const dataset_ref01_data_dt0 = (await dataset_ref01_ent.load(dataset_ref01_match_dt0)).data()
    assert(dataset_ref01_data_dt0.id === dataset_ref01_data.id)


    // REMOVE
    const dataset_ref01_match_rm0: any = { id: dataset_ref01_data.id }
    await dataset_ref01_ent.remove(dataset_ref01_match_rm0)
  

    // LIST
    const dataset_ref01_match_rt0: any = {}
    dataset_ref01_match_rt0['account_id'] = setup.idmap['account01']

    const dataset_ref01_list_rt0 = (await dataset_ref01_ent.list(dataset_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(dataset_ref01_list_rt0, { id: dataset_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/dataset/DatasetTestData.json')

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
    ['dataset01','dataset02','dataset03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_DATASET_ENTID': idmap,
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_DATASET_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_DATASET_ENTID']
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
  
