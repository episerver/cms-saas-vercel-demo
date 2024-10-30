import 'server-only';
import React from 'react';
import { isDevelopment, isDebug } from "./is-debug.js";
import { getFactory } from '../factory.js';
import { contentLinkIsEqual } from "@remkoj/optimizely-graph-client";
class DefaultServerContext {
    constructor() {
        this._inEditMode = false;
        this._forceEditorWarnings = false;
        this._client = undefined;
        this._factory = undefined;
        this._locale = undefined;
        this._editableContent = undefined;
    }
    get inEditMode() {
        return this._inEditMode;
    }
    get isDebug() {
        return isDebug();
    }
    get isDevelopment() {
        return isDevelopment();
    }
    get isDebugOrDevelopment() {
        return isDevelopment() || isDebug();
    }
    get client() {
        return this._client;
    }
    get factory() {
        return this._factory ?? getFactory();
    }
    get forceEditorWarnings() {
        return this._forceEditorWarnings;
    }
    get locale() {
        return this._locale;
    }
    setInEditMode(newValue) {
        this._inEditMode = newValue;
        return this;
    }
    setOptimizelyGraphClient(newValue) {
        this._client = newValue;
        return this;
    }
    setComponentFactory(newValue) {
        this._factory = newValue;
        return this;
    }
    setForceEditorWarnings(newValue) {
        this._forceEditorWarnings = newValue;
        return this;
    }
    setLocale(newValue) {
        this._locale = newValue;
        return this;
    }
    setEditableContentId(newId) {
        this._editableContent = newId;
        return this;
    }
    isEditableContent(id) {
        if (!this.inEditMode || !this._editableContent)
            return false; // We can on be editable in edit mode and with an id set
        return contentLinkIsEqual(this._editableContent, id);
    }
}
/**
 * Retrieve the working instance of the component factory, which is memoized through the React.cache()
 * server side react method. This ensures the context will not be shared across pre-renders / requests.
 */
//@ts-expect-error  React.cache is a canary function, not yet always properly resolved by TypeScript
export const getServerContext = React.cache(() => {
    const ctx = new DefaultServerContext();
    if (ctx.isDebug)
        console.log('🦺 [ServerContext] Created new context');
    return ctx;
});
export default getServerContext;
//# sourceMappingURL=context.js.map