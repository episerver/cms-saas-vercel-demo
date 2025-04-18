import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { ParagraphElementDataFragmentDoc, type ParagraphElementDataFragment } from "@/gql/graphql";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { RichText, extractSettings } from "@remkoj/optimizely-cms-react/rsc";
import { factory as defaultFactory } from "@/components/factory";
import { DefaultParagraphProps } from "./displayTemplates";

enum AlignClasses {
    left = " mr-auto ml-0",
    center = " mx-auto",
    right = " ml-auto mr-0"
}

/**
 * Paragraph
 * 
 */
export const ParagraphElementElement : CmsComponent<ParagraphElementDataFragment, DefaultParagraphProps> = ({ data: { text }, contentLink, layoutProps, ctx }) => {
    const { factory } = ctx || { factory: defaultFactory }
    const {
        placement = "left",
        transform = "default"
    } = extractSettings(layoutProps)

    const width = transform == "full" ? ' max-w-none' : ''
    const align = AlignClasses[placement]

    return <CmsEditable as={RichText} ctx={ ctx } cmsFieldName="text" text={ text?.json } forwardCtx="ctx" cmsId={ contentLink.key } className={`rich-text prose${ width }${ align }`}/>
}
ParagraphElementElement.displayName = "Paragraph (Element/ParagraphElement)"
ParagraphElementElement.getDataFragment = () => ['ParagraphElementData', ParagraphElementDataFragmentDoc]

export default ParagraphElementElement