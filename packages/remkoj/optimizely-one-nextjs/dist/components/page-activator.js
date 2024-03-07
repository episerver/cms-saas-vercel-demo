'use client';
import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useOptimizelyOne } from './context';
export const PageActivator = props => {
    const path = usePathname();
    const opti = useOptimizelyOne();
    useLayoutEffect(() => {
        if (opti.debug)
            console.groupCollapsed(`📑 [Optimizely One] Applying layout effects for: ${path}`);
        opti.getActivatePageServices().forEach(service => service.activatePage(path));
        if (opti.debug)
            console.groupEnd();
    }, [path, opti]);
    useEffect(() => {
        if (opti.disableAutotracking) {
            if (opti.debug)
                console.log('🔐 [Optimizely One] Automatic page tracking disabled');
            return;
        }
        if (opti.debug)
            console.groupCollapsed(`📢 [Optimizely One] Tracking page view for: ${path}`);
        opti.getTrackPageServices().forEach(service => service.trackPage(path));
        if (opti.debug)
            console.groupEnd();
    }, [path, opti]);
    return _jsx(_Fragment, { children: props.children });
};
PageActivator.displayName = "Optimizely One: (Layout) Effect processor";
export default PageActivator;
