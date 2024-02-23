"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ButtonBlock from "../button-block";
import { CardBlockComponentType } from ".";

const Card: CardBlockComponentType = ({ data, inEditMode }) => {
  const {
    imageLayout = "before",
    image,
    heading = "",
    subheading = "",
    description = "",
    color = "blue",
    button,
    icon,
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
      additionalClasses.push("bg-azure");
      innerClasses.push("text-white prose-h3:text-white prose-h2:text-white");
      if (button) {
        button.className = "btn--light";
      }
      break;
    case "dark-blue":
      additionalClasses.push("bg-vulcan");
      innerClasses.push("text-white prose-h3:text-white prose-h2:text-white");
      if (button) {
        button.className = "btn--light";
      }
      break;
    case "orange":
      additionalClasses.push("bg-tangy");
      innerClasses.push(
        "text-vulcan prose-h3:text-vulcan prose-h2:text-vulcan"
      );
      if (button) {
        button.className = "btn--dark";
      }
      break;
    case "green":
      additionalClasses.push("bg-verdansk");
      innerClasses.push(
        "text-vulcan prose-h3:text-vulcan prose-h2:text-vulcan"
      );
      if (button) {
        button.className = "btn--dark";
      }
      break;
    case "red":
      additionalClasses.push("bg-paleruby");
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

  return (
    <section
      className={`w-full h-full p-12 lg:p-24 rounded-[40px] @container/card ${additionalClasses.join(
        " "
      )}`}
    >
      <div className="w-full h-full grid auto-rows-auto @[80rem]/card:items-center grid-cols-1 gap-16 @[80rem]/card:grid-cols-12">
        <div
          className={`prose prose-h2:text-[48px] prose-h2:mb-[24px] prose-h2:mt-[24px] prose-h3:text-[24px] prose-p:text-[20px] prose-img:my-4 @[80rem]/card:col-span-5 ${innerClasses.join(
            " "
          )}`}
        >
          {icon && icon.src ? (
            <Image
              data-epi-edit={inEditMode ? "CardIcon" : undefined}
              src={icon.src}
              alt={""}
              width={48}
              height={48}
            />
          ) : null}
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
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          ) : null}
          {button && button.children ? (
            <ButtonBlock
              data-epi-edit={inEditMode ? "CardButton" : undefined}
              {...button}
            ></ButtonBlock>
          ) : null}
        </div>
        {image && image.src ? (
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
              src={image.src}
              alt={""}
              width={660}
              height={440}
            />
          </motion.div>
        ) : null}
      </div>
    </section>
  );
};

export default Card;
