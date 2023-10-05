'use client'
import React, { useState, useEffect, useRef, useCallback, type FunctionComponent } from 'react'
import { Dialog } from "@headlessui/react"
import { MagnifyingGlassIcon, XMarkIcon, GlobeEuropeAfricaIcon } from '@heroicons/react/24/outline'
import { useODP } from '@/components/integrations/opti-data-platform'
import { SiteSearchResult, SiteSearchResponse } from '@/api-types'
import dynamic from 'next/dynamic'
const Facets = dynamic(() => import('./facets'), { ssr: false })
const SearchResults = dynamic(() => import('./results-list'), { ssr: false })

const SEARCH_ENDPOINT = '/api/content/search'

export type SiteSearchProps = {
    buttonClassName: string
    brandName: string
}

const enum SearchStatus {
    NoTerm,
    Searching,
    NoResults,
    Results,
    Error
}

type CurrentFilters = {
    [facet: string]: (string | number)[]
}

export const SiteSearch: FunctionComponent<SiteSearchProps> = ({ buttonClassName, brandName }) =>
{
    const [ searchOpen, setSearchOpen ] = useState<boolean>(false)
    const [ searchStatus, setSearchStatus ] = useState<SearchStatus>(SearchStatus.NoTerm)
    const [ searchTerm, setSearchTerm ] = useState<string>("")
    const [ searchResults, setSearchResults ] = useState<SiteSearchResult | undefined>(undefined)
    const [ searchFilters, setSearchFilters ] = useState<CurrentFilters>({})

    const zaius = useODP()

    const searchBox = useRef<HTMLInputElement | null>(null)

    // Track events into ODP & WebEx
    const track = useCallback((searchTerm: string) => {
        if (zaius)
            zaius.event("navigation", { 
                action: "search", 
                search_term: searchTerm
            });
    }, [ zaius ])

    function closeSearch() 
    {
        setSearchTerm("")
        setSearchOpen(false)
        setSearchFilters({})
    }

    function addFacet(facet: string, value: string|number)
    {
        const newFilters = { ...searchFilters }
        if (!newFilters[facet]) newFilters[facet] = []
        if (!newFilters[facet].includes(value)) {
            newFilters[facet].push(value)
            setSearchFilters(newFilters)
        }
    }

    function removeFacet(facet: string, value: string|number)
    {
        const newFilters = { ...searchFilters }
        if (!newFilters[facet]) newFilters[facet] = []
        if (newFilters[facet].includes(value)) {
            newFilters[facet] = newFilters[facet].filter(val => val != value)
            setSearchFilters(newFilters)
        }
    }

    // Actual searching logic
    useEffect(() => {
        if (!searchTerm) {
            setSearchResults(undefined)
            setSearchStatus(SearchStatus.NoTerm)
            return 
        }
        setSearchStatus(SearchStatus.Searching)
        track(searchTerm)
        
        const searchParams = new URLSearchParams()
        searchParams.set("term", searchTerm)
        searchParams.set("locales",(searchFilters['locales'] ?? []).join(','))
        searchParams.set("types",(searchFilters['types'] ?? []).join(','))

        const abort = new AbortController()
        const fetchUrl = SEARCH_ENDPOINT + "?" + searchParams.toString()
        fetch(fetchUrl, {
            signal: abort.signal
        }).then(response => response.json()).then((searchResult: SiteSearchResponse) => {
            function isResult(toTest: SiteSearchResponse) : toTest is SiteSearchResult {
                return typeof((toTest as SiteSearchResult).query) == 'string' && (toTest as SiteSearchResult).query.length > 0
            }
            if (isResult(searchResult)) {
                setSearchStatus(searchResult.total > 0 ? SearchStatus.Results : SearchStatus.NoResults)
                setSearchResults(searchResult)
            } else
                throw new Error("Error received")
        }).catch(() => {
            setSearchStatus(SearchStatus.Error)
        })

        return () => {
            abort.abort("Search term or filters changed")
        }
        
    }, [ searchTerm, searchFilters, track ])

    return <>
        <button className={ buttonClassName } onClick={ () => { setSearchOpen(true) }}>
            <span className='sr-only'>Search</span>
            <MagnifyingGlassIcon className='inline-block w-4 h-4 md:w-6 md:h-6' />
        </button>
        <Dialog open={ searchOpen } onClose={() => { closeSearch() }}>
            <Dialog.Panel className="fixed top-0 left-0 right-0 bottom-0 flex flex-col z-50">
                <Dialog.Title as="div" className="w-full p-2 sm:p-3 lg:p-4 px-3 lg:px-4 bg-teal-800 text-white font-bold text-lg flex justify-between">
                    <div>Search { brandName }</div>
                    <button className="p-2 sm:p-3 lg:p-4 -my-2 sm:-my-3 lg:-my-4 -mr-2 sm:-mr-3 lg:-mr-4" onClick={() => { setSearchOpen(false) }}>
                        <XMarkIcon className='w-6 h-6' />
                    </button>
                </Dialog.Title>
                <Dialog.Description as="div" className="flex-1 bg-white p-4 mb:p-6 lg:p-8 flex flex-col gap-4 sm:gap-6 lg:gap-8 justify-stretch">
                    <div className='search-panel w-full flex-0'>
                        <div className='search-box block flex flex-nowrap w-full border-solid border border-slate-400 rounded-lg'>
                            <input ref={ searchBox } type="text" className='grow rounded-l-lg border-none text-slate-900' defaultValue={ searchTerm } />
                            <button className='px-4 text-slate-900 bg-slate-200 border-none rounded-r-lg' onClick={ () => { setSearchTerm(searchBox.current?.value ?? "") } }>Search</button>
                        </div>
                    </div>
                    <div className='search-result flex-1 w-full'>
                        <div className="search-results flex justify-start gap-4 sm:gap-6 lg:gap-8">
                            { searchStatus == SearchStatus.Searching && 
                                <div>
                                    <GlobeEuropeAfricaIcon className='inline-block h-8 w-8 animate-spin' /> Loading results
                                </div>
                            }
                            { searchStatus == SearchStatus.Results &&
                                <>
                                    <Facets className='search-facets w-1/3 max-w-xs' facets={ searchResults?.facets ?? [] } activeFacets={ searchResults?.filters ?? []} onAddFacet={ (f,v)=>addFacet(f,v) } onRemoveFacet={ (f,v)=>removeFacet(f,v) } />
                                    <SearchResults className='results-list grow overflow-auto touch-pan-y' results={ searchResults?.items ?? [] } total={ searchResults?.total ?? 0 } onClick={ ()=>closeSearch() }/>
                                </>
                            }
                            { searchStatus == SearchStatus.NoResults && 
                                <div>{ searchTerm ? "No Search Results" : ""}</div>
                            }
                        </div>
                    </div>
                </Dialog.Description>
            </Dialog.Panel>
        </Dialog>
    </>
}

export default SiteSearch