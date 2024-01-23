import type { ApolloClient } from "@apollo/client";
import { type PropsWithChildren, type ReactNode } from "react";
import { type Metadata, type ResolvingMetadata } from "next";
import { type ChannelDefinition } from "@remkoj/optimizely-dxp-react";
import type { Props } from './page';
import { type GetMetaDataByPathMethod } from './data';
export type CmsPageLayout = {
    generateMetadata: (props: Omit<Props, 'searchParams'>, resolving: ResolvingMetadata) => Promise<Metadata>;
    PageLayout: (props: PropsWithChildren<Omit<Props, 'searchParams'>>) => JSX.Element | ReactNode;
};
export type CreateLayoutOptions = {
    defaultLocale: string;
    getMetaDataByPath: GetMetaDataByPathMethod;
};
export declare function createLayout(client: ApolloClient<any>, channel: ChannelDefinition, options?: Partial<CreateLayoutOptions>): CmsPageLayout;
export default createLayout;
