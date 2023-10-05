import React, { type FunctionComponent, type ComponentType, type PropsWithChildren } from 'react'
import CmsContent, { type CmsContentProps } from './cms-content'
import { getFactory } from './factory'
import * as Uuid from 'uuid'

const DEBUG = process.env.NODE_ENV != 'production'

export type StructuredHtmlProps = {
    data?: string | StructuredHtmlData | StructuredHtmlData[]
    locale?: string
    key?: string
}

type StructuredHtmlData = {
    componentType: string
    attributes?:  {
        [attributeKey: string]: any
    },
    children?: StructuredHtmlData[]
    text?: string
    contentId?: string
    content?: string
    contentType?: string[]
}

export const StructuredHtml = async ({ data, locale }: StructuredHtmlProps) : Promise<JSX.Element> =>
{
    const parsedData = parseData(data)
    if (!parsedData)
        if (DEBUG)
            return <div className='opti-error'>Unable to generate data structure, provided data type: { typeof(data) }</div>
        else
            return <></>    
    if (Array.isArray(parsedData)) {
        return <>{ await Promise.all(parsedData.map(x => StructuredHtmlElement({ componentInfo: x, key: Uuid.v4(), locale}))) }</>
    }
    return StructuredHtmlElement({ componentInfo: parsedData, locale })
}

const selfClosing = [ 'img', 'br' ]

async function StructuredHtmlElement({ componentInfo, locale, key}: StructuredHtmlElementProps) : Promise<JSX.Element>
{
    const factory = getFactory()

    // Handle empty componentType
    if (!componentInfo.componentType)
        return <></>

    // Handle text
    if (componentInfo.componentType == '#text')
        return <>{componentInfo.text ?? ""}</>

    // Optimizely  Content
    if (componentInfo.componentType == "OptimizelyContent")
        return React.createElement(CmsContent as unknown as FunctionComponent<CmsContentProps>, {
            contentLink: { 
                id: Number.parseInt(componentInfo.contentId ?? "-1") ?? -1, 
                guidValue: componentInfo.content, 
                locale 
            },
            contentType: componentInfo.contentType,  
            key
        })

    // Handle factory
    if (factory.has(componentInfo.componentType))
    {
        const FactoryComponent = factory.resolve(componentInfo.componentType) as ComponentType<PropsWithChildren<{[key: string]: any}>>
        return <FactoryComponent key={ key } {...componentInfo.attributes }>{
            await resolveChildren(componentInfo.children ?? [], locale)
        }</FactoryComponent>
    }

    // Handle self-closing tags
    if (selfClosing.includes(componentInfo.componentType))
        return React.createElement(componentInfo.componentType, { key, ...componentInfo.attributes})

    // Handle regular string (e.g. likely default component)
    if (componentInfo.componentType.indexOf('/') < 0)
    {
        return React.createElement(componentInfo.componentType, {
            key,
            ...componentInfo.attributes,
            children: await resolveChildren(componentInfo.children ?? [], locale)
        })
    }

    if (DEBUG)
        return <div className='opti-error' key={ key }>Unable to resolve rendering method for element { JSON.stringify(componentInfo )}</div>
    return <></>
}

async function resolveChildren(children ?: StructuredHtmlData[] | null, locale?: string) : Promise<JSX.Element[]>
{
    return Promise.all((children ?? []).map(x => StructuredHtmlElement({
        componentInfo: x,
        locale,
        key: Uuid.v4()
    })))
}

type StructuredHtmlElementProps = {
    componentInfo: StructuredHtmlData
    key?: string
    locale?: string
}

function parseData(rawData ?: string | StructuredHtmlData | StructuredHtmlData[] | null) : StructuredHtmlData | StructuredHtmlData[] | undefined
{
    if (!rawData)
        return undefined
    if (Array.isArray(rawData))
        return rawData.filter(x => typeof(x) == 'object' && x != null && (x as StructuredHtmlData).componentType)
    if (typeof(rawData) == "object" && rawData != null)
        return rawData.componentType ? rawData : undefined
    try {
        const parsed = JSON.parse(rawData)
        if (!parsed)
            return undefined
        return parsed
    } catch {
        if (DEBUG)
            console.error("Caught error while parsing structured HTML")
        return undefined
    }
}