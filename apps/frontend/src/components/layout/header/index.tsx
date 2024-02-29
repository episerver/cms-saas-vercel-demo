import "server-only";
import { gql as graphql } from "@gql/gql";
import { getServerClient } from '@remkoj/optimizely-dxp-nextjs';
import siteInfo from '@/site-config'

import Header from "./_header";

type HeaderWrapperProps = {
  locale?: string;
};

export default async function SiteHeader({ locale }: HeaderWrapperProps) {
  const currentLocale = siteInfo.resolveLocale(locale);
  const client = getServerClient();

  const config = ((
    await client.request(HeaderConfigQuery, {
      locale: siteInfo.localeToGraphLocale(currentLocale) as any
    })
  ) || []);

  const menuItems = (config.menuItems?.items ?? [])[0]?.headerNavigation;
  const utilityItems = (config.menuItems?.items ?? [])[0]?.UtilityNavigationContentArea;

  return (
    <Header locale={locale} menuItems={menuItems} utilityItems={utilityItems} />
  );
}

const HeaderConfigQuery = graphql(/* graphql */ `
  query Navigations($locale: [Locales]) {
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
    __typename
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
    __typename
  }
`);
