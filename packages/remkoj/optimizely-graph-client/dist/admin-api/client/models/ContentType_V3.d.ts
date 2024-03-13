import type { ContentTypeProperty_V3 } from './ContentTypeProperty_V3.js';
import type { Optional_string_ } from './Optional_string_.js';
export type ContentType_V3 = {
    contentType: Array<string>;
    properties: Record<string, ContentTypeProperty_V3>;
    displayName?: Optional_string_;
    sortOrder?: number;
    description?: Optional_string_;
    base?: string;
    abstract?: boolean;
};
