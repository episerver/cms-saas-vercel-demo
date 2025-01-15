import type { CTAElementDefaultStylesComponent } from './displayTemplates'
import { type CTAElementDataFragment } from "@/gql/graphql"
import { extractSettings } from "@remkoj/optimizely-cms-react/rsc"
import Button from './_base'

export const DefaultCTAElement : CTAElementDefaultStylesComponent<CTAElementDataFragment> = ({ data: { cta_link: link, cta_text: text }, layoutProps, className, ...containerProps }) => {
    const { 
        buttonAlign = "auto", 
        buttonType ="primary", 
        buttonColor = "default",
        buttonVariant = "default" 
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
    
    return <Button { ...containerProps } href={link} containerClassName='py-4' className={ cssClasses.join(' ') } text={text} buttonType={ buttonType } buttonColor={ buttonColor } buttonVariant={buttonVariant} />
}