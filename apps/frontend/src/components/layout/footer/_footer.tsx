"use client";
import Image from "next/image";
import Link from "next/link";

function FooterColumn({ title, items, __typename, ...props }: any) {
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
                  <a target={item.target} href={item.url}>
                    {item.text}
                  </a>
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
          <h1>Global HQ</h1>
          <address>
            <p>
              119 5th Ave, 7th floor
              <br /> New York, NY 10003, USA
            </p>
            <p>
              <a href="#">Contact us</a>
              <br />
              Phone: +1 603 594 0249
            </p>
          </address>
        </section>
        <h1 className="sr-only">Language select</h1>
        <select
          className="form-select font-semibold bg-vulcan mt-10"
          name=""
          id=""
        >
          <option value="">English</option>
          <option value="">Nederlands</option>
          <option value="">Vlaams</option>
        </select>
      </div>
    );
  }
}

export default function Footer({
  footerItems,
  footerCopyright,
  footerSubLinks,
}: any) {
  return (
    <footer className="bg-vulcan py-16 lg:py-32 outer-padding">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 text-white">
        {footerItems.map(
          ({
            contentLink: {
              navigationItem: { title, items, __typename },
            },
          }) => (
            <FooterColumn
              key={"footer-column" + title}
              __typename={__typename}
              title={title}
              items={items}
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
              {footerSubLinks.map(({ url, text, target, title }) => (
                <li key={text}>
                  <Link href={url} target={target} title={title}>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
}
