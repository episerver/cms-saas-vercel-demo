export function isContentLink(toTest) {
    // It must be an object
    if (typeof (toTest) != 'object' || toTest == null)
        return false;
    // The object must have an Id (numeric, >= 0) or GuidValue (string, minimum 1 character)
    return (typeof (toTest.id) == 'number' && toTest.id >= 0) ||
        (typeof (toTest.guidValue) == 'string' && toTest.guidValue.length > 0);
}
export function isContentLinkWithLocale(toTest) {
    if (!isContentLink(toTest))
        return false;
    const locale = toTest.locale;
    return locale == undefined || (typeof (locale) == 'string' && locale.length >= 2 && locale.length <= 5);
}
export function isNonEmptyString(toTest) {
    return typeof (toTest) == 'string' && toTest.length > 0;
}
export function isNotNullOrUndefined(toTest) {
    return !(toTest == null || toTest == undefined);
}
export function isContentType(toTest) {
    if (!Array.isArray(toTest))
        return false;
    return toTest.every(isNonEmptyString);
}
export function normalizeContentType(toNormalize) {
    if (!Array.isArray(toNormalize))
        return undefined;
    const filtered = toNormalize.filter(isNonEmptyString);
    return filtered.length > 0 ? filtered : undefined;
}
export function normalizeContentLink(toNormalize) {
    if (typeof (toNormalize) != 'object' || toNormalize == null)
        return undefined;
    if (toNormalize.id == null)
        toNormalize.id = 0; // Change the 'null' identifier and turn it into a 'zero'
    if (toNormalize.guidValue == null || toNormalize.guidValue == "")
        delete toNormalize.guidValue; // Remove an empty or null guid value
    if ((toNormalize.id ?? -1) >= 0 || (toNormalize.guidValue ?? "").length > 0)
        return toNormalize;
    return undefined;
}
export function normalizeContentLinkWithLocale(toNormalize) {
    const normalized = normalizeContentLink(toNormalize);
    if (normalized.locale != undefined && !(typeof (normalized.locale) == 'string' && normalized.locale.length >= 1 && normalized.locale.length <= 5))
        delete normalized.locale;
    return normalized;
}
export function isCmsComponentWithDataQuery(toTest) {
    const toTestType = typeof (toTest);
    if ((toTestType == 'function' || toTestType == 'object') && toTest != null) {
        return toTest.getDataQuery && typeof (toTest.getDataQuery) == 'function' ? true : false;
    }
    return false;
}
export function isCmsComponentWithFragment(toTest) {
    const toTestType = typeof (toTest);
    if ((toTestType == 'function' || toTestType == 'object') && toTest != null)
        return toTest.getDataFragment && typeof (toTest.getDataFragment) == 'function' ? true : false;
    return false;
}
export function validatesFragment(toTest) {
    const toTestType = typeof (toTest);
    if ((toTestType == 'function' || toTestType == 'object') && toTest != null)
        return toTest.validateFragment && typeof (toTest.validateFragment) == 'function' ? true : false;
    return false;
}
export function contentLocaleToGraphLocale(contentLocale) {
    if (typeof (contentLocale) == 'string' && contentLocale.length >= 2 && contentLocale.length <= 5)
        return contentLocale?.replaceAll('-', '_');
    return undefined;
}
export function contentLinkToRequestVariables(contentLink) {
    const variables = {
        id: contentLink.id ?? 0,
        workId: contentLink.workId,
        guidValue: contentLink.guidValue ?? "",
        locale: contentLocaleToGraphLocale(contentLink.locale)
    };
    if (variables.workId == undefined || variables.workId <= 0)
        variables.workId = null;
    return variables;
}
export function isInlineContentLink(contentLink) {
    return !contentLink.id && !contentLink.guidValue;
}
export function contentLinkToString(contentLink) {
    return `${contentLink.id ?? 0}_${contentLink.workId ?? 0}#${contentLink.guidValue ?? ''}\$${contentLink.locale ?? ''}`;
}
