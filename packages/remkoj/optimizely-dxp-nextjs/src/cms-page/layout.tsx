import { type PropsWithChildren, type ReactNode } from "react"
import { type Metadata, type ResolvingMetadata } from "next"
import type { ChannelDefinition, ClientFactory } from "@remkoj/optimizely-graph-client"
import { Utils } from "@remkoj/optimizely-dxp-react"
import type { Props } from './page'
import { getMetaDataByPath as getMetaDataByPathBase, type GetMetaDataByPathMethod } from './data'
import { slugToLocale, slugToGraphLocale } from "./utils"
import { getServerClient } from "../client"

export type CmsPageLayout = {
    generateMetadata: (props: Omit<Props, 'searchParams'>, resolving: ResolvingMetadata) => Promise<Metadata>
    PageLayout: (props: PropsWithChildren<Omit<Props, 'searchParams'>>) => JSX.Element | ReactNode
}

export type CreateLayoutOptions = {
    defaultLocale: string
    getMetaDataByPath: GetMetaDataByPathMethod
    client: ClientFactory
}

const defaultCreateLayoutOptions : CreateLayoutOptions = {
    defaultLocale: "en",
    getMetaDataByPath: getMetaDataByPathBase,
    client: getServerClient
}

export function createLayout(
    channel: ChannelDefinition,
    options?: Partial<CreateLayoutOptions>
) : CmsPageLayout {
    const { defaultLocale, getMetaDataByPath, client: clientFactory } : CreateLayoutOptions = {
        ...defaultCreateLayoutOptions,
        ...{ defaultLocale: channel.defaultLocale },
        ...options
    }

    const DEBUG = process.env.DXP_DEBUG == '1'

    const pageLayoutDefinition : CmsPageLayout = {

        /**
         * Make sure that there's a sane default for the title, canonical URL
         * and the language alternatives
         * 
         * @param       props   The layout properties
         * @returns     The metadata that must be merged into the defaults
         */
        generateMetadata: async ({ params }, resolving) => {
            const locale = slugToLocale(channel, params?.lang ?? '', defaultLocale)
            const relativePath = `/${ params.lang }${ params.path ? '/' + params.path.join('/') : '' }`
            
            if (DEBUG)
                console.log(`[CmsPageLayout] Generating metadata for: ${ relativePath }`)

            const variables = {
                path: relativePath,
                locale: slugToGraphLocale(channel, params.lang ?? '', defaultLocale)
            }
            const client = clientFactory()
            const response = await getMetaDataByPath(client, variables).catch(e => {
                console.error(`[CmsPageLayout] Metadata error:`, e)
                return undefined
            })
            const metadata = (response?.getGenericMetaData?.items ?? [])[0]
            if (!metadata) {
                if (DEBUG)
                    console.log(`[CmsPageLayout] Unable to locate metadata for: ${ relativePath }`)
                return {}
            }
            
            const base = await resolving
            const title = base?.title?.template ? { 
                template: base?.title?.template,
                default: metadata.name as string
            } : metadata.name as string;
            let pageMetadata : Metadata = {
                title,
                alternates: {
                    canonical: metadata.canonical as string,
                    languages: {}
                },
                openGraph: {
                    ...base.openGraph,
                    title,
                    url: metadata.canonical as string,
                    alternateLocale: []
                }
            }
            
            // Add alternative URLs
            const alternates = (metadata?.alternatives || []).filter(Utils.isNotNullOrUndefined).filter(x => x.locale != locale) as {locale:string, href: string}[]
            alternates.forEach(alt => {
                if (pageMetadata.openGraph && Array.isArray(pageMetadata.openGraph.alternateLocale)) {
                    pageMetadata.openGraph.alternateLocale.push(alt.locale)
                }
                if (pageMetadata.alternates && pageMetadata.alternates.languages) {
                    //@ts-expect-error We need the locale to be dynamic, based upon the locales provided by the CMS
                    pageMetadata.alternates.languages[alt.locale] = alt.href
                }
            })

            return pageMetadata
        },
        
        PageLayout: ({ children }) => children
    }
    return pageLayoutDefinition
}

export default createLayout