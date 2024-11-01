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
        justify: 'text-justify'
    },
    transform: {
        uppercase: 'uppercase',
        lowercase: 'lowercase',
        capitalize: 'capitalize',
        keep: ''
    },
    headingType: {
        h1: 'font-bold my-0 text-[4.8rem] lg:text-[6.4rem] xl:text-[7.2rem]',
        h2: 'font-bold my-0 text-[4.2rem] lg:text-[4.8rem] xl:text-[6.4rem]',
        h3: 'font-bold my-0 text-[3.6rem] lg:text-[4.2rem] xl:text-[4.8rem]',
        h4: 'font-bold my-0 text-[3.0rem] lg:text-[3.6rem] xl:text-[4.2rem]',
        h5: 'font-bold my-0 text-[2.4rem] lg:text-[3.0rem] xl:text-[3.6rem]',
        h6: 'font-bold my-0',
        plain: 'my-0',
    },
    delay: {
        short: 500,
        medium: 1000,
        long: 1500,
        verylong: 2000,
        none: 0
    }
}