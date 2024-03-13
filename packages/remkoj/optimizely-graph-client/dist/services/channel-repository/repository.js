import createClient, { isContentGraphClient } from '../../client/index.js';
import ChannelDefinition from './definition.js';
import * as Queries from './queries.js';
export class ChannelRepository {
    client;
    constructor(clientOrConfig) {
        this.client = isContentGraphClient(clientOrConfig) ? clientOrConfig : createClient(clientOrConfig);
    }
    async getAll() {
        const data = await this.client.request(Queries.getAll);
        const channels = data.GetAllChannels?.channels;
        if (!channels || !Array.isArray(channels))
            throw new Error("No channels returned by Optimizely Graph");
        return channels.map(this.transformGraphResponse);
    }
    async getById(id) {
        const data = await this.client.request(Queries.getById, { id });
        const channels = data.GetChannelById?.channels;
        if (!channels || !Array.isArray(channels))
            throw new Error("No channels returned by Optimizely Graph");
        if (channels.length == 0)
            return null;
        return this.transformGraphResponse(channels[0]);
    }
    async getByDomain(domain, fallback = true) {
        const data = await this.client.request(Queries.getByDomain, { domain, fallback: fallback ? "*" : "__NO_FALLBACK__" });
        const channels = data.GetChannelByDomain?.channels;
        if (!channels || !Array.isArray(channels))
            throw new Error("No channels returned by Optimizely Graph");
        if (channels.length == 0)
            return null;
        return this.transformGraphResponse(channels[0]);
    }
    getDefaultDomain() {
        return this.client.siteInfo.frontendDomain ?? 'http://localhost:3000';
    }
    getCmsDomain() {
        return this.client.siteInfo.cmsURL ?? 'http://localhost:8000';
    }
    async getDefault() {
        return this.getByDomain(this.getDefaultDomain(), true);
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
        }, this.getCmsDomain());
    }
}
export default ChannelRepository;
