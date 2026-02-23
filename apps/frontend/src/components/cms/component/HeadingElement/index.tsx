import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { HeadingElementDataFragmentDoc, type HeadingElementDataFragment } from "@/gql/graphql";
import { isAnimatedHeadingStylesProps, isDefaultProps, type HeadingElementLayoutProps } from "./displayTemplates";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { DefaultHeadingElement } from "./_default";
import { AnimatedHeadingElement } from "./_animated";
import { EditableHeading } from "./_editable";

/**
 * Heading
 *
 */
export const HeadingElementElement : CmsComponent<HeadingElementDataFragment, HeadingElementLayoutProps> = ({ contentLink, data, layoutProps, inEditMode, ctx }) =>
{
    const headingText = data?.headingText ?? "";

    return (
        <EditableHeading contentKey={contentLink.key ?? null} headingText={headingText}>
            {isDefaultProps(layoutProps) && (
                <CmsEditable as={DefaultHeadingElement} cmsId={ contentLink.key } cmsFieldName="headingText" data={ data } layoutProps={ layoutProps } ctx={ ctx } />
            )}
            {isAnimatedHeadingStylesProps(layoutProps) && (
                <CmsEditable as={AnimatedHeadingElement} cmsId={ contentLink.key } cmsFieldName="headingText" data={ data } layoutProps={ layoutProps } withReducedMotion={inEditMode ? true : undefined} ctx={ ctx } />
            )}
            {!isDefaultProps(layoutProps) && !isAnimatedHeadingStylesProps(layoutProps) && (
                <CmsEditable as="div" className="text-5xl p-4 md:p-8 xl:p-10" cmsId={ contentLink.key } ctx={ ctx } cmsFieldName="headingText">{ headingText }</CmsEditable>
            )}
        </EditableHeading>
    );
}
HeadingElementElement.displayName = "Heading (Element/HeadingElement)"
HeadingElementElement.getDataFragment = () => ['HeadingElementData', HeadingElementDataFragmentDoc]

export default HeadingElementElement
