'use client'
import type { MeResponse } from '@/app/api/me/types'
import React, { useEffect, useState, type FunctionComponent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Popover, Tab } from '@headlessui/react'
import { ChevronUpIcon, UserGroupIcon, TagIcon, RocketLaunchIcon, IdentificationIcon } from '@heroicons/react/20/solid'
import OptiLogo from './logo.svg'
import { useWebExperimentation } from '@/components/integrations/opti-web-experimentation'
import { usePathname } from 'next/navigation'

const debug = process.env.NODE_ENV == 'development'

export type OptimizelyOneProps = {

}

export const OptimizelyOne : FunctionComponent<OptimizelyOneProps> = props =>
{
    const inTestMode = useIsInTestMode()

    if (!inTestMode)
        return <></>

    return <Popover className="h-10 md:fixed md:bottom-0">
        <Popover.Button className='fixed bottom-0 right-0 w-full h-10 flex flex-row justify-between p-2 border-t border-slate-500 bg-slate-100 text-slate-800 md:w-80 md:right-4 md:rounded-t-md md:border-x'>
            <Image src={ OptiLogo } alt="Optimizely One" className='h-full w-auto inline-block' />
            <ChevronUpIcon className="ui-open:rotate-180 ui-open:transform h-full w-auto inline-block" />
        </Popover.Button>
        <Popover.Panel className="fixed bottom-10 right-0 w-full top-0 md:border md:border-slate-300 bg-white md:right-4 md:bottom-12 md:w-[42rem] max-w-full flex flex-col justify-stretch md:h-80 md:top-auto md:rounded-md md:shadow-xl md:overflow-hidden">
            <div className="border-b border-slate-300 bg-slate-100 text-slate-800 font-bold p-1 flex-none md:p-2"><IdentificationIcon className='inline-block h-6 w-6 mr-2' />My Profile</div>
            <OptimizelyOnePanel />
        </Popover.Panel>
    </Popover>
}

const OptimizelyOnePanel : FunctionComponent<{}> = () => 
{
    const currentPath = usePathname()
    const [ profile, setProfile ] = useState<MeResponse|undefined>()
    const [ isLoading, setIsLoading ] = useState<boolean>(false)
    const [ dataError, setDataError ] = useState<string | undefined>(undefined)

    useEffect(() => {
        const abort = new AbortController()
        setTimeout(() => abort.abort("Timemout, please try again in a moment"), 60000)
        setIsLoading(true)
        setDataError(undefined)
        fetch('/api/me', {
            signal: abort.signal
        }).then(r => r.json() as Promise<MeResponse>).then(body => {
            setIsLoading(false)
            setProfile(body)
        }).catch((e : Error) => {
            if (abort.signal.aborted)
                setDataError(abort.signal.reason)
            else 
                setDataError("Error while fetching data: "+e)
            
            setIsLoading(false)
            
        })
    }, [ currentPath ])

    if (isLoading)
        return <p className='m-2 md:m-4 rounded-md bg-amber-200 border border-amber-800 text-amber-800 p-1 md:p-2'>Loading your profile information, this may take a minute or two...</p>

    if (dataError)
        return <p className='m-2 md:m-4 rounded-md bg-red-200 border border-red-800 text-red-800 p-1 md:p-2'>{ dataError }</p>

    return <Tab.Group>
        <Tab.List className="flex-none flex justify-between md:justify-start gap-2 p-1 md:p-2 pb-0 md:pb-0 border-b border-slate-300 text-sm">
            <Tab as="div" className='text-center inline-block cursor-pointer px-2 py-1 border border-b-0 border-slate-300 rounded-t-md ui-selected:bg-blue-500 ui-selected:text-white'><TagIcon className='inline-block h-4 w-4 mr-2' />Interests</Tab>
            <Tab as="div" className='text-center inline-block cursor-pointer px-2 py-1 border border-b-0 border-slate-300 rounded-t-md ui-selected:bg-blue-500 ui-selected:text-white'><UserGroupIcon className='inline-block h-4 w-4 mr-2' />Audiences</Tab>
            <Tab as="div" className='text-center inline-block cursor-pointer px-2 py-1 border border-b-0 border-slate-300 rounded-t-md ui-selected:bg-blue-500 ui-selected:text-white'><RocketLaunchIcon className='inline-block h-4 w-4 mr-2' />Experiments</Tab>
            <Tab as="div" className='text-center inline-block cursor-pointer px-2 py-1 border border-b-0 border-slate-300 rounded-t-md ui-selected:bg-blue-500 ui-selected:text-white'><IdentificationIcon className='inline-block h-4 w-4 mr-2' />Identifiers</Tab>
        </Tab.List>
        <Tab.Panels className="flex-1 md:h-24 overscroll-contain overflow-y-auto">
            <Tab.Panel as="div" className='p-1 md:p-2'>
                <p className='font-bold'>Content interests</p>
                <ul className='text-sm grid grid-cols-1 divide-y'>
                    { (profile?.contentTopics ?? []).map(t => {
                        return <li className='py-1' key={"topic-"+t}><TagIcon className='inline-block h-4 w-4 mr-2' />{ t }</li>
                    })}
                </ul>
                <p className='m-2 mt-3 p-1 md:p-2 rounded-md bg-amber-200 border border-amber-800 text-amber-800'><span className='font-bold'>Please note:</span> Interest based audiences are updated once per hour</p>
            </Tab.Panel>
            <Tab.Panel as="div" className='p-1 md:p-2'>
                <ul className='text-sm grid grid-cols-1 divide-y'>
                    { (profile?.audiences ?? []).map(a => {
                        return <li className='py-1' key={"audience-"+a.id}><UserGroupIcon className='inline-block h-4 w-4 mr-2' />{ a.name }</li>
                    })}
                </ul>
            </Tab.Panel>
            <WebExPanel />
            <Tab.Panel as="div" className='p-1 md:p-2'>
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
            </Tab.Panel>
        </Tab.Panels>
    </Tab.Group>
}

const WebExPanel : FunctionComponent<{}> = () =>
{
    const webEx = useWebExperimentation()
    const pagesObject = (webEx?.get ? webEx.get('state').getPageStates() : {})
    const data = webEx?.get ? webEx.get('data') : undefined
    
    const pagesArray : ((typeof pagesObject)[string])[] = []
    for (const pageId of Object.getOwnPropertyNames(pagesObject))
        pagesArray.push(pagesObject[pageId])

    return <Tab.Panel as="div" className="p-1 md:p-2">
        <dl className='text-sm'>
            <dt className='font-bold pt-1'>Script information:</dt>
            <dd>Account id: { data?.accountId }; Project id: <Link href={`https://app.optimizely.com/v2/projects/${ data?.projectId ?? '' }`} target="_blank" className="underline text-blue-800">{ data?.projectId }</Link>; Revision: { data?.revision }</dd>
            <dt className='font-bold pt-1'>Active page(s):</dt>
            <dd>{ pagesArray.filter(p => p && p.isActive).map(p => p.name || p.apiName).join("; ") ?? "n/a" }</dd>
        </dl>
    </Tab.Panel>
}

function useIsInTestMode() : boolean
{
    const [inTestMode, setInTestMode] = useState<boolean>(false)
    let host : string | undefined = undefined
    let cookie : string | undefined = undefined
    try {
        host = window.location.host
        cookie = document.cookie
    } catch {
        //Ignored on purpose
    }
    useEffect(() => {
        try {
            if (!host || !cookie) {
                if (debug) console.log("Disabling Optimizely One panel as there's no window context")
                setInTestMode(false)
                return
            }

            if (host.startsWith('localhost') && process.env.NODE_ENV == 'development') {
                if (debug) console.log("Enabling Optimizely One panel as we're running debug on localhost")
                setInTestMode(true)
                return
            }

            const cookieName = getCookieName(host)
            const cookieValue = cookieName ? cookie.match(`(?:^|;)\\s*${ cookieName }=\\s*([^;]+)\\s*(?:;|$)`)?.pop() : undefined
            const testModeStatus = cookieValue == 'true'
            if (debug) console.log(`${ testModeStatus ? "Enabling" : "Disabling"} Optimizely One panel due to the ${ cookieName } cookie`)
            setInTestMode(testModeStatus)
        } catch {
            setInTestMode(false)
        }
    }, [ host, cookie ])
    if (debug) console.log(`Optimizely One panel status returns: ${ inTestMode ? "Enabled" : "Disabled" }`)
    return inTestMode
}

function getCookieName(host: string) : string | undefined
{
    const reservedDomains = ['vercel']
    try {
        var hostParts = host.split('.')
        if (hostParts.length > 1) {
            hostParts = hostParts.slice(0,-1)
            if (hostParts.length > 1) {
                var domain = hostParts.pop() as string
                if (!reservedDomains.includes(domain)) {
                    hostParts = [ domain ]
                }
            }
        }
        return `optly_${ hostParts.join('.') }_test`
    } catch {
        return undefined
    }
}

export default OptimizelyOne