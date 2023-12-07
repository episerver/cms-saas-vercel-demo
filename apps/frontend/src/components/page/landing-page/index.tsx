import 'server-only'
import type * as GraphQL from '@gql/graphql'
import { gql } from '@gql/index'
import { type LandingPageDataFragment, type ContentAreaItemDataFragment, Locales } from '@gql/graphql'
import type { OptimizelyNextPage } from '@remkoj/optimizely-dxp-nextjs'
import { Utils } from '@remkoj/optimizely-dxp-react'
import { CmsContentArea } from '@remkoj/optimizely-dxp-react-server'
import ClassMapper from '@/lib/displayMode'
import { Metadata } from 'next'

export const LandingPage : OptimizelyNextPage<LandingPageDataFragment> = ({ contentLink, data, children, client, inEditMode }) => {
    const topContentArea : ContentAreaItemDataFragment[] = data.TopContentArea?.filter(Utils.isNotNullOrUndefined) ?? []
    const mainContentArea : ContentAreaItemDataFragment[] = data.MainContentArea?.filter(Utils.isNotNullOrUndefined) ?? []
    
    return <div className='landing-page'>
        <CmsContentArea inEditMode={ inEditMode } fieldName='TopContentArea' items={ topContentArea }  locale={ contentLink.locale } classMapper={ ClassMapper } client={ client } className="w-full"/>
        <CmsContentArea inEditMode={ inEditMode } fieldName='MainContentArea' items={ mainContentArea } locale={ contentLink.locale } classMapper={ ClassMapper } client={ client } className="max-w-screen-2xl mx-auto"/>
    </div>
}

LandingPage.getDataFragment = () => ['LandingPageData', LandingPageData]
LandingPage.getMetaData = async (contentLink, locale, client) => {
    const variables = { ...contentLink, locale: locale as GraphQL.Locales }
    const result = ((await client.query({
        query: GetLandingPageMetaData,
        variables
    })).data?.getLandingPageMetaData?.pages ?? [])[0] ?? undefined

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