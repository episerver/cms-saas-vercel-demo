import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { BlankSectionDataFragmentDoc, type BlankSectionDataFragment } from "@/gql/graphql";
import { SectionLayoutProps } from "../styles/displayTemplates";

/**
 * Blank Section
 * A section without a predefined layout.
 */
export const BlankSectionSection : CmsComponent<BlankSectionDataFragment, SectionLayoutProps> = ({ data, layoutProps, children }) => {
    const componentName = 'Blank Section'
    const componentInfo = 'A section without a predefined layout.'
    return <div className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
        { children && <div className="mt-4 mx-4 flex flex-col">{ children }</div>}
    </div>
}
BlankSectionSection.displayName = "Blank Section (Section/BlankSection)"
BlankSectionSection.getDataFragment = () => ['BlankSectionData', BlankSectionDataFragmentDoc]

export default BlankSectionSection