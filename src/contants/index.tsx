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
      period: "Nov 2024 — May 2025",
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


export const ABOUT_SECTION_CONTENT = {
  label: "Conóceme",
  headline: {
    main: "Sobre mí",
  },
  paragraphs: [
    "¡Hola! Soy Dailin. Llevo cuatro años inmersa en el ecosistema del desarrollo. Mi especialidad es el Frontend, creando interfaces dinámicas e intuitivas; a la par, domino el desarrollo Backend y las bases de datos a un nivel que me permite asumir con seguridad el ciclo completo de una solución Full Stack.",
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
      title: "4 Años",
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