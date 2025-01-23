import { type FunctionComponent, type PropsWithChildren, type ComponentProps, type ComponentType } from "react"
import Link from "next/link"

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
    default: "btn--default",
    cta: "btn--cta",
};
const buttonColors = {
    default: "",
    dark: "btn--dark",
    light: "btn--light"
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
    const classNameValue = `${buttonTypes[buttonType]} ${ buttonVariants[buttonVariant] } ${ buttonColors[buttonColor] } ${className}`.trim()

    return <Link href={ hrefValue } className={ classNameValue } {...props}>
        <div className="btn__content">{children}</div>
    </Link> 
  }
  
  export default Button;