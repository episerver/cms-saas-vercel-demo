'use server'
import { type PropsWithChildren } from "react"
export type PageLayoutProps = PropsWithChildren<{}>
import { PageActivator } from '@remkoj/optimizely-one-nextjs/client'
import { OptimizelyOneGadget } from '@remkoj/optimizely-one-nextjs/server'

export default async function PageLayout({ children }: PageLayoutProps) {
    return <>
        <PageActivator />
        { children }
        <OptimizelyOneGadget servicePrefix='/api/me' refreshInterval={ 0 } />
    </>
}