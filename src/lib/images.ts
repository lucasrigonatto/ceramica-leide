/**
 * Caminhos das imagens do site.
 * Coloque os arquivos reais em public/images/ conforme a estrutura de pastas.
 */
export const IMAGES = {
  hero: "/images/hero/fachada-fabrica.jpg",
  cta: "/images/hero/cta-fabrica.jpg",
  produtos: {
    tijolo8Furos: "/images/produtos/tijolo-8-furos.jpg",
    tijolo12Furos: "/images/produtos/tijolo-12-furos.jpg",
    tijolo16Furos: "/images/produtos/tijolo-16-furos.png",
  },
  galeria: {
    fabrica1: "/images/galeria/fabrica-01.jpg",
    fabrica2: "/images/galeria/fabrica-02.jpg",
    fabrica3: "/images/galeria/fabrica-03.jpg",
    fabrica4: "/images/galeria/fabrica-04.jpg",
    fabrica5: "/images/galeria/fabrica-05.jpg",
    fabrica6: "/images/galeria/fabrica-06.jpg",
  },
} as const;

/** Fallbacks temporários até as fotos reais serem adicionadas */
export const IMAGE_FALLBACKS = {
  hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
  cta: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80",
  produtos: {
    tijolo8Furos:
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
    tijolo12Furos:
      "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
} as const;
