import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export interface DifferentialItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProductItem {
  id: string;
  name: string;
  dimensions: string;
  minOrder: string;
  features: string[];
  image: string;
  imageAlt: string;
  imagePosition?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface RegionItem {
  name: string;
  x: number;
  y: number;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  height: "tall" | "medium" | "short";
}
