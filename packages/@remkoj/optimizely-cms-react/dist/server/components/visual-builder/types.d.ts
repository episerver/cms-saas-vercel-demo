import { type ComponentType, type PropsWithChildren } from "react";
import { type ContentType } from "../../../types.js";
import { type InlineContentLinkWithLocale, type ContentLinkWithLocale } from "@remkoj/optimizely-graph-client";
export declare enum StructureNodeTypes {
    Experience = "experience",
    Section = "section",
    Row = "row",
    Column = "column"
}
export type CompositionNodeBase = {
    name: string | null;
    key: string | null;
    type?: string | null;
    template?: string | null;
    settings?: Array<{
        key: string;
        value: string | number | boolean;
    } | null> | null;
};
export type CompositionStructureNode = CompositionNodeBase & {
    layoutType: "experience" | "section" | "row" | "column";
    nodes?: Array<CompositionNode>;
};
export type CompositionElementNode<E extends Record<string, any> = Record<string, any>> = CompositionNodeBase & {
    layoutType: "element";
    element: E;
};
export type CompositionNode<E extends Record<string, any> = Record<string, any>> = CompositionStructureNode | CompositionElementNode<E>;
export type CompositionComponentType<NT extends CompositionNode> = ComponentType<NT extends CompositionElementNode<infer DT> ? {
    node: Omit<NT, 'element'>;
    element: DT;
} : PropsWithChildren<{
    node: Omit<NT, 'nodes'>;
}>>;
export type LeafPropsFactory = <ET extends Record<string, any>, LT = string>(node: CompositionElementNode<ET>) => [ContentLinkWithLocale<LT> | InlineContentLinkWithLocale<LT>, ContentType, ET] | [ContentLinkWithLocale<LT> | InlineContentLinkWithLocale<LT>, ContentType, ET, Record<string, any>];
export type NodePropsFactory = <ET extends Record<string, any>, LT = string>(node: CompositionStructureNode) => [ContentLinkWithLocale<LT> | InlineContentLinkWithLocale<LT>, Array<ContentType>, ET] | [ContentLinkWithLocale<LT> | InlineContentLinkWithLocale<LT>, Array<ContentType>, ET, Record<string, any>];
export type OptimizelyCompositionProps = JSX.IntrinsicAttributes & {
    /**
     * The Visual Builder node to start rendering from
     */
    node: CompositionNode<Record<string, any>>;
    /**
     * Allows overriding of the factory that transforms the data received from
     * Optimizely Graph into properties for an element.
     */
    leafPropsFactory?: LeafPropsFactory;
    /**
     * Allows overriding of the factory that transforms the data received from
     * Optimizely Graph into properties for a structure node.
     */
    nodePropsFactory?: NodePropsFactory;
};
