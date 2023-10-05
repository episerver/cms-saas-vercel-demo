import type { OptimizelyNextPage } from "./types";

export function isOptimizelyNextPageWithMetaData(toTest: any) : toTest is OptimizelyNextPage
{
    if ((typeof(toTest) != 'function' && typeof(toTest) != 'object') || toTest == null)
        return false

    return (toTest as OptimizelyNextPage)?.getMetaData ? true : false
}