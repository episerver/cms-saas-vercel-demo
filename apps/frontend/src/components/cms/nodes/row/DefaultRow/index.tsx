import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react";
import { extractSettings } from "@remkoj/optimizely-cms-react/components";
import { DefaultRowProps } from "../displayTemplates";

export const DefaultRow : CmsLayoutComponent<DefaultRowProps> = ({ contentLink, layoutProps, children }) => {
    const layout = extractSettings(layoutProps);
    return (<div className="vb:row vb:row:DefaultRow">{ children }</div>);
}

export default DefaultRow;