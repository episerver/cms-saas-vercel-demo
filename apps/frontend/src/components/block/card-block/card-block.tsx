"use client";
import { type FunctionComponent } from "react";
import { type Schema } from "@gql";
import { type InlineContentLinkWithLocale, type ContentLinkWithLocale } from "@remkoj/optimizely-graph-client";
import Image from "next/image";
import { motion } from "framer-motion";
import ButtonBlock from "../button-block";
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
  const additionalClasses: string[] = [];
  const innerClasses: string[] = [];

  switch (color) {
    case "white":
      additionalClasses.push("bg-ghost-white border-[2px]");
      innerClasses.push(
        "text-vulcan prose-h3:text-vulcan prose-h2:text-vulcan"
      );

      break;
    case "blue":
      additionalClasses.push("bg-azure dark:bg-transparent dark:border-azure dark:border-4");
      innerClasses.push("text-white prose-h3:text-white prose-h2:text-white ");
      if (button) {
        button.className = "btn--light";
      }
      break;
    case "dark-blue":
      additionalClasses.push("bg-vulcan ");
      innerClasses.push("text-white prose-h3:text-white prose-h2:text-white");
      if (button) {
        button.className = "btn--light";
      }
      break;
    case "orange":
      additionalClasses.push("bg-tangy dark:bg-transparent dark:border-tangy dark:border-4 ");
      innerClasses.push(
        "text-vulcan prose-h3:text-vulcan prose-h2:text-vulcan "
      );
      if (button) {
        button.className = "btn--dark";
      }
      break;
    case "green":
      additionalClasses.push("bg-verdansk dark:bg-transparent dark:border-verdansk dark:border-4");
      innerClasses.push(
        "text-vulcan prose-h3:text-vulcan prose-h2:text-vulcan "
      );
      if (button) {
        button.className = "btn--dark";
      }
      break;
    case "red":
      additionalClasses.push("bg-paleruby dark:bg-transparent dark:border-paleruby dark:border-4");
      innerClasses.push("text-white prose-h3:text-white prose-h2:text-white");
      if (button) {
        button.className = "btn--light";
      }
      break;
    case "purple":
      additionalClasses.push("bg-people-eater");
      innerClasses.push("text-white prose-h3:text-white prose-h2:text-white");
      if (button) {
        button.className = "btn--light";
      }
      break;
  }

  const iconUrl = refToURL(icon)
  const imageUrl = refToURL(image)

  return (
    <section
      className={`w-full h-full p-12 lg:p-24 rounded-[40px] @container/card ${additionalClasses.join(
        " "
      )} dark:!text-ghost-white dark:prose-h3:text-ghost-white dark:prose-h2:text-ghost-white`}
    >
      <div className="w-full h-full grid auto-rows-auto @[80rem]/card:items-center grid-cols-1 gap-16 @[80rem]/card:grid-cols-12">
        <div
          className={`prose prose-h2:text-[48px] prose-h2:mb-[24px] prose-h2:mt-[24px] prose-h3:text-[24px] prose-p:text-[20px] prose-img:my-4 @[80rem]/card:col-span-5 ${innerClasses.join(
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
            className={`@[80rem]/card:col-span-6 ${
              imageLayout === "after"
                ? "order-first lg:order-last @[80rem]/card:col-start-7"
                : "order-first"
            }`}
          >
            <Image
              data-epi-edit={inEditMode ? "CardImage" : undefined}
              className="rounded-[40px] w-full"
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
