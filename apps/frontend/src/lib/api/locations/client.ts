'use client'
import type { GetLocationsOptions, GetLocationsResult } from './types'
import { useState, useEffect } from 'react'
export type { GetLocationsOptions, GetLocationsResult } from './types'

const endpoint = '/api/content/locations'
const emptyLocationsResult : GetLocationsResult = {
    data: [],
    facets: {
        continent: [],
        services: []
    }
}

export function useLocations(opts: GetLocationsOptions, initialData?: GetLocationsResult) : { loading: boolean } & GetLocationsResult
{
    const [ locations, setLocations ] = useState<GetLocationsResult>(initialData ?? emptyLocationsResult)
    const [ loading, setLoading ] = useState<boolean>(false)

    useEffect(() => {
        const requestPointer = new AbortController()
        setLoading(true)
        
        fetch(endpoint, {
            method: 'POST',
            signal: requestPointer.signal,
            body: JSON.stringify(opts)
        }).then(response => { // Validate response, if OK, parse body as JSON
            if (!response.ok)
                throw new Error(`${ response.status }: ${ response.statusText }`)
            return response.json()
        }).then(body => { // Process the received body
            setLoading(false)
            setLocations(body)
        }).catch(e => { // Catch any error occurred and handle gracefully
            setLoading(false)
            console.error("Fetching locations failed", e)
        })

        return () => {
            requestPointer.abort()
            setLoading(false)
        }
    }, [ opts ])

    return {
        loading,
        ...locations
    }
}