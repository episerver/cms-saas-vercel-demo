export const OuterColors = {
    white: "on-white",
    blue: "on-azure dark:border-4",
    dark_blue: "on-vulcan",
    orange: "on-tangy dark:border-4",
    green: "on-verdansk dark:border-4",
    red: "on-paleruby dark:border-4",
    purple: "on-people-eater dark:border-4"
}

export const InnerColors : { [ key in keyof typeof OuterColors ]: string } = {
    white: "",
    blue: "",
    dark_blue: "",
    orange: "",
    green: "",
    red: "",
    purple: ""
}

export const ContentDirections = {
    none: "",
    row: "flex flex-col @[37rem]/card:flex-row flex-nowrap justify-stretch",
    row_small_reversed: "flex flex-col-reverse @[37rem]/card:flex-row flex-nowrap justify-stretch",
    row_reversed: "flex flex-col-reverse @[37rem]/card:flex-row-reverse flex-nowrap justify-stretch",
    col: "flex flex-col h-full justify-between",
    col_reversed: "flex flex-col-reverse h-full justify-between"
}

export const CornerOptions = {
    none: "",
    small: "rounded-[1rem] before:rounded-[1rem]",
    large: "rounded-[2rem] before:rounded-[2rem]"
}

export const InnerCornerOptions : { [key in keyof typeof CornerOptions]: string} = {
    none: "",
    small: "rounded-[1rem]",
    large: "rounded-[2rem]"
}