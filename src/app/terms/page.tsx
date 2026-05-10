import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Lightweight terms of use for Dawson Riggs' personal portfolio website.",
  alternates: {
    canonical: "https://dawsonriggs.com/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="bg-slate-50 px-6 py-16 lg:px-8">
      <article className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Terms of Use</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">Simple site terms for a professional portfolio.</h1>
        <p className="mt-4 text-sm text-slate-500">Last updated May 10, 2026</p>

        <div className="mt-8 space-y-7 text-slate-700 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-slate-950 [&_p]:leading-8">
          <section>
            <h2>Purpose of the content</h2>
            <p>
              The content on this site is provided for professional and informational purposes. It reflects Dawson Riggs&apos; background, selected work, technical interests, and perspective on healthcare integration and implementation work.
            </p>
          </section>

          <section>
            <h2>Case studies and technical writing</h2>
            <p>
              Case studies, examples, and technical writing are based on professional experience, but may omit, simplify, or generalize sensitive, confidential, customer-specific, or implementation-specific details.
            </p>
          </section>

          <section>
            <h2>No professional advice</h2>
            <p>
              This website does not provide legal, medical, compliance, security, or regulatory advice. Any technical discussion should be evaluated in the context of your own systems, policies, and professional requirements.
            </p>
          </section>

          <section>
            <h2>External links</h2>
            <p>
              External links are provided for convenience and context. I am not responsible for the content, availability, or practices of third-party websites such as LinkedIn, GitHub, Vercel-hosted projects, or other linked resources.
            </p>
          </section>

          <section>
            <h2>Use of site content</h2>
            <p>
              Please do not copy, republish, present, or misrepresent site content as your own without permission. Brief references or links back to the original page are welcome when they are accurate and respectful.
            </p>
          </section>

          <section>
            <h2>Questions</h2>
            <p>
              If you have questions about these terms or would like permission to reference something from this site, please contact me through <Link href={siteConfig.linkedinUrl} className="font-semibold text-teal-700 hover:text-teal-900" rel="nofollow noreferrer" target="_blank">LinkedIn</Link>.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
