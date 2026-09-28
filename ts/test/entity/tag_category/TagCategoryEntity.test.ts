

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


describe('TagCategoryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareCloudforceOneSDK.test()
    const ent = testsdk.TagCategory()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tag_category.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":false,"t":"`$STRING`","key$":"createdAt","index$":0},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"name":{"a":true,"h":"Name","n":"name","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"t":"`$STRING`","key$":"name","index$":3},"schema":{"a":true,"h":"Schema","n":"schema","r":false,"sh":"Parsed FieldDefinition[] defining custom fields for this category, or null if none.","t":"`$ARRAY`","key$":"schema","index$":4},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":false,"t":"`$STRING`","key$":"updatedAt","index$":5},"uuid":{"a":true,"h":"Uuid","n":"uuid","r":true,"t":"`$STRING`","key$":"uuid","index$":6}},"id":{"field":"id","name":"id"},"name":"tag_category","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/cloudforce-one/events/tags/categories/create","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/cloudforce-one/events/tags/categories/create","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"tags"},{"lit":"categories"},{"lit":"create"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/events/tags/categories","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/events/tags/categories","q":{"exist":["account_id","search"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"tags"},{"lit":"categories"}],"t":{"req":"`reqdata`","res":"`body.categories`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/events/tag-categories/{category_uuid}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"category_uuid","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/events/tag-categories/{category_uuid}","q":{"exist":["account_id","id"]},"r":{"param":{"category_uuid":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"tag-categories"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/events/tags/categories/{category_uuid}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"category_uuid","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/events/tags/categories/{category_uuid}","q":{"exist":["account_id","id"]},"r":{"param":{"category_uuid":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"tags"},{"lit":"categories"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/cloudforce-one/events/tag-categories/{category_uuid}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"category_uuid","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/cloudforce-one/events/tag-categories/{category_uuid}","q":{"exist":["account_id","id"]},"r":{"param":{"category_uuid":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"tag-categories"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /accounts/{account_id}/cloudforce-one/events/tags/categories/{category_uuid}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"category_uuid","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/cloudforce-one/events/tags/categories/{category_uuid}","q":{"exist":["account_id","id"]},"r":{"param":{"category_uuid":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"tags"},{"lit":"categories"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /accounts/{account_id}/cloudforce-one/events/tag-categories/{category_uuid}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"category_uuid","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/cloudforce-one/events/tag-categories/{category_uuid}","q":{"exist":["account_id","id"]},"r":{"param":{"category_uuid":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"tag-categories"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PATCH /accounts/{account_id}/cloudforce-one/events/tags/categories/{category_uuid}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"category_uuid","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/cloudforce-one/events/tags/categories/{category_uuid}","q":{"exist":["account_id","id"]},"r":{"param":{"category_uuid":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"tags"},{"lit":"categories"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"tag_category","name__orig":"tag_category","Name":"TagCategory","name_":"tag_category","name-":"tag-category","NAME":"TAG_CATEGORY","index$":44}, {"active":true,"entity":"tag_category","key$":"BasicTagCategoryFlow","kind":"basic","name":"BasicTagCategoryFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"tag_category_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"tag_category_ref01"}}],"index$":1},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"tag_category_ref01","srcdatavar":"tag_category_ref01_data","suffix":"_up0","textfield":"createdAt"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-tag_category_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"tag_category_ref01","srcdatavar":"tag_category_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"tag_category01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-tag_category_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"tag_category_ref01","suffix":"_rm0"},"m":{"account_id":"account01","id":"tag_category01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"tag_category_ref01"}}],"index$":5}]}, 'TagCategory', {"POST /accounts/{account_id}/cloudforce-one/events/tags/categories/create":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"description":{"type":"string","key$":"description"},"name":{"type":"string","example":"Actor","key$":"name"},"schema":{"description":"Optional array of FieldDefinition objects defining custom fields for tags in this category. Persisted as JSON; returned as a parsed array.","type":"array","items":{"type":"object","properties":{"allowedValues":{"example":[],"items":{},"type":"array"},"annotations":{"additionalProperties":false,"properties":{},"type":"object"},"deprecated":{"description":"Marks a field as unavailable for new values while retaining its definition for historical values.","type":"boolean"},"deprecatedValues":{"description":"Enum values unavailable for new writes but retained in allowedValues for historical display.","items":{},"type":"array"},"element":{"additionalProperties":true,"allOf":[],"description":"Nested FieldDefinition describing the element type of an array field. Required when kind is 'array'. See FieldDefinition (recursive).","type":"object"},"enforcement":{"enum":[],"type":"string"},"format":{"enum":[],"type":"string"},"key":{"example":"family","pattern":"^[a-zA-Z][a-zA-Z0-9_]{0,63}$","type":"string"},"kind":{"enum":[],"example":"string","type":"string"},"label":{"example":"Attacker Name","maxLength":128,"minLength":1,"type":"string"},"maxLength":{"exclusiveMinimum":true,"minimum":0,"type":"integer"},"numberConstraint":{"additionalProperties":false,"properties":{},"type":"object"},"properties":{"additionalProperties":{},"description":"Map of property key to FieldDefinition for object fields. Required when kind is 'object'. See FieldDefinition (recursive).","type":"object"},"required":{"type":"boolean"}},"additionalProperties":false,"required":["key","kind"],"x-ref":"#/components/schemas/cloudforce-one-events_FieldDefinition"},"key$":"schema"}},"required":["name"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0}]},"GET /accounts/{account_id}/cloudforce-one/events/tags/categories":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0},{"name":"search","in":"query","schema":{"type":"string"},"index$":1}]},"GET /accounts/{account_id}/cloudforce-one/events/tag-categories/{category_uuid}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0},{"name":"category_uuid","in":"path","description":"Tag Category UUID.","required":true,"schema":{"description":"Tag Category UUID.","type":"string"},"index$":1}]},"GET /accounts/{account_id}/cloudforce-one/events/tags/categories/{category_uuid}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0},{"name":"category_uuid","in":"path","description":"Tag Category UUID.","required":true,"schema":{"description":"Tag Category UUID.","type":"string"},"index$":1}]},"DELETE /accounts/{account_id}/cloudforce-one/events/tag-categories/{category_uuid}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0},{"name":"category_uuid","in":"path","description":"Tag Category UUID.","required":true,"schema":{"description":"Tag Category UUID.","type":"string"},"index$":1}]},"DELETE /accounts/{account_id}/cloudforce-one/events/tags/categories/{category_uuid}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0},{"name":"category_uuid","in":"path","description":"Tag Category UUID.","required":true,"schema":{"description":"Tag Category UUID.","type":"string"},"index$":1}]},"PATCH /accounts/{account_id}/cloudforce-one/events/tag-categories/{category_uuid}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"description":{"type":"string","key$":"description"},"name":{"type":"string","key$":"name"},"schema":{"description":"Optional array of FieldDefinition objects. When provided, replaces the existing field schema. When omitted, the existing schema is preserved.","type":"array","items":{"type":"object","properties":{"allowedValues":{"example":[],"items":{},"type":"array"},"annotations":{"additionalProperties":false,"properties":{},"type":"object"},"deprecated":{"description":"Marks a field as unavailable for new values while retaining its definition for historical values.","type":"boolean"},"deprecatedValues":{"description":"Enum values unavailable for new writes but retained in allowedValues for historical display.","items":{},"type":"array"},"element":{"additionalProperties":true,"allOf":[],"description":"Nested FieldDefinition describing the element type of an array field. Required when kind is 'array'. See FieldDefinition (recursive).","type":"object"},"enforcement":{"enum":[],"type":"string"},"format":{"enum":[],"type":"string"},"key":{"example":"family","pattern":"^[a-zA-Z][a-zA-Z0-9_]{0,63}$","type":"string"},"kind":{"enum":[],"example":"string","type":"string"},"label":{"example":"Attacker Name","maxLength":128,"minLength":1,"type":"string"},"maxLength":{"exclusiveMinimum":true,"minimum":0,"type":"integer"},"numberConstraint":{"additionalProperties":false,"properties":{},"type":"object"},"properties":{"additionalProperties":{},"description":"Map of property key to FieldDefinition for object fields. Required when kind is 'object'. See FieldDefinition (recursive).","type":"object"},"required":{"type":"boolean"}},"additionalProperties":false,"required":["key","kind"],"x-ref":"#/components/schemas/cloudforce-one-events_FieldDefinition"},"key$":"schema"}},"index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0},{"name":"category_uuid","in":"path","description":"Tag Category UUID.","required":true,"schema":{"description":"Tag Category UUID.","type":"string"},"index$":1}]},"PATCH /accounts/{account_id}/cloudforce-one/events/tags/categories/{category_uuid}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"description":{"type":"string","key$":"description"},"name":{"type":"string","key$":"name"},"schema":{"description":"Optional array of FieldDefinition objects. When provided, replaces the existing field schema. When omitted, the existing schema is preserved.","type":"array","items":{"type":"object","properties":{"allowedValues":{"example":[],"items":{},"type":"array"},"annotations":{"additionalProperties":false,"properties":{},"type":"object"},"deprecated":{"description":"Marks a field as unavailable for new values while retaining its definition for historical values.","type":"boolean"},"deprecatedValues":{"description":"Enum values unavailable for new writes but retained in allowedValues for historical display.","items":{},"type":"array"},"element":{"additionalProperties":true,"allOf":[],"description":"Nested FieldDefinition describing the element type of an array field. Required when kind is 'array'. See FieldDefinition (recursive).","type":"object"},"enforcement":{"enum":[],"type":"string"},"format":{"enum":[],"type":"string"},"key":{"example":"family","pattern":"^[a-zA-Z][a-zA-Z0-9_]{0,63}$","type":"string"},"kind":{"enum":[],"example":"string","type":"string"},"label":{"example":"Attacker Name","maxLength":128,"minLength":1,"type":"string"},"maxLength":{"exclusiveMinimum":true,"minimum":0,"type":"integer"},"numberConstraint":{"additionalProperties":false,"properties":{},"type":"object"},"properties":{"additionalProperties":{},"description":"Map of property key to FieldDefinition for object fields. Required when kind is 'object'. See FieldDefinition (recursive).","type":"object"},"required":{"type":"boolean"}},"additionalProperties":false,"required":["key","kind"],"x-ref":"#/components/schemas/cloudforce-one-events_FieldDefinition"},"key$":"schema"}},"index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0},{"name":"category_uuid","in":"path","description":"Tag Category UUID.","required":true,"schema":{"description":"Tag Category UUID.","type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const tag_category_ref01_ent = client.TagCategory()
    let tag_category_ref01_data = setup.data.new.tag_category['tag_category_ref01']
    tag_category_ref01_data['account_id'] = setup.idmap['account01']

    tag_category_ref01_data = (await tag_category_ref01_ent.create(tag_category_ref01_data)).data()
    assert(null != tag_category_ref01_data.id)


    // LIST
    const tag_category_ref01_match: any = {}
    tag_category_ref01_match['account_id'] = setup.idmap['account01']

    const tag_category_ref01_list = (await tag_category_ref01_ent.list(tag_category_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(tag_category_ref01_list, { id: tag_category_ref01_data.id })))


    // UPDATE
    const tag_category_ref01_data_up0: any = {}
    tag_category_ref01_data_up0.id = tag_category_ref01_data.id
    tag_category_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const tag_category_ref01_markdef_up0 = { name: 'createdAt', value: 'Mark01-tag_category_ref01_' + setup.now }
    ;(tag_category_ref01_data_up0 as any)[tag_category_ref01_markdef_up0.name] = tag_category_ref01_markdef_up0.value

    const tag_category_ref01_resdata_up0 = (await tag_category_ref01_ent.update(tag_category_ref01_data_up0)).data()
    assert(tag_category_ref01_resdata_up0.id === tag_category_ref01_data_up0.id)

    assert((tag_category_ref01_resdata_up0 as any)[tag_category_ref01_markdef_up0.name] === tag_category_ref01_markdef_up0.value)


    // LOAD
    const tag_category_ref01_match_dt0: any = {}
    tag_category_ref01_match_dt0.id = tag_category_ref01_data.id
    const tag_category_ref01_data_dt0 = (await tag_category_ref01_ent.load(tag_category_ref01_match_dt0)).data()
    assert(tag_category_ref01_data_dt0.id === tag_category_ref01_data.id)


    // REMOVE
    const tag_category_ref01_match_rm0: any = { id: tag_category_ref01_data.id }
    await tag_category_ref01_ent.remove(tag_category_ref01_match_rm0)
  

    // LIST
    const tag_category_ref01_match_rt0: any = {}
    tag_category_ref01_match_rt0['account_id'] = setup.idmap['account01']

    const tag_category_ref01_list_rt0 = (await tag_category_ref01_ent.list(tag_category_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(tag_category_ref01_list_rt0, { id: tag_category_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tag_category/TagCategoryTestData.json')

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
    ['tag_category01','tag_category02','tag_category03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_TAG_CATEGORY_ENTID': idmap,
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_TAG_CATEGORY_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_TAG_CATEGORY_ENTID']
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
  
