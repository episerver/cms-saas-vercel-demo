// Auto generated server side logic for useFlag hook Optimizely Feature Experimentation.
"use server"
import { type Flag } from "@vercel/flags/next";
import * as appFlags from "@/flags";

export type AvailableFlags = typeof appFlags
export type FlagData<K extends keyof AvailableFlags = keyof AvailableFlags> = AvailableFlags[K] extends Flag<infer FD> ? FD : never
export type FlagState<K extends keyof AvailableFlags> = Omit<FlagData<K>, '_enabled'>

export async function resolveFlag<FlagKey extends keyof AvailableFlags>(flag: FlagKey): Promise<(FlagData<FlagKey> | undefined)> {
    if (appFlags[flag]) {
        const newFlagValue = (await appFlags[flag]()) as FlagData<FlagKey>
        return newFlagValue
    }
    return undefined
}