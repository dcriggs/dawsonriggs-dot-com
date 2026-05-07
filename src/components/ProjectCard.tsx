import Link from "next/link";

type ProjectCardProps = {
  title: string;
  type: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
};

export function ProjectCard({ title, type, description, tags, githubUrl, demoUrl }: ProjectCardProps) {
  const links = [
    githubUrl ? { href: githubUrl, label: "GitHub" } : null,
    demoUrl ? { href: demoUrl, label: "Demo" } : null,
  ].filter((link): link is { href: string; label: string } => Boolean(link));

  return (
    <article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5 transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-slate-950/10">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">{type}</p>
      <h3 className="mt-3 text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 flex-1 leading-7 text-slate-600">{description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            {tag}
          </span>
        ))}
      </div>
      {links.length > 0 ? (
        <div className="mt-6 flex gap-4 text-sm font-semibold text-slate-700">
          {links.map((link) => (
            <Link key={`${title}-${link.label}`} href={link.href} className="hover:text-teal-700" aria-label={`${title} ${link.label}`}>
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </article>
  );
}
