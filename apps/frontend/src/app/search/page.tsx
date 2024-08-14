'use server'

import SearchBox from "./_searchbox"
import SearchHeader from "./_searchheader"
import Search from "./_search"

const AdvancedSearchPage = async ({
    searchParams
} : {
    searchParams: Record<string, string | string[] | undefined>
}) => 
{
    const query = Array.isArray(searchParams['query']) ? searchParams['query'].at(0) : searchParams['query']

    return <div className="container mx-auto pt-[40px]">
        <SearchBox initialQuery={ query } />
        <SearchHeader initialQuery={ query } />
        <Search />
    </div>
}

export default AdvancedSearchPage