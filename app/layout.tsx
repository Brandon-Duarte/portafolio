import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Brandon Duarte",
    "desarrollador de software",
    "inteligencia artificial",
    "RAG",
    "LangChain",
    "FastAPI",
    "Spring Boot",
    "Next.js",
    "USACH",
    "Chile",
  ],
  authors: [{ name: site.fullName, url: site.url }],
  creator: site.fullName,
  openGraph: {
    type: "profile",
    locale: "es_CL",
    url: site.url,
    title: `${site.name} — ${site.role}`,
    description: site.description,
    siteName: `Portafolio de ${site.name}`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbfd" },
    { media: "(prefers-color-scheme: dark)", color: "#07080d" },
  ],
};

// Aplica el tema antes del primer pintado para evitar el parpadeo claro/oscuro.
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var dark = stored ? stored === "dark" : true;
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
  } catch (e) {
    document.documentElement.classList.add("dark");
  }
})();
`;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.fullName,
  alternateName: site.name,
  jobTitle: site.role,
  description: site.description,
  url: site.url,
  email: `mailto:${site.email}`,
  sameAs: [site.github, site.linkedin],
  address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Universidad de Santiago de Chile" },
  knowsAbout: [
    "Retrieval-Augmented Generation",
    "Optimización multiobjetivo",
    "Desarrollo backend",
    "Desarrollo full-stack",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${mono.variable} font-sans antialiased`}>
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-accent-fg"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
