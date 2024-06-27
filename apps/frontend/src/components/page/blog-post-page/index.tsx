import "server-only";
// Next.JS
import { type Metadata } from "next";

// Optimizely Graph types and SDK
import { type Locales, type BlogPostPageDataFragment, BlogPostPageDataFragmentDoc } from "@gql/graphql";
import { getSdk } from "@gql";

// Implementation components
import ContainerBlock from "@/components/block/container-block";
import TextBlock from "@/components/block/text-block";
import BlogListingBlock from "@/components/block/blog-listing-block";
import Image from "@/components/shared/cms_image";
import { getLinkData, linkDataToUrl } from "@/lib/urls";
import { toValidOpenGraphType } from "@/lib/opengraph";

// SDK Components
import { type OptimizelyNextPage } from "@remkoj/optimizely-cms-nextjs";
import { CmsEditable, getServerContext } from "@remkoj/optimizely-cms-react/rsc";
import { RichText } from "@remkoj/optimizely-cms-react/components";
import { localeToGraphLocale } from "@remkoj/optimizely-graph-client";

export const BlogPostPage: OptimizelyNextPage<BlogPostPageDataFragment> = ({
  contentLink,
  data: { blogTitle: title, blogImage: image, blogBody: description, blogAuthor: author, blogSubtitle: subtitle },
}) => {

  const { factory } = getServerContext()

  return (
    <>
      <div className="outer-padding">
        <div className="container mx-auto grid grid-cols-12">
          { image && <CmsEditable cmsFieldName="BlogPostPromoImage" as={ Image } className="col-span-12 rounded-[40px] mt-16 lg:mt-32 mb-24 lg:mb-48 mx-auto" src={image} alt="" width={1920} height={1080} /> }
          <section className="col-span-12 lg:col-span-10 lg:col-start-2 mx-auto">
            <div className="prose max-w-[960px] prose-h2:text-[36px] prose-h2:leading-[40px] prose-h2:mb-[24px] prose-h2:mt-[48px] prose-a:text-azure prose-a:font-bold prose-a:no-underline hover:prose-a:underline focus:prose-a:underline prose-img:rounded-[40px] prose-img:p-[20px] prose-img:border-2">
              <CmsEditable cmsFieldName="Heading" as="h1" className="mb-[24px] text-[48px]">{ title ?? "" }</CmsEditable>
              <CmsEditable cmsFieldName="ArticleAuthor" as="p" className="text-people-eater my-[24px] text-[24px]">{ author ?? "" }</CmsEditable>
              <CmsEditable cmsFieldName="ArticleSubHeading" as="p" className="text-[30px] leading-[36px] mt-[24px] mb-20">{ subtitle ?? "" }</CmsEditable>
              <CmsEditable cmsFieldName="BlogPostBody" as={ RichText } text={ description?.json } factory={ factory } />
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

BlogPostPage.getDataFragment = () => ["BlogPostPageData", BlogPostPageDataFragmentDoc];
BlogPostPage.getMetaData = async (contentLink, locale, client) => {
  const sdk = getSdk(client)
  const result = await sdk.getBlogPostPageMetaData({ ...contentLink, locale: locale ? localeToGraphLocale(locale) as Locales : null })
  const matchingPosts = (result.BlogPostPage?.pages || []).filter(isNotNullOrUndefined)
  if (matchingPosts.length != 1)
    return {}
  const cmsManagedData = matchingPosts[0]
  const meta : WithPropertySet<Metadata, 'openGraph'> = {
    title: cmsManagedData.SeoSettings?.MetaTitle ?? cmsManagedData.Heading ?? cmsManagedData._metadata?.displayName,
    description: cmsManagedData.SeoSettings?.MetaDescription,
    openGraph: {
      type: toValidOpenGraphType(cmsManagedData.SeoSettings?.GraphType, 'article'),
      title: cmsManagedData.SeoSettings?.MetaTitle ?? cmsManagedData.Heading ?? cmsManagedData._metadata?.displayName ?? undefined,
      description: cmsManagedData.SeoSettings?.MetaDescription ?? undefined,
    }
  }
  const pageImage = linkDataToUrl(getLinkData(cmsManagedData.SeoSettings?.SharingImage)) ?? linkDataToUrl(getLinkData(cmsManagedData.BlogPostPromoImage))
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

export default BlogPostPage;
