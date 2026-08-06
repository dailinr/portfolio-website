import { GLOBAL_CONTAINER } from "@/src/contants/layout";
import { HERO_SECTION_CONTENT } from "@/src/contants/index";
import Image from "next/image";

export default function Hero() {
  const { label, headline, description, buttons, image } = HERO_SECTION_CONTENT;
  return (
    // 1. CAPA DE PÁGINA/SECCIÓN: Limita la altura (min-h-screen), aplica el fondo infinito. NOTA: No le ponemos max-w, para que el background sea de lado a lado.
    <section id="inicio" className="relative flex min-h-screen w-full items-center justify-center bg-background pt-24 pb-12">

      {/* 2. CAPA CONTENEDORA: Llama a tu Token Maestro que evita que todo se esparza a los bordes. */}
      <div className={GLOBAL_CONTAINER}>

        {/* 3. CAPA DE LAYOUT: Tu grilla en sí. Ya no se encarga del 'max-w' o el 'mx-auto', solo del acomodo local. */}
        <div className="grid w-full grid-cols-1 gap-12 items-center lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col">
            {/* Small Label */}
            <div className="mb-1 text-sm font-bold text-secondary lg:text-2xl">
              {label}
            </div>

            {/* Main Title */}
            <div className="mb-4 space-y-4">
              <h1 className="text-4xl font-bold leading-tight text-foreground md:text-3xl lg:text-4xl">
                {headline.main}{' '} <br />
                <span className="text-primary">{headline.highlight}</span>
              </h1>
            </div>

            {/* Description */}
            <p className="mb-4 max-w-lg text-md text-left md:text-justify leading-relaxed text-tertiary md:text-md">
              {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <a
                href={buttons.contact.href}
                target="_blank"
                className="rounded-lg border-2 border-primary px-3 py-1.5 text-[13px] font-medium text-primary transition-colors duration-300 hover:bg-primary hover:text-background">
                {buttons.contact.label}
              </a>
              <a
                href={buttons.download_cv.href}
                download={buttons.download_cv.fileName}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-1.5 text-[13px] font-medium text-foreground transition-colors duration-300 hover:text-primary"
              >
                {buttons.download_cv.label}
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="group relative mx-auto w-full max-w-sm lg:max-w-none lg:self-start aspect-[4/5] lg:aspect-square animate-fade-in" style={{ animationDelay: "0.2s" }}>

            {/* Borde decorativo desplazado (Efecto offset inspirado en tus referencias) */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border-2 border-primary/30 transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-5" />

            {/* Contenedor principal de la imagen */}
            <div className="relative z-10 flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-colors duration-300 group-hover:border-white/20">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
