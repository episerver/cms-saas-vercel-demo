'use client'
import type { MeResponse } from '@/app/api/me/types'
import React, { useEffect, useState, type FunctionComponent } from 'react'
import Image from 'next/image'
import { Popover, Tab } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import OptiLogo from './logo.svg'

const debug = process.env.NODE_ENV == 'development'

export type OptimizelyOneProps = {

}

export const OptimizelyOne : FunctionComponent<OptimizelyOneProps> = props =>
{
    const inTestMode = useIsInTestMode()

    if (!inTestMode)
        return <></>

    return <Popover className="h-10 md:fixed md:bottom-0">
        <Popover.Button className='fixed bottom-0 right-0 w-full h-10 flex flex-row justify-between p-2 border-t border-slate-800 bg-slate-100 text-slate-800 md:w-80 md:right-4 md:rounded-t-lg md:border-x'>
            <Image src={ OptiLogo } alt="Optimizely One" className='h-full w-auto inline-block' />
            <ChevronUpIcon className="ui-open:rotate-180 ui-open:transform h-full w-auto inline-block" />
        </Popover.Button>
        <Popover.Panel className="fixed bottom-10 right-0 w-full top-0 bg-white md:right-4 md:bottom-12 md:w-[42rem] max-w-full flex flex-col justify-stretch md:h-80 md:top-auto md:rounded-lg md:shadow-lg md:overflow-hidden">
            <div className="border-b border-slate-800 bg-slate-200 text-slate-800 font-bold p-1 flex-none md:p-2">My Profile</div>
            <OptimizelyOnePanel />
        </Popover.Panel>
    </Popover>
}

const OptimizelyOnePanel : FunctionComponent<{}> = () => 
{
    const [ profile, setProfile ] = useState<MeResponse|undefined>()
    const [ isLoading, setIsLoading ] = useState<boolean>(false)
    const [ dataError, setDataError ] = useState<string | undefined>(undefined)

    useEffect(() => {
        const abort = new AbortController()
        const timer = setTimeout(() => abort.abort("Aborting due to timeout"), 15000)
        setIsLoading(true)
        setDataError(undefined)
        console.log("Starting profile request")
        fetch('/api/me', {
            signal: abort.signal
        }).then(r => r.json() as Promise<MeResponse>).then(body => {
            setIsLoading(false)
            setProfile(body)
            console.log("Finished profile request")
        }).catch((e : Error) => {
            if (abort.signal.aborted)
                setDataError(abort.signal.reason)
            else 
                setDataError("Error while fetching data: "+e)
            
            setIsLoading(false)
            
        })
        return () => {
            //clearTimeout(timer)
            //abort.abort("Aborting due to component refresh")
        }
    }, [])

    if (isLoading)
        return <p className='m-2 md:m-4 rounded-md bg-amber-200 border border-amber-800 text-amber-800 p-1 md:p-2'>Loading your profile information, please wait...</p>

    if (dataError)
        return <p className='m-2 md:m-4 rounded-md bg-red-200 border border-red-800 text-red-800 p-1 md:p-2'>{ dataError }</p>

    return <Tab.Group>
        <Tab.List className="flex-none flex justify-start gap-2 p-1 md:p-2 pb-0 md:pb-0 border-b border-slate-800">
            <Tab as="div" className='inline-block cursor-pointer px-2 py-1 border border-b-0 border-slate-800 rounded-t-lg ui-selected:bg-blue-500 ui-selected:text-white'>Identifiers</Tab>
            <Tab as="div" className='inline-block cursor-pointer px-2 py-1 border border-b-0 border-slate-800 rounded-t-lg ui-selected:bg-blue-500 ui-selected:text-white'>Interests</Tab>
            <Tab as="div" className='inline-block cursor-pointer px-2 py-1 border border-b-0 border-slate-800 rounded-t-lg ui-selected:bg-blue-500 ui-selected:text-white'>Audiences</Tab>
        </Tab.List>
        <Tab.Panels className="flex-1 md:h-24 overscroll-contain overflow-y-auto">
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
                </dl>
            </Tab.Panel>
            <Tab.Panel as="div" className='p-1 md:p-2'>
                <p className='mb-1 md:mb-2 rounded-md bg-amber-200 border border-amber-800 text-amber-800 p-1 md:p-2'><span className='font-bold'>Please note:</span> Interest based audiences are updated once per hour</p>
                <ul className='text-sm'>
                    { (profile?.contentTopics ?? []).map(t => {
                        return <li key={"topic-"+t}>{ t }</li>
                    })}
                </ul>
            </Tab.Panel>
            <Tab.Panel as="div" className='p-1 md:p-2'>
                <ul className='text-sm'>
                    { (profile?.audiences ?? []).map(a => {
                        return <li key={"audience-"+a.id}>{ a.name }</li>
                    })}
                </ul>
            </Tab.Panel>
        </Tab.Panels>
    </Tab.Group>
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