"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Factory, MapPin } from "lucide-react";
import { MAP_REGIONS } from "@/data/regions";

const MetroMap = dynamic(() => import("@/components/ui/MetroMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[380px] items-center justify-center rounded-xl bg-light sm:h-[420px]">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        <span className="text-sm text-dark/40">Carregando mapa...</span>
      </div>
    </div>
  ),
});

export function MinasGeraisMap() {
  const servedCities = MAP_REGIONS.filter((c) => !c.isFactory);

  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-2xl border border-dark/5 bg-light p-4 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-heading text-lg font-semibold text-dark">
              Região Metropolitana de BH
            </h3>
            <p className="text-sm text-dark/50">
              Mapa real com área de cobertura para entregas
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-dark/60">
            <span className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-primary" />
              Cidades atendidas
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-secondary" />
              Nossa fábrica
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-0.5 w-4 border-t-2 border-dashed border-secondary" />
              Rota de entrega
            </span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-dark/5 shadow-sm">
          <MetroMap />
          {/* Overlay sutil nas bordas para integrar ao layout */}
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-dark/5" />
        </div>
      </div>

      {/* City list */}
      <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {servedCities.map((city, index) => (
          <motion.div
            key={city.name}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + index * 0.04 }}
            className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-dark/70 shadow-sm"
          >
            <MapPin size={14} className="shrink-0 text-primary" />
            {city.name}
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-2 rounded-lg border border-secondary/30 bg-secondary/5 px-3 py-2 text-sm font-medium text-secondary"
        >
          <Factory size={14} className="shrink-0" />
          Itaúna — Fábrica
        </motion.div>
      </div>
    </div>
  );
}
