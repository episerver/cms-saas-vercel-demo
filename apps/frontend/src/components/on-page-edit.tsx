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

export type OptimizelyCmsContentSavedEvent = {
    contentLink: string,
    editUrl: string,
    previewUrl: string
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

        const previewUrl = window.location.href
        let handlerEnabled = true

        // Define event handler
        let maskTimer : NodeJS.Timeout  | false = false
        function onContentSaved(eventData: OptimizelyCmsContentSavedEvent)
        {
            setShowMask(true)
            if (maskTimer != false) clearTimeout(maskTimer)
            console.log(`Delaying refresh with ${ timeout }ms to allow Optimizely Graph to update`)
            maskTimer = setTimeout(() => {
                const contentId = window.location.pathname.split(',,')[1]
                const newContentId = eventData.contentLink
                if (previewUrl == eventData.previewUrl) {
                    console.log(`Refreshing preview: ${ contentId } => ${ newContentId }`)
                    router.refresh()
                    setShowMask(false)
                } else {
                    const newUrl = new URL(eventData.previewUrl)
                    console.log(`Navigating to new preview: ${ contentId } => ${ newContentId }`)
                    router.push(newUrl.pathname + newUrl.search)
                    setShowMask(false)
                }
            }, timeout)
        }

        // Subscribe to event
        console.log(`Subscribing to ContentSaved Event`)
        const opti = tryGetCms()
        opti?.subscribe('contentSaved', (eventData: OptimizelyCmsContentSavedEvent) => {
            if (!handlerEnabled)
                return
            onContentSaved(eventData)
        })

        // Unsubscribe when needed
        return () => {
            console.log(`Navigating away, disabling ContentSaved event handler`)
            handlerEnabled = false
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