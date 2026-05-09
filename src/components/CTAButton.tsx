import Link from "next/link";
import type { ComponentProps } from "react";

type CTAButtonProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost" | "dark";
};

const variants = {
  primary:
    "bg-teal-600 text-white shadow-lg shadow-teal-950/10 hover:bg-teal-700 focus-visible:outline-teal-700",
  secondary:
    "border border-slate-300 bg-white/80 text-slate-900 hover:border-teal-300 hover:bg-teal-50 focus-visible:outline-teal-700",
  ghost:
    "text-slate-700 hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-slate-700",
  dark:
    "border border-white/15 bg-white/10 text-white hover:border-cyan-300/40 hover:bg-white/15 focus-visible:outline-cyan-300",
};

function isExternalHref(href: CTAButtonProps["href"]) {
  return typeof href === "string" && /^https?:\/\//.test(href);
}

export function CTAButton({ className = "", rel, target, variant = "primary", ...props }: CTAButtonProps) {
  const isExternal = isExternalHref(props.href);

  return (
    <Link
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${variants[variant]} ${className}`}
      rel={rel ?? (isExternal ? "nofollow noreferrer" : undefined)}
      target={target ?? (isExternal ? "_blank" : undefined)}
      {...props}
    />
  );
}
