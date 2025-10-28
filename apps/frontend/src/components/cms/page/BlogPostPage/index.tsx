import "server-only";
// Next.JS
import { type Metadata } from "next";

// Optimizely Graph types and SDK
import {
  type Locales,
  type getBlogPostPageDataQuery,
  getBlogPostPageDataDocument,
} from "@gql/graphql";
import { getSdk } from "@gql/client";
import { type ContentLinkWithLocale, type InlineContentLinkWithLocale } from "@remkoj/optimizely-graph-client";

// Implementation components
import ArticleListElementElement from "../../component/ArticleListElement";
import * as ContinueReadingComponent from "../../component/ContinueReadingComponent";
import Image from "next/image";
import { getLinkData, linkDataToUrl } from "@/lib/urls";
import { toValidOpenGraphType } from "@/lib/opengraph";

// SDK Components
import { type OptimizelyNextPage } from "@remkoj/optimizely-cms-nextjs";
import { RichText, CmsEditable, CmsContentArea, type GenericContext } from "@remkoj/optimizely-cms-react/rsc";
import { localeToGraphLocale } from "@remkoj/optimizely-graph-client";
import { getAssetAltText, getAssetDimensions, getAssetUrl } from "@/cmp-dam";

export const BlogPostPage: OptimizelyNextPage<
  getBlogPostPageDataQuery
> = async ({
  contentLink,
  data: {
    Heading: title,
    BlogPostPromoImage: imageUrlFragement,
    BlogPostBody: description,
    ArticleAuthor: author,
    ArticleSubHeading: subtitle,
    Topic: topics,
    continueReading,
  },
  ctx,
  editProps
}) => {
  
  const hasOwnContinueReading = continueReading && continueReading.length ? true : false
  const sharedContinueReading = await ContinueReadingComponent.getSharedInstanceData(ctx)
  const imageId = imageUrlFragement?.key
  const imageUrl = getAssetUrl(imageUrlFragement) ?? '/assets/starburst-bg.jpg'
  const { width: imageWidth = 1920, height: imageHeight = 1080 } = getAssetDimensions(imageUrlFragement) ?? {}
  const imageAlt = getAssetAltText(imageUrlFragement) ?? ""

  return (
    <>
      <div className="outer-padding">
        {imageId && (
          <div className="relative col-span-12 mt-8 md:mt-16 lg:mt-32 mb-8 lg:mb-24 mx-auto aspect-square md:aspect-2/1 lg:aspect-16/5 flex items-end">
            <CmsEditable
              { ...editProps }
              cmsFieldName="BlogPostPromoImage"
              as={Image}
              className="top-0 left-0 rounded-4xl aspect-square md:aspect-2/1 lg:aspect-16/5 object-cover absolute -z-50"
              src={imageUrl}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              data-image-id={imageId}
            />
            <div className="container px-6 mx-auto bg-[rgba(248,248,252,0.75)] dark:bg-[rgba(16,20,29,0.75)] rounded-t-4xl">
              <CmsEditable
                {...editProps}
                cmsFieldName="Heading"
                as="h1"
                className="mt-6 mb-6 text-4xl font-extrabold"
              >
                {title ?? ""}
              </CmsEditable>
            </div>
          </div>
        )}
        <section className="mx-auto w-full max-w-3xl">
          {!imageId && (
            <CmsEditable
              {...editProps}
              cmsFieldName="Heading"
              as="h1"
              className="mb-6 text-3xl"
            >
              {title ?? ""}
            </CmsEditable>
          )}
          <CmsEditable
            {...editProps}
            cmsFieldName="ArticleAuthor"
            as="p"
            className="text-2xl text-people-eater my-6"
          >
            {author ?? ""}
          </CmsEditable>
          <CmsEditable
            {...editProps}
            cmsFieldName="ArticleSubHeading"
            as="p"
            className="text-3xl leading-7 mt-6 mb-2"
          >
            {subtitle ?? ""}
          </CmsEditable>
          <CmsEditable
            {...editProps}
            cmsFieldName="Topic"
            as="p"
            className="text-xs text-independence mb-8 lg:mb-20"
          >
            Topics: {topics?.filter((x) => x).join(", ")}
          </CmsEditable>
          <CmsEditable 
            {...editProps}
            as={RichText}
            cmsFieldName="BlogPostBody"
            text={description?.json}
            className="prose max-w-none prose-img:rounded-4xl prose-img:p-4 prose-img:border-2"
            forwardCtx="ctx"
          />
          <div className="col-span-12 lg:col-span-10 lg:col-start-2 mx-auto border-t-2 mt-32 mb-20"></div>
        </section>
      </div>

      {(ctx?.inEditMode || hasOwnContinueReading) && (
        <CmsContentArea fieldName="continueReading" items={ continueReading } className="outer-padding flex flex-col items-center" itemWrapper={{ className: "data-[component=ContentRecsElement]:w-full"}} ctx={ctx} />
      )}
      {!hasOwnContinueReading && sharedContinueReading && (
        <div className="outer-padding">
          { ctx?.inEditMode && <div className="bg-tangy text-vulcan-85 text-center p-2 mb-8 font-bold">This section will be hidden when the &ldquo;Continue Reading&rdquo; content area has at least one item.</div> }
          <ContinueReadingComponent.default {...sharedContinueReading} inEditMode={false} ctx={ctx} />
        </div>
      )}
      {!hasOwnContinueReading && !sharedContinueReading && (
        <FixedContinueReading contentLink={contentLink} topics={topics} ctx={ctx} />
      )}
      <div className="col-span-12 lg:col-span-10 lg:col-start-2 mx-auto mt-8"></div>
    </>
  );
};

