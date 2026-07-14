import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Necessário para hospedagem compartilhada Hostinger (HTML/CSS/JS estático)
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
