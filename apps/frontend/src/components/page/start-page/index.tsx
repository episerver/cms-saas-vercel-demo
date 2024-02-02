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

StartPage.getMetaData = async (contentLink, locale, client) => {
  const variables = { ...contentLink, locale: locale as GraphQL.Locales };
  const result =
    ((
      await client.query({
        query: GetStartPageMetaData,
        variables,
      })
    ).data?.getStartPageMetaData?.pages ?? [])[0] ?? undefined;

  if (!result) return {};

  const title = result.head?.title || result.name || undefined;
  const description = result.head?.description || undefined;
  const metadata: Metadata = {};

  if (title) {
    metadata.title = title;
    metadata.openGraph = {
      ...metadata.openGraph,
      title: title,
    };
  }
  if (description) {
    metadata.description = description;
    metadata.openGraph = {
      ...metadata.openGraph,
      description: description,
    };
  }

  return metadata;
};

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

export const GetStartPageMetaData = gql(/* GraphQL */ `
  query getStartPageMetaData(
    $id: Int
    $workId: Int
    $guidValue: String
    $locale: [Locales!]
    $isCommonDraft: Boolean
  ) {
    getStartPagedata: StartPage(
      where: {
        ContentLink: {
          Id: { eq: $id }
          WorkId: { eq: $workId }
          GuidValue: { eq: $guidValue }
        }
        IsCommonDraft: { eq: $isCommonDraft }
      }
      locale: $locale
    ) {
      count: total
      items {
        name: Name
      }
    }
  }
`);
