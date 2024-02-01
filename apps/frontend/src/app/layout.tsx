import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.scss";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mosey Bank",
  description: "All your money in one place. Mosey Bank.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.className} bg-ghost-white`}>
        <div className="flex min-h-screen flex-col justify-between">
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
