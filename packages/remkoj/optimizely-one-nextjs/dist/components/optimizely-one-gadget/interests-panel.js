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
    const contentTopics = (profile?.contentTopics ?? []).map(t => _jsxs("li", { className: 'oo-py-1', children: [_jsx(TagIcon, { className: 'oo-inline-block oo-h-[16px] oo-w-[16px] oo-mr-2' }), t] }, "topic-" + t));
    if (contentTopics.length == 0)
        contentTopics.push(_jsx("li", { className: 'oo-py-1', children: _jsx("div", { className: "oo-m-2 md:oo-m-4 oo-rounded-md oo-bg-amber-200 oo-border oo-border-amber-800 oo-text-amber-800 oo-p-1 md:oo-p-2", children: "No topics inferred from behaviour" }) }, "no-topics"));
    return _jsxs(_Fragment, { children: [(isValidating && !isLoading) && _jsxs("p", { className: 'oo-text-[14px] oo-m-2 md:oo-m-4 oo-rounded-md oo-bg-amber-200 oo-border oo-border-amber-800 oo-text-amber-800 oo-p-1 md:oo-p-2', children: [_jsx(ArrowPathIcon, { className: 'oo-inline-block oo-h-4 oo-w-4 oo-ml-2 oo-animate-spin' }), " Refreshing interests"] }), isLoading && _jsxs("p", { className: 'oo-m-2 md:oo-m-4 oo-rounded-md oo-bg-amber-200 oo-border oo-border-amber-800 oo-text-amber-800 oo-p-1 md:oo-p-2', children: [_jsx(ArrowPathIcon, { className: 'oo-inline-block oo-h-4 oo-w-4 oo-mr-2 oo-animate-spin' }), " Loading interests"] }), _jsx("ul", { className: 'oo-text-[14px] oo-grid oo-grid-cols-1 oo-divide-y oo-divide-slate-200', children: contentTopics })] });
};
export default InterestsPanel;
