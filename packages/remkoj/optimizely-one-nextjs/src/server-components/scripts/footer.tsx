import 'server-only'
import EnvTools from '../../utils/env'
import EnvVars from '../../env-vars'
import CRecsScript from './snippets/optimizely-content-recs'

export type FooterScriptsProps = {
    contentRecsClient?: string
    contentRecsDelivery?: number
}

export default function (props: FooterScriptsProps)
{
    const crecs_client = props.contentRecsClient ||EnvTools.readValue(EnvVars.ContentRecsClient)
    const crecs_delivery = props.contentRecsDelivery || EnvTools.readValueAsInt(EnvVars.ContentRecsDelivery)
    return <>
        { crecs_client && crecs_delivery && <CRecsScript client={ crecs_client } delivery={ crecs_delivery } /> }
    </>
}