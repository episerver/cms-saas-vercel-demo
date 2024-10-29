import { type ComponentProps, type FunctionComponent } from "react"
import { type CmsComponent, type WithGqlFragment } from "@remkoj/optimizely-cms-react"
import { ButtonBlockDataFragmentDoc, type ButtonBlockDataFragment, LinkDataFragmentDoc } from "@/gql/graphql"
import { getFragmentData } from "@gql/fragment-masking"
import Link from 'next/link'
import { urlToRelative } from '@components/shared/cms_link'

type ButtonBlockProps = ComponentProps<CmsComponent<ButtonBlockDataFragment>>
type ButtonBlockComponent = CmsComponent<ButtonBlockDataFragment> extends WithGqlFragment<any, ButtonBlockDataFragment> ? 
    WithGqlFragment<FunctionComponent<ButtonBlockProps & Omit<ComponentProps<typeof Link>, 'className'> & Omit<ButtonBlockDataFragment, 'children' | '__typename'>>, ButtonBlockDataFragment> : never

type ButtonTypes = {
    primary: string;
    secondary: string;
    [key: string]: string;
};
    
type ButtonVariants = {
    default: string;
    cta: string;
    [key: string]: string;
};

const buttonTypes: ButtonTypes = {
    primary: "btn--primary",
    secondary: "btn--secondary [&>*]:dark:!bg-vulcan [&>*]:dark:!text-ghost-white",
};

const buttonVariants: ButtonVariants = {
    default: "btn--default",
    cta: "btn--cta",
};

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
    href,
    children,
    ...props 
}) => {

    // Unmask fragment
    const url = getFragmentData(LinkDataFragmentDoc, configuredUrlFragment || providedUrlFragment)
    const buttonType = configuredButtonType || providedButtonType
    const buttonVariant = configuredButtonVariant || providedButtonVariant

    const linkHref = !url ? href : urlToRelative(typeof(url) == 'string' ? new URL(url) : new URL(url.default ?? '/', url.base ?? 'https://example.com'))
    const className = `${ providedClassName ?? '' } ${ configuredClassName ?? ''}`.trim()

    // If there's no content, don't render
    if (!text && (!children || (Array.isArray(children) && children.length == 0)))
        return null

    return <Link
        href={ linkHref || '#' }
        className={`${buttonTypes[buttonType ?? "primary"]} ${ buttonVariants[buttonVariant ?? "default"] } ${className}`.trim()}
        {...props}
    >
        <div className="btn__content dark:!bg-ghost-white dark:!border-ghost-white dark:!text-ghost-white dark:!text-vulcan">{ text ?? children }</div>
    </Link>
}
ButtonBlockComponent.displayName = "Button (Component/ButtonBlock)"
ButtonBlockComponent.getDataFragment = () => ['ButtonBlockData', ButtonBlockDataFragmentDoc]

export default ButtonBlockComponent