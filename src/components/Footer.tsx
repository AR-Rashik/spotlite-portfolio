import { siteConfig } from "@/config/siteConfig";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-20 xl:px-32 border-t border-t-zinc-500 py-10 dark:border-zinc-700/40">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
          <Link href={"about"}>About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/speaking">Speaking</Link>
          <Link href="/uses">Uses</Link>
        </div>

        <p className="text-sm font-extralight text-zinc-500 dark:text-zinc-400">
          &copy; {new Date().getFullYear()} {siteConfig.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
