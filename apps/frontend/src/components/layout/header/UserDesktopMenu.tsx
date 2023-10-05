'use client'
import React, { type FunctionComponent } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

export type UserDesktopMenuProps = {
    locale?: string | false
}

export const UserDesktopMenu : FunctionComponent<UserDesktopMenuProps> = ({ locale }) => {
    const { data, status } = useSession()


    if (status == "loading")
        return <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6" />

    if (data?.error == "tokenExpiredError")
        return <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6"> Session error </div>
    
    if (status == "authenticated")
        return <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
            <Link href="/profile" className="text-sm font-medium text-gray-700 hover:text-gray-800" locale={ locale }>
                Hi { data.user?.name }
            </Link>
            <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
            <a href="#signout" className="text-sm font-medium text-gray-700 hover:text-gray-800" onClick={(e) => { e.stopPropagation(); signOut(); return false; }}>
                Sign out
            </a>
        </div>

    return <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
        <a href="#signin" className="text-sm font-medium text-gray-700 hover:text-gray-800" onClick={(e) => { e.stopPropagation(); signIn(); return false; }}>
            Sign in
        </a>
        <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
        <Link href="/register" className="text-sm font-medium text-gray-700 hover:text-gray-800" locale={ locale }>
            Create account
        </Link>
    </div>
}