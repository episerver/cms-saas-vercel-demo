import type { LayoutProps } from "@remkoj/optimizely-cms-react/components"
import type { ReactNode } from "react"
import type CTAElementAnimatedStylesStyles from "./CTAElementAnimatedStyles.opti-style.json"
import type CTAElementDefaultStylesStyles from "./CTAElementDefaultStyles.opti-style.json"

export type CTAElementAnimatedStylesProps = LayoutProps<typeof CTAElementAnimatedStylesStyles>
export type CTAElementAnimatedStylesComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: CTAElementAnimatedStylesProps | undefined
} & JSX.IntrinsicElements['div']
export type CTAElementAnimatedStylesComponent<DT extends Record<string, any> = Record<string, any>> = (props: CTAElementAnimatedStylesComponentProps<DT>) => ReactNode

export type CTAElementDefaultStylesProps = LayoutProps<typeof CTAElementDefaultStylesStyles>
export type CTAElementDefaultStylesComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: CTAElementDefaultStylesProps | undefined
} & JSX.IntrinsicElements['div']
export type CTAElementDefaultStylesComponent<DT extends Record<string, any> = Record<string, any>> = (props: CTAElementDefaultStylesComponentProps<DT>) => ReactNode


export type CTAElementLayoutProps = CTAElementAnimatedStylesProps | CTAElementDefaultStylesProps
export type CTAElementComponentProps<DT extends Record<string, any> = Record<string, any>, LP extends CTAElementLayoutProps = CTAElementLayoutProps> = {
    data: DT
    layoutProps: LP | undefined
} & JSX.IntrinsicElements['div']

export type CTAElementComponent<DT extends Record<string, any> = Record<string, any>, LP extends CTAElementLayoutProps = CTAElementLayoutProps> = (props: CTAElementComponentProps<DT,LP>) => ReactNode

export function isDefaultProps(props?: CTAElementLayoutProps | null) : props is CTAElementDefaultStylesProps
{
    return props?.template == "CTAElementDefaultStyles"
}

export function isCTAElementAnimatedStylesProps(props?: CTAElementLayoutProps | null) : props is CTAElementAnimatedStylesProps
{
    return props?.template == "CTAElementAnimatedStyles"
}

export function isCTAElementDefaultStylesProps(props?: CTAElementLayoutProps | null) : props is CTAElementDefaultStylesProps
{
    return props?.template == "CTAElementDefaultStyles"
}