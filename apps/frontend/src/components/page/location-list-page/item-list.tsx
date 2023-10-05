import { type FunctionComponent } from "react"
import type { LocationListItem } from "@/lib/api/locations"
import Link from 'next/link'

export type LocationItemListProps = {
    title: string
    items: LocationListItem[]
}

export const LocationItemList : FunctionComponent<LocationItemListProps> = props => 
{
    return <div className="location-item-list">
        <div className='font-semibold text-xl'>{ props.title }</div>
        <ul className='flex flex-col gap-4 md:gap-6 lg:gap-8 pt-4 md:pt-6 lg:pt-8'>
            { props.items.map(location => <li key={ location.id }><Link href={ location.path } className='inline-block w-full p-2 rounded-lg border border-solid border-white hover:border-slate-300 hover:shadow-lg hover:bg-gradient-to-br hover:from-slate-100 hover:to-white'>
                <div className='text-lg pb-2'>{ location.title }</div>
                <div className=''>{ location.street1 }</div>
                {location.street2 && <div className=''>{ location.street2 }</div>}
                <div className=''>{ location.city }{ location.state ? ", " + location.state : ""} { location.postalCode }</div>
                <div className='text-sm'>{ location.country }</div></Link>
            </li>)}
        </ul>
    </div>
}

export default LocationItemList