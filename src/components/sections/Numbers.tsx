"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Counter } from "@/components/ui/Counter";

const stats = [
  { value: 13, label: "anos de experiência" },
  { value: 500, label: "clientes atendidos" },
  { value: 20, label: "cidades atendidas" },
  { value: 10000000, label: "tijolos produzidos" },
];

export function Numbers() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-dark py-24 md:py-32">
      {/* Parallax background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-10"
      >
        <div
          className="h-[120%] w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80')",
          }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Números que comprovam nossa solidez
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/50">
            Mais de uma década construindo confiança com qualidade e compromisso.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-8">
          {stats.map((stat) => (
            <Counter
              key={stat.label}
              value={stat.value}
              label={stat.label}
              light
              compact={stat.value >= 1_000_000}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
