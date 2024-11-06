import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";
import { type ReferenceDataFragment } from "@gql/graphql"
import { linkDataToUrl, getLinkData } from '@/lib/urls'

type LogoProps = JSX.IntrinsicElements["div"] & {
  logo?: ReferenceDataFragment
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(({ logo, ...divProps }, ref) => {
  const logoUrl = linkDataToUrl(getLinkData(logo))?.href
  return (
    <div className="flex align-middle" ref={ref} {...divProps }>
      <Link href="/" className="mr-[28px]">
        <Image
          src={ logoUrl ?? "/assets/moseybank-logo.svg"}
          alt="Mosey Bank Logo"
          fill
          unoptimized
          priority
          className="dark:brightness-0	dark:invert !w-[200px] !h-auto !relative"
        />
      </Link>
    </div>
  );
});

Logo.displayName = "Logo";

export default Logo;
