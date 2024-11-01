import type { LayoutProps } from "@remkoj/optimizely-cms-react"
import type { ReactNode } from "react"
import type CardRowStyles from "./CardRow/CardRow.opti-style.json"
import type CarouselRowStyles from "./CarouselRow/CarouselRow.opti-style.json"
import type DefaultRowStyles from "./DefaultRow/DefaultRow.opti-style.json"

export type CardRowProps = LayoutProps<typeof CardRowStyles>
export type CardRowComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: CardRowProps | undefined
} & JSX.IntrinsicElements['div']
export type CardRowComponent<DT extends Record<string, any> = Record<string, any>> = (props: CardRowComponentProps<DT>) => ReactNode

export type CarouselRowProps = LayoutProps<typeof CarouselRowStyles>
export type CarouselRowComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: CarouselRowProps | undefined
} & JSX.IntrinsicElements['div']
export type CarouselRowComponent<DT extends Record<string, any> = Record<string, any>> = (props: CarouselRowComponentProps<DT>) => ReactNode

export type DefaultRowProps = LayoutProps<typeof DefaultRowStyles>
export type DefaultRowComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: DefaultRowProps | undefined
} & JSX.IntrinsicElements['div']
export type DefaultRowComponent<DT extends Record<string, any> = Record<string, any>> = (props: DefaultRowComponentProps<DT>) => ReactNode


export type RowLayoutProps = CardRowProps | CarouselRowProps | DefaultRowProps
export type RowComponentProps<DT extends Record<string, any> = Record<string, any>, LP extends RowLayoutProps = RowLayoutProps> = {
    data: DT
    layoutProps: LP | undefined
} & JSX.IntrinsicElements['div']

export type RowComponent<DT extends Record<string, any> = Record<string, any>, LP extends RowLayoutProps = RowLayoutProps> = (props: RowComponentProps<DT,LP>) => ReactNode

export function isDefaultProps(props?: RowLayoutProps | null) : props is DefaultRowProps
{
    return props?.template == "DefaultRow"
}

export function isCardRowProps(props?: RowLayoutProps | null) : props is CardRowProps
{
    return props?.template == "CardRow"
}

export function isCarouselRowProps(props?: RowLayoutProps | null) : props is CarouselRowProps
{
    return props?.template == "CarouselRow"
}

export function isDefaultRowProps(props?: RowLayoutProps | null) : props is DefaultRowProps
{
    return props?.template == "DefaultRow"
}