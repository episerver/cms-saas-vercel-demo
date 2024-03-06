import { type FunctionComponent } from 'react'
import { usePathname } from 'next/navigation'
import useSWR from 'swr'
import type { ProfileApiResponse as MeResponse } from '../../api/profile-api-service'

export type IdsPanelProps = {
    servicePrefix?: string
    refreshInterval?: number
}

export const IdsPanel : FunctionComponent<IdsPanelProps> = ({ servicePrefix = '/api/me', refreshInterval = 2000}) => 
{
    const currentPath = usePathname()

    const ids = `${ servicePrefix }?scope=ids`
    const { data: profile, isLoading, error } = useSWR<MeResponse>(ids, {
        revalidateOnMount: true,
        refreshInterval,
        fetcher: () => fetch(ids).then(r => {
            if (!r.ok)
                throw new Error(`${ r.status }: ${ r.statusText}`)
            return r.json()
        })
    })

    if (isLoading)
        return <p className='oo-m-2 md:oo-m-4 oo-rounded-md oo-bg-amber-200 oo-border oo-border-amber-800 oo-text-amber-800 oo-p-1 md:oo-p-2'>Loading your profile information...</p>

    if (error)
        return <p className='oo-m-2 md:oo-m-4 oo-rounded-md oo-bg-amber-200 oo-border oo-border-amber-800 oo-text-amber-800 oo-p-1 md:oo-p-2'>There was an error loading your profile information</p>

    return <>
        <dl className='oo-text-[14px]'>
            <dt className='oo-font-bold'>Frontend:</dt>
            <dd>{ profile?.ids.frontend ?? 'n/a' }</dd>
            <dt className='oo-font-bold oo-pt-1'>Web Experimentation:</dt>
            <dd>{ profile?.ids.webExperimentation ?? 'n/a' }</dd>
            <dt className='oo-font-bold oo-pt-1'>Content Intelligence:</dt>
            <dd>{ profile?.ids.contentIntelligence ?? 'n/a' }</dd>
            <dt className='oo-font-bold oo-pt-1'>Data Platform:</dt>
            <dd>{ profile?.ids.dataPlatform ?? 'n/a' }</dd>
            <dt className='oo-font-bold oo-pt-1'>Current path:</dt>
            <dd>{ currentPath }</dd>
        </dl>
    </>
}

export default IdsPanel