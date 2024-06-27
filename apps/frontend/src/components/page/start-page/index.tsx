import "server-only";
import { type Metadata } from "next";

// Optimizely Graph
import { getSdk } from "@gql";
import { type Locales, type StartPageDataFragment, StartPageDataFragmentDoc } from "@gql/graphql";

// Optimizely SaaS CMS SDK
import { type OptimizelyNextPage } from "@remkoj/optimizely-cms-nextjs";
import { CmsContentArea } from "@remkoj/optimizely-cms-react/rsc";
import { localeToGraphLocale } from "@remkoj/optimizely-graph-client";

// Implementation Components
import { getLinkData, linkDataToUrl } from "@/lib/urls";
import { toValidOpenGraphType } from "@/lib/opengraph";

export const StartPage: OptimizelyNextPage<StartPageDataFragment> = ({
  data : {HomePageHeroContentArea, HomePageMainContentArea },
}) => {
  return (
    <div className="landing-page">
      <CmsContentArea fieldName="HomePageHeroContentArea" items={HomePageHeroContentArea} className="w-full" />
      <CmsContentArea fieldName="HomePageMainContentArea" items={HomePageMainContentArea} className="w-full" />
    </div>
  );
};
StartPage.getDataFragment = () => ["StartPageData", StartPageDataFragmentDoc];
StartPage.getMetaData = async (contentLink, locale, client) => {
  const sdk = getSdk(client) // Get the SDK with authentication applied - if needed
  const result = await sdk.getStartPageMetaData({ ...contentLink, locale: locale ? localeToGraphLocale(locale) as Locales : null })
  const matchingPosts = (result.StartPage?.pages || []).filter(isNotNullOrUndefined)
  if (matchingPosts.length != 1)
    return {}
  const cmsManagedData = matchingPosts[0]
  const meta : WithPropertySet<Metadata, 'openGraph'> = {
    title: cmsManagedData.SeoSettings?.MetaTitle ?? cmsManagedData._metadata?.displayName,
    description: cmsManagedData.SeoSettings?.MetaDescription,
    openGraph: {
      type: toValidOpenGraphType(cmsManagedData.SeoSettings?.GraphType, 'website'),
      title: cmsManagedData.SeoSettings?.MetaTitle ?? cmsManagedData._metadata?.displayName ?? undefined,
      description: cmsManagedData.SeoSettings?.MetaDescription ?? undefined,
    }
  }
  const pageImage = linkDataToUrl(getLinkData(cmsManagedData.SeoSettings?.SharingImage)) ?? linkDataToUrl(getLinkData(cmsManagedData.SiteImageLogo))
  if (pageImage) {
    meta.openGraph.images = [{
      url: pageImage
    }]
  }
  return meta
}

type WithPropertySet<T, K extends keyof T> = Omit<T, K> & { [P in K] -?: NonNullable<Required<T>[P]> }

function isNotNullOrUndefined<T>(toTest?: T | null | undefined): toTest is T
{
  return toTest ? true : false
}

export default StartPage;
