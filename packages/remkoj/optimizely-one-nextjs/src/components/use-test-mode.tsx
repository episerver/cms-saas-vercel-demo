'use client'
import { useState, useEffect, useMemo } from "react"

/**
 * React hook to determine if the Optimizely Web "test cookie" from the 
 * Optimizely Web Google Chrome add-on has been set. This can be used to
 * trigger features based upon the adding/removing of this cookie.
 * 
 * @param       pollingInterval     The frequency with which to check for 
 *                                  changes.
 * @returns     true if the cookie exists; false otherwise
 */
export function useIsInTestMode(pollingInterval: number = 500) : boolean
{
    // Keep track of state
    const [hasTestCookie, setHasTestCookie] = useState<boolean>(false)

    // Get the current host and calculate the derived values, using memoized
    // values so they only recalculate when needed
    const host : string | undefined = tryInvoke(() => window.location.hostname)
    const isDevHost = useMemo(() => (host && host.startsWith('localhost') && process.env.NODE_ENV == 'development') ? true : false, [host])
    const cookieName = useMemo(() => getCookieName(host), [ host ])

    // Start the polling process to discover the cookie
    useEffect(() => {
        function updateCookieStatus() 
        {
            if (isDevHost) { setHasTestCookie(true); return; }
            const cookie = tryInvoke(() => document.cookie)
            if (cookie) {
                const cookieValue = cookie.match(`(?:^|;)\\s*${ cookieName }=\\s*([^;]+)\\s*(?:;|$)`)?.pop()
                const testModeStatus = cookieValue == 'true'
                setHasTestCookie(testModeStatus)
            } else {
                setHasTestCookie(false)
            }
        }

        updateCookieStatus()
        const intervalId = setInterval(() => updateCookieStatus(), pollingInterval)

        return () => {
            clearInterval(intervalId)
        }

    }, [ cookieName, pollingInterval, isDevHost ])
    return hasTestCookie
}

function getCookieName(host?: string) : string | undefined
{
    if (!host)
        return 'optly_test'
    const reservedDomains = ['vercel']
    try {
        var hostParts = host.split('.')
        if (hostParts.length > 1) {
            hostParts = hostParts.slice(0,-1)
            if (hostParts.length > 1) {
                var domain = hostParts.pop() as string
                if (!reservedDomains.includes(domain)) {
                    hostParts = [ domain ]
                }
            }
        }
        return `optly_${ hostParts.join('.') }_test`
    } catch {
        return undefined
    }
}

/**
 * Invoke a function and return it's value, return undefined if an error did occur within the function
 * 
 * @param       fn      The function to execute
 * @returns     The return value of the function, or undefined in an error occurred
 */
function tryInvoke<T extends () => any >(fn: T) : ReturnType<T> | undefined
{
    try {
        return fn()
    } catch {
        return undefined
    }
}

export default useIsInTestMode