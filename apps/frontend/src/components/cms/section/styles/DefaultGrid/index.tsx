import { extractSettings } from "@remkoj/optimizely-cms-react/components";
import { DefaultGridComponent } from "../displayTemplates";

export const DefaultGrid : DefaultGridComponent = ({ layoutProps, children }) => {
    const layout = extractSettings(layoutProps);
    return (<section className="vb:section vb:section:DefaultGrid">{ children }</section>);
}

export default DefaultGrid;