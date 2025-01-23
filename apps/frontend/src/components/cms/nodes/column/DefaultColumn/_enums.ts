import { type extractSettings } from "@remkoj/optimizely-cms-react/rsc";
import { type DefaultColumnProps } from "../displayTemplates";

type DefaultColumnLayoutSpec = Required<ReturnType<typeof extractSettings<DefaultColumnProps>>>
type DefaultColumnLayoutDict<K extends keyof DefaultColumnLayoutSpec, T = any> = {
    [P in DefaultColumnLayoutSpec[K]]: T
}

export const contentSpacingClasses : DefaultColumnLayoutDict<'contentSpacing', string> = {
    none: 'gap-0 py-0',
    small: 'gap-1 py-1',
    medium: 'gap-2 py-2',
    large: 'gap-4 py-4 lg:gap-4 lg:py-4',
    xl: 'gap-6 py-6 lg:gap-12 lg:py-12',
    xxl: 'gap-8 py-8 lg:gap-36 lg:py-36',
}

export const justifyContentClasses : DefaultColumnLayoutDict<'justifyContent', string> = {
    start: 'justify-start justify-items-start',
    center: 'justify-center justify-items-center',
    end: 'justify-end justify-items-end',
}

export const alignContentClasses : DefaultColumnLayoutDict<'alignContent', string> = {
    start: 'content-start items-start',
    center: 'content-center items-center',
    end: 'content-end items-end',
}

export const showFromClasses : DefaultColumnLayoutDict<'showFrom', string> = {
    fromSmall: 'hidden sm:block',
    fromMedium: 'hidden md:block',
    fromLarge: 'hidden lg:block',
    always: 'block',
}

export const minWidthClasses : DefaultColumnLayoutDict<'minWidth', string> = {
    small: 'lg:min-w-[12rem]',
    medium: 'lg:min-w-[24rem]',
    large: 'lg:min-w-[32rem]',
    auto: ''
}

export const overFlowClasses : DefaultColumnLayoutDict<'overflow', string> = {
    right: 'left-0',
    left: 'right-0',
    clip: 'overflow-hidden',
    full: ''
}
