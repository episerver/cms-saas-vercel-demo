import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react";
import { extractSettings } from "@remkoj/optimizely-cms-react/rsc";
import { CardColumnProps } from "../displayTemplates";
import Card from '@/components/shared/card';

export const CardColumn : CmsLayoutComponent<CardColumnProps> = ({ layoutProps, children }) => {
    const outerCssClasses : string = "vb:column vb:column:CardColumn flex-1"
    const innerCssClasses: string = `flex flex-col max-w-full gap-4 lg:gap-4`;
    const {
        colBackgroundColor = 'blue',
        itemOrderOnSmallScreen = 'normal'
    } = extractSettings(layoutProps)
    
    return <Card cardColor={ colBackgroundColor } className={ outerCssClasses } innerClassName={ innerCssClasses } direction="col">{ children }</Card>
}

export default CardColumn;