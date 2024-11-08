import { Suspense } from 'react'
import { site_search as getSearchConfig } from "@/flags";
import SiteSearchClient, { type SiteSearchProps } from "./_site-search"

export function SiteSearch(props: SiteSearchProps)
{
    return <Suspense>
        <ConfiguredSiteSearch {...props} />
    </Suspense>
}

export default SiteSearch

export async function ConfiguredSiteSearch(props: SiteSearchProps)
{
    const config = await getSearchConfig()
    return <SiteSearchClient {...props} { ...config } />
}