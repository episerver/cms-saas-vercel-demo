export const OuterColors = {
    white: "bg-white dark:bg-vulcan-85 border-[2px] border-vulcan",
    blue: "bg-azure dark:bg-transparent dark:border-azure dark:border-4",
    dark_blue: "bg-vulcan dark:bg-vulcan-85",
    orange: "bg-tangy dark:bg-transparent dark:border-tangy dark:border-4",
    green: "bg-verdansk dark:bg-transparent dark:border-verdansk dark:border-4",
    red: "bg-paleruby dark:bg-transparent dark:border-paleruby dark:border-4",
    purple: "bg-people-eater dark:bg-transparent dark:border-people-eater dark:border-4"
}

export const InnerColors : { [ key in keyof typeof OuterColors ]: string } = {
    white: "text-vulcan dark:text-ghost-white prose-figcaption:text-vulcan-85 prose-blockquote:text-vulcan dark:prose-figcaption:text-ghost-white dark:prose-blockquote:text-ghost-white",
    blue: "text-white prose-h3:text-white prose-h2:text-white prose-figcaption:text-white prose-blockquote:text-white",
    dark_blue: "text-white prose-h3:text-white prose-h2:text-white prose-figcaption:text-white prose-blockquote:text-white",
    orange: "text-vulcan prose-blockquote:text-vulcan prose-figcaption:text-vulcan dark:text-ghost-white dark:prose-blockquote:text-ghost-white dark:prose-figcaption:text-ghost-white",
    green: "text-vulcan prose-blockquote:text-vulcan prose-figcaption:text-vulcan dark:text-ghost-white dark:prose-blockquote:text-ghost-white dark:prose-figcaption:text-ghost-white",
    red: "text-white prose-h3:text-white prose-h2:text-white prose-figcaption:text-white prose-blockquote:text-white",
    purple: "text-white prose-h3:text-white prose-h2:text-white prose-figcaption:text-white prose-blockquote:text-white"
}

export const ContentDirections = {
    none: "",
    row: "flex flex-col @[75rem]/card:flex-row flex-nowrap justify-stretch",
    row_small_reversed: "flex flex-col-reverse @[75rem]/card:flex-row flex-nowrap justify-stretch",
    row_reversed: "flex flex-col-reverse @[75rem]/card:flex-row-reverse flex-nowrap justify-stretch",
    col: "flex flex-col justify-stretch",
    col_reversed: "flex flex-col-reverse justify-stretch"
}

export const CornerOptions = {
    none: "",
    small: "rounded-[20px] before:rounded-[20px]",
    large: "rounded-[40px] before:rounded-[40px]"
}

export const InnerCornerOptions : { [key in keyof typeof CornerOptions]: string} = {
    none: "",
    small: "rounded-[20px]",
    large: "rounded-[40px]"
}