import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { education, experience, projects, skills } from "@/lib/data";
import { ArrowUpRightIcon, DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Currículum",
  description: `Currículum de ${site.fullName}: ${site.description}`,
};

// Si quieres publicar tu telefono en la web, descomenta y agregalo a la cabecera.
// const phone = "+56 9 5387 0950";

function Rule({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 border-b border-line pb-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
      {children}
    </h2>
  );
}

export default function CvPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-14 sm:px-8 print:max-w-none print:py-0">
      <div className="no-print mb-10 flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-fg"
        >
          ← Volver al portafolio
        </Link>
        <a
          href={site.cv}
          download
          className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-accent-fg transition hover:opacity-90"
        >
          <DownloadIcon className="size-4" />
          Descargar .docx
        </a>
      </div>

      <p className="no-print mb-8 rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm text-muted">
        Para obtener el CV en PDF: <strong className="text-fg">Ctrl + P</strong> en esta página y
        elige <em>Guardar como PDF</em>. Los botones y menús no se imprimen.
      </p>

      <header className="border-b border-line pb-6">
        <h1 className="text-3xl font-semibold tracking-tight">{site.fullName}</h1>
        <p className="mt-1.5 text-muted">
          {site.role} · {site.headline}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
          <span>{site.location}</span>
          <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1.5 hover:text-fg">
            <MailIcon className="size-3.5" />
            {site.email}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 hover:text-fg"
          >
            <LinkedinIcon className="size-3.5" />
            brandon-lee-duarte-miranda
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 hover:text-fg"
          >
            <GithubIcon className="size-3.5" />
            Brandon-Duarte
          </a>
        </div>
      </header>

      <section className="mt-9">
        <Rule>Perfil profesional</Rule>
        <p className="text-sm leading-relaxed text-muted">
          Estudiante de último año de Ingeniería de Ejecución en Computación e Informática (USACH).
          Experiencia en desarrollo full-stack e IA aplicada: asistentes conversacionales con
          arquitectura RAG (LangChain, FAISS, embeddings, LLM), APIs REST en Java/Spring Boot, Go y
          Python/FastAPI, y pipelines de ingesta validados sobre millones de registros.
        </p>
      </section>

      <section className="mt-9">
        <Rule>Educación</Rule>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
          <h3 className="font-medium text-fg">{education.school}</h3>
          <span className="font-mono text-xs text-subtle">{education.place}</span>
        </div>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
          <p className="text-sm text-muted">{education.degree}</p>
          <span className="font-mono text-xs text-subtle">{education.period}</span>
        </div>
      </section>

      <section className="mt-9">
        <Rule>Experiencia y proyectos</Rule>
        <div className="space-y-7">
          {experience.map((item) => (
            <article key={item.org}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-medium text-fg">{item.org}</h3>
                <span className="font-mono text-xs text-subtle">{item.period}</span>
              </div>
              <p className="mt-0.5 text-sm text-accent">{item.role}</p>
              <p className="text-xs text-subtle">{item.place}</p>
              <ul className="mt-3 space-y-1.5">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-9">
        <Rule>Proyectos con código público</Rule>
        <div className="space-y-5">
          {projects.map((project) => (
            <article key={project.slug}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-medium text-fg">
                  {project.title} — {project.subtitle}
                </h3>
                <span className="font-mono text-xs text-subtle">
                  {project.context} · {project.year}
                </span>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{project.summary}</p>
              <p className="mt-2 font-mono text-xs text-subtle">
                {project.stack.flatMap((group) => group.items).join(" · ")}
              </p>
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-1.5 inline-flex items-center gap-1 text-xs text-accent hover:underline"
                >
                  {project.repo.replace("https://", "")}
                  <ArrowUpRightIcon className="size-3" />
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="mt-9">
        <Rule>Habilidades técnicas</Rule>
        <dl className="space-y-2.5">
          {skills.map((group) => (
            <div key={group.group} className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-4">
              <dt className="text-sm font-medium text-fg">{group.group}</dt>
              <dd className="text-sm text-muted">{group.items.join(", ")}.</dd>
            </div>
          ))}
          <div className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-4">
            <dt className="text-sm font-medium text-fg">Idiomas</dt>
            <dd className="text-sm text-muted">Español (nativo), inglés.</dd>
          </div>
        </dl>
      </section>

      <p className="no-print mt-12 text-center text-xs text-subtle">
        Versión web del currículum · {site.url.replace("https://", "")}/cv
      </p>
    </main>
  );
}
