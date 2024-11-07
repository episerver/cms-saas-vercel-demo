import Image from "next/image";
import Link from "next/link";
import { type FunctionComponent } from "react";

type LogoProps = JSX.IntrinsicElements["a"] & {
  logo?: string | URL
}

const Logo : FunctionComponent<LogoProps> = ({ logo, ...divProps }) => {
  const logoUrl = typeof(logo) == 'object' ? logo.href : logo
  return (
      <Link href="/" className="flex items-center grow-0 shrink-0" {...divProps }>
        <Image
          src={ logoUrl ?? "/assets/moseybank-logo.svg"}
          alt="Mosey Bank Logo"
          fill
          unoptimized
          priority
          className="dark:brightness-0	dark:invert !w-auto !h-12 !relative"
        />
      </Link>
  );
};

Logo.displayName = "Logo";

export default Logo;
