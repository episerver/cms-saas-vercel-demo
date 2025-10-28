import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { BlankSectionDataFragmentDoc, type BlankSectionDataFragment } from "@/gql/graphql";
import { SectionLayoutProps } from "../styles/displayTemplates";
import DefaultGrid from "../styles/DefaultGrid";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";

/**
 * Blank Section
 * A section without a predefined layout.
 */
export const BlankSectionSection : CmsComponent<BlankSectionDataFragment, SectionLayoutProps> = ({ contentLink, layoutProps, children, ctx, editProps }) => {
    //console.log(contentLink,ctx?.inEditMode,ctx?.inPreviewMode, ctx?.editableContent, ctx?.editableContentIsExperience, editProps)
    return <CmsEditable 
        as={DefaultGrid} 
        data={{}} 
        layoutProps={ layoutProps } 
        contentLink={ contentLink } 
        {...editProps}>
            { children }
    </CmsEditable>
}
BlankSectionSection.displayName = "Blank Section (Section/BlankSection)"
BlankSectionSection.getDataFragment = () => ['BlankSectionData', BlankSectionDataFragmentDoc]

export default BlankSectionSection