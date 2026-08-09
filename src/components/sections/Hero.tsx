import { GLOBAL_CONTAINER } from "@/src/contants/layout";
import { HERO_SECTION_CONTENT } from "@/src/contants/index";
import Image from "next/image";
import HeroIntroMotion from "@/src/components/motion/HeroIntroMotion.client";
import Entrance from "@/src/components/motion/Entrance";

export default function Hero() {
  const { label, headline, description, buttons, image } = HERO_SECTION_CONTENT;

  return (
    // 1. CAPA DE PÁGINA/SECCIÓN: Limita la altura y aplica el fondo de lado a lado.
    <section id="inicio" className="relative flex min-h-screen w-full items-center justify-center bg-background pt-28 pb-16">

      {/* 2. CAPA CONTENEDORA: Evita que el contenido se esparza a los bordes. */}
      <div className={GLOBAL_CONTAINER}>

        {/* 3. CAPA DE LAYOUT: Centrado en mobile/tablet, grilla de dos columnas intacta en desktop (lg). */}
        <div className="grid w-full grid-cols-1 gap-10 items-center lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          
          {/* Left Content — Integrado con HeroIntroMotion */}
          <HeroIntroMotion
            logo={
              <div className="mb-2 text-lg font-bold text-secondary lg:text-2xl">
                {label}
              </div>
            }
            headlines={
              <div className="mb-4 space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-foreground lg:text-4xl">
                  {headline.main}{' '} <br />
                  <span className="text-primary">{headline.highlight}</span>
                </h1>
              </div>
            }
            rule={null}
            description={
              <p className="mb-3 lg:mb-6 max-w-md lg:max-w-lg text-sm sm:text-base text-center lg:text-justify leading-relaxed text-tertiary">
                {description}
              </p>
            }
            primaryCta={
              <a
                href={buttons.contact.href}
                target="_blank"
                className="rounded-lg border-2 border-primary px-4 py-2 text-sm font-medium text-primary transition-colors duration-300 hover:bg-primary hover:text-background"
              >
                {buttons.contact.label}
              </a>
            }
            secondaryCta={
              <a
                href={buttons.download_cv.href}
                download={buttons.download_cv.fileName}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-foreground transition-colors duration-300 hover:text-primary"
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
            }
          />

          {/* Right Image Container — Tamaño controlado y estético en mobile/tablet, completo en desktop */}
          <Entrance direction="right" delay={0.2} className="w-full flex justify-center lg:block">
            <div className="group relative mx-auto w-full max-w-[210px] sm:max-w-[250px] lg:max-w-none lg:self-start aspect-[4/5] lg:aspect-square">

              {/* Borde decorativo desplazado */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-2xl border-2 border-primary/30 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4 lg:group-hover:translate-x-5 lg:group-hover:translate-y-5" />

              {/* Contenedor principal de la imagen */}
              <div className="relative z-10 flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-colors duration-300 group-hover:border-white/20 shadow-xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 210px, (max-width: 1024px) 250px, 500px"
                  priority
                  className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
                />
              </div>
            </div>
          </Entrance>

        </div>
      </div>
    </section>
  );
}