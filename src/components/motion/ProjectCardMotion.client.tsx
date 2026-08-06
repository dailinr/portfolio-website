"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { ENTRANCE_EASE, entranceViewport } from "@/src/components/motion/Entrance";

export default function ProjectCardMotion({
  children,
  className,
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
}) {
  const reduce = useReducedMotion();

  // Si el usuario prefiere reducir movimiento, se renderiza estáticamente
  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  // Alternar dirección según la columna: 
  // Pares (columna izquierda) entran desde la izquierda (-60px)
  // Impares (columna derecha) entran desde la derecha (60px)
  const isEven = index % 2 === 0;
  const initialX = isEven ? -60 : 60;

  const cardVariant: Variants = {
    hidden: { opacity: 0, x: initialX, y: 20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, ease: ENTRANCE_EASE },
    },
  };

  return (
    <motion.div
      className={className}
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={entranceViewport}
    >
      {children}
    </motion.div>
  );
}