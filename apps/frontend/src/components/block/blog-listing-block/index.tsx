import type { CmsComponent } from "@remkoj/optimizely-dxp-react";
import type * as GraphQL from "@gql/graphql";
import { gql } from "@gql/gql";
import dynamic from "next/dynamic";
import "server-only";
import ContainerBlock from "../container-block";
import { getFallbackLocale } from "@/lib/i18n";
import getArticles from "@/lib/api/articles";

export type BlogListingComponentType =
  CmsComponent<GraphQL.BlogListingBlockDataFragment>;

const BlogListingBlockComponent = dynamic(
  () => import("./blog-listing-block"),
  { ssr: true }
);

export const BlogListingBlock: CmsComponent<
  GraphQL.BlogListingBlockDataFragment
> = async ({ data, inEditMode, client, contentLink }) => {
  const { selectedPageSize, showFilters } = data;
  const locale = contentLink.locale ?? getFallbackLocale();
  const articles = await getArticles(locale, {
    page: 1,
    count: selectedPageSize ?? 12,
  });

  return (
    <>
      <ContainerBlock
        inEditMode={inEditMode}
        client={client}
        contentLink={contentLink}
        data={{ columns: 1 }}
      >
        {articles && (
          <BlogListingBlockComponent
            initialData={articles}
            selectedPageSize={selectedPageSize ?? 12}
            showFilters={showFilters}
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
  gql(/* graphql */ `fragment BlogListingBlockData on BlogListingBlock {
  Name
  showFilters: BlogListingShowFilters
  selectedPageSize: BlogListingItemCount
}`);
