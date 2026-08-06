"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { ENTRANCE_EASE, entranceViewport } from "@/src/components/motion/Entrance";

// Variante para animar elementos deslizándose desde un lateral específico
const slideFromVariant = (direction: "left" | "right"): Variants => {
  const xOffset = direction === "left" ? -60 : 60;
  return {
    hidden: { opacity: 0, x: xOffset },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.78, ease: ENTRANCE_EASE },
    },
  };
};

export default function AboutContentMotion({
  children,
  className,
  direction = "left",
}: {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right";
}) {
  const reduce = useReducedMotion();

  // Si el usuario prefiere reducir el movimiento, se renderiza estáticamente
  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={slideFromVariant(direction)}
      initial="hidden"
      whileInView="visible"
      viewport={entranceViewport}
    >
      {children}
    </motion.div>
  );
}