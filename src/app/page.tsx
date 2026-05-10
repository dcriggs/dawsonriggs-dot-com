import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/Card";
import { CTAButton } from "@/components/CTAButton";
import { ExperienceItem } from "@/components/ExperienceItem";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { assetUrls, siteConfig } from "@/data/site";

function HeadshotTrustCard() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-white/[0.07] p-5 shadow-2xl shadow-cyan-950/20 backdrop-blur">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(34,211,238,0.22),transparent_18rem),radial-gradient(circle_at_80%_80%,rgba(20,184,166,0.18),transparent_18rem)]" />
      <div className="relative grid gap-5 sm:grid-cols-[auto_1fr] sm:items-center">
        <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-[2rem] border border-cyan-200/30 bg-slate-900/60 shadow-[0_0_38px_rgba(34,211,238,0.22)] sm:mx-0">
          <Image
            src={assetUrls.headshot}
            alt="Dawson Riggs"
            fill
            priority
            sizes="160px"
            className="object-contain object-bottom"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Healthcare integration engineer</p>
          <p className="mt-3 text-lg font-semibold leading-7 text-white">
            Practical technical ownership across EHR workflows, implementation delivery, and production support.
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Epic, Oracle Health/Cerner, FHIR, HL7, REST/SOAP APIs, SQL, go-lives, and reliability work.
          </p>
        </div>
      </div>
    </div>
  );
}

function IntegrationLayerVisual() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-slate-950/70 p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.2),transparent_28rem),radial-gradient(circle_at_80%_25%,rgba(20,184,166,0.2),transparent_24rem)]" />
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(34,211,238,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.5)_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="relative grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div className="grid gap-3">
          {siteConfig.systemNodes.slice(0, 4).map((node) => (
            <div key={node} className="rounded-2xl border border-cyan-300/20 bg-white/[0.06] px-4 py-3 text-sm font-medium text-slate-100 shadow-lg shadow-slate-950/20">
              {node}
            </div>
          ))}
        </div>
        <div className="relative mx-auto flex h-44 w-44 items-center justify-center rounded-[2rem] border border-cyan-300/50 bg-slate-900/85 p-5 text-center shadow-[0_0_40px_rgba(34,211,238,0.28)]">
          <div className="absolute inset-x-[-6rem] top-1/2 hidden h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent md:block" />
          <div className="absolute inset-y-[-4rem] left-1/2 hidden w-px bg-gradient-to-b from-transparent via-blue-400/50 to-transparent md:block" />
          <div className="relative">
            <div className="mx-auto grid h-16 w-16 grid-cols-3 place-items-center gap-1">
              {[0, 1, 2, 3, 4, 5].map((dot) => (
                <span key={dot} className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
              ))}
            </div>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">Integration</p>
            <p className="text-lg font-semibold text-white">Layer</p>
          </div>
        </div>
        <div className="grid gap-3">
          {siteConfig.systemNodes.slice(4).map((node) => (
            <div key={node} className="rounded-2xl border border-teal-300/20 bg-white/[0.06] px-4 py-3 text-sm font-medium text-slate-100 shadow-lg shadow-slate-950/20">
              {node}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


function SystemsIntersectionDiagram() {
  const quadrants = [
    { label: "Technical systems", className: "left-4 top-4 text-cyan-100" },
    { label: "Clinical workflows", className: "right-4 top-4 text-teal-100" },
    { label: "Customer operations", className: "bottom-4 left-4 text-blue-100" },
    { label: "Implementation delivery", className: "bottom-4 right-4 text-cyan-100" },
  ];

  return (
    <div className="relative min-h-[25rem] overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(34,211,238,0.24),transparent_14rem),radial-gradient(circle_at_15%_15%,rgba(37,99,235,0.18),transparent_12rem),radial-gradient(circle_at_85%_80%,rgba(20,184,166,0.18),transparent_12rem)]" />
      <div className="absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-cyan-300/35 to-transparent" />
      <div className="absolute left-8 right-8 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 420" aria-hidden="true">
        <circle cx="210" cy="210" r="118" className="fill-none stroke-cyan-300/20" strokeWidth="1" />
        <circle cx="210" cy="210" r="72" className="fill-none stroke-teal-300/30" strokeWidth="1" />
        <path d="M95 105 C155 145 174 170 210 210 C246 170 265 145 325 105" className="diagram-flow-line" />
        <path d="M95 315 C155 275 174 250 210 210 C246 250 265 275 325 315" className="diagram-flow-line diagram-flow-line-delay" />
      </svg>
      {quadrants.map((quadrant) => (
        <div key={quadrant.label} className={`absolute max-w-[9rem] rounded-2xl border border-white/10 bg-white/[0.07] p-3 text-sm font-semibold leading-5 backdrop-blur ${quadrant.className}`}>
          {quadrant.label}
        </div>
      ))}
      <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-cyan-300/40 bg-slate-900/90 p-5 text-center shadow-[0_0_44px_rgba(34,211,238,0.24)]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Intersection</p>
          <p className="mt-2 text-lg font-semibold leading-6 text-white">Reliable healthcare integrations</p>
        </div>
      </div>
    </div>
  );
}

function IntegrationLifecycleDiagram() {
  return (
    <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5 sm:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(20,184,166,0.12),transparent_18rem),radial-gradient(circle_at_90%_70%,rgba(37,99,235,0.1),transparent_18rem)]" />
      <div className="relative">
        <div className="flex items-center justify-between gap-3 overflow-x-auto pb-2">
          {siteConfig.lifecycleSteps.map((step, index) => (
            <div key={step} className="group relative min-w-[9.5rem] flex-1">
              {index < siteConfig.lifecycleSteps.length - 1 ? <div className="absolute left-[calc(50%+2rem)] right-[calc(-50%+2rem)] top-8 hidden h-px bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 md:block" /> : null}
              <div className="relative rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-sm transition group-hover:border-teal-200 group-hover:shadow-lg group-hover:shadow-teal-950/5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-cyan-200 shadow-[0_0_22px_rgba(34,211,238,0.22)]">
                  {index + 1}
                </div>
                <p className="mt-4 text-sm font-semibold text-slate-950">{step}</p>
                <p className="mt-2 text-xs leading-5 text-slate-500">{index < 3 ? "Delivery readiness" : "Operational reliability"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CareerEvolutionDiagram() {
  return (
    <div className="mb-10 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5 sm:p-6">
      <div className="grid gap-4 md:grid-cols-4">
        {siteConfig.careerPath.map((item, index) => (
          <div key={item.label} className="relative rounded-3xl border border-slate-200 bg-slate-50 p-5">
            {index < siteConfig.careerPath.length - 1 ? <div className="absolute -right-6 top-1/2 z-10 hidden h-px w-8 bg-gradient-to-r from-teal-400 to-cyan-400 md:block" /> : null}
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">0{index + 1}</p>
            <h3 className="mt-3 text-lg font-semibold text-slate-950">{item.label}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReliabilityDashboard() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-slate-950 p-5 text-white shadow-2xl shadow-slate-950/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(34,211,238,0.2),transparent_16rem),radial-gradient(circle_at_90%_80%,rgba(20,184,166,0.16),transparent_14rem)]" />
      <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Operations console</p>
          <p className="mt-1 text-lg font-semibold">Integration health</p>
        </div>
        <span className="rounded-full border border-teal-300/30 bg-teal-300/10 px-3 py-1 text-xs font-semibold text-teal-100">Stable</span>
      </div>
      <div className="relative mt-5 grid gap-3 sm:grid-cols-3">
        {["API health", "Queue depth", "Sync success"].map((label, index) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{label}</p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
              <div className={`h-full rounded-full bg-gradient-to-r from-cyan-300 to-teal-300 ${index === 1 ? "w-2/5" : "w-11/12"}`} />
            </div>
            <p className="mt-3 text-sm font-semibold text-slate-100">{index === 1 ? "Low" : "Healthy"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section id="top" className="relative bg-slate-950 px-6 pb-20 pt-20 text-white sm:pb-28 sm:pt-28 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(37,99,235,0.28),transparent_30rem),radial-gradient(circle_at_88%_18%,rgba(20,184,166,0.35),transparent_34rem),linear-gradient(125deg,#020617_0%,#061733_48%,#042f3d_100%)]" />
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(34,211,238,0.7)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-300/25 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-sm shadow-cyan-950/20 backdrop-blur">
              {siteConfig.linkedInHeadline}
            </p>
            <h1 className="mt-8 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              {siteConfig.name}
            </h1>
            <p className="mt-3 text-2xl font-medium text-cyan-200">{siteConfig.title}</p>
            <p className="mt-8 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">{siteConfig.headline}</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{siteConfig.intro}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {siteConfig.heroPillars.map((pillar) => (
                <span key={pillar} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-cyan-100">
                  {pillar}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={siteConfig.linkedinUrl}>View LinkedIn</CTAButton>
              <CTAButton href="#projects" variant="dark">
                View Case Studies
              </CTAButton>
            </div>
          </div>

          <aside className="space-y-5">
            <HeadshotTrustCard />
            <IntegrationLayerVisual />
            <div className="grid gap-3 sm:grid-cols-2">
              {siteConfig.metrics.map((metric) => (
                <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur">
                  <p className="text-2xl font-semibold text-cyan-200">{metric.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{metric.label}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <Section id="story" eyebrow="Positioning" title="Healthcare integration work, grounded in implementation reality.">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="grid gap-5">
            {siteConfig.about.map((paragraph) => (
              <Card key={paragraph} className="text-base leading-8 text-slate-600">
                <p>{paragraph}</p>
              </Card>
            ))}
          </div>
          <SystemsIntersectionDiagram />
        </div>
      </Section>

      <Section id="expertise" eyebrow="Focus areas" title="EHR interoperability, production reliability, and workflow-aware delivery." description="The work spans technical implementation, solutions engineering, customer communication, support escalation, and the operational details that determine whether an integration actually works in production.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.expertise.map((item) => (
            <Card key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
        <IntegrationLifecycleDiagram />
      </Section>

      <Section id="experience" eyebrow="Experience highlights" title="From Epic MyChart to healthcare SaaS integration engineering." className="bg-white/45">
        <CareerEvolutionDiagram />
        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.metrics.map((metric) => (
            <div key={metric.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5">
              <p className="text-2xl font-semibold text-teal-700">{metric.value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{metric.label}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-6">
          {siteConfig.experiences.map((experience) => (
            <ExperienceItem key={`${experience.company}-${experience.role}`} {...experience} />
          ))}
        </div>
      </Section>

      <Section id="projects" eyebrow="Featured work / case studies" title="Field-tested stories from real healthcare integration work." description="Case studies and technical lab notes grounded in production interoperability, implementation constraints, reliability work, workflow validation, and hands-on experimentation.">
        <div className="mb-8">
          <ReliabilityDashboard />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {siteConfig.projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Section>

      <Section id="writing" eyebrow="Writing / thinking" title="Thoughtful notes on healthcare integrations, debugging, and go-live reliability." className="bg-white/45">
        <div className="grid gap-5 md:grid-cols-3">
          {siteConfig.writing.map((article) => (
            <Card key={article.title} className="flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">{article.status}</p>
              <h3 className="mt-4 text-xl font-semibold leading-7 text-slate-950">{article.title}</h3>
              <p className="mt-3 flex-1 leading-7 text-slate-600">{article.description}</p>
              <Link href={article.href} className="mt-6 text-sm font-semibold text-teal-700 hover:text-teal-900" aria-label={`${article.title} article`}>
                Read reflection →
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="values" eyebrow="How I work" title="Calm ownership for complex, cross-functional technical work.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {siteConfig.values.map((value, index) => (
            <div key={value} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5">
              <p className="text-sm font-semibold text-teal-700">0{index + 1}</p>
              <p className="mt-4 font-semibold leading-7 text-slate-900">{value}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Open to connecting on challenging healthcare integration problems." className="pb-14">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/20 sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(20,184,166,0.22),transparent_24rem)]" />
          <div className="relative">
            <p className="max-w-3xl text-xl leading-9 text-slate-100">
              If you&apos;re working on challenging interoperability or integration problems in healthcare, I&apos;m open to connecting—especially around Epic integrations, Oracle Health/Cerner workflows, FHIR, HL7, implementation engineering, production troubleshooting, and reliable go-live support.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={siteConfig.linkedinUrl}>Connect on LinkedIn</CTAButton>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
