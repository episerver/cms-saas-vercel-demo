'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState, useMemo } from 'react';
import WebExperimenationService from '../products/web-experimentation/client';
import DataPlatformService from '../products/data-platform/client';
import ContentRecsService from '../products/content-recs/client';
function isActiveWithActivatePage(toTest) {
    return (toTest.isActive && toTest.activatePage && typeof (toTest.activatePage) == 'function') ?? false;
}
function isActiveWithTrackPage(toTest) {
    return (toTest.isActive && toTest.trackPage && typeof (toTest.trackPage) == 'function') ?? false;
}
function isActiveWithEventTracker(toTest) {
    return (toTest.isActive && toTest.trackEvent && typeof (toTest.trackEvent) == 'function') ?? false;
}
const OptimizelyOneContext = createContext({ services: [], setDebug: () => { }, addService: () => { }, removeService: () => { } });
OptimizelyOneContext.displayName = "Optimizely One: Context";
function useOptimizelyOne() {
    const ctx = useContext(OptimizelyOneContext);
    const result = useMemo(() => {
        return {
            ...ctx,
            getActivatePageServices: () => (ctx.services || []).filter(isActiveWithActivatePage),
            getTrackPageServices: () => (ctx.services || []).filter(isActiveWithTrackPage),
            getService: (code) => (ctx.services || []).filter(s => s.code == code)[0],
            track: (event) => {
                if (ctx.disableTracking) {
                    if (ctx.debug)
                        console.log('🔐 [Optimizely One] Tracking disabled, ignored event');
                    return;
                }
                if (ctx.debug) {
                    console.groupCollapsed(`📢 [Optimizely One] Tracking ${event.event} event`);
                    console.log('Event:', event);
                }
                (ctx.services || []).filter(isActiveWithEventTracker).forEach(service => service.trackEvent(event));
                if (ctx.debug) {
                    console.groupEnd();
                }
            }
        };
    }, [ctx]);
    return result;
}
const OptimizelyOneProvider = ({ value, children }) => {
    const [ctxDebug, setCtxDebug] = useState(value?.debug ?? false);
    const [services, setServices] = useState([
        new WebExperimenationService(),
        new DataPlatformService(),
        new ContentRecsService(),
        ...(value?.services || [])
    ].sort((a, b) => a.order - b.order));
    services.forEach(service => service.debug = ctxDebug);
    return _jsx(OptimizelyOneContext.Provider, { value: {
            disableAutotracking: value?.disableAutotracking,
            disableTracking: value?.disableTracking,
            services,
            debug: ctxDebug,
            setDebug: debugEnabled => { services.forEach(service => service.debug = debugEnabled); setCtxDebug(debugEnabled); },
            addService: service => setServices(list => list.concat([service]).sort((a, b) => a.order - b.order)),
            removeService: service => {
                const idx = services.indexOf(service);
                if (idx == -1)
                    return;
                setServices(list => list.slice(0, idx).concat(list.slice(idx + 1)));
            },
        }, children: children });
};
OptimizelyOneProvider.displayName = "Optimizely One: State & Context provider";
export { OptimizelyOneProvider, useOptimizelyOne };
