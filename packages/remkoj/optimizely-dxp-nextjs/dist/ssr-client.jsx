"use client";
import { from } from "@apollo/client";
import { ApolloNextAppProvider, NextSSRInMemoryCache, NextSSRApolloClient, SSRMultipartLink } from "@apollo/experimental-nextjs-app-support/ssr";
import { createContentGraphLink, createQueryLogger, createErrorLogger, USE_HMAC_TOKEN } from "@remkoj/optimizely-dxp-react";
const DEBUG = process.env.DXP_DEBUG == '1';
function makeSsrClientAdvanced(token, config) {
    const links = [];
    if (DEBUG)
        links.push(createQueryLogger(console));
    links.push(createErrorLogger(console));
    if (typeof window === "undefined")
        links.push(new SSRMultipartLink({ stripDefer: true }));
    links.push(createContentGraphLink(token, config));
    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache(),
        link: from(links)
    });
}
export const makeSsrClient = () => makeSsrClientAdvanced();
export const makeHmacSsrClient = () => makeSsrClientAdvanced(USE_HMAC_TOKEN);
export const makeAuthSsrClient = (token) => makeSsrClientAdvanced(token);
export function ContentGraphProvider({ children, token }) {
    return <ApolloNextAppProvider makeClient={() => makeSsrClientAdvanced(token)}>
        {children}
    </ApolloNextAppProvider>;
}
