/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TokenClaims } from '../models/TokenClaims.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.js';
export class OidcService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Upsert OIDC config
     * Enable OIDC support for the current account
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public upsertOidcConfigHandler(
        requestBody: TokenClaims,
    ): CancelablePromise<void> {
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
    public deleteOidcConfigHandler(): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/config/oidc',
        });
    }
}
