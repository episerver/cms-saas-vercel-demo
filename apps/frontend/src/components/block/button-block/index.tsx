import type { ComponentProps } from "react";
import type { Maybe, ButtonBlockProperty, LinkDataFragment } from "@gql/graphql";
import Link from "next/link";
import { urlToRelative } from '@components/shared/cms_link'

type ButtonBlockType = ButtonBlockProperty
export type ButtonBlockComponentType = Omit<ComponentProps<typeof Link>, 'href' | 'className'> & {
  className?: Maybe<string>
  url?: Maybe<string> | {
    base?: Maybe<string>
    hierarchical?: Maybe<string>
    default?: Maybe<string>
  } | LinkDataFragment
  buttonType?: ButtonBlockType["ButtonType"]
  buttonVariant?: ButtonBlockType["ButtonVariant"]
}

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

const Button: React.FC<ButtonBlockComponentType> = ({
  className = "",
  buttonType,
  buttonVariant,
  url = "#",
  children,
  ...props
}) => {
  const buttonTypes: ButtonTypes = {
    primary: "btn--primary",
    secondary: "btn--secondary [&>*]:dark:!bg-vulcan [&>*]:dark:!text-ghost-white",
  };

  const buttonVariants: ButtonVariants = {
    default: "btn--default",
    cta: "btn--cta",
  };

  const linkHref = (!url || url == '#') ? '#' : urlToRelative(typeof(url) == 'string' ? new URL(url) : new URL(url.default ?? '/', url.base ?? 'https://example.com'))

  return (
    <Link
      href={ linkHref }
      className={`${buttonTypes[buttonType ?? "primary"]} ${
        buttonVariants[buttonVariant ?? "default"]
      } ${className}`}
      {...props}
    >
      <div className="btn__content dark:!bg-ghost-white dark:!border-ghost-white dark:!text-ghost-white dark:!text-vulcan">{children}</div>
    </Link>
  );
};

export default Button;
