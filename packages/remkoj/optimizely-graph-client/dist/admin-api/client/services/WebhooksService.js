export class WebhooksService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * List all registered webhooks
     * List all registered webhooks
     * @returns Webhook Ok
     * @throws ApiError
     */
    listWebhookHandler() {
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
    createWebhookHandler(requestBody) {
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
    deleteWebhookHandler(id) {
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
    updateWebhookHandler(id, requestBody) {
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
