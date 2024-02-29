type paddingSize = "none" | "small" | "medium" | "large" | "extraLarge";

interface FormBlockProps {
  contentId: string;
  className?: string;
  paddingTop: paddingSize;
  paddingBottom: paddingSize;
}

export const FormBlock = ({ contentId, className, paddingTop, paddingBottom }: FormBlockProps) => {
  const paddingTopSizeClassMap: { [key in paddingSize]: string } = {
    none: "",
    small: "mt-8",
    medium: "mt-16",
    large: "mt-24",
    extraLarge: "mt-[160px]",
  };

  const paddingBottomSizeClassMap: { [key in paddingSize]: string } = {
    none: "",
    small: "mb-8",
    medium: "mb-16",
    large: "mb-24",
    extraLarge: "mb-[160px]",
  };

  const paddingTopClass = paddingTop ? paddingTopSizeClassMap[paddingTop] : "";
  const paddingBottomClass = paddingBottom ? paddingBottomSizeClassMap[paddingBottom] : "";

  return <section className={`${className} ${paddingTopClass} ${paddingBottomClass}`}>ODP Form Will Go Here</section>;
};
