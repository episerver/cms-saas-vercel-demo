export function isOptimizelyNextPageWithMetaData(toTest) {
    if ((typeof (toTest) != 'function' && typeof (toTest) != 'object') || toTest == null)
        return false;
    return toTest?.getMetaData ? true : false;
}
