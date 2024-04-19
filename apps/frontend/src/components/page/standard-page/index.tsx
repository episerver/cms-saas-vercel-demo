import "server-only";
import { gql } from "@gql/index";
import Image from "next/image";
import type { OptimizelyNextPage } from "@remkoj/optimizely-dxp-nextjs";
import ContainerBlock from "@/components/block/container-block";
import TextBlock from "@/components/block/text-block";
import BlogListingBlock from "@/components/block/blog-listing-block";
import { StandardPageDataFragment } from "@gql/graphql";

export const StandardPage: OptimizelyNextPage<StandardPageDataFragment> = ({
  contentLink,
  data,
  children,
  client,
  inEditMode,
}) => {
  const { title, image, description, subtitle } = data;

  return (
    <>
      <div className="outer-padding">
        <div className="container mx-auto grid grid-cols-12">
          {image && image.src && (
            <Image
              className="col-span-12 rounded-[40px] mt-16 lg:mt-32 mb-24 lg:mb-48 mx-auto"
              src={image.src}
              alt=""
              width={1920}
              height={1080}
            />
          )}
          <section className="col-span-12 lg:col-span-10 lg:col-start-2 mx-auto ">
            <div className="prose max-w-[960px] prose-h2:text-[36px] prose-h2:leading-[40px] prose-h2:mb-[24px] prose-h2:mt-[48px] prose-a:text-azure prose-a:font-bold prose-a:no-underline hover:prose-a:underline focus:prose-a:underline prose-img:rounded-[40px] prose-img:p-[20px] prose-img:border-2 dark:text-ghost-white">
              <h1
                className="mb-[24px] text-[48px]"
                dangerouslySetInnerHTML={{ __html: title ?? "" }}
              ></h1>
              <p
                className="text-[30px] leading-[36px] mt-[24px] mb-20"
                dangerouslySetInnerHTML={{ __html: subtitle ?? "" }}
              ></p>
              
              <div className="dark:!text-ghost-white [&>*]:dark:!text-ghost-white"
                dangerouslySetInnerHTML={{ __html: description ?? "" }}
              ></div>

              <div className="col-span-12 lg:col-span-10 lg:col-start-2 mx-auto border-t-2 my-64"></div>
            </div>
          </section>
        </div>
      </div>
      <ContainerBlock
        data={{ columns: 1, color: "none", marginBottom: "large" }}
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

StandardPage.getDataFragment = () => ["StandardPageData", StandardPageData];

export default StandardPage;

export const StandardPageData = gql(/* GraphQL */ `
  fragment StandardPageData on StandardPage {
    Name
    title: StandardPageHeading
    subtitle: StandardSubHeading
    image: StandardPromoImage {
      src: Url
    }
    description: MainBody
  }
`);
