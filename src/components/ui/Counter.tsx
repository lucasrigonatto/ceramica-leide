"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCounter } from "@/hooks/useCounter";
import {
  formatNumber,
  formatCompactNumber,
  getCompactSuffix,
} from "@/lib/utils";

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  light?: boolean;
  compact?: boolean;
}

export function Counter({
  value,
  prefix = "+",
  suffix = "",
  label,
  light = false,
  compact = false,
}: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCounter({ end: value, enabled: isInView });

  const useCompact = compact || value >= 1_000_000;
  const displayValue = useCompact
    ? formatCompactNumber(count)
    : formatNumber(count);
  const displaySuffix = useCompact ? getCompactSuffix(value) + suffix : suffix;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="min-w-0 px-2 text-center"
    >
      <div
        className={`font-heading text-3xl font-bold tracking-tight whitespace-nowrap sm:text-4xl md:text-5xl ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {prefix}
        {displayValue}
        {displaySuffix}
      </div>
      <p
        className={`mt-2 text-xs font-medium tracking-wider uppercase sm:text-sm ${
          light ? "text-white/60" : "text-dark/50"
        }`}
      >
        {label}
      </p>
    </motion.div>
  );
}
