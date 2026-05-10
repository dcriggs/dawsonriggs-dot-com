import type { Metadata } from "next";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Reducing Epic API Costs by 90%",
  description:
    "A healthcare interoperability case study by Dawson Riggs on reducing Epic API costs from roughly $1.3M/month to $134K/month while protecting production workflows.",
  alternates: {
    canonical: "https://dawsonriggs.com/case-studies/reducing-epic-api-costs",
  },
  openGraph: {
    title: "Reducing Epic API Costs by 90% Without Breaking Healthcare Workflows",
    description:
      "A grounded case study on interoperability economics, API utilization, customer coordination, and production workflow reliability.",
    type: "article",
    url: "https://dawsonriggs.com/case-studies/reducing-epic-api-costs",
  },
};

const operatingConstraints = [
  "Production integrations were already live and supporting real patient engagement workflows.",
  "Some fixes required customer-side Epic web service configuration changes, not just internal engineering updates.",
  "Scheduling, messaging, refill, and synchronization workflows could not lose reliability while API behavior changed underneath them.",
  "Finance, support, implementation, engineering, customer operations, and Epic-facing teams all needed the same operating picture.",
];

const optimizationMoves = [
  "Audited expensive proprietary Epic endpoint usage and mapped it back to the workflows driving each call pattern.",
  "Replaced usage with lower-cost or free FHIR alternatives where the workflow and customer environment allowed it.",
  "Introduced safer caching and synchronization windows so data stayed useful without unnecessary repeated calls.",
  "Reduced polling patterns that had become operational habits rather than workflow requirements.",
  "Monitored utilization after each change to confirm savings without introducing hidden reliability regressions.",
];

const lifecycleSteps = ["Audit", "Analyze", "Optimize", "Validate", "Roll out", "Monitor"];

const collaborationMap = ["Engineering", "Finance", "Customers", "Implementations", "Epic", "Monitoring"];

function CostReductionChart() {
  return (
    <div className="rounded-[2rem] border border-slate-800 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 sm:p-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Monthly API cost</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">From projected exposure to sustainable utilization</h2>
        </div>
        <p className="text-sm text-slate-400">Approximate monthly run-rate</p>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-[1fr_1fr] sm:items-end">
        <div>
          <div className="flex h-64 items-end rounded-3xl border border-red-300/15 bg-white/[0.04] p-5">
            <div className="w-full rounded-2xl bg-gradient-to-t from-red-500/70 to-orange-300/70 shadow-[0_0_32px_rgba(248,113,113,0.22)]" style={{ height: "100%" }} />
          </div>
          <p className="mt-4 text-3xl font-semibold">~$1.3M</p>
          <p className="text-sm text-slate-400">Projected monthly cost under usage-based pricing</p>
        </div>
        <div>
          <div className="flex h-64 items-end rounded-3xl border border-teal-300/20 bg-white/[0.04] p-5">
            <div className="w-full rounded-2xl bg-gradient-to-t from-teal-500/80 to-cyan-300/80 shadow-[0_0_32px_rgba(45,212,191,0.28)]" style={{ height: "10.3%" }} />
          </div>
          <p className="mt-4 text-3xl font-semibold">~$134K</p>
          <p className="text-sm text-slate-400">Reduced monthly cost after workflow-aware optimization</p>
        </div>
      </div>
    </div>
  );
}

function IntegrationWorkflowDiagram() {
  const left = ["Patient", "Luma"];
  const right = ["Scheduling", "Messaging", "Refills"];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5 sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(20,184,166,0.12),transparent_18rem),radial-gradient(circle_at_85%_70%,rgba(37,99,235,0.1),transparent_18rem)]" />
      <div className="relative">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Production workflow</p>
        <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <div className="grid gap-3">
            {left.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800">
                {item}
              </div>
            ))}
          </div>
          <div className="relative mx-auto flex h-44 w-44 items-center justify-center rounded-[2rem] border border-cyan-300/50 bg-slate-950 p-5 text-center text-white shadow-[0_0_36px_rgba(34,211,238,0.18)]">
            <div className="absolute inset-x-[-5rem] top-1/2 hidden h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent md:block" />
            <div className="absolute inset-y-[-3rem] left-1/2 hidden w-px bg-gradient-to-b from-transparent via-teal-300/50 to-transparent md:block" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Epic APIs</p>
              <p className="mt-2 text-lg font-semibold leading-6">FHIR + proprietary endpoints</p>
            </div>
          </div>
          <div className="grid gap-3">
            {right.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function LeakyPipesVisual() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_18rem),radial-gradient(circle_at_80%_70%,rgba(20,184,166,0.16),transparent_18rem)]" />
      <svg className="relative h-56 w-full" viewBox="0 0 720 240" aria-hidden="true">
        <path d="M40 120 C150 30 230 210 340 120 S540 30 680 120" className="diagram-flow-line" />
        <path d="M40 70 C155 150 220 45 335 92 S535 150 680 76" className="diagram-flow-line diagram-flow-line-delay" />
        <path d="M40 170 C150 110 235 205 345 158 S540 110 680 168" className="diagram-flow-line" />
        {[148, 342, 528].map((x) => (
          <g key={x}>
            <circle cx={x} cy="120" r="18" className="fill-slate-900 stroke-cyan-300/60" strokeWidth="1.5" />
            <circle cx={x} cy="120" r="5" className="fill-cyan-300" />
          </g>
        ))}
      </svg>
      <div className="relative grid gap-3 sm:grid-cols-3">
        {[
          "Hidden call patterns",
          "Workflow assumptions",
          "Utilization monitoring",
        ].map((label) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm font-semibold text-slate-100">
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

function LifecycleDiagram() {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Optimization lifecycle</p>
      <div className="mt-6 grid gap-3 md:grid-cols-6">
        {lifecycleSteps.map((step, index) => (
          <div key={step} className="relative rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-teal-700">0{index + 1}</p>
            <p className="mt-3 font-semibold text-slate-950">{step}</p>
            {index < lifecycleSteps.length - 1 ? <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-teal-300 md:block" /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function CrossFunctionalMap() {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Cross-functional system</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {collaborationMap.map((team) => (
          <div key={team} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-800">
            {team}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ReducingEpicApiCostsPage() {
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
            Reducing Epic API Costs by 90% Without Breaking Healthcare Workflows
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">
            When Epic shifted vendor APIs from contract-based pricing to usage-based pricing, API efficiency stopped being an abstract engineering concern and became an operational business problem overnight.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["Starting point", "~$1.3M/month projected Epic API costs"],
              ["Outcome", "~$134K/month after optimization"],
              ["Constraint", "Production workflows had to remain reliable"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">{label}</p>
                <p className="mt-3 text-lg font-semibold leading-7 text-slate-950">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-5xl gap-8 px-6 pb-16 lg:px-8">
          <CostReductionChart />
          <IntegrationWorkflowDiagram />
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-16 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5 sm:p-8">
            <div className="max-w-none space-y-6 text-slate-700 [&_blockquote]:border-l-4 [&_blockquote]:border-teal-500 [&_blockquote]:bg-teal-50/70 [&_blockquote]:px-5 [&_blockquote]:py-4 [&_blockquote]:text-lg [&_blockquote]:font-medium [&_blockquote]:text-slate-800 [&_h2]:pt-6 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-slate-950 [&_li]:ml-6 [&_li]:list-disc [&_li]:leading-8 [&_p]:leading-8">
              <h2>The pricing change exposed the system</h2>
              <p>
                The initial problem looked financial: projected Epic API costs were on track to reach roughly $1.3M per month. But the deeper issue was operational. A pricing model change made previously hidden API utilization visible, and that visibility showed how small inefficiencies could become expensive at production scale.
              </p>
              <p>
                This was not a situation where one code change could solve the problem. The integrations already supported live customer workflows. The work required understanding why calls were happening, which workflows depended on them, which endpoints were actually necessary, and which assumptions had accumulated over time.
              </p>

              <h2>Why this was difficult</h2>
              <p>
                Healthcare interoperability problems rarely stay inside one department. This effort touched engineering, implementation, support, finance, customer operations, Epic configuration, and production monitoring at the same time.
              </p>
              <ul>
                {operatingConstraints.map((constraint) => (
                  <li key={constraint}>{constraint}</li>
                ))}
              </ul>
              <p>
                That changed the shape of the work. Engineering changes mattered, but they were only part of the path. Customer environments needed to be reviewed. Epic web service configuration changes had to be planned. Testing had to account for the actual healthcare workflows customers relied on every day.
              </p>
              <blockquote>Reliable healthcare integrations are socio-technical systems. The API call is technical; the workflow it supports is operational.</blockquote>

              <h2>Finding the leaky pipes</h2>
              <p>
                The process felt less like rebuilding an integration platform from scratch and more like tracing and repairing hidden leaks inside a large operational plumbing system. The goal was not to make the system look different. The goal was to reduce waste while preserving the behavior customers depended on.
              </p>
              <p>
                The work started with mapping expensive usage back to real workflows. Some calls were tied to necessary production behavior. Others were artifacts of polling intervals, synchronization assumptions, duplicate checks, or endpoint choices that had been reasonable under one pricing model but unsustainable under another.
              </p>
              <ul>
                {optimizationMoves.map((move) => (
                  <li key={move}>{move}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-5xl gap-8 px-6 pb-16 lg:px-8">
          <LeakyPipesVisual />
          <LifecycleDiagram />
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-16 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5 sm:p-8">
            <div className="max-w-none space-y-6 text-slate-700 [&_blockquote]:border-l-4 [&_blockquote]:border-teal-500 [&_blockquote]:bg-teal-50/70 [&_blockquote]:px-5 [&_blockquote]:py-4 [&_blockquote]:text-lg [&_blockquote]:font-medium [&_blockquote]:text-slate-800 [&_h2]:pt-6 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-slate-950 [&_p]:leading-8">
              <h2>The human side of integration engineering</h2>
              <p>
                The most important work happened in the space between systems and people. Every optimization had to be translated into an implementation plan: which customers were affected, what configuration needed to change, how the change would be tested, when it could be rolled out, and how the team would know whether it was safe.
              </p>
              <p>
                That required communication more than theatrics. Customer-facing teams needed clear explanations. Implementation teams needed sequencing. Support needed to understand expected behavior. Engineering needed feedback from production validation. Finance needed visibility into whether the run-rate was actually improving.
              </p>
              <p>
                My role sat across those boundaries: helping connect technical findings to workflow impact, coordinating implementation realities, validating production behavior, and keeping attention on the operational outcome rather than the elegance of any single technical change.
              </p>

              <h2>Results</h2>
              <p>
                The effort reduced projected Epic API costs from roughly $1.3M per month to about $134K per month, an approximately 90% reduction. Just as importantly, the reduction was achieved while maintaining production workflow reliability and improving visibility into ongoing API utilization.
              </p>
              <p>
                The outcome was not only a lower bill. It was a more observable operating model: clearer ownership of API usage, better understanding of which workflows drove cost, and a stronger connection between integration design and business sustainability.
              </p>

              <h2>What I took away</h2>
              <p>
                API architecture decisions have operational consequences. A workflow that makes sense in isolation can become expensive when repeated across customers, environments, and production schedules. Interoperability systems need continuous operational analysis because the economic and technical assumptions around them can change.
              </p>
              <p>
                One of the most surprising outcomes was realizing how much optimization was possible without sacrificing workflow reliability or customer experience. In many cases, the largest improvements came not from rebuilding systems entirely, but from understanding how operational assumptions, workflow design, and API usage patterns interacted at scale.
              </p>
              <p>
                That is the work I find most meaningful in healthcare technology: making the system understandable enough that teams can improve it without breaking the people and workflows depending on it.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-5xl gap-8 px-6 pb-20 lg:px-8">
          <CrossFunctionalMap />
          <div className="flex flex-col gap-3 rounded-[2rem] border border-slate-800 bg-slate-950 p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Connect</p>
              <p className="mt-2 max-w-2xl text-slate-200">
                Want to talk Epic integrations, healthcare interoperability economics, or production workflow reliability?
              </p>
            </div>
            <CTAButton href={siteConfig.linkedinUrl} variant="dark">Connect on LinkedIn</CTAButton>
          </div>
        </section>
      </article>
    </main>
  );
}
