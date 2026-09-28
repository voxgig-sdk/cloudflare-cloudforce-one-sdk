

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


describe('CloudforceOneEditApprovalEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareCloudforceOneSDK.test()
    const ent = testsdk.CloudforceOneEditApproval()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE
    for (const op of ['create', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'cloudforce_one_edit_approval.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"condition":{"a":true,"h":"Condition","n":"condition","r":true,"sh":"Nested condition groups support up to 10 levels of depth.","t":"`$OBJECT`","union":{"branches":3,"count":3,"depth":10},"key$":"condition","index$":0},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":1},"enabled":{"a":true,"h":"Enabled","n":"enabled","r":false,"t":"`$BOOLEAN`","key$":"enabled","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":3},"meta":{"a":true,"h":"Meta","n":"meta","r":false,"t":"`$ARRAY`","union":{"branches":3,"count":1,"depth":3},"key$":"meta","index$":4},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":5},"status":{"a":true,"h":"Status","n":"status","r":false,"sh":"Disposition for matching email.","t":"`$STRING`","key$":"status","index$":6},"strings":{"a":true,"h":"Strings","n":"strings","r":false,"t":"`$ARRAY`","key$":"strings","index$":7}},"id":{"field":"id","name":"id"},"name":"cloudforce_one_edit_approval","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/cloudforce-one/rules/structured/approvals/{id}/resubmit","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"1","k":"param","n":"approval_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":"eml","k":"query","n":"module","or":"module","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/cloudforce-one/rules/structured/approvals/{id}/resubmit","q":{"$action":"resubmit","exist":["account_id","approval_id","module"]},"r":{"param":{"id":"approval_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"rules"},{"lit":"structured"},{"lit":"approvals"},{"var":"approval_id"},{"lit":"resubmit"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/cloudforce-one/rules/structured/approvals/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"1","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":"eml","k":"query","n":"module","or":"module","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/cloudforce-one/rules/structured/approvals/{id}","q":{"exist":["account_id","id","module"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"rules"},{"lit":"structured"},{"lit":"approvals"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.approval`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"cloudforce_one_edit_approval","name__orig":"cloudforce_one_edit_approval","Name":"CloudforceOneEditApproval","name_":"cloudforce_one_edit_approval","name-":"cloudforce-one-edit-approval","NAME":"CLOUDFORCE_ONE_EDIT_APPROVAL","index$":6}, {"active":true,"entity":"cloudforce_one_edit_approval","key$":"BasicCloudforceOneEditApprovalFlow","kind":"basic","name":"BasicCloudforceOneEditApprovalFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"cloudforce_one_edit_approval_ref01"},"m":{"account_id":"account01","approval_id":"approval01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"cloudforce_one_edit_approval_ref01","srcdatavar":"cloudforce_one_edit_approval_ref01_data","suffix":"_up0","textfield":"description"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-cloudforce_one_edit_approval_ref01"}}],"v":[],"index$":1}]}, 'CloudforceOneEditApproval', {"POST /accounts/{account_id}/cloudforce-one/rules/structured/approvals/{id}/resubmit":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"condition":{"description":"Nested condition groups support up to 10 levels of depth.","type":"object","properties":{"conditions":{"type":"array","items":{"discriminator":{},"oneOf":[],"x-ref":"#/components/schemas/cloudforce-one_EmailRuleCondition"},"maxItems":50,"minItems":1},"operator":{"type":"string","enum":["and","or"]},"type":{"type":"string","enum":["group"]}},"required":["type","operator","conditions"],"x-ref":"#/components/schemas/cloudforce-one_EmailRuleConditionGroup"},"description":{"type":"string","maxLength":1000},"enabled":{"type":"boolean","default":true},"meta":{"type":"array","items":{"description":"A YARA meta entry. The server resolves its value type. The 'detection' key accepts MALICIOUS, SUSPICIOUS, SPAM, or SPOOF.","type":"object","properties":{"key":{"type":"string","maxLength":128,"minLength":1,"pattern":"^[a-zA-Z_][a-zA-Z0-9_]*$"},"value":{"anyOf":[]}},"required":["key","value"],"x-ref":"#/components/schemas/cloudforce-one_MetaInputEntry"},"maxItems":50},"name":{"type":"string","maxLength":255,"minLength":1},"status":{"description":"Disposition for matching email. This emits status metadata with the selected value.","type":"string","default":"silent","enum":["silent","blocking"]},"strings":{"type":"array","items":{"properties":{"identifier":{"type":"string","maxLength":128,"minLength":1,"pattern":"^[a-zA-Z_][a-zA-Z0-9_]*$"},"match_type":{"type":"string","default":"text","enum":[]},"modifiers":{"type":"array","items":{},"default":[]},"type":{"type":"string","enum":[]},"value":{"type":"string","maxLength":10000,"minLength":1}},"required":["type","identifier","value"],"type":"object"},"default":[],"maxItems":50}},"required":["name","condition"]}}}},"parameters":[{"description":"Cloudflare account ID.","in":"path","name":"account_id","required":true,"schema":{"type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353"},"x-ref":"#/components/parameters/cloudforce-one_account_id","index$":0},{"name":"id","in":"path","description":"The unique identifier for the approval.","required":true,"schema":{"description":"The unique identifier for the approval.","type":"string","example":"1"},"index$":1},{"name":"module","in":"query","description":"Structured rule module.","schema":{"description":"Structured rule module.","type":"string","example":"eml","default":"eml","enum":["eml"]},"index$":2}]},"PUT /accounts/{account_id}/cloudforce-one/rules/structured/approvals/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"condition":{"description":"Nested condition groups support up to 10 levels of depth.","type":"object","properties":{"conditions":{"type":"array","items":{"discriminator":{},"oneOf":[],"x-ref":"#/components/schemas/cloudforce-one_EmailRuleCondition"},"maxItems":50,"minItems":1},"operator":{"type":"string","enum":["and","or"]},"type":{"type":"string","enum":["group"]}},"required":["type","operator","conditions"],"x-ref":"#/components/schemas/cloudforce-one_EmailRuleConditionGroup","key$":"condition"},"description":{"type":"string","maxLength":1000,"key$":"description"},"enabled":{"type":"boolean","default":true,"key$":"enabled"},"meta":{"type":"array","items":{"description":"A YARA meta entry. The server resolves its value type. The 'detection' key accepts MALICIOUS, SUSPICIOUS, SPAM, or SPOOF.","type":"object","properties":{"key":{"type":"string","maxLength":128,"minLength":1,"pattern":"^[a-zA-Z_][a-zA-Z0-9_]*$"},"value":{"anyOf":[]}},"required":["key","value"],"x-ref":"#/components/schemas/cloudforce-one_MetaInputEntry"},"maxItems":50,"key$":"meta"},"name":{"type":"string","maxLength":255,"minLength":1,"key$":"name"},"status":{"description":"Disposition for matching email. This emits status metadata with the selected value.","type":"string","default":"silent","enum":["silent","blocking"],"key$":"status"},"strings":{"type":"array","items":{"properties":{"identifier":{"type":"string","maxLength":128,"minLength":1,"pattern":"^[a-zA-Z_][a-zA-Z0-9_]*$"},"match_type":{"type":"string","default":"text","enum":[]},"modifiers":{"type":"array","items":{},"default":[]},"type":{"type":"string","enum":[]},"value":{"type":"string","maxLength":10000,"minLength":1}},"required":["type","identifier","value"],"type":"object"},"default":[],"maxItems":50,"key$":"strings"}},"required":["name","condition"],"index$":1}}}},"parameters":[{"description":"Cloudflare account ID.","in":"path","name":"account_id","required":true,"schema":{"type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353"},"x-ref":"#/components/parameters/cloudforce-one_account_id","index$":0},{"name":"id","in":"path","description":"The unique identifier for the approval.","required":true,"schema":{"description":"The unique identifier for the approval.","type":"string","example":"1"},"index$":1},{"name":"module","in":"query","description":"Structured rule module.","schema":{"description":"Structured rule module.","type":"string","example":"eml","default":"eml","enum":["eml"]},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const cloudforce_one_edit_approval_ref01_ent = client.CloudforceOneEditApproval()
    let cloudforce_one_edit_approval_ref01_data = setup.data.new.cloudforce_one_edit_approval['cloudforce_one_edit_approval_ref01']
    cloudforce_one_edit_approval_ref01_data['account_id'] = setup.idmap['account01']
    cloudforce_one_edit_approval_ref01_data['approval_id'] = setup.idmap['approval01']

    cloudforce_one_edit_approval_ref01_data = (await cloudforce_one_edit_approval_ref01_ent.create(cloudforce_one_edit_approval_ref01_data)).data()
    assert(null != cloudforce_one_edit_approval_ref01_data.id)


    // UPDATE
    const cloudforce_one_edit_approval_ref01_data_up0: any = {}
    cloudforce_one_edit_approval_ref01_data_up0.id = cloudforce_one_edit_approval_ref01_data.id
    cloudforce_one_edit_approval_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const cloudforce_one_edit_approval_ref01_markdef_up0 = { name: 'description', value: 'Mark01-cloudforce_one_edit_approval_ref01_' + setup.now }
    ;(cloudforce_one_edit_approval_ref01_data_up0 as any)[cloudforce_one_edit_approval_ref01_markdef_up0.name] = cloudforce_one_edit_approval_ref01_markdef_up0.value

    const cloudforce_one_edit_approval_ref01_resdata_up0 = (await cloudforce_one_edit_approval_ref01_ent.update(cloudforce_one_edit_approval_ref01_data_up0)).data()
    assert(cloudforce_one_edit_approval_ref01_resdata_up0.id === cloudforce_one_edit_approval_ref01_data_up0.id)

    assert((cloudforce_one_edit_approval_ref01_resdata_up0 as any)[cloudforce_one_edit_approval_ref01_markdef_up0.name] === cloudforce_one_edit_approval_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/cloudforce_one_edit_approval/CloudforceOneEditApprovalTestData.json')

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
    ['cloudforce_one_edit_approval01','cloudforce_one_edit_approval02','cloudforce_one_edit_approval03','account01','approval01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_EDIT_APPROVAL_ENTID': idmap,
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_EDIT_APPROVAL_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_EDIT_APPROVAL_ENTID']
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
  
