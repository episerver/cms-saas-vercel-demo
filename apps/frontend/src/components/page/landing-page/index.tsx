import "server-only";
import { gql } from "@gql/index";
import type * as GraphQL from "@gql/graphql";
import { type ContentAreaItemDataFragment, Locales } from "@gql/graphql";
import type { OptimizelyNextPage } from "@remkoj/optimizely-dxp-nextjs";
import { Utils } from "@remkoj/optimizely-dxp-react";
import { CmsContentArea } from "@remkoj/optimizely-dxp-react-server";
import ClassMapper from "@/lib/displayMode";
import { Metadata } from "next";

export const LandingPage: OptimizelyNextPage<
  GraphQL.LandingPageDataFragment
> = ({ contentLink, data, children, client, inEditMode }) => {
  const TopContentArea: ContentAreaItemDataFragment[] =
    data.TopContentArea?.filter(Utils.isNotNullOrUndefined) ?? [];
  const MainContentArea: ContentAreaItemDataFragment[] =
    data.MainContentArea?.filter(Utils.isNotNullOrUndefined) ?? [];

  return (
    <div className="landing-page">
      <CmsContentArea
        inEditMode={inEditMode}
        fieldName="TopContentArea"
        items={TopContentArea}
        locale={contentLink.locale}
        classMapper={ClassMapper}
        client={client}
        className="w-full"
      />
      <CmsContentArea
        inEditMode={inEditMode}
        fieldName="MainContentArea"
        items={MainContentArea}
        locale={contentLink.locale}
        classMapper={ClassMapper}
        client={client}
        className="w-full"
      />
    </div>
  );
};

export default LandingPage;

export const LandingPageData = gql(/* GraphQL */ `
  fragment LandingPageData on LandingPage {
    TopContentArea {
      ...ContentAreaItemData
    }
    MainContentArea {
      ...ContentAreaItemData
    }
  }
`);
