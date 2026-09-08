import { site } from "@/lib/site";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="no-print border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 sm:flex-row sm:px-8">
        <p className="text-center text-sm text-subtle sm:text-left">
          © {year} {site.fullName} · {site.location}
          <span className="mt-1 block font-mono text-xs">
            Next.js · React · TypeScript · TailwindCSS
          </span>
        </p>

        <div className="flex items-center gap-2">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="grid size-10 place-items-center rounded-full border border-line text-muted transition hover:border-line-strong hover:text-fg"
          >
            <GithubIcon className="size-[17px]" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="grid size-10 place-items-center rounded-full border border-line text-muted transition hover:border-line-strong hover:text-fg"
          >
            <LinkedinIcon className="size-4" />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Enviar correo"
            className="grid size-10 place-items-center rounded-full border border-line text-muted transition hover:border-line-strong hover:text-fg"
          >
            <MailIcon className="size-[18px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
