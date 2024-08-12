import { type PropsWithChildren } from "react";
import { OuterColors, ContentDirections, CornerOptions, InnerColors, InnerCornerOptions } from "./styles";

type AllowedElements = keyof Omit<JSX.IntrinsicElements, 'svg'>
export type CardProps<E extends AllowedElements> = PropsWithChildren<{
    as?: E
    cardColor?: keyof typeof OuterColors
    innerClassName?: string
    direction?: keyof typeof ContentDirections
    roundedCorners?: keyof typeof CornerOptions
    withHoverEffect?: boolean
} & Omit<JSX.IntrinsicElements[E], 'children'>>

export type ColorOptions = keyof typeof OuterColors
export type DirectionOptions = keyof typeof ContentDirections
export type CornerOptions = keyof typeof CornerOptions

export const Card = <E extends AllowedElements>({
    as: htmlElement, 
    cardColor = "white", 
    children, 
    className = "",
    innerClassName = "",
    direction = "none",
    roundedCorners = "large",
    withHoverEffect: withHover = false,
    ...props 
}: CardProps<E>) => {
    const outerClasses : string = OuterColors[cardColor] + (withHover ? " before:content-[''] before:absolute before:top-[1px] before:left-[1px] before:w-[calc(100%-2px)] before:h-[calc(100%-2px)] before:z-[-1] before:bg-azure before:transition-transform before:ease-in-out before:duration-300 hover:before:translate-x-8 hover:before:translate-y-8 focus:before:translate-x-8 focus:before:translate-y-8" : '');
    const innerClasses : string = InnerColors[cardColor] + ""
    const directonClasses : string = ContentDirections[direction]
    const baseContainerClasses : string = "p-12 lg:p-24"
    const baseInnerClasses : string = "prose prose-p:text-[2rem] prose-span:text-[2rem] max-w-none gap-4 lg:gap-8"
    const cornerClasses : string = CornerOptions[roundedCorners]
    const innerCornerClasses : string = InnerCornerOptions[roundedCorners]

    type ActualElement = typeof htmlElement extends keyof JSX.IntrinsicElements ? E : 'div'
    const ContainerElement = (htmlElement ? htmlElement : 'div') as  ActualElement
    const innerContainer = <div className={ [directonClasses, baseInnerClasses, innerClasses, innerClassName].filter(x=>x && x.length > 0).join(' ') }>{ children }</div>

    return <ContainerElement className={ "@container/card "+[ (withHover ? "" : baseContainerClasses), outerClasses, cornerClasses, className].filter(x=>x && x.length > 0).join(' ') } {...props as any}>
        { withHover ? <div className={[baseContainerClasses, OuterColors[cardColor], innerCornerClasses, 'w-full h-full border-none'].join(' ')}>{ innerContainer }</div> : innerContainer }
    </ContainerElement>
}
Card.displayName = "Card Component"

export default Card