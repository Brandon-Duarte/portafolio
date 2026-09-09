export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  context: string;
  year: string;
  featured?: boolean;
  summary: string;
  highlights: string[];
  metrics?: { value: string; label: string }[];
  stack: { group: string; items: string[] }[];
  tags: string[];
  repo?: string;
  demo?: string;
  /**
   * Captura del proyecto. El archivo va en `public/proyectos/`.
   * Mientras el campo esté ausente la tarjeta se muestra sin imagen,
   * así que solo lo agregas cuando el archivo ya existe.
   */
  image?: { src: string; alt: string };
};

export const projects: Project[] = [
  {
    slug: "asistente-rag",
    title: "Guía Digital Adulto Mayor",
    subtitle: "Asistente de salud con arquitectura RAG",
    context: "USACH – Hospital de Urgencia Asistencia Pública (HUAP)",
    year: "2026",
    featured: true,
    summary:
      "Plataforma web educativa sobre uso seguro de IA para personas mayores. Construí desde cero el asistente conversacional de salud con un pipeline híbrido de tres niveles whitelist semántica con FAISS, recuperación sobre base de conocimiento y guardrail de fuera de alcance que resuelve las consultas frecuentes sin invocar al LLM.",
    highlights: [
      "Pipeline RAG híbrido de tres niveles: whitelist semántica, recuperación sobre base de conocimiento y guardrail de fuera de alcance.",
      "Embeddings locales en español con sentence-transformers y LLM vía Groq con modelo de respaldo.",
      "Calibración de umbrales de distancia para reducir falsos positivos en la clasificación de consultas.",
      "Detección de crisis de salud mental con derivación a canales de ayuda.",
      "Backend FastAPI con PostgreSQL, SQLAlchemy, Alembic y autenticación OAuth + JWT.",
      "Documentación de traspaso técnico entregada al hospital.",
    ],
    stack: [
      {
        group: "IA",
        items: ["LangChain", "FAISS", "sentence-transformers", "Groq", "RAG"],
      },
      {
        group: "Backend",
        items: ["Python 3.12", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "OAuth2 + JWT"],
      },
      {
        group: "Frontend",
        items: ["Next.js 16", "React 19", "TypeScript", "TailwindCSS"],
      },
      {
        group: "Infraestructura",
        items: ["Docker Compose", "Nginx + TLS", "GitHub Actions"],
      },
    ],
    tags: ["IA", "Full-stack", "Salud"],
    repo: "https://github.com/Brandon-Duarte/Asistente-de-salud-con-arquitectura-RAG",
    image: { src: "/proyectos/asistente-rag.png", alt: "Diagrama del pipeline RAG de tres niveles: la consulta pasa por embedding y clasificación por distancia, y deriva a whitelist semántica con FAISS, a recuperación sobre base de conocimiento con LLM, o al guardrail de fuera de alcance" },
  },
  {
    slug: "vulncheck-wazuh",
    title: "VulnCheck",
    subtitle: "Gestión histórica de vulnerabilidades sobre Wazuh",
    context: "USACH · Proyecto DevSecOps",
    year: "2026",
    summary:
      "Wazuh muestra el estado actual de las vulnerabilidades, pero no conserva la historia. VulnCheck ingiere los hallazgos del SIEM como serie temporal, compara cada carga con la anterior y marca cada vulnerabilidad como NUEVA, PERSISTENTE o REMEDIADA.",
    highlights: [
      "Ingesta por streaming y escritura por lotes a memoria constante: 3.557 registros/s sobre 6,4 millones de filas.",
      "Trazabilidad por hallazgo comparando cargas consecutivas del SIEM.",
      "12 filtros combinables y clasificación temporal con window functions de PostgreSQL.",
      "Ingesta asíncrona por chunks con barra de progreso consultable.",
      "Pipeline DevSecOps completo en Jenkins: build, análisis estático con SonarQube, despliegue y escaneo.",
    ],
    metrics: [
      { value: "3.557", label: "registros/s de ingesta" },
      { value: "6,4 M", label: "filas procesadas" },
      { value: "12", label: "filtros combinables" },
    ],
    stack: [
      { group: "Backend", items: ["Java 21", "Spring Boot", "PostgreSQL 16", "JPA/Hibernate"] },
      { group: "Frontend", items: ["React 19", "TypeScript"] },
      { group: "DevSecOps", items: ["Jenkins", "SonarQube", "Docker", "Wazuh (SIEM)"] },
    ],
    tags: ["Backend", "DevSecOps", "Datos"],
    repo: "https://github.com/Brandon-Duarte/DevSecOps---Wazuh",
    image: { src: "/proyectos/vulncheck.png", alt: "Diagrama de VulnCheck: ingesta por streaming desde Wazuh hacia PostgreSQL, comparación entre cargas consecutivas y clasificación de cada hallazgo como nueva, persistente o remediada, junto al pipeline DevSecOps en Jenkins" },
  },
  {
    slug: "toolrent",
    title: "ToolRent",
    subtitle: "Sistema de gestión de arriendo de herramientas",
    context: "USACH · Arquitectura de software",
    year: "2025",
    summary:
      "API REST sobre 9 entidades que cubre el ciclo completo de arriendo: préstamos con validación de elegibilidad, multas automáticas por mora, kardex de inventario y reportes de uso.",
    highlights: [
      "Modelo de dominio de 9 entidades con reglas de elegibilidad y cálculo automático de multas por mora.",
      "Kardex de inventario con trazabilidad de movimientos y reportes de uso.",
      "Autorización por roles con Keycloak (JWT) sobre los endpoints del backend.",
      "Cobertura de reglas de negocio con pruebas unitarias en JUnit 5 y Mockito.",
    ],
    metrics: [
      { value: "9", label: "entidades de dominio" },
      { value: "JUnit 5", label: "pruebas de negocio" },
    ],
    stack: [
      { group: "Backend", items: ["Java 17", "Spring Boot 3.5", "PostgreSQL", "JPA/Hibernate"] },
      { group: "Seguridad", items: ["Keycloak", "JWT", "Roles"] },
      { group: "Frontend e infra", items: ["React 19", "Docker Compose", "Nginx"] },
      { group: "Testing", items: ["JUnit 5", "Mockito"] },
    ],
    tags: ["Backend", "Full-stack"],
    repo: "https://github.com/Brandon-Duarte/Toolrent",
    image: { src: "/proyectos/toolrent.png", alt: "Diagrama del ciclo de arriendo de ToolRent: Keycloak autoriza la API REST, y el flujo recorre validación de elegibilidad, préstamo activo, devolución, multa automática por mora y kardex de inventario" },
  },
];

export type Experience = {
  org: string;
  role: string;
  place: string;
  period: string;
  kind: "trabajo" | "proyecto" | "formacion";
  current?: boolean;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    org: "Trabajo de Título — USACH",
    role: "Optimización multiobjetivo para la red de salud pública",
    place: "Profesor guía: Manuel Villalobos Cid",
    period: "2026 — en curso",
    kind: "formacion",
    current: true,
    bullets: [
      "Modelo de optimización binaria de tres objetivos en conflicto cobertura ponderada por riesgo, tiempo de traslado y costo resuelto con NSGA-II sobre 2.371 zonas censales y 287 centros de atención primaria.",
      "Matrices origen-destino sobre red vial real con OpenRouteService y diseño factorial de 3 umbrales × 2 esquemas de costo, con 31 réplicas por escenario.",
      "Evaluación con hipervolumen, indicador ε aditivo e IGD⁺ frente a cuatro métodos de referencia, incluida resolución exacta por ε-restricciones con Pyomo/HiGHS.",
      "Contrastes no paramétricos con corrección de Holm sobre los resultados experimentales.",
    ],
    stack: ["Python", "pymoo", "Pyomo/HiGHS", "GeoPandas", "OpenRouteService", "NumPy", "pandas"],
  },
  {
    org: "USACH – Hospital de Urgencia Asistencia Pública (HUAP)",
    role: "Desarrollador · Guía Digital Adulto Mayor",
    place: "Santiago, Chile · Equipo de 3 desarrolladores",
    period: "2026",
    kind: "proyecto",
    bullets: [
      "Desarrollo de una plataforma educativa de uso seguro de IA para personas mayores, entregada al HUAP con documentación de traspaso técnico.",
      "Construcción completa del stack de IA: arquitectura RAG, embeddings locales en español, guardrails y detección de crisis de salud mental.",
      "Backend en Python 3.12 / FastAPI con PostgreSQL, OAuth + JWT, y parte del frontend en Next.js 16 y React 19.",
      "Accesibilidad orientada a adultos mayores en toda la interfaz del asistente.",
    ],
    stack: ["Python", "FastAPI", "LangChain", "FAISS", "PostgreSQL", "Next.js", "React", "Docker"],
  },
  {
    org: "CITIAPS — Centro de Innovación USACH",
    role: "Desarrollador de Software · Plataforma SDT",
    place: "Santiago, Chile",
    period: "2025",
    kind: "trabajo",
    bullets: [
      "Extensión de una API REST heredada en Go (Gin) y MongoDB con el módulo de buzón de requerimientos: filtros, ciclo de estados e historial de trazabilidad.",
      "Asignación automática de requerimientos por mínima carga (Least Loaded) entre ejecutores.",
      "Endurecimiento de seguridad: validación de roles en controladores y middleware, validación de formularios en servidor, refuerzo de validación de archivos con ClamAV y sistema de logs y auditoría.",
      "Vistas del panel administrativo (Nuxt 3, Vuetify 3, Pinia) y de la PWA de postulantes; entorno con Docker Compose y flujo Git feature/develop/main con code review.",
    ],
    stack: ["Go (Gin)", "MongoDB", "Redis", "Nuxt 3", "Vuetify", "Pinia", "Docker", "ClamAV"],
  },
];

