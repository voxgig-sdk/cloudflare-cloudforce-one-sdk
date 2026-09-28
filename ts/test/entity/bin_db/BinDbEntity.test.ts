

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


describe('BinDbEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareCloudforceOneSDK.test()
    const ent = testsdk.BinDb()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'bin_db.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"content_type":{"a":true,"h":"Content Type","n":"content_type","r":true,"t":"`$STRING`","key$":"content_type","index$":0},"md5":{"a":true,"h":"Md5","n":"md5","r":true,"t":"`$STRING`","key$":"md5","index$":1},"sha1":{"a":true,"h":"Sha1","n":"sha1","r":true,"t":"`$STRING`","key$":"sha1","index$":2},"sha256":{"a":true,"h":"Sha256","n":"sha256","r":true,"t":"`$STRING`","key$":"sha256","index$":3}},"name":"bin_db","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/cloudforce-one/binary","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/cloudforce-one/binary","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"binary"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/binary/{hash}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"hash","or":"hash","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/binary/{hash}","q":{"exist":["account_id","hash"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"binary"},{"var":"hash"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"bin_db","name__orig":"bin_db","Name":"BinDb","name_":"bin_db","name-":"bin-db","NAME":"BIN_DB","index$":1}, {"active":true,"entity":"bin_db","key$":"BasicBinDbFlow","kind":"basic","name":"BasicBinDbFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"bin_db_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"bin_db_ref01","srcdatavar":"bin_db_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"bin_db01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-bin_db_ref01"}}],"index$":1}]}, 'BinDb', {"POST /accounts/{account_id}/cloudforce-one/binary":{"protocol":"http","requestBody":{"description":"Binary file to be uploaded to the database.","required":true,"content":{"multipart/form-data":{"schema":{"type":"object","properties":{"file":{"description":"The binary file content to upload.","type":"string","format":"binary"}},"required":["file"]}}}},"parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0}]},"GET /accounts/{account_id}/cloudforce-one/binary/{hash}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Account ID.","required":true,"schema":{"description":"Account ID.","type":"string"},"index$":0},{"name":"hash","in":"path","description":"hash of the binary","required":true,"schema":{"description":"hash of the binary","type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const bin_db_ref01_ent = client.BinDb()
    let bin_db_ref01_data = setup.data.new.bin_db['bin_db_ref01']
    bin_db_ref01_data['account_id'] = setup.idmap['account01']

    bin_db_ref01_data = (await bin_db_ref01_ent.create(bin_db_ref01_data)).data()
    assert(null != bin_db_ref01_data)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/bin_db/BinDbTestData.json')

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
    ['bin_db01','bin_db02','bin_db03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_BIN_DB_ENTID': idmap,
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_BIN_DB_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_BIN_DB_ENTID']
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
  
