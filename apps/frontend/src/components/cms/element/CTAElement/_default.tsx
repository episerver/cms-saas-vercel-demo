import type { CTAElementDefaultStylesComponent } from './displayTemplates'
import { type CTAElementDataFragment } from "@/gql/graphql"
import { extractSettings } from "@remkoj/optimizely-cms-react/components"
import Button from './_base'

export const DefaultCTAElement : CTAElementDefaultStylesComponent<CTAElementDataFragment> = ({ data: { cta_link: link, cta_text: text }, layoutProps, className, ...containerProps }) => {
    const { 
        buttonAlign = "auto", 
        buttonType ="primary", 
        buttonColor = "default" 
    } = extractSettings(layoutProps)
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
    
    return <div { ...containerProps } className='py-4'>
        <Button href={link} className={ cssClasses.join(' ') } text={text} buttonType={ buttonType } buttonColor={ buttonColor } />
    </div>
}