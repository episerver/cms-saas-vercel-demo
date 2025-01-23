import type { CTAElementAnimatedStylesComponent, CTAElementAnimatedStylesProps } from './displayTemplates'
import { type CTAElementDataFragment } from "@/gql/graphql"
import { extractSettings, type LayoutProps, type LayoutPropsSettingKeys, type LayoutPropsSettingValues } from "@remkoj/optimizely-cms-react/rsc"
import Animate from '@/components/shared/animation'
import Button from './_base'

type CTAValueMap<K extends LayoutPropsSettingKeys<CTAElementAnimatedStylesProps>, T = any> = {
    [P in LayoutPropsSettingValues<CTAElementAnimatedStylesProps, K>]: T
}

const AlignClasses : CTAValueMap<"buttonAlign", string> = {
    left: 'ml-0 mr-auto',
    center: 'mx-auto',
    right: 'ml-auto mr-0',
    auto: ''
}

const DelayValues : CTAValueMap<"delay", number> = {
    none: 0,
    short: 0.5,
    medium: 1,
    long: 1.5,
    verylong: 5,
}

const DurationValues : CTAValueMap<"duration", number> = {
    none: 0,
    short: 0.5,
    medium: 1,
    long: 1.5,
    verylong: 2,
}

export const AnimatedCTAElement : CTAElementAnimatedStylesComponent<CTAElementDataFragment> = ({ data: { cta_link: link, cta_text: text }, layoutProps, className, ...containerProps }) => {
    // Extract the actual layout properties and apply defaults
    const { 
        buttonAlign = "auto", 
        buttonType = "primary", 
        buttonVariant = "default",
        delay = "none", 
        duration = "none" 
    } = extractSettings(layoutProps)

    const cssClasses : (string | undefined)[] = [ "block w-fit", className ] 
    cssClasses.push(AlignClasses[buttonAlign])
    const animDelay = DelayValues[delay]
    const animDuration = DurationValues[duration]
    
    
    return <Animate initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: animDuration, delay: animDelay }} className='relative w-full'>
        <Button href={link} className={ cssClasses.join(' ') } text={text} buttonType={buttonType} buttonVariant={buttonVariant} { ...containerProps } />
    </Animate>
}

export default AnimatedCTAElement