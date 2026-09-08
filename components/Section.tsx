import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          {lead && <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{lead}</p>}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
