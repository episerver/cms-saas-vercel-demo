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

    const contentTopics : JSX.Element[] = (profile?.contentTopics ?? []).map(t => <li className='oo-py-1' key={"topic-"+t}><TagIcon className='oo-inline-block oo-h-[16px] oo-w-[16px] oo-mr-2' />{ t }</li>)
    if (contentTopics.length == 0)
        contentTopics.push(<li className='oo-py-1' key="no-topics"><div className="oo-m-2 md:oo-m-4 oo-rounded-md oo-bg-amber-200 oo-border oo-border-amber-800 oo-text-amber-800 oo-p-1 md:oo-p-2">No topics inferred from behaviour</div></li>)

    return <>
        { (isValidating && !isLoading) && <p className='oo-text-[14px] oo-m-2 md:oo-m-4 oo-rounded-md oo-bg-amber-200 oo-border oo-border-amber-800 oo-text-amber-800 oo-p-1 md:oo-p-2'><ArrowPathIcon className='oo-inline-block oo-h-4 oo-w-4 oo-ml-2 oo-animate-spin' /> Refreshing interests</p> }
        { isLoading && <p className='oo-m-2 md:oo-m-4 oo-rounded-md oo-bg-amber-200 oo-border oo-border-amber-800 oo-text-amber-800 oo-p-1 md:oo-p-2'><ArrowPathIcon className='oo-inline-block oo-h-4 oo-w-4 oo-mr-2 oo-animate-spin' /> Loading interests</p> }
        <ul className='oo-text-[14px] oo-grid oo-grid-cols-1 oo-divide-y oo-divide-slate-200'>
            { contentTopics }
        </ul>
    </>
}

export default InterestsPanel