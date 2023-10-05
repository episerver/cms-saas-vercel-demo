"use client"
import React, { type PropsWithChildren } from "react";
import { type ApolloLink, from } from "@apollo/client";
import { ApolloNextAppProvider, NextSSRInMemoryCache, NextSSRApolloClient, SSRMultipartLink } from "@apollo/experimental-nextjs-app-support/ssr";
import { createContentGraphLink, createQueryLogger, createErrorLogger, ForceHmacAuthentication, type ContentGraphConfig } from "@remkoj/optimizely-dxp-react"

const DEBUG = process.env.NODE_ENV == 'development'

function makeSsrClientAdvanced(token?: string, config?: ContentGraphConfig)
{
    const links : ApolloLink[] = []

    if (DEBUG)
        links.push(createQueryLogger(console))
    links.push(createErrorLogger(console))
    if (typeof window === "undefined")
        links.push(new SSRMultipartLink({ stripDefer: true }))
    links.push(createContentGraphLink(token, config))

    return new NextSSRApolloClient({
        connectToDevTools: DEBUG,
        cache: new NextSSRInMemoryCache(),
        link: from(links)
    })
}

export const makeSsrClient = () => makeSsrClientAdvanced()
export const makeHmacSsrClient = () => makeSsrClientAdvanced(ForceHmacAuthentication)
export const makeAuthSsrClient = (token: string) => makeSsrClientAdvanced(token)

export type ContentGraphProviderProps = PropsWithChildren<{
    token?: string
}>

export function ContentGraphProvider({ children, token }: ContentGraphProviderProps)
{
    return <ApolloNextAppProvider makeClient={ () => makeSsrClientAdvanced(token) }>
        { children }
    </ApolloNextAppProvider>
}