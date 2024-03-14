import { type FunctionComponent } from 'react'
import useSWR from 'swr'
import type { GraphInfoApiResponse as ApiResponse } from '../../api/graph-info-service'
import Link from 'next/link'

export type GraphPanelProps = {
    servicePrefix?: string
    refreshInterval?: number
}

export const GraphPanel : FunctionComponent<GraphPanelProps> = ({ servicePrefix = '/api/me', refreshInterval = 30000}) => 
{
    const id = `${ servicePrefix }/graph`
    const { data, isLoading, error } = useSWR<ApiResponse>(id, {
        revalidateOnMount: true,
        refreshInterval,
        fetcher: (key) => fetch(key).then(r => {
            if (!r.ok)
                throw new Error(`${ r.status }: ${ r.statusText}`)
            return r.json()
        })
    })

    if (isLoading)
        return <p className='oo-m-2 md:oo-m-4 oo-rounded-md oo-bg-amber-200 oo-border oo-border-amber-800 oo-text-amber-800 oo-p-1 md:oo-p-2'>Loading Optimizely Graph information...</p>

    if (error)
        return <p className='oo-m-2 md:oo-m-4 oo-rounded-md oo-bg-amber-200 oo-border oo-border-amber-800 oo-text-amber-800 oo-p-1 md:oo-p-2'>There was an error loading Optimizely Graph information</p>

    return <>
        <dl className='oo-text-[14px]'>
            <dt className='oo-font-bold'>Publishing changes to:</dt>
            <dd className='oo-pl-2'>
                <ul>
                    { (data?.hooks || []).map(hook => <li key={`webhook-${ hook.url }`}>{ hook.method && <span className='oo-text-amber-800'>({ hook.method?.toLowerCase() ?? '' }) </span>}{ hook.url }{ hook.hasQueryParams && <>?...</>}</li>)} 
                </ul>
            </dd>
            <dt className='oo-font-bold oo-pt-4'>Exposing content from:</dt>
            <dd className='oo-pl-2'>
                <ul>
                    { (data?.sources || []).map(source => <li key={`source-${ source.label}`}>{ updateLabel(source.label) }, available languages: { source.languages.join(", ")}</li>)}
                </ul>
            </dd>
        </dl>
        <p className='oo-pt-4 oo-text-[14px]'><Link className='oo-underline oo-text-blue-800' href="https://cg.optimizely.com/app/portal/" target='_new'>Login to Optimizely Graph</Link></p>
    </>
}

function updateLabel(label: string) 
{
    if (label == "default")
        return "Optimizely CMS"
    return label
}

export default GraphPanel