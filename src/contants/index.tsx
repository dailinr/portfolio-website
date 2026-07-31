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
      period: "Nov 2024 — May 2025",
      description:
        "Desarrollo integral de aplicaciones web a medida. Gestión del ciclo completo del proyecto, abarcando la construcción de interfaces dinámicas, lógica de servidor, bases de datos y diseño de APIs RESTful.",
      technologies: [
        "React",
        "Tailwind CSS",
        "TypeScript",
        "Zustand",
        "React-hook-form",
        "Express",
        "Mongo DB",
        "Spring Boot",
        "MySQL",
      ],
    },
    {
      id: "czlabs",
      role: "Frontend & Web3 Developer",
      company: "CZ labs",
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
    main: "Proyectos ",
    highlight: "destacados",
  },
  filters: [
    { id: "all",        label: "Todos" },
    { id: "czlabs",    label: "CZ Labs" },
    { id: "personal",  label: "Personales / Freelance" },
  ],
  projects: [
    {
      id: "swap-api",
      category: "czlabs",
      type: "web" as const,
      role: "Frontend",
      title: "Carbium Swap API",
      description:
        "Interfaz para una API REST en la blockchain de Solana. Permite la gestión de cotizaciones en tiempo real, ejecución de transacciones y enrutamiento inteligente multi-DEX bajo infraestructura suiza de alta seguridad.",
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
        "Plataforma web orientada a la infraestructura de moneda digital suiza. Proporciona rieles institucionales para la emisión regulada de stablecoins (CHF-S) con respaldo 1:1 en instituciones financieras de Nivel 1.",
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
        "Landing page de alto rendimiento para una plataforma de inversión en acciones tokenizadas del sector salud. Desarrollada con arquitectura modular y optimización visual aislando elementos gráficos de fondo de manera individual.",
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
        "Aplicación móvil multiplataforma que integra flujos de autenticación seguros mediante Google OAuth, gestión eficiente del estado global y consumo escalable de APIs.",
      link: "https://expo.dev/accounts/dailinr27/projects/refdao-app/builds/e6933414-7bd5-4e4a-8043-0956b8bc6e30",
      image: "/projects/refdao-portada.png",
      technologies: ["React Native", "Expo", "Tailwind CSS", "Zustand", "TypeScript", "RHF", "Zod", ],
    },
    {
      id: "gestion-gastos",
      category: "personal",
      type: "web" as const,
      role: "Full Stack",
      title: 'Gestion de gastos',
      description: 'LLeva un control de tus gastos, ingresos y metas de ahorro. En el dashboard, los datos se visualizan mediante gráficos y diagramas para darle al usuario una mejor comprensión. ',
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
      description: 'Los usuarios pueden registrarse y publicar, editar o eliminar artículos sobre tecnología y temas afines. También es posible seguir perfiles a su preferencia de contenido, guardar sus articulos favoritos, recibir notificaciones de actividad, etc.',
      link: 'https://tecnopulse.lat/',
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
