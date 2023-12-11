import React, { type FunctionComponent } from 'react'
import { ArrowPathIcon, UserGroupIcon } from '@heroicons/react/20/solid'
import useSWR from 'swr'
import type { MeResponse } from '@/app/api/me/types'

export const AudiencesPanel : FunctionComponent<{}> = () => 
{
    const topics = '/api/me?scope=audiences'
    const { data: profile, isLoading, isValidating, error } = useSWR<MeResponse>(topics, {
        revalidateOnMount: true,
        fetcher: () => fetch(topics).then(r => r.json()),
    })

    if (error)
        return <p className='m-2 md:m-4 rounded-md bg-amber-200 border border-amber-800 text-amber-800 p-1 md:p-2'>There was an error loading your profile information</p>

    return <>
        <p className='font-bold'>Audiences{ (isValidating && !isLoading) && <ArrowPathIcon className='inline-block h-4 w-4 ml-2 animate-spin' /> }</p>
        { isLoading && <p className='m-2 md:m-4 rounded-md bg-amber-200 border border-amber-800 text-amber-800 p-1 md:p-2'><ArrowPathIcon className='inline-block h-4 w-4 mr-2 animate-spin' />Loading the audiences...</p> }
        <ul className={`text-sm grid grid-cols-1 divide-y ${ isValidating && 'blur-sm'}`.trimEnd()}>
            { (profile?.audiences ?? []).map(a => {
                return <li className='py-1' key={"audience-"+a.id}><UserGroupIcon className='inline-block h-4 w-4 mr-2' />{ a.name }</li>
            })}
        </ul>
    </>
}

export default AudiencesPanel