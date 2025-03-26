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