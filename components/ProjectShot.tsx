import Image from "next/image";

type ProjectShotProps = {
  src: string;
  alt: string;
  /** Proporción del recorte. Las capturas de aplicación se leen bien en 16/10. */
  ratio?: string;
  /** Ancho que ocupará la imagen en cada breakpoint, para que Next sirva el tamaño justo. */
  sizes: string;
  /** Solo para la captura destacada, que está sobre el pliegue. */
  priority?: boolean;
  className?: string;
};

export default function ProjectShot({
  src,
  alt,
  ratio = "16 / 10",
  sizes,
  priority = false,
  className = "",
}: ProjectShotProps) {
  return (
    <div
      className={`group/shot relative overflow-hidden rounded-2xl border border-line bg-surface-2 ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        /* object-top: en una captura larga interesa la cabecera, no el centro. */
        className="object-cover object-top transition-transform duration-700 ease-out group-hover/shot:scale-[1.03]"
      />
      {/* Filo interior: despega la captura del fondo oscuro sin taparla. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"
      />
    </div>
  );
}
