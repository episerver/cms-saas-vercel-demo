import { Fragment } from "react";
import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { gql, type Schema as GraphQL } from "@gql";
import dynamic from "next/dynamic";
import "server-only";
import { CmsContentArea, getServerContext } from "@remkoj/optimizely-cms-react/rsc";

const CarouselBlockComponent = dynamic(() => import("./carousel-block"), { ssr: true });

export const CarouselBlock: CmsComponent<GraphQL.CarouselBlockDataFragment> = async ({ data, contentLink }) => {
  const { inEditMode } = getServerContext()
  const items = data?.CarouselItemsContentArea || [];

  return (
    <CarouselBlockComponent
      data={{ ...data, itemCount: items.length }}
      inEditMode={inEditMode}
      contentLink={contentLink}
    >
      <CmsContentArea
        as={ Fragment }
        itemWrapper={{ 
          as: "div",
          style: {
            flex: `0 0 var(--item-width)`,
            width: `var(--item-width)`,
            display: "inline-block",
            paddingLeft: "15px",
            paddingRight: "15px"
          }
        }}
        items={items}
      />
    </CarouselBlockComponent>
  );
};

CarouselBlock.displayName = "Carousel Block";
CarouselBlock.getDataFragment = () => ["CarouselBlockData", CarouselBlockData];
export default CarouselBlock;

const CarouselBlockData = gql(`fragment CarouselBlockData on CarouselBlock {
    CarouselItemsContentArea {
        ...IContentListItem
    }
}`);