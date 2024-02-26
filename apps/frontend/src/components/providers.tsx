'use client'
import React, { type FunctionComponent, PropsWithChildren } from 'react'
import { SessionProvider } from 'next-auth/react'
import { OptimizelyOneProvider, PageActivator, OptimizelyOneGadget } from '@remkoj/optimizely-one-nextjs/client'

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
export const GlobalProviders : FunctionComponent<GlobalProvidersProps> = ({ children }) => 
{
    return <OptimizelyOneProvider value={{ debug: true }} >
        <PageActivator />
        <SessionProvider>
            { children }
        </SessionProvider>
        <OptimizelyOneGadget servicePrefix='/api/me' refreshInterval={ 2000 } />
    </OptimizelyOneProvider>
}

export default GlobalProviders