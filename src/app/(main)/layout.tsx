import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const navlinks = [
  {
    title: "About Me",
    slug: "/",
  },
  // {
  //   title: "Projects",
  //   slug: "/projects",
  // },
  // {
  //   title: "Photography & Art",
  //   slug: "/photography",
  // },
  // {
  //   title: "Blog",
  //   slug: "/blog",
  // },
];

export const metadata: Metadata = {
  title: "Chris Axon",
  description: "building things",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={"h-full"} lang="en">
      <body
        className={`min-h-full flex flex-col ${inter.className} bg-gray-50`}
      >
        <header className="flex bg-gray-200 p-3 pl-4">
          <h1 className="inline-block">
            <a href="/">
              <b>Chris</b> Axon
            </a>
          </h1>
          <div className="flex flex-grow flex-row gap-4 justify-end">
            {navlinks.map((l) => (
              <Link key={l.title} href={l.slug}>
                {l.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="flex-1 mx-auto max-w-7xl sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <footer className="  flex justify-center w-full p-1">
          <div>2024 or whatever. made with nextjs & tailwind.</div>
        </footer>
      </body>
    </html>
  );
}
