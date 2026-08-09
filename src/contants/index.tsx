import React from "react";

export const HERO_SECTION_CONTENT = {
  label: "Dailin Romero",
  headline: {
    main: "Desarrolladora Web",
    highlight: "Full-Stack",
  },
  description: "Construyendo soluciones completas desde la interfaz de usuario hasta la lógica del servidor y gestión de datos. Buscando nuevas oportunidades laborales.",
  buttons: {
    contact: {
      label: "Ponte en contacto",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=dailinromero123@gmail.com&su=Contacto%20desde%20Portafolio.",
    },
    download_cv: {
      label: "Descargar CV",
      href: "/CV_dailin_romero.pdf",
      fileName: "cv_dailin_romero.pdf",
    },
  },
  image: {
    src: "/hero-pfp.png",
    alt: "Dailin Romero",
  },
};

export const EXPERIENCE_SECTION_CONTENT = {
  label: "TRAYECTORIA",
  headline: {
    main: "Experiencia laboral",
    // highlight: "& evolución",
  },
  experiences: [
    {
      id: "freelance",
      role: "Full Stack Developer",
      company: "Freelance",
      period: "Feb 2025 — May 2025",
      description:
        "Desarrollo integral de aplicaciones web a medida. Gestión del ciclo completo del proyecto, abarcando la construcción de interfaces dinámicas, lógica de servidor, bases de datos y diseño de APIs RESTful.",
      technologies: [
        "React",
        "Tailwind CSS",
        "TypeScript",
        "Zustand",
        // "React-hook-form",
        "Express",
        "Mongo DB",
        "Spring Boot",
        "MySQL",
      ],
    },
    {
      id: "czlabs",
      role: "Frontend & Web3 Developer",
      company: "cz labs",
      link: "https://czlabs.io/",
      period: "Jun 2025 — Jul 2026",
      description:
        "Formé parte de un equipo Frontend de dos personas junto a mi líder técnico, compartiendo la responsabilidad del ciclo de desarrollo. Nuestra misión fue construir y escalar diversas soluciones tecnológicas, abarcando plataformas web optimizadas con Next.js y aplicaciones móviles multiplataforma con React Native y Expo, implementando la capa de integración Web3 mediante solana-adapter kit para la conexión y gestión segura de wallets en ambos ecosistemas.",
      technologies: [
        "TypeScript",
        "Next.js",
        "React Native",
        "Expo",
        "Tailwind CSS",
        "Redux Toolkit",
        "Zustand",
        "Zod",
        "Solana Adapter",
        "Web3",
      ],
    },
  ],
};

export const PROJECTS_SECTION_CONTENT = {
  label: "Work",
  headline: {
    main: "Proyectos destacados",
    highlight: "destacados",
  },
  filters: [
    { id: "all",        label: "Todos" },
    { id: "czlabs",    label: "CZ Labs" },
    { id: "personal",  label: "Personales" },
  ],
  projects: [
    {
      id: "swap-api",
      category: "czlabs",
      type: "web" as const,
      role: "Frontend",
      title: "Carbium Swap API",
      description:
        "Plataforma de infraestructura Web3 en Solana. Ofrece un entorno interactivo para gestionar cotizaciones en tiempo real, enrutamiento multi-DEX y ejecución de swaps mediante una API optimizada y segura.",
      link: "https://api.carbium.io/",
      image: "/projects/80shots_so.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
    },
    {
      id: "safirum",
      category: "czlabs",
      type: "web" as const,
      role: "Frontend",
      title: "Safirum",
      description:
        "Plataforma web3 orientada a la infraestructura de moneda digital suiza. Proporciona rieles institucionales para la emisión regulada de stablecoins (CHF-S) con respaldo 1:1 en instituciones financieras de Nivel 1.",
      link: "https://www.safirum.com/",
      image: "/projects/462shots_so.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Redux Toolkit"],
    },
    {
      id: "onpharma",
      category: "czlabs",
      type: "web" as const,
      role: "Frontend",
      title: "Onpharma",
      description:
        "Plataforma Web3 (STO) orientada al sector salud. Gestiona el ciclo completo del inversor mediante una arquitectura de alto rendimiento que integra validación KYC, firma de documentos y la compra automatizada de acciones tokenizadas utilizando USDC sobre la red de Solana.",
      link: "https://onpharma.czlabs.io",
      image: "/projects/520shots_so.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
    },
    {
      id: "refdao-app",
      category: "czlabs",
      type: "mobile" as const,
      role: "Mobile Dev",
      title: "Refdao App",
      description:
        "App móvil Web3 para torneos de Flag Football que conecta árbitros y organizadores mediante perfiles RefID. Integra autenticación híbrida (OAuth/Wallets), pagos instantáneos en USDC sobre la red de Solana.",
        // "App móvil Web3 para torneos de Flag Football que conecta árbitros y organizadores mediante perfiles RefID para construir un historial profesional. Integra autenticación híbrida (OAuth/Wallets) y pagos instantáneos en USDC sobre la red de Solana.",
        
      link: "https://expo.dev/artifacts/eas/Ylzxs0QhkVnAigJoZBkrk2I_KdwALy1RrJiYo2t8Ym4.apk",
      image: "/projects/refdao-portada.png",
      technologies: ["React Native", "Expo", "Tailwind CSS", "Zustand", "TypeScript", "RHF", "Zod", ],
    },
    {
      id: "gestion-gastos",
      category: "personal",
      type: "web" as const,
      role: "Full Stack",
      title: 'Gestion de gastos',
      description: 'Aplicación web para la gestión integral de finanzas personales. Permite administrar ingresos, gastos y metas de ahorro a través de un dashboard interactivo con gráficos dinámicos para facilitar el análisis visual de los datos.',
      link: 'https://gestion-gastos-alpha.vercel.app/',
      image: '/projects/179shots_so.png',
      technologies: ["React", 'Tailwind CSS', 'Zustand', 'Express', 'Mongo DB', "Node.js", "Recharts", "RHF"],
    },
    {
      id: "blog",
      category: "personal",
      type: "web" as const,
      role: "Full Stack",
      title: 'Blog tecnopulse',
      description: "Blog interactivo centrado en tecnología y temas afines. Cuenta con un sistema completo para gestionar artículos propios, junto con funciones para seguir perfiles de interés, construir una colección de lecturas favoritas y recibir notificaciones de actividad.",
      link: 'https://tecnopulse.site/',
      image: '/projects/945shots_so.png',
      technologies :["React", 'Tailwind CSS', 'Express', 'Mongo DB', "Node.js"],
    },
     {
      id: "renta",
      category: "personal",
      type: "web" as const,
      role: "Full Stack",
      title: 'Declaracion de rentas',
      description: 'Web que permite facilitar el proceso de declaracion de rentas de una persona natural.',
      link: 'https://declaracion-renta.vercel.app/',
      image: '/projects/43shots_so.png',
      technologies: ["React", 'Tailwind CSS', 'Zustand', 'RHF', 'Zod' ],
    }
  ],
};


export const ABOUT_SECTION_CONTENT = {
  label: "Conóceme",
  headline: {
    main: "Sobre mí",
  },
  paragraphs: [
    "¡Hola! Soy Dailin. Llevo tres años inmersa en el ecosistema del desarrollo. Mi especialidad es el Frontend, creando interfaces dinámicas e intuitivas; a la par, domino el desarrollo Backend y las bases de datos a un nivel que me permite asumir con seguridad el ciclo completo de una solución Full Stack.",
    "En cuanto a mi formación técnica, cursé hasta el noveno semestre de Ingeniería de Sistemas en la Universidad del Magdalena, una base que he potenciado a través de mi experiencia profesional y la creación constante de proyectos independientes. Disfruto transformar requerimientos complejos en código limpio, escalable y listo para producción.",
  ],
  stats: [
    {
      id: "location",
      title: "Barranquilla",
      subtitle: "Colombia",
    },
    {
      id: "experience",
      title: "2 Años",
      subtitle: "De experiencia",
    },
    {
      id: "focus",
      title: "Web & Mobile",
      subtitle: "Ecosistema",
    },
  ],
  image: {
    src: "/about-pfp(2).png",
    alt: "Dailin Romero",
  },
};

export const FOOTER_CONTENT = {
  year: "2025.",
  copy_right: "Todos los derechos reservados.",
  full_name: "Dailin Romero"
}

export interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: (
     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    ),
    href: 'https://github.com/dailinr',
    label: 'GitHub',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
    href: 'https://www.linkedin.com/in/dailin-romero-7692281b9/',
    label: 'LinkedIn',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    ),
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=dailinromero123@gmail.com&su=Contacto%20desde%20Portafolio.',
    label: 'Gmail',
  },
];