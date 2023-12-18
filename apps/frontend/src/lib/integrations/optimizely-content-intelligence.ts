import 'server-only'
import { cookies } from 'next/headers'
import * as EnvTools from '@/lib/env'

type OptimizelyDataPlatformConnection = {
    client: string
    delivery: string
    deliveryKey?: string
    endpoint: string
}

export async function getTopTopics() : Promise<string[]>
{
    const connection = getConnection()
    if (!connection || !connection.deliveryKey)
        return []

    const visitorId = getVisitorId()
    if (!visitorId)
        return []

    const profileUrl = new URL(`/1.0/users/idio_visitor_id:${ visitorId }/topics`, connection.endpoint)
    profileUrl.searchParams.set('key', connection.deliveryKey)
    const topics = await fetch(profileUrl).then(r => r.json()).catch(() => undefined)
    return ((topics?.topic ?? []) as { title: string }[]).map(x => x.title)
}

export function getVisitorId() : string | undefined
{
    const c = cookies()
    return c.get('iv')?.value
}

export function isEnabled() : boolean
{
    return getConnection() != undefined
}

export function getConnection() : OptimizelyDataPlatformConnection | undefined
{
    const client = EnvTools.readValue('OPTIMIZELY_CONTENTRECS_CLIENT')
    const delivery = EnvTools.readValue('OPTIMIZELY_CONTENTRECS_DELIVERY')
    const deliveryKey = EnvTools.readValue('OPTIMIZELY_CONTENTRECS_DELIVERY_KEY')
    const endpoint = EnvTools.readValue('OPTIMIZLEY_CONTENTRECS_ENDPOINT', 'https://api.idio.co')

    if (!client || !delivery)
        return undefined

    return { client, delivery, deliveryKey, endpoint }
}