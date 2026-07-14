"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "white";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"a">, "ref"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25",
  secondary:
    "bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/25",
  outline:
    "border-2 border-white/80 text-white hover:bg-white hover:text-dark",
  ghost: "text-dark hover:bg-light",
  white: "bg-white text-dark hover:bg-light shadow-lg",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base font-semibold",
};

export function Button({
  variant = "primary",
  size = "md",
  href = "#contato",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-300",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.a>
  );
}
