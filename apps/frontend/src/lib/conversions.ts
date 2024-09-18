import { type Maybe, type LinkDataFragment } from '@gql/graphql'
import { type ReferenceData, type LinkData } from "@/lib/urls"

export type LinkDataPathProperty = keyof Omit<LinkDataFragment, 'base' | ' $fragmentName' | '__typename'>

export function refToURL(reference?: Maybe<ReferenceData>, pathProperty: LinkDataPathProperty = 'default') : URL | null
{
    return linkToURL(reference?.url, pathProperty)
}

export function linkToURL(link?: Maybe<LinkData>, pathProperty: LinkDataPathProperty = 'default') : URL | null
{
    if (!link) return null
    const path = link[pathProperty]
    if (!path || path.length == 0) return null
    return new URL(path, link.base ?? undefined)
}