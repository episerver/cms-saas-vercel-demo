'use client'

import React, { useCallback, type FunctionComponent } from 'react'
import { useEffect, useRef, useId } from 'react'
import { useOptimizelyOne } from '@remkoj/optimizely-one-nextjs/client'

export const OdpClientSide : FunctionComponent<{contentId: string, className: string, inEditMode: boolean}> = ({contentId, className, inEditMode}) =>
{
    const containerRef = useRef<HTMLDivElement | null>(null)
    const hasDispatched = useRef<boolean>(false)
    const zaius = useOptimizelyOne().getService('odp')?.getBrowserApi()
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

    return (
      <div
        data-epi-edit={inEditMode ? "ContentId" : undefined}
        className={className}
        ref={containerRef}
        id={containerId}
      />
    );
}

export default OdpClientSide