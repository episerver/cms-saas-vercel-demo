import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useOptimizelyOne } from '../context';
export const ExpPanel = () => {
    const opti = useOptimizelyOne();
    const webEx = opti.getService('webex')?.getBrowserApi();
    const data = webEx?.get ? webEx.get('data') : undefined;
    const [pagesObject, setPagesObject] = useState({});
    const [experimentStates, setExperimentStates] = useState({});
    const [campaignStates, setCampaignStates] = useState({});
    useEffect(() => {
        setPagesObject(webEx?.get ? webEx?.get('state').getPageStates({ isActive: true }) : {});
        setExperimentStates(webEx?.get ? webEx?.get('state').getExperimentStates({ isActive: true }) : {});
        setCampaignStates(webEx?.get ? webEx?.get('state').getCampaignStates({ isActive: true }) : {});
        const intervalId = setInterval(() => {
            setPagesObject(webEx?.get ? webEx?.get('state').getPageStates({ isActive: true }) : {});
            setExperimentStates(webEx?.get ? webEx?.get('state').getExperimentStates({ isActive: true }) : {});
            setCampaignStates(webEx?.get ? webEx?.get('state').getCampaignStates({ isActive: true }) : {});
        }, 2000);
        return () => clearInterval(intervalId);
    }, [webEx]);
    // Process pages
    const pagesArray = [];
    for (const pageId of Object.getOwnPropertyNames(pagesObject))
        pagesArray.push(pagesObject[pageId]);
    // Process experimentns
    const experimentsArray = [];
    for (const experimentId of Object.getOwnPropertyNames(experimentStates))
        experimentsArray.push(experimentStates[experimentId]);
    // Process campaigns
    const campaignsArray = [];
    for (const campaignId of Object.getOwnPropertyNames(campaignStates))
        campaignsArray.push(campaignStates[campaignId]);
    const filteredCampaigns = campaignsArray.filter(c => {
        const expIds = experimentsArray.map(ed => ed.id);
        return !expIds.includes(c.experiment.id);
    });
    return _jsxs("dl", { className: 'oo-text-[14px]', children: [_jsx("dt", { className: 'oo-font-bold oo-pt-1', children: "Script information:" }), _jsxs("dd", { children: ["Account id: ", data?.accountId, "; Project id: ", _jsx(Link, { href: `https://app.optimizely.com/v2/projects/${data?.projectId ?? ''}`, target: "_blank", className: "oo-underline oo-text-blue-800", children: data?.projectId }), "; Revision: ", data?.revision] }), _jsx("dt", { className: 'oo-font-bold oo-pt-1', children: "Active page(s):" }), _jsx("dd", { children: _jsx("ul", { children: pagesArray.map(p => _jsx("li", { children: _jsx(Link, { href: `https://app.optimizely.com/v2/projects/${data?.projectId ?? ''}/implementation/pages/${p.id}`, target: "_blank", className: "oo-underline oo-text-blue-800", children: p.name || p.apiName }) }, `exp-page-${data?.projectId}-${p.id}`)) }) }), _jsx("dt", { className: 'oo-font-bold oo-pt-1', children: "Active experiment(s):" }), _jsx("dd", { children: _jsx("ul", { children: experimentsArray.map(e => _jsxs("li", { children: [_jsx(Link, { href: `https://app.optimizely.com/v2/projects/${data?.projectId ?? ''}/experiments/${e.id}`, target: "_blank", className: "oo-underline oo-text-blue-800", children: e.experimentName || e.id }), ", variant: ", _jsx(Link, { href: `https://app.optimizely.com/v2/projects/${data?.projectId ?? ''}/experiments/${e.id}/variations/${e.variation.id}`, target: "_blank", className: "oo-underline oo-text-blue-800", children: e.variation.name || e.variation.id })] }, `exp-${data?.projectId}-${e.id}`)) }) }), _jsx("dt", { className: 'oo-font-bold oo-pt-1', children: "Active Personalization Campaigns(s):" }), _jsx("dd", { children: _jsx("ul", { children: filteredCampaigns.map(e => _jsxs("li", { children: [_jsx(Link, { href: `https://app.optimizely.com/v2/projects/${data?.projectId ?? ''}/campaigns/${e.id}`, target: "_blank", className: "oo-underline oo-text-blue-800", children: e.campaignName || e.id }), "; Audience(s): ", e.audiences.map(a => _jsxs("span", { children: [_jsx(Link, { href: `https://app.optimizely.com/v2/projects/${data?.projectId ?? ''}/audiences/${a.id}`, target: "_blank", className: "oo-underline oo-text-blue-800", children: a.name }), ", "] }, "exp-pers-aud-" + a.id))] }, `campaign-${data?.projectId}-${e.id}`)) }) })] });
};
export default ExpPanel;
