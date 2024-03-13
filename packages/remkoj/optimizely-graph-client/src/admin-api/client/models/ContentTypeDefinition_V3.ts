/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContentTypeMap_V3 } from './ContentTypeMap_V3.js';
import type { LinkMap } from './LinkMap.js';
import type { PropertyTypeMap_V3 } from './PropertyTypeMap_V3.js';
export type ContentTypeDefinition_V3 = {
    languages: Array<string>;
    contentTypes: ContentTypeMap_V3;
    propertyTypes?: PropertyTypeMap_V3;
    links?: LinkMap;
    label?: string;
    useTypedFieldNames?: boolean;
};

