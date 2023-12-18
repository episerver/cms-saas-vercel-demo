'use client'
import React, { useEffect, useState, type FunctionComponent } from 'react'
import Image from 'next/image'
import { Popover, Tab } from '@headlessui/react'
import { ChevronUpIcon, UserGroupIcon, TagIcon, RocketLaunchIcon, IdentificationIcon } from '@heroicons/react/20/solid'
import OptiLogo from './logo.svg'

// Prepare panel imports
import dynamic from 'next/dynamic'
const Panels = {
    Ids: dynamic(() => import('./ids-panel'), { ssr: false }),
    Experiments: dynamic(() => import('./exp-panel'), { ssr: false }),
    Interests: dynamic(() => import('./interests-panel'), { ssr: false }),
    Audiences: dynamic(() => import('./audiences-panel'), { ssr: false })
}

export const OptimizelyOne : FunctionComponent = () =>
{
    const inTestMode = useIsInTestMode()
    if (!inTestMode)
        return <></>

    return <Popover className="h-10 md:fixed md:bottom-0">
        <Popover.Button className='fixed bottom-0 right-0 w-full h-10 flex flex-row justify-between p-2 border-t border-slate-500 bg-slate-100 text-slate-800 md:w-80 md:right-4 md:rounded-t-md md:border-x'>
            <Image src={ OptiLogo } alt="Optimizely One" className='h-full w-auto inline-block' />
            <ChevronUpIcon className="ui-open:rotate-180 ui-open:transform h-full w-auto inline-block" />
        </Popover.Button>
        <Popover.Panel className="fixed bottom-10 right-0 w-full top-0 md:border md:border-slate-300 bg-white md:right-4 md:bottom-12 md:w-[42rem] z-[10000] max-w-full flex flex-col justify-stretch md:h-80 md:top-auto md:rounded-md md:shadow-xl md:overflow-hidden">
            <div className="border-b border-slate-300 bg-slate-100 text-slate-800 font-bold p-1 flex-none md:p-2"><IdentificationIcon className='inline-block h-6 w-6 mr-2' />My Profile</div>
            <Tab.Group>
                <Tab.List className="flex-none flex justify-between md:justify-start gap-2 p-1 md:p-2 pb-0 md:pb-0 border-b border-slate-300 text-sm">
                    <Tab as="div" className='text-center inline-block cursor-pointer px-2 py-1 border border-b-0 border-slate-300 rounded-t-md ui-selected:bg-blue-500 ui-selected:text-white'><TagIcon className='inline-block h-4 w-4 mr-2' />Interests</Tab>
                    <Tab as="div" className='text-center inline-block cursor-pointer px-2 py-1 border border-b-0 border-slate-300 rounded-t-md ui-selected:bg-blue-500 ui-selected:text-white'><UserGroupIcon className='inline-block h-4 w-4 mr-2' />Audiences</Tab>
                    <Tab as="div" className='text-center inline-block cursor-pointer px-2 py-1 border border-b-0 border-slate-300 rounded-t-md ui-selected:bg-blue-500 ui-selected:text-white'><RocketLaunchIcon className='inline-block h-4 w-4 mr-2' />Experiments</Tab>
                    <Tab as="div" className='text-center inline-block cursor-pointer px-2 py-1 border border-b-0 border-slate-300 rounded-t-md ui-selected:bg-blue-500 ui-selected:text-white'><IdentificationIcon className='inline-block h-4 w-4 mr-2' />Identifiers</Tab>
                </Tab.List>
                <Tab.Panels className="flex-1 md:h-24 overscroll-contain overflow-y-auto">
                    <Tab.Panel as="div" className='p-1 md:p-2'>
                        <Panels.Interests />
                    </Tab.Panel>
                    <Tab.Panel as="div" className='p-1 md:p-2'>
                        <Panels.Audiences />
                    </Tab.Panel>
                    <Tab.Panel as="div" className='p-1 md:p-2'>
                        <Panels.Experiments />
                    </Tab.Panel>
                    <Tab.Panel as="div" className='p-1 md:p-2'>
                        <Panels.Ids />
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </Popover.Panel>
    </Popover>
}

function useIsInTestMode() : boolean
{
    const [hasTestCookie, setHasTestCookie] = useState<boolean>(false)
    const [isDevHost, setIsDevHost] = useState<boolean>(false)
    const host = tryInvoke(() => window.location.hostname)
    useEffect(() => {
        setIsDevHost(() => (host && host.startsWith('localhost') && process.env.NODE_ENV == 'development') ? true : false)
    }, [ host ])
    useEffect(() => {
        if (!host) return

        function updateCookieStatus(host: string) 
        {
            const cookie = tryInvoke(() => document.cookie)
            if (cookie) {
                const cookieName = getCookieName(host)
                const cookieValue = cookieName ? cookie.match(`(?:^|;)\\s*${ cookieName }=\\s*([^;]+)\\s*(?:;|$)`)?.pop() : undefined
                const testModeStatus = cookieValue == 'true'
                setHasTestCookie(testModeStatus)
            } else {
                setHasTestCookie(false)
            }
        }

        updateCookieStatus(host)
        const intervalId = setInterval(() => updateCookieStatus(host as string), 2000)

        return () => {
            clearInterval(intervalId)
        }

    }, [ host ])
    return hasTestCookie || isDevHost
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

/**
 * Invoke a function and return it's value, return undefined if an error did occur within the function
 * 
 * @param       fn      The function to execute
 * @returns     The return value of the function, or undefined in an error occurred
 */
function tryInvoke<T extends () => any >(fn: T) : ReturnType<T> | undefined
{
    try {
        return fn()
    } catch {
        return undefined
    }
}

export default OptimizelyOne