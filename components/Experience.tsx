import { experience, type Experience as ExperienceItem } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";
import { BriefcaseIcon, CapIcon, HospitalIcon } from "./Icons";

const kindMeta: Record<ExperienceItem["kind"], { label: string; Icon: typeof BriefcaseIcon }> = {
  trabajo: { label: "Experiencia profesional", Icon: BriefcaseIcon },
  proyecto: { label: "Proyecto institucional", Icon: HospitalIcon },
  formacion: { label: "Investigación académica", Icon: CapIcon },
};

export default function Experience() {
  return (
    <Section
      id="experiencia"
      eyebrow="Experiencia"
      title="Dónde he trabajado y qué construí ahí"
      lead="Desarrollo en un centro de innovación universitario, un proyecto entregado a un hospital público y una investigación de optimización aplicada en curso."
    >
      <ol className="relative space-y-4">
        {/* Linea vertical de la timeline */}
        <span
          aria-hidden="true"
          className="absolute left-5 top-4 bottom-4 hidden w-px bg-line sm:block"
        />

        {experience.map((item, i) => {
          const { label, Icon } = kindMeta[item.kind];
          return (
            <Reveal key={item.org} delay={i * 110} as="li" className="relative">
              {/* Marcador de la timeline: va fuera de la tarjeta porque su
                  backdrop-filter la convierte en bloque contenedor y el
                  marcador terminaria posicionado sobre el propio contenido. */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-5 hidden size-10 place-items-center rounded-full border border-line bg-bg text-accent sm:grid"
              >
                <Icon className="size-[18px]" />
              </span>

              <div className="surface-card card-sheen rounded-2xl p-6 sm:ml-14 sm:p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
                    {label}
                  </span>
                  {item.current && (
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-subtle">
                      <span className="size-1.5 rounded-full bg-emerald-400" />
                      En curso
                    </span>
                  )}
                  <span className="ml-auto font-mono text-xs text-subtle">{item.period}</span>
                </div>

                <h3 className="mt-4 text-lg font-semibold tracking-tight">{item.role}</h3>
                <p className="mt-1 text-sm text-fg">{item.org}</p>
                <p className="mt-0.5 text-sm text-subtle">{item.place}</p>

                <ul className="mt-5 space-y-2.5">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span
                        aria-hidden="true"
                        className="mt-[9px] size-1.5 shrink-0 rounded-full bg-accent"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
