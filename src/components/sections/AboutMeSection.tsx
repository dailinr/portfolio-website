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
        <Entrance direction="up" className="mb-10 flex flex-col items-start">
          <span className={SECTION_LABEL}>
            {label}
          </span>
          <h2 className={SECTION_HEADLINE}>
            {headline.main}
          </h2>
        </Entrance>

        {/* === GRID PRINCIPAL (2 Columnas en Desktop) === */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          
          {/* COLUMNA IZQUIERDA: Textos e Ítems (Entrada desde la izquierda) */}
          <AboutContentMotion direction="left" className="flex flex-col">
            
            {/* Textos */}
            <div className="mb-6 flex flex-col gap-5">
              <p className={EXPERIENCE_BODY}>
                {paragraphs[0]}
              </p>
              <p className={EXPERIENCE_BODY}>
                {paragraphs[1]}
              </p>
            </div>

            {/* Ítems (Estilo Stats) */}
            <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-6 sm:grid-cols-3">
              
              {stats.map((stat) => (
                <div className="flex flex-col gap-1" key={stat.id}> 
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
          <AboutContentMotion direction="right" className="group relative mx-auto w-full max-w-sm lg:max-w-none lg:self-start aspect-[4/5] lg:aspect-square">
            
            {/* Borde decorativo desplazado con z-20 para obligarlo a estar SIEMPRE por encima */}
            <div className="absolute inset-0 z-25 pointer-events-none translate-x-4 translate-y-4 rounded-2xl border-2 border-primary/30 transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-5" />
            
            {/* Contenedor principal de la imagen con z-10 para que se mantenga debajo del borde */}
            <div className="relative z-10 flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm transition-colors duration-300 group-hover:border-white/20">
              <Image 
                src={image.src} 
                alt={image.alt} 
                fill 
                className="object-cover"
              /> 
            </div>
          </AboutContentMotion>

        </div>
      </div>
    </section>
  );
}