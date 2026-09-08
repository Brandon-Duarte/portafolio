import { projects, type Project } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";
import { ArrowUpRightIcon, GithubIcon, SparkIcon } from "./Icons";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted">
      {children}
    </span>
  );
}

function RepoLink({ href, label = "Ver repositorio" }: { href: string; label?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="group/link inline-flex items-center gap-2 rounded-full border border-line bg-surface-2 px-4 py-2 text-sm font-medium text-fg transition hover:border-line-strong"
    >
      <GithubIcon className="size-4" />
      {label}
      <ArrowUpRightIcon className="size-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
    </a>
  );
}

function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
          <span
            aria-hidden="true"
            className="mt-[9px] size-1.5 shrink-0 rounded-full bg-accent"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="surface-card card-sheen group rounded-3xl p-6 sm:p-9">
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
          <SparkIcon className="size-3.5" />
          Proyecto destacado
        </span>
        <span className="font-mono text-xs text-subtle">{project.year}</span>
      </div>

      <div className="mt-5 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{project.title}</h3>
          <p className="mt-1.5 text-lg text-accent">{project.subtitle}</p>
          <p className="mt-2 text-sm text-subtle">{project.context}</p>
          <p className="mt-5 text-base leading-relaxed text-muted">{project.summary}</p>

          {project.metrics && (
            <dl className="mt-7 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="bg-bg px-3 py-4 text-center">
                  <dt className="sr-only">{metric.label}</dt>
                  <dd>
                    <span className="block font-mono text-xl font-semibold text-fg">
                      {metric.value}
                    </span>
                    <span className="mt-1 block text-[11px] leading-tight text-subtle">
                      {metric.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          )}

          {project.repo && (
            <div className="mt-8">
              <RepoLink href={project.repo} />
            </div>
          )}
        </div>

        <div>
          <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-subtle">
            Qué construí
          </h4>
          <Highlights items={project.highlights} />
        </div>
      </div>

      <div className="mt-9 border-t border-line pt-7">
        <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-subtle">Stack</h4>
        <div className="space-y-3">
          {project.stack.map((group) => (
            <div key={group.group} className="flex flex-wrap items-center gap-1.5">
              <span className="mr-1 w-full shrink-0 text-xs text-subtle sm:w-28">
                {group.group}
              </span>
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const flatStack = project.stack.flatMap((group) => group.items);

  return (
    <article className="surface-card card-sheen flex h-full flex-col rounded-3xl p-6 transition duration-300 hover:-translate-y-1 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-1 text-accent">{project.subtitle}</p>
          <p className="mt-1.5 text-sm text-subtle">{project.context}</p>
        </div>
        <span className="shrink-0 font-mono text-xs text-subtle">{project.year}</span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted">{project.summary}</p>

      {project.metrics && (
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <span className="block font-mono text-lg font-semibold text-fg">{metric.value}</span>
              <span className="text-[11px] text-subtle">{metric.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6">
        <Highlights items={project.highlights} />
      </div>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {flatStack.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>

      {project.repo && (
        <div className="mt-7 pt-1">
          <RepoLink href={project.repo} label="Repositorio" />
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section
      id="proyectos"
      eyebrow="Proyectos"
      title="Sistemas completos, de la arquitectura al despliegue"
      lead="Tres proyectos de ingeniería con código público: un asistente de salud con arquitectura RAG, una plataforma de gestión histórica de vulnerabilidades sobre Wazuh y una API de gestión de arriendos con autorización por roles."
      className="bg-bg-soft"
    >
      <div className="space-y-6">
        {featured && (
          <Reveal>
            <FeaturedProject project={featured} />
          </Reveal>
        )}

        <div className="grid gap-6 lg:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.slug} delay={i * 110} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={200}>
        <p className="mt-10 text-center text-sm text-subtle">
          Más código en{" "}
          <a
            href="https://github.com/Brandon-Duarte"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1 font-medium text-fg underline decoration-line underline-offset-4 transition hover:decoration-accent"
          >
            github.com/Brandon-Duarte
            <ArrowUpRightIcon className="size-3.5" />
          </a>
        </p>
      </Reveal>
    </Section>
  );
}
