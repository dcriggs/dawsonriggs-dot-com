import Link from "next/link";
import { Card } from "@/components/Card";
import { CTAButton } from "@/components/CTAButton";
import { ExperienceItem } from "@/components/ExperienceItem";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { siteConfig } from "@/data/site";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4 lg:px-8" aria-label="Primary navigation">
          <Link href="#top" className="text-sm font-bold tracking-tight text-slate-950">
            Dawson Riggs
          </Link>
          <div className="order-3 flex w-full items-center gap-1 overflow-x-auto md:order-2 md:w-auto">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950">
                {item.label}
              </Link>
            ))}
          </div>
          <CTAButton href={siteConfig.linkedinUrl} variant="secondary" className="order-2 px-4 py-2 md:order-3">
            LinkedIn
          </CTAButton>
        </nav>
      </header>

      <section id="top" className="relative px-6 pb-20 pt-20 sm:pb-28 sm:pt-28 lg:px-8">
        <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[linear-gradient(115deg,rgba(13,148,136,0.12),rgba(255,255,255,0),rgba(15,23,42,0.06))]" />
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-sm font-semibold text-teal-800 shadow-sm shadow-slate-950/5">
              {siteConfig.linkedInHeadline}
            </p>
            <h1 className="mt-8 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              {siteConfig.name}
            </h1>
            <p className="mt-6 max-w-3xl text-2xl font-medium leading-9 text-slate-800">{siteConfig.headline}</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{siteConfig.intro}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={siteConfig.linkedinUrl}>Connect on LinkedIn</CTAButton>
              <CTAButton href="#projects" variant="secondary">
                View Projects
              </CTAButton>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-2xl shadow-slate-950/10 backdrop-blur">
            <div className="rounded-3xl bg-slate-950 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Current focus</p>
              <p className="mt-4 text-2xl font-semibold leading-8">Reliable integrations for healthcare teams that cannot afford vague answers.</p>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                "Epic + Oracle Health/Cerner environments",
                "FHIR, HL7, APIs, workflow validation",
                "Go-live blockers and production escalations",
                "Clear customer-facing technical ownership",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium leading-6 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <Section id="story" eyebrow="Professional story" title="Healthcare integration work, grounded in implementation reality.">
        <div className="grid gap-6 lg:grid-cols-3">
          {siteConfig.about.map((paragraph) => (
            <Card key={paragraph} className="text-base leading-8 text-slate-600">
              <p>{paragraph}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="expertise" eyebrow="What I do" title="Turning messy integration problems into dependable production outcomes." description="The work spans technical investigation, workflow understanding, customer communication, and implementation delivery.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.expertise.map((item) => (
            <Card key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </Section>

      <Section id="experience" eyebrow="Experience highlights" title="Built in health systems, sharpened in startup delivery." className="bg-white/45">
        <div className="grid gap-6">
          {siteConfig.experiences.map((experience) => (
            <ExperienceItem key={`${experience.company}-${experience.role}`} {...experience} />
          ))}
        </div>
      </Section>

      <Section id="projects" eyebrow="Projects / labs" title="A growing portfolio of healthcare integration labs and shipped web products." description="Static placeholders today, structured for project detail pages, demos, and technical writeups later.">
        <div className="grid gap-6 md:grid-cols-2">
          {siteConfig.projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Section>

      <Section id="writing" eyebrow="Writing / reflections" title="Notes on implementation, debugging, and reliable delivery." className="bg-white/45">
        <div className="grid gap-5 md:grid-cols-3">
          {siteConfig.writing.map((article) => (
            <Card key={article.title} className="flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">{article.status}</p>
              <h3 className="mt-4 text-xl font-semibold leading-7 text-slate-950">{article.title}</h3>
              <p className="mt-3 flex-1 leading-7 text-slate-600">{article.description}</p>
              <Link href="#" className="mt-6 text-sm font-semibold text-teal-700 hover:text-teal-900" aria-label={`${article.title} placeholder`}>
                Read later →
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="values" eyebrow="How I work" title="Calm ownership for complex technical work.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {siteConfig.values.map((value, index) => (
            <div key={value} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5">
              <p className="text-sm font-semibold text-teal-700">0{index + 1}</p>
              <p className="mt-4 font-semibold leading-7 text-slate-900">{value}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Open to thoughtful professional conversations." className="pb-14">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/20 sm:p-10">
          <p className="max-w-3xl text-xl leading-9 text-slate-100">
            The best way to connect with me professionally is LinkedIn. I&apos;m open to conversations around healthcare integrations, solutions engineering, technical consulting, interoperability, and implementation work where reliability matters.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href={siteConfig.linkedinUrl}>Connect on LinkedIn</CTAButton>
            <CTAButton href={siteConfig.email} variant="secondary">
              Email placeholder
            </CTAButton>
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
