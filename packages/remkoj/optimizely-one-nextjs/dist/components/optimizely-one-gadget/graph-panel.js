import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import useSWR from 'swr';
import Link from 'next/link';
export const GraphPanel = ({ servicePrefix = '/api/me', refreshInterval = 30000 }) => {
    const id = `${servicePrefix}/graph`;
    const { data, isLoading, error } = useSWR(id, {
        revalidateOnMount: true,
        refreshInterval,
        fetcher: (key) => fetch(key).then(r => {
            if (!r.ok)
                throw new Error(`${r.status}: ${r.statusText}`);
            return r.json();
        })
    });
    if (isLoading)
        return _jsx("p", { className: 'oo-m-2 md:oo-m-4 oo-rounded-md oo-bg-amber-200 oo-border oo-border-amber-800 oo-text-amber-800 oo-p-1 md:oo-p-2', children: "Loading Optimizely Graph information..." });
    if (error)
        return _jsx("p", { className: 'oo-m-2 md:oo-m-4 oo-rounded-md oo-bg-amber-200 oo-border oo-border-amber-800 oo-text-amber-800 oo-p-1 md:oo-p-2', children: "There was an error loading Optimizely Graph information" });
    return _jsxs(_Fragment, { children: [_jsxs("dl", { className: 'oo-text-[14px]', children: [_jsx("dt", { className: 'oo-font-bold', children: "Publishing changes to:" }), _jsx("dd", { className: 'oo-pl-2', children: _jsx("ul", { children: (data?.hooks || []).map(hook => _jsxs("li", { children: [hook.method && _jsxs("span", { className: 'oo-text-amber-800', children: ["(", hook.method?.toLowerCase() ?? '', ") "] }), hook.url, hook.hasQueryParams && _jsx(_Fragment, { children: "?..." })] }, `webhook-${hook.url}`)) }) }), _jsx("dt", { className: 'oo-font-bold oo-pt-4', children: "Exposing content from:" }), _jsx("dd", { className: 'oo-pl-2', children: _jsx("ul", { children: (data?.sources || []).map(source => _jsxs("li", { children: [updateLabel(source.label), ", available languages: ", source.languages.join(", ")] }, `source-${source.label}`)) }) })] }), _jsx("p", { className: 'oo-pt-4 oo-text-[14px]', children: _jsx(Link, { className: 'oo-underline oo-text-blue-800', href: "https://cg.optimizely.com/app/portal/", target: '_new', children: "Login to Optimizely Graph" }) })] });
};
function updateLabel(label) {
    if (label == "default")
        return "Optimizely CMS";
    return label;
}
export default GraphPanel;
