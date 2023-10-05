import React, { type PropsWithChildren } from "react";
import { NextSSRApolloClient } from "@apollo/experimental-nextjs-app-support/ssr";
export declare const makeSsrClient: () => NextSSRApolloClient<import("@apollo/client").NormalizedCacheObject>;
export declare const makeHmacSsrClient: () => NextSSRApolloClient<import("@apollo/client").NormalizedCacheObject>;
export declare const makeAuthSsrClient: (token: string) => NextSSRApolloClient<import("@apollo/client").NormalizedCacheObject>;
export type ContentGraphProviderProps = PropsWithChildren<{
    token?: string;
}>;
export declare function ContentGraphProvider({ children, token }: ContentGraphProviderProps): React.JSX.Element;
