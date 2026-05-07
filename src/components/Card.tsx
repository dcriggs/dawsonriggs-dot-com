import type { ReactNode } from "react";

type CardProps = {
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export function Card({ title, description, children, className = "" }: CardProps) {
  return (
    <article className={`rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm shadow-slate-950/5 transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-slate-950/10 ${className}`}>
      {title ? <h3 className="text-lg font-semibold text-slate-950">{title}</h3> : null}
      {description ? <p className="mt-3 leading-7 text-slate-600">{description}</p> : null}
      {children}
    </article>
  );
}
