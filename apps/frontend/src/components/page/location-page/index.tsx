import type React from 'react'
import { Utils, type CmsComponent } from "@remkoj/optimizely-dxp-react";
import type * as GraphQL from '@gql/graphql'
import { gql } from '@gql/index'

import { MapPinIcon, ArrowLeftIcon, PhoneIcon, BookmarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import Image from 'next/image'

import getTexts from '../location-list-page/locale'

import './location-page.css'

export const LocationPage : CmsComponent<GraphQL.LocationPageDataFragment> = async ({ data, inEditMode, contentLink }) =>
{
    const texts = await getTexts(contentLink.locale ?? 'en')
    const title = data.LocationTitle ?? data.Name ?? "Location"
    const backUrl = new URL(data.ParentLink?.Expanded?.RelativePath ?? data.ParentLink?.Url ?? "/", "http://localhost").pathname
    const phoneLink = data.LocationPhone ? `tel:${ data.LocationPhone }` : '#'
    const imgData = (data.LocationImage ?? undefined) as GraphQL.ImageDataSearchFragment | undefined
    const imageSrc = imgData?.url
    const imageAlt = imgData?.data?.alt ?? `Image of ${ title }`
    const services = (data.LocationServices || []).filter(Utils.isNonEmptyString).map(s => {
        const label : string = (texts && texts.services) ? texts.services[s] || s : s
        return {
            value: s,
            label
        }
    })

    return <div className="max-w-screen-2xl mx-auto">
        <div className="p-4 md:p-6 lg:p-8 lg:text-lg grid grid-cols-1 lg:grid-cols-2 grid-rows-2-first-auto gap-4 md:gap-6 lg:gap-8">
            <div className="page-title">
                <h1 className="font-bold text-3xl" { ...getOptlyEditProps("LocationTitle", inEditMode)}>{ title }</h1>
                <Link href={ phoneLink } className="block text-md p-2 my-1" { ...getOptlyEditProps("LocationPhone", inEditMode)}><PhoneIcon className='inline-block w-4 h-4' />&nbsp;{ data.LocationPhone || texts?.texts?.noPhone || "No direct phone available" }</Link>

                <div className='back-link'>
                    <Link href={ backUrl } hrefLang={ contentLink.locale } className='inline-block p-2 text-slate-500 lg:text-md border-transparent border-solid border hover:border-slate-500 cursor-pointer rounded-lg'><ArrowLeftIcon className='inline-block h-4 w-4' />&nbsp;{ texts?.texts?.backToList || "Back to list"}</Link>
                </div>
            </div>
            <div className='location-image relative w-full h-full aspect-[16/9] lg:row-span-2 lg:aspect-auto' {...getOptlyEditProps("LocationImage", inEditMode)}>
                { imageSrc && <Image src={ imageSrc } alt={ imageAlt } sizes='100vw' fill className='object-cover'/> }
            </div>
            <div className="address-card">
                <div className="font-semibold text-lg lg:text-xl"><MapPinIcon className='inline-block w-6 h-6'/> {texts?.texts?.address || "Address"}</div>
                <div className="" {...getOptlyEditProps("LocationStreet1", inEditMode)}>{ data.LocationStreet1 ?? "" }</div>
                <div className="" {...getOptlyEditProps("LocationStreet2", inEditMode)}>{ data.LocationStreet2 ?? "" }</div>
                <div className=""><span {...getOptlyEditProps("LocationCity", inEditMode)}>{ data.LocationCity ?? "" }</span>,&nbsp;<span {...getOptlyEditProps("LocationState")}>{ data.LocationState ?? ""}</span>&nbsp;&nbsp;<span {...getOptlyEditProps("LocationPostalCode", inEditMode)}>{ data.LocationPostalCode ?? "" }</span></div>
                <div className="text-sm" {...getOptlyEditProps("LocationCountry", inEditMode)}>{ data.LocationCountry ?? "" }</div>
            </div>
        </div>
        <div className='location-details p-4 md:p-6 lg:p-8'>
            <div className='location-services w-full flex flex-row justify-start pb-4 gap-4' {...getOptlyEditProps("LocationServices", inEditMode)}>
                <div className='location-services-title font-semibold'>{ texts?.texts?.availableServices || "Available services"}:</div>
                { services.map(service => <div key={`service-${ service.value }`}><BookmarkIcon className='inline-block w-4 h-4 mr-2'/>{ service.label }</div>)}
            </div>
            <div className='location-text rich-text' {...getOptlyEditProps("LocationText", inEditMode)} dangerouslySetInnerHTML={{ __html: data.LocationText ?? "" }} ></div>
        </div>
    </div>
}
LocationPage.getDataFragment = () => [ "LocationPageData", LocationPageData ]
LocationPage.displayName = "Location page"

export default LocationPage

type OptlyEditProps = {
    "data-epi-edit"?: string
}
function getOptlyEditProps(fieldName: string, inEditMode?: boolean) : OptlyEditProps
{
    if (!inEditMode)
        return {}

    return {
        "data-epi-edit": fieldName
    }
}

const LocationPageData = gql(/*GraphQL*/`fragment LocationPageData on LocationPage {
    ParentLink {
        Url
        Expanded {
            RelativePath
        }
    }
    Name
    LocationTitle
    LocationServices
    LocationStreet1
    LocationStreet2
    LocationPostalCode
    LocationCity
    LocationState
    LocationCountry
    LocationContinent
    LocationPhone
    LocationLatitude
    LocationLongitude
    LocationText
    LocationImage {
        ...ImageDataSearch
    }
}`)