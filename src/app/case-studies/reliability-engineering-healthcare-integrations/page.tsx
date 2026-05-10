import type { Metadata } from "next";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Reliability Engineering for Real-World Healthcare Integrations",
  description:
    "A healthcare interoperability case study by Dawson Riggs on improving Meditech document filing reliability through workflow-aware retry logic, standards interpretation, and production debugging.",
  alternates: {
    canonical: "https://dawsonriggs.com/case-studies/reliability-engineering-healthcare-integrations",
  },
  openGraph: {
    title: "Reliability Engineering for Real-World Healthcare Integrations",
    description:
      "A practical case study on asynchronous healthcare workflows, timing variability, ECM filing specifications, and production reliability engineering.",
    type: "article",
    url: "https://dawsonriggs.com/case-studies/reliability-engineering-healthcare-integrations",
  },
};

const workflowSystems = [
  "Meditech Expanse APIs",
  "Data Repository SQL database",
  "Business logic layer",
  "SFTP transfer",
  "ECM document filing specification",
];

const failureFactors = [
  "Forms could be completed before the downstream Data Repository had populated the account number.",
  "The account number was required for the ECM filing path, so documents without it could not be routed correctly.",
  "The issue appeared intermittently, which made it harder to reproduce than a consistent integration failure.",
  "The workflow still needed to be dependable even when the connected systems updated at different speeds.",
];

const reliabilityMoves = [
  "Added repeated account-number lookup attempts instead of treating the first missing value as a final failure.",
  "Used exponential backoff so retries gave upstream systems time to synchronize without creating unnecessary load.",
  "Extended retry windows beyond 24 hours for workflows where late-arriving identifiers could still produce a valid filing outcome.",
  "Built clearer success and failure validation loops so unresolved documents could be investigated instead of disappearing into noise.",
  "Improved diagnostics around timing, identifiers, and filing output so future troubleshooting had better evidence.",
];

const specificationDetails = [
  "encoded filename structures",
  "application IDs",
  "padding rules",
  "optional fields",
  "routing logic",
  "document filing conventions",
];

function ArchitectureMap() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_20rem),radial-gradient(circle_at_80%_65%,rgba(20,184,166,0.18),transparent_18rem)]" />
      <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(34,211,238,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.5)_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="relative">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Workflow architecture</p>
        <h2 className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight">A document filing path spanning independently updating systems</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-5 md:items-center">
          {workflowSystems.map((system, index) => (
            <div key={system} className="relative rounded-2xl border border-cyan-300/20 bg-white/[0.07] p-4 text-center backdrop-blur">
              <p className="text-xs font-semibold text-cyan-200">0{index + 1}</p>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-100">{system}</p>
              {index < workflowSystems.length - 1 ? <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-cyan-300/60 md:block" /> : null}
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.06] p-5">
          <p className="text-sm leading-7 text-slate-300">
            The reliability problem lived between these systems. Each piece could behave correctly on its own while the end-to-end workflow still failed when identifiers arrived out of sequence.
          </p>
        </div>
      </div>
    </div>
  );
}

function TimingFailureVisual() {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Failure mode</p>
      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Form workflow</p>
          <p className="mt-3 text-lg font-semibold text-slate-950">Completed form ready to file</p>
          <div className="mt-5 h-3 rounded-full bg-teal-200">
            <div className="h-3 w-full rounded-full bg-teal-500" />
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">The form could be ready before every downstream identifier was available.</p>
        </div>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-amber-300 bg-amber-50 text-sm font-semibold text-amber-800">
          waits on
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Data Repository</p>
          <p className="mt-3 text-lg font-semibold text-slate-950">Account number arrives later</p>
          <div className="mt-5 h-3 rounded-full bg-slate-200">
            <div className="h-3 w-[72%] rounded-full bg-amber-400" />
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">The identifier was required for ECM routing, but it did not always populate at the same time.</p>
        </div>
      </div>
    </div>
  );
}

function RetryWindowDiagram() {
  const attempts = ["Initial lookup", "Retry", "Backoff", "Extended window", "Validate filing"];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(20,184,166,0.18),transparent_16rem),radial-gradient(circle_at_90%_60%,rgba(37,99,235,0.16),transparent_18rem)]" />
      <div className="relative">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Reliability pattern</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">Retry logic as workflow protection</h2>
        <div className="mt-8 grid gap-3 md:grid-cols-5">
          {attempts.map((attempt, index) => (
            <div key={attempt} className="relative rounded-2xl border border-white/10 bg-white/[0.07] p-4">
              <p className="text-xs font-semibold text-cyan-200">T+{index === 0 ? "0" : index}</p>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-100">{attempt}</p>
              {index < attempts.length - 1 ? <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-cyan-300/60 md:block" /> : null}
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-7 text-slate-300">
          The technical mechanism was retry behavior. The operational purpose was to give the healthcare workflow enough time to become fileable without asking teams to manually recover avoidable failures.
        </p>
      </div>
    </div>
  );
}

function SpecificationCard() {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">ECM filing specification</p>
      <h2 className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight text-slate-950">Reliability depended on how the standard behaved in production</h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {specificationDetails.map((detail) => (
          <div key={detail} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-800">
            {detail}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ReliabilityEngineeringHealthcareIntegrationsPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="border-b border-white/70 bg-white/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Case study navigation">
          <Link href="/" className="text-sm font-bold tracking-tight text-slate-950">
            Dawson Riggs
          </Link>
          <Link href="/#projects" className="rounded-full px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950">
            Back to case studies
          </Link>
        </nav>
      </header>

      <article>
        <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">Healthcare interoperability case study</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            Reliability Engineering for Real-World Healthcare Integrations
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">
            One of the most interesting reliability problems I have worked on involved a healthcare workflow that failed only about 7% of the time—just often enough to create operational pain, but inconsistently enough to be difficult to diagnose.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["Initial reliability", "~93% successful document filing"],
              ["Primary issue", "Account number timing across systems"],
              ["Outcome", "~99% reliability, then near-complete reliability for key paths"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">{label}</p>
                <p className="mt-3 text-lg font-semibold leading-7 text-slate-950">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-5xl gap-8 px-6 pb-16 lg:px-8">
          <ArchitectureMap />
          <TimingFailureVisual />
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-16 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5 sm:p-8">
            <div className="max-w-none space-y-6 text-slate-700 [&_blockquote]:border-l-4 [&_blockquote]:border-teal-500 [&_blockquote]:bg-teal-50/70 [&_blockquote]:px-5 [&_blockquote]:py-4 [&_blockquote]:text-lg [&_blockquote]:font-medium [&_blockquote]:text-slate-800 [&_h2]:pt-6 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-slate-950 [&_li]:ml-6 [&_li]:list-disc [&_li]:leading-8 [&_p]:leading-8">
              <h2>The workflow architecture</h2>
              <p>
                The workflow looked straightforward from a distance: collect a completed form, assemble the filing metadata, and deliver the document so it could be filed into the customer&apos;s enterprise content management system. In practice, the path crossed Meditech Expanse APIs, a Data Repository SQL database, business logic, SFTP transfer, and ECM document filing rules.
              </p>
              <p>
                The important detail was that those systems did not always update simultaneously. A form could be ready to move before the Data Repository had populated the account number needed for the downstream filing specification.
              </p>

              <h2>The failure mode</h2>
              <p>
                The documents were not failing because the workflow was completely broken. They were failing because a required identifier was sometimes unavailable at the exact moment the filing workflow needed it. That made the issue intermittent: most documents filed correctly, while a meaningful minority failed for reasons that were tied to timing rather than static configuration.
              </p>
              <ul>
                {failureFactors.map((factor) => (
                  <li key={factor}>{factor}</li>
                ))}
              </ul>
              <blockquote>The problem was not simply moving data between systems. The problem was building a workflow resilient enough to tolerate timing variability across independently updating healthcare platforms.</blockquote>

              <h2>Why intermittent failures are different</h2>
              <p>
                Consistent failures are often easier to investigate because they create a repeatable path. Intermittent failures require reconstructing timing: when the form was completed, when the account number became available, what the filing package looked like, and how the downstream ECM rules interpreted the result.
              </p>
              <p>
                That kind of production debugging depends on evidence. Logs, timestamps, database lookups, transfer outputs, and customer-facing symptoms all have to be placed into the same timeline before the system behavior becomes understandable.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-5xl gap-8 px-6 pb-16 lg:px-8">
          <RetryWindowDiagram />
          <SpecificationCard />
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-16 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5 sm:p-8">
            <div className="max-w-none space-y-6 text-slate-700 [&_blockquote]:border-l-4 [&_blockquote]:border-teal-500 [&_blockquote]:bg-teal-50/70 [&_blockquote]:px-5 [&_blockquote]:py-4 [&_blockquote]:text-lg [&_blockquote]:font-medium [&_blockquote]:text-slate-800 [&_h2]:pt-6 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-slate-950 [&_li]:ml-6 [&_li]:list-disc [&_li]:leading-8 [&_p]:leading-8">
              <h2>Reliability engineering approach</h2>
              <p>
                The fix needed to reflect the workflow, not just the first failed lookup. If the account number was absent, the system needed to wait, try again, and validate whether the document could eventually be filed correctly. Retry logic mattered because it turned a timing gap into a recoverable condition.
              </p>
              <ul>
                {reliabilityMoves.map((move) => (
                  <li key={move}>{move}</li>
                ))}
              </ul>
              <p>
                Exponential backoff helped avoid turning reliability work into unnecessary load. Extended retry windows gave the upstream systems enough time to finish synchronizing. Validation loops made the remaining failures easier to identify and work through instead of treating every missing account number as the same generic error.
              </p>

              <h2>Understanding the ECM filing specification</h2>
              <p>
                A large portion of the work involved understanding the ECM filing specification as it behaved in a real customer environment. Encoded filename structures, application IDs, padding rules, optional fields, and routing logic all mattered. A document could be transferred successfully and still fail operationally if the filing metadata did not match what the downstream system expected.
              </p>
              <p>
                This is one of the parts of interoperability work that is easy to underestimate. Reading a specification is necessary, but production reliability often requires learning how that specification interacts with local workflow assumptions, missing values, timing delays, and downstream validation rules.
              </p>

              <h2>Results</h2>
              <p>
                The reliability work improved the document filing workflow from roughly 93% reliability to about 99%, then continued toward near-complete reliability for key customer paths as the retry behavior, diagnostics, and implementation understanding matured.
              </p>
              <p>
                The operational impact was a reduction in avoidable filing failures, clearer troubleshooting paths, and more confidence that completed forms would reach their intended destination even when upstream and downstream systems did not synchronize immediately.
              </p>

              <h2>What I learned</h2>
              <p>
                Healthcare interoperability problems often emerge at system boundaries. The individual systems may be functioning as designed, but the end-to-end workflow can still fail when timing assumptions do not match production reality.
              </p>
              <p>
                One of the most valuable lessons from this work was realizing how often healthcare integration reliability depends on understanding workflow timing and operational assumptions—not just API connectivity. Implementation ownership includes staying close enough to production behavior to see where those assumptions break down.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-8">
          <div className="flex flex-col gap-3 rounded-[2rem] border border-slate-800 bg-slate-950 p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Connect</p>
              <p className="mt-2 max-w-2xl text-slate-200">
                Want to talk asynchronous healthcare workflows, reliability engineering, or Meditech interoperability?
              </p>
            </div>
            <CTAButton href={siteConfig.linkedinUrl} variant="dark">Connect on LinkedIn</CTAButton>
          </div>
        </section>
      </article>
    </main>
  );
}
