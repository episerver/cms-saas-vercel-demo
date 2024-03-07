import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint @next/next/no-before-interactive-script-outside-document: 0 */
import Script from 'next/script';
export const OptimizelyWebExperimentationScript = (props) => {
    const project_id = props.projectId;
    return _jsxs(_Fragment, { children: [_jsx(Script, { id: 'web-experimentation-startup', strategy: 'beforeInteractive', children: `window["optimizely"] = window["optimizely"] || [];` }), _jsx(Script, { id: 'web-experimentation-project', strategy: 'beforeInteractive', src: `https://cdn.optimizely.com/js/${project_id}.js` })] });
};
export default OptimizelyWebExperimentationScript;
