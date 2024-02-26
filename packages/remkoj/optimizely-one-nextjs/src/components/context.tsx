'use client'
import { createContext, useContext, useState, useMemo, type FunctionComponent, type PropsWithChildren } from 'react'
import WebExperimenationService from '../products/web-experimentation/client'
import DataPlatformService from '../products/data-platform/client'
import ContentRecsService from '../products/content-recs/client'
import * as ClientApi from '../client-types'

/**
 * The data stored within the OptimizelyOne context
 */
type OptimizelyOneContextType = {
    /**
     * With tracking completely disabled, all events will be stopped by
     * the OptimizelyOne hook. The "PageActivator" component will propagate
     * this instruction to all configured Optimizely One services
     */
    disableTracking?: boolean,

    /**
     * With auto-tracking disabled, the "PageActivator" component will not 
     * automatically track a generic pageview for all configured Optimizely
     * One services.
     */
    disableAutotracking?: boolean

    /**
     * The list of services Optimizely One Services registered with the
     * context. When creating the context, you may only add to the existing
     * service.
     */
    services?: Readonly<ClientApi.OptimizelyOneService[]>

    /**
     * Whether or not debug output ging must be enabled
     */
    debug?: boolean

    setDebug: (newDebug: boolean) => void,
    addService: (service: ClientApi.OptimizelyOneService) => void
    removeService: (service: ClientApi.OptimizelyOneService) => void
}

type OptimizelyOneProviderProps = PropsWithChildren<{
    value?: Omit<OptimizelyOneContextType, 'setDebug' | 'addService' | 'removeService'>
}>

type OptimizelyOneServiceMap = Record<string, ClientApi.OptimizelyOneService>
interface DefaultServiceMap extends OptimizelyOneServiceMap {
    webex: InstanceType<typeof WebExperimenationService>,
    odp: InstanceType<typeof DataPlatformService>,
    crecs: InstanceType<typeof ContentRecsService>
}

/**
 * The results of the invokation of the useOptimizelyOne 
 * hook
 */
type OptimizelyOneHookResult<TM extends DefaultServiceMap = DefaultServiceMap> = OptimizelyOneContextType & {
    /**
     * Track an event using the generic events api, which allows all configured
     * Optimizely One services to receive this event
     * 
     * @param       event       The event data to send
     * @returns     
     */
    track: (event: ClientApi.OptimizelyOneEvent) => void

    /**
     * Retrieve all services that must be invoked on the "activate page" step of
     * the execution cycle
     * 
     * @returns     A list of active services
     */
    getActivatePageServices: () => (Omit<ClientApi.OptimizelyOneService, 'activatePage' | 'isActive'> & { activatePage: NonNullable<ClientApi.OptimizelyOneService['activatePage']>, isActive: true })[]

    /**
     * Retrieve all services that must be invoked on the "track page view" step of
     * the execution cycle
     * 
     * @returns     A list of active services
     */
    getTrackPageServices: () => (Omit<ClientApi.OptimizelyOneService, 'trackPage' | 'isActive'> & { trackPage: NonNullable<ClientApi.OptimizelyOneService['trackPage']>, isActive: true })[]

    /**
     * Retrieve an individual service by its code from the collection of services
     * 
     * @param       code    The service code
     * @returns     The service, or undefined if it's not part of the collection
     */
    getService: <SC extends keyof TM>(code: SC) => TM[SC] | undefined
}

function isActiveWithActivatePage(toTest: ClientApi.OptimizelyOneService) : toTest is Omit<ClientApi.OptimizelyOneService, 'activatePage' | 'isActive'> & { activatePage: NonNullable<ClientApi.OptimizelyOneService['activatePage']>, isActive: true }
{
    return (toTest.isActive && toTest.activatePage && typeof(toTest.activatePage) == 'function') ?? false
}

function isActiveWithTrackPage(toTest: ClientApi.OptimizelyOneService) : toTest is Omit<ClientApi.OptimizelyOneService, 'trackPage' | 'isActive'> & { trackPage: NonNullable<ClientApi.OptimizelyOneService['trackPage']>, isActive: true }
{
    return (toTest.isActive && toTest.trackPage && typeof(toTest.trackPage) == 'function') ?? false
}

function isActiveWithEventTracker(toTest: ClientApi.OptimizelyOneService) : toTest is Omit<ClientApi.OptimizelyOneService, 'trackEvent' | 'isActive'> & { trackEvent: NonNullable<ClientApi.OptimizelyOneService['trackEvent']>, isActive: true }
{
    return (toTest.isActive && toTest.trackEvent && typeof(toTest.trackEvent) == 'function') ?? false
}

const OptimizelyOneContext = createContext<OptimizelyOneContextType>({ services: [], setDebug: () => {}, addService: () => {}, removeService: () => {} })
OptimizelyOneContext.displayName = "Optimizely One: Context"

function useOptimizelyOne() : OptimizelyOneHookResult
{
    const ctx = useContext(OptimizelyOneContext)
    const result = useMemo<OptimizelyOneHookResult>(() => {
        return { 
            ...ctx,
            getActivatePageServices: () => (ctx.services || []).filter(isActiveWithActivatePage),
            getTrackPageServices: () => (ctx.services || []).filter(isActiveWithTrackPage),
            getService: (code) => (ctx.services || []).filter(s => s.code == code)[0],
            track: (event: ClientApi.OptimizelyOneEvent) => {
                if (ctx.disableTracking) {
                    if (ctx.debug) console.log('🔐 [Optimizely One] Tracking disabled, ignored event')
                    return
                }
                if (ctx.debug) {
                    console.groupCollapsed(`📢 [Optimizely One] Tracking ${ event.event } event`)
                    console.log('Event:', event)
                }
                (ctx.services || []).filter(isActiveWithEventTracker).forEach(service => service.trackEvent(event))
                if (ctx.debug) {
                    console.groupEnd()
                }
            }
        }
    }, [ ctx ])
    return result
}
const OptimizelyOneProvider : FunctionComponent<OptimizelyOneProviderProps> = ({ value, children }) => 
{
    const [ ctxDebug, setCtxDebug ] = useState<boolean>(value?.debug ?? false)
    const [ services, setServices ] = useState<ClientApi.OptimizelyOneService[]>([
        new WebExperimenationService(),
        new DataPlatformService(),
        new ContentRecsService(),
        ...(value?.services || [])
    ].sort((a, b) => a.order - b.order))
    services.forEach(service => service.debug = ctxDebug)

    return <OptimizelyOneContext.Provider value={{
        disableAutotracking: value?.disableAutotracking,
        disableTracking: value?.disableTracking,
        services,
        debug: ctxDebug,
        setDebug: debugEnabled => { services.forEach(service => service.debug = debugEnabled); setCtxDebug(debugEnabled); },
        addService: service => setServices(list => list.concat([service]).sort((a, b) => a.order - b.order)),
        removeService: service => {
            const idx = services.indexOf(service)
            if (idx == -1) return
            setServices(list => list.slice(0,idx).concat(list.slice(idx+1)))
        },
    }}>{ children }</OptimizelyOneContext.Provider>
}
OptimizelyOneProvider.displayName = "Optimizely One: State & Context provider"
export { OptimizelyOneProvider, useOptimizelyOne }