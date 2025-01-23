import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { OdpEmbedBlockDataFragment, OdpEmbedBlockDataFragmentDoc } from "@gql/graphql";
import ClientSide from "./_client";

export const OdpEmbedBlock: CmsComponent<OdpEmbedBlockDataFragment> = ({ data, contentLink }) => {
  const contentId = data.ContentId || undefined;

  if (!contentId)
    return (
      <CmsEditable as="div" className="odp-embed-block empty-odp-embed-block" cmsId={ contentLink.key } />
    );
  return (
    <CmsEditable as={ClientSide}
//      cmsFieldName="ContentId"
      cmsId={ contentLink.key }
      contentId={contentId}
      className="odp-embed-block w-full overflow-hidden rounded-[40px]"
    />
  );
};
OdpEmbedBlock.getDataFragment = () => ["OdpEmbedBlockData", OdpEmbedBlockDataFragmentDoc];
OdpEmbedBlock.displayName = "Optimizely Data Platform Embed";

export default OdpEmbedBlock;
