import type { Metadata, ResolvingMetadata } from 'next/types'

import Header from '@components/layout/header'
import Footer from '@components/layout/footer'
import OptimizelyOne from '@components/layout/footer/optimizely-one'

import 'server-only'
import * as EnvTools from '@/lib/env'
import Channel from '@/site-config'

export type RootLayoutProps = {
    children: React.ReactNode,
    params?: {
        lang?: string
    }
}

/**
 * Make sure that the locale - which is now known at this level - will be added
 * to the metadata of the page
 * 
 * @param       props   The layout properties
 * @returns     The metadata that must be merged into the defaults
 */
export async function generateMetadata(props: RootLayoutProps, resolving: ResolvingMetadata) : Promise<Metadata> {
    const locale = Channel.slugToLocale(props.params?.lang ?? Channel.defaultLocale)
    const base = ((await resolving) ?? {}) as Metadata
    const newMeta : Metadata = {
        openGraph: {
            ...base?.openGraph,
            locale
        }
    }
    return newMeta
}

export default function RootLayout({ children, params }: RootLayoutProps) {
    const OptimzelyOneDebug = EnvTools.readValueAsBoolean('OPTIMIZELY_ONE_HELPER')
    const currentLocale = Channel.slugToLocale(params?.lang ?? Channel.defaultLocale)
    return <>
        <Header locale={ currentLocale } />
        <main>
            { children }
        </main>
        <Footer locale={ currentLocale } />
        { OptimzelyOneDebug && <OptimizelyOne /> }
    </>
}
