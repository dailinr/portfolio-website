"use client";

// Importación de herramientas de animación de Framer Motion y la función de utilidad cn para clases
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/src/lib/utils";

/** Curva de aceleración suave (cubic-bezier) — el movimiento se nota elegante y natural */
export const ENTRANCE_EASE = [0.22, 1, 0.36, 1] as const;

// Configuración predeterminada del viewport para saber cuándo activar la animación al hacer scroll
export const entranceViewport = {
    once: true as const,         // La animación solo ocurre la primera vez que entra en pantalla
    amount: 0.18,                // Porcentaje del elemento que debe ser visible para disparar la animación
    margin: "0px 0px -72px 0px", // Margen de activación ajustado desde abajo
};

// Definición de las direcciones permitidas para el efecto de entrada
export type EntranceDirection = "left" | "right" | "up" | "down";

// Desplazamientos iniciales en píxeles según la dirección elegida antes de llegar a su posición final (0)
const offsets: Record<EntranceDirection, { x?: number; y?: number }> = {
    left: { x: -88 },
    right: { x: 88 },
    up: { y: 80 },
    down: { y: -72 },
};

// Tipado estricto en TypeScript para las propiedades que acepta el componente Entrance
type EntranceProps = {
    children: React.ReactNode;
    className?: string;
    direction?: EntranceDirection;
    delay?: number;
    duration?: number;
    amount?: number;
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "whileInView">;

/** Componente envoltorio reutilizable: aplica un efecto de fundido y deslizamiento cuando el elemento entra en vista. */
export default function Entrance({
    children,
    className,
    direction = "up",
    delay = 0,
    duration = 0.78,
    amount = 0.18,
    ...rest
}: EntranceProps) {
    // Hook de accesibilidad: detecta si el usuario prefiere reducir las animaciones en su sistema operativo
    const reduce = useReducedMotion();
    // Obtiene las coordenadas iniciales de desplazamiento según la dirección configurada
    const o = offsets[direction];

    // Si el usuario tiene activada la preferencia de reducción de movimiento, se renderiza un div estático sin animaciones
    if (reduce) {
        return <div className={className}>{children}</div>;
    }

    // Renderiza el contenedor animado utilizando Framer Motion
    return (
        <motion.div
            className={cn(className)}
            initial={{ opacity: 0, ...o }}                           // Estado inicial: totalmente invisible y desplazado según los offsets
            whileInView={{ opacity: 1, x: 0, y: 0 }}                 // Estado final al hacer scroll: opaco y ubicado en su posición original
            viewport={{ once: true, amount, margin: "0px 0px -72px 0px" }} // Reglas de activación basadas en la posición del scroll
            transition={{ duration, ease: ENTRANCE_EASE, delay }}    // Configuración de duración, curva de suavizado y retraso opcional
            {...rest}
        >
            {children}
        </motion.div>
    );
}