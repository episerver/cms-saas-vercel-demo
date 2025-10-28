import 'server-only'
import { cookies } from 'next/headers'
import { DataPlatform } from '@remkoj/optimizely-one-nextjs/api'

export async function getLastSearchTerms() : Promise<string[]>
{
    // If the platform is not configured, just return an empty list
    if (!DataPlatform.Tools.isEnabled())
        return []

    // Get the VisitorID, if not present just return an empty list
    const c = await cookies()
    const vuid = DataPlatform.Tools.getVisitorID(c)
    if (!vuid)
        return []

    // Actually pull the latest search terms from Optimizely Data Platform
    const client = new DataPlatform.Client()
    const terms = await client.getLastSearchTerms(vuid)
    return terms
}