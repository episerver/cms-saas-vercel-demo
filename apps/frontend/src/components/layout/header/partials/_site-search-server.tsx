import { site_search as getSearchConfig } from "@/flags";
import SiteSearchClient, { type SiteSearchProps } from "./_site-search"

export async function SiteSearch(props: SiteSearchProps)
{
    const config = await getSearchConfig()
    return <SiteSearchClient {...props} { ...config } />
}

export default SiteSearch