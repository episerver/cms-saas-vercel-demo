import type { CmsComponent } from "@remkoj/optimizely-cms-react";
import type * as GraphQL from "@gql/graphql";
import { gql } from "@gql/gql";
import dynamic from "next/dynamic";
import "server-only";


const CardBlockComponent = dynamic(
  () => import("./card-block"),
  { ssr: true }
);

export const CardBlock: CmsComponent<GraphQL.CardBlockDataFragment> = async ({
  data,
  inEditMode,
  client,
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
CardBlock.getDataFragment = () => ["CardBlockData", CardBlockData];
export default CardBlock;

const CardBlockData = gql(`
fragment CardBlockData on CardBlock {
  button: CardButton {
    className: ButtonClass
    children: ButtonText
    buttonType: ButtonType
    url: ButtonUrl {
      ...LinkData
    }
    buttonVariant: ButtonVariant
  }
  color: CardColor
  description: CardDescription {
    structure
    html
  }
  heading: CardHeading
  icon: CardIcon {
    ...ReferenceData
  }
  image: CardImage {
    ...ReferenceData
  }
  subheading: CardSubHeading
  imageLayout: ImageLayout
}
`);
