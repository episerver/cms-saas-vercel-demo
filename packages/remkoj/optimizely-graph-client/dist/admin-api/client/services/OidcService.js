export class OidcService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Upsert OIDC config
     * Enable OIDC support for the current account
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    upsertOidcConfigHandler(requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/config/oidc',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete OIDC config
     * Delete OIDC config for the current account
     * @returns void
     * @throws ApiError
     */
    deleteOidcConfigHandler() {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/config/oidc',
        });
    }
}
