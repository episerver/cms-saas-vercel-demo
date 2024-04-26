import {getSdk } from "@/sdk";
import { type Locales, type FooterMenuNavigationItemFragment, type HtmlBlockFragment } from "@gql/graphql"
import Footer from "./_footer";
import dict from "@shared/dictionary.json";
import { getServerContext } from "@remkoj/optimizely-cms-react/rsc";
import { localeToGraphLocale } from "@remkoj/optimizely-graph-client";
import { Utils } from '@remkoj/optimizely-cms-react'

type SiteFooterProps = {
  locale?: string;
};

export default async function SiteFooter({ locale }: SiteFooterProps) {
  const sdk = getSdk()
  const { locale: currentLocale } = getServerContext()
  const footerLocale = currentLocale ?? locale ?? 'en'
  const config = await sdk.getFooter({
    locale: localeToGraphLocale(footerLocale) as Locales
  });

  const footerCopyright = (config.menuItems?.items ?? [])[0]?.footerCopyright;
  const footerSubLinks = (config.menuItems?.items ?? [])[0]?.footerSubLinks;
  const footerItems = ((config.menuItems?.items ?? [])[0]?.footerNavigation ?? []).filter(Utils.isNotNullOrUndefined) as Array<FooterMenuNavigationItemFragment | HtmlBlockFragment>;

  return (
    <Footer
      dict={dict}
      locale={footerLocale}
      locales={[{code: 'en'},{code: 'nl'}]}
      footerItems={footerItems}
      footerCopyright={footerCopyright ?? ""}
      footerSubLinks={footerSubLinks}
    />
  );
}
