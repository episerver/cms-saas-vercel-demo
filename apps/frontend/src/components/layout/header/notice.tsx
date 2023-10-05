import React from 'react'

export type NoticeProps = {
    text?: string
    className?: string
}

export default function HeaderNotice(props: NoticeProps = { text: "Promo message here", className: undefined}) 
{
    return <div className={ props.className } dangerouslySetInnerHTML={{ __html: props.text ?? "" }}></div>
}