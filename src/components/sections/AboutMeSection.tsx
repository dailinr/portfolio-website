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
import { ABOUT_SECTION_CONTENT } from "@/src/contants/index"

export default function AboutSection() {
  const { label, headline, paragraphs, stats, image } = ABOUT_SECTION_CONTENT

  return (
    <section id="about" className={`relative w-full bg-background ${STANDARD_SECTION_PY}`}>
      <div className={GLOBAL_CONTAINER}>
        
        {/* === HEADER DE LA SECCIÓN === */}
        <div className="mb-10 flex flex-col items-start animate-fade-in">
          <span className={SECTION_LABEL}>
            {label}
          </span>
          <h2 className={SECTION_HEADLINE}>
            {headline.main}
          </h2>
        </div>

        {/* === GRID PRINCIPAL (2 Columnas en Desktop) === */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          
          {/* COLUMNA IZQUIERDA: Textos e Ítems */}
          <div className="flex flex-col animate-fade-in" style={{ animationDelay: "0.1s" }}>
            
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
          </div>

          {/* COLUMNA DERECHA: Imagen / Ilustración */}
          <div className="group relative mx-auto w-full max-w-sm lg:max-w-none lg:self-start aspect-[4/5] lg:aspect-square animate-fade-in" style={{ animationDelay: "0.2s" }}>
            
            {/* Borde decorativo desplazado (Efecto offset inspirado en tus referencias) */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border-2 border-primary/30 transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-5" />
            
            {/* Contenedor principal de la imagen */}
            <div className="relative z-10 flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10  backdrop-blur-sm transition-colors duration-300 group-hover:border-white/20">
              <Image 
                src={"/photo-perfil-Photoroom.png"} 
                alt="Dailin Romero" 
                fill 
                className="object-cover "
              /> 
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}