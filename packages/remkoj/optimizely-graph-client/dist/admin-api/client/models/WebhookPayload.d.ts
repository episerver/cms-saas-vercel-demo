import type { Partial_Record_FieldKeys_OperationMap__ } from './Partial_Record_FieldKeys_OperationMap__.js';
import type { Request } from './Request.js';
/**
 * The `WebhookPayload` type represents the payload of a webhook request, which includes information
 * about the request, filters, and whether the webhook is disabled.
 */
export type WebhookPayload = {
    disabled?: boolean;
    request: Request;
    topics?: Array<string>;
    filters?: (Array<Partial_Record_FieldKeys_OperationMap__> | Partial_Record_FieldKeys_OperationMap__);
};
