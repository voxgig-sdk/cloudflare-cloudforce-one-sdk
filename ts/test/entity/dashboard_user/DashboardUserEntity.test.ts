

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


describe('DashboardUserEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareCloudforceOneSDK.test()
    const ent = testsdk.DashboardUser()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'dashboard_user.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"display_name":{"a":true,"h":"Display Name","n":"display_name","r":false,"sh":"User display name","t":"`$STRING`","key$":"display_name","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique user ID","t":"`$STRING`","key$":"id","index$":1}},"id":{"field":"id","name":"id"},"name":"dashboard_user","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/user/me","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"request_id","or":"project_type","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/user/me","q":{"exist":["account_id","request_id"]},"r":{"param":{"project_type":"request_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"v2"},{"lit":"requests"},{"var":"request_id"},{"lit":"user"},{"lit":"me"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.request"]]},"key$":"dashboard_user","name__orig":"dashboard_user","Name":"DashboardUser","name_":"dashboard_user","name-":"dashboard-user","NAME":"DASHBOARD_USER","index$":24}, {"active":true,"entity":"dashboard_user","key$":"BasicDashboardUserFlow","kind":"basic","name":"BasicDashboardUserFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"dashboard_user_ref01","srcdatavar":"dashboard_user_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"dashboard_user01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-dashboard_user_ref01"}}],"index$":0}]}, 'DashboardUser', {"GET /accounts/{account_id}/cloudforce-one/v2/requests/{project_type}/user/me":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID","required":true,"schema":{"description":"Account ID","type":"string"},"index$":0},{"name":"project_type","in":"path","description":"RFI project type","required":true,"schema":{"description":"RFI project type","type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let dashboard_user_ref01_data = Object.values(setup.data.existing.dashboard_user)[0] as any

    // LOAD
    const dashboard_user_ref01_ent = client.DashboardUser()
    const dashboard_user_ref01_match_dt0: any = {}
    dashboard_user_ref01_match_dt0.id = dashboard_user_ref01_data.id
    const dashboard_user_ref01_data_dt0 = (await dashboard_user_ref01_ent.load(dashboard_user_ref01_match_dt0)).data()
    assert(dashboard_user_ref01_data_dt0.id === dashboard_user_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/dashboard_user/DashboardUserTestData.json')

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
    ['dashboard_user01','dashboard_user02','dashboard_user03','request01','request02','request03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_DASHBOARD_USER_ENTID': idmap,
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_DASHBOARD_USER_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_DASHBOARD_USER_ENTID']
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
  
