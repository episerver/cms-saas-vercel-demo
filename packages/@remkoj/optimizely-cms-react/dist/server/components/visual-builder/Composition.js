import { jsx as _jsx } from "react/jsx-runtime";
import 'server-only';
import { isElementNode, defaultNodePropsFactory, defaultPropsFactory } from './functions.js';
import { CmsContent } from '../cms-content.js';
import getServerContext from '../../context.js';
/**
 * Render the composition as made available through Optimizely Graph for Visual Builder
 *
 * @param param0
 * @returns     The
 */
export async function OptimizelyComposition({ node, leafPropsFactory = defaultPropsFactory, nodePropsFactory = defaultNodePropsFactory }) {
    const { factory, isDebug } = getServerContext();
    if (isElementNode(node)) {
        if (isDebug)
            console.log(`⚪ [VisualBuilder] Rendering element node ${JSON.stringify(node)}`);
        const [contentLink, contentType, fragmentData, layoutProps] = leafPropsFactory(node);
        //@ts-expect-error CmsContent is an Asynchronous server component, which isn't supported by the generic React Typings
        return _jsx(CmsContent, { contentLink: contentLink, contentType: contentType, fragmentData: fragmentData, layoutProps: layoutProps });
    }
    if (isDebug)
        console.log(`⚪ [VisualBuilder] Rendering structure node ${JSON.stringify(node)}`);
    if (!factory)
        throw new Error("🟡 [VisualBuilder] [OptimizelyComposition] The factory must be defined within the serverContext");
    const [contentLink, contentTypes, fragmentData, layoutProps] = nodePropsFactory(node);
    const firstExistingType = contentTypes.map(ct => {
        const reversed = [...ct].reverse();
        const hasType = factory.has(reversed);
        if (!hasType && isDebug)
            console.log(`🟡 [VisualBuilder] [OptimizelyComposition] Content type ${reversed.join('/')} not found within factory`);
        return hasType;
    }).indexOf(true);
    const contentType = contentTypes[firstExistingType];
    if (!contentType)
        throw new Error("🟡 [VisualBuilder] [OptimizelyComposition] The factory must have a definition for Component/Node");
    //@ts-expect-error CmsContent is an Asynchronous server component, which isn't supported by the generic React Typings
    return _jsx(CmsContent, { contentType: contentType, contentLink: contentLink, fragmentData: fragmentData, layoutProps: layoutProps, noDataLoad: true, children: (node.nodes ?? []).map((child) => {
            const childKey = child.key ? child.key : `vb::${JSON.stringify(child)}`;
            //@ts-expect-error OptimizelyComposition is an Asynchronous server component, which isn't supported by the generic React Typings
            return _jsx(OptimizelyComposition, { node: child, leafPropsFactory: leafPropsFactory, nodePropsFactory: nodePropsFactory }, childKey);
        }) });
}
export default OptimizelyComposition;
//# sourceMappingURL=Composition.js.map