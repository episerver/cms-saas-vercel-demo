import type { ApiService } from './types'
import * as EnvTools from '../utils/env'
import EnvVars from '../env-vars'
import * as Responses from './responses'
import Session from '../utils/session'

import { DataPlatform, ContentRecs, WebExperimentation } from '../products'

const NO_ID = 'n/a'
export const ProfileApiService : ApiService<ProfileApiResponse> = {
    for: { path: '/', verb: 'get' },
    handler: async (query, cookies) => {
        // Check if the toolkit is enabled
        if (!EnvTools.readValueAsBoolean(EnvVars.HelperEnabled, false))
            return Responses.NotFound
        
        // Start timer
        let start = Date.now()

        // Read requested scopes
        const scopes = query.get('scope')?.toLowerCase()?.split(',')?.map(x => x.trim())
        const fetchContentTopics = !scopes || scopes.includes('topics')
        const fetchODPAudiences = !scopes || scopes.includes('audiences')

        // Read all IDs
        const odpId = DataPlatform.Tools.getVisitorID(cookies)
        const crId = ContentRecs.Tools.getVisitorID(cookies)
        const webExId = WebExperimentation.Tools.getVisitorID(cookies)
        const frontendId = Session.getVisitorId(cookies)

        // Read parameters & set values
        const pageSize = Math.max(stringToInt(query.get('limit'), 10), 1)
        const pageNumber = Math.max(stringToInt(query.get('page'), 0), 0)
        let audiencesPageCount = 0
        let audiencesCount = 0

        // Determine audiences if needed
        let audiences : { id: string, name: string}[] = []
        if (fetchODPAudiences && odpId) {
            const odp = new DataPlatform.Client();
            const allAudiences = await odp.getAllAudiences()
            audiencesCount = allAudiences.length

            // Split the list into manageable groups
            const chunks : string[][] = []
            allAudiences.forEach((item, idx) => {
                const chunkId = Math.floor(idx/EnvTools.readValueAsInt(EnvVars.OdpAudienceBatchSize, pageSize));
                chunks[chunkId] = chunks[chunkId] || []; 
                chunks[chunkId].push(item.id)
            });
            audiencesPageCount = chunks.length

            // Apply filtering to the audiences
            const userAudienceIds = /*chunkNr == 0 ?
                (await Promise.all(chunks.map(chunk => odp.filterAudiences(odpId, chunk)))).flat() :*/
                await odp.filterAudiences(odpId, chunks[pageNumber])
            audiences = allAudiences.filter(a => userAudienceIds.includes(a.id))
        }

        // Determine topics if needed
        let topics : string[] = []
        if (fetchContentTopics && crId) {
            const contentRecs = new ContentRecs.Client();
            topics = await contentRecs.getContentTopics(crId)
        }

        return [{
            ids: {
                dataPlatform: odpId || NO_ID,
                frontend: frontendId || NO_ID,
                contentIntelligence: crId || NO_ID,
                webExperimentation: webExId || NO_ID
            },
            pageSize,
            pageNumber,
            audiences: audiences,
            audiencesPageCount,
            audiencesCount,
            contentTopics: topics,
            duration: `${ Date.now() - start}ms`
        }, 200]
    }
}



export default ProfileApiService

export type ProfileApiResponse = {
    ids: {
        frontend: string
        dataPlatform: string
        contentIntelligence: string
        webExperimentation: string
    },
    contentTopics: string[]
    audiences: { id: string, name: string }[]
    audiencesPageCount: number
    audiencesCount: number
    pageSize: number
    pageNumber: number
    duration?: string
}

function stringToInt(value: string | undefined | null, defaultValue: number)
{
    try {
        const result = Number.parseInt(value ?? defaultValue.toString(), 10)
        return isNaN(result) ? defaultValue : result
    } catch {}
    return defaultValue
}