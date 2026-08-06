"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { ENTRANCE_EASE } from "@/src/components/motion/Entrance";

// Configuración del escalonamiento (stagger) para los elementos hijos
const heroStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.12 },
  },
};

// Animación de entrada general de arriba hacia abajo con fundido
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.78, ease: ENTRANCE_EASE },
  },
};

// Animación específica para los botones de acción (CTA)
const btnFade: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: ENTRANCE_EASE },
  },
};

export type HeroIntroMotionProps = {
  logo: ReactNode;
  headlines: ReactNode;
  rule?: ReactNode;
  description: ReactNode;
  primaryCta: ReactNode;
  secondaryCta: ReactNode;
};

export default function HeroIntroMotion({
  logo,
  headlines,
  rule,
  description,
  primaryCta,
  secondaryCta,
}: HeroIntroMotionProps) {
  const reduce = useReducedMotion();

  // Si el usuario prefiere reducir movimiento, se renderiza estáticamente por accesibilidad
  if (reduce) {
    return (
      <div className="flex flex-col w-full">
        <div>{logo}</div>
        <div>{headlines}</div>
        {rule && <div>{rule}</div>}
        <div>{description}</div>
        <div className="flex flex-col gap-4 pt-4 sm:flex-row">
          {primaryCta}
          {secondaryCta}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="flex flex-col w-full"
      variants={heroStagger}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={fadeUp}>{logo}</motion.div>
      <motion.div variants={fadeUp}>{headlines}</motion.div>
      {rule && <motion.div variants={fadeUp}>{rule}</motion.div>}
      <motion.div variants={fadeUp}>{description}</motion.div>

      <motion.div
        variants={heroStagger}
        className="flex flex-col gap-4 pt-4 sm:flex-row"
      >
        <motion.div variants={btnFade} className="inline-flex">
          {primaryCta}
        </motion.div>
        <motion.div variants={btnFade} className="inline-flex">
          {secondaryCta}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}