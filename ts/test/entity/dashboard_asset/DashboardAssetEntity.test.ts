

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


describe('DashboardAssetEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareCloudforceOneSDK.test()
    const ent = testsdk.DashboardAsset()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'dashboard_asset.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"assets":{"a":true,"h":"Assets","n":"assets","r":true,"t":"`$OBJECT`","key$":"assets","index$":0},"contentType":{"a":true,"h":"Content Type","n":"contentType","r":true,"t":"`$OBJECT`","key$":"contentType","index$":1},"count":{"a":true,"h":"Count","n":"count","r":true,"t":"`$OBJECT`","key$":"count","index$":2},"downloadable":{"a":true,"h":"Downloadable","n":"downloadable","r":true,"t":"`$OBJECT`","key$":"downloadable","index$":3},"expiresAt":{"a":true,"h":"Expires At","n":"expiresAt","r":true,"t":"`$OBJECT`","key$":"expiresAt","index$":4},"fileName":{"a":true,"h":"File Name","n":"fileName","r":true,"t":"`$OBJECT`","key$":"fileName","index$":5},"fileSize":{"a":true,"h":"File Size","n":"fileSize","r":true,"t":"`$OBJECT`","key$":"fileSize","index$":6},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$OBJECT`","key$":"id","index$":7},"is_cloudflare_team":{"a":true,"h":"Is Cloudflare Team","n":"is_cloudflare_team","r":true,"t":"`$OBJECT`","key$":"is_cloudflare_team","index$":8},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":true,"t":"`$OBJECT`","key$":"metadata","index$":9},"origin":{"a":true,"h":"Origin","n":"origin","r":true,"t":"`$OBJECT`","key$":"origin","index$":10},"state":{"a":true,"h":"State","n":"state","r":true,"t":"`$OBJECT`","key$":"state","index$":11},"tlp":{"a":true,"h":"Tlp","n":"tlp","r":true,"t":"`$OBJECT`","key$":"tlp","index$":12},"uploadedAt":{"a":true,"h":"Uploaded At","n":"uploadedAt","r":true,"t":"`$OBJECT`","key$":"uploadedAt","index$":13}},"id":{"field":"id","name":"id"},"name":"dashboard_asset","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/assets/upload","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"threat-intelligence","k":"param","n":"project_type","or":"project_type","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"request_id","or":"request_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"POST","o":"/accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/assets/upload","q":{"exist":["account_id","project_type","request_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"v2"},{"lit":"requests"},{"var":"project_type"},{"var":"request_id"},{"lit":"assets"},{"lit":"upload"}],"t":{"req":"`reqdata`","res":"`body.properties`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/assets/{asset_id}/download","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"asset_id","or":"asset_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"threat-intelligence","k":"param","n":"project_type","or":"project_type","r":true,"t":"`$STRING`","index$":2},{"a":true,"k":"param","n":"request_id","or":"request_id","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/assets/{asset_id}/download","q":{"exist":["account_id","asset_id","project_type","request_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"v2"},{"lit":"requests"},{"var":"project_type"},{"var":"request_id"},{"lit":"assets"},{"var":"asset_id"},{"lit":"download"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/assets/list","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"threat-intelligence","k":"param","n":"project_type","or":"project_type","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"request_id","or":"request_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/assets/list","q":{"exist":["account_id","project_type","request_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"v2"},{"lit":"requests"},{"var":"project_type"},{"var":"request_id"},{"lit":"assets"},{"lit":"list"}],"t":{"req":"`reqdata`","res":"`body.properties`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.request"],["$.main.kit.entity.request"]]},"key$":"dashboard_asset","name__orig":"dashboard_asset","Name":"DashboardAsset","name_":"dashboard_asset","name-":"dashboard-asset","NAME":"DASHBOARD_ASSET","index$":23}, {"active":true,"entity":"dashboard_asset","key$":"BasicDashboardAssetFlow","kind":"basic","name":"BasicDashboardAssetFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"dashboard_asset_ref01"},"m":{"account_id":"account01","project_type":"project_type01","request_id":"request01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"dashboard_asset_ref01","srcdatavar":"dashboard_asset_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"dashboard_asset01","project_type":"project_type01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-dashboard_asset_ref01"}}],"index$":1}]}, 'DashboardAsset', {"POST /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/assets/upload":{"protocol":"http","requestBody":{"content":{"multipart/form-data":{"schema":{"type":"object","properties":{"description":{"description":"Optional description of the asset","type":"string"},"file":{"description":"The file to upload (can also use 'source')","type":"string","format":"binary"},"metadata":{"description":"Optional JSON string of key-value pairs (e.g., '{\"key1\":\"value1\"}')","type":"string"},"source":{"description":"The file to upload (can also use 'file')","type":"string","format":"binary"}}}}}},"parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0},{"name":"project_type","in":"path","description":"RFI project type. Valid values: threat-intelligence, incident-response, ir-emergency-response, table-top, pentest, irp, threat-hunting, cybersecurity-assessment, react-general, legal-response, soc-alerts, demo","required":true,"schema":{"description":"RFI project type. Valid values: threat-intelligence, incident-response, ir-emergency-response, table-top, pentest, irp, threat-hunting, cybersecurity-assessment, react-general, legal-response, soc-alerts, demo","type":"string","example":"threat-intelligence","enum":["threat-intelligence","incident-response","ir-emergency-response","table-top","pentest","irp","threat-hunting","cybersecurity-assessment","react-general","legal-response","soc-alerts","demo"]},"index$":1},{"name":"request_id","in":"path","description":"RFI UUID","required":true,"schema":{"description":"RFI UUID","type":"string"},"index$":2}]},"GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/assets/{asset_id}/download":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0},{"name":"project_type","in":"path","description":"RFI project type. Valid values: threat-intelligence, incident-response, ir-emergency-response, table-top, pentest, irp, threat-hunting, cybersecurity-assessment, react-general, legal-response, soc-alerts, demo","required":true,"schema":{"description":"RFI project type. Valid values: threat-intelligence, incident-response, ir-emergency-response, table-top, pentest, irp, threat-hunting, cybersecurity-assessment, react-general, legal-response, soc-alerts, demo","type":"string","example":"threat-intelligence","enum":["threat-intelligence","incident-response","ir-emergency-response","table-top","pentest","irp","threat-hunting","cybersecurity-assessment","react-general","legal-response","soc-alerts","demo"]},"index$":1},{"name":"request_id","in":"path","description":"RFI UUID","required":true,"schema":{"description":"RFI UUID","type":"string"},"index$":2},{"name":"asset_id","in":"path","description":"Asset UUID","required":true,"schema":{"description":"Asset UUID","type":"string"},"index$":3}]},"GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/{request_id}/assets/list":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0},{"name":"project_type","in":"path","description":"RFI project type. Valid values: threat-intelligence, incident-response, ir-emergency-response, table-top, pentest, irp, threat-hunting, cybersecurity-assessment, react-general, legal-response, soc-alerts, demo","required":true,"schema":{"description":"RFI project type. Valid values: threat-intelligence, incident-response, ir-emergency-response, table-top, pentest, irp, threat-hunting, cybersecurity-assessment, react-general, legal-response, soc-alerts, demo","type":"string","example":"threat-intelligence","enum":["threat-intelligence","incident-response","ir-emergency-response","table-top","pentest","irp","threat-hunting","cybersecurity-assessment","react-general","legal-response","soc-alerts","demo"]},"index$":1},{"name":"request_id","in":"path","description":"RFI UUID","required":true,"schema":{"description":"RFI UUID","type":"string"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const dashboard_asset_ref01_ent = client.DashboardAsset()
    let dashboard_asset_ref01_data = setup.data.new.dashboard_asset['dashboard_asset_ref01']
    dashboard_asset_ref01_data['account_id'] = setup.idmap['account01']
    dashboard_asset_ref01_data['project_type'] = setup.idmap['project_type01']
    dashboard_asset_ref01_data['request_id'] = setup.idmap['request01']

    dashboard_asset_ref01_data = (await dashboard_asset_ref01_ent.create(dashboard_asset_ref01_data)).data()
    assert(null != dashboard_asset_ref01_data.id)


    // LOAD
    const dashboard_asset_ref01_match_dt0: any = {}
    dashboard_asset_ref01_match_dt0.id = dashboard_asset_ref01_data.id
    const dashboard_asset_ref01_data_dt0 = (await dashboard_asset_ref01_ent.load(dashboard_asset_ref01_match_dt0)).data()
    assert(dashboard_asset_ref01_data_dt0.id === dashboard_asset_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/dashboard_asset/DashboardAssetTestData.json')

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
    ['dashboard_asset01','dashboard_asset02','dashboard_asset03','request01','request02','request03','account01','project_type01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_DASHBOARD_ASSET_ENTID': idmap,
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_DASHBOARD_ASSET_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_DASHBOARD_ASSET_ENTID']
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
  
