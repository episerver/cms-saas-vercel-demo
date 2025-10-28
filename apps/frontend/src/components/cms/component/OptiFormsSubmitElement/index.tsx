import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { OptiFormsSubmitElementDataFragmentDoc, type OptiFormsSubmitElementDataFragment } from "@/gql/graphql";
import { SubmitButton } from "@/components/shared/forms";

/**
 * Submit button
 * ---
 * 
 */
export const OptiFormsSubmitElementComponent : CmsComponent<OptiFormsSubmitElementDataFragment> = ({ data, editProps }) => {
    return <CmsEditable className="py-1" forwardCtx={false} {...editProps}>
        <SubmitButton title={data.Tooltip ?? ""}>{data.Label ?? "Submit"}</SubmitButton>
    </CmsEditable>
}
OptiFormsSubmitElementComponent.displayName = "Submit button (_component/OptiFormsSubmitElement)"
OptiFormsSubmitElementComponent.getDataFragment = () => ['OptiFormsSubmitElementData', OptiFormsSubmitElementDataFragmentDoc]

export default OptiFormsSubmitElementComponent