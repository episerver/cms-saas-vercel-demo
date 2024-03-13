export class DefinitionV2Service {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Sync content data
     * Synchronize data for given source
     * @param id
     * @param requestBody
     * @returns any Index content successful
     * @throws ApiError
     */
    postContentV2DataHandler(id, requestBody) {
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
    deleteContentV2DataHandler(id, languages) {
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
    postContentV2TypeHandler(requestBody) {
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
