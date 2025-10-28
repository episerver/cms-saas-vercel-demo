import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { HeadingElementDataFragmentDoc, type HeadingElementDataFragment } from "@/gql/graphql";
import { isAnimatedHeadingStylesProps, isDefaultProps, type HeadingElementLayoutProps } from "./displayTemplates";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { DefaultHeadingElement } from "./_default";
import { AnimatedHeadingElement } from "./_animated";

/**
 * Heading
 * 
 */
export const HeadingElementElement : CmsComponent<HeadingElementDataFragment, HeadingElementLayoutProps> = ({ contentLink, data, layoutProps, ctx, editProps }) =>
{
    if (isDefaultProps(layoutProps)) {
        return <CmsEditable as={DefaultHeadingElement} contentLink={contentLink} cmsFieldName="headingText" data={ data } layoutProps={ layoutProps } {...editProps} />
    } 
    if (isAnimatedHeadingStylesProps(layoutProps)) {
        const withReducedMotion = ctx?.inEditMode ? true : undefined
        return <CmsEditable as={AnimatedHeadingElement} contentLink={contentLink} cmsFieldName="headingText" data={ data } layoutProps={ layoutProps } withReducedMotion={withReducedMotion} { ...editProps } />
    }
    return <CmsEditable as="div" className="text-5xl p-4 md:p-8 xl:p-10" cmsFieldName="headingText" {...editProps}>{ data?.headingText ?? ""}</CmsEditable>
}
HeadingElementElement.displayName = "Heading (Element/HeadingElement)"
HeadingElementElement.getDataFragment = () => ['HeadingElementData', HeadingElementDataFragmentDoc]

export default HeadingElementElement