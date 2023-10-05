import React, { FunctionComponent } from 'react'
import type { ContentSearchResultFacets, ContentSearchResultFilters } from '@/api-types'
import { MagnifyingGlassIcon, XMarkIcon, GlobeEuropeAfricaIcon, CheckIcon } from '@heroicons/react/24/outline'

export type SearchFacetsProps = {
    className?: string
    facets: ContentSearchResultFacets
    activeFacets: ContentSearchResultFilters
    onAddFacet?: (field: string, value: string|number) => void
    onRemoveFacet?: (field: string, value: string|number) => void
}

const facetNames : {[key: string]: string}= {
    locales: "Language",
    types: "Content type"
}
const typeNames : {[key: string]: {[key: string]: string}} = {
    types: {
        ArticlePage: "Article",
        LandingPage: "General page"
    },
    locales: {
        en: "English",
        nl: "Nederlands",
        "nl-be": "Nederlands (België)"
    }
}

export const SearchFacets : FunctionComponent<SearchFacetsProps> = ({ className, facets, activeFacets, onAddFacet, onRemoveFacet }) =>
{
    return <div className={ className }>
        <span className='font-semibold text-lg'>Filter by</span>
        <ul className='m-0 p-0'>
            { facets.map(facet => {
                return <li key={ "search-facet-"+facet.field } className="mt-6">
                    <span className='font-semibold'>{ facetNames[facet.field] ?? 'Unnamed facet' }</span>
                    <ul className='m-0 p-0'>
                        { facet.options.map(option => {
                            const isActive = activeFacets.findIndex(x => x.field == facet.field && x.value.includes(option.value)) >= 0
                            return <li 
                                    key={ "search-facet-"+facet.field+"-"+option.value } 
                                    className="flex justify-start cursor-pointer hover:bg-slate-200 p-2 mt-1"
                                    onClick={ () => { isActive ? onRemoveFacet && onRemoveFacet(facet.field, option.value) : onAddFacet && onAddFacet(facet.field, option.value) }}
                            >
                                <span className="block w-4 h-4 mr-2 my-1 border rounded bg-white">
                                    { isActive && <CheckIcon className='w-4 h-4 text-green-800' /> }
                                </span>
                                <span className='block mr-auto'>{ typeNames[facet.field??""][option.value??""] ?? option.value ?? "Unnamed" }</span>
                                <span className='block'>{ option.count ?? "0"}</span>
                            </li>
                        })}
                    </ul>
                </li>
            })}
        </ul>
    </div>
}

export default SearchFacets