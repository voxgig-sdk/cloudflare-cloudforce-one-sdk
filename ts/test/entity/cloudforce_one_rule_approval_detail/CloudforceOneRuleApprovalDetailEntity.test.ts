

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


describe('CloudforceOneRuleApprovalDetailEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareCloudforceOneSDK.test()
    const ent = testsdk.CloudforceOneRuleApprovalDetail()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'cloudforce_one_rule_approval_detail.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"audit_log_id":{"a":true,"h":"Audit Log Id","n":"audit_log_id","r":true,"t":"`$NUMBER`","key$":"audit_log_id","index$":0},"can_review":{"a":true,"h":"Can Review","n":"can_review","r":true,"sh":"Whether the authenticated user may approve or reject this pending change.","t":"`$BOOLEAN`","key$":"can_review","index$":1},"cancelled_at":{"a":true,"h":"Cancelled At","n":"cancelled_at","r":true,"sh":"Time at which the requester cancelled the approval.","t":"`$NUMBER`","key$":"cancelled_at","index$":2},"cancelled_by":{"a":true,"h":"Cancelled By","n":"cancelled_by","r":true,"sh":"Requester who cancelled the pending approval.","t":"`$STRING`","key$":"cancelled_by","index$":3},"change_description":{"a":true,"h":"Change Description","n":"change_description","r":true,"t":"`$STRING`","key$":"change_description","index$":4},"change_type":{"a":true,"h":"Change Type","n":"change_type","r":true,"t":"`$STRING`","key$":"change_type","index$":5},"commit_message":{"a":true,"h":"Commit Message","n":"commit_message","r":true,"sh":"The requester supplies this human-readable justification with the change.","t":"`$STRING`","key$":"commit_message","index$":6},"compiler_warnings":{"a":true,"h":"Compiler Warnings","n":"compiler_warnings","r":false,"t":"`$ARRAY`","key$":"compiler_warnings","index$":7},"current_rule":{"a":true,"h":"Current Rule","n":"current_rule","r":true,"t":"`$ANY`","union":{"branches":3,"count":1,"depth":7},"key$":"current_rule","index$":8},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$NUMBER`","key$":"id","index$":9},"proposed_changes":{"a":true,"h":"Proposed Changes","n":"proposed_changes","r":true,"sh":"Contains structured proposed rule changes, or null for unresolved persisted data.","t":"`$ANY`","union":{"branches":3,"count":1,"depth":0},"key$":"proposed_changes","index$":10},"rejection_reason":{"a":true,"h":"Rejection Reason","n":"rejection_reason","r":true,"sh":"The reviewer may supply a reason when rejecting the change.","t":"`$STRING`","key$":"rejection_reason","index$":11},"requested_at":{"a":true,"h":"Requested At","n":"requested_at","r":true,"t":"`$NUMBER`","key$":"requested_at","index$":12},"requested_by":{"a":true,"h":"Requested By","n":"requested_by","r":true,"t":"`$STRING`","key$":"requested_by","index$":13},"reviewed_at":{"a":true,"h":"Reviewed At","n":"reviewed_at","r":true,"t":"`$NUMBER`","key$":"reviewed_at","index$":14},"reviewer_scope":{"a":true,"h":"Reviewer Scope","n":"reviewer_scope","r":true,"sh":"Review policy: general Nomos approvers for default; general approvers or Phishguard for email.","t":"`$STRING`","key$":"reviewer_scope","index$":15},"revision_number":{"a":true,"h":"Revision Number","n":"revision_number","r":true,"sh":"Revision number within this approval request chain.","t":"`$INTEGER`","key$":"revision_number","index$":16},"rule_id":{"a":true,"fo":"uuid","h":"Rule Id","n":"rule_id","r":true,"t":"`$STRING`","key$":"rule_id","index$":17},"rule_name":{"a":true,"h":"Rule Name","n":"rule_name","r":true,"t":"`$STRING`","key$":"rule_name","index$":18},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":19},"superseded_by_approval_id":{"a":true,"h":"Superseded By Approval Id","n":"superseded_by_approval_id","r":true,"sh":"Newer approval revision that replaced this approval.","t":"`$NUMBER`","key$":"superseded_by_approval_id","index$":20},"supersedes_approval_id":{"a":true,"h":"Supersedes Approval Id","n":"supersedes_approval_id","r":true,"sh":"This approval replaces the referenced approval revision.","t":"`$NUMBER`","key$":"supersedes_approval_id","index$":21}},"id":{"field":"id","name":"id"},"name":"cloudforce_one_rule_approval_detail","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/cloudforce-one/rules/approvals/{id}/resubmit","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"1","k":"param","n":"approval_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/cloudforce-one/rules/approvals/{id}/resubmit","q":{"$action":"resubmit","exist":["account_id","approval_id"]},"r":{"param":{"id":"approval_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"rules"},{"lit":"approvals"},{"var":"approval_id"},{"lit":"resubmit"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/cloudforce-one/rules/approvals/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"1","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/cloudforce-one/rules/approvals/{id}","q":{"exist":["account_id","id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"cloudforce-one"},{"lit":"rules"},{"lit":"approvals"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.approval`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"cloudforce_one_rule_approval_detail","name__orig":"cloudforce_one_rule_approval_detail","Name":"CloudforceOneRuleApprovalDetail","name_":"cloudforce_one_rule_approval_detail","name-":"cloudforce-one-rule-approval-detail","NAME":"CLOUDFORCE_ONE_RULE_APPROVAL_DETAIL","index$":11}, {"active":true,"entity":"cloudforce_one_rule_approval_detail","key$":"BasicCloudforceOneRuleApprovalDetailFlow","kind":"basic","name":"BasicCloudforceOneRuleApprovalDetailFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"cloudforce_one_rule_approval_detail_ref01"},"m":{"account_id":"account01","approval_id":"approval01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"cloudforce_one_rule_approval_detail_ref01","srcdatavar":"cloudforce_one_rule_approval_detail_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"cloudforce_one_rule_approval_detail01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-cloudforce_one_rule_approval_detail_ref01"}}],"index$":1}]}, 'CloudforceOneRuleApprovalDetail', {"POST /accounts/{account_id}/cloudforce-one/rules/approvals/{id}/resubmit":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"commit_message":{"type":"string","maxLength":1000,"minLength":1},"content":{"minLength":1,"type":"string"},"description":{"type":"string","maxLength":1000},"enabled":{"type":"boolean"},"name":{"type":"string","maxLength":255,"minLength":1},"namespaces":{"type":"array","items":{"type":"string"}}},"x-ref":"#/components/schemas/cloudforce-one_ResubmitApprovalRequest"}}}},"parameters":[{"description":"Cloudflare account ID.","in":"path","name":"account_id","required":true,"schema":{"type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353"},"x-ref":"#/components/parameters/cloudforce-one_account_id","index$":0},{"name":"id","in":"path","description":"The unique identifier for the approval.","required":true,"schema":{"description":"The unique identifier for the approval.","type":"string","example":"1"},"index$":1}]},"GET /accounts/{account_id}/cloudforce-one/rules/approvals/{id}":{"protocol":"http","parameters":[{"description":"Cloudflare account ID.","in":"path","name":"account_id","required":true,"schema":{"type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353"},"x-ref":"#/components/parameters/cloudforce-one_account_id","index$":0},{"name":"id","in":"path","description":"The unique identifier for the approval.","required":true,"schema":{"description":"The unique identifier for the approval.","type":"string","example":"1"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const cloudforce_one_rule_approval_detail_ref01_ent = client.CloudforceOneRuleApprovalDetail()
    let cloudforce_one_rule_approval_detail_ref01_data = setup.data.new.cloudforce_one_rule_approval_detail['cloudforce_one_rule_approval_detail_ref01']
    cloudforce_one_rule_approval_detail_ref01_data['account_id'] = setup.idmap['account01']
    cloudforce_one_rule_approval_detail_ref01_data['approval_id'] = setup.idmap['approval01']

    cloudforce_one_rule_approval_detail_ref01_data = (await cloudforce_one_rule_approval_detail_ref01_ent.create(cloudforce_one_rule_approval_detail_ref01_data)).data()
    assert(null != cloudforce_one_rule_approval_detail_ref01_data.id)


    // LOAD
    const cloudforce_one_rule_approval_detail_ref01_match_dt0: any = {}
    cloudforce_one_rule_approval_detail_ref01_match_dt0.id = cloudforce_one_rule_approval_detail_ref01_data.id
    const cloudforce_one_rule_approval_detail_ref01_data_dt0 = (await cloudforce_one_rule_approval_detail_ref01_ent.load(cloudforce_one_rule_approval_detail_ref01_match_dt0)).data()
    assert(cloudforce_one_rule_approval_detail_ref01_data_dt0.id === cloudforce_one_rule_approval_detail_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/cloudforce_one_rule_approval_detail/CloudforceOneRuleApprovalDetailTestData.json')

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
    ['cloudforce_one_rule_approval_detail01','cloudforce_one_rule_approval_detail02','cloudforce_one_rule_approval_detail03','account01','approval01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_RULE_APPROVAL_DETAIL_ENTID': idmap,
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_CLOUDFORCE_ONE_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_RULE_APPROVAL_DETAIL_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_CLOUDFORCE_ONE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_CLOUDFORCE_ONE_TEST_CLOUDFORCE_ONE_RULE_APPROVAL_DETAIL_ENTID']
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
  
