import 'server-only';
import { type ComponentProps, type ComponentType as ReactComponentType, type ExoticComponent as ReactExoticComponent } from 'react';
export type EditableComponentType = (ReactComponentType<any>) | (ReactExoticComponent<any>) | (keyof JSX.IntrinsicElements);
export type EditableComponentProps<FT extends EditableComponentType> = FT extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[FT] : ComponentProps<FT>;
export type CmsEditableProps<FT extends EditableComponentType> = {
    as?: FT;
} & ({
    cmsId?: string | null;
    cmsFieldName?: never;
} | {
    cmsId?: never;
    cmsFieldName?: string | null;
}) & EditableComponentProps<FT>;
/**
 * Server side wrapper to create HTML elements that include the needed
 * data-epi- properties to render the edit mode markers
 *
 * @param   param0      The HTML element with the simple properties
 * @returns
 */
export declare const CmsEditable: <CT extends EditableComponentType = "div">({ as: DefaultElement, cmsId, cmsFieldName, children, key, ...props }: CmsEditableProps<CT>) => import("react/jsx-runtime").JSX.Element;
export default CmsEditable;
