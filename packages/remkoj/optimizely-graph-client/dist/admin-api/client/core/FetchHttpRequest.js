import { BaseHttpRequest } from './BaseHttpRequest.js';
import { request as __request } from './request.js';
export class FetchHttpRequest extends BaseHttpRequest {
    constructor(config) {
        super(config);
    }
    /**
     * Request method
     * @param options The request options from the service
     * @returns CancelablePromise<T>
     * @throws ApiError
     */
    request(options) {
        return __request(this.config, options);
    }
}
