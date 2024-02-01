import "server-only";
import type * as GraphQL from "@gql/graphql";
import { gql } from "@gql/index";
import {
  type LandingPageDataFragment,
  type ContentAreaItemDataFragment,
  Locales,
} from "@gql/graphql";
import type { OptimizelyNextPage } from "@remkoj/optimizely-dxp-nextjs";
import { Utils } from "@remkoj/optimizely-dxp-react";
import { CmsContentArea } from "@remkoj/optimizely-dxp-react-server";
import ClassMapper from "@/lib/displayMode";
import { Metadata } from "next";

export const StartPage: OptimizelyNextPage<LandingPageDataFragment> = ({
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
        items={topContentArea}
        locale={contentLink.locale}
        classMapper={ClassMapper}
        client={client}
        className="w-full"
      />
      <CmsContentArea
        inEditMode={inEditMode}
        fieldName="HomePageMainContentArea"
        items={mainContentArea}
        locale={contentLink.locale}
        classMapper={ClassMapper}
        client={client}
        className="max-w-screen-2xl mx-auto"
      />
    </div>
  );
};

StartPage.getDataFragment = () => ["StartPageData", StartPageData];

export default StartPage;

export const StartPageData = gql(/* GraphQL */ `
  fragment StartPageData on StartPage {
    HomePageHeroContentArea {
      ContentLink {
        Expanded {
          _deleted
          _modified
          _score
          _id
          Name
          RouteSegment
          Url
          Changed
          Created
          StartPublish
          StopPublish
          Saved
          Status
          IsCommonDraft
          RelativePath
          SiteId
          ContentType
        }
      }
    }
    HomePageMainContentArea {
      ContentLink {
        Expanded {
          _deleted
          _modified
          _score
          _id
          Name
          RouteSegment
          Url
          Changed
          Created
          StartPublish
          StopPublish
          Saved
          Status
          IsCommonDraft
          RelativePath
          SiteId
          ContentType
        }
      }
    }
  }
`);

/*
export const GetLandingPageMetaData =
  gql(`query getLandingPageMetaData($id: Int, $workId: Int, $guidValue: String, $locale: [Locales!], $isCommonDraft: Boolean) {
    getStartPageMetaData: StartPage(
        where: {
            ContentLink: { 
                Id: { eq: $id }, 
                WorkId: { eq: $workId }, 
                GuidValue: { eq: $guidValue } 
            }
            IsCommonDraft: { eq: $isCommonDraft }
        }
        locale: $locale
    ) {
        count: total
        pages: items {
            name: Name
            head: LandingPageSeo {
                title: MetaTitle
                description: MetaDescription
                image: SharingImage {
                    url: Url
                    data: Expanded {
                        url: Url
                        path: RelativePath
                    }
                }
                type: GraphType
            }
        }
    }
}`);
*/
