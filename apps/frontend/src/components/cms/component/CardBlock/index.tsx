import type { CmsComponent } from "@remkoj/optimizely-cms-react";
import { type CardBlockDataFragment, CardBlockDataFragmentDoc} from "@gql/graphql";
import dynamic from "next/dynamic";
import "server-only";

const CardBlockComponent = dynamic(() => import("./card-block"), { ssr: true });

export const CardBlock: CmsComponent<CardBlockDataFragment> = async ({
  data,
  inEditMode,
  contentLink,
}) => {
  return (
    <CardBlockComponent
      data={data}
      inEditMode={inEditMode}
      contentLink={contentLink}
    />
  );
};

CardBlock.displayName = "Card Block";
CardBlock.getDataFragment = () => ["CardBlockData", CardBlockDataFragmentDoc];
export default CardBlock;
