import type { CmsComponent } from '@remkoj/optimizely-dxp-react'
import type * as GraphQL from '@gql/graphql'
import { gql } from '@gql/index'
import ClientSide from './client'

export type OdpEmbedBlockType = CmsComponent<GraphQL.OdpEmbedBlockDataFragment>

export const OdpEmbedBlock : OdpEmbedBlockType = ({ data }) => {
    const contentId = data.ContentId || undefined

    if (!contentId)
        return <div className="odp-embed-block empty-odp-embed-block"></div>
    return <ClientSide contentId={ contentId } className="odp-embed-block overflow-hidden rounded-xl" />
}
OdpEmbedBlock.getDataFragment = () => ['OdpEmbedBlockData', OdpEmbedBlockData]
OdpEmbedBlock.displayName = "Optimizely Data Platform Embed"

export default OdpEmbedBlock

const OdpEmbedBlockData = gql(/* GraphQL */`fragment OdpEmbedBlockData on OdpEmbedBlock {
    ContentId
}`)