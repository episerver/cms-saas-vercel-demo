import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { OptiFormsChoiceElementDataFragmentDoc, type OptiFormsChoiceElementDataFragment } from "@/gql/graphql";
import { useId } from "react";
import slugify from "@sindresorhus/slugify"
import { OptionGroup, type OptionGroupOptions } from "@/components/shared/forms";
import { tryParseJson } from "@/lib/utils";

/**
 * Multiple or single choice
 * ---
 * 
 */
export const OptiFormsChoiceElementComponent : CmsComponent<OptiFormsChoiceElementDataFragment> = ({ data, editProps }) => {
    const fieldName = slugify(data?.Label ?? 'unnamed-field', { separator: '_' })
    const fieldId = useId()
    const options = tryParseJson<OptionGroupOptions>(data.Options) ?? []
    
    return <CmsEditable className="" {...editProps}>
        <div title={data.Tooltip ?? ""}>{ data.Label ?? 'Pick an option'}:</div>
        <OptionGroup options={options } id={ fieldId } name={fieldName} multiselect={data?.AllowMultiSelect ?? false} />
    </CmsEditable>
}
OptiFormsChoiceElementComponent.displayName = "Multiple or single choice (_component/OptiFormsChoiceElement)"
OptiFormsChoiceElementComponent.getDataFragment = () => ['OptiFormsChoiceElementData', OptiFormsChoiceElementDataFragmentDoc]

export default OptiFormsChoiceElementComponent