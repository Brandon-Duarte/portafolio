"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";
import {
  ArrowUpRightIcon,
  CheckIcon,
  CopyIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "./Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Sin permiso de portapapeles: el enlace mailto sigue funcionando.
    }
  }

  return (
    <section id="contacto" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="animate-float-slow absolute left-1/2 top-1/2 size-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
          style={{ background: "var(--glow-1)" }}
        />
      </div>

      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">Contacto</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">¿Conversamos?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
            Puedes escribirme por correo o LinkedIn.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-fg transition hover:opacity-90 sm:w-auto"
            >
              <MailIcon className="size-4" />
              {site.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-surface px-5 py-3.5 text-sm font-medium text-fg backdrop-blur transition hover:border-line-strong sm:w-auto"
            >
              {copied ? (
                <>
                  <CheckIcon className="size-4 text-emerald-400" />
                  Copiado
                </>
              ) : (
                <>
                  <CopyIcon className="size-4" />
                  Copiar correo
                </>
              )}
            </button>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 text-sm text-muted transition hover:border-line-strong hover:text-fg"
            >
              <LinkedinIcon className="size-4" />
              LinkedIn
              <ArrowUpRightIcon className="size-3.5" />
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 text-sm text-muted transition hover:border-line-strong hover:text-fg"
            >
              <GithubIcon className="size-4" />
              GitHub
              <ArrowUpRightIcon className="size-3.5" />
            </a>
            <a
              href={site.cv}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 text-sm text-muted transition hover:border-line-strong hover:text-fg"
            >
              <DownloadIcon className="size-4" />
              Descargar CV
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
