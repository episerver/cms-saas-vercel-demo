/// <reference types="react" />
export type StructuredHtmlProps = {
    data?: string | StructuredHtmlData | StructuredHtmlData[];
    locale?: string;
    key?: string;
};
type StructuredHtmlData = {
    componentType: string;
    attributes?: {
        [attributeKey: string]: any;
    };
    children?: StructuredHtmlData[];
    text?: string;
    contentId?: string;
    content?: string;
    contentType?: string[];
};
export declare const StructuredHtml: ({ data, locale }: StructuredHtmlProps) => Promise<JSX.Element>;
export {};
