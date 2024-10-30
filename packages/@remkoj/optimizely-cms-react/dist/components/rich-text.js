import { jsx as _jsx } from "react/jsx-runtime";
import { DefaultComponentFactory } from "../factory.js";
import { decodeHTML } from 'entities';
//#endregion
//#region Utils & Supports
export const Utils = {
    isText(toTest) {
        return (typeof toTest == 'object' &&
            toTest != null &&
            (typeof toTest.text) == 'string' &&
            toTest.text.length >= 0);
    },
    isTypedNode(toTest) {
        return (typeof toTest == 'object' &&
            toTest != null &&
            (typeof toTest.type) == 'string' &&
            toTest.type.length > 0);
    },
    processNodeInput(input) {
        if (!input)
            return undefined;
        const textObject = typeof input == "string" ? JSON.parse(input) : input;
        if (textObject?.type != "richText" && textObject?.type != "string")
            throw new Error('Structured rich text requires a "richText" root node');
        return textObject;
    },
    getRandomId(scope = "richText") {
        return `${scope}::${Math.round(Math.random() * 100000)}`;
    }
};
//#endregion
export const RichText = ({ factory, text, className = 'rich-text', as: Wrapper = "div", ...props }) => {
    const debug = process.env.NODE_ENV != 'production';
    const id = Utils.getRandomId("rich-text");
    const richTextFactory = factory ?? new DefaultComponentFactory(DefaultComponents);
    try {
        const data = Utils.processNodeInput(text);
        return _jsx(Wrapper, { className: className, ...props, children: (data?.children || []).map((child, idx) => {
                const elementId = id + '::' + idx;
                return _jsx(RichTextElement, { factory: richTextFactory, node: child, idPrefix: elementId + '::' }, elementId);
            }) });
    }
    catch {
        if (debug)
            console.warn('🟠 [Rich Text] Invalid rich text received: ', text);
        return Object.getOwnPropertyNames(props).length > 0 ? _jsx("div", { className: className, ...props }) : null;
    }
};
//#region Supportive React components
const RichTextElement = ({ factory, node, idPrefix }) => {
    const debug = process.env.NODE_ENV != 'production';
    if (Utils.isText(node)) {
        if (node.text.length == 0)
            return null;
        const TextComponent = factory?.resolve(`RichText/text`) ?? DefaultTextNode;
        return _jsx(TextComponent, { node: node });
    }
    if (!Utils.isTypedNode(node)) {
        if (debug)
            console.warn('🟠 [Rich Text] Invalid rich text element data received:', node);
        return null;
    }
    const childData = node.children?.map((child, idx) => {
        const elementId = idPrefix + idx;
        return _jsx(RichTextElement, { factory: factory, node: child, idPrefix: elementId + '::' }, elementId);
    });
    if (!factory?.has(`RichText/${node.type}`)) {
        console.warn('🟠 [Rich Text] No renderer for node type, falling back to "div":', `RichText/${node.type}`);
        const DivComponent = createHtmlComponent("div", false, { "data-type": node.type });
        return _jsx(DivComponent, { node: node, children: childData });
    }
    const Component = factory?.resolve(`RichText/${node.type}`) ?? 'div';
    return _jsx(Component, { node: node, children: childData });
};
//#endregion
//#region HTML Components
export function createHtmlComponent(element, ignoreChildren = false, defaultProps) {
    const HtmlElement = element;
    const reservedProps = ['url', 'class', 'children', 'type'];
    const component = ({ children, node, ...props }) => {
        const nodeProps = {};
        const renderProps = Object.getOwnPropertyNames(node);
        renderProps.filter(x => !reservedProps.includes(x)).forEach(x => nodeProps[x] = node[x]);
        if (renderProps.includes('class'))
            nodeProps['className'] = node['class'];
        if (renderProps.includes('url')) {
            switch (node.type) {
                case 'link':
                    nodeProps['href'] = node['url'];
                    break;
                case 'image':
                    nodeProps['src'] = node['url'];
                    break;
                default:
                    nodeProps['data-url'] = node['url'];
                    break;
            }
        }
        return ignoreChildren ? _jsx(HtmlElement, { ...defaultProps, ...nodeProps, ...props }) : _jsx(HtmlElement, { ...defaultProps, ...nodeProps, ...props, children: children });
    };
    return component;
}
const DefaultTextNode = ({ node }) => {
    if (node.bold)
        return _jsx("strong", { children: decodeHTML(node.text) });
    if (node.italic)
        return _jsx("em", { children: decodeHTML(node.text) });
    const unsupportedProps = Object.getOwnPropertyNames(node).filter(x => x != 'text');
    if (unsupportedProps.length > 0 && process.env.NODE_ENV != 'production')
        console.warn('🟠 [Rich Text] Text node with unsupported additional properties:', unsupportedProps.join(', '));
    return decodeHTML(node.text);
};
/**
 * A default component dictionary that allows to serialize the structured HTML
 * into React, using the component library shared across the react SDK.
 */
export const DefaultComponents = [
    { type: 'RichText/richText', component: createHtmlComponent("div", false, { className: "cms:rich-text" }) },
    { type: 'RichText/paragraph', component: createHtmlComponent("p") },
    { type: 'RichText/span', component: createHtmlComponent("span") },
    { type: 'RichText/div', component: createHtmlComponent("div") },
    { type: 'RichText/heading-one', component: createHtmlComponent("h1") },
    { type: 'RichText/heading-two', component: createHtmlComponent("h2") },
    { type: 'RichText/heading-three', component: createHtmlComponent("h3") },
    { type: 'RichText/heading-four', component: createHtmlComponent("h4") },
    { type: 'RichText/heading-five', component: createHtmlComponent("h5") },
    { type: 'RichText/heading-six', component: createHtmlComponent("h6") },
    { type: 'RichText/link', component: createHtmlComponent("a") },
    { type: 'RichText/image', component: createHtmlComponent("img", true) },
    { type: 'RichText/text', component: DefaultTextNode },
    { type: 'RichText/br', component: createHtmlComponent("br", true) },
    { type: 'RichText/bulleted-list', component: createHtmlComponent("ul") },
    { type: 'RichText/numbered-list', component: createHtmlComponent("ol") },
    { type: 'RichText/list-item', component: createHtmlComponent("li") }
];
//#endregion
export default RichText;
//# sourceMappingURL=rich-text.js.map