import 'server-only'
import type * as GraphQL from '@gql/graphql'
import { gql } from '@gql/index'
import type { OptimizelyNextPage } from '@remkoj/optimizely-dxp-nextjs'
import { Utils } from '@remkoj/optimizely-dxp-react'
import CmsContentArea from '@remkoj/optimizely-dxp-react/rsc/cms-content-area'
import ClassMapper from '@/lib/displayMode'
import { Metadata } from 'next'
import React from 'react'

export const LandingPage : OptimizelyNextPage<GraphQL.LandingPageDataFragment> = ({ data }) => {
    const topContentArea : GraphQL.ContentAreaItemDataFragment[] = data.TopContentArea?.filter(Utils.isNotNullOrUndefined) ?? []
    const mainContentArea : GraphQL.ContentAreaItemDataFragment[] = data.MainContentArea?.filter(Utils.isNotNullOrUndefined) ?? []
    
    return <div className='landing-page'>
        <CmsContentArea fieldName='TopContentArea' items={ topContentArea }  classMapper={ ClassMapper } className="w-full" />
        <CmsContentArea fieldName='MainContentArea' items={ mainContentArea } classMapper={ ClassMapper } className="max-w-screen-2xl mx-auto"/>
    </div>
}

LandingPage.getDataFragment = () => ['LandingPageData', LandingPageData]
LandingPage.getMetaData = async (contentLink, locale, client) => {
    const variables = { ...contentLink, locale: locale as GraphQL.Locales }
    const result = ((await client.request(GetLandingPageMetaData, variables)).getLandingPageMetaData?.pages ?? [])[0] ?? undefined
    if (!result)
        return {}

    const title = result.head?.title || result.name || undefined
    const description = result.head?.description || undefined 
    const metadata : Metadata = {}

    if (title) {
        metadata.title = title
        metadata.openGraph = {
            ...metadata.openGraph,
            title: title
        }
    }
    if (description) {
        metadata.description = description
        metadata.openGraph = {
            ...metadata.openGraph,
            description: description
        }
    }
        
    return metadata
}

export default LandingPage

export const LandingPageData = gql(/* GraphQL */`fragment LandingPageData on LandingPage {
    TopContentArea {
        ...ContentAreaItemData
    }
    MainContentArea {
        ...ContentAreaItemData
    }
}`)

export const GetLandingPageMetaData = gql(/*GraphQL*/`query getLandingPageMetaData($id: Int, $workId: Int, $guidValue: String, $locale: [Locales!], $isCommonDraft: Boolean) {
    getLandingPageMetaData: LandingPage(
        where: {
            ContentLink: { 
                Id: { eq: $id }, 
                WorkId: { eq: $workId }, 
                GuidValue: { eq: $guidValue } 
            }
            IsCommonDraft: { eq: $isCommonDraft }
        }
        locale: $locale
    ) {
        count: total
        pages: items {
            name: Name
            head: LandingPageSeo {
                title: MetaTitle
                description: MetaDescription
                image: SharingImage {
                    url: Url
                    data: Expanded {
                        url: Url
                        path: RelativePath
                    }
                }
                type: GraphType
            }
        }
    }
}`)