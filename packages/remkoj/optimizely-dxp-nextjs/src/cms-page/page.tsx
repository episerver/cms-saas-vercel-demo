import 'server-only'
import type { Metadata, ResolvingMetadata } from 'next'
import React from 'react'
import deepmerge from 'deepmerge'
import { notFound } from 'next/navigation'
import { RouteResolver, type ClientFactory, type ChannelDefinition } from '@remkoj/optimizely-graph-client'
import { Utils, type ComponentFactory } from '@remkoj/optimizely-dxp-react'
import { CmsContent } from '@remkoj/optimizely-dxp-react-server'
import { MetaDataResolver } from '../metadata'
import { urlToPath, localeToGraphLocale } from './utils'
import getContentByPathBase, { type GetContentByPathMethod } from './data'
import { getServerClient } from '../client'

export type Params = {
    path: string[] | undefined,
    lang: string | undefined
}

export type Props = {
    params: Params
    searchParams: {}
}

export type GenerateMetadataProps<TParams extends {} = {}, TSearch extends {} = {}> = {
    params: Params
}

export type NextJsPage = {
    generateStaticParams: () => Promise<Params[]>
    generateMetadata: (props: Props, resolving: ResolvingMetadata) => Promise<Metadata>
    CmsPage: (props: Props) => Promise<JSX.Element>
}

export type CreatePageOptions = {
    defaultLocale: string
    getContentByPath: GetContentByPathMethod
    client: ClientFactory
}

const CreatePageOptionDefaults : CreatePageOptions = {
    defaultLocale: "en",
    getContentByPath: getContentByPathBase,
    client: getServerClient
}

export function createPage(
    factory: ComponentFactory,
    channel: ChannelDefinition,
    options?: Partial<CreatePageOptions>
) : NextJsPage {
    const { defaultLocale, getContentByPath, client: clientFactory } = { 
        ...CreatePageOptionDefaults, 
        ...{ defaultLocale: channel.defaultLocale }, 
        ...options 
    }
    const DEBUG = process.env.NODE_ENV == "development"

    const pageDefintion : NextJsPage = {
        generateStaticParams : async () =>
        {
            const client = clientFactory()
            const resolver = new RouteResolver(client)
            return (await resolver.getRoutes()).map(r => { 
                return {
                    lang: r.language,
                    path: urlToPath(r.url, r.language)
                }
            })
        },
        generateMetadata: async ( { params: { lang, path } }, resolving ) =>
        {
            // Read variables from request
            const client = clientFactory()
            const requestPath = (path?.length ?? 0) > 0 ?
                `/${ lang ?? "" }/${ path?.join("/") ?? "" }` :
                `/${ lang ?? "" }`
            const routeResolver = new RouteResolver(client)
            const metaResolver = new MetaDataResolver(client)

            // Resolve the route to a content link
            const route = await routeResolver.getContentInfoByPath(requestPath)
            if (!route)
                return Promise.resolve({})

            // Prepare metadata fetching
            const contentLink = routeResolver.routeToContentLink(route)
            const contentType = route.contentType
            const graphLocale = localeToGraphLocale(channel, route.language)

            // Fetch the metadata based upon the actual content type and resolve parent
            const [pageMetadata, baseMetadata] = await Promise.all([
                metaResolver.resolve(factory, contentLink, contentType, graphLocale), 
                resolving
            ])

            // Make sure merging of objects goes correctly
            for (const metaKey of (Object.getOwnPropertyNames(pageMetadata) as (keyof Metadata)[]))
            {
                if (typeof(pageMetadata[metaKey]) == "object" && pageMetadata[metaKey] != null && baseMetadata[metaKey] != undefined && baseMetadata[metaKey] != null) {
                    //@ts-expect-error Silence error due to failed introspection...
                    pageMetadata[metaKey] = deepmerge(baseMetadata[metaKey], pageMetadata[metaKey], { arrayMerge: (target, source) => [...source] })
                }
            }

            // Not sure, but needed somehow...
            if (typeof(baseMetadata.metadataBase) == "string" && (baseMetadata.metadataBase as string).length > 1) {
                pageMetadata.metadataBase = new URL(baseMetadata.metadataBase)
            }
            return pageMetadata
        },
        CmsPage: async ({  params }) =>
        {
            // Resolve the content based upon the route
            const client = clientFactory()
            const slug = params?.lang ?? defaultLocale.toLowerCase()
            const requestPath = (params?.path?.length ?? 0) > 0 ?
                `/${ slug }/${ params?.path?.join("/") ?? "" }` :
                `/${ slug }`
            
            const graphLocale = channel.slugToGraphLocale(slug)
            const response = await getContentByPath(client, { path: requestPath, locale: graphLocale })
            const info = (response.Content?.items ?? [])[0]

            if (!info) {
                if (DEBUG) {
                    console.error(`[CmsPage] Unable to load content for ${ requestPath }, data received: `, response)
                }
                return notFound()
            }

            // Extract the type & link
            const contentType = Utils.normalizeContentType(info.contentType)
            const contentLink = Utils.normalizeContentLinkWithLocale({ ...info.id, locale: info.locale?.name })
            if (!contentLink) {
                console.error("[CmsPage] Unable to infer the contentLink from the retrieved content, this should not have happened!")
                return notFound()
            }

            // Render the content link
            return <CmsContent contentType={ contentType } contentLink={ contentLink } client={ client } fragmentData={ info } factory={ factory } />
        }
    }
    return pageDefintion
}