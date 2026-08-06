"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { PROJECTS_SECTION_CONTENT } from "@/src/contants/index";
import {
  GLOBAL_CONTAINER,
  STANDARD_SECTION_PY,
  SECTION_LABEL,
  SECTION_HEADLINE,
  PROJECT_FILTER_PILL,
  PROJECT_FILTER_PILL_ACTIVE,
  PROJECT_CARD,
  PROJECT_CARD_IMAGE_WRAPPER,
  PROJECT_CARD_TITLE,
  PROJECT_CARD_BODY,
  PROJECT_ROLE_BADGE,
  PROJECT_TECH_BADGE,
} from "@/src/contants/layout";

const PAGE_SIZE = 6;
const { label, headline, filters, projects } = PROJECTS_SECTION_CONTENT;

type Project = (typeof projects)[number];

// ─── Ícono de flecha diagonal ─────────────────────────────────────────────────
function ArrowIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 text-foreground"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

// ─── Skeleton card: mismas proporciones que las cards reales ──────────────────
function SkeletonCard() {
  return (
    <div className="flex animate-pulse flex-col gap-5">
      <div className="aspect-16/10 w-full rounded-2xl bg-white/6" />
      <div className="flex flex-col gap-3">
        <div className="h-5 w-3/4 rounded-md bg-white/7" />
        <div className="h-3.5 w-full rounded-md bg-white/5" />
        <div className="h-3.5 w-5/6 rounded-md bg-white/5" />
        <div className="mt-1 flex gap-2">
          <div className="h-5 w-14 rounded-full bg-white/5" />
          <div className="h-5 w-16 rounded-full bg-white/5" />
        </div>
      </div>
    </div>
  );
}

// ─── Área de imagen compartida ────────────────────────────────────────────────
function CardImageArea({ project }: { project: Project }) {
  return (
    <div className={`${PROJECT_CARD_IMAGE_WRAPPER} relative aspect-video`}>
      {project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="select-none text-xs text-white/20">{project.title}</span>
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-background/60 to-transparent" />
      
      {/* El ícono de flecha solo se muestra si existe un link en la data */}
      {(project as any).link && (
        <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/40 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <ArrowIcon />
        </div>
      )}
    </div>
  );
}

// ─── Card genérica — mismo token y tamaño para WEB y MOBILE ──────────────────
function ProjectCard({ project, anchorRef }: { project: Project; anchorRef?: React.Ref<any> }) {
  const cardContent = (
    <>
      <CardImageArea project={project} />

      {/* Cuerpo — idéntico para ambos tipos */}
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className={PROJECT_CARD_TITLE}>{project.title}</h3>
          <span className={`${PROJECT_ROLE_BADGE} mt-0.5 shrink-0`}>{project.role}</span>
        </div>
        <p className={PROJECT_CARD_BODY}>{project.description}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          {project.technologies.map((tech) => (
            <span key={tech} className={PROJECT_TECH_BADGE}>{tech}</span>
          ))}
        </div>
      </div>
    </>
  );

  // Si el proyecto tiene link, envolvemos la card en <a>
  if ((project as any).link) {
    return (
      <a
        href={(project as any).link}
        target="_blank"
        rel="noopener noreferrer"
        ref={anchorRef}
        className={`${PROJECT_CARD} group block cursor-pointer animate-fade-in transition-colors`}
      >
        {cardContent}
      </a>
    );
  }

  // Si no tiene link, mantenemos el comportamiento por defecto
  return (
    <article ref={anchorRef} className={`${PROJECT_CARD} group animate-fade-in`}>
      {cardContent}
    </article>
  );
}

// ─── Componente principal ──────────────────────────────────────────────────────
export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [isLoading, setIsLoading] = useState(false);
  // Ref apuntará al primer card nuevo tras cargar más
  const firstNewCardRef = useRef<HTMLElement>(null);

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  // Resetear paginación al cambiar filtro
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [activeFilter]);

  function handleLoadMore() {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + PAGE_SIZE);
      setIsLoading(false);
      // Scroll suave hacia el primer card nuevo
      setTimeout(() => {
        firstNewCardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 10);
    }, 200);
  }

  // Índice del primer card "nuevo" (el que sigue al último visible antes de cargar)
  const firstNewIndex = visibleCount - PAGE_SIZE;

  return (
    <section id="projects" className={`relative w-full bg-background ${STANDARD_SECTION_PY}`}>
      <div className={GLOBAL_CONTAINER}>

        {/* ── Encabezado ── */}
        <div className="mb-8 flex flex-col items-start md:flex-row md:items-end md:justify-between">
          <div>
            <span className={SECTION_LABEL}>{label}</span>
            <h2 className={SECTION_HEADLINE}>
              {headline.main}
              {/* <span className="text-secondary">{headline.highlight}</span> */}
            </h2>
          </div>
        </div>

        {/* ── Pills de Filtro ── */}
        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={activeFilter === f.id ? PROJECT_FILTER_PILL_ACTIVE : PROJECT_FILTER_PILL}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* ── Grid de Tarjetas ── */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14">
          {visible.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              // Le pasamos el ref solo al primer card nuevo para el scroll
              anchorRef={i === firstNewIndex && firstNewIndex > 0 ? firstNewCardRef : undefined}
            />
          ))}

          {/* Skeletons: aparecen en el grid mientras carga, mismo número que cargará */}
          {isLoading &&
            Array.from({ length: Math.min(PAGE_SIZE, filtered.length - visibleCount) }).map((_, i) => (
              <SkeletonCard key={`sk-${i}`} />
            ))}
        </div>

        {/* ── Botón "Ver más" — visible cuando hay más y no está cargando ── */}
        {hasMore && !isLoading && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-white/10 bg-white/4 px-7 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-white/7 hover:text-primary"
            >
              {/* Glow amarillo en hover */}
              <span className="absolute inset-0 rounded-full bg-primary/0 transition-all duration-300 group-hover:bg-primary/5" />
              <span className="relative">Ver más proyectos</span>
              {/* Bolita con flecha que baja ligeramente en hover */}
              <span className="relative flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:border-primary/30">
                <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
          </div>
        )}

        {/* ── Loader: barra deslizante amarilla + texto ── */}
        {isLoading && (
          <div className="mt-10 flex flex-col items-center gap-3">
            <div className="h-px w-48 overflow-hidden rounded-full bg-white/10">
              <div className="h-full animate-loading-bar rounded-full bg-primary" />
            </div>
            <span className="text-xs text-secondary/60">Cargando proyectos...</span>
          </div>
        )}

      </div>
    </section>
  );
}