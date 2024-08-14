import useSWR from 'swr'
import { useMemo } from 'react'

export function useLastTerms(count: number = 5, refreshInterval: number = 1500)
{
    const fetchKey = useMemo(() => `/api/me/search?count=${ count }`, [ count ])
    return useSWR<Array<string>, any, string>(fetchKey, {
        fetcher: async (key) => {
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