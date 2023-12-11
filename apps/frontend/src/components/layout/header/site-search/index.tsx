'use client'
import React, { Fragment, type FunctionComponent } from 'react'
import { Popover } from "@headlessui/react"
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import dynamic from 'next/dynamic'

const SearchPanel = dynamic(() => import('./panel'), { ssr: false })

export type SiteSearchProps = {
    buttonClassName: string
    brandName: string
}

export const SiteSearch: FunctionComponent<SiteSearchProps> = ({ buttonClassName, brandName }) =>
{
    return <Popover as={Fragment} >
        <Popover.Button className={ `${buttonClassName} ui-open:bg-primary-dark ui-open:rounded-t-md` } title={ `Search within ${ brandName }`}>
            <span className='sr-only'>Search</span>
            <MagnifyingGlassIcon className='inline-block w-4 h-4 md:w-6 md:h-6' />
        </Popover.Button>
        <Popover.Panel className="absolute bg-white text-slate-800 w-full z-[1000] right-0 top-14 p-4 md:p-6 lg:p-8 shadow-lg rounded-b-md grid grid-cols-8 gap-4 md:gap-6 lg:gap-8">
            <SearchPanel />
        </Popover.Panel>
    </Popover>
}

export default SiteSearch