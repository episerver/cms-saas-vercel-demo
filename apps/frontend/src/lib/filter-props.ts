import type { CmsComponentProps } from "@remkoj/optimizely-cms-react"

export function pick<T extends object, F extends Array<keyof T>>(pickFrom: T, fields: F) : Pick<T, F[number]>
{
    const outputObject : Partial<Pick<T, F[number]>> = {}
    for (const propName in pickFrom)
        if (fields.includes(propName))
            outputObject[propName] = pickFrom[propName]
    return outputObject as Pick<T, F[number]>
}

export function omit<T extends object, F extends Array<keyof T>>(omitFrom: T, fields: F) : Omit<T, F[number]>
{
    const outputObject : Partial<Omit<T, F[number]>> = {}
    for (const propName in omitFrom)
        if (!fields.includes(propName)) {
            //@ts-expect-error Field key not matched
            outputObject[propName] = omitFrom[propName]
        }
    return outputObject as Omit<T, F[number]>
}

const CmsComponentPropKeys : Array<keyof Omit<CmsComponentProps<any>,'children'>> = ['contentLink',"ctx","data","editProps","inEditMode","layoutProps"]

export function omitCmsComponentProps<T extends object>(omitFrom: T) : Omit<T, keyof Omit<CmsComponentProps<any>,'children'>>
{
    return omit<T & Partial<CmsComponentProps<any>>, Array<keyof Omit<CmsComponentProps<any>,'children'>>>(omitFrom, CmsComponentPropKeys)
}