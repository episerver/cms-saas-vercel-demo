'use client'
import Image from "next/image";
import Link from "next/link";
import { type FunctionComponent } from "react";
import { layout_configuration } from "@/flags"
import useFlag from "@/useFlag";

type LogoProps = JSX.IntrinsicElements["a"] & {
  logo?: string
}

export const Logo : FunctionComponent<LogoProps> = ({ 
  logo = "/assets/moseybank-logo.svg",
  ...divProps
}) => {
  const { logo: logoUrl } = useFlag(layout_configuration, { logo, theme_switcher: false })
  return (
      <Link href="/" className="flex items-center grow-0 shrink-0" {...divProps }>
        <Image
          src={ logoUrl }
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