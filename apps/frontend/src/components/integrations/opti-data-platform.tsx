'use client'

import type { FunctionComponent, PropsWithChildren } from "react"
import { useEffect, useRef } from "react"
import { usePathname } from 'next/navigation'
import { OptimizelyDataPlatformApi } from './types'

export function useODP(): OptimizelyDataPlatformApi | undefined
{
    try {
        return window.zaius
    } catch {
        //Purposefully ignored
    }
    return undefined
}

function getContentIntelligenceId() : string
{
    try {
        return document.cookie.match('(^|;)\\s*iv\\s*=\\s*([^;]+)')?.pop() || ''
    } catch {
        return ''
    }
}

export const OptiDataPlatform : FunctionComponent<PropsWithChildren<{}>> = ({ children }) =>
{
    const debug = process.env.NODE_ENV == 'development'
    const path = usePathname()
    const zaius = useODP()
    const contentIntel = getContentIntelligenceId()
    useEffect(() => {
        if (!zaius)
            return
        if (debug) console.log("Optimizely Data Platform: Track view of", path)
        zaius.event('pageview')
    }, [ path, zaius, debug ])
    
    useEffect(() => {
        if (!zaius || !contentIntel)
            return
        if (debug) console.log("Optimizely Data Platform: Tracking Content Intelligence ID", contentIntel)
        zaius.customer({ content_intelligence_id: contentIntel })
    }, [ zaius, contentIntel, debug ])

    return <>{ children }</>
}

export default OptiDataPlatform