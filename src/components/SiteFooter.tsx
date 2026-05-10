import Link from "next/link";
import { siteConfig } from "@/data/site";

const primaryLinks = [
  { label: "Home", href: "/#top" },
  { label: "Work / Case Studies", href: "/#projects" },
  { label: "LinkedIn", href: siteConfig.linkedinUrl, external: true },
  { label: "GitHub", href: siteConfig.githubUrl, external: true },
  { label: "Contact", href: "/#contact" },
].filter((link) => Boolean(link.href));

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/80 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 sm:grid-cols-[1.1fr_1fr] lg:px-8">
        <div>
          <Link href="/#top" className="text-base font-semibold tracking-tight text-white hover:text-cyan-100">
            Dawson Riggs
          </Link>
          <p className="mt-2 text-sm font-medium text-cyan-100">Healthcare Integration Engineer</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
            Practical interoperability, implementation, and production reliability work for healthcare technology teams.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 sm:justify-self-end sm:text-right">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Navigation</p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 sm:max-w-xs sm:justify-end">
              {primaryLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 transition hover:text-cyan-100"
                  rel={link.external ? "nofollow noreferrer" : undefined}
                  target={link.external ? "_blank" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Site</p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 sm:justify-end">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-cyan-100">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 lg:px-8">
        <p className="mx-auto max-w-6xl text-sm text-slate-500">© {year} Dawson Riggs. All rights reserved.</p>
      </div>
    </footer>
  );
}
