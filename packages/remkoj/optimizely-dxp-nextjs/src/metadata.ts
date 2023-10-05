import type { ApolloClient, ApolloClientOptions, NormalizedCacheObject } from '@apollo/client'
import { createNewClient as createClient, type ContentGraphConfig, type ContentLink } from '@remkoj/optimizely-dxp-react'
import { Metadata } from 'next'
import { isOptimizelyNextPageWithMetaData } from './page'
import { ComponentFactory, getContentGraphConfig, validateContentGraphConfig } from '@remkoj/optimizely-dxp-react'

const DEBUG = process.env.DXP_DEBUG == '1'

export class MetaDataResolver<TCacheShape extends NormalizedCacheObject = NormalizedCacheObject>
{
    private _cgClient : ApolloClient<TCacheShape>
    private _config : ContentGraphConfig

    public constructor (client: ApolloClient<TCacheShape>, config?: ContentGraphConfig)
    public constructor (token?: string, config?: ContentGraphConfig, apolloConfig?: Partial<ApolloClientOptions<TCacheShape>>)
    constructor(clientOrToken?: ApolloClient<TCacheShape> | string, config?: ContentGraphConfig, apolloConfig?: Partial<ApolloClientOptions<TCacheShape>>)
    {
        this._config = config ?? getContentGraphConfig()
        if (!validateContentGraphConfig(this._config))
            throw new Error("Invalid ContentGraph Configuration")

        if (typeof clientOrToken == 'string' || clientOrToken == undefined)
            this._cgClient = createClient(this._config, clientOrToken, apolloConfig)

        else if (typeof clientOrToken == 'object' && clientOrToken != null && typeof clientOrToken.query == 'function')
            this._cgClient = clientOrToken

        else
            throw new Error(`The first parameter "clientOrToken" must be either a valid token string or ApolloClient, you've provided a ${ typeof clientOrToken }`)
    }

    /**
     * Resolve the meta data for a component, if it has a meta-data method exposed.
     * 
     * @param factory       The component factory used to load the component
     * @param contentLink   The link to the component for which the meta-data should be retrieved
     * @param contentType   The content type of the component
     * @param locale        The locale to be used, in a ContentGraph locale format
     * @returns             A Promise for the metadata of the given content type & instance
     */
    public resolve(factory: ComponentFactory, contentLink: ContentLink, contentType: string[], locale: string): Promise<Metadata>
    {
        if (DEBUG)
            console.log("Resolving metadata for:", contentLink, contentType, locale)

        if (locale.includes("-"))
            throw new Error("Invalid character detected within the locale")

        const Component = factory.resolve(contentType)
        if (!Component)
            return Promise.resolve({})

        if (isOptimizelyNextPageWithMetaData(Component) && Component.getMetaData) 
            return Component.getMetaData(contentLink, locale, this._cgClient).then(meta => {
                if (DEBUG)
                    console.log("Resolved metadata to:", meta)
                return meta
            })

        return Promise.resolve({})
    }
}

export default MetaDataResolver