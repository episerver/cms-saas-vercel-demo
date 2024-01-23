import { type FunctionComponent, type PropsWithChildren } from 'react';
export type OnPageEditProps = PropsWithChildren<{
    mode?: 'edit' | 'preview';
    className?: string;
    timeout?: number;
}>;
export type OptimizelyCmsContext = {
    ready: boolean;
    inEditMode: boolean;
    isEditable: boolean;
    subscribe: (event: string, handler: (...args: any) => void) => void;
};
export type OptimizelyCmsContentSavedEvent = {
    contentLink: string;
    editUrl: string;
    previewUrl: string;
};
declare global {
    interface Window {
        epi?: OptimizelyCmsContext;
    }
}
export declare const OnPageEdit: FunctionComponent<OnPageEditProps>;
export default OnPageEdit;
