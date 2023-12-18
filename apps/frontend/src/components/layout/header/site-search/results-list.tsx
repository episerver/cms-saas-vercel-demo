import React, { type FunctionComponent, type ComponentProps } from 'react'
import type { ContentSearchResultItems } from '@/api-types'
import { MagnifyingGlassIcon, XMarkIcon, GlobeEuropeAfricaIcon, CheckIcon } from '@heroicons/react/24/outline'
import { LinkButton } from '@/components/shared'
import { Popover } from '@headlessui/react'
import Link from 'next/link'

export type SearchResultsProps = {
    className ?: string
    results: ContentSearchResultItems
    total: number
    onClick?: ComponentProps<typeof LinkButton>['onClick']
}

export const SearchResults : FunctionComponent<SearchResultsProps> = ({ className, results, total, onClick }) => {
    let resultId : number = 0
    return <div className={ className }>
        <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
            { results.map(result => {
                return <Popover.Button as={ Link } className="search-result-item w-full hover:bg-slate-100 rounded-md p-2" key={`search-result-id-${ ++resultId }`} href={ result.url } onClick={ onClick }>
                    <div className="search-result-title font-semibold">{ result.name ?? "Unnamed result"}
                    </div>
                    <div className="search-result-text py-1">No description yet...</div>
                    <div className="search-result-published float-right">Published: { result.published ? (new Date(Date.parse(result.published))).toLocaleDateString() : "never"}</div>
                </Popover.Button>
            })}
        </div>
        <div className='results-footer mt-4'>Showing { results.length } of { total } results</div>
    </div>
}

export default SearchResults