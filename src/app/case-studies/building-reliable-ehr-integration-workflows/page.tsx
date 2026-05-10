import type { Metadata } from "next";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Building Reliable EHR Integration Workflows",
  description:
    "A practical healthcare interoperability field guide by Dawson Riggs on validating EHR workflows across configuration, data quality, permissions, timing, monitoring, and operational ownership.",
  alternates: {
    canonical: "https://dawsonriggs.com/case-studies/building-reliable-ehr-integration-workflows",
  },
  openGraph: {
    title: "Building Reliable EHR Integration Workflows",
    description:
      "A grounded field guide on why green logs are not enough in healthcare integrations and how to validate EHR workflows against production reality.",
    type: "article",
    url: "https://dawsonriggs.com/case-studies/building-reliable-ehr-integration-workflows",
  },
};

const reliabilityStack = ["Configuration", "Data quality", "Permissions", "Timing", "Validation", "Monitoring", "Ownership"];

const workflowSurfaces = [
  {
    title: "Appointment Sync",
    detail:
      "Schedule data can change quickly, arrive with production-only edge cases, or include unexpected values that look harmless in a payload but affect downstream reminders, access workflows, or patient communication.",
  },
  {
    title: "Scheduling Availability",
    detail:
      "Provider, location, and resource availability depends on EHR-specific rules, API permissions, local build decisions, and environment-specific configuration that may not be represented cleanly in sandbox testing.",
  },
  {
    title: "Patient Demographics",
    detail:
      "Patient matching, contact data, active and inactive contacts, and reload behavior can all change what the customer experiences, even when the technical sync reports success.",
  },
];

const readinessChecks = [
  "Non-production testing",
  "Representative test patients",
  "Sample payload review",
  "API permission checks",
  "Configuration review",
  "Production smoke test",
  "Monitoring setup",
  "Manual example validation",
  "Support readiness",
];

const practicalPrinciples = [
  "Validate workflow outcomes, not just technical execution.",
  "Test with real examples whenever possible.",
  "Treat customer configuration as part of the system.",
  "Assume production will reveal edge cases that non-prod does not.",
  "Build monitoring for silent failures, not just visible outages.",
  "Keep implementation, engineering, and support feedback loops close.",
  "Document assumptions clearly.",
];

function ReliabilityStackDiagram() {
  return (
    <div className="rounded-[2rem] border border-slate-800 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Workflow reliability stack</p>
      <h2 className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight">Reliable workflows need more than a working connection</h2>
      <div className="mt-8 grid gap-3 md:grid-cols-7">
        {reliabilityStack.map((layer, index) => (
          <div key={layer} className="relative rounded-2xl border border-cyan-300/20 bg-white/[0.07] p-4 text-center backdrop-blur">
            <p className="text-xs font-semibold text-cyan-200">0{index + 1}</p>
            <p className="mt-3 text-sm font-semibold leading-6 text-slate-100">{layer}</p>
            {index < reliabilityStack.length - 1 ? <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-cyan-300/60 md:block" /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkflowDiagram() {
  const steps = ["EHR", "API / HL7", "Integration layer", "Workflow logic", "Customer-facing outcome"];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5 sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.12),transparent_18rem),radial-gradient(circle_at_80%_70%,rgba(37,99,235,0.1),transparent_18rem)]" />
      <div className="relative">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">EHR workflow path</p>
        <div className="mt-6 grid gap-3 md:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step} className="relative rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
              <p className="text-xs font-semibold text-teal-700">0{index + 1}</p>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-900">{step}</p>
              {index < steps.length - 1 ? <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-teal-300 md:block" /> : null}
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-7 text-slate-600">
          A green log line may only prove that one part of this path executed. The workflow still has to produce the right operational outcome for the customer.
        </p>
      </div>
    </div>
  );
}

function GreenLogsComparison() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-6 shadow-sm shadow-slate-950/5 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Technical success</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">Green logs</h2>
        <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
          <li>Request completed without an error.</li>
          <li>Sync job marked successful.</li>
          <li>Payload parsed and stored.</li>
          <li>No connection outage detected.</li>
        </ul>
      </div>
      <div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-6 shadow-sm shadow-slate-950/5 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Operational success</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">Workflow works</h2>
        <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
          <li>The right patient, appointment, or availability data changed.</li>
          <li>The customer can validate the expected behavior.</li>
          <li>Downstream messaging, scheduling, or access workflows respond correctly.</li>
          <li>Monitoring can detect incomplete or stale outcomes.</li>
        </ul>
      </div>
    </div>
  );
}

function ReadinessChecklist() {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Go-live readiness checklist</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {readinessChecks.map((check, index) => (
          <div key={check} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-teal-700">0{index + 1}</p>
            <p className="mt-3 text-sm font-semibold leading-6 text-slate-900">{check}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SilentFailureMap() {
  const steps = ["Logs look successful", "Data unchanged", "Workflow assumption fails", "Manual validation detects issue"];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(251,191,36,0.14),transparent_18rem),radial-gradient(circle_at_85%_70%,rgba(20,184,166,0.16),transparent_18rem)]" />
      <div className="relative">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Silent failure map</p>
        <h2 className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight">Green logs are evidence, not proof</h2>
        <div className="mt-8 grid gap-3 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className="relative rounded-2xl border border-white/10 bg-white/[0.07] p-4">
              <p className="text-xs font-semibold text-amber-200">0{index + 1}</p>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-100">{step}</p>
              {index < steps.length - 1 ? <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-amber-300/60 md:block" /> : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BuildingReliableEhrIntegrationWorkflowsPage() {
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
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">Healthcare interoperability field guide</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            Building Reliable EHR Integration Workflows
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">
            In EHR integrations, the scariest failures are not always the loud ones. Sometimes the logs are green, the sync appears to run, and the workflow still does not behave the way the customer needs it to.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["Core thesis", "Reliable EHR integrations are validated across workflows, environments, people, timing, configuration, and ownership."],
              ["Field guide", "Based on repeated production workflow and go-live experience—not a single fake project story."],
              ["Key lesson", "Silent failures are often more dangerous than visible failures."],
            ].map(([label, value]) => (
              <div key={label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">{label}</p>
                <p className="mt-3 text-lg font-semibold leading-7 text-slate-950">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-5xl gap-8 px-6 pb-16 lg:px-8">
          <ReliabilityStackDiagram />
          <WorkflowDiagram />
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-16 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5 sm:p-8">
            <div className="max-w-none space-y-6 text-slate-700 [&_blockquote]:border-l-4 [&_blockquote]:border-teal-500 [&_blockquote]:bg-teal-50/70 [&_blockquote]:px-5 [&_blockquote]:py-4 [&_blockquote]:text-lg [&_blockquote]:font-medium [&_blockquote]:text-slate-800 [&_h2]:pt-6 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-slate-950 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-slate-950 [&_li]:ml-6 [&_li]:list-disc [&_li]:leading-8 [&_p]:leading-8">
              <h2>What makes EHR workflows hard</h2>
              <p>
                The hard part is rarely just connecting two systems. The hard part is ensuring the workflow behaves correctly in the messy real world: customer-specific EHR configuration, API or HL7 data quality, permissions, environment differences, timing delays, and operational requirements that may only become visible during implementation or after go-live.
              </p>
              <p>
                A connection error is painful, but obvious. A workflow that appears to run successfully while producing incomplete, incorrect, or operationally useless results can take much longer to detect.
              </p>

              <h2>Examples of workflow surfaces</h2>
              {workflowSurfaces.map((surface) => (
                <section key={surface.title}>
                  <h3>{surface.title}</h3>
                  <p>{surface.detail}</p>
                </section>
              ))}
              <p>
                These surfaces fail in different ways. API data can be missing, unexpected, or change over time. Patient matching can drift as demographic records are updated. Security configuration can block a resource that worked in a different environment. Sandbox behavior can reduce risk without fully representing production.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-5xl gap-8 px-6 pb-16 lg:px-8">
          <GreenLogsComparison />
          <ReadinessChecklist />
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-16 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5 sm:p-8">
            <div className="max-w-none space-y-6 text-slate-700 [&_blockquote]:border-l-4 [&_blockquote]:border-teal-500 [&_blockquote]:bg-teal-50/70 [&_blockquote]:px-5 [&_blockquote]:py-4 [&_blockquote]:text-lg [&_blockquote]:font-medium [&_blockquote]:text-slate-800 [&_h2]:pt-6 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-slate-950 [&_li]:ml-6 [&_li]:list-disc [&_li]:leading-8 [&_p]:leading-8">
              <h2>Readiness is more than non-prod testing</h2>
              <p>
                Non-production testing is useful because it helps prove connectivity, payload shape, authentication, and basic workflow mechanics. But sandbox success does not eliminate the need for production validation. Real customer environments can reveal configuration differences, permission gaps, production-only data patterns, and timing behavior that never showed up in test.
              </p>
              <p>
                Strong go-live readiness usually combines technical checks with operational confirmation: representative patients, sample payload review, API permission validation, configuration review, production smoke testing, monitoring setup, customer confirmation, manual example validation, and support readiness.
              </p>

              <h2>The human side of workflow reliability</h2>
              <p>
                Reliable workflows require clear ownership across teams, not just technically correct code. Implementation managers, project managers, customer IT teams, Epic or Oracle analysts, engineering, support, customer success, and operations stakeholders often each hold a different piece of the truth.
              </p>
              <p>
                Good integration work brings those pieces together. It turns ambiguous symptoms into a shared timeline, makes assumptions explicit, and keeps the feedback loop close between implementation reality, engineering behavior, support patterns, and customer validation.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-16 lg:px-8">
          <SilentFailureMap />
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-16 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5 sm:p-8">
            <div className="max-w-none space-y-6 text-slate-700 [&_blockquote]:border-l-4 [&_blockquote]:border-teal-500 [&_blockquote]:bg-teal-50/70 [&_blockquote]:px-5 [&_blockquote]:py-4 [&_blockquote]:text-lg [&_blockquote]:font-medium [&_blockquote]:text-slate-800 [&_h2]:pt-6 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-slate-950 [&_li]:ml-6 [&_li]:list-disc [&_li]:leading-8 [&_p]:leading-8">
              <h2>The silent failure problem</h2>
              <p>
                One patient demographics issue shaped how I think about validation. A platform setting controlled whether inactive contacts were allowed. When reloading patient demographics, the system appeared to run successfully, but it did not update behavior as expected if the existing contacts had not changed.
              </p>
              <p>
                The logs looked successful. The technical execution path did not obviously fail. But manual validation showed the intended operational behavior had not actually occurred. The customer-facing outcome was not trustworthy until the workflow was checked against a real example.
              </p>
              <blockquote>Green logs are evidence, not proof.</blockquote>
              <p>
                That distinction matters. Logs can show that a request completed, a job ran, or a payload was processed. They do not always prove that the right patient was matched, the right contact became active, the correct appointment state changed, or the downstream workflow behaved the way the customer needed.
              </p>

              <h2>Practical principles</h2>
              <ul>
                {practicalPrinciples.map((principle) => (
                  <li key={principle}>{principle}</li>
                ))}
              </ul>

              <h2>Closing reflection</h2>
              <p>
                Reliable EHR integration work lives in the space between systems and operations. The job is not just to make data move. The job is to make sure the right data moves at the right time, under the right conditions, in a way the customer can trust.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-8">
          <div className="flex flex-col gap-3 rounded-[2rem] border border-slate-800 bg-slate-950 p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Connect</p>
              <p className="mt-2 max-w-2xl text-slate-200">
                Want to talk EHR workflow reliability, go-live validation, or production integration support?
              </p>
            </div>
            <CTAButton href={siteConfig.linkedinUrl} variant="dark">Connect on LinkedIn</CTAButton>
          </div>
        </section>
      </article>
    </main>
  );
}
