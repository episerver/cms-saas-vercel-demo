'use server'
import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { OptiFormsContainerDataDataFragmentDoc, type OptiFormsContainerDataDataFragment } from "@/gql/graphql";
import { ApplicationForm } from "@/components/shared/forms";

/**
 * Form Container
 * ---
 * A structured block to manage form elements on a page.
 */
export const OptiFormsContainerDataSection : CmsComponent<OptiFormsContainerDataDataFragment> = async ({ data: { Title, Description, ...formProps }, editProps, children, contentLink, ctx }) => {
    
    const safeFormProps = Object.getOwnPropertyNames(formProps ?? {}).reduce<object>((p, propName) => {
        if (!propName.startsWith("_"))
            p[propName] = formProps[propName]
        return p
    }, {})
    return <CmsEditable className="container px-2 mx-auto" forwardCtx={false} ctx={ctx} {...editProps}>
        { Title && <h2 className="font-bold text-2xl">{ Title }</h2> }
        { Description && <p>{Description}</p> }
        <ApplicationForm ContentKey={editProps?.cmsId || contentLink.key} FormTitle={Title} { ...safeFormProps }>
            { children }
        </ApplicationForm>
    </CmsEditable>
}
OptiFormsContainerDataSection.displayName = "Form Container (_section/OptiFormsContainerData)"
OptiFormsContainerDataSection.getDataFragment = () => ['OptiFormsContainerDataData', OptiFormsContainerDataDataFragmentDoc]

export default OptiFormsContainerDataSection