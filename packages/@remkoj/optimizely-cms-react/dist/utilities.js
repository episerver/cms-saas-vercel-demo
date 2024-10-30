import { localeToGraphLocale } from '@remkoj/optimizely-graph-client/utils';
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
/**
 * Normalizes the content type by:
 *  - Converting strings to ContentType
 *  - Stripping the leading underscore, if any
 *
 * @param       toNormalize         The Content Type value to process
 * @param       stripContent        When set to true, the global base type "Content" will be removed as well
 * @returns
 */
export function normalizeContentType(toNormalize, stripContent = false) {
    if (!toNormalize)
        return undefined;
    let filtered = (typeof (toNormalize) == 'string' ? toNormalize.split('/') : toNormalize).filter(isNonEmptyString).map(x => x.startsWith('_') ? x.substring(1) : x);
    if (stripContent)
        filtered = filtered.filter(x => x.toLowerCase() != 'content');
    return filtered.length > 0 ? filtered : undefined;
}
/**
 * Normalizes and prefixes the content type by:
 *  - Converting strings to ContentType
 *  - Stripping the leading underscore, if any
 *  - Removing the global base type "Content"
 *  - Ensuring that in the remaining type the least specific type is equal to the provided prefix
 *
 * @param       contentType
 * @param       prefix
 * @returns
 */
export function normalizeAndPrefixContentType(contentType, prefix) {
    if (!contentType)
        return [prefix];
    const processedContentType = (typeof (contentType) == 'string' ? contentType.split('/') : contentType).filter(isNonEmptyString).map(x => x.startsWith('_') ? x.substring(1) : x).filter(x => x.toLowerCase() != 'content');
    if (processedContentType[0] != prefix)
        processedContentType.unshift(prefix);
    return processedContentType;
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
export function contentLinkToRequestVariables(contentLink) {
    const variables = {
        key: contentLink.key ?? '-no-content-selected-',
        locale: contentLink.locale ? localeToGraphLocale(contentLink.locale) : undefined,
        version: contentLink.version
    };
    if (variables.version == undefined || variables.version == '')
        variables.version = null;
    return variables;
}
export function toUniqueValues(value, index, array) {
    return array.indexOf(value) == index;
}
export function trim(valueToTrim) {
    if (typeof (valueToTrim) == 'string')
        return valueToTrim.trim();
    return valueToTrim;
}
export function getContentEditId(contentLink) {
    return contentLink.key;
}
/**
 * Generate a pseudo-random identifier usable to satisfy the unique key
 * requirement for children within a React node. However this effectively will
 * tell React that the childrend will be unique for each render and thus cause
 * them to update.
 *
 * Only use this method to generate keys if there's no other way to test the
 * uniqueness of the child
 *
 * @param       prefix      The prefix to apply to the children
 * @returns     The unique key
 */
export function getRandomKey(prefix = "rnd") {
    try {
        return `${prefix}::${crypto.randomUUID()}`;
    }
    catch {
        return `${prefix}::${Math.round(Math.random() * 10000)}::${Math.round(Math.random() * 10000)}`;
    }
}
//# sourceMappingURL=utilities.js.map