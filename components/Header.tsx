"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import ThemeToggle from "./ThemeToggle";
import { CloseIcon, DownloadIcon, MenuIcon } from "./Icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>(nav[0].href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Marca en el menu la seccion visible en pantalla.
  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Bloquea el scroll del fondo mientras el menu movil esta abierto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/75 backdrop-blur-xl supports-[backdrop-filter]:bg-bg/60"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#inicio"
          className="group flex items-center gap-2.5 font-mono text-sm font-semibold tracking-tight"
        >
          <span className="grid size-8 place-items-center rounded-lg bg-linear-to-br from-accent to-accent-2 text-[13px] font-bold text-accent-fg">
            BD
          </span>
          <span className="hidden text-fg sm:inline">{site.name}</span>
        </a>

        <nav aria-label="Secciones" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative rounded-full px-3.5 py-2 text-sm transition ${
                      isActive ? "text-fg" : "text-muted hover:text-fg"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 -z-10 rounded-full bg-accent-soft" />
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.cv}
            download
            className="hidden items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-fg transition hover:border-line-strong sm:inline-flex"
          >
            <DownloadIcon className="size-4" />
            CV
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-full border border-line bg-surface text-fg md:hidden"
          >
            {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 top-16 z-40 bg-bg/95 backdrop-blur-xl md:hidden">
          <nav aria-label="Secciones" className="mx-auto max-w-6xl px-5 py-6">
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3.5 text-lg text-fg transition hover:bg-surface-2"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-3">
                <a
                  href={site.cv}
                  download
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-xl bg-accent px-4 py-3.5 text-lg font-medium text-accent-fg"
                >
                  <DownloadIcon className="size-5" />
                  Descargar CV
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
