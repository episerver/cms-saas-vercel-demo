import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { usePathname } from 'next/navigation';
import useSWR from 'swr';
export const IdsPanel = ({ servicePrefix = '/api/me', refreshInterval = 2000 }) => {
    const currentPath = usePathname();
    const ids = `${servicePrefix}?scope=ids`;
    const { data: profile, isLoading, error } = useSWR(ids, {
        revalidateOnMount: true,
        refreshInterval,
        fetcher: () => fetch(ids).then(r => {
            if (!r.ok)
                throw new Error(`${r.status}: ${r.statusText}`);
            return r.json();
        })
    });
    if (isLoading)
        return _jsx("p", { className: 'oo-m-2 md:oo-m-4 oo-rounded-md oo-bg-amber-200 oo-border oo-border-amber-800 oo-text-amber-800 oo-p-1 md:oo-p-2', children: "Loading your profile information..." });
    if (error)
        return _jsx("p", { className: 'oo-m-2 md:oo-m-4 oo-rounded-md oo-bg-amber-200 oo-border oo-border-amber-800 oo-text-amber-800 oo-p-1 md:oo-p-2', children: "There was an error loading your profile information" });
    return _jsx(_Fragment, { children: _jsxs("dl", { className: 'oo-text-[14px]', children: [_jsx("dt", { className: 'oo-font-bold', children: "Frontend:" }), _jsx("dd", { children: profile?.ids.frontend ?? 'n/a' }), _jsx("dt", { className: 'oo-font-bold oo-pt-1', children: "Web Experimentation:" }), _jsx("dd", { children: profile?.ids.webExperimentation ?? 'n/a' }), _jsx("dt", { className: 'oo-font-bold oo-pt-1', children: "Content Intelligence:" }), _jsx("dd", { children: profile?.ids.contentIntelligence ?? 'n/a' }), _jsx("dt", { className: 'oo-font-bold oo-pt-1', children: "Data Platform:" }), _jsx("dd", { children: profile?.ids.dataPlatform ?? 'n/a' }), _jsx("dt", { className: 'oo-font-bold oo-pt-1', children: "Current path:" }), _jsx("dd", { children: currentPath })] }) });
};
export default IdsPanel;
