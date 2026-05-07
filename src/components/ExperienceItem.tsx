type ExperienceItemProps = {
  company: string;
  role: string;
  dates: string;
  summary: string;
  highlights: string[];
};

export function ExperienceItem({ company, role, dates, summary, highlights }: ExperienceItemProps) {
  return (
    <article className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-slate-950">{company}</h3>
          <p className="mt-1 text-base font-medium text-teal-700">{role}</p>
        </div>
        <p className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">{dates}</p>
      </div>
      <p className="mt-5 leading-7 text-slate-600">{summary}</p>
      <ul className="mt-6 space-y-3 text-slate-700">
        {highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3 leading-7">
            <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
