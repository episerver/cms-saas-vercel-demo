import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react";
import { extractSettings } from "@remkoj/optimizely-cms-react/rsc";
import { CardRowProps } from "../displayTemplates";
import Card from '@components/shared/card'

const vSpacingClasses = {
    small: "my-1",
    medium: "my-2",
    large: "my-4",
    none: "my-0"
}

export const CardRow : CmsLayoutComponent<CardRowProps> = ({ contentLink, layoutProps, children }) => {
    const additionalClasses: string[] = [];
    const {
        rowBackgroundColor: color = "white",
        columnOrderOnSmallScreen: colOrder = "normal",
        vSpacing = "small"
    } = extractSettings(layoutProps)

    additionalClasses.push(vSpacingClasses[vSpacing])
    
    return <Card cardColor={ color } className={`vb:row vb:row:CardRow ${ additionalClasses.join(' ')}`} direction={ colOrder == 'reversed' ? 'row_small_reversed' : 'row'}>
        { children }
    </Card>
}

export default CardRow;