import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permite carregar imagens do OpenWeatherMap (ícones do clima)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "openweathermap.org",
      },
    ],
  },
};

export default nextConfig;
