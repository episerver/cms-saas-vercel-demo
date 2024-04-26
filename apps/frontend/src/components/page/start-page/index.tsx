import "server-only";
import { gql } from "@gql/index";
import { type StartPageDataFragment } from "@gql/graphql";
import type { OptimizelyNextPage } from "@remkoj/optimizely-cms-nextjs";
import { CmsContentArea } from "@remkoj/optimizely-cms-react/rsc";
import ClassMapper from "@/lib/displayMode";

export const StartPage: OptimizelyNextPage<StartPageDataFragment> = ({
  data : {HomePageHeroContentArea, HomePageMainContentArea },
}) => {
  return (
    <div className="landing-page">
      <CmsContentArea
        fieldName="HomePageHeroContentArea"
        items={HomePageHeroContentArea}
        classMapper={ClassMapper}
        className="w-full"
      />
      <CmsContentArea
        fieldName="HomePageMainContentArea"
        items={HomePageMainContentArea}
        classMapper={ClassMapper}
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
      ...BlockData
    }
    HomePageMainContentArea {
      ...BlockData
    }
  }
`);
