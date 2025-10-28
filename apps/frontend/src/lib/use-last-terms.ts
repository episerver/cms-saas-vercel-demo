import useSWR from 'swr'
import { useMemo } from 'react'

export function useLastTerms(count: number = 5, refreshInterval?: number)
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
        revalidateOnFocus: true,
        revalidateOnMount: true,
        revalidateOnReconnect: true,
        revalidateIfStale: true,
        refreshWhenHidden: false,
        refreshWhenOffline: false,
        refreshInterval
    })
}

export default useLastTerms