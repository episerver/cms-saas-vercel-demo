'use client'
import type * as GraphQL from '@gql/graphql'
import { useLocations, type GetLocationsOptions, type GetLocationsResult } from "@/lib/api/locations/client"
import { useMemo, type FunctionComponent } from "react"
import LocationItemList from "./item-list"
import Dropdown, { type DropdownItem } from '@/components/shared/dropdown'
import { useUrlState } from '@/lib/use-url-state'

export type LocationItemGridProps = {
    parentId: string
    locale: string
    initialData: GetLocationsResult
    texts: any
}

export const LocationItemGrid : FunctionComponent<LocationItemGridProps> = ({ initialData, parentId, locale, texts }) => 
{
    const [ currentService, setCurrentService ] = useUrlState<string>("service", "-all-", undefined,s=>s,s=>s)

    // Make sure we keep the same request object untill one of the fields actually changes
    const options = useMemo<GetLocationsOptions>(() => {
        return {
            parentId: parentId,
            locale: locale as GraphQL.Locales,
            service: currentService
        }
    }, [ parentId, locale, currentService ])

    // Get the locations to show on page
    const locations = useLocations(options, initialData)

    // Build options
    const services : DropdownItem[] = [{
        value: "-all-",
        label: texts.services.all
    }].concat(locations.facets.services.map(x => { return {
        value: x.name,
        badge: x.count,
        label: texts.services[x.name]
    }}))

    // Render
    const america_locations = locations.data.filter(x => x.continent == "NA")
    const europe_locations = locations.data.filter(x => x.continent == "EUR")
    const apac_locations = locations.data.filter(x => x.continent == "APAC")
    const me_locations = locations.data.filter(x => x.continent == "ME")
    return <div className='p-4 md:p-6 lg:p-8'>
        <div className='pb-4 md:pb-6 lg:pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8'>
            <Dropdown label={ texts.facets.services } value={ currentService || "-all-" } options={ services } onChange={ (newValue) => setCurrentService(newValue) }  />
        </div>
        <div className={`grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8${ locations.loading ? ' grayscale blur animate-pulse' : ''}`}>
            <LocationItemList title="North America" items={ america_locations } />
            <LocationItemList title="Europe" items={ europe_locations } />
            <LocationItemList title="Asia pacific" items={ apac_locations } />
            <LocationItemList title="Middle east" items={ me_locations } />
        </div>
    </div>
}

export default LocationItemGrid