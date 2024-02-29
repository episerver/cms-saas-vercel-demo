'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
const DEV = process.env.NODE_ENV == 'development';
export const OnPageEdit = ({ mode, children, className, timeout }) => {
    const router = useRouter();
    const [optiCmsReady, setOptiCmsReady] = useState(false);
    const [showMask, setShowMask] = useState(false);
    timeout = timeout ?? 1500;
    // Bind to the CMS & CMS Ready State
    useEffect(() => {
        console.log("Reading Opti CMS Context");
        const fxCms = tryGetCms();
        const cmsReady = fxCms?.ready ?? false;
        setOptiCmsReady(cmsReady);
        if (!cmsReady) {
            const cancelToken = setInterval(() => {
                const updateCms = tryGetCms();
                const updatedCmsReady = updateCms?.ready ?? false;
                if (updatedCmsReady) {
                    clearInterval(cancelToken);
                    setOptiCmsReady(updatedCmsReady);
                }
            }, 250);
            return () => {
                clearInterval(cancelToken);
            };
        }
    }, []);
    // Bind to the Saved event
    useEffect(() => {
        if (!optiCmsReady)
            return;
        const previewUrl = window.location.href;
        let handlerEnabled = true;
        // Define event handler
        let maskTimer = false;
        function onContentSaved(eventData) {
            setShowMask(true);
            if (maskTimer != false)
                clearTimeout(maskTimer);
            console.log(`Delaying refresh with ${timeout}ms to allow Optimizely Graph to update`);
            maskTimer = setTimeout(() => {
                const contentId = window.location.pathname.split(',,')[1];
                const newContentId = eventData.contentLink;
                if (previewUrl == eventData.previewUrl) {
                    console.log(`Refreshing preview: ${contentId} => ${newContentId}`);
                    router.refresh();
                    //setShowMask(false)
                }
                else {
                    const newUrl = new URL(eventData.previewUrl);
                    console.log(`Navigating to new preview: ${contentId} => ${newContentId}`);
                    router.push(newUrl.pathname + newUrl.search);
                    setShowMask(false);
                }
            }, timeout);
        }
        // Subscribe to event
        console.log(`Subscribing to ContentSaved Event`);
        const opti = tryGetCms();
        opti?.subscribe('contentSaved', (eventData) => {
            if (!handlerEnabled)
                return;
            onContentSaved(eventData);
        });
        // Unsubscribe when needed
        return () => {
            console.log(`Navigating away, disabling ContentSaved event handler`);
            handlerEnabled = false;
        };
    }, [optiCmsReady, router, timeout]);
    return React.createElement(React.Fragment, null, showMask && React.createElement("div", { className: `loading-mask ${className}`.trimEnd() }, children));
};
function tryGetCms() {
    try {
        return window.epi;
    }
    catch {
        return undefined;
    }
}
export default OnPageEdit;
