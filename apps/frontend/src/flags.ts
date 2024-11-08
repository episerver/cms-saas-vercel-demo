// Auto generated flags.ts from Optimizely Feature Experimentation
import { unstable_flag as flag } from '@vercel/flags/next';
import { type OptimizelyDecision } from '@optimizely/optimizely-sdk/lite';
import { getUserContext } from './opti';

type OptimizelyFlag<T extends { [variableKey: string]: unknown }> = {
  _enabled: boolean
} & T

type TypedOptimizelyDecision<T extends { [variableKey: string]: unknown }> = Omit<OptimizelyDecision, 'variables'> & {
  variables: T
}

export const layout_configuration = flag<OptimizelyFlag<{ logo: string, theme_switcher: boolean }>>({
    key: 'layout_configuration',
    origin: 'https://app.optimizely.com/v2/projects/5439876343005184/flags/manage/layout_configuration',
    description: 'Test various layout configurations to determine the best possible layout',
    defaultValue: {"_enabled":false,"logo":"/assets/moseybank-logo.svg","theme_switcher":true},
    async decide() {
        const ctx = await getUserContext()
        const decision = ctx?.decide('layout_configuration') as TypedOptimizelyDecision<{ logo: string, theme_switcher: boolean }>
        if (!decision)
            throw new Error("No decision made by Optimizely Feature Experimentation")
        return {
            _enabled: decision.enabled,
            ...decision.variables
        }
    },
    options: [
        {
            label: "No theme picker",
            value: {"_enabled":true,"theme_switcher":false,"logo":"/assets/moseybank-logo.svg"}
        },
        {
            label: "On",
            value: {"_enabled":true,"logo":"/assets/moseybank-logo.svg","theme_switcher":true}
        },
        {
            label: "Off",
            value: {"_enabled":false,"logo":"/assets/moseybank-logo.svg","theme_switcher":true}
        }
    ]
})