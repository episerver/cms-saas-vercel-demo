"use client"
import { useState, useEffect, useRef, type FunctionComponent, KeyboardEvent } from "react"
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

import useLastTerms from "@/lib/use-last-terms"
import useQuickSearch from "@/lib/use-quick-search"
import { useOptimizelyOne } from '@remkoj/optimizely-one-nextjs/client'
import { useRouter } from "next/navigation"
import { linkDataToHref } from "@remkoj/optimizely-cms-nextjs/components"

export type SiteSearchProps = {

}

export const SiteSearch : FunctionComponent<SiteSearchProps> = ({}) => {
    const opti = useOptimizelyOne()
    const router = useRouter()
    const [ searchBoxOpen, setSearchBoxOpen ] = useState<boolean>(false)
    const [ quickSearchTerm, setQuickSearchTerm ] = useState<string>('')
    const { isLoading, data } = useQuickSearch(quickSearchTerm)
    const container = useRef<HTMLDivElement | null>(null)
    const resultTerm = data?.term
    const { data: lastTerms } = useLastTerms()

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
    return <div ref={ container } className="quick-search-container">
        <MagnifyingGlassIcon className="quick-search-icon text-vulcan dark:text-white w-[44px] h-[44px] p-[5px] cursor-pointer" onClick={() => setSearchBoxOpen(x => !x)} />
        { searchBoxOpen && <div className="quick-search-box border-solid border-[2px] absolute top-0 right-0 h-[56px] w-full rounded-[20px] bg-ghost-white dark:bg-vulcan z-[999] border-azure dark:border-verdansk flex flex-row justify-stretch content-stretch">
            <input type="text" className="rounded-l-[20px] w-[calc(100%-54px)] pl-[10px] focus:outline-none active:outline-none bg-ghost-white dark:bg-vulcan dark:text-ghost-white" placeholder="Search..." value={ quickSearchTerm } onChange={ e => setQuickSearchTerm(e.target.value) } onKeyUp={ e => onKeyUp(e)} />
            <Link href={"/search?query=" + encodeURIComponent(quickSearchTerm) }><MagnifyingGlassIcon className="text-azure dark:text-verdansk w-[52px] h-[52px] p-[9px]" /></Link>
        </div> }
        { searchBoxOpen && (isLoading || data ) && <div className="quick-search-results border-solid border-[2px] border-azure dark:border-verdansk rounded-[20px] bg-ghost-white dark:bg-vulcan z-[999] absolute w-full min-h-[20px] top-[64px] right-0">
            { isLoading && <div className="p-[10px]">Loading results for <span className="font-bold">&ldquo;{ quickSearchTerm }&rdquo;</span></div> }
            { data && data.total > 0 && <ul className="p-[10px]">{data.items.slice(0,5).map(item => {
                return <li key={"qs-"+quickSearchTerm+"-"+item.id.key+item.id.locale}>
                    <Link href={ item.url ? linkDataToHref( item.url) : '#' } className="block w-full hover:text-azure dark:hover:text-verdansk" onClick={() => closeSearch()}>{ item.title }</Link>
                </li>
            })}
            </ul> }
            { (data && data?.isPersonalized) && <div className="px-[10px] pb-[10px] text-sm italic text-vulcan dark:text-ghost-white">Personalized with Optimizely Content Recommendations</div>}
            { data && data.total == 0 && <div className="p-[10px] text-paleruby">No results for: <span className="font-bold">&ldquo;{ data.term }&rdquo;</span></div> }
        </div> }
        { searchBoxOpen && (!(isLoading || data )) && lastTerms && <div className="quick-search-results border-solid border-[2px] border-azure dark:border-verdansk rounded-[20px] bg-ghost-white dark:bg-vulcan z-[999] absolute w-full min-h-[20px] top-[64px] right-0">
            <ul className="p-[10px]">{lastTerms?.map(item => {
                return <li key={ "lt-"+item } onClick={() => {
                    router.push("/search?query=" + encodeURIComponent(item))
                } } className="cursor-pointer">
                    { item }
                </li>
            })}
            </ul>
        </div>}
    </div>
}
SiteSearch.displayName = "Site search"

export default SiteSearch