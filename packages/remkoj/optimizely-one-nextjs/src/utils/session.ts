import { v4 as createGuid } from 'uuid'
import * as EnvTools from './env'
import EnvVars from '../env-vars'

import type { NextRequest, NextResponse } from 'next/server'
import type { ReadonlyRequestCookies } from '../products/types'

export function getOrCreateVisitorId(request: NextRequest) : string
{
    const cookieName = EnvTools.readValue(EnvVars.FrontendCookie, 'visitorId')
    return request.cookies.get(cookieName)?.value ?? createGuid()
}

export function getVisitorId(c: ReadonlyRequestCookies) : string | undefined
{
    const cookieName = EnvTools.readValue(EnvVars.FrontendCookie, 'visitorId')
    return c.get(cookieName)?.value
}

export function addVisitorId<T = unknown>(response: NextResponse<T>, visitorId: string) : NextResponse<T>
{
    const DEBUG = process.env.NODE_ENV == 'development'
    response.cookies.set({
        name: 'visitorId',
        value: visitorId,
        sameSite: "strict",
        path: "/",
        secure: !DEBUG
    })
    return response
}

export default {
    getVisitorId,
    getOrCreateVisitorId,
    addVisitorId
}