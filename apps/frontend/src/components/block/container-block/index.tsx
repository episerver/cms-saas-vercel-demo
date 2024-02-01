type paddingSize = "none" | "small" | "medium" | "large" | "extraLarge";
type marginSize = "none" | "small" | "medium" | "large" | "extraLarge";
type gapSize = "none" | "small" | "medium" | "large" | "extraLarge";

type Image = { src: string; alt: string; width: number; height: number };

interface ContainerBlockProps {
  columns: 1 | 2 | 3 | 4 | 5 | 6;
  paddingTop?: paddingSize;
  paddingBottom?: paddingSize;
  marginTop: marginSize;
  marginBottom: marginSize;
  backgroundImage?: Image;
  children?: React.ReactNode;
  gap: gapSize;
  color?: undefined | "light-blue" | "blue" | "orange" | "green" | "red" | "white";
}

const columnClassMap: { [key in ContainerBlockProps["columns"]]: string } = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-5",
  6: "grid-cols-1 md:grid-cols-3 lg:grid-cols-6",
};

const gapSizeClassMap: { [key in ContainerBlockProps["gap"]]: string } = {
  none: "",
  small: "gap-4",
  medium: "gap-8",
  large: "gap-12",
  extraLarge: "gap-24",
};

const ContainerBlock: React.FC<ContainerBlockProps> = ({
  columns = 1,
  paddingTop = "none",
  paddingBottom = "none",
  marginTop = "medium",
  marginBottom = "medium",
  backgroundImage,
  gap = "small",
  color,
  children,
}) => {
  const columnClass = columnClassMap[columns];
  const gapClass = gap ? gapSizeClassMap[gap] : "";
  const additionalClasses: string[] = [];
  const innerClasses: string[] = [];
  let backgroundStyle = {};

  if (backgroundImage && typeof backgroundImage === "object" && "src" in backgroundImage) {
    // Set background image style
    backgroundStyle = { backgroundImage: `url(${backgroundImage.src})`, backgroundSize: "cover", backgroundPosition: "center" };
  }

  switch (color) {
    case "light-blue":
      additionalClasses.push("bg-azure text-white");
      break;
    case "blue":
      additionalClasses.push("bg-vulcan before:bg-vulcan text-white");
      break;
    case "orange":
      additionalClasses.push("bg-tangy text-vulcan");
      break;
    case "green":
      additionalClasses.push("bg-verdansk text-vulcan");
      break;
    case "red":
      additionalClasses.push("bg-paleruby text-white");
      break;
    case "white":
      additionalClasses.push("bg-white text-vulcan");
      break;
  }

  switch (paddingTop) {
    case "small":
      additionalClasses.push("pt-8");
      break;
    case "medium":
      additionalClasses.push("pt-16");
      break;
    case "large":
      additionalClasses.push("pt-24");
      break;
    case "extraLarge":
      additionalClasses.push("pt-64");
      break;
  }

  switch (paddingBottom) {
    case "small":
      additionalClasses.push("pb-8");
      break;
    case "medium":
      additionalClasses.push("pb-16");
      break;
    case "large":
      additionalClasses.push("pb-24");
      break;
    case "extraLarge":
      additionalClasses.push("pb-64");
      break;
  }

  switch (marginTop) {
    case "small":
      additionalClasses.push("mt-8");
      break;
    case "medium":
      additionalClasses.push("mt-16");
      break;
    case "large":
      additionalClasses.push("mt-24");
      break;
    case "extraLarge":
      additionalClasses.push("mt-64");
      break;
  }

  switch (marginBottom) {
    case "small":
      additionalClasses.push("mb-8");
      break;
    case "medium":
      additionalClasses.push("mb-16");
      break;
    case "large":
      additionalClasses.push("mb-24");
      break;
    case "extraLarge":
      additionalClasses.push("mb-64");
      break;
  }

  if (backgroundImage && typeof backgroundImage === "object") {
    additionalClasses.push("relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-opacity-70");
    innerClasses.push("z-10 relative");
  }

  return (
    <section className={`outer-padding w-full ${additionalClasses.join(" ")}`} style={{ ...backgroundStyle }}>
      <div className={`container mx-auto place-items-center grid ${columnClass} ${gapClass} ${innerClasses.join(" ")}`}>{children}</div>
    </section>
  );
};

export default ContainerBlock;
