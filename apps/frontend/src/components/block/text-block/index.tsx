import type * as GraphQL from "@gql/graphql";
import { gql } from "@gql/gql";
import { CmsComponent } from "@remkoj/optimizely-cms-react";

const TextBlock: CmsComponent<GraphQL.TextBlockDataFragment> = ({
  data,
  inEditMode,
}) => {
  const {
    className = "",
    center = false,
    width = "full",
    headingSize = "medium",
    overline = "",
    heading = "",
    description = { html: "" },
  } = data;

  const additionalClasses: string[] = [];

  switch (width) {
    case "full":
      additionalClasses.push("w-full");
      break;
    case "small":
      additionalClasses.push("max-w-[400px] self-center");
      break;
    case "medium":
      additionalClasses.push("max-w-[700px] self-center");
      break;
    case "large":
      additionalClasses.push("max-w-[800px] self-center");
      break;
  }

  if (center) {
    additionalClasses.push("text-center justify-center");
  }

  if (className) {
    additionalClasses.push(className);
  }

  switch (headingSize) {
    case "small":
      additionalClasses.push(
        "prose-h2:text-[20px] prose-h2:my-[18px] prose-p:text-[20px]"
      );
      break;
    case "medium":
      additionalClasses.push(
        "prose-h2:text-[36px] lg:prose-h2:text-[48px] prose-h2:my-[24px] prose-p:text-[20px]"
      );
      break;
    case "large":
      additionalClasses.push(
        "prose-h2:text-[48px] lg:prose-h2:text-[96px] prose-h2:my-[24px] prose-p:text-[20px] prose-h3:text-[24px] prose-h3:font-semibold"
      );
      break;
    case "extraLarge":
      additionalClasses.push(
        "prose-h2:text-[96px] lg:prose-h2:text-[148px] prose-h2:my-[24px] prose-p:text-[36px] prose-p:mt-[24px] prose-p:mb-0"
      );
  }

  return (
    <section className={`${additionalClasses.join(" ")} flex`}>
      <div className="prose max-w-none dark:text-ghost-white">
        {overline && (
          <span
            className="uppercase text-[12px]"
            data-epi-edit={inEditMode ? "TextBlockOverline" : undefined}
            dangerouslySetInnerHTML={{ __html: overline }}
          ></span>
        )}
        {heading && (
          <h2
            data-epi-edit={inEditMode ? "TextBlockHeading" : undefined}
            dangerouslySetInnerHTML={{ __html: heading }}
          ></h2>
        )}
        {description && description.html && (
          <span
            data-epi-edit={inEditMode ? "TextBlockDescription" : undefined}
            dangerouslySetInnerHTML={{ __html: description.html }}
          ></span>
        )}
      </div>
    </section>
  );
};

TextBlock.displayName = "Text Block";
TextBlock.getDataFragment = () => ["TextBlockData", TextBlockData];
export default TextBlock;

const TextBlockData = gql(`
    fragment TextBlockData on TextBlock {
      overline: TextBlockOverline
      headingSize: TextBlockHeadingSize
      heading: TextBlockHeading
      description: TextBlockDescription {
        json
        html
      }
      center: TextCenter
      width: TextBlockWidth
      className: TextClassName
    }
  `);