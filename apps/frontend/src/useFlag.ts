'use client'
import { type JsonValue } from "@vercel/flags";
import { type Flag  } from "@vercel/flags/next";
import { useState, useEffect } from "react"

/**
 * Client Side hook, to use a server action to fetch the Flag status. This 
 * requires the flag, or flags file to have the `'use server'` annotation that
 * will execute the logic on the server.
 * 
 * This allows the flags to use server side logic and will not send the flag
 * configuration to the browser
 * 
 * @param   flag            The flag function to use
 * @param   defaultState    The initial state to use for the flag
 * @returns The flag data, or default state if the flag has not yet loaded
 */
export function useFlag<FT extends Flag<JsonValue>>(flag: FT) : (FT extends Flag<infer FD> ? FD : never) | undefined
export function useFlag<FT extends Flag<JsonValue>>(flag: FT, defaultState: FT extends Flag<infer FD> ? Omit<FD, '_enabled'> : never) : FT extends Flag<infer FD> ? FD: never
export function useFlag<FT extends Flag<JsonValue>>(flag: FT, defaultState?: FT extends Flag<infer FD> ? Omit<FD, '_enabled'> : never) : (FT extends Flag<infer FD> ? FD : never) | undefined
{
    type FlagState = (FT extends Flag<infer FD> ? FD : never) | undefined
    const [ flagValue, setFlagValue ] = useState<FlagState>((defaultState ? { _enabled: false, ...defaultState} : undefined) as FlagState)
    useEffect(() => {
        async function fetchFlagState() 
        {
            const newFlagValue = await flag() as FlagState
            setFlagValue(newFlagValue)
        }
        fetchFlagState()
    }, [flag])
    return flagValue
}

export default useFlag