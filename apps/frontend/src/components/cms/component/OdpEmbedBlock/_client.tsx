'use client'

import React, { useCallback, type FunctionComponent } from 'react'
import { useEffect, useRef, useId } from 'react'
import { useOptimizelyOne } from '@remkoj/optimizely-one-nextjs/client'

export type OdpClientSideProps = {
    contentId: string
} & Omit<JSX.IntrinsicElements['div'], 'children'>

export const OdpClientSide : FunctionComponent<OdpClientSideProps> = ({ contentId, className, ...props }) =>
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
        className={className}
        ref={containerRef}
        id={containerId}
        { ...props }
      />
    );
}

export default OdpClientSide