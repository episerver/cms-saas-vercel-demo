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

export const OptiDataPlatform : FunctionComponent<PropsWithChildren<{}>> = ({ children }) =>
{
    const debug = process.env.NODE_ENV == 'development'
    const path = usePathname()
    const zaius = useODP()
    useEffect(() => {
        if (!zaius)
            return
        if (debug) console.log("Optimizely Data Platform: Track view of", path)
        zaius.event('pageview')
    }, [ path, zaius, debug ])
    
    return <>{ children }</>
}

export default OptiDataPlatform