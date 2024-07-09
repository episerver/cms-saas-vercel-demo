import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { BlankSectionDataFragmentDoc, type BlankSectionDataFragment } from "@/gql/graphql";
import { SectionLayoutProps } from "../styles/displayTemplates";
import DefaultGrid from "../styles/DefaultGrid";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";

/**
 * Blank Section
 * A section without a predefined layout.
 */
export const BlankSectionSection : CmsComponent<BlankSectionDataFragment, SectionLayoutProps> = ({ contentLink, layoutProps, children }) => {
    return <CmsEditable as={DefaultGrid} data={{}} layoutProps={ layoutProps } cmsId={ contentLink.key }>{ children }</CmsEditable>
}
BlankSectionSection.displayName = "Blank Section (Section/BlankSection)"
BlankSectionSection.getDataFragment = () => ['BlankSectionData', BlankSectionDataFragmentDoc]

export default BlankSectionSection