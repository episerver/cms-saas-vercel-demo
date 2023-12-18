import type { CmsComponent } from '@remkoj/optimizely-dxp-react'
import type * as GraphQL from '@gql/graphql'
import { gql } from '@gql/index'
import './text-block.css'

export type TextBlockComponentType = CmsComponent<GraphQL.TextBlockDataFragment>

export const TextBlock : TextBlockComponentType = ({inEditMode, data}) => 
{
    const textData = data.MainBody ?? undefined
    const spacing = data.Spacing ?? 'none'
    if (!textData)
        return <></>

    const cssClasses : string[] = ["text-block rich-text"]
    switch (spacing) {
        case 'medium':
            cssClasses.push('p-4','md:p-6','lg:p-8')
            break
        case 'none':
        default:
            // No additional classes needed
            break
        
    }

    //<StructuredHtml data={textData.MainBody || "null"} locale={ contentLink.locale } />
    return <div data-epi-edit={ inEditMode ? 'MainBody' : undefined } className={cssClasses.join(' ')} dangerouslySetInnerHTML={{__html: textData}}></div>
}
TextBlock.getDataFragment = () => ['TextBlockData', TextBlockData]
TextBlock.displayName = "Text Block"
export default TextBlock

const TextBlockData = gql(/* GraphQL */`fragment TextBlockData on TextBlock {
    Spacing
    MainBody
}`)