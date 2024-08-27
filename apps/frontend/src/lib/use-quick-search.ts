import { useState, useEffect, useMemo } from "react"
import useSWR from "swr"
import { ContentSearchResults } from "./api/search"

export function useQuickSearch(term: string = '', delayMs: number = 250, minTermLength: number = 3) 
{
    const [searchTerm, setSearchTerm] = useState<string>(term)
    useEffect(() => {
        if (delayMs <= 0) {
            setSearchTerm(term)
            return
        }
        const timeOut = setTimeout(() => setSearchTerm(term), delayMs)
        return () => clearTimeout(timeOut)
    }, [ term, delayMs ])

    const searchPath = useMemo(() => {
        if (!searchTerm || searchTerm.length < minTermLength)
            return null
        return `/api/content/search?query=${ encodeURIComponent(searchTerm) }&mode=quick&locales=en`
    }, [ searchTerm, minTermLength ])

    return useSWR<ContentSearchResults, any, string | null>(searchPath, {
        fetcher: (key) => fetch(key, {
            next: {
                revalidate: 0
            }
        }).then(r => {
            if (!r.ok)
                throw new Error(`${r.status}: ${ r.statusText }`)
            return r.json()
        })
    })

}

export default useQuickSearch