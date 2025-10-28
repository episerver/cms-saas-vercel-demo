'use server'
import { cache } from "react"
import { CmsComponent } from "@remkoj/optimizely-cms-react";
import {
  ArticleListElementDataFragmentDoc,
  ReferenceDataFragmentDoc,
  LinkDataFragmentDoc,
  type InputMaybe,
  type Locales,
  IContentDataFragmentDoc,
  type ArticleListElementDataFragment,
} from "@/gql/graphql";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { createClient, type IOptiGraphClient } from "@remkoj/optimizely-graph-client";
import { getSdk } from "@/gql/client";
import { getFragmentData } from "@gql/fragment-masking";
import { getLinkData, linkDataToUrl } from "@/lib/urls";
import Link from "next/link";
import CmsImage from "next/image";
import Card from "@/components/shared/card";
import { DateDisplay } from "@/components/shared/date";
import { getAssetAltText, getAssetUrl } from "@/cmp-dam";

const getArticleList = cache(async (articleListCount: number = 3, topics: Array<string> = [], excludeKeys: Array<string> = [], seed: number = 2, locale?: string, client?: IOptiGraphClient) => {
  const graphClient = client ?? createClient(undefined, undefined, {
          nextJsFetchDirectives: true,
          cache: true,
          queryCache: true,
      })
  const sdk = getSdk(graphClient);
  const articles = (
    (
      await sdk
        .getArticleListElementItems({
          count: 3,//Math.ceil((articleListCount || 3) * (seed || 2)),
          locale: locale as InputMaybe<Locales> | undefined,
          topics: Array.isArray(topics) && topics.length > 0 ? topics : null,
          excludeKeys,
        })
        .catch((e) => {
          console.error(`Error fetching articles: ${e?.message ?? ""}`, e);
          return;
        })
    )?.BlogPostPage?.items ?? []
  ).filter(isNotNullOrUndefined);
  let shownArticles = articles
  if (articles.length > (articleListCount || 3)) {
    const ids: number[] = [];
    for (let i = 0; i < (articleListCount || 3); i++) {
      let pickedId = Math.floor(Math.random() * articles.length);
      while (ids.includes(pickedId)) {
        pickedId = Math.floor(Math.random() * articles.length);
      }
      ids.push(pickedId)
    }
    shownArticles = articles.filter((article, id) => ids.includes(id))
  }
  return shownArticles
})

/**
 * Article List
 * Show an article listing
 */
export const ArticleListElementElement: CmsComponent<
  ArticleListElementDataFragment & {
    /**
     * Allow hiding of specific articles when rendering this element directly
     * within the application.
     */
    excludeKeys?: string[];
    /**
     * The multiplication factor of the ArticleListCount to apply some randomness
     * to the articles shown, for a more dynamic experience.
     *
     * Default: 2
     */
    seed?: number;
  }
> = async ({
  data: { articleListCount = 3, topics = [], excludeKeys = [], seed = 2 },
  contentLink: { key, locale },
  ctx,
  editProps
}) => {
  const shownArticles = await getArticleList(articleListCount ?? 3, Array.isArray(topics) ? topics.filter(isNotNullOrUndefined) : [], excludeKeys, seed, locale, ctx?.client)
  const byLabel = await getLabel("By", { locale, fallback: "By" });
  const andLabel = await getLabel("and", { locale, fallback: "and" });

  return (
    <CmsEditable
      as="div"
      className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative pb-12 w-full"
      {...editProps}
      ctx={ctx}
    >
      {shownArticles.map((article) => {
        let authors: string | undefined = undefined;
        const authorList: Array<string> = [article.blogAuthor].filter(
          isNotNullOrUndefined,
        );
        if (authorList.length > 1) {
          const lastAuthor = authorList.slice(-1);
          const firstAuthors = authorList.slice(0, -1);
          authors = `${firstAuthors.join(", ")} ${andLabel} ${lastAuthor[0]}`;
        } else {
          authors = authorList[0];
        }
        const iContentData = getFragmentData(IContentDataFragmentDoc, article)
        const articleMeta = iContentData._metadata
        const articleUrlData = articleMeta?.url;
        const articleUrl = articleUrlData
          ? linkDataToUrl(getLinkData(articleUrlData))?.pathname
          : undefined;

        
        const imageReference = getFragmentData(ReferenceDataFragmentDoc, article.blogImage)
        const imageId = imageReference?.key
        const imageUrl = getAssetUrl(imageReference) ?? '/assets/starburst-bg.jpg'
        //const imageWidth = externalImage?.Width ?? 620
        //const imageHeight = externalImage?.Height ?? 430
        const imageAlt = getAssetAltText(imageReference) ?? article.blogTitle ?? ""

        return (
          <div
            key={article.articleMeta?.key}
            className="article-list-item w-full h-full relative"
          >
            <Link href={articleUrl ?? "/"}>
              <Card
                cardColor="white"
                as="article"
                className="w-full h-full"
                withHoverEffect
              >
                <CmsImage
                  src={imageUrl}
                  width={620}
                  height={430}
                  className="w-full rounded-[20px]"
                  alt={imageAlt}
                  data-image-id={imageId}
                />
                <div className="flex justify-between mb-4">
                  <p className="text-[12px] text-pale-sky my-0">
                    {byLabel} {authors ? authors : "Mosey Bank"}
                  </p>
                  <p className="text-[12px] text-pale-sky my-0">
                    <DateDisplay
                      value={article.articleMeta?.published ?? null}
                    />
                  </p>
                </div>
                <h3 className="my-0 mt-4">{article?.blogTitle ?? ""}</h3>
              </Card>
            </Link>
          </div>
        );
      })}
    </CmsEditable>
  );
};
ArticleListElementElement.displayName =
  "Article List (Element/ArticleListElement)";
ArticleListElementElement.getDataFragment = () => [
  "ArticleListElementData",
  ArticleListElementDataFragmentDoc,
];

export default ArticleListElementElement;

function isNotNullOrUndefined<T>(input?: T | null | undefined): input is T {
  return input ? true : false;
}

async function getLabel(text: string, opts: any): Promise<string> {
  return text;
}
