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
    small: "gap-4",
    medium: "gap-8",
    large: "gap-12",
    extraLarge: "gap-24",
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
    "small": "pt-8",
    "medium": "pt-16",
    "large": "pt-24",
    "extraLarge": "pt-64",
}

export const paddingBottomMap : Record<string,string> = {
    "small": "pb-8",
    "medium": "pb-16",
    "large": "pb-24",
    "extraLarge": "pb-64",
}

export const marginTopMap : Record<string,string> = {
    "small": "mt-8",
    "medium": "mt-16",
    "large": "mt-24",
    "extraLarge": "mt-64",
}

export const marginBottomMap : Record<string,string> = {
    "small": "mb-8",
    "medium": "mb-16",
    "large": "mb-24",
    "extraLarge": "mb-64",
}