import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { CTAElementDataFragmentDoc, type CTAElementDataFragment } from "@/gql/graphql";
import { isCTAElementAnimatedStylesProps, type CTAElementLayoutProps } from "./displayTemplates";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { AnimatedCTAElement } from "./_animated";
import { DefaultCTAElement } from "./_default";

/**
 * Call To Action
 * Basic call-to-action element, typically rendered as a button
 */
export const CTAElementElement : CmsComponent<CTAElementDataFragment, CTAElementLayoutProps> = ({ contentLink, data, layoutProps }) => {
    if (isCTAElementAnimatedStylesProps(layoutProps)) {
        return <CmsEditable as={ AnimatedCTAElement } data={ data } layoutProps={ layoutProps } cmsId={ contentLink.key } />
    }
    return <CmsEditable as={ DefaultCTAElement } data={ data } layoutProps={layoutProps} cmsId={ contentLink.key } />
}
CTAElementElement.displayName = "Call To Action (Element/CTAElement)"
CTAElementElement.getDataFragment = () => ['CTAElementData', CTAElementDataFragmentDoc]

export default CTAElementElement