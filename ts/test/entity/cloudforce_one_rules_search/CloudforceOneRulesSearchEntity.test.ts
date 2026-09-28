

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


describe('CloudforceOneRulesSearchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareCloudforceOneSDK.test()
    const ent = testsdk.CloudforceOneRulesSearch()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'cloudforce_one_rules_search.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"content":{"a":true,"h":"Content","n":"content","r":false,"t":"`$STRING`","key$":"content","index$":0},"created_at":{"a":true,"h":"Created At","n":"created_at","r":true,"t":"`$NUMBER`","key$":"created_at","index$":1},"created_by":{"a":true,"h":"Created By","n":"created_by","r":true,"t":"`$STRING`","key$":"created_by","index$":2},"description":{"a":true,"h":"Description","n":"description","r":true,"t":"`$STRING`","key$":"description","index$":3},"enabled":{"a":true,"h":"Enabled","n":"enabled","r":true,"sh":"Whether this rule is active for dice consumers.","t":"`$BOOLEAN`","key$":"enabled","index$":4},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":5},"is_public":{"a":true,"h":"Is Public","n":"is_public","r":true,"sh":"Whether this rule is visible to other internal accounts.","t":"`$BOOLEAN`","key$":"is_public","index$":6},"meta":{"a":true,"h":"Meta","n":"meta","r":false,"sh":"Structured meta entries for the rule (parsed from content plus any request-supplied meta).","t":"`$ARRAY`","union":{"branches":3,"count":1,"depth":3},"key$":"meta","index$":7},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":8},"namespaces":{"a":true,"h":"Namespaces","n":"namespaces","r":true,"t":"`$ARRAY`","key$":"namespaces","index$":9},"path":{"a":true,"h":"Path","n":"path","r":true,"t":"`$STRING`","key$":"path","index$":10},"pending_approval_id":{"a":true,"h":"Pending Approval Id","n":"pending_approval_id","r":true,"sh":"ID of an open approval workflow targeting this rule, or null if none is pending.","t":"`$NUMBER`","key$":"pending_approval_id","index$":11},"pending_change":{"a":true,"h":"Pending Change","n":"pending_change","r":true,"sh":"Proposed update or deletion awaiting approval.","t":"`$OBJECT`","key$":"pending_change","index$":12},"score":{"a":true,"h":"Score","n":"score","r":false,"sh":"Relevance score in [0,1].","t":"`$NUMBER`","key$":"score","index$":13},"scoring_details":{"a":true,"h":"Scoring Details","n":"scoring_details","r":false,"sh":"AI Search hybrid retrieval returns this per-component scoring breakdown.","t":"`$OBJECT`","key$":"scoring_details","index$":14},"structured_source":{"a":true,"h":"Structured Source","n":"structured_source","r":false,"sh":"Original JSON payload for rules created via the structured rules API.","t":"`$STRING`","key$":"structured_source","index$":15},"updated_at":{"a":true,"h":"Updated At","n":"updated_at","r":true,"t":"`$NUMBER`","key$":"updated_at","index$":16},"updated_by":{"a":true,"h":"Updated By","n":"updated_by","r":true,"t":"`$STRING`","key$":"updated_by","index$":17}},"id":{"field":"id","name":"id"},"name":"cloudforce_one_rules_search","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/rules/search","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"true","k":"query","n":"is_public","or":"is_public","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"ex":"yara","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":50,"k":"query","n":"limit","or":"limit","r":false,"t":"`$NUMBER`","index$":2},{"a":true,"ex":"hybrid","k":"query","n":"mode","or":"mode","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":["yara/workers","yara/dns_record"],"k":"query","n":"namespace","or":"namespace","r":false,"t":"`$ANY`","index$":4},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$NUMBER`","index$":5},{"a":true,"ex":["yara/workers"],"k":"query","n":"path","or":"path","r":false,"t":"`$STRING`","index$":6},{"a":true,"ex":"obfuscated proxy worker","k":"query","n":"query","or":"query","r":true,"t":"`$STRING`","index$":7},{"a":true,"ex":"true","k":"query","n":"recursive","or":"recursive","r":false,"t":"`$STRING`","index$":8},{"a":true,"ex":"malicious","k":"query","n":"search","or":"search","r":false,"t":"`$STRING`","index$":9}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/rules/search","q":{"exist":["account_id","is_public","language","limit","mode","namespace","offset","path","query","recursive","search"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"rules"},{"lit":"search"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"cloudforce_one_rules_search","name__orig":"cloudforce_one_rules_search","Name":"CloudforceOneRulesSearch","name_":"cloudforce_one_rules_search","name-":"cloudforce-one-rules-search","NAME":"CLOUDFORCE_ONE_RULES_SEARCH","index$":15}, {"active":true,"entity":"cloudforce_one_rules_search","key$":"BasicCloudforceOneRulesSearchFlow","kind":"basic","name":"BasicCloudforceOneRulesSearchFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"cloudforce_one_rules_search_ref01"}}],"index$":0}]}, 'CloudforceOneRulesSearch', {"GET /accounts/{account_id}/cloudforce-one/rules/search":{"protocol":"http","parameters":[{"description":"Cloudflare account ID.","in":"path","name":"account_id","required":true,"schema":{"type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353"},"x-ref":"#/components/parameters/cloudforce-one_account_id","index$":0},{"name":"namespace","in":"query","description":"Selects namespaces. Repeat the parameter to select multiple namespaces (for example, namespace=foo&namespace=bar).","schema":{"description":"Selects namespaces. Repeat the parameter to select multiple namespaces (for example, namespace=foo&namespace=bar).","example":["yara/workers","yara/dns_record"],"anyOf":[{"type":"string"},{"items":{"type":"string"},"maxItems":50,"type":"array"}]},"index$":1},{"name":"path","in":"query","description":"Selects paths with exact-match semantics. Omit the parameter to return rules from all paths. Pass an empty string (path=) to return only rules with an empty or uncategorized path. Pass a value (for example, path=yara) to match that exact path. Repeat the parameter (for example, path=yara&path=expr) to OR-match multiple paths with SQL `IN (...)` semantics. The `recursive` flag affects only customer-account namespace selection.","schema":{"description":"Selects paths with exact-match semantics. Omit the parameter to return rules from all paths. Pass an empty string (path=) to return only rules with an empty or uncategorized path. Pass a value (for example, path=yara) to match that exact path. Repeat the parameter (for example, path=yara&path=expr) to OR-match multiple paths with SQL `IN (...)` semantics. The `recursive` flag affects only customer-account namespace selection.","example":["yara/workers"],"anyOf":[{"type":"string"},{"items":{"type":"string"},"maxItems":50,"type":"array"}]},"index$":2},{"name":"recursive","in":"query","description":"For customer accounts, true enables descendant matching for namespaces. Paths always use exact matching.","schema":{"description":"For customer accounts, true enables descendant matching for namespaces. Paths always use exact matching.","type":"string","example":"true","enum":["true","false"]},"index$":3},{"name":"search","in":"query","schema":{"type":"string","example":"malicious"},"index$":4},{"name":"is_public","in":"query","description":"Limits rules to the specified public visibility.","schema":{"description":"Limits rules to the specified public visibility.","type":"string","example":"true","enum":["true","false"]},"index$":5},{"name":"limit","in":"query","schema":{"type":"number","example":50,"default":50,"maximum":100,"minimum":1},"index$":6},{"name":"offset","in":"query","schema":{"type":"number","example":0,"default":0,"minimum":0,"nullable":true},"index$":7},{"name":"query","in":"query","description":"Natural-language or keyword search query.","required":true,"schema":{"description":"Natural-language or keyword search query.","type":"string","example":"obfuscated proxy worker","maxLength":500,"minLength":1},"index$":8},{"name":"mode","in":"query","description":"Retrieval strategy used for the query.","schema":{"description":"Retrieval strategy used for the query.","type":"string","example":"hybrid","default":"hybrid","enum":["exact","hybrid","vector","keyword"]},"x-fern-parameter-name":"search-mode","index$":9},{"name":"language","in":"query","description":"Limits results to the specified rule language.","schema":{"description":"Limits results to the specified rule language.","type":"string","example":"yara","enum":["yara","js"]},"index$":10}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let cloudforce_one_rules_search_ref01_data = Object.values(setup.data.existing.cloudforce_one_rules_search)[0] as any

    // LIST
    const cloudforce_one_rules_search_ref01_ent = client.CloudforceOneRulesSearch()
    const cloudforce_one_rules_search_ref01_match: any = {}
    cloudforce_one_rules_search_ref01_match['account_id'] = setup.idmap['account01']

    const cloudforce_one_rules_search_ref01_list = (await cloudforce_one_rules_search_ref01_ent.list(cloudforce_one_rules_search_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/cloudforce_one_rules_search/CloudforceOneRulesSearchTestData.json')

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
    ['cloudforce_one_rules_search01','cloudforce_one_rules_search02','cloudforce_one_rules_search03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_RULES_SEARCH_ENTID': idmap,
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_RULES_SEARCH_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_RULES_SEARCH_ENTID']
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
  
