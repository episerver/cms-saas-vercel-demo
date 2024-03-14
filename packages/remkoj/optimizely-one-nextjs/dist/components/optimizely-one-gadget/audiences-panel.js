import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from 'react';
import { ArrowPathIcon, UserGroupIcon } from '@heroicons/react/20/solid';
import useSWRInfinite from 'swr/infinite';
const buildGetKey = (servicePrefix, pageSize) => {
    const serviceURL = `${servicePrefix}?scope=audiences&limit=${pageSize}`;
    const getKey = (pageIndex, previousPageData) => {
        if (previousPageData && previousPageData.audiencesPageCount < pageIndex)
            return null;
        return `${serviceURL}&page=${pageIndex}`;
    };
    return getKey;
};
export const AudiencesPanel = ({ servicePrefix = '/api/me', refreshInterval = 0 }) => {
    // Prepare data fetching
    const pageSize = 50;
    const getKey = buildGetKey(servicePrefix, pageSize);
    const config = {
        initialSize: 1,
        revalidateAll: true,
        revalidateOnMount: true,
        revalidateIfStale: true,
        refreshInterval: refreshInterval > 0 ? Math.max(refreshInterval, 10000) : 0, //Minimum refresh interval for audiences is 10 seconds
        fetcher: async (key) => {
            return fetch(key).then(r => {
                if (!r.ok)
                    throw new Error(`${r.status}: ${r.statusText}`);
                return r.json();
            });
        },
    };
    // Fetch results
    const { data: profiles, isLoading, isValidating, error, size, setSize } = useSWRInfinite(getKey, config);
    // Post-process the received values
    const audiencePages = !profiles ? 1 : (profiles[0]?.audiencesPageCount || 1);
    const audienceCount = !profiles ? 0 : (profiles[0]?.audiencesCount || 0);
    const hasMore = size < audiencePages;
    // Automatically correct to the correct size, based upon the response
    useEffect(() => {
        let newSize = !profiles ? -1 : (profiles[0]?.audiencesPageCount || -1);
        if (newSize >= 1 && size != newSize)
            setSize(newSize);
    }, [size, profiles]);
    // Handle error
    if (error)
        return _jsx("p", { className: 'oo-m-2 md:oo-m-4 oo-rounded-md oo-bg-amber-200 oo-border oo-border-amber-800 oo-text-amber-800 oo-p-1 md:oo-p-2', children: "There was an error loading your profile information" });
    // Show list
    return _jsxs(_Fragment, { children: [(isValidating && !isLoading) && _jsxs("p", { className: 'oo-text-[14px] oo-m-2 md:oo-m-4 oo-rounded-md oo-bg-amber-200 oo-border oo-border-amber-800 oo-text-amber-800 oo-p-1 md:oo-p-2', children: [_jsx(ArrowPathIcon, { className: 'oo-inline-block oo-h-4 oo-w-4 oo-ml-2 oo-animate-spin' }), " Refreshing audiences"] }), hasMore && _jsxs("p", { className: 'oo-text-[14px] oo-border oo-border-amber-800 oo-bg-amber-200 oo-text-amber-800 oo-p-1 oo-my-1 oo-rounded-md', children: ["Showing results for the first ", size * pageSize, " audiences of ", audienceCount, ", ", _jsx("span", { onClick: () => setSize(size + 1), className: "oo-cursor-pointer oo-underline oo-text-blue-800", children: "load more" })] }), isLoading && _jsxs("p", { className: 'oo-m-2 md:oo-m-4 oo-rounded-md oo-bg-amber-200 oo-border oo-border-amber-800 oo-text-amber-800 oo-p-1 md:oo-p-2', children: [_jsx(ArrowPathIcon, { className: 'oo-inline-block oo-h-4 oo-w-4 oo-mr-2 oo-animate-spin' }), "Loading the audiences..."] }), _jsx("ul", { className: 'oo-text-[14px] oo-grid oo-grid-cols-1 oo-divide-y oo-divide-slate-200', children: (profiles || []).map(profile => (profile?.audiences ?? []).map(a => {
                    return _jsxs("li", { className: 'oo-py-1', children: [_jsx(UserGroupIcon, { className: 'oo-inline-block oo-h-4 oo-w-4 oo-mr-2' }), a.name] }, "audience-" + a.id);
                })).flat() }), hasMore && _jsx("p", { onClick: () => setSize(size + 1), className: 'oo-text-center oo-inline-block oo-cursor-pointer oo-px-2 oo-py-1 oo-border oo-border-b-0 oo-border-slate-300 oo-rounded-md oo-bg-blue-500 oo-text-white', children: "Load more" }), _jsxs("p", { className: 'oo-text-[12px] oo-m-2 oo-mt-3 oo-p-1 md:oo-p-2 oo-rounded-md oo-bg-amber-200 oo-border oo-border-amber-800 oo-text-amber-800', children: [_jsx("span", { className: 'oo-font-bold', children: "Please note:" }), " Interest based audiences are updated once per hour"] })] });
};
export default AudiencesPanel;
