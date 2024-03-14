import type { IOptiGraphClient } from '@remkoj/optimizely-graph-client'
import type * as GraphQL from '@gql/graphql'
export { DocumentNode } from '@gql/graphql'
export type LocaleFilter = GraphQL.Locales | GraphQL.Locales[] | null

export type GetLocations = (options: GetLocationsOptions, client?: IOptiGraphClient) => Promise<GetLocationsResult>
export type GetLocationsOptions = {
    parentId: string
    locale: LocaleFilter
    withGeoLocation?: boolean
    withIsTopLocation?: boolean
    service?: string
}
export type GetLocationsResult = {
    data: LocactionListItem[]
    facets: LocationItemFacets
}

export type LocationItemFacets = {
    continent: LocationItemStringFacet[]
    services: LocationItemStringFacet[]
}

type LocationItemStringFacet = {
    name: string
    count: number
}

export type LocationListItem = {
    id: string
    path: string
    slug: string
    title: string
    street1: string
    street2: string
    city: string
    postalCode: string
    state: string
    country: string
    continent: 'NA' | 'EUR' | 'APAC' | 'MEA'
    services: string[]
}