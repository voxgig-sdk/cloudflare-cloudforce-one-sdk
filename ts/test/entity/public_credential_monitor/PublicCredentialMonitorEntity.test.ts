

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


describe('PublicCredentialMonitorEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareCloudforceOneSDK.test()
    const ent = testsdk.PublicCredentialMonitor()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE
    for (const op of ['create', 'list', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'public_credential_monitor.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"h":"Created At","n":"created_at","r":true,"t":"`$STRING`","key$":"created_at","index$":0},"domain":{"a":true,"h":"Domain","n":"domain","r":true,"sh":"Domain to monitor (e.g.","t":"`$STRING`","key$":"domain","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$INTEGER`","key$":"id","index$":2},"matched_at":{"a":true,"h":"Matched At","n":"matched_at","r":true,"t":"`$STRING`","key$":"matched_at","index$":3},"username":{"a":true,"h":"Username","n":"username","r":true,"t":"`$STRING`","key$":"username","index$":4}},"id":{"field":"id","name":"id"},"name":"public_credential_monitor","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/cloudforce-one/v2/credential-monitor/domains","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/cloudforce-one/v2/credential-monitor/domains","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"v2"},{"lit":"credential-monitor"},{"lit":"domains"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/v2/credential-monitor/matches","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"domain","or":"domain","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":100,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"username","or":"username","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/v2/credential-monitor/matches","q":{"exist":["account_id","domain","page","per_page","username"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"v2"},{"lit":"credential-monitor"},{"lit":"matches"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/v2/credential-monitor/domains","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":100,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/v2/credential-monitor/domains","q":{"exist":["account_id","page","per_page"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"v2"},{"lit":"credential-monitor"},{"lit":"domains"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/cloudforce-one/v2/credential-monitor/domains/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/cloudforce-one/v2/credential-monitor/domains/{id}","q":{"exist":["account_id","id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"v2"},{"lit":"credential-monitor"},{"lit":"domains"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"public_credential_monitor","name__orig":"public_credential_monitor","Name":"PublicCredentialMonitor","name_":"public_credential_monitor","name-":"public-credential-monitor","NAME":"PUBLIC_CREDENTIAL_MONITOR","index$":35}, {"active":true,"entity":"public_credential_monitor","key$":"BasicPublicCredentialMonitorFlow","kind":"basic","name":"BasicPublicCredentialMonitorFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"public_credential_monitor_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"public_credential_monitor_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"public_credential_monitor_ref01","suffix":"_rm0"},"m":{"account_id":"account01","id":"public_credential_monitor01"},"o":"remove","s":[],"v":[],"index$":2},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"public_credential_monitor_ref01"}}],"index$":3}]}, 'PublicCredentialMonitor', {"POST /accounts/{account_id}/cloudforce-one/v2/credential-monitor/domains":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"domain":{"description":"Domain to monitor (e.g. my-company.com)","type":"string","key$":"domain"}},"required":["domain"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Account ID","required":true,"schema":{"description":"Account ID","type":"string"},"index$":0}]},"GET /accounts/{account_id}/cloudforce-one/v2/credential-monitor/matches":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID","required":true,"schema":{"description":"Account ID","type":"string"},"index$":0},{"name":"domain","in":"query","description":"Filter by domain (exact match)","schema":{"description":"Filter by domain (exact match)","type":"string"},"index$":1},{"name":"username","in":"query","description":"Filter by username (partial match)","schema":{"description":"Filter by username (partial match)","type":"string"},"index$":2},{"name":"page","in":"query","description":"Page number","schema":{"description":"Page number","type":"integer","default":1,"exclusiveMinimum":true,"minimum":0},"index$":3},{"name":"per_page","in":"query","description":"Items per page","schema":{"description":"Items per page","type":"integer","default":100,"exclusiveMinimum":true,"maximum":1000,"minimum":0},"index$":4}]},"GET /accounts/{account_id}/cloudforce-one/v2/credential-monitor/domains":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID","required":true,"schema":{"description":"Account ID","type":"string"},"index$":0},{"name":"page","in":"query","description":"Page number","schema":{"description":"Page number","type":"integer","default":1,"exclusiveMinimum":true,"minimum":0},"index$":1},{"name":"per_page","in":"query","description":"Items per page","schema":{"description":"Items per page","type":"integer","default":100,"exclusiveMinimum":true,"maximum":100,"minimum":0},"index$":2}]},"DELETE /accounts/{account_id}/cloudforce-one/v2/credential-monitor/domains/{id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID","required":true,"schema":{"description":"Account ID","type":"string"},"index$":0},{"name":"id","in":"path","description":"Domain ID","required":true,"schema":{"description":"Domain ID","type":"integer","exclusiveMinimum":true,"minimum":0},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const public_credential_monitor_ref01_ent = client.PublicCredentialMonitor()
    let public_credential_monitor_ref01_data = setup.data.new.public_credential_monitor['public_credential_monitor_ref01']
    public_credential_monitor_ref01_data['account_id'] = setup.idmap['account01']

    public_credential_monitor_ref01_data = (await public_credential_monitor_ref01_ent.create(public_credential_monitor_ref01_data)).data()
    assert(null != public_credential_monitor_ref01_data.id)


    // LIST
    const public_credential_monitor_ref01_match: any = {}
    public_credential_monitor_ref01_match['account_id'] = setup.idmap['account01']

    const public_credential_monitor_ref01_list = (await public_credential_monitor_ref01_ent.list(public_credential_monitor_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(public_credential_monitor_ref01_list, { id: public_credential_monitor_ref01_data.id })))


    // REMOVE
    const public_credential_monitor_ref01_match_rm0: any = { id: public_credential_monitor_ref01_data.id }
    await public_credential_monitor_ref01_ent.remove(public_credential_monitor_ref01_match_rm0)
  

    // LIST
    const public_credential_monitor_ref01_match_rt0: any = {}
    public_credential_monitor_ref01_match_rt0['account_id'] = setup.idmap['account01']

    const public_credential_monitor_ref01_list_rt0 = (await public_credential_monitor_ref01_ent.list(public_credential_monitor_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(public_credential_monitor_ref01_list_rt0, { id: public_credential_monitor_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/public_credential_monitor/PublicCredentialMonitorTestData.json')

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
    ['public_credential_monitor01','public_credential_monitor02','public_credential_monitor03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_PUBLIC_CREDENTIAL_MONITOR_ENTID': idmap,
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_PUBLIC_CREDENTIAL_MONITOR_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_PUBLIC_CREDENTIAL_MONITOR_ENTID']
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
  
