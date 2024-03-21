import { useState, useEffect, type FunctionComponent } from 'react'
import Link from 'next/link'
import { useOptimizelyOne } from '../context'
import type { OptlyWebGet } from '../../client-types'

export const ExpPanel : FunctionComponent<{}> = () =>
{
    const opti = useOptimizelyOne()
    const webEx = opti.getService('webex')?.getBrowserApi()
    const data = webEx?.get ? webEx.get('data') : undefined
    const [ pagesObject, setPagesObject ] = useState<ReturnType<OptlyWebGet['state']['getPageStates']>>({})
    const [ experimentStates, setExperimentStates ] = useState<ReturnType<OptlyWebGet['state']['getExperimentStates']>>({})
    const [ campaignStates, setCampaignStates ] = useState<ReturnType<OptlyWebGet['state']['getCampaignStates']>>({})

    useEffect(() => {
        setPagesObject(webEx?.get ? webEx?.get('state').getPageStates({ isActive: true }) : {})
        setExperimentStates(webEx?.get ? webEx?.get('state').getExperimentStates({ isActive: true }) : {})
        setCampaignStates(webEx?.get ? webEx?.get('state').getCampaignStates({ isActive: true }) : {})
        const intervalId = setInterval(() => {
            setPagesObject(webEx?.get ? webEx?.get('state').getPageStates({ isActive: true }) : {})
            setExperimentStates(webEx?.get ? webEx?.get('state').getExperimentStates({ isActive: true }) : {})
            setCampaignStates(webEx?.get ? webEx?.get('state').getCampaignStates({ isActive: true }) : {})
        }, 2000)
        return () => clearInterval(intervalId)
    }, [ webEx ])
    
    // Process pages
    const pagesArray : ((typeof pagesObject)[string])[] = []
    for (const pageId of Object.getOwnPropertyNames(pagesObject))
        pagesArray.push(pagesObject[pageId])

    // Process experimentns
    const experimentsArray : ((typeof experimentStates)[string])[] = []
    for (const experimentId of Object.getOwnPropertyNames(experimentStates))
        experimentsArray.push(experimentStates[experimentId])

    // Process campaigns
    const campaignsArray : ((typeof campaignStates)[string])[] = []
    for (const campaignId of Object.getOwnPropertyNames(campaignStates))
        campaignsArray.push(campaignStates[campaignId])
    const filteredCampaigns = campaignsArray.filter(c => {
        const expIds = experimentsArray.map(ed => ed.id)
        return !expIds.includes(c.experiment.id)
    })

    return <dl className='oo-text-[14px]'>
        <dt className='oo-font-bold oo-pt-1'>Script information:</dt>
        <dd>Account id: { data?.accountId }; Project id: <Link href={`https://app.optimizely.com/v2/projects/${ data?.projectId ?? '' }`} target="_blank" className="oo-underline oo-text-blue-800">{ data?.projectId }</Link>; Revision: { data?.revision }</dd>
        <dt className='oo-font-bold oo-pt-1'>Active page(s):</dt>
        <dd>
            <ul>
            { pagesArray.map(p => <li key={`exp-page-${data?.projectId}-${p.id}`}><Link href={`https://app.optimizely.com/v2/projects/${ data?.projectId ?? '' }/implementation/pages/${ p.id }`} target="_blank" className="oo-underline oo-text-blue-800">{p.name || p.apiName}</Link></li>)}
            </ul>
        </dd>
        <dt className='oo-font-bold oo-pt-1'>Active experiment(s):</dt>
        <dd>
            <ul>
                { experimentsArray.map(e => <li key={`exp-${data?.projectId}-${e.id}`}>
                    <Link href={`https://app.optimizely.com/v2/projects/${ data?.projectId ?? '' }/experiments/${ e.id }`} target="_blank" className="oo-underline oo-text-blue-800">{ e.experimentName || e.id }</Link>, variant: <Link href={`https://app.optimizely.com/v2/projects/${ data?.projectId ?? '' }/experiments/${ e.id }/variations/${ e.variation.id }`} target="_blank" className="oo-underline oo-text-blue-800">{ e.variation.name || e.variation.id }</Link>
                </li>)}
            </ul>
        </dd>
        <dt className='oo-font-bold oo-pt-1'>Active Personalization Campaigns(s):</dt>
        <dd>
            <ul>
                { filteredCampaigns.map(e => <li key={`campaign-${data?.projectId}-${e.id}`}>
                    <Link href={`https://app.optimizely.com/v2/projects/${ data?.projectId ?? '' }/campaigns/${ e.id }`} target="_blank" className="oo-underline oo-text-blue-800">{ e.campaignName || e.id }</Link>; Audience(s): { e.audiences.map(a => <span key={"exp-pers-aud-"+a.id}><Link href={`https://app.optimizely.com/v2/projects/${ data?.projectId ?? '' }/audiences/${ a.id }`} target="_blank" className="oo-underline oo-text-blue-800">{ a.name }</Link>, </span>)}
                </li>)}
            </ul>
        </dd>
    </dl>
}

export default ExpPanel