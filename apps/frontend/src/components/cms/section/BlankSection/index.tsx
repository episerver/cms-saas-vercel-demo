import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { BlankSectionDataFragmentDoc, type BlankSectionDataFragment } from "@/gql/graphql";
import { SectionLayoutProps } from "../styles/displayTemplates";
import DefaultGrid from "../styles/DefaultGrid";

/**
 * Blank Section
 * A section without a predefined layout.
 */
export const BlankSectionSection : CmsComponent<BlankSectionDataFragment, SectionLayoutProps> = ({ layoutProps, children }) => {
    return <DefaultGrid data={{}} layoutProps={ layoutProps }>{ children }</DefaultGrid>
}
BlankSectionSection.displayName = "Blank Section (Section/BlankSection)"
BlankSectionSection.getDataFragment = () => ['BlankSectionData', BlankSectionDataFragmentDoc]

export default BlankSectionSection