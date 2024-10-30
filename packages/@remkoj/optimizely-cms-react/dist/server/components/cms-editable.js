import { jsx as _jsx } from "react/jsx-runtime";
import 'server-only';
import { getServerContext } from '@remkoj/optimizely-cms-react/rsc';
/**
 * Server side wrapper to create HTML elements that include the needed
 * data-epi- properties to render the edit mode markers
 *
 * @param   param0      The HTML element with the simple properties
 * @returns
 */
//@ts-expect-error TypeScript just doesn't understand....
export const CmsEditable = ({ as: DefaultElement, cmsId, cmsFieldName, children, key, ...props }) => {
    const HtmlElement = DefaultElement ?? 'div';
    const { inEditMode } = getServerContext();
    return _jsx(HtmlElement, { ...props, "data-epi-block-id": inEditMode ? cmsId ?? undefined : undefined, "data-epi-property-name": inEditMode ? cmsFieldName ?? undefined : undefined, children: children });
};
export default CmsEditable;
//# sourceMappingURL=cms-editable.js.map