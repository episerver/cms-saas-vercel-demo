'use client'

import React, { type FunctionComponent } from 'react'
import { useSession } from 'next-auth/react'
import { signIn, signOut } from 'next-auth/react'
import { LockOpenIcon, LockClosedIcon } from '@heroicons/react/24/outline'

export type LoginButtonProps = {
    className?: string
    texts: any
}

export const LoginButton : FunctionComponent<LoginButtonProps> = ({ className, texts }) => 
{
    const { data, status } = useSession()
    if (status == 'loading')
        return <button className={ ('p-2 px-3 sm:p-3 sm:px-4 lg:p-4 lg:px-6 text-slate-400 bg-slate-200 rounded cursor-pointer ' + (className ?? "")).trim() }>
        <span>{ texts?.loading ?? "Loading..."}</span>
    </button>

    if (status == 'authenticated')
        return <button onClick={() => signOut() } className={ ('p-2 px-3 sm:p-3 sm:px-4 lg:p-4 lg:px-6 bg-primary hover:bg-primary-dark rounded ' + (className ?? "")).trim() }>
            <LockClosedIcon className='inline-block w-6 h-6' /> <span>{ texts?.logout ?? "Logout"}</span>
        </button>

    return <button onClick={() => signIn() } className={ ('p-2 px-3 sm:p-3 sm:px-4 lg:p-4 lg:px-6 bg-secondary hover:bg-secondary-dark rounded ' + (className ?? "")).trim() }>
        <LockOpenIcon className='inline-block w-6 h-6' /> <span>{ texts?.login ?? "Login"}</span>
    </button>
}

export default LoginButton