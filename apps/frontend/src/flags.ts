// Auto generated flags.ts from Optimizely Feature Experimentation
import { unstable_flag as flag } from '@vercel/flags/next';
import { get } from '@vercel/edge-config'
import { headers } from 'next/headers'
import { createInstance, type OptimizelyDecision } from '@optimizely/optimizely-sdk/lite'

type TypedOptimizelyDecision<T extends { [variableKey: string]: unknown }> = Omit<OptimizelyDecision, 'variables' | 'userContext'> & {
  variables: T
}

async function getDecisionContext()
{
    const config = await get<string>('optimizely-fx-data-file')
    const headerData = await headers()
    const visitorId = headerData.get('x-visitorid')
    if (!visitorId)
        throw new Error("No visitor identifier provided by your middleware")
    const fx = createInstance({
        datafile: config
    })
    if (!fx) {
        throw new Error("Optimizely Feature Experimentation initialization failed")
    }
    const fx_ctx = fx?.createUserContext(visitorId, {})
    return fx_ctx
}

export const layout_configuration = flag<TypedOptimizelyDecision<{ logo: string, theme_switcher: boolean }>>({
    key: 'layout_configuration',
    origin: 'https://app.optimizely.com/v2/projects/5439876343005184/flags/manage/layout_configuration',
    description: 'Test various layout configurations to determine the best possible layout',
    defaultValue: {
        flagKey: "layout_configuration",
        enabled: false,
        ruleKey: null,
        variationKey: null,
        reasons: ["Vercel Flags Fallback Value"],
        variables: {"logo":"/assets/moseybank-logo.svg","theme_switcher":true}
    },
    async decide() {
        const ctx = await getDecisionContext()
        const decision = ctx?.decide('layout_configuration') as unknown as TypedOptimizelyDecision<{ logo: string, theme_switcher: boolean }> | undefined
        if (!decision)
            throw new Error("No decision made by Optimizely Feature Experimentation")
        return decision
    },
    options: [
        {
            label: "On",
            value: {
                flagKey: "layout_configuration",
                enabled: true,
                ruleKey: null,
                variationKey: "on",
                reasons: ["Vercel Toolbar Override"],
                variables: {"logo":"/assets/moseybank-logo.svg","theme_switcher":true}
            }                
        },
        {
            label: "Off",
            value: {
                flagKey: "layout_configuration",
                enabled: false,
                ruleKey: null,
                variationKey: "off",
                reasons: ["Vercel Toolbar Override"],
                variables: {"logo":"/assets/moseybank-logo.svg","theme_switcher":true}
            }                
        }
    ]
})