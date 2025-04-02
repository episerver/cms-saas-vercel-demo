import { type ComponentProps, type FunctionComponent } from "react"
import { type CmsComponent, type WithGqlFragment } from "@remkoj/optimizely-cms-react"
import { ButtonBlockDataFragmentDoc, type ButtonBlockDataFragment, LinkDataFragmentDoc } from "@/gql/graphql"
import { getFragmentData } from "@gql/fragment-masking"
import Link from 'next/link'
import { urlToRelative } from '@components/shared/cms_link'
import { Button } from "@components/shared/button"

type ButtonBlockProps = ComponentProps<CmsComponent<ButtonBlockDataFragment>>
type ButtonBlockComponent = CmsComponent<ButtonBlockDataFragment> extends WithGqlFragment<any, ButtonBlockDataFragment> ? 
    WithGqlFragment<FunctionComponent<ButtonBlockProps & Omit<ComponentProps<typeof Link>, 'className'> & Omit<ButtonBlockDataFragment, 'children' | '__typename'>>, ButtonBlockDataFragment> : never

/**
 * Button
 * Represents an instance of a button
 */
export const ButtonBlockComponent : ButtonBlockComponent = ({ 
    // Allow to be used as regular CMS Component
    data: { 
        url: configuredUrlFragment, 
        buttonType: configuredButtonType,
        buttonVariant: configuredButtonVariant, 
        className: configuredClassName, 
        children: text 
    } = {}, 
    inEditMode, 
    layoutProps, 
    contentLink,

    // Allow fragment to be spread on the ButtonBlock
    url: providedUrlFragment, 
    className: providedClassName,
    buttonType: providedButtonType,
    buttonVariant: providedButtonVariant,
    
    // Allow to be used as a Next.JS Link
    ctx, // Extract context to prevent passing through
    href,
    children,
    ...props 
}) => {

    // Unmask fragment
    const url = getFragmentData(LinkDataFragmentDoc, configuredUrlFragment || providedUrlFragment)
    const buttonType = (configuredButtonType || providedButtonType || undefined) as 'primary' | 'secondary' | undefined
    const buttonVariant = (configuredButtonVariant || providedButtonVariant || undefined) as 'default' | 'cta' | undefined

    const linkHref = url?.default ?? href.toString() ?? '#'
    const className = `${ providedClassName ?? '' } ${ configuredClassName ?? ''}`.trim()

    return <Button { ...props } url={ linkHref || "#"} buttonColor="default" buttonType={buttonType} buttonVariant={ buttonVariant } className={ className }>{ text ?? children }</Button>
}
ButtonBlockComponent.displayName = "Button (Component/ButtonBlock)"
ButtonBlockComponent.getDataFragment = () => ['ButtonBlockData', ButtonBlockDataFragmentDoc]

export default ButtonBlockComponent