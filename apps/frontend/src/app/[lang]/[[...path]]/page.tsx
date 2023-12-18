import 'server-only'
import { RouteResolver, Utils } from '@remkoj/optimizely-dxp-react'
import { CmsContent } from '@remkoj/optimizely-dxp-react-server'
import { MetaDataResolver } from '@remkoj/optimizely-dxp-nextjs'
import { notFound } from 'next/navigation'
import getFactory from '@/components/factory'
import type { Metadata, ResolvingMetadata } from 'next'
import { localeToContentGraphLocale } from '@/lib/i18n'
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { getContentByPath } from '@gql/functions'
import { type IContentDataFragment } from '@gql/graphql'
import { getServerClient } from '@/lib/client'
import siteConfig from '@/site-config'
import deepmerge from 'deepmerge'


const defaultLocale = siteConfig.defaultLocale

const DEBUG = process.env.NODE_ENV == "development"
if (DEBUG) {  // Adds messages only in a dev environment
    loadDevMessages()
    loadErrorMessages()
}

type OptimizelyCmsPageParams = {
    path: string[] | undefined,
    lang: string | undefined
}

type OptimizelyCmsPageProps = {
    params: OptimizelyCmsPageParams
}

// Extract the path as string array from a given URL
function urlToPath(baseUrl: URL, language: string) : string[] {
    let slugs : string[] = baseUrl.pathname.split('/').filter(s => s)
    if (slugs[0] == language)
        slugs.shift()
    return slugs
}

export async function generateMetadata( props: { params : OptimizelyCmsPageParams, searchParams: {}}, resolving: ResolvingMetadata ): Promise<Metadata> 
{
    // Read variables from request
    const client = getServerClient()
    const { lang, path } = props.params
    const requestPath = (path?.length ?? 0) > 0 ?
        `/${ lang ?? "" }/${ path?.join("/") ?? "" }` :
        `/${ lang ?? "" }`
    const routeResolver = new RouteResolver(client)
    const metaResolver = new MetaDataResolver(client)
    const factory = getFactory()

    // Resolve the route to a content link
    const route = await routeResolver.getContentInfoByPath(requestPath)
    if (!route)
        return Promise.resolve({})

    // Prepare metadata fetching
    const contentLink = routeResolver.routeToContentLink(route)
    const contentType = route.contentType
    const graphLocale = localeToContentGraphLocale(route.language)

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
}

export async function generateStaticParams() : Promise<OptimizelyCmsPageParams[]>
{
    const client = getServerClient()
    const resolver = new RouteResolver(client)
    const routes = (await resolver.getRoutes()).map(r => { return {
        lang: r.language,
        path: urlToPath(r.url, r.language)
    }})
    return routes
}

export const dynamic = 'force-static'       // Make sure we cache pages
export const dynamicParams = true           // Allow new pages to be resolved without rebuilding the site
export const revalidate = false             // Keep the cache untill manually revalidated using the Webhook
export const fetchCache = 'default-cache'   // Cache fetch results by default
//export const runtime = 'edge'               //Uncomment to move to React 18 Streaming, keep commented to use SSG

export default async function OptimizelyCmsPage({  params }: OptimizelyCmsPageProps) : Promise<JSX.Element>
{
    // Prepare context
    const client = getServerClient()
    const factory = getFactory()

    // Resolve the content based upon the route
    const slug = params?.lang ?? defaultLocale
    const requestPath = (params?.path?.length ?? 0) > 0 ?
        `/${ slug }/${ params?.path?.join("/") ?? "" }` :
        `/${ slug }`
    
    const response = await getContentByPath(client, { path: requestPath })
    const info = (response.Content?.items ?? [])[0]

    if (!info) {
        if (DEBUG) {
            console.error(`Unable to load content for ${ requestPath }, data received: `, response)
        }
        return notFound()
    }

    // Extract the type & link
    const contentType = Utils.normalizeContentType((info as IContentDataFragment).contentType)
    const contentLink = Utils.normalizeContentLinkWithLocale({ ...(info as IContentDataFragment).id, locale: (info as IContentDataFragment).locale?.name })
    if (!contentLink) {
        console.error("Unable to infer the contentLink from the retrieved content, this should not have happened!")
        return notFound()
    }

    // Render the content link
    return <CmsContent contentType={ contentType } contentLink={ contentLink } client={ client } fragmentData={ info } factory={ factory } />
}
