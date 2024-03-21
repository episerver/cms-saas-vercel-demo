export type ContentLink = {
    id: number;
    workId?: number | null;
    guidValue?: string | null;
} | {
    id?: number | null;
    workId?: number | null;
    guidValue: string;
};
export type ContentLinkWithLocale = ContentLink & {
    locale?: string;
};
export type Route = {
    language: string;
    path: string;
    url: URL;
    slug: string;
    changed: Date | null;
    published: Date | null;
    contentType: string[];
    id: number;
    workId?: number | null;
    guid: string;
    siteId: string;
};
