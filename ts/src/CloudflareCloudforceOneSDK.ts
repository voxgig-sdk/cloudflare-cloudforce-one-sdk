// CloudflareCloudforceOne Ts SDK

import { AttackerEntity } from './entity/AttackerEntity'
import { BinDbEntity } from './entity/BinDbEntity'
import { BrandProtectionEntity } from './entity/BrandProtectionEntity'
import { CategoryEntity } from './entity/CategoryEntity'
import { CloudforceOneAccountExemptionEntity } from './entity/CloudforceOneAccountExemptionEntity'
import { CloudforceOneDeleteAllEntity } from './entity/CloudforceOneDeleteAllEntity'
import { CloudforceOneEditApprovalEntity } from './entity/CloudforceOneEditApprovalEntity'
import { CloudforceOneEmailRuleValidationEntity } from './entity/CloudforceOneEmailRuleValidationEntity'
import { CloudforceOneEmailRulesListEntity } from './entity/CloudforceOneEmailRulesListEntity'
import { CloudforceOneRequestsApiResponseCommonEntity } from './entity/CloudforceOneRequestsApiResponseCommonEntity'
import { CloudforceOneRuleEntity } from './entity/CloudforceOneRuleEntity'
import { CloudforceOneRuleApprovalDetailEntity } from './entity/CloudforceOneRuleApprovalDetailEntity'
import { CloudforceOneRuleApprovalsListEntity } from './entity/CloudforceOneRuleApprovalsListEntity'
import { CloudforceOneRulePreviewEntity } from './entity/CloudforceOneRulePreviewEntity'
import { CloudforceOneRulesPreviewListEntity } from './entity/CloudforceOneRulesPreviewListEntity'
import { CloudforceOneRulesSearchEntity } from './entity/CloudforceOneRulesSearchEntity'
import { CloudforceOneStatEntity } from './entity/CloudforceOneStatEntity'
import { CloudforceOneSuccessEntity } from './entity/CloudforceOneSuccessEntity'
import { CloudforceOneTreeNodeEntity } from './entity/CloudforceOneTreeNodeEntity'
import { CloudforceOneValidationEntity } from './entity/CloudforceOneValidationEntity'
import { CollectionEntity } from './entity/CollectionEntity'
import { CollectionsItemEntity } from './entity/CollectionsItemEntity'
import { CountryEntity } from './entity/CountryEntity'
import { DashboardAssetEntity } from './entity/DashboardAssetEntity'
import { DashboardUserEntity } from './entity/DashboardUserEntity'
import { DatasetEntity } from './entity/DatasetEntity'
import { EventEntity } from './entity/EventEntity'
import { GroupEntity } from './entity/GroupEntity'
import { IndicatorEntity } from './entity/IndicatorEntity'
import { IndicatorTypeEntity } from './entity/IndicatorTypeEntity'
import { PermissionEntity } from './entity/PermissionEntity'
import { PriorityEntity } from './entity/PriorityEntity'
import { PriorityIntelligenceEntity } from './entity/PriorityIntelligenceEntity'
import { PriorityIntelligenceRequirementEntity } from './entity/PriorityIntelligenceRequirementEntity'
import { PriorityIntelligenceRequirementsPirEntity } from './entity/PriorityIntelligenceRequirementsPirEntity'
import { PublicCredentialMonitorEntity } from './entity/PublicCredentialMonitorEntity'
import { RequestEntity } from './entity/RequestEntity'
import { RequestForInformationRfiEntity } from './entity/RequestForInformationRfiEntity'
import { RequestsDashboardEntity } from './entity/RequestsDashboardEntity'
import { RfiEntity } from './entity/RfiEntity'
import { RfiMessageEntity } from './entity/RfiMessageEntity'
import { RuleEntity } from './entity/RuleEntity'
import { ScanEntity } from './entity/ScanEntity'
import { TagEntity } from './entity/TagEntity'
import { TagCategoryEntity } from './entity/TagCategoryEntity'
import { TargetIndustryEntity } from './entity/TargetIndustryEntity'
import { ThreatSignalEntity } from './entity/ThreatSignalEntity'

export type * from './CloudflareCloudforceOneTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { CloudflareCloudforceOneEntityBase } from './CloudflareCloudforceOneEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


class CloudflareCloudforceOneSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method: fetchargs.method || 'GET',
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('CloudflareCloudforceOneSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('CloudflareCloudforceOneSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('CloudflareCloudforceOneSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.Attacker().list()` / `client.Attacker().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Attacker(entopts?: Record<string, any>) {
    const self = this
    return new AttackerEntity(self, entopts)
  }


  // Entity access: `client.BinDb().list()` / `client.BinDb().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BinDb(entopts?: Record<string, any>) {
    const self = this
    return new BinDbEntity(self, entopts)
  }


  // Entity access: `client.BrandProtection().list()` / `client.BrandProtection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BrandProtection(entopts?: Record<string, any>) {
    const self = this
    return new BrandProtectionEntity(self, entopts)
  }


  // Entity access: `client.Category().list()` / `client.Category().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Category(entopts?: Record<string, any>) {
    const self = this
    return new CategoryEntity(self, entopts)
  }


  // Entity access: `client.CloudforceOneAccountExemption().list()` / `client.CloudforceOneAccountExemption().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CloudforceOneAccountExemption(entopts?: Record<string, any>) {
    const self = this
    return new CloudforceOneAccountExemptionEntity(self, entopts)
  }


  // Entity access: `client.CloudforceOneDeleteAll().list()` / `client.CloudforceOneDeleteAll().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CloudforceOneDeleteAll(entopts?: Record<string, any>) {
    const self = this
    return new CloudforceOneDeleteAllEntity(self, entopts)
  }


  // Entity access: `client.CloudforceOneEditApproval().list()` / `client.CloudforceOneEditApproval().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CloudforceOneEditApproval(entopts?: Record<string, any>) {
    const self = this
    return new CloudforceOneEditApprovalEntity(self, entopts)
  }


  // Entity access: `client.CloudforceOneEmailRuleValidation().list()` / `client.CloudforceOneEmailRuleValidation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CloudforceOneEmailRuleValidation(entopts?: Record<string, any>) {
    const self = this
    return new CloudforceOneEmailRuleValidationEntity(self, entopts)
  }


  // Entity access: `client.CloudforceOneEmailRulesList().list()` / `client.CloudforceOneEmailRulesList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CloudforceOneEmailRulesList(entopts?: Record<string, any>) {
    const self = this
    return new CloudforceOneEmailRulesListEntity(self, entopts)
  }


  // Entity access: `client.CloudforceOneRequestsApiResponseCommon().list()` / `client.CloudforceOneRequestsApiResponseCommon().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CloudforceOneRequestsApiResponseCommon(entopts?: Record<string, any>) {
    const self = this
    return new CloudforceOneRequestsApiResponseCommonEntity(self, entopts)
  }


  // Entity access: `client.CloudforceOneRule().list()` / `client.CloudforceOneRule().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CloudforceOneRule(entopts?: Record<string, any>) {
    const self = this
    return new CloudforceOneRuleEntity(self, entopts)
  }


  // Entity access: `client.CloudforceOneRuleApprovalDetail().list()` / `client.CloudforceOneRuleApprovalDetail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CloudforceOneRuleApprovalDetail(entopts?: Record<string, any>) {
    const self = this
    return new CloudforceOneRuleApprovalDetailEntity(self, entopts)
  }


  // Entity access: `client.CloudforceOneRuleApprovalsList().list()` / `client.CloudforceOneRuleApprovalsList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CloudforceOneRuleApprovalsList(entopts?: Record<string, any>) {
    const self = this
    return new CloudforceOneRuleApprovalsListEntity(self, entopts)
  }


  // Entity access: `client.CloudforceOneRulePreview().list()` / `client.CloudforceOneRulePreview().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CloudforceOneRulePreview(entopts?: Record<string, any>) {
    const self = this
    return new CloudforceOneRulePreviewEntity(self, entopts)
  }


  // Entity access: `client.CloudforceOneRulesPreviewList().list()` / `client.CloudforceOneRulesPreviewList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CloudforceOneRulesPreviewList(entopts?: Record<string, any>) {
    const self = this
    return new CloudforceOneRulesPreviewListEntity(self, entopts)
  }


  // Entity access: `client.CloudforceOneRulesSearch().list()` / `client.CloudforceOneRulesSearch().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CloudforceOneRulesSearch(entopts?: Record<string, any>) {
    const self = this
    return new CloudforceOneRulesSearchEntity(self, entopts)
  }


  // Entity access: `client.CloudforceOneStat().list()` / `client.CloudforceOneStat().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CloudforceOneStat(entopts?: Record<string, any>) {
    const self = this
    return new CloudforceOneStatEntity(self, entopts)
  }


  // Entity access: `client.CloudforceOneSuccess().list()` / `client.CloudforceOneSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CloudforceOneSuccess(entopts?: Record<string, any>) {
    const self = this
    return new CloudforceOneSuccessEntity(self, entopts)
  }


  // Entity access: `client.CloudforceOneTreeNode().list()` / `client.CloudforceOneTreeNode().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CloudforceOneTreeNode(entopts?: Record<string, any>) {
    const self = this
    return new CloudforceOneTreeNodeEntity(self, entopts)
  }


  // Entity access: `client.CloudforceOneValidation().list()` / `client.CloudforceOneValidation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CloudforceOneValidation(entopts?: Record<string, any>) {
    const self = this
    return new CloudforceOneValidationEntity(self, entopts)
  }


  // Entity access: `client.Collection().list()` / `client.Collection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Collection(entopts?: Record<string, any>) {
    const self = this
    return new CollectionEntity(self, entopts)
  }


  // Entity access: `client.CollectionsItem().list()` / `client.CollectionsItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CollectionsItem(entopts?: Record<string, any>) {
    const self = this
    return new CollectionsItemEntity(self, entopts)
  }


  // Entity access: `client.Country().list()` / `client.Country().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Country(entopts?: Record<string, any>) {
    const self = this
    return new CountryEntity(self, entopts)
  }


  // Entity access: `client.DashboardAsset().list()` / `client.DashboardAsset().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DashboardAsset(entopts?: Record<string, any>) {
    const self = this
    return new DashboardAssetEntity(self, entopts)
  }


  // Entity access: `client.DashboardUser().list()` / `client.DashboardUser().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DashboardUser(entopts?: Record<string, any>) {
    const self = this
    return new DashboardUserEntity(self, entopts)
  }


  // Entity access: `client.Dataset().list()` / `client.Dataset().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Dataset(entopts?: Record<string, any>) {
    const self = this
    return new DatasetEntity(self, entopts)
  }


  // Entity access: `client.Event().list()` / `client.Event().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Event(entopts?: Record<string, any>) {
    const self = this
    return new EventEntity(self, entopts)
  }


  // Entity access: `client.Group().list()` / `client.Group().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Group(entopts?: Record<string, any>) {
    const self = this
    return new GroupEntity(self, entopts)
  }


  // Entity access: `client.Indicator().list()` / `client.Indicator().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Indicator(entopts?: Record<string, any>) {
    const self = this
    return new IndicatorEntity(self, entopts)
  }


  // Entity access: `client.IndicatorType().list()` / `client.IndicatorType().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IndicatorType(entopts?: Record<string, any>) {
    const self = this
    return new IndicatorTypeEntity(self, entopts)
  }


  // Entity access: `client.Permission().list()` / `client.Permission().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Permission(entopts?: Record<string, any>) {
    const self = this
    return new PermissionEntity(self, entopts)
  }


  // Entity access: `client.Priority().list()` / `client.Priority().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Priority(entopts?: Record<string, any>) {
    const self = this
    return new PriorityEntity(self, entopts)
  }


  // Entity access: `client.PriorityIntelligence().list()` / `client.PriorityIntelligence().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PriorityIntelligence(entopts?: Record<string, any>) {
    const self = this
    return new PriorityIntelligenceEntity(self, entopts)
  }


  // Entity access: `client.PriorityIntelligenceRequirement().list()` / `client.PriorityIntelligenceRequirement().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PriorityIntelligenceRequirement(entopts?: Record<string, any>) {
    const self = this
    return new PriorityIntelligenceRequirementEntity(self, entopts)
  }


  // Entity access: `client.PriorityIntelligenceRequirementsPir().list()` / `client.PriorityIntelligenceRequirementsPir().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PriorityIntelligenceRequirementsPir(entopts?: Record<string, any>) {
    const self = this
    return new PriorityIntelligenceRequirementsPirEntity(self, entopts)
  }


  // Entity access: `client.PublicCredentialMonitor().list()` / `client.PublicCredentialMonitor().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PublicCredentialMonitor(entopts?: Record<string, any>) {
    const self = this
    return new PublicCredentialMonitorEntity(self, entopts)
  }


  // Entity access: `client.Request().list()` / `client.Request().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Request(entopts?: Record<string, any>) {
    const self = this
    return new RequestEntity(self, entopts)
  }


  // Entity access: `client.RequestForInformationRfi().list()` / `client.RequestForInformationRfi().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RequestForInformationRfi(entopts?: Record<string, any>) {
    const self = this
    return new RequestForInformationRfiEntity(self, entopts)
  }


  // Entity access: `client.RequestsDashboard().list()` / `client.RequestsDashboard().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RequestsDashboard(entopts?: Record<string, any>) {
    const self = this
    return new RequestsDashboardEntity(self, entopts)
  }


  // Entity access: `client.Rfi().list()` / `client.Rfi().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Rfi(entopts?: Record<string, any>) {
    const self = this
    return new RfiEntity(self, entopts)
  }


  // Entity access: `client.RfiMessage().list()` / `client.RfiMessage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RfiMessage(entopts?: Record<string, any>) {
    const self = this
    return new RfiMessageEntity(self, entopts)
  }


  // Entity access: `client.Rule().list()` / `client.Rule().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Rule(entopts?: Record<string, any>) {
    const self = this
    return new RuleEntity(self, entopts)
  }


  // Entity access: `client.Scan().list()` / `client.Scan().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Scan(entopts?: Record<string, any>) {
    const self = this
    return new ScanEntity(self, entopts)
  }


  // Entity access: `client.Tag().list()` / `client.Tag().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Tag(entopts?: Record<string, any>) {
    const self = this
    return new TagEntity(self, entopts)
  }


  // Entity access: `client.TagCategory().list()` / `client.TagCategory().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TagCategory(entopts?: Record<string, any>) {
    const self = this
    return new TagCategoryEntity(self, entopts)
  }


  // Entity access: `client.TargetIndustry().list()` / `client.TargetIndustry().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TargetIndustry(entopts?: Record<string, any>) {
    const self = this
    return new TargetIndustryEntity(self, entopts)
  }


  // Entity access: `client.ThreatSignal().list()` / `client.ThreatSignal().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ThreatSignal(entopts?: Record<string, any>) {
    const self = this
    return new ThreatSignalEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new CloudflareCloudforceOneSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return CloudflareCloudforceOneSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'CloudflareCloudforceOne' }
  }

  toString() {
    return 'CloudflareCloudforceOne ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = CloudflareCloudforceOneSDK


export {
  stdutil,
  config,
  

  BaseFeature,
  CloudflareCloudforceOneEntityBase,

  CloudflareCloudforceOneSDK,
  SDK,
}


