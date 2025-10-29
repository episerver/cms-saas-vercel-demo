// Auto generated flags.ts from Optimizely Feature Experimentation.
'use server'
import type { Decide } from 'flags'
import { flag } from 'flags/next';
import { getUserContext, type OptimizelyFlag, type TypedOptimizelyDecision } from './opti';

/**
 * Site Search
 * ----
 *
 * Configure the Site Search capabilities, built into the site using Optimizely Graph, Optimizely Data Platform and Optimizely Content Recommendations
 *
 * @key site_search
 * @see https://app.optimizely.com/v2/projects/5439876343005184/flags/manage/site_search
 */
export const site_search = flag<OptimizelyFlag<{
  /**
   * The weight to be applied to the topics retrieved from Optimizely Content Recommendations for a personalized search result
   *
   * @defaultValue 200
   * @opti integer
   */
  interest_boost: number,
  /**
   * The number of recent search terms to show
   *
   * @defaultValue 5
   * @opti integer
   */
  recent_search_count: number,
  /**
   * Show the list of recent search terms, requires Data Platform
   *
   * @defaultValue false
   * @opti boolean
   */
  show_recent_searches: boolean,
  /**
   * Use the top topic from Optimizely Content Recommendations to personalize the search results
   *
   * @defaultValue false
   * @opti boolean
   */
  use_personalization: boolean
}>>({
    key: 'site_search',
    origin: `https://app.optimizely.com/v2/projects/5439876343005184/flags/manage/site_search/variations`,
    description: 'Configure the Site Search capabilities, built into the site using Optimizely Graph, Optimizely Data Platform and Optimizely Content Recommendations',
    defaultValue: {"_enabled":false,"interest_boost":200,"recent_search_count":5,"show_recent_searches":false,"use_personalization":false},
    async decide() {
        "use server"
        const ctx = await getUserContext()
        type DecisionVariables = typeof this.decide extends (Decide<OptimizelyFlag<infer O>, any> | undefined) ? O : false
        const decision = ctx?.decide("site_search") as TypedOptimizelyDecision<DecisionVariables>
        if (!decision)
           return {"_enabled":false,"interest_boost":200,"recent_search_count":5,"show_recent_searches":false,"use_personalization":false};
        return {
            _enabled: decision.enabled,
            ...decision.variables
        };
    },
    options: [
        {
            label: "Off",
            value: {"_enabled":false,"interest_boost":200,"recent_search_count":5,"show_recent_searches":false,"use_personalization":false}
        }
    ]
})

/**
 * Layout Configuration
 * ----
 *
 * Test various layout configurations to determine the best possible layout
 *
 * @key layout_configuration
 * @see https://app.optimizely.com/v2/projects/5439876343005184/flags/manage/layout_configuration
 */
export const layout_configuration = flag<OptimizelyFlag<{
  /**
   * The URL/Path to the logo file to use
   *
   * @defaultValue /assets/moseybank-logo.svg
   * @opti string
   */
  logo: string,
  /**
   * Enable/disable the theme switcher, when disabled it forces the site to follow system settings.
   *
   * @defaultValue true
   * @opti boolean
   */
  theme_switcher: boolean
}>>({
    key: 'layout_configuration',
    origin: `https://app.optimizely.com/v2/projects/5439876343005184/flags/manage/layout_configuration/variations`,
    description: 'Test various layout configurations to determine the best possible layout',
    defaultValue: {"_enabled":false,"logo":"/assets/moseybank-logo.svg","theme_switcher":true},
    async decide() {
        "use server"
        const ctx = await getUserContext()
        type DecisionVariables = typeof this.decide extends (Decide<OptimizelyFlag<infer O>, any> | undefined) ? O : false
        const decision = ctx?.decide("layout_configuration") as TypedOptimizelyDecision<DecisionVariables>
        if (!decision)
           return {"_enabled":false,"logo":"/assets/moseybank-logo.svg","theme_switcher":true};
        return {
            _enabled: decision.enabled,
            ...decision.variables
        };
    },
    options: [
        {
            label: "Off",
            value: {"_enabled":false,"logo":"/assets/moseybank-logo.svg","theme_switcher":true}
        }
    ]
})
