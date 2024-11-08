import useSWR from 'swr'
import { useMemo } from 'react'

export function useLastTerms(count: number = 5, refreshInterval: number = 10000)
{
    const fetchKey = useMemo(() => count > 0 ? `/api/me/search?count=${ count }` : null, [ count ])
    return useSWR<Array<string>, any, string|null>(fetchKey, {
        fetcher: async (key: string|null) => {
            if (!key) return []
            return fetch(key, {}).then(r => {
                if (!r.ok)
                    throw new Error(`${ r.status }: ${ r.statusText }`)
                return r.json()
            }).then(d => d.terms)
        },
        refreshInterval
    })
}

export default useLastTerms