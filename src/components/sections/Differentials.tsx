"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Truck,
  BrickWall,
  Package,
  Handshake,
  Award,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { DifferentialItem } from "@/types";

const differentials: DifferentialItem[] = [
  {
    icon: Factory,
    title: "Produção própria",
    description:
      "Controle total do processo produtivo, da extração da argila à expedição.",
  },
  {
    icon: Truck,
    title: "Entrega programada",
    description:
      "Logística eficiente com entregas pontuais para obras em toda a região.",
  },
  {
    icon: BrickWall,
    title: "Alta resistência",
    description:
      "Tijolos com excelente resistência mecânica e acabamento uniforme.",
  },
  {
    icon: Package,
    title: "Grandes volumes",
    description:
      "Capacidade produtiva para atender construtoras e obras de grande porte.",
  },
  {
    icon: Handshake,
    title: "Atendimento especializado",
    description:
      "Equipe comercial dedicada para construtoras e obras.",
  },
  {
    icon: Award,
    title: "Qualidade garantida",
    description:
      "Mais de 13 anos de tradição com padrão rigoroso de qualidade.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Differentials() {
  return (
    <AnimatedSection className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Por que escolher a Cerâmica Leide?"
          subtitle="Combinamos tradição, tecnologia e compromisso para entregar o melhor tijolo cerâmico da região."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {differentials.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group rounded-2xl border border-dark/5 bg-light p-8 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <item.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-dark">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-dark/60">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
