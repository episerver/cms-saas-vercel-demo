import { Maybe, Scalars } from "@gql/graphql";
import Link from "next/link";

export interface ButtonBlockComponentType {
  className?: Maybe<Scalars["String"]["output"]>;
  /** The text of the button */
  children?: Maybe<Scalars["String"]["output"]>;
  /** The type of button to display */
  buttonType?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
  /** The type of button to display */
  buttonVariant?: Maybe<Scalars["String"]["output"]>;
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

  return (
    <Link
      href={url ? url : "#"}
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
