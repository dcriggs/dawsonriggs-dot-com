"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/data/site";

function homeAwareHref(href: string, pathname: string) {
  if (href.startsWith("#")) {
    return pathname === "/" ? href : `/${href}`;
  }

  return href;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const links = [{ label: "Home", href: "#top" }, ...siteConfig.nav];

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <nav className="mx-auto max-w-6xl px-6 py-4 lg:px-8" aria-label="Primary navigation">
        <div className="flex items-center justify-between gap-4">
          <Link href={pathname === "/" ? "#top" : "/"} className="min-w-0 text-sm font-bold tracking-tight text-white" onClick={closeMenu}>
            Dawson Riggs
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((item) => (
              <Link
                key={item.href}
                href={homeAwareHref(item.href, pathname)}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={siteConfig.linkedinUrl}
              className="ml-2 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              rel="nofollow noreferrer"
              target="_blank"
            >
              LinkedIn
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:border-cyan-300/40 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 md:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-menu"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="sr-only">{isOpen ? "Close navigation menu" : "Open navigation menu"}</span>
            <span className="flex h-5 w-5 flex-col justify-center gap-1.5" aria-hidden="true">
              <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        <div
          id="mobile-navigation-menu"
          className={`grid transition-[grid-template-rows,opacity] duration-200 md:hidden ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
        >
          <div className="overflow-hidden">
            <div className="mt-4 rounded-3xl border border-cyan-300/15 bg-slate-900/95 p-2 shadow-2xl shadow-slate-950/30">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={homeAwareHref(item.href, pathname)}
                  className="block rounded-2xl px-4 py-3 text-base font-semibold text-slate-100 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={siteConfig.linkedinUrl}
                className="mt-1 block rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-base font-semibold text-cyan-100 transition hover:bg-cyan-300/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                rel="nofollow noreferrer"
                target="_blank"
                onClick={closeMenu}
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
