"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
import { WHATSAPP_URL } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const heroStats = [
  { value: 13, label: "anos de mercado" },
  { value: 10_000_000, label: "tijolos produzidos" },
  { value: 500, label: "obras atendidas" },
  { value: 20, label: "cidades atendidas" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${IMAGES.hero}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/70 to-dark/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading text-4xl leading-tight font-bold text-white md:text-6xl lg:text-7xl"
          >
            Tijolos Direto da Fábrica
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl"
          >
            Produção própria, entrega para toda a região e atendimento
            especializado para construtoras e obras de todos os portes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href="#contato" size="lg">
              Solicitar Orçamento
            </Button>
            <Button
              href={WHATSAPP_URL}
              variant="outline"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-20 grid grid-cols-2 gap-x-4 gap-y-10 border-t border-white/10 pt-12 sm:gap-x-6 md:grid-cols-4 md:gap-8"
        >
          {heroStats.map((stat) => (
            <Counter
              key={stat.label}
              value={stat.value}
              label={stat.label}
              light
              compact={stat.value >= 1_000_000}
            />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1.5"
        >
          <div className="h-2 w-1 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
