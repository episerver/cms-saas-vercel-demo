import React, { type ComponentProps, type FunctionComponent } from 'react'
import Link from 'next/link'

export const LinkButton : FunctionComponent<ComponentProps<typeof Link>> = (props) =>
{
    const linkProps = { ...props }
    const children = linkProps.children
    const className = linkProps.className
    delete linkProps.children
    delete linkProps.className

    return <Link {...linkProps} className={ `btn-primary btn-large btn-shadow m-0 ${ className ?? ''}`.trim() }>{ children }</Link>
}

export default LinkButton