"use client";
import React from "react";
import { from } from "@apollo/client";
import { ApolloNextAppProvider, NextSSRInMemoryCache, NextSSRApolloClient, SSRMultipartLink } from "@apollo/experimental-nextjs-app-support/ssr";
import { createContentGraphLink, createQueryLogger, createErrorLogger, ForceHmacAuthentication } from "@remkoj/optimizely-dxp-react";
const DEBUG = process.env.NODE_ENV == 'development';
function makeSsrClientAdvanced(token, config) {
    const links = [];
    if (DEBUG)
        links.push(createQueryLogger(console));
    links.push(createErrorLogger(console));
    if (typeof window === "undefined")
        links.push(new SSRMultipartLink({ stripDefer: true }));
    links.push(createContentGraphLink(token, config));
    return new NextSSRApolloClient({
        connectToDevTools: DEBUG,
        cache: new NextSSRInMemoryCache(),
        link: from(links)
    });
}
export const makeSsrClient = () => makeSsrClientAdvanced();
export const makeHmacSsrClient = () => makeSsrClientAdvanced(ForceHmacAuthentication);
export const makeAuthSsrClient = (token) => makeSsrClientAdvanced(token);
export function ContentGraphProvider({ children, token }) {
    return React.createElement(ApolloNextAppProvider, { makeClient: () => makeSsrClientAdvanced(token) }, children);
}
