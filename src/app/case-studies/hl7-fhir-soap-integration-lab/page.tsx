import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { assetUrls, siteConfig } from "@/data/site";

const labLinks = {
  github: "https://github.com/dcriggs/prior-auth-integration-lab",
  demo: "https://prior-auth-integration-lab.vercel.app/",
};

export const metadata: Metadata = {
  title: "HL7 / FHIR / SOAP Integration Lab",
  description:
    "A lightweight interoperability sandbox by Dawson Riggs for exploring healthcare integration workflows, payload validation, data mapping, and implementation patterns across HL7, FHIR, and SOAP-based systems.",
  alternates: {
    canonical: "https://dawsonriggs.com/case-studies/hl7-fhir-soap-integration-lab",
  },
  openGraph: {
    title: "HL7 / FHIR / SOAP Integration Lab",
    description:
      "A practical healthcare interoperability sandbox for hands-on experimentation with HL7, FHIR, SOAP APIs, payload validation, and workflow-oriented integration patterns.",
    type: "article",
    url: "https://dawsonriggs.com/case-studies/hl7-fhir-soap-integration-lab",
    images: [assetUrls.priorAuthLabScreenshot],
  },
};

const concepts = [
  {
    title: "HL7 messaging",
    detail: "Exploring segment-oriented payloads, message structure, and how small data-shape details can affect downstream workflows.",
  },
  {
    title: "FHIR APIs",
    detail: "Working with resource-oriented API patterns, request/response behavior, and practical validation around healthcare data exchange.",
  },
  {
    title: "SOAP APIs",
    detail: "Practicing envelope-based request patterns, XML payload handling, and implementation details common in EHR integrations.",
  },
  {
    title: "Payload validation",
    detail: "Checking whether payloads are complete, coherent, and usable for the workflow they are intended to support.",
  },
  {
    title: "Workflow mapping",
    detail: "Tracing how data moves from an integration input through transformation logic toward a customer-facing outcome.",
  },
  {
    title: "Troubleshooting",
    detail: "Using small experiments to practice debugging payload mismatches, missing values, and unexpected integration behavior.",
  },
];

const explorationThemes = [
  "payload parsing",
  "workflow sequencing",
  "validation logic",
  "healthcare data mapping",
  "API request and response handling",
  "interoperability edge cases",
  "implementation constraints",
  "data transformation patterns",
];

const sequenceSteps = ["Input payload", "Validate", "Map fields", "Apply workflow rules", "Review output"];

function LabScreenshotPanel() {
  return (
    <figure className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm shadow-slate-950/5">
      <div className="border-b border-slate-200 px-6 py-5 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Demo preview</p>
        <figcaption className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          A snapshot of the Prior Auth Integration Lab demo interface, showing how the sandbox presents healthcare interoperability experiments in a browser-based workflow.
        </figcaption>
      </div>
      <div className="relative aspect-[16/10] bg-slate-100">
        <Image
          src={assetUrls.priorAuthLabScreenshot}
          alt="Prior Auth Integration Lab demo screenshot"
          fill
          sizes="(min-width: 1024px) 960px, calc(100vw - 48px)"
          className="object-cover object-top"
        />
      </div>
    </figure>
  );
}

function PayloadSnippetVisual() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(34,211,238,0.18),transparent_18rem),radial-gradient(circle_at_82%_70%,rgba(20,184,166,0.16),transparent_18rem)]" />
      <div className="relative grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Interoperability sandbox</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Small payload experiments make abstract standards easier to reason about</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            The lab is intentionally lightweight: a place to inspect inputs, test validation ideas, and think through workflow behavior without presenting the project as a production healthcare application.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 font-mono text-xs leading-6 text-slate-200">
          <p><span className="text-cyan-300">MSH</span>|^~\&|APP|LAB|EHR|...</p>
          <p><span className="text-teal-300">PID</span>|1||12345||Patient^Example</p>
          <p><span className="text-blue-300">GET</span> /fhir/Patient/12345</p>
          <p><span className="text-amber-300">SOAP</span>: &lt;Envelope&gt;...&lt;/Envelope&gt;</p>
        </div>
      </div>
    </div>
  );
}

