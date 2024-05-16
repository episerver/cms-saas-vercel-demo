import type { CmsComponent } from "@remkoj/optimizely-cms-react";
import type * as GraphQL from "@gql/graphql";
import { gql } from "@gql/gql";
import dynamic from "next/dynamic";
import { getServerContext } from "@remkoj/optimizely-cms-react/rsc";


const HomeHeroComponent = dynamic(() => import("./home-hero"), { ssr: true });

export const HomeHeroBlock: CmsComponent<
  GraphQL.HomeHeroBlockDataFragment
> = async ({ data }) => {
  const { inEditMode } = getServerContext()
  return (
    <HomeHeroComponent
      data={data}
      inEditMode={inEditMode}
    />
  );
};

HomeHeroBlock.displayName = "Home Hero";
HomeHeroBlock.getDataFragment = () => ["HomeHeroBlockData", HeroBlockData];
export default HomeHeroBlock;

const HeroBlockData =
  gql(`fragment HomeHeroBlockData on HomePageHeroBlock {
  homeHeroHeading: HomeHeroBlockHeading
  homeHeroSubheading: HomeHeroBlockSubHeading
  homeHeroButton: HomeHeroButtonBlock {
    className: ButtonClass
    children: ButtonText
    buttonType: ButtonType
    url: ButtonUrl {
      ...LinkData
    }
    buttonVariant: ButtonVariant
  }
  leftImage: HomeHeroLeftImage {
    ...ReferenceData
  }
  rightImage: HomeHeroRightImage {
    ...ReferenceData
  }
}`);
