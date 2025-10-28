import { type FunctionComponent, type PropsWithChildren, type ComponentProps } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

type ButtonTypes = typeof buttonTypes
type ButtonVariants = typeof buttonVariants
type ButtonColors = typeof buttonColors

export type ButtonProps = Readonly<PropsWithChildren<{
    url?: string | URL
    buttonType?: keyof ButtonTypes
    buttonVariant?: keyof ButtonVariants
    buttonColor?: keyof ButtonColors
}> & Omit<ComponentProps<typeof Link>, 'href' | 'as' | 'type' | 'ref'>>

const buttonTypes = {
    primary: "btn--primary",
    secondary: "btn--secondary",
};
const buttonVariants = {
    default: "",
    cta: "btn-before",
};
const buttonColors = {
    default: "",
    dark: "btn-style-dark",
    light: "btn-style-light"
}
export const Button : FunctionComponent<ButtonProps> = ({
    className = "",
    buttonType = "primary",
    buttonVariant = "default",
    buttonColor = "default",
    url = "#", 
    children, 
    ...props }
) => {
    const hrefValue = url ? (typeof url == 'string' ? url : url.href) : "#"
    return <Link href={ hrefValue } className={ cn(buttonTypes[buttonType], buttonVariants[buttonVariant], buttonColors[buttonColor], className) } {...props}>
        <div className="btn__content">{children}</div>
    </Link> 
  }
  
  export default Button;