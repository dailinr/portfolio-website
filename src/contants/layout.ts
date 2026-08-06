/**
 * 1. LIMITADORES DE PANTALLA GLOBALES (Container Pattern)
 */
export const GLOBAL_CONTAINER =
  "mx-auto w-full max-w-4xl px-5 sm:px-8" as const; 

/**
 * 2. RITMO VERTICAL DE SECCIONES (Vertical Rhythm)
 */
export const STANDARD_SECTION_PY =
  "py-14 scroll-mt-20" as const; 

// =================================================================
// TÍTULOS Y CABECERAS DE SECCIÓN GLOBALES
// =================================================================
export const SECTION_LABEL =
  "text-secondary uppercase tracking-[0.20em] text-xs font-bold mb-1.5" as const; 

export const SECTION_HEADLINE =
  "text-3xl font-bold tracking-tight text-foreground" as const;

// =================================================================
// TOKENS ESPECÍFICOS DE LA LÍNEA DE TIEMPO (Experience)
// =================================================================
export const TIMELINE_LINE =
  "relative border-l border-white/10 ml-3" as const;

export const TIMELINE_DOT =
  "absolute -left-[7px] top-2 w-3 h-3 bg-primary rounded-full" as const; 

export const EXPERIENCE_ROLE_HEADLINE =
  "text-xl font-bold text-primary mb-1" as const; 

export const EXPERIENCE_COMPANY_HEADLINE =
  "text-lg font-semibold text-foreground mb-2" as const; 

export const EXPERIENCE_BODY =
  "text-base text-tertiary text-left md:text-justify leading-relaxed max-w-2xl text-pretty mb-2 " as const; 

export const EXPERIENCE_BADGE =
  "px-3 py-1 text-xs font-semibold border border-white/10 rounded-full text-foreground bg-white/5" as const;

// =================================================================
// TOKENS ESPECÍFICOS DE PROYECTOS (Projects)
// =================================================================

/** Pill de filtro — estado inactivo */
export const PROJECT_FILTER_PILL =
  "px-4 py-1.5 text-xs font-semibold rounded-full border border-white/10 bg-white/5 text-secondary transition-all duration-200 hover:border-primary/40 hover:text-foreground cursor-pointer" as const;

/** Pill de filtro — estado activo */
export const PROJECT_FILTER_PILL_ACTIVE =
  "px-4 py-1.5 text-xs font-semibold rounded-full border border-primary/50 bg-primary/10 text-primary cursor-pointer" as const;

/** Tarjeta de proyecto — contenedor principal */
export const PROJECT_CARD =
  "group relative flex flex-col gap-5 transition-all duration-300" as const;

/** Zona de imagen del proyecto */
export const PROJECT_CARD_IMAGE_WRAPPER =
  "relative w-full overflow-hidden rounded-2xl bg-white/[0.02]" as const;

/** Título de la card de proyecto */
export const PROJECT_CARD_TITLE =
  "text-xl font-bold text-foreground" as const;

/** Descripción de la card de proyecto */
export const PROJECT_CARD_BODY =
  "text-sm text-tertiary text-left md:text-justify leading-relaxed text-pretty" as const;

/** Badge de rol dentro de la card (Lead Engineer, Full-Stack...) */
export const PROJECT_ROLE_BADGE =
  "px-2.5 py-0.5 text-[11px] font-semibold rounded-md border border-primary/30 bg-primary/10 text-primary" as const;

/** Badge de tecnología — igual al de Experience para consistencia */
export const PROJECT_TECH_BADGE =
  "px-2.5 py-0.5 text-[10px] font-semibold border border-white/10 rounded-full text-foreground bg-white/5" as const;

/** Tarjeta de proyecto MOBILE — ocupa las 2 columnas, fondo gris oscuro */
export const PROJECT_MOBILE_CARD =
  "group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#1E2028] transition-all duration-300 hover:border-white/15" as const;

/** Marco del teléfono dentro del grid mobile */
export const PROJECT_MOBILE_PHONE_FRAME =
  "relative flex flex-col overflow-hidden rounded-[2rem] border-[3px] border-white/15 bg-[#141518] shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-transform duration-300" as const;


// ----------------- ABOUT ME ----------------------

export const ABOUT_STATS_TITLE = 
  "text-lg font-bold" as const;

export const ABOUT_STATS_SUBTITLE = 
  "text-[11px] font-semibold tracking-wider text-secondary uppercase" as const;