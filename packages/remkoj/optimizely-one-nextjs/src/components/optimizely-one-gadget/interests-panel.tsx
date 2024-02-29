import { type FunctionComponent } from 'react'
import { TagIcon, ArrowPathIcon } from '@heroicons/react/20/solid'
import useSWR from 'swr'
import type { ProfileApiResponse as MeResponse } from '../../api/profile-api-service'

export type InterestsPanelProps = {
    servicePrefix?: string
    refreshInterval?: number
}


export const InterestsPanel : FunctionComponent<InterestsPanelProps> = ({ servicePrefix = '/api/me', refreshInterval = 2000 }) => 
{
    const topics = `${ servicePrefix }?scope=topics`
    const { data: profile, isLoading, isValidating, error } = useSWR<MeResponse>(topics, {
        revalidateOnMount: true,
        fetcher: () => fetch(topics).then(r => {
            if (!r.ok)
                throw new Error(`${ r.status }: ${ r.statusText }`)
            return r.json()
        }),
        refreshInterval
    })

    if (error)
        return <p className='oo-m-2 md:oo-m-4 oo-rounded-md oo-bg-amber-200 oo-border oo-border-amber-800 oo-text-amber-800 oo-p-1 md:oo-p-2'>There was an error loading your profile information</p>

    return <>
        <p className='font-bold'>Content interests{ (isValidating && !isLoading) && <ArrowPathIcon className='inline-block h-4 w-4 ml-2 animate-spin' /> }</p>
        { isLoading && <p className='oo-m-2 md:oo-m-4 oo-rounded-md oo-bg-amber-200 oo-border oo-border-amber-800 oo-text-amber-800 oo-p-1 md:oo-p-2'><ArrowPathIcon className='oo-inline-block oo-h-4 oo-w-4 oo-mr-2 oo-animate-spin' />Loading your interests...</p> }
        <ul className={`oo-text-sm oo-grid oo-grid-cols-1 oo-divide-y ${ isValidating && 'oo-blur-sm'}`.trimEnd()}>
            { (profile?.contentTopics ?? []).map(t => {
                return <li className='oo-py-1' key={"topic-"+t}><TagIcon className='oo-inline-block oo-h-4 oo-w-4 oo-mr-2' />{ t }</li>
            })}
        </ul>
        <p className='oo-m-2 oo-mt-3 oo-p-1 md:oo-p-2 oo-rounded-md oo-bg-amber-200 oo-border oo-border-amber-800 oo-text-amber-800'><span className='oo-font-bold'>Please note:</span> Interest based audiences are updated once per hour</p>
    </>
}

export default InterestsPanel