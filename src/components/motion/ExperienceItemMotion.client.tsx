"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { ENTRANCE_EASE, entranceViewport } from "@/src/components/motion/Entrance";

// Variante de animación para cada elemento de la experiencia al entrar en el viewport
const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.78, ease: ENTRANCE_EASE },
  },
};

export default function ExperienceItemMotion({ 
  children, 
  className 
}: { 
  children: ReactNode; 
  className?: string 
}) {
  const reduce = useReducedMotion();

  // Si el usuario prefiere reducir movimiento, renderizamos de forma estática
  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={entranceViewport}
    >
      {children}
    </motion.div>
  );
}