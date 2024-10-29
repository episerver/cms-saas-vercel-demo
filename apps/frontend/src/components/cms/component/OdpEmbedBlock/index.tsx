import type { CmsComponent } from "@remkoj/optimizely-cms-react";
import { OdpEmbedBlockDataFragment, OdpEmbedBlockDataFragmentDoc } from "@gql/graphql";
import ClientSide from "./client";

export const OdpEmbedBlock: CmsComponent<OdpEmbedBlockDataFragment> = ({ data, inEditMode }) => {
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
OdpEmbedBlock.getDataFragment = () => ["OdpEmbedBlockData", OdpEmbedBlockDataFragmentDoc];
OdpEmbedBlock.displayName = "Optimizely Data Platform Embed";

export default OdpEmbedBlock;
