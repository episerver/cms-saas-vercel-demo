import type { LayoutProps } from "@remkoj/optimizely-cms-react/components"
import type { ReactNode } from "react"
import type CardColumnStyles from "./CardColumn/CardColumn.opti-style.json"
import type DefaultColumnStyles from "./DefaultColumn/DefaultColumn.opti-style.json"

export type CardColumnProps = LayoutProps<typeof CardColumnStyles>
export type CardColumnComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: CardColumnProps | undefined
} & JSX.IntrinsicElements['div']
export type CardColumnComponent<DT extends Record<string, any> = Record<string, any>> = (props: CardColumnComponentProps<DT>) => ReactNode

export type DefaultColumnProps = LayoutProps<typeof DefaultColumnStyles>
export type DefaultColumnComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: DefaultColumnProps | undefined
} & JSX.IntrinsicElements['div']
export type DefaultColumnComponent<DT extends Record<string, any> = Record<string, any>> = (props: DefaultColumnComponentProps<DT>) => ReactNode


export type ColumnLayoutProps = CardColumnProps | DefaultColumnProps
export type ColumnComponentProps<DT extends Record<string, any> = Record<string, any>, LP extends ColumnLayoutProps = ColumnLayoutProps> = {
    data: DT
    layoutProps: LP | undefined
} & JSX.IntrinsicElements['div']

export type ColumnComponent<DT extends Record<string, any> = Record<string, any>, LP extends ColumnLayoutProps = ColumnLayoutProps> = (props: ColumnComponentProps<DT,LP>) => ReactNode