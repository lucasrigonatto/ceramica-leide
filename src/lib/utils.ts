export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("pt-BR").format(value);
}

export function formatCompactNumber(value: number): string {
  if (value >= 1_000_000) {
    const millions = value / 1_000_000;
    return millions % 1 === 0
      ? String(millions)
      : millions.toFixed(1).replace(".", ",");
  }
  if (value >= 1_000) {
    const thousands = value / 1_000;
    return thousands % 1 === 0
      ? String(thousands)
      : thousands.toFixed(1).replace(".", ",");
  }
  return String(value);
}

export function getCompactSuffix(value: number): string {
  if (value >= 1_000_000) return " mi";
  if (value >= 1_000) return " mil";
  return "";
}
