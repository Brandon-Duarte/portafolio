"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { stats } from "@/lib/data";
import Reveal from "./Reveal";
import AgentNetwork from "./AgentNetwork";
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PinIcon,
} from "./Icons";

const ROLES = [
  "IA aplicada y arquitecturas RAG",
  "APIs REST en Java, Go y Python",
  "Desarrollo full-stack",
];

/** Escribe y borra cada rol, letra por letra. */
function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setText(words[0]);
      return;
    }

    const current = words[index % words.length];
    const done = !deleting && text === current;
    const cleared = deleting && text === "";

    const delay = done ? 2200 : cleared ? 260 : deleting ? 28 : 55;

    const timer = setTimeout(() => {
      if (done) {
        setDeleting(true);
      } else if (cleared) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(current.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Fondo decorativo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-backdrop" />
        <div
          className="animate-float-slow absolute -top-40 left-1/2 size-[46rem] -translate-x-1/2 rounded-full blur-[120px]"
          style={{ background: "var(--glow-1)" }}
        />
        <div
          className="animate-float-slow absolute -right-40 top-40 size-[32rem] rounded-full blur-[110px]"
          style={{ background: "var(--glow-2)", animationDelay: "-6s" }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)] lg:gap-6">
          <div>
            <Reveal>
              <h1 className="text-[clamp(2.5rem,6vw,4.25rem)] font-semibold leading-[1.02] tracking-tight">
                <span className="block text-muted">Hola, soy</span>
                <span className="text-gradient block">Brandon Duarte</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-5 min-h-[2.5rem] font-mono text-base text-fg sm:text-lg">
                <span className="text-accent">{"> "}</span>
                {typed}
                <span className="animate-caret ml-0.5 inline-block w-[2px] translate-y-[2px] bg-accent align-middle h-[1.1em]" />
              </p>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                Estudiante de último año de <strong className="font-medium text-fg">Ingeniería de
                Ejecución en Computación e Informática (USACH)</strong>. Construyo sistemas donde la IA
                resuelve un problema concreto: asistentes conversacionales con arquitectura RAG y
                pipelines de datos validados sobre millones de registros.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#proyectos"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-fg transition hover:opacity-90"
                >
                  Ver proyectos
                  <ArrowDownIcon className="size-4 transition-transform group-hover:translate-y-0.5" />
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-sm font-medium text-fg backdrop-blur transition hover:border-line-strong"
                >
                  <MailIcon className="size-4" />
                  Contáctame
                </a>
                <div className="flex items-center gap-2">
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="GitHub"
                    className="grid size-11 place-items-center rounded-full border border-line bg-surface text-muted transition hover:border-line-strong hover:text-fg"
                  >
                    <GithubIcon className="size-[18px]" />
                  </a>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn"
                    className="grid size-11 place-items-center rounded-full border border-line bg-surface text-muted transition hover:border-line-strong hover:text-fg"
                  >
                    <LinkedinIcon className="size-[17px]" />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <p className="mt-7 inline-flex items-center gap-2 text-sm text-subtle">
                <PinIcon className="size-4" />
                {site.location}
                <span aria-hidden="true">·</span>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 transition hover:text-fg"
                >
                  linkedin.com/in/brandon-lee-duarte-miranda
                  <ArrowUpRightIcon className="size-3.5" />
                </a>
              </p>
            </Reveal>
          </div>

          <Reveal delay={320} className="hidden justify-center lg:flex">
            <AgentNetwork />
          </Reveal>
        </div>

        <Reveal delay={480}>
          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-bg px-5 py-6">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-mono text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1.5 block text-[13px] leading-snug text-subtle">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
