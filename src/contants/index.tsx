export const EXPERIENCE_SECTION_CONTENT = {
  label: "Experiencia",
  headline: {
    main: "Hitos profesionales ",
    highlight: "& impacto",
  },
  experiences: [
    {
      id: "freelance",
      role: "Full Stack Developer",
      company: "Freelance",
      period: "Apr 2024 — May 2025",
      description:
        "Desarrollo de interfaces de usuario modernas y escalables. Implementación de arquitecturas frontend fluidas enfocadas en la optimización del rendimiento y la experiencia del usuario, integrando lógicas de estado global complejas y consumos de APIs eficientes.",
      technologies: [
        "React",
        "TypeScript",
        "Express",
        "Mongo DB",
        "Spring Boot",
        "MySQL",
      ],
    },
    {
      id: "czlabs",
      role: "Frontend Dev & UI/UX Designer",
      company: "CZ LABS",
      period: "Jun 2025 — Jul 2026",
      description:
        "Desarrollo de interfaces de usuario modernas y escalables. Implementación de arquitecturas frontend fluidas enfocadas en la optimización del rendimiento y la experiencia del usuario, integrando lógicas de estado global complejas y consumos de APIs eficientes.",
      technologies: [
        "Next.js",
        "React Native",
        "TypeScript",
        "Redux Toolkit",
        "Tailwind CSS",
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
      role: "Frontend Lead",
      title: "Swap API Platform",
      description:
        "Panel de gestión de endpoints REST con playground interactivo, autenticación por API Key y métricas en tiempo real para equipos técnicos.",
      image: "/projects/80shots_so.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    },
    {
      id: "rpc-carbium",
      category: "czlabs",
      type: "web" as const,
      role: "Full-Stack",
      title: "RPC Carbium Dashboard",
      description:
        "Dashboard empresarial de monitoreo ambiental con gráficas dinámicas, reportes exportables y sistema de alertas configurables.",
      image: "/projects/462shots_so.png",
      technologies: ["React", "TypeScript", "Recharts", "Node.js"],
    },
    {
      id: "mobile-app",
      category: "czlabs",
      type: "web" as const,
      role: "Mobile Dev",
      title: "Mobile App CZ",
      description:
        "Aplicación móvil multiplataforma con flujos de autenticación, gestión de estado global y consumo de APIs.",
      image: "/projects/refdao-portada.png",
      images: [
        "/projects/refdao-screen.png",
        "/projects/refdao-torneo.png",
        "/projects/refdao-arbitros.png",
      ],
      technologies: ["React Native", "Expo", "Redux Toolkit", "TypeScript"],
    },
    {
      id: "portfolio",
      category: "personal",
      type: "web" as const,
      role: "Design & Dev",
      title: "Portfolio Personal",
      description:
        "Este mismo sitio. Landing page de alto rendimiento con diseño premium, arquitectura modular y sistema de tokens de diseño.",
      image: "/projects/520shots_so.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      id: "ecommerce",
      category: "personal",
      type: "web" as const,
      role: "Full-Stack",
      title: "E-Commerce Fullstack",
      description:
        "Tienda en línea con carrito de compras, pasarela de pago y panel de administración de inventario y pedidos.",
      image: "/projects/ecommerce.png",
      technologies: ["React", "Express", "MongoDB", "Stripe"],
    },
    {
      id: "task-manager",
      category: "personal",
      type: "web" as const,
      role: "Full-Stack",
      title: "Task Manager App",
      description:
        "Gestor de tareas colaborativo con arrastrar y soltar, notificaciones y sincronización en tiempo real.",
      image: "/projects/task-manager.png",
      technologies: ["React", "Socket.io", "Node.js", "MySQL"],
    },
  ],
};
