import "server-only";
import { Utils } from "@remkoj/optimizely-dxp-react";
import { gql as graphql } from "@apollo/client";
import { getCurrentChannel } from "@/lib/current-channel";
import { getServerClient } from "@/lib/client";
import {
  getFallbackLocale,
  localeToContentGraphLocale,
  resolveLocale,
} from "@/lib/i18n";
import Header from "./_header";

type HeaderWrapperProps = {
  locale?: string;
};

export default async function SiteHeader({ locale }: HeaderWrapperProps) {
  const currentLocale = resolveLocale(locale);
  const client = getServerClient();
  const siteInfo = await getCurrentChannel();
  const config = (
    await client.query({
      query: HeaderConfigQuery,
      variables: {
        locale: localeToContentGraphLocale(currentLocale) as any,
        siteId: siteInfo.id,
      },
    })
  ).data;

  const menuItems = config.menuItems.items[0].headerNavigation;
  const utilityItems = config.menuItems.items[0].UtilityNavigationContentArea;

  return (
    <Header locale={locale} menuItems={menuItems} utilityItems={utilityItems} />
  );
}

const HeaderConfigQuery = graphql(/* graphql */ `
  query Navigations($locale: [Locales] = en) {
    menuItems: StartPage(locale: $locale) {
      items {
        headerNavigation: MainNavigationContentArea {
          contentLink: ContentLink {
            navigationItem: Expanded {
              ...MegaMenuItem
            }
          }
        }
        UtilityNavigationContentArea {
          contentLink: ContentLink {
            navigationItem: Expanded {
              ...Block
            }
          }
        }
      }
    }
  }

  fragment MegaMenuItem on MegaMenuGroupBlock {
    menuName: MenuMenuHeading
    menuData: MegaMenuContentArea {
      contentLink: ContentLink {
        menuList: Expanded {
          ...Block
        }
      }
    }
  }

  fragment Block on IContent {
    ...MenuNavigationItem
    ...CardItem
    ...Button
  }

  fragment Button on ButtonBlock {
    text: ButtonText
    url: ButtonUrl
    type: ButtonType
    variant: ButtonVariant
  }

  fragment MenuNavigationItem on MenuNavigationBlock {
    title: MenuNavigationHeading
    items: NavigationLinks {
      url: Href
      title: Title
      target: Target
      text: Text
    }
  }

  fragment CardItem on CardBlock {
    heading: CardHeading
    subheading: CardSubHeading
    description: CardDescription
    color: CardColor
    image: CardImage {
      src: Url
    }
    link: CardButton {
      title: ButtonText
      url: ButtonUrl
    }
  }
`);
