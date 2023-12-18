'use client'

import React, { type FunctionComponent, PropsWithChildren } from 'react'
import { SessionProvider } from 'next-auth/react'
import DataPlatformTracking from '@/components/integrations/opti-data-platform'
import ContentRecsTracking from '@/components/integrations/opti-content-recs'
import WebExActivation from '@/components/integrations/opti-web-experimentation'

export type GlobalProvidersProps = PropsWithChildren<{

}>

/**
 * Container of 3rd party client side only providers, which do not yet contain
 * the 'use client' marker needed by Next.JS to mark them as Client Side 
 * components.
 * 
 * @param       props   Component properties
 * @returns     The global client side providers, wrapping the server components
 */
export const GlobalProviders : FunctionComponent<GlobalProvidersProps> = props => 
{
    return <SessionProvider>
        <DataPlatformTracking />
        <ContentRecsTracking />
        <WebExActivation>
            { props.children }
        </WebExActivation>
    </SessionProvider>
}

export default GlobalProviders