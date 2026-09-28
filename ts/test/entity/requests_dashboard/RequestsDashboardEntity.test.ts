

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


describe('RequestsDashboardEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareCloudforceOneSDK.test()
    const ent = testsdk.RequestsDashboard()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'requests_dashboard.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created":{"a":true,"h":"Created","n":"created","r":true,"t":"`$STRING`","key$":"created","index$":0},"defaultValue":{"a":true,"h":"Default Value","n":"defaultValue","r":false,"t":"`$ANY`","union":{"branches":3,"count":1,"depth":0},"key$":"defaultValue","index$":1},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":2},"displayOrder":{"a":true,"h":"Display Order","n":"displayOrder","r":true,"t":"`$NUMBER`","key$":"displayOrder","index$":3},"errors":{"a":true,"h":"Errors","n":"errors","r":true,"sh":"Always empty on success","t":"`$ARRAY`","key$":"errors","index$":4},"fieldLabel":{"a":true,"h":"Field Label","n":"fieldLabel","r":true,"t":"`$STRING`","key$":"fieldLabel","index$":5},"fieldName":{"a":true,"h":"Field Name","n":"fieldName","r":true,"t":"`$STRING`","key$":"fieldName","index$":6},"fieldType":{"a":true,"h":"Field Type","n":"fieldType","r":true,"t":"`$STRING`","key$":"fieldType","index$":7},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":8},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"sh":"Always empty on success","t":"`$ARRAY`","key$":"messages","index$":9},"options":{"a":true,"h":"Options","n":"options","r":false,"t":"`$ARRAY`","key$":"options","index$":10},"projectType":{"a":true,"h":"Project Type","n":"projectType","r":true,"t":"`$STRING`","key$":"projectType","index$":11},"project_type":{"a":true,"h":"Project Type","n":"project_type","r":true,"t":"`$STRING`","key$":"project_type","index$":12},"public":{"a":true,"h":"Public","n":"public","r":true,"t":"`$BOOLEAN`","key$":"public","index$":13},"request_types":{"a":true,"h":"Request Types","n":"request_types","r":true,"t":"`$ARRAY`","key$":"request_types","index$":14},"required":{"a":true,"h":"Required","n":"required","r":true,"t":"`$BOOLEAN`","key$":"required","index$":15},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","key$":"result","index$":16},"sectionID":{"a":true,"h":"Section Id","n":"sectionID","r":false,"t":"`$STRING`","key$":"sectionID","index$":17},"sectionLabel":{"a":true,"h":"Section Label","n":"sectionLabel","r":false,"t":"`$STRING`","key$":"sectionLabel","index$":18},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$OBJECT`","key$":"success","index$":19},"total":{"a":true,"h":"Total","n":"total","r":true,"t":"`$NUMBER`","key$":"total","index$":20},"updated":{"a":true,"h":"Updated","n":"updated","r":true,"t":"`$STRING`","key$":"updated","index$":21},"validation":{"a":true,"h":"Validation","n":"validation","r":false,"t":"`$OBJECT`","union":{"branches":4,"count":4,"depth":6},"key$":"validation","index$":22}},"id":{"field":"id","name":"id"},"name":"requests_dashboard","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/metadata","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_type","or":"project_type","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"country","or":"country","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"request_type","or":"request_type","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/metadata","q":{"exist":["account_id","country","project_type","request_type"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"v2"},{"lit":"requests"},{"var":"project_type"},{"lit":"metadata"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/v2/requests/legal-response/access-check","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/v2/requests/legal-response/access-check","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"v2"},{"lit":"requests"},{"lit":"legal-response"},{"lit":"access-check"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/constants","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_type","or":"project_type","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/constants","q":{"exist":["account_id","project_type"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"v2"},{"lit":"requests"},{"var":"project_type"},{"lit":"constants"}],"t":{"req":"`reqdata`","res":"`body.properties`"},"index$":0},{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/quota","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"threat-intelligence","k":"param","n":"project_type","or":"project_type","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/quota","q":{"exist":["account_id","project_type"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"v2"},{"lit":"requests"},{"var":"project_type"},{"lit":"quota"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/types","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_type","or":"project_type","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/types","q":{"exist":["account_id","project_type"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"v2"},{"lit":"requests"},{"var":"project_type"},{"lit":"types"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":2}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.request"]]},"key$":"requests_dashboard","name__orig":"requests_dashboard","Name":"RequestsDashboard","name_":"requests_dashboard","name-":"requests-dashboard","NAME":"REQUESTS_DASHBOARD","index$":38}, {"active":true,"entity":"requests_dashboard","key$":"BasicRequestsDashboardFlow","kind":"basic","name":"BasicRequestsDashboardFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"requests_dashboard_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"requests_dashboard_ref01","srcdatavar":"requests_dashboard_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"requests_dashboard01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-requests_dashboard_ref01"}}],"index$":1}]}, 'RequestsDashboard', {"GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/metadata":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID","required":true,"schema":{"description":"Account ID","type":"string"},"index$":0},{"name":"project_type","in":"path","description":"Project type","required":true,"schema":{"description":"Project type","type":"string","enum":["threat-intelligence","incident-response","ir-emergency-response","table-top","pentest","irp","threat-hunting","cybersecurity-assessment","react-general","legal-response","soc-alerts","demo"]},"index$":1},{"name":"request_type","in":"query","description":"Filter fields to those applicable to this request type. Fields without request type restrictions are always included.","schema":{"description":"Filter fields to those applicable to this request type. Fields without request type restrictions are always included.","type":"string"},"index$":2},{"name":"country","in":"query","description":"Exclude fields restricted for this alpha-2 country code","schema":{"description":"Exclude fields restricted for this alpha-2 country code","type":"string","maxLength":2,"minLength":2,"pattern":"^[A-Z]{2}$"},"index$":3}]},"GET /accounts/{account_id}/cloudforce-one/v2/requests/legal-response/access-check":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID (used for JWT validation only)","required":true,"schema":{"description":"Account ID (used for JWT validation only)","type":"string"},"index$":0}]},"GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/constants":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID","required":true,"schema":{"description":"Account ID","type":"string"},"index$":0},{"name":"project_type","in":"path","description":"Project type","required":true,"schema":{"description":"Project type","type":"string","enum":["threat-intelligence","incident-response","ir-emergency-response","table-top","pentest","irp","threat-hunting","cybersecurity-assessment","react-general","legal-response","soc-alerts","demo"]},"index$":1}]},"GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/quota":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0},{"name":"project_type","in":"path","description":"RFI project type","required":true,"schema":{"description":"RFI project type","type":"string","example":"threat-intelligence","enum":["threat-intelligence","incident-response","ir-emergency-response","table-top","pentest","irp","threat-hunting","cybersecurity-assessment","react-general","legal-response","soc-alerts","demo"]},"index$":1}]},"GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/types":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string"},"index$":0},{"name":"project_type","in":"path","required":true,"schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let requests_dashboard_ref01_data = Object.values(setup.data.existing.requests_dashboard)[0] as any

    // LIST
    const requests_dashboard_ref01_ent = client.RequestsDashboard()
    const requests_dashboard_ref01_match: any = {}
    requests_dashboard_ref01_match['account_id'] = setup.idmap['account01']

    const requests_dashboard_ref01_list = (await requests_dashboard_ref01_ent.list(requests_dashboard_ref01_match)).map((e: any) => e.data())


    // LOAD
    const requests_dashboard_ref01_match_dt0: any = {}
    requests_dashboard_ref01_match_dt0.id = requests_dashboard_ref01_data.id
    const requests_dashboard_ref01_data_dt0 = (await requests_dashboard_ref01_ent.load(requests_dashboard_ref01_match_dt0)).data()
    assert(requests_dashboard_ref01_data_dt0.id === requests_dashboard_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/requests_dashboard/RequestsDashboardTestData.json')

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
    ['requests_dashboard01','requests_dashboard02','requests_dashboard03','request01','request02','request03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_REQUESTS_DASHBOARD_ENTID': idmap,
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_REQUESTS_DASHBOARD_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_REQUESTS_DASHBOARD_ENTID']
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
  
