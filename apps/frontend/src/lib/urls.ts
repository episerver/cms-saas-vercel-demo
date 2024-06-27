import { type LinkDataFragment, type ReferenceDataFragment, type LinkItemDataFragment } from '@gql/graphql'

export function getLinkData(input?: LinkItemDataFragment | LinkDataFragment | ReferenceDataFragment | null) : LinkDataFragment | undefined
{
    if (!input)
        return undefined
    if ((input as ReferenceDataFragment).url)
        return (input as ReferenceDataFragment).url ?? undefined
    return input as LinkDataFragment ?? undefined
}

export function linkDataToUrl(item: LinkDataFragment | null | undefined) : URL | undefined
{
    try {
        return new URL(item?.default ?? '/', item?.base ?? undefined)
    } catch {
        return undefined
    }
}