

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


describe('TargetIndustryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareCloudforceOneSDK.test()
    const ent = testsdk.TargetIndustry()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'target_industry.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":0}},"name":"target_industry","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/targetIndustries","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"dataset_id","or":"dataset_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/targetIndustries","q":{"exist":["account_id","dataset_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"dataset"},{"var":"dataset_id"},{"lit":"targetIndustries"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0},{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/events/targetIndustries","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"dataset_id","or":"dataset_id","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/events/targetIndustries","q":{"exist":["account_id","dataset_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"targetIndustries"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":1},{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/events/targetIndustries/catalog","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/events/targetIndustries/catalog","q":{"$action":"catalog","exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"events"},{"lit":"targetIndustries"},{"lit":"catalog"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":2}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.dataset"]]},"key$":"target_industry","name__orig":"target_industry","Name":"TargetIndustry","name_":"target_industry","name-":"target-industry","NAME":"TARGET_INDUSTRY","index$":45}, {"active":true,"entity":"target_industry","key$":"BasicTargetIndustryFlow","kind":"basic","name":"BasicTargetIndustryFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"target_industry_ref01","srcdatavar":"target_industry_ref01_data","suffix":"_dt0"},"m":{"id":"target_industry01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-target_industry_ref01"}}],"index$":0}]}, 'TargetIndustry', {"GET /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/targetIndustries":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0},{"name":"dataset_id","in":"path","description":"Dataset UUID.","required":true,"schema":{"description":"Dataset UUID.","type":"string","format":"uuid"},"index$":1}]},"GET /accounts/{account_id}/cloudforce-one/events/targetIndustries":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0},{"name":"datasetIds","in":"query","description":"Array of dataset IDs to query target industries from. If not provided, uses the default dataset.","schema":{"description":"Array of dataset IDs to query target industries from. If not provided, uses the default dataset.","type":"array","items":{"type":"string"}},"index$":1}]},"GET /accounts/{account_id}/cloudforce-one/events/targetIndustries/catalog":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let target_industry_ref01_data = Object.values(setup.data.existing.target_industry)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const target_industry_ref01_ent = client.TargetIndustry()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/target_industry/TargetIndustryTestData.json')

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
    ['target_industry01','target_industry02','target_industry03','dataset01','dataset02','dataset03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_TARGET_INDUSTRY_ENTID': idmap,
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_TARGET_INDUSTRY_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_TARGET_INDUSTRY_ENTID']
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
  
