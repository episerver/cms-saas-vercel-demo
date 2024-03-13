import type { ApiRequestOptions } from './client/core/ApiRequestOptions.js'
import { CancelablePromise } from './client/core/CancelablePromise.js'
import type { OpenAPIConfig } from './client/core/OpenAPI.js'

import createHmacFetch from '../client/hmac-fetch.js';

export const request = <T>(config: OpenAPIConfig, options: ApiRequestOptions): CancelablePromise<T> => {
    return new CancelablePromise((resolve, reject, onCancel) => {

        const cancelToken = new AbortController()
        onCancel(() => cancelToken.abort("Request aborted"))

        /*
        // Get the request URL. Depending on your needs, this might need additional processing,
        // @see ./src/templates/core/functions/getUrl.hbs
        const url = `${config.BASE}${options.path}`;

        // Optional: Get and link the cancelation token, so the request can be aborted.
        const source = axiosInstance.CancelToken.source();
        onCancel(() => source.cancel('The user aborted a request.'));

        // Execute the request. This is a minimal example, in real world scenarios
        // you will need to add headers, process form data, etc.
        // @see ./src/templates/core/axios/request.hbs
        axiosInstance.request({
            url,
            data: options.body,
            method: options.method,
            cancelToken: source.token,
        }).then(data => {
            resolve(data);
        }).catch(error => {
            reject(error);
        });
        */
    });
};

export default request