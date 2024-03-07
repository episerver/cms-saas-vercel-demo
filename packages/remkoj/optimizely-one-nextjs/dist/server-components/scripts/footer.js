import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import 'server-only';
import EnvTools from '../../utils/env';
import EnvVars from '../../env-vars';
import CRecsScript from './snippets/optimizely-content-recs';
export default function (props) {
    const crecs_client = props.contentRecsClient || EnvTools.readValue(EnvVars.ContentRecsClient);
    const crecs_delivery = props.contentRecsDelivery || EnvTools.readValueAsInt(EnvVars.ContentRecsDelivery);
    return _jsx(_Fragment, { children: crecs_client && crecs_delivery && _jsx(CRecsScript, { client: crecs_client, delivery: crecs_delivery }) });
}
