import type { ApiRequestOptions } from './client/core/ApiRequestOptions.js';
import { CancelablePromise } from './client/core/CancelablePromise.js';
import type { OpenAPIConfig } from './client/core/OpenAPI.js';
export declare const request: <T>(config: OpenAPIConfig, options: ApiRequestOptions) => CancelablePromise<T>;
export default request;
