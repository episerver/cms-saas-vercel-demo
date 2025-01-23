'use server'
import { CmsComponent } from "@remkoj/optimizely-cms-react";
import {
  ArticleListElementDataFragmentDoc,
  type ArticleListElementDataFragment,
} from "@/gql/graphql";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/sdk";
import {
  type InputMaybe,
  type Locales,
  IContentDataFragmentDoc,
  IContentInfoFragmentDoc,
} from "@/gql/graphql";
import { getFragmentData } from "@gql/fragment-masking";
import { getLinkData, linkDataToUrl } from "@/lib/urls";
import { urlToRelative } from "@/components/shared/cms_link";
import Link from "next/link";
import Card from "@/components/shared/card";
import { CmsImage } from "@/components/shared/cms_image";
import { DateDisplay } from "@/components/shared/date";

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
}) => {
  const sdk = getSdk();
  const articles = (
    (
      await sdk
        .getArticleListElementItems({
          count: Math.ceil((articleListCount || 3) * (seed || 2)),
          locale: locale as InputMaybe<Locales> | undefined,
          topics,
          excludeKeys,
        })
        .catch((e) => {
          console.error(`Error fetching articles: ${e?.message ?? ""}`, e);
          return;
        })
    )?.BlogPostPage?.items ?? []
  ).filter(isNotNullOrUndefined);
  const byLabel = await getLabel("By", { locale, fallback: "By" });
  const andLabel = await getLabel("and", { locale, fallback: "and" });

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

  //console.log(`showing ${ shownArticles.length } from ${ articles.length } fetched - asked for ${ articleListCount } articles`);

  return (
    <CmsEditable
      as="div"
      cmsId={key}
      className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative pb-12 w-full"
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

        const articleMeta = getFragmentData(
          IContentInfoFragmentDoc,
          getFragmentData(IContentDataFragmentDoc, article)?._metadata,
        );
        const articleUrlData = articleMeta?.url;
        const articleUrl = articleUrlData
          ? linkDataToUrl(getLinkData(articleUrlData))?.pathname
          : undefined;

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
                  src={article.blogImage}
                  width={620}
                  height={430}
                  className="w-full rounded-[20px]"
                  alt={article.blogTitle ?? ""}
                />
                <div className="flex justify-between mb-[16px]">
                  <p className="text-[12px] text-pale-sky my-0">
                    {byLabel} {authors ? authors : "Mosey Bank"}
                  </p>
                  <p className="text-[12px] text-pale-sky my-0">
                    <DateDisplay
                      value={article.articleMeta?.published ?? null}
                    />
                  </p>
                </div>
                <h3 className="my-0 mt-[16px]">{article?.blogTitle ?? ""}</h3>
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
