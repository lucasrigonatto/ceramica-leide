export const SITE_NAME = "Cerâmica Leide";
export const SITE_URL = "https://www.ceramicaleide.com.br";
export const PHONE = "(31) 99905-4488";
export const PHONE_RAW = "5531999054488";
export const WHATSAPP_URL = `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento de tijolos.")}`;
export const EMAIL = "contato@ceramicaleide.com.br";

export const ADDRESS = {
  street: "São José de Pedras nº 970",
  district: "Zona Rural",
  city: "Itaúna",
  state: "MG",
  cep: "35680-970",
  full: "São José de Pedras nº 970, Zona Rural, Itaúna - MG",
};

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/ceramicaleide",
  facebook: "https://facebook.com/ceramicaleide",
  whatsapp: WHATSAPP_URL,
};

export const NAV_ITEMS = [
  { label: "Início", href: "#inicio" },
  { label: "Produtos", href: "#produtos" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Regiões Atendidas", href: "#regioes" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
] as const;