function ConceptGrid() {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Standards and concepts</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {concepts.map((concept) => (
          <div key={concept.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-lg font-semibold text-slate-950">{concept.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{concept.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SequenceDiagram() {
  return (
    <div className="rounded-[2rem] border border-slate-800 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Workflow experiment loop</p>
      <div className="mt-6 grid gap-3 md:grid-cols-5">
        {sequenceSteps.map((step, index) => (
          <div key={step} className="relative rounded-2xl border border-cyan-300/20 bg-white/[0.07] p-4 text-center backdrop-blur">
            <p className="text-xs font-semibold text-cyan-200">0{index + 1}</p>
            <p className="mt-3 text-sm font-semibold leading-6 text-slate-100">{step}</p>
            {index < sequenceSteps.length - 1 ? <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-cyan-300/60 md:block" /> : null}
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm leading-7 text-slate-300">
        The pattern is deliberately simple: start with a payload, inspect what it contains, map it toward a workflow, and look for the places where assumptions break.
      </p>
    </div>
  );
}

function ExplorationThemes() {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Technical exploration themes</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {explorationThemes.map((theme) => (
          <span key={theme} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
            {theme}
          </span>
        ))}
      </div>
    </div>
  );
}

function DemoLinksPanel() {
  return (
    <div className="rounded-[2rem] border border-slate-800 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Explore the lab</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">A hands-on experiment, not a production healthcare application</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            The deployed demo and repository are meant to show implementation-oriented learning: payload handling, validation ideas, and workflow thinking in a small sandbox format.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <CTAButton href={labLinks.demo} variant="dark">Open demo</CTAButton>
          <CTAButton href={labLinks.github} variant="dark">View GitHub</CTAButton>
        </div>
      </div>
    </div>
  );
}

export default function Hl7FhirSoapIntegrationLabPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="border-b border-white/70 bg-white/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Lab navigation">
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
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">Healthcare interoperability sandbox</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            HL7 / FHIR / SOAP Integration Lab
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">
            A lightweight technical sandbox for exploring healthcare interoperability workflows, payload validation, integration patterns, and implementation-oriented experimentation across HL7, FHIR, and SOAP-based systems.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CTAButton href={labLinks.demo}>Open demo</CTAButton>
            <CTAButton href={labLinks.github} variant="secondary">View GitHub</CTAButton>
          </div>
        </section>

        <section className="mx-auto grid max-w-5xl gap-8 px-6 pb-16 lg:px-8">
          <LabScreenshotPanel />
          <PayloadSnippetVisual />
          <ConceptGrid />
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-16 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5 sm:p-8">
            <div className="max-w-none space-y-6 text-slate-700 [&_blockquote]:border-l-4 [&_blockquote]:border-teal-500 [&_blockquote]:bg-teal-50/70 [&_blockquote]:px-5 [&_blockquote]:py-4 [&_blockquote]:text-lg [&_blockquote]:font-medium [&_blockquote]:text-slate-800 [&_h2]:pt-6 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-slate-950 [&_p]:leading-8">
              <h2>Why this lab exists</h2>
              <p>
                Healthcare interoperability standards are often discussed abstractly. This lab is intended as a practical space for exploring how integration workflows behave across APIs, payloads, mappings, validation rules, and operational edge cases.
              </p>
              <p>
                The goal is not to present a polished enterprise product or claim authority over every detail of HL7, FHIR, or SOAP-based integration work. The goal is hands-on familiarity: building small examples, inspecting payloads, practicing implementation decisions, and learning how standards become more understandable through experimentation.
              </p>
              <blockquote>Interoperability is easier to understand when you can watch data move, break, validate, and map into a workflow.</blockquote>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-5xl gap-8 px-6 pb-16 lg:px-8">
          <DemoLinksPanel />
          <SequenceDiagram />
          <ExplorationThemes />
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-16 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5 sm:p-8">
            <div className="max-w-none space-y-6 text-slate-700 [&_h2]:pt-6 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-slate-950 [&_p]:leading-8">
              <h2>Learning philosophy</h2>
              <p>
                In real integration work, the interesting questions usually appear after the first successful request. Does the payload contain the fields the workflow needs? What happens when a value is missing? Does the mapping preserve the right meaning? How does an implementation surface validation problems clearly enough to debug them later?
              </p>
              <p>
                This lab is a place to practice those questions in a small, iterative format. It reinforces the same habits that matter in production healthcare integrations: read the payload carefully, validate assumptions, trace the workflow outcome, and stay curious when the system behaves differently than expected.
              </p>
              <p>
                The emphasis is hands-on interoperability practice—not pretending a sandbox is a production system, and not treating standards familiarity as a substitute for workflow understanding.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-8">
          <div className="flex flex-col gap-3 rounded-[2rem] border border-slate-800 bg-slate-950 p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Connect</p>
              <p className="mt-2 max-w-2xl text-slate-200">
                Want to talk HL7, FHIR, SOAP APIs, payload validation, or practical healthcare interoperability experimentation?
              </p>
            </div>
            <CTAButton href={siteConfig.linkedinUrl} variant="dark">Connect on LinkedIn</CTAButton>
          </div>
        </section>
      </article>
    </main>
  );
}
