import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react";
import { extractSettings } from "@remkoj/optimizely-cms-react/components";
import { CardColumnProps } from "../displayTemplates";

export const CardColumn : CmsLayoutComponent<CardColumnProps> = ({ contentLink, layoutProps, children }) => {
    const layout = extractSettings(layoutProps);
    return (<div className="vb:column vb:column:CardColumn">{ children }</div>);
}

export default CardColumn;