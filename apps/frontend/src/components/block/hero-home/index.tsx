"use client";

import { useEffect, useState } from "react";
import Button from "../button-block";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/partial/animatedText";

interface HomeHeroProps {
  heading: string;
  subheading?: string;
}

const HomeHero = ({ heading = "", subheading = "" }: HomeHeroProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="py-20 lg:py-40 w-full overflow-hidden relative outer-padding">
      <div className="container mx-auto text-center flex flex-col items-center max-w-[580px] relative z-10 pt-[40px]">
        <motion.div
          initial={{ opacity: 0, clipPath: "circle(0% at 100%)" }}
          animate={{ opacity: 1, clipPath: "circle(120% at 100%)" }}
          transition={{ duration: 1, delay: 1.25 }}
          className="absolute left-[-80%] top-[100px] rounded-[40px] overflow-hidden hidden lg:block"
        >
          <Image src="/assets/hero-left.png" alt="" width={435} height={368} />
        </motion.div>
        <div className="mb-24 prose prose-h1:text-[72px] prose-p:text-[24px] prose-h1:mb-10 prose-p:leading-tight">
          <AnimatedText el="h1" text={heading} />
          <AnimatedText
            delay={1200}
            text={subheading}
            animation={{ hidden: { opacity: 0, y: 2 }, visible: { opacity: 1, y: 0, transition: { duration: 0.15, ease: "easeInOut" } } }}
            repeatDelay={0.005}
          />
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }}>
          <Button buttonType="primary" buttonVariant="cta">
            Get started
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, clipPath: "circle(0% at 0%)" }}
          animate={{ opacity: 1, clipPath: "circle(120% at 0%)" }}
          transition={{ duration: 1, delay: 1.45 }}
          className="absolute right-[-80%] top-[100px] rounded-[40px] overflow-hidden hidden lg:block"
        >
          <Image src="/assets/hero-left.png" alt="" width={435} height={368} />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
