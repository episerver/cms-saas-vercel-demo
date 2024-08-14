'use client'
import { useState, type FunctionComponent, type KeyboardEvent } from "react"
import { useUrlState } from "@/lib/use-url-state"
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import useLastTerms from "@/lib/use-last-terms"

export type SearchHeaderProps = {
    initialQuery?: string | null
}

export const SearchHeader : FunctionComponent<SearchHeaderProps> = ({ initialQuery }) => {
    const [ query ] = useUrlState('query', initialQuery ?? '', undefined, x=>x, x=>x)
    return <div className="search-header">
        { (query && query != '') ?
            <h1 className="font-bold text-[4rem]">Search results for &ldquo;{ query }&rdquo;</h1> :
            <h1 className="font-bold text-[4rem]">Search results</h1>
        }
    </div>
}

export default SearchHeader