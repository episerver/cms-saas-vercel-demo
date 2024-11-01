import type { HeadingStylesComponent } from './displayTemplates'
import { type HeadingElementDataFragment } from "@/gql/graphql"
import { extractSettings } from "@remkoj/optimizely-cms-react/components"
import { styleDictionary, styleDefaults } from './_styles'

export const DefaultHeadingElement : HeadingStylesComponent<HeadingElementDataFragment> = ({ data: { headingText }, layoutProps, className, ...containerProps }) => {
    const { 
        headingType = styleDefaults.headingType,
        showAs = styleDefaults.showAs,
        textAlign = styleDefaults.textAlign,
        transform = styleDefaults.transform
    } = extractSettings(layoutProps)
    const cssClasses : (string | undefined)[] = [ className, 'flex-initial' ]
    const Component = showAs == 'element' ? 'p' : headingType == 'plain' ? 'p' : headingType

    cssClasses.push(styleDictionary.textAlign[textAlign])
    cssClasses.push(styleDictionary.transform[transform])
    cssClasses.push(styleDictionary.headingType[headingType])

    const cssClassName = cssClasses.filter(x => x).join(' ')

    return <Component className={ cssClassName } {...containerProps}>{ headingText }</Component>
}