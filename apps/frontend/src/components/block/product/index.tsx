import 'server-only'
import { Utils, type CmsComponent } from "@remkoj/optimizely-dxp-react"
import type * as GraphQL from '@gql/graphql'
import { gql } from '@gql/index'

import './product.css'

import Image from 'next/image'
import Link from 'next/link'

export const ProductInfoBlock : CmsComponent<GraphQL.ProductBlockDataFragment> = async ({ inEditMode, data, client, contentLink }) => {
    const locale = contentLink.locale ?? 'en'
    const productCode = data?.ProductCode ?? 'P000000'
    /* @ts-expect-error */
    const mainImage : GraphQL.ImageDataFragment | undefined = data?.MainImage || undefined
    const imageSrc = mainImage?.data?.path ?? mainImage?.data?.url ?? undefined
    const productName = data?.ProductName ?? "Unnamed product"
    const productsResponse = ((await client?.query({ 
        query: GetProductPropsQuery, 
        variables: { code: data?.ProductCode ?? "-", locale: contentLink.locale as GraphQL.Locales }
    }))?.data?.product?.items ?? []).filter(Utils.isNotNullOrUndefined)
    const props = productsResponse.length != 1 ? [] : (productsResponse[0].properties?.texts?.items ?? []).filter(Utils.isNotNullOrUndefined)

    return <div className="product-tile-container">
        <div className="product-tile">
            <div className="product-image" data-epi-edit={ inEditMode ? "MainImage" : undefined }>
                {imageSrc && <Image src={ new URL(imageSrc, process.env.DXP_URL ?? 'http://localhost:3000').href } alt={"Main picture of "+productName} fill className="object-contain"/>}
            </div>
            <div className="product-info">
                <div className="title" data-epi-edit={ inEditMode ? "ProductName" : undefined }>{ productName }</div>
                <div className="payoff" data-epi-edit={ inEditMode ? "ProductTagLine" : undefined }>{ data?.ProductTagLine ?? " "}</div>
                <div className="intro" data-epi-edit={ inEditMode ? "ShortDescription" : undefined } dangerouslySetInnerHTML={{ __html: data?.ShortDescription ?? " "}} />
                <div className="props">
                    <table>
                        <tbody>
                            <tr>
                                { props.map(prop => {
                                    if (isOfType(prop, "ProductTextProperty")) 
                                        return <td key={`value-for-${ prop.label }`}>{ prop.value ?? "" }</td>
                                }) }
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                { props.map(prop => {
                                    if (isOfType(prop, "ProductTextProperty")) 
                                        return <th key={`title-for-${ prop.label }`}>{ prop.label ?? "" }</th>
                                }) }
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <div className="product-actions">
                <Link href={`/${ locale }/products/${ productCode }`} className='btn-secondary'>Read More</Link>
                <Link href={`/${ locale }/products/${ productCode }`} className='btn-primary'>Apply now</Link>
            </div>
        </div>
    </div>
}
ProductInfoBlock.displayName = "Product tile"
ProductInfoBlock.getDataFragment = () => ['ProductBlockData', ProductBlockDataFragment]

export default ProductInfoBlock

type GqlBaseType<T extends string = string> = { __typename?: T }
function isOfType<Type extends string>(toTest: GqlBaseType<string>, typeName: Type) : toTest is GqlBaseType<Type>
{
    return toTest.__typename && toTest.__typename == typeName ? true : false
}

const GetProductPropsQuery = gql(/*GraphQL*/`query getProductProps($code: String!, $locale: [Locales])
{
    product: Product(
        where: { ProductCode: { eq: $code }}
        locale: $locale
    ) {
        total
        items {
            code: ProductCode
            properties: _children {
                texts: ProductTextProperty {
                    items {
                        label: PropertyName
                        value: PropertyValue
                    }
                }
            }
        }
    }
}`)

const ProductBlockDataFragment = gql(/*GraphQL*/`fragment ProductBlockData on Product {
    ProductCode
    ProductName
    ProductTagLine
    ShortDescription
    MainImage {
        ...ImageData
    }
}`)