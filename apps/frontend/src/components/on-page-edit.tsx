'use client'

import React, { useState, useEffect, type FunctionComponent, type PropsWithChildren } from 'react'
import { useRouter } from 'next/navigation'

export type OnPageEditProps = PropsWithChildren<{
    mode?: 'edit' | 'preview'
    className?: string
    timeout?: number
}>

export type OptimizelyCmsContext = {
    ready: boolean
    inEditMode: boolean
    isEditable: boolean
    subscribe: (event: string, handler: (...args: any) => void) => void
}

declare global {
    interface Window { 
        epi?: OptimizelyCmsContext
    }
}

export const OnPageEdit : FunctionComponent<OnPageEditProps> = ({ mode, children, className, timeout }) => 
{
    const router = useRouter()
    const [ optiCmsReady, setOptiCmsReady ] = useState<boolean>(false)
    const [ showMask, setShowMask ] = useState<boolean>(false)
    timeout = timeout ?? 1500

    // Bind to the CMS & CMS Ready State
    useEffect(() => {
        console.log("Reading Opti CMS Context")
        const fxCms = tryGetCms()
        const cmsReady = fxCms?.ready ?? false
        setOptiCmsReady(cmsReady)
        if (!cmsReady) {
            const cancelToken = setInterval(() => {
                const updateCms = tryGetCms()
                const updatedCmsReady = updateCms?.ready ?? false
                if (updatedCmsReady) {
                    clearInterval(cancelToken)
                    setOptiCmsReady(updatedCmsReady)
                }
            }, 250)
            return () => {
                clearInterval(cancelToken)
            }
        }
    }, [])

    // Bind to the Saved event
    useEffect(() => {
        if (!optiCmsReady)
            return

        // Define event handler
        let maskTimer : NodeJS.Timeout  | false = false
        function onContentSaved()
        {
            setShowMask(true)
            if (maskTimer != false) clearTimeout(maskTimer)
            maskTimer = setTimeout(() => {
                console.log("Refreshing route")
                router.refresh()
                setShowMask(false)
            }, timeout)
        }

        // Subscribe to event
        console.log("Subscribing to ContentSaved Event")
        const opti = tryGetCms()
        opti?.subscribe('contentSaved', ()  =>  onContentSaved())

        // Unsubscribe when needed
        return () => {
            console.warn("Unable to unsubscribe event listener, expect errors with content updates")
        }
    }, [ optiCmsReady, router, timeout ])

    return <>
        { showMask && <div className={`loading-mask ${ className }`.trimEnd()}>{ children }</div>}
    </>
}

function tryGetCms() : OptimizelyCmsContext | undefined
{
    try {
        return window.epi
    } catch {
        return undefined
    }
}

export default OnPageEdit