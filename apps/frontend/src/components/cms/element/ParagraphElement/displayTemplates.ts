import type { LayoutProps } from "@remkoj/optimizely-cms-react/components"
import type { ReactNode } from "react"
import type DefaultParagraphStyles from "./DefaultParagraph.opti-style.json"

export type DefaultParagraphProps = LayoutProps<typeof DefaultParagraphStyles>
export type DefaultParagraphComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: DefaultParagraphProps | undefined
} & JSX.IntrinsicElements['div']
export type DefaultParagraphComponent<DT extends Record<string, any> = Record<string, any>> = (props: DefaultParagraphComponentProps<DT>) => ReactNode


export type ParagraphElementLayoutProps = DefaultParagraphProps
export type ParagraphElementComponentProps<DT extends Record<string, any> = Record<string, any>, LP extends ParagraphElementLayoutProps = ParagraphElementLayoutProps> = {
    data: DT
    layoutProps: LP | undefined
} & JSX.IntrinsicElements['div']

export type ParagraphElementComponent<DT extends Record<string, any> = Record<string, any>, LP extends ParagraphElementLayoutProps = ParagraphElementLayoutProps> = (props: ParagraphElementComponentProps<DT,LP>) => ReactNode

export function isDefaultProps(props?: ParagraphElementLayoutProps | null) : props is DefaultParagraphProps
{
    return props?.template == "DefaultParagraph"
}

export function isDefaultParagraphProps(props?: ParagraphElementLayoutProps | null) : props is DefaultParagraphProps
{
    return props?.template == "DefaultParagraph"
}