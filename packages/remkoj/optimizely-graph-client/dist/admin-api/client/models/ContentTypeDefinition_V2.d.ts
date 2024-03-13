import type { ContentType_V2 } from './ContentType_V2.js';
import type { LinkMap } from './LinkMap.js';
import type { PropertyType_V2 } from './PropertyType_V2.js';
export type ContentTypeDefinition_V2 = {
    useTypedFieldNames?: boolean;
    languages?: Array<string>;
    links?: LinkMap;
    contentTypes?: Array<ContentType_V2>;
    propertyTypes?: Array<PropertyType_V2>;
};
