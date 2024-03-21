import type { ComponentType, PropsWithChildren } from 'react';
import type { ClientFactory } from '@remkoj/optimizely-graph-client';
import type { GraphQLClient } from 'graphql-request';
type ServerPageProps = {
    params: Record<string, string | Array<string>>;
    searchParams: Record<string, string>;
};
export type EditPageComponent<T extends ServerPageProps = EditPageProps> = ({ params, searchParams }: T) => Promise<JSX.Element>;
export type EditPageProps = {
    params: {
        path: string[];
    };
    searchParams: Partial<{
        epieditmode: string;
        preview_token: string;
    }>;
};
export type EditViewOptions = {
    /**
     * The number of miliseconds to wait between receiving the 'dataSaved'
     * event from the Optimizely CMS and actually refreshing the preview.
     */
    refreshDelay: number;
    /**
     * The message to show to the editor when awaiting the data to be updated
     * in ContentGraph
     */
    refreshNotice: ComponentType<{}>;
    /**
     * The message to show to the editor when an error occured in rendering the
     * on page editing mode
     */
    errorNotice: ComponentType<{
        title: string;
        message: string;
    }>;
    /**
     * The layout to use when rendering a page component
     */
    layout: ComponentType<PropsWithChildren<{
        locale: string;
    }>>;
    /**
     * The base content loader to be used for the edit view
     */
    loader: GetContentByIdMethod;
    clientFactory: ClientFactory;
};
export type GetContentByIdVariables = {
    id?: number;
    workId?: number | null;
    guidValue?: string | null;
    locale?: string | Array<string>;
    isCommonDraft?: boolean | null;
};
export type GetContentByIdData = {
    Content: {
        items: {
            contentType?: Array<string | null> | null;
            id: {
                id?: number | null;
                workId?: number | null;
                guidValue?: string | null;
            };
            locale?: {
                name?: string | null;
            } | null;
            path?: string | null;
        }[];
    };
};
export type GetContentByIdMethod = (client: GraphQLClient, variables: GetContentByIdVariables) => Promise<GetContentByIdData>;
export {};
