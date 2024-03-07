import { GraphQLClient } from "graphql-request";
export type GetContentByPathVariables = {
    path: string;
    locale?: Array<string | null>[] | string | null;
    siteId?: string | null;
};
export type GetContentByPathResponse = {
    Content?: {
        items?: {
            contentType?: Array<string | null> | null;
            id?: {
                id?: number | null;
                workId?: number | null;
                guidValue?: string | null;
            } | null;
            locale?: {
                name?: string | null;
            } | null;
            path?: string | null;
        }[];
    };
};
export type GetMetaDataByPathResponse = {
    getGenericMetaData?: {
        items?: Array<{
            name?: string;
            alternatives?: Array<{
                locale?: string | null;
                href?: string | null;
            } | null> | null;
            canonical?: string | null;
        } | null>;
    };
};
export type GetContentByPathMethod = (client: GraphQLClient, variables: GetContentByPathVariables) => Promise<GetContentByPathResponse>;
export type GetMetaDataByPathMethod = (client: GraphQLClient, variables: GetContentByPathVariables) => Promise<GetMetaDataByPathResponse>;
export declare const getMetaDataByPath: GetMetaDataByPathMethod;
export declare const getContentByPath: GetContentByPathMethod;
export default getContentByPath;
