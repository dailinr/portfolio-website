import Image from "next/image";
import {
  GLOBAL_CONTAINER,
  STANDARD_SECTION_PY,
  SECTION_LABEL,
  SECTION_HEADLINE,
  EXPERIENCE_BODY,
  ABOUT_STATS_TITLE,
  ABOUT_STATS_SUBTITLE,
} from "@/src/contants/layout"; // Ajusta esta ruta según la estructura de tu proyecto
import { ABOUT_SECTION_CONTENT } from "@/src/contants/index";
import Entrance from "@/src/components/motion/Entrance";
import AboutContentMotion from "@/src/components/motion/AboutContentMotion.client";

export default function AboutSection() {
  const { label, headline, paragraphs, stats, image } = ABOUT_SECTION_CONTENT;

  return (
    <section id="about" className={`relative w-full bg-background ${STANDARD_SECTION_PY}`}>
      <div className={GLOBAL_CONTAINER}>
        
        {/* === HEADER DE LA SECCIÓN === */}
        <Entrance direction="up" className="mb-8 lg:mb-10 flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className={SECTION_LABEL}>
            {label}
          </span>
          <h2 className={SECTION_HEADLINE}>
            {headline.main}
          </h2>
        </Entrance>

        {/* === GRID PRINCIPAL (1 Columna en Mobile/Tablet, 2 Columnas en Desktop) === */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          
          {/* COLUMNA IZQUIERDA: Textos e Ítems (Entrada desde la izquierda) */}
          <AboutContentMotion direction="left" className="flex flex-col items-center lg:items-start lg:text-left">
            
            {/* Textos */}
            <div className="mb-6 flex flex-col gap-4 lg:gap-5">
              <p className={EXPERIENCE_BODY}>
                {paragraphs[0]}
              </p>
              <p className={EXPERIENCE_BODY}>
                {paragraphs[1]}
              </p>
            </div>

            {/* Ítems (Estilo Stats) — Forzados en 1 sola fila limpia en mobile/tablet y 3 columnas en desktop */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 border-t border-white/10 pt-6 w-full">
              
              {stats.map((stat) => (
                <div className="flex flex-col gap-1 items-center lg:items-start" key={stat.id}> 
                  <span className={` ${ABOUT_STATS_TITLE} ${stat.id === "experience" ? 'text-primary' : 'text-foreground'}` }>
                    {stat.title}
                  </span>
                  <span className={ABOUT_STATS_SUBTITLE}>
                    {stat.subtitle}
                  </span>
                </div>
              ))}

            </div>
          </AboutContentMotion>

          {/* COLUMNA DERECHA: Imagen / Ilustración (Entrada desde la derecha) */}
          <AboutContentMotion direction="right" className="group relative mx-auto w-full max-w-[210px] sm:max-w-[250px] lg:max-w-none lg:self-start aspect-[4/5] lg:aspect-square">
            
            {/* Contenedor principal de la imagen con z-10 para que se mantenga debajo del borde */}
            <div className="relative z-10 flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm transition-colors duration-300 group-hover:border-white/20 shadow-xl">
              <Image 
                src={image.src} 
                alt={image.alt} 
                fill 
                priority
                sizes="(max-width: 640px) 210px, (max-width: 1024px) 250px, 500px"
                className="object-cover"
              /> 
            </div>

            {/* Borde decorativo desplazado con z-20 y sombra recuperada */}
            <div className="absolute inset-0 z-20 pointer-events-none translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-2xl border-2 border-primary/30 shadow-lg shadow-primary/10 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4 lg:group-hover:translate-x-5 lg:group-hover:translate-y-5" />
            
          </AboutContentMotion>

        </div>
      </div>
    </section>
  );
}