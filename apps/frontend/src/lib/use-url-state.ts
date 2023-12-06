import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type Deserializer<T> = (value: string) => T
type Serializer<T> = (value: T) => string

/**
 * State management function, which uses URL search parameters as state 
 * storage. This makes the state shareable between sessions and empowers back / 
 * forward navigation using the browser back/forward buttons.
 * 
 * If the new value is null or equal to the initialValue parameter, it
 * triggers the removal of the parameter from the queryString.
 * 
 * @param parameter         The query string parameter to use
 * @param initialValue      The intial/fallback value of the state
 * @param validate          A value validation function, which ensures that the 
 *                          value makes sense. This is recommended as users can
 *                          potentially put any value in the URL
 * @param deserialize       Custom deserialization function, if not provided, it'll use JSON parsing
 * @param serialize         Custom serialization function, if not provided it'll use JSON serialization
 */
export function useUrlState<T = any>(parameter: string, initialValue: T, validate?: (toValidate: T) => boolean, deserialize?: Deserializer<T>, serialize?: Serializer<T>) : [T, (newValue: T) => void, boolean]
{
    // Get functions
    const deser : Deserializer<T> = deserialize ?? JSON.parse
    const ser : Serializer<T> = serialize ?? JSON.stringify

    // Get depending hooks
    const urlParameters = useSearchParams()
    const currentPath = usePathname()
    const router = useRouter()

    // Read current value
    let currentValue = initialValue
    let hasStoreError = false
    try {
        currentValue = deser(urlParameters.get(parameter) ?? "")
        if (validate && !validate(currentValue)) {
            currentValue = initialValue
            hasStoreError = true
        }
    } catch (e) {
        currentValue = initialValue
        hasStoreError = true
    }

    // Allow value updates
    const updateRoute = (newValue: T | null) =>
    {
        const updatedParameters = new URLSearchParams(urlParameters)
        if (newValue == null || newValue == initialValue)
            updatedParameters.delete(parameter)
        else
            updatedParameters.set(parameter, ser(newValue))
        const newRoute = currentPath + ( updatedParameters.size > 0 ? "?"+updatedParameters.toString() : "")
        router.push(newRoute, { scroll: false })
    }
    return [ currentValue, updateRoute, hasStoreError ]

}