'use client'
import type { OptimizelyWebExperimentationApi } from "./types"
import { useLayoutEffect, type FunctionComponent, type PropsWithChildren } from 'react'
import { usePathname } from 'next/navigation'

export { type OptimizelyWebExperimentationApi, type OptlyWebGet } from "./types"

export function useWebExperimentation(): OptimizelyWebExperimentationApi | undefined
{
    try {
        if (!window.optimizely)
            window.optimizely = [] as unknown as OptimizelyWebExperimentationApi
        return window.optimizely
    } catch {
        return undefined
    }
}

export const WebExperimentationPageTracker : FunctionComponent<PropsWithChildren<{}>> = ({ children }) =>
{
    const debug = process.env.NODE_ENV == 'development'
    const path = usePathname()
    const webex = useWebExperimentation()

    // Capture all page changes
    useLayoutEffect(() => { 
        if (!webex)
            return
        webex.push({ type: 'activate' })
        if (debug) console.log("Optimizely Web Experimentation: Activate on", path)
    }, [ path, webex, debug ])
    
    return <>{ children }</>
}

export default WebExperimentationPageTracker