import type { CmsComponent } from "@remkoj/optimizely-dxp-react";
import type * as GraphQL from "@gql/graphql";
import { gql } from "@gql/gql";
import dynamic from "next/dynamic";
import "server-only";

export type CardBlockComponentType =
  CmsComponent<GraphQL.CardBlockDataFragment>;
const CardBlockComponent: CardBlockComponentType = dynamic(
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

const CardBlockData = gql(/* graphql */ `fragment CardBlockData on CardBlock {
  Name
  button: CardButton {
    className: ButtonClass
    children: ButtonText
    buttonType: ButtonType
    url: ButtonUrl
    buttonVariant: ButtonVariant
  }
  color: CardColor
  description: CardDescription
  heading: CardHeading
  icon: CardIcon {
    src: Url
  }
  image: CardImage {
    src: Url
  }
  subheading:CardSubHeading
  imageLayout: ImageLayout
}`);

/*imageLayout = "before",
    image,
    heading = "",
    subheading = "",
    description = "",
    color = "blue",
    button,
    icon,*/
