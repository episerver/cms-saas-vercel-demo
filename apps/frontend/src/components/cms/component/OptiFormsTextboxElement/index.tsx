import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { OptiFormsTextboxElementDataFragmentDoc, type OptiFormsTextboxElementDataFragment } from "@/gql/graphql";
import { Textbox } from "@/components/shared/forms";
import { HTMLInputTypeAttribute, useId, useMemo } from "react";
import slugify from "@sindresorhus/slugify";
import { tryParseJson } from "@/lib/utils";
import { Validators } from "@/components/shared/forms"

/**
 * Textbox
 * ---
 * 
 */
export const OptiFormsTextboxElementComponent : CmsComponent<OptiFormsTextboxElementDataFragment> = ({ data, editProps }) => {
    const fieldName = slugify(data?.Label ?? 'unnamed-field', { separator: '_' })
    const fieldId = useId()
    const { validatorConfig, inputBoxType, isRequired } = useMemo(() => { 
        const parsedValidatorConfig = tryParseJson(data.Validators) ?? []
        const validatorConfig : Validators.ValidatorConfig[] = Array.isArray(parsedValidatorConfig) ? parsedValidatorConfig : []
        const inputBoxType : HTMLInputTypeAttribute = validatorConfig.some((x: any) => x.type === "emailvalidator") ? 'email' : 'text'
        const isRequired : true | undefined = validatorConfig.some((x: any) => x.type === "requiredvalidator") ? true : undefined
        return { validatorConfig, inputBoxType, isRequired }
    }, [data.Validators])
    
    return <CmsEditable className="w-full flex flex-col items-start gap-1" {...editProps}>
        <Textbox className="w-92 max-w-[calc(100%-(var(--spacing)*4))] " id={fieldId+fieldName} required={isRequired} name={fieldName} type={ inputBoxType } value={data.PredefinedValue??undefined} title={data.Tooltip??undefined} placeholder={data.Placeholder??undefined} autoComplete={data.AutoComplete??undefined} validatorConfig={validatorConfig} label={data.Label}/>
    </CmsEditable>
}
OptiFormsTextboxElementComponent.displayName = "Textbox (_component/OptiFormsTextboxElement)"
OptiFormsTextboxElementComponent.getDataFragment = () => ['OptiFormsTextboxElementData', OptiFormsTextboxElementDataFragmentDoc]

export default OptiFormsTextboxElementComponent