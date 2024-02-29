import { Variant, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type AnimatedTextProps = {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
  delay?: number;
};

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeInOut",
    },
  },
};

export const AnimatedText = ({ text, el: Wrapper = "p", className, once = true, repeatDelay, animation = defaultAnimations, delay = 0 }: AnimatedTextProps) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  useEffect(() => {
    let delayStartTimeout: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;
    const show = () => {
      delayStartTimeout = setTimeout(() => {
        controls.start("visible");

        if (repeatDelay && isInView) {
          timeout = setTimeout(async () => {
            await controls.start("hidden");
            controls.start("visible");
          }, repeatDelay);
        }
      }, delay);
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }

    return () => {
      clearTimeout(delayStartTimeout);
      clearTimeout(timeout);
    };
  }, [controls, isInView, repeatDelay, delay]);

  return (
    <Wrapper className={className}>
      <span className="sr-only">{textArray.join(" ")}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.05 } },
          hidden: {},
        }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span className="block" key={`${line}-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => (
              <span className="inline-block" key={`${word}-${wordIndex}`}>
                {word.split("").map((char, charIndex) => (
                  <motion.span key={`${char}-${charIndex}`} className="inline-block" viewport={{ once: true }} variants={animation}>
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};
