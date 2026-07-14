"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryImages } from "@/data/gallery";

const heightClasses = {
  tall: "row-span-2 h-80",
  medium: "h-48",
  short: "h-36",
};

export function Structure() {
  return (
    <AnimatedSection id="estrutura" className="bg-light py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div id="sobre">
            <SectionHeading
              title="Nossa Estrutura"
              align="left"
              className="mb-8"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-dark/70"
            >
              <p className="text-lg leading-relaxed">
                Somos especializados na fabricação de tijolos cerâmicos para
                construção civil, atendendo construtoras e obras em toda a
                região.
              </p>
              <p className="leading-relaxed">
                Localizada em Itaúna, Minas Gerais, nossa fábrica conta com
                infraestrutura moderna, jazida própria de argila e capacidade
                produtiva para grandes volumes. Investimos continuamente em
                tecnologia e qualidade para entregar o melhor produto ao mercado.
              </p>
              <p className="leading-relaxed">
                Com mais de 13 anos de experiência, somos referência em tijolos
                cerâmicos na região metropolitana de Belo Horizonte, atendendo
                exclusivamente em caminhão fechado com entrega programada.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex gap-8"
            >
              {[
                { value: "5.000+", label: "m² de área fabril" },
                { value: "+13", label: "anos de tradição" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="font-heading text-3xl font-bold text-primary">
                    {item.value}
                  </div>
                  <div className="mt-1 text-sm text-dark/50">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="columns-2 gap-4 space-y-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl"
              >
                <div
                  className={`relative w-full overflow-hidden ${heightClasses[image.height]}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
