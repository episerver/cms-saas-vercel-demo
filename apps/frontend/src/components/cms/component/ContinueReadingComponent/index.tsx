"use server";
import { cache } from "react";
import { createClient, type ContentLinkWithLocale } from "@remkoj/optimizely-graph-client";
import {
  CmsEditable,
  CmsContentArea,
  type CmsComponent,
  type GenericContext,
} from "@remkoj/optimizely-cms-react/rsc";
import {
  ContinueReadingComponentDataFragmentDoc,
  IContentDataFragmentDoc,
  IContentInfoFragmentDoc,
  type Locales,
  type ContinueReadingComponentDataFragment,
} from "@/gql/graphql";
import { getFragmentData } from "@gql/fragment-masking";
import { getSdk } from "@/gql/client";

/**
 * Continue Reading
 * A Continue Reading section, that can be loaded/shared across pages.
 */
export const ContinueReadingComponentComponent: CmsComponent<
  ContinueReadingComponentDataFragment
> = async ({
  data: { topline, heading, content },
  contentLink: { key: contentKey },
  ctx,
}) => {
  return (
    <CmsEditable as="div" cmsId={contentKey} className="w-full flex flex-col items-center gap-4 md:gap-8" ctx={ctx}>
      <CmsEditable as="div" cmsFieldName="topline" className="uppercase" ctx={ctx}>
        {topline}
      </CmsEditable>
      <CmsEditable
        as="div"
        cmsFieldName="heading"
        className="text-6xl font-bold"
        ctx={ctx}
      >
        {heading}
      </CmsEditable>
      <CmsContentArea fieldName="content" items={ content } ctx={ ctx } useSuspense className="w-full" />
    </CmsEditable>
  );
};
ContinueReadingComponentComponent.displayName =
  "Continue Reading (Component/ContinueReadingComponent)";
ContinueReadingComponentComponent.getDataFragment = () => [
  "ContinueReadingComponentData",
  ContinueReadingComponentDataFragmentDoc,
];

export default ContinueReadingComponentComponent;

/**
 * Get the shared instance data needed to render it
 */
export const getSharedInstanceData = cache(
  async (
    ctx?: GenericContext,
  ): Promise<
    | {
        contentLink: ContentLinkWithLocale;
        data: ContinueReadingComponentDataFragment;
      }
    | undefined
  > => {
    "use server";
    const requestedLocale = (ctx?.locale || null) as Locales | undefined;
    const graphClient = ctx?.client ?? createClient(undefined, undefined, {
      nextJsFetchDirectives: true,
      cache: true,
      queryCache: true
    });
    const result = await getSdk(graphClient)
      .getSharedContinueReading({ locale: requestedLocale })
      ?.catch(() => undefined);
    if (!result || (result.ContinueReadingComponent?.total ?? 0) == 0)
      return undefined;
    const data = result.ContinueReadingComponent?.item || undefined;
    if (!data) return undefined;
    const iContentMetaData = getFragmentData(
      IContentInfoFragmentDoc,
      getFragmentData(IContentDataFragmentDoc, data)?._metadata,
    );
    const link: ContentLinkWithLocale = {
      key: iContentMetaData?.key || "",
      locale: iContentMetaData?.locale || ctx?.locale || undefined,
      version: iContentMetaData?.version,
    };
    return { contentLink: link, data };
  },
);
