import "server-only";
import { type Metadata } from "next";

// Optimizely Graph
import { getSdk } from "@gql";
import { type Locales, type LandingPageDataFragment, LandingPageDataFragmentDoc } from "@gql/graphql";

// Optimizely SaaS CMS SDK
import { type OptimizelyNextPage } from "@remkoj/optimizely-cms-nextjs";
import { CmsContentArea } from "@remkoj/optimizely-cms-react/rsc";
import { localeToGraphLocale } from "@remkoj/optimizely-graph-client";

// Implementation Components
import { getLinkData, linkDataToUrl } from "@/lib/urls";
import { toValidOpenGraphType } from "@/lib/opengraph";

export const LandingPage: OptimizelyNextPage<LandingPageDataFragment> = ({ data: { TopContentArea, MainContentArea } }) => {

  return (
    <div className="landing-page">
      <CmsContentArea fieldName="TopContentArea" items={TopContentArea} className="w-full" />
      <CmsContentArea fieldName="MainContentArea" items={MainContentArea} className="w-full" />
    </div>
  );
};
LandingPage.getDataFragment = () => ['LandingPageData', LandingPageDataFragmentDoc]
LandingPage.getMetaData = async (contentLink, locale, client) => {
  const sdk = getSdk(client) // Get the SDK with authentication applied - if needed
  const result = await sdk.getLandingPageMetaData({ ...contentLink, locale: locale ? localeToGraphLocale(locale) as Locales : null })
  const matchingPosts = (result.LandingPage?.pages || []).filter(isNotNullOrUndefined)
  if (matchingPosts.length != 1)
    return {}
  const cmsManagedData = matchingPosts[0]
  const meta : WithPropertySet<Metadata, 'openGraph'> = {
    title: cmsManagedData.SeoSettings?.MetaTitle ?? cmsManagedData._metadata?.displayName,
    description: cmsManagedData.SeoSettings?.MetaDescription,
    openGraph: {
      title: cmsManagedData.SeoSettings?.MetaTitle ?? cmsManagedData._metadata?.displayName ?? undefined,
      description: cmsManagedData.SeoSettings?.MetaDescription ?? undefined,
    }
  }
  // Apply image if available
  const pageImage = linkDataToUrl(getLinkData(cmsManagedData.SeoSettings?.SharingImage))
  if (pageImage) {
    meta.openGraph.images = [{
      url: pageImage
    }]
  }
  // Apply type if available
  const openGraphType = toValidOpenGraphType(cmsManagedData.SeoSettings?.GraphType)
  if (openGraphType) {
    //@ts-expect-error The Type is only available when setting directly as it'll determine the subtype of the openGraph data
    meta.openGraph.type = openGraphType
  }
  return meta
}

type WithPropertySet<T, K extends keyof T> = Omit<T, K> & { [P in K] -?: NonNullable<Required<T>[P]> }

function isNotNullOrUndefined<T>(toTest?: T | null | undefined): toTest is T
{
  return toTest ? true : false
}
export default LandingPage
