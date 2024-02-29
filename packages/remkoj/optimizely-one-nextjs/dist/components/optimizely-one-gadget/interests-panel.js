import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { TagIcon, ArrowPathIcon } from '@heroicons/react/20/solid';
import useSWR from 'swr';
export const InterestsPanel = ({ servicePrefix = '/api/me', refreshInterval = 2000 }) => {
    const topics = `${servicePrefix}?scope=topics`;
    const { data: profile, isLoading, isValidating, error } = useSWR(topics, {
        revalidateOnMount: true,
        fetcher: () => fetch(topics).then(r => {
            if (!r.ok)
                throw new Error(`${r.status}: ${r.statusText}`);
            return r.json();
        }),
        refreshInterval
    });
    if (error)
        return _jsx("p", { className: 'oo-m-2 md:oo-m-4 oo-rounded-md oo-bg-amber-200 oo-border oo-border-amber-800 oo-text-amber-800 oo-p-1 md:oo-p-2', children: "There was an error loading your profile information" });
    return _jsxs(_Fragment, { children: [_jsxs("p", { className: 'font-bold', children: ["Content interests", (isValidating && !isLoading) && _jsx(ArrowPathIcon, { className: 'inline-block h-4 w-4 ml-2 animate-spin' })] }), isLoading && _jsxs("p", { className: 'oo-m-2 md:oo-m-4 oo-rounded-md oo-bg-amber-200 oo-border oo-border-amber-800 oo-text-amber-800 oo-p-1 md:oo-p-2', children: [_jsx(ArrowPathIcon, { className: 'oo-inline-block oo-h-4 oo-w-4 oo-mr-2 oo-animate-spin' }), "Loading your interests..."] }), _jsx("ul", { className: `oo-text-sm oo-grid oo-grid-cols-1 oo-divide-y ${isValidating && 'oo-blur-sm'}`.trimEnd(), children: (profile?.contentTopics ?? []).map(t => {
                    return _jsxs("li", { className: 'oo-py-1', children: [_jsx(TagIcon, { className: 'oo-inline-block oo-h-4 oo-w-4 oo-mr-2' }), t] }, "topic-" + t);
                }) }), _jsxs("p", { className: 'oo-m-2 oo-mt-3 oo-p-1 md:oo-p-2 oo-rounded-md oo-bg-amber-200 oo-border oo-border-amber-800 oo-text-amber-800', children: [_jsx("span", { className: 'oo-font-bold', children: "Please note:" }), " Interest based audiences are updated once per hour"] })] });
};
export default InterestsPanel;
