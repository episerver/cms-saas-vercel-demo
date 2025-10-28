import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { OptiFormsResetElementDataFragmentDoc, type OptiFormsResetElementDataFragment } from "@/gql/graphql";
import { ResetButton } from "@/components/shared/forms";

/**
 * Reset button
 * ---
 * 
 */
export const OptiFormsResetElementComponent : CmsComponent<OptiFormsResetElementDataFragment> = ({ data, editProps }) => {
    return <CmsEditable className="py-1" forwardCtx={false} {...editProps}>
        <ResetButton title={data.Tooltip ?? ""}>{data.Label ?? "Reset"}</ResetButton>
    </CmsEditable>
}
OptiFormsResetElementComponent.displayName = "Reset button (_component/OptiFormsResetElement)"
OptiFormsResetElementComponent.getDataFragment = () => ['OptiFormsResetElementData', OptiFormsResetElementDataFragmentDoc]

export default OptiFormsResetElementComponent