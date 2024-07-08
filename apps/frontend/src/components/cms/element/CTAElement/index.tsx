import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { CTAElementDataFragmentDoc, type CTAElementDataFragment } from "@/gql/graphql";
import { CTAElementLayoutProps } from "./displayTemplates";

/**
 * Call To Action
 * Basic call-to-action element, typically rendered as a button
 */
export const CTAElementElement : CmsComponent<CTAElementDataFragment, CTAElementLayoutProps> = ({ data, layoutProps, children }) => {
    const componentName = 'Call To Action'
    const componentInfo = 'Basic call-to-action element, typically rendered as a button'
    return <div className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
        { children && <div className="mt-4 mx-4 flex flex-col">{ children }</div>}
    </div>
}
CTAElementElement.displayName = "Call To Action (Element/CTAElement)"
CTAElementElement.getDataFragment = () => ['CTAElementData', CTAElementDataFragmentDoc]

export default CTAElementElement