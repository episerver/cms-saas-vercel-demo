import type { CmsComponent } from "@remkoj/optimizely-cms-react";
import { type BlogListingBlockDataFragment, BlogListingBlockDataFragmentDoc } from "@gql/graphql";
import dynamic from "next/dynamic";
import "server-only";
import ContainerBlock from "../LayoutContainerBlock";
import getArticles from "@/lib/api/articles";

export type BlogListingComponentType =
  CmsComponent<BlogListingBlockDataFragment>;

const BlogListingBlockComponent = dynamic(
  () => import("./blog-listing-block"),
  { ssr: true }
);

export const BlogListingBlock: CmsComponent<
  Partial<BlogListingBlockDataFragment>
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
        data={{ columns: 1, backgroundImage: null, containerColor: null, gap: null, LayoutContentArea: null, marginBottom: null, marginTop: null, paddingBottom: null, paddingTop: null }}
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
BlogListingBlock.getDataFragment = () => [ "BlogListingBlockData", BlogListingBlockDataFragmentDoc,];
export default BlogListingBlock;
