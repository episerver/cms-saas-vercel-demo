"use client";

import React, { useState, useEffect, type FunctionComponent, type PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import type { ContentLinkWithLocale, InlineContentLinkWithLocale } from "@remkoj/optimizely-graph-client";
import { type Schema } from '@gql'

type CarouselProps = PropsWithChildren<{
  data: Schema.CarouselBlockDataFragment & { itemCount: number }
  inEditMode?: boolean,
  contentLink?: ContentLinkWithLocale | InlineContentLinkWithLocale | null
}>

const Carousel: FunctionComponent<CarouselProps> = ({
  data,
  inEditMode,
  children,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(50);
  const windowWidth = useWindowWidth();
  const { itemCount } = data;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === -1 ? -1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === itemCount - 2 ? itemCount - 2 : prevIndex + 1
    );
  };

  // Fires on window width change to set the carousel items width for responsiveness.
  useEffect(() => {
    if (windowWidth) {
      if (windowWidth <= 900) {
        setItemWidth(80);
      }
      if (windowWidth >= 900) {
        setItemWidth(50);
      }
    }
  }, [windowWidth]);

  return (
    <div
      className="overflow-hidden relative w-full my-24 flex flex-col"
      style={{ position: "relative", width: "100%", overflow: "hidden" }}
    >
      <section
        role="navigation"
        className="flex justify-center gap-10 mt-16 order-last"
      >
        <button onClick={handlePrev}>
          <svg
            width="48"
            height="49"
            viewBox="0 0 48 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "rotate(180deg)" }}
            className={`${
              currentIndex === -1 ? "text-mischka dark:text-ghost-white" : "text-vulcan dark:text-light-grey"
            }`}
          >
            <g clipPath="url(#clip0_5_4814)">
              <path
                id="Vector"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48 24.4104C48 30.7756 45.4714 36.8801 40.9706 41.381C36.4697 45.8818 30.3652 48.4104 24 48.4104C17.6348 48.4104 11.5303 45.8818 7.02944 41.381C2.52856 36.8801 0 30.7756 0 24.4104C0 18.0452 2.52856 11.9407 7.02944 7.43984C11.5303 2.93896 17.6348 0.4104 24 0.4104C30.3652 0.4104 36.4697 2.93896 40.9706 7.43984C45.4714 11.9407 48 18.0452 48 24.4104ZM13.5 25.9104C13.1022 25.9104 12.7206 25.7524 12.4393 25.4711C12.158 25.1898 12 24.8082 12 24.4104C12 24.0126 12.158 23.631 12.4393 23.3497C12.7206 23.0684 13.1022 22.9104 13.5 22.9104H30.879L24.438 16.4724C24.1563 16.1907 23.9981 15.8087 23.9981 15.4104C23.9981 15.0121 24.1563 14.6301 24.438 14.3484C24.7197 14.0667 25.1017 13.9085 25.5 13.9085C25.8983 13.9085 26.2803 14.0667 26.562 14.3484L35.562 23.3484C35.7017 23.4877 35.8125 23.6533 35.8881 23.8355C35.9638 24.0177 36.0027 24.2131 36.0027 24.4104C36.0027 24.6077 35.9638 24.8031 35.8881 24.9853C35.8125 25.1675 35.7017 25.3331 35.562 25.4724L26.562 34.4724C26.2803 34.7541 25.8983 34.9123 25.5 34.9123C25.1017 34.9123 24.7197 34.7541 24.438 34.4724C24.1563 34.1907 23.9981 33.8087 23.9981 33.4104C23.9981 33.0121 24.1563 32.6301 24.438 32.3484L30.879 25.9104H13.5Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_5_4815">
                <rect
                  width="48"
                  height="48"
                  fill="white"
                  transform="translate(0 0.4104)"
                />
              </clipPath>
            </defs>
          </svg>
          <span className="sr-only">Previous Slide</span>
        </button>
        <button onClick={handleNext}>
          <svg
            width="48"
            height="49"
            viewBox="0 0 48 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              currentIndex === itemCount - 2 ? "text-mischka dark:text-light-grey" : "text-vulcan dark:text-ghost-white"
            }`}
          >
            <g clipPath="url(#clip0_5_4814)">
              <path
                id="Vector"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48 24.4104C48 30.7756 45.4714 36.8801 40.9706 41.381C36.4697 45.8818 30.3652 48.4104 24 48.4104C17.6348 48.4104 11.5303 45.8818 7.02944 41.381C2.52856 36.8801 0 30.7756 0 24.4104C0 18.0452 2.52856 11.9407 7.02944 7.43984C11.5303 2.93896 17.6348 0.4104 24 0.4104C30.3652 0.4104 36.4697 2.93896 40.9706 7.43984C45.4714 11.9407 48 18.0452 48 24.4104ZM13.5 25.9104C13.1022 25.9104 12.7206 25.7524 12.4393 25.4711C12.158 25.1898 12 24.8082 12 24.4104C12 24.0126 12.158 23.631 12.4393 23.3497C12.7206 23.0684 13.1022 22.9104 13.5 22.9104H30.879L24.438 16.4724C24.1563 16.1907 23.9981 15.8087 23.9981 15.4104C23.9981 15.0121 24.1563 14.6301 24.438 14.3484C24.7197 14.0667 25.1017 13.9085 25.5 13.9085C25.8983 13.9085 26.2803 14.0667 26.562 14.3484L35.562 23.3484C35.7017 23.4877 35.8125 23.6533 35.8881 23.8355C35.9638 24.0177 36.0027 24.2131 36.0027 24.4104C36.0027 24.6077 35.9638 24.8031 35.8881 24.9853C35.8125 25.1675 35.7017 25.3331 35.562 25.4724L26.562 34.4724C26.2803 34.7541 25.8983 34.9123 25.5 34.9123C25.1017 34.9123 24.7197 34.7541 24.438 34.4724C24.1563 34.1907 23.9981 33.8087 23.9981 33.4104C23.9981 33.0121 24.1563 32.6301 24.438 32.3484L30.879 25.9104H13.5Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_5_4815">
                <rect
                  width="48"
                  height="48"
                  fill="white"
                  transform="translate(0 0.4104)"
                />
              </clipPath>
            </defs>
          </svg>

          <span className="sr-only">Next Slide</span>
        </button>
      </section>
      <motion.div
        className="flex px-12 order-first"
        style={{
          // @ts-ignore - TS doesn't like inline css variables.
          [`--item-width`]: `${itemWidth}vw`,
          width: `calc(${itemCount * itemWidth}% + ${(itemCount - 1) * 30}px)`,
          x: `calc(${
            (currentIndex + 1) * -itemWidth + (100 - itemWidth) / 2
          }vw - 3rem)`,
          transition: "0.5s",
        }}
        data-epi-edit={inEditMode ? "CarouselItemsContentArea" : undefined}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Carousel;
