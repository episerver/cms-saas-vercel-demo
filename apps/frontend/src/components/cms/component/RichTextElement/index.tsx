import { RichText, CmsEditable, getServerContext, extractSettings, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { RichTextElementDataFragmentDoc, type RichTextElementDataFragment } from "@/gql/graphql";
import { RichTextElementLayoutProps } from "./displayTemplates";

type PropsMap = Required<ReturnType<typeof extractSettings<RichTextElementLayoutProps>>>
type ValueMap<K extends keyof PropsMap, DT = any> = {
    [PropValue in PropsMap[K]]: DT
}

const WidthMap : ValueMap<"width", string> = {
    full: "prose max-w-none",
    default: "prose mx-auto",
    defaultLeft: "prose mr-auto",
    defaultRight: "prose ml-auto"
}

/**
 * Rich Text
 * Add a text to your experience
 */
export const RichTextElementElement : CmsComponent<RichTextElementDataFragment, RichTextElementLayoutProps> = ({ data, layoutProps, contentLink }) => {
    const { factory } = getServerContext()
    const {
        width = "full"
    } = extractSettings(layoutProps)

    const cssClassName = WidthMap[width]

    return (
        <CmsEditable as={ RichText } cmsId={ contentLink.key } text={ data.text?.json } factory={ factory } className={ cssClassName } />
    )
}
RichTextElementElement.displayName = "Rich Text (Element/RichTextElement)"
RichTextElementElement.getDataFragment = () => ['RichTextElementData', RichTextElementDataFragmentDoc]

export default RichTextElementElement