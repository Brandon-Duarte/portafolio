export const site = {
  name: "Brandon Duarte",
  fullName: "Brandon Lee Duarte Miranda",
  role: "Desarrollador de Software",
  headline: "Ingeniería Informática con orientación a Inteligencia Artificial",
  location: "Santiago, Chile",
  email: "brandon.duarte.dev@gmail.com",
  github: "https://github.com/Brandon-Duarte",
  linkedin: "https://www.linkedin.com/in/brandon-lee-duarte-miranda",
  // Cambia esto por tu URL real de Vercel despues del primer despliegue.
  url: "https://brandon-duarte.vercel.app",
  cv: "/CV-Brandon-Duarte.docx",
  description:
    "Desarrollador full-stack con foco en IA aplicada: arquitecturas RAG, APIs REST en Java, Go y Python, y optimizacion multiobjetivo con algoritmos evolutivos.",
} as const;

export const nav = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#stack", label: "Stack" },
  { href: "#contacto", label: "Contacto" },
] as const;
