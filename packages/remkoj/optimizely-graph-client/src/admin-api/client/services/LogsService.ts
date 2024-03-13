/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RequestLog } from '../models/RequestLog.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.js';
export class LogsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
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
    public getRequestLogHandler(
        page?: number,
        requestId?: string,
        host?: string,
        path?: string,
        success?: boolean,
    ): CancelablePromise<Array<RequestLog>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/logs/request',
            query: {
                'page': page,
                'requestId': requestId,
                'host': host,
                'path': path,
                'success': success,
            },
        });
    }
}
