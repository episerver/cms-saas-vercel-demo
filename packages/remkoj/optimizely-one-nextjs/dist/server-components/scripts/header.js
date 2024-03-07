import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import 'server-only';
import EnvTools from '../../utils/env';
import EnvVars from '../../env-vars';
import OdpScript from './snippets/optimizely-data-patform';
import ExpScript from './snippets/optimizely-web-experimentation';
export default function (props) {
    const odp_id = props.dataPlatformTrackerId || EnvTools.readValue(EnvVars.OdpApiKey);
    const exp_id = props.experimentationProjectId || EnvTools.readValue(EnvVars.WebExperimentationProject);
    return _jsxs(_Fragment, { children: [odp_id && _jsx(OdpScript, { trackerId: odp_id }), exp_id && _jsx(ExpScript, { projectId: exp_id })] });
}
