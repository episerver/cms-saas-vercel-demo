import type { BaseHttpRequest } from './core/BaseHttpRequest.js';
import type { OpenAPIConfig } from './core/OpenAPI.js';
import { DefinitionV2Service } from './services/DefinitionV2Service.js';
import { DefinitionV3Service } from './services/DefinitionV3Service.js';
import { LogsService } from './services/LogsService.js';
import { OidcService } from './services/OidcService.js';
import { QueryGraphQlService } from './services/QueryGraphQlService.js';
import { ResourcesService } from './services/ResourcesService.js';
import { WebhooksService } from './services/WebhooksService.js';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export declare class OptimizelyGraphAdminApi {
    readonly definitionV2: DefinitionV2Service;
    readonly definitionV3: DefinitionV3Service;
    readonly logs: LogsService;
    readonly oidc: OidcService;
    readonly queryGraphQl: QueryGraphQlService;
    readonly resources: ResourcesService;
    readonly webhooks: WebhooksService;
    readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest?: HttpRequestConstructor);
}
export {};
