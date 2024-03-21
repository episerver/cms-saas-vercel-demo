'use client';
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Popover, Tab } from '@headlessui/react';
import { ChevronUpIcon, UserGroupIcon, TagIcon, RocketLaunchIcon, IdentificationIcon, Square3Stack3DIcon } from '@heroicons/react/20/solid';
import OptiLogo from './logo';
import { useIsInTestMode } from '../use-test-mode';
// Import the Panel CSS
import '../../styles.css';
// Prepare panel imports
import dynamic from 'next/dynamic';
const Panels = {
    Ids: dynamic(() => import('./ids-panel'), { ssr: false }),
    Experiments: dynamic(() => import('./exp-panel'), { ssr: false }),
    Interests: dynamic(() => import('./interests-panel'), { ssr: false }),
    Audiences: dynamic(() => import('./audiences-panel'), { ssr: false }),
    Graph: dynamic(() => import('./graph-panel'), { ssr: false })
};
/**
 * Add an Optimizely One Debug helper to the page, which can be triggered by
 * the "test cookie" feature of the Optimizely Web Experimentation browser
 * extension.
 *
 * @param       param0      The component properties
 * @returns     The component JSX
 */
export const OptimizelyOneGadget = ({ servicePrefix = "/api/me", refreshInterval = 0, show = undefined }) => {
    const inTestMode = useIsInTestMode();
    const forceHidden = show != undefined && show == false;
    const forceShown = show != undefined && show == true;
    if (forceHidden || (!forceShown && !inTestMode))
        return _jsx(_Fragment, {});
    console.groupCollapsed(`🔎 [Optimizely One Gadget] Initializing Optimizely Demo Gadget`);
    console.log(`Optimizely One Demo API: ${servicePrefix}`);
    console.log(`Refresh interval: ${refreshInterval == 0 ? 'DISABLED' : refreshInterval + 'ms'}`);
    console.groupEnd();
    return _jsxs(Popover, { className: "oo-gadget md:oo-fixed md:oo-bottom-0 oo-z-[500]", children: [_jsxs(Popover.Button, { className: 'oo-fixed oo-bottom-0 oo-right-0 oo-w-full oo-h-[50px] oo-flex oo-flex-row oo-justify-between oo-p-2 oo-border-t oo-border-slate-500 oo-bg-slate-100 oo-text-slate-800 md:oo-w-[350px] md:oo-right-4 md:oo-rounded-t-md md:oo-border-x oo-z-[500] oo-p-[10px]', children: [_jsx(OptiLogo, { className: 'oo-w-auto oo-h-full' }), _jsx(ChevronUpIcon, { className: "oo-ui-open:oo-rotate-180 oo-ui-open:oo-transform oo-h-full oo-w-auto oo-inline-block" })] }), _jsxs(Popover.Panel, { className: "oo-fixed oo-bottom-[50px] oo-right-0 oo-w-full oo-top-0 md:oo-border md:oo-border-slate-300 oo-bg-white md:oo-right-4 md:oo-bottom-[55px] md:oo-w-[600px] oo-z-[501] oo-max-w-full oo-flex oo-flex-col oo-justify-stretch md:oo-h-[350px] md:oo-top-auto md:oo-rounded-md md:oo-shadow-xl md:oo-overflow-hidden", children: [_jsxs("div", { className: "oo-border-b oo-border-slate-300 oo-bg-slate-100 oo-text-slate-800 oo-text-[18px] oo-font-bold oo-p-1 oo-flex-none md:oo-p-2", children: [_jsx(IdentificationIcon, { className: 'oo-inline-block oo-h-[24px] oo-w-[24px] oo-mr-2 oo-text-blue-500' }), "My Profile"] }), _jsxs(Tab.Group, { children: [_jsxs(Tab.List, { className: "oo-flex-none oo-flex oo-justify-between md:oo-justify-start oo-gap-2 oo-p-1 md:oo-p-2 oo-pb-0 md:oo-pb-0 oo-border-b oo-border-slate-300 oo-text-[14px]", children: [_jsxs(Tab, { as: "div", className: 'oo-text-center oo-inline-block oo-cursor-pointer oo-px-2 oo-py-1 oo-border oo-border-b-0 oo-border-slate-300 oo-rounded-t-md oo-ui-selected:oo-bg-blue-500 oo-ui-selected:oo-text-white', children: [_jsx(TagIcon, { className: 'oo-inline-block oo-h-[18px] oo-w-[18px] oo-mr-2' }), "Interests"] }), _jsxs(Tab, { as: "div", className: 'oo-text-center oo-inline-block oo-cursor-pointer oo-px-2 oo-py-1 oo-border oo-border-b-0 oo-border-slate-300 oo-rounded-t-md oo-ui-selected:oo-bg-blue-500 oo-ui-selected:oo-text-white', children: [_jsx(UserGroupIcon, { className: 'oo-inline-block oo-h-[18px] oo-w-[18px] oo-mr-2' }), "Audiences"] }), _jsxs(Tab, { as: "div", className: 'oo-text-center oo-inline-block oo-cursor-pointer oo-px-2 oo-py-1 oo-border oo-border-b-0 oo-border-slate-300 oo-rounded-t-md oo-ui-selected:oo-bg-blue-500 oo-ui-selected:oo-text-white', children: [_jsx(RocketLaunchIcon, { className: 'oo-inline-block oo-h-[18px] oo-w-[18px] oo-mr-2' }), "Experiments"] }), _jsxs(Tab, { as: "div", className: 'oo-text-center oo-inline-block oo-cursor-pointer oo-px-2 oo-py-1 oo-border oo-border-b-0 oo-border-slate-300 oo-rounded-t-md oo-ui-selected:oo-bg-blue-500 oo-ui-selected:oo-text-white', children: [_jsx(IdentificationIcon, { className: 'oo-inline-block oo-h-[18px] oo-w-[18px] oo-mr-2' }), "Identifiers"] }), _jsxs(Tab, { as: "div", className: 'oo-text-center oo-inline-block oo-cursor-pointer oo-px-2 oo-py-1 oo-border oo-border-b-0 oo-border-slate-300 oo-rounded-t-md oo-ui-selected:oo-bg-blue-500 oo-ui-selected:oo-text-white', children: [_jsx(Square3Stack3DIcon, { className: 'oo-inline-block oo-h-[18px] oo-w-[18px] oo-mr-2' }), "Graph"] })] }), _jsxs(Tab.Panels, { className: "oo-flex-1 md:oo-h-24 oo-overscroll-contain oo-overflow-y-auto", children: [_jsx(Tab.Panel, { as: "div", className: 'oo-p-1 md:oo-p-2', children: _jsx(Panels.Interests, { servicePrefix: servicePrefix, refreshInterval: refreshInterval }) }), _jsx(Tab.Panel, { as: "div", className: 'oo-p-1 md:oo-p-2', children: _jsx(Panels.Audiences, { servicePrefix: servicePrefix, refreshInterval: refreshInterval }) }), _jsx(Tab.Panel, { as: "div", className: 'oo-p-1 md:oo-p-2', children: _jsx(Panels.Experiments, {}) }), _jsx(Tab.Panel, { as: "div", className: 'oo-p-1 md:oo-p-2', children: _jsx(Panels.Ids, { servicePrefix: servicePrefix, refreshInterval: refreshInterval }) }), _jsx(Tab.Panel, { as: "div", className: 'oo-p-1 md:oo-p-2', children: _jsx(Panels.Graph, { servicePrefix: servicePrefix }) })] })] })] })] });
};
export default OptimizelyOneGadget;
