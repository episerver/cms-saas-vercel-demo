/// <reference types="react" />
import 'server-only';
import type { Metadata, ResolvingMetadata } from 'next';
import { type ClientFactory, type ChannelDefinition } from '@remkoj/optimizely-graph-client';
import { type ComponentFactory } from '@remkoj/optimizely-dxp-react';
import { type GetContentByPathMethod } from './data';
export type Params = {
    path: string[] | undefined;
    lang: string | undefined;
};
export type Props = {
    params: Params;
    searchParams: {};
};
export type GenerateMetadataProps<TParams extends {} = {}, TSearch extends {} = {}> = {
    params: Params;
};
export type NextJsPage = {
    generateStaticParams: () => Promise<Params[]>;
    generateMetadata: (props: Props, resolving: ResolvingMetadata) => Promise<Metadata>;
    CmsPage: (props: Props) => Promise<JSX.Element>;
};
export type CreatePageOptions = {
    defaultLocale: string;
    getContentByPath: GetContentByPathMethod;
    client: ClientFactory;
};
export declare function createPage(factory: ComponentFactory, channel: ChannelDefinition, options?: Partial<CreatePageOptions>): NextJsPage;