function FixedContinueReading({ctx, contentLink, topics}: { ctx?: GenericContext, contentLink: ContentLinkWithLocale | InlineContentLinkWithLocale, topics?: (string | null)[] | null }) {
  return (
    <div className="outer-padding">
        <div className="w-full flex flex-col items-center gap-8 lg:gap-12 pb-8 lg:pb-12">
          <div className="uppercase">More picks just for you</div>
          <div className="text-6xl font-bold">Want to keep reading?</div>
        </div>
        <ArticleListElementElement
          contentLink={{ key: null }}
          inEditMode={false}
          data={{
            articleListCount: 3,
            topics,
            excludeKeys: contentLink.key ? [contentLink.key] : [],
          }}
          ctx={ctx}
        />
      </div>
  )
}
BlogPostPage.getDataQuery = () => getBlogPostPageDataDocument
//BlogPostPage.getDataFragment = () => [
//  "BlogPostPageData",
//  BlogPostPageDataFragmentDoc,
//];
BlogPostPage.getMetaData = async (contentLink, locale, client) => {
  const sdk = getSdk(client);
  const result = await sdk.getBlogPostPageMetaData({
    key: contentLink.key,
    version: contentLink.version,
    locale: locale ? (localeToGraphLocale(locale) as Locales) : null,
  });
  const blogPost = (result.BlogPostPage?.pages || [])
    .filter(isNotNullOrUndefined)
    .at(0);
  if (!blogPost) return {};

  const canonicalUrl = new URL(
    blogPost?.cms?.url?.default ?? "/",
    blogPost?.cms?.url?.base ?? "http://localhost:3000",
  );

  const topics = blogPost?.topics?.filter(isNotNullOrUndefined) || undefined

  const meta: WithPropertySet<Metadata, "openGraph" | "other"> = {
    title: blogPost.seo?.title || blogPost.title || blogPost.cms?.title,
    description: blogPost.seo?.description,
    keywords: blogPost.seo?.keywords?.filter(isNotNullOrUndefined),
    metadataBase: tryToUrl(blogPost?.cms?.url?.base),
    openGraph: {
      type: toValidOpenGraphType(blogPost.seo?.type),
      title:
        blogPost.seo?.title ||
        blogPost.title ||
        blogPost.cms?.title ||
        undefined,
      description: blogPost.seo?.description || undefined,
      publishedTime: blogPost.cms?.published || undefined,
      url: canonicalUrl.href,
    },
    authors: blogPost.author ? [{ name: blogPost.author }] : [],
    other: {
      "idio:content-type": "Blog post"
    },
  };
  const pageImage =
    linkDataToUrl(getLinkData(blogPost.seo?.image)) ??
    linkDataToUrl(getLinkData(blogPost.image));
  if (pageImage) {
    meta.openGraph.images = [
      {
        url: pageImage,
      },
    ];
  }
  if (topics) {
    meta.other["article:tag"] = topics
    meta.other["idio:topic"] = topics
  }
  return meta;
};

type WithPropertySet<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<Required<T>[P]>;
};

function isNotNullOrUndefined<T>(toTest?: T | null | undefined): toTest is T {
  return toTest ? true : false;
}

function tryToUrl(toConvert: string | null | undefined) {
  if (!toConvert) return undefined;
  try {
    return new URL(toConvert);
  } catch {
    return undefined;
  }
}

export default BlogPostPage;
