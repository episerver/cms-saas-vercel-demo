"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext, useEffect, useRef, useState, useMemo } from "react";
import { HeaderContext } from "../_header";
import { useFragment, Schema } from "@gql";
import { MenuItemFragment } from "@gql/graphql";

function MenuItem({ menuList, ...props }) {
  if (menuList.__typename === "MenuNavigationBlock") {
    return (
      <div {...props}>
        {menuList.title ? (
          <h3 className="text-[16px] font-semibold uppercase tracking-[1px]">
            {menuList.title}
          </h3>
        ) : null}
        {menuList.items && (
          <ul className="grid gap-5">
            {menuList.items.map((menuItem) => (
              <li key={menuItem.text}>
                <Link
                  className="hover:text-azure focus:text-azure dark:hover:text-verdansk"
                  href={menuItem.url}
                >
                  {menuItem.text}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  if (menuList.__typename === "CardBlock") {
    return (
      <div className="col-span-2 flex justify-end">
        <PromoItem {...menuList} />
      </div>
    );
  }
}

/**
 * Renders a dropdown menu with the specified menu name.
 *
 * @param {string} menuName - The name of the dropdown menu
 * @return {JSX.Element} The rendered dropdown menu
 */
function DropdownMenu({ menuName, menuData = [], ...props }: Schema.MegaMenuItemFragment) {
  const { currentMenu, setCurrentMenu } = useContext(HeaderContext);
  const gridColumnClass = useRef("grid-cols-1");
  const columns = useMemo(() => {
    let count = menuData?.length ?? 0;
    menuData?.forEach(menuList => {
      if ((menuList as MenuItemFragment)?.__typename === "CardBlock")
        count++;
    });
    return count;
  }, [ menuData ]);

  useEffect(() => {
    if (menuData) {
      switch (columns) {
        case 2:
          gridColumnClass.current = "grid-cols-2";
          break;
        case 3:
          gridColumnClass.current = "grid-cols-3";
          break;
        case 4:
          gridColumnClass.current = "grid-cols-4";
      }
    }
  }, [columns, menuData]);

  function handleToggle() {
    setCurrentMenu(menuName ?? "");
  }

  return (
    <li
      className="mx-4 xl:mx-8 h-full flex items-center "
      onMouseOver={handleToggle}
      onFocus={handleToggle}
      {...props}
    >
      <button className="hover:text-azure focus:text-azure font-semibold dark:text-white dark:hover:text-verdansk">
        {menuName}
      </button>
      {menuData && currentMenu === menuName ? (
        <section className="outer-padding absolute pt-10 pb-20 z-50 top-[88px] left-0 bg-ghost-white w-full shadow-[0_14px_4px_6px_rgba(0,0,0,0.1)] dark:bg-vulcan dark:text-white">
          <div className={`container mx-auto grid ${gridColumnClass.current}`}>
            {menuData.filter(isMenuNavigationItem).map((menuList, index) => {
              return (
                <MenuItem key={(menuList?.title ?? '') + index} menuList={menuList} />
              );
            })}
          </div>
        </section>
      ) : null}
    </li>
  );
}

function isMenuNavigationItem(toTest: any) : toTest is Schema.MenuNavigationItemFragment
{
  return toTest?.__typename == "MenuNavigationBlock"
}

function PromoItem({ heading, description, link, image }: any) {
  return (
    <article className="grid grid-cols-2 gap-12 max-w-[500px] bg-white rounded-[20px] p-12 dark:bg-vulcan-85">
      <div className="prose">
        {heading && <h3 className="mb-4 leading-[1.5]">{heading}</h3>}
        {description && <p className="leading-[1.5]">{description}</p>}
        {link && (
          <Link className="link--arrow dark:text-white dark:brightness-0	dark:invert" href={link.url}>
            {link.title}
          </Link>
        )}
      </div>
      <div>
        {image && (
          <Image
            className="w-full rounded-[20px]"
            src={image.src}
            alt={image.alt ? image.alt : ""}
            width={207}
            height={232}
          />
        )}
      </div>
    </article>
  );
}

export default function MainMenu() {
  const { menuItems } = useContext(HeaderContext);

  return (
    <ul className="flex justify-between items-center">
      {menuItems.map(navigationItem => (
        <DropdownMenu key={navigationItem.menuName} {...navigationItem} />
      ))}
    </ul>
  );
}
