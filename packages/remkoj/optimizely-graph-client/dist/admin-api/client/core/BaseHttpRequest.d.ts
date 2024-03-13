import type { ApiRequestOptions } from './ApiRequestOptions.js';
import type { CancelablePromise } from './CancelablePromise.js';
import type { OpenAPIConfig } from './OpenAPI.js';
export declare abstract class BaseHttpRequest {
    readonly config: OpenAPIConfig;
    constructor(config: OpenAPIConfig);
    abstract request<T>(options: ApiRequestOptions): CancelablePromise<T>;
}
