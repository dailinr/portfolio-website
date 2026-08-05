import Image from "next/image";
import { EXPERIENCE_SECTION_CONTENT } from "@/src/contants/index";
import {
  GLOBAL_CONTAINER,
  STANDARD_SECTION_PY,
  EXPERIENCE_BADGE,
  EXPERIENCE_BODY,
  EXPERIENCE_COMPANY_HEADLINE,
  EXPERIENCE_ROLE_HEADLINE,
  SECTION_HEADLINE,
  SECTION_LABEL,
  TIMELINE_DOT,
  TIMELINE_LINE,
} from "@/src/contants/layout";
import Link from "next/link";

export default function ExperienceSection() {
  const { label, headline, experiences } = EXPERIENCE_SECTION_CONTENT;

  return (
    <section id="experience" className={`relative w-full bg-background ${STANDARD_SECTION_PY}`}>
      <div className={GLOBAL_CONTAINER}>

        <div className="mb-10 flex flex-col items-start">
          <span className={SECTION_LABEL}>{label}</span>
          <h2 className={SECTION_HEADLINE}>
            {headline.main}
            {/* <span className="text-secondary">{headline.highlight}</span> */}
          </h2>
        </div>

        <div className={TIMELINE_LINE}>
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pb-12 pl-6 md:pl-10">

              <div className={TIMELINE_DOT} aria-hidden="true" />

              <div className="flex flex-col-reverse items-start justify-between gap-6 md:flex-row md:gap-10">

                {/* Columna Izquierda: Información */}
                <div className="flex-1 flex flex-col">
                  <h3 className={EXPERIENCE_ROLE_HEADLINE}>{exp.role}</h3>
                  {exp.link ? (
                    <Link 
                      href={exp.link} target="_blank" rel="noopener noreferrer" 
                      className={`${EXPERIENCE_COMPANY_HEADLINE} underline decoration-1 decoration-transparent underline-offset-8 hover:decoration-current hover:underline-offset-4 transition-all duration-300 hover:text-foreground/80`} 
                    > 
                      {exp.company} 
                    </Link>
                  ) : <h4 className={EXPERIENCE_COMPANY_HEADLINE}>{exp.company}</h4> }
                  <p className={EXPERIENCE_BODY}>{exp.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className={EXPERIENCE_BADGE}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Columna Derecha: Fecha + Logo */}
                <div className="mt-1 flex shrink-0 flex-col gap-2 md:mt-0 md:items-end">
                  <span className="text-sm font-medium tracking-wide text-secondary/80">
                    {exp.period}
                  </span>


                  {/* Logo: cuadrado, fondo oscuro, borde glassmorphism */}
                  {exp.link ? (
                    <Link
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer" // Buena práctica de seguridad para target="_blank"
                      className="relative h-28 w-28 overflow-hidden rounded-xl border border-white/10 bg-black/60 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_4px_24px_rgba(0,0,0,0.5)] backdrop-blur-md transition-transform duration-300 hover:scale-[1.04]"
                    >
                      <Image
                        src={`/logos-empresas/${exp.id}.png`}
                        alt={`Logo de ${exp.company}`}
                        fill
                        sizes="112px"
                        className={`object-contain ${exp.id === "czlabs" ? 'p-5' : 'p-7'}`}
                      />
                    </Link>
                  ) : (
                    <div
                      className="relative h-28 w-28 overflow-hidden rounded-xl border border-white/10 bg-black/60 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_4px_24px_rgba(0,0,0,0.5)] backdrop-blur-md"
                    >
                      <Image
                        src={`/logos-empresas/${exp.id}.png`}
                        alt={`Logo de ${exp.company}`}
                        fill
                        sizes="112px"
                        className={`object-contain ${exp.id === "czlabs" ? 'p-5' : 'p-7'}`}
                      />
                    </div>
                  )}

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}