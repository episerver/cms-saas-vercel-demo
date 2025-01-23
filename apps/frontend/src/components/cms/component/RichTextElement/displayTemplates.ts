import type { LayoutProps } from "@remkoj/optimizely-cms-react"
import type { ReactNode } from "react"
import type DefaultRichTextStyles from "./DefaultRichText.opti-style.json"

export type DefaultRichTextProps = LayoutProps<typeof DefaultRichTextStyles>
export type DefaultRichTextComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: DefaultRichTextProps | undefined
} & JSX.IntrinsicElements['div']
export type DefaultRichTextComponent<DT extends Record<string, any> = Record<string, any>> = (props: DefaultRichTextComponentProps<DT>) => ReactNode


export type RichTextElementLayoutProps = DefaultRichTextProps
export type RichTextElementComponentProps<DT extends Record<string, any> = Record<string, any>, LP extends RichTextElementLayoutProps = RichTextElementLayoutProps> = {
    data: DT
    layoutProps: LP | undefined
} & JSX.IntrinsicElements['div']

export type RichTextElementComponent<DT extends Record<string, any> = Record<string, any>, LP extends RichTextElementLayoutProps = RichTextElementLayoutProps> = (props: RichTextElementComponentProps<DT,LP>) => ReactNode

export function isDefaultProps(props?: RichTextElementLayoutProps | null) : props is DefaultRichTextProps
{
    return props?.template == "DefaultRichText"
}

export function isDefaultRichTextProps(props?: RichTextElementLayoutProps | null) : props is DefaultRichTextProps
{
    return props?.template == "DefaultRichText"
}