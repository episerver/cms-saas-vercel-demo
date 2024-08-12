import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react";
import { extractSettings } from "@remkoj/optimizely-cms-react/components";
import { CardColumnProps } from "../displayTemplates";
import Card from '@/components/shared/card';

export const CardColumn : CmsLayoutComponent<CardColumnProps> = ({ layoutProps, children }) => {
    const outerCssClasses : string = "vb:column vb:column:CardColumn flex-1"
    const innerCssClasses: string = `flex flex-col prose prose-p:text-[2rem] prose-span:text-[2rem] max-w-full gap-4 lg:gap-8`;
    const {
        colBackgroundColor = 'blue',
        itemOrderOnSmallScreen = 'normal'
    } = extractSettings(layoutProps)
    
    return <Card cardColor={ colBackgroundColor } className={ outerCssClasses } innerClassName={ innerCssClasses } direction="col">{ children }</Card>
}

export default CardColumn;