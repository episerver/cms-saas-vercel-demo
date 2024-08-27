'use client'
import { useEffect, useState, type FunctionComponent, type KeyboardEvent } from "react"
import { useUrlState } from "@/lib/use-url-state"
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import useLastTerms from "@/lib/use-last-terms"

export type SearchBoxProps = {
    initialQuery?: string | null
}

export const SearchBox: FunctionComponent<SearchBoxProps> = ({
    initialQuery
}) => {
    const [ query, setQuery ] = useUrlState<string>('query', initialQuery ?? '', undefined, x=>x, x=>x)
    const [ term, setTerm ] = useState<string>(query)
    const { data: lastTerms } = useLastTerms()

    function onKeyUp(event: KeyboardEvent) {
        if (event.key == "Enter")
            setQuery(term)
    }

    useEffect(() => {
        if (query && query != '')
            setTerm(query)
    }, [ query ])

    return <div className="search-box-container py-[40px]">
        <div className="search-box border-solid border-[2px] h-[56px] w-full max-w-[33%] rounded-[20px] bg-ghost-white dark:bg-vulcan z-[999] border-azure dark:border-verdansk flex flex-row justify-stretch content-stretch outline-none focus-within:outline focus-within:outline-dashed focus-within:outline-offset-2 focus-within:outline-2 focus-within:outline-azure focus-within:dark:outline-verdansk">
            <input type="text" className="rounded-l-[20px] w-[calc(100%-54px)] pl-[10px] focus:outline-none active:outline-none bg-ghost-white dark:bg-vulcan dark:text-ghost-white" placeholder="Search..." value={ term } onChange={ e => setTerm(e.target.value) } onKeyUp={ e => onKeyUp(e)} />
            <MagnifyingGlassIcon className="text-azure dark:text-verdansk w-[52px] h-[52px] p-[9px] cursor-pointer" onClick={() => setQuery(term) } title={`Start search for ${ term }`} />
        </div>
        { lastTerms && <div>
            <div className="pt-[10px]">
                <div className="inline-block">Your lastest terms:</div>
                <div className="inline-block">{
                    lastTerms.map(item => {
                        return <span className="inline-block ml-[5px] cursor-pointer" key={"lst-"+item} onClick={() => { setTerm(item); setQuery(item)}}>&ldquo;{ item }&rdquo;</span>
                    })
                }</div>
            </div>
            <div className="text-sm italic pt-[5px] pb-[10px]">Powered by Optimizely Data Platform</div>
        </div>}
    </div>
}

export default SearchBox