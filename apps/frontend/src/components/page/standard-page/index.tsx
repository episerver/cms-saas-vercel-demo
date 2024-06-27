import "server-only";
import { type Metadata } from "next";

// Optimizely Graph
import { getSdk } from "@gql";
import { type Locales, type StandardPageDataFragment, StandardPageDataFragmentDoc } from "@gql/graphql";

// Optimizely SaaS CMS SDK
import { type OptimizelyNextPage } from "@remkoj/optimizely-cms-nextjs";
import { RichText } from "@remkoj/optimizely-cms-react/components";
import { CmsEditable, getServerContext } from "@remkoj/optimizely-cms-react/rsc";
import { localeToGraphLocale } from "@remkoj/optimizely-graph-client";

// Implementation Components
import Image from "@components/shared/cms_image";
import ContainerBlock from "@/components/block/container-block";
import TextBlock from "@/components/block/text-block";
import BlogListingBlock from "@/components/block/blog-listing-block";
import { getLinkData, linkDataToUrl } from "@/lib/urls";
import { toValidOpenGraphType } from "@/lib/opengraph";

export const StandardPage: OptimizelyNextPage<StandardPageDataFragment> = ({
  contentLink,
  data: { sptitle: title, spimage: image, spdescription: description, spsubtitle: subtitle }
}) => {
  const { factory } = getServerContext()
  return (
    <>
      <div className="outer-padding">
        <div className="container mx-auto grid grid-cols-12">
          {image && <CmsEditable cmsFieldName="StandardPromoImage" as={ Image } className="col-span-12 rounded-[40px] mt-16 lg:mt-32 mb-24 lg:mb-48 mx-auto" src={image} alt="" width={1920} height={1080} />}
          <section className="col-span-12 lg:col-span-10 lg:col-start-2 mx-auto ">
            <div className="prose max-w-[960px] prose-h2:text-[36px] prose-h2:leading-[40px] prose-h2:mb-[24px] prose-h2:mt-[48px] prose-a:text-azure prose-a:font-bold prose-a:no-underline hover:prose-a:underline focus:prose-a:underline prose-img:rounded-[40px] prose-img:p-[20px] prose-img:border-2 dark:text-ghost-white">
              <CmsEditable cmsFieldName="StandardPageHeading" as="h1" className="mb-[24px] text-[48px]">{ title ?? "" }</CmsEditable>
              <CmsEditable cmsFieldName="StandardSubHeading" as="p" className="text-[30px] leading-[36px] mt-[24px] mb-20">{ subtitle ?? "" }</CmsEditable>
              <CmsEditable cmsFieldName="MainBody" as={ RichText } className="dark:!text-ghost-white [&>*]:dark:!text-ghost-white" text={ description?.json } factory={ factory } />
              <div className="col-span-12 lg:col-span-10 lg:col-start-2 mx-auto border-t-2 my-64"></div>
            </div>
          </section>
        </div>
      </div>
      <ContainerBlock
        data={{ columns: 1, containerColor: "none", marginBottom: "large" }}
        contentLink={contentLink}
      >
        <TextBlock
          contentLink={contentLink}
          data={{
            center: true,
            overline: "More picks just for you",
            heading: "Want to keep reading?",
            headingSize: "medium",
          }}
        />
      </ContainerBlock>
      <BlogListingBlock
        contentLink={contentLink}
        data={{
          showFilters: false,
          selectedPageSize: 3,
        }}
      ></BlogListingBlock>
    </>
  );
};
StandardPage.getDataFragment = () => ["StandardPageData", StandardPageDataFragmentDoc];
StandardPage.getMetaData = async (contentLink, locale, client) => {
  const sdk = getSdk(client) // Get the SDK with authentication applied - if needed
  const result = await sdk.getStandardPageMetaData({ ...contentLink, locale: locale ? localeToGraphLocale(locale) as Locales : null })
  const matchingPosts = (result.StandardPage?.pages || []).filter(isNotNullOrUndefined)
  if (matchingPosts.length != 1)
    return {}
  const cmsManagedData = matchingPosts[0]
  const meta : WithPropertySet<Metadata, 'openGraph'> = {
    title: cmsManagedData.SeoSettings?.MetaTitle ?? cmsManagedData.StandardPageHeading ?? cmsManagedData._metadata?.displayName,
    description: cmsManagedData.SeoSettings?.MetaDescription,
    openGraph: {
      type: toValidOpenGraphType(cmsManagedData.SeoSettings?.GraphType, 'article'),
      title: cmsManagedData.SeoSettings?.MetaTitle ?? cmsManagedData.StandardPageHeading ?? cmsManagedData._metadata?.displayName ?? undefined,
      description: cmsManagedData.SeoSettings?.MetaDescription ?? undefined,
    }
  }
  const pageImage = linkDataToUrl(getLinkData(cmsManagedData.SeoSettings?.SharingImage)) ?? linkDataToUrl(getLinkData(cmsManagedData.StandardPromoImage))
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

export default StandardPage;
