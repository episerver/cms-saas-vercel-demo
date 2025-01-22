import "server-only";
// Next.JS
import { type Metadata } from "next";

// Optimizely Graph types and SDK
import { type Locales, type BlogPostPageDataFragment, BlogPostPageDataFragmentDoc } from "@gql/graphql";
import { getSdk } from "@gql/client";

// Implementation components
import ArticleListElementElement from "../../component/ArticleListElement";
import Image from "@/components/shared/cms_image";
import { getLinkData, linkDataToUrl } from "@/lib/urls";
import { toValidOpenGraphType } from "@/lib/opengraph";

// SDK Components
import { type OptimizelyNextPage } from "@remkoj/optimizely-cms-nextjs";
import { RichText, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { localeToGraphLocale } from "@remkoj/optimizely-graph-client";

export const BlogPostPage: OptimizelyNextPage<BlogPostPageDataFragment> = async ({
  contentLink,
  data: { blogTitle: title, blogImage: image, blogBody: description, blogAuthor: author, blogSubtitle: subtitle, blogTopics: topics }
}) => {
  
  return (
    <>
      <div className="outer-padding">
        { image && <div className="relative col-span-12 mt-8 md:mt-16 lg:mt-32 mb-8 lg:mb-24 mx-auto aspect-[1/1] md:aspect-[2/1] lg:aspect-[16/5] flex items-end">
          <CmsEditable cmsFieldName="BlogPostPromoImage" as={ Image } className="top-0 left-0 rounded-[2rem] aspect-[1/1] md:aspect-[2/1] lg:aspect-[16/5] object-cover absolute -z-50" src={image} alt="" width={1920} height={1080} />
          <div className="container px-6 mx-auto bg-[rgba(248,248,252,0.75)] dark:bg-[rgba(16,20,29,0.75)] rounded-t-[2rem]">
            <CmsEditable cmsFieldName="Heading" as="h1" className="mt-6 mb-6 text-4xl font-extrabold">{ title ?? "" }</CmsEditable>
          </div>
        </div> }
        <section className="mx-auto w-full max-w-3xl">
            { !image && <CmsEditable cmsFieldName="Heading" as="h1" className="mb-6 text-3xl">{ title ?? "" }</CmsEditable> }
            <CmsEditable cmsFieldName="ArticleAuthor" as="p" className="text-2xl text-people-eater my-6">{ author ?? "" }</CmsEditable>
            <CmsEditable cmsFieldName="ArticleSubHeading" as="p" className="text-3xl leading-7 mt-6 mb-2">{ subtitle ?? "" }</CmsEditable>
            <CmsEditable cmsFieldName="Topic" as="p" className="text-xs text-independence mb-8 lg:mb-20">Topics: { topics?.filter(x=>x).join(", ")}</CmsEditable>
            <RichText cmsFieldName="BlogPostBody" text={ description?.json } className="prose max-w-none prose-img:rounded-[2rem] prose-img:p-4 prose-img:border-2"/>
            <div className="col-span-12 lg:col-span-10 lg:col-start-2 mx-auto border-t-2 mt-32 mb-20"></div>
        </section>
      </div>

      <div className="outer-padding">
        <div>
          <div>More picks just for you</div>
          <div>Want to keep reading?</div>
        </div>
        <ArticleListElementElement contentLink={{key: null}} inEditMode={false} data={{
          articleListCount: 3,
          topics,
          excludeKeys: contentLink.key ? [contentLink.key] : []
        }} />
      </div>
      
      <div className="col-span-12 lg:col-span-10 lg:col-start-2 mx-auto mt-8"></div>
    </>
  );
};

BlogPostPage.getDataFragment = () => ["BlogPostPageData", BlogPostPageDataFragmentDoc];
BlogPostPage.getMetaData = async (contentLink, locale, client) => {
  const sdk = getSdk(client)
  const result = await sdk.getBlogPostPageMetaData({ key: contentLink.key, version: contentLink.version, locale: locale ? localeToGraphLocale(locale) as Locales : null })
  const blogPost = (result.BlogPostPage?.pages || []).filter(isNotNullOrUndefined).at(0)
  if (!blogPost)
    return {}

  const canonicalUrl = new URL(blogPost?.cms?.url?.default ?? '/', blogPost?.cms?.url?.base ?? 'http://localhost:3000')
  
  const meta : WithPropertySet<Metadata, 'openGraph'> = {
    title: blogPost.seo?.title || blogPost.title || blogPost.cms?.title,
    description: blogPost.seo?.description,
    keywords: blogPost.seo?.keywords?.filter(isNotNullOrUndefined),
    metadataBase: tryToUrl(blogPost?.cms?.url?.base),
    openGraph: {
      type: toValidOpenGraphType(blogPost.seo?.type),
      title: blogPost.seo?.title || blogPost.title || blogPost.cms?.title || undefined,
      description: blogPost.seo?.description || undefined,
      publishedTime: blogPost.cms?.published || undefined,
      url: canonicalUrl.href,
    },
    authors: blogPost.author ? [{ name: blogPost.author }] : [],
    other: {
      "idio:content-type": "Blog post"
    }
  }
  const pageImage = linkDataToUrl(getLinkData(blogPost.seo?.image)) ?? linkDataToUrl(getLinkData(blogPost.image))
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

function tryToUrl(toConvert: string | null | undefined)
{
    if (!toConvert)
        return undefined
    try {
        return new URL(toConvert)
    } catch {
        return undefined
    }
}

export default BlogPostPage;
