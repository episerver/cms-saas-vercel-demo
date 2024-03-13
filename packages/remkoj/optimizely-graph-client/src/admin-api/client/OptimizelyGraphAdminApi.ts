/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest.js';
import type { OpenAPIConfig } from './core/OpenAPI.js';
import { FetchHttpRequest } from './core/FetchHttpRequest.js';
import { DefinitionV2Service } from './services/DefinitionV2Service.js';
import { DefinitionV3Service } from './services/DefinitionV3Service.js';
import { LogsService } from './services/LogsService.js';
import { OidcService } from './services/OidcService.js';
import { QueryGraphQlService } from './services/QueryGraphQlService.js';
import { ResourcesService } from './services/ResourcesService.js';
import { WebhooksService } from './services/WebhooksService.js';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class OptimizelyGraphAdminApi {
    public readonly definitionV2: DefinitionV2Service;
    public readonly definitionV3: DefinitionV3Service;
    public readonly logs: LogsService;
    public readonly oidc: OidcService;
    public readonly queryGraphQl: QueryGraphQlService;
    public readonly resources: ResourcesService;
    public readonly webhooks: WebhooksService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://prod.cg.optimizely.com',
            VERSION: config?.VERSION ?? '3.6.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.definitionV2 = new DefinitionV2Service(this.request);
        this.definitionV3 = new DefinitionV3Service(this.request);
        this.logs = new LogsService(this.request);
        this.oidc = new OidcService(this.request);
        this.queryGraphQl = new QueryGraphQlService(this.request);
        this.resources = new ResourcesService(this.request);
        this.webhooks = new WebhooksService(this.request);
    }
}

