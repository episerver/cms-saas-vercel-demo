/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContentTypeDefinition_V3 } from '../models/ContentTypeDefinition_V3.js';
import type { SourceInfoMap } from '../models/SourceInfoMap.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.js';
export class DefinitionV3Service {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get content source metadata
     * Get content source 'id' and 'label'
     * @param id The id of the source
     * @returns SourceInfoMap Ok
     * @throws ApiError
     */
    public getContentV3SourceHandler(
        id?: string,
    ): CancelablePromise<SourceInfoMap> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/content/v3/sources',
            query: {
                'id': id,
            },
        });
    }
    /**
     * Delete content source
     * Delete content source
     * @param id The id of the source
     * @param reset
     * @returns any Source is deleted successfully
     * @throws ApiError
     */
    public deleteContentV3SourceHandler(
        id?: string,
        reset?: boolean,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/content/v3/sources',
            query: {
                'id': id,
                'reset': reset,
            },
            errors: {
                404: `Source is not found`,
            },
        });
    }
    /**
     * Get fully content types for a given source
     * Get content types fully for a given source
     * @param id The id of the source
     * @returns ContentTypeDefinition_V3 Ok
     * @throws ApiError
     */
    public getContentV3TypeHandler(
        id: string = 'default',
    ): CancelablePromise<ContentTypeDefinition_V3> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/content/v3/types',
            query: {
                'id': id,
            },
        });
    }
    /**
     * Partial content type update
     * Update content types partially for given source
     * @param requestBody Content type definitions
     * @param id The id of the source
     * @returns void
     * @throws ApiError
     */
    public postContentV3TypeHandler(
        requestBody: ContentTypeDefinition_V3,
        id: string = 'default',
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/content/v3/types',
            query: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Full content type update
     * Update content types fully for given source
     * @param requestBody Content type definitions
     * @param id The id of the source
     * @returns void
     * @throws ApiError
     */
    public putContentV3TypeHandler(
        requestBody: ContentTypeDefinition_V3,
        id: string = 'default',
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/content/v3/types',
            query: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
