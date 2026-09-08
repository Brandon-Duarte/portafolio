# Portafolio — Brandon Duarte

Sitio personal de [Brandon Lee Duarte Miranda](https://github.com/Brandon-Duarte): desarrollador
de software con orientación a inteligencia artificial (USACH, Santiago de Chile).

**En producción:** _pendiente — reemplaza esta línea con la URL de Vercel._

---

## Qué incluye

- **Inicio** — presentación, roles rotativos y métricas destacadas.
- **Sobre mí** — perfil profesional, ejes de trabajo y formación.
- **Proyectos** — asistente de salud con arquitectura RAG (destacado), VulnCheck sobre Wazuh y
  ToolRent, con métricas, stack y enlace al repositorio.
- **Experiencia** — línea de tiempo con CITIAPS, el proyecto para el HUAP y el Trabajo de Título.
- **Stack** — tecnologías agrupadas por área.
- **Contacto** — correo con copia al portapapeles, LinkedIn, GitHub y descarga del CV.
- **`/cv`** — versión web del currículum, lista para imprimir o guardar como PDF (`Ctrl + P`).

Además: tema claro/oscuro persistente sin parpadeo, animaciones al hacer scroll que respetan
`prefers-reduced-motion`, imagen Open Graph generada en build, `sitemap.xml`, `robots.txt` y datos
estructurados `schema.org/Person`.

## Stack

**Next.js 16** (App Router) · **React 19** · **TypeScript** · **TailwindCSS 4**

Sin dependencias de UI de terceros: los iconos son SVG en línea y las animaciones son CSS más
`IntersectionObserver`.

## Puesta en marcha

```bash
npm install
npm run dev
```

El sitio queda en <http://localhost:3000>.

### Comandos

| Comando         | Descripción                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Servidor de desarrollo               |
| `npm run build` | Build de producción                  |
| `npm start`     | Sirve el build de producción         |

## Estructura

```
app/
  layout.tsx            metadata, fuentes, tema y datos estructurados
  page.tsx              composición de secciones
  globals.css           tokens de color, utilidades y animaciones
  cv/page.tsx           currículum en versión web e imprimible
  opengraph-image.tsx   imagen de previsualización para redes
components/             Header, Hero, About, Projects, Experience, Skills, Contact, Footer
lib/
  site.ts               datos de contacto, URL del sitio y navegación
  data.ts               proyectos, experiencia, formación y stack
public/                 CV descargable
```

## Cómo editarlo

Casi todo el contenido vive en dos archivos:

- **`lib/site.ts`** — nombre, correo, enlaces, URL del sitio y ruta del CV.
- **`lib/data.ts`** — proyectos, experiencia, educación, métricas y habilidades.

Para agregar un proyecto basta con añadir un objeto al arreglo `projects`; el que tenga
`featured: true` se muestra como tarjeta destacada.

## Despliegue

Pensado para [Vercel](https://vercel.com): importar el repositorio y desplegar sin configuración
adicional. Después del primer despliegue, actualiza `url` en `lib/site.ts` con el dominio real para
que la metadata, el `sitemap.xml` y la imagen Open Graph apunten al sitio correcto.
