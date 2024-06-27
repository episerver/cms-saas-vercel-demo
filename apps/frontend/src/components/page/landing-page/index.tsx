import "server-only";
import { gql } from "@gql/index";
import type * as GraphQL from "@gql/graphql";
import type { OptimizelyNextPage } from "@remkoj/optimizely-cms-nextjs";
import { CmsContentArea } from "@remkoj/optimizely-cms-react/rsc";

export const LandingPage: OptimizelyNextPage<GraphQL.LandingPageDataFragment> = ({ data: { TopContentArea, MainContentArea } }) => {

  return (
    <div className="landing-page">
      <CmsContentArea fieldName="TopContentArea" items={TopContentArea} className="w-full" />
      <CmsContentArea fieldName="MainContentArea" items={MainContentArea} className="w-full" />
    </div>
  );
};
LandingPage.getDataFragment = () => ['LandingPageData', LandingPageData]
export default LandingPage;

export const LandingPageData = gql(`
  fragment LandingPageData on LandingPage {
    TopContentArea {
      ...BlockData
    }
    MainContentArea {
      ...BlockData
    }
  }
`);
