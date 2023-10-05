'use client'

import React, { type FunctionComponent, PropsWithChildren } from 'react'
import { SessionProvider } from 'next-auth/react'
import OdpPageView from '@/components/integrations/opti-data-platform'

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
    return <OdpPageView>
        <SessionProvider>
            { props.children }
        </SessionProvider>
    </OdpPageView>
}

export default GlobalProviders