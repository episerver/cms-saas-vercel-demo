import React, { type FunctionComponent, type ComponentProps } from 'react'
import type { ContentSearchResultItems } from '@/api-types'
import { MagnifyingGlassIcon, XMarkIcon, GlobeEuropeAfricaIcon, CheckIcon } from '@heroicons/react/24/outline'
import { LinkButton } from '@/components/shared'

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
                return <div className="search-result-item w-full hover:bg-slate-100 p-2" key={`search-result-id-${ ++resultId }`}>
                    <div className="search-result-title font-semibold">{ result.name ?? ""}</div>
                    <div className="search-result-text">No description yet...</div>
                    <div className="search-result-published float-right">Published: { result.published ? (new Date(Date.parse(result.published))).toLocaleDateString() : "never"}</div>
                    {result.url && <LinkButton href={ result.url } onClick={ onClick }>Visit { result.name ?? "page"}</LinkButton>}
                </div>
            })}
        </div>
        <div className='results-footer mt-4'>Showing { results.length } of { total } results</div>
    </div>
}

export default SearchResults