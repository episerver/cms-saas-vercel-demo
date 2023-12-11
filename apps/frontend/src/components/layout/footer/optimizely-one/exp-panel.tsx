import React, { type FunctionComponent } from 'react'
import { useWebExperimentation } from '@/components/integrations/opti-web-experimentation'
import Link from 'next/link'

export const ExpPanel : FunctionComponent<{}> = () =>
{
    const webEx = useWebExperimentation()
    const pagesObject = (webEx?.get ? webEx.get('state').getPageStates() : {})
    const data = webEx?.get ? webEx.get('data') : undefined
    
    const pagesArray : ((typeof pagesObject)[string])[] = []
    for (const pageId of Object.getOwnPropertyNames(pagesObject))
        pagesArray.push(pagesObject[pageId])

    return <dl className='text-sm'>
        <dt className='font-bold pt-1'>Script information:</dt>
        <dd>Account id: { data?.accountId }; Project id: <Link href={`https://app.optimizely.com/v2/projects/${ data?.projectId ?? '' }`} target="_blank" className="underline text-blue-800">{ data?.projectId }</Link>; Revision: { data?.revision }</dd>
        <dt className='font-bold pt-1'>Active page(s):</dt>
        <dd>{ pagesArray.filter(p => p && p.isActive).map(p => p.name || p.apiName).join("; ") ?? "n/a" }</dd>
    </dl>
}

export default ExpPanel