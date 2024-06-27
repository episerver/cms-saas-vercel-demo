import type { CmsComponent } from "@remkoj/optimizely-cms-react";
import type * as GraphQL from "@gql/graphql";
import { gql } from "@gql/gql";
import dynamic from "next/dynamic";
import "server-only";
import ContainerBlock from "../container-block";
import getArticles from "@/lib/api/articles";

export type BlogListingComponentType =
  CmsComponent<GraphQL.BlogListingBlockDataFragment>;

const BlogListingBlockComponent = dynamic(
  () => import("./blog-listing-block"),
  { ssr: true }
);

export const BlogListingBlock: CmsComponent<
  GraphQL.BlogListingBlockDataFragment
> = async ({ data: { selectedPageSize, showFilters }, contentLink }) => {
  const locale = contentLink.locale ?? 'en';
  const articles = await getArticles(locale, {
    page: 1,
    count: selectedPageSize ?? 12,
  });

  return (
    <>
      <ContainerBlock
        contentLink={contentLink}
        data={{ columns: 1 }}
      >
        {articles && (
          <BlogListingBlockComponent
            initialData={articles}
            selectedPageSize={selectedPageSize ?? 12}
            showFilters={showFilters ?? false}
            locale={locale}
          />
        )}
      </ContainerBlock>
    </>
  );
};

BlogListingBlock.displayName = "Blog Listing Block";
BlogListingBlock.getDataFragment = () => [
  "BlogListingBlockData",
  BlogListingBlockData,
];
export default BlogListingBlock;

const BlogListingBlockData =
  gql(`fragment BlogListingBlockData on BlogListingBlock {
  _metadata {
    name: displayName
  }
  showFilters: BlogListingShowFilters
  selectedPageSize: BlogListingItemCount
}`);
