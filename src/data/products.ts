import type { ProductItem } from "@/types";
import { IMAGES } from "@/lib/images";

export const products: ProductItem[] = [
  {
    id: "tijolo-8-furos",
    name: "Tijolo 8 Furos",
    dimensions: "9×19×29 cm",
    minOrder: "Mínimo 5.000 unidades",
    features: [
      "Ideal para alvenaria",
      "Alta resistência",
      "Excelente rendimento",
    ],
    image: IMAGES.produtos.tijolo8Furos,
    imageAlt: "Tijolo cerâmico 8 furos Cerâmica Leide",
    imagePosition: "38% center",
  },
  {
    id: "tijolo-12-furos",
    name: "Tijolo 12 Furos",
    dimensions: "14×19×29 cm",
    minOrder: "Mínimo 3.500 unidades",
    features: [
      "Obras maiores",
      "Melhor isolamento",
      "Alta produtividade",
    ],
    image: IMAGES.produtos.tijolo12Furos,
    imageAlt: "Tijolo cerâmico 12 furos Cerâmica Leide",
  },
  {
    id: "tijolo-16-furos",
    name: "Tijolo 16 Furos",
    dimensions: "19×19×29 cm",
    minOrder: "Mínimo 2.200 unidades",
    features: [
      "Maior isolamento térmico",
      "Alta resistência estrutural",
      "Ideal para grandes obras",
    ],
    image: IMAGES.produtos.tijolo16Furos,
    imageAlt: "Tijolo cerâmico 16 furos Cerâmica Leide",
    imagePosition: "center",
  },
];
