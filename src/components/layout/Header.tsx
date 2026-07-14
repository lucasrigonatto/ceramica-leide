"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const scrollToSection = useCallback((href: string) => {
    setIsMobileOpen(false);

    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/95 shadow-sm shadow-dark/5 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#inicio");
          }}
          className="group"
        >
          <Logo
            variant={isScrolled ? "dark" : "light"}
            size="sm"
            showText
            className="hidden sm:flex"
          />
          <Logo
            variant={isScrolled ? "dark" : "light"}
            size="sm"
            showText={false}
            className="sm:hidden"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors duration-300 hover:text-primary",
                isScrolled ? "text-dark/70" : "text-white/80 hover:text-white"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            href="#contato"
            size="sm"
            variant={isScrolled ? "primary" : "white"}
          >
            Solicitar Orçamento
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={cn(
            "rounded-lg p-2 transition-colors lg:hidden",
            isScrolled ? "text-dark" : "text-white"
          )}
          aria-label={isMobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-dark/5 bg-white lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-dark/70 transition-colors hover:bg-light hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-4 px-4">
                <Button
                  href="#contato"
                  className="w-full"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#contato");
                  }}
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
