import type { CmsComponent, ContentLink, ContentGraphClient } from "@remkoj/optimizely-dxp-react"
import type { Metadata } from 'next'

export type OptimizelyNextPage<T = {}> = CmsComponent<T> & 
{
    getMetaData?: (contentLink: ContentLink, locale: string, client: ContentGraphClient) => Promise<Metadata>
}