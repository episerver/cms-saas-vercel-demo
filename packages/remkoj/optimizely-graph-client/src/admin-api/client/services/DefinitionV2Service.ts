/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContentTypeDefinition_V2 } from '../models/ContentTypeDefinition_V2.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.js';
export class DefinitionV2Service {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Sync content data
     * Synchronize data for given source
     * @param id
     * @param requestBody
     * @returns any Index content successful
     * @throws ApiError
     */
    public postContentV2DataHandler(
        id: string,
        requestBody: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/content/v2/data',
            query: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Purge content data
     * Purge data for given source
     * @param id The id of the source
     * @param languages The language of the source
     * @returns void
     * @throws ApiError
     */
    public deleteContentV2DataHandler(
        id: string,
        languages?: Array<string>,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/content/v2/data',
            query: {
                'id': id,
                'languages': languages,
            },
        });
    }
    /**
     * @deprecated
     * Sync content types
     * Synchronize content types from one source
     * @param requestBody
     * @returns any Successfully updated content type
     * @throws ApiError
     */
    public postContentV2TypeHandler(
        requestBody: ContentTypeDefinition_V2,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/content/v2/types',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Content type languages could not be updated`,
            },
        });
    }
}
