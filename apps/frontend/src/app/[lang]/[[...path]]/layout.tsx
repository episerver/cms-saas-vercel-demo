import { type PropsWithChildren } from "react"
import { type Metadata, type ResolvingMetadata } from "next"
import type * as GraphQL from '@gql/graphql'
import { slugToLocale, getFallbackLocale, localeToContentGraphLocale } from "@/lib/i18n"
import { getServerClient } from "@/lib/client"
import { gql } from "@gql/gql"
import { Utils } from "@remkoj/optimizely-dxp-react"

export type CmsPageLayoutProps = {
    params: {
        lang: string
        path?: string[]
    }
}

/**
 * Make sure that there's a sane default for the title, canonical URL
 * and the language alternatives
 * 
 * @param       props   The layout properties
 * @returns     The metadata that must be merged into the defaults
 */
export async function generateMetadata({ params }: CmsPageLayoutProps, resolving: ResolvingMetadata) : Promise<Metadata> {
    const locale = slugToLocale(params?.lang ?? '', getFallbackLocale())
    const relativePath = `/${ locale }${ params.path ? '/' + params.path.join('/') : '' }`
    const optlyGraph = getServerClient()
    const variables = {
        path: relativePath,
        locale: localeToContentGraphLocale(locale) as GraphQL.Locales
    }
    const metadata = ((await optlyGraph.query({
        query: GetGenericMetaData,
        variables
    })).data?.getGenericMetaData?.items ?? [])[0]
    if (!metadata)
        return {}
    
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
    const alternates = (metadata?.alternatives ?? []).filter(Utils.isNotNullOrUndefined).filter(x => x.locale != locale) as {locale:string, href: string}[]
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
}

export default function CmsPageLayout({ params, children }: PropsWithChildren<CmsPageLayoutProps>)
{
    return children
}

const GetGenericMetaData = gql(/*GraphQL*/`query getGenericMetaData($path: String!, $locale: [Locales], $siteId: String) {
    getGenericMetaData: Content (
        where: { RelativePath: { eq: $path }, SiteId: { eq: $siteId } }
        locale: $locale
    ) {
        items {
            name: Name,
            alternatives: ExistingLanguages {
                locale: Name
                href: Link
            }
            canonical: Url
        }
    }
}`)