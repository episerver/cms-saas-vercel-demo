import { extractSettings, type CmsLayoutComponent } from "@remkoj/optimizely-cms-react/rsc";
import { type BackgroundRowProps } from "../displayTemplates";

export const BackgroundRow : CmsLayoutComponent<BackgroundRowProps> = ({ layoutProps, children }) => {
    const layout = extractSettings(layoutProps);
    return (
        <div className="vb:row vb:row:BackgroundRow absolute -z-10 top-0 left-0 w-full h-full overflow-y-hidden">{ children }</div>
    );
}

export default BackgroundRow;