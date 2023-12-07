import { type CmsComponent } from '@remkoj/optimizely-dxp-react'
import type * as GraphQL from '@gql/graphql'
import { CmsContentArea } from '@remkoj/optimizely-dxp-react-server'
import { gql } from '@gql/index'
import Image from 'next/image'
import SiteConfig from '@/site-config'
import getLocations from '@/lib/api/locations'
import dynamic from 'next/dynamic'
import getTexts from './locale'
import 'server-only'

const LocationsGrid = dynamic(() => import('./grid'), { ssr: true })

export const LocationListPage : CmsComponent<GraphQL.LocationListPageDataFragment> = async ({ data, client, inEditMode, contentLink }) => 
{
    const parentId = contentLink.guidValue ?? "00000000-0000-0000-0000-000000000000"
    const locale = contentLink.locale as GraphQL.Locales
    const texts = await getTexts(contentLink.locale ?? "en")
    const imgData = (data.LocationsImage ?? undefined) as GraphQL.ImageDataFragment
    const imgSrcPath = imgData?.data?.path ?? imgData?.url
    const imgSrcUrl = imgSrcPath ? new URL(imgSrcPath, SiteConfig.getEditDomain()) : undefined
    const locations = await getLocations({
        parentId,
        locale
    }, client)

    return <div className='location-list-page'>
        <CmsContentArea fieldName='LocationsTopArea' items={ data.LocationsTopArea ?? [] } client={ client } inEditMode={ inEditMode } />
        <div className='max-w-screen-2xl mx-auto'>
            <div className='intro border-b border-solid border-slate-800 w-full p-4 md:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 grid-rows-2-first-auto gap-4 md:gap-6 lg:gap-8'>
                <h1 className='text-3xl font-semibold h-fit' data-epi-edit={ inEditMode ? "LocationListTitle" : undefined}>{ data.LocationListTitle ?? ""}</h1>
                <div className='relative aspect-[5/1] lg:aspect-[16/9] lg:row-span-2' data-epi-edit={ inEditMode ? "LocationsImage" : undefined}>
                    { imgSrcUrl && <Image src={ imgSrcUrl.href} alt="Page image" fill className='object-cover' /> }
                </div>
                <div className='rich-text' data-epi-edit={ inEditMode ? "LocationsIntroduction" : undefined} dangerouslySetInnerHTML={{ __html: data.LocationsIntroduction ?? "" }}></div>
            </div>
            { (inEditMode || (data.LocationsMainContent ?? []).length > 0) && <CmsContentArea className="p-4 md:p-6 lg:p-8 pb-0 md:pb-0 lg:pb-0" fieldName='LocationsMainContent' items={ data.LocationsMainContent ?? [] } client={ client } inEditMode={ inEditMode } /> }
            <LocationsGrid initialData={ locations } parentId={ parentId } locale={ locale } texts={ texts } />
        </div>
    </div>
}
LocationListPage.displayName = "Locations lister"
export default LocationListPage

export const LocationListPageData = gql(/*GraphQL*/`fragment LocationListPageData on LocationListPage {
    LocationListTitle
    LocationsIntroduction
    LocationsImage {
        ...ImageDataSearch
    }
    LocationsTopArea {
        ...ContentAreaItemData
    }
    LocationsMainContent {
        ...ContentAreaItemData
    }
}`)