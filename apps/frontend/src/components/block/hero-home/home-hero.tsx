"use client";

import { Schema, useFragment } from '@gql'
import { type FunctionComponent } from "react";
import Button from "../button-block";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/partial/animatedText";

type HomeHeroBlockComponentType = FunctionComponent<{
  data: Schema.HomeHeroBlockDataFragment
  inEditMode?: boolean
}>

const HomeHero: HomeHeroBlockComponentType = ({ data: { homeHeroHeading: heading = "", homeHeroSubheading: subheading = "", homeHeroButton: button, leftImage, rightImage }, inEditMode }) => {
  const leftImageUrlData = useFragment(Schema.LinkDataFragmentDoc, useFragment(Schema.ReferenceDataFragmentDoc, leftImage)?.url)
  const rightImageUrlData = useFragment(Schema.LinkDataFragmentDoc, useFragment(Schema.ReferenceDataFragmentDoc, rightImage)?.url)
  const leftImageUrl = leftImageUrlData ? new URL(leftImageUrlData.default ?? '/', leftImageUrlData.base ?? 'https://example.com').href : undefined
  const rightImageUrl = rightImageUrlData ? new URL(rightImageUrlData.default ?? '/', rightImageUrlData.base ?? 'https://example.com').href : undefined

  return (
    <section className="py-20 lg:py-40 w-full overflow-hidden relative outer-padding">
      <div className="container mx-auto text-center flex flex-col items-center max-w-[580px] relative z-10 pt-[40px]">
        {leftImageUrl && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100%)" }}
            animate={{ opacity: 1, clipPath: "circle(120% at 100%)" }}
            transition={{ duration: 1, delay: 1.25 }}
            className="absolute left-[-80%] top-[100px] rounded-[40px] overflow-hidden hidden lg:block"
          >
            <Image
              data-epi-edit={inEditMode ? "HomeHeroLeftImage" : undefined}
              src={leftImageUrl}
              alt=""
              width={435}
              height={368}
            />
          </motion.div>
        )}
        <div className="mb-24 prose prose-h1:text-[72px] prose-p:text-[24px] prose-h1:mb-10 prose-p:leading-tight dark:!text-white">
          {inEditMode ? (
            <h1 data-epi-edit={"HomeHeroBlockHeading"}>{heading}</h1>
          ) : (
            <AnimatedText el="h1" text={heading ?? ""} />
          )}
          {inEditMode ? (
            <p data-epi-edit={"HomeHeroBlockSubHeading"}>{subheading}</p>
          ) : (
            <AnimatedText
              delay={1200}
              text={subheading ?? ""}
              animation={{
                hidden: { opacity: 0, y: 2 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.15, ease: "easeInOut" },
                },
              }}
              repeatDelay={0.005}
            />
          )}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <Button
            data-epi-edit={inEditMode ? "HomeHeroButtonBlock" : undefined}
            {...button}
          ></Button>
        </motion.div>
        {rightImageUrl && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(120% at 0%)" }}
            transition={{ duration: 1, delay: 1.45 }}
            className="absolute right-[-80%] top-[100px] rounded-[40px] overflow-hidden hidden lg:block"
          >
            <Image
              data-epi-edit={inEditMode ? "HomeHeroRightImage" : undefined}
              src={rightImageUrl}
              alt=""
              width={435}
              height={368}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HomeHero;
