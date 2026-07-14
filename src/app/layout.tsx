import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_NAME, SITE_URL, PHONE, ADDRESS } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Tijolos Cerâmicos Direto da Fábrica — Itaúna, MG`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Fabricante de tijolos cerâmicos em Itaúna, MG. Tijolo 8, 12 e 16 furos com entrega para toda região metropolitana de Belo Horizonte. Atendimento para construtoras e obras.",
  keywords: [
    "tijolos cerâmicos",
    "fábrica de tijolos",
    "tijolo 8 furos",
    "tijolo 12 furos",
    "tijolo 16 furos",
    "tijolos BH",
    "cerâmica Itaúna",
    "tijolos atacado",
    "Cerâmica Leide",
    "tijolos Belo Horizonte",
    "carga fechada tijolos",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Tijolos Cerâmicos Direto da Fábrica`,
    description:
      "Produção própria de tijolos cerâmicos com entrega para toda região de BH. Atendimento especializado para construtoras.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cerâmica Leide - Fábrica de Tijolos Cerâmicos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Tijolos Cerâmicos Direto da Fábrica`,
    description:
      "Fabricante de tijolos cerâmicos em Itaúna, MG. Entrega para toda região metropolitana de BH.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  description:
    "Fabricante de tijolos cerâmicos para construção civil em Itaúna, MG.",
  url: SITE_URL,
  telephone: PHONE,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.state,
    postalCode: ADDRESS.cep,
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -20.075,
    longitude: -44.576,
  },
  areaServed: [
    "Belo Horizonte",
    "Contagem",
    "Betim",
    "Nova Lima",
    "Itaúna",
  ],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white font-sans text-dark antialiased">
        <LoadingScreen />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
