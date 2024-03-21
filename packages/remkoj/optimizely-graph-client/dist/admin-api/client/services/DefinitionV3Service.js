export class DefinitionV3Service {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get content source metadata
     * Get content source 'id' and 'label'
     * @param id The id of the source
     * @returns SourceInfoMap Ok
     * @throws ApiError
     */
    getContentV3SourceHandler(id) {
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
    deleteContentV3SourceHandler(id, reset) {
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
    getContentV3TypeHandler(id = 'default') {
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
    postContentV3TypeHandler(requestBody, id = 'default') {
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
    putContentV3TypeHandler(requestBody, id = 'default') {
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
