import type { CmsComponent } from '@remkoj/optimizely-dxp-react'
import type * as GraphQL from '@gql/graphql'
import { gql } from '@gql/gql'

import './highlight-block.css'

// Define the type
export type BlockComponentType = CmsComponent<GraphQL.HighlightBlockDataFragment>

// Construct the component, with support for lazy loading of the actual component and its assets
export const BlockComponent : BlockComponentType = ({ data, inEditMode }) => 
{
    if (!data) 
        return <div className="highlight-block"></div>

    const title = data.Title || ""
    const payoff = data.PayOffText || ""
    return <div className="highlight-block">
        <div className="hlb-title" data-epi-edit={ inEditMode ? "Title" : undefined}>{ title }</div>
        <hr />
        <div className="hlb-payoff" data-epi-edit={ inEditMode ? "PayOffText" : undefined} dangerouslySetInnerHTML={{__html: payoff }}></div>
    </div>
}

BlockComponent.getDataFragment = () => ['HighlightBlockData', BlockDataFragment]
BlockComponent.displayName = "Highlight Block"
export default BlockComponent

const BlockDataFragment = gql(/*graphql*/ `fragment HighlightBlockData on HighlightTextBlock
{
  Title
  PayOffText
}`)