"use client";
import { type FunctionComponent } from "react";
import { type Schema } from "@gql";
import { type InlineContentLinkWithLocale, type ContentLinkWithLocale } from "@remkoj/optimizely-graph-client";
import Image from "next/image";
import { motion } from "framer-motion";
import ButtonBlock from "@cms/component/ButtonBlock";
import { refToURL } from '@/lib/conversions'

type CardProps = {
  data: Schema.CardBlockDataFragment
  inEditMode?: boolean,
  contentLink?: InlineContentLinkWithLocale | ContentLinkWithLocale | null
}

const Card: FunctionComponent<CardProps> = ({ data, inEditMode }) => {
  const {
    cardImageLayout: imageLayout = "before",
    cardImage: image,
    cardHeading: heading = "",
    cardSubheading: subheading = "",
    cardDescription: description = "",
    cardColor: color = "blue",
    cardButton: button,
    cardIcon: icon,
  } = data;

  const additionalClasses: string[] = [ additionalClassesDict[color ?? 'blue'] ]
  const innerClasses: string[] = [ innerClassesDict[color ?? 'blue' ] ]
  const iconUrl = refToURL(icon)
  const imageUrl = refToURL(image)
  if (button)
    button.className = [button.className, btnClassesDict[color ?? 'blue']].filter(x=>x).join(" ")

  return (
    <section
      className={`w-full h-full p-6 lg:p-12 rounded-[2rem] @container/card ${additionalClasses.join(
        " "
      )} dark:!text-ghost-white dark:prose-h3:text-ghost-white dark:prose-h2:text-ghost-white`}
    >
      <div className="w-full h-full grid auto-rows-auto @[40rem]/card:items-center grid-cols-1 gap-16 @[40rem]/card:grid-cols-12">
        <div
          className={`prose prose-h2:text-5xl prose-h2:mb-6 prose-h2:mt-6 prose-h3:text-2xl prose-img:my-4 @[40rem]/card:col-span-5 ${innerClasses.join(
            " "
          )} dark:!text-ghost-white dark:prose-h3:text-ghost-white dark:prose-h2:text-ghost-white`}
        >
          {iconUrl && (
            <Image
              data-epi-edit={inEditMode ? "CardIcon" : undefined}
              src={ iconUrl.href }
              alt={""}
              width={48}
              height={48}
            />)
          }
          {heading ? (
            <h2
              data-epi-edit={inEditMode ? "CardHeading" : undefined}
              dangerouslySetInnerHTML={{ __html: heading }}
            ></h2>
          ) : null}
          {subheading ? (
            <h3
              data-epi-edit={inEditMode ? "CardSubHeading" : undefined}
              dangerouslySetInnerHTML={{ __html: subheading }}
            ></h3>
          ) : null}
          {description ? (
            <div
              data-epi-edit={inEditMode ? "CardDescription" : undefined}
              dangerouslySetInnerHTML={{ __html: description?.html ?? '' }}
            ></div>
          ) : null}
          {button && button.children ? (
            <ButtonBlock
              data-epi-edit={inEditMode ? "CardButton" : undefined}
              {...button}
            ></ButtonBlock>
          ) : null}
        </div>
        {imageUrl &&  (
          <motion.div
            className={`@[40rem]/card:col-span-6 ${
              imageLayout === "after"
                ? "order-first lg:order-last @[40rem]/card:col-start-7"
                : "order-first"
            }`}
          >
            <Image
              data-epi-edit={inEditMode ? "CardImage" : undefined}
              className="rounded-[2rem] w-full"
              src={ imageUrl.href }
              alt={""}
              width={660}
              height={440}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Card;


enum additionalClassesDict {
  white = "bg-ghost-white border-[2px]",
  blue = "bg-azure dark:bg-transparent dark:border-azure dark:border-4",
  "dark-blue" = "bg-vulcan",
  orange = "bg-tangy dark:bg-transparent dark:border-tangy dark:border-4 ",
  green = "bg-verdansk dark:bg-transparent dark:border-verdansk dark:border-4",
  red = "bg-paleruby dark:bg-transparent dark:border-paleruby dark:border-4",
  purple = "bg-people-eater"
}

enum innerClassesDict {
  white = "text-vulcan prose-h3:text-vulcan prose-h2:text-vulcan",
  blue = "text-white prose-h3:text-white prose-h2:text-white",
  "dark-blue" = "text-white prose-h3:text-white prose-h2:text-white",
  orange = "text-vulcan prose-h3:text-vulcan prose-h2:text-vulcan",
  green = "text-vulcan prose-h3:text-vulcan prose-h2:text-vulcan",
  red = "text-white prose-h3:text-white prose-h2:text-white",
  purple = "text-white prose-h3:text-white prose-h2:text-white"
}

enum btnClassesDict {
  white = "",
  blue = "btn--light",
  "dark-blue" = "btn--light",
  orange = "btn--dark",
  green = "btn--dark",
  red = "btn--light",
  purple = "btn--light"
}