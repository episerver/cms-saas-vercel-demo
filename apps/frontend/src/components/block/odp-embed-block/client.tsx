'use client'

import React, { useCallback, type FunctionComponent } from 'react'
import { useEffect, useRef, useId } from 'react'
import { useODP } from '@/components/integrations/opti-data-platform'

export const OdpClientSide : FunctionComponent<{contentId: string, className: string}> = ({contentId, className}) =>
{
    const containerRef = useRef<HTMLDivElement | null>(null)
    const hasDispatched = useRef<boolean>(false)
    const zaius = useODP()
    const containerId = useId().replaceAll(':',"-")

    
    const showContent = useCallback(() => 
    {
        if (hasDispatched.current) 
            return
        hasDispatched.current = true
        zaius?.dispatch('web','showContent', {
            contentId: contentId,
            target: {
                selector: `#${ containerId }`,
                position: 'inside'
            }
        })
    }, [ zaius, containerId, contentId ])

    useEffect(() => {
        const container = containerRef.current
        if (container)
            showContent()
    }, [showContent])

    return <div className={ className } ref={ containerRef } id={ containerId } />
}

export default OdpClientSide