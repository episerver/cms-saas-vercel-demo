import { type Schema } from '@gql'

export type HeaderContextType = {
  menuItems: Array<Schema.MegaMenuItemFragment>;
  utilityItems: Array<Schema.MenuItemFragment>;
  currentMenu: string;
  setCurrentMenu: (name: string) => void;
  mobileMenuOpen: boolean;
};

// The list of links
export type MenuList = {
  title: string;
  items: MenuItem[];
};

// The individual links
export type MenuItem = {
  title: string;
  url: string;
};

export type Promo = {
  // If promo added, limit menu items to 2 entries if possible? This shows as a card inside the dropdown.
  title: string;
  description: string;
  link: {
    title: string;
    url: string;
  };
  image: {
    src: string;
    alt: string;
  } | null;
};

// The entire dropdown menu
export type MenuData = {
  menuLists: MenuList[]; // Limit to 4 entries of lists.
  promo?: Promo;
};

export interface DropdownMenuProps {
  menuName: string;
  menuData: MenuData | null;
}