import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { HeadingElementDataFragmentDoc, type HeadingElementDataFragment } from "@/gql/graphql";
import { isAnimatedTemplate, isDefaultTemplate, type HeadingElementLayoutProps } from "./displayTemplates";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { DefaultHeadingElement } from "./_default";
import { AnimatedHeadingElement } from "./_animated";

/**
 * Heading
 * 
 */
export const HeadingElementElement : CmsComponent<HeadingElementDataFragment, HeadingElementLayoutProps> = ({ contentLink, data, layoutProps, children }) =>
{
    if (isDefaultTemplate(layoutProps)) {
        return <CmsEditable as={DefaultHeadingElement} cmsId={ contentLink.key } data={ data } layoutProps={ layoutProps } />
    } 
    if (isAnimatedTemplate(layoutProps)) {
        return <CmsEditable as={AnimatedHeadingElement} cmsId={ contentLink.key } data={ data } layoutProps={ layoutProps } />
    }
    return <CmsEditable as="div" className="text-5xl p-4 md:p-8 xl:p-10" cmsId={ contentLink.key }>{ data?.headingText ?? ""}</CmsEditable>
}
HeadingElementElement.displayName = "Heading (Element/HeadingElement)"
HeadingElementElement.getDataFragment = () => ['HeadingElementData', HeadingElementDataFragmentDoc]

export default HeadingElementElement