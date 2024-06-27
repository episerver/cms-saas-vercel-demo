"use client";

import { createContext, useRef, useState, type FunctionComponent } from "react";
import Logo from "./partials/_logo";
import MainMenu from "./partials/_main-menu";
import SecondaryMenu from "./partials/_secondary-menu";
import MobileMenu from "./partials/_mobile-menu";
import { HeaderContextType } from "./types/headerTypes";
import type * as GraphQL from "@gql/graphql";

export const HeaderContext = createContext<HeaderContextType>({
  menuItems: [],
  utilityItems: [],
  currentMenu: "",
  setCurrentMenu: (name: string) => {},
  mobileMenuOpen: false,
});

type ClientHeaderProps = {
  menuItems: Array<GraphQL.MegaMenuItemFragment>
  utilityItems: Array<GraphQL.MenuItemFragment>
}

/**
 * Renders the Header component with a specific locale.
 *
 * @param {any} locale - the locale to render the header with
 * @return {JSX.Element} the rendered Header component
 */
export const Header : FunctionComponent<ClientHeaderProps> = ({ menuItems, utilityItems }) => {
  const logoRef = useRef<HTMLDivElement>(null);
  const secondaryMenuRef = useRef<HTMLUListElement>(null);
  const [currentMenu, setCurrentMenu] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mouseLeaveTimer = useRef<undefined | NodeJS.Timeout>();

  const headerContext = {
    menuItems,
    utilityItems,
    currentMenu,
    setCurrentMenu,
    mobileMenuOpen,
  };

  // This will close the dropdown after 500ms of the mouse not being over any header element.
  function handleMouseLeave() {
    mouseLeaveTimer.current = setTimeout(() => {
      setCurrentMenu("");
    }, 800);
  }

  // Clears timeout if we detect that the mouse is still over the header
  function handleMouseEnter() {
    clearTimeout(mouseLeaveTimer.current);
  }

  // Checks if the focus leaves the header and closes the dropdown menu if it does.
  function handleFocusLeave(e: React.FocusEvent<HTMLElement>) {
    if (
      (secondaryMenuRef.current &&
        secondaryMenuRef.current.contains(e.relatedTarget)) ||
      (logoRef.current && logoRef.current.contains(e.relatedTarget))
    ) {
      setCurrentMenu("");
    }
  }

  return (
    <HeaderContext.Provider value={headerContext}>
      <header
        className="outer-padding bg-ghost-white dark:bg-vulcan"
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onBlur={handleFocusLeave}
      >
        <div className="py-8 container mx-auto flex items-center w-full justify-between lg:justify-normal">
          <Logo ref={logoRef} />

          <div className="lg:hidden">
            
            <button
              className="btn btn--secondary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="btn__content">
                {mobileMenuOpen ? "Close" : "Menu"}
              </div>
            </button>
            <MobileMenu />
          </div>

          <div className="hidden justify-between grow lg:flex">
            <MainMenu />
            <SecondaryMenu ref={secondaryMenuRef} />
          </div>
        </div>
      </header>
    </HeaderContext.Provider>
  );
}

export default Header