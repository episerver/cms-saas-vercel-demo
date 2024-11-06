export const columnClassMap: { [key: string]: string } = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-5",
    6: "grid-cols-1 md:grid-cols-3 lg:grid-cols-6",
};
  
export const gapSizeClassMap: { [key: string]: string } = {
    none: "",
    small: "gap-2",
    medium: "gap-4",
    large: "gap-6",
    extraLarge: "gap-12",
};

export const colorMap : Record<string,string> = {
    "light-blue": "bg-azure text-white",
    "blue": "bg-vulcan before:bg-vulcan text-white",
    "orange": "bg-tangy text-vulcan",
    "green": "bg-verdansk text-vulcan",
    "red": "bg-paleruby text-white",
    "white": "bg-white text-vulcan"
}

export const paddingTopMap : Record<string,string> = {
    "small": "pt-4",
    "medium": "pt-8",
    "large": "pt-16",
    "extraLarge": "pt-40",
}

export const paddingBottomMap : Record<string,string> = {
    "small": "pb-4",
    "medium": "pb-8",
    "large": "pb-12",
    "extraLarge": "pb-32",
}

export const marginTopMap : Record<string,string> = {
    "small": "mt-4",
    "medium": "mt-8",
    "large": "mt-12",
    "extraLarge": "mt-32",
}

export const marginBottomMap : Record<string,string> = {
    "small": "mb-4",
    "medium": "mb-8",
    "large": "mb-12",
    "extraLarge": "mb-32",
}