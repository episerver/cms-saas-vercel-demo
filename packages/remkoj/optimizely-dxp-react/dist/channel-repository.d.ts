import { type ApolloClient } from '@apollo/client/core';
import { type ContentGraphConfig } from './config';
type ChannelDomain = {
    name: string;
    isPrimary: boolean;
    isEdit: boolean;
    forLocale?: string;
};
type ChannelLocale = {
    code: string;
    slug: string;
    graphLocale: string;
    isDefault: boolean;
};
type ChannelContentId = {
    id: number;
    guidValue: string;
};
type ChannelContent = {
    startPage: ChannelContentId;
};
export type ChannelDefinitionData = {
    id: string;
    name: string;
    domains: ChannelDomain[];
    locales: ChannelLocale[];
    content: ChannelContent;
};
export declare class ChannelDefinition implements Readonly<ChannelDefinitionData> {
    readonly id: string;
    readonly name: string;
    readonly domains: ChannelDomain[];
    readonly locales: ChannelLocale[];
    readonly content: ChannelContent;
    get defaultLocale(): string;
    get defaultDomain(): string;
    protected dxp_url: string;
    protected get editDomain(): string | undefined;
    constructor(initialData: ChannelDefinitionData, dxp_url: string);
    getPrimaryDomain(): URL;
    getEditDomain(): URL;
}
export declare class ChannelRepository {
    protected client: ApolloClient<any>;
    protected config: ContentGraphConfig;
    constructor(optimizelyGraphClient: ApolloClient<any>, optimizelyGraphConfig?: ContentGraphConfig);
    getAll(): Promise<ReadonlyArray<Readonly<ChannelDefinition>>>;
    getById(id: string): Promise<Readonly<ChannelDefinition> | null>;
    getByDomain(domain: string, fallback?: boolean): Promise<Readonly<ChannelDefinition> | null>;
    getDefaultDomain(): string;
    getDefault(): Promise<Readonly<ChannelDefinition> | null>;
    protected transformGraphResponse(ch: any): ChannelDefinition;
}
export default ChannelRepository;
