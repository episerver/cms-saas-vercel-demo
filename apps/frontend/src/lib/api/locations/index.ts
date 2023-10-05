import type * as Types from './types'
import { gql } from '@gql/index'
import { getServerClient } from '@/lib/client'
import { Utils } from '@remkoj/optimizely-dxp-react'
import 'server-only'

export type { LocationListItem, GetLocationsResult, GetLocationsOptions } from './types'

export const getLocations: Types.GetLocations = async (options, client) =>
{
    client = client ?? getServerClient()
    const { error, data } = await client.query({
        query: getLocationsList,
        variables: {
            locale: options.locale,
            parentId: options.parentId,
            services: options.service
        }
    })
    if (error)
        throw new Error("GraphQL Error", { cause: error })

    return { 
        data: (data.getLocationsList?.items ?? []).filter(Utils.isNotNullOrUndefined).map(x => {
            return {
                ...x,
                id: x.id?.guid || ""
            }
        }) as Types.LocationListItem[],
        facets: (data.getLocationsList?.facets ?? { continent: [], services: [] }) as Types.LocationItemFacets
    }
}

export default getLocations

const locationTopContent = gql(/*GraphQL*/`fragment LocationTopContent on LocationPage {
    isTopContent: LocationTopItem
}`)
const locationGeoLocation = gql(/*GraphQL*/`fragment LocationGeoLocation on LocationPage {
    lon: LocationLongitude
    lat: LocationLatitude
}`)

const getLocationsList = gql(/* GraphQL */`query getLocationsList($parentId:String!, $locale: [Locales], $withGeoLocation: Boolean! = false, $withTopContent: Boolean! = false, $orderBy: LocationPageOrderByInput, $continents: [String!], $services: [String!]) {
    getLocationsList: LocationPage (
        where: {
            ParentLink: { GuidValue: { eq: $parentId }}
        }
        locale: $locale
        orderBy: $orderBy
    ) {
        facets {
            continent: LocationContinent(orderType: VALUE, orderBy: ASC, filters: $continents) {
                name
                count
            },
            services: LocationServices(orderType: VALUE, orderBy: ASC, filters: $services) {
                name
                count
            }
        }
        items {
            id: ContentLink {
                id: Id
                guid:GuidValue
            }
            path: RelativePath
            slug: RouteSegment
            title: LocationTitle
            street1: LocationStreet1
            street2: LocationStreet2
            city: LocationCity
            postalCode: LocationPostalCode
            state: LocationState
            country: LocationCountry
            continent: LocationContinent
            services: LocationServices
            ...LocationGeoLocation @include(if:$withGeoLocation)
            ...LocationTopContent @include(if:$withTopContent)
        }
    }
}`)