import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "robohash.org",
      },
    ],
  },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
  },
};

export default nextConfig;
