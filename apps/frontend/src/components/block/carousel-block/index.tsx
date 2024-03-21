import { Utils, type CmsComponent, Errors } from "@remkoj/optimizely-dxp-react"
import createClient from "@remkoj/optimizely-graph-client/client"
import type * as GraphQL from "@gql/graphql";
import { gql } from "@gql/gql";
import dynamic from "next/dynamic";
import "server-only";
import { CmsContent, CmsContentAreaProps, } from "@remkoj/optimizely-dxp-react/rsc";

const CustomCmsContentArea = async ({
  items,
  locale,
  classMapper,
  className,
  inEditMode,
  fieldName,
  client,
  factory,
}: CmsContentAreaProps<"div","div">): Promise<JSX.Element> => {
  // Convert the items to a list of enriched content types
  const actualItems = items?.filter(Utils.isNotNullOrUndefined) || [];
  const gqlClient = client ?? createClient();
  let counter: number = 0;
  const componentData = await Promise.all(
    actualItems.map(async (item, idx): Promise<React.JSX.Element> => {
      // Prepare data from received content area format
      const contentLink = Utils.normalizeContentLinkWithLocale({
        ...item.item,
        locale: locale,
      });
      if (!contentLink)
        throw new Errors.InvalidContentLinkError({
          ...item.item,
          locale: locale,
        });
      const contentType = Utils.normalizeContentType(
        item.item?.data?.contentType
      );
      const fragmentData = item.item?.data || undefined;

      // Build output
      const componentKey = `ContentAreaItem-${++counter}-${
        contentLink.guidValue
      }-${contentLink.id}-${contentLink.workId}`;
      const className = `opti-content-area-item opti-content-area-item-${counter} ${
        classMapper
          ? classMapper(
              item.displayOption ?? "default",
              contentType ?? null,
              idx
            )
          : ""
      }`;
      const contentItem = await CmsContent({
        contentLink,
        contentType,
        fragmentData,
        client: gqlClient,
        factory,
        outputEditorWarning: inEditMode,
        contentTypePrefix: "Block",
      });

      return (
        <div
          key={componentKey}
          style={{
            flex: `0 0 var(--item-width)`,
            width: `var(--item-width)`,
            display: "inline-block",
            paddingLeft: "15px",
            paddingRight: "15px",
          }}
        >
          {contentItem}
        </div>
      );
    })
  );

  return <>{componentData}</>;
};

export type CarouselBlockComponentType = CmsComponent<
  GraphQL.CarouselBlockDataFragment & { itemCount: number }
>;

const CarouselBlockComponent: CarouselBlockComponentType = dynamic(
  () => import("./carousel-block"),
  { ssr: true }
);

export const CarouselBlock: CmsComponent<
  GraphQL.CarouselBlockDataFragment
> = async ({ data, inEditMode, client, contentLink }) => {
  const items = data?.CarouselItemsContentArea || [];

  return (
    <CarouselBlockComponent
      data={{ ...data, itemCount: items.length }}
      inEditMode={inEditMode}
      contentLink={contentLink}
    >
      <CustomCmsContentArea
        client={client}
        className={""}
        fieldName="CarouselItemsContentArea"
        inEditMode={inEditMode}
        locale={contentLink.locale}
        items={items}
      />
    </CarouselBlockComponent>
  );
};

CarouselBlock.displayName = "Carousel Block";
CarouselBlock.getDataFragment = () => ["CarouselBlockData", CarouselBlockData];
export default CarouselBlock;

const CarouselBlockData =
  gql(/* graphql */ `fragment CarouselBlockData on CarouselBlock {
    CarouselItemsContentArea {
        ...BlockContentAreaItemSearchData
    }
}`);
