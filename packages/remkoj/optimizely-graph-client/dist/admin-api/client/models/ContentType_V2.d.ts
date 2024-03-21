import type { ContentTypeProperty_V2 } from './ContentTypeProperty_V2.js';
import type { Optional_string_ } from './Optional_string_.js';
export type ContentType_V2 = {
    properties: Array<ContentTypeProperty_V2>;
    abstract?: boolean;
    base?: string;
    description?: Optional_string_;
    sortOrder?: number;
    displayName?: Optional_string_;
    contentType: Array<string>;
    name: string;
};
