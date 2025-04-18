// Auto generated useFlag hook Optimizely Feature Experimentation.
'use client'
import { useState, useEffect } from "react";
import { resolveFlag, type AvailableFlags, type FlagData, type FlagState } from './useFlag.rsc'

/**
 * Client Side hook, to use a server action to fetch the Flag status. This 
 * requires the flag, or flags file to have the `'use server'` annotation that
 * will execute the logic on the server.
 * 
 * This allows the flags to use server side logic and will not send the flag
 * configuration to the browser.
 * 
 * @param   flag            The flag function to use
 * @param   defaultState    The initial state to use for the flag - this must be stable across re-renders
 * @returns The flag data, or default state if the flag has not yet loaded
 */
export function useFlag<FlagKey extends keyof AvailableFlags>(flag: FlagKey): FlagData<FlagKey> | undefined
export function useFlag<FlagKey extends keyof AvailableFlags>(flag: FlagKey, defaultState: FlagState<FlagKey>): FlagData<FlagKey>
export function useFlag<FlagKey extends keyof AvailableFlags>(flag: FlagKey, defaultState?: FlagState<FlagKey>): FlagData<FlagKey> | undefined {
    const defaultValue : FlagData<FlagKey> | undefined = defaultState ? ({ _enabled: false, ...defaultState } as FlagData<FlagKey>) : undefined
    const [flagValue, setFlagValue] = useState<FlagData<FlagKey> | undefined>(defaultValue)
    useEffect(() => {
        console.log("🧲 Resolving flag", flag)
        resolveFlag(flag).then(newFlagValue => {
            if (newFlagValue) {
                console.log(`🧲 Loaded new configuration for ${flag}`)
                setFlagValue(newFlagValue)
            }
        }).catch((e) => {
            console.error(`🧲 Config resolution for ${flag} failed - retaining current value`, e)
        })
    }, [flag])
    return flagValue || defaultValue
}

export default useFlag