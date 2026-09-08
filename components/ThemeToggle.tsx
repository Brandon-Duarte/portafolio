"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

type Theme = "light" | "dark";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // El tema real ya lo aplico el script inline del layout; aqui solo lo leemos.
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    document.documentElement.style.colorScheme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Modo privado o almacenamiento bloqueado: el tema dura solo esta sesion.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Activar tema claro" : "Activar tema oscuro"}
      className={`grid size-10 place-items-center rounded-full border border-line bg-surface text-muted transition hover:border-line-strong hover:text-fg ${className}`}
    >
      {mounted && theme === "dark" ? (
        <SunIcon className="size-[18px]" />
      ) : (
        <MoonIcon className="size-[18px]" />
      )}
    </button>
  );
}
