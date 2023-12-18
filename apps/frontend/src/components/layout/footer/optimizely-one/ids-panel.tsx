import React, { type FunctionComponent } from 'react'
import { usePathname } from 'next/navigation'
import useSWR from 'swr'
import type { MeResponse } from '@/app/api/me/types'

export const IdsPanel : FunctionComponent<{}> = () => 
{
    const currentPath = usePathname()

    const ids = '/api/me?scope=ids'
    const { data: profile, isLoading, error } = useSWR<MeResponse>(ids, {
        revalidateOnMount: true,
        fetcher: () => fetch(ids).then(r => r.json())
    })

    if (isLoading)
        return <p className='m-2 md:m-4 rounded-md bg-amber-200 border border-amber-800 text-amber-800 p-1 md:p-2'>Loading your profile information...</p>

    if (error)
        return <p className='m-2 md:m-4 rounded-md bg-amber-200 border border-amber-800 text-amber-800 p-1 md:p-2'>There was an error loading your profile information</p>

    return <>
        <dl className='text-sm'>
            <dt className='font-bold'>Frontend:</dt>
            <dd>{ profile?.ids.frontend ?? 'n/a' }</dd>
            <dt className='font-bold pt-1'>Web Experimentation:</dt>
            <dd>{ profile?.ids.webExperimentation ?? 'n/a' }</dd>
            <dt className='font-bold pt-1'>Content Intelligence:</dt>
            <dd>{ profile?.ids.contentIntelligence ?? 'n/a' }</dd>
            <dt className='font-bold pt-1'>Data Platform:</dt>
            <dd>{ profile?.ids.dataPlatform ?? 'n/a' }</dd>
            <dt className='font-bold pt-1'>Current path:</dt>
            <dd>{ currentPath }</dd>
        </dl>
    </>
}

export default IdsPanel