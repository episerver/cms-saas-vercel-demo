import { Variant } from "framer-motion";

interface TextBlockProps {
  className?: string;
  center?: boolean;
  width?: "full" | "small" | "medium" | "large";
  headingSize: "small" | "medium" | "large" | "extraLarge";
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
  overline?: string;
  heading?: string;
  description?: string;
}

export const TextBlock = ({ className = "", center = false, width = "full", headingSize = "medium", animation, overline = "", heading = "", description = "" }: TextBlockProps) => {
  const additionalClasses: string[] = [];

  switch (width) {
    case "full":
      additionalClasses.push("w-full");
      break;
    case "small":
      additionalClasses.push("max-w-[400px] self-center");
      break;
    case "medium":
      additionalClasses.push("max-w-[700px] self-center");
      break;
    case "large":
      additionalClasses.push("max-w-[800px] self-center");
      break;
  }

  if (center) {
    additionalClasses.push("text-center justify-center");
  }

  if (className) {
    additionalClasses.push(className);
  }

  switch (headingSize) {
    case "small":
      additionalClasses.push("prose-h2:text-[20px] prose-h2:my-[18px] prose-p:text-[20px]");
      break;
    case "medium":
      additionalClasses.push("prose-h2:text-[36px] lg:prose-h2:text-[48px] prose-h2:my-[24px] prose-p:text-[20px]");
      break;
    case "large":
      additionalClasses.push("prose-h2:text-[48px] lg:prose-h2:text-[96px] prose-h2:my-[24px] prose-p:text-[20px]");
      break;
    case "extraLarge":
      additionalClasses.push("prose-h2:text-[96px] lg:prose-h2:text-[148px] prose-h2:my-[24px] prose-p:text-[36px] prose-p:mt-[24px] prose-p:mb-0");
  }

  return (
    <section className={`${additionalClasses.join(" ")} flex`}>
      <div className="prose max-w-none">
        {overline && <span className="uppercase text-[12px]" dangerouslySetInnerHTML={{ __html: overline }}></span>}
        {heading && <h2 dangerouslySetInnerHTML={{ __html: heading }}></h2>}
        {description && <span dangerouslySetInnerHTML={{ __html: description }}></span>}
      </div>
    </section>
  );
};
