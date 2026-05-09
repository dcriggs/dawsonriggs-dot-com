import Link from "next/link";
import { Card } from "@/components/Card";
import { CTAButton } from "@/components/CTAButton";
import { ExperienceItem } from "@/components/ExperienceItem";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { siteConfig } from "@/data/site";

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

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4 lg:px-8" aria-label="Primary navigation">
          <Link href="#top" className="text-sm font-bold tracking-tight text-white">
            Dawson Riggs
          </Link>
          <div className="order-3 flex w-full items-center gap-1 overflow-x-auto md:order-2 md:w-auto">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
          <CTAButton href={siteConfig.linkedinUrl} variant="dark" className="order-2 px-4 py-2 md:order-3">
            LinkedIn
          </CTAButton>
        </nav>
      </header>

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
        <div className="grid gap-6 lg:grid-cols-3">
          {siteConfig.about.map((paragraph) => (
            <Card key={paragraph} className="text-base leading-8 text-slate-600">
              <p>{paragraph}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="expertise" eyebrow="Focus areas" title="EHR interoperability, production reliability, and workflow-aware delivery." description="The work spans technical implementation, solutions engineering, customer communication, support escalation, and the operational details that determine whether an integration actually works in production.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.expertise.map((item) => (
            <Card key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </Section>

      <Section id="experience" eyebrow="Experience highlights" title="From Epic MyChart to healthcare SaaS integration engineering." className="bg-white/45">
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

      <Section id="projects" eyebrow="Featured work / case studies" title="Clean placeholders for deeper technical stories—not inflated project claims." description="These future writeups are framed around real integration themes and resume-backed outcomes. Until they are fully written, the site keeps them clearly labeled as case study placeholders.">
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

      <footer className="border-t border-slate-200 bg-white/70 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Dawson Riggs. Built with Next.js, TypeScript, and Tailwind CSS.</p>
          <Link href="#top" className="font-semibold text-slate-800 hover:text-teal-700">
            Back to top ↑
          </Link>
        </div>
      </footer>
    </main>
  );
}
