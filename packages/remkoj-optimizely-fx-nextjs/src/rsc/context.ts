import { 
  createInstance as createFxInstance, 
  createStaticProjectConfigManager, 
  createOdpManager, 
  createBatchEventProcessor, 
  createLogger, 
  createEventDispatcher,
  INFO,
  WARN,
  type StaticConfigManagerConfig,
  type Client
} from "@optimizely/optimizely-sdk/universal"
import { createFetchRequestHandler } from "../shared/fetchRequestHandler.js"

export type { StaticConfigManagerConfig, Client } from "@optimizely/optimizely-sdk/universal"

/**
 * Wrapper for the univeral Optimizely FX Client, wrapped with the recommended
 * configuration for Next.JS, using the Flags library from Vercel. This ensures
 * that all handlers that must be specified will use the `fetch` API to ensure
 * that the code works natively with Next.JS server side.
 * 
 * For best performance use the Next.JS data cache (e.g. `fetchApi`) to load the
 * datafile and wrap the loading of the datafile and this create function in a
 * react `cache` to ensure that there's only one instance per request.
 * 
 * @param     config    The static configuration file to be used by this instance
 * @param     options   Additional configuration options to override some defaults
 * @returns   The Optimizely FX client
 */
export async function createInstance(config: StaticConfigManagerConfig, options?: { debug?: boolean, odpPrivatekey?: string }) : Promise<Client>
{
  // Prepare for instance
  const inDebug = options?.debug ?? false; //process.env.NODE_ENV === "development"
  const requestHandler = createFetchRequestHandler({ 
    enableTraceOutput: inDebug, 
    odpPrivateKey: options?.odpPrivatekey 
  })

  // Create FX instance
  const fx = createFxInstance({
    // Global request handler
    requestHandler,

    // Configuration file
    projectConfigManager: createStaticProjectConfigManager(config),

    // Integrate with ODP
    odpManager: createOdpManager({
        requestHandler
    }),

    // Process events
    eventProcessor: createBatchEventProcessor({
      batchSize: 1,
      flushInterval: 300,
      eventDispatcher: createEventDispatcher(requestHandler)
    }),

    // Make sure we log to console
    logger: createLogger({
      level: inDebug ? INFO : WARN,
      logHandler: console,
    }),
  })

  // Validate that we have an instance
  if (!fx) 
    throw new Error("Optimizely Feature Experimentation not created");

  // Await readyness and throw if that causes an error
  try {
    void (await fx.onReady());
    return fx;
  } catch (e) {
    console.error(e);
    throw new Error(
      "Error while awaiting Optimizely Feature Experimentation to become ready"
    );
  }
}
