import type { CmsComponent } from "@remkoj/optimizely-cms-react";
import type * as GraphQL from "@gql/graphql";
import { gql } from "@gql/index";
import ClientSide from "./client";

export type OdpEmbedBlockType = CmsComponent<GraphQL.OdpEmbedBlockDataFragment>;

export const OdpEmbedBlock: OdpEmbedBlockType = ({ data, inEditMode }) => {
  const contentId = data.ContentId || undefined;

  if (!contentId)
    return (
      <div
        className="odp-embed-block empty-odp-embed-block"
      ></div>
    );
  return (
    <ClientSide
      inEditMode={inEditMode ? true : false}
      contentId={contentId}
      className="odp-embed-block w-full overflow-hidden rounded-[40px]"
    />
  );
};
OdpEmbedBlock.getDataFragment = () => ["OdpEmbedBlockData", OdpEmbedBlockData];
OdpEmbedBlock.displayName = "Optimizely Data Platform Embed";

export default OdpEmbedBlock;

const OdpEmbedBlockData = gql(/* GraphQL */ `
  fragment OdpEmbedBlockData on OdpEmbedBlock {
    ContentId
  }
`);
