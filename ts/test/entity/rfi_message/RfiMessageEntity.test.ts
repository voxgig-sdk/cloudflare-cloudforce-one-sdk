

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


describe('RfiMessageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareCloudforceOneSDK.test()
    const ent = testsdk.RfiMessage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'rfi_message.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"attachment_asset_ids":{"a":true,"h":"Attachment Asset Ids","n":"attachment_asset_ids","r":false,"t":"`$ARRAY`","key$":"attachment_asset_ids","index$":0},"attachments":{"a":true,"h":"Attachments","n":"attachments","r":true,"t":"`$ARRAY`","key$":"attachments","index$":1},"author_id":{"a":true,"h":"Author Id","n":"author_id","r":false,"t":"`$STRING`","key$":"author_id","index$":2},"author_name":{"a":true,"h":"Author Name","n":"author_name","r":false,"t":"`$STRING`","key$":"author_name","index$":3},"content":{"a":true,"h":"Content","n":"content","r":true,"t":"`$STRING`","key$":"content","index$":4},"created":{"a":true,"h":"Created","n":"created","r":true,"t":"`$STRING`","key$":"created","index$":5},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$INTEGER`","key$":"id","index$":6},"is_cloudflare_team":{"a":true,"h":"Is Cloudflare Team","n":"is_cloudflare_team","r":true,"t":"`$BOOLEAN`","key$":"is_cloudflare_team","index$":7},"is_published":{"a":true,"h":"Is Published","n":"is_published","r":true,"t":"`$BOOLEAN`","key$":"is_published","index$":8},"publish":{"a":true,"h":"Publish","n":"publish","op":{"update":{"req":true,"type":"`$BOOLEAN`"}},"r":false,"t":"`$BOOLEAN`","key$":"publish","index$":9},"published":{"a":true,"h":"Published","n":"published","r":true,"t":"`$STRING`","key$":"published","index$":10},"tlp":{"a":true,"h":"Tlp","n":"tlp","op":{"create":{"req":false,"type":"`$STRING`"}},"r":true,"t":"`$STRING`","key$":"tlp","index$":11},"updated":{"a":true,"h":"Updated","n":"updated","r":true,"t":"`$STRING`","key$":"updated","index$":12}},"id":{"field":"id","name":"id"},"name":"rfi_message","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/messages/new","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_type","or":"project_type","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"request_id","or":"request_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"POST","o":"/accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/messages/new","q":{"exist":["account_id","idempotency_key","project_type","request_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"v2"},{"lit":"requests"},{"var":"project_type"},{"var":"request_id"},{"lit":"messages"},{"lit":"new"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/messages","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_type","or":"project_type","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"request_id","or":"request_id","r":true,"t":"`$STRING`","index$":2}],"query":[{"a":true,"ex":"1","k":"query","n":"page","or":"page","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"10","k":"query","n":"per_page","or":"per_page","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/messages","q":{"exist":["account_id","page","per_page","project_type","request_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"v2"},{"lit":"requests"},{"var":"project_type"},{"var":"request_id"},{"lit":"messages"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/messages/{message_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"message_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"project_type","or":"project_type","r":true,"t":"`$STRING`","index$":2},{"a":true,"k":"param","n":"request_id","or":"request_id","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/messages/{message_id}","q":{"exist":["account_id","id","project_type","request_id"]},"r":{"param":{"message_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"v2"},{"lit":"requests"},{"var":"project_type"},{"var":"request_id"},{"lit":"messages"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/messages/{message_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"message_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"project_type","or":"project_type","r":true,"t":"`$STRING`","index$":2},{"a":true,"k":"param","n":"request_id","or":"request_id","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/messages/{message_id}","q":{"exist":["account_id","id","idempotency_key","project_type","request_id"]},"r":{"param":{"message_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"v2"},{"lit":"requests"},{"var":"project_type"},{"var":"request_id"},{"lit":"messages"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.message`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.request"]]},"key$":"rfi_message","name__orig":"rfi_message","Name":"RfiMessage","name_":"rfi_message","name-":"rfi-message","NAME":"RFI_MESSAGE","index$":40}, {"active":true,"entity":"rfi_message","key$":"BasicRfiMessageFlow","kind":"basic","name":"BasicRfiMessageFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"rfi_message_ref01"},"m":{"account_id":"account01","project_type":"project_type01","request_id":"request01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"account_id":"account01","project_type":"project_type01","request_id":"request01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"rfi_message_ref01"}}],"index$":1},{"a":true,"d":{"account_id":"account01","project_type":"project_type01","request_id":"request01"},"i":{"ref":"rfi_message_ref01","srcdatavar":"rfi_message_ref01_data","suffix":"_up0","textfield":"author_id"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-rfi_message_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"rfi_message_ref01","srcdatavar":"rfi_message_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"rfi_message01","project_type":"project_type01","request_id":"request01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-rfi_message_ref01"}}],"index$":3}]}, 'RfiMessage', {"POST /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/messages/new":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"attachment_asset_ids":{"type":"array","items":{"type":"string"},"key$":"attachment_asset_ids"},"author_id":{"type":"string","key$":"author_id"},"author_name":{"type":"string","key$":"author_name"},"content":{"minLength":1,"type":"string","key$":"content"},"publish":{"type":"boolean","default":false,"key$":"publish"},"tlp":{"type":"string","default":"red","enum":["clear","green","amber","amber-strict","red","white"],"key$":"tlp"}},"required":["content"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string"},"index$":0},{"name":"project_type","in":"path","required":true,"schema":{"type":"string"},"index$":1},{"name":"request_id","in":"path","required":true,"schema":{"type":"string"},"index$":2},{"name":"Idempotency-Key","in":"header","description":"Client command key. Required when publishing a message for a workflow-enabled project; trimmed and limited to 255 characters.","schema":{"description":"Client command key. Required when publishing a message for a workflow-enabled project; trimmed and limited to 255 characters.","type":"string","nullable":true},"index$":3}]},"GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/messages":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string"},"index$":0},{"name":"project_type","in":"path","required":true,"schema":{"type":"string"},"index$":1},{"name":"request_id","in":"path","required":true,"schema":{"type":"string"},"index$":2},{"name":"page","in":"query","schema":{"type":"string","default":"1"},"index$":3},{"name":"per_page","in":"query","schema":{"type":"string","default":"10"},"index$":4}]},"GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/messages/{message_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string"},"index$":0},{"name":"project_type","in":"path","required":true,"schema":{"type":"string"},"index$":1},{"name":"request_id","in":"path","required":true,"schema":{"type":"string"},"index$":2},{"name":"message_id","in":"path","required":true,"schema":{"type":"string"},"index$":3}]},"PUT /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/messages/{message_id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"attachment_asset_ids":{"type":"array","items":{"type":"string"},"key$":"attachment_asset_ids"},"content":{"minLength":1,"type":"string","key$":"content"},"publish":{"type":"boolean","key$":"publish"},"tlp":{"type":"string","enum":["clear","green","amber","amber-strict","red","white"],"key$":"tlp"}},"required":["content","publish","tlp"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string"},"index$":0},{"name":"project_type","in":"path","required":true,"schema":{"type":"string"},"index$":1},{"name":"request_id","in":"path","required":true,"schema":{"type":"string"},"index$":2},{"name":"message_id","in":"path","required":true,"schema":{"type":"string"},"index$":3},{"name":"Idempotency-Key","in":"header","description":"Client command key. Required when publishing a message for a workflow-enabled project; trimmed and limited to 255 characters.","schema":{"description":"Client command key. Required when publishing a message for a workflow-enabled project; trimmed and limited to 255 characters.","type":"string","nullable":true},"index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const rfi_message_ref01_ent = client.RfiMessage()
    let rfi_message_ref01_data = setup.data.new.rfi_message['rfi_message_ref01']
    rfi_message_ref01_data['account_id'] = setup.idmap['account01']
    rfi_message_ref01_data['project_type'] = setup.idmap['project_type01']
    rfi_message_ref01_data['request_id'] = setup.idmap['request01']

    rfi_message_ref01_data = (await rfi_message_ref01_ent.create(rfi_message_ref01_data)).data()
    assert(null != rfi_message_ref01_data.id)


    // LIST
    const rfi_message_ref01_match: any = {}
    rfi_message_ref01_match['account_id'] = setup.idmap['account01']
    rfi_message_ref01_match['project_type'] = setup.idmap['project_type01']
    rfi_message_ref01_match['request_id'] = setup.idmap['request01']

    const rfi_message_ref01_list = (await rfi_message_ref01_ent.list(rfi_message_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(rfi_message_ref01_list, { id: rfi_message_ref01_data.id })))


    // UPDATE
    const rfi_message_ref01_data_up0: any = {}
    rfi_message_ref01_data_up0.id = rfi_message_ref01_data.id
    rfi_message_ref01_data_up0 ['account_id'] = setup.idmap['account_id']
    rfi_message_ref01_data_up0 ['project_type'] = setup.idmap['project_type']
    rfi_message_ref01_data_up0 ['request_id'] = setup.idmap['request_id']

    const rfi_message_ref01_markdef_up0 = { name: 'author_id', value: 'Mark01-rfi_message_ref01_' + setup.now }
    ;(rfi_message_ref01_data_up0 as any)[rfi_message_ref01_markdef_up0.name] = rfi_message_ref01_markdef_up0.value

    const rfi_message_ref01_resdata_up0 = (await rfi_message_ref01_ent.update(rfi_message_ref01_data_up0)).data()
    assert(rfi_message_ref01_resdata_up0.id === rfi_message_ref01_data_up0.id)

    assert((rfi_message_ref01_resdata_up0 as any)[rfi_message_ref01_markdef_up0.name] === rfi_message_ref01_markdef_up0.value)


    // LOAD
    const rfi_message_ref01_match_dt0: any = {}
    rfi_message_ref01_match_dt0.id = rfi_message_ref01_data.id
    const rfi_message_ref01_data_dt0 = (await rfi_message_ref01_ent.load(rfi_message_ref01_match_dt0)).data()
    assert(rfi_message_ref01_data_dt0.id === rfi_message_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/rfi_message/RfiMessageTestData.json')

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
    ['rfi_message01','rfi_message02','rfi_message03','request01','request02','request03','account01','project_type01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_RFI_MESSAGE_ENTID': idmap,
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_RFI_MESSAGE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_RFI_MESSAGE_ENTID']
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
  
