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

export const site_search = flag<OptimizelyFlag<{ recent_search_count: number, show_recent_searches: boolean, topic_weight: number, use_personalization: boolean }>>({
    key: 'site_search',
    origin: 'https://app.optimizely.com/v2/projects/5439876343005184/flags/manage/site_search/variations',
    description: 'Configure the Site Search capabilities, built into the site using Optimizely Graph, Optimizely Data Platform and Optimizely Content Recommendations',
    defaultValue: {"_enabled":false,"recent_search_count":5,"show_recent_searches":false,"topic_weight":50.5,"use_personalization":false},
    async decide() {
        const ctx = await getUserContext()
        const decision = ctx?.decide('site_search') as TypedOptimizelyDecision<{ recent_search_count: number, show_recent_searches: boolean, topic_weight: number, use_personalization: boolean }>
        if (!decision)
            throw new Error("No decision made by Optimizely Feature Experimentation")
        return {
            _enabled: decision.enabled,
            ...decision.variables
        }
    },
    options: [
        {
            label: "Long history",
            value: {"_enabled":true,"show_recent_searches":true,"recent_search_count":10,"topic_weight":50.5,"use_personalization":false}
        },
        {
            label: "On",
            value: {"_enabled":true,"recent_search_count":5,"show_recent_searches":false,"topic_weight":50.5,"use_personalization":false}
        },
        {
            label: "Off",
            value: {"_enabled":false,"recent_search_count":5,"show_recent_searches":false,"topic_weight":50.5,"use_personalization":false}
        }
    ]
})

export const layout_configuration = flag<OptimizelyFlag<{ logo: string, theme_switcher: boolean }>>({
    key: 'layout_configuration',
    origin: 'https://app.optimizely.com/v2/projects/5439876343005184/flags/manage/layout_configuration/variations',
    description: 'Test various layout configurations to determine the best possible layout',
    defaultValue: {"_enabled":false,"logo":"/assets/moseybank-logo.svg","theme_switcher":false},
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
            label: "Optimizely Logo",
            value: {"_enabled":true,"logo":"https://support.optimizely.com/hc/theming_assets/01HZH1Q8HQF8VFTSNFVAGVB65K","theme_switcher":true}
        },
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