import 'server-only'
import { cookies } from 'next/headers'
import { DataPlatform } from '@remkoj/optimizely-one-nextjs/api'

export function getLastSearchTerms() : Promise<string[]>
{
    // If the platform is not configured, just return an empty list
    if (!DataPlatform.Tools.isEnabled())
        return Promise.resolve<string[]>([])

    // Get the VisitorID, if not present just return an empty list
    const c = cookies()
    const vuid = DataPlatform.Tools.getVisitorID(c)
    if (!vuid)
        return Promise.resolve<string[]>([])

    // Actually pull the latest search terms from Optimizely Data Platform
    const client = new DataPlatform.Client()
    return client.getLastSearchTerms(vuid)
}