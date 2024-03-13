/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webhook } from '../models/Webhook.js';
import type { WebhookPayload } from '../models/WebhookPayload.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.js';
export class WebhooksService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List all registered webhooks
     * List all registered webhooks
     * @returns Webhook Ok
     * @throws ApiError
     */
    public listWebhookHandler(): CancelablePromise<Array<Webhook>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/webhooks',
        });
    }
    /**
     * Register a webhook
     * Register a webhook and listen events respect to filter definition.
     *
     * If no filter is provided then all events will be listened.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public createWebhookHandler(
        requestBody: WebhookPayload,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/webhooks',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a registered webhook
     * Delete a registered webhook respect to `id` parameter
     * @param id
     * @returns void
     * @throws ApiError
     */
    public deleteWebhookHandler(
        id: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/webhooks/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a registered webhook
     * Update a registered webhook respect to `id` parameter
     * @param id
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public updateWebhookHandler(
        id: string,
        requestBody: WebhookPayload,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/webhooks/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
