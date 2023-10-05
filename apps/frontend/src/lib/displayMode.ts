import type { CmsContentAreaClassMapper } from '@remkoj/optimizely-dxp-react-server'

export const ContentAreaClassMapper : CmsContentAreaClassMapper = displayOption => {
    // Make sure that the classes returned here are in the Tailwind safelist
    switch (displayOption)
    {
        case 'displaymode-screen':
            return 'w-full'
        case 'displaymode-full':
            return 'w-full'
        case 'displaymode-half':
            return 'w-1/2'
        case 'displaymode-one-third':
            return 'w-1/3'
        default:
            return 'w-auto'
    }
}

export default ContentAreaClassMapper