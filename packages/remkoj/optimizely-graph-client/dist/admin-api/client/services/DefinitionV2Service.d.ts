import type { ContentTypeDefinition_V2 } from '../models/ContentTypeDefinition_V2.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.js';
export declare class DefinitionV2Service {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Sync content data
     * Synchronize data for given source
     * @param id
     * @param requestBody
     * @returns any Index content successful
     * @throws ApiError
     */
    postContentV2DataHandler(id: string, requestBody: string): CancelablePromise<any>;
    /**
     * Purge content data
     * Purge data for given source
     * @param id The id of the source
     * @param languages The language of the source
     * @returns void
     * @throws ApiError
     */
    deleteContentV2DataHandler(id: string, languages?: Array<string>): CancelablePromise<void>;
    /**
     * @deprecated
     * Sync content types
     * Synchronize content types from one source
     * @param requestBody
     * @returns any Successfully updated content type
     * @throws ApiError
     */
    postContentV2TypeHandler(requestBody: ContentTypeDefinition_V2): CancelablePromise<any>;
}
