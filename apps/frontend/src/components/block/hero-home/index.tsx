import type { CmsComponent } from "@remkoj/optimizely-dxp-react";
import type * as GraphQL from "@gql/graphql";
import { gql } from "@gql/gql";
import dynamic from "next/dynamic";
import "server-only";

export type HomeHeroBlockComponentType =
  CmsComponent<GraphQL.HomeHeroBlockDataFragment>;
const HomeHeroComponent: HomeHeroBlockComponentType = dynamic(
  () => import("./home-hero"),
  { ssr: true }
);

export const HomeHeroBlock: CmsComponent<
  GraphQL.HomeHeroBlockDataFragment
> = async ({ data, inEditMode, client, contentLink }) => {
  return (
    <HomeHeroComponent
      data={data}
      inEditMode={inEditMode}
      contentLink={contentLink}
    />
  );
};

HomeHeroBlock.displayName = "Home Hero";
HomeHeroBlock.getDataFragment = () => ["HomeHeroBlockData", HeroBlockData];
export default HomeHeroBlock;

const HeroBlockData =
  gql(/* graphql */ `fragment HomeHeroBlockData on HomePageHeroBlock
{
    Name
    heading: HomeHeroBlockHeading
    subheading: HomeHeroBlockSubHeading
    button: HomeHeroButtonBlock {
        className: ButtonClass
        children: ButtonText
        buttonType: ButtonType
        url: ButtonUrl
        buttonVariant: ButtonVariant
    }
  	leftImage:HomeHeroLeftImage{
      url: Url
      GuidValue
      Id
    }
    rightImage:HomeHeroRightImage{
      url: Url
      GuidValue
      Id
    }
}`);
