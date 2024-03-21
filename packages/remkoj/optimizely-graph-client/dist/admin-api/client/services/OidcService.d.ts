import type { TokenClaims } from '../models/TokenClaims.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.js';
export declare class OidcService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Upsert OIDC config
     * Enable OIDC support for the current account
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    upsertOidcConfigHandler(requestBody: TokenClaims): CancelablePromise<void>;
    /**
     * Delete OIDC config
     * Delete OIDC config for the current account
     * @returns void
     * @throws ApiError
     */
    deleteOidcConfigHandler(): CancelablePromise<void>;
}
