import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ArrowPathIcon, UserGroupIcon } from '@heroicons/react/20/solid';
import useSWR from 'swr';
export const AudiencesPanel = ({ servicePrefix = '/api/me', refreshInterval = 0 }) => {
    const topics = `${servicePrefix}?scope=audiences`;
    const { data: profile, isLoading, isValidating, error } = useSWR(topics, {
        revalidateOnMount: true,
        revalidateIfStale: true,
        refreshInterval: refreshInterval > 0 ? Math.max(refreshInterval, 20000) : 0, //Maximum refresh interval for audiences is 20 seconds
        fetcher: () => fetch(topics).then(r => {
            if (!r.ok)
                throw new Error(`${r.status}: ${r.statusText}`);
            return r.json();
        }),
    });
    if (error)
        return _jsx("p", { className: 'oo-m-2 md:oo-m-4 oo-rounded-md oo-bg-amber-200 oo-border oo-border-amber-800 oo-text-amber-800 oo-p-1 md:oo-p-2', children: "There was an error loading your profile information" });
    return _jsxs(_Fragment, { children: [_jsxs("p", { className: 'oo-font-bold', children: ["Audiences", (isValidating && !isLoading) && _jsx(ArrowPathIcon, { className: 'oo-inline-block oo-h-4 oo-w-4 oo-ml-2 oo-animate-spin' })] }), isLoading && _jsxs("p", { className: 'oo-m-2 md:oo-m-4 oo-rounded-md oo-bg-amber-200 oo-border oo-border-amber-800 oo-text-amber-800 oo-p-1 md:oo-p-2', children: [_jsx(ArrowPathIcon, { className: 'oo-inline-block oo-h-4 oo-w-4 oo-mr-2 oo-animate-spin' }), "Loading the audiences..."] }), _jsx("ul", { className: `oo-text-sm oo-grid oo-grid-cols-1 oo-divide-y`.trimEnd(), children: (profile?.audiences ?? []).map(a => {
                    return _jsxs("li", { className: 'oo-py-1', children: [_jsx(UserGroupIcon, { className: 'oo-inline-block oo-h-4 oo-w-4 oo-mr-2' }), a.name] }, "audience-" + a.id);
                }) })] });
};
export default AudiencesPanel;
