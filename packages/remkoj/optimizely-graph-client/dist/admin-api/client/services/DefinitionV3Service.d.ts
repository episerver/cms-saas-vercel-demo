import type { ContentTypeDefinition_V3 } from '../models/ContentTypeDefinition_V3.js';
import type { SourceInfoMap } from '../models/SourceInfoMap.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.js';
export declare class DefinitionV3Service {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get content source metadata
     * Get content source 'id' and 'label'
     * @param id The id of the source
     * @returns SourceInfoMap Ok
     * @throws ApiError
     */
    getContentV3SourceHandler(id?: string): CancelablePromise<SourceInfoMap>;
    /**
     * Delete content source
     * Delete content source
     * @param id The id of the source
     * @param reset
     * @returns any Source is deleted successfully
     * @throws ApiError
     */
    deleteContentV3SourceHandler(id?: string, reset?: boolean): CancelablePromise<any>;
    /**
     * Get fully content types for a given source
     * Get content types fully for a given source
     * @param id The id of the source
     * @returns ContentTypeDefinition_V3 Ok
     * @throws ApiError
     */
    getContentV3TypeHandler(id?: string): CancelablePromise<ContentTypeDefinition_V3>;
    /**
     * Partial content type update
     * Update content types partially for given source
     * @param requestBody Content type definitions
     * @param id The id of the source
     * @returns void
     * @throws ApiError
     */
    postContentV3TypeHandler(requestBody: ContentTypeDefinition_V3, id?: string): CancelablePromise<void>;
    /**
     * Full content type update
     * Update content types fully for given source
     * @param requestBody Content type definitions
     * @param id The id of the source
     * @returns void
     * @throws ApiError
     */
    putContentV3TypeHandler(requestBody: ContentTypeDefinition_V3, id?: string): CancelablePromise<void>;
}
