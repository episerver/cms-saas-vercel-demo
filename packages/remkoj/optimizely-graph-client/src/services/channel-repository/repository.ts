import type { ChannelDomain, ChannelLocale } from './types.js'
import type { OptimizelyGraphConfig } from '../../types.js'
import createClient, { isContentGraphClient, type IOptiGraphClient } from '../../client/index.js'
import ChannelDefinition from './definition.js'
import * as Queries from './queries.js'

export class ChannelRepository
{
    protected client : IOptiGraphClient

    public constructor(clientOrConfig?: IOptiGraphClient | OptimizelyGraphConfig)
    {
        this.client = isContentGraphClient(clientOrConfig) ? clientOrConfig : createClient(clientOrConfig)
    }

    public async getAll() : Promise<ReadonlyArray<Readonly<ChannelDefinition>>>
    {
        const data = await this.client.request<{ GetAllChannels?: {channels: {}[]}}, {}>(Queries.getAll)
        const channels = data.GetAllChannels?.channels
        if (!channels || !Array.isArray(channels))
            throw new Error("No channels returned by Optimizely Graph")

        return channels.map(this.transformGraphResponse)
    }

    public async getById(id: string) : Promise<Readonly<ChannelDefinition> | null>
    {
        const data = await this.client.request<{GetChannelById?: { channels: {}[]}}>(Queries.getById, { id })
        const channels = data.GetChannelById?.channels
        if (!channels || !Array.isArray(channels))
            throw new Error("No channels returned by Optimizely Graph")

        if (channels.length == 0)
            return null

        return this.transformGraphResponse(channels[0])
    }

    public async getByDomain(domain: string, fallback: boolean = true) : Promise<Readonly<ChannelDefinition> | null>
    {
        const data = await this.client.request<{ GetChannelByDomain?: { channels: {}[]}}>(Queries.getByDomain, { domain, fallback: fallback ? "*" : "__NO_FALLBACK__" })
        const channels = data.GetChannelByDomain?.channels
        if (!channels || !Array.isArray(channels))
            throw new Error("No channels returned by Optimizely Graph")

        if (channels.length == 0)
            return null

        return this.transformGraphResponse(channels[0])
    }

    public getDefaultDomain() : string
    {
        return this.client.siteInfo.frontendDomain ?? 'http://localhost:3000'
    }

    public getCmsDomain() : string 
    {
        return this.client.siteInfo.cmsURL ?? 'http://localhost:8000'
    }

    public async getDefault() : Promise<Readonly<ChannelDefinition> | null>
    {
        return this.getByDomain(this.getDefaultDomain(), true)
    }

    protected transformGraphResponse(ch: any) : ChannelDefinition
    {
        return new ChannelDefinition({
            id: ch.id,
            name: ch.name,
            domains: (ch.domains ?? []).map((d: any) => {
                const def : ChannelDomain = { 
                    name: d.name, 
                    isPrimary: d.type == "Primary", 
                    isEdit: d.type == "Edit" 
                }
                if (d.forLocale?.code)
                    def.forLocale = d.forLocale?.code
                return def
            }),
            locales: (ch.locales ?? []).map((c: any) => {
                const loc : ChannelLocale = {
                    code: c.code,
                    slug: c.slug,
                    graphLocale: (c.code as string).replaceAll("-","_"),
                    isDefault: c.isDefault == true
                }
                return loc
            }),
            content: {
                startPage: {
                    id: ch.content?.startPage?.id,
                    guidValue: ch.content?.startPage?.guidValue
                }
            }
        }, this.getCmsDomain())
    }
}

export default ChannelRepository