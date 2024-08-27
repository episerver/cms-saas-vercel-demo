'use client'
import { type FunctionComponent } from "react"
import { type ContentSearchResultItem } from "@/lib/api/search"
import { linkDataToHref } from "@remkoj/optimizely-cms-nextjs/components"
import Link from 'next/link'
import dynamic from "next/dynamic"

//Components only used within the result item
const LocalTime = dynamic(() => import('@/components/shared/local-time'), { ssr: false })
const ItemText = dynamic(() => import('@/components/shared/text'), { ssr: false })

export type SearchResultItemProps = {
    item: ContentSearchResultItem
}

export const SearchResultItem : FunctionComponent<SearchResultItemProps> = ({ item }) => {
    return <Link href={ item.url ? linkDataToHref(item.url) : '#' } className='block py-[20px] flex flex-col gap-4 outline-none focus:outline focus:outline-dashed focus:outline-offset-4 focus:outline-2 focus:outline-azure focus:rounded-xl focus:dark:outline-verdansk'>
        <div className="text-azure dark:text-verdansk text-[22px] font-bold">{ item.title }</div>
        { item.author && <div className="flex flex-row justify-between">
            <div className="italic">Author: { item.author }</div>
            <div>Published: <LocalTime date={ item.published } mode="Date" /></div>
        </div>}
        { item.abstract && <ItemText text={ item.abstract } /> }
    </Link>
}

export default SearchResultItem