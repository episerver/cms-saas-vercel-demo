import { type FunctionComponent, type ComponentProps } from 'react'
import { type AnimatedHeadingStylesComponent } from './displayTemplates'
import { type HeadingElementDataFragment } from "@/gql/graphql"
import AnimatedText from "@/components/shared/animated_text"
import { extractSettings } from "@remkoj/optimizely-cms-react/rsc"
import { styleDictionary, styleDefaults } from './_styles'

type AnimatedHeadingElementProps = ComponentProps<AnimatedHeadingStylesComponent<HeadingElementDataFragment>> & {
    withReducedMotion?: boolean
}

export const AnimatedHeadingElement : FunctionComponent<AnimatedHeadingElementProps> = ({ data: { headingText }, layoutProps, className, withReducedMotion, ...containerProps }) => {
    const cssClasses : string[] = [className ?? '']
    const { 
        textAlign = styleDefaults.textAlign, 
        headingType = styleDefaults.headingType, 
        delay: delayValue = styleDefaults.delay,
        showAs = styleDefaults.showAs,
        transform = styleDefaults.transform
    } = extractSettings(layoutProps)
    
    const Component = showAs == 'element' ? 'p' : headingType == 'plain' ? 'p' : headingType
    cssClasses.push(styleDictionary.textAlign[textAlign])
    cssClasses.push(styleDictionary.headingType[headingType])
    cssClasses.push(styleDictionary.transform[transform])
    const delay = styleDictionary.delay[delayValue]

    return <div className={ cssClasses.filter(x=>x).join(' ') } { ...containerProps }>
        { withReducedMotion ? <Component>{ headingText ?? "" }</Component> : <AnimatedText el={ Component } text={ headingText ?? "" } delay={ delay } /> }
    </div>
}