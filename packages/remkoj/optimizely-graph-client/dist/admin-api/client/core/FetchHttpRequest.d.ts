import type { ApiRequestOptions } from './ApiRequestOptions.js';
import { BaseHttpRequest } from './BaseHttpRequest.js';
import type { CancelablePromise } from './CancelablePromise.js';
import type { OpenAPIConfig } from './OpenAPI.js';
export declare class FetchHttpRequest extends BaseHttpRequest {
    constructor(config: OpenAPIConfig);
    /**
     * Request method
     * @param options The request options from the service
     * @returns CancelablePromise<T>
     * @throws ApiError
     */
    request<T>(options: ApiRequestOptions): CancelablePromise<T>;
}
