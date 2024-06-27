import { type PropsWithChildren } from "react"
export type PageLayoutProps = PropsWithChildren<{}>
import { OptimizelyOneProvider, PageActivator, OptimizelyOneGadget } from '@remkoj/optimizely-one-nextjs/client'

export default function PageLayout({ children }: PageLayoutProps) {
    return <OptimizelyOneProvider value={{ debug: true }} >
        <PageActivator />
        { children }
        <OptimizelyOneGadget servicePrefix='/api/me' refreshInterval={ 2000 } />
    </OptimizelyOneProvider>
}