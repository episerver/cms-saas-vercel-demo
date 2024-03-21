import type { ApiRequestOptions } from './ApiRequestOptions.js';
import type { ApiResult } from './ApiResult.js';
export declare class ApiError extends Error {
    readonly url: string;
    readonly status: number;
    readonly statusText: string;
    readonly body: any;
    readonly request: ApiRequestOptions;
    constructor(request: ApiRequestOptions, response: ApiResult, message: string);
}
