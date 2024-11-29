import { type LayoutPropsSettingKeys, type LayoutPropsSettingValues } from '@remkoj/optimizely-cms-react'
import { type  HeadingElementLayoutProps } from './displayTemplates'

export type StyleDictionary = Omit<{
    [K in LayoutPropsSettingKeys<HeadingElementLayoutProps>]: {
        [SV in LayoutPropsSettingValues<HeadingElementLayoutProps, K>]: string
    };
}, 'showAs' | 'delay'> & Pick<{
    [K in LayoutPropsSettingKeys<HeadingElementLayoutProps>]: {
        [SV in LayoutPropsSettingValues<HeadingElementLayoutProps, K>]: number
    };
}, 'delay'>
export type StyleDefaults = {
    [K in LayoutPropsSettingKeys<HeadingElementLayoutProps>]: LayoutPropsSettingValues<HeadingElementLayoutProps, K>
}

export const styleDefaults : StyleDefaults = {
    transform: 'keep',
    delay: 'none',
    headingType: 'h1',
    showAs: 'heading',
    textAlign: 'left'
}

export const styleDictionary : StyleDictionary = {
    textAlign: {
        left: 'text-left mr-auto',
        center: 'text-center mx-auto',
        right: 'text-right ml-auto',
        justify: 'text-justify w-full'
    },
    transform: {
        uppercase: 'uppercase',
        lowercase: 'lowercase',
        capitalize: 'capitalize',
        keep: ''
    },
    headingType: {
        h1: 'font-bold my-0 text-4xl lg:text-5xl xl:text-6xl',
        h2: 'font-bold my-0 text-3xl lg:text-4xl xl:text-5xl',
        h3: 'font-bold my-0 text-2xl lg:text-3xl xl:text-4xl',
        h4: 'font-bold my-0 text-xl lg:text-2xl xl:text-3xl',
        h5: 'font-bold my-0 text-lg lg:text-xl xl:text-2xl',
        h6: 'font-bold my-0 text-base',
        plain: 'my-0 text-base',
    },
    delay: {
        short: 500,
        medium: 1000,
        long: 1500,
        verylong: 2000,
        none: 0
    }
}