import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Plain-language privacy policy for Dawson Riggs' personal portfolio website.",
  alternates: {
    canonical: "https://dawsonriggs.com/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-slate-50 px-6 py-16 lg:px-8">
      <article className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Privacy Policy</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">A simple privacy note for this personal website.</h1>
        <p className="mt-4 text-sm text-slate-500">Last updated May 10, 2026</p>

        <div className="mt-8 space-y-7 text-slate-700 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-slate-950 [&_p]:leading-8 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
          <section>
            <h2>What this site is</h2>
            <p>
              Dawsonriggs.com is a personal and professional portfolio website for Dawson Riggs. It shares background, case studies, technical writing, and ways to connect about healthcare integration work.
            </p>
          </section>

          <section>
            <h2>Information you choose to share</h2>
            <p>
              You may contact me using available links, such as LinkedIn or other contact methods that appear on the site. If you choose to reach out, the information you send is handled through that communication channel.
            </p>
          </section>

          <section>
            <h2>Technical information</h2>
            <p>
              Basic hosting, analytics, or logging providers may collect standard technical information needed to operate and understand the site, such as:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser and device type</li>
              <li>Pages visited</li>
              <li>Timestamps and referral information</li>
            </ul>
            <p>
              This information is generally used for site performance, security, debugging, and aggregate usage insight.
            </p>
          </section>

          <section>
            <h2>No sale of personal information</h2>
            <p>I do not sell personal information collected through this website.</p>
          </section>

          <section>
            <h2>External links</h2>
            <p>
              This site links to third-party websites and services such as LinkedIn, GitHub, Vercel-hosted projects, or related technical resources. Those sites are governed by their own privacy practices and policies.
            </p>
          </section>

          <section>
            <h2>Privacy questions</h2>
            <p>
              If you have questions about this privacy policy or how this site handles information, please contact me through <Link href={siteConfig.linkedinUrl} className="font-semibold text-teal-700 hover:text-teal-900" rel="nofollow noreferrer" target="_blank">LinkedIn</Link>.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
