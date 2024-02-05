'use client'
import type { OptimizelyContentRecsApi } from "./types"
import { useEffect, type FunctionComponent, type PropsWithChildren } from 'react'
import { usePathname } from 'next/navigation'

export function useContentRecs(): OptimizelyContentRecsApi | undefined
{
    try {
        if (!window._iaq) 
            window._iaq = [] as [string, any][]
        return window._iaq
    } catch {
        return undefined
    }
}

export const ContentRecsPageViewTracker : FunctionComponent<PropsWithChildren<{}>> = ({ children }) =>
{
    const debug = process.env.NODE_ENV == 'development'
    const path = usePathname()
    const recs = useContentRecs()
    useEffect(() => {
        if (!recs) {
            return
        }
        if (debug) console.log("Optimizely Content Analytics/Recs: Track view of", path)
        recs.push(['track', 'consume'])
    }, [ path, recs, debug ])
    
    return <>{ children }</>
}

export default ContentRecsPageViewTracker