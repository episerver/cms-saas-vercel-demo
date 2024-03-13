'use client'

import React, { type FunctionComponent } from 'react'
import { type ChannelDefinition as SiteInfo } from '@remkoj/optimizely-graph-client'
import { FlagIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Popover } from '@headlessui/react'

export type LanguagePickerProps = {
    className?: string
    locales: SiteInfo['locales']
    locale: string
    texts: any
}

export const LanguagePicker : FunctionComponent<LanguagePickerProps> = ({ className, locales, locale, texts }) => 
{
    // If there're less then two languages, hide the picker
    if (locales.length < 2)
        return <></>

    // Otherwise show the picker
    return <Popover className={('relative language-picker ' + className).trim()}>
        <Popover.Button className='p-2 -my-2 whitespace-nowrap'>
            <span className='inline-block mr-2'>{ texts?.button ?? "Language"}</span>
            <ChevronDownIcon className="inline-block w-4 h-4 ui-open:rotate-180 ui-open:transform" />
        </Popover.Button>
        <Popover.Panel className="absolute top-8 right-0 bg-white border border-stripe-dark border-solid rounded p-3 z-40 w-60 drop-shadow-lg transition duration-500 ease-in-out">
            <div className='font-bold cursor-default'>{ texts?.title ?? "Select language"}</div>
            { locales.map(x => <div key={ `locale-picker-item-${ x.code ?? ''}`} className={(`${ locale == x.code ? 'active bg-stripe' : '' } hover:bg-stripe-dark rounded p-2 mt-2 transition duration-500 ease-in-out`).trim()}>
                <Link href={ `/${ x.slug ?? ''}` } className="inline-block w-full">
                    <FlagIcon className='w-4 h-4 inline-block' /> { texts.locales[x.code] ?? 'Unknown language'}
                </Link>
            </div>) }
        </Popover.Panel>
    </Popover>
}

export default LanguagePicker