import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { type CarouselBlockDataFragment, CarouselBlockDataFragmentDoc } from "@gql/graphql"
import dynamic from "next/dynamic";
import "server-only";
import { CmsContentArea, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";

const CarouselBlockComponent = dynamic(() => import("./_carousel-block"), { ssr: true });

export const CarouselBlock: CmsComponent<CarouselBlockDataFragment> = async ({ data, contentLink, ctx }) => {
  const items = data?.CarouselItemsContentArea || [];

  return (
    <CmsEditable as={CarouselBlockComponent}
      cmsId={ contentLink.key }
      data={{ ...data, itemCount: items.length }}
      inEditMode={ctx?.inEditMode}
      contentLink={ contentLink }
      ctx={ctx}
      forwardCtx={false}
    >
      <CmsContentArea
        noWrapper
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
        ctx={ ctx }
      />
    </CmsEditable>
  );
};

CarouselBlock.displayName = "Carousel Block";
CarouselBlock.getDataFragment = () => ["CarouselBlockData", CarouselBlockDataFragmentDoc];
export default CarouselBlock;