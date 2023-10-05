import { type ComponentProps } from 'react'
import Link from 'next/link'

export type BannerButtonProps = ComponentProps<typeof Link>

export function BannerButton(props: BannerButtonProps)
{
    const children = props.children
    return <Link {...props} className={`banner-button ${ props.className ?? ''}`.trim()}>{ children }</Link>
}

export default BannerButton