"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: { icon: 36, name: "text-[15px]", tag: "text-[9px]" },
  md: { icon: 42, name: "text-[17px]", tag: "text-[10px]" },
  lg: { icon: 52, name: "text-[21px]", tag: "text-[11px]" },
};

function LogoMark({ size, variant }: { size: number; variant: "light" | "dark" }) {
  const brick = "#A64B2A";
  const brickDark = "#8F3D22";
  const brickLight = "#C45E3A";
  const bg = variant === "light" ? "rgba(255,255,255,0.15)" : "#F8F8F8";
  const border = variant === "light" ? "rgba(255,255,255,0.25)" : "rgba(166,75,42,0.15)";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <rect width="48" height="48" rx="10" fill={bg} stroke={border} strokeWidth="1" />
      <rect x="7" y="9" width="15" height="7" rx="1.5" fill={brickLight} />
      <rect x="26" y="9" width="15" height="7" rx="1.5" fill={brick} />
      <rect x="7" y="20" width="7" height="7" rx="1.5" fill={brick} />
      <rect x="17" y="20" width="15" height="7" rx="1.5" fill={brickDark} />
      <rect x="35" y="20" width="6" height="7" rx="1.5" fill={brickLight} />
      <rect x="7" y="31" width="15" height="7" rx="1.5" fill={brickLight} />
      <rect x="26" y="31" width="15" height="7" rx="1.5" fill={brick} />
    </svg>
  );
}

function LogoWordmark({
  variant,
  name,
  tag,
}: {
  variant: "light" | "dark";
  name: string;
  tag: string;
}) {
  const isLight = variant === "light";

  return (
    <div className="flex flex-col justify-center">
      <div className={cn("font-heading leading-none tracking-tight", name)}>
        <span className={cn("font-normal", isLight ? "text-white/90" : "text-dark/70")}>
          Cerâmica{" "}
        </span>
        <span className={cn("font-bold", isLight ? "text-white" : "text-dark")}>
          Leide
        </span>
      </div>
      <div
        className={cn(
          "mt-1.5 h-[2px] w-full max-w-[120px] rounded-full",
          isLight ? "bg-secondary" : "bg-primary"
        )}
      />
      <span
        className={cn(
          "mt-1.5 font-medium tracking-widest uppercase",
          tag,
          isLight ? "text-white/55" : "text-dark/40"
        )}
      >
        Tijolos cerâmicos
      </span>
    </div>
  );
}

export function Logo({
  variant = "light",
  showText = true,
  size = "md",
  className,
}: LogoProps) {
  const s = sizes[size];

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <LogoMark size={s.icon} variant={variant} />
      {showText && (
        <LogoWordmark variant={variant} name={s.name} tag={s.tag} />
      )}
    </div>
  );
}
