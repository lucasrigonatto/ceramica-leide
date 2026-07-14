"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { products } from "@/data/products";

export function Products() {
  return (
    <AnimatedSection id="produtos" className="bg-light py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Nossos Produtos"
          subtitle="Tijolos cerâmicos de alta qualidade para alvenaria estrutural e vedação."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -3 }}
              className="group flex overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="relative min-h-[160px] w-[130px] shrink-0 self-stretch sm:w-[150px]">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{
                    objectPosition: product.imagePosition ?? "center",
                  }}
                  sizes="150px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark/10" />
              </div>

              <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
                <div>
                  <h3 className="font-heading text-lg font-bold text-dark sm:text-xl">
                    {product.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-dark/50">
                    {product.dimensions}
                  </p>
                  <span className="mt-2 inline-block rounded-full bg-secondary/10 px-2.5 py-0.5 text-[11px] font-medium text-secondary">
                    {product.minOrder}
                  </span>
                </div>

                <ul className="mt-3 space-y-1.5">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-xs text-dark/65 sm:text-sm"
                    >
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check size={10} className="text-primary" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-4">
                  <Button href="#contato" size="sm">
                    Solicitar Orçamento
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
