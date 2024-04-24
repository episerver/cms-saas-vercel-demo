"use client";

import { useEffect, useState } from "react";
import Button from "../button-block";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/partial/animatedText";
import type { HomeHeroBlockComponentType } from ".";

const HomeHero: HomeHeroBlockComponentType = ({ data, inEditMode }) => {
  const { heading = "", subheading = "", button, leftImage, rightImage } = data;
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="py-20 lg:py-40 w-full overflow-hidden relative outer-padding">
      <div className="container mx-auto text-center flex flex-col items-center max-w-[580px] relative z-10 pt-[40px]">
        {leftImage && leftImage.url && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100%)" }}
            animate={{ opacity: 1, clipPath: "circle(120% at 100%)" }}
            transition={{ duration: 1, delay: 1.25 }}
            className="absolute left-[-80%] top-[100px] rounded-[40px] overflow-hidden hidden lg:block"
          >
            <Image
              data-epi-edit={inEditMode ? "HomeHeroLeftImage" : undefined}
              src={leftImage.url}
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
        {rightImage && rightImage.url && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(120% at 0%)" }}
            transition={{ duration: 1, delay: 1.45 }}
            className="absolute right-[-80%] top-[100px] rounded-[40px] overflow-hidden hidden lg:block"
          >
            <Image
              data-epi-edit={inEditMode ? "HomeHeroRightImage" : undefined}
              src={rightImage.url}
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
