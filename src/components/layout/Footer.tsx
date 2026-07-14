"use client";

import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
import { Logo } from "@/components/ui/Logo";
import {
  PHONE,
  PHONE_RAW,
  EMAIL,
  ADDRESS,
  NAV_ITEMS,
  SOCIAL_LINKS,
  WHATSAPP_URL,
} from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <Logo variant="light" size="md" />
            </div>
            <p className="text-sm leading-relaxed text-white/50">
              Fabricante de tijolos cerâmicos com mais de 13 anos de tradição.
              Produção própria, qualidade garantida e entrega para toda a região
              metropolitana de Belo Horizonte.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white/40">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-secondary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white/40">
              Contato
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:+${PHONE_RAW}`}
                  className="flex items-start gap-3 text-sm text-white/60 transition-colors hover:text-secondary"
                >
                  <Phone size={18} className="mt-0.5 shrink-0 text-primary" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-start gap-3 text-sm text-white/60 transition-colors hover:text-secondary"
                >
                  <Mail size={18} className="mt-0.5 shrink-0 text-primary" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                <span>
                  {ADDRESS.street}
                  <br />
                  {ADDRESS.district}
                  <br />
                  {ADDRESS.city} - {ADDRESS.state}
                  <br />
                  CEP: {ADDRESS.cep}
                </span>
              </li>
            </ul>
          </div>

          {/* Map & Social */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white/40">
              Redes Sociais
            </h3>
            <div className="mb-6 flex gap-3">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 transition-all hover:bg-primary hover:text-white"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 transition-all hover:bg-primary hover:text-white"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 transition-all hover:bg-primary hover:text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>

            <div className="overflow-hidden rounded-xl">
              <iframe
                title="Localização Cerâmica Leide"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.0!2d-44.576!3d-20.075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSXRhw7puYSAtIE1H!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="160"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale transition-all duration-500 hover:grayscale-0"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/30">
          <p>
            © {currentYear} Cerâmica Leide Ltda. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
