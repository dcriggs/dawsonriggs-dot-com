import Link from "next/link";

type ProjectVisual = "optimization" | "pipeline" | "workflow" | "lab";

type ProjectCardProps = {
  title: string;
  type: string;
  description: string;
  tags: string[];
  visual?: string;
  githubUrl?: string;
  demoUrl?: string;
  href?: string;
  hrefLabel?: string;
};

function isExternalHref(href: string) {
  return /^https?:\/\//.test(href);
}

function MiniArchitectureVisual({ visual = "workflow" }: { visual?: string }) {
  const labels: Record<ProjectVisual, string[]> = {
    optimization: ["API", "Rules", "Cost"],
    pipeline: ["Feed", "PDF", "Writeback"],
    workflow: ["EHR", "Layer", "Go-live"],
    lab: ["FHIR", "HL7", "SOAP"],
  };

  const selectedVisual = visual in labels ? (visual as ProjectVisual) : "workflow";

  return (
    <div className="relative h-36 overflow-hidden rounded-2xl border border-cyan-300/15 bg-slate-950 p-4 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.22),transparent_12rem),radial-gradient(circle_at_85%_35%,rgba(20,184,166,0.2),transparent_10rem)]" />
      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(34,211,238,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.55)_1px,transparent_1px)] [background-size:22px_22px]" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 360 144" aria-hidden="true">
        <path d="M38 40 C118 40 108 72 176 72" className="diagram-flow-line" />
        <path d="M38 104 C118 104 108 72 176 72" className="diagram-flow-line diagram-flow-line-delay" />
        <path d="M184 72 C250 72 246 40 322 40" className="diagram-flow-line" />
        <path d="M184 72 C250 72 246 104 322 104" className="diagram-flow-line diagram-flow-line-delay" />
      </svg>
      <div className="relative flex h-full items-center justify-between gap-3">
        <div className="space-y-8">
          <span className="block h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
          <span className="block h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.85)]" />
        </div>
        <div className="rounded-2xl border border-cyan-300/35 bg-white/10 px-5 py-4 text-center shadow-[0_0_28px_rgba(34,211,238,0.18)] backdrop-blur">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-cyan-200">Integration</p>
          <p className="mt-1 text-sm font-semibold text-white">{labels[selectedVisual][1]}</p>
        </div>
        <div className="space-y-8">
          <span className="block h-3 w-3 rounded-full bg-teal-300 shadow-[0_0_18px_rgba(94,234,212,0.85)]" />
          <span className="block h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
        </div>
      </div>
      <div className="absolute bottom-3 left-4 right-4 flex justify-between text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
        <span>{labels[selectedVisual][0]}</span>
        <span>{labels[selectedVisual][2]}</span>
      </div>
    </div>
  );
}

export function ProjectCard({ title, type, description, tags, visual, githubUrl, demoUrl, href, hrefLabel = "Read case study" }: ProjectCardProps) {
  const links = [
    githubUrl ? { href: githubUrl, label: "GitHub" } : null,
    demoUrl ? { href: demoUrl, label: "Demo" } : null,
    href ? { href, label: hrefLabel } : null,
  ].filter((link): link is { href: string; label: string } => Boolean(link));

  return (
    <article className="group relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-950/5 transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-slate-950/10">
      {href ? (
        <Link
          href={href}
          className="absolute inset-0 z-10 rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
          aria-label={`Open ${title}`}
        />
      ) : null}
      <MiniArchitectureVisual visual={visual} />
      <div className="flex flex-1 flex-col p-2 pt-5">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">{type}</p>
        <h3 className="mt-3 text-xl font-semibold text-slate-950 transition group-hover:text-teal-800">{title}</h3>
        <p className="mt-3 flex-1 leading-7 text-slate-600">{description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              {tag}
            </span>
          ))}
        </div>
        {links.length > 0 ? (
          <div className="relative z-20 mt-6 flex gap-4 text-sm font-semibold text-slate-700">
            {links.map((link) => {
              const isExternal = isExternalHref(link.href);

              return (
                <Link
                  key={`${title}-${link.label}`}
                  href={link.href}
                  className="hover:text-teal-700"
                  aria-label={`${title} ${link.label}`}
                  rel={isExternal ? "nofollow noreferrer" : undefined}
                  target={isExternal ? "_blank" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        ) : null}
      </div>
    </article>
  );
}
