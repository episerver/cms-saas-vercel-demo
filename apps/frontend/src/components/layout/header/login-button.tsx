'use client'

import React, { useEffect, type FunctionComponent } from 'react'
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

    useEffect(() => {
        if (data && !data?.user?.name)
            signOut();
    }, [ data ]);

    if (status == 'loading')
        return <button className={ ('btn-disabled btn-large ' + (className ?? "")).trim() }>
        <span>{ texts?.loading ?? "Loading..."}</span>
    </button>

    if (status == 'authenticated')
        return <button onClick={() => signOut() } className={ ('btn-primary btn-large ' + (className ?? "")).trim() }>
            <LockClosedIcon className='inline-block w-6 h-6' /> <span>{ texts?.logout ?? "Logout"}</span>
        </button>

    return <button onClick={() => signIn() } className={ ('btn-secondary btn-large ' + (className ?? "")).trim() }>
        <LockOpenIcon className='inline-block w-6 h-6' /> <span>{ texts?.login ?? "Login"}</span>
    </button>
}

export default LoginButton