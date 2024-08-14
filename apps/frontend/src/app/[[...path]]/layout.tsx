'use server'
import { type PropsWithChildren } from "react"
export type PageLayoutProps = PropsWithChildren<{}>
import { PageActivator, OptimizelyOneGadget } from '@remkoj/optimizely-one-nextjs/client'

export default async function PageLayout({ children }: PageLayoutProps) {
    return <>
        <PageActivator />
        { children }
        <OptimizelyOneGadget servicePrefix='/api/me' refreshInterval={ 2000 } />
    </>
}