"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import { HeaderContext } from "../_header";
import { DropdownMenuProps, MenuItem, Promo } from "../types/headerTypes";

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
            {menuList.items.map((menuItem: MenuItem) => (
              <li key={menuItem.text}>
                <Link
                  className="hover:text-azure focus:text-azure"
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
function DropdownMenu({ menuName, menuData, ...props }: DropdownMenuProps) {
  const { currentMenu, setCurrentMenu } = useContext(HeaderContext);
  const [columns, setColumns] = useState(menuData?.length);
  const gridColumnClass = useRef("grid-cols-1");

  useEffect(() => {
    menuData?.forEach(({ contentLink: { menuList } }) => {
      if (menuList.__typename === "CardBlock") {
        setColumns(columns + 1);
      }
    });
  }, []);

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
  }, [columns]);

  function handleToggle() {
    setCurrentMenu(menuName);
  }

  return (
    <li
      className="mx-4 xl:mx-8 h-full flex items-center"
      onMouseOver={handleToggle}
      onFocus={handleToggle}
      {...props}
    >
      <button className="hover:text-azure focus:text-azure font-semibold">
        {menuName}
      </button>
      {menuData && currentMenu === menuName ? (
        <section className="outer-padding absolute pt-10 pb-20 z-50 top-[88px] left-0 bg-ghost-white w-full shadow-[0_14px_4px_6px_rgba(0,0,0,0.1)]">
          <div className={`container mx-auto grid ${gridColumnClass.current}`}>
            {menuData.map(({ contentLink: { menuList } }) => {
              return <MenuItem key={menuList.title} menuList={menuList} />;
            })}
          </div>
        </section>
      ) : null}
    </li>
  );
}

function PromoItem({ heading, description, link, image }: Promo) {
  return (
    <article className="grid grid-cols-2 gap-12 max-w-[500px] bg-white rounded-[20px] p-12">
      <div className="prose">
        {heading && <h3 className="mb-4 leading-[1.5]">{heading}</h3>}
        {description && <p className="leading-[1.5]">{description}</p>}
        {link && (
          <Link className="link--arrow" href={link.url}>
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
      {menuItems.map(({ contentLink: { navigationItem } }) => (
        <DropdownMenu key={navigationItem.menuName} {...navigationItem} />
      ))}
    </ul>
  );
}
