import type { IOptiGraphClient } from "@remkoj/optimizely-graph-client";
import type { CmsComponent, ContentLink } from "@remkoj/optimizely-dxp-react";
import type { Metadata } from 'next';
export type OptimizelyNextPage<T = {}> = CmsComponent<T> & {
    getMetaData?: (contentLink: ContentLink, locale: string, client: IOptiGraphClient) => Promise<Metadata>;
};
