import 'server-only'
import React from 'react'
import { isDevelopment, isDebug } from "./is-debug"
import { getFactory } from '../factory'
import type { ComponentFactory } from '../types'
import type { IOptiGraphClient } from "@remkoj/optimizely-graph-client"

export interface ServerContext {
    readonly inEditMode: Readonly<boolean>
    readonly isDevelopment: boolean
    readonly isDebug: boolean
    readonly isDebugOrDevelopment: boolean
    readonly client?: IOptiGraphClient 
    readonly factory: ComponentFactory
    readonly forceEditorWarnings: boolean
    readonly locale ?: string
    setInEditMode(newValue: boolean) : ServerContext
    setOptimizelyGraphClient(newValue: IOptiGraphClient) : ServerContext
    setComponentFactory(newValue: ComponentFactory) : ServerContext
    setForceEditorWarnings(newValue: boolean) : ServerContext
    setLocale(newValue: string | undefined): ServerContext
}

class DefaultServerContext implements ServerContext {
    private _inEditMode : boolean = false
    private _forceEditorWarnings : boolean = false
    private _client : IOptiGraphClient | undefined = undefined
    private _factory : ComponentFactory | undefined = undefined
    private _locale : string | undefined = undefined
    public get inEditMode() : boolean {
        return this._inEditMode
    }
    public get isDebug() : boolean {
        return isDebug()
    }
    public get isDevelopment() : boolean {
        return isDevelopment()
    }
    public get isDebugOrDevelopment() : boolean {
        return isDevelopment() || isDebug()
    }
    public get client() : IOptiGraphClient | undefined {
        return this._client
    }
    public get factory() : ComponentFactory {
        return this._factory ?? getFactory()
    }
    public get forceEditorWarnings() : boolean {
        return this._forceEditorWarnings
    }
    public get locale() : string | undefined {
        return this._locale
    }
    public setInEditMode(newValue: boolean) : ServerContext
    {
        this._inEditMode = newValue
        return this
    }
    public setOptimizelyGraphClient(newValue: IOptiGraphClient): ServerContext {
        this._client = newValue
        return this
    }
    public setComponentFactory(newValue: ComponentFactory): ServerContext {
        this._factory = newValue
        return this
    }
    public setForceEditorWarnings(newValue: boolean): ServerContext {
        this._forceEditorWarnings = newValue
        return this
    }
    public setLocale(newValue: string | undefined): ServerContext {
        this._locale = newValue
        return this
    }
}

/**
 * Retrieve the working instance of the component factory, which is memoized through the React.cache()
 * server side react method. This ensures the context will not be shared across pre-renders / requests.
 */
//@ts-expect-error  React.cache is a canary function, not yet always properly resolved by TypeScript
export const getServerContext : () => ServerContext = React.cache(() => {
    const ctx = new DefaultServerContext()
    if (ctx.isDebug)
        console.log('🦺 [ServerContext] Created new context')
    return ctx
})

export default getServerContext