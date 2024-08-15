'use client'
import { useEffect, useMemo, type FunctionComponent } from "react"
import { type ContentSearchResults } from "@/lib/api/search"
import { linkDataToHref } from "@remkoj/optimizely-cms-nextjs/components"
import { RichText, DefaultComponents, Utils, type RichTextNode, StringNode, NodeInput } from "@remkoj/optimizely-cms-react/components"
import { DefaultComponentFactory } from "@remkoj/optimizely-cms-react"
import Link from 'next/link'
import LocalTime from "@/components/shared/local-time"
import { useIntUrlState, useStringUrlState } from "@/lib/use-url-state"
import useSWR from "swr"
import { contentLinkToString } from "@remkoj/optimizely-graph-client"
import { useOptimizelyOne } from "@remkoj/optimizely-one-nextjs"

const richTextFactory = new DefaultComponentFactory(DefaultComponents)

export type SearchProps = {
    initialQuery?: string
    initialResults?: ContentSearchResults
}

export const Search : FunctionComponent<SearchProps> = ({ initialQuery, initialResults }) => 
{
    const opti = useOptimizelyOne()
    const [query] = useStringUrlState('query', initialQuery ?? '')
    const [limit, setLimit] = useIntUrlState('limit', 12, x => x > 0)
    const [start, setStart] = useIntUrlState('start', 0, x => x >= 0)

    const swrKey = useMemo(() => {
        if (!query || query.length < 3)
            return null
        const params = new URLSearchParams()
        params.set('query', query)
        params.set('limit', limit.toString())
        params.set('start', start.toString())
        return `/api/content/search?${ params.toString() }`
    }, [ query, limit, start ])

    const { data: results, isLoading } = useSWR<ContentSearchResults, any, string | null>(swrKey, {
        fetcher: (key) => fetch(key).then(r => {
            if (!r.ok)
                throw new Error(`${ r.status }: ${ r.statusText }`)
            return r.json()
        }),
        fallbackData: initialResults
    })

    useEffect(() => {
        const t = results?.term
        if (!opti || !t || t.length < 3)
            return
        opti.track({
            event: "navigation",
            action: "search",
            search_term: t
        })
    }, [results?.term, opti])

    if (isLoading || (!results && query.length >= 3)) {
        return <div className="search-results-container">
            <div className="text-[22px] mb-[40px] will-change-contents">Your search matched <span className="inline-block h-[2rem] w-[3rem] animate-pulse bg-light-grey rounded-[5px]"></span> pages.</div>
            <div className="search-results-list will-change-contents">
                <div className="block py-[20px] animate-pulse flex flex-col gap-4">
                    <div className="bg-light-grey w-full h-[30px] rounded-[10px]"></div>
                    <div className="bg-light-grey w-full h-[90px] rounded-[10px]"></div>
                </div>
                <div className="block py-[20px] animate-pulse flex flex-col gap-4">
                    <div className="bg-light-grey w-full h-[30px] rounded-[10px]"></div>
                    <div className="bg-light-grey w-full h-[90px] rounded-[10px]"></div>
                </div>
                <div className="block py-[20px] animate-pulse flex flex-col gap-4">
                    <div className="bg-light-grey w-full h-[30px] rounded-[10px]"></div>
                    <div className="bg-light-grey w-full h-[90px] rounded-[10px]"></div>
                </div>
            </div>
        </div>    
    }

    if (!results) 
        return <></>

    const resultCount = results?.total ?? 0
    return <div className="search-results-container">
        <div className="text-[22px] mb-[40px] will-change-auto">Your search matched { resultCount } pages.</div>
        <div className="search-results-list will-change-auto">
        { results?.items?.map(item => {
            return <Link key={ contentLinkToString(item.id) } href={ item.url ? linkDataToHref(item.url) : '#' } className='block py-[20px] flex flex-col gap-4'>
                <div className="text-azure dark:text-verdansk text-[22px] font-bold">{ item.title }</div>
                { item.author && <div className="flex flex-row justify-between">
                    <div className="italic">Author: { item.author }</div>
                    <div>Published: <LocalTime date={ item.published } mode="Date" /></div>
                </div>}
                { isNodeInput(item.abstract) ? <RichText text={ item.abstract } factory={ richTextFactory } /> : <div>{ isNonEmptyString(item.abstract) ? item.abstract : ''}</div> }
            </Link>
        })}
        </div>
        { results?.isPersonalized && <div className="text-sm italic pt-[5px] pb-[10px]">Personalized by Optimizely Content Recommendations</div> }
    </div>
}

function isRichTextNode(toTest: any) : toTest is RichTextNode
{
    return Utils.isTypedNode(toTest) && toTest.type == 'richText'
}

function isStringNode(toTest: any) : toTest is StringNode
{
    return Utils.isTypedNode(toTest) && toTest.type == 'string'
}

function isNodeInput(toTest: any) : toTest is NodeInput
{
    return isRichTextNode(toTest) || isStringNode(toTest)
}

function isNonEmptyString(toTest: any) : toTest is string
{
    return typeof(toTest) == 'string' && toTest.length > 0
}

export default Search