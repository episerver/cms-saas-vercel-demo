import "server-only";
import { type CarouselBlockDataFragment, CarouselBlockDataFragmentDoc } from "@gql/graphql";
import dynamic from "next/dynamic";
import { CmsContentArea, CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";

const CarouselBlockComponent = dynamic(() => import("./_carousel-block"), { ssr: true });

export const CarouselBlock: CmsComponent<CarouselBlockDataFragment> = async ({ data, contentLink, ctx, editProps }) => {
  const items = data?.CarouselItemsContentArea || [];

  return (
    <CmsEditable as={CarouselBlockComponent}
      { ...editProps }
      ctx={ctx}
      data={{ ...data, itemCount: items.length }}
      contentLink={ contentLink }
      forwardCtx={ false }
    >
      <CmsContentArea
        fieldName="CarouselItemsContentArea"
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
        items={ items }
        ctx={ ctx }
      />
    </CmsEditable>
  );
};

CarouselBlock.displayName = "Carousel Block";
CarouselBlock.getDataFragment = () => ["CarouselBlockData", CarouselBlockDataFragmentDoc];
export default CarouselBlock;