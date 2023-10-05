import React from 'react'
import { ButtonBlockComponentType } from '.'
import Link from 'next/link'

export const ButtonBlockComponent : ButtonBlockComponentType = ({ contentLink, data, children }) =>
{
    const buttonConfig = data?.ButtonBlock?.items ? data.ButtonBlock.items[0] : undefined

    if (!buttonConfig)
        return <></>
    
    const linkTarget = new URL(buttonConfig.ButtonLink?.Href ?? "/")

    return <Link
        className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
        data-te-ripple-init
        data-te-ripple-color="light"
        title={ buttonConfig.ButtonLink?.Title ?? ""}
        href={ linkTarget.pathname }
        hrefLang={ contentLink.locale ?? ""}>
            { buttonConfig.ButtonLink?.Text ?? ""}
    </Link>
}

export default ButtonBlockComponent