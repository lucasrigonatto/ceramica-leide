"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MinasGeraisMap } from "@/components/ui/MinasGeraisMap";

export function Regions() {
  return (
    <AnimatedSection id="regioes" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Regiões Atendidas"
          subtitle="Entregamos tijolos cerâmicos para toda a região metropolitana de Belo Horizonte e cidades vizinhas."
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <MinasGeraisMap />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-dark/5 bg-light p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <MapPin size={20} className="text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-dark">
                  Sede — Itaúna, MG
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-dark/60">
                Nossa fábrica está localizada na Zona Rural de Itaúna, estrategicamente
                posicionada para atender toda a região metropolitana de Belo Horizonte
                com entregas rápidas e programadas.
              </p>
            </div>

            <div className="rounded-2xl border border-dark/5 bg-light p-8">
              <h3 className="font-heading text-lg font-semibold text-dark">
                Cobertura de entrega
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-dark/60">
                Atendemos construtoras e obras em Belo Horizonte, Contagem, Betim,
                Nova Lima, Lagoa Santa, Vespasiano, Ribeirão das Neves, Santa Luzia,
                Sabará e diversas outras cidades da região. Consulte-nos para
                verificar disponibilidade na sua localidade.
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-primary/5 p-6">
              <div className="flex h-3 w-3 animate-pulse rounded-full bg-secondary" />
              <p className="text-sm font-medium text-dark/70">
                Entregas exclusivamente em{" "}
                <span className="font-semibold text-primary">
                  caminhão fechado
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
