"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('${IMAGES.cta}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/80 to-primary/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-heading text-3xl font-bold text-white md:text-5xl lg:text-6xl"
        >
          Sua obra merece qualidade desde o primeiro tijolo.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-6 max-w-xl text-lg text-white/60"
        >
          Solicite seu orçamento agora e receba atendimento personalizado da nossa
          equipe comercial.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="#contato" size="lg" variant="primary">
            Solicitar Orçamento Agora
          </Button>
          <Button
            href={WHATSAPP_URL}
            size="lg"
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={20} />
            WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
