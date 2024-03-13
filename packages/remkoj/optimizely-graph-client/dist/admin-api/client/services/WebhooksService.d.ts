import type { Webhook } from '../models/Webhook.js';
import type { WebhookPayload } from '../models/WebhookPayload.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.js';
export declare class WebhooksService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * List all registered webhooks
     * List all registered webhooks
     * @returns Webhook Ok
     * @throws ApiError
     */
    listWebhookHandler(): CancelablePromise<Array<Webhook>>;
    /**
     * Register a webhook
     * Register a webhook and listen events respect to filter definition.
     *
     * If no filter is provided then all events will be listened.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    createWebhookHandler(requestBody: WebhookPayload): CancelablePromise<void>;
    /**
     * Delete a registered webhook
     * Delete a registered webhook respect to `id` parameter
     * @param id
     * @returns void
     * @throws ApiError
     */
    deleteWebhookHandler(id: string): CancelablePromise<void>;
    /**
     * Update a registered webhook
     * Update a registered webhook respect to `id` parameter
     * @param id
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    updateWebhookHandler(id: string, requestBody: WebhookPayload): CancelablePromise<void>;
}
