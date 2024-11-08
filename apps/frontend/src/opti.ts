import { get } from '@vercel/edge-config'
import { headers } from 'next/headers'
import { createInstance  } from '@optimizely/optimizely-sdk/lite'

export async function getUserContext()
{
    const config = await get<string>('optimizely-fx-data-file')
    const headerData = await headers()
    const visitorId = headerData.get('x-visitorid')
    if (!visitorId)
        throw new Error("No visitor identifier provided by your middleware")
    const fx = createInstance({
        datafile: config
    })
    if (!fx) {
        throw new Error("Optimizely Feature Experimentation initialization failed")
    }
    const fx_ctx = fx?.createUserContext(visitorId, {

    })
    await fx_ctx?.fetchQualifiedSegments()
    return fx_ctx
}

export default getUserContext