export const education = {
  school: "Universidad de Santiago de Chile",
  degree: "Ingeniería de Ejecución en Computación e Informática",
  period: "2023 – 2026 (egreso previsto)",
  place: "Santiago, Chile",
};

export const stats = [
  { value: "6,4 M", label: "filas procesadas en pipelines de ingesta" },
  { value: "2.371", label: "zonas censales modeladas con NSGA-II" },
  { value: "4", label: "lenguajes usados en proyectos reales" },
  { value: "3", label: "proyectos de ingeniería entregados" },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Lenguajes",
    items: ["Python", "Java 17 / 21", "Go", "TypeScript", "JavaScript", "SQL", "C"],
  },
  {
    group: "IA y datos",
    items: [
      "RAG",
      "LangChain",
      "FAISS",
      "Embeddings",
      "sentence-transformers",
      "LLM (Groq)",
      "Vector stores",
      "NSGA-II / pymoo",
      "Optimización multiobjetivo",
      "NumPy",
      "pandas",
      "GeoPandas",
    ],
  },
  {
    group: "Backend",
    items: [
      "FastAPI",
      "Spring Boot",
      "Gin (Go)",
      "API REST",
      "JPA/Hibernate",
      "SQLAlchemy",
      "JWT",
      "OAuth2",
      "Keycloak",
    ],
  },
  {
    group: "Frontend",
    items: ["React 19", "Next.js", "Nuxt 3", "TypeScript", "TailwindCSS", "Vuetify", "PWA"],
  },
  {
    group: "Datos y DevOps",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker Compose",
      "Nginx",
      "Jenkins",
      "SonarQube",
      "Git / GitHub",
      "Linux / WSL2",
    ],
  },
  {
    group: "Calidad y seguridad",
    items: ["pytest", "JUnit 5", "Mockito", "Wazuh (SIEM)", "Auditoría de vulnerabilidades"],
  },
];
