// Import components
import SearchBox from "./_searchbox"
import SearchHeader from "./_searchheader"
import Search from "./_search"
import { Suspense } from 'react'

import { getServerContext } from '@remkoj/optimizely-cms-react/rsc'
import { setupFactory } from "@/components/factory"
import { createClient } from '@remkoj/optimizely-cms-nextjs'

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
    const ctx = getServerContext()
    ctx.setComponentFactory(setupFactory())
    ctx.setOptimizelyGraphClient(createClient())
    ctx.setLocale('en')

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

export const runtime = "nodejs"; // Run on Node.JS
export const revalidate = 30; // Keep the cache untill manually revalidated using the Webhook
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