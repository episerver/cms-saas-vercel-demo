import { gql } from '@apollo/client/core';
import getContentGraphConfig from './config';
const IS_DEV = process.env.NODE_ENV == 'development';
export class ChannelDefinition {
    id;
    name;
    domains;
    locales;
    content;
    get defaultLocale() {
        return (this.locales.filter(x => x.isDefault)[0] || this.locales[0])?.code ?? "en";
    }
    get defaultDomain() {
        const primaryDomain = IS_DEV ? this.domains.filter(x => x.name.includes("localhost"))[0] : this.domains.filter(x => x.isPrimary)[0];
        return primaryDomain?.name ?? "localhost:3000";
    }
    dxp_url;
    get editDomain() {
        const primaryDomain = this.domains.filter(x => x.isEdit)[0];
        return primaryDomain?.name;
    }
    constructor(initialData, dxp_url) {
        this.id = initialData.id;
        this.name = initialData.name;
        this.domains = initialData.domains;
        this.locales = initialData.locales;
        this.content = initialData.content;
        this.dxp_url = dxp_url;
    }
    getPrimaryDomain() {
        return new URL(`${IS_DEV ? 'http' : 'https'}://${this.defaultDomain}/`);
    }
    getEditDomain() {
        const edit = this.editDomain;
        return edit ? new URL(`https://${edit}/`) : new URL(this.dxp_url);
    }
}
export class ChannelRepository {
    client;
    config;
    constructor(optimizelyGraphClient, optimizelyGraphConfig) {
        this.client = optimizelyGraphClient;
        this.config = optimizelyGraphConfig || getContentGraphConfig();
    }
    async getAll() {
        const { error, errors, data } = await this.client.query({ query: Queries.getAll, fetchPolicy: "cache-first" });
        if (error || errors) {
            throw new Error("Unable to retrieve the channel list from Optimizely Graph");
        }
        const channels = data.GetAllChannels?.channels;
        if (!channels || !Array.isArray(channels))
            throw new Error("No channels returned by Optimizely Graph");
        return channels.map(this.transformGraphResponse);
    }
    async getById(id) {
        const { error, errors, data } = await this.client.query({ query: Queries.getById, fetchPolicy: "cache-first", variables: { id } });
        if (error || errors) {
            throw new Error("Unable to retrieve the channel list from Optimizely Graph");
        }
        const channels = data.GetChannelById?.channels;
        if (!channels || !Array.isArray(channels))
            throw new Error("No channels returned by Optimizely Graph");
        if (channels.length == 0)
            return null;
        return this.transformGraphResponse(channels[0]);
    }
    async getByDomain(domain, fallback = true) {
        const { error, errors, data } = await this.client.query({ query: Queries.getByDomain, fetchPolicy: "cache-first", variables: { domain, fallback: fallback ? "*" : "__NO_FALLBACK__" } });
        if (error || errors) {
            throw new Error("Unable to retrieve the channel list from Optimizely Graph");
        }
        const channels = data.GetChannelByDomain?.channels;
        if (!channels || !Array.isArray(channels))
            throw new Error("No channels returned by Optimizely Graph");
        if (channels.length == 0)
            return null;
        return this.transformGraphResponse(channels[0]);
    }
    getDefaultDomain() {
        return this.config.deploy_domain;
    }
    async getDefault() {
        return this.getByDomain(this.config.deploy_domain, true);
    }
    transformGraphResponse(ch) {
        return new ChannelDefinition({
            id: ch.id,
            name: ch.name,
            domains: (ch.domains ?? []).map((d) => {
                const def = {
                    name: d.name,
                    isPrimary: d.type == "Primary",
                    isEdit: d.type == "Edit"
                };
                if (d.forLocale?.code)
                    def.forLocale = d.forLocale?.code;
                return def;
            }),
            locales: (ch.locales ?? []).map((c) => {
                const loc = {
                    code: c.code,
                    slug: c.slug,
                    graphLocale: c.code.replaceAll("-", "_"),
                    isDefault: c.isDefault == true
                };
                return loc;
            }),
            content: {
                startPage: {
                    id: ch.content?.startPage?.id,
                    guidValue: ch.content?.startPage?.guidValue
                }
            }
        }, this.config.dxp_url);
    }
}
export default ChannelRepository;
const Queries = {
    getAll: gql `query GetAllChannels {
        GetAllChannels:SiteDefinition {
            channels: items {
                id: Id
                name: Name,
                domains: Hosts {
                    name: Name
                    type: Type
                    forLocale: Language {
                        code: Name
                    }
                }
                locales:Languages {
                    code:Name
                    slug:UrlSegment
                    isDefault:IsMasterLanguage
                }
                content: ContentRoots {
                    startPage: StartPage {
                        id:Id,
                        guidValue:GuidValue
                    }
                }
            }
        }
    }`,
    getById: gql `query GetChannelById($id: String!) {
        GetChannelById:SiteDefinition (
            where: {
                Id: { eq: $id }
            }
            limit: 1
        ) {
          channels: items {
                id: Id
                name: Name,
                domains: Hosts {
                    name: Name
                    type: Type
                    forLocale: Language {
                        code: Name
                    }
                }
                locales:Languages {
                    code:Name
                    slug:UrlSegment
                    isDefault:IsMasterLanguage
                }
                content: ContentRoots {
                    startPage: StartPage {
                        id:Id,
                        guidValue:GuidValue
                    }
                }
            }
        }
    }`,
    getByDomain: gql `query GetChannelByDomain($domain: String!, $fallback: String! = "___") {
        GetChannelByDomain:SiteDefinition (
            where: {
                _or: [
                    {Hosts: { Name: { eq: $domain }}},
                    {Hosts: { Name: { eq: $fallback }}}
                ]  
            }
            limit: 1
        ) {
          channels: items {
                id: Id
                name: Name,
                domains: Hosts {
                    name: Name
                    type: Type
                    forLocale: Language {
                        code: Name
                    }
                }
                locales:Languages {
                    code:Name
                    slug:UrlSegment
                    isDefault:IsMasterLanguage
                }
                content: ContentRoots {
                    startPage: StartPage {
                        id:Id,
                        guidValue:GuidValue
                    }
                }
            }
        }
    }`
};
