'use server'
import { type PropsWithChildren } from "react"
export type PageLayoutProps = PropsWithChildren<{}>
import { OptimizelyOneProvider, PageActivator, OptimizelyOneGadget, ContentRecsDelivery } from '@remkoj/optimizely-one-nextjs/client'
import RecsTpl, { Placeholder } from './recstpl'

export default async function PageLayout({ children }: PageLayoutProps) {
    return <OptimizelyOneProvider value={{ debug: true }} >
        <PageActivator />
        { children }
        <ContentRecsDelivery apiKey="O3HVY2UGE86WHLTWA2CX" template={ RecsTpl } placeholder={ Placeholder } count={3} className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 gap-10 relative pb-12" />
        <OptimizelyOneGadget servicePrefix='/api/me' refreshInterval={ 2000 } />
    </OptimizelyOneProvider>
}