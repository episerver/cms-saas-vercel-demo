'use client'

import type { FunctionComponent, PropsWithChildren } from "react"
import { useEffect, useRef } from "react"
import { usePathname, useSearchParams } from 'next/navigation'

declare global
{
    interface Window {
        zaius?: ZaiusAPI
    }
}

export type ZaiusAPI = {
    event: (name: string, data?: { [param: string]: any }) => Promise<void>
    dispatch: (group: string, action: string, params?: { [param: string]: any }) => Promise<void>
}

export function useODP(): ZaiusAPI | undefined
{
    const odp = useRef<ZaiusAPI | undefined>()
    if (!odp.current) {
        try {
            odp.current = window.zaius
        } catch {
            //Purposefully ignored
        }
    }
    return odp.current
}

export const OptiDataPlatform : FunctionComponent<PropsWithChildren<{}>> = ({ children }) =>
{
    const path = usePathname()
    const zaius = useODP()
    useEffect(() => {
        if (!zaius)
            return
        zaius.event('pageview')
    }, [ path, zaius ])
    
    return <>{ children }</>
}

export default OptiDataPlatform