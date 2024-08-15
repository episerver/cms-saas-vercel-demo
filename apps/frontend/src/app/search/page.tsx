// Import search logic and result parsing helpers
import contentSearch from '@/lib/api/search'

// Import components
import SearchBox from "./_searchbox"
import SearchHeader from "./_searchheader"
import Search from "./_search"
import { Suspense } from 'react'

export function generateStaticParams() 
{
    return []
}

const AdvancedSearchPage = async ({
    searchParams
} : {
    searchParams: {
        query?: string | string[],
        start?: string | string[],
        limit?: string | string[]
    } & Record<string, string | string[] | undefined>
}) => 
{
    // Read the search parameters
    /*const query = Array.isArray(searchParams.query) ? searchParams.query.at(0) : searchParams.query
    const start = tryParseInt(Array.isArray(searchParams.start) ? searchParams.start.at(0) : searchParams.start, 0)
    const limit = tryParseInt(Array.isArray(searchParams.limit) ? searchParams.limit.at(0) : searchParams.limit, 12)

    // Perform the actual search
    const results = (query && query.length > 1) ? await contentSearch(query, { start, limit, locale: "en", personalize: false }) : <undefined></undefined>*/
    const query = undefined
    const results = undefined

    return <div className="container mx-auto py-[40px]">
        <Suspense>
            <SearchBox initialQuery={ query } />
            <SearchHeader initialQuery={ query } />
            <Search initialQuery={ query } initialResults={ results } />
        </Suspense>
    </div>
}

export const dynamic = "force-static"; // Make sure we cache pages
export const dynamicParams = false; // Allow new pages to be resolved without rebuilding the site
export const revalidate = 30; // Keep the cache untill manually revalidated using the Webhook
export const fetchCache = "default-cache"; // Cache fetch results by default
export default AdvancedSearchPage

function tryParseInt(value: string | undefined, defaultValue: number = 0, radix?: number) : number
{
    if (value == undefined)
        return defaultValue
    try {
        return Number.parseInt(value, radix)
    } catch {
        return defaultValue
    }
}