import type * as GraphQL from "@gql/graphql";
import Image from "next/image";
import ButtonBlock from "../button-block";
import { gql } from "@apollo/client";
import { CmsComponent } from "@remkoj/optimizely-dxp-react";

const HeroBlock: CmsComponent<GraphQL.HeroBlockDataFragment> = ({
  data,
  inEditMode,
}) => {
  const {
    image,
    eyebrow = "",
    heading = "",
    description = "",
    color = "blue",
    button,
  } = data;
  const additionalClasses: string[] = [];
  const innerClasses: string[] = [];
  const hasImage = image && image.src;

  let buttonClassName = "";
  switch (color) {
    case "dark-blue":
      additionalClasses.push("bg-vulcan");
      innerClasses.push("text-white prose-h3:text-white prose-h2:text-white");
      if (button) {
        buttonClassName = "btn--light";
      }
      break;
    case "blue":
      additionalClasses.push("bg-azure");
      innerClasses.push("text-white prose-h3:text-white prose-h2:text-white");
      if (button) {
        buttonClassName = "btn--light";
      }
      break;
    case "orange":
      additionalClasses.push("bg-tangy");
      innerClasses.push(
        "text-vulcan prose-h3:text-vulcan prose-h2:text-vulcan"
      );
      if (button) {
        buttonClassName = "btn--dark";
      }
      break;
    case "green":
      additionalClasses.push("bg-verdansk");
      innerClasses.push(
        "text-vulcan prose-h3:text-vulcan prose-h2:text-vulcan"
      );
      if (button) {
        buttonClassName = "btn--dark";
      }
      break;
    case "red":
      additionalClasses.push("bg-paleruby");
      innerClasses.push("text-white prose-h3:text-white prose-h2:text-white");
      if (button) {
        buttonClassName = "btn--light";
      }
      break;
    case "purple":
      additionalClasses.push("bg-people-eater");
      innerClasses.push("text-white prose-h3:text-white prose-h2:text-white");
      if (button) {
        buttonClassName = "btn--light";
      }
      break;
  }

  return (
    <section
      className={`outer-padding py-32 lg:py-64 ${additionalClasses.join(" ")}`}
    >
      <div className={`w-full @container/card container mx-auto`}>
        <div
          className={`w-full h-full grid items-center grid-cols-1 ${
            hasImage
              ? "gap-16 @[80rem]/card:grid-cols-12 @[80rem]/card:gap-32"
              : ""
          }`}
        >
          <div
            className={`prose lg:prose-h1:text-[72px] lg:prose-h1:my-[48px] prose-h1:font-bold prose-p:text-[24px] prose-p:leading-[30px] prose-img:my-4 ${
              hasImage ? "@[80rem]/card:col-span-6" : "max-w-[900px] mx-auto"
            } ${innerClasses.join(" ")}`}
          >
            {eyebrow ? (
              <p
                className="eyebrow"
                dangerouslySetInnerHTML={{ __html: eyebrow }}
              ></p>
            ) : null}
            {heading ? (
              <h1 dangerouslySetInnerHTML={{ __html: heading }}></h1>
            ) : null}
            {description ? (
              <div dangerouslySetInnerHTML={{ __html: description }}></div>
            ) : null}
            {button && button.children ? (
              <ButtonBlock
                {...button}
                className={buttonClassName}
              ></ButtonBlock>
            ) : null}
          </div>
          {image && image.src ? (
            <div
              className={`@[80rem]/card:col-span-6 order-first lg:order-last`}
            >
              <Image
                className="rounded-[40px] w-full"
                src={image.src}
                alt={""}
                width={600}
                height={500}
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

HeroBlock.displayName = "Hero Block";
HeroBlock.getDataFragment = () => ["HeroBlockData", HeroBlockData.data];
export default HeroBlock;

const HeroBlockData: Readonly<{ [field: string]: any }> = {
  data: gql(/* GraphQL */ `
    fragment HeroBlockData on HeroBlock {
      Name
      heading: Heading
      subheading: SubHeading
      button: HeroButton {
        className: ButtonClass
        children: ButtonText
        buttonType: ButtonType
        url: ButtonUrl
        buttonVariant: ButtonVariant
      }
      color: HeroColor
      description: Description
      eyebrow: Eyebrow
      image: HeroImage {
        src: Url
        GuidValue
        Id
      }
    }
  `),
};
