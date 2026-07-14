"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ProcessStep } from "@/types";

const steps: ProcessStep[] = [
  {
    step: 1,
    title: "Extração da argila",
    description:
      "Seleção e extração de argila de alta qualidade em nossa própria jazida.",
  },
  {
    step: 2,
    title: "Preparação da matéria-prima",
    description:
      "Beneficiamento e homogeneização da argila para garantir consistência.",
  },
  {
    step: 3,
    title: "Moldagem",
    description:
      "Moldagem automatizada com precisão dimensional em cada unidade.",
  },
  {
    step: 4,
    title: "Secagem",
    description:
      "Secagem controlada em estufas para eliminar umidade de forma uniforme.",
  },
  {
    step: 5,
    title: "Queima controlada",
    description:
      "Queima em fornos com temperatura monitorada para máxima resistência.",
  },
];

export function Process() {
  return (
    <AnimatedSection className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Processo Produtivo"
          subtitle="Da matéria-prima ao produto final, cada etapa é controlada para garantir a melhor qualidade."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-primary via-secondary to-primary/20 md:left-1/2 md:-translate-x-px" />

          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-12 flex items-start gap-8 last:mb-0 md:mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="h-3 w-3 rounded-full bg-secondary ring-4 ring-white"
                />
              </div>

              {/* Content */}
              <div
                className={`ml-12 flex-1 md:ml-0 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <span className="font-heading text-sm font-bold text-secondary">
                  Etapa {String(step.step).padStart(2, "0")}
                </span>
                <h3 className="mt-1 font-heading text-xl font-semibold text-dark">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-dark/60">
                  {step.description}
                </p>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden flex-1 md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
