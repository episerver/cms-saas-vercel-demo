import "server-only";
import type * as GraphQL from "@gql/graphql";
import { gql } from "@gql/index";
import {
  type StartPageDataFragment,
  type ContentAreaItemDataFragment,
  Locales,
} from "@gql/graphql";
import type { OptimizelyNextPage } from "@remkoj/optimizely-dxp-nextjs";
import { Utils } from "@remkoj/optimizely-dxp-react";
import { CmsContentArea } from "@remkoj/optimizely-dxp-react-server";
import ClassMapper from "@/lib/displayMode";
import { Metadata } from "next";

export const StartPage: OptimizelyNextPage<StartPageDataFragment> = ({
  contentLink,
  data,
  children,
  client,
  inEditMode,
}) => {
  const HomePageHeroContentArea: ContentAreaItemDataFragment[] =
    data.HomePageHeroContentArea?.filter(Utils.isNotNullOrUndefined) ?? [];
  const HomePageMainContentArea: ContentAreaItemDataFragment[] =
    data.HomePageMainContentArea?.filter(Utils.isNotNullOrUndefined) ?? [];

  return (
    <div className="landing-page">
      <CmsContentArea
        inEditMode={inEditMode}
        fieldName="HomePageHeroContentArea"
        items={HomePageHeroContentArea}
        locale={contentLink.locale}
        classMapper={ClassMapper}
        client={client}
        className="w-full"
      />
      <CmsContentArea
        inEditMode={inEditMode}
        fieldName="HomePageMainContentArea"
        items={HomePageMainContentArea}
        locale={contentLink.locale}
        classMapper={ClassMapper}
        client={client}
        className="w-full"
      />
    </div>
  );
};

StartPage.getDataFragment = () => ["StartPageData", StartPageData];

export default StartPage;

export const StartPageData = gql(/* GraphQL */ `
  fragment StartPageData on StartPage {
    HomePageHeroContentArea {
      ...ContentAreaItemData
    }
    HomePageMainContentArea {
      ...ContentAreaItemData
    }
  }
`);
