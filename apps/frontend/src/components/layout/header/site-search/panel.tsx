'use client'
import React, { useRef, useState, useCallback, useEffect, type FunctionComponent } from 'react'
import { GlobeEuropeAfricaIcon } from '@heroicons/react/24/outline'
import { useODP } from '@/components/integrations/opti-data-platform'
import type { SiteSearchResult, SiteSearchResponse } from '@/api-types'

// Client side imported components
import dynamic from 'next/dynamic'
const Facets = dynamic(() => import('./facets'), { ssr: false })
const SearchResults = dynamic(() => import('./results-list'), { ssr: false })

type CurrentFilters = {
    [facet: string]: (string | number)[]
}

export type SearchPanelProps = {}

const SEARCH_ENDPOINT = '/api/content/search'
const SEARCH_TERMS_ENDPOINT = '/api/content/search/terms'

export const SearchPanel : FunctionComponent<SearchPanelProps> = props =>
{
    // React Hooks
    const [ searchTerm, setSearchTerm ] = useState<string>("")
    const [ recentSearches, setRecentSearches ] = useState<string[]>([])
    const [ searchResults, setSearchResults ] = useState<SiteSearchResult | undefined>(undefined)
    const [ searchFilters, setSearchFilters ] = useState<CurrentFilters>({})
    const searchBox = useRef<HTMLInputElement | null>(null)
    const zaius = useODP()

    // Search tracking function
    const track = useCallback((searchTerm: string) => {
        if (zaius)
            zaius.event("navigation", { 
                action: "search", 
                search_term: searchTerm
            });
    }, [ zaius ])

    // Handler for keypresses, to search on type and accept the "Enter" key as trigger for search
    let timeoutId : NodeJS.Timeout | undefined
    function handleKeyUp(e: any) 
    {
        if (timeoutId) clearTimeout(timeoutId);
        if (e.key == "Enter")
            setSearchTerm(searchBox.current?.value ?? '')
        else
            timeoutId = setTimeout(() => setSearchTerm(searchBox.current?.value ?? ''), 1500);
    }

    // Handle adding a facet filter
    function addFacet(facet: string, value: string|number)
    {
        const newFilters = { ...searchFilters }
        if (!newFilters[facet]) newFilters[facet] = []
        if (!newFilters[facet].includes(value)) {
            newFilters[facet].push(value)
            setSearchFilters(newFilters)
        }
    }

    // Handle removing a facet filter
    function removeFacet(facet: string, value: string|number)
    {
        const newFilters = { ...searchFilters }
        if (!newFilters[facet]) newFilters[facet] = []
        if (newFilters[facet].includes(value)) {
            newFilters[facet] = newFilters[facet].filter(val => val != value)
            setSearchFilters(newFilters)
        }
    }

    // Handle actual search
    useEffect(() => {
        if (!searchTerm)
            return

        const searchParams = new URLSearchParams()
        searchParams.set("term", searchTerm)
        searchParams.set("locales",(searchFilters['locales'] ?? []).join(','))
        searchParams.set("types",(searchFilters['types'] ?? []).join(','))

        const abort = new AbortController()
        const fetchUrl = SEARCH_ENDPOINT + "?" + searchParams.toString()
        fetch(fetchUrl, {
            signal: abort.signal
        }).then(response => response.json()).then((searchResult: SiteSearchResponse) => {
            if (isResult(searchResult)) {
                track(searchTerm)
                setSearchResults(searchResult)
            } else
                throw new Error("Error received")
        }).catch(() => {
            //setSearchStatus(SearchStatus.Error)
        })

        return () => {
            abort.abort("Search term or filters changed")
        }

    }, [searchTerm, searchFilters, track])

    // Handle last used terms
    useEffect(() => {
        const abort = new AbortController()
        fetch(SEARCH_TERMS_ENDPOINT, {
            signal: abort.signal
        }).then(r => r.json()).then((terms: string[]) => {
            if (searchTerm) terms.unshift(searchTerm)
            terms = terms.filter((v,i,a) => a.indexOf(v) == i).slice(0,5)
            setRecentSearches(terms)
        })
        return () => {
            abort.abort("The search term changed")
        }
    }, [ searchTerm ])

    return <>
        <div className="search-field container col-span-8">
            <div className='search-box block flex flex-nowrap w-full border-solid border border-slate-400 rounded-lg'>
                <input ref={ searchBox } type="text" className='grow rounded-l-lg border-none text-slate-900' defaultValue={ searchTerm } onKeyUp={(e) => handleKeyUp(e)} />
                <button className='px-4 text-slate-900 bg-slate-200 border-none rounded-r-lg' onClick={ () => { setSearchTerm(searchBox.current?.value ?? "") } }>Search</button>
            </div>
            { recentSearches && <div className='w-full flex flex-row justify-start gap-2 md:gap-3 lg:gap-4 text-sm'><div className='py-2 font-bold' title="Powered by Optimizely Data Platform">Recent queries:</div>{ recentSearches.map(rq => 
                <div className='py-2 cursor-pointer' key={"recent-query-"+rq} onClick={ () => setSearchTerm(rq) }>{rq}</div>
            )}</div> }
        </div>
        { (searchTerm != '' && searchTerm == (searchResults?.query ?? '') ) ? <>
            <div className="font-bold text-lg col-span-8">Searched for &quot;<span>{ searchResults?.query ?? "" }</span>&quot;{ searchResults?.isPersonalized && <>&nbsp;showing personalized results</>}</div>
            <Facets className='search-facets col-span-3 md:col-span-2 max-h-96' facets={ searchResults?.facets ?? [] } activeFacets={ searchResults?.filters ?? []} onAddFacet={ (f,v)=>addFacet(f,v) } onRemoveFacet={ (f,v)=>removeFacet(f,v) } />
            <SearchResults className='results-list overflow-auto touch-pan-y col-span-5 md:col-span-6 max-h-96' results={ searchResults?.items ?? [] } total={ searchResults?.total ?? 0 } />
        </> : searchTerm != '' ? <>
            <div className="col-span-8">
                <div className="m-8 p-2 rounded-md drop-shadow-md bg-amber-100 border border-amber-700 text-amber-900 text-xl font-bold">
                    <GlobeEuropeAfricaIcon className='inline-block h-8 w-8 animate-spin' /> { searchTerm ? "Awaiting results" : "Start by entering a search term or selecting one of your previous searches"}
                </div>
            </div>
        </> : <></> }
    </>
}

export default SearchPanel

function isResult(toTest: SiteSearchResponse) : toTest is SiteSearchResult {
    return typeof((toTest as SiteSearchResult).query) == 'string' && (toTest as SiteSearchResult).query.length > 0
}