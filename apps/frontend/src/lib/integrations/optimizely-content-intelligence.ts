import 'server-only'
import { cookies } from 'next/headers'
import { ContentRecs } from '@remkoj/optimizely-one-nextjs/api'

export function getTopTopics() : Promise<string[]>
{
    if (!ContentRecs.Tools.isEnabled())
        return Promise.resolve([])
    const visitorId = ContentRecs.Tools.getVisitorID(cookies());
    const crecs = new ContentRecs.Client()
    return visitorId ?
        crecs.getContentTopics(visitorId) :
        Promise.resolve([])
}