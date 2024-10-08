import type { LayoutProps } from "@remkoj/optimizely-cms-react/components"
import type { ReactNode } from "react"
import type DefaultVideoStyles from "./DefaultVideo.opti-style.json"

export type DefaultVideoProps = LayoutProps<typeof DefaultVideoStyles>
export type DefaultVideoComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: DefaultVideoProps | undefined
} & JSX.IntrinsicElements['div']
export type DefaultVideoComponent<DT extends Record<string, any> = Record<string, any>> = (props: DefaultVideoComponentProps<DT>) => ReactNode


export type VideoElementLayoutProps = DefaultVideoProps
export type VideoElementComponentProps<DT extends Record<string, any> = Record<string, any>, LP extends VideoElementLayoutProps = VideoElementLayoutProps> = {
    data: DT
    layoutProps: LP | undefined
} & JSX.IntrinsicElements['div']

export type VideoElementComponent<DT extends Record<string, any> = Record<string, any>, LP extends VideoElementLayoutProps = VideoElementLayoutProps> = (props: VideoElementComponentProps<DT,LP>) => ReactNode

export function isDefaultProps(props?: VideoElementLayoutProps | null) : props is DefaultVideoProps
{
    return props?.template == "DefaultVideo"
}

export function isDefaultVideoProps(props?: VideoElementLayoutProps | null) : props is DefaultVideoProps
{
    return props?.template == "DefaultVideo"
}