"use client";

import { ButtonBlockComponentType } from "../button-block";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/partial/animatedText";
import ButtonBlock from "../button-block";

interface HeroBlockProps {
  icon?: {
    src: string;
    alt: string;
  };
  image?: { src: string; alt: string; width: number; height: number };
  imageLayout: "before" | "after";
  subheading?: string;
  eyebrow?: string;
  heading: string;
  description?: string;
  color: "dark-blue" | "blue" | "orange" | "green" | "red" | "purple";
  button?: ButtonBlockComponentType;
}

const HeroBlock = ({ imageLayout = "before", image, eyebrow = "", heading = "", description = "", color = "blue", button, icon }: HeroBlockProps) => {
  const additionalClasses: string[] = [];
  const innerClasses: string[] = [];
  const hasImage = image && image.src;

  switch (color) {
    case "dark-blue":
      additionalClasses.push("bg-vulcan");
      innerClasses.push("text-white prose-h3:text-white prose-h2:text-white");
      if (button) {
        button.className = "btn--light";
      }
      break;
    case "blue":
      additionalClasses.push("bg-azure");
      innerClasses.push("text-white prose-h3:text-white prose-h2:text-white");
      if (button) {
        button.className = "btn--light";
      }
      break;
    case "orange":
      additionalClasses.push("bg-tangy");
      innerClasses.push("text-vulcan prose-h3:text-vulcan prose-h2:text-vulcan");
      if (button) {
        button.className = "btn--dark";
      }
      break;
    case "green":
      additionalClasses.push("bg-verdansk");
      innerClasses.push("text-vulcan prose-h3:text-vulcan prose-h2:text-vulcan");
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
    <section className={`outer-padding py-32 lg:py-64 ${additionalClasses.join(" ")}`}>
      <div className={`w-full @container/card container mx-auto`}>
        <div className={`w-full h-full grid items-center grid-cols-1 ${hasImage ? "gap-16 @[80rem]/card:grid-cols-12 @[80rem]/card:gap-32" : ""}`}>
          <div
            className={`prose lg:prose-h1:text-[72px] lg:prose-h1:my-[48px] prose-h1:font-bold prose-p:text-[24px] prose-p:leading-[30px] prose-img:my-4 ${
              hasImage ? "@[80rem]/card:col-span-6" : "max-w-[900px] mx-auto"
            } ${innerClasses.join(" ")}`}
          >
            {eyebrow ? <p className="eyebrow" dangerouslySetInnerHTML={{ __html: eyebrow }}></p> : null}
            {icon ? <Image src={icon.src} alt={icon.alt} width={80} height={80} /> : null}
            {heading ? <h1 dangerouslySetInnerHTML={{ __html: heading }}></h1> : null}
            {description ? <div dangerouslySetInnerHTML={{ __html: description }}></div> : null}
            {button ? <ButtonBlock {...button}></ButtonBlock> : null}
          </div>
          {image ? (
            <motion.div className={`@[80rem]/card:col-span-6 ${imageLayout === "after" ? "order-first lg:order-last" : "order-first"}`}>
              <Image className="rounded-[40px] w-full" src={image.src} alt={image.alt} width={image.width} height={image.height} />
            </motion.div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default HeroBlock;
