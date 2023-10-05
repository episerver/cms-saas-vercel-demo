export function useFragment(_documentNode, fragmentType) {
    return fragmentType;
}
export function makeFragmentData(data, _fragment) {
    return data;
}
export function isFragmentReady(queryNode, fragmentNode, data) {
    const deferredFields = queryNode.__meta__
        ?.deferredFields;
    if (!deferredFields)
        return true;
    const fragDef = fragmentNode.definitions[0];
    const fragName = fragDef?.name?.value;
    const fields = (fragName && deferredFields[fragName]) || [];
    return fields.length > 0 && fields.every(field => data && field in data);
}
