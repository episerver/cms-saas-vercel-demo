import type { CTAElementAnimatedStylesComponent } from './displayTemplates'
import { type CTAElementDataFragment } from "@/gql/graphql"
import { extractSettings } from "@remkoj/optimizely-cms-react/components"
import Animate from '@/components/shared/animation'
import Button from './_base'

export const AnimatedCTAElement : CTAElementAnimatedStylesComponent<CTAElementDataFragment> = ({ data: { cta_link: link, cta_text: text }, layoutProps, className, ...containerProps }) => {
    const { buttonAlign, buttonType, delay, duration } = extractSettings(layoutProps)
    const cssClasses : (string | undefined)[] = [ "block w-fit", className ] 
    switch (buttonAlign) {
        case "left":
            cssClasses.push('ml-0','mr-auto')
            break;
        case "center":
            cssClasses.push('mx-auto')
            break;
        case "right":
            cssClasses.push('ml-auto','mr-0')
            break;
        default:
            // Nothing
            break;
    }
    let animDelay : number = 0
    let animDuration : number = 0
    switch (delay) {
        case "short":
            animDelay = 0.5
            break;
        case "medium":
            animDelay = 1
            break;
        case "long":
            animDelay = 1.5
            break;
        case "verylong":
            animDelay = 5
            break;
    }
    switch (duration) {
        case "short":
            animDuration = 0.5
            break;
        case "medium":
            animDuration = 1
            break;
        case "long":
            animDuration = 1.5
            break;
        case "verylong":
            animDuration = 2
            break;
    }
    return <Animate initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: animDuration, delay: animDelay }}>
        <Button href={link} className={ cssClasses.join(' ') } text={text} buttonType={buttonType} { ...containerProps } />
    </Animate>
}

export default AnimatedCTAElement