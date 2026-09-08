import { education } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";
import { CapIcon, SparkIcon } from "./Icons";

const focus = [
  {
    title: "IA aplicada, no demos",
    body: "Diseño pipelines RAG con recuperación, guardrails y umbrales calibrados, pensados para responder bien en un dominio acotado y fallar de forma segura fuera de él.",
  },
  {
    title: "Backend que aguanta datos reales",
    body: "APIs REST en Spring Boot, FastAPI y Gin, con ingesta por streaming a memoria constante y consultas analíticas sobre millones de filas.",
  },
  {
    title: "Optimización y decisión",
    body: "Modelos multiobjetivo resueltos con algoritmos evolutivos y validados con indicadores de calidad y contrastes estadísticos, no solo con una métrica agregada.",
  },
  {
    title: "Seguridad desde el inicio",
    body: "Autorización por roles, JWT/OAuth2, validación en servidor y auditoría de vulnerabilidades integradas al pipeline de CI.",
  },
];

export default function About() {
  return (
    <Section
      id="sobre-mi"
      eyebrow="Sobre mí"
      title="Ingeniería con orientación a inteligencia artificial"
      lead="Me interesa el punto donde la IA deja de ser un experimento y entra en un sistema real: con datos propios, restricciones de dominio, usuarios que no son técnicos y consecuencias si la respuesta está mal."
    >
      <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
        <div className="space-y-8">
          <Reveal>
            <div className="space-y-4 text-base leading-relaxed text-muted">
              <p>
                Trabajo principalmente en <strong className="font-medium text-fg">full-stack e IA
                aplicada</strong>. En el Hospital de Urgencia Asistencia Pública construí desde cero
                un asistente conversacional de salud para personas mayores, con una arquitectura RAG
                que resuelve las consultas frecuentes sin invocar al modelo de lenguaje y que se
                niega a responder cuando la pregunta queda fuera de su alcance.
              </p>
              <p>
                En paralelo desarrollo mi Trabajo de Título sobre{" "}
                <strong className="font-medium text-fg">reforzamiento de la red de salud pública
                frente al ACV isquémico</strong>: un modelo de optimización binaria de tres
                objetivos en conflicto, resuelto con NSGA-II sobre datos censales y de atención
                primaria reales de la Región Metropolitana.
              </p>
              <p>
                Antes pasé por CITIAPS, el centro de innovación de la USACH, extendiendo una API
                heredada en Go y endureciendo su seguridad. Me muevo con comodidad entre Python,
                Java, Go y TypeScript, y entre el modelo de IA y el contenedor donde termina
                corriendo.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="surface-card card-sheen rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                  <CapIcon className="size-5" />
                </span>
                <div>
                  <h3 className="font-medium text-fg">{education.school}</h3>
                  <p className="mt-1 text-sm text-muted">{education.degree}</p>
                  <p className="mt-2 font-mono text-xs text-subtle">
                    {education.period} · {education.place}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {focus.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <article className="surface-card card-sheen h-full rounded-2xl p-5 transition duration-300 hover:-translate-y-0.5">
                <h3 className="flex items-center gap-2.5 text-sm font-medium text-fg">
                  <SparkIcon className="size-4 shrink-0 text-accent" />
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
