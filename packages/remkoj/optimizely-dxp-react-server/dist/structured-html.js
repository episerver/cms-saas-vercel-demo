import { jsxs as _jsxs, Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import CmsContent from './cms-content';
import { getFactory } from './factory';
import * as Uuid from 'uuid';
const DEBUG = process.env.NODE_ENV != 'production';
export const StructuredHtml = async ({ data, locale }) => {
    const parsedData = parseData(data);
    if (!parsedData)
        if (DEBUG)
            return _jsxs("div", { className: 'opti-error', children: ["Unable to generate data structure, provided data type: ", typeof (data)] });
        else
            return _jsx(_Fragment, {});
    if (Array.isArray(parsedData)) {
        return _jsx(_Fragment, { children: await Promise.all(parsedData.map(x => StructuredHtmlElement({ componentInfo: x, key: Uuid.v4(), locale }))) });
    }
    return StructuredHtmlElement({ componentInfo: parsedData, locale });
};
const selfClosing = ['img', 'br'];
async function StructuredHtmlElement({ componentInfo, locale, key }) {
    const factory = getFactory();
    // Handle empty componentType
    if (!componentInfo.componentType)
        return _jsx(_Fragment, {});
    // Handle text
    if (componentInfo.componentType == '#text')
        return _jsx(_Fragment, { children: componentInfo.text ?? "" });
    // Optimizely  Content
    if (componentInfo.componentType == "OptimizelyContent")
        return React.createElement(CmsContent, {
            contentLink: {
                id: Number.parseInt(componentInfo.contentId ?? "-1") ?? -1,
                guidValue: componentInfo.content,
                locale
            },
            contentType: componentInfo.contentType,
            key
        });
    // Handle factory
    if (factory.has(componentInfo.componentType)) {
        const FactoryComponent = factory.resolve(componentInfo.componentType);
        return _jsx(FactoryComponent, { ...componentInfo.attributes, children: await resolveChildren(componentInfo.children ?? [], locale) }, key);
    }
    // Handle self-closing tags
    if (selfClosing.includes(componentInfo.componentType))
        return React.createElement(componentInfo.componentType, { key, ...componentInfo.attributes });
    // Handle regular string (e.g. likely default component)
    if (componentInfo.componentType.indexOf('/') < 0) {
        return React.createElement(componentInfo.componentType, {
            key,
            ...componentInfo.attributes,
            children: await resolveChildren(componentInfo.children ?? [], locale)
        });
    }
    if (DEBUG)
        return _jsxs("div", { className: 'opti-error', children: ["Unable to resolve rendering method for element ", JSON.stringify(componentInfo)] }, key);
    return _jsx(_Fragment, {});
}
async function resolveChildren(children, locale) {
    return Promise.all((children ?? []).map(x => StructuredHtmlElement({
        componentInfo: x,
        locale,
        key: Uuid.v4()
    })));
}
function parseData(rawData) {
    if (!rawData)
        return undefined;
    if (Array.isArray(rawData))
        return rawData.filter(x => typeof (x) == 'object' && x != null && x.componentType);
    if (typeof (rawData) == "object" && rawData != null)
        return rawData.componentType ? rawData : undefined;
    try {
        const parsed = JSON.parse(rawData);
        if (!parsed)
            return undefined;
        return parsed;
    }
    catch {
        if (DEBUG)
            console.error("Caught error while parsing structured HTML");
        return undefined;
    }
}
