import { CTAButton } from "@/components/CTAButton";
import { LinkedInProfileBadge } from "@/components/LinkedInProfileBadge";
import { siteConfig } from "@/data/site";

type ContactCTAProps = {
  children: string;
  className?: string;
};

export function ContactCTA({ children, className = "" }: ContactCTAProps) {
  return (
    <div className={`relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 sm:p-8 ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(20,184,166,0.22),transparent_24rem),radial-gradient(circle_at_20%_90%,rgba(34,211,238,0.14),transparent_20rem)]" />
      <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Connect</p>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-100 sm:text-xl sm:leading-9">{children}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CTAButton href={siteConfig.linkedinUrl}>Connect on LinkedIn</CTAButton>
          </div>
        </div>
        <LinkedInProfileBadge />
      </div>
    </div>
  );
}
