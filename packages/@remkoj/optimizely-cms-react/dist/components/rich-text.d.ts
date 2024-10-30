import type { ComponentFactory, ComponentType, ComponentTypeDictionary } from "../types.js";
import { type FunctionComponent, type PropsWithChildren } from "react";
export type RichTextProps = {
    /**
     * The component factory used for this rich text content
     */
    factory?: ComponentFactory;
    /**
     * The rich text to render, provided as either a HTML string or JSON encoded
     * structured data.
     */
    text: NodeInput | null | undefined;
    /**
     * The CSS Class to apply to the text container
     */
    className?: string;
    /**
     * Set the component type of the wrapper to use, defaults to a 'div'
     * element when not defined
     */
    as?: ComponentType;
} & ({
    /**
     * The fieldname of this Rich Text, when it is used as part of a block
     */
    cmsFieldName?: never;
    /**
     * The Element ID if this is the sole output of a Visual Builder element
     */
    cmsId?: string | null;
} | {
    /**
     * The fieldname of this Rich Text, when it is used as part of a block
     */
    cmsFieldName?: string | null;
    /**
     * The Element ID if this is the sole output of a Visual Builder element
     */
    cmsId?: never;
});
export type Node = {};
export type TextNode = Node & {
    text: string;
} & Record<string, string | number | boolean>;
export type RichTextNode = Node & {
    type: "richText";
    children: Array<Node>;
};
export type StringNode = Node & {
    type: "string";
    children: Array<Node>;
};
export type TypedNode = NodeWithChildren<Node & {
    type: string;
} & Record<string, string | number | boolean>>;
export type NodeWithChildren<T extends Node> = T & {
    children?: Array<Node>;
};
export type NodeInput = string | RichTextNode | StringNode;
export declare const Utils: {
    isText(toTest: Node | null | undefined): toTest is TextNode;
    isTypedNode(toTest: Node | null | undefined): toTest is TypedNode;
    processNodeInput(input: NodeInput | null | undefined): RichTextNode | StringNode | undefined;
    getRandomId(scope?: string): string;
};
export declare const RichText: FunctionComponent<RichTextProps>;
export declare function createHtmlComponent<E extends keyof JSX.IntrinsicElements>(element: E, ignoreChildren?: boolean, defaultProps?: JSX.IntrinsicElements[E] & Record<string, string>): ({ children, node, ...props }: PropsWithChildren<JSX.IntrinsicElements[E] & {
    node: TypedNode;
}>) => import("react/jsx-runtime").JSX.Element;
/**
 * A default component dictionary that allows to serialize the structured HTML
 * into React, using the component library shared across the react SDK.
 */
export declare const DefaultComponents: ComponentTypeDictionary;
export default RichText;
