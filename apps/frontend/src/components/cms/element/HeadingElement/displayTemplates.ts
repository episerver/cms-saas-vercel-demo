import type { LayoutProps } from "@remkoj/optimizely-cms-react"
import type { ReactNode } from "react"
import type HeadingStylesStyles from "./HeadingStyles.opti-style.json"
import type AnimatedHeadingStylesStyles from "./AnimatedHeadingStyles.opti-style.json"

export type HeadingStylesProps = LayoutProps<typeof HeadingStylesStyles>
export type HeadingStylesComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: HeadingStylesProps | undefined
} & JSX.IntrinsicElements['div']
export type HeadingStylesComponent<DT extends Record<string, any> = Record<string, any>> = (props: HeadingStylesComponentProps<DT>) => ReactNode

export type AnimatedHeadingStylesProps = LayoutProps<typeof AnimatedHeadingStylesStyles>
export type AnimatedHeadingStylesComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: AnimatedHeadingStylesProps | undefined
} & JSX.IntrinsicElements['div']
export type AnimatedHeadingStylesComponent<DT extends Record<string, any> = Record<string, any>> = (props: AnimatedHeadingStylesComponentProps<DT>) => ReactNode


export type HeadingElementLayoutProps = HeadingStylesProps | AnimatedHeadingStylesProps
export type HeadingElementComponentProps<DT extends Record<string, any> = Record<string, any>, LP extends HeadingElementLayoutProps = HeadingElementLayoutProps> = {
    data: DT
    layoutProps: LP | undefined
} & JSX.IntrinsicElements['div']

export type HeadingElementComponent<DT extends Record<string, any> = Record<string, any>, LP extends HeadingElementLayoutProps = HeadingElementLayoutProps> = (props: HeadingElementComponentProps<DT,LP>) => ReactNode

export function isDefaultProps(props?: HeadingElementLayoutProps | null) : props is HeadingStylesProps
{
    return props?.template == "HeadingStyles"
}

export function isHeadingStylesProps(props?: HeadingElementLayoutProps | null) : props is HeadingStylesProps
{
    return props?.template == "HeadingStyles"
}

export function isAnimatedHeadingStylesProps(props?: HeadingElementLayoutProps | null) : props is AnimatedHeadingStylesProps
{
    return props?.template == "AnimatedHeadingStyles"
}