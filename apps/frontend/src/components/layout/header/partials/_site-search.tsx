"use client"
import { useState, useEffect, useRef, type FunctionComponent, KeyboardEvent } from "react"
import { MagnifyingGlassIcon, DocumentIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

import useLastTerms from "@/lib/use-last-terms"
import useQuickSearch from "@/lib/use-quick-search"
import { useOptimizelyOne } from '@remkoj/optimizely-one-nextjs/client'
import { useRouter } from "next/navigation"
import { linkDataToHref } from "@remkoj/optimizely-cms-nextjs/components"
import { ContentSearchResults } from "@/lib/api/search"
import { site_search } from "@/flags"
import useFlag from "@/useFlag"

export type SiteSearchProps = {
    asSearchBox?: boolean
    className?: string
}

export type ConfiguredSiteSearchProps = SiteSearchProps & {
    recent_search_count?: number
    show_recent_searches?: boolean
}

export const SiteSearch : FunctionComponent<ConfiguredSiteSearchProps> = ({
    asSearchBox = false,
    className = "",
    recent_search_count = 5,
    show_recent_searches = false
}) => {
    const opti = useOptimizelyOne()
    const router = useRouter()
    const searchConfig = useFlag(site_search, { recent_search_count, show_recent_searches, use_personalization: false, interest_boost: 1 })
    const [ searchBoxOpen, setSearchBoxOpen ] = useState<boolean>(false)
    const [ quickSearchTerm, setQuickSearchTerm ] = useState<string>('')
    const { isLoading, data } = useQuickSearch(quickSearchTerm)
    const container = useRef<HTMLDivElement | null>(null)
    const resultTerm = data?.term
    const { data: lastTerms } = useLastTerms(searchConfig.show_recent_searches ? searchConfig.recent_search_count : 0)

    // Close search on click outside of search box
    useEffect(() => {
        if (!container.current)
            return

        function onMouseDown(event: MouseEvent) {
            if (container.current && !container.current.contains(event.target as Node)) {
                setSearchBoxOpen(false)
                setQuickSearchTerm('')
            }
        }
        document.addEventListener('mousedown', onMouseDown)
        return () => {
            document.removeEventListener('mousedown', onMouseDown)
        }
    }, [ container ])

    // Track the searches
    useEffect(() => {
        if (resultTerm) {
            opti.track({
                event: "navigation",
                action: "search",
                search_term: resultTerm
            })
        }
    }, [opti, resultTerm])

    function onKeyUp(event: KeyboardEvent) {
        if (event.key == "Enter") {
            router.push("/search?query=" + encodeURIComponent(quickSearchTerm))
            setSearchBoxOpen(false)
            setQuickSearchTerm('')
        }
    }

    function closeSearch() {
        setSearchBoxOpen(false)
        setQuickSearchTerm('')
    }

    // Render search
    return <div ref={ container } className={ "quick-search-container " + className }>
        { asSearchBox ? (<>
            <div className="quick-search-box border-solid border-[2px] w-full rounded-[1rem] bg-ghost-white dark:bg-vulcan border-azure dark:border-verdansk flex flex-row justify-stretch content-stretch">
                <input type="text" className="rounded-l-[1rem] grow h-12 pl-[0.5rem] focus:outline-none active:outline-none bg-ghost-white dark:bg-vulcan dark:text-ghost-white" placeholder="Search..." value={ quickSearchTerm } onChange={ e => setQuickSearchTerm(e.target.value) } onKeyUp={ e => onKeyUp(e)} />
                <Link className="grow-0 shrink-0" href={"/search?query=" + encodeURIComponent(quickSearchTerm) }>
                    <MagnifyingGlassIcon className="text-azure dark:text-verdansk w-12 p-2" />
                </Link>
            </div>
        </>) : (<>
            <MagnifyingGlassIcon className="quick-search-icon text-vulcan dark:text-white w-auto h-full min-h-11 p-2 cursor-pointer" onClick={() => setSearchBoxOpen(x => !x)} />
            { searchBoxOpen && <div className="quick-search-box border-solid border-2 absolute top-0 right-0 h-full min-h-11 w-full min-w-[25vw] rounded-[20px] bg-ghost-white dark:bg-vulcan z-[999] border-azure dark:border-verdansk flex flex-row justify-stretch content-stretch">
                <input type="text" className="rounded-l-[1rem] grow pl-2 focus:outline-none active:outline-none bg-ghost-white dark:bg-vulcan dark:text-ghost-white" placeholder="Search..." value={ quickSearchTerm } onChange={ e => setQuickSearchTerm(e.target.value) } onKeyUp={ e => onKeyUp(e)} />
                <Link href={"/search?query=" + encodeURIComponent(quickSearchTerm) }>
                    <MagnifyingGlassIcon className="text-azure dark:text-verdansk w-auto h-full min-h-11 p-4" />
                </Link>
            </div> }
        </>)}
        { searchBoxOpen && (isLoading || data ) && <QuickSearchResults isLoading={isLoading} data={data} quickSearchTerm={quickSearchTerm} closeSearch={closeSearch} /> }
        { searchConfig.show_recent_searches && searchBoxOpen && (!(isLoading || data )) && lastTerms && <LastSearchTerms lastTerms={lastTerms} />}
    </div>
}
SiteSearch.displayName = "Site search"

export default SiteSearch

const QuickSearchResults : FunctionComponent<{ isLoading?: boolean, data?: ContentSearchResults | null, quickSearchTerm?: string, closeSearch: () => void }> = ({ isLoading = true, data, quickSearchTerm = "", closeSearch }) => 
{
    return (<div className="quick-search-results border-solid border-2 border-azure dark:border-verdansk rounded-[1rem] bg-ghost-white dark:bg-vulcan z-[999] absolute w-full min-w-[25vw] min-h-6 top-16 right-0">
        { isLoading && <div className="p-2">Loading results for <span className="font-bold">&ldquo;{ quickSearchTerm }&rdquo;</span></div> }
        { data && data.total > 0 && <ul className="p-2 flex flex-col gap-2">{data.items.slice(0,5).map(item => {
            return <li key={"qs-"+quickSearchTerm+"-"+item.id.key+item.id.locale}>
                <Link href={ item.url ? linkDataToHref( item.url) : '#' } className="block w-full hover:text-azure dark:hover:text-verdansk" onClick={() => closeSearch()}>
                    <DocumentIcon className="h-6 w-auto inline-block" />
                    { item.title }
                </Link>
            </li>
        })}
        </ul> }
        { data && data.total == 0 && <div className="p-2 text-paleruby">No results for: <span className="font-bold">&ldquo;{ data.term }&rdquo;</span></div> }
        { (data && data?.isPersonalized) && <div className="px-2 pb-2 text-xs italic text-vulcan dark:text-ghost-white">Personalized with Optimizely Content Recommendations</div>}
    </div>)
}

const LastSearchTerms : FunctionComponent<{ lastTerms?: Array<string> }> = ({ lastTerms }) => 
{
    const router = useRouter()
    return (<div className="quick-search-results border-solid border-2 border-azure dark:border-verdansk rounded-[1rem] bg-ghost-white dark:bg-vulcan z-[999] absolute w-full min-w-[25vw] min-h-[20px] top-16 right-0">
        <div className="px-2 pt-2 text-vulcan dark:text-ghost-white font-semibold">Continue where you left:</div>
        <hr className="mx-2 border-1 border-vulcan-85"/>
        <ul className="p-2">{lastTerms?.map(item => {
            return <li key={ "lt-"+item } onClick={() => {
                router.push("/search?query=" + encodeURIComponent(item))
            } } className="cursor-pointer">
                { item }
            </li>
        })}
        </ul>
        <div className="px-2 pb-2 text-xs italic text-vulcan-85 dark:text-ghost-white">Powered by Optimizely Data Platform</div>
    </div>)
}