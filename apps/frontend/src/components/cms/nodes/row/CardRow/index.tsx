import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react";
import { extractSettings } from "@remkoj/optimizely-cms-react/components";
import { CardRowProps } from "../displayTemplates";
import Card from '@components/shared/card'

export const CardRow : CmsLayoutComponent<CardRowProps> = ({ contentLink, layoutProps, children }) => {
    const additionalClasses: string[] = [];
    const {
        rowBackgroundColor: color = "white",
        columnOrderOnSmallScreen: colOrder = "normal",
        vSpacing = "small"
    } = extractSettings(layoutProps)

    switch (vSpacing) {
        case "small":
            additionalClasses.push("my-2")
            break;
        case "medium":
            additionalClasses.push("my-4")
            break;
        case "large":
            additionalClasses.push("my-8")
            break;
        default:
            additionalClasses.push("my-0")
            break;
    }
    return <Card cardColor={ color } className={`vb:row vb:row:CardRow ${ additionalClasses.join(' ')}`} direction={ colOrder == 'reversed' ? 'row_small_reversed' : 'row'}>
        { children }
    </Card>
}

export default CardRow;