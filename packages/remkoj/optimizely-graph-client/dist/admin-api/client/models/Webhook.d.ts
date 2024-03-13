import type { WebhookPayload } from './WebhookPayload.js';
export type Webhook = (WebhookPayload & {
    id: string;
});
