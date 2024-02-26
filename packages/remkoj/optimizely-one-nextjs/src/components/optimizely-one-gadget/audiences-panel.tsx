import { type FunctionComponent } from 'react'
import { ArrowPathIcon, UserGroupIcon } from '@heroicons/react/20/solid'
import useSWR from 'swr'
import type { ProfileApiResponse as MeResponse } from '../../api/profile-api-service'

export type AudiencesPanelProps = {
    servicePrefix?: string
    refreshInterval?: number
}

export const AudiencesPanel : FunctionComponent<AudiencesPanelProps> = ({ servicePrefix = '/api/me', refreshInterval = 0}) => 
{
    const topics = `${ servicePrefix }?scope=audiences`
    const { data: profile, isLoading, isValidating, error } = useSWR<MeResponse>(topics, {
        revalidateOnMount: true,
        revalidateIfStale: true,
        refreshInterval: refreshInterval > 0 ? Math.max(refreshInterval, 20000) : 0, //Maximum refresh interval for audiences is 20 seconds
        fetcher: () => fetch(topics).then(r => {
            if (!r.ok)
                throw new Error(`${ r.status }: ${ r.statusText }`)
            return r.json()
        }),
    })

    if (error)
        return <p className='oo-m-2 md:oo-m-4 oo-rounded-md oo-bg-amber-200 oo-border oo-border-amber-800 oo-text-amber-800 oo-p-1 md:oo-p-2'>There was an error loading your profile information</p>

    return <>
        <p className='oo-font-bold'>Audiences{ (isValidating && !isLoading) && <ArrowPathIcon className='oo-inline-block oo-h-4 oo-w-4 oo-ml-2 oo-animate-spin' /> }</p>
        { isLoading && <p className='oo-m-2 md:oo-m-4 oo-rounded-md oo-bg-amber-200 oo-border oo-border-amber-800 oo-text-amber-800 oo-p-1 md:oo-p-2'><ArrowPathIcon className='oo-inline-block oo-h-4 oo-w-4 oo-mr-2 oo-animate-spin' />Loading the audiences...</p> }
        <ul className={`oo-text-sm oo-grid oo-grid-cols-1 oo-divide-y`.trimEnd()}>
            { (profile?.audiences ?? []).map(a => {
                return <li className='oo-py-1' key={"audience-"+a.id}><UserGroupIcon className='oo-inline-block oo-h-4 oo-w-4 oo-mr-2' />{ a.name }</li>
            })}
        </ul>
    </>
}

export default AudiencesPanel