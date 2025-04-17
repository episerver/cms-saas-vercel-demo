import {
  RichText,
  extractSettings,
  type CmsComponent,
} from "@remkoj/optimizely-cms-react/rsc";
import {
  RichTextElementDataFragmentDoc,
  type RichTextElementDataFragment,
} from "@/gql/graphql";
import { RichTextElementLayoutProps } from "./displayTemplates";

type PropsMap = Required<
  ReturnType<typeof extractSettings<RichTextElementLayoutProps>>
>;
type ValueMap<K extends keyof PropsMap, DT = any> = {
  [PropValue in PropsMap[K]]: DT;
};

const WidthMap: ValueMap<"width", string> = {
  full: "prose max-w-none",
  default: "prose mx-auto",
  defaultLeft: "prose mr-auto",
  defaultRight: "prose ml-auto",
};

/**
 * Rich Text
 * Add a text to your experience
 */
export const RichTextElementElement: CmsComponent<
  RichTextElementDataFragment,
  RichTextElementLayoutProps
> = ({ data, layoutProps, contentLink, ctx }) => {
  const { width = "full" } = extractSettings(layoutProps);

  const cssClassName = WidthMap[width];

  return (
    <RichText
      // Set the ID and fieldname expected by the CMS, with context to allow
      // the CmsEditable containe within RichText to work
      cmsId={contentLink.key}
      cmsFieldName="text"
      ctx={ctx}

      // Set the actual text
      text={data.text?.json}

      // Additional properties for the 'div' wrapper
      className={cssClassName}
      data-component="RichTextElement"
    />
  );
};
RichTextElementElement.displayName = "Rich Text (Element/RichTextElement)";
RichTextElementElement.getDataFragment = () => [
  "RichTextElementData",
  RichTextElementDataFragmentDoc,
];

export default RichTextElementElement;
