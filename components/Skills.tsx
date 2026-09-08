import { skills } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <Section
      id="stack"
      eyebrow="Stack"
      title="Tecnologías con las que trabajo"
      lead="Herramientas que he usado en proyectos con usuarios, datos reales y despliegue, no solo en ejercicios de curso."
      className="bg-bg-soft"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 80} className="h-full">
            <div className="surface-card card-sheen h-full rounded-2xl p-6 transition duration-300 hover:-translate-y-1">
              <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                {group.group}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-line bg-surface-2 px-2.5 py-1.5 text-[13px] text-muted transition hover:border-line-strong hover:text-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={220}>
        <p className="mt-8 text-sm text-subtle">
          Idiomas: <span className="text-muted">Español (nativo)</span> · Inglés técnico de lectura.
        </p>
      </Reveal>
    </Section>
  );
}
