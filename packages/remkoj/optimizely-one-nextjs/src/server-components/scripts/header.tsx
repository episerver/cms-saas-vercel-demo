import 'server-only'
import EnvTools from '../../utils/env'
import EnvVars from '../../env-vars'
import OdpScript from './snippets/optimizely-data-patform'
import ExpScript from './snippets/optimizely-web-experimentation'

export type HeaderScriptsProps = {
    dataPlatformTrackerId?: string
    experimentationProjectId?: string
}

export default function (props: HeaderScriptsProps)
{
    const odp_id = props.dataPlatformTrackerId || EnvTools.readValue(EnvVars.OdpApiKey)
    const exp_id = props.experimentationProjectId || EnvTools.readValue(EnvVars.WebExperimentationProject)
    return <>
        { odp_id && <OdpScript trackerId={ odp_id } /> }
        { exp_id && <ExpScript projectId={ exp_id } /> }
    </>
}