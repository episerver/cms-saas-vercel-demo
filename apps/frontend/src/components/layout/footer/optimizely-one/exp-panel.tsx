import React, { useState, useEffect, type FunctionComponent } from 'react'
import { useWebExperimentation, OptlyWebGet } from '@/components/integrations/opti-web-experimentation'
import Link from 'next/link'

export const ExpPanel : FunctionComponent<{}> = () =>
{
    const webEx = useWebExperimentation()
    const data = webEx?.get ? webEx.get('data') : undefined
    const [ pagesObject, setPagesObject ] = useState<ReturnType<OptlyWebGet['state']['getPageStates']>>( {} )
    const [ experimentStates, setExperimentStates ] = useState<ReturnType<OptlyWebGet['state']['getExperimentStates']>>( {} )

    useEffect(() => {
        setPagesObject(webEx?.get ? webEx?.get('state').getPageStates() : {})
        setExperimentStates(webEx?.get ? webEx?.get('state').getExperimentStates() : {})
        const intervalId = setInterval(() => {
            setPagesObject(webEx?.get ? webEx?.get('state').getPageStates() : {})
            setExperimentStates(webEx?.get ? webEx?.get('state').getExperimentStates() : {})
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

    return <dl className='text-sm'>
        <dt className='font-bold pt-1'>Script information:</dt>
        <dd>Account id: { data?.accountId }; Project id: <Link href={`https://app.optimizely.com/v2/projects/${ data?.projectId ?? '' }`} target="_blank" className="underline text-blue-800">{ data?.projectId }</Link>; Revision: { data?.revision }</dd>
        <dt className='font-bold pt-1'>Active page(s):</dt>
        <dd>{ pagesArray.filter(p => p && p.isActive).map(p => p.name || p.apiName).join("; ") ?? "n/a" }</dd>
        <dt className='font-bold pt-1'>Active experiment(s):</dt>
        <dd>
            <ul>
                { experimentsArray.filter(e => e && e.isActive).map(e => <li key={`exp-${data?.projectId}-${e.id}`}>
                    <Link href={`https://app.optimizely.com/v2/projects/${ data?.projectId ?? '' }/experiments/${ e.id }`} target="_blank" className="underline text-blue-800">{ e.experimentName || e.id }</Link>, variant: <Link href={`https://app.optimizely.com/v2/projects/${ data?.projectId ?? '' }/experiments/${ e.id }/variations/${ e.variation.id }`} target="_blank" className="underline text-blue-800">{ e.variation.name || e.variation.id }</Link>
                </li>)}
            </ul>
        </dd>
    </dl>
}

export default ExpPanel