'use client'
import { useState, useEffect, useMemo } from "react";
import { resolveFlag, type AvailableFlags, type FlagData, type FlagState } from './useFlag.rsc'

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
export function useFlag<FlagKey extends keyof AvailableFlags>(flag: FlagKey): FlagData<FlagKey> | undefined
export function useFlag<FlagKey extends keyof AvailableFlags>(flag: FlagKey, defaultState: FlagState<FlagKey>): FlagData<FlagKey>
export function useFlag<FlagKey extends keyof AvailableFlags>(flag: FlagKey, defaultState?: FlagState<FlagKey>): FlagData<FlagKey> | undefined {
    const defaultValue = useMemo<FlagData<FlagKey> | undefined>(() => { return defaultState ? ({ _enabled: false, ...defaultState } as FlagData<FlagKey>) : undefined }, [ defaultState ])
    const [flagValue, setFlagValue] = useState<FlagData<FlagKey> | undefined>(defaultValue)
    useEffect(() => {
        resolveFlag(flag).then(newFlagValue => {
            if (newFlagValue && defaultValue) {
                const computedFlagValue = {...defaultValue, ...newFlagValue}
                console.error(`Resolved config value for ${ flag } to:`, computedFlagValue)
                setFlagValue(computedFlagValue)
            } else if (newFlagValue) {
                console.error(`Resolved config value for ${ flag } to:`, newFlagValue)
                setFlagValue(newFlagValue)
            } else {
                console.error(`Resolved config value for ${ flag } to:`, defaultValue)
                setFlagValue(defaultValue)
            }
        }).catch((e) => {
            console.error(`Config resolution for ${ flag } failed:`, e, 'resolving to', defaultValue)
            setFlagValue(defaultValue)
        })
    }, [flag, defaultValue])
    return flagValue
}

export default useFlag