import 'server-only'
import { cookies } from 'next/headers'
import { ContentRecs } from '@remkoj/optimizely-one-nextjs/api'

export async function getTopTopics() : Promise<string[]>
{
    if (!ContentRecs.Tools.isEnabled())
        return []
    const visitorId = ContentRecs.Tools.getVisitorID(await cookies());
    const crecs = new ContentRecs.Client();
    const topics = visitorId ? await crecs.getContentTopics(visitorId) : [];
    return topics;
}