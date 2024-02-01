import Link from "next/link";

export interface ButtonBlockComponentType {
  buttonType: "primary" | "secondary";
  buttonVariant?: "default" | "cta";
  className?: string;
  url: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonBlockComponentType> = ({
  className = "",
  buttonType,
  buttonVariant = "default",
  url = "#",
  children,
}) => {
  const buttonTypes = {
    primary: "btn--primary",
    secondary: "btn--secondary",
  };

  const buttonVariants = {
    default: "btn--default",
    cta: "btn--cta",
  };

  return (
    <Link
      href={url}
      className={`${buttonTypes[buttonType]} ${buttonVariants[buttonVariant]} ${className}`}
    >
      <div className="btn__content">{children}</div>
    </Link>
  );
};

export default Button;
