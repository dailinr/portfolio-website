"use client"

// Importación de librerías de animación (GSAP), scroll suave (Lenis) y hooks de React
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useState, type ReactNode } from "react";

// Registramos el plugin ScrollTrigger para que GSAP detecte las posiciones del scroll
gsap.registerPlugin(ScrollTrigger);

const LENIS_EASING = (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t));

// Configuración global de la inercia, velocidad y comportamiento del scroll con Lenis
const LENIS_OPTIONS = {
  autoRaf: true,
  // Softer, slower glide — tuned for fewer landing sections.
  lerp: 0.055,
  smoothWheel: true,
  wheelMultiplier: 0.68,
  touchMultiplier: 0.85,
  stopInertiaOnNavigate: true,
  anchors: {
    duration: 1.35,
    lerp: 0.08,
    easing: LENIS_EASING,
    offset: 80,
  },
} as const;


// Componente puente (Bridge) para sincronizar el scroll fluido de Lenis con las animaciones de GSAP
function LenisScrollTriggerBridge() {
    const lenis = useLenis();

    useEffect(() => {
        if (!lenis) return;

        // Cada vez que Lenis detecta movimiento, actualiza los disparadores de GSAP
        const onScroll = () => {
            ScrollTrigger.update();
        };

        lenis.on("scroll", onScroll);
        return () => {
            lenis.off("scroll", onScroll);
        };
    }, [lenis]);
    
    // Este componente no renderiza nada visualmente en el DOM
    return null;
}

// Componente proveedor principal que envolverá toda la aplicación web
export default function SmoothScrollProvider(
    { children } : { children: ReactNode} 
) {
    // Estado para controlar la hidratación y evitar errores entre servidor y cliente
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    // Si la página aún no se ha cargado en el cliente, muestra el contenido normal
    if (!hydrated) {
        return <>{children}</>;
    }

    // En pantallas de celulares (<768px) desactivamos Lenis y dejamos el scroll nativo por rendimiento
    if (
        typeof window !== "undefined" &&
        (window.innerWidth < 768 ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    ) {
        return <>{children}</>;
    }
    // En computadoras de escritorio, activamos el proveedor de Lenis y su puente con GSAP
    return (
        <ReactLenis root options={LENIS_OPTIONS}>
            <LenisScrollTriggerBridge />
            {children}
        </ReactLenis>
    );
}