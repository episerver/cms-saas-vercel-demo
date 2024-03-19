import type { Types } from '@graphql-codegen/plugin-helpers';
type DocumentsConfigNode = NonNullable<Types.Config['documents']>;
export declare const IContentDataProps: string[];
export declare const fragments: string[];
export declare const queries: string[];
export declare const DefaultFunctions: string[];
export declare const documents: string[];
export declare const injectFragments: (base: DocumentsConfigNode) => DocumentsConfigNode;
export {};
