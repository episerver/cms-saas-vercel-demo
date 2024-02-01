import Image from "next/image";

export default async function Footer({ linkLists }: any) {
  return (
    <footer className="bg-vulcan py-16 lg:py-32 outer-padding">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 text-white">
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
          <select className="form-select font-semibold bg-vulcan mt-10" name="" id="">
            <option value="">English</option>
            <option value="">Nederlands</option>
            <option value="">Vlaams</option>
          </select>
        </div>
        <div className="flex lg:justify-center col-span-2 lg:col-span-1 mb-16">
          <section className="prose prose-h1:text-[12px] prose-h1:uppercase prose-h1:font-[400] prose-h1:tracking-[1px] prose-a:text-white prose-a:no-underline hover:prose-a:underline prose-a:not-italic prose-li:pl-0">
            <h1>Services</h1>
            <ul className="list-none pl-0">
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 1</a>
              </li>
            </ul>
          </section>
        </div>
        <div className="flex lg:justify-center col-span-2 lg:col-span-1 mb-16">
          <section className="prose prose-h1:text-[12px] prose-h1:uppercase prose-h1:font-[400] prose-h1:tracking-[1px] prose-a:text-white prose-a:no-underline hover:prose-a:underline prose-a:not-italic prose-li:pl-0">
            <h1>Services</h1>
            <ul className="list-none pl-0">
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 1</a>
              </li>
            </ul>
          </section>
        </div>
        <div className="flex lg:justify-center col-span-2 lg:col-span-1 mb-16">
          <section className="prose prose-h1:text-[12px] prose-h1:uppercase prose-h1:font-[400] prose-h1:tracking-[1px] prose-a:text-white prose-a:no-underline hover:prose-a:underline prose-a:not-italic prose-li:pl-0">
            <h1>Services</h1>
            <ul className="list-none pl-0">
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 1</a>
              </li>
            </ul>
          </section>
        </div>
        <div className="flex lg:justify-center col-span-2 lg:col-span-1 mb-16">
          <section className="prose prose-h1:text-[12px] prose-h1:uppercase prose-h1:font-[400] prose-h1:tracking-[1px] prose-a:text-white prose-a:no-underline hover:prose-a:underline prose-a:not-italic prose-li:pl-0">
            <h1>Services</h1>
            <ul className="list-none pl-0">
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 1</a>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div className="container mx-auto grid text-white mt-16 lg:mt-32 lg:text-center lg:justify-center">
        <div className="lg:justify-center flex mb-16">
          <Image src={"/assets/moseybank-logo-white.svg"} width={200} height={35} alt="Moseybank Logo" />
        </div>
        <div className="md:flex items-center md:prose-li:ml-[24px] prose-a:text-[12px] prose-p:text-[12px]">
          <p>© 2024 Optimizely / Moseybank. All rights reserved.</p>
          <ul className="list-none md:flex mt-6 md:mt-0">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Website terms of use</a>
            </li>
            <li>
              <a href="#">Trust center</a>
            </li>
            <li>
              <a href="#">Cookie settings</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
