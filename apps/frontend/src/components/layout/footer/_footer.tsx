"use client";
import Image from "next/image";
import Link from "@components/shared/cms_link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import type { FooterMenuNavigationItemFragment, HtmlBlockFragment, LinkItemDataFragment, LinkDataFragment } from '@gql/graphql'

type FooterColumnData = (FooterMenuNavigationItemFragment & { content?: never } | (HtmlBlockFragment & { items?: never}))

type FooterColumnProps = Omit<JSX.IntrinsicElements['div'], keyof FooterColumnData> & FooterColumnData &
{
  dict: Record<string, any>
  locale: string,
  locales: Array<{code: string}>
}

function FooterColumn({
  title,
  items,
  __typename,
  content,
  locales,
  locale,
  dict,
  ...props
}: FooterColumnProps) {
  const router = useRouter();

  const switchToLocale = useCallback(
    (locale: string) => {
      return router.replace(locale);
    },
    [router]
  );


  if (__typename === "MenuNavigationBlock") {
    return (
      <div
        {...props}
        className="flex lg:justify-center col-span-2 lg:col-span-1 mb-16"
      >
        <section className="prose prose-h1:text-[12px] prose-h1:uppercase prose-h1:font-[400] prose-h1:tracking-[1px] prose-a:text-white prose-a:no-underline hover:prose-a:underline prose-a:not-italic prose-li:pl-0">
          <h1>{title}</h1>
          {items && (
            <ul className="list-none pl-0">
              {items.map((item, index) => (
                <li key={"footer" + index}>
                  { item && <Link href={ item } />}
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    );
  }

  if (__typename === "HtmlBlock") {
    return (
      <div className="mb-16 col-span-2 lg:col-span-1">
        <section className="prose prose-h1:text-[12px] prose-h1:uppercase prose-h1:font-[400] prose-h1:tracking-[1px] prose-a:text-white prose-a:underline hover:prose-a:no-underline prose-a:not-italic">
          <h1>{title}</h1>
          <address dangerouslySetInnerHTML={{ __html: content?.html ?? '' }}></address>
        </section>
        {locales && locales.length > 1 && (
          <>
            <label htmlFor="footer-lang-select" className="sr-only">
              {dict[locale].languagePicker.title}
            </label>
            <select
              className="form-select font-semibold bg-vulcan mt-10"
              name="footer-lang-select"
              id="footer-lang-select"
              onChange={(e) => {
                switchToLocale(e.target.value);
              }}
            >
              {locales.map(({ code }) => {
                  return (
                    <option key={code} value={code}>
                      {dict[locale].languagePicker.locales[code]}
                    </option>
                  );
                })}
            </select>
          </>
        )}
      </div>
    );
  }
}

type FooterProps = {
  dict: Record<string, any>
  locale: string,
  locales: Array<{code: string}>
  footerItems: Array<FooterColumnData>
  footerCopyright: string
  footerSubLinks?: null | Array<LinkItemDataFragment | null>
}

export default function Footer({
  dict,
  locales,
  locale,
  footerItems,
  footerCopyright,
  footerSubLinks,
}: FooterProps) {
  return (
    <footer className="bg-vulcan py-16 lg:py-32 outer-padding">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 text-white">
        {footerItems.map(footerItem => (
            <FooterColumn
              key={"footer-column" + footerItem.title}
              dict={dict}
              locales={locales}
              locale={locale}
              { ...footerItem }
            />
          )
        )}
      </div>
      <div className="container mx-auto grid text-white mt-16 lg:mt-32 lg:text-center lg:justify-center">
        <div className="lg:justify-center flex mb-16">
          <Image
            src={"/assets/moseybank-logo-white.svg"}
            width={200}
            height={35}
            alt="Moseybank Logo"
            unoptimized
          />
        </div>
        <div className="md:flex items-center md:prose-li:ml-[24px] prose-a:text-[12px] prose-p:text-[12px]">
          <p dangerouslySetInnerHTML={{ __html: footerCopyright }}></p>
          {footerCopyright && (
            <ul className="list-none md:flex mt-6 md:mt-0">
              {footerSubLinks?.map(linkItem => linkItem && (
                <li key={linkItem.text + ((linkItem.url as LinkDataFragment | null | undefined)?.default ?? '')}>
                  <Link href={ linkItem } />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
}
