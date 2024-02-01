import { Utils } from "@remkoj/optimizely-dxp-react";
import { gql as graphql } from "@apollo/client";
import { getCurrentChannel } from "@/lib/current-channel";
import { getServerClient } from "@/lib/client";
import {
  getFallbackLocale,
  localeToContentGraphLocale,
  resolveLocale,
} from "@/lib/i18n";
import Footer from "./_footer";

type SiteFooterProps = {
  locale?: string;
};

export default async function SiteFooter({ locale }: SiteFooterProps) {
  const currentLocale = resolveLocale(locale);
  const client = getServerClient();
  const siteInfo = await getCurrentChannel();

  const config = (
    await client.query({
      query: FooterConfigQuery,
      variables: {
        locale: localeToContentGraphLocale(currentLocale) as any,
        siteId: siteInfo.id,
      },
    })
  ).data;
  const footerCopyright = config.menuItems.items[0].footerCopyright;
  const footerSubLinks = config.menuItems.items[0].footerSubLinks;
  const footerItems = config.menuItems.items[0].footerNavigation;

  return (
    <Footer
      footerItems={footerItems}
      footerCopyright={footerCopyright}
      footerSubLinks={footerSubLinks}
    />
  );
}

const FooterConfigQuery = graphql(/* graphql */ `
  query FooterNavigationNew($locale: [Locales] = en) {
    menuItems: StartPage(locale: $locale) {
      items {
        footerSubLinks: FooterNavigationSubLinks {
          url: Href
          text: Text
        }
        footerCopyright: FooterNavigationCopyrightText
        footerNavigation: FooterNavigationContentArea {
          contentLink: ContentLink {
            navigationItem: Expanded {
              ...FooterNavigationBlock
            }
          }
        }
      }
    }
  }

  fragment FooterNavigationBlock on IContent {
    ...FooterMenuNavigationItem
    ...HtmlBlock
  }

  fragment HtmlBlock on HtmlBlock {
    title: HtmlBlockHeading
    content: HtmlContent
  }

  fragment FooterMenuNavigationItem on MenuNavigationBlock {
    title: MenuNavigationHeading
    items: NavigationLinks {
      url: Href
      title: Title
      target: Target
      text: Text
    }
  }
`);
