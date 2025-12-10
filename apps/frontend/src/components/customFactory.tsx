import { Suspense } from 'react'
import type {
  ComponentFactory,
  ComponentType,
  ComponentTypeHandle,
  ComponentTypeDictionary,
  ComponentTypeDictionaryEntry,
} from '@remkoj/optimizely-cms-react/rsc'

export const MERGE_SYMBOL = '/'

export const EmptyComponentHandle = '$$fragment$$'

/**
 * The custom implementation of the ComponentFactory interface, which works both
 * client and server side.
 */
export class CustomComponentFactory implements ComponentFactory {
  private registry = new Map<string, ComponentTypeDictionaryEntry>()
  private dbg: boolean

  /**
   * Create a new instance of the CustomComponentFactory
   *
   * @param   initialComponents   If provided, this dictionary will be registered
   *                              with the factory.
   */
  public constructor(initialComponents?: ComponentTypeDictionary) {
    // Resolve debug mode
    try {
      this.dbg = process.env.OPTIMIZELY_DEBUG == '1'
    } catch {
      this.dbg = false
    }

    // Add provided default dictionary
    if (initialComponents) this.registerAll(initialComponents)
  }

  register(
    type: ComponentTypeHandle,
    component: ComponentType,
    useSuspense: boolean = false,
    loader?: ComponentType
  ): void {
    const registryKey = processComponentTypeHandle(type)
    if (this.dbg)
      console.log(`➕ [CustomComponentFactory] Registering ${registryKey}`)
    this.registry.set(registryKey, { type, component, useSuspense, loader })
  }

  registerAll(components: ComponentTypeDictionary): void {
    components.forEach((c) => {
      const registryKey = processComponentTypeHandle(c.type)
      if (this.dbg)
        console.log(`➕ [CustomComponentFactory] Registering ${registryKey}`)
      this.registry.set(registryKey, c)
    })
  }

  has(type: ComponentTypeHandle): boolean {
    const registryKey = processComponentTypeHandle(type)
    //if (this.dbg) console.log(`🔎 [CustomComponentFactory] Checking for ${ registryKey }`)
    return this.registry.has(registryKey)
  }

  resolve(type: ComponentTypeHandle): undefined | ComponentType {
    const registryKey = processComponentTypeHandle(type)

    const entry = this.registry.get(registryKey)
    if (!entry) {
      if (this.dbg)
        console.warn(
          `⚡ [CustomComponentFactory] Unable to resolve ${registryKey}`
        )
      return undefined // The key is not registered in the factory
    }
    if (entry.useSuspense != true) return entry.component // There's no suspense, so we're using the component directly

    // We need to wrap the component in a Supense
    const EntryComponent = entry.component
    const EntryLoader = entry.loader
    function Suspended(props: Record<string, any>) {
      return (
        <Suspense fallback={EntryLoader && <EntryLoader {...props} />}>
          <EntryComponent {...props} />
        </Suspense>
      )
    }
    return Suspended
  }

  extract(): ComponentTypeDictionary {
    return Array.from(this.registry.entries()).map(([key, entry]) => {
      return { ...entry, type: key }
    })
  }

  remove(type: ComponentTypeHandle) {
    const registryKey = processComponentTypeHandle(type)
    if (this.dbg)
      console.log(`🔎 [CustomComponentFactory] Removing ${registryKey}`)
    if (!this.registry.has(registryKey)) return true
    return this.registry.delete(registryKey)
  }
}

function processComponentTypeHandle(handle: ComponentTypeHandle): string {
  if (typeof handle == 'string')
    return handle == '' ? EmptyComponentHandle : handle
  if (Array.isArray(handle) && handle.every((s) => typeof s == 'string'))
    return handle
      .map((s) => (s.startsWith('_') ? s.substring(1) : s)) // Remove all leading underscores
      .filter((s) => {
        const type = s.toLowerCase()
        return type != 'content' && type != 'item' && type != 'imageitem' && type != 'assetitem'
      }) // Remove the "Content" base type
      .map((s) => (s == '' ? EmptyComponentHandle : s)) // Fall back to a fragment
      .join(MERGE_SYMBOL) // Types are processed as a string
  throw new Error(`Invalid component type handle: ${typeof handle}`)
}
