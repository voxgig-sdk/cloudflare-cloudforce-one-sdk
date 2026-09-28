

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


describe('CloudforceOneRulePreviewEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareCloudforceOneSDK.test()
    const ent = testsdk.CloudforceOneRulePreview()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'cloudforce_one_rule_preview.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"commit_message":{"a":true,"h":"Commit Message","n":"commit_message","r":false,"sh":"Human-readable justification for this change.","t":"`$STRING`","key$":"commit_message","index$":0},"condition":{"a":true,"h":"Condition","n":"condition","r":true,"sh":"Nested condition groups support up to 10 levels of depth.","t":"`$OBJECT`","union":{"branches":3,"count":3,"depth":10},"key$":"condition","index$":1},"content":{"a":true,"h":"Content","n":"content","r":false,"t":"`$STRING`","key$":"content","index$":2},"created_at":{"a":true,"h":"Created At","n":"created_at","r":true,"t":"`$NUMBER`","key$":"created_at","index$":3},"created_by":{"a":true,"h":"Created By","n":"created_by","r":true,"t":"`$STRING`","key$":"created_by","index$":4},"description":{"a":true,"h":"Description","n":"description","op":{"create":{"req":false,"type":"`$STRING`"},"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"Human-readable description of the rule.","t":"`$STRING`","key$":"description","index$":5},"enabled":{"a":true,"h":"Enabled","n":"enabled","op":{"create":{"req":false,"type":"`$BOOLEAN`"},"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"sh":"Whether this rule is active for dice consumers.","t":"`$BOOLEAN`","key$":"enabled","index$":6},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":7},"is_public":{"a":true,"h":"Is Public","n":"is_public","op":{"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"sh":"Whether this rule is visible to other internal accounts.","t":"`$BOOLEAN`","key$":"is_public","index$":8},"meta":{"a":true,"h":"Meta","n":"meta","r":false,"sh":"Structured meta entries for the rule (parsed from content plus any request-supplied meta).","t":"`$ARRAY`","union":{"branches":3,"count":1,"depth":3},"key$":"meta","index$":9},"name":{"a":true,"h":"Name","n":"name","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"t":"`$STRING`","key$":"name","index$":10},"namespaces":{"a":true,"h":"Namespaces","n":"namespaces","op":{"update":{"req":false,"type":"`$ARRAY`"}},"r":true,"t":"`$ARRAY`","key$":"namespaces","index$":11},"path":{"a":true,"h":"Path","n":"path","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"Path change goes through approval workflow.","t":"`$STRING`","key$":"path","index$":12},"pending_approval_id":{"a":true,"h":"Pending Approval Id","n":"pending_approval_id","r":true,"sh":"ID of an open approval workflow targeting this rule, or null if none is pending.","t":"`$NUMBER`","key$":"pending_approval_id","index$":13},"pending_change":{"a":true,"h":"Pending Change","n":"pending_change","r":true,"sh":"Proposed update or deletion awaiting approval.","t":"`$OBJECT`","key$":"pending_change","index$":14},"status":{"a":true,"h":"Status","n":"status","r":false,"sh":"Disposition for matching email.","t":"`$STRING`","key$":"status","index$":15},"strings":{"a":true,"h":"Strings","n":"strings","r":false,"t":"`$ARRAY`","key$":"strings","index$":16},"structured_source":{"a":true,"h":"Structured Source","n":"structured_source","r":false,"sh":"Original JSON payload for rules created via the structured rules API.","t":"`$STRING`","key$":"structured_source","index$":17},"updated_at":{"a":true,"h":"Updated At","n":"updated_at","r":true,"t":"`$NUMBER`","key$":"updated_at","index$":18},"updated_by":{"a":true,"h":"Updated By","n":"updated_by","r":true,"t":"`$STRING`","key$":"updated_by","index$":19}},"id":{"field":"id","name":"id"},"name":"cloudforce_one_rule_preview","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/cloudforce-one/rules/structured/{id}/test","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"550e8400-e29b-41d4-a716-446655440000","k":"param","n":"structured_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/cloudforce-one/rules/structured/{id}/test","q":{"$action":"test","exist":["account_id","structured_id"]},"r":{"param":{"id":"structured_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"rules"},{"lit":"structured"},{"var":"structured_id"},{"lit":"test"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /accounts/{account_id}/cloudforce-one/rules/structured","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/cloudforce-one/rules/structured","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"rules"},{"lit":"structured"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/rules/structured/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"550e8400-e29b-41d4-a716-446655440000","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/rules/structured/{id}","q":{"exist":["account_id","id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"rules"},{"lit":"structured"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/rules/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"550e8400-e29b-41d4-a716-446655440000","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/rules/{id}","q":{"exist":["account_id","id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"rules"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/cloudforce-one/rules/structured/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"550e8400-e29b-41d4-a716-446655440000","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/cloudforce-one/rules/structured/{id}","q":{"exist":["account_id","id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"rules"},{"lit":"structured"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /accounts/{account_id}/cloudforce-one/rules/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"550e8400-e29b-41d4-a716-446655440000","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/cloudforce-one/rules/{id}","q":{"exist":["account_id","id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"rules"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"cloudforce_one_rule_preview","name__orig":"cloudforce_one_rule_preview","Name":"CloudforceOneRulePreview","name_":"cloudforce_one_rule_preview","name-":"cloudforce-one-rule-preview","NAME":"CLOUDFORCE_ONE_RULE_PREVIEW","index$":13}, {"active":true,"entity":"cloudforce_one_rule_preview","key$":"BasicCloudforceOneRulePreviewFlow","kind":"basic","name":"BasicCloudforceOneRulePreviewFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"cloudforce_one_rule_preview_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"cloudforce_one_rule_preview_ref01","srcdatavar":"cloudforce_one_rule_preview_ref01_data","suffix":"_up0","textfield":"commit_message"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-cloudforce_one_rule_preview_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"cloudforce_one_rule_preview_ref01","srcdatavar":"cloudforce_one_rule_preview_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"cloudforce_one_rule_preview01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-cloudforce_one_rule_preview_ref01"}}],"index$":2}]}, 'CloudforceOneRulePreview', {"POST /accounts/{account_id}/cloudforce-one/rules/structured/{id}/test":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"sample_json":{"type":"string","maxLength":16777216,"minLength":1}},"required":["sample_json"]}}}},"parameters":[{"description":"Cloudflare account ID.","in":"path","name":"account_id","required":true,"schema":{"type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353"},"x-ref":"#/components/parameters/cloudforce-one_account_id","index$":0},{"name":"id","in":"path","description":"The unique identifier for the rule.","required":true,"schema":{"description":"The unique identifier for the rule.","type":"string","format":"uuid","example":"550e8400-e29b-41d4-a716-446655440000"},"index$":1}]},"POST /accounts/{account_id}/cloudforce-one/rules/structured":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"condition":{"description":"Nested condition groups support up to 10 levels of depth.","type":"object","properties":{"conditions":{"type":"array","items":{"discriminator":{},"oneOf":[],"x-ref":"#/components/schemas/cloudforce-one_EmailRuleCondition"},"maxItems":50,"minItems":1},"operator":{"type":"string","enum":["and","or"]},"type":{"type":"string","enum":["group"]}},"required":["type","operator","conditions"],"x-ref":"#/components/schemas/cloudforce-one_EmailRuleConditionGroup","key$":"condition"},"description":{"type":"string","maxLength":1000,"key$":"description"},"enabled":{"type":"boolean","default":true,"key$":"enabled"},"meta":{"type":"array","items":{"description":"A YARA meta entry. The server resolves its value type. The 'detection' key accepts MALICIOUS, SUSPICIOUS, SPAM, or SPOOF.","type":"object","properties":{"key":{"type":"string","maxLength":128,"minLength":1,"pattern":"^[a-zA-Z_][a-zA-Z0-9_]*$"},"value":{"anyOf":[]}},"required":["key","value"],"x-ref":"#/components/schemas/cloudforce-one_MetaInputEntry"},"maxItems":50,"key$":"meta"},"name":{"type":"string","maxLength":255,"minLength":1,"key$":"name"},"status":{"description":"Disposition for matching email. This emits status metadata with the selected value.","type":"string","default":"silent","enum":["silent","blocking"],"key$":"status"},"strings":{"type":"array","items":{"properties":{"identifier":{"type":"string","maxLength":128,"minLength":1,"pattern":"^[a-zA-Z_][a-zA-Z0-9_]*$"},"match_type":{"type":"string","default":"text","enum":[]},"modifiers":{"type":"array","items":{},"default":[]},"type":{"type":"string","enum":[]},"value":{"type":"string","maxLength":10000,"minLength":1}},"required":["type","identifier","value"],"type":"object"},"default":[],"maxItems":50,"key$":"strings"}},"required":["name","condition"],"index$":1}}}},"parameters":[{"description":"Cloudflare account ID.","in":"path","name":"account_id","required":true,"schema":{"type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353"},"x-ref":"#/components/parameters/cloudforce-one_account_id","index$":0}]},"GET /accounts/{account_id}/cloudforce-one/rules/structured/{id}":{"protocol":"http","parameters":[{"description":"Cloudflare account ID.","in":"path","name":"account_id","required":true,"schema":{"type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353"},"x-ref":"#/components/parameters/cloudforce-one_account_id","index$":0},{"name":"id","in":"path","description":"The unique identifier for the rule.","required":true,"schema":{"description":"The unique identifier for the rule.","type":"string","format":"uuid","example":"550e8400-e29b-41d4-a716-446655440000"},"index$":1}]},"GET /accounts/{account_id}/cloudforce-one/rules/{id}":{"protocol":"http","parameters":[{"description":"Cloudflare account ID.","in":"path","name":"account_id","required":true,"schema":{"type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353"},"x-ref":"#/components/parameters/cloudforce-one_account_id","index$":0},{"name":"id","in":"path","description":"The unique identifier for the rule.","required":true,"schema":{"description":"The unique identifier for the rule.","type":"string","format":"uuid","example":"550e8400-e29b-41d4-a716-446655440000"},"index$":1}]},"PUT /accounts/{account_id}/cloudforce-one/rules/structured/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"condition":{"description":"Nested condition groups support up to 10 levels of depth.","type":"object","properties":{"conditions":{"type":"array","items":{"discriminator":{},"oneOf":[],"x-ref":"#/components/schemas/cloudforce-one_EmailRuleCondition"},"maxItems":50,"minItems":1},"operator":{"type":"string","enum":["and","or"]},"type":{"type":"string","enum":["group"]}},"required":["type","operator","conditions"],"x-ref":"#/components/schemas/cloudforce-one_EmailRuleConditionGroup","key$":"condition"},"description":{"type":"string","maxLength":1000,"key$":"description"},"enabled":{"type":"boolean","key$":"enabled"},"meta":{"type":"array","items":{"description":"A YARA meta entry. The server resolves its value type. The 'detection' key accepts MALICIOUS, SUSPICIOUS, SPAM, or SPOOF.","type":"object","properties":{"key":{"type":"string","maxLength":128,"minLength":1,"pattern":"^[a-zA-Z_][a-zA-Z0-9_]*$"},"value":{"anyOf":[]}},"required":["key","value"],"x-ref":"#/components/schemas/cloudforce-one_MetaInputEntry"},"maxItems":50,"key$":"meta"},"name":{"type":"string","maxLength":255,"minLength":1,"key$":"name"},"status":{"description":"Disposition for matching email. This emits status metadata with the selected value.","type":"string","enum":["silent","blocking"],"key$":"status"},"strings":{"type":"array","items":{"properties":{"identifier":{"type":"string","maxLength":128,"minLength":1,"pattern":"^[a-zA-Z_][a-zA-Z0-9_]*$"},"match_type":{"type":"string","default":"text","enum":[]},"modifiers":{"type":"array","items":{},"default":[]},"type":{"type":"string","enum":[]},"value":{"type":"string","maxLength":10000,"minLength":1}},"required":["type","identifier","value"],"type":"object"},"maxItems":50,"key$":"strings"}},"index$":1}}}},"parameters":[{"description":"Cloudflare account ID.","in":"path","name":"account_id","required":true,"schema":{"type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353"},"x-ref":"#/components/parameters/cloudforce-one_account_id","index$":0},{"name":"id","in":"path","description":"The unique identifier for the rule.","required":true,"schema":{"description":"The unique identifier for the rule.","type":"string","format":"uuid","example":"550e8400-e29b-41d4-a716-446655440000"},"index$":1}]},"PUT /accounts/{account_id}/cloudforce-one/rules/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"commit_message":{"description":"Human-readable justification for this change. Required for internal-account submissions; optional for customer accounts and automated sync.","type":"string","example":"Reduce false positives on legit CI workers.","maxLength":1000,"key$":"commit_message"},"content":{"example":"rule example { condition: true }","minLength":1,"type":"string","key$":"content"},"description":{"description":"Human-readable description of the rule. Auto-extracted from YARA meta if present.","type":"string","example":"Detects malicious proxy workers","maxLength":1000,"key$":"description"},"enabled":{"description":"Whether this rule is active for dice consumers.","type":"boolean","example":true,"key$":"enabled"},"is_public":{"description":"Whether this rule is visible to other internal accounts.","type":"boolean","example":false,"x-auditable":true,"key$":"is_public"},"meta":{"description":"Adds YARA meta entries to the rule's meta block and stores them in rule_meta alongside content metadata. Use valid YARA identifiers for keys; exclude 'name', 'enabled', and 'description'. You may repeat keys.","type":"array","items":{"description":"A YARA meta entry. The server resolves its value type. The 'detection' key accepts MALICIOUS, SUSPICIOUS, SPAM, or SPOOF.","type":"object","properties":{"key":{"type":"string","maxLength":128,"minLength":1,"pattern":"^[a-zA-Z_][a-zA-Z0-9_]*$"},"value":{"anyOf":[]}},"required":["key","value"],"x-ref":"#/components/schemas/cloudforce-one_MetaInputEntry"},"maxItems":50,"key$":"meta"},"name":{"type":"string","example":"block-malicious-workers","maxLength":255,"minLength":1,"x-auditable":true,"key$":"name"},"namespaces":{"type":"array","items":{"maxLength":255,"minLength":1,"type":"string"},"example":["yara/workers"],"x-auditable":true,"key$":"namespaces"},"path":{"description":"Path change goes through approval workflow.","type":"string","example":"yara/workers","minLength":1,"x-auditable":true,"key$":"path"}},"x-ref":"#/components/schemas/cloudforce-one_UpdateRule","index$":1}}}},"parameters":[{"description":"Cloudflare account ID.","in":"path","name":"account_id","required":true,"schema":{"type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353"},"x-ref":"#/components/parameters/cloudforce-one_account_id","index$":0},{"name":"id","in":"path","description":"The unique identifier for the rule.","required":true,"schema":{"description":"The unique identifier for the rule.","type":"string","format":"uuid","example":"550e8400-e29b-41d4-a716-446655440000"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const cloudforce_one_rule_preview_ref01_ent = client.CloudforceOneRulePreview()
    let cloudforce_one_rule_preview_ref01_data = setup.data.new.cloudforce_one_rule_preview['cloudforce_one_rule_preview_ref01']
    cloudforce_one_rule_preview_ref01_data['account_id'] = setup.idmap['account01']

    cloudforce_one_rule_preview_ref01_data = (await cloudforce_one_rule_preview_ref01_ent.create(cloudforce_one_rule_preview_ref01_data)).data()
    assert(null != cloudforce_one_rule_preview_ref01_data.id)


    // UPDATE
    const cloudforce_one_rule_preview_ref01_data_up0: any = {}
    cloudforce_one_rule_preview_ref01_data_up0.id = cloudforce_one_rule_preview_ref01_data.id
    cloudforce_one_rule_preview_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const cloudforce_one_rule_preview_ref01_markdef_up0 = { name: 'commit_message', value: 'Mark01-cloudforce_one_rule_preview_ref01_' + setup.now }
    ;(cloudforce_one_rule_preview_ref01_data_up0 as any)[cloudforce_one_rule_preview_ref01_markdef_up0.name] = cloudforce_one_rule_preview_ref01_markdef_up0.value

    const cloudforce_one_rule_preview_ref01_resdata_up0 = (await cloudforce_one_rule_preview_ref01_ent.update(cloudforce_one_rule_preview_ref01_data_up0)).data()
    assert(cloudforce_one_rule_preview_ref01_resdata_up0.id === cloudforce_one_rule_preview_ref01_data_up0.id)

    assert((cloudforce_one_rule_preview_ref01_resdata_up0 as any)[cloudforce_one_rule_preview_ref01_markdef_up0.name] === cloudforce_one_rule_preview_ref01_markdef_up0.value)


    // LOAD
    const cloudforce_one_rule_preview_ref01_match_dt0: any = {}
    cloudforce_one_rule_preview_ref01_match_dt0.id = cloudforce_one_rule_preview_ref01_data.id
    const cloudforce_one_rule_preview_ref01_data_dt0 = (await cloudforce_one_rule_preview_ref01_ent.load(cloudforce_one_rule_preview_ref01_match_dt0)).data()
    assert(cloudforce_one_rule_preview_ref01_data_dt0.id === cloudforce_one_rule_preview_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/cloudforce_one_rule_preview/CloudforceOneRulePreviewTestData.json')

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
    ['cloudforce_one_rule_preview01','cloudforce_one_rule_preview02','cloudforce_one_rule_preview03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_RULE_PREVIEW_ENTID': idmap,
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_RULE_PREVIEW_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_RULE_PREVIEW_ENTID']
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
  
