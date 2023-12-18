import React, { type FunctionComponent } from 'react'
import { TagIcon, ArrowPathIcon } from '@heroicons/react/20/solid'
import useSWR from 'swr'
import type { MeResponse } from '@/app/api/me/types'

export const InterestsPanel : FunctionComponent<{}> = () => 
{
    const topics = '/api/me?scope=topics'
    const { data: profile, isLoading, isValidating, error } = useSWR<MeResponse>(topics, {
        revalidateOnMount: true,
        fetcher: () => fetch(topics).then(r => r.json()),
        refreshInterval: 15000 //Refresh every 15 seconds
    })

    if (error)
        return <p className='m-2 md:m-4 rounded-md bg-amber-200 border border-amber-800 text-amber-800 p-1 md:p-2'>There was an error loading your profile information</p>

    return <>
        <p className='font-bold'>Content interests{ (isValidating && !isLoading) && <ArrowPathIcon className='inline-block h-4 w-4 ml-2 animate-spin' /> }</p>
        { isLoading && <p className='m-2 md:m-4 rounded-md bg-amber-200 border border-amber-800 text-amber-800 p-1 md:p-2'><ArrowPathIcon className='inline-block h-4 w-4 mr-2 animate-spin' />Loading your interests...</p> }
        <ul className={`text-sm grid grid-cols-1 divide-y ${ isValidating && 'blur-sm'}`.trimEnd()}>
            { (profile?.contentTopics ?? []).map(t => {
                return <li className='py-1' key={"topic-"+t}><TagIcon className='inline-block h-4 w-4 mr-2' />{ t }</li>
            })}
        </ul>
        <p className='m-2 mt-3 p-1 md:p-2 rounded-md bg-amber-200 border border-amber-800 text-amber-800'><span className='font-bold'>Please note:</span> Interest based audiences are updated once per hour</p>
    </>
}

export default InterestsPanel