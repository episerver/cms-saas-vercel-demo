import { type ComponentProps } from "react"
import Button from "@/components/shared/button"
import Link from 'next/link'
import { type LinkData } from "@/lib/urls"
import { omitCmsComponentProps } from "@/lib/filter-props"

export type BaseCTAProps = { 
    href?: LinkData | null,
    text?: string | null,
    buttonType?: ComponentProps<typeof Button>['buttonType'] | "link"
    buttonColor?: ComponentProps<typeof Button>['buttonColor']
    buttonVariant?: ComponentProps<typeof Button>['buttonVariant']
    containerClassName?: string
} & Omit<JSX.IntrinsicElements['div'], 'href' | 'text'>

export function BaseCTA({ href, text = 'Call-to-action', buttonType = "primary", buttonColor = "default", buttonVariant = "cta", className, containerClassName="", ...additionalProps }: BaseCTAProps ) {
    const hrefUrl = href?.default || '#'

    return <div className={"cta w-full "+containerClassName}  { ...omitCmsComponentProps(additionalProps) }>
        { buttonType == "link" ? 
            <Link href={ hrefUrl } className={ className }>{ text }</Link> : 
            <Button url={ hrefUrl } buttonType={ buttonType } buttonVariant={ buttonVariant } className={ className } buttonColor={ buttonColor }>{ text }</Button> 
        }
    </div>
}

export default BaseCTA