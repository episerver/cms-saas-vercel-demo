import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react";
import { extractSettings } from "@remkoj/optimizely-cms-react/components";
import { CardRowProps } from "../displayTemplates";

export const CardRow : CmsLayoutComponent<CardRowProps> = ({ contentLink, layoutProps, children }) => {
    const layout = extractSettings(layoutProps);
    return (<div className="vb:row vb:row:CardRow">{ children }</div>);
}

export default CardRow;