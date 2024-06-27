'use client'
import { type FunctionComponent, PropsWithChildren } from 'react'

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
    return children
}

export default GlobalProviders