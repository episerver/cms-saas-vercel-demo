import type { CmsComponent } from '@remkoj/optimizely-dxp-react'
import type { CmsContentAreaClassMapper } from '@remkoj/optimizely-dxp-react-server'
import type * as GraphQL from '@gql/graphql'
import { CmsContentArea } from '@remkoj/optimizely-dxp-react-server'
import { gql } from '@gql/gql'

const NoClassMapper : CmsContentAreaClassMapper = () => ''

export const ContainerBlock : CmsComponent<GraphQL.ContainerBlockDataFragment> = ({ contentLink, data, children, client, inEditMode }) => 
{
    const items = data.MainContainerArea
    if (!items)
        return <div className='container-block empty-container-block w-full' data-epi-edit={ inEditMode ? "MainContentArea" : undefined } />

    const additionalClasses : string[] = []
    let classMapper = NoClassMapper
    switch (data?.Gap) {
        case 'small':
            additionalClasses.push('gap-y-1','md:gap-2','lg:gap-4')
            break
        case 'medium':
            additionalClasses.push('gap-y-4','md:gap-6','lg:gap-8')
            break
        case 'large':
            additionalClasses.push('gap-y-8','md:gap-10','lg:gap-12')
            break
        default:
        case 'none':
            additionalClasses.push('gap-0')
            break
    }
    switch (data?.Spacing) {
        case 'small':
            additionalClasses.push('p-1','md:p-2','lg:p-4')
            break
        case 'medium':
            additionalClasses.push('p-4','md:p-6','lg:p-8')
            break
        case 'large':
            additionalClasses.push('p-8','md:p-10','lg:p-12')
            break
        default:
        case 'none':
            additionalClasses.push('p-0')
            break
    }
    switch (data?.GridLayout) {
        case '1-col':
            additionalClasses.push('grid-cols-1')
            break
        case '2-cols':
            additionalClasses.push('grid-cols-1','md:grid-cols-2')
            break
        case '3-cols':
            additionalClasses.push('grid-cols-1','lg:grid-cols-3')
            break
        case '3-cols-center':
            additionalClasses.push('grid-cols-1','md:grid-cols-2','lg:grid-cols-4')
            classMapper = (displayOption, contentType, idx) => {
                const columnId = idx % 3
                if (columnId == 1) // Second item in row
                    return 'col-span-2 order-none md:order-first lg:order-none lg:py-16'
                return 'order-none'
            }
            break
        default:
        case '4-cols':
            additionalClasses.push('grid-cols-1','md:grid-cols-2','lg:grid-cols-4')
            break
    }
    switch (data?.BackgroundColor) {
        case 'primary':
            additionalClasses.push('bg-primary-light text-default-onPrimaryLight border-solid border-b-4 border-t-8 border-primary h-full')
            break
        case 'secondary':
            additionalClasses.push('bg-secondary-light text-default-onSecondaryLight border-solid border-b-4 border-t-8 border-secondary h-full')
            break
        case 'gray':
            additionalClasses.push('bg-stripe-light text-default border-solid border-b-4 border-t-8 border-stripe-dark h-full')
            break
        case 'none':
        default:
            // Do nothing
            break
    }

    return <CmsContentArea 
                className={"container-block grid "+additionalClasses.join(' ')}
                fieldName='MainContentArea' 
                inEditMode={ inEditMode } 
                locale={ contentLink.locale } 
                items={ items } 
                classMapper={ classMapper } />
}
ContainerBlock.displayName = "Container Block"
ContainerBlock.getDataFragment = () => ["ContainerBlockData", Documents.data]
export default ContainerBlock

const Documents : Readonly<{[ field: string ]: any }> = {
    data: gql(/** GraphQL */`fragment ContainerBlockData on ContainerBlock {
    MainContainerArea {
        ...BlockContentAreaItemData
    }
    Gap
    Spacing
    GridLayout
    BackgroundColor
}`)
}