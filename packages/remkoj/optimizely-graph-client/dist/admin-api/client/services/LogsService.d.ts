import type { RequestLog } from '../models/RequestLog.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.js';
export declare class LogsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get request logs
     * Get in/out request logs
     * @param page
     * @param requestId
     * @param host
     * @param path
     * @param success
     * @returns RequestLog Ok
     * @throws ApiError
     */
    getRequestLogHandler(page?: number, requestId?: string, host?: string, path?: string, success?: boolean): CancelablePromise<Array<RequestLog>>;
}
