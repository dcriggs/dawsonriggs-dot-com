import type { Metadata } from "next";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "The Gray Area Between Engineering and Implementation",
  description:
    "A reflection by Dawson Riggs on the technical work that happens between product behavior, customer needs, implementation constraints, and production reliability.",
  alternates: {
    canonical: "https://dawsonriggs.com/writing/the-gray-area-between-engineering-and-implementation",
  },
  openGraph: {
    title: "The Gray Area Between Engineering and Implementation",
    description:
      "A reflection by Dawson Riggs on the gray area between engineering, implementation, customer needs, and reliable healthcare integrations.",
    type: "article",
    url: "https://dawsonriggs.com/writing/the-gray-area-between-engineering-and-implementation",
  },
};

const translationWork = [
  "turning customer language into technical hypotheses",
  "turning logs and payloads into a workflow narrative",
  "turning engineering constraints into implementation options",
  "turning ambiguity into a clear owner, next step, and expected outcome",
];

const operatingPrinciples = [
  "Stay close to the workflow, not just the ticket.",
  "Make assumptions explicit before they become defects.",
  "Write down what changed, what was tested, and what still needs proof.",
  "Communicate in a way that helps both engineers and operators move forward.",
];

export default function GrayAreaBetweenEngineeringAndImplementationPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="border-b border-white/70 bg-white/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Writing navigation">
          <Link href="/" className="text-sm font-bold tracking-tight text-slate-950">
            Dawson Riggs
          </Link>
          <Link href="/#writing" className="rounded-full px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950">
            Back to writing
          </Link>
        </nav>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-16 sm:py-24 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">Professional reflection</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          The Gray Area Between Engineering and Implementation
        </h1>
        <p className="mt-6 text-xl leading-9 text-slate-600">
          Some of the most valuable technical work does not fit neatly into a single bucket. It happens between the product, the customer, the workflow, and the reality of getting something live.
        </p>

        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5 sm:p-8">
          <div className="max-w-none space-y-6 text-slate-700 [&_blockquote]:border-l-4 [&_blockquote]:border-teal-500 [&_blockquote]:bg-teal-50/70 [&_blockquote]:px-5 [&_blockquote]:py-4 [&_blockquote]:text-lg [&_blockquote]:font-medium [&_blockquote]:text-slate-800 [&_h2]:pt-6 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-slate-950 [&_li]:ml-6 [&_li]:list-disc [&_li]:leading-8 [&_p]:leading-8">
            <p>
              In healthcare integrations, the hardest problems rarely arrive as clean engineering tasks. They usually show up as a customer escalation, a go-live risk, a confusing workflow gap, or a production behavior that does not match what anyone expected.
            </p>

            <p>
              The code matters. The API contract matters. The HL7 message, FHIR resource, authentication flow, interface engine, and EHR configuration all matter. But the real work often starts when those pieces are technically “working” and the operational outcome still is not right.
            </p>

            <p>That is the gray area between engineering and implementation.</p>

            <h2>It starts with translation</h2>

            <p>
              Customer-facing technical work is often translation work. A health system may describe a scheduling, patient access, or document workflow in operational terms. Engineering may think in terms of endpoints, payloads, jobs, queues, schemas, and edge cases. Implementation teams are trying to keep a project plan moving without losing the nuance that makes the workflow work in production.
            </p>

            <p>The integration engineer has to connect those worlds:</p>

            <ul>
              {translationWork.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              When that translation is done well, everyone can see the same problem. When it is done poorly, teams can spend days solving different versions of the issue.
            </p>

            <h2>Implementation exposes reality</h2>

            <p>
              A design can look clean in a diagram and still break down when it meets a real customer environment. Real EHR workflows have local configuration, historical decisions, operational habits, vendor constraints, and data quality issues that do not always show up during a standard requirements conversation.
            </p>

            <p>
              That does not mean the design was bad. It means implementation is where assumptions get tested. A field that “should always be present” is missing. A feed that “always arrives overnight” skips a file. A patient-matching rule behaves differently for a subset of records. A workflow that looked simple has three exception paths that matter to the people doing the work every day.
            </p>

            <p>
              Good implementation work is not just configuration. It is careful observation, fast feedback, and a willingness to adjust the plan when the real system teaches you something new.
            </p>

            <h2>The best technical owners reduce ambiguity</h2>

            <p>
              In the gray area, the biggest risk is not always that nobody knows anything. It is that everyone knows a different piece of the truth, but nobody has assembled the full picture yet.
            </p>

            <p>
              That is why ownership matters. Someone has to collect the evidence, define the current understanding, identify what is still unknown, and make the next step clear. That does not require pretending to have every answer immediately. It requires being honest about the state of the investigation and disciplined about how the team moves forward.
            </p>

            <p>These are the principles I try to follow:</p>

            <ul>
              {operatingPrinciples.map((principle) => (
                <li key={principle}>{principle}</li>
              ))}
            </ul>

            <h2>Reliable delivery is a cross-functional skill</h2>

            <p>
              The older I get in healthcare technology, the more I value people who can move comfortably across boundaries. Not because titles do not matter, but because production outcomes do not care about org charts.
            </p>

            <p>
              A reliable go-live may require engineering judgment, customer communication, data validation, workflow design, support readiness, and implementation sequencing. The strongest technical operators are the people who can respect each function while still keeping the end-to-end problem in view.
            </p>

            <p>
              That is the kind of work I enjoy: making complex behavior understandable, helping teams make confident decisions, and staying with the problem until the customer can trust the outcome.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Connect</p>
            <p className="mt-2 max-w-2xl text-slate-200">
              Want to talk healthcare integrations, implementation work, or customer-facing technical ownership?
            </p>
          </div>
          <CTAButton href={siteConfig.linkedinUrl}>Connect on LinkedIn</CTAButton>
        </div>
      </article>
    </main>
  );
}
