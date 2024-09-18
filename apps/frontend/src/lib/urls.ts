import { type LinkDataFragment, type ReferenceDataFragment, type LinkItemDataFragment } from '@gql/graphql'

export type ReferenceData = ReferenceDataFragment & {
    ' $fragmentRefs'?: {
        "ReferenceDataFragment": ReferenceDataFragment;
    }
}
export type LinkData = LinkDataFragment & {
    ' $fragmentRefs'?: {
        "LinkDataFragment": LinkDataFragment;
    }
}
export type LinkItemData = LinkItemDataFragment & {
    ' $fragmentRefs'?: {
        "LinkItemDataFragment": LinkItemDataFragment;
    }
}

export function getLinkData(input?: LinkItemData | LinkData | ReferenceData | null) : LinkData | undefined
{
    if (!input)
        return undefined
    if ((input as ReferenceData).url)
        return (input as ReferenceData).url ?? undefined
    return input as LinkData ?? undefined
}

export function linkDataToUrl(item: LinkData | null | undefined) : URL | undefined
{
    try {
        return new URL(item?.default ?? '/', item?.base ?? undefined)
    } catch {
        return undefined
    }
}