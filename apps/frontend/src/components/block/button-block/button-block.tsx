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
        className="btn-neutral"
        data-te-ripple-init
        data-te-ripple-color="light"
        title={ buttonConfig.ButtonLink?.Title ?? ""}
        href={ linkTarget.pathname }
        hrefLang={ contentLink.locale ?? ""}>
            { buttonConfig.ButtonLink?.Text ?? ""}
    </Link>
}

export default ButtonBlockComponent